bin/transactor config/dev-transactor.properties

bin/repl
(require '[datomic.api :as d])
(def db-uri "datomic:dev://localhost:4334/hackernews")
(d/delete-database db-uri)
(d/create-database db-uri)

bin/run -m datomic.peer-server -h localhost -p 8998 -a myaccesskey,mysecret -d hackernews,datomic:dev://localhost:4334/hackernews

bin/console -p 8888 hackernews datomic:dev://localhost:4334/

(def x [{:id #uuid "821dcab2-e9a5-490f-a053-d0404bd0737e", 
:text "comment is around :comment/id-6", 
:postedBy "name6", 
:createdAt #inst "2020-05-28T04:13:14.953-00:00", 
:father #uuid "7fc39ce5-7823-4d6f-b3d7-e6b349c008f3", 
:votes 0}
 {:id #uuid "85c75548-eccb-4f00-a385-95d45ef398b9"}])
