(ns hackernews-lacinia-datomic.server
  (:require
            [hackernews-lacinia-datomic.datomic :as datomic]
            [hackernews-lacinia-datomic.schema :as schema]
            [hackernews-lacinia-datomic.pedestal :as pedestal]
))

(defn -main []
  (pedestal/service)
  )


