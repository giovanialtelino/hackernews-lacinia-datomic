(ns hackernews-lacinia-datomic.schema
  "Resolvers for the schema"
  (:require  [com.walmartlabs.lacinia.resolve :refer [resolve-as]]
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
      (datomic/post db  args 1 con)))

(defn update-link
  [db]
  (fn [context args value]
      (datomic/update-link  db args)))

(defn signup
  [db]
  (fn [context args value]
    (datomic/signup db args)))

(defn resolver-map
  [db]
     {
      :query/simple-string "Hello sweety pedestal graphiql"
      :query/feed (get-feed db)
     :query/link (get-link db)
     :mutation/delete (delete-link db)
     :mutation/post (post db "")
     :mutation/signup (signup db)
     :mutation/update-link (update-link db)
      })

;:mutation/vote "no vote"
;:mutation/login "not yet"
;:subscription/new-link "nope too"
;:subscription/new-vote "sorry"
