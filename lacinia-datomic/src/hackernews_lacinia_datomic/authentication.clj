(ns hackernews-lacinia-datomic.authentication
  (:require [buddy.hashers :as hs]
            [buddy.sign.jwt :as jwt]
            [hackernews-lacinia-datomic.datomic :as datomic]
            [java-time :as jt]))

(def system-secret (System/getenv "BUDDY_SIMPLE_AND_NOT_SAFE_STRING"))

(defn generate-password-hash [pwd]
  (hs/derive pwd))

(defn- auth-user [pwd hashed-pwd]
  (if (hs/check pwd hashed-pwd)
    true
    false))

(defn- claims-user [user]
  {:user user :exp (jt/plus (jt/instant) (jt/hours 1))})

(defn- claims-refresh [uuid]
  {:id uuid :exp (jt/plus (jt/instant) (jt/days 30))})

(defn- sign-data [user]
  (jwt/sign (claims-user user) system-secret))

(defn login-process [email pwd enc-pwd]
  (if (auth-user pwd enc-pwd)
    (sign-data email)
    nil))

(defn refresh-process [db token]
  (let [unsigned (jwt/unsign token system-secret)
        datomic-result (datomic/get-refresh-token-data db (:id unsigned))
        user-email (:email datomic-result)
        date (:until datomic-result)
        valid (:valid datomic-result)]
    (if (and (= :true valid) (jt/before? (jt/instant) (jt/instant date)))
      {:user (datomic/get-user-info-auth db user-email) :token (sign-data user-email) :refresh token}
      {:error "Refresh token is not valid"})))

(defn generate-refresh-token [db email pwd enc-pwd]
  (if (auth-user pwd enc-pwd)
    (let [token (datomic/register-refresh-token db email)
          sign (claims-refresh token)]
      (jwt/sign sign system-secret))))

(defn get-user-from-token [token]
  (jwt/unsign token system-secret))