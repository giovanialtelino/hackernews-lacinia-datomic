(ns hackernews-lacinia-datomic.datomic.user
  (:require [datomic.client.api :as d]
            [buddy.hashers :as hashers])
  (:import java.util.Date))

(defn user-id-by-email
  [db email]
  (let [result (d/q '[:find ?e
                      :in $ ?mail
                      :where [?e :user/email ?mail]] db email)]
    (if (empty? result)
      -1
      (get-in result [0 0]))))


(defn signup
  [args con]
  (let [{name :name
         email :email
         password :password} args
        hashed (hashers/derive password)
        {result :db-after} (d/transact con {:tx-data [{:user/name name
                                                        :user/email email
                                                        :user/pwd hashed}]})
        user-id (user-id-by-email result email)]
    (d/transact con {:tx-data [{:auth/token ""
                                 :auth/user user-id}]})))

(defn login-register
  [user-id token con]
  (d/transact con {:tx-data [[:db/add user-id :auth/token token]]}))