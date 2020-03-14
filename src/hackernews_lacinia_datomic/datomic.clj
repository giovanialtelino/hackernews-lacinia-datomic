(ns hackernews-lacinia-datomic.datomic
  (:require [datomic.client.api :as d])
  (:import java.util.Date))

(def get-links
  '[:find ?e ?url ?description ?createdat ?order ?postedby
    :keys id url description createdat order postedby
    :in $ ?filter ?skip ?skip-plus-first
    :where [?e :link/url ?url]
    [?e :link/description ?description]
    [?e :link/createdat ?createdat]
    [?e :link/postedby ?e2]
    [?e :link/order ?order]
    [?e2 :user/name ?postedby]
    [(.contains ?url ?filter)]
    [(> ?order ?skip)]
    [(<= ?order ?skip-plus-first)]])

(def get-each-link-vote-count
  '[:find (count ?votes)
    :in $ ?id
    :where [?votes :vote/link ?id]])

(def get-user-from-link-id
  '[:find ?user-id
    :keys :id
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
  [db args]
  (let [{filter   :filter
         skip     :skip
         first    :first
         order-by :orderby} args
        links (d/q get-links db filter skip (+ first skip))]
    links))

(defn get-link
  [db args]
  (let [{id :id} args
        link (d/pull db '[*] id)
        vote-count (d/q get-each-link-vote-count db id)]
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
  [db]
  (get-in (d/q '[:find (max ?order)
                 :where [_ :link/order ?order]] db) [0 0]))

(defn get-post-user-time
  [db user-id time link]
  (d/q '[:find ?post-id
         :where [?post-id :link/postedby user-id
                 ?post-id :link/createdat time
                 ?post-id :link/url link] db]))

(defn post
  [args user-id con db]
  (let [{url         :url
         description :description} args
        order (+ (max-order db) 1)
        now (java.util.Date.)
        {after :db-after} (d/transact con {:tx-data [{:link/description description
                                                      :link/url         url
                                                      :link/order       order
                                                      :link/postedby    user-id
                                                      :link/createdat   now
                                                      }]})
        post-id (get-post-user-time after user-id now url)]
    (get-link after post-id)))

(defn user-id-by-email
  [db email]
  (let [result (d/q '[:find ?e
                      :in $ ?mail
                      :where [?e :user/email ?mail]] db email)]
    (if (empty? result)
      -1
      (get-in result [0 0]))))

'hashers/derive
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

(defn get-user-from-link [db value]
  (let [{id :id} value]
    (d/q get-user-from-link-id db id)))

(defn get-vote-from-link [db value]
  (let [{id :id} value
        votes (d/q get-vote-from-link-id db id)]
    (if-not (empty? votes)
      votes
      0)))

(defn get-auth-from-user [db value]
  (let [{id :id} value]
    (d/q get-auth-from-user-id db id)))

(defn get-link-from-user [db value]
  (let [{id :id} value]
    (d/q get-links-from-user-id db id)))

(defn get-user-from-vote-id [db vote-id]
  (d/q '[:find ?user-id
         :where [?e :vote/id vote-id]
         [?user-id :vote/user ?e]] db))

(defn get-user-from-vote [db value]
  (let [{id :id} value]
    (d/q get-user-from-vote-id db id)))

(defn get-link-from-vote-id [db vote-id]
  (d/q '[:find ?user-id
         :where [?e :vote/id vote-id]
         [?user-id :vote/link ?e]] db))

(defn get-link-from-vote [db value]
  (let [{id :id} value]
    (d/q get-link-from-vote-id db id)))

