(ns hackernews-lacinia-datomic.schema
  "Resolvers for the schema"
  (:require [com.walmartlabs.lacinia.resolve :refer [resolve-as]]
            [hackernews-lacinia-datomic.datomic :as datomic]
            [hackernews-lacinia-datomic.authentication :as auth]
            [hackernews-lacinia-datomic.utils :as utils]))

(defn get-feed
  [db]
  (fn [context args value]
    (let [result (datomic/get-feed db args)]
      result)))

(defn get-link
  [db]
  (fn [context args value]
    (datomic/get-link db args)))

(defn delete-link
  [db]
  (fn [context args value]
    (datomic/delete-link db args)))

(defn post-link
  [db]
  (fn [context args value]
    (let [bearer-token (:authorization (:headers (:request context)))
          {description :description
           url         :url} args]
      (if (nil? bearer-token)
        {:description "You must logging to post"}
        (do
          (let [user-email (:user (auth/get-user-from-token bearer-token))
                validate-url (utils/validate-url url)
                validate-description (utils/validate-description description)]
            (if (and validate-url validate-description)
              (datomic/post-link db user-email url description)
              {:description "You must include only https:// links and at least 20 words in the description"})))))))

(defn update-link
  [db]
  (fn [context args value]
    (datomic/update-link db args)))

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

(defn login-user
  [db]
  (fn [ctx args value]
    (let [{pwd   :password
           email :email} args
          clean-email (utils/low-text (utils/trim-text email))
          enc-pwd (datomic/get-user-pwd db clean-email)
          auth (auth/login-process clean-email pwd enc-pwd)
          user (datomic/get-user-info-auth db (:user (auth/get-user-from-token (:token auth))))]
      (conj {} auth user))))

(defn signup
  [db]
  (fn [context args value]
    (let [{email :email
           pwd   :password
           name  :name} args
          enc-pwd (auth/generate-password-hash pwd)
          clean-name (utils/trim-text name)
          clean-email (utils/low-text (utils/trim-text email))]
      (if (utils/valid-email clean-email db)
        (do
          (datomic/signup db clean-email enc-pwd clean-name)
          ((login-user db) nil {:password pwd :email clean-email} nil))
        {:user  nil
         :token "E-mail is already registered or is invalid."}))))

(defn resolver-map [db]
  {:query/simple-string   (return-string db)
   :query/feed            (get-feed db)
   :query/link            (get-link db)
   :mutation/delete       (delete-link db)
   :mutation/post         (post-link db)
   :mutation/signup       (signup db)
   :mutation/update-link  (update-link db)
   :mutation/vote         (return-string "no vote")
   :mutation/login        (login-user db)
   :subscription/new-link (return-string "new link sub")
   :subscription/new-vote (return-string "new vote sub")
   :Link/users            (get-user-from-link db)
   :Link/votes            (get-vote-from-link db)
   :User/links            (get-link-from-user db)
   :Vote/link             (get-link-from-vote db)
   :Vote/user             (get-vote-from-link db)})