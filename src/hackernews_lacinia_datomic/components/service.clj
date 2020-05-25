(ns hackernews-lacinia-datomic.components.service
  (:require [com.stuartsierra.component :as component]
            [com.walmartlabs.lacinia.pedestal :as lacinia]
            [com.walmartlabs.lacinia.schema :as schema]
            [io.pedestal.http :as bootstrap]
            [io.pedestal.interceptor :as inter]))

(defn p-h [p-k]
  [(keyword (first p-k)) (last p-k)])

(def attach-headers
  {:name  ::attach-headers
   :enter (fn [context]
            (assoc-in context [:request :headers] (into {} (map p-h (:headers (:request context))))))})

(defn- inject-user-info-interceptor [interceptors]
  (lacinia/inject interceptors attach-headers :before ::lacinia/inject-app-context))

(defn- interceptors [schema]
  (let [options {}
        default-interceptors (lacinia/default-interceptors schema options)]
    (inject-user-info-interceptor default-interceptors)))

(defn start-service! [schema config]
  (let [options (conj config {:interceptors (interceptors schema)})]
    (-> schema
        (lacinia/service-map options)
        (merge {::bootstrap/allowed-origins ["http://localhost:8080" "http://localhost:8281"]})
        bootstrap/create-server
        bootstrap/start)))

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