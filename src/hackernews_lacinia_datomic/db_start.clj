(ns hackernews-lacinia-datomic.db-start
  (:require [datomic.client.api :as d]
            [hackernews-lacinia-datomic.authentication :as at]
            [java-time :as jt])
  (:import (java.util UUID)))

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
    :db/unique      :db.unique/identity}

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
    :db/unique      :db.unique/identity}
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
      (recur (dec qtd) (conj xyz {:user/id    (UUID/randomUUID)
                                  :user/name  (str "name" qtd)
                                  :user/pwd   (at/generate-password-hash (str "pwd" qtd))
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
        (recur (dec qtd) (conj xyz {:link/id          (UUID/randomUUID)
                                    :link/postedby    [:user/email (str qtd "@com.com")]
                                    :link/createdat   today
                                    :link/description (str qtd "desc desc")
                                    :link/order       qtd
                                    :link/url         (str qtd "linkcom")}))))))

(defn transact-random-links
  [conn qtd]
  (d/transact conn {:tx-data (random-links qtd)}))

(defn get-all-print [conn]
  (d/q '[:find (pull ?e [:link/url :link/id :link/postedby])
         :where [?e :link/id]]
       (d/db conn)))

(defn start-database [database x]
  (d/transact database {:tx-data hacker-schema})
  (transact-random-users database x)
  (transact-random-links database x)
  (prn "QUERY BELLOW")
  (prn (get-all-print database))
  (prn "QUERY ABOVE")
  true)
