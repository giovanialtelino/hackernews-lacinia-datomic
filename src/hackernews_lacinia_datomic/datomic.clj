(ns hackernews-lacinia-datomic.datomic
  (:require [datomic.client.api :as d]
            [buddy.hashers :as hashers]
            [com.stuartsierra.component :as component])
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
  [con args]
  (let [{id :id} args
        {result :db-before} (d/transact con {:tx-data [[:db/retractEntity id]]})]
    result))

(defn update-link
  [con args]
  (let [{id :id
         url :url
         description :description} args
        {result :db-after} (d/transact con {:tx-data [[:db/add  id :link/url url ]
                                                      [:db/add  id :link/description description]]})]
    result))

(defn max-order
  [db]
  (get-in (d/q '[:find (max ?order)
                 :where [_ :link/order ?order]] db) [0 0]))

(defn post
  [args user-id con db]
  (let [{url :url
         description :description} args
        order (+ (max-order db) 1)
        now (java.util.Date.)]
    (d/transact con {:tx-data [{:link/description description
                                :link/url url
                                :link/order order
                                :link/postedby user-id
                                :link/createdat now
                                }]})))

(defn user-id-by-email
  [db email]
  (let [result (d/q '[:find ?e
                      :in $ ?mail
                      :where [?e :user/email ?mail]] db email)]
    (if (empty? result)
      -1
      (get-in result [0 0]))))


(defn signup
  [args con]
  (let [{name :name
         email :email
         password :password} args
        hashed (hashers/derive password)
        {result :db-after} (d/transact con {:tx-data [{:user/name name
                                                       :user/email email
                                                       :user/pwd hashed}]})
        user-id (user-id-by-email result email)]
    (d/transact con {:tx-data [{:auth/token ""
                                :auth/user user-id}]})))

(defn login-register
  [user-id token con]
  (d/transact con {:tx-data [[:db/add user-id :auth/token token]]}))

(defrecord Datomic [config name]
  component/Lifecycle
  (start [this]
    (let [client (d/client config)
          conn (d/connect client {:db-name name})]
      (assoc this :connection conn :transaction conn)))
  (stop [this]
    (assoc this :connection nil)))

(defn new-datomic [config name]
  {:db (map->Datomic {:config config :name name})})