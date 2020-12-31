(ns game.units.sprites
  (:require [tikkba.transcoder :as tt]
            [tikkba.dom :as td]
            [clojure.java.io :as io]
            [clojure.string :as string]))

;; svg stuff

(defn render-path
  [path]
  (->> path
       (map (fn [[cmd & items]]
              (format "%s %s"
                      (name cmd)
                      (string/join " " items))))
       (string/join " ")))

(defn start [x y] [:M x y])
(defn m [x y] [:m x y])
(defn r [x] [:h x])
(defn rd [x y] [:l x y])
(defn d [y] [:v y])
(defn ld [x y] [:l (* -1 x) y])
(defn l [x] [:h (* -1 x)])
(defn lu [x y] [:l (* -1 x) (* -1 y)])
(defn u [y] [:v (* -1 y)])
(defn ru [x y] [:l x (* -1 y)])

(defn y-axis-rotate
  [relative-path]
  (->> relative-path
       (map (fn [[cmd & args :as path-item]]
              (let [x (first args)
                    y (or (second args) (first args))]
                (case cmd
                  (:l :m) [cmd (* -1 x) y]
                  :h [cmd (* -1 x)]
                  :v path-item))))))

(defn ship-scale->px
  [ship-scale]
  (* ship-scale 16))

(defn render-relative-path
  [{:keys [anchor-x anchor-y]} {:keys [width height]} relative-path]
  (let [relative-path-px (->> relative-path
                              (map (fn [[cmd & args]]
                                     (concat [cmd]
                                             (let [x (first args)
                                                   y (or (second args) (first args))]
                                               (case cmd
                                                 :h [(ship-scale->px (* width (/ x 100.0)))]
                                                 (:l :m) [(ship-scale->px (* width (/ x 100.0)))
                                                          (ship-scale->px (* height (/ y 100.0)))]
                                                 :v [(ship-scale->px (* height (/ y 100.0)))]))))))]
    (render-path
     (concat
      [[:M (ship-scale->px anchor-x) (ship-scale->px anchor-y)]]
      relative-path-px
      [[:Z]]))))

(defn svg-wrapper
  [children sprite-dims]
  (into
   [:svg {"xmlns:svg" "http://www.w3.org/2000/svg"
          "xmlns" "http://www.w3.org/2000/svg"
          "xmlns:xlink" "http://www.w3.org/1999/xlink"
          "version" "1.0"
          :style sprite-dims}]
   children))

(def ships-path "src/game/units/ships")

(defn write-sprite!
  [markup sprite-dims filename]
  (tt/to-png
   (td/svg-doc (svg-wrapper markup sprite-dims))
   (format "%s/%s" ships-path filename)
   sprite-dims))

;; constants

