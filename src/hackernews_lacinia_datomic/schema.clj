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
      (db/get-feed args)))

(defn get-link
  []
  (fn [_ args _]
    (db/get-link  args)))

(defn delete-link
  []
  (fn [_ args _]
    (db/delete-link args)))

(defn login
  []
  (fn [_ args _]
      (db/login  args)))

(defn post
  []
  (fn [_ args _]
      (db/post args 1)))

(defn signup
  []
  (fn [_ args _]
      (db/signup args)))

(defn update-link
  []
  (fn [_ args _]
      (db/update-link  args)))

(defn vote
  []
  (fn [_ args _]
    (db/vote-link  args)))

(defn new-link-subscribe db
  []
  )

(defn new-vote-subscribe
  []
  )

(defn resolver-map
  [component]
  (let [db (:db component)]
    {:query/simple-string ("I'm alive")
     :query/feed (get-feed)
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
  (-> (io/resource "schema_graphql.edn")
      slurp
      edn/read-string
      (util/attach-resolvers (resolver-map component))
      schema/compile))

