// Compiled by ClojureScript 1.10.741 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__23417 = arguments.length;
switch (G__23417) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async23418 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async23418 = (function (f,blockable,meta23419){
this.f = f;
this.blockable = blockable;
this.meta23419 = meta23419;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async23418.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23420,meta23419__$1){
var self__ = this;
var _23420__$1 = this;
return (new cljs.core.async.t_cljs$core$async23418(self__.f,self__.blockable,meta23419__$1));
}));

(cljs.core.async.t_cljs$core$async23418.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23420){
var self__ = this;
var _23420__$1 = this;
return self__.meta23419;
}));

(cljs.core.async.t_cljs$core$async23418.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async23418.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async23418.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async23418.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async23418.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta23419","meta23419",-1579539109,null)], null);
}));

(cljs.core.async.t_cljs$core$async23418.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async23418.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23418");

(cljs.core.async.t_cljs$core$async23418.cljs$lang$ctorPrWriter = (function (this__4363__auto__,writer__4364__auto__,opt__4365__auto__){
return cljs.core._write.call(null,writer__4364__auto__,"cljs.core.async/t_cljs$core$async23418");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async23418.
 */
cljs.core.async.__GT_t_cljs$core$async23418 = (function cljs$core$async$__GT_t_cljs$core$async23418(f__$1,blockable__$1,meta23419){
return (new cljs.core.async.t_cljs$core$async23418(f__$1,blockable__$1,meta23419));
});

}

return (new cljs.core.async.t_cljs$core$async23418(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__23424 = arguments.length;
switch (G__23424) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__23427 = arguments.length;
switch (G__23427) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__23430 = arguments.length;
switch (G__23430) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_23432 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_23432);
} else {
cljs.core.async.impl.dispatch.run.call(null,(function (){
return fn1.call(null,val_23432);
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__23434 = arguments.length;
switch (G__23434) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5733__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5733__auto__)){
var ret = temp__5733__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5733__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__5733__auto__)){
var retb = temp__5733__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,(function (){
return fn1.call(null,ret);
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4607__auto___23436 = n;
var x_23437 = (0);
while(true){
if((x_23437 < n__4607__auto___23436)){
(a[x_23437] = (0));

var G__23438 = (x_23437 + (1));
x_23437 = G__23438;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__23439 = (i + (1));
i = G__23439;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async23440 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async23440 = (function (flag,meta23441){
this.flag = flag;
this.meta23441 = meta23441;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async23440.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23442,meta23441__$1){
var self__ = this;
var _23442__$1 = this;
return (new cljs.core.async.t_cljs$core$async23440(self__.flag,meta23441__$1));
}));

(cljs.core.async.t_cljs$core$async23440.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23442){
var self__ = this;
var _23442__$1 = this;
return self__.meta23441;
}));

(cljs.core.async.t_cljs$core$async23440.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async23440.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
}));

(cljs.core.async.t_cljs$core$async23440.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async23440.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async23440.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta23441","meta23441",1744186163,null)], null);
}));

(cljs.core.async.t_cljs$core$async23440.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async23440.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23440");

(cljs.core.async.t_cljs$core$async23440.cljs$lang$ctorPrWriter = (function (this__4363__auto__,writer__4364__auto__,opt__4365__auto__){
return cljs.core._write.call(null,writer__4364__auto__,"cljs.core.async/t_cljs$core$async23440");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async23440.
 */
cljs.core.async.__GT_t_cljs$core$async23440 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async23440(flag__$1,meta23441){
return (new cljs.core.async.t_cljs$core$async23440(flag__$1,meta23441));
});

}

return (new cljs.core.async.t_cljs$core$async23440(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async23443 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async23443 = (function (flag,cb,meta23444){
this.flag = flag;
this.cb = cb;
this.meta23444 = meta23444;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async23443.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23445,meta23444__$1){
var self__ = this;
var _23445__$1 = this;
return (new cljs.core.async.t_cljs$core$async23443(self__.flag,self__.cb,meta23444__$1));
}));

(cljs.core.async.t_cljs$core$async23443.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23445){
var self__ = this;
var _23445__$1 = this;
return self__.meta23444;
}));

(cljs.core.async.t_cljs$core$async23443.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async23443.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
}));

(cljs.core.async.t_cljs$core$async23443.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async23443.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async23443.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta23444","meta23444",699448955,null)], null);
}));

