(ns game.canvas.core-next
  (:require [clojure.java.io :as io]
            [java-time :as time])
  (:import [java.awt Color
            Graphics
            Graphics2D
            RenderingHints
            geom.Ellipse2D
            geom.AffineTransform
            Image
            event.MouseEvent
            event.MouseListener]
           [javax.imageio ImageIO
            ImageWriter
            ImageWriteParam
            IIOImage]
           [javax.swing JFrame
            JPanel]))

(comment
  (s1+s2->theta
   [0 0]
   [100 0]))

(defn s1+s2->theta
  [[x1 y1] [x2 y2]]
  (Math/atan2
   (- y2 y1)
   (- x2 x1)))

;; ship control

;; (defn pid
;;   []
;;   {:kp 1
;;    :ki 0
;;    :kd 0
;;    :p 0
;;    :i 0
;;    :d 0
;;    :sv (/ Math/PI 2)})

(defn pid-next-tick
  [{pv-prev :p :as pid} pv dt]
  (-> pid
      (assoc :p pv)
      (update :i + (* pv dt))
      (assoc :d (/ (- pv pv-prev)
                   dt))))

(defn pid-output
  [pid]
  (+ (* (:p pid) (:kp pid))
     (* (:i pid) (:ki pid))
     (* (:d pid) (:kd pid))))

(defn next-tick-ship-alpha
  [game-state ship dt-millis]
  (let [
        theta-sv (s1+s2->theta (:s ship) (:target-s @game-state))
        _ (prn theta-sv)

        theta-pv (- (-> ship :alpha-controller :theta-pid :sv)
                    (-> ship :theta))

        omega-pv (- (-> ship :alpha-controller :omega-pid :sv)
                    (-> ship :omega))
        alpha-unbounded (+ (pid-output (-> ship :alpha-controller :theta-pid))
                           (pid-output (-> ship :alpha-controller :omega-pid)))]
    (-> ship
        (assoc-in [:alpha-controller :theta-pid :sv] theta-sv)
        (update-in [:alpha-controller :theta-pid] pid-next-tick theta-pv dt-millis)
        (update-in [:alpha-controller :omega-pid] pid-next-tick omega-pv dt-millis)
        (assoc :alpha (-> alpha-unbounded
                          (min 1)
                          (max -1))))))

(defn next-tick-ship-control-inputs
  [game-state ship dt-millis]
  (next-tick-ship-alpha game-state ship dt-millis))

;; game state

(defn next-tick-ship-dynamics
  [{:keys [angular-mass theta omega alpha
           mass s v a] :as ship}
   dt-millis]
  (let [dt-s (/ dt-millis 1000)
        theta* (+ theta (* dt-s omega))
        omega* (+ omega (* 1.0 dt-s alpha))
        alpha* alpha
        s* (let [[sx sy] s
                 [vx vy] v]
             [(+ sx (* 1.0 dt-s vx))
              (+ sy (* 1.0 dt-s vy))])
        v* (let [[vx vy] v
                 [ax ay] a]
             [(+ vx (* 1.0 dt-s ax))
              (+ vy (* 1.0 dt-s ay))])
        a* a]
    (-> ship
        (assoc :theta theta*
               :omega omega*
               :alpha alpha*
               :s s*
               :v v*
               :a a*))))

(defn update-ship-dynamics!
  [game-state dt-millis]
  (swap! game-state assoc :ships (->> (:ships @game-state)
                                      (map (fn [ship]
                                             (next-tick-ship-dynamics ship dt-millis)))
                                      (into [])))
  (swap! game-state assoc :ships (->> (:ships @game-state)
                                      (map (fn [ship]
                                             (next-tick-ship-control-inputs game-state ship dt-millis)))
                                      (into []))))

(defn update-game-state!
  [game-state dt-millis]
  (update-ship-dynamics! game-state dt-millis))

(def vertical-acceleration-ship
  {:id 1729559904

   :angular-mass 100
   :theta 0
   :omega 0
   :alpha 0

   :mass 1000000000
   :s [350 800]
   :v [0 0]
   :a [0 -50]})

(def rotation-acceleration-ship
  {:id 1729559904

   :angular-mass 100
   :theta 0
   :omega 0
   :alpha 1

   :mass 1000000000
   :s [100 100]
   :v [0 0]
   :a [0 0]})

