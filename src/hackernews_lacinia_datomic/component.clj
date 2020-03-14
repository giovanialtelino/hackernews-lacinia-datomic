(ns hackernews-lacinia-datomic.component
  (:require [com.stuartsierra.component :as component]
            [hackernews-lacinia-datomic.components.datomic :as datomic]
            [hackernews-lacinia-datomic.components.config :as config]))

(def prod-config-map {:env  :prod
                      :port 8080})

(def dev-config-map {:env  :dev
                     :port 8080})

(def prod-deps
  [:config :storage :routes])

(defn prod-components [config-map]
  (component/system-map
    :config (config/new-config config-map)
    :storage (datomic/new-datomic)
    :schema (schema/new-schema)
    :service (component/using (service/new-service) prod-deps)
    :servlet (component/using (servlet/new-servlet) [:service])))

(defn dev-components [config-map]
  (merge {}
         (prod-components config-map)))

(defn create-and-start-system! [config-map]
  (if (= (:env config-map) :prod)
    (prod-components config-map)
    (if (= (:env config-map) :dev)
      (dev-components config-map)
      (prn "Wrong :env variables, check the system map"))))

(defn create-and-start-dev-system! []
  (create-and-start-system! dev-config-map))

(defn create-and-start-prod-system! []
  (create-and-start-system! prod-config-map))
