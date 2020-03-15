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
  [db con]
  (fn [context args value]
    (datomic/post db args 1 con)))

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
  [{{:keys [datomic]} :components
    {:keys [value]}   :interceptor}]
  (datomic/get-link-from-user datomic value))

(defn return-string
  [x]
  (fn [context args value]
    (str "hello pedestal graphiql - " x)))

(def resolver-map
  {:query/simple-string   (return-string "simple-string")
   :query/feed            (return-string "simple-string")
   :query/link            (return-string "simple-string")
   :mutation/delete       (return-string "simple-string")
   :mutation/post         (return-string "simple-string")
   :mutation/signup       (return-string "simple-string")
   :mutation/update-link  (return-string "simple-string")
   :mutation/vote         (return-string "no vote")
   :mutation/login        (return-string "not login")
   :subscription/new-link (return-string "new link sub")
   :subscription/new-vote (return-string "new vote sub")
   :Link/users            (return-string "simple-string")
   :Link/votes            (return-string "simple-string")
   :User/links            (return-string "simple-string")
   :AuthPayload/User      (return-string "simple-string")
   :Vote/link             (return-string "simple-string")
   :Vote/user             (return-string "simple-string")})