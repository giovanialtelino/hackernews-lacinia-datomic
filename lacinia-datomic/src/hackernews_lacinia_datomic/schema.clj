(ns hackernews-lacinia-datomic.schema
  "Resolvers for the schema"
  (:require [com.walmartlabs.lacinia.resolve :refer [resolve-as]]
            [hackernews-lacinia-datomic.datomic :as datomic]
            [hackernews-lacinia-datomic.authentication :as authentication]
            [hackernews-lacinia-datomic.authorization :as authorization]
            [hackernews-lacinia-datomic.utils :as utils]))

(defn- token-extractor [ctx]
  (:authorization (:headers (:request ctx))))

(defn- refresh-extractor [ctx]
  (:refresh (:headers (:request ctx))))

(defn get-feed
  [db]
  (fn [context args value]
    (let [{skip     :skip
           first    :first
           order-by :orderby} args
          skip-c (if (nil? skip) 0 skip)
          first-c (if (nil? first) 10 first)
          order-by-c (utils/organize-order-by order-by)]
      (datomic/get-feed db skip-c first-c order-by-c))))

(defn get-link
  [db]
  (fn [context args value]
    (let [post-id (:id args)]
      (datomic/get-link db post-id))))

(defn get-comment
  [db]
  (fn [context args value]
    (let [comment-id (:id args)]
      (datomic/get-comment db comment-id))))

(defn get-comments
  [db]
  (fn [context args value]
    (let [comment-father-id (:father args)]
      (datomic/get-comments db comment-father-id))))

(defn get-user-comments
  [db]
  (fn [ctx args value]
    (let [user-id (:user args)]
      (datomic/get-user-comments-by-user-id db user-id))))

(defn get-user-posts
  [db]
  (fn [ctx args value]
    (let [user-id (:user args)]
      (datomic/get-user-posts-by-user-id db user-id))))

(defn get-user-description
  [db]
  (fn [context args value]
    (let [user-name (:name args)]
      (datomic/get-user-info-by-name db user-name))))

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
        {:error "You must logging to post"}
        (do
          (let [user-email (:user (authentication/get-user-from-token bearer-token))
                validate-url (utils/validate-url url)
                validate-description (utils/validate-description description)]
            (if (and validate-url validate-description)
              (if (authorization/authorized-user-post? db user-email)
                (datomic/post-link db user-email url description)
                {:error "You are not authorized to post"})
              {:error "You must include only https:// links and at least 20 words in the description"})))))))

(defn update-link
  [db]
  (fn [context args value]
    (let [bearer-token (token-extractor context)
          {description :description
           url         :url
           id          :id} args]
      (if (and (nil? bearer-token))
        {:error "You must logging to edit"}
        (do
          (let [post-data (datomic/get-post-user-info-by-id db id)
                user-email (:user (authentication/get-user-from-token bearer-token))
                validate-url (utils/validate-url url)
                validate-description (utils/validate-description description)]
            (if (and validate-url validate-description)
              (if (authorization/authorized-delete-post? post-data user-email)
                (datomic/update-link db id description url)
                {:error "You are not authorized to edit this post"})
              {:error "You must include only https:// links and at least 20 words in the description"})))))))

(defn login-user
  [db]
  (fn [ctx args value]
    (let [{pwd   :password
           email :email} args
          clean-email (utils/low-text (utils/trim-text email))
          enc-pwd (datomic/get-user-pwd db clean-email)
          auth (authentication/login-process clean-email pwd enc-pwd)
          refresh-token (authentication/generate-refresh-token db clean-email pwd enc-pwd)]
      (if (not (nil? auth))
        {:user (datomic/get-user-info-auth db clean-email) :token auth :refresh refresh-token}
        {:error "Login wasn't possible, password or email are invalid."}))))

(defn refresh
  [db]
  (fn [ctx args value]
    (let [refresh (refresh-extractor ctx)
          result (authentication/refresh-process db refresh)]
      result)))

