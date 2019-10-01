(ns hackernews-lacinia-datomic.datomic
  (:require [datomic.client.api :as d]
            [datomic-schema :as db-schema]))

;should be all asyncronous, I guess
(def cfg {:server-type :ion
          :region "us-east-1"
          :system "HackerNewsGraphQl"
          :endpoint "http://entry.HackerNewsGraphQl.us-east-1.datomic.net:8182/"
          :proxy 8182})

(def client (d/client cfg))

(defn start-database
  []
  (doseq
    (d/create-database client {:db-name "hackernews"})
    (d/transact conn {:tx-data db-schema/hacker-schema})))

(def conn (d/connect client {:db-name "hackernews"}))

(defn last-db []
  (d/db conn))

(defn get-feed
  [filter skip first order-by])

(defn get-link
  [id])

(defn delete-link
  [id])

(defn login
  [email password])

(defn post
  [url description])

(defn signup
  [email password name])

(defn update-link
  [])


