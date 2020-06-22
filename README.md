# hackernews-lacinia-datomic

A Clojure webserver designed to serve Hackernews like GraphQL functions.

## Usage

Well, first and foremost, this project was made to test not only Lacinia Pedestal to use GraphQL, but also, Datomic. You  must have [Datomic On-Prem](https://www.datomic.com/on-prem.html) installed in your computer, I think their Cloud AWS Client will also work effortlessly, but I haven't tested it.

For Datomic install you should check their page [here](https://www.datomic.com/get-datomic.html), I have the "Starter" on my machine.

After installing Datomic you should run the comments below with the terminal in the Datomic folder.

bin/transactor config/dev-transactor.properties  

bin/repl   
(require '[datomic.api :as d])   
(def db-uri "datomic:dev://localhost:4334/hackernews")  
(d/delete-database db-uri)  
(d/create-database db-uri)  

bin/run -m datomic.peer-server -h localhost -p 8998 -a myaccesskey,mysecret -d hackernews,datomic:dev://localhost:4334/hackernews

You must configure the last command as you wish, you may have different ports and so on.



