(ns hackernews-lacinia-datomic.datomic
  (:require [datomic.client.api :as d]
            [clojure.set :as clj-set]
            [java-time :as jt])
  (:import (java.util UUID)))

(defn- create-db-con [con]
  (d/db con))

(def get-links
  '[:find ?id ?url ?description ?order ?postedby ?createdAt (sum ?votes) (sum ?comments)
    :with ?data-point
    :keys id url description order postedBy createdAt votes comments
    :in $ ?skip ?skip-plus-first
    :where
    [?e :link/id ?id]
    [?e :link/url ?url]
    [?e :link/description ?description]
    [?e :link/createdat ?createdAt]
    [?e :link/postedby ?e2]
    [?e2 :user/name ?postedby]
    [?e :link/order ?order]
    [(> ?order ?skip)]
    [(<= ?order ?skip-plus-first)]
    (or-join [?e ?id ?url ?description ?order ?postedby ?createdAt ?votes ?comments ?data-point]
             (and [?vote :vote/link ?e]
                  [(identity ?vote) ?data-point]
                  [(ground 1) ?votes]
                  [(ground 0) ?comments])
             (and [?comment :comment/link ?e]
                  [(identity ?comment) ?data-point]
                  [(ground 1) ?comments]
                  [(ground 0) ?votes])
             (and
               [(identity ?e) ?data-point]
               [(ground 0) ?comments]
               [(ground 0) ?votes]))])

(def get-user-posts
  '[:find ?id ?url ?description ?order ?postedby ?createdAt (sum ?votes) (sum ?comments)
    :with ?data-point
    :keys id url description order postedBy createdAt votes comments
    :in $ ?user-name
    :where
    [?e0 :user/name ?user-name]
    [?e :link/postedby ?e0]
    [?e :link/id ?id]
    [?e :link/url ?url]
    [?e :link/description ?description]
    [?e :link/createdat ?createdAt]
    [?e :link/postedby ?e2]
    [?e0 :user/name ?postedby]
    [?e :link/order ?order]
    (or-join [?e ?id ?url ?description ?order ?postedby ?createdAt ?votes ?comments ?data-point]
             (and [?vote :vote/link ?e]
                  [(identity ?vote) ?data-point]
                  [(ground 1) ?votes]
                  [(ground 0) ?comments])
             (and [?comment :comment/link ?e]
                  [(identity ?comment) ?data-point]
                  [(ground 1) ?comments]
                  [(ground 0) ?votes])
             (and
               [(identity ?e) ?data-point]
               [(ground 0) ?comments]
               [(ground 0) ?votes]))])

(def get-comments-link-father
  '[:find ?id ?text ?postedBy ?createdAt ?father (sum ?votes)
    :with ?data-point
    :keys id text postedBy createdAt father votes
    :in $ ?father-t
    :where
    [?e4 :link/id ?father-t]
    [?e2 :comment/link ?e4]
    [?e2 :comment/father ?father2]
    [(get-some $ ?father2 :link/id :comment/id) [?father ?father]]
    [?e2 :comment/id ?id]
    [?e2 :comment/text ?text]
    [?e2 :comment/postedBy ?e3]
    [?e2 :comment/createdAt ?createdAt]
    [?e3 :user/name ?postedBy]
    (or-join [?e2 ?id ?text ?postedBy ?createdAt ?father ?votes ?data-point]
             (and [?vote :vote/comment ?e2]
                  [(identity ?vote) ?data-point]
                  [(ground 1) ?votes])
             (and
               [(identity ?e2) ?data-point]
               [(ground 0) ?votes]))])

