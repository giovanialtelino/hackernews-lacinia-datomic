(ns hackernews-lacinia-datomic.server
  (:gen-class)                                              ; for -main method in uberjar
  (:require [hackernews-lacinia-datomic.component :as cp]))

(defn run-dev
  "Local dev entry point"
  [& args]
  (println "\n Creating Dev")
  (cp/create-and-start-dev-system!))

(defn -main
  [& args]
  (println "\n Creating Prod")
  (cp/create-and-start-prod-system!))
