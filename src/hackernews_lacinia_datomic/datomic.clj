(ns hackernews-lacinia-datomic.datomic
  (:require [datomic.client.api :as d]
            [clojure.set :as clj-set]
            [java-time :as jt])
  (:import (java.util UUID)))

(defn- create-db-con [con]
  (d/db con))
; contains? url filter
(def get-links
  '[:find ?id ?url ?description ?createdAt ?order ?postedby
    :keys id url description createdAt order postedBy
    :in $ ?filter ?skip ?skip-plus-first
    :where
    [?e :link/id ?id]
    [?e :link/url ?url]
    [?e :link/description ?description]
    [?e :link/createdat ?createdAt]
    [?e :link/postedby ?e2]
    [?e2 :user/name ?postedby]
    [?e :link/order ?order]
    [(> ?order ?skip)]
    [(<= ?order ?skip-plus-first)]
    ])

(def get-each-link-vote-count
  '[:find (count ?votes)
    :in $ ?id
    :where
    [?e :link/id ?id]
    [?votes :vote/link ?e]])

(def check-if-user-already-voted-post
  '[:find (count ?votes)
    :in $ ?post-id ?user-email
    :where
    [?e1 :user/email ?user-email]
    [?e2 :link/id ?post-id]
    [?votes :vote/user ?e1]
    [?votes :vote/link ?e2]])

(def get-vote-id-entity-retract
  '[:find ?vote-id
    :in $ ?post-id ?user-email
    :where
    [?e1 :user/email ?user-email]
    [?e2 :link/id ?post-id]
    [?votes :vote/user ?e1]
    [?votes :vote/link ?e2]
    [?votes :vote/id ?vote-id]])

(def get-pwd-by-email
  '[:find ?pwd
    :in $ ?email
    :where
    [?e :user/email ?email]
    [?e :user/pwd ?pwd]])

(def get-link-by-id
  '[:find ?e ?createdAt ?description ?postedBy ?url ?order ?postedby
    :keys id createdAt description postedBy url order postedby
    :in $ ?order
    :where
    [?e :link/order ?order]
    [?e :link/createdat ?createdAt]
    [?e :link/description ?description]
    [?e :link/postedby ?postedBy]
    [?e :link/url ?url]
    [?e :link/postedby ?e2]
    [?e2 :user/email ?postedby]])

(def get-user-info-by-user-email
  '[:find ?e ?name ?email
    :keys id name email
    :in $ ?email
    :where
    [?e :user/email ?email]
    [?e :user/name ?name]])

(def get-vote-from-link-id
  '[:find (count ?vote)
    :in $ ?link-id
    :where [?vote :vote/link [:link/id ?link-id]]])

(def get-auth-from-user-id
  '[:find ?auth
    :in $ ?user-id
    :where [?user-id :auth/token ?auth]])

(def get-links-from-user-id
  '[:find ?links
    :in $ ?user-id
    :where [?user-id :link/postedby ?links]])

(def post-user-info-by-post-id
  '[:find ?email
    :in $ ?link-id
    :where
    [?e :link/id ?link-id]
    [?e :link/postedby ?e2]
    [?e2 :user/email ?email]])

(defn- link-vector [v]
  (loop [i 0
         linked []]
    (if (< i (count v))
      (recur (inc i) (conj linked {:count (inc i) :links (nth v i)}))
      linked)))

(defn- get-votes [db post-id]
  (let [votes (ffirst (d/q get-each-link-vote-count db post-id))
        non-null (if (nil? votes)
                   0
                   votes)]
    {:votes non-null}))

(defn- add-votes-item [db result]
  (loop [i 0
         counted []]
    (if (< i (count result))
      (recur (inc i) (conj counted (conj (nth result i) (get-votes db (:id (nth result i))))))
      counted)))

(defn get-feed
  [con args]
  (let [db (create-db-con con)
        {filter   :filter
         skip     :skip
         first    :first
         order-by :orderby} args
        filter-c (if (nil? filter) "*" filter)
        skip-c (if (nil? skip) 0 skip)
        first-c (if (nil? first) 10 first)
        result (d/q get-links db filter-c skip-c (+ first-c skip-c))
        result-with-votes (add-votes-item db result)
        result-counted (link-vector result-with-votes)]
    result-counted))

(defn get-link
  [con args]
  (let [db (create-db-con con)
        {id :id} args
        parsed-id (Integer. id)
        link (first (d/q get-link-by-id db parsed-id))
        vote-count [d/q get-each-link-vote-count db (:id link)]]
    (if (empty? vote-count)
      (conj link {:link/votes 0})
      (conj link {:link/votes (first vote-count)}))))

(defn delete-link
  [con post-id]
  (let [uuid (UUID/fromString post-id)]
    (d/transact con {:tx-data [[:db.fn/retractEntity [:link/id uuid]]]})))

(defn update-link
  [con args]
  (let [{id          :id
         url         :url
         description :description} args
        {result :db-after} (d/transact con {:tx-data [[:db/add id :link/url url]
                                                      [:db/add id :link/description description]]})]
    (get-link result id)))

