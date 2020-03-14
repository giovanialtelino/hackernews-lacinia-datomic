(ns hackernews-lacinia-datomic.components.datomic
  (:require [com.stuartsierra.component :as component]
            [datomic.client.api :as d]))

;;On prod could use Environ to get the config, password and so on.
(def uri "datomic:mem://lacinia")

(defrecord DatomicComponent []
  component/Lifecycle
  (start [this]
    (d/create-database uri {:db-name hacker-news})
    (let [datomic-con (d/connect uri {:db-name hacker-news})]
      (assoc this :datomic datomic-con)))
  (stop [this]
    (d/delete-database uri {:db-name hacker-news})
    (assoc this :datomic nil))
  Object
  (toString [_] "<Datomic>"))

(defn new-datomic [] (map->DatomicComponent {}))