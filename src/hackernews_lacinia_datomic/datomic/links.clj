(ns hackernews-lacinia-datomic.datomic.links
  (:require [datomic.client.api :as d]
            [buddy.hashers :as hashers]
            [hackernews-lacinia-datomic.datomic.datomic-conn-setts :as conn-set])
  (:import java.util.Date))

(def get-links
  '[:find ?e ?url ?description ?createdat ?order ?postedby
    :keys id url description createdat order postedby
    :in $ ?filter ?skip ?skip-plus-first
    :where [?e :link/url  ?url]
    [?e :link/description ?description]
    [?e :link/createdat ?createdat]
    [?e :link/postedby ?e2]
    [?e :link/order ?order]
    [?e2 :user/name ?postedby]
    [(.contains ?url ?filter)]
    [(> ?order ?skip) ]
    [(<= ?order ?skip-plus-first)]])

(def get-each-link-vote-count
  '[:find (count ?votes)
    :in $ ?id
    :where [?votes :vote/link ?id]])

(defn get-votes
  [db link-id]
  (let [votes-count (d/q get-each-link-vote-count db link-id)]
    (if (nil? votes-count)
      0
      votes-count)))

(defn get-feed
  [db args]
  (let [{filter :filter
         skip :skip
         first :first
         order-by :order-by} args
        links (d/q get-links db filter skip (+ first skip))]
    links))

(defn get-link
  [db args]
  (let [{id :id} args
        link (d/pull db '[*] id )
        vote-count (d/q get-each-link-vote-count db id)]
    (if (empty? vote-count)
      (conj link {:link/votes 0})
      (conj link {:link/votes (first vote-count)}))))

(defn delete-link
  [db args]
  (let [{id :id} args
        {result :db-before} (d/transact conn-set/conn {:tx-data [[:db/retractEntity id]]})]
    result))

(defn update-link
  [db args]
  (let [{id :id
         url :url
         description :description} args
        {result :db-after} (d/transact conn-set/conn {:tx-data [[:db/add  id :link/url url ]
                                                       [:db/add  id :link/description description]]})]
    result))

(defn max-order
  [db]
  (get-in (d/q '[:find (max ?order)
                 :where [_ :link/order ?order]] db) [0 0]))

(defn post
  [args user-id db]
  (let [{url :url
         description :description} args
        order (+ (max-order db) 1)
        now (java.util.Date.)]
    (d/transact conn-set/conn {:tx-data [{:link/description description
                                 :link/url url
                                 :link/order order
                                 :link/postedby user-id
                                 :link/createdat now
                                 }]})))