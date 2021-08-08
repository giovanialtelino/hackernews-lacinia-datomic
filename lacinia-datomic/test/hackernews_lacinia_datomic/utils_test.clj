(ns hackernews-lacinia-datomic.utils-test
  (:require [clojure.test :refer :all]
    [hackernews-lacinia-datomic.utils :refer :all]))

(deftest valid-email-string
         (testing "Only accept email with fullstop"
                  (is (contains-fullstop "teste@mail.com"))))

(deftest invalid-email-string
         (testing "Only accept email with fullstop"
                  (not (contains-fullstop "testemail.com"))))


