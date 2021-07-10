# hackernews-lacinia-datomic

A Clojure web project designed to be a Hackernews alike application.
Built with Clojure and Clojurescript, with Lacinia, re-frame, Pedestal and persists data on Datomic.

## Usage

This project now needs Datomic Cloud to run, take a look into the AWS Marketplace. You can also have you own local/server Datomic, as long as it supports the Client API.  
Take a [look](https://docs.datomic.com/cloud/getting-started/getting-started.html) for instructions, it's easy and all the scripts are already set.  
And watch out for the version you choose, right now the "Solo" is the cheapest one, more than enough

## Observations

This project lacks a lot of the HackerNews features, we also don't have pagination, it was much more of a proof of concept than a real idea to be deployed.  
Check my [blog](https://www.giovanialtelino.com/project/hacker-news-graphql) post for more information about some decisions I made about it.