(def get-user-comments
  '[:find ?id ?text ?postedBy ?createdAt ?father (sum ?votes)
    :with ?data-point
    :keys id text postedBy createdAt father votes
    :in $ ?user-name
    :where
    [?e0 :user/name ?user-name]
    [?e2 :comment/postedBy ?e0]
    [?e2 :comment/link ?e4]
    [?e2 :comment/father ?father2]
    [(get-some $ ?father2 :link/id :comment/id) [?father ?father]]
    [?e2 :comment/id ?id]
    [?e2 :comment/text ?text]
    [?e2 :comment/createdAt ?createdAt]
    [?e0 :user/name ?postedBy]
    (or-join [?e2 ?id ?text ?postedBy ?createdAt ?father ?votes ?data-point]
             (and [?vote :vote/comment ?e2]
                  [(identity ?vote) ?data-point]
                  [(ground 1) ?votes])
             (and
               [(identity ?e2) ?data-point]
               [(ground 0) ?votes]))])

(def get-comments-comment-father
  '[:find ?e ?text ?postedBy ?createdAt ?father (sum ?votes)
    :with ?data-point
    :keys id text postedBy createdAt father votes
    :in $ ?father
    :where
    [?e :comment/id ?father]
    [?e2 :comment/father ?e]
    [?e2 :comment/text ?text]
    [?e2 :comment/postedBy ?e3]
    [?e2 :comment/createdAt ?createdAt]
    [?e3 :user/name ?postedBy]
    (or-join [?e2 ?id ?text ?postedBy ?createdAt ?father ?votes ?data-point]
             (and [?vote :vote/comment ?e2]
                  [(identity ?vote) ?data-point]
                  [(ground 1) ?votes])
             (and
               [(identity ?e2) ?data-point]
               [(ground 0) ?votes]))])

(def get-comment-by-id
  '[:find ?id ?text ?postedBy ?createdAt (sum ?votes) ?father
    :with ?data-point
    :keys id text postedBy createdAt votes father
    :in $ ?id
    :where
    [?e :comment/id ?id]
    [?e :comment/text ?text]
    [?e :comment/father ?father]
    [?e :comment/postedBy ?e3]
    [?e :comment/createdAt ?createdAt]
    [?e3 :user/name ?postedBy]
    (or-join [?e ?id ?text ?postedBy ?createdAt ?votes ?data-point ?father]
             (and [?vote :vote/comment ?e]
                  [(identity ?vote) ?data-point]
                  [(ground 1) ?votes])
             (and
               [(identity ?e) ?data-point]
               [(ground 0) ?votes]))])

(defn- get-father-comment-by-uuid [con item]
  (let [father (:father item)
        db (create-db-con con)
        comment? (first (d/pull db '[:comment/id] father))]
    (if (nil? comment?)
      (second (first (d/pull db '[:link/id] father)))
      (second comment?))))

(def get-user-info-by-name-without-email
  '[:find ?user ?created (sum ?karma)
    :with ?data-point
    :keys username createdat karma
    :in $ ?user
    :where
    [?e :user/name ?user]
    [?e :user/createdAt ?created]
    (or-join [?e ?user ?created ?karma ?data-point]
             (and [?vote :vote/user ?e]
                  [(identity ?vote) ?data-point]
                  [(ground 1) ?karma])
             (and
               [(identity ?e) ?data-point]
               [(ground 0) ?karma]))])

(def get-user-info-by-email
  '[:find ?id ?user ?created (sum ?karma) ?email
    :with ?data-point
    :keys id name createdat karma email
    :in $ ?email
    :where
    [?e :user/email ?email]
    [?e :user/name ?user]
    [?e :user/id ?id]
    [?e :user/createdAt ?created]
    (or-join [?e ?user ?created ?karma ?data-point ?email]
             (and [?vote :vote/user ?e]
                  [(identity ?vote) ?data-point]
                  [(ground 1) ?karma])
             (and
               [(identity ?e) ?data-point]
               [(ground 0) ?karma]))])

(def refresh-token-info
  '[:find ?uuid ?until ?valid ?email
    :keys uuid until valid email
    :in $ ?uuid
    :where
    [?e :auth/refresh_token ?uuid]
    [?e :auth/until ?until]
    [?e :auth/valid ?valid]
    [?e :auth/user ?e2]
    [?e2 :user/email ?email]])

(def get-each-link-vote-count
  '[:find (count ?votes)
    :in $ ?id
    :where
    [?e :link/id ?id]
    [?votes :vote/link ?e]])

(def get-each-comment-vote-count
  '[:find (count ?votes)
    :in $ ?id
    :where
    [?e :comment/id ?id]
    [?votes :vote/comment ?e]])

(defn get-each-link-vote-count-non-zero [db post-id]
  (let [post-votes (ffirst (d/q get-each-link-vote-count db post-id))
        non-null (if (nil? post-votes)
                   0
                   post-votes)]
    non-null))

(defn get-each-comment-vote-count-non-zero [db comment-id]
  (let [comment-votes (ffirst (d/q get-each-comment-vote-count db comment-id))
        non-null (if (nil? comment-votes)
                   0
                   comment-votes)]
    non-null))

(def check-if-user-already-voted-post
  '[:find (count ?votes)
    :in $ ?post-id ?user-email
    :where
    [?e1 :user/email ?user-email]
    [?e2 :link/id ?post-id]
    [?votes :vote/user ?e1]
    [?votes :vote/link ?e2]])

