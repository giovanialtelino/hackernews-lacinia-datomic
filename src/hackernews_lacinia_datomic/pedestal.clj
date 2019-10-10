(ns hackernews-lacinia-datomic.pedestal
  (:require
          [clojure.edn :as edn]
            [clojure.java.io :as io]
            [com.walmartlabs.lacinia.pedestal :refer [service-map]]
            [com.walmartlabs.lacinia.util :as util]
            [com.walmartlabs.lacinia.schema :as schema]
            [io.pedestal.http :as http]
            [datomic.client.api :as d]
            [hackernews-lacinia-datomic.schema :as hacker-schema]))

(def Datomic-Config {
                     :server-type        :peer-server
                     :access-key         "myaccesskey"
                     :secret             "mysecret"
                     :endpoint           "localhost:8998"
                     :validate-hostnames false})

(def Datomic-Name "hackernews")

(def datomic-client (d/client Datomic-Config))

(def datomic-con (d/connect datomic-client {:db-name Datomic-Name}))

;"schema_graphql.edn"
(defn load-schema
  [con]
  (-> "schema_graphql.edn"
      io/resource
      slurp
      edn/read-string
      (util/attach-resolvers (hacker-schema/resolver-map con))
      schema/compile))

(def service (-> (load-schema datomic-con)
                 (service-map {:graphiql true})
                 http/create-server
                 http/start))