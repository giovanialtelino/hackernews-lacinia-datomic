(ns hackernews-lacinia-datomic.authorization
  (:require [hackernews-lacinia-datomic.datomic :as datomic]))

(defn authorized-user-post? [db user]
  (if (nil? (datomic/get-user-info-auth db user))
    false
    true))

(defn authorized-delete-post? [post-data user-email]
  (if (or (nil? post-data) (nil? user-email))
    false
    (do
      (if (= post-data user-email)
        true
        false))))

