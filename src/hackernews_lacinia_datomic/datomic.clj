(ns hackernews-lacinia-datomic.datomic
  (:require [datomic.client.api :as d]
            [datomic-schema :as db-schema])
  (:import java.util.Date))

;you may start your REPL here while you are doing your operations on the database

(def cfg {:server-type :peer-server
          :access-key "myaccesskey"
          :secret "mysecret"
          :endpoint "localhost:8998"})

(def client (d/client cfg))

; database name was defined on the "datomic-start" file
(def conn (d/connect client {:db-name "hackernews"}))

;to be run only once every in memory database restart
(defn start-database
  []
    (d/transact conn {:tx-data db-schema/hacker-schema}))

(defn random-users
  [users]
    (loop [qtd users
           xyz []]
      (if (zero? qtd)
        xyz
            (recur (dec qtd) (conj xyz {:user/name (str qtd) :user/email (str qtd "@com.com")})))))

(defn transact-random-users
  [qtd]
  (d/transact conn {:tx-data (random-users qtd)}))

;since the email is unique, I can just pass it as a ID for the postedby ref
(defn random-links
  [links]
  (loop [qtd links
         xyz []]
    (if (zero? qtd)
      xyz
      (recur (dec qtd) (conj xyz {:link/postedby [:user/email (str qtd "@com.com")] :link/createdat (java.util.Date.) :link/description (str qtd "desc desc") :link/url (str qtd "linkcom")})))))

(defn transact-random-links
  [qtd]
  (d/transact conn {:tx-data (random-links qtd)}))

;return the last database state to get only the last item
(def db (d/db conn))

;feed contains -> id description, url, postedby, votes, createdat
(def get-feed
 '[:find ?e ?mail ?description ?createdat ?postedby
          :where [?e :link/url ?mail]
                  [?e :link/description ?description]
                  [?e :link/createdat ?createdat]
                  [?e :link/postedby ?e2]
                  [?e2 :user/name ?postedby]
               ])

;get the votes diff defn

(defn get-link
  [id])

(defn delete-link
  [id])

(defn update-link
  [])

(defn post
  [url description]
  "not supported yet")

;I'm registering every login and signup on datomic too
(defn signup
  [email password name])

(defn login
  [email password]
  "not supported yet")