(defn max-order
  [con]
  (let [db (create-db-con con)]
    (d/q '[:find (max ?order)
           :where [_ :link/order ?order]] db)))

(defn get-post-user-time
  [con user-id time link]
  (let [db (create-db-con con)]
    (d/q '[:find ?post-id
           :where [?post-id :link/postedby user-id
                   ?post-id :link/createdat time
                   ?post-id :link/url link] db])))

(defn post-link
  [con user-email url description]
  (let [order (+ (ffirst (max-order con)) 1)
        now (jt/java-date)
        uuid (UUID/randomUUID)
        request (d/transact con {:tx-data [{:link/id          uuid
                                            :link/description description
                                            :link/url         url
                                            :link/order       order
                                            :link/postedby    [:user/email user-email]
                                            :link/createdat   now
                                            }]})
        result (d/pull (:db-after request) '[:link/id :link/description :link/url :link/order :link/postedby :link/createdat :link/votes] [:link/id uuid])
        format (clj-set/rename-keys result {:link/id :id :link/description :description :link/url :url :link/order :order :link/postedby :postedBy :link/createdat :createdat})
        votes {:votes 0}
        posted-by {:postedBy (first (d/q get-user-info-by-user-email (:db-after request) user-email))}]
    (conj format votes posted-by)))

(defn user-id-by-email
  [con email]
  (let [db (create-db-con con)
        result (d/q '[:find ?e
                      :in $ ?mail
                      :where [?e :user/email ?mail]] db email)]
    (if (empty? result)
      -1
      (get-in result [0 0]))))

(defn signup
  [con email enc-pwd name]
  (d/transact con {:tx-data [{:user/id    (UUID/randomUUID)
                              :user/name  name
                              :user/email email
                              :user/pwd   enc-pwd}]}))

(defn login-register
  [user-id token con]
  (d/transact con {:tx-data [[:db/add user-id :auth/token token]]}))

(defn get-user-from-link [con value]
  (let [db (create-db-con con)
        {id :postedby} value
        f-r (d/q get-user-info-by-user-email db id)]
    (first f-r)))

(defn get-vote-from-link [con value]
  (let [db (create-db-con con)
        {id :id} value
        votes (d/q get-vote-from-link-id db id)]
    (if-not (empty? votes)
      votes
      0)))

(defn get-auth-from-user [con value]
  (let [db (create-db-con con)
        {id :id} value]
    (d/q get-auth-from-user-id db id)))

(defn get-link-from-user [con value]
  (let [db (create-db-con con)
        {id :id} value]
    (d/q get-links-from-user-id db id)))

(defn get-user-from-vote-id [con vote-id]
  (let [db (create-db-con con)]
    (d/q '[:find ?user-id
           :where [?e :vote/id vote-id]
           [?user-id :vote/user ?e]] db)))

(defn get-user-from-vote [con value]
  (let [db (create-db-con con)
        {id :id} value]
    (d/q get-user-from-vote-id db id)))

(defn get-link-from-vote-id [con vote-id]
  (let [db (create-db-con con)]
    (d/q '[:find ?user-id
           :where [?e :vote/id vote-id]
           [?user-id :vote/link ?e]] db)))

(defn get-link-from-vote [con value]
  (let [db (create-db-con con)
        {id :id} value]
    (d/q get-link-from-vote-id db id)))

(defn get-user-pwd [con value]
  (let [db (create-db-con con)]
    (ffirst (d/q get-pwd-by-email db value))))

(defn get-user-info-auth [con value]
  (let [db (create-db-con con)
        pull (d/q get-user-info-by-user-email db value)]
    {:user (first pull)}))

(defn non-registered-mail [con value]
  (let [db (create-db-con con)
        pull (ffirst (d/q get-pwd-by-email db value))]
    (if (nil? pull)
      true
      false)))

(defn get-post-user-info-by-id [con post-id]
  (let [db (create-db-con con)]
    (ffirst (d/q post-user-info-by-post-id db (UUID/fromString post-id)))))

(defn post-id-user-already-voted [con post-id user-email]
  (let [db (create-db-con con)
        votes (ffirst (d/q check-if-user-already-voted-post db (UUID/fromString post-id) user-email))]
    (if (or (= 0 votes) (nil? votes))
      false
      true)))

(defn- count-votes-post-after [db post-id]
  (ffirst (d/q get-each-link-vote-count db post-id)))

(defn post-id-remove-vote [con post-id user-email]
  (let [db (create-db-con con)
        uuid (UUID/fromString post-id)
        vote-id (ffirst (d/q get-vote-id-entity-retract db uuid user-email))
        {result :db-after} (d/transact con {:tx-data [[:db.fn/retractEntity [:vote/id vote-id]]]})]
    (prn "votez" vote-id)
    (count-votes-post-after result uuid)))

(defn post-id-add-vote [con post-id user-email]
  (let [uuid (UUID/fromString post-id)
        {result :db-after} (d/transact con {:tx-data [{:vote/id   (UUID/randomUUID)
                                                       :vote/user [:user/email user-email]
                                                       :vote/link [:link/id uuid]}]})]
    (count-votes-post-after result uuid)))
