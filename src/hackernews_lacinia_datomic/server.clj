(ns hackernews-lacinia-datomic.server
  (:require [com.stuartsierra.component :as component]
            [io.pedestal.http :as http]
            [hackernews-lacinia-datomic.schema :as int-schema]
            [datomic.client.api :as d]
            [com.walmartlabs.lacinia.schema :as schema]))

; a component file would be better looking
(def Datomic-Database-Regular {
          :server-type :peer-server
          :access-key "myaccesskey"
          :secret "mysecret"
          :endpoint "localhost:8998"
          :validate-hostnames false})

(def Database-Name "hackernews")

(defrecord Database [datomic db-name conn]
  component/Lifecycle
  (start [component]
    (println ";; Starting datomic client")
    (let [conn (d/connect datomic {:db-name db-name})]
      (assoc component :connection conn)))
  (stop [component]
    (println ";; Stopping the database")
    (assoc component :connection nil)))

(defn new-database [datomic db-name]
  (map->Database {:datomic datomic :db-name db-name }))

(defn new-system [config-options]
  (let [{:keys [datomic name]} config-options]
    (component/system-map
      :db (new-database datomic name))))

(defn -main []
  (component/start (new-system {:datomic Datomic-Database-Regular :name Database-Name})))

