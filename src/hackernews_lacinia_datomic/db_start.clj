(ns hackernews-lacinia-datomic.db-start
  (:require [datomic.client.api :as d]
            [java-time :as jt]))

(def hacker-schema
  [{:db/ident       :link/id
    :db/valueType   :db.type/uuid
    :db/cardinality :db.cardinality/one
    :db/unique      :db.unique/identity}
   {:db/ident       :link/url
    :db/valueType   :db.type/string
    :db/cardinality :db.cardinality/one}
   {:db/ident       :link/description
    :db/valueType   :db.type/string
    :db/cardinality :db.cardinality/one}
   {:db/ident       :link/postedby
    :db/valueType   :db.type/ref
    :db/cardinality :db.cardinality/one}
   {:db/ident       :link/votes
    :db/valueType   :db.type/ref
    :db/cardinality :db.cardinality/many}
   {:db/ident       :link/createdat
    :db/valueType   :db.type/instant
    :db/cardinality :db.cardinality/one}
   {:db/ident       :link/order
    :db/valueType   :db.type/long
    :db/cardinality :db.cardinality/one
    :db/unique      :db.unique/value}
   {:db/ident       :auth/token
    :db/valueType   :db.type/string
    :db/cardinality :db.cardinality/one}
   {:db/ident       :auth/user
    :db/valueType   :db.type/ref
    :db/cardinality :db.cardinality/one}
   {:db/ident       :user/id
    :db/valueType   :db.type/uuid
    :db/cardinality :db.cardinality/one
    :db/unique      :db.unique/identity}
   {:db/ident       :user/pwd
    :db/valueType   :db.type/string
    :db/cardinality :db.cardinality/one}
   {:db/ident       :user/name
    :db/valueType   :db.type/string
    :db/cardinality :db.cardinality/one}
   {:db/ident       :user/email
    :db/valueType   :db.type/string
    :db/cardinality :db.cardinality/one
    :db/unique      :db.unique/value}
   {:db/ident       :user/links
    :db/valueType   :db.type/ref
    :db/cardinality :db.cardinality/many}
   {:db/ident       :vote/id
    :db/valueType   :db.type/uuid
    :db/cardinality :db.cardinality/one
    :db/unique      :db.unique/identity}
   {:db/ident       :vote/link
    :db/valueType   :db.type/ref
    :db/cardinality :db.cardinality/one}
   {:db/ident       :vote/user
    :db/valueType   :db.type/ref
    :db/cardinality :db.cardinality/one}])

(defn random-users
  [users]
  (loop [qtd users
         xyz []]
    (if (zero? qtd)
      xyz
      (recur (dec qtd) (conj xyz {:user/name  (str "name" qtd)
                                  :user/pwd   "testdb"
                                  :user/email (str qtd "@com.com")})))))

(defn transact-random-users
  [conn qtd]
  (d/transact conn {:tx-data (random-users qtd)}))

(defn random-links
  [links]
  (let [today (jt/java-date)]
    (loop [qtd links
           xyz []]
      (if (zero? qtd)
        xyz
        (recur (dec qtd) (conj xyz {:link/postedby    [:user/email (str qtd "@com.com")]
                                    :link/createdat   today
                                    :link/description (str qtd "desc desc")
                                    :link/order       qtd
                                    :link/url         (str qtd "linkcom")}))))))

(defn transact-random-links
  [conn qtd]
  (d/transact conn {:tx-data (random-links qtd)}))

(defn start-database [database x]
  (prn "Starting the database")
  (d/transact database {:tx-data hacker-schema})
  (transact-random-users database x)
  (transact-random-links database x)
  true)
