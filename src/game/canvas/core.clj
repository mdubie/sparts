(ns game.canvas.core
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

;; (defn paint-cell [panel color cell-size {x :x y :y}]
;;   (let [graphics (.getGraphics panel)]
;;     (.setColor graphics color)
;;     (.fillRect graphics
;;       (* x cell-size) (* y cell-size) cell-size cell-size)))

;; (defn erase-cell [game cell]
;;   (let [panel (game :panel)
;;         color (.getBackground panel)
;;         cell-size (game :cell-size)]
;;     (paint-cell panel color cell-size cell)))

;; (defn erase-apple [game]
;;   (let [apple (game :apple)]
;;     (erase-cell game apple)))

;; (defn erase-snake [game]
;;   (doseq [cell ((game :snake) :body)]
;;     (erase-cell game cell)))

;; (defn paint-apple [panel cell-size apple]
;;   (paint-cell panel Color/RED cell-size apple))

;; (defn paint-snake [panel cell-size snake]
;;   ; We only need to paint the head because
;;   ; the rest will have been already painted.
;;   (let [head (first (snake :body))]
;;     (paint-cell panel Color/GREEN cell-size head)))

;; (defn paint-game [game]
;;   (let [panel (game :panel)
;;         cell-size (game :cell-size)])
;;   (paint-apple panel cell-size (game :apple))
;;   (paint-snake panel cell-size (game :snake)))

;; (defn create-panel [width height key-code-atom]
;;   (proxy [JPanel KeyListener]
;;     [] ; superclass constructor arguments
;;     (getPreferredSize [] (Dimension. width height))
;;     (keyPressed [e]
;;       (compare-and-set! key-code-atom @key-code-atom (.getKeyCode e)))
;;     (keyReleased [e]) ; do nothing
;;     (keyTyped [e]) ; do nothing
;;   ))

;; (defn configure-gui [frame panel]
;;   (doto panel
;;     (.setFocusable true) ; won't generate key events without this
;;     (.addKeyListener panel))
;;   (doto frame
;;     (.add panel)
;;     (.pack)
;;     (.setDefaultCloseOperation JFrame/EXIT_ON_CLOSE)
;;     (.setVisible true)))

;; (defn main []
;;   (let [frame (JFrame. "Snake")
;;         width 30
;;         height 30
;;         cell-size 10
;;         key-code-atom (atom nil)
;;         panel-width (* width cell-size)
;;         panel-height (* height cell-size)
;;         panel (create-panel panel-width panel-height key-code-atom)
;;         first-game (create-game panel cell-size)]
;;     (configure-gui frame panel)
;;     (loop [game first-game]
;;       (paint-game game)
;;       (Thread/sleep (game :ms-per-move))
;;       (recur (step game key-code-atom)))))

;; (defn add-vectors
;;   [[x1 y1] [x2 y2]]
;;   [(+ x1 x2)
;;    (+ y1 y2)])

;; (defn sum-vectors
;;   [vectors]
;;   (reduce
;;    add-vectors
;;    [0.0 0.0]
;;    vectors))

;; (defn weighted-average
;;   [v1 v2 w1 w2]
;;   (* 1.0
;;      (/ (+ (* w1 v1)
;;            (* w2 v2))
;;         (+ w1 w2))))

;; (defn abs-rad
;;   [rad]
;;   (mod
;;    (+ (* 2 Math/PI)
;;       rad)
;;    (* 2 Math/PI)))

;; (defn b1+b2->d
;;   [{[x1 y1] :s}
;;    {[x2 y2] :s}]
;;   (Math/sqrt (+ (Math/pow (- x2 x1) 2)
;;                 (Math/pow (- y2 y1) 2))))

;; (defn p1+p2->collision?
;;   [{r1 :r :as p1}
;;    {r2 :r :as p2}]
;;   (< (b1+b2->d p1 p2)
;;      (+ r1 r2)))

;; (defn b1+b2->theta
;;   [{[x1 y1] :s}
;;    {[x2 y2] :s}]
;;   (Math/atan2
;;    (- y2 y1)
;;    (- x2 x1)))

;; (defn theta->unit-vector
;;   [theta]
;;   [(Math/cos theta) (- (Math/sin theta))])

;; (defn update-body-position
;;   [{:keys [v s] :as body} dt]
;;   (-> body
;;       (assoc :path s)
;;       (update :s
;;               (fn [[sx sy] [vx vy]]
;;                 [(+ sx (* vx dt))
;;                  (+ sy (* vy dt))])
;;               v)))

;; (defn update-body-velocity
;;   [{:keys [a] :as body} dt]
;;   (update body :v
;;           (fn [[vx vy] [ax ay]]
;;             [(+ vx (* ax dt))
;;              (+ vy (* ay dt))])
;;           a))

(defn profile
  [f]
  (let [start (time/instant)
        f-results (f)
        end (time/instant)]
    (prn (time/time-between start end :millis))
    f-results))

(defn file->img
  [source]
  (ImageIO/read (io/file source)))

(defn mouse-listener [game-state g]
  (proxy [MouseListener] []
    (mouseClicked [e]
      (let [x (.getX e)
            y (.getY e)]
       (swap! game-state assoc :target-s [x y])))
    (mouseEntered [e])
    (mouseExited [e])
    (mousePressed [e])
    (mouseReleased [e])))

(defn new-canvas-context
  [game-state {:keys [canvas-name width height]}]
  (let [frame (JFrame. canvas-name)
        panel (JPanel.)
        _ (doto frame
            (.setContentPane panel)
            ;; (.setDefaultCloseOperation JFrame/EXIT_ON_CLOSE)
            (.setSize width height)
            (.setVisible true))
        g (.getGraphics panel)]
    ;; (doto g
    ;;   (.setRenderingHint RenderingHints/KEY_ANTIALIASING RenderingHints/VALUE_ANTIALIAS_ON))
    (doto panel
      (.addMouseListener (mouse-listener game-state g)))
    {:width width
     :height height
     :canvas g
     :frame frame
     :panel panel
     :game-state game-state}))

(defn dispose-canvas-context
  [{:keys [frame]}]
  (doto frame
    (.setVisible false)
    (.dispose)))

(comment
 (System/nanoTime)

 (System/nanoTime))

(defn render-ship!
  [{:keys [canvas]} {:keys [id s a v theta]}]
  (let [[sx sy] s
        ;; TODO: don't read from fs every render
        img (file->img (format "src/game/units/ships/ship_%s.png" id))
        [w h] [(.getWidth img) (.getHeight img)]
        r (AffineTransform.)]
        ;; g (.getGraphics panel)]
    (doto r
      (.setToRotation theta sx sy))
    (doto canvas
      (.setTransform r)
      (.drawImage img
                  (int (+ sx (* -1 (/ w 2))))
                  (int (+ sy (* -1 (/ h 2))))
                  nil))))
      ;; (.dispose))))

