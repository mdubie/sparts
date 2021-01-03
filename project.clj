(defproject sparts "0.1.0-SNAPSHOT"
  :dependencies [[org.clojure/clojure "1.10.1"]
                 [org.clojure/clojurescript "1.10.741"]
                 [hiccup "1.0.5"]
                 [tikkba "0.6.0"]
                 [quil "3.1.0"]
                 [clojure.java-time "0.3.2"]]
  :plugins [[lein-figwheel "0.5.18"]]
  :repl-options {:init-ns game.core}
  :figwheel {:nrepl-port 7888}
  :source-paths ["src"]
  :clean-targets ^{:protect false} [:target-path "resources/public/out" "resources/public/game.js"]
  :cljsbuild {:builds [{:id "dev"
                        :source-paths ["src"]
                        :figwheel true
                        :compiler {:main game.client.core
                                   :asset-path "out"
                                   :output-to "resources/public/game.js"
                                   :output-dir "resources/public/out"}}]})


