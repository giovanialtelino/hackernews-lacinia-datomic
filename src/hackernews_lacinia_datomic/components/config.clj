(ns hackernews-lacinia-datomic.components.config
  (:require [com.stuartsierra.component :as component]))

(defrecord DummyConfig [config]
  component/Lifecycle
  (start [this] this)
  (stop [this] this))

(defn new-config [config-map] (->DummyConfig config-map))