(def check-if-user-already-voted-comment
  '[:find (count ?votes)
    :in $ ?comment-id ?user-email
    :where
    [?e1 :user/email ?user-email]
    [?e2 :comment/id ?comment-id]
    [?votes :vote/user ?e1]
    [?votes :vote/comment ?e2]])

(def get-post-vote-id-entity-retract
  '[:find ?vote-id
    :in $ ?post-id ?user-email
    :where
    [?e1 :user/email ?user-email]
    [?e2 :link/id ?post-id]
    [?votes :vote/user ?e1]
    [?votes :vote/link ?e2]
    [?votes :vote/id ?vote-id]])

(def get-comment-vote-id-entity-retract
  '[:find ?vote-id
    :in $ ?comment-id ?user-email
    :where
    [?e1 :user/email ?user-email]
    [?e2 :comment/id ?post-id]
    [?votes :vote/user ?e1]
    [?votes :vote/comment ?e2]
    [?votes :vote/id ?vote-id]])

(def get-pwd-by-email
  '[:find ?pwd
    :in $ ?email
    :where
    [?e :user/email ?email]
    [?e :user/pwd ?pwd]])

(def get-pwd-by-name
  '[:find ?pwd
    :in $ ?name
    :where
    [?e :user/name ?name]
    [?e :user/pwd ?pwd]])

(def get-link-by-id
  '[:find ?id ?createdAt ?description ?postedBy ?url ?order ?postedby
    :keys id createdAt description postedBy url order postedby
    :in $ ?id
    :where
    [?e :link/id ?id]
    [?e :link/order ?order]
    [?e :link/createdat ?createdAt]
    [?e :link/description ?description]
    [?e :link/postedby ?postedBy]
    [?e :link/url ?url]
    [?e :link/postedby ?e2]
    [?e2 :user/name ?postedby]])


(def get-user-name-by-user-email
  '[:find ?name
    :keys name
    :in $ ?email
    :where
    [?e :user/email ?email]
    [?e :user/name ?name]])

(def post-user-info-by-post-id
  '[:find ?email
    :in $ ?link-id
    :where
    [?e :link/id ?link-id]
    [?e :link/postedby ?e2]
    [?e2 :user/email ?email]])

(def post-user-info-by-comment-id
  '[:find ?email
    :in $ ?comment-id
    :where
    [?e :comment/id ?comment-id]
    [?e :comment/postedBy ?e2]
    [?e2 :user/email ?email]])

(defn- get-votes [db post-id]
  (let [votes (get-each-link-vote-count-non-zero db post-id)]
    {:votes votes}))

(defn- add-votes-item [db result]
  (loop [i 0
         counted []]
    (if (< i (count result))
      (recur (inc i) (conj counted (conj (nth result i) (get-votes db (:id (nth result i))))))
      counted)))

