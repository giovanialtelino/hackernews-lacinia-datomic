(ns hackernews-reframe.events
  (:require
    [re-frame.core :as re-frame]
    [hackernews-reframe.db :as db]
    [day8.re-frame.tracing :refer-macros [fn-traced]]
    [re-graph.core :as re-graph]
    [hackernews-reframe.subs :as subs]
    [secretary.core :as secretary]
    [hackernews-reframe.graphql :as graph]))

(defn- add-local-storage [key value]
  (.setItem js/localStorage key value))

(defn- remove-local-storage [key]
  (.removeItem js/localStorage key))

(defn- get-local-storage [key]
  (.getItem js/localStorage key))

(def re-graph-init {:ws-url          nil
                    :http-url        "http://localhost:8080/graphql"
                    :http-parameters {:with-credentials? false}})

(re-frame/dispatch [::re-graph/init re-graph-init])

(re-frame/reg-event-fx
  ::update-re-graph
  (fn [{db :db} [_ [token refresh]]]
    {:db (assoc-in db [:re-graph :re-graph.internals/default :http-parameters :headers] {"Authorization" token "Refresh" refresh})}))

(re-frame/reg-event-fx
  ::start-headers
  (fn [{db :db} _]
    (let [token (get-local-storage "token")
          refresh (get-local-storage "refresh-token")
          username (get-local-storage "username")]
      {:db       (assoc db :username username)
       :dispatch [::update-re-graph [token refresh]]})))

(re-frame/reg-fx
  :set-local-store
  (fn [array]
    (let [keys (first array)]
      (add-local-storage "username" (:username keys))
      (add-local-storage "token" (:token keys))
      (add-local-storage "refresh-token" (:refresh keys)))))

(re-frame/reg-fx
  :dispatch-panel
  (fn [panel]
    (re-frame/dispatch [::set-active-panel panel])))

(re-frame/reg-fx
  :dispatch-directly
  (fn [route]
    (set! (.-hash (.-location js/window))
          (str "#" (first route)))))

(re-frame/reg-fx
  :remove-local-store
  (fn []
    (remove-local-storage "token")
    (remove-local-storage "username")
    (remove-local-storage "refresh-token")))

(re-frame/reg-event-db
  ::initialize-db
  (fn-traced [_ _]
             db/default-db))

(re-frame/reg-event-db
  ::set-active-panel
  (fn-traced [db [_ active-panel]]
             (assoc db :active-panel active-panel)))

(re-frame/reg-event-db
  ::change-email
  (fn-traced [db [_ email]]
             (assoc db :email email)))

(re-frame/reg-event-db
  ::change-new-email
  (fn-traced [db [_ email]]
             (assoc db :new-email email)))

(re-frame/reg-event-db
  ::change-usr
  (fn-traced [db [_ email]]
             (assoc db :username email)))

(re-frame/reg-event-db
  ::change-new-usr
  (fn-traced [db [_ email]]
             (assoc db :new-usr email)))

(re-frame/reg-event-db
  ::change-comment-type
  (fn-traced [db [_ type]]
             (assoc db :comment-type type)))

(re-frame/reg-event-db
  ::change-pwd
  (fn-traced [db [_ pwd]]
             (assoc db :pwd pwd)))

(re-frame/reg-event-db
  ::new-comment
  (fn-traced [db [_ comment]]
             (assoc db :new-comment comment)))

(re-frame/reg-event-db
  ::change-new-pwd
  (fn-traced [db [_ pwd]]
             (assoc db :new-pwd pwd)))

(re-frame/reg-event-db
  ::change-new-pwd-conf
  (fn-traced [db [_ pwd]]
             (assoc db :pwd-new-conf pwd)))

(re-frame/reg-event-db
  ::change-new-title
  (fn-traced [db [_ title]]
             (assoc db :new-title title)))

(re-frame/reg-event-db
  ::change-new-url
  (fn-traced [db [_ url]]
             (assoc db :new-url url)))

(defn- remove-new-id [news-list id]
  (loop [new []
         i 0]
    (if (< i (count news-list))
      (if (= (:id (nth news-list i)) id)
        (recur new (inc i))
        (recur (conj new (nth news-list i)) (inc i)))
      new)))

