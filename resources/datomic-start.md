This should be run on Datomic root folder, will create a temp database in memory.

bin/run -m datomic.peer-server -h localhost -p 8998 -a myaccesskey,mysecret -d hackernews,datomic:mem://hackernews


(def db-uri "datomic:sql://hackernews?jdbc:postgresql://localhost:5432/datomic?user=datomic&password=datomic")

bin/run -m datomic.peer-server -h localhost -p 8998 -a myaccesskey,mysecret -d hackernews,datomic:sql://hackernews?jdbc:postgresql://localhost:5432/datomic?user=datomic&password=datomic

(def db-uri "datomic:sql://hackernews?jdbc:postgresql://localhost:5432/datomic?user=covid&password=covidpwd")

For extra info you should check datomic on-prem website.
https://docs.datomic.com/on-prem/get-datomic.html