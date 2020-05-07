(ns hackernews-lacinia-datomic.schema
  "Resolvers for the schema"
  (:require [com.walmartlabs.lacinia.resolve :refer [resolve-as]]
            [hackernews-lacinia-datomic.datomic :as datomic]
            [hackernews-lacinia-datomic.authentication :as authentication]
            [hackernews-lacinia-datomic.authorization :as authorization]
            [hackernews-lacinia-datomic.utils :as utils]))

(defn- token-extractor [ctx]
  (:authorization (:headers (:request ctx))))

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
    (let [post-id (:id args)
          bearer-token (token-extractor context)
          post-data (datomic/get-post-user-info-by-id db post-id)
          user-email (:user (authentication/get-user-from-token bearer-token))]
      (if (authorization/authorized-delete-post? post-data user-email)
        (do
          (datomic/delete-link db post-id)
          "Post deleted")
        "Unable to delete post. Not authorized or not logged in."))))

(defn post-link
  [db]
  (fn [context args value]
    (let [bearer-token (token-extractor context)
          {description :description
           url         :url} args]
      (if (and (nil? bearer-token))
        {:description "You must logging to post"}
        (do
          (let [user-email (:user (authentication/get-user-from-token bearer-token))
                validate-url (utils/validate-url url)
                validate-description (utils/validate-description description)]
            (if (and validate-url validate-description)
              (if (authorization/authorized-user-post? db user-email)
                (datomic/post-link db user-email url description)
                {:description "You are not authorized to post"})
              {:description "You must include only https:// links and at least 20 words in the description"})))))))

(defn update-link
  [db]
  (fn [context args value]
    (let [bearer-token (token-extractor context)
          {description :description
           url         :url
           id          :id} args]
      (if (and (nil? bearer-token))
        {:description "You must logging to edit"}
        (do
          (let [post-data (datomic/get-post-user-info-by-id db id)
                user-email (:user (authentication/get-user-from-token bearer-token))
                validate-url (utils/validate-url url)
                validate-description (utils/validate-description description)]
            (if (and validate-url validate-description)
              (if (authorization/authorized-delete-post? post-data user-email)
                (datomic/update-link db id description url)
                {:description "You are not authorized to edit this post"})
              {:description "You must include only https:// links and at least 20 words in the description"})))))))

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
          auth (authentication/login-process clean-email pwd enc-pwd)
          user (datomic/get-user-info-auth db (:user (authentication/get-user-from-token (:token auth))))]
      (conj {} auth user))))

(defn signup
  [db]
  (fn [context args value]
    (let [{email :email
           pwd   :password
           name  :name} args
          enc-pwd (authentication/generate-password-hash pwd)
          clean-name (utils/trim-text name)
          clean-email (utils/low-text (utils/trim-text email))]
      (if (utils/valid-email clean-email db)
        (do
          (datomic/signup db clean-email enc-pwd clean-name)
          ((login-user db) nil {:password pwd :email clean-email} nil))
        {:user  nil
         :token "E-mail is already registered or is invalid."}))))

(defn vote-link [db]
  (fn [context args value]
    (let [bearer-token (token-extractor context)
          post-id (:id args)
          user-email (:user (authentication/get-user-from-token bearer-token))]
      (if (or (nil? post-id) (nil? user-email))
        nil
        (do
          (if (datomic/post-id-user-already-voted db post-id user-email)
            (datomic/post-id-remove-vote db post-id user-email)
            (datomic/post-id-add-vote db post-id user-email)))))))

;(datomic/count-post-votes db post-id) uses db-after to return the new count

(defn resolver-map [db]
  {:query/feed            (get-feed db)
   :query/link            (get-link db)
   :mutation/delete       (delete-link db)
   :mutation/post         (post-link db)
   :mutation/signup       (signup db)
   :mutation/update       (update-link db)
   :mutation/vote         (vote-link db)
   :mutation/login        (login-user db)
   :subscription/new-link (return-string "new link sub")
   :subscription/new-vote (return-string "new vote sub")})