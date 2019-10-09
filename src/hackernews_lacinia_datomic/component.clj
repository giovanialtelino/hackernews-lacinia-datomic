(ns hackernews-lacinia-datomic.component
  (:require [com.stuartsierra.component :as component]
            [hackernews-lacinia-datomic.prod-config :as config]
            [hackernews-lacinia-datomic.datomic.db-start :as db-start]
            [hackernews-lacinia-datomic.datomic.links :as db-links]))

(def system (atom nil))

(def Datomic-Config {
                     :server-type        :peer-server
                     :access-key         "myaccesskey"
                     :secret             "mysecret"
                     :endpoint           "localhost:8998"
                     :validate-hostnames false})

(def Datomic-Name "hackernews")

(def Db-Start-Quantity 50)

(defn prn-stuff [x]
  (println x)
  x)

(defn base-system []
  (component/system-map
    :db (config/new-datomic Datomic-Config Datomic-Name)
    :x (prn-stuff :db)
    :x1 (prn-stuff [:db])))

(def system-maps
  {:base-system base-system})

(defn ^:private system-for-env [environment systems]
  (get systems environment (:base-system systems)))

(defn bootstrap! [system-maps env]
  (let [system-maps ((system-for-env env system-maps))]
    (->> system-maps
         component/start
         (reset! system))))

(defn create-start!
  [env]
  (bootstrap! system-maps env))