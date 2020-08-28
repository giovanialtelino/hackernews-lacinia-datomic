(ns hackernews-reframe.routes
  (:require-macros [secretary.core :refer [defroute]])
  (:import [goog History]
           [goog.history EventType])
  (:require
    [secretary.core :as secretary]
    [goog.events :as gevents]
    [re-frame.core :as re-frame]
    [hackernews-reframe.events :as events]
    ))

(defn hook-browser-navigation! []
  (doto (History.)
    (gevents/listen
      EventType/NAVIGATE
      (fn [event]
        (secretary/dispatch! (.-token event))))
    (.setEnabled true)))

(defn app-routes []
  (secretary/set-config! :prefix "#")
  ;; --------------------
  ;; define routes here
  (defroute home "/" []
            (re-frame/dispatch-sync [::events/clean-posts])
            (re-frame/dispatch-sync [::events/start-headers])
            (re-frame/dispatch [::events/refresh])
            (re-frame/dispatch [::events/set-active-panel :news-panel])
            (re-frame/dispatch [::events/get-news])
            )

  (defroute login "/login" []
            (re-frame/dispatch-sync [::events/start-headers])
            (re-frame/dispatch [::events/refresh])
            (re-frame/dispatch [::events/set-active-panel :login-panel])
            )

  (defroute sign "/sign" []
            (re-frame/dispatch-sync [::events/start-headers])
            (re-frame/dispatch [::events/refresh])
            (re-frame/dispatch [::events/set-active-panel :sign-panel])
            )

  (defroute submit "/submit" []
            (re-frame/dispatch-sync [::events/start-headers])
            (re-frame/dispatch [::events/refresh])
            (re-frame/dispatch [::events/set-active-panel :post-panel]))

  (defroute past "/past" []
            (re-frame/dispatch-sync [::events/start-headers])
            (re-frame/dispatch [::events/refresh])
            (re-frame/dispatch [::events/set-active-panel :past-panel]))

  (defroute hn-comment "/comments/:father" [father]
            (re-frame/dispatch-sync [::events/start-headers])
            (re-frame/dispatch [::events/refresh])
            (re-frame/dispatch-sync [::events/clean-comments])
            (re-frame/dispatch [::events/change-comment-type "link"])
            (re-frame/dispatch [::events/get-father-comments father])
            (re-frame/dispatch [::events/set-active-panel :comment-panel]))

  (defroute reply-comment "/reply-comments/:comment" [comment]
            (re-frame/dispatch-sync [::events/start-headers])
            (re-frame/dispatch [::events/refresh])
            (re-frame/dispatch [::events/change-comment-type "comment"])
            (re-frame/dispatch [::events/get-comment comment])
            (re-frame/dispatch [::events/set-active-panel :answer-comment-panel]))

  (defroute user-comments "/user-comments/:user" [user]
            (re-frame/dispatch-sync [::events/start-headers])
            (re-frame/dispatch [::events/refresh])
            (re-frame/dispatch-sync [::events/clean-comments])
            (re-frame/dispatch [::events/get-user-comments user])
            (re-frame/dispatch [::events/set-active-panel :comment-panel]))

  (defroute user-posts "/user-posts/:user" [user]
            (re-frame/dispatch-sync [::events/start-headers])
            (re-frame/dispatch [::events/refresh])
            (re-frame/dispatch-sync [::events/clean-posts])
            (re-frame/dispatch [::events/get-user-posts user])
            (re-frame/dispatch [::events/set-active-panel :news-panel]))

  (defroute user "/user" []
            (re-frame/dispatch-sync [::events/start-headers])
            (re-frame/dispatch [::events/refresh])
            (re-frame/dispatch [::events/set-active-panel :user-panel]))

  (defroute hn-user "/hn-user/:name" [name]
            (re-frame/dispatch-sync [::events/start-headers])
            (re-frame/dispatch [::events/refresh])
            (re-frame/dispatch-sync [::events/clean-user-info])
            (re-frame/dispatch [::events/get-user-info-by-name name])
            (re-frame/dispatch [::events/set-active-panel :generic-user-panel]))

  ;; --------------------
  (hook-browser-navigation!))
