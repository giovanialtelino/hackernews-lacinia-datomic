(ns hackernews-lacinia-datomic.components.datomic
  (:require [com.stuartsierra.component :as component]
            [hackernews-lacinia-datomic.db-start :as db-start]
            [datomic.client.api :as dc]))

;;starting datomic
;bin/transactor dev-transactor-template.properties
;(require '[datomic.api :as d])
;(def db-uri "datomic:dev://localhost:4334/hello")
;(d/create-database db-uri)
;bin/run -m datomic.peer-server -h localhost -p 8998 -a myaccesskey,mysecret -d hackernews,datomic:dev://localhost:4334/hackernews

;;On prod could use Environ to get the config, password and so on.
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