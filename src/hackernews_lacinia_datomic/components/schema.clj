(ns hackernews-lacinia-datomic.components.schema
  (:require [com.stuartsierra.component :as component]
            [clojure.edn :as edn]
            [com.walmartlabs.lacinia.util :as util]
            [clojure.java.io :as io]
            [com.walmartlabs.lacinia.schema :as schema]))

(defn load-schema [resolver-map]
  (prn resolver-map)
  (-> "schema_graphql.edn"
      io/resource
      slurp
      edn/read-string
      (util/attach-resolvers resolver-map)
      schema/compile))

(defrecord Schema [resolver]
  component/Lifecycle
  (start [this]
    (let [new-schema (load-schema resolver)]
      (assoc this :schema new-schema)))
  (stop [this]
    (assoc this :schema nil))
  Object
  (toString [_] "<Schema>"))

(defn new-schema [resolver-map]
  (map->Schema {:resolver resolver-map}))
