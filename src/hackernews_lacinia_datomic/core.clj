(ns hackernews-lacinia-datomic.core
  [:require
    [com.stuartsierra.component :as component]
    [hackernews-lacinia-datomic.server :as server]
    [hackernews-lacinia-datomic.schema :as schema]])

(defn new-system
  []
  (merge (component/system-map)
         (server/new-server)
         (schema/new-schema-provider)))