(def rotate-to-position-ship
  {:id 1729559904

   :angular-mass 100
   :theta 0
   :omega 0
   :alpha 0
   :alpha-controller {:theta-pid {:kp 100
                                  :ki 0
                                  :kd 1
                                  :p 0
                                  :i 0
                                  :d 0
                                  :sv 0}
                      :omega-pid {:kp 100
                                  :ki 0
                                  :kd 1
                                  :p 0
                                  :i 0
                                  :d 0
                                  :sv 0}}

   :mass 1000000000
   :s [100 100]
   :v [0 0]
   :a [0 0]})

(comment
  (def stop (start))

  (stop))

(defn init-game-state
  []
  (atom {:target-s [200 200]
         :ships [
                 ;; rotation-acceleration-ship
                 ;; vertical-acceleration-ship
                 rotate-to-position-ship]}))

;; input

(defn mouse-listener [game-state]
  (proxy [MouseListener] []
    (mouseClicked [e]
      (let [x (.getX e)
            y (.getY e)]
        (swap! game-state assoc :target-s [x y])))
    (mouseEntered [e])
    (mouseExited [e])
    (mousePressed [e])
    (mouseReleased [e])))

;; rendering

(defn file->img
  [source]
  (ImageIO/read (io/file source)))

(defn render-ship
  [{:keys [id s a v theta]} g]
  (let [[sx sy] s
        ;; TODO: don't read from fs every render
        img (file->img (format "src/game/units/ships/ship_%s.png" id))
        [w h] [(.getWidth img) (.getHeight img)]
        r (AffineTransform.)]
    (doto r
      (.setToRotation (+ theta (/ Math/PI 2)) sx sy))
    (doto (.create g)
      (.setTransform r)
      (.drawImage img
                  (int (+ sx (* -1 (/ w 2))))
                  (int (+ sy (* -1 (/ h 2))))
                  nil)
      (.dispose))))

(defn render-ships
  [game-state g]
  (doseq [ship (:ships @game-state)]
    (render-ship ship g)))

(defn render-target-s
  [game-state g]
  (let [[target-sx target-sy :as target-s] (:target-s @game-state)]
    (when target-s
      (doto (.create g)
        (.setColor Color/BLUE)
        (.drawRect target-sx target-sy 5 5)))))

(defn paint-component
  [game-state g]
  (render-ships game-state g)
  (render-target-s game-state g))

(defn new-drawing-context
  [game-state {:keys [width height x y drawing-context-name]}]
  (let [frame (JFrame. drawing-context-name)
        panel (proxy [JPanel] []
                (paintComponent [g]
                  (paint-component game-state g)))]
    (doto panel
      (.addMouseListener (mouse-listener game-state)))
    (doto frame
      (.setContentPane panel)
      (.setDefaultCloseOperation JFrame/DO_NOTHING_ON_CLOSE)
      (.setSize width height)
      (.setLocation x y)
      (.setVisible true))
    {:frame frame
     :panel panel}))

(defn dispose-drawing-context
  [{:keys [frame]}]
  (doto frame
    (.setVisible false)
    (.dispose)))

(defn repaint-drawing-context
  [{:keys [panel]}]
  (.repaint panel))

;; entry point

(defn init-loop
  [f t0 millis stop?]
  (loop [f* f
         t0* t0]
    (let [t1 (time/instant)]
      (f* t0* t1)
      (Thread/sleep millis)
      (when-not @stop?
        (recur f* t1)))))

(defn start
  []
  (let [t0 (time/instant)
        game-state (init-game-state)
        drawing-context (new-drawing-context game-state
                                             {:drawing-context-name "Sparts"
                                              :width 650
                                              :height 1000
                                              :x 0
                                              :y 0})
        stop? (volatile! false)
        game-loop-thread
        (Thread. (fn []
                   (init-loop (fn [t0 t1]
                                (let [dt-millis (time/time-between t0 t1 :millis)]
                                  (update-game-state! game-state dt-millis)))
                              t0
                              5
                              stop?)))
        render-loop-thread
        (Thread. (fn []
                   (init-loop (fn [t0 t1]
                                (let [dt-millis (time/time-between t0 t1 :millis)]
                                  (repaint-drawing-context drawing-context)))
                              t0
                              15
                              stop?)))]
    (.start game-loop-thread)
    (.start render-loop-thread)
    (fn []
      (vswap! stop? not)
      (dispose-drawing-context drawing-context))))

(comment
  (def stop (start))

  (stop))

;; click on screen have unit look at
;; think about linear pid
