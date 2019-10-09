(ns hackernews-lacinia-datomic.schema
  "Resolvers for the schema"
  (:require [clojure.java.io :as io]
            [com.walmartlabs.lacinia.util :as util]
            [com.walmartlabs.lacinia.schema :as schema]
            [clojure.edn :as edn]
            [com.walmartlabs.lacinia.resolve :refer [resolve-as]]
            [com.stuartsierra.component :as component]
            [hackernews-lacinia-datomic.datomic.links :as db-links]
            [hackernews-lacinia-datomic.datomic.user :as db-users]
            [datomic.client.api :as d]))

(defn get-feed
  [db]
  (fn [_ args _]
      (db-links/get-feed db args)))

(defn get-link
  [db]
  (fn [_ args _]
    (db-links/get-link db args)))

(defn delete-link
  [db]
  (fn [_ args _]
    (db-links/delete-link db args)))

(defn post
  [db con]
  (fn [_ args _]
      (db-links/post db  args 1 con)))

(defn update-link
  [db]
  (fn [_ args _]
      (db-links/update-link  db args)))

(defn signup
  [db]
  (fn [_ args _]
    (db-users/signup db args)))


(defn resolver-map
  [component]
  (let [db-con (:db component)
        db-name (:db-name component)
        db (create-actual-db db-con db-name)
        ]
    {:query/simple-string ("I'm alive")
     :query/feed (get-feed db)
     :query/link (get-link db)
     :mutation/delete (delete-link db)

     :mutation/post (post db db-con)
     :mutation/signup (signup db)
     :mutation/update-link (update-link db)


     }))

(defn load-schema
  [component]
  (-> (io/resource "schema_graphql.edn")
      slurp
      edn/read-string
      (util/attach-resolvers (resolver-map component))
      schema/compile))

(defrecord SchemaProvider [schema]
  component/Lifecycle
  (start [this]
    (assoc this :schema (load-schema this)))
  (stop [this]
    (assoc this :schema nil)))

(defn new-schema-provider
  []
  {:schema-provider (-> {}
                        map->SchemaProvider
                        (compoent/using [:db]))})

