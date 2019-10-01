(ns hackernews-lacinia-datomic.schema
  "Resolvers for the schema"
  (:require [clojure.java.io :as io]
            [com.walmartlabs.lacinia.util :as util]
            [com.walmartlabs.lacinia.schema :as schema]
            [clojure.edn :as edn]
            [com.walmartlabs.lacinia.resolve :refer [resolve-as]]
            [com.stuartsierra.component :as component]
            [hackernews-lacinia-datomic.datomic :as db]))

(defn get-feed
  []
  (fn [_ args _]
    (let [{filter :filter
           skip :skip
           first :first
           order-by :order-by} args]
      (db/get-feed filter skip first order-by))))

(defn get-link
  []
  (fn [_ args _]
    (db/get-link  (:id args))))

(defn delete-link
  []
  (fn [_ args _]
    (db/delete-link  (:id args))))

(defn login
  []
  (fn [_ args _]
    (let [{email :email
           password :password} args]
      (db/login  email password))))

(defn post
  []
  (fn [_ args _]
    (let [{url :url
           description :description} args]
      (db/post  url description))))

(defn signup
  []
  (fn [_ args _]
    (let [{email :email
           password :password
           name :name} args]
      (db/signup  email password name))))

(defn update-link
  []
  (fn [_ args _]
    (let [{id :id
           url :url
           description :description } args]
      (db/update-link  id url description))))

(defn vote
  []
  (fn [_ args _]
    (db/vote-link  (:linkid args))))

(defn new-link-subscribe db
  []
  (fn [_ args _]
    (db/suscribe-new-link )))

(defn new-vote-subscribe
  []
  (fn [_ arg _]
    (db/subscribe-new-vote )))

(defn resolver-map
  [component]
  (let [db (:db component)]
    {:query/simple-string ("I'm alive")
     :query/feed (get-feed )
     :query/link (get-link )
     :mutation/delete (delete-link )
     :mutation/login (login )
     :mutation/post (post )
     :mutation/signup (signup )
     :mutation/update-link (update-link )
     :mutation/vote (vote )
     :subscription/new-link (new-link-subscribe )
     :subscriptions/new-vote (new-vote-subscribe )
     }))

(defn load-schema
  [component]
  (-> (io/resource "schemaGraphQL.edn")
      slurp
      edn/read-string
      (util/attach-resolvers (resolver-map component))
      schema/compile))

