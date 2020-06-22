(ns hackernews-lacinia-datomic.components.datomic
  (:require [com.stuartsierra.component :as component]
            [hackernews-lacinia-datomic.db-start :as db-start]
            [datomic.client.api :as dc]))

;;On prod should use Environ (or similar) to get the config, password and so on.
(def cfg {:server-type        :peer-server
          :access-key         "myaccesskey"
          :secret             "mysecret"
          :endpoint           "localhost:8998"
          :validate-hostnames false})

(def db-name "hackernews")

(defrecord DatomicComponent []
  component/Lifecycle
  (start [this]
    (let [datomic-client (dc/client cfg)]
      (let [datomic-con (dc/connect datomic-client {:db-name db-name})]
        (db-start/start-database datomic-con 10)
        (assoc this :datomic datomic-con))))
  (stop [this]
    (assoc this :datomic nil))
  Object
  (toString [_] "<Datomic>"))

(defn new-datomic [] (map->DatomicComponent {}))