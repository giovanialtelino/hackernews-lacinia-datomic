(ns hackernews-lacinia-datomic.component
  (:require [com.stuartsierra.component :as component]
            [hackernews-lacinia-datomic.components.datomic :as datomic]
            [hackernews-lacinia-datomic.components.schema :as schema]
            [hackernews-lacinia-datomic.components.service :as service]
            [hackernews-lacinia-datomic.schema :as resolved-schema]
            [hackernews-lacinia-datomic.components.config :as config]))

(def prod-config-map {:env      :prod
                      :port     8080
                      :graphiql "false"})

(def dev-config-map {:env      :dev
                     :port     8080
                     :graphiql "true"})

(def prod-deps
  [:config :schema])

(defn prod-components [config-map]
  (component/system-map
    :config (config/new-config config-map)
    :datomic (datomic/new-datomic)
    :schema (component/using (schema/new-schema resolved-schema/resolver-map) [:datomic])
    :service (component/using (service/new-service) prod-deps)))

(defn dev-components [config-map]
  (prod-components config-map))

(defn create-and-start-system! [config-map]
  (if (= (:env config-map) :prod)
    (prod-components config-map)
    (if (= (:env config-map) :dev)
      (dev-components config-map)
      (prn "Wrong :env variables, check the system map"))))

(defn create-and-start-dev-system! []
  (component/start
    (create-and-start-system! dev-config-map)))

(defn create-and-start-prod-system! []
  (component/start
    (create-and-start-system! prod-config-map)))