(defn render-canvas!
  [{:keys [width height canvas game-state] :as canvas-context}]
  (let [{:keys [ships target-s]} @game-state]

    (doto canvas
      (.clearRect 0 0 width height))

    (when target-s
      (let [[target-sx target-sy] target-s]
        (doto canvas
          (.setColor Color/BLUE)
          (.drawRect target-sx target-sy 5 5))))

    (doseq [ship (:ships @game-state)]
      (render-ship! canvas-context ship))))

(defn next-tick-ship-dynamics
  [{:keys [angular-mass theta omega alpha
           mass s v a] :as ship}
   dt-millis]
  (let [dt-s (/ dt-millis 1000)
        theta* (+ theta (* dt-s omega))
        omega* omega
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

;; target s
;; current s

;; turn to location
;; accelerate
;; flip
;; decelerate

(defn update-ship-dynamics!
  [game-state dt-millis]
  (swap! game-state assoc :ships (->> (:ships @game-state)
                                      (map (fn [ship]
                                             (next-tick-ship-dynamics ship dt-millis)))
                                      (into []))))

;; (defn update-ship-route-plan!
;;   [game-state dt-millis])

;; step one turn to target coordinate
;; accel and deccel planning

;;
;; if target s exists and route plan does not exist
;; calculate

;; turn to desired theta
;; accelerate up until 30% of the way there (later calculate turn around time)
;; rotate 180
;; accelerate to 80
;; decelerate from 90
;; deceleration schedule

;; control loop

;; from stopped
;; from moving


;; make

;; create simple movement operations that can be composed for higher order move operations


;; move and path are differnt commands
  ;; turn to theta
  ;; accelerate to point

;; when a command is issued immediate perform plan
;; occasionally update plan
;; orders
;; append to queue
;; replace queue
;; front of queue

(defn update-game-state!
  [game-state dt-millis]
  (update-ship-dynamics! game-state dt-millis))
  ;; (update-ship-route-plan! game-state dt-millis))

(defn init-loop
  [f t0 millis stop?]
  (loop [f* f
         t0* t0]
    (let [t1 (time/instant)]
      (f* t0* t1)
      (Thread/sleep millis)
      (when-not @stop?
        (recur f* t1)))))

(defn init-game-state
  []
  (atom {:ships [{:id 1729559904

                  :angular-mass 100
                  :theta 0
                  :omega 0
                  :alpha 0

                  :mass 1000000000
                  :s [100 200]
                  :v [0 10]
                  :a [0 0]}]})) ;;-0.00000001]}]}))

