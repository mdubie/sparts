(ns ^:figwheel-always game.client.core
  (:require [game.units.fighters :as fighters]))

(enable-console-print!)

(defn by-id
  [id]
  (.getElementById js/document id))

(defn setup-canvas!
  [{:keys [width height]}]
  (let [game-canvas (by-id "game-canvas")]
    (aset game-canvas "width" width)
    (aset game-canvas "height" height)))

(defn draw-path!
  [ctx {[x0 y0] :path [x1 y1] :s}]
  (when x0
    (doto ctx
      (aset "strokeStyle" "#555")
      (.beginPath)
      (.moveTo x0 y0)
      (.lineTo x1 y1)
      (.stroke))))

(defn draw-canvas!
  []
  (let [game-canvas (by-id "game-canvas")
        game-ctx (.getContext game-canvas "2d")]
    (.clearRect game-ctx 0 0 1000 1000)
    (doto game-ctx
      (aset "font" "12px Arial")
      (aset "strokeStyle" "#555")
      (.strokeText "hello" 10 50))))

(draw-canvas!)
