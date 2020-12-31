// Compiled by ClojureScript 1.10.741 {}
goog.provide('game.client.core');
goog.require('cljs.core');
goog.require('game.units.fighters');
cljs.core.enable_console_print_BANG_.call(null);
game.client.core.by_id = (function game$client$core$by_id(id){
return document.getElementById(id);
});
game.client.core.setup_canvas_BANG_ = (function game$client$core$setup_canvas_BANG_(p__27754){
var map__27755 = p__27754;
var map__27755__$1 = (((((!((map__27755 == null))))?(((((map__27755.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27755.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27755):map__27755);
var width = cljs.core.get.call(null,map__27755__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var height = cljs.core.get.call(null,map__27755__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var game_canvas = game.client.core.by_id.call(null,"game-canvas");
(game_canvas["width"] = width);

return (game_canvas["height"] = height);
});
game.client.core.draw_path_BANG_ = (function game$client$core$draw_path_BANG_(ctx,p__27757){
var map__27758 = p__27757;
var map__27758__$1 = (((((!((map__27758 == null))))?(((((map__27758.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27758.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27758):map__27758);
var vec__27759 = cljs.core.get.call(null,map__27758__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var x0 = cljs.core.nth.call(null,vec__27759,(0),null);
var y0 = cljs.core.nth.call(null,vec__27759,(1),null);
var vec__27762 = cljs.core.get.call(null,map__27758__$1,new cljs.core.Keyword(null,"s","s",1705939918));
var x1 = cljs.core.nth.call(null,vec__27762,(0),null);
var y1 = cljs.core.nth.call(null,vec__27762,(1),null);
if(cljs.core.truth_(x0)){
var G__27766 = ctx;
(G__27766["strokeStyle"] = "#555");

G__27766.beginPath();

G__27766.moveTo(x0,y0);

G__27766.lineTo(x1,y1);

G__27766.stroke();

return G__27766;
} else {
return null;
}
});
game.client.core.draw_canvas_BANG_ = (function game$client$core$draw_canvas_BANG_(){
var game_canvas = game.client.core.by_id.call(null,"game-canvas");
var game_ctx = game_canvas.getContext("2d");
game_ctx.clearRect((0),(0),(1000),(1000));

var G__27767 = game_ctx;
(G__27767["font"] = "12px Arial");

(G__27767["strokeStyle"] = "#555");

G__27767.strokeText("hello",(10),(50));

return G__27767;
});
game.client.core.draw_canvas_BANG_.call(null);

//# sourceMappingURL=core.js.map?rel=1609261852647
