(ns hackernews-lacinia-datomic.datomic.datomic-conn-setts
  (:require [datomic.client.api :as d]))

(def cfg {:server-type :peer-server
          :access-key "myaccesskey"
          :secret "mysecret"
          :endpoint "localhost:8998"})

(def client (d/client cfg))
(def conn (d/connect client {:db-name "hackernews"}))
