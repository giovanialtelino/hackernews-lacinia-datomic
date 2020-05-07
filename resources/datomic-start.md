bin/transactor config/dev-transactor.properties

bin/repl
(require '[datomic.api :as d])
(def db-uri "datomic:dev://localhost:4334/hackernews")
(d/create-database db-uri)

bin/run -m datomic.peer-server -h localhost -p 8998 -a myaccesskey,mysecret -d hackernews,datomic:dev://localhost:4334/hackernews

bin/console -p 8888 hackernews datomic:dev://localhost:4334/