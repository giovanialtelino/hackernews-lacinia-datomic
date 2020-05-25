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
   {:db/ident       :link/comments
    :db/valueType   :db.type/ref
    :db/cardinality :db.cardinality/many}

   {:db/ident       :auth/refresh_token
    :db/valueType   :db.type/string
    :db/cardinality :db.cardinality/one}
   {:db/ident       :auth/until
    :db/valueType   :db.type/instant
    :db/cardinality :db.cardinality/one}
   {:db/ident       :auth/valid
    :db/valueType   :db.type/keyword
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
    :db/cardinality :db.cardinality/one
    :db/unique      :db.unique/identity}
   {:db/ident       :user/createdAt
    :db/valueType   :db.type/instant
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
   {:db/ident       :vote/comment
    :db/valueType   :db.type/ref
    :db/cardinality :db.cardinality/one}
   {:db/ident       :vote/user
    :db/valueType   :db.type/ref
    :db/cardinality :db.cardinality/one}

   {:db/ident       :comment/id
    :db/valueType   :db.type/uuid
    :db/cardinality :db.cardinality/one
    :db/unique      :db.unique/identity}
   {:db/ident       :comment/text
    :db/valueType   :db.type/string
    :db/cardinality :db.cardinality/one}
   {:db/ident       :comment/postedBy
    :db/valueType   :db.type/ref
    :db/cardinality :db.cardinality/one}
   {:db/ident       :comment/createdAt
    :db/valueType   :db.type/instant
    :db/cardinality :db.cardinality/one}
   {:db/ident       :comment/father
    :db/valueType   :db.type/ref
    :db/cardinality :db.cardinality/one}
   {:db/ident       :comment/children
    :db/valueType   :db.type/ref
    :db/cardinality :db.cardinality/many}
   {:db/ident       :comment/vote
    :db/valueType   :db.type/ref
    :db/cardinality :db.cardinality/many}])



(defn random-users
  [users]
  (loop [qtd users
         xyz []]
    (if (zero? qtd)
      xyz
      (recur (dec qtd) (conj xyz {:user/id        (UUID/randomUUID)
                                  :user/name      (str "name" qtd)
                                  :user/pwd       (at/generate-password-hash (str "pwd" qtd))
                                  :user/email     (str qtd "@com.com")
                                  :user/createdAt (jt/java-date)})))))

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

(defn random-comments
  [comments type father]
  (let [today (jt/java-date)]
    (loop [qtd comments
           xyz []]
      (if (zero? qtd)
        xyz
        (recur (dec qtd) (conj xyz {:comment/id        (UUID/randomUUID)
                                    :comment/text      (str "comment is around " type "-" qtd)
                                    :comment/createdAt today
                                    :comment/postedBy  [:user/email (str qtd "@com.com")]
                                    :comment/father    [type father]}))))))

(def get-comments-uuid-list
  '[:find ?uuids
    :in $
    :where
    [_ :comment/id ?uuids]])

(defn transact-random-comments
  [conn qtd father-list type sub-level]
  (if (< 0 sub-level)
    (loop [i 0]
      (if (< i (count father-list))
        (do
          (d/transact conn {:tx-data (random-comments qtd type (first (nth father-list i)))})
          (recur (inc i)))
        (transact-random-comments conn qtd (d/q get-comments-uuid-list (d/db conn)) :comment/id (dec sub-level))))))

(def get-link-uuid-list
  '[:find ?uuids
    :in $
    :where
    [_ :link/id ?uuids]])

(defn transact-random-links
  [conn qtd]
  (let [{result :db-after} (d/transact conn {:tx-data (random-links qtd)})
        uuid-list (d/q get-link-uuid-list result)]
    (transact-random-comments conn qtd uuid-list :link/id 2)))

(defn get-all-print [conn]
  (d/q '[:find (pull ?e [:link/url :link/id :link/postedby])
         :where [?e :link/id]]
       (d/db conn)))

(defn start-database [database x]
  ;(d/transact database {:tx-data hacker-schema})
  ;(transact-random-users database x)
  ;(transact-random-links database x)
  true)
