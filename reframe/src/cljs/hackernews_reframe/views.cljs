(ns hackernews-reframe.views
  (:require
    [reagent.core :as reagent]
    [re-frame.core :as re-frame]
    [hackernews-reframe.subs :as subs]
    [hackernews-reframe.events :as events]
    [hackernews-reframe.routes :as routes]))

(defn- main-link [main]
  (let [{description :description
         postedBy    :postedBy
         votes       :votes
         comments    :comments
         createdAt   :createdAt
         id          :id
         url         :url
         order       :order
         error       :error} main]
    ^{:key id} [:article.media
                [:figure.media-left
                 [:a.like-dislike
                  {:on-click #(re-frame/dispatch [::events/vote id])}
                  [:i.fas.fa-arrow-up]]]
                [:div.media-content
                 [:div#small-content.content
                  [:p [:a {:href url} [:strong description]]]]
                 [:nav.level.is-mobile
                  [:div.content
                   [:small " " votes " points by "] [:small [:a {:href (routes/hn-user {:name postedBy})} postedBy]] [:small " created at " createdAt]
                   [:a {:href (routes/hn-comment {:father id})} [:small " " comments " comments"]]
                   [:div.control
                    [:textarea.textarea.is-info {:rows      3
                                                 :value     @(re-frame/subscribe [::subs/new-comment])
                                                 :on-change #(re-frame/dispatch [::events/new-comment (-> % .-target .-value)])}]
                    [:button.button.button-spacer {:on-click #(re-frame/dispatch [::events/post-comment])} "Post comment"]]]]]]))

(defn- answer-comment [comment]
  (let [{id        :id
         linkId    :linkId
         linkText  :linkText
         postedBy  :postedBy
         text      :text
         createdAt :createdAt
         } comment]
    [:article.media
     [:figure.media-left
      [:a.like-dislike
       {:on-click #(re-frame/dispatch [::events/vote id])}
       [:i.fas.fa-arrow-up]]]
     [:div.media-content
      [:div#small-content.content
       [:small [:a {:href (routes/hn-user {:name postedBy})} postedBy]] [:small " posted at " createdAt] [:small " | on: " [:a {:href (routes/hn-comment {:father linkId})} linkText] ""]
       [:p [:strong text]]]
      [:nav.level.is-mobile
       [:div.content
        [:a {:href (routes/hn-comment {:father id})}]
        [:div.control
         [:textarea.textarea.is-info {:rows      3
                                      :value     @(re-frame/subscribe [::subs/new-comment])
                                      :on-change #(re-frame/dispatch [::events/new-comment (-> % .-target .-value)])}]
         [:button.button.button-spacer {:on-click #(re-frame/dispatch [::events/post-comment])} "Post comment"]]]]]]))

(defn answer-comment-panel []
  (let [comment @(re-frame/subscribe [::subs/reply-comment])]
    [:div.container-fluid
     (if-not (nil? comment)
       (answer-comment comment))]))

(defn- comment-row [comment-id posted-by comment date votes lvl]
  (let [username @(re-frame/subscribe [::subs/username])
        delete? (if (= posted-by username)
                  [:small " - " [:a {:on-click #(re-frame/dispatch [::events/delete-comment comment-id])} "delete"]]
                  "")
        edit? (if (= posted-by username)
                [:small " - " [:a "edit"]]
                "")]
    ^{:key comment-id} [:article.media {:style {:padding-left (str (* lvl 0.2) "rem")}}
                        [:figure.media-left
                         [:a.like-dislike
                          {:on-click #(re-frame/dispatch [::events/vote-comment comment-id])}
                          [:i.fas.fa-arrow-up]]]
                        [:div.media-content
                         [:div#small-content.content
                          [:p [:small "posted by "] [:a {:href (routes/hn-user {:name posted-by})} posted-by]
                           [:small " created at " date]
                           [:small " - votes " votes]
                           delete?
                           edit?
                           ]]
                         [:p [:span comment]]
                         [:span [:a {:href (routes/reply-comment {:comment comment-id})} [:small "reply"]]]]]))

(defn- list-update-in [l i x]
  (let [newlist (take i l)
        newlist (concat newlist (list x))
        newlist (concat newlist (drop (+ 1 i) l))]
    newlist))

(defn- post-row [post-id title posted-by points comments-count created-at url]
  ^{:key post-id} [:article.media
                   [:figure.media-left
                    [:a.like-dislike
                     {:on-click #(re-frame/dispatch [::events/vote post-id])}
                     [:i.fas.fa-arrow-up]]]
                   [:div.media-content
                    [:div#small-content.content
                     [:p
                      [:small " " points " points by "] [:a {:href (routes/hn-user {:name posted-by})} posted-by] [:small " created at " created-at]
                      [:br] [:a {:href url} [:strong title]]]]
                    [:nav.level.is-mobile
                     [:div.level-left
                      [:a.level-item {:on-click #(re-frame/dispatch [::events/remove-view post-id])} [:small "hide"]]
                      [:a.level-item {:href (routes/hn-comment {:father post-id})} [:small " " comments-count " comments"]]]]]])

(defn- insert-index [v i e]
  (vec (concat (subvec v 0 i) [e] (subvec v i))))

(defn- remove-by-index [v i]
  (vec (concat (subvec v 0 i) (subvec v (inc i)))))

(defn- organize-print-comments-linear-second-step [a m]
  (loop [i (dec (count m))
         f 0
         depth 1
         added a
         missing m]
    (if (< 0 i)
      (if (= (:father (nth missing i)) (:id (nth added f)))
        (recur (dec i) f depth (insert-index added (inc f) {:id  (:id (nth missing i))
                                                                  :row (comment-row (:id (nth missing i))
                                                                                    (:postedBy (nth missing i))
                                                                                    (:text (nth missing i))
                                                                                    (:createdAt (nth missing i))
                                                                                    (:votes (nth missing i))
                                                                                    (* depth 3))}) (remove-by-index missing i))
        (recur (dec i) f depth added missing))
      (if (> (dec (count added)) f)
        (recur (dec (count missing)) (inc f) (inc depth) added missing)
        added))))

(defn- organize-print-comments-linear [comments father]
  (loop [i (dec (count comments))
         missing []
         added []]
    (if (< 0 i)
      (if (= father (:father (nth comments i)))
        (recur (dec i) missing (conj added {:id  (:id (nth comments i))
                                            :row (comment-row (:id (nth comments i))
                                                              (:postedBy (nth comments i))
                                                              (:text (nth comments i))
                                                              (:createdAt (nth comments i))
                                                              (:votes (nth comments i))
                                                              0)}))
        (recur (dec i) (conj missing (nth comments i)) added))
      (if (empty? missing)
        added
        (organize-print-comments-linear-second-step added missing)))))

(defn comment-panel []
  (let [comment-list @(re-frame/subscribe [::subs/comments-list])
        main @(re-frame/subscribe [::subs/comment-father])
        main-father-id (:id main)]
    [:div.container-fluid
     (if-not (nil? main) (main-link main))
     (if (and (not (nil? main-father-id)) (not (empty? comment-list)))
       (let [comments (organize-print-comments-linear comment-list main-father-id)
             counter (count comments)]
         (for [i (range counter)]
           (:row (nth comments i)))))]))

(defn- extract-news-panel [item]
  (let [{description :description
         postedby    :postedBy
         votes       :votes
         comments    :comments
         createdat   :createdAt
         id          :id
         url         :url} item]
    (post-row id description postedby votes comments createdat url)))

(defn news-panel []
  (let [news-list @(re-frame/subscribe [::subs/news-list])]
    [:div.container-fluid
     (for [i (range (count news-list))]
       (extract-news-panel (nth news-list i)))]))

(defn login-panel []
  [:div.container
   [:div.columns.is-centered
    [:div.field.column.is-4
     [:label.label "Username"]
     [:p.control.has-icons-left
      [:div.control
       [:input.input {:type        "text"
                      :placeholder "Username"
                      :value       @(re-frame/subscribe [::subs/email])
                      :on-change   #(re-frame/dispatch [::events/change-email (-> % .-target .-value)])}]]
      [:span.icon.is-small.is-left
       [:i.fas.fa-user]]]]
    [:div.field.column.is-4
     [:label.label "Password"]
     [:p.control.has-icons-left
      [:div.control
       [:input.input {:type        "password"
                      :placeholder "Password"
                      :value       @(re-frame/subscribe [::subs/pwd])
                      :on-change   #(re-frame/dispatch [::events/change-pwd (-> % .-target .-value)])}]]
      [:span.icon.is-small.is-left
       [:i.fas.fa-lock]]]]]
   [:div.columns.is-centered
    [:div.field.is-grouped
     [:div.control
      [:button.button.is-success
       {:on-click #(re-frame/dispatch [::events/login])} "Login"]]
     [:div.control
      [:button.button.is-light "Forgot Password"]]]]
   (let [login-error @(re-frame/subscribe [::subs/login-error])]
     (if-not (nil? login-error)
       [:div.columns.is-centered.space-left [:span [:strong login-error]]]))])

(defn post-panel []
  [:div.container
   [:div.field
    [:label.label "Title"]
    [:div.control
     [:input.input {:type        "text"
                    :placeholder "Post Title"
                    :value       @(re-frame/subscribe [::subs/new-title])
                    :on-change   #(re-frame/dispatch [::events/change-new-title (-> % .-target .-value)])}]]]
   [:div.field
    [:label.label "URL"]
    [:div.control
     [:input.input {:type        "text"
                    :placeholder "Article HTTPS URL"
                    :value       @(re-frame/subscribe [::subs/new-url])
                    :on-change   #(re-frame/dispatch [::events/change-new-url (-> % .-target .-value)])}]]]
   [:div.field
    [:div.control
     (let [non-nil @(re-frame/subscribe [::subs/non-nil-url-subs])
           usr (nil? @(re-frame/subscribe [::subs/username]))]
       (if (or non-nil usr)
         [:button.button.is-danger "Submit"]
         [:button.button.is-success
          {:on-click #(re-frame/dispatch [::events/submit-post])}
          "Submit"]))]]])

(defn past-panel []
  [:div.container-fluid
   [:div.columns.is-centered.space-left
    [:div.field.column.is-3
     [:label.label "Date"]
     [:div.field.has-addons
      [:p.control.has-icons-left
       [:div.control
        [:input.input {:type "date"}]]
       [:span.icon.is-small.is-left
        [:i.fas.fa-calendar]]]
      [:div.control
       [:a.button.is-info "Search"]]]]
    [:div.field.column.is-3
     [:label.label "Keyword"]
     [:div.field.has-addons
      [:p.control.has-icons-left
       [:div.control
        [:input.input {:type "text" :placeholder "Search Keyword"}]]
       [:span.icon.is-small.is-left
        [:i.fas.fa-search]]]
      [:div.control
       [:a.button.is-info "Search"]]]]]])

(defn sign-panel []
  [:div.container
   [:div.columns.is-centered
    [:div.field.column.is-4
     [:label.label "Username"]
     [:p.control.has-icons-left
      [:div.control
       [:input.input {:type        "text"
                      :placeholder "Username"
                      :value       @(re-frame/subscribe [::subs/new-usr])
                      :on-change   #(re-frame/dispatch [::events/change-new-usr (-> % .-target .-value)])
                      }]]
      [:span.icon.is-small.is-left
       [:i.fas.fa-user]]]]
    [:div.field.column.is-4
     [:label.label "Email"]
     [:p.control.has-icons-left
      [:div.control
       [:input.input {:type        "text"
                      :placeholder "Email"
                      :value       @(re-frame/subscribe [::subs/new-email])
                      :on-change   #(re-frame/dispatch [::events/change-new-email (-> % .-target .-value)])
                      }]]
      [:span.icon.is-small.is-left
       [:i.fas.fa-envelope]]]]]
   [:div.columns.is-centered
    [:div.field.column.is-4
     [:label.label "Password"]
     [:p.control.has-icons-left
      [:div.control
       [:input.input {:type        "password"
                      :placeholder "Password"
                      :value       @(re-frame/subscribe [::subs/new-pwd])
                      :on-change   #(re-frame/dispatch [::events/change-new-pwd (-> % .-target .-value)])
                      }]]
      [:span.icon.is-small.is-left
       [:i.fas.fa-lock]]]]
    [:div.field.column.is-4
     [:label.label "Confirm Password"]
     [:p.control.has-icons-left
      [:div.control
       [:input.input {:type        "password"
                      :placeholder "Password"
                      :value       @(re-frame/subscribe [::subs/pwd-new-conf])
                      :on-change   #(re-frame/dispatch [::events/change-new-pwd-conf (-> % .-target .-value)])}]]
      [:span.icon.is-small.is-left
       [:i.fas.fa-lock]]]]]
   [:div.columns.is-centered
    [:div.field.column.is-1
     [:div.control
      (let [equal @(re-frame/subscribe [::subs/confirm-pwd])
            not-nil (nil? @(re-frame/subscribe [::subs/new-pwd]))]
        (if (and equal (not not-nil))
          [:button.button.is-success.login-btn
           {:on-click #(re-frame/dispatch [::events/sign])}
           "Create User"]
          [:button.button.is-danger.login-btn "Create User"]
          ))]]]

   (let [login-error @(re-frame/subscribe [::subs/signup-error])]
     (if-not (nil? login-error)
       [:div.columns.is-centered.space-left [:span [:strong login-error]]]))])

(defn- avoid-null [x]
  (if (nil? x)
    ""
    x))

(defn generic-user-panel []
  (let [username (avoid-null @(re-frame/subscribe [::subs/username-generic]))
        karma (avoid-null @(re-frame/subscribe [::subs/karma-generic]))
        created (avoid-null @(re-frame/subscribe [::subs/created-at-generic]))]
    [:div.container-fluid
     [:div.columns.space-left
      [:div.column.is-2.column-text
       [:label.label "Username"]]
      [:div.column.is-3.column-text
       [:input.input {:type     "text"
                      :readOnly true
                      :value    username}]]]

     [:div.columns.space-left
      [:div.column.is-2.column-text
       [:label.label "Created At"]]
      [:div.column.is-2.column-text
       [:input.input {:type     "text"
                      :readOnly true
                      :value    created}]]]

     [:div.columns.space-left
      [:div.column.is-2.column-text
       [:label.label "Karma"]]
      [:div.column.is-2.column-text
       [:input.input {:type     "text"
                      :readOnly true
                      :value    karma}]]]

     [:div.columns.is-centered.space-left
      [:div.column.is-2
       [:a {:href (routes/user-posts {:user username})}
        [:button.button
         [:small "Posts"]]]]
      [:div.column.is-2
       [:a
        {:href (routes/user-comments {:user username})}
        [:button.button
         [:small "Comments"]]]]]]))

(defn user-panel []
  (let [username (avoid-null @(re-frame/subscribe [::subs/username]))
        email-user (avoid-null @(re-frame/subscribe [::subs/email-user]))
        karma (avoid-null @(re-frame/subscribe [::subs/karma-user]))
        created (avoid-null @(re-frame/subscribe [::subs/created-at-user]))]
    [:div.container-fluid
     [:div.columns.space-left
      [:div.column.is-2.column-text
       [:label.label "Username"]]
      [:div.column.is-3.column-text
       [:input.input {:type     "text"
                      :readOnly true
                      :value    username}]]]

     [:div.columns.space-left
      [:div.column.is-2.column-text
       [:label.label "E-Mail"]]
      [:div.column.is-3.column-text
       [:input.input {:type     "text"
                      :readOnly true
                      :value    email-user}]]]

     [:div.columns.space-left
      [:div.column.is-2.column-text
       [:label.label "Created At"]]
      [:div.column.is-2.column-text
       [:input.input {:type     "text"
                      :readOnly true
                      :value    created}]]]

     [:div.columns.space-left
      [:div.column.is-2.column-text
       [:label.label "Karma"]]
      [:div.column.is-2.column-text
       [:input.input {:type     "text"
                      :readOnly true
                      :value    karma}]]]

     [:div.columns.is-centered.space-left
      [:div.column.is-2
       [:a {:href (routes/user-posts {:user username})}
        [:button.button
         [:small "Posts"]]]]
      [:div.column.is-2
       [:a
        {:href (routes/user-comments {:user username})}
        [:button.button
         [:small "Comments"]]]]]]))

(defn- panels [panel-name]
  (case panel-name
    :news-panel [news-panel]
    :login-panel [login-panel]
    :post-panel [post-panel]
    :past-panel [past-panel]
    :sign-panel [sign-panel]
    :comment-panel [comment-panel]
    :answer-comment-panel [answer-comment-panel]
    :user-panel [user-panel]
    :generic-user-panel [generic-user-panel]
    [:div]))

(defn show-panel [panel-name]
  [panels panel-name])

(defn main-panel []
  [:div.container-fluid
   [:nav#main-nav.navbar.item-a {:role "navigation" :aria-label "main navigation"}
    [:div.navbar-brand
     [:a.navbar-item {:href (routes/home)}
      [:i#h-n.fab.fa-hacker-news]]
     [:a.navbar-burger.burger {:role "button" :aria-label "menu" :aria-expanded "false" :data-target "navbarBasicExample"}
      [:span {:aria-hidden "true"}]
      [:span {:aria-hidden "true"}]
      [:span {:aria-hidden "true"}]]]
    [:div#navbarBasicExample.navbar-menu
     [:div.navbar-start
      [:a.navbar-item {:href (routes/home)} "News"]
      [:a.navbar-item {:href (routes/submit)} "Submit"]]
     [:div.navbar-end
      [:div.navbar-item
       (let [is-logged-in @(re-frame/subscribe [::subs/username])]
         (if (nil? is-logged-in)
           [:div.buttons
            [:a.button {:href (routes/sign)} "Sign up"]
            [:a.button {:href (routes/login)} "Log in"]]
           [:div.buttons
            [:a.navbar-item {:href (routes/user)} is-logged-in]
            [:a.navbar-item {:href     (routes/home)
                             :on-click #(re-frame/dispatch [::events/logout])} "logout"]]))]]]]
   (let [active-panel (re-frame/subscribe [::subs/active-panel])]
     [show-panel @active-panel])
   [:footer.footer.is-fixed-bottom
    [:div.content.has-text-centered
     [:p "This is a Hacker News homage with Lacinia Pedestal and Re-Frame."]
     [:p "For info check the Github Project, " [:a {:target "_blank" :href "https://github.com/giovanialtelino/hackernews-reframe"} "front-end"] " and " [:a {:target "_blank" :href "https://github.com/giovanialtelino/hackernews-lacinia-datomic"} "back-end"] "."]]]])

