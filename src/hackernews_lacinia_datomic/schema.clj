(ns hackernews-lacinia-datomic.schema
  "Resolvers for the schema"
  (:require [com.walmartlabs.lacinia.resolve :refer [resolve-as]]
            [hackernews-lacinia-datomic.datomic :as datomic]))

(defn get-feed
  [db]
  (fn [context args value]
    (datomic/get-feed db args)))

(defn get-link
  [db]
  (fn [context args value]
    (datomic/get-link db args)))

(defn delete-link
  [db]
  (fn [context args value]
    (datomic/delete-link db args)))

(defn post
  [db]
  (fn [context args value]
    (datomic/post db args 1)))

(defn update-link
  [db]
  (fn [context args value]
    (datomic/update-link db args)))

(defn signup
  [db]
  (fn [context args value]
    (datomic/signup db args)))

(defn get-user-from-link
  [db]
  (fn [context args value]
    (datomic/get-user-from-link db value)))

(defn get-vote-from-link
  [db]
  (fn [context args value]
    (datomic/get-vote-from-link db value)))

(defn get-user-from-vote
  [db]
  (fn [context args value]
    (datomic/get-user-from-vote db value)))

(defn get-auth-from-user
  [db]
  (fn [context args value]
    (datomic/get-auth-from-user db value)))

(defn get-link-from-vote
  [db]
  (fn [context args value]
    (datomic/get-link-from-vote db value)))

(defn get-link-from-user
  [db]
  (fn [context args value]
    (datomic/get-link-from-user db value)))

(defn return-string
  [db]
  (fn [context args value]
    (str "hello pedestal graphiql - " db)))

(defn resolver-map [db]
  {:query/simple-string   (return-string db)
   :query/feed            (get-feed db)
   :query/link            (get-link db)
   :mutation/delete       (delete-link db)
   :mutation/post         (post db)
   :mutation/signup       (signup db)
   :mutation/update-link  (update-link db)
   :mutation/vote         (return-string "no vote")
   :mutation/login        (return-string "not login")
   :subscription/new-link (return-string "new link sub")
   :subscription/new-vote (return-string "new vote sub")
   :Link/users            (get-link-from-user db)
   :Link/votes            (get-vote-from-link db)
   :User/links            (get-user-from-link db)
   :AuthPayload/User      (get-auth-from-user db)
   :Vote/link             (get-link-from-vote db)
   :Vote/user             (get-vote-from-link db)})