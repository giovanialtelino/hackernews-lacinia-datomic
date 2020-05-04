(ns hackernews-lacinia-datomic.utils
  (:require [hackernews-lacinia-datomic.datomic :as datomic]
            [clojure.string :as str]))

(defn- contains-fullstop [email]
  (if (str/includes? email "@")
    true
    false))

(defn valid-email [email db]
  (if (and (contains-fullstop email) (datomic/non-registered-mail db email))
    true
    false))

(defn trim-text [text]
  (str/trim text))

(defn low-text [text]
  (str/lower-case text))

(defn validate-url [url]
  (if (str/includes? url "https://")
    (try
      (do
        (slurp url)
        true)
      (catch Exception e
        false
        ))
    false))

(defn validate-description [description]
  (if (> (count description) 20)
    true
    false))