(re-frame/reg-event-db
  ::remove-view
  (fn-traced [db [_ id]]
             (assoc db :news-list (remove-new-id (:news-list db) id))))

(re-frame/reg-event-fx
  ::refresh-result
  (fn [{db :db} [_ response]]
    (let [result (get-in response [:data :refresh] nil)
          error (:error result)
          refresh (:refresh result)
          token (:token result)
          username (get-in result [:user :name] nil)
          email (get-in result [:user :email] nil)
          created-at (get-in result [:user :createdat] nil)
          karma (get-in result [:user :karma] nil)]
      {:db              (-> db
                            (assoc :email nil)
                            (assoc :pwd nil)
                            (assoc :loading? false)
                            (assoc :login-error? error)
                            (assoc :username username)
                            (assoc :user-page {:email-user      email
                                               :created-at-user created-at
                                               :karma-user      karma}))
       :dispatch        [::update-re-graph [token refresh]]
       :set-local-store [{:token token :refresh refresh :username username}]})))

(re-frame/reg-event-fx
  ::login-result
  (fn [{db :db} [_ response]]
    (let [login (get-in response [:data :login] nil)
          error (:error login)
          refresh (:refresh login)
          token (:token login)
          username (get-in login [:user :name] nil)
          email (get-in login [:user :email] nil)
          created-at (get-in login [:user :createdat] nil)
          karma (get-in login [:user :karma] nil)
          rmap {:db              (-> db
                                     (assoc :resp response)
                                     (assoc :email nil)
                                     (assoc :pwd nil)
                                     (assoc :loading? false)
                                     (assoc :login-error? error)
                                     (assoc :username username)
                                     (assoc :user-page {:email-user      email
                                                        :created-at-user created-at
                                                        :karma-user      karma}))
                :dispatch        [::update-re-graph [token refresh]]
                :set-local-store [{:token token :refresh refresh :username username}]}]
      (if (and (nil? error) (not (nil? token)))
        (merge rmap {:dispatch-panel :news-panel})
        rmap
        ))))

(re-frame/reg-event-fx
  ::signup-result
  (fn [{db :db} [_ response]]
    (let [login (get-in response [:data :signup] nil)
          error (:error login)
          refresh (:refresh login)
          token (:token login)
          username (get-in login [:user :name] nil)
          email (get-in login [:user :email] nil)
          created-at (get-in login [:user :createdat] nil)
          karma (get-in login [:user :karma] nil)
          rmap {:db              (-> db
                                     (assoc :email nil)
                                     (assoc :pwd nil)
                                     (assoc :loading? false)
                                     (assoc :new-pwd nil)
                                     (assoc :new-email nil)
                                     (assoc :new-usr nil)
                                     (assoc :pwd-new-conf nil)
                                     (assoc :signup-error? error)
                                     (assoc :username username)
                                     (assoc :user-page {:email-user      email
                                                        :created-at-user created-at
                                                        :karma-user      karma}))
                :dispatch        [::update-re-graph [token refresh]]
                :set-local-store [{:token token :refresh refresh :username username}]}]
      (if (and (nil? error) (not (nil? token)))
        (merge rmap {:dispatch-panel :news-panel})
        rmap
        ))))

(re-frame/reg-event-fx
  ::login
  (fn [{db :db} _]
    (let [email @(re-frame/subscribe [::subs/email])
          pwd @(re-frame/subscribe [::subs/pwd])]
      {:dispatch [::re-graph/mutate
                  graph/login
                  {:email    email
                   :password pwd}
                  [::login-result]]
       :db       (assoc db :loading? true)})))

(re-frame/reg-event-fx
  ::refresh
  (fn [{db :db} _]
    (let [not-logged @(re-frame/subscribe [::subs/username])
          refresh-token (get-local-storage "refresh-token")]
      (if (and (not (nil? refresh-token)) (nil? not-logged))
        {:dispatch [::re-graph/mutate
                    graph/refresh
                    {}
                    [::refresh-result]]
         :db       (assoc db :loading? true)}))))

