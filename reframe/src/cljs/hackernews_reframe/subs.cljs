(ns hackernews-reframe.subs
  (:require
    [re-frame.core :as re-frame]))

(re-frame/reg-sub
  ::name
  (fn [db]
    (:name db)))

(re-frame/reg-sub
  ::active-panel
  (fn [db _]
    (:active-panel db)))

(re-frame/reg-sub
  ::email
  (fn [db _]
    (:email db)))

(re-frame/reg-sub
  ::new-email
  (fn [db _]
    (:new-email db)))

(re-frame/reg-sub
  ::pwd
  (fn [db _]
    (:pwd db)))

(re-frame/reg-sub
  ::new-pwd
  (fn [db _]
    (:new-pwd db)))

(re-frame/reg-sub
  ::pwd-new-conf
  (fn [db _]
    (:pwd-new-conf db)))

(re-frame/reg-sub
  ::login-error
  (fn [db _]
    (:login-error? db)))

(re-frame/reg-sub
  ::signup-error
  (fn [db _]
    (:signup-error? db)))

(re-frame/reg-sub
  ::username
  (fn [db _]
    (:username db)))

(re-frame/reg-sub
  ::new-usr
  (fn [db _]
    (:new-usr db)))

(re-frame/reg-sub
  ::new-title
  (fn [db _]
    (:new-title db)))

(re-frame/reg-sub
  ::new-url
  (fn [db _]
    (:new-url db)))

(re-frame/reg-sub
  ::confirm-pwd
  (fn [db _]
    (= (:pwd-new-conf db) (:new-pwd db))))

(re-frame/reg-sub
  ::non-nil-url-subs
  (fn [db _]
    (or (empty? (:new-url db)) (empty? (:new-title db)))))

(re-frame/reg-sub
  ::news-list
  (fn [db _]
    (:news-list db)))

(re-frame/reg-sub
  ::news-page
  (fn [db _]
    (:news-page db)))

(re-frame/reg-sub
  ::email-user
  (fn [db _]
    (get-in db [:user-page :email-user])))

(re-frame/reg-sub
  ::karma-user
  (fn [db _]
    (get-in db [:user-page :karma-user])))

(re-frame/reg-sub
  ::created-at-user
  (fn [db _]
    (get-in db [:user-page :created-at-user])))

(re-frame/reg-sub
  ::created-at-generic
  (fn [db _]
    (get-in db [:generic-user :created-at])))

(re-frame/reg-sub
  ::karma-generic
  (fn [db _]
    (get-in db [:generic-user :karma])))

(re-frame/reg-sub
  ::username-generic
  (fn [db _]
    (get-in db [:generic-user :username])))

(re-frame/reg-sub
  ::comment-father
  (fn [db _]
    (get-in db [:main-father])))

(re-frame/reg-sub
  ::comments-list
  (fn [db _]
    (get-in db [:comment-list])))

(re-frame/reg-sub
  ::new-comment
  (fn [db _]
    (get-in db [:new-comment])))

(re-frame/reg-sub
  ::new-comment-father-id
  (fn [db _]
    (get-in db [:reply-comment :id])))

(re-frame/reg-sub
  ::main-father-id
  (fn [db _]
    (get-in db [:main-father :id])))

(re-frame/reg-sub
  ::new-comment-link-id
  (fn [db _]
    (get-in db [:reply-comment :linkId])))

(re-frame/reg-sub
  ::comment-type
  (fn [db _]
    (get-in db [:comment-type])))

(re-frame/reg-sub
  ::reply-comment
  (fn [db _]
    (get-in db [:reply-comment])))