(defn start
  []
  (let [t0 (time/instant)
        game-state (init-game-state)
        canvas-context (new-canvas-context game-state {:canvas-name "Sparts"
                                                       :width 650
                                                       :height 1000})
        stop? (volatile! false)
        ;; game-loop-thread
        ;; (Thread. (fn []
        ;;            (init-loop (fn [t0 t1]
        ;;                         (let [dt-millis (time/time-between t0 t1 :millis)]
        ;;                           (update-game-state! game-state dt-millis)))
        ;;                       t0
        ;;                       5
        ;;                       stop?)))
        render-loop-thread
        (Thread. (fn []
                   (init-loop (fn [t0 t1]
                                (let [dt-millis (time/time-between t0 t1 :millis)]
                                  (render-canvas! canvas-context)))
                              t0
                              15
                              stop?)))]
    ;; (.start game-loop-thread)
    (.start render-loop-thread)
    (fn []
      (vswap! stop? not)
      (dispose-canvas-context canvas-context))))

(comment
  (def stop (start))

  (stop))

(comment


    ;; []
    ;; (let [t0 (time/instant)
    ;;       game-state (init-game-state)
    ;;       canvas-context (new-canvas-context game-state {:canvas-name "Sparts"
    ;;                                                      :width 650
    ;;                                                      :height 1000})
    ;;       stop? (volatile! false)
    ;;       game-loop-thread
    ;;       (Thread. (fn []
    ;;                  (init-loop (fn [t0 t1]
    ;;                               (let [dt-millis (time/time-between t0 t1 :millis)]
    ;;                                 (update-game-state! game-state dt-millis)
    ;;                                 (render-canvas! canvas-context)))
    ;;                             t0
    ;;                             10
    ;;                             stop?)))]
    ;;   (.start game-loop-thread)
    ;;   (fn []
    ;;     (vswap! stop? not)
    ;;     (dispose-canvas-context canvas-context))))

  (def game-state (init-game-state))

  (def canvas-context (new-canvas-context game-state {:canvas-name "Sparts"
                                                      :width 500
                                                      :height 500}))
  @game-state

  (/ Math/PI 2)

  {:ships [{:mass 1000000000, :v [0 0], :theta 0, :s [100 200], :omega 0, :id 1729559904, :alpha 0, :angular-mass 100, :a [0 0]}]}
  {:ships [{:mass 1000000000, :v [0.0 0.0], :theta 0N, :s [100.0 200.0], :omega 0, :id 1729559904, :alpha 0, :angular-mass 100, :a [0 0]}]}

  (update-game-state! game-state 10)

  (render-canvas! canvas-context)

  (dispose-canvas-context canvas-context))

;; todo
  ;; pass around an event queue rather than game state


;; TODO
;; get the 3 basic ship actions working with physics
  ;; accelerate
  ;; torque left
  ;; torque right
;; get rotation controller working
  ;; rotate to theta
;; get linear position controller working
  ;; accelerate to position
  ;; deccelate to possition

;; g

;; (defn new-panel
;;   []
;;   (let [
;;         panel (proxy [javax.swing.JPanel] []
;;                 (paintComponent [g]
;;                   (proxy-super paintComponent g)))]
;;     (doto (javax.swing.JFrame.)
;;       (.setContentPane panel)
;;       (.setSize 200 200)
;;       (.show))))

;; (doto (javax.swing.JFrame.)
;;   (.setContentPane panel)
;;   (.setSize 200 200)
;;   (.show))

