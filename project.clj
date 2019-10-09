(defproject hackernews-lacinia-datomic "0.1.0-SNAPSHOT"
  :description "FIXME: write description"
  :url "http://example.com/FIXME"
  :license {:name "EPL-2.0 OR GPL-2.0-or-later WITH Classpath-exception-2.0"
            :url "https://www.eclipse.org/legal/epl-2.0/"}
  :dependencies [[org.clojure/clojure "1.10.0"]
                 [com.walmartlabs/lacinia "0.35.0"]

                 [http-kit "2.2.0"]
                 [cheshire "5.9.0"]
                 [io.pedestal/pedestal.service       "0.5.7"]
                 [io.pedestal/pedestal.jetty         "0.5.7"]
                 [com.stuartsierra/component "0.4.0"]
                 [com.datomic/client-pro "0.9.37"]
                 [buddy/buddy-hashers "1.4.0"]

                 [ch.qos.logback/logback-classic "1.1.8" :exclusions [org.slf4j/slf4j-api]]
                 [org.slf4j/jul-to-slf4j "1.7.22"]
                 [org.slf4j/jcl-over-slf4j "1.7.22"]
                 [org.slf4j/log4j-over-slf4j "1.7.22"]
                 ]
  :repl-options {:init-ns hackernews-lacinia-datomic.server}
  :main hackernews-lacinia-datomic.server)
