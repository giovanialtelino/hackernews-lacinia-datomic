(ns hackernews-lacinia-datomic.datomic
  (:require [datomic.client.api :as d]
            [clojure.set :as clj-set]
            [java-time :as jt])
  (:import (java.util UUID)))

(defn- create-db-con [con]
  (d/db con))

(def get-links
  '[:find ?id ?url ?description ?order ?postedby ?createdAt
    :keys id url description order postedBy createdAt
    :in $ ?skip ?skip-plus-first
    :where
    [?e :link/id ?id]
    [?e :link/url ?url]
    [?e :link/description ?description]
    [?e :link/createdat ?createdAt]
    [?e :link/postedby ?e2]
    [?e2 :user/name ?postedby]
    [?e :link/order ?order]
    [(> ?order ?skip)]
    [(<= ?order ?skip-plus-first)]])

(def get-each-link-vote-count
  '[:find (count ?votes)
    :in $ ?id
    :where
    [?e :link/id ?id]
    [?votes :vote/link ?e]])

(defn get-each-link-vote-count-non-zero [db post-id]
  (let [post-votes (ffirst (d/q get-each-link-vote-count db post-id))
        non-null (if (nil? post-votes)
                   0
                   post-votes)]
    non-null))

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

(def get-pwd-by-name
  '[:find ?pwd
    :in $ ?name
    :where
    [?e :user/name ?name]
    [?e :user/pwd ?pwd]])

(def get-link-by-id
  '[:find ?e ?createdAt ?description ?postedBy ?url ?order ?postedby
    :keys id createdAt description postedBy url order postedby
    :in $ ?id
    :where
    [?e :link/id ?id]
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

(def post-user-info-by-post-id
  '[:find ?email
    :in $ ?link-id
    :where
    [?e :link/id ?link-id]
    [?e :link/postedby ?e2]
    [?e2 :user/email ?email]])

(defn- get-votes [db post-id]
  (let [votes (get-each-link-vote-count-non-zero db post-id)]
    {:votes votes}))

(defn- add-votes-item [db result]
  (loop [i 0
         counted []]
    (if (< i (count result))
      (recur (inc i) (conj counted (conj (nth result i) (get-votes db (:id (nth result i))))))
      counted)))

(defn get-feed
  [con skip first order-by]
  (let [db (create-db-con con)
        result (d/q get-links db skip (+ first skip))
        result-with-votes (add-votes-item db result)]
    (sort-by order-by #(compare %2 %1) result-with-votes)))

(defn get-link
  [con id]
  (let [db (create-db-con con)
        uuid (UUID/fromString id)
        link (first (d/q get-link-by-id db uuid))
        vote-count (get-each-link-vote-count-non-zero db uuid)]
    (conj link {:votes vote-count})))

(defn delete-link
  [con post-id]
  (let [uuid (UUID/fromString post-id)]
    (d/transact con {:tx-data [[:db.fn/retractEntity [:link/id uuid]]]})))

(defn update-link
  [con id description url]
  (let [uuid (UUID/fromString id)
        {result :db-after} (d/transact con {:tx-data [[:db/add [:link/id uuid] :link/url url]
                                                      [:db/add [:link/id uuid] :link/description description]]})]
    (first (d/q get-link-by-id result uuid))))

(defn max-order
  [con]
  (let [db (create-db-con con)]
    (d/q '[:find (max ?order)
           :where [_ :link/order ?order]] db)))

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

(defn signup
  [con email enc-pwd name]
  (d/transact con {:tx-data [{:user/id    (UUID/randomUUID)
                              :user/name  name
                              :user/email email
                              :user/pwd   enc-pwd}]}))

(defn get-user-pwd [con value]
  (let [db (create-db-con con)]
    (ffirst (d/q get-pwd-by-email db value))))

(defn get-user-info-auth [con value]
  (let [db (create-db-con con)
        pull (d/q get-user-info-by-user-email db value)]
    (first pull)))

(defn non-registered-mail [con value]
  (let [db (create-db-con con)
        pull (ffirst (d/q get-pwd-by-email db value))]
    (if (nil? pull)
      true
      false)))

(defn non-registered-name [con value]
  (let [db (create-db-con con)
        pull (ffirst (d/q get-pwd-by-name db value))]
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

(defn post-id-remove-vote [con post-id user-email]
  (let [db (create-db-con con)
        uuid (UUID/fromString post-id)
        vote-id (ffirst (d/q get-vote-id-entity-retract db uuid user-email))
        {result :db-after} (d/transact con {:tx-data [[:db.fn/retractEntity [:vote/id vote-id]]]})]
    (get-each-link-vote-count-non-zero result uuid)))

(defn post-id-add-vote [con post-id user-email]
  (let [uuid (UUID/fromString post-id)
        {result :db-after} (d/transact con {:tx-data [{:vote/id   (UUID/randomUUID)
                                                       :vote/user [:user/email user-email]
                                                       :vote/link [:link/id uuid]}]})]
    (get-each-link-vote-count-non-zero result uuid)))
