(ns hackernews-lacinia-datomic.components.service
  (:require [com.stuartsierra.component :as component]
            [com.walmartlabs.lacinia.pedestal :as lacinia]
            [com.walmartlabs.lacinia.schema :as schema]
            [io.pedestal.http :as bootstrap]))

(defn start-service! [schema config]
  (prn config)
  (prn schema)
  (-> (lacinia/service-map schema config)
      bootstrap/create-server
      bootstrap/start))

(defn stop-service! [service]
  (bootstrap/stop service))

(defrecord Service [schema config]
  component/Lifecycle
  (start [this]
    (assoc this :service (start-service! (:schema schema) (:config config))))
  (stop [this]
    (stop-service! (:service this))
    (assoc this :service nil))

  Object
  (toString [_] "<Service>"))

(defn new-service [] (map->Service {}))