;; (comment
;;   (let [click (ref nil)
;;         panel (proxy [javax.swing.JPanel] []
;;                 (paintComponent [g]
;;                   (proxy-super paintComponent g)
;;                   (.drawImage g (.getImage
;;                                  (javax.swing.ImageIcon. "play.png"))
;;                               0 0 (.getWidth this) (.getHeight this) nil)
;;                   (if @click
;;                     (.fillRect g (:x @click) (:y @click) 10 10))))]
;;     (.addMouseListener panel
;;                        (proxy [java.awt.event.MouseAdapter] []
;;                          (mouseClicked [e]
;;                            (let [p (.getPoint e)]
;;                              (dosync (ref-set click {:x (.x p), :y (.y p)})))
;;                            (javax.swing.SwingUtilities/invokeLater #(.repaint panel)))))
;;     (doto (javax.swing.JFrame.)
;;       (.setContentPane panel)
;;       (.setSize 200 200)
;;       (.show))))

;; (defn- build-frame
;;   "Create JFrame object, create and attach panel and do what is needed to show window. Attach key events and closing event."
;;   [^JFrame frame ^java.awt.Canvas panel active? on-top? windowname width height]
;;   (let [closer (proxy [WindowAdapter] []
;;                  (windowClosing [^WindowEvent e] (close-window-fn frame active?)))]
;;     (doto frame
;;       (.setLayout (java.awt.BorderLayout.))
;;       (.setIconImages window-icons)
;;       (.add panel)
;;       (.setSize (Dimension. width height))
;;       (.invalidate)
;;       (.setResizable false)
;;       (.pack)
;;       (.setDefaultCloseOperation JFrame/DO_NOTHING_ON_CLOSE)
;;       (.addWindowListener closer)
;;       (.setName windowname)
;;       (.setTitle windowname)
;;       (.setBackground Color/white)
;;       ;; (.setLocation 100 100)
;;       (.setLocationRelativeTo nil)
;;       (.setVisible true)
;;       (.toFront)
;;       (.setAlwaysOnTop on-top?))
;;     (doto panel
;;       (.requestFocus)
;;       (.createBufferStrategy 2))))

;; (defn- repaint
;;   "Draw buffer on panel using `BufferStrategy` object."
;;   [^java.awt.Canvas panel ^Canvas canvas ^BufferedImage background hints]
;;   (let [^BufferStrategy strategy (.getBufferStrategy panel)
;;         ^BufferedImage b (.buffer canvas)]
;;     (when strategy
;;       (loop []
;;         (loop []
;;           (let [^Graphics2D graphics-context (.getDrawGraphics strategy)]
;;             (.drawImage graphics-context background 0 0 (.getWidth panel) (.getHeight panel) nil)
;;             (when hints (set-rendering-hints graphics-context hints))
;;             (.drawImage graphics-context b 0 0 (.getWidth panel) (.getHeight panel) nil) ;; sizes of panel???
;;             (.dispose graphics-context))
;;           (when (.contentsRestored strategy) (recur)))
;;         (.show strategy)
;;         (when (.contentsLost strategy) (recur))))
;;     (.sync (Toolkit/getDefaultToolkit))))

;; .setDefaultCloseOperation(JFrame.DO_NOTHING_ON_CLOSE)

(defn panel
  []
  (let [panel (proxy [javax.swing.JPanel] []
                (paintComponent [g]
                  (proxy-super paintComponent g)))]))

;;         panel (proxy [javax.swing.JPanel] []
;;                 (paintComponent [g]
;;                   (proxy-super paintComponent g)
;;                   (.drawImage g (.getImage
;;                                  (javax.swing.ImageIcon. "play.png"))
;;                               0 0 (.getWidth this) (.getHeight this) nil)
;;                   (if @click
;;                     (.fillRect g (:x @click) (:y @click) 10 10))))]

(comment
  (let [frame (JFrame. canvas-name)
        panel (JPanel.)]))


(defn new-canvas-context
  [game-state {:keys [canvas-name width height]}]
  (let [frame (JFrame. canvas-name)
        panel (JPanel.)
        _ (doto frame
            (.setContentPane panel)
            ;; (.setDefaultCloseOperation JFrame/EXIT_ON_CLOSE)
            (.setSize width height)
            (.setVisible true))
        g (.getGraphics panel)]
    ;; (doto g
    ;;   (.setRenderingHint RenderingHints/KEY_ANTIALIASING RenderingHints/VALUE_ANTIALIAS_ON))
    (doto panel
      (.addMouseListener (mouse-listener game-state g)))
    {:width width
     :height height
     :canvas g
     :frame frame
     :panel panel
     :game-state game-state}))

(defn paint-component
  [g]
  (doto g
    (.setColor Color/BLUE)
    (.drawRect (first (shuffle (range 500)))
               (first (shuffle (range 500)))
               5 5)))

(defn new-drawing-context
  [{:keys [width height x y drawing-context-name]}]
  (let [frame (JFrame. drawing-context-name)
        panel (proxy [JPanel] []
                (paintComponent [g]
                  (paint-component g)))]
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

(comment
  (def ctx
   (new-drawing-context {:x 0
                         :y 0
                         :width 600
                         :height 900
                         :drawing-context-name "sparts"}))

  (repaint-drawing-context ctx)

  (dispose-drawing-context ctx))

"
    private void doDrawing(Graphics g) {

        Graphics2D g2d = (Graphics2D) g.create();

        g2d.setColor(new Color(150, 150, 150));
        g2d.fillRect(20, 20, 80, 50);

        AffineTransform tx1 = new AffineTransform();
        tx1.translate(110, 22);
        tx1.scale(0.5, 0.5);

        g2d.setTransform(tx1);
        g2d.fillRect(0, 0, 80, 50);

        AffineTransform tx2 = new AffineTransform();
        tx2.translate(170, 20);
        tx2.scale(1.5, 1.5);

        g2d.setTransform(tx2);
        g2d.fillRect(0, 0, 80, 50);

        g2d.dispose();
    }
"
