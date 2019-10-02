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
      (recur (dec qtd) (conj xyz {:link/postedby [:user/email (str qtd "@com.com")]
                                  :link/createdat (java.util.Date.)
                                  :link/description (str qtd "desc desc")
                                  :link/order qtd
                                  :link/url (str qtd "linkcom")})))))

(defn transact-random-links
  [qtd]
  (d/transact conn {:tx-data (random-links qtd)}))

;to be run only once every in memory database restart
(defn start-database
  [x]
  (d/transact conn {:tx-data db-schema/hacker-schema})
  (transact-random-users x)
  (transact-random-links x))

;return the last database state to get only the last item
(def db (d/db conn))

;feed contains -> id description, url, postedby, votes, createdat
(def get-links
        '[:find ?e ?url ?description ?createdat ?postedby ?order
          :in $ ?filter ?skip ?skip-plus-first
          :where [?e :link/url ?url]
                  [?e :link/description ?description]
                  [?e :link/createdat ?createdat]
                  [?e :link/postedby ?e2]
                  [?e :link/order ?order]
                  [?e2 :user/name ?postedby]
                  [(.contains ?url ?filter)]
                  [(> ?order ?skip) ]
                  [(<= ?order ?skip-plus-first)]])

(def get-each-link-vote-count
  '[:find (count ?votes)
    :in $ ?id
    :where [?votes :vote/link ?id]])

(defn get-links-vector
  [args]
  (let [{filter :filter
        skip :skip
        first :first
        order-by :order-by} args
        link-query get-links
        links (d/q link-query db filter skip (+ first skip))]

    ; ?e ?url ?description ?createdat ?postedby ?order
    (case order-by
      ":description_ASC" (sort-by  < links)
      ":description_DESC" (sort-by 2 > links)
      ":url_ASC" (sort-by 1 < links )
      ":url_DESC" (sort-by 1 > links)
      ":createdAt_ASC" (sort-by 3 < links)
      ":createdAt_DESC" (sort-by 3 > links)
      links)))

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



