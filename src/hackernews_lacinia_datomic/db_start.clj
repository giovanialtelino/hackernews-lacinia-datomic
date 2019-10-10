(ns hackernews-lacinia-datomic.db-start
  (:require [datomic.client.api :as d]
            [datomic-schema :as db-schema]
            [buddy.hashers :as hashers]
            )
  (:import java.util.Date))

(defn random-users
  [users]
  (loop [qtd users
         xyz []]
    (if (zero? qtd)
      xyz
      (recur (dec qtd) (conj xyz {:user/name (str "name" qtd)
                                  :user/pwd (hashers/derive "testdb")
                                  :user/email (str qtd "@com.com")})))))

(defn transact-random-users
  [conn qtd]
  (d/transact conn {:tx-data (random-users qtd)}))

;since the email is unique, I can just pass it as a ID for the postedby ref
(defn random-links
  [links]
  (loop [qtd links
         xyz []]
    (if (zero? qtd)
      xyz
      (recur (dec qtd) (conj xyz {:link/postedby [:user/email (str qtd "@com.com")]
                                  :link/createdat (java.util.Date.)
                                  :link/description (str qtd "desc desc")
                                  :link/order qtd
                                  :link/url (str qtd "linkcom")})))))

(defn transact-random-links
  [conn qtd]
  (d/transact conn {:tx-data (random-links qtd)}))

(defn start-database [database x]
  (println database)
    (d/transact database {:tx-data db-schema/hacker-schema})
    (transact-random-users database x)
    (transact-random-links database x)
  true)
