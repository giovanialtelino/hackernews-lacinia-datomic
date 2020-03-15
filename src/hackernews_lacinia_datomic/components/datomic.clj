(ns hackernews-lacinia-datomic.components.datomic
  (:require [com.stuartsierra.component :as component]
            [hackernews-lacinia-datomic.db-start :as db-start]
            [datomic.client.api :as d]))

;;starting datomic
;bin/run -m datomic.peer-server -h localhost -p 8998 -a myaccesskey,mysecret -d hackernews,datomic:mem://hackernews

;;On prod could use Environ to get the config, password and so on.
(def cfg {:server-type        :peer-server
          :access-key         "myaccesskey"
          :secret             "mysecret"
          :endpoint           "localhost:8998"
          :validate-hostnames false})

(defrecord DatomicComponent []
  component/Lifecycle
  (start [this]
    (let [datomic-client (d/client cfg)
          datomic-con (d/connect datomic-client {:db-name "hackernews"})]
      (db-start/start-database datomic-con 10)
      (assoc this :datomic datomic-con)))
  (stop [this]
    (assoc this :datomic nil))
  Object
  (toString [_] "<Datomic>"))

(defn new-datomic [] (map->DatomicComponent {}))