(defn get-feed
  [con skip first order-by]
  (let [db (create-db-con con)
        result (d/q get-links db skip (+ first skip))]
    (sort-by order-by #(compare %2 %1) result)))

(defn get-link
  [con id]
  (let [db (create-db-con con)
        uuid (UUID/fromString id)
        link (first (d/q get-link-by-id db uuid))
        vote-count (get-each-link-vote-count-non-zero db uuid)]
    (conj link {:votes vote-count})))

(defn get-comment
  [con id]
  (let [db (create-db-con con)
        uuid (UUID/fromString id)
        comment (first (d/q get-comment-by-id db uuid))
        father (get-father-comment-by-uuid con comment)]
    (assoc comment :father father)))

(defn get-comments
  [con comment-father-id]
  (let [db (create-db-con con)
        uuid (UUID/fromString comment-father-id)
        comments (d/q get-comments-link-father db uuid)]
    comments))

(defn delete-link
  [con post-id]
  (let [uuid (UUID/fromString post-id)]
    (d/transact con {:tx-data [[:db.fn/retractEntity [:link/id uuid]]]})))

(defn delete-comment
  [con comment-id]
  (let [uuid (UUID/fromString comment-id)]
    (d/transact con {:tx-data [[:db.fn/retractEntity [:comment/id uuid]]]})))

(defn update-link
  [con id description url]
  (let [uuid (UUID/fromString id)
        {result :db-after} (d/transact con {:tx-data [[:db/add [:link/id uuid] :link/url url]
                                                      [:db/add [:link/id uuid] :link/description description]]})]
    (first (d/q get-link-by-id result uuid))))

(defn update-comment
  [con id comment]
  (let [uuid (UUID/fromString id)
        {result :db-after} (d/transact con {:tx-data [[:db/add [:comment/id uuid] :comment/text comment]]})]
    (first (d/q get-comment-by-id result uuid))))

(defn max-order
  [con]
  (let [db (create-db-con con)]
    (d/q '[:find (max ?order)
           :where [_ :link/order ?order]] db)))

(defn post-link
  [con user-email url description]
  (let [order (+ (ffirst (max-order con)) 1)
        now (jt/java-date)
        uuid (UUID/randomUUID)
        request (d/transact con {:tx-data [{:link/id          uuid
                                            :link/description description
                                            :link/url         url
                                            :link/order       order
                                            :link/postedby    [:user/email user-email]
                                            :link/createdat   now
                                            }]})
        result (d/pull (:db-after request) '[:link/id :link/description :link/url :link/order :link/postedby :link/createdat :link/votes] [:link/id uuid])
        format (clj-set/rename-keys result {:link/id :id :link/description :description :link/url :url :link/order :order :link/postedby :postedBy :link/createdat :createdat})
        votes {:votes 0}
        posted-by {:postedBy (:name (first (d/q get-user-name-by-user-email (:db-after request) user-email)))}]
    (conj format votes posted-by)))

(defn signup
  [con email enc-pwd name]
  (d/transact con {:tx-data [{:user/id        (UUID/randomUUID)
                              :user/name      name
                              :user/email     email
                              :user/createdAt (jt/java-date)
                              :user/pwd       enc-pwd}]}))

(defn get-user-pwd [con value]
  (let [db (create-db-con con)]
    (ffirst (d/q get-pwd-by-email db value))))

(defn get-user-info-auth [con value]
  (let [db (create-db-con con)
        pull (d/q get-user-info-by-email db value)]
    (first pull)))

(defn non-registered-mail [con value]
  (let [db (create-db-con con)
        pull (ffirst (d/q get-pwd-by-email db value))]
    (if (nil? pull)
      true
      false)))

(defn non-registered-name [con value]
  (let [db (create-db-con con)
        pull (ffirst (d/q get-pwd-by-name db value))]
    (if (nil? pull)
      true
      false)))

(defn get-post-user-info-by-id [con post-id]
  (let [db (create-db-con con)]
    (ffirst (d/q post-user-info-by-post-id db (UUID/fromString post-id)))))

(defn get-comment-user-info-by-id [con comment-id]
  (let [db (create-db-con con)]
    (ffirst (d/q post-user-info-by-comment-id db (UUID/fromString comment-id)))))

(defn post-id-user-already-voted [con post-id user-email]
  (let [db (create-db-con con)
        votes (ffirst (d/q check-if-user-already-voted-post db (UUID/fromString post-id) user-email))]
    (if (or (= 0 votes) (nil? votes))
      false
      true)))

(defn comment-id-user-already-voted [con comment-id user-email]
  (let [db (create-db-con con)
        votes (ffirst (d/q check-if-user-already-voted-comment db (UUID/fromString comment-id) user-email))]
    (if (or (= 0 votes) (nil? votes))
      false
      true)))

(defn post-id-remove-vote [con post-id user-email]
  (let [db (create-db-con con)
        uuid (UUID/fromString post-id)
        vote-id (ffirst (d/q get-post-vote-id-entity-retract db uuid user-email))
        {result :db-after} (d/transact con {:tx-data [[:db.fn/retractEntity [:vote/id vote-id]]]})]
    (get-each-link-vote-count-non-zero result uuid)))

(defn comment-id-remove-vote [con comment-id user-email]
  (let [db (create-db-con con)
        uuid (UUID/fromString comment-id)
        comment-id (ffirst (d/q get-comment-vote-id-entity-retract db uuid user-email))
        {result :db-after} (d/transact con {:tx-data [[:db.fn/retractEntity [:vote/id comment-id]]]})]
    (get-each-comment-vote-count-non-zero result uuid)))

(defn post-id-add-vote [con post-id user-email]
  (let [uuid (UUID/fromString post-id)
        {result :db-after} (d/transact con {:tx-data [{:vote/id   (UUID/randomUUID)
                                                       :vote/user [:user/email user-email]
                                                       :vote/link [:link/id uuid]}]})]
    (get-each-link-vote-count-non-zero result uuid)))

(defn comment-id-add-vote [con comment-id user-email]
  (let [uuid (UUID/fromString comment-id)
        {result :db-after} (d/transact con {:tx-data [{:vote/id      (UUID/randomUUID)
                                                       :vote/user    [:user/email user-email]
                                                       :vote/comment [:comment/id uuid]}]})]
    (get-each-comment-vote-count-non-zero result uuid)))

(defn post-comment [con user-email comment father-id father-type]
  (let [uuid (UUID/fromString father-id)
        {result :db-after} (d/transact con {:tx-data [{:comment/id        (UUID/randomUUID)
                                                       :comment/createdAt (jt/java-date)
                                                       :comment/postedBy  [:user/email user-email]
                                                       :comment/father    [father-type uuid]
                                                       :comment/text      comment}]})]
    (first (d/q get-comment-by-id result uuid))))

(defn get-user-info-by-name [con user-name]
  (let [db (create-db-con con)]
    (first (d/q get-user-info-by-name-without-email db user-name))))

(defn register-refresh-token [con email]
  (let [until (jt/java-date (jt/plus (jt/instant) (jt/days 30)))
        uuid (UUID/randomUUID)]
    (do
      (d/transact con {:tx-data [{:auth/refresh_token uuid
                                  :auth/until         until
                                  :auth/valid         :true
                                  :auth/user          [:user/email email]}]})
      uuid)))

(defn get-refresh-token-data [con token-uuid]
  (let [db (create-db-con con)
        uuid (UUID/fromString token-uuid)]
    (first (d/q refresh-token-info db uuid))))

(defn get-user-comments-by-user-id [con user-name]
  (let [db (create-db-con con)]
    (d/q get-user-comments db user-name)))

(defn get-user-posts-by-user-id [con user-name]
  (let [db (create-db-con con)]
    (d/q get-user-posts db user-name)))