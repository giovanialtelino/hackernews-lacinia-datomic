(ns hackernews-lacinia-datomic.server
  (:require [com.stuartsierra.component :as component]
            [hackernews-lacinia-datomic.datomic :as datomic]
            [hackernews-lacinia-datomic.schema :as schema]
))

(defn -main []
   (merge (component/system-map)
          (schema/new-schema)
          (datomic/new-db)))

