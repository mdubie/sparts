(ns game.units.sprite-sample
  (:require [game.units.sprites :as sprites]
            [hiccup.core :as hiccup]))

(def ships
  [
   {:color "red"
    :ship-class :light
    :tech-level 1}

   {:color "red"
    :ship-class :medium
    :tech-level 1}

   {:color "red"
    :ship-class :heavy
    :tech-level 1}

   {:color "blue"
    :ship-class :light
    :tech-level 2
    :pods [{:tech-level 1
            :pod-side :port
            :pod-index 0
            :pod-type :missile
            :pod-class :small}]}

   {:color "blue"
    :ship-class :medium
    :tech-level 2
    :pods [{:tech-level 1
            :pod-side :port
            :pod-index 0
            :pod-type :missile
            :pod-class :medium}]}

   {:color "blue"
    :ship-class :heavy
    :tech-level 2
    :pods [{:tech-level 1
            :pod-side :port
            :pod-index 0
            :pod-type :missile
            :pod-class :large}]}

   {:color "blue"
    :ship-class :light
    :tech-level 2
    :pods [{:tech-level 1
            :pod-side :port
            :pod-index 0
            :pod-type :rail-gun
            :pod-class :small}]}

   {:color "blue"
    :ship-class :medium
    :tech-level 2
    :pods [{:tech-level 2
            :pod-side :port
            :pod-index 0
            :pod-type :rail-gun
            :pod-class :medium}]}

   {:color "blue"
    :ship-class :heavy
    :tech-level 2
    :pods [{:tech-level 3
            :pod-side :port
            :pod-index 0
            :pod-type :rail-gun
            :pod-class :large}
           {:tech-level 2
            :pod-side :starboard
            :pod-index 0
            :pod-type :rail-gun
            :pod-class :large}]}

   {:color "blue"
    :ship-class :light
    :tech-level 2
    :pods [{:tech-level 1
            :pod-side :port
            :pod-index 0
            :pod-type :energy-beam
            :pod-class :small}]}

   {:color "blue"
    :ship-class :medium
    :tech-level 2
    :pods [{:tech-level 2
            :pod-side :port
            :pod-index 0
            :pod-type :energy-beam
            :pod-class :medium}]}

   {:color "blue"
    :ship-class :heavy
    :tech-level 2
    :pods [{:tech-level 3
            :pod-side :port
            :pod-index 0
            :pod-type :energy-beam
            :pod-class :large}
           {:tech-level 2
            :pod-side :starboard
            :pod-index 0
            :pod-type :energy-beam
            :pod-class :large}]}

   {:color "green"
    :ship-class :light
    :tech-level 2
    :pods [{:tech-level 1
            :pod-side :port
            :pod-index 0
            :pod-type :shield
            :pod-class :small}]}

   {:color "green"
    :ship-class :medium
    :tech-level 2
    :pods [{:tech-level 2
            :pod-side :port
            :pod-index 0
            :pod-type :shield
            :pod-class :medium}]}

   {:color "green"
    :ship-class :heavy
    :tech-level 2
    :pods [{:tech-level 3
            :pod-side :port
            :pod-index 0
            :pod-type :shield
            :pod-class :large}
           {:tech-level 2
            :pod-side :starboard
            :pod-index 0
            :pod-type :shield
            :pod-class :large}]}

   {:color "black"
    :ship-class :light
    :tech-level 2
    :pods [{:tech-level 1
            :pod-side :port
            :pod-index 0
            :pod-type :thruster
            :pod-class :small}]}

   {:color "black"
    :ship-class :medium
    :tech-level 2
    :pods [{:tech-level 2
            :pod-side :port
            :pod-index 0
            :pod-type :thruster
            :pod-class :medium}]}

   {:color "black"
    :ship-class :heavy
    :tech-level 2
    :pods [{:tech-level 3
            :pod-side :port
            :pod-index 0
            :pod-type :thruster
            :pod-class :large}
           {:tech-level 2
            :pod-side :starboard
            :pod-index 0
            :pod-type :thruster
            :pod-class :large}]}

   {:color "white"
    :ship-class :light
    :tech-level 3
    :pods [{:tech-level 2
            :pod-side :starboard
            :pod-index 0
            :pod-type :missile
            :pod-class :small}]}

   {:color "white"
    :ship-class :medium
    :tech-level 3
    :pods [{:tech-level 2
            :pod-side :starboard
            :pod-index 0
            :pod-type :missile
            :pod-class :medium}]}

   {:color "white"
    :ship-class :heavy
    :tech-level 3
    :pods [{:tech-level 2
            :pod-side :starboard
            :pod-index 0
            :pod-type :missile
            :pod-class :large}]}

   {:color "white"
    :ship-class :light
    :tech-level 3
    :pods [{:tech-level 3
            :pod-side :starboard
            :pod-index 0
            :pod-type :missile
            :pod-class :small}
           {:tech-level 3
            :pod-side :port
            :pod-index 1
            :pod-type :missile
            :pod-class :small}]}

   {:color "white"
    :ship-class :medium
    :tech-level 3
    :pods [{:tech-level 3
            :pod-side :port
            :pod-index 0
            :pod-type :missile
            :pod-class :small}
           {:tech-level 3
            :pod-side :port
            :pod-index 1
            :pod-type :missile
            :pod-class :small}
           {:tech-level 2
            :pod-side :starboard
            :pod-index 0
            :pod-type :missile
            :pod-class :medium}]}

   {:color "white"
    :ship-class :heavy
    :tech-level 3
    :pods [{:tech-level 1
            :pod-side :port
            :pod-index 0
            :pod-type :missile
            :pod-class :small}
           {:tech-level 1
            :pod-side :port
            :pod-index 1
            :pod-type :missile
            :pod-class :small}
           {:tech-level 1
            :pod-side :port
            :pod-index 2
            :pod-type :missile
            :pod-class :small}
           {:tech-level 1
            :pod-side :port
            :pod-index 3
            :pod-type :missile
            :pod-class :small}
           {:tech-level 2
            :pod-side :starboard
            :pod-index 0
            :pod-type :missile
            :pod-class :medium}
           {:tech-level 2
            :pod-side :starboard
            :pod-index 1
            :pod-type :missile
            :pod-class :medium}]}

   {:color "white"
    :ship-class :light
    :tech-level 3
    :pods [{:tech-level 3
            :pod-side :port
            :pod-index 0
            :pod-type :rail-gun
            :pod-class :small}
           {:tech-level 3
            :pod-side :starboard
            :pod-index 0
            :pod-type :energy-beam
            :pod-class :small}]}

   {:color "white"
    :ship-class :medium
    :tech-level 3
    :pods [{:tech-level 3
            :pod-side :port
            :pod-index 0
            :pod-type :rail-gun
            :pod-class :small}
           {:tech-level 3
            :pod-side :port
            :pod-index 1
            :pod-type :thruster
            :pod-class :small}
           {:tech-level 3
            :pod-side :starboard
            :pod-index 0
            :pod-type :rail-gun
            :pod-class :small}
           {:tech-level 3
            :pod-side :starboard
            :pod-index 1
            :pod-type :thruster
            :pod-class :small}]}

   {:color "white"
    :ship-class :heavy
    :tech-level 3
    :pods [{:tech-level 2
            :pod-side :port
            :pod-index 0
            :pod-type :energy-beam
            :pod-class :medium}
           {:tech-level 2
            :pod-side :port
            :pod-index 2
            :pod-type :shield
            :pod-class :small}
           {:tech-level 2
            :pod-side :port
            :pod-index 3
            :pod-type :thruster
            :pod-class :small}
           {:tech-level 2
            :pod-side :starboard
            :pod-index 0
            :pod-type :energy-beam
            :pod-class :medium}
           {:tech-level 2
            :pod-side :starboard
            :pod-index 2
            :pod-type :shield
            :pod-class :small}
           {:tech-level 2
            :pod-side :starboard
            :pod-index 3
            :pod-type :thruster
            :pod-class :small}]}])

(defn write-ships!
  []
  (doseq [ship ships]
    (sprites/write-ship! ship)))

(defn sprite-hiccup
  [ships]
  [:table
   (->> ships
        (partition-all 3)
        (map (fn [ships*]
               [:tr
                (->> ships*
                     (map (fn [ship]
                            [:td
                             [:img {:src (format "ships/%s" (sprites/ship->sprite-filename ship))}]])))])))])

(comment
  (do
   (write-ships!)
   (spit "src/game/units/sprite_sample.html" (hiccup/html (sprite-hiccup ships)))))
