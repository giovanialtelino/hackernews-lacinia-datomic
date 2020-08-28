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

You must configure the last command as you wish, as you may have different ports and so on.
If you run everything without any error, you should be fine to run this project. 
It depends on Leiningen, run it with "lein run" or "lein run-dev", the distinction here is pretty much allowing or not the graphiql interface, but if you need to deploy something similar you probably should change database and CORS settings, using the Components.
The standard port is 8080.

## Observations

This project lacks some of the HackerNews features, and also testing is poor.  
Feel free to push some changes or clone it to your own repo and do what you want, I won't be hosting it like some other projects I made.
Check my [blog](https://www.giovanialtelino.com/project/hacker-news-graphql) post for more information about some decisions I made about it.