(cljs.core.async.t_cljs$core$async23443.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async23443.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23443");

(cljs.core.async.t_cljs$core$async23443.cljs$lang$ctorPrWriter = (function (this__4363__auto__,writer__4364__auto__,opt__4365__auto__){
return cljs.core._write.call(null,writer__4364__auto__,"cljs.core.async/t_cljs$core$async23443");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async23443.
 */
cljs.core.async.__GT_t_cljs$core$async23443 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async23443(flag__$1,cb__$1,meta23444){
return (new cljs.core.async.t_cljs$core$async23443(flag__$1,cb__$1,meta23444));
});

}

return (new cljs.core.async.t_cljs$core$async23443(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__23446_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__23446_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__23447_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__23447_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__4120__auto__ = wport;
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return port;
}
})()], null));
} else {
var G__23448 = (i + (1));
i = G__23448;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4120__auto__ = ret;
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5735__auto__ = (function (){var and__4109__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__4109__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__4109__auto__;
}
})();
if(cljs.core.truth_(temp__5735__auto__)){
var got = temp__5735__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__4736__auto__ = [];
var len__4730__auto___23454 = arguments.length;
var i__4731__auto___23455 = (0);
while(true){
if((i__4731__auto___23455 < len__4730__auto___23454)){
args__4736__auto__.push((arguments[i__4731__auto___23455]));

var G__23456 = (i__4731__auto___23455 + (1));
i__4731__auto___23455 = G__23456;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__23451){
var map__23452 = p__23451;
var map__23452__$1 = (((((!((map__23452 == null))))?(((((map__23452.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23452.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23452):map__23452);
var opts = map__23452__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq23449){
var G__23450 = cljs.core.first.call(null,seq23449);
var seq23449__$1 = cljs.core.next.call(null,seq23449);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__23450,seq23449__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__23458 = arguments.length;
switch (G__23458) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__23357__auto___23504 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__23358__auto__ = (function (){var switch__23262__auto__ = (function (state_23482){
var state_val_23483 = (state_23482[(1)]);
if((state_val_23483 === (7))){
var inst_23478 = (state_23482[(2)]);
var state_23482__$1 = state_23482;
var statearr_23484_23505 = state_23482__$1;
(statearr_23484_23505[(2)] = inst_23478);

(statearr_23484_23505[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23483 === (1))){
var state_23482__$1 = state_23482;
var statearr_23485_23506 = state_23482__$1;
(statearr_23485_23506[(2)] = null);

(statearr_23485_23506[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23483 === (4))){
var inst_23461 = (state_23482[(7)]);
var inst_23461__$1 = (state_23482[(2)]);
var inst_23462 = (inst_23461__$1 == null);
var state_23482__$1 = (function (){var statearr_23486 = state_23482;
(statearr_23486[(7)] = inst_23461__$1);

return statearr_23486;
})();
if(cljs.core.truth_(inst_23462)){
var statearr_23487_23507 = state_23482__$1;
(statearr_23487_23507[(1)] = (5));

} else {
var statearr_23488_23508 = state_23482__$1;
(statearr_23488_23508[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23483 === (13))){
var state_23482__$1 = state_23482;
var statearr_23489_23509 = state_23482__$1;
(statearr_23489_23509[(2)] = null);

(statearr_23489_23509[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23483 === (6))){
var inst_23461 = (state_23482[(7)]);
var state_23482__$1 = state_23482;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23482__$1,(11),to,inst_23461);
} else {
if((state_val_23483 === (3))){
var inst_23480 = (state_23482[(2)]);
var state_23482__$1 = state_23482;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23482__$1,inst_23480);
} else {
if((state_val_23483 === (12))){
var state_23482__$1 = state_23482;
var statearr_23490_23510 = state_23482__$1;
(statearr_23490_23510[(2)] = null);

(statearr_23490_23510[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23483 === (2))){
var state_23482__$1 = state_23482;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23482__$1,(4),from);
} else {
if((state_val_23483 === (11))){
var inst_23471 = (state_23482[(2)]);
var state_23482__$1 = state_23482;
if(cljs.core.truth_(inst_23471)){
var statearr_23491_23511 = state_23482__$1;
(statearr_23491_23511[(1)] = (12));

} else {
var statearr_23492_23512 = state_23482__$1;
(statearr_23492_23512[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23483 === (9))){
var state_23482__$1 = state_23482;
var statearr_23493_23513 = state_23482__$1;
(statearr_23493_23513[(2)] = null);

(statearr_23493_23513[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23483 === (5))){
var state_23482__$1 = state_23482;
if(cljs.core.truth_(close_QMARK_)){
var statearr_23494_23514 = state_23482__$1;
(statearr_23494_23514[(1)] = (8));

} else {
var statearr_23495_23515 = state_23482__$1;
(statearr_23495_23515[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23483 === (14))){
var inst_23476 = (state_23482[(2)]);
var state_23482__$1 = state_23482;
var statearr_23496_23516 = state_23482__$1;
(statearr_23496_23516[(2)] = inst_23476);

(statearr_23496_23516[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23483 === (10))){
var inst_23468 = (state_23482[(2)]);
var state_23482__$1 = state_23482;
var statearr_23497_23517 = state_23482__$1;
(statearr_23497_23517[(2)] = inst_23468);

(statearr_23497_23517[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23483 === (8))){
var inst_23465 = cljs.core.async.close_BANG_.call(null,to);
var state_23482__$1 = state_23482;
var statearr_23498_23518 = state_23482__$1;
(statearr_23498_23518[(2)] = inst_23465);

(statearr_23498_23518[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__23263__auto__ = null;
var cljs$core$async$state_machine__23263__auto____0 = (function (){
var statearr_23499 = [null,null,null,null,null,null,null,null];
(statearr_23499[(0)] = cljs$core$async$state_machine__23263__auto__);

(statearr_23499[(1)] = (1));

return statearr_23499;
});
var cljs$core$async$state_machine__23263__auto____1 = (function (state_23482){
while(true){
var ret_value__23264__auto__ = (function (){try{while(true){
var result__23265__auto__ = switch__23262__auto__.call(null,state_23482);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23265__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23265__auto__;
}
break;
}
}catch (e23500){if((e23500 instanceof Object)){
var ex__23266__auto__ = e23500;
var statearr_23501_23519 = state_23482;
(statearr_23501_23519[(5)] = ex__23266__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23482);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23500;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23264__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23520 = state_23482;
state_23482 = G__23520;
continue;
} else {
return ret_value__23264__auto__;
}
break;
}
});
cljs$core$async$state_machine__23263__auto__ = function(state_23482){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23263__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23263__auto____1.call(this,state_23482);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23263__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23263__auto____0;
cljs$core$async$state_machine__23263__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23263__auto____1;
return cljs$core$async$state_machine__23263__auto__;
})()
})();
var state__23359__auto__ = (function (){var statearr_23502 = f__23358__auto__.call(null);
(statearr_23502[(6)] = c__23357__auto___23504);

return statearr_23502;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23359__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = (function (p__23521){
var vec__23522 = p__23521;
var v = cljs.core.nth.call(null,vec__23522,(0),null);
var p = cljs.core.nth.call(null,vec__23522,(1),null);
var job = vec__23522;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__23357__auto___23693 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__23358__auto__ = (function (){var switch__23262__auto__ = (function (state_23529){
var state_val_23530 = (state_23529[(1)]);
if((state_val_23530 === (1))){
var state_23529__$1 = state_23529;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23529__$1,(2),res,v);
} else {
if((state_val_23530 === (2))){
var inst_23526 = (state_23529[(2)]);
var inst_23527 = cljs.core.async.close_BANG_.call(null,res);
var state_23529__$1 = (function (){var statearr_23531 = state_23529;
(statearr_23531[(7)] = inst_23526);

return statearr_23531;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23529__$1,inst_23527);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__23263__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__23263__auto____0 = (function (){
var statearr_23532 = [null,null,null,null,null,null,null,null];
(statearr_23532[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__23263__auto__);

(statearr_23532[(1)] = (1));

return statearr_23532;
});
var cljs$core$async$pipeline_STAR__$_state_machine__23263__auto____1 = (function (state_23529){
while(true){
var ret_value__23264__auto__ = (function (){try{while(true){
var result__23265__auto__ = switch__23262__auto__.call(null,state_23529);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23265__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23265__auto__;
}
break;
}
}catch (e23533){if((e23533 instanceof Object)){
var ex__23266__auto__ = e23533;
var statearr_23534_23694 = state_23529;
(statearr_23534_23694[(5)] = ex__23266__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23529);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23533;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23264__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23695 = state_23529;
state_23529 = G__23695;
continue;
} else {
return ret_value__23264__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__23263__auto__ = function(state_23529){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__23263__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__23263__auto____1.call(this,state_23529);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__23263__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__23263__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__23263__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__23263__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__23263__auto__;
})()
})();
var state__23359__auto__ = (function (){var statearr_23535 = f__23358__auto__.call(null);
(statearr_23535[(6)] = c__23357__auto___23693);

return statearr_23535;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23359__auto__);
}));


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});
var async = (function (p__23536){
var vec__23537 = p__23536;
var v = cljs.core.nth.call(null,vec__23537,(0),null);
var p = cljs.core.nth.call(null,vec__23537,(1),null);
var job = vec__23537;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});
var n__4607__auto___23696 = n;
var __23697 = (0);
while(true){
if((__23697 < n__4607__auto___23696)){
var G__23540_23698 = type;
var G__23540_23699__$1 = (((G__23540_23698 instanceof cljs.core.Keyword))?G__23540_23698.fqn:null);
switch (G__23540_23699__$1) {
case "compute":
var c__23357__auto___23701 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__23697,c__23357__auto___23701,G__23540_23698,G__23540_23699__$1,n__4607__auto___23696,jobs,results,process,async){
return (function (){
var f__23358__auto__ = (function (){var switch__23262__auto__ = ((function (__23697,c__23357__auto___23701,G__23540_23698,G__23540_23699__$1,n__4607__auto___23696,jobs,results,process,async){
return (function (state_23553){
var state_val_23554 = (state_23553[(1)]);
if((state_val_23554 === (1))){
var state_23553__$1 = state_23553;
var statearr_23555_23702 = state_23553__$1;
(statearr_23555_23702[(2)] = null);

(statearr_23555_23702[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23554 === (2))){
var state_23553__$1 = state_23553;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23553__$1,(4),jobs);
} else {
if((state_val_23554 === (3))){
var inst_23551 = (state_23553[(2)]);
var state_23553__$1 = state_23553;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23553__$1,inst_23551);
} else {
if((state_val_23554 === (4))){
var inst_23543 = (state_23553[(2)]);
var inst_23544 = process.call(null,inst_23543);
var state_23553__$1 = state_23553;
if(cljs.core.truth_(inst_23544)){
var statearr_23556_23703 = state_23553__$1;
(statearr_23556_23703[(1)] = (5));

} else {
var statearr_23557_23704 = state_23553__$1;
(statearr_23557_23704[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23554 === (5))){
var state_23553__$1 = state_23553;
var statearr_23558_23705 = state_23553__$1;
(statearr_23558_23705[(2)] = null);

(statearr_23558_23705[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23554 === (6))){
var state_23553__$1 = state_23553;
var statearr_23559_23706 = state_23553__$1;
(statearr_23559_23706[(2)] = null);

(statearr_23559_23706[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23554 === (7))){
var inst_23549 = (state_23553[(2)]);
var state_23553__$1 = state_23553;
var statearr_23560_23707 = state_23553__$1;
(statearr_23560_23707[(2)] = inst_23549);

(statearr_23560_23707[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__23697,c__23357__auto___23701,G__23540_23698,G__23540_23699__$1,n__4607__auto___23696,jobs,results,process,async))
;
return ((function (__23697,switch__23262__auto__,c__23357__auto___23701,G__23540_23698,G__23540_23699__$1,n__4607__auto___23696,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__23263__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__23263__auto____0 = (function (){
var statearr_23561 = [null,null,null,null,null,null,null];
(statearr_23561[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__23263__auto__);

(statearr_23561[(1)] = (1));

return statearr_23561;
});
var cljs$core$async$pipeline_STAR__$_state_machine__23263__auto____1 = (function (state_23553){
while(true){
var ret_value__23264__auto__ = (function (){try{while(true){
var result__23265__auto__ = switch__23262__auto__.call(null,state_23553);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23265__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23265__auto__;
}
break;
}
}catch (e23562){if((e23562 instanceof Object)){
var ex__23266__auto__ = e23562;
var statearr_23563_23708 = state_23553;
(statearr_23563_23708[(5)] = ex__23266__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23553);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23562;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23264__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23709 = state_23553;
state_23553 = G__23709;
continue;
} else {
return ret_value__23264__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__23263__auto__ = function(state_23553){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__23263__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__23263__auto____1.call(this,state_23553);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__23263__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__23263__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__23263__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__23263__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__23263__auto__;
})()
;})(__23697,switch__23262__auto__,c__23357__auto___23701,G__23540_23698,G__23540_23699__$1,n__4607__auto___23696,jobs,results,process,async))
})();
var state__23359__auto__ = (function (){var statearr_23564 = f__23358__auto__.call(null);
(statearr_23564[(6)] = c__23357__auto___23701);

return statearr_23564;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23359__auto__);
});})(__23697,c__23357__auto___23701,G__23540_23698,G__23540_23699__$1,n__4607__auto___23696,jobs,results,process,async))
);


break;
case "async":
var c__23357__auto___23710 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__23697,c__23357__auto___23710,G__23540_23698,G__23540_23699__$1,n__4607__auto___23696,jobs,results,process,async){
return (function (){
var f__23358__auto__ = (function (){var switch__23262__auto__ = ((function (__23697,c__23357__auto___23710,G__23540_23698,G__23540_23699__$1,n__4607__auto___23696,jobs,results,process,async){
return (function (state_23577){
var state_val_23578 = (state_23577[(1)]);
if((state_val_23578 === (1))){
var state_23577__$1 = state_23577;
var statearr_23579_23711 = state_23577__$1;
(statearr_23579_23711[(2)] = null);

(statearr_23579_23711[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23578 === (2))){
var state_23577__$1 = state_23577;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23577__$1,(4),jobs);
} else {
if((state_val_23578 === (3))){
var inst_23575 = (state_23577[(2)]);
var state_23577__$1 = state_23577;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23577__$1,inst_23575);
} else {
if((state_val_23578 === (4))){
var inst_23567 = (state_23577[(2)]);
var inst_23568 = async.call(null,inst_23567);
var state_23577__$1 = state_23577;
if(cljs.core.truth_(inst_23568)){
var statearr_23580_23712 = state_23577__$1;
(statearr_23580_23712[(1)] = (5));

} else {
var statearr_23581_23713 = state_23577__$1;
(statearr_23581_23713[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23578 === (5))){
var state_23577__$1 = state_23577;
var statearr_23582_23714 = state_23577__$1;
(statearr_23582_23714[(2)] = null);

(statearr_23582_23714[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23578 === (6))){
var state_23577__$1 = state_23577;
var statearr_23583_23715 = state_23577__$1;
(statearr_23583_23715[(2)] = null);

(statearr_23583_23715[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23578 === (7))){
var inst_23573 = (state_23577[(2)]);
var state_23577__$1 = state_23577;
var statearr_23584_23716 = state_23577__$1;
(statearr_23584_23716[(2)] = inst_23573);

(statearr_23584_23716[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__23697,c__23357__auto___23710,G__23540_23698,G__23540_23699__$1,n__4607__auto___23696,jobs,results,process,async))
;
return ((function (__23697,switch__23262__auto__,c__23357__auto___23710,G__23540_23698,G__23540_23699__$1,n__4607__auto___23696,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__23263__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__23263__auto____0 = (function (){
var statearr_23585 = [null,null,null,null,null,null,null];
(statearr_23585[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__23263__auto__);

(statearr_23585[(1)] = (1));

return statearr_23585;
});
var cljs$core$async$pipeline_STAR__$_state_machine__23263__auto____1 = (function (state_23577){
while(true){
var ret_value__23264__auto__ = (function (){try{while(true){
var result__23265__auto__ = switch__23262__auto__.call(null,state_23577);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23265__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23265__auto__;
}
break;
}
}catch (e23586){if((e23586 instanceof Object)){
var ex__23266__auto__ = e23586;
var statearr_23587_23717 = state_23577;
(statearr_23587_23717[(5)] = ex__23266__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23577);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23586;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23264__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23718 = state_23577;
state_23577 = G__23718;
continue;
} else {
return ret_value__23264__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__23263__auto__ = function(state_23577){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__23263__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__23263__auto____1.call(this,state_23577);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__23263__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__23263__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__23263__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__23263__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__23263__auto__;
})()
;})(__23697,switch__23262__auto__,c__23357__auto___23710,G__23540_23698,G__23540_23699__$1,n__4607__auto___23696,jobs,results,process,async))
})();
var state__23359__auto__ = (function (){var statearr_23588 = f__23358__auto__.call(null);
(statearr_23588[(6)] = c__23357__auto___23710);

return statearr_23588;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23359__auto__);
});})(__23697,c__23357__auto___23710,G__23540_23698,G__23540_23699__$1,n__4607__auto___23696,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__23540_23699__$1)].join('')));

}

var G__23719 = (__23697 + (1));
__23697 = G__23719;
continue;
} else {
}
break;
}

var c__23357__auto___23720 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__23358__auto__ = (function (){var switch__23262__auto__ = (function (state_23610){
var state_val_23611 = (state_23610[(1)]);
if((state_val_23611 === (7))){
var inst_23606 = (state_23610[(2)]);
var state_23610__$1 = state_23610;
var statearr_23612_23721 = state_23610__$1;
(statearr_23612_23721[(2)] = inst_23606);

(statearr_23612_23721[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23611 === (1))){
var state_23610__$1 = state_23610;
var statearr_23613_23722 = state_23610__$1;
(statearr_23613_23722[(2)] = null);

(statearr_23613_23722[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23611 === (4))){
var inst_23591 = (state_23610[(7)]);
var inst_23591__$1 = (state_23610[(2)]);
var inst_23592 = (inst_23591__$1 == null);
var state_23610__$1 = (function (){var statearr_23614 = state_23610;
(statearr_23614[(7)] = inst_23591__$1);

return statearr_23614;
})();
if(cljs.core.truth_(inst_23592)){
var statearr_23615_23723 = state_23610__$1;
(statearr_23615_23723[(1)] = (5));

} else {
var statearr_23616_23724 = state_23610__$1;
(statearr_23616_23724[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23611 === (6))){
var inst_23596 = (state_23610[(8)]);
var inst_23591 = (state_23610[(7)]);
var inst_23596__$1 = cljs.core.async.chan.call(null,(1));
var inst_23597 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_23598 = [inst_23591,inst_23596__$1];
var inst_23599 = (new cljs.core.PersistentVector(null,2,(5),inst_23597,inst_23598,null));
var state_23610__$1 = (function (){var statearr_23617 = state_23610;
(statearr_23617[(8)] = inst_23596__$1);

return statearr_23617;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23610__$1,(8),jobs,inst_23599);
} else {
if((state_val_23611 === (3))){
var inst_23608 = (state_23610[(2)]);
var state_23610__$1 = state_23610;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23610__$1,inst_23608);
} else {
if((state_val_23611 === (2))){
var state_23610__$1 = state_23610;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23610__$1,(4),from);
} else {
if((state_val_23611 === (9))){
var inst_23603 = (state_23610[(2)]);
var state_23610__$1 = (function (){var statearr_23618 = state_23610;
(statearr_23618[(9)] = inst_23603);

return statearr_23618;
})();
var statearr_23619_23725 = state_23610__$1;
(statearr_23619_23725[(2)] = null);

(statearr_23619_23725[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23611 === (5))){
var inst_23594 = cljs.core.async.close_BANG_.call(null,jobs);
var state_23610__$1 = state_23610;
var statearr_23620_23726 = state_23610__$1;
(statearr_23620_23726[(2)] = inst_23594);

(statearr_23620_23726[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23611 === (8))){
var inst_23596 = (state_23610[(8)]);
var inst_23601 = (state_23610[(2)]);
var state_23610__$1 = (function (){var statearr_23621 = state_23610;
(statearr_23621[(10)] = inst_23601);

return statearr_23621;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23610__$1,(9),results,inst_23596);
} else {
return null;
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__23263__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__23263__auto____0 = (function (){
var statearr_23622 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_23622[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__23263__auto__);

(statearr_23622[(1)] = (1));

return statearr_23622;
});
var cljs$core$async$pipeline_STAR__$_state_machine__23263__auto____1 = (function (state_23610){
while(true){
var ret_value__23264__auto__ = (function (){try{while(true){
var result__23265__auto__ = switch__23262__auto__.call(null,state_23610);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23265__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23265__auto__;
}
break;
}
}catch (e23623){if((e23623 instanceof Object)){
var ex__23266__auto__ = e23623;
var statearr_23624_23727 = state_23610;
(statearr_23624_23727[(5)] = ex__23266__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23610);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23623;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23264__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23728 = state_23610;
state_23610 = G__23728;
continue;
} else {
return ret_value__23264__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__23263__auto__ = function(state_23610){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__23263__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__23263__auto____1.call(this,state_23610);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__23263__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__23263__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__23263__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__23263__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__23263__auto__;
})()
})();
var state__23359__auto__ = (function (){var statearr_23625 = f__23358__auto__.call(null);
(statearr_23625[(6)] = c__23357__auto___23720);

return statearr_23625;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23359__auto__);
}));


var c__23357__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__23358__auto__ = (function (){var switch__23262__auto__ = (function (state_23663){
var state_val_23664 = (state_23663[(1)]);
if((state_val_23664 === (7))){
var inst_23659 = (state_23663[(2)]);
var state_23663__$1 = state_23663;
var statearr_23665_23729 = state_23663__$1;
(statearr_23665_23729[(2)] = inst_23659);

(statearr_23665_23729[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23664 === (20))){
var state_23663__$1 = state_23663;
var statearr_23666_23730 = state_23663__$1;
(statearr_23666_23730[(2)] = null);

(statearr_23666_23730[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23664 === (1))){
var state_23663__$1 = state_23663;
var statearr_23667_23731 = state_23663__$1;
(statearr_23667_23731[(2)] = null);

(statearr_23667_23731[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23664 === (4))){
var inst_23628 = (state_23663[(7)]);
var inst_23628__$1 = (state_23663[(2)]);
var inst_23629 = (inst_23628__$1 == null);
var state_23663__$1 = (function (){var statearr_23668 = state_23663;
(statearr_23668[(7)] = inst_23628__$1);

return statearr_23668;
})();
if(cljs.core.truth_(inst_23629)){
var statearr_23669_23732 = state_23663__$1;
(statearr_23669_23732[(1)] = (5));

} else {
var statearr_23670_23733 = state_23663__$1;
(statearr_23670_23733[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23664 === (15))){
var inst_23641 = (state_23663[(8)]);
var state_23663__$1 = state_23663;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23663__$1,(18),to,inst_23641);
} else {
if((state_val_23664 === (21))){
var inst_23654 = (state_23663[(2)]);
var state_23663__$1 = state_23663;
var statearr_23671_23734 = state_23663__$1;
(statearr_23671_23734[(2)] = inst_23654);

(statearr_23671_23734[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23664 === (13))){
var inst_23656 = (state_23663[(2)]);
var state_23663__$1 = (function (){var statearr_23672 = state_23663;
(statearr_23672[(9)] = inst_23656);

return statearr_23672;
})();
var statearr_23673_23735 = state_23663__$1;
(statearr_23673_23735[(2)] = null);

(statearr_23673_23735[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23664 === (6))){
var inst_23628 = (state_23663[(7)]);
var state_23663__$1 = state_23663;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23663__$1,(11),inst_23628);
} else {
if((state_val_23664 === (17))){
var inst_23649 = (state_23663[(2)]);
var state_23663__$1 = state_23663;
if(cljs.core.truth_(inst_23649)){
var statearr_23674_23736 = state_23663__$1;
(statearr_23674_23736[(1)] = (19));

} else {
var statearr_23675_23737 = state_23663__$1;
(statearr_23675_23737[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23664 === (3))){
var inst_23661 = (state_23663[(2)]);
var state_23663__$1 = state_23663;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23663__$1,inst_23661);
} else {
if((state_val_23664 === (12))){
var inst_23638 = (state_23663[(10)]);
var state_23663__$1 = state_23663;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23663__$1,(14),inst_23638);
} else {
if((state_val_23664 === (2))){
var state_23663__$1 = state_23663;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23663__$1,(4),results);
} else {
if((state_val_23664 === (19))){
var state_23663__$1 = state_23663;
var statearr_23676_23738 = state_23663__$1;
(statearr_23676_23738[(2)] = null);

(statearr_23676_23738[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23664 === (11))){
var inst_23638 = (state_23663[(2)]);
var state_23663__$1 = (function (){var statearr_23677 = state_23663;
(statearr_23677[(10)] = inst_23638);

return statearr_23677;
})();
var statearr_23678_23739 = state_23663__$1;
(statearr_23678_23739[(2)] = null);

(statearr_23678_23739[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23664 === (9))){
var state_23663__$1 = state_23663;
var statearr_23679_23740 = state_23663__$1;
(statearr_23679_23740[(2)] = null);

(statearr_23679_23740[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23664 === (5))){
var state_23663__$1 = state_23663;
if(cljs.core.truth_(close_QMARK_)){
var statearr_23680_23741 = state_23663__$1;
(statearr_23680_23741[(1)] = (8));

} else {
var statearr_23681_23742 = state_23663__$1;
(statearr_23681_23742[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23664 === (14))){
var inst_23641 = (state_23663[(8)]);
var inst_23641__$1 = (state_23663[(2)]);
var inst_23642 = (inst_23641__$1 == null);
var inst_23643 = cljs.core.not.call(null,inst_23642);
var state_23663__$1 = (function (){var statearr_23682 = state_23663;
(statearr_23682[(8)] = inst_23641__$1);

return statearr_23682;
})();
if(inst_23643){
var statearr_23683_23743 = state_23663__$1;
(statearr_23683_23743[(1)] = (15));

} else {
var statearr_23684_23744 = state_23663__$1;
(statearr_23684_23744[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23664 === (16))){
var state_23663__$1 = state_23663;
var statearr_23685_23745 = state_23663__$1;
(statearr_23685_23745[(2)] = false);

(statearr_23685_23745[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23664 === (10))){
var inst_23635 = (state_23663[(2)]);
var state_23663__$1 = state_23663;
var statearr_23686_23746 = state_23663__$1;
(statearr_23686_23746[(2)] = inst_23635);

(statearr_23686_23746[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23664 === (18))){
var inst_23646 = (state_23663[(2)]);
var state_23663__$1 = state_23663;
var statearr_23687_23747 = state_23663__$1;
(statearr_23687_23747[(2)] = inst_23646);

(statearr_23687_23747[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23664 === (8))){
var inst_23632 = cljs.core.async.close_BANG_.call(null,to);
var state_23663__$1 = state_23663;
var statearr_23688_23748 = state_23663__$1;
(statearr_23688_23748[(2)] = inst_23632);

(statearr_23688_23748[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__23263__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__23263__auto____0 = (function (){
var statearr_23689 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_23689[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__23263__auto__);

(statearr_23689[(1)] = (1));

return statearr_23689;
});
var cljs$core$async$pipeline_STAR__$_state_machine__23263__auto____1 = (function (state_23663){
while(true){
var ret_value__23264__auto__ = (function (){try{while(true){
var result__23265__auto__ = switch__23262__auto__.call(null,state_23663);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23265__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23265__auto__;
}
break;
}
}catch (e23690){if((e23690 instanceof Object)){
var ex__23266__auto__ = e23690;
var statearr_23691_23749 = state_23663;
(statearr_23691_23749[(5)] = ex__23266__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23663);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23690;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23264__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23750 = state_23663;
state_23663 = G__23750;
continue;
} else {
return ret_value__23264__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__23263__auto__ = function(state_23663){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__23263__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__23263__auto____1.call(this,state_23663);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__23263__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__23263__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__23263__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__23263__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__23263__auto__;
})()
})();
var state__23359__auto__ = (function (){var statearr_23692 = f__23358__auto__.call(null);
(statearr_23692[(6)] = c__23357__auto__);

return statearr_23692;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23359__auto__);
}));

return c__23357__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__23752 = arguments.length;
switch (G__23752) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__23755 = arguments.length;
switch (G__23755) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__23758 = arguments.length;
switch (G__23758) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__23357__auto___23807 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__23358__auto__ = (function (){var switch__23262__auto__ = (function (state_23784){
var state_val_23785 = (state_23784[(1)]);
if((state_val_23785 === (7))){
var inst_23780 = (state_23784[(2)]);
var state_23784__$1 = state_23784;
var statearr_23786_23808 = state_23784__$1;
(statearr_23786_23808[(2)] = inst_23780);

(statearr_23786_23808[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23785 === (1))){
var state_23784__$1 = state_23784;
var statearr_23787_23809 = state_23784__$1;
(statearr_23787_23809[(2)] = null);

(statearr_23787_23809[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23785 === (4))){
var inst_23761 = (state_23784[(7)]);
var inst_23761__$1 = (state_23784[(2)]);
var inst_23762 = (inst_23761__$1 == null);
var state_23784__$1 = (function (){var statearr_23788 = state_23784;
(statearr_23788[(7)] = inst_23761__$1);

return statearr_23788;
})();
if(cljs.core.truth_(inst_23762)){
var statearr_23789_23810 = state_23784__$1;
(statearr_23789_23810[(1)] = (5));

} else {
var statearr_23790_23811 = state_23784__$1;
(statearr_23790_23811[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23785 === (13))){
var state_23784__$1 = state_23784;
var statearr_23791_23812 = state_23784__$1;
(statearr_23791_23812[(2)] = null);

(statearr_23791_23812[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23785 === (6))){
var inst_23761 = (state_23784[(7)]);
var inst_23767 = p.call(null,inst_23761);
var state_23784__$1 = state_23784;
if(cljs.core.truth_(inst_23767)){
var statearr_23792_23813 = state_23784__$1;
(statearr_23792_23813[(1)] = (9));

} else {
var statearr_23793_23814 = state_23784__$1;
(statearr_23793_23814[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23785 === (3))){
var inst_23782 = (state_23784[(2)]);
var state_23784__$1 = state_23784;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23784__$1,inst_23782);
} else {
if((state_val_23785 === (12))){
var state_23784__$1 = state_23784;
var statearr_23794_23815 = state_23784__$1;
(statearr_23794_23815[(2)] = null);

(statearr_23794_23815[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23785 === (2))){
var state_23784__$1 = state_23784;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23784__$1,(4),ch);
} else {
if((state_val_23785 === (11))){
var inst_23761 = (state_23784[(7)]);
var inst_23771 = (state_23784[(2)]);
var state_23784__$1 = state_23784;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23784__$1,(8),inst_23771,inst_23761);
} else {
if((state_val_23785 === (9))){
var state_23784__$1 = state_23784;
var statearr_23795_23816 = state_23784__$1;
(statearr_23795_23816[(2)] = tc);

(statearr_23795_23816[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23785 === (5))){
var inst_23764 = cljs.core.async.close_BANG_.call(null,tc);
var inst_23765 = cljs.core.async.close_BANG_.call(null,fc);
var state_23784__$1 = (function (){var statearr_23796 = state_23784;
(statearr_23796[(8)] = inst_23764);

return statearr_23796;
})();
var statearr_23797_23817 = state_23784__$1;
(statearr_23797_23817[(2)] = inst_23765);

(statearr_23797_23817[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23785 === (14))){
var inst_23778 = (state_23784[(2)]);
var state_23784__$1 = state_23784;
var statearr_23798_23818 = state_23784__$1;
(statearr_23798_23818[(2)] = inst_23778);

(statearr_23798_23818[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23785 === (10))){
var state_23784__$1 = state_23784;
var statearr_23799_23819 = state_23784__$1;
(statearr_23799_23819[(2)] = fc);

(statearr_23799_23819[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23785 === (8))){
var inst_23773 = (state_23784[(2)]);
var state_23784__$1 = state_23784;
if(cljs.core.truth_(inst_23773)){
var statearr_23800_23820 = state_23784__$1;
(statearr_23800_23820[(1)] = (12));

} else {
var statearr_23801_23821 = state_23784__$1;
(statearr_23801_23821[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__23263__auto__ = null;
var cljs$core$async$state_machine__23263__auto____0 = (function (){
var statearr_23802 = [null,null,null,null,null,null,null,null,null];
(statearr_23802[(0)] = cljs$core$async$state_machine__23263__auto__);

(statearr_23802[(1)] = (1));

return statearr_23802;
});
var cljs$core$async$state_machine__23263__auto____1 = (function (state_23784){
while(true){
var ret_value__23264__auto__ = (function (){try{while(true){
var result__23265__auto__ = switch__23262__auto__.call(null,state_23784);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23265__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23265__auto__;
}
break;
}
}catch (e23803){if((e23803 instanceof Object)){
var ex__23266__auto__ = e23803;
var statearr_23804_23822 = state_23784;
(statearr_23804_23822[(5)] = ex__23266__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23784);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23803;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23264__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23823 = state_23784;
state_23784 = G__23823;
continue;
} else {
return ret_value__23264__auto__;
}
break;
}
});
cljs$core$async$state_machine__23263__auto__ = function(state_23784){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23263__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23263__auto____1.call(this,state_23784);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23263__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23263__auto____0;
cljs$core$async$state_machine__23263__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23263__auto____1;
return cljs$core$async$state_machine__23263__auto__;
})()
})();
var state__23359__auto__ = (function (){var statearr_23805 = f__23358__auto__.call(null);
(statearr_23805[(6)] = c__23357__auto___23807);

return statearr_23805;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23359__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__23357__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__23358__auto__ = (function (){var switch__23262__auto__ = (function (state_23844){
var state_val_23845 = (state_23844[(1)]);
if((state_val_23845 === (7))){
var inst_23840 = (state_23844[(2)]);
var state_23844__$1 = state_23844;
var statearr_23846_23864 = state_23844__$1;
(statearr_23846_23864[(2)] = inst_23840);

(statearr_23846_23864[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23845 === (1))){
var inst_23824 = init;
var state_23844__$1 = (function (){var statearr_23847 = state_23844;
(statearr_23847[(7)] = inst_23824);

return statearr_23847;
})();
var statearr_23848_23865 = state_23844__$1;
(statearr_23848_23865[(2)] = null);

(statearr_23848_23865[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23845 === (4))){
var inst_23827 = (state_23844[(8)]);
var inst_23827__$1 = (state_23844[(2)]);
var inst_23828 = (inst_23827__$1 == null);
var state_23844__$1 = (function (){var statearr_23849 = state_23844;
(statearr_23849[(8)] = inst_23827__$1);

return statearr_23849;
})();
if(cljs.core.truth_(inst_23828)){
var statearr_23850_23866 = state_23844__$1;
(statearr_23850_23866[(1)] = (5));

} else {
var statearr_23851_23867 = state_23844__$1;
(statearr_23851_23867[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23845 === (6))){
var inst_23827 = (state_23844[(8)]);
var inst_23824 = (state_23844[(7)]);
var inst_23831 = (state_23844[(9)]);
var inst_23831__$1 = f.call(null,inst_23824,inst_23827);
var inst_23832 = cljs.core.reduced_QMARK_.call(null,inst_23831__$1);
var state_23844__$1 = (function (){var statearr_23852 = state_23844;
(statearr_23852[(9)] = inst_23831__$1);

return statearr_23852;
})();
if(inst_23832){
var statearr_23853_23868 = state_23844__$1;
(statearr_23853_23868[(1)] = (8));

} else {
var statearr_23854_23869 = state_23844__$1;
(statearr_23854_23869[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23845 === (3))){
var inst_23842 = (state_23844[(2)]);
var state_23844__$1 = state_23844;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23844__$1,inst_23842);
} else {
if((state_val_23845 === (2))){
var state_23844__$1 = state_23844;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23844__$1,(4),ch);
} else {
if((state_val_23845 === (9))){
var inst_23831 = (state_23844[(9)]);
var inst_23824 = inst_23831;
var state_23844__$1 = (function (){var statearr_23855 = state_23844;
(statearr_23855[(7)] = inst_23824);

return statearr_23855;
})();
var statearr_23856_23870 = state_23844__$1;
(statearr_23856_23870[(2)] = null);

(statearr_23856_23870[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23845 === (5))){
var inst_23824 = (state_23844[(7)]);
var state_23844__$1 = state_23844;
var statearr_23857_23871 = state_23844__$1;
(statearr_23857_23871[(2)] = inst_23824);

(statearr_23857_23871[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23845 === (10))){
var inst_23838 = (state_23844[(2)]);
var state_23844__$1 = state_23844;
var statearr_23858_23872 = state_23844__$1;
(statearr_23858_23872[(2)] = inst_23838);

(statearr_23858_23872[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23845 === (8))){
var inst_23831 = (state_23844[(9)]);
var inst_23834 = cljs.core.deref.call(null,inst_23831);
var state_23844__$1 = state_23844;
var statearr_23859_23873 = state_23844__$1;
(statearr_23859_23873[(2)] = inst_23834);

(statearr_23859_23873[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$reduce_$_state_machine__23263__auto__ = null;
var cljs$core$async$reduce_$_state_machine__23263__auto____0 = (function (){
var statearr_23860 = [null,null,null,null,null,null,null,null,null,null];
(statearr_23860[(0)] = cljs$core$async$reduce_$_state_machine__23263__auto__);

(statearr_23860[(1)] = (1));

return statearr_23860;
});
var cljs$core$async$reduce_$_state_machine__23263__auto____1 = (function (state_23844){
while(true){
var ret_value__23264__auto__ = (function (){try{while(true){
var result__23265__auto__ = switch__23262__auto__.call(null,state_23844);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23265__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23265__auto__;
}
break;
}
}catch (e23861){if((e23861 instanceof Object)){
var ex__23266__auto__ = e23861;
var statearr_23862_23874 = state_23844;
(statearr_23862_23874[(5)] = ex__23266__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23844);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23861;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23264__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23875 = state_23844;
state_23844 = G__23875;
continue;
} else {
return ret_value__23264__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__23263__auto__ = function(state_23844){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__23263__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__23263__auto____1.call(this,state_23844);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__23263__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__23263__auto____0;
cljs$core$async$reduce_$_state_machine__23263__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__23263__auto____1;
return cljs$core$async$reduce_$_state_machine__23263__auto__;
})()
})();
var state__23359__auto__ = (function (){var statearr_23863 = f__23358__auto__.call(null);
(statearr_23863[(6)] = c__23357__auto__);

return statearr_23863;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23359__auto__);
}));

return c__23357__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__23357__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__23358__auto__ = (function (){var switch__23262__auto__ = (function (state_23881){
var state_val_23882 = (state_23881[(1)]);
if((state_val_23882 === (1))){
var inst_23876 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_23881__$1 = state_23881;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23881__$1,(2),inst_23876);
} else {
if((state_val_23882 === (2))){
var inst_23878 = (state_23881[(2)]);
var inst_23879 = f__$1.call(null,inst_23878);
var state_23881__$1 = state_23881;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23881__$1,inst_23879);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__23263__auto__ = null;
var cljs$core$async$transduce_$_state_machine__23263__auto____0 = (function (){
var statearr_23883 = [null,null,null,null,null,null,null];
(statearr_23883[(0)] = cljs$core$async$transduce_$_state_machine__23263__auto__);

(statearr_23883[(1)] = (1));

return statearr_23883;
});
var cljs$core$async$transduce_$_state_machine__23263__auto____1 = (function (state_23881){
while(true){
var ret_value__23264__auto__ = (function (){try{while(true){
var result__23265__auto__ = switch__23262__auto__.call(null,state_23881);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23265__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23265__auto__;
}
break;
}
}catch (e23884){if((e23884 instanceof Object)){
var ex__23266__auto__ = e23884;
var statearr_23885_23887 = state_23881;
(statearr_23885_23887[(5)] = ex__23266__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23881);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23884;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23264__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23888 = state_23881;
state_23881 = G__23888;
continue;
} else {
return ret_value__23264__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__23263__auto__ = function(state_23881){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__23263__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__23263__auto____1.call(this,state_23881);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__23263__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__23263__auto____0;
cljs$core$async$transduce_$_state_machine__23263__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__23263__auto____1;
return cljs$core$async$transduce_$_state_machine__23263__auto__;
})()
})();
var state__23359__auto__ = (function (){var statearr_23886 = f__23358__auto__.call(null);
(statearr_23886[(6)] = c__23357__auto__);

return statearr_23886;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23359__auto__);
}));

return c__23357__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__23890 = arguments.length;
switch (G__23890) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__23357__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__23358__auto__ = (function (){var switch__23262__auto__ = (function (state_23915){
var state_val_23916 = (state_23915[(1)]);
if((state_val_23916 === (7))){
var inst_23897 = (state_23915[(2)]);
var state_23915__$1 = state_23915;
var statearr_23917_23938 = state_23915__$1;
(statearr_23917_23938[(2)] = inst_23897);

(statearr_23917_23938[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23916 === (1))){
var inst_23891 = cljs.core.seq.call(null,coll);
var inst_23892 = inst_23891;
var state_23915__$1 = (function (){var statearr_23918 = state_23915;
(statearr_23918[(7)] = inst_23892);

return statearr_23918;
})();
var statearr_23919_23939 = state_23915__$1;
(statearr_23919_23939[(2)] = null);

(statearr_23919_23939[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23916 === (4))){
var inst_23892 = (state_23915[(7)]);
var inst_23895 = cljs.core.first.call(null,inst_23892);
var state_23915__$1 = state_23915;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23915__$1,(7),ch,inst_23895);
} else {
if((state_val_23916 === (13))){
var inst_23909 = (state_23915[(2)]);
var state_23915__$1 = state_23915;
var statearr_23920_23940 = state_23915__$1;
(statearr_23920_23940[(2)] = inst_23909);

(statearr_23920_23940[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23916 === (6))){
var inst_23900 = (state_23915[(2)]);
var state_23915__$1 = state_23915;
if(cljs.core.truth_(inst_23900)){
var statearr_23921_23941 = state_23915__$1;
(statearr_23921_23941[(1)] = (8));

} else {
var statearr_23922_23942 = state_23915__$1;
(statearr_23922_23942[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23916 === (3))){
var inst_23913 = (state_23915[(2)]);
var state_23915__$1 = state_23915;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23915__$1,inst_23913);
} else {
if((state_val_23916 === (12))){
var state_23915__$1 = state_23915;
var statearr_23923_23943 = state_23915__$1;
(statearr_23923_23943[(2)] = null);

(statearr_23923_23943[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23916 === (2))){
var inst_23892 = (state_23915[(7)]);
var state_23915__$1 = state_23915;
if(cljs.core.truth_(inst_23892)){
var statearr_23924_23944 = state_23915__$1;
(statearr_23924_23944[(1)] = (4));

} else {
var statearr_23925_23945 = state_23915__$1;
(statearr_23925_23945[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23916 === (11))){
var inst_23906 = cljs.core.async.close_BANG_.call(null,ch);
var state_23915__$1 = state_23915;
var statearr_23926_23946 = state_23915__$1;
(statearr_23926_23946[(2)] = inst_23906);

(statearr_23926_23946[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23916 === (9))){
var state_23915__$1 = state_23915;
if(cljs.core.truth_(close_QMARK_)){
var statearr_23927_23947 = state_23915__$1;
(statearr_23927_23947[(1)] = (11));

} else {
var statearr_23928_23948 = state_23915__$1;
(statearr_23928_23948[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23916 === (5))){
var inst_23892 = (state_23915[(7)]);
var state_23915__$1 = state_23915;
var statearr_23929_23949 = state_23915__$1;
(statearr_23929_23949[(2)] = inst_23892);

(statearr_23929_23949[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23916 === (10))){
var inst_23911 = (state_23915[(2)]);
var state_23915__$1 = state_23915;
var statearr_23930_23950 = state_23915__$1;
(statearr_23930_23950[(2)] = inst_23911);

(statearr_23930_23950[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23916 === (8))){
var inst_23892 = (state_23915[(7)]);
var inst_23902 = cljs.core.next.call(null,inst_23892);
var inst_23892__$1 = inst_23902;
var state_23915__$1 = (function (){var statearr_23931 = state_23915;
(statearr_23931[(7)] = inst_23892__$1);

return statearr_23931;
})();
var statearr_23932_23951 = state_23915__$1;
(statearr_23932_23951[(2)] = null);

(statearr_23932_23951[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__23263__auto__ = null;
var cljs$core$async$state_machine__23263__auto____0 = (function (){
var statearr_23933 = [null,null,null,null,null,null,null,null];
(statearr_23933[(0)] = cljs$core$async$state_machine__23263__auto__);

(statearr_23933[(1)] = (1));

return statearr_23933;
});
var cljs$core$async$state_machine__23263__auto____1 = (function (state_23915){
while(true){
var ret_value__23264__auto__ = (function (){try{while(true){
var result__23265__auto__ = switch__23262__auto__.call(null,state_23915);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23265__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23265__auto__;
}
break;
}
}catch (e23934){if((e23934 instanceof Object)){
var ex__23266__auto__ = e23934;
var statearr_23935_23952 = state_23915;
(statearr_23935_23952[(5)] = ex__23266__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23915);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23934;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23264__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23953 = state_23915;
state_23915 = G__23953;
continue;
} else {
return ret_value__23264__auto__;
}
break;
}
});
cljs$core$async$state_machine__23263__auto__ = function(state_23915){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23263__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23263__auto____1.call(this,state_23915);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23263__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23263__auto____0;
cljs$core$async$state_machine__23263__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23263__auto____1;
return cljs$core$async$state_machine__23263__auto__;
})()
})();
var state__23359__auto__ = (function (){var statearr_23936 = f__23358__auto__.call(null);
(statearr_23936[(6)] = c__23357__auto__);

return statearr_23936;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23359__auto__);
}));

return c__23357__auto__;
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

var cljs$core$async$Mux$muxch_STAR_$dyn_23954 = (function (_){
var x__4422__auto__ = (((_ == null))?null:_);
var m__4423__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4422__auto__)]);
if((!((m__4423__auto__ == null)))){
return m__4423__auto__.call(null,_);
} else {
var m__4420__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__4420__auto__ == null)))){
return m__4420__auto__.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_23954.call(null,_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_23955 = (function (m,ch,close_QMARK_){
var x__4422__auto__ = (((m == null))?null:m);
var m__4423__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4422__auto__)]);
if((!((m__4423__auto__ == null)))){
return m__4423__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__4420__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__4420__auto__ == null)))){
return m__4420__auto__.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_23955.call(null,m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_23956 = (function (m,ch){
var x__4422__auto__ = (((m == null))?null:m);
var m__4423__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4422__auto__)]);
if((!((m__4423__auto__ == null)))){
return m__4423__auto__.call(null,m,ch);
} else {
var m__4420__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__4420__auto__ == null)))){
return m__4420__auto__.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_23956.call(null,m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_23957 = (function (m){
var x__4422__auto__ = (((m == null))?null:m);
var m__4423__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4422__auto__)]);
if((!((m__4423__auto__ == null)))){
return m__4423__auto__.call(null,m);
} else {
var m__4420__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__4420__auto__ == null)))){
return m__4420__auto__.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_23957.call(null,m);
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async23958 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async23958 = (function (ch,cs,meta23959){
this.ch = ch;
this.cs = cs;
this.meta23959 = meta23959;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async23958.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23960,meta23959__$1){
var self__ = this;
var _23960__$1 = this;
return (new cljs.core.async.t_cljs$core$async23958(self__.ch,self__.cs,meta23959__$1));
}));

(cljs.core.async.t_cljs$core$async23958.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23960){
var self__ = this;
var _23960__$1 = this;
return self__.meta23959;
}));

(cljs.core.async.t_cljs$core$async23958.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async23958.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async23958.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async23958.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async23958.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async23958.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async23958.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta23959","meta23959",-1321342639,null)], null);
}));

(cljs.core.async.t_cljs$core$async23958.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async23958.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23958");

(cljs.core.async.t_cljs$core$async23958.cljs$lang$ctorPrWriter = (function (this__4363__auto__,writer__4364__auto__,opt__4365__auto__){
return cljs.core._write.call(null,writer__4364__auto__,"cljs.core.async/t_cljs$core$async23958");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async23958.
 */
cljs.core.async.__GT_t_cljs$core$async23958 = (function cljs$core$async$mult_$___GT_t_cljs$core$async23958(ch__$1,cs__$1,meta23959){
return (new cljs.core.async.t_cljs$core$async23958(ch__$1,cs__$1,meta23959));
});

}

return (new cljs.core.async.t_cljs$core$async23958(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});
var c__23357__auto___24180 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__23358__auto__ = (function (){var switch__23262__auto__ = (function (state_24095){
var state_val_24096 = (state_24095[(1)]);
if((state_val_24096 === (7))){
var inst_24091 = (state_24095[(2)]);
var state_24095__$1 = state_24095;
var statearr_24097_24181 = state_24095__$1;
(statearr_24097_24181[(2)] = inst_24091);

(statearr_24097_24181[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24096 === (20))){
var inst_23994 = (state_24095[(7)]);
var inst_24006 = cljs.core.first.call(null,inst_23994);
var inst_24007 = cljs.core.nth.call(null,inst_24006,(0),null);
var inst_24008 = cljs.core.nth.call(null,inst_24006,(1),null);
var state_24095__$1 = (function (){var statearr_24098 = state_24095;
(statearr_24098[(8)] = inst_24007);

return statearr_24098;
})();
if(cljs.core.truth_(inst_24008)){
var statearr_24099_24182 = state_24095__$1;
(statearr_24099_24182[(1)] = (22));

} else {
var statearr_24100_24183 = state_24095__$1;
(statearr_24100_24183[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24096 === (27))){
var inst_24036 = (state_24095[(9)]);
var inst_23963 = (state_24095[(10)]);
var inst_24043 = (state_24095[(11)]);
var inst_24038 = (state_24095[(12)]);
var inst_24043__$1 = cljs.core._nth.call(null,inst_24036,inst_24038);
var inst_24044 = cljs.core.async.put_BANG_.call(null,inst_24043__$1,inst_23963,done);
var state_24095__$1 = (function (){var statearr_24101 = state_24095;
(statearr_24101[(11)] = inst_24043__$1);

return statearr_24101;
})();
if(cljs.core.truth_(inst_24044)){
var statearr_24102_24184 = state_24095__$1;
(statearr_24102_24184[(1)] = (30));

} else {
var statearr_24103_24185 = state_24095__$1;
(statearr_24103_24185[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24096 === (1))){
var state_24095__$1 = state_24095;
var statearr_24104_24186 = state_24095__$1;
(statearr_24104_24186[(2)] = null);

(statearr_24104_24186[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24096 === (24))){
var inst_23994 = (state_24095[(7)]);
var inst_24013 = (state_24095[(2)]);
var inst_24014 = cljs.core.next.call(null,inst_23994);
var inst_23972 = inst_24014;
var inst_23973 = null;
var inst_23974 = (0);
var inst_23975 = (0);
var state_24095__$1 = (function (){var statearr_24105 = state_24095;
(statearr_24105[(13)] = inst_23972);

(statearr_24105[(14)] = inst_23975);

(statearr_24105[(15)] = inst_23973);

(statearr_24105[(16)] = inst_23974);

(statearr_24105[(17)] = inst_24013);

return statearr_24105;
})();
var statearr_24106_24187 = state_24095__$1;
(statearr_24106_24187[(2)] = null);

(statearr_24106_24187[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24096 === (39))){
var state_24095__$1 = state_24095;
var statearr_24110_24188 = state_24095__$1;
(statearr_24110_24188[(2)] = null);

(statearr_24110_24188[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24096 === (4))){
var inst_23963 = (state_24095[(10)]);
var inst_23963__$1 = (state_24095[(2)]);
var inst_23964 = (inst_23963__$1 == null);
var state_24095__$1 = (function (){var statearr_24111 = state_24095;
(statearr_24111[(10)] = inst_23963__$1);

return statearr_24111;
})();
if(cljs.core.truth_(inst_23964)){
var statearr_24112_24189 = state_24095__$1;
(statearr_24112_24189[(1)] = (5));

} else {
var statearr_24113_24190 = state_24095__$1;
(statearr_24113_24190[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24096 === (15))){
var inst_23972 = (state_24095[(13)]);
var inst_23975 = (state_24095[(14)]);
var inst_23973 = (state_24095[(15)]);
var inst_23974 = (state_24095[(16)]);
var inst_23990 = (state_24095[(2)]);
var inst_23991 = (inst_23975 + (1));
var tmp24107 = inst_23972;
var tmp24108 = inst_23973;
var tmp24109 = inst_23974;
var inst_23972__$1 = tmp24107;
var inst_23973__$1 = tmp24108;
var inst_23974__$1 = tmp24109;
var inst_23975__$1 = inst_23991;
var state_24095__$1 = (function (){var statearr_24114 = state_24095;
(statearr_24114[(13)] = inst_23972__$1);

(statearr_24114[(14)] = inst_23975__$1);

(statearr_24114[(15)] = inst_23973__$1);

(statearr_24114[(16)] = inst_23974__$1);

(statearr_24114[(18)] = inst_23990);

return statearr_24114;
})();
var statearr_24115_24191 = state_24095__$1;
(statearr_24115_24191[(2)] = null);

(statearr_24115_24191[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24096 === (21))){
var inst_24017 = (state_24095[(2)]);
var state_24095__$1 = state_24095;
var statearr_24119_24192 = state_24095__$1;
(statearr_24119_24192[(2)] = inst_24017);

(statearr_24119_24192[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24096 === (31))){
var inst_24043 = (state_24095[(11)]);
var inst_24047 = done.call(null,null);
var inst_24048 = cljs.core.async.untap_STAR_.call(null,m,inst_24043);
var state_24095__$1 = (function (){var statearr_24120 = state_24095;
(statearr_24120[(19)] = inst_24047);

return statearr_24120;
})();
var statearr_24121_24193 = state_24095__$1;
(statearr_24121_24193[(2)] = inst_24048);

(statearr_24121_24193[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24096 === (32))){
var inst_24036 = (state_24095[(9)]);
var inst_24035 = (state_24095[(20)]);
var inst_24037 = (state_24095[(21)]);
var inst_24038 = (state_24095[(12)]);
var inst_24050 = (state_24095[(2)]);
var inst_24051 = (inst_24038 + (1));
var tmp24116 = inst_24036;
var tmp24117 = inst_24035;
var tmp24118 = inst_24037;
var inst_24035__$1 = tmp24117;
var inst_24036__$1 = tmp24116;
var inst_24037__$1 = tmp24118;
var inst_24038__$1 = inst_24051;
var state_24095__$1 = (function (){var statearr_24122 = state_24095;
(statearr_24122[(22)] = inst_24050);

(statearr_24122[(9)] = inst_24036__$1);

(statearr_24122[(20)] = inst_24035__$1);

(statearr_24122[(21)] = inst_24037__$1);

(statearr_24122[(12)] = inst_24038__$1);

return statearr_24122;
})();
var statearr_24123_24194 = state_24095__$1;
(statearr_24123_24194[(2)] = null);

(statearr_24123_24194[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24096 === (40))){
var inst_24063 = (state_24095[(23)]);
var inst_24067 = done.call(null,null);
var inst_24068 = cljs.core.async.untap_STAR_.call(null,m,inst_24063);
var state_24095__$1 = (function (){var statearr_24124 = state_24095;
(statearr_24124[(24)] = inst_24067);

return statearr_24124;
})();
var statearr_24125_24195 = state_24095__$1;
(statearr_24125_24195[(2)] = inst_24068);

(statearr_24125_24195[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24096 === (33))){
var inst_24054 = (state_24095[(25)]);
var inst_24056 = cljs.core.chunked_seq_QMARK_.call(null,inst_24054);
var state_24095__$1 = state_24095;
if(inst_24056){
var statearr_24126_24196 = state_24095__$1;
(statearr_24126_24196[(1)] = (36));

} else {
var statearr_24127_24197 = state_24095__$1;
(statearr_24127_24197[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24096 === (13))){
var inst_23984 = (state_24095[(26)]);
var inst_23987 = cljs.core.async.close_BANG_.call(null,inst_23984);
var state_24095__$1 = state_24095;
var statearr_24128_24198 = state_24095__$1;
(statearr_24128_24198[(2)] = inst_23987);

(statearr_24128_24198[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24096 === (22))){
var inst_24007 = (state_24095[(8)]);
var inst_24010 = cljs.core.async.close_BANG_.call(null,inst_24007);
var state_24095__$1 = state_24095;
var statearr_24129_24199 = state_24095__$1;
(statearr_24129_24199[(2)] = inst_24010);

(statearr_24129_24199[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24096 === (36))){
var inst_24054 = (state_24095[(25)]);
var inst_24058 = cljs.core.chunk_first.call(null,inst_24054);
var inst_24059 = cljs.core.chunk_rest.call(null,inst_24054);
var inst_24060 = cljs.core.count.call(null,inst_24058);
var inst_24035 = inst_24059;
var inst_24036 = inst_24058;
var inst_24037 = inst_24060;
var inst_24038 = (0);
var state_24095__$1 = (function (){var statearr_24130 = state_24095;
(statearr_24130[(9)] = inst_24036);

(statearr_24130[(20)] = inst_24035);

(statearr_24130[(21)] = inst_24037);

(statearr_24130[(12)] = inst_24038);

return statearr_24130;
})();
var statearr_24131_24200 = state_24095__$1;
(statearr_24131_24200[(2)] = null);

(statearr_24131_24200[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24096 === (41))){
var inst_24054 = (state_24095[(25)]);
var inst_24070 = (state_24095[(2)]);
var inst_24071 = cljs.core.next.call(null,inst_24054);
var inst_24035 = inst_24071;
var inst_24036 = null;
var inst_24037 = (0);
var inst_24038 = (0);
var state_24095__$1 = (function (){var statearr_24132 = state_24095;
(statearr_24132[(9)] = inst_24036);

(statearr_24132[(20)] = inst_24035);

(statearr_24132[(21)] = inst_24037);

(statearr_24132[(27)] = inst_24070);

(statearr_24132[(12)] = inst_24038);

return statearr_24132;
})();
var statearr_24133_24201 = state_24095__$1;
(statearr_24133_24201[(2)] = null);

(statearr_24133_24201[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24096 === (43))){
var state_24095__$1 = state_24095;
var statearr_24134_24202 = state_24095__$1;
(statearr_24134_24202[(2)] = null);

(statearr_24134_24202[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24096 === (29))){
var inst_24079 = (state_24095[(2)]);
var state_24095__$1 = state_24095;
var statearr_24135_24203 = state_24095__$1;
(statearr_24135_24203[(2)] = inst_24079);

(statearr_24135_24203[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24096 === (44))){
var inst_24088 = (state_24095[(2)]);
var state_24095__$1 = (function (){var statearr_24136 = state_24095;
(statearr_24136[(28)] = inst_24088);

return statearr_24136;
})();
var statearr_24137_24204 = state_24095__$1;
(statearr_24137_24204[(2)] = null);

(statearr_24137_24204[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24096 === (6))){
var inst_24027 = (state_24095[(29)]);
var inst_24026 = cljs.core.deref.call(null,cs);
var inst_24027__$1 = cljs.core.keys.call(null,inst_24026);
var inst_24028 = cljs.core.count.call(null,inst_24027__$1);
var inst_24029 = cljs.core.reset_BANG_.call(null,dctr,inst_24028);
var inst_24034 = cljs.core.seq.call(null,inst_24027__$1);
var inst_24035 = inst_24034;
var inst_24036 = null;
var inst_24037 = (0);
var inst_24038 = (0);
var state_24095__$1 = (function (){var statearr_24138 = state_24095;
(statearr_24138[(29)] = inst_24027__$1);

(statearr_24138[(30)] = inst_24029);

(statearr_24138[(9)] = inst_24036);

(statearr_24138[(20)] = inst_24035);

(statearr_24138[(21)] = inst_24037);

(statearr_24138[(12)] = inst_24038);

return statearr_24138;
})();
var statearr_24139_24205 = state_24095__$1;
(statearr_24139_24205[(2)] = null);

(statearr_24139_24205[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24096 === (28))){
var inst_24035 = (state_24095[(20)]);
var inst_24054 = (state_24095[(25)]);
var inst_24054__$1 = cljs.core.seq.call(null,inst_24035);
var state_24095__$1 = (function (){var statearr_24140 = state_24095;
(statearr_24140[(25)] = inst_24054__$1);

return statearr_24140;
})();
if(inst_24054__$1){
var statearr_24141_24206 = state_24095__$1;
(statearr_24141_24206[(1)] = (33));

} else {
var statearr_24142_24207 = state_24095__$1;
(statearr_24142_24207[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24096 === (25))){
var inst_24037 = (state_24095[(21)]);
var inst_24038 = (state_24095[(12)]);
var inst_24040 = (inst_24038 < inst_24037);
var inst_24041 = inst_24040;
var state_24095__$1 = state_24095;
if(cljs.core.truth_(inst_24041)){
var statearr_24143_24208 = state_24095__$1;
(statearr_24143_24208[(1)] = (27));

} else {
var statearr_24144_24209 = state_24095__$1;
(statearr_24144_24209[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24096 === (34))){
var state_24095__$1 = state_24095;
var statearr_24145_24210 = state_24095__$1;
(statearr_24145_24210[(2)] = null);

(statearr_24145_24210[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24096 === (17))){
var state_24095__$1 = state_24095;
var statearr_24146_24211 = state_24095__$1;
(statearr_24146_24211[(2)] = null);

(statearr_24146_24211[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24096 === (3))){
var inst_24093 = (state_24095[(2)]);
var state_24095__$1 = state_24095;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24095__$1,inst_24093);
} else {
if((state_val_24096 === (12))){
var inst_24022 = (state_24095[(2)]);
var state_24095__$1 = state_24095;
var statearr_24147_24212 = state_24095__$1;
(statearr_24147_24212[(2)] = inst_24022);

(statearr_24147_24212[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24096 === (2))){
var state_24095__$1 = state_24095;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24095__$1,(4),ch);
} else {
if((state_val_24096 === (23))){
var state_24095__$1 = state_24095;
var statearr_24148_24213 = state_24095__$1;
(statearr_24148_24213[(2)] = null);

(statearr_24148_24213[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24096 === (35))){
var inst_24077 = (state_24095[(2)]);
var state_24095__$1 = state_24095;
var statearr_24149_24214 = state_24095__$1;
(statearr_24149_24214[(2)] = inst_24077);

(statearr_24149_24214[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24096 === (19))){
var inst_23994 = (state_24095[(7)]);
var inst_23998 = cljs.core.chunk_first.call(null,inst_23994);
var inst_23999 = cljs.core.chunk_rest.call(null,inst_23994);
var inst_24000 = cljs.core.count.call(null,inst_23998);
var inst_23972 = inst_23999;
var inst_23973 = inst_23998;
var inst_23974 = inst_24000;
var inst_23975 = (0);
var state_24095__$1 = (function (){var statearr_24150 = state_24095;
(statearr_24150[(13)] = inst_23972);

(statearr_24150[(14)] = inst_23975);

(statearr_24150[(15)] = inst_23973);

(statearr_24150[(16)] = inst_23974);

return statearr_24150;
})();
var statearr_24151_24215 = state_24095__$1;
(statearr_24151_24215[(2)] = null);

(statearr_24151_24215[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24096 === (11))){
var inst_23972 = (state_24095[(13)]);
var inst_23994 = (state_24095[(7)]);
var inst_23994__$1 = cljs.core.seq.call(null,inst_23972);
var state_24095__$1 = (function (){var statearr_24152 = state_24095;
(statearr_24152[(7)] = inst_23994__$1);

return statearr_24152;
})();
if(inst_23994__$1){
var statearr_24153_24216 = state_24095__$1;
(statearr_24153_24216[(1)] = (16));

} else {
var statearr_24154_24217 = state_24095__$1;
(statearr_24154_24217[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24096 === (9))){
var inst_24024 = (state_24095[(2)]);
var state_24095__$1 = state_24095;
var statearr_24155_24218 = state_24095__$1;
(statearr_24155_24218[(2)] = inst_24024);

(statearr_24155_24218[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24096 === (5))){
var inst_23970 = cljs.core.deref.call(null,cs);
var inst_23971 = cljs.core.seq.call(null,inst_23970);
var inst_23972 = inst_23971;
var inst_23973 = null;
var inst_23974 = (0);
var inst_23975 = (0);
var state_24095__$1 = (function (){var statearr_24156 = state_24095;
(statearr_24156[(13)] = inst_23972);

(statearr_24156[(14)] = inst_23975);

(statearr_24156[(15)] = inst_23973);

(statearr_24156[(16)] = inst_23974);

return statearr_24156;
})();
var statearr_24157_24219 = state_24095__$1;
(statearr_24157_24219[(2)] = null);

(statearr_24157_24219[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24096 === (14))){
var state_24095__$1 = state_24095;
var statearr_24158_24220 = state_24095__$1;
(statearr_24158_24220[(2)] = null);

(statearr_24158_24220[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24096 === (45))){
var inst_24085 = (state_24095[(2)]);
var state_24095__$1 = state_24095;
var statearr_24159_24221 = state_24095__$1;
(statearr_24159_24221[(2)] = inst_24085);

(statearr_24159_24221[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24096 === (26))){
var inst_24027 = (state_24095[(29)]);
var inst_24081 = (state_24095[(2)]);
var inst_24082 = cljs.core.seq.call(null,inst_24027);
var state_24095__$1 = (function (){var statearr_24160 = state_24095;
(statearr_24160[(31)] = inst_24081);

return statearr_24160;
})();
if(inst_24082){
var statearr_24161_24222 = state_24095__$1;
(statearr_24161_24222[(1)] = (42));

} else {
var statearr_24162_24223 = state_24095__$1;
(statearr_24162_24223[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24096 === (16))){
var inst_23994 = (state_24095[(7)]);
var inst_23996 = cljs.core.chunked_seq_QMARK_.call(null,inst_23994);
var state_24095__$1 = state_24095;
if(inst_23996){
var statearr_24163_24224 = state_24095__$1;
(statearr_24163_24224[(1)] = (19));

} else {
var statearr_24164_24225 = state_24095__$1;
(statearr_24164_24225[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24096 === (38))){
var inst_24074 = (state_24095[(2)]);
var state_24095__$1 = state_24095;
var statearr_24165_24226 = state_24095__$1;
(statearr_24165_24226[(2)] = inst_24074);

(statearr_24165_24226[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24096 === (30))){
var state_24095__$1 = state_24095;
var statearr_24166_24227 = state_24095__$1;
(statearr_24166_24227[(2)] = null);

(statearr_24166_24227[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24096 === (10))){
var inst_23975 = (state_24095[(14)]);
var inst_23973 = (state_24095[(15)]);
var inst_23983 = cljs.core._nth.call(null,inst_23973,inst_23975);
var inst_23984 = cljs.core.nth.call(null,inst_23983,(0),null);
var inst_23985 = cljs.core.nth.call(null,inst_23983,(1),null);
var state_24095__$1 = (function (){var statearr_24167 = state_24095;
(statearr_24167[(26)] = inst_23984);

return statearr_24167;
})();
if(cljs.core.truth_(inst_23985)){
var statearr_24168_24228 = state_24095__$1;
(statearr_24168_24228[(1)] = (13));

} else {
var statearr_24169_24229 = state_24095__$1;
(statearr_24169_24229[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24096 === (18))){
var inst_24020 = (state_24095[(2)]);
var state_24095__$1 = state_24095;
var statearr_24170_24230 = state_24095__$1;
(statearr_24170_24230[(2)] = inst_24020);

(statearr_24170_24230[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24096 === (42))){
var state_24095__$1 = state_24095;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24095__$1,(45),dchan);
} else {
if((state_val_24096 === (37))){
var inst_23963 = (state_24095[(10)]);
var inst_24063 = (state_24095[(23)]);
var inst_24054 = (state_24095[(25)]);
var inst_24063__$1 = cljs.core.first.call(null,inst_24054);
var inst_24064 = cljs.core.async.put_BANG_.call(null,inst_24063__$1,inst_23963,done);
var state_24095__$1 = (function (){var statearr_24171 = state_24095;
(statearr_24171[(23)] = inst_24063__$1);

return statearr_24171;
})();
if(cljs.core.truth_(inst_24064)){
var statearr_24172_24231 = state_24095__$1;
(statearr_24172_24231[(1)] = (39));

} else {
var statearr_24173_24232 = state_24095__$1;
(statearr_24173_24232[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24096 === (8))){
var inst_23975 = (state_24095[(14)]);
var inst_23974 = (state_24095[(16)]);
var inst_23977 = (inst_23975 < inst_23974);
var inst_23978 = inst_23977;
var state_24095__$1 = state_24095;
if(cljs.core.truth_(inst_23978)){
var statearr_24174_24233 = state_24095__$1;
(statearr_24174_24233[(1)] = (10));

} else {
var statearr_24175_24234 = state_24095__$1;
(statearr_24175_24234[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mult_$_state_machine__23263__auto__ = null;
var cljs$core$async$mult_$_state_machine__23263__auto____0 = (function (){
var statearr_24176 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24176[(0)] = cljs$core$async$mult_$_state_machine__23263__auto__);

(statearr_24176[(1)] = (1));

return statearr_24176;
});
var cljs$core$async$mult_$_state_machine__23263__auto____1 = (function (state_24095){
while(true){
var ret_value__23264__auto__ = (function (){try{while(true){
var result__23265__auto__ = switch__23262__auto__.call(null,state_24095);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23265__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23265__auto__;
}
break;
}
}catch (e24177){if((e24177 instanceof Object)){
var ex__23266__auto__ = e24177;
var statearr_24178_24235 = state_24095;
(statearr_24178_24235[(5)] = ex__23266__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24095);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24177;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23264__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24236 = state_24095;
state_24095 = G__24236;
continue;
} else {
return ret_value__23264__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__23263__auto__ = function(state_24095){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__23263__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__23263__auto____1.call(this,state_24095);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__23263__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__23263__auto____0;
cljs$core$async$mult_$_state_machine__23263__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__23263__auto____1;
return cljs$core$async$mult_$_state_machine__23263__auto__;
})()
})();
var state__23359__auto__ = (function (){var statearr_24179 = f__23358__auto__.call(null);
(statearr_24179[(6)] = c__23357__auto___24180);

return statearr_24179;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23359__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__24238 = arguments.length;
switch (G__24238) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

var cljs$core$async$Mix$admix_STAR_$dyn_24240 = (function (m,ch){
var x__4422__auto__ = (((m == null))?null:m);
var m__4423__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4422__auto__)]);
if((!((m__4423__auto__ == null)))){
return m__4423__auto__.call(null,m,ch);
} else {
var m__4420__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__4420__auto__ == null)))){
return m__4420__auto__.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_24240.call(null,m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_24241 = (function (m,ch){
var x__4422__auto__ = (((m == null))?null:m);
var m__4423__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4422__auto__)]);
if((!((m__4423__auto__ == null)))){
return m__4423__auto__.call(null,m,ch);
} else {
var m__4420__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__4420__auto__ == null)))){
return m__4420__auto__.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_24241.call(null,m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_24242 = (function (m){
var x__4422__auto__ = (((m == null))?null:m);
var m__4423__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4422__auto__)]);
if((!((m__4423__auto__ == null)))){
return m__4423__auto__.call(null,m);
} else {
var m__4420__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__4420__auto__ == null)))){
return m__4420__auto__.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_24242.call(null,m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_24243 = (function (m,state_map){
var x__4422__auto__ = (((m == null))?null:m);
var m__4423__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4422__auto__)]);
if((!((m__4423__auto__ == null)))){
return m__4423__auto__.call(null,m,state_map);
} else {
var m__4420__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__4420__auto__ == null)))){
return m__4420__auto__.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_24243.call(null,m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_24244 = (function (m,mode){
var x__4422__auto__ = (((m == null))?null:m);
var m__4423__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4422__auto__)]);
if((!((m__4423__auto__ == null)))){
return m__4423__auto__.call(null,m,mode);
} else {
var m__4420__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__4420__auto__ == null)))){
return m__4420__auto__.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_24244.call(null,m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4736__auto__ = [];
var len__4730__auto___24255 = arguments.length;
var i__4731__auto___24256 = (0);
while(true){
if((i__4731__auto___24256 < len__4730__auto___24255)){
args__4736__auto__.push((arguments[i__4731__auto___24256]));

var G__24257 = (i__4731__auto___24256 + (1));
i__4731__auto___24256 = G__24257;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((3) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4737__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__24249){
var map__24250 = p__24249;
var map__24250__$1 = (((((!((map__24250 == null))))?(((((map__24250.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24250.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24250):map__24250);
var opts = map__24250__$1;
var statearr_24252_24258 = state;
(statearr_24252_24258[(1)] = cont_block);


var temp__5735__auto__ = cljs.core.async.do_alts.call(null,(function (val){
var statearr_24253_24259 = state;
(statearr_24253_24259[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
}),ports,opts);
if(cljs.core.truth_(temp__5735__auto__)){
var cb = temp__5735__auto__;
var statearr_24254_24260 = state;
(statearr_24254_24260[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq24245){
var G__24246 = cljs.core.first.call(null,seq24245);
var seq24245__$1 = cljs.core.next.call(null,seq24245);
var G__24247 = cljs.core.first.call(null,seq24245__$1);
var seq24245__$2 = cljs.core.next.call(null,seq24245__$1);
var G__24248 = cljs.core.first.call(null,seq24245__$2);
var seq24245__$3 = cljs.core.next.call(null,seq24245__$2);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__24246,G__24247,G__24248,seq24245__$3);
}));

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv.call(null,(function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,((((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_.call(null,solos))))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async24261 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24261 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta24262){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta24262 = meta24262;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async24261.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24263,meta24262__$1){
var self__ = this;
var _24263__$1 = this;
return (new cljs.core.async.t_cljs$core$async24261(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta24262__$1));
}));

(cljs.core.async.t_cljs$core$async24261.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24263){
var self__ = this;
var _24263__$1 = this;
return self__.meta24262;
}));

(cljs.core.async.t_cljs$core$async24261.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async24261.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async24261.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async24261.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async24261.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async24261.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async24261.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async24261.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async24261.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta24262","meta24262",-410192903,null)], null);
}));

(cljs.core.async.t_cljs$core$async24261.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async24261.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24261");

(cljs.core.async.t_cljs$core$async24261.cljs$lang$ctorPrWriter = (function (this__4363__auto__,writer__4364__auto__,opt__4365__auto__){
return cljs.core._write.call(null,writer__4364__auto__,"cljs.core.async/t_cljs$core$async24261");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async24261.
 */
cljs.core.async.__GT_t_cljs$core$async24261 = (function cljs$core$async$mix_$___GT_t_cljs$core$async24261(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta24262){
return (new cljs.core.async.t_cljs$core$async24261(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta24262));
});

}

return (new cljs.core.async.t_cljs$core$async24261(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__23357__auto___24425 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__23358__auto__ = (function (){var switch__23262__auto__ = (function (state_24365){
var state_val_24366 = (state_24365[(1)]);
if((state_val_24366 === (7))){
var inst_24280 = (state_24365[(2)]);
var state_24365__$1 = state_24365;
var statearr_24367_24426 = state_24365__$1;
(statearr_24367_24426[(2)] = inst_24280);

(statearr_24367_24426[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24366 === (20))){
var inst_24292 = (state_24365[(7)]);
var state_24365__$1 = state_24365;
var statearr_24368_24427 = state_24365__$1;
(statearr_24368_24427[(2)] = inst_24292);

(statearr_24368_24427[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24366 === (27))){
var state_24365__$1 = state_24365;
var statearr_24369_24428 = state_24365__$1;
(statearr_24369_24428[(2)] = null);

(statearr_24369_24428[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24366 === (1))){
var inst_24267 = (state_24365[(8)]);
var inst_24267__$1 = calc_state.call(null);
var inst_24269 = (inst_24267__$1 == null);
var inst_24270 = cljs.core.not.call(null,inst_24269);
var state_24365__$1 = (function (){var statearr_24370 = state_24365;
(statearr_24370[(8)] = inst_24267__$1);

return statearr_24370;
})();
if(inst_24270){
var statearr_24371_24429 = state_24365__$1;
(statearr_24371_24429[(1)] = (2));

} else {
var statearr_24372_24430 = state_24365__$1;
(statearr_24372_24430[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24366 === (24))){
var inst_24325 = (state_24365[(9)]);
var inst_24339 = (state_24365[(10)]);
var inst_24316 = (state_24365[(11)]);
var inst_24339__$1 = inst_24316.call(null,inst_24325);
var state_24365__$1 = (function (){var statearr_24373 = state_24365;
(statearr_24373[(10)] = inst_24339__$1);

return statearr_24373;
})();
if(cljs.core.truth_(inst_24339__$1)){
var statearr_24374_24431 = state_24365__$1;
(statearr_24374_24431[(1)] = (29));

} else {
var statearr_24375_24432 = state_24365__$1;
(statearr_24375_24432[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24366 === (4))){
var inst_24283 = (state_24365[(2)]);
var state_24365__$1 = state_24365;
if(cljs.core.truth_(inst_24283)){
var statearr_24376_24433 = state_24365__$1;
(statearr_24376_24433[(1)] = (8));

} else {
var statearr_24377_24434 = state_24365__$1;
(statearr_24377_24434[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24366 === (15))){
var inst_24310 = (state_24365[(2)]);
var state_24365__$1 = state_24365;
if(cljs.core.truth_(inst_24310)){
var statearr_24378_24435 = state_24365__$1;
(statearr_24378_24435[(1)] = (19));

} else {
var statearr_24379_24436 = state_24365__$1;
(statearr_24379_24436[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24366 === (21))){
var inst_24315 = (state_24365[(12)]);
var inst_24315__$1 = (state_24365[(2)]);
var inst_24316 = cljs.core.get.call(null,inst_24315__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_24317 = cljs.core.get.call(null,inst_24315__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_24318 = cljs.core.get.call(null,inst_24315__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_24365__$1 = (function (){var statearr_24380 = state_24365;
(statearr_24380[(13)] = inst_24317);

(statearr_24380[(11)] = inst_24316);

(statearr_24380[(12)] = inst_24315__$1);

return statearr_24380;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_24365__$1,(22),inst_24318);
} else {
if((state_val_24366 === (31))){
var inst_24347 = (state_24365[(2)]);
var state_24365__$1 = state_24365;
if(cljs.core.truth_(inst_24347)){
var statearr_24381_24437 = state_24365__$1;
(statearr_24381_24437[(1)] = (32));

} else {
var statearr_24382_24438 = state_24365__$1;
(statearr_24382_24438[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24366 === (32))){
var inst_24324 = (state_24365[(14)]);
var state_24365__$1 = state_24365;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24365__$1,(35),out,inst_24324);
} else {
if((state_val_24366 === (33))){
var inst_24315 = (state_24365[(12)]);
var inst_24292 = inst_24315;
var state_24365__$1 = (function (){var statearr_24383 = state_24365;
(statearr_24383[(7)] = inst_24292);

return statearr_24383;
})();
var statearr_24384_24439 = state_24365__$1;
(statearr_24384_24439[(2)] = null);

(statearr_24384_24439[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24366 === (13))){
var inst_24292 = (state_24365[(7)]);
var inst_24299 = inst_24292.cljs$lang$protocol_mask$partition0$;
var inst_24300 = (inst_24299 & (64));
var inst_24301 = inst_24292.cljs$core$ISeq$;
var inst_24302 = (cljs.core.PROTOCOL_SENTINEL === inst_24301);
var inst_24303 = ((inst_24300) || (inst_24302));
var state_24365__$1 = state_24365;
if(cljs.core.truth_(inst_24303)){
var statearr_24385_24440 = state_24365__$1;
(statearr_24385_24440[(1)] = (16));

} else {
var statearr_24386_24441 = state_24365__$1;
(statearr_24386_24441[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24366 === (22))){
var inst_24324 = (state_24365[(14)]);
var inst_24325 = (state_24365[(9)]);
var inst_24323 = (state_24365[(2)]);
var inst_24324__$1 = cljs.core.nth.call(null,inst_24323,(0),null);
var inst_24325__$1 = cljs.core.nth.call(null,inst_24323,(1),null);
var inst_24326 = (inst_24324__$1 == null);
var inst_24327 = cljs.core._EQ_.call(null,inst_24325__$1,change);
var inst_24328 = ((inst_24326) || (inst_24327));
var state_24365__$1 = (function (){var statearr_24387 = state_24365;
(statearr_24387[(14)] = inst_24324__$1);

(statearr_24387[(9)] = inst_24325__$1);

return statearr_24387;
})();
if(cljs.core.truth_(inst_24328)){
var statearr_24388_24442 = state_24365__$1;
(statearr_24388_24442[(1)] = (23));

} else {
var statearr_24389_24443 = state_24365__$1;
(statearr_24389_24443[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24366 === (36))){
var inst_24315 = (state_24365[(12)]);
var inst_24292 = inst_24315;
var state_24365__$1 = (function (){var statearr_24390 = state_24365;
(statearr_24390[(7)] = inst_24292);

return statearr_24390;
})();
var statearr_24391_24444 = state_24365__$1;
(statearr_24391_24444[(2)] = null);

(statearr_24391_24444[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24366 === (29))){
var inst_24339 = (state_24365[(10)]);
var state_24365__$1 = state_24365;
var statearr_24392_24445 = state_24365__$1;
(statearr_24392_24445[(2)] = inst_24339);

(statearr_24392_24445[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24366 === (6))){
var state_24365__$1 = state_24365;
var statearr_24393_24446 = state_24365__$1;
(statearr_24393_24446[(2)] = false);

(statearr_24393_24446[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24366 === (28))){
var inst_24335 = (state_24365[(2)]);
var inst_24336 = calc_state.call(null);
var inst_24292 = inst_24336;
var state_24365__$1 = (function (){var statearr_24394 = state_24365;
(statearr_24394[(15)] = inst_24335);

(statearr_24394[(7)] = inst_24292);

return statearr_24394;
})();
var statearr_24395_24447 = state_24365__$1;
(statearr_24395_24447[(2)] = null);

(statearr_24395_24447[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24366 === (25))){
var inst_24361 = (state_24365[(2)]);
var state_24365__$1 = state_24365;
var statearr_24396_24448 = state_24365__$1;
(statearr_24396_24448[(2)] = inst_24361);

(statearr_24396_24448[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24366 === (34))){
var inst_24359 = (state_24365[(2)]);
var state_24365__$1 = state_24365;
var statearr_24397_24449 = state_24365__$1;
(statearr_24397_24449[(2)] = inst_24359);

(statearr_24397_24449[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24366 === (17))){
var state_24365__$1 = state_24365;
var statearr_24398_24450 = state_24365__$1;
(statearr_24398_24450[(2)] = false);

(statearr_24398_24450[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24366 === (3))){
var state_24365__$1 = state_24365;
var statearr_24399_24451 = state_24365__$1;
(statearr_24399_24451[(2)] = false);

(statearr_24399_24451[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24366 === (12))){
var inst_24363 = (state_24365[(2)]);
var state_24365__$1 = state_24365;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24365__$1,inst_24363);
} else {
if((state_val_24366 === (2))){
var inst_24267 = (state_24365[(8)]);
var inst_24272 = inst_24267.cljs$lang$protocol_mask$partition0$;
var inst_24273 = (inst_24272 & (64));
var inst_24274 = inst_24267.cljs$core$ISeq$;
var inst_24275 = (cljs.core.PROTOCOL_SENTINEL === inst_24274);
var inst_24276 = ((inst_24273) || (inst_24275));
var state_24365__$1 = state_24365;
if(cljs.core.truth_(inst_24276)){
var statearr_24400_24452 = state_24365__$1;
(statearr_24400_24452[(1)] = (5));

} else {
var statearr_24401_24453 = state_24365__$1;
(statearr_24401_24453[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24366 === (23))){
var inst_24324 = (state_24365[(14)]);
var inst_24330 = (inst_24324 == null);
var state_24365__$1 = state_24365;
if(cljs.core.truth_(inst_24330)){
var statearr_24402_24454 = state_24365__$1;
(statearr_24402_24454[(1)] = (26));

} else {
var statearr_24403_24455 = state_24365__$1;
(statearr_24403_24455[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24366 === (35))){
var inst_24350 = (state_24365[(2)]);
var state_24365__$1 = state_24365;
if(cljs.core.truth_(inst_24350)){
var statearr_24404_24456 = state_24365__$1;
(statearr_24404_24456[(1)] = (36));

} else {
var statearr_24405_24457 = state_24365__$1;
(statearr_24405_24457[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24366 === (19))){
var inst_24292 = (state_24365[(7)]);
var inst_24312 = cljs.core.apply.call(null,cljs.core.hash_map,inst_24292);
var state_24365__$1 = state_24365;
var statearr_24406_24458 = state_24365__$1;
(statearr_24406_24458[(2)] = inst_24312);

(statearr_24406_24458[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24366 === (11))){
var inst_24292 = (state_24365[(7)]);
var inst_24296 = (inst_24292 == null);
var inst_24297 = cljs.core.not.call(null,inst_24296);
var state_24365__$1 = state_24365;
if(inst_24297){
var statearr_24407_24459 = state_24365__$1;
(statearr_24407_24459[(1)] = (13));

} else {
var statearr_24408_24460 = state_24365__$1;
(statearr_24408_24460[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24366 === (9))){
var inst_24267 = (state_24365[(8)]);
var state_24365__$1 = state_24365;
var statearr_24409_24461 = state_24365__$1;
(statearr_24409_24461[(2)] = inst_24267);

(statearr_24409_24461[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24366 === (5))){
var state_24365__$1 = state_24365;
var statearr_24410_24462 = state_24365__$1;
(statearr_24410_24462[(2)] = true);

(statearr_24410_24462[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24366 === (14))){
var state_24365__$1 = state_24365;
var statearr_24411_24463 = state_24365__$1;
(statearr_24411_24463[(2)] = false);

(statearr_24411_24463[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24366 === (26))){
var inst_24325 = (state_24365[(9)]);
var inst_24332 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_24325);
var state_24365__$1 = state_24365;
var statearr_24412_24464 = state_24365__$1;
(statearr_24412_24464[(2)] = inst_24332);

(statearr_24412_24464[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24366 === (16))){
var state_24365__$1 = state_24365;
var statearr_24413_24465 = state_24365__$1;
(statearr_24413_24465[(2)] = true);

(statearr_24413_24465[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24366 === (38))){
var inst_24355 = (state_24365[(2)]);
var state_24365__$1 = state_24365;
var statearr_24414_24466 = state_24365__$1;
(statearr_24414_24466[(2)] = inst_24355);

(statearr_24414_24466[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24366 === (30))){
var inst_24325 = (state_24365[(9)]);
var inst_24317 = (state_24365[(13)]);
var inst_24316 = (state_24365[(11)]);
var inst_24342 = cljs.core.empty_QMARK_.call(null,inst_24316);
var inst_24343 = inst_24317.call(null,inst_24325);
var inst_24344 = cljs.core.not.call(null,inst_24343);
var inst_24345 = ((inst_24342) && (inst_24344));
var state_24365__$1 = state_24365;
var statearr_24415_24467 = state_24365__$1;
(statearr_24415_24467[(2)] = inst_24345);

(statearr_24415_24467[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24366 === (10))){
var inst_24267 = (state_24365[(8)]);
var inst_24288 = (state_24365[(2)]);
var inst_24289 = cljs.core.get.call(null,inst_24288,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_24290 = cljs.core.get.call(null,inst_24288,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_24291 = cljs.core.get.call(null,inst_24288,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_24292 = inst_24267;
var state_24365__$1 = (function (){var statearr_24416 = state_24365;
(statearr_24416[(16)] = inst_24289);

(statearr_24416[(17)] = inst_24290);

(statearr_24416[(7)] = inst_24292);

(statearr_24416[(18)] = inst_24291);

return statearr_24416;
})();
var statearr_24417_24468 = state_24365__$1;
(statearr_24417_24468[(2)] = null);

(statearr_24417_24468[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24366 === (18))){
var inst_24307 = (state_24365[(2)]);
var state_24365__$1 = state_24365;
var statearr_24418_24469 = state_24365__$1;
(statearr_24418_24469[(2)] = inst_24307);

(statearr_24418_24469[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24366 === (37))){
var state_24365__$1 = state_24365;
var statearr_24419_24470 = state_24365__$1;
(statearr_24419_24470[(2)] = null);

(statearr_24419_24470[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24366 === (8))){
var inst_24267 = (state_24365[(8)]);
var inst_24285 = cljs.core.apply.call(null,cljs.core.hash_map,inst_24267);
var state_24365__$1 = state_24365;
var statearr_24420_24471 = state_24365__$1;
(statearr_24420_24471[(2)] = inst_24285);

(statearr_24420_24471[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mix_$_state_machine__23263__auto__ = null;
var cljs$core$async$mix_$_state_machine__23263__auto____0 = (function (){
var statearr_24421 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24421[(0)] = cljs$core$async$mix_$_state_machine__23263__auto__);

(statearr_24421[(1)] = (1));

return statearr_24421;
});
var cljs$core$async$mix_$_state_machine__23263__auto____1 = (function (state_24365){
while(true){
var ret_value__23264__auto__ = (function (){try{while(true){
var result__23265__auto__ = switch__23262__auto__.call(null,state_24365);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23265__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23265__auto__;
}
break;
}
}catch (e24422){if((e24422 instanceof Object)){
var ex__23266__auto__ = e24422;
var statearr_24423_24472 = state_24365;
(statearr_24423_24472[(5)] = ex__23266__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24365);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24422;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23264__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24473 = state_24365;
state_24365 = G__24473;
continue;
} else {
return ret_value__23264__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__23263__auto__ = function(state_24365){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__23263__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__23263__auto____1.call(this,state_24365);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__23263__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__23263__auto____0;
cljs$core$async$mix_$_state_machine__23263__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__23263__auto____1;
return cljs$core$async$mix_$_state_machine__23263__auto__;
})()
})();
var state__23359__auto__ = (function (){var statearr_24424 = f__23358__auto__.call(null);
(statearr_24424[(6)] = c__23357__auto___24425);

return statearr_24424;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23359__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

var cljs$core$async$Pub$sub_STAR_$dyn_24476 = (function (p,v,ch,close_QMARK_){
var x__4422__auto__ = (((p == null))?null:p);
var m__4423__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4422__auto__)]);
if((!((m__4423__auto__ == null)))){
return m__4423__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__4420__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__4420__auto__ == null)))){
return m__4420__auto__.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_24476.call(null,p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_24477 = (function (p,v,ch){
var x__4422__auto__ = (((p == null))?null:p);
var m__4423__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4422__auto__)]);
if((!((m__4423__auto__ == null)))){
return m__4423__auto__.call(null,p,v,ch);
} else {
var m__4420__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__4420__auto__ == null)))){
return m__4420__auto__.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_24477.call(null,p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_24478 = (function() {
var G__24479 = null;
var G__24479__1 = (function (p){
var x__4422__auto__ = (((p == null))?null:p);
var m__4423__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4422__auto__)]);
if((!((m__4423__auto__ == null)))){
return m__4423__auto__.call(null,p);
} else {
var m__4420__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4420__auto__ == null)))){
return m__4420__auto__.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
});
var G__24479__2 = (function (p,v){
var x__4422__auto__ = (((p == null))?null:p);
var m__4423__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4422__auto__)]);
if((!((m__4423__auto__ == null)))){
return m__4423__auto__.call(null,p,v);
} else {
var m__4420__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4420__auto__ == null)))){
return m__4420__auto__.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
});
G__24479 = function(p,v){
switch(arguments.length){
case 1:
return G__24479__1.call(this,p);
case 2:
return G__24479__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__24479.cljs$core$IFn$_invoke$arity$1 = G__24479__1;
G__24479.cljs$core$IFn$_invoke$arity$2 = G__24479__2;
return G__24479;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__24475 = arguments.length;
switch (G__24475) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_24478.call(null,p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_24478.call(null,p,v);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__24483 = arguments.length;
switch (G__24483) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__4120__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,(function (p1__24481_SHARP_){
if(cljs.core.truth_(p1__24481_SHARP_.call(null,topic))){
return p1__24481_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__24481_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async24484 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24484 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta24485){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta24485 = meta24485;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async24484.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24486,meta24485__$1){
var self__ = this;
var _24486__$1 = this;
return (new cljs.core.async.t_cljs$core$async24484(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta24485__$1));
}));

(cljs.core.async.t_cljs$core$async24484.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24486){
var self__ = this;
var _24486__$1 = this;
return self__.meta24485;
}));

(cljs.core.async.t_cljs$core$async24484.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async24484.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async24484.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async24484.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async24484.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5735__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__5735__auto__)){
var m = temp__5735__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async24484.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async24484.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async24484.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta24485","meta24485",-237526549,null)], null);
}));

(cljs.core.async.t_cljs$core$async24484.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async24484.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24484");

(cljs.core.async.t_cljs$core$async24484.cljs$lang$ctorPrWriter = (function (this__4363__auto__,writer__4364__auto__,opt__4365__auto__){
return cljs.core._write.call(null,writer__4364__auto__,"cljs.core.async/t_cljs$core$async24484");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async24484.
 */
cljs.core.async.__GT_t_cljs$core$async24484 = (function cljs$core$async$__GT_t_cljs$core$async24484(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta24485){
return (new cljs.core.async.t_cljs$core$async24484(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta24485));
});

}

return (new cljs.core.async.t_cljs$core$async24484(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__23357__auto___24604 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__23358__auto__ = (function (){var switch__23262__auto__ = (function (state_24558){
var state_val_24559 = (state_24558[(1)]);
if((state_val_24559 === (7))){
var inst_24554 = (state_24558[(2)]);
var state_24558__$1 = state_24558;
var statearr_24560_24605 = state_24558__$1;
(statearr_24560_24605[(2)] = inst_24554);

(statearr_24560_24605[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24559 === (20))){
var state_24558__$1 = state_24558;
var statearr_24561_24606 = state_24558__$1;
(statearr_24561_24606[(2)] = null);

(statearr_24561_24606[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24559 === (1))){
var state_24558__$1 = state_24558;
var statearr_24562_24607 = state_24558__$1;
(statearr_24562_24607[(2)] = null);

(statearr_24562_24607[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24559 === (24))){
var inst_24537 = (state_24558[(7)]);
var inst_24546 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_24537);
var state_24558__$1 = state_24558;
var statearr_24563_24608 = state_24558__$1;
(statearr_24563_24608[(2)] = inst_24546);

(statearr_24563_24608[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24559 === (4))){
var inst_24489 = (state_24558[(8)]);
var inst_24489__$1 = (state_24558[(2)]);
var inst_24490 = (inst_24489__$1 == null);
var state_24558__$1 = (function (){var statearr_24564 = state_24558;
(statearr_24564[(8)] = inst_24489__$1);

return statearr_24564;
})();
if(cljs.core.truth_(inst_24490)){
var statearr_24565_24609 = state_24558__$1;
(statearr_24565_24609[(1)] = (5));

} else {
var statearr_24566_24610 = state_24558__$1;
(statearr_24566_24610[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24559 === (15))){
var inst_24531 = (state_24558[(2)]);
var state_24558__$1 = state_24558;
var statearr_24567_24611 = state_24558__$1;
(statearr_24567_24611[(2)] = inst_24531);

(statearr_24567_24611[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24559 === (21))){
var inst_24551 = (state_24558[(2)]);
var state_24558__$1 = (function (){var statearr_24568 = state_24558;
(statearr_24568[(9)] = inst_24551);

return statearr_24568;
})();
var statearr_24569_24612 = state_24558__$1;
(statearr_24569_24612[(2)] = null);

(statearr_24569_24612[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24559 === (13))){
var inst_24513 = (state_24558[(10)]);
var inst_24515 = cljs.core.chunked_seq_QMARK_.call(null,inst_24513);
var state_24558__$1 = state_24558;
if(inst_24515){
var statearr_24570_24613 = state_24558__$1;
(statearr_24570_24613[(1)] = (16));

} else {
var statearr_24571_24614 = state_24558__$1;
(statearr_24571_24614[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24559 === (22))){
var inst_24543 = (state_24558[(2)]);
var state_24558__$1 = state_24558;
if(cljs.core.truth_(inst_24543)){
var statearr_24572_24615 = state_24558__$1;
(statearr_24572_24615[(1)] = (23));

} else {
var statearr_24573_24616 = state_24558__$1;
(statearr_24573_24616[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24559 === (6))){
var inst_24537 = (state_24558[(7)]);
var inst_24539 = (state_24558[(11)]);
var inst_24489 = (state_24558[(8)]);
var inst_24537__$1 = topic_fn.call(null,inst_24489);
var inst_24538 = cljs.core.deref.call(null,mults);
var inst_24539__$1 = cljs.core.get.call(null,inst_24538,inst_24537__$1);
var state_24558__$1 = (function (){var statearr_24574 = state_24558;
(statearr_24574[(7)] = inst_24537__$1);

(statearr_24574[(11)] = inst_24539__$1);

return statearr_24574;
})();
if(cljs.core.truth_(inst_24539__$1)){
var statearr_24575_24617 = state_24558__$1;
(statearr_24575_24617[(1)] = (19));

} else {
var statearr_24576_24618 = state_24558__$1;
(statearr_24576_24618[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24559 === (25))){
var inst_24548 = (state_24558[(2)]);
var state_24558__$1 = state_24558;
var statearr_24577_24619 = state_24558__$1;
(statearr_24577_24619[(2)] = inst_24548);

(statearr_24577_24619[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24559 === (17))){
var inst_24513 = (state_24558[(10)]);
var inst_24522 = cljs.core.first.call(null,inst_24513);
var inst_24523 = cljs.core.async.muxch_STAR_.call(null,inst_24522);
var inst_24524 = cljs.core.async.close_BANG_.call(null,inst_24523);
var inst_24525 = cljs.core.next.call(null,inst_24513);
var inst_24499 = inst_24525;
var inst_24500 = null;
var inst_24501 = (0);
var inst_24502 = (0);
var state_24558__$1 = (function (){var statearr_24578 = state_24558;
(statearr_24578[(12)] = inst_24524);

(statearr_24578[(13)] = inst_24501);

(statearr_24578[(14)] = inst_24500);

(statearr_24578[(15)] = inst_24502);

(statearr_24578[(16)] = inst_24499);

return statearr_24578;
})();
var statearr_24579_24620 = state_24558__$1;
(statearr_24579_24620[(2)] = null);

(statearr_24579_24620[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24559 === (3))){
var inst_24556 = (state_24558[(2)]);
var state_24558__$1 = state_24558;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24558__$1,inst_24556);
} else {
if((state_val_24559 === (12))){
var inst_24533 = (state_24558[(2)]);
var state_24558__$1 = state_24558;
var statearr_24580_24621 = state_24558__$1;
(statearr_24580_24621[(2)] = inst_24533);

(statearr_24580_24621[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24559 === (2))){
var state_24558__$1 = state_24558;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24558__$1,(4),ch);
} else {
if((state_val_24559 === (23))){
var state_24558__$1 = state_24558;
var statearr_24581_24622 = state_24558__$1;
(statearr_24581_24622[(2)] = null);

(statearr_24581_24622[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24559 === (19))){
var inst_24539 = (state_24558[(11)]);
var inst_24489 = (state_24558[(8)]);
var inst_24541 = cljs.core.async.muxch_STAR_.call(null,inst_24539);
var state_24558__$1 = state_24558;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24558__$1,(22),inst_24541,inst_24489);
} else {
if((state_val_24559 === (11))){
var inst_24499 = (state_24558[(16)]);
var inst_24513 = (state_24558[(10)]);
var inst_24513__$1 = cljs.core.seq.call(null,inst_24499);
var state_24558__$1 = (function (){var statearr_24582 = state_24558;
(statearr_24582[(10)] = inst_24513__$1);

return statearr_24582;
})();
if(inst_24513__$1){
var statearr_24583_24623 = state_24558__$1;
(statearr_24583_24623[(1)] = (13));

} else {
var statearr_24584_24624 = state_24558__$1;
(statearr_24584_24624[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24559 === (9))){
var inst_24535 = (state_24558[(2)]);
var state_24558__$1 = state_24558;
var statearr_24585_24625 = state_24558__$1;
(statearr_24585_24625[(2)] = inst_24535);

(statearr_24585_24625[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24559 === (5))){
var inst_24496 = cljs.core.deref.call(null,mults);
var inst_24497 = cljs.core.vals.call(null,inst_24496);
var inst_24498 = cljs.core.seq.call(null,inst_24497);
var inst_24499 = inst_24498;
var inst_24500 = null;
var inst_24501 = (0);
var inst_24502 = (0);
var state_24558__$1 = (function (){var statearr_24586 = state_24558;
(statearr_24586[(13)] = inst_24501);

(statearr_24586[(14)] = inst_24500);

(statearr_24586[(15)] = inst_24502);

(statearr_24586[(16)] = inst_24499);

return statearr_24586;
})();
var statearr_24587_24626 = state_24558__$1;
(statearr_24587_24626[(2)] = null);

(statearr_24587_24626[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24559 === (14))){
var state_24558__$1 = state_24558;
var statearr_24591_24627 = state_24558__$1;
(statearr_24591_24627[(2)] = null);

(statearr_24591_24627[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24559 === (16))){
var inst_24513 = (state_24558[(10)]);
var inst_24517 = cljs.core.chunk_first.call(null,inst_24513);
var inst_24518 = cljs.core.chunk_rest.call(null,inst_24513);
var inst_24519 = cljs.core.count.call(null,inst_24517);
var inst_24499 = inst_24518;
var inst_24500 = inst_24517;
var inst_24501 = inst_24519;
var inst_24502 = (0);
var state_24558__$1 = (function (){var statearr_24592 = state_24558;
(statearr_24592[(13)] = inst_24501);

(statearr_24592[(14)] = inst_24500);

(statearr_24592[(15)] = inst_24502);

(statearr_24592[(16)] = inst_24499);

return statearr_24592;
})();
var statearr_24593_24628 = state_24558__$1;
(statearr_24593_24628[(2)] = null);

(statearr_24593_24628[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24559 === (10))){
var inst_24501 = (state_24558[(13)]);
var inst_24500 = (state_24558[(14)]);
var inst_24502 = (state_24558[(15)]);
var inst_24499 = (state_24558[(16)]);
var inst_24507 = cljs.core._nth.call(null,inst_24500,inst_24502);
var inst_24508 = cljs.core.async.muxch_STAR_.call(null,inst_24507);
var inst_24509 = cljs.core.async.close_BANG_.call(null,inst_24508);
var inst_24510 = (inst_24502 + (1));
var tmp24588 = inst_24501;
var tmp24589 = inst_24500;
var tmp24590 = inst_24499;
var inst_24499__$1 = tmp24590;
var inst_24500__$1 = tmp24589;
var inst_24501__$1 = tmp24588;
var inst_24502__$1 = inst_24510;
var state_24558__$1 = (function (){var statearr_24594 = state_24558;
(statearr_24594[(17)] = inst_24509);

(statearr_24594[(13)] = inst_24501__$1);

(statearr_24594[(14)] = inst_24500__$1);

(statearr_24594[(15)] = inst_24502__$1);

(statearr_24594[(16)] = inst_24499__$1);

return statearr_24594;
})();
var statearr_24595_24629 = state_24558__$1;
(statearr_24595_24629[(2)] = null);

(statearr_24595_24629[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24559 === (18))){
var inst_24528 = (state_24558[(2)]);
var state_24558__$1 = state_24558;
var statearr_24596_24630 = state_24558__$1;
(statearr_24596_24630[(2)] = inst_24528);

(statearr_24596_24630[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24559 === (8))){
var inst_24501 = (state_24558[(13)]);
var inst_24502 = (state_24558[(15)]);
var inst_24504 = (inst_24502 < inst_24501);
var inst_24505 = inst_24504;
var state_24558__$1 = state_24558;
if(cljs.core.truth_(inst_24505)){
var statearr_24597_24631 = state_24558__$1;
(statearr_24597_24631[(1)] = (10));

} else {
var statearr_24598_24632 = state_24558__$1;
(statearr_24598_24632[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__23263__auto__ = null;
var cljs$core$async$state_machine__23263__auto____0 = (function (){
var statearr_24599 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24599[(0)] = cljs$core$async$state_machine__23263__auto__);

(statearr_24599[(1)] = (1));

return statearr_24599;
});
var cljs$core$async$state_machine__23263__auto____1 = (function (state_24558){
while(true){
var ret_value__23264__auto__ = (function (){try{while(true){
var result__23265__auto__ = switch__23262__auto__.call(null,state_24558);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23265__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23265__auto__;
}
break;
}
}catch (e24600){if((e24600 instanceof Object)){
var ex__23266__auto__ = e24600;
var statearr_24601_24633 = state_24558;
(statearr_24601_24633[(5)] = ex__23266__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24558);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24600;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23264__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24634 = state_24558;
state_24558 = G__24634;
continue;
} else {
return ret_value__23264__auto__;
}
break;
}
});
cljs$core$async$state_machine__23263__auto__ = function(state_24558){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23263__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23263__auto____1.call(this,state_24558);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23263__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23263__auto____0;
cljs$core$async$state_machine__23263__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23263__auto____1;
return cljs$core$async$state_machine__23263__auto__;
})()
})();
var state__23359__auto__ = (function (){var statearr_24602 = f__23358__auto__.call(null);
(statearr_24602[(6)] = c__23357__auto___24604);

return statearr_24602;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23359__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__24636 = arguments.length;
switch (G__24636) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__24639 = arguments.length;
switch (G__24639) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__24642 = arguments.length;
switch (G__24642) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,(function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.call(null,cnt));
var c__23357__auto___24709 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__23358__auto__ = (function (){var switch__23262__auto__ = (function (state_24681){
var state_val_24682 = (state_24681[(1)]);
if((state_val_24682 === (7))){
var state_24681__$1 = state_24681;
var statearr_24683_24710 = state_24681__$1;
(statearr_24683_24710[(2)] = null);

(statearr_24683_24710[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24682 === (1))){
var state_24681__$1 = state_24681;
var statearr_24684_24711 = state_24681__$1;
(statearr_24684_24711[(2)] = null);

(statearr_24684_24711[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24682 === (4))){
var inst_24645 = (state_24681[(7)]);
var inst_24647 = (inst_24645 < cnt);
var state_24681__$1 = state_24681;
if(cljs.core.truth_(inst_24647)){
var statearr_24685_24712 = state_24681__$1;
(statearr_24685_24712[(1)] = (6));

} else {
var statearr_24686_24713 = state_24681__$1;
(statearr_24686_24713[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24682 === (15))){
var inst_24677 = (state_24681[(2)]);
var state_24681__$1 = state_24681;
var statearr_24687_24714 = state_24681__$1;
(statearr_24687_24714[(2)] = inst_24677);

(statearr_24687_24714[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24682 === (13))){
var inst_24670 = cljs.core.async.close_BANG_.call(null,out);
var state_24681__$1 = state_24681;
var statearr_24688_24715 = state_24681__$1;
(statearr_24688_24715[(2)] = inst_24670);

(statearr_24688_24715[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24682 === (6))){
var state_24681__$1 = state_24681;
var statearr_24689_24716 = state_24681__$1;
(statearr_24689_24716[(2)] = null);

(statearr_24689_24716[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24682 === (3))){
var inst_24679 = (state_24681[(2)]);
var state_24681__$1 = state_24681;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24681__$1,inst_24679);
} else {
if((state_val_24682 === (12))){
var inst_24667 = (state_24681[(8)]);
var inst_24667__$1 = (state_24681[(2)]);
var inst_24668 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_24667__$1);
var state_24681__$1 = (function (){var statearr_24690 = state_24681;
(statearr_24690[(8)] = inst_24667__$1);

return statearr_24690;
})();
if(cljs.core.truth_(inst_24668)){
var statearr_24691_24717 = state_24681__$1;
(statearr_24691_24717[(1)] = (13));

} else {
var statearr_24692_24718 = state_24681__$1;
(statearr_24692_24718[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24682 === (2))){
var inst_24644 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_24645 = (0);
var state_24681__$1 = (function (){var statearr_24693 = state_24681;
(statearr_24693[(7)] = inst_24645);

(statearr_24693[(9)] = inst_24644);

return statearr_24693;
})();
var statearr_24694_24719 = state_24681__$1;
(statearr_24694_24719[(2)] = null);

(statearr_24694_24719[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24682 === (11))){
var inst_24645 = (state_24681[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_24681,(10),Object,null,(9));
var inst_24654 = chs__$1.call(null,inst_24645);
var inst_24655 = done.call(null,inst_24645);
var inst_24656 = cljs.core.async.take_BANG_.call(null,inst_24654,inst_24655);
var state_24681__$1 = state_24681;
var statearr_24695_24720 = state_24681__$1;
(statearr_24695_24720[(2)] = inst_24656);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24681__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24682 === (9))){
var inst_24645 = (state_24681[(7)]);
var inst_24658 = (state_24681[(2)]);
var inst_24659 = (inst_24645 + (1));
var inst_24645__$1 = inst_24659;
var state_24681__$1 = (function (){var statearr_24696 = state_24681;
(statearr_24696[(7)] = inst_24645__$1);

(statearr_24696[(10)] = inst_24658);

return statearr_24696;
})();
var statearr_24697_24721 = state_24681__$1;
(statearr_24697_24721[(2)] = null);

(statearr_24697_24721[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24682 === (5))){
var inst_24665 = (state_24681[(2)]);
var state_24681__$1 = (function (){var statearr_24698 = state_24681;
(statearr_24698[(11)] = inst_24665);

return statearr_24698;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24681__$1,(12),dchan);
} else {
if((state_val_24682 === (14))){
var inst_24667 = (state_24681[(8)]);
var inst_24672 = cljs.core.apply.call(null,f,inst_24667);
var state_24681__$1 = state_24681;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24681__$1,(16),out,inst_24672);
} else {
if((state_val_24682 === (16))){
var inst_24674 = (state_24681[(2)]);
var state_24681__$1 = (function (){var statearr_24699 = state_24681;
(statearr_24699[(12)] = inst_24674);

return statearr_24699;
})();
var statearr_24700_24722 = state_24681__$1;
(statearr_24700_24722[(2)] = null);

(statearr_24700_24722[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24682 === (10))){
var inst_24649 = (state_24681[(2)]);
var inst_24650 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_24681__$1 = (function (){var statearr_24701 = state_24681;
(statearr_24701[(13)] = inst_24649);

return statearr_24701;
})();
var statearr_24702_24723 = state_24681__$1;
(statearr_24702_24723[(2)] = inst_24650);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24681__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24682 === (8))){
var inst_24663 = (state_24681[(2)]);
var state_24681__$1 = state_24681;
var statearr_24703_24724 = state_24681__$1;
(statearr_24703_24724[(2)] = inst_24663);

(statearr_24703_24724[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__23263__auto__ = null;
var cljs$core$async$state_machine__23263__auto____0 = (function (){
var statearr_24704 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24704[(0)] = cljs$core$async$state_machine__23263__auto__);

(statearr_24704[(1)] = (1));

return statearr_24704;
});
var cljs$core$async$state_machine__23263__auto____1 = (function (state_24681){
while(true){
var ret_value__23264__auto__ = (function (){try{while(true){
var result__23265__auto__ = switch__23262__auto__.call(null,state_24681);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23265__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23265__auto__;
}
break;
}
}catch (e24705){if((e24705 instanceof Object)){
var ex__23266__auto__ = e24705;
var statearr_24706_24725 = state_24681;
(statearr_24706_24725[(5)] = ex__23266__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24681);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24705;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23264__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24726 = state_24681;
state_24681 = G__24726;
continue;
} else {
return ret_value__23264__auto__;
}
break;
}
});
cljs$core$async$state_machine__23263__auto__ = function(state_24681){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23263__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23263__auto____1.call(this,state_24681);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23263__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23263__auto____0;
cljs$core$async$state_machine__23263__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23263__auto____1;
return cljs$core$async$state_machine__23263__auto__;
})()
})();
var state__23359__auto__ = (function (){var statearr_24707 = f__23358__auto__.call(null);
(statearr_24707[(6)] = c__23357__auto___24709);

return statearr_24707;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23359__auto__);
}));


return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__24729 = arguments.length;
switch (G__24729) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__23357__auto___24783 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__23358__auto__ = (function (){var switch__23262__auto__ = (function (state_24761){
var state_val_24762 = (state_24761[(1)]);
if((state_val_24762 === (7))){
var inst_24741 = (state_24761[(7)]);
var inst_24740 = (state_24761[(8)]);
var inst_24740__$1 = (state_24761[(2)]);
var inst_24741__$1 = cljs.core.nth.call(null,inst_24740__$1,(0),null);
var inst_24742 = cljs.core.nth.call(null,inst_24740__$1,(1),null);
var inst_24743 = (inst_24741__$1 == null);
var state_24761__$1 = (function (){var statearr_24763 = state_24761;
(statearr_24763[(7)] = inst_24741__$1);

(statearr_24763[(9)] = inst_24742);

(statearr_24763[(8)] = inst_24740__$1);

return statearr_24763;
})();
if(cljs.core.truth_(inst_24743)){
var statearr_24764_24784 = state_24761__$1;
(statearr_24764_24784[(1)] = (8));

} else {
var statearr_24765_24785 = state_24761__$1;
(statearr_24765_24785[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24762 === (1))){
var inst_24730 = cljs.core.vec.call(null,chs);
var inst_24731 = inst_24730;
var state_24761__$1 = (function (){var statearr_24766 = state_24761;
(statearr_24766[(10)] = inst_24731);

return statearr_24766;
})();
var statearr_24767_24786 = state_24761__$1;
(statearr_24767_24786[(2)] = null);

(statearr_24767_24786[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24762 === (4))){
var inst_24731 = (state_24761[(10)]);
var state_24761__$1 = state_24761;
return cljs.core.async.ioc_alts_BANG_.call(null,state_24761__$1,(7),inst_24731);
} else {
if((state_val_24762 === (6))){
var inst_24757 = (state_24761[(2)]);
var state_24761__$1 = state_24761;
var statearr_24768_24787 = state_24761__$1;
(statearr_24768_24787[(2)] = inst_24757);

(statearr_24768_24787[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24762 === (3))){
var inst_24759 = (state_24761[(2)]);
var state_24761__$1 = state_24761;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24761__$1,inst_24759);
} else {
if((state_val_24762 === (2))){
var inst_24731 = (state_24761[(10)]);
var inst_24733 = cljs.core.count.call(null,inst_24731);
var inst_24734 = (inst_24733 > (0));
var state_24761__$1 = state_24761;
if(cljs.core.truth_(inst_24734)){
var statearr_24770_24788 = state_24761__$1;
(statearr_24770_24788[(1)] = (4));

} else {
var statearr_24771_24789 = state_24761__$1;
(statearr_24771_24789[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24762 === (11))){
var inst_24731 = (state_24761[(10)]);
var inst_24750 = (state_24761[(2)]);
var tmp24769 = inst_24731;
var inst_24731__$1 = tmp24769;
var state_24761__$1 = (function (){var statearr_24772 = state_24761;
(statearr_24772[(11)] = inst_24750);

(statearr_24772[(10)] = inst_24731__$1);

return statearr_24772;
})();
var statearr_24773_24790 = state_24761__$1;
(statearr_24773_24790[(2)] = null);

(statearr_24773_24790[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24762 === (9))){
var inst_24741 = (state_24761[(7)]);
var state_24761__$1 = state_24761;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24761__$1,(11),out,inst_24741);
} else {
if((state_val_24762 === (5))){
var inst_24755 = cljs.core.async.close_BANG_.call(null,out);
var state_24761__$1 = state_24761;
var statearr_24774_24791 = state_24761__$1;
(statearr_24774_24791[(2)] = inst_24755);

(statearr_24774_24791[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24762 === (10))){
var inst_24753 = (state_24761[(2)]);
var state_24761__$1 = state_24761;
var statearr_24775_24792 = state_24761__$1;
(statearr_24775_24792[(2)] = inst_24753);

(statearr_24775_24792[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24762 === (8))){
var inst_24741 = (state_24761[(7)]);
var inst_24742 = (state_24761[(9)]);
var inst_24731 = (state_24761[(10)]);
var inst_24740 = (state_24761[(8)]);
var inst_24745 = (function (){var cs = inst_24731;
var vec__24736 = inst_24740;
var v = inst_24741;
var c = inst_24742;
return (function (p1__24727_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__24727_SHARP_);
});
})();
var inst_24746 = cljs.core.filterv.call(null,inst_24745,inst_24731);
var inst_24731__$1 = inst_24746;
var state_24761__$1 = (function (){var statearr_24776 = state_24761;
(statearr_24776[(10)] = inst_24731__$1);

return statearr_24776;
})();
var statearr_24777_24793 = state_24761__$1;
(statearr_24777_24793[(2)] = null);

(statearr_24777_24793[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__23263__auto__ = null;
var cljs$core$async$state_machine__23263__auto____0 = (function (){
var statearr_24778 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24778[(0)] = cljs$core$async$state_machine__23263__auto__);

(statearr_24778[(1)] = (1));

return statearr_24778;
});
var cljs$core$async$state_machine__23263__auto____1 = (function (state_24761){
while(true){
var ret_value__23264__auto__ = (function (){try{while(true){
var result__23265__auto__ = switch__23262__auto__.call(null,state_24761);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23265__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23265__auto__;
}
break;
}
}catch (e24779){if((e24779 instanceof Object)){
var ex__23266__auto__ = e24779;
var statearr_24780_24794 = state_24761;
(statearr_24780_24794[(5)] = ex__23266__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24761);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24779;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23264__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24795 = state_24761;
state_24761 = G__24795;
continue;
} else {
return ret_value__23264__auto__;
}
break;
}
});
cljs$core$async$state_machine__23263__auto__ = function(state_24761){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23263__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23263__auto____1.call(this,state_24761);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23263__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23263__auto____0;
cljs$core$async$state_machine__23263__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23263__auto____1;
return cljs$core$async$state_machine__23263__auto__;
})()
})();
var state__23359__auto__ = (function (){var statearr_24781 = f__23358__auto__.call(null);
(statearr_24781[(6)] = c__23357__auto___24783);

return statearr_24781;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23359__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__24797 = arguments.length;
switch (G__24797) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__23357__auto___24842 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__23358__auto__ = (function (){var switch__23262__auto__ = (function (state_24821){
var state_val_24822 = (state_24821[(1)]);
if((state_val_24822 === (7))){
var inst_24803 = (state_24821[(7)]);
var inst_24803__$1 = (state_24821[(2)]);
var inst_24804 = (inst_24803__$1 == null);
var inst_24805 = cljs.core.not.call(null,inst_24804);
var state_24821__$1 = (function (){var statearr_24823 = state_24821;
(statearr_24823[(7)] = inst_24803__$1);

return statearr_24823;
})();
if(inst_24805){
var statearr_24824_24843 = state_24821__$1;
(statearr_24824_24843[(1)] = (8));

} else {
var statearr_24825_24844 = state_24821__$1;
(statearr_24825_24844[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24822 === (1))){
var inst_24798 = (0);
var state_24821__$1 = (function (){var statearr_24826 = state_24821;
(statearr_24826[(8)] = inst_24798);

return statearr_24826;
})();
var statearr_24827_24845 = state_24821__$1;
(statearr_24827_24845[(2)] = null);

(statearr_24827_24845[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24822 === (4))){
var state_24821__$1 = state_24821;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24821__$1,(7),ch);
} else {
if((state_val_24822 === (6))){
var inst_24816 = (state_24821[(2)]);
var state_24821__$1 = state_24821;
var statearr_24828_24846 = state_24821__$1;
(statearr_24828_24846[(2)] = inst_24816);

(statearr_24828_24846[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24822 === (3))){
var inst_24818 = (state_24821[(2)]);
var inst_24819 = cljs.core.async.close_BANG_.call(null,out);
var state_24821__$1 = (function (){var statearr_24829 = state_24821;
(statearr_24829[(9)] = inst_24818);

return statearr_24829;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24821__$1,inst_24819);
} else {
if((state_val_24822 === (2))){
var inst_24798 = (state_24821[(8)]);
var inst_24800 = (inst_24798 < n);
var state_24821__$1 = state_24821;
if(cljs.core.truth_(inst_24800)){
var statearr_24830_24847 = state_24821__$1;
(statearr_24830_24847[(1)] = (4));

} else {
var statearr_24831_24848 = state_24821__$1;
(statearr_24831_24848[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24822 === (11))){
var inst_24798 = (state_24821[(8)]);
var inst_24808 = (state_24821[(2)]);
var inst_24809 = (inst_24798 + (1));
var inst_24798__$1 = inst_24809;
var state_24821__$1 = (function (){var statearr_24832 = state_24821;
(statearr_24832[(10)] = inst_24808);

(statearr_24832[(8)] = inst_24798__$1);

return statearr_24832;
})();
var statearr_24833_24849 = state_24821__$1;
(statearr_24833_24849[(2)] = null);

(statearr_24833_24849[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24822 === (9))){
var state_24821__$1 = state_24821;
var statearr_24834_24850 = state_24821__$1;
(statearr_24834_24850[(2)] = null);

(statearr_24834_24850[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24822 === (5))){
var state_24821__$1 = state_24821;
var statearr_24835_24851 = state_24821__$1;
(statearr_24835_24851[(2)] = null);

(statearr_24835_24851[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24822 === (10))){
var inst_24813 = (state_24821[(2)]);
var state_24821__$1 = state_24821;
var statearr_24836_24852 = state_24821__$1;
(statearr_24836_24852[(2)] = inst_24813);

(statearr_24836_24852[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24822 === (8))){
var inst_24803 = (state_24821[(7)]);
var state_24821__$1 = state_24821;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24821__$1,(11),out,inst_24803);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__23263__auto__ = null;
var cljs$core$async$state_machine__23263__auto____0 = (function (){
var statearr_24837 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_24837[(0)] = cljs$core$async$state_machine__23263__auto__);

(statearr_24837[(1)] = (1));

return statearr_24837;
});
var cljs$core$async$state_machine__23263__auto____1 = (function (state_24821){
while(true){
var ret_value__23264__auto__ = (function (){try{while(true){
var result__23265__auto__ = switch__23262__auto__.call(null,state_24821);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23265__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23265__auto__;
}
break;
}
}catch (e24838){if((e24838 instanceof Object)){
var ex__23266__auto__ = e24838;
var statearr_24839_24853 = state_24821;
(statearr_24839_24853[(5)] = ex__23266__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24821);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24838;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23264__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24854 = state_24821;
state_24821 = G__24854;
continue;
} else {
return ret_value__23264__auto__;
}
break;
}
});
cljs$core$async$state_machine__23263__auto__ = function(state_24821){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23263__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23263__auto____1.call(this,state_24821);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23263__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23263__auto____0;
cljs$core$async$state_machine__23263__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23263__auto____1;
return cljs$core$async$state_machine__23263__auto__;
})()
})();
var state__23359__auto__ = (function (){var statearr_24840 = f__23358__auto__.call(null);
(statearr_24840[(6)] = c__23357__auto___24842);

return statearr_24840;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23359__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async24856 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24856 = (function (f,ch,meta24857){
this.f = f;
this.ch = ch;
this.meta24857 = meta24857;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async24856.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24858,meta24857__$1){
var self__ = this;
var _24858__$1 = this;
return (new cljs.core.async.t_cljs$core$async24856(self__.f,self__.ch,meta24857__$1));
}));

(cljs.core.async.t_cljs$core$async24856.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24858){
var self__ = this;
var _24858__$1 = this;
return self__.meta24857;
}));

(cljs.core.async.t_cljs$core$async24856.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async24856.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async24856.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async24856.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async24856.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async24859 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24859 = (function (f,ch,meta24857,_,fn1,meta24860){
this.f = f;
this.ch = ch;
this.meta24857 = meta24857;
this._ = _;
this.fn1 = fn1;
this.meta24860 = meta24860;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async24859.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24861,meta24860__$1){
var self__ = this;
var _24861__$1 = this;
return (new cljs.core.async.t_cljs$core$async24859(self__.f,self__.ch,self__.meta24857,self__._,self__.fn1,meta24860__$1));
}));

(cljs.core.async.t_cljs$core$async24859.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24861){
var self__ = this;
var _24861__$1 = this;
return self__.meta24860;
}));

(cljs.core.async.t_cljs$core$async24859.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async24859.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
}));

(cljs.core.async.t_cljs$core$async24859.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async24859.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return (function (p1__24855_SHARP_){
return f1.call(null,(((p1__24855_SHARP_ == null))?null:self__.f.call(null,p1__24855_SHARP_)));
});
}));

(cljs.core.async.t_cljs$core$async24859.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta24857","meta24857",203019229,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async24856","cljs.core.async/t_cljs$core$async24856",114756355,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta24860","meta24860",1413476998,null)], null);
}));

(cljs.core.async.t_cljs$core$async24859.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async24859.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24859");

(cljs.core.async.t_cljs$core$async24859.cljs$lang$ctorPrWriter = (function (this__4363__auto__,writer__4364__auto__,opt__4365__auto__){
return cljs.core._write.call(null,writer__4364__auto__,"cljs.core.async/t_cljs$core$async24859");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async24859.
 */
cljs.core.async.__GT_t_cljs$core$async24859 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async24859(f__$1,ch__$1,meta24857__$1,___$2,fn1__$1,meta24860){
return (new cljs.core.async.t_cljs$core$async24859(f__$1,ch__$1,meta24857__$1,___$2,fn1__$1,meta24860));
});

}

return (new cljs.core.async.t_cljs$core$async24859(self__.f,self__.ch,self__.meta24857,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4109__auto__ = ret;
if(cljs.core.truth_(and__4109__auto__)){
return (!((cljs.core.deref.call(null,ret) == null)));
} else {
return and__4109__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async24856.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async24856.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async24856.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta24857","meta24857",203019229,null)], null);
}));

(cljs.core.async.t_cljs$core$async24856.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async24856.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24856");

(cljs.core.async.t_cljs$core$async24856.cljs$lang$ctorPrWriter = (function (this__4363__auto__,writer__4364__auto__,opt__4365__auto__){
return cljs.core._write.call(null,writer__4364__auto__,"cljs.core.async/t_cljs$core$async24856");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async24856.
 */
cljs.core.async.__GT_t_cljs$core$async24856 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async24856(f__$1,ch__$1,meta24857){
return (new cljs.core.async.t_cljs$core$async24856(f__$1,ch__$1,meta24857));
});

}

return (new cljs.core.async.t_cljs$core$async24856(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async24862 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24862 = (function (f,ch,meta24863){
this.f = f;
this.ch = ch;
this.meta24863 = meta24863;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async24862.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24864,meta24863__$1){
var self__ = this;
var _24864__$1 = this;
return (new cljs.core.async.t_cljs$core$async24862(self__.f,self__.ch,meta24863__$1));
}));

(cljs.core.async.t_cljs$core$async24862.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24864){
var self__ = this;
var _24864__$1 = this;
return self__.meta24863;
}));

(cljs.core.async.t_cljs$core$async24862.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async24862.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async24862.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async24862.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async24862.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async24862.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
}));

(cljs.core.async.t_cljs$core$async24862.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta24863","meta24863",-1746193489,null)], null);
}));

(cljs.core.async.t_cljs$core$async24862.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async24862.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24862");

(cljs.core.async.t_cljs$core$async24862.cljs$lang$ctorPrWriter = (function (this__4363__auto__,writer__4364__auto__,opt__4365__auto__){
return cljs.core._write.call(null,writer__4364__auto__,"cljs.core.async/t_cljs$core$async24862");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async24862.
 */
cljs.core.async.__GT_t_cljs$core$async24862 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async24862(f__$1,ch__$1,meta24863){
return (new cljs.core.async.t_cljs$core$async24862(f__$1,ch__$1,meta24863));
});

}

return (new cljs.core.async.t_cljs$core$async24862(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async24865 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24865 = (function (p,ch,meta24866){
this.p = p;
this.ch = ch;
this.meta24866 = meta24866;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async24865.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24867,meta24866__$1){
var self__ = this;
var _24867__$1 = this;
return (new cljs.core.async.t_cljs$core$async24865(self__.p,self__.ch,meta24866__$1));
}));

(cljs.core.async.t_cljs$core$async24865.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24867){
var self__ = this;
var _24867__$1 = this;
return self__.meta24866;
}));

(cljs.core.async.t_cljs$core$async24865.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async24865.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async24865.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async24865.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async24865.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async24865.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async24865.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async24865.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta24866","meta24866",1078756030,null)], null);
}));

(cljs.core.async.t_cljs$core$async24865.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async24865.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24865");

(cljs.core.async.t_cljs$core$async24865.cljs$lang$ctorPrWriter = (function (this__4363__auto__,writer__4364__auto__,opt__4365__auto__){
return cljs.core._write.call(null,writer__4364__auto__,"cljs.core.async/t_cljs$core$async24865");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async24865.
 */
cljs.core.async.__GT_t_cljs$core$async24865 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async24865(p__$1,ch__$1,meta24866){
return (new cljs.core.async.t_cljs$core$async24865(p__$1,ch__$1,meta24866));
});

}

return (new cljs.core.async.t_cljs$core$async24865(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__24869 = arguments.length;
switch (G__24869) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__23357__auto___24909 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__23358__auto__ = (function (){var switch__23262__auto__ = (function (state_24890){
var state_val_24891 = (state_24890[(1)]);
if((state_val_24891 === (7))){
var inst_24886 = (state_24890[(2)]);
var state_24890__$1 = state_24890;
var statearr_24892_24910 = state_24890__$1;
(statearr_24892_24910[(2)] = inst_24886);

(statearr_24892_24910[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24891 === (1))){
var state_24890__$1 = state_24890;
var statearr_24893_24911 = state_24890__$1;
(statearr_24893_24911[(2)] = null);

(statearr_24893_24911[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24891 === (4))){
var inst_24872 = (state_24890[(7)]);
var inst_24872__$1 = (state_24890[(2)]);
var inst_24873 = (inst_24872__$1 == null);
var state_24890__$1 = (function (){var statearr_24894 = state_24890;
(statearr_24894[(7)] = inst_24872__$1);

return statearr_24894;
})();
if(cljs.core.truth_(inst_24873)){
var statearr_24895_24912 = state_24890__$1;
(statearr_24895_24912[(1)] = (5));

} else {
var statearr_24896_24913 = state_24890__$1;
(statearr_24896_24913[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24891 === (6))){
var inst_24872 = (state_24890[(7)]);
var inst_24877 = p.call(null,inst_24872);
var state_24890__$1 = state_24890;
if(cljs.core.truth_(inst_24877)){
var statearr_24897_24914 = state_24890__$1;
(statearr_24897_24914[(1)] = (8));

} else {
var statearr_24898_24915 = state_24890__$1;
(statearr_24898_24915[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24891 === (3))){
var inst_24888 = (state_24890[(2)]);
var state_24890__$1 = state_24890;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24890__$1,inst_24888);
} else {
if((state_val_24891 === (2))){
var state_24890__$1 = state_24890;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24890__$1,(4),ch);
} else {
if((state_val_24891 === (11))){
var inst_24880 = (state_24890[(2)]);
var state_24890__$1 = state_24890;
var statearr_24899_24916 = state_24890__$1;
(statearr_24899_24916[(2)] = inst_24880);

(statearr_24899_24916[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24891 === (9))){
var state_24890__$1 = state_24890;
var statearr_24900_24917 = state_24890__$1;
(statearr_24900_24917[(2)] = null);

(statearr_24900_24917[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24891 === (5))){
var inst_24875 = cljs.core.async.close_BANG_.call(null,out);
var state_24890__$1 = state_24890;
var statearr_24901_24918 = state_24890__$1;
(statearr_24901_24918[(2)] = inst_24875);

(statearr_24901_24918[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24891 === (10))){
var inst_24883 = (state_24890[(2)]);
var state_24890__$1 = (function (){var statearr_24902 = state_24890;
(statearr_24902[(8)] = inst_24883);

return statearr_24902;
})();
var statearr_24903_24919 = state_24890__$1;
(statearr_24903_24919[(2)] = null);

(statearr_24903_24919[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24891 === (8))){
var inst_24872 = (state_24890[(7)]);
var state_24890__$1 = state_24890;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24890__$1,(11),out,inst_24872);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__23263__auto__ = null;
var cljs$core$async$state_machine__23263__auto____0 = (function (){
var statearr_24904 = [null,null,null,null,null,null,null,null,null];
(statearr_24904[(0)] = cljs$core$async$state_machine__23263__auto__);

(statearr_24904[(1)] = (1));

return statearr_24904;
});
var cljs$core$async$state_machine__23263__auto____1 = (function (state_24890){
while(true){
var ret_value__23264__auto__ = (function (){try{while(true){
var result__23265__auto__ = switch__23262__auto__.call(null,state_24890);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23265__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23265__auto__;
}
break;
}
}catch (e24905){if((e24905 instanceof Object)){
var ex__23266__auto__ = e24905;
var statearr_24906_24920 = state_24890;
(statearr_24906_24920[(5)] = ex__23266__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24890);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24905;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23264__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24921 = state_24890;
state_24890 = G__24921;
continue;
} else {
return ret_value__23264__auto__;
}
break;
}
});
cljs$core$async$state_machine__23263__auto__ = function(state_24890){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23263__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23263__auto____1.call(this,state_24890);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23263__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23263__auto____0;
cljs$core$async$state_machine__23263__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23263__auto____1;
return cljs$core$async$state_machine__23263__auto__;
})()
})();
var state__23359__auto__ = (function (){var statearr_24907 = f__23358__auto__.call(null);
(statearr_24907[(6)] = c__23357__auto___24909);

return statearr_24907;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23359__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__24923 = arguments.length;
switch (G__24923) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__23357__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__23358__auto__ = (function (){var switch__23262__auto__ = (function (state_24986){
var state_val_24987 = (state_24986[(1)]);
if((state_val_24987 === (7))){
var inst_24982 = (state_24986[(2)]);
var state_24986__$1 = state_24986;
var statearr_24988_25026 = state_24986__$1;
(statearr_24988_25026[(2)] = inst_24982);

(statearr_24988_25026[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24987 === (20))){
var inst_24952 = (state_24986[(7)]);
var inst_24963 = (state_24986[(2)]);
var inst_24964 = cljs.core.next.call(null,inst_24952);
var inst_24938 = inst_24964;
var inst_24939 = null;
var inst_24940 = (0);
var inst_24941 = (0);
var state_24986__$1 = (function (){var statearr_24989 = state_24986;
(statearr_24989[(8)] = inst_24963);

(statearr_24989[(9)] = inst_24939);

(statearr_24989[(10)] = inst_24940);

(statearr_24989[(11)] = inst_24941);

(statearr_24989[(12)] = inst_24938);

return statearr_24989;
})();
var statearr_24990_25027 = state_24986__$1;
(statearr_24990_25027[(2)] = null);

(statearr_24990_25027[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24987 === (1))){
var state_24986__$1 = state_24986;
var statearr_24991_25028 = state_24986__$1;
(statearr_24991_25028[(2)] = null);

(statearr_24991_25028[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24987 === (4))){
var inst_24927 = (state_24986[(13)]);
var inst_24927__$1 = (state_24986[(2)]);
var inst_24928 = (inst_24927__$1 == null);
var state_24986__$1 = (function (){var statearr_24992 = state_24986;
(statearr_24992[(13)] = inst_24927__$1);

return statearr_24992;
})();
if(cljs.core.truth_(inst_24928)){
var statearr_24993_25029 = state_24986__$1;
(statearr_24993_25029[(1)] = (5));

} else {
var statearr_24994_25030 = state_24986__$1;
(statearr_24994_25030[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24987 === (15))){
var state_24986__$1 = state_24986;
var statearr_24998_25031 = state_24986__$1;
(statearr_24998_25031[(2)] = null);

(statearr_24998_25031[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24987 === (21))){
var state_24986__$1 = state_24986;
var statearr_24999_25032 = state_24986__$1;
(statearr_24999_25032[(2)] = null);

(statearr_24999_25032[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24987 === (13))){
var inst_24939 = (state_24986[(9)]);
var inst_24940 = (state_24986[(10)]);
var inst_24941 = (state_24986[(11)]);
var inst_24938 = (state_24986[(12)]);
var inst_24948 = (state_24986[(2)]);
var inst_24949 = (inst_24941 + (1));
var tmp24995 = inst_24939;
var tmp24996 = inst_24940;
var tmp24997 = inst_24938;
var inst_24938__$1 = tmp24997;
var inst_24939__$1 = tmp24995;
var inst_24940__$1 = tmp24996;
var inst_24941__$1 = inst_24949;
var state_24986__$1 = (function (){var statearr_25000 = state_24986;
(statearr_25000[(9)] = inst_24939__$1);

(statearr_25000[(14)] = inst_24948);

(statearr_25000[(10)] = inst_24940__$1);

(statearr_25000[(11)] = inst_24941__$1);

(statearr_25000[(12)] = inst_24938__$1);

return statearr_25000;
})();
var statearr_25001_25033 = state_24986__$1;
(statearr_25001_25033[(2)] = null);

(statearr_25001_25033[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24987 === (22))){
var state_24986__$1 = state_24986;
var statearr_25002_25034 = state_24986__$1;
(statearr_25002_25034[(2)] = null);

(statearr_25002_25034[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24987 === (6))){
var inst_24927 = (state_24986[(13)]);
var inst_24936 = f.call(null,inst_24927);
var inst_24937 = cljs.core.seq.call(null,inst_24936);
var inst_24938 = inst_24937;
var inst_24939 = null;
var inst_24940 = (0);
var inst_24941 = (0);
var state_24986__$1 = (function (){var statearr_25003 = state_24986;
(statearr_25003[(9)] = inst_24939);

(statearr_25003[(10)] = inst_24940);

(statearr_25003[(11)] = inst_24941);

(statearr_25003[(12)] = inst_24938);

return statearr_25003;
})();
var statearr_25004_25035 = state_24986__$1;
(statearr_25004_25035[(2)] = null);

(statearr_25004_25035[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24987 === (17))){
var inst_24952 = (state_24986[(7)]);
var inst_24956 = cljs.core.chunk_first.call(null,inst_24952);
var inst_24957 = cljs.core.chunk_rest.call(null,inst_24952);
var inst_24958 = cljs.core.count.call(null,inst_24956);
var inst_24938 = inst_24957;
var inst_24939 = inst_24956;
var inst_24940 = inst_24958;
var inst_24941 = (0);
var state_24986__$1 = (function (){var statearr_25005 = state_24986;
(statearr_25005[(9)] = inst_24939);

(statearr_25005[(10)] = inst_24940);

(statearr_25005[(11)] = inst_24941);

(statearr_25005[(12)] = inst_24938);

return statearr_25005;
})();
var statearr_25006_25036 = state_24986__$1;
(statearr_25006_25036[(2)] = null);

(statearr_25006_25036[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24987 === (3))){
var inst_24984 = (state_24986[(2)]);
var state_24986__$1 = state_24986;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24986__$1,inst_24984);
} else {
if((state_val_24987 === (12))){
var inst_24972 = (state_24986[(2)]);
var state_24986__$1 = state_24986;
var statearr_25007_25037 = state_24986__$1;
(statearr_25007_25037[(2)] = inst_24972);

(statearr_25007_25037[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24987 === (2))){
var state_24986__$1 = state_24986;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24986__$1,(4),in$);
} else {
if((state_val_24987 === (23))){
var inst_24980 = (state_24986[(2)]);
var state_24986__$1 = state_24986;
var statearr_25008_25038 = state_24986__$1;
(statearr_25008_25038[(2)] = inst_24980);

(statearr_25008_25038[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24987 === (19))){
var inst_24967 = (state_24986[(2)]);
var state_24986__$1 = state_24986;
var statearr_25009_25039 = state_24986__$1;
(statearr_25009_25039[(2)] = inst_24967);

(statearr_25009_25039[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24987 === (11))){
var inst_24952 = (state_24986[(7)]);
var inst_24938 = (state_24986[(12)]);
var inst_24952__$1 = cljs.core.seq.call(null,inst_24938);
var state_24986__$1 = (function (){var statearr_25010 = state_24986;
(statearr_25010[(7)] = inst_24952__$1);

return statearr_25010;
})();
if(inst_24952__$1){
var statearr_25011_25040 = state_24986__$1;
(statearr_25011_25040[(1)] = (14));

} else {
var statearr_25012_25041 = state_24986__$1;
(statearr_25012_25041[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24987 === (9))){
var inst_24974 = (state_24986[(2)]);
var inst_24975 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_24986__$1 = (function (){var statearr_25013 = state_24986;
(statearr_25013[(15)] = inst_24974);

return statearr_25013;
})();
if(cljs.core.truth_(inst_24975)){
var statearr_25014_25042 = state_24986__$1;
(statearr_25014_25042[(1)] = (21));

} else {
var statearr_25015_25043 = state_24986__$1;
(statearr_25015_25043[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24987 === (5))){
var inst_24930 = cljs.core.async.close_BANG_.call(null,out);
var state_24986__$1 = state_24986;
var statearr_25016_25044 = state_24986__$1;
(statearr_25016_25044[(2)] = inst_24930);

(statearr_25016_25044[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24987 === (14))){
var inst_24952 = (state_24986[(7)]);
var inst_24954 = cljs.core.chunked_seq_QMARK_.call(null,inst_24952);
var state_24986__$1 = state_24986;
if(inst_24954){
var statearr_25017_25045 = state_24986__$1;
(statearr_25017_25045[(1)] = (17));

} else {
var statearr_25018_25046 = state_24986__$1;
(statearr_25018_25046[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24987 === (16))){
var inst_24970 = (state_24986[(2)]);
var state_24986__$1 = state_24986;
var statearr_25019_25047 = state_24986__$1;
(statearr_25019_25047[(2)] = inst_24970);

(statearr_25019_25047[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24987 === (10))){
var inst_24939 = (state_24986[(9)]);
var inst_24941 = (state_24986[(11)]);
var inst_24946 = cljs.core._nth.call(null,inst_24939,inst_24941);
var state_24986__$1 = state_24986;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24986__$1,(13),out,inst_24946);
} else {
if((state_val_24987 === (18))){
var inst_24952 = (state_24986[(7)]);
var inst_24961 = cljs.core.first.call(null,inst_24952);
var state_24986__$1 = state_24986;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24986__$1,(20),out,inst_24961);
} else {
if((state_val_24987 === (8))){
var inst_24940 = (state_24986[(10)]);
var inst_24941 = (state_24986[(11)]);
var inst_24943 = (inst_24941 < inst_24940);
var inst_24944 = inst_24943;
var state_24986__$1 = state_24986;
if(cljs.core.truth_(inst_24944)){
var statearr_25020_25048 = state_24986__$1;
(statearr_25020_25048[(1)] = (10));

} else {
var statearr_25021_25049 = state_24986__$1;
(statearr_25021_25049[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__23263__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__23263__auto____0 = (function (){
var statearr_25022 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25022[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__23263__auto__);

(statearr_25022[(1)] = (1));

return statearr_25022;
});
var cljs$core$async$mapcat_STAR__$_state_machine__23263__auto____1 = (function (state_24986){
while(true){
var ret_value__23264__auto__ = (function (){try{while(true){
var result__23265__auto__ = switch__23262__auto__.call(null,state_24986);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23265__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23265__auto__;
}
break;
}
}catch (e25023){if((e25023 instanceof Object)){
var ex__23266__auto__ = e25023;
var statearr_25024_25050 = state_24986;
(statearr_25024_25050[(5)] = ex__23266__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24986);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25023;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23264__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25051 = state_24986;
state_24986 = G__25051;
continue;
} else {
return ret_value__23264__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__23263__auto__ = function(state_24986){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__23263__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__23263__auto____1.call(this,state_24986);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__23263__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__23263__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__23263__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__23263__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__23263__auto__;
})()
})();
var state__23359__auto__ = (function (){var statearr_25025 = f__23358__auto__.call(null);
(statearr_25025[(6)] = c__23357__auto__);

return statearr_25025;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23359__auto__);
}));

return c__23357__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__25053 = arguments.length;
switch (G__25053) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__25056 = arguments.length;
switch (G__25056) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__25059 = arguments.length;
switch (G__25059) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__23357__auto___25106 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__23358__auto__ = (function (){var switch__23262__auto__ = (function (state_25083){
var state_val_25084 = (state_25083[(1)]);
if((state_val_25084 === (7))){
var inst_25078 = (state_25083[(2)]);
var state_25083__$1 = state_25083;
var statearr_25085_25107 = state_25083__$1;
(statearr_25085_25107[(2)] = inst_25078);

(statearr_25085_25107[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25084 === (1))){
var inst_25060 = null;
var state_25083__$1 = (function (){var statearr_25086 = state_25083;
(statearr_25086[(7)] = inst_25060);

return statearr_25086;
})();
var statearr_25087_25108 = state_25083__$1;
(statearr_25087_25108[(2)] = null);

(statearr_25087_25108[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25084 === (4))){
var inst_25063 = (state_25083[(8)]);
var inst_25063__$1 = (state_25083[(2)]);
var inst_25064 = (inst_25063__$1 == null);
var inst_25065 = cljs.core.not.call(null,inst_25064);
var state_25083__$1 = (function (){var statearr_25088 = state_25083;
(statearr_25088[(8)] = inst_25063__$1);

return statearr_25088;
})();
if(inst_25065){
var statearr_25089_25109 = state_25083__$1;
(statearr_25089_25109[(1)] = (5));

} else {
var statearr_25090_25110 = state_25083__$1;
(statearr_25090_25110[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25084 === (6))){
var state_25083__$1 = state_25083;
var statearr_25091_25111 = state_25083__$1;
(statearr_25091_25111[(2)] = null);

(statearr_25091_25111[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25084 === (3))){
var inst_25080 = (state_25083[(2)]);
var inst_25081 = cljs.core.async.close_BANG_.call(null,out);
var state_25083__$1 = (function (){var statearr_25092 = state_25083;
(statearr_25092[(9)] = inst_25080);

return statearr_25092;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25083__$1,inst_25081);
} else {
if((state_val_25084 === (2))){
var state_25083__$1 = state_25083;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25083__$1,(4),ch);
} else {
if((state_val_25084 === (11))){
var inst_25063 = (state_25083[(8)]);
var inst_25072 = (state_25083[(2)]);
var inst_25060 = inst_25063;
var state_25083__$1 = (function (){var statearr_25093 = state_25083;
(statearr_25093[(10)] = inst_25072);

(statearr_25093[(7)] = inst_25060);

return statearr_25093;
})();
var statearr_25094_25112 = state_25083__$1;
(statearr_25094_25112[(2)] = null);

(statearr_25094_25112[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25084 === (9))){
var inst_25063 = (state_25083[(8)]);
var state_25083__$1 = state_25083;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25083__$1,(11),out,inst_25063);
} else {
if((state_val_25084 === (5))){
var inst_25063 = (state_25083[(8)]);
var inst_25060 = (state_25083[(7)]);
var inst_25067 = cljs.core._EQ_.call(null,inst_25063,inst_25060);
var state_25083__$1 = state_25083;
if(inst_25067){
var statearr_25096_25113 = state_25083__$1;
(statearr_25096_25113[(1)] = (8));

} else {
var statearr_25097_25114 = state_25083__$1;
(statearr_25097_25114[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25084 === (10))){
var inst_25075 = (state_25083[(2)]);
var state_25083__$1 = state_25083;
var statearr_25098_25115 = state_25083__$1;
(statearr_25098_25115[(2)] = inst_25075);

(statearr_25098_25115[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25084 === (8))){
var inst_25060 = (state_25083[(7)]);
var tmp25095 = inst_25060;
var inst_25060__$1 = tmp25095;
var state_25083__$1 = (function (){var statearr_25099 = state_25083;
(statearr_25099[(7)] = inst_25060__$1);

return statearr_25099;
})();
var statearr_25100_25116 = state_25083__$1;
(statearr_25100_25116[(2)] = null);

(statearr_25100_25116[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__23263__auto__ = null;
var cljs$core$async$state_machine__23263__auto____0 = (function (){
var statearr_25101 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_25101[(0)] = cljs$core$async$state_machine__23263__auto__);

(statearr_25101[(1)] = (1));

return statearr_25101;
});
var cljs$core$async$state_machine__23263__auto____1 = (function (state_25083){
while(true){
var ret_value__23264__auto__ = (function (){try{while(true){
var result__23265__auto__ = switch__23262__auto__.call(null,state_25083);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23265__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23265__auto__;
}
break;
}
}catch (e25102){if((e25102 instanceof Object)){
var ex__23266__auto__ = e25102;
var statearr_25103_25117 = state_25083;
(statearr_25103_25117[(5)] = ex__23266__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25083);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25102;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23264__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25118 = state_25083;
state_25083 = G__25118;
continue;
} else {
return ret_value__23264__auto__;
}
break;
}
});
cljs$core$async$state_machine__23263__auto__ = function(state_25083){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23263__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23263__auto____1.call(this,state_25083);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23263__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23263__auto____0;
cljs$core$async$state_machine__23263__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23263__auto____1;
return cljs$core$async$state_machine__23263__auto__;
})()
})();
var state__23359__auto__ = (function (){var statearr_25104 = f__23358__auto__.call(null);
(statearr_25104[(6)] = c__23357__auto___25106);

return statearr_25104;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23359__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__25120 = arguments.length;
switch (G__25120) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__23357__auto___25186 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__23358__auto__ = (function (){var switch__23262__auto__ = (function (state_25158){
var state_val_25159 = (state_25158[(1)]);
if((state_val_25159 === (7))){
var inst_25154 = (state_25158[(2)]);
var state_25158__$1 = state_25158;
var statearr_25160_25187 = state_25158__$1;
(statearr_25160_25187[(2)] = inst_25154);

(statearr_25160_25187[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25159 === (1))){
var inst_25121 = (new Array(n));
var inst_25122 = inst_25121;
var inst_25123 = (0);
var state_25158__$1 = (function (){var statearr_25161 = state_25158;
(statearr_25161[(7)] = inst_25123);

(statearr_25161[(8)] = inst_25122);

return statearr_25161;
})();
var statearr_25162_25188 = state_25158__$1;
(statearr_25162_25188[(2)] = null);

(statearr_25162_25188[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25159 === (4))){
var inst_25126 = (state_25158[(9)]);
var inst_25126__$1 = (state_25158[(2)]);
var inst_25127 = (inst_25126__$1 == null);
var inst_25128 = cljs.core.not.call(null,inst_25127);
var state_25158__$1 = (function (){var statearr_25163 = state_25158;
(statearr_25163[(9)] = inst_25126__$1);

return statearr_25163;
})();
if(inst_25128){
var statearr_25164_25189 = state_25158__$1;
(statearr_25164_25189[(1)] = (5));

} else {
var statearr_25165_25190 = state_25158__$1;
(statearr_25165_25190[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25159 === (15))){
var inst_25148 = (state_25158[(2)]);
var state_25158__$1 = state_25158;
var statearr_25166_25191 = state_25158__$1;
(statearr_25166_25191[(2)] = inst_25148);

(statearr_25166_25191[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25159 === (13))){
var state_25158__$1 = state_25158;
var statearr_25167_25192 = state_25158__$1;
(statearr_25167_25192[(2)] = null);

(statearr_25167_25192[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25159 === (6))){
var inst_25123 = (state_25158[(7)]);
var inst_25144 = (inst_25123 > (0));
var state_25158__$1 = state_25158;
if(cljs.core.truth_(inst_25144)){
var statearr_25168_25193 = state_25158__$1;
(statearr_25168_25193[(1)] = (12));

} else {
var statearr_25169_25194 = state_25158__$1;
(statearr_25169_25194[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25159 === (3))){
var inst_25156 = (state_25158[(2)]);
var state_25158__$1 = state_25158;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25158__$1,inst_25156);
} else {
if((state_val_25159 === (12))){
var inst_25122 = (state_25158[(8)]);
var inst_25146 = cljs.core.vec.call(null,inst_25122);
var state_25158__$1 = state_25158;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25158__$1,(15),out,inst_25146);
} else {
if((state_val_25159 === (2))){
var state_25158__$1 = state_25158;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25158__$1,(4),ch);
} else {
if((state_val_25159 === (11))){
var inst_25138 = (state_25158[(2)]);
var inst_25139 = (new Array(n));
var inst_25122 = inst_25139;
var inst_25123 = (0);
var state_25158__$1 = (function (){var statearr_25170 = state_25158;
(statearr_25170[(10)] = inst_25138);

(statearr_25170[(7)] = inst_25123);

(statearr_25170[(8)] = inst_25122);

return statearr_25170;
})();
var statearr_25171_25195 = state_25158__$1;
(statearr_25171_25195[(2)] = null);

(statearr_25171_25195[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25159 === (9))){
var inst_25122 = (state_25158[(8)]);
var inst_25136 = cljs.core.vec.call(null,inst_25122);
var state_25158__$1 = state_25158;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25158__$1,(11),out,inst_25136);
} else {
if((state_val_25159 === (5))){
var inst_25131 = (state_25158[(11)]);
var inst_25126 = (state_25158[(9)]);
var inst_25123 = (state_25158[(7)]);
var inst_25122 = (state_25158[(8)]);
var inst_25130 = (inst_25122[inst_25123] = inst_25126);
var inst_25131__$1 = (inst_25123 + (1));
var inst_25132 = (inst_25131__$1 < n);
var state_25158__$1 = (function (){var statearr_25172 = state_25158;
(statearr_25172[(11)] = inst_25131__$1);

(statearr_25172[(12)] = inst_25130);

return statearr_25172;
})();
if(cljs.core.truth_(inst_25132)){
var statearr_25173_25196 = state_25158__$1;
(statearr_25173_25196[(1)] = (8));

} else {
var statearr_25174_25197 = state_25158__$1;
(statearr_25174_25197[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25159 === (14))){
var inst_25151 = (state_25158[(2)]);
var inst_25152 = cljs.core.async.close_BANG_.call(null,out);
var state_25158__$1 = (function (){var statearr_25176 = state_25158;
(statearr_25176[(13)] = inst_25151);

return statearr_25176;
})();
var statearr_25177_25198 = state_25158__$1;
(statearr_25177_25198[(2)] = inst_25152);

(statearr_25177_25198[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25159 === (10))){
var inst_25142 = (state_25158[(2)]);
var state_25158__$1 = state_25158;
var statearr_25178_25199 = state_25158__$1;
(statearr_25178_25199[(2)] = inst_25142);

(statearr_25178_25199[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25159 === (8))){
var inst_25131 = (state_25158[(11)]);
var inst_25122 = (state_25158[(8)]);
var tmp25175 = inst_25122;
var inst_25122__$1 = tmp25175;
var inst_25123 = inst_25131;
var state_25158__$1 = (function (){var statearr_25179 = state_25158;
(statearr_25179[(7)] = inst_25123);

(statearr_25179[(8)] = inst_25122__$1);

return statearr_25179;
})();
var statearr_25180_25200 = state_25158__$1;
(statearr_25180_25200[(2)] = null);

(statearr_25180_25200[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__23263__auto__ = null;
var cljs$core$async$state_machine__23263__auto____0 = (function (){
var statearr_25181 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25181[(0)] = cljs$core$async$state_machine__23263__auto__);

(statearr_25181[(1)] = (1));

return statearr_25181;
});
var cljs$core$async$state_machine__23263__auto____1 = (function (state_25158){
while(true){
var ret_value__23264__auto__ = (function (){try{while(true){
var result__23265__auto__ = switch__23262__auto__.call(null,state_25158);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23265__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23265__auto__;
}
break;
}
}catch (e25182){if((e25182 instanceof Object)){
var ex__23266__auto__ = e25182;
var statearr_25183_25201 = state_25158;
(statearr_25183_25201[(5)] = ex__23266__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25158);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25182;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23264__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25202 = state_25158;
state_25158 = G__25202;
continue;
} else {
return ret_value__23264__auto__;
}
break;
}
});
cljs$core$async$state_machine__23263__auto__ = function(state_25158){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23263__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23263__auto____1.call(this,state_25158);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23263__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23263__auto____0;
cljs$core$async$state_machine__23263__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23263__auto____1;
return cljs$core$async$state_machine__23263__auto__;
})()
})();
var state__23359__auto__ = (function (){var statearr_25184 = f__23358__auto__.call(null);
(statearr_25184[(6)] = c__23357__auto___25186);

return statearr_25184;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23359__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__25204 = arguments.length;
switch (G__25204) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__23357__auto___25274 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__23358__auto__ = (function (){var switch__23262__auto__ = (function (state_25246){
var state_val_25247 = (state_25246[(1)]);
if((state_val_25247 === (7))){
var inst_25242 = (state_25246[(2)]);
var state_25246__$1 = state_25246;
var statearr_25248_25275 = state_25246__$1;
(statearr_25248_25275[(2)] = inst_25242);

(statearr_25248_25275[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25247 === (1))){
var inst_25205 = [];
var inst_25206 = inst_25205;
var inst_25207 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_25246__$1 = (function (){var statearr_25249 = state_25246;
(statearr_25249[(7)] = inst_25207);

(statearr_25249[(8)] = inst_25206);

return statearr_25249;
})();
var statearr_25250_25276 = state_25246__$1;
(statearr_25250_25276[(2)] = null);

(statearr_25250_25276[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25247 === (4))){
var inst_25210 = (state_25246[(9)]);
var inst_25210__$1 = (state_25246[(2)]);
var inst_25211 = (inst_25210__$1 == null);
var inst_25212 = cljs.core.not.call(null,inst_25211);
var state_25246__$1 = (function (){var statearr_25251 = state_25246;
(statearr_25251[(9)] = inst_25210__$1);

return statearr_25251;
})();
if(inst_25212){
var statearr_25252_25277 = state_25246__$1;
(statearr_25252_25277[(1)] = (5));

} else {
var statearr_25253_25278 = state_25246__$1;
(statearr_25253_25278[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25247 === (15))){
var inst_25236 = (state_25246[(2)]);
var state_25246__$1 = state_25246;
var statearr_25254_25279 = state_25246__$1;
(statearr_25254_25279[(2)] = inst_25236);

(statearr_25254_25279[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25247 === (13))){
var state_25246__$1 = state_25246;
var statearr_25255_25280 = state_25246__$1;
(statearr_25255_25280[(2)] = null);

(statearr_25255_25280[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25247 === (6))){
var inst_25206 = (state_25246[(8)]);
var inst_25231 = inst_25206.length;
var inst_25232 = (inst_25231 > (0));
var state_25246__$1 = state_25246;
if(cljs.core.truth_(inst_25232)){
var statearr_25256_25281 = state_25246__$1;
(statearr_25256_25281[(1)] = (12));

} else {
var statearr_25257_25282 = state_25246__$1;
(statearr_25257_25282[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25247 === (3))){
var inst_25244 = (state_25246[(2)]);
var state_25246__$1 = state_25246;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25246__$1,inst_25244);
} else {
if((state_val_25247 === (12))){
var inst_25206 = (state_25246[(8)]);
var inst_25234 = cljs.core.vec.call(null,inst_25206);
var state_25246__$1 = state_25246;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25246__$1,(15),out,inst_25234);
} else {
if((state_val_25247 === (2))){
var state_25246__$1 = state_25246;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25246__$1,(4),ch);
} else {
if((state_val_25247 === (11))){
var inst_25210 = (state_25246[(9)]);
var inst_25214 = (state_25246[(10)]);
var inst_25224 = (state_25246[(2)]);
var inst_25225 = [];
var inst_25226 = inst_25225.push(inst_25210);
var inst_25206 = inst_25225;
var inst_25207 = inst_25214;
var state_25246__$1 = (function (){var statearr_25258 = state_25246;
(statearr_25258[(7)] = inst_25207);

(statearr_25258[(11)] = inst_25224);

(statearr_25258[(12)] = inst_25226);

(statearr_25258[(8)] = inst_25206);

return statearr_25258;
})();
var statearr_25259_25283 = state_25246__$1;
(statearr_25259_25283[(2)] = null);

(statearr_25259_25283[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25247 === (9))){
var inst_25206 = (state_25246[(8)]);
var inst_25222 = cljs.core.vec.call(null,inst_25206);
var state_25246__$1 = state_25246;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25246__$1,(11),out,inst_25222);
} else {
if((state_val_25247 === (5))){
var inst_25210 = (state_25246[(9)]);
var inst_25207 = (state_25246[(7)]);
var inst_25214 = (state_25246[(10)]);
var inst_25214__$1 = f.call(null,inst_25210);
var inst_25215 = cljs.core._EQ_.call(null,inst_25214__$1,inst_25207);
var inst_25216 = cljs.core.keyword_identical_QMARK_.call(null,inst_25207,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_25217 = ((inst_25215) || (inst_25216));
var state_25246__$1 = (function (){var statearr_25260 = state_25246;
(statearr_25260[(10)] = inst_25214__$1);

return statearr_25260;
})();
if(cljs.core.truth_(inst_25217)){
var statearr_25261_25284 = state_25246__$1;
(statearr_25261_25284[(1)] = (8));

} else {
var statearr_25262_25285 = state_25246__$1;
(statearr_25262_25285[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25247 === (14))){
var inst_25239 = (state_25246[(2)]);
var inst_25240 = cljs.core.async.close_BANG_.call(null,out);
var state_25246__$1 = (function (){var statearr_25264 = state_25246;
(statearr_25264[(13)] = inst_25239);

return statearr_25264;
})();
var statearr_25265_25286 = state_25246__$1;
(statearr_25265_25286[(2)] = inst_25240);

(statearr_25265_25286[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25247 === (10))){
var inst_25229 = (state_25246[(2)]);
var state_25246__$1 = state_25246;
var statearr_25266_25287 = state_25246__$1;
(statearr_25266_25287[(2)] = inst_25229);

(statearr_25266_25287[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25247 === (8))){
var inst_25210 = (state_25246[(9)]);
var inst_25214 = (state_25246[(10)]);
var inst_25206 = (state_25246[(8)]);
var inst_25219 = inst_25206.push(inst_25210);
var tmp25263 = inst_25206;
var inst_25206__$1 = tmp25263;
var inst_25207 = inst_25214;
var state_25246__$1 = (function (){var statearr_25267 = state_25246;
(statearr_25267[(7)] = inst_25207);

(statearr_25267[(14)] = inst_25219);

(statearr_25267[(8)] = inst_25206__$1);

return statearr_25267;
})();
var statearr_25268_25288 = state_25246__$1;
(statearr_25268_25288[(2)] = null);

(statearr_25268_25288[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__23263__auto__ = null;
var cljs$core$async$state_machine__23263__auto____0 = (function (){
var statearr_25269 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25269[(0)] = cljs$core$async$state_machine__23263__auto__);

(statearr_25269[(1)] = (1));

return statearr_25269;
});
var cljs$core$async$state_machine__23263__auto____1 = (function (state_25246){
while(true){
var ret_value__23264__auto__ = (function (){try{while(true){
var result__23265__auto__ = switch__23262__auto__.call(null,state_25246);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23265__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23265__auto__;
}
break;
}
}catch (e25270){if((e25270 instanceof Object)){
var ex__23266__auto__ = e25270;
var statearr_25271_25289 = state_25246;
(statearr_25271_25289[(5)] = ex__23266__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25246);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25270;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23264__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25290 = state_25246;
state_25246 = G__25290;
continue;
} else {
return ret_value__23264__auto__;
}
break;
}
});
cljs$core$async$state_machine__23263__auto__ = function(state_25246){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23263__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23263__auto____1.call(this,state_25246);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23263__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23263__auto____0;
cljs$core$async$state_machine__23263__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23263__auto____1;
return cljs$core$async$state_machine__23263__auto__;
})()
})();
var state__23359__auto__ = (function (){var statearr_25272 = f__23358__auto__.call(null);
(statearr_25272[(6)] = c__23357__auto___25274);

return statearr_25272;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23359__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=async.js.map?rel=1609259927829