(def ship-classes #{:light :medium :heavy :small-station :large-station})
(def tech-levels #{1 2 3})
(def pod-classes #{:small :medium :large})
(def pod-types #{:missile :rail-gun :energy-beam :construction :shield :thruster})
;; anti missile
;; anti pod
;; torpedo
;; nuke
;; stealh / cloaking
;; sensor
;; repair
;; harvesting
;; energy generation

(def ship-class-size
  {:light {:width 1 :height 2}
   :medium {:width 2 :height 4}
   :heavy {:width 4 :height 8}
   :small-station {:width 4 :height 4}
   :large-station {:width 8 :height 8}})

(def pod-class-size
  {:small {:width 1 :height 2}
   :medium {:width 2 :height 4}
   :large {:width 4 :height 8}})

(defn ship->pod-class
  [{:keys [ship-class]}]
  (case ship-class
    :light :small
    :medium :medium
    :heavy :large
    :small-station :medium
    :large-station :large))

(defn ship->size
  [{:keys [ship-class]}]
  (get ship-class-size ship-class))

(defn ship->pod-size
  [ship]
  (get pod-class-size (ship->pod-class ship)))

(defn ship->offset
  [ship]
  {:offset-x 100
   :offset-y 0})

(defn ship->anchor
  ;; TODO: make this consume widths and such above
  [{:keys [ship-class]}]
  (case ship-class
    :light {:anchor-x 1.5 :anchor-y 0}
    :medium {:anchor-x 3 :anchor-y 0}
    :heavy {:anchor-x 6 :anchor-y 0}))

(defn pod->size
  [{:keys [pod-class]}]
  (get pod-class-size pod-class))

(defn ship->ship-svg
  ;; TODO: extend for stations
  ;; TODO: prettier rendering
  [{:keys [color ship-class tech-level] :as ship}]
  (concat
   [[:path {:fill "#4D4D4D"
            :d (render-relative-path
                (ship->anchor ship)
                (ship->size ship)
                (case ship-class
                  :light
                  [(r 10)
                   (rd 40 20)
                   (d 70)
                   (ld 10 10)
                   (l 80)
                   (lu 10 10)
                   (u 70)
                   (ru 40 20)]

                  :medium
                  [(r 10)
                   (rd 40 20)
                   (d 70)
                   (ld 10 10)
                   (l 80)
                   (lu 10 10)
                   (u 70)
                   (ru 40 20)]

                  :heavy
                  [(r 20)
                   (rd 30 10)
                   (d 80)
                   (ld 10 10)
                   (l 80)
                   (lu 10 10)
                   (u 80)
                   (ru 30 10)]))}]]

   (->> (range tech-level)
        (map (fn [level]
               [:path {:fill color
                       :d (render-relative-path
                           (ship->anchor ship)
                           (ship->size ship)
                           [(m 0 (+ 16 (* 12 level)))
                            (r 30)
                            (d 6)
                            (l 60)
                            (u 6)])}])))))

(defn maybe-rotate-path
  [{:keys [pod-side] :as pod} relative-path]
  (cond-> relative-path
    (= pod-side :starboard) y-axis-rotate))

;; make this less gross
(defn pod-anchor
  [ship {:keys [pod-index pod-side] :as pod}]
  (let [ship-size (ship->size ship)
        pod-size (pod->size pod)]
    {:anchor-y (* (+ 0.5 pod-index)
                  (:height pod-size))
     :anchor-x (cond-> (:anchor-x (ship->anchor ship))
                 (= pod-side :port) (- (/ (:width ship-size) 2))
                 (= pod-side :starboard) (+ (/ (:width ship-size) 2)))}))

(defn thruster-pod-svg
  [{:keys [color] :as ship} {:keys [pod-side pod-class] :as pod}]
  (concat
   [[:path {:fill "#4D4D4D"
            :d (render-relative-path
                (pod-anchor ship pod)
                (pod->size pod)
                (maybe-rotate-path pod
                                   [(d 10)
                                    (l 5)
                                    (d 30)
                                    (ld 10 10)
                                    (l 20)
                                    (lu 10 10)
                                    (u 20)
                                    (ru 35 30)
                                    (r 10)]))}]]

   (->> (range (:tech-level pod))
        (map (fn [tech-level]
               [:path {:fill color
                       :d (render-relative-path
                           (pod-anchor ship pod)
                           (pod->size pod)
                           (maybe-rotate-path pod
                                              [(m -25 (+ 18 (* 10 tech-level)))
                                               (r 15)
                                               (d 4)
                                               (l 30)
                                               (u 4)]))}])))))

(defn shield-pod-svg
  [{:keys [color] :as ship} {:keys [pod-side pod-class] :as pod}]
  (concat
   [[:path {:fill "#4D4D4D"
            :d (render-relative-path
                (pod-anchor ship pod)
                (pod->size pod)
                (maybe-rotate-path pod
                                   [(d 10)
                                    (l 5)
                                    (d 10)
                                    (ld 20 10)
                                    (l 20)
                                    (lu 20 10)
                                    (u 30)
                                    (ru 20 10)
                                    (r 20)
                                    (rd 20 10)
                                    (d 10)]))}]]

   (->> (range (:tech-level pod))
        (map (fn [tech-level]
               [:path {:fill color
                       :d (render-relative-path
                           (pod-anchor ship pod)
                           (pod->size pod)
                           (maybe-rotate-path pod
                                              [(m -35 (+ -12 (* 10 tech-level)))
                                               (r 15)
                                               (d 4)
                                               (l 30)
                                               (u 4)]))}])))))

(defn energy-beam-pod-svg
  [{:keys [color] :as ship} {:keys [pod-side pod-class] :as pod}]
  (concat
   [[:path {:fill "#4D4D4D"
            :d (render-relative-path
                (pod-anchor ship pod)
                (pod->size pod)
                (maybe-rotate-path pod
                                   [(d 10)
                                    (l 5)
                                    (d 10)
                                    (ld 10 20)
                                    (l 20)
                                    (lu 10 20)
                                    (u 20)
                                    (ru 10 10)
                                    (ru 5 40)
                                    (r 10)
                                    (rd 5 40)
                                    (rd 10 10)]))}]]

   (->> (range (:tech-level pod))
        (map (fn [tech-level]
               [:path {:fill color
                       :d (render-relative-path
                           (pod-anchor ship pod)
                           (pod->size pod)
                           (maybe-rotate-path pod
                                              [(m -25 (+ -2 (* 10 tech-level)))
                                               (r 15)
                                               (d 4)
                                               (l 30)
                                               (u 4)]))}])))))

(defn missile-pod-svg
  [{:keys [color] :as ship} {:keys [pod-side pod-class] :as pod}]
  (concat
   [[:path {:fill "#4D4D4D"
            :d (render-relative-path
                (pod-anchor ship pod)
                (pod->size pod)
                (maybe-rotate-path pod
                                   [(d 10)
                                    (l 10)
                                    (d 20)
                                    (l 40)
                                    (u 60)
                                    (r 40)
                                    (d 20)
                                    (r 10)]))}]]

   (->> (range (:tech-level pod))
        (map (fn [tech-level]
               [:path {:fill color
                       :d (render-relative-path
                           (pod-anchor ship pod)
                           (pod->size pod)
                           (maybe-rotate-path pod
                                              [(m -31 (+ -24 (* 10 tech-level)))
                                               (r 15)
                                               (d 4)
                                               (l 30)
                                               (u 4)]))}])))))

(defn rail-gun-pod-svg
  [{:keys [color] :as ship} {:keys [pod-side pod-class] :as pod}]
  (concat
   [[:path {:fill "#4D4D4D"
            :d (render-relative-path
                (pod-anchor ship pod)
                (pod->size pod)
                (maybe-rotate-path pod
                                   [(d 10)
                                    (l 10)
                                    (d 40)
                                    (lu 60 10)
                                    (u 20)
                                    (ru 40 5)
                                    (u 60)
                                    (r 10)
                                    (d 45)]))}]]

   (->> (range (:tech-level pod))
        (map (fn [tech-level]
               [:path {:fill color
                       :d (render-relative-path
                           (pod-anchor ship pod)
                           (pod->size pod)
                           (maybe-rotate-path pod
                                              [(m -31 (+ 20 (* 8 tech-level)))
                                               (r 12)
                                               (d 4)
                                               (l 24)
                                               (u 4)]))}])))))

(defn pod-svg
  ;; TODO: make multimethod
  [ship {:keys [pod-type] :as pod}]
  (case pod-type
    :missile (missile-pod-svg ship pod)
    :rail-gun (rail-gun-pod-svg ship pod)
    :energy-beam (energy-beam-pod-svg ship pod)
    :shield (shield-pod-svg ship pod)
    :thruster (thruster-pod-svg ship pod)))

(defn ship->pods-svg
  [{:keys [pods] :as ship}]
  (->> pods
       (mapcat (fn [pod]
                 (pod-svg ship pod)))))

(defn ship->sprite-filename
  [ship]
  (format "ship_%s.png" (Math/abs (hash ship))))

(defn ship->sprite-size
  [{:keys [ship-class] :as ship}]
  (let [ship-size (ship->size ship)
        pod-size (ship->pod-size ship)]
    {:width (ship-scale->px (+ (:width ship-size)
                               (* 2 (:width pod-size))))
     :height (ship-scale->px (cond-> (:height ship-size)
                               (contains? #{:small-station :large-station} ship-class)
                               (+ (* 2 (:height pod-size)))))}))

(defn ship->svg
  [ship]
  (concat
   (ship->ship-svg ship)
   (ship->pods-svg ship)))

(defn write-ship!
  [ship]
  (write-sprite!
   (ship->svg ship)
   (ship->sprite-size ship)
   (ship->sprite-filename ship)))