(re-frame/reg-event-fx
  ::sign
  (fn [{db :db} _]
    (let [email @(re-frame/subscribe [::subs/new-email])
          pwd @(re-frame/subscribe [::subs/new-pwd])
          name @(re-frame/subscribe [::subs/new-usr])]
      {:dispatch [::re-graph/mutate
                  graph/sign
                  {:email    email
                   :password pwd
                   :name     name}
                  [::signup-result]]
       :db       (assoc db :loading? true)})))

(re-frame/reg-event-fx
  ::submit-result
  (fn [{db :db} [_ response]]
    {:db (assoc db :response response)}))

(re-frame/reg-event-fx
  ::submit-post
  (fn [{db :db} _]
    (let [title @(re-frame/subscribe [::subs/new-title])
          url @(re-frame/subscribe [::subs/new-url])]
      {:dispatch [::re-graph/mutate
                  graph/post
                  {:description title
                   :url         url}
                  [::submit-result]]
       :db       (assoc db :loading? true)})))

(re-frame/reg-event-fx
  ::logout
  (fn [{db :db} _]
    {:remove-local-store []
     :dispatch           [::update-re-graph nil]
     :db                 (assoc db :username nil)}))

(re-frame/reg-event-fx
  ::get-news-result
  (fn [{db :db} [_ response]]
    (let [news (get-in response [:data :feed])]
      {:db (assoc db :news-list news)})))

(re-frame/reg-event-fx
  ::get-news
  (fn [{db :db} _]
    (let [current-page @(re-frame/subscribe [::subs/news-page])
          first 30
          skip (* first current-page)]
      {:db       (assoc db :loading-news? true)
       :dispatch [::re-graph/query
                  graph/feed
                  {:first   first
                   :orderby "ASC"
                   :skip    skip}
                  [::get-news-result]]})))

(defn- update-votes-news [news-list id votes]
  (loop [new []
         i 0]
    (if (< i (count news-list))
      (if (= (:id (nth news-list i)) id)
        (recur (conj new (assoc (nth news-list i) :votes votes)) (inc i))
        (recur (conj new (nth news-list i)) (inc i)))
      new)))

(re-frame/reg-event-db
  ::get-new-vote-count
  (fn-traced [db [_ id response]]
             (assoc db :news-list (update-votes-news (:news-list db) id (get-in response [:data :vote] 0)))))

(re-frame/reg-event-db
  ::get-new-comment-vote-count
  (fn-traced [db [_ id response]]
             (assoc db :comment-list (update-votes-news (:comment-list db) id (get-in response [:data :comment_vote] 0)))))

(re-frame/reg-event-fx
  ::vote
  (fn [_ [_ id]]
    {:dispatch [::re-graph/mutate
                graph/vote
                {:id id}
                [::get-new-vote-count id]]}))

(re-frame/reg-event-fx
  ::vote-comment
  (fn [_ [_ id]]
    {:dispatch [::re-graph/mutate
                graph/vote-comment
                {:id id}
                [::get-new-comment-vote-count id]]}))

(re-frame/reg-event-db
  ::clean-user-info
  (fn-traced [db _]
             (assoc db :generic-user nil)))

(re-frame/reg-event-db
  ::result-user-info
  (fn-traced [db [_ response]]
             (let [user (get-in response [:data :userdescription])
                   username (:username user)
                   karma (:karma user)
                   createdat (:createdat user)]
               (assoc db :generic-user {:username   username
                                        :karma      karma
                                        :created-at createdat}))))

(re-frame/reg-event-fx
  ::get-user-info-by-name
  (fn [_ [_ name]]
    {:dispatch [::re-graph/query
                graph/user-description
                {:name name}
                [::result-user-info]]}))

(re-frame/reg-event-fx
  ::update-comment-main-father
  (fn [{db :db} [_ father extra]]
    {:db (assoc db :main-father father)}))

(defn- specific-news-list-value [id news-list]
  (let [news-count (count news-list)]
    (loop [i 0
           found nil]
      (if (and (< i news-count) (nil? found))
        (if (= id (:id (nth news-list i)))
          (recur (inc i) nil)
          found)
        ""
        ))))

(re-frame/reg-event-fx
  ::result-get-comments-father
  (fn [{db :db} [_ father response]]
    (let [comments (get-in response [:data :comments])]
      {:db       (assoc db :comment-list comments)
       :dispatch [::get-link father]})))

