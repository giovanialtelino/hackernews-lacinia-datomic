(ns hackernews-lacinia-datomic.authentication
  (:require [buddy.hashers :as hs]
            [buddy.sign.jwt :as jwt]
            [buddy.core.hash :as hash]
            [java-time :as jt]))

(def system-secret (System/getenv "BUDDY_SIMPLE"))

(defn generate-password-hash [pwd]
  (hs/derive pwd))

(defn- auth-user [pwd hashed-pwd]
  (prn "hashing" pwd "----" hashed-pwd)
  (if (hs/check pwd hashed-pwd)
    true
    false))

(defn- claims-user [user]
  {:user user :exp (jt/plus (jt/instant) (jt/days 7))})

(defn- sign-data [user]
  (jwt/sign (claims-user user) system-secret))

(defn login-process [email pwd enc-pwd]
  (if (auth-user pwd enc-pwd)
    {:token (sign-data email)}
    {:token "Invalid credentials"}))

(defn get-user-from-token [token]
  (jwt/unsign token system-secret))