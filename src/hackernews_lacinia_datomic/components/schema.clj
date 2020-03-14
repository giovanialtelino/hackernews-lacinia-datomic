(ns hackernews-lacinia-datomic.components.schema
  (:require [com.stuartsierra.component :as component]
            [clojure.edn :as edn]
            [com.walmartlabs.lacinia.util :as util]
            [clojure.java.io :as io]
            [com.walmartlabs.lacinia.schema :as schema]))

(def hello-schema (schema/compile
                    {:queries {:hello
                               ;; String is quoted here; in EDN the quotation is not required
                               {:type    'String
                                :resolve (constantly "world")}}}))

(defn load-schema []
  (schema/compile hello-schema))

(defrecord Schema [schema]
  component/Lifecycle
  (start [this]
    (let [new-schema (load-schema)]
      (assoc this :schema new-schema)))
  (stop [this]
    (assoc this :schema nil))
  Object
  (toString [_] "<Schema>"))

(defn new-schema [schema]
  (map->Schema {}))