(re-frame/reg-event-fx
  ::get-father-comments
  (fn [_ [_ father]]
    {:dispatch [::re-graph/query
                graph/get-comments
                {:father father}
                [::result-get-comments-father father]]}))

(re-frame/reg-event-fx
  ::result-get-comments
  (fn [{db :db} [_ response]]
    (let [comment (get-in response [:data :comment])]
      {:db (assoc db :reply-comment comment)})))

(re-frame/reg-event-fx
  ::get-comment
  (fn [_ [_ comment]]
    {:dispatch [::re-graph/query
                graph/get-comment
                {:id comment}
                [::result-get-comments]]}))

(re-frame/reg-event-db
  ::clean-comments
  (fn [db _]
    (assoc db :comment-list nil)))

(re-frame/reg-event-db
  ::clean-posts
  (fn [db _]
    (assoc db :news-list nil)))

(re-frame/reg-event-db
  ::result-get-user-comments
  (fn-traced [db [_ response]]
             (let [comments (get-in response [:data :user_comments])]
               (assoc db :comment-list comments :main-father nil))))

(re-frame/reg-event-fx
  ::get-user-comments
  (fn [_ [_ user]]
    {:dispatch [::re-graph/query
                graph/get-user-comments
                {:user user}
                [::result-get-user-comments]]}))

(re-frame/reg-event-fx
  ::result-get-user-posts
  (fn [{db :db} [_ response]]
    (let [news (get-in response [:data :user_posts])]
      {:db (assoc db :news-list news)})))

(re-frame/reg-event-fx
  ::get-user-posts
  (fn [_ [_ user]]
    {:dispatch [::re-graph/query
                graph/get-user-posts
                {:user user}
                [::result-get-user-posts]]}))

(defn- remove-comment [comment-list id]
  (loop [new []
         i 0]
    (if (< i (count comment-list))
      (if (= (:id (nth comment-list i)) id)
        (recur new (inc i))
        (recur (conj new (nth comment-list i)) (inc i)))
      new)))

(re-frame/reg-event-fx
  ::result-delete-comment
  (fn [{db :db} [_ id response]]
    (let [result (get-in response [:data :comment_delete])]
      (if (= result "Post deleted")
        {:db (assoc db :comment-list (remove-comment (:comment-list db) id))}))))

(re-frame/reg-event-fx
  ::delete-comment
  (fn [_ [_ id]]
    {:dispatch [::re-graph/mutate
                graph/delete-comment
                {:id id}
                [::result-delete-comment id]]}))

(re-frame/reg-event-fx
  ::result-get-link
  (fn [{db :db} [_ response]]
    (let [result (get-in response [:data :link])]
      {:db (assoc db :main-father result)})))

(re-frame/reg-event-fx
  ::get-link
  (fn [_ [_ id]]
    {:dispatch [::re-graph/query
                graph/get-link
                {:id id}
                [::result-get-link]]}))

(re-frame/reg-event-fx
  ::result-post-comment
  (fn [{db :db} [_ type response]]
    (println type)
    (let [returned-comment (get-in response [:data :comment_post])
          result-map {:dispatch-directly [(str "/comments/" (:linkId returned-comment))]
                      :db                (assoc db :reply-comment "" :new-comment "")}]
      (if (nil? (:error returned-comment))
        (if (= type "link")
          (merge result-map {:dispatch [::get-father-comments (:linkId returned-comment)]})
          result-map)))))

(re-frame/reg-event-fx
  ::post-comment
  (fn [_ [_ _]]
    (let [comment @(re-frame/subscribe [::subs/new-comment])
          type @(re-frame/subscribe [::subs/comment-type])
          father (if (= type "link")
                   @(re-frame/subscribe [::subs/main-father-id])
                   @(re-frame/subscribe [::subs/new-comment-father-id]))
          link (if (= type "link")
                 @(re-frame/subscribe [::subs/main-father-id])
                 @(re-frame/subscribe [::subs/new-comment-link-id]))]
      {:dispatch [::re-graph/mutate
                  graph/post-comment
                  {:comment comment
                   :type    type
                   :father  father
                   :link    link}
                  [::result-post-comment type]]})))