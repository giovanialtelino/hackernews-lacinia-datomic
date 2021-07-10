(ns hackernews-lacinia-datomic.server
  (:gen-class)
  (:require [hackernews-lacinia-datomic.component :as cp]))

(def dev-atom (atom nil))

(defn run-dev
  "Local dev entry point"
  [& args]
  (println "\n Creating Dev")
  (reset! dev-atom (cp/create-and-start-dev-system!)))

(defn -main
  [& args]
  (println "\n Creating Prod")
  (cp/create-and-start-prod-system!))

(defn kill-components []
  (cp/kill-every-component @dev-atom))