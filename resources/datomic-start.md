This should be run on Datomic root folder, will create a temp database in memory.

bin/run -m datomic.peer-server -h localhost -p 8998 -a myaccesskey,mysecret -d hackernews,datomic:mem://hackernews

For extra info you should check datomic on-prem website.
https://docs.datomic.com/on-prem/get-datomic.html