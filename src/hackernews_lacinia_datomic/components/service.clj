(ns hackernews-lacinia-datomic.components.service
  (:require [com.stuartsierra.component :as component]
            [com.walmartlabs.lacinia.pedestal :as lacinia]
            [io.pedestal.http :as bootstrap]))

(defn start-service! [schema config]
  (->
    schema
    (lacinia/service-map config)
    bootstrap/create-server
    bootstrap/start))

(defn stop-service! [service]
  (bootstrap/stop service))

(defrecord Service []
  component/Lifecycle
  (start [this]
    (assoc this :service (start-service! (:schema this) (:config this))))
  (stop [this]
    (stop-service! (:service this))
    (assoc this :service nil))

  Object
  (toString [_] "<Service>"))

(defn new-service [] (map->Service {}))