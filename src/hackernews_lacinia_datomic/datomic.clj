(ns hackernews-lacinia-datomic.datomic
  (:require [datomic.client.api :as d]
            [java-time :as jt]))

(defn- create-db-con [con]
  (d/db con))
; contains? url filter
(def get-links
  '[:find ?e ?url ?description ?createdat ?order ?postedby
    :keys id url description createdat order postedby
    :in $ ?filter ?skip ?skip-plus-first
    :where
    [?e :link/url ?url]
    [?e :link/description ?description]
    [?e :link/createdat ?createdat]
    [?e :link/postedby ?e2]
    [?e :link/order ?order]
    [?e2 :user/name ?postedby]
    [(> ?order ?skip)]
    [(<= ?order ?skip-plus-first)]])

(def get-each-link-vote-count
  '[:find (count ?votes)
    :in $ ?id
    :where [?votes :vote/link ?id]])

(def get-link-by-id
  '[:find ?e ?createdAt ?description ?postedBy ?url ?order
    :keys id createdAt description postedBy url order
    :in $ ?order
    :where
    [?e :link/order ?order]
    [?e :link/createdat ?createdAt]
    [?e :link/description ?description]
    [?e :link/postedby ?postedBy]
    [?e :link/url ?url]])

(def get-user-from-link-id
  '[:find ?user-id
    :keys id
    :in $ ?link-id
    :where [?link-id :link/postedby ?posted-by]
    [?posted-by :user/id ?user-id]])

(def get-vote-from-link-id
  '[:find (count ?vote)
    :in $ ?link-id
    :where [?link-id :vote/link ?vote]])

(def get-auth-from-user-id
  '[:find ?auth
    :in $ ?user-id
    :where [?user-id :auth/token ?auth]])

(def get-links-from-user-id
  '[:find ?links
    :in $ ?user-id
    :where [?user-id :link/postedby ?links]])

(defn get-feed
  [con args]
  (let [db (create-db-con con)
        {filter   :filter
         skip     :skip
         first    :first
         order-by :orderby} args
        ]
    (d/q get-links db filter skip (+ first skip))))

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
  [con args]
  (let [{id :id} args
        {result :db-before} (d/transact con {:tx-data [[:db/retractEntity id]]})]
    (get-link result id)))

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
    (get-in (d/q '[:find (max ?order)
                   :where [_ :link/order ?order]] db) [0 0])))

(defn get-post-user-time
  [con user-id time link]
  (let [db (create-db-con con)]
    (d/q '[:find ?post-id
           :where [?post-id :link/postedby user-id
                   ?post-id :link/createdat time
                   ?post-id :link/url link] db])))

(defn post
  [args user-id con]
  (let [db (create-db-con con)
        {url         :url
         description :description} args
        order (+ (max-order db) 1)
        now (jt/java-date)
        {after :db-after} (d/transact db {:tx-data [{:link/description description
                                                     :link/url         url
                                                     :link/order       order
                                                     :link/postedby    user-id
                                                     :link/createdat   now
                                                     }]})
        post-id (get-post-user-time after user-id now url)]
    (get-link after post-id)))

(defn user-id-by-email
  [con email]
  (let [db (create-db-con con)
        result (d/q '[:find ?e
                      :in $ ?mail
                      :where [?e :user/email ?mail]] db email)]
    (if (empty? result)
      -1
      (get-in result [0 0]))))

;'hashers/derive
(defn signup
  [args con]
  (let [{name     :name
         email    :email
         password :password} args
        hashed (password)
        {result :db-after} (d/transact con {:tx-data [{:user/name  name
                                                       :user/email email
                                                       :user/pwd   hashed}]})
        user-id (user-id-by-email result email)]
    (d/transact con {:tx-data [{:auth/token ""
                                :auth/user  user-id}]})))

(defn login-register
  [user-id token con]
  (d/transact con {:tx-data [[:db/add user-id :auth/token token]]}))

(defn get-user-from-link [con value]
  (let [db (create-db-con con)
        {id :id} value]
    (d/q get-user-from-link-id db id)))

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

