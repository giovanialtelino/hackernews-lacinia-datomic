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
(def conn (d/connect client {:db-name "hackernews"}))

(defn random-users
  [users]
    (loop [qtd users
           xyz []]
      (if (zero? qtd)
        xyz
            (recur (dec qtd) (conj xyz {:user/name (str "name" qtd) :user/email (str qtd "@com.com")})))))

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
        '[:find ?e ?url ?description ?createdat ?order ?postedby
          :in $ ?filter ?skip ?skip-plus-first
          :where [?e :link/url  ?url]
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

(defn get-votes
  [link-id]
  (let [votes-count (d/q get-each-link-vote-count db link-id)]
    (if (nil? votes-count)
      0
      votes-count)))

(defn get-feed
  [args]
  (let [{filter :filter
        skip :skip
        first :first
        order-by :order-by} args
        links (d/q get-links db filter skip (+ first skip))]

      (case order-by
      ;":description_ASC" (sort-by  < links)
      ;":description_DESC" (sort-by 2 > links)
      ;":url_ASC" (sort-by 1 < links )
      ;":url_DESC" (sort-by 1 > links)
      ;":createdAt_ASC" (sort-by 3 < links)
      ;":createdAt_DESC" (sort-by 3 > links)
      links)))

(defn get-link
  [args]
  (let [{id :id} args
        link (d/pull db '[*] id )
        vote-count (d/q get-each-link-vote-count db id)]
    (if (empty? vote-count)
      (conj link {:link/votes 0})
      (conj link {:link/votes (first vote-count)}))))

;retract/delete a selected link and returns it
(defn delete-link
  [args]
  (let [{id :id} args
        {result :db-before} (d/transact conn {:tx-data [[:db/retractEntity id]]})]
  result))

;retract/update a selected link and returns it
(defn update-link
  [args]
  (let [{id :id
         url :url
         description :description} args
        {result :db-after} (d/transact conn {:tx-data [[:db/add  id :link/url url ]
                                                      [:db/add  id :link/description description]]})]
    result))

;should be a more efective way...
(defn max-order
  []
  (get-in (d/q '[:find (max ?order)
         :where [_ :link/order ?order]] db) [0 0]))

(defn post
  [args user-id]
  (let [{url :url
         description :description} args]
    (d/transact conn {:tx-data {:link/description description
                                :link/url url
                                :link/order (+ max-order 1)
                                :link/postedby user-id
                                :link/createdat (java.util.Date.)
                                }})))

;I'm registering every login and signup on datomic too
(defn signup
  [email password name])

(defn login
  [email password]
  "not supported yet")