(defn signup
  [db]
  (fn [context args value]
    (let [{email :email
           pwd   :password
           name  :name} args
          enc-pwd (authentication/generate-password-hash pwd)
          clean-name (utils/trim-text name)
          clean-email (utils/low-text (utils/trim-text email))]
      (if (and (utils/valid-email clean-email db) (utils/valid-name clean-name db))
        (do
          (datomic/signup db clean-email enc-pwd clean-name)
          ((login-user db) nil {:password pwd :email clean-email} nil))
        {:user  nil
         :error "E-mail or name are already registered or e-mail is invalid."}))))

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

(defn post-comment [db]
  (fn [context args value]
    (let [bearer-token (token-extractor context)
          {comment     :comment
           father-type :type
           link-id   :link
           father-id :father} args]
      (if (and (nil? bearer-token))
        {:error "You must logging to comment"}
        (do
          (let [user-email (:user (authentication/get-user-from-token bearer-token))
                validate-comment (utils/validate-comment comment)
                validated-father (utils/validate-father-type father-type)]
            (if (and validate-comment (not (nil? validated-father)))
              (if (authorization/authorized-user-comment? db user-email)
                (datomic/post-comment db user-email comment link-id father-id validated-father)
                {:error "You are not authorized to comment"})
              {:error "You must include at least two characters in each comment"})))))))

(defn vote-comment [db]
  (fn [context args value]
    (let [bearer-token (token-extractor context)
          comment-id (:id args)]
      (if (or (nil? comment-id) (nil? bearer-token))
        nil
        (do
          (let [user-email (:user (authentication/get-user-from-token bearer-token))]
            (if (datomic/comment-id-user-already-voted db comment-id user-email)
              (datomic/comment-id-remove-vote db comment-id user-email)
              (datomic/comment-id-add-vote db comment-id user-email))))))))

(defn delete-comment [db]
  (fn [context args value]
    (let [comment-id (:id args)
          bearer-token (token-extractor context)]
      (if (or (nil? comment-id) (nil? bearer-token))
        "Invalid login or comment to delete."
        (do
          (let [post-data (datomic/get-comment-user-info-by-id db comment-id)
                user-email (:user (authentication/get-user-from-token bearer-token))]
            (if (authorization/authorized-delete-comment? post-data user-email)
              (do
                (datomic/delete-comment db comment-id)
                "Post deleted")
              "Unable to delete post. Not authorized or not logged in.")))))))

(defn edit-comment [db]
  (fn [context args value]
    (let [bearer-token (token-extractor context)
          {comment :comment
           id      :id} args]
      (if (or (nil? bearer-token) (nil? id))
        {:error "You must logging to edit."}
        (do
          (let [comment-data (datomic/get-comment-user-info-by-id db id)
                user-email (:user (authentication/get-user-from-token bearer-token))
                validate-comment (utils/validate-comment comment)]
            (if (and validate-comment)
              (if (authorization/authorized-delete-comment? comment-data user-email)
                (datomic/update-comment db id comment)
                {:error "You are not authorized to edit this comment"})
              {:error "You must include at least two characters in each comment"})))))))

(defn resolver-map [db]
  {:query/feed              (get-feed db)
   :query/link              (get-link db)
   :query/comment           (get-comment db)
   :query/comments          (get-comments db)
   :query/user_comments     (get-user-comments db)
   :query/user_posts        (get-user-posts db)
   :query/user_description  (get-user-description db)
   :mutation/delete         (delete-link db)
   :mutation/post           (post-link db)
   :mutation/signup         (signup db)
   :mutation/update         (update-link db)
   :mutation/vote           (vote-link db)
   :mutation/login          (login-user db)
   :mutation/refresh        (refresh db)
   :mutation/post_comment   (post-comment db)
   :mutation/vote_comment   (vote-comment db)
   :mutation/delete_comment (delete-comment db)
   :mutation/edit_comment   (edit-comment db)})