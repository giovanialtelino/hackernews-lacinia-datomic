(ns hackernews-lacinia-datomic.utils
  (:require [hackernews-lacinia-datomic.datomic :as datomic]
            [clojure.string :as str]))

(defn- contains-fullstop
  "Naive implementation to check if it's a valid email"
  [email]
  (if (str/includes? email "@")
    true
    false))

(defn valid-email
  "Validate if it's a valid email address if true check if the email is already in the system"
  [email db]
  (if (contains-fullstop email)
    (if (datomic/non-registered-mail db email) true false)
    false))

(defn valid-name
  "Validate if that name is still not used"
  [name db]
  (if (datomic/non-registered-name db name) true false))

(defn trim-text
  "Return the text trimmed in both directions"
  [text]
  (str/trim text))

(defn low-text
  "Return the text as lowercase only"
  [text]
  (str/lower-case text))

(defn- slurp-url [url]
  (try
    (do
      (slurp url)
      true)
    (catch Exception e
      false
      )))

(defn- validate-https-url [url]
  (if (str/includes? url "https://") true false))

(defn validate-url
  "Naive implementation to check if the link URL is valid, and it's a https link"
  [url]
  (if (and (slurp-url url) (validate-https-url url)) true false))

(defn validate-description
  "Validate if the description is at least 20 chars long"
  [description]
  (if (> (count description) 20) true false))

(defn validate-comment
  "Validate if the description is at least 20 chars long"
  [comment]
  (if (> (count comment) 20)
    true
    false))

(defn organize-order-by
  "Define in which order the items are asked to be"
  [order-by]
  (case order-by
    "date" :createdAt
    "order" :order
    "votes" :votes
    :order))

(defn validate-father-type
  "Validate if the item is a root (link) or a children (comment) or none"
  [father]
  (case father
    "comment" :comment/id
    "link" :link/id
    nil))