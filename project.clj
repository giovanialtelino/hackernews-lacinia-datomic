(defproject hackernews-lacinia-datomic "0.1.0-SNAPSHOT"
  :description "Lacinia example using Pedestal"
  :url "http://example.com/FIXME"
  :license {:name "EPL-2.0 OR GPL-2.0-or-later WITH Classpath-exception-2.0"
            :url  "https://www.eclipse.org/legal/epl-2.0/"}
  :dependencies [[org.clojure/clojure "1.10.1"]
                 [com.walmartlabs/lacinia-pedestal "0.12.0"]
                 [http-kit "2.2.0"]
                 [cheshire "5.9.0"]
                 [com.datomic/datomic-free "0.9.5703.21"]
                 [ch.qos.logback/logback-classic "1.1.8" :exclusions [org.slf4j/slf4j-api]]
                 [org.slf4j/jul-to-slf4j "1.7.22"]
                 [org.slf4j/jcl-over-slf4j "1.7.22"]
                 [org.slf4j/log4j-over-slf4j "1.7.22"]
                 [clojure.java-time "0.3.2"]
                 [com.stuartsierra/component "0.4.0"]]
  :min-lein-version "2.0.0"
  :profiles {:dev     {:aliases      {"run-dev" ["trampoline" "run" "-m" "hackernews-lacinia-datomic.server/run-dev"]}
                       :dependencies [[io.pedestal/pedestal.service-tools "0.5.7"]]}
             :uberjar {:aot [inflacao-pedestal-service.server]}}
  :repl-options {:init-ns hackernews-lacinia-datomic.pedestal}
  :main hackernews-lacinia-datomic.pedestal)
