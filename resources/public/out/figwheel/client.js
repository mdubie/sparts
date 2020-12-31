// Compiled by ClojureScript 1.10.741 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('goog.userAgent.product');
goog.require('goog.object');
goog.require('cljs.reader');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.utils');
goog.require('figwheel.client.heads_up');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('cljs.repl');
figwheel.client._figwheel_version_ = "0.5.18";
figwheel.client.js_stringify = (((((typeof JSON !== 'undefined')) && ((!((JSON.stringify == null))))))?(function (x){
return ["#js ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(JSON.stringify(x,null," "))].join('');
}):(function (x){
try{return cljs.core.str.cljs$core$IFn$_invoke$arity$1(x);
}catch (e29069){if((e29069 instanceof Error)){
var e = e29069;
return "Error: Unable to stringify";
} else {
throw e29069;

}
}}));
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var G__29072 = arguments.length;
switch (G__29072) {
case 2:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2 = (function (stream,args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.mapv.call(null,(function (p1__29070_SHARP_){
if(typeof p1__29070_SHARP_ === 'string'){
return p1__29070_SHARP_;
} else {
return figwheel.client.js_stringify.call(null,p1__29070_SHARP_);
}
}),args)], null)], null));

return null;
}));

(figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1 = (function (args){
return figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);
}));

(figwheel.client.figwheel_repl_print.cljs$lang$maxFixedArity = 2);

figwheel.client.console_out_print = (function figwheel$client$console_out_print(args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.console_err_print = (function figwheel$client$console_err_print(args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.repl_out_print_fn = (function figwheel$client$repl_out_print_fn(var_args){
var args__4736__auto__ = [];
var len__4730__auto___29075 = arguments.length;
var i__4731__auto___29076 = (0);
while(true){
if((i__4731__auto___29076 < len__4730__auto___29075)){
args__4736__auto__.push((arguments[i__4731__auto___29076]));

var G__29077 = (i__4731__auto___29076 + (1));
i__4731__auto___29076 = G__29077;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_out_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);

return null;
}));

(figwheel.client.repl_out_print_fn.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq29074){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29074));
}));

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__4736__auto__ = [];
var len__4730__auto___29079 = arguments.length;
var i__4731__auto___29080 = (0);
while(true){
if((i__4731__auto___29080 < len__4730__auto___29079)){
args__4736__auto__.push((arguments[i__4731__auto___29080]));

var G__29081 = (i__4731__auto___29080 + (1));
i__4731__auto___29080 = G__29081;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_err_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"err","err",-2089457205),args);

return null;
}));

(figwheel.client.repl_err_print_fn.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq29078){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29078));
}));

figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
(cljs.core._STAR_print_newline_STAR_ = false);

cljs.core.set_print_fn_BANG_.call(null,figwheel.client.repl_out_print_fn);

cljs.core.set_print_err_fn_BANG_.call(null,figwheel.client.repl_err_print_fn);

return null;
});
figwheel.client.autoload_QMARK_ = (function figwheel$client$autoload_QMARK_(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),true);
});
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
var res = figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),"Toggle autoload deprecated! Use (figwheel.client/set-autoload! false)");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),["Figwheel autoloading ",(cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF")].join(''));

return res;
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
/**
 * Figwheel by default loads code changes as you work. Sometimes you
 *   just want to work on your code without the ramifications of
 *   autoloading and simply load your code piecemeal in the REPL. You can
 *   turn autoloading on and of with this method.
 * 
 *   (figwheel.client/set-autoload false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_autoload = (function figwheel$client$set_autoload(b){
if(((b === true) || (b === false))){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),b);
});
goog.exportSymbol('figwheel.client.set_autoload', figwheel.client.set_autoload);
figwheel.client.repl_pprint = (function figwheel$client$repl_pprint(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),true);
});
goog.exportSymbol('figwheel.client.repl_pprint', figwheel.client.repl_pprint);
/**
 * This method gives you the ability to turn the pretty printing of
 *   the REPL's return value on and off.
 * 
 *   (figwheel.client/set-repl-pprint false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_repl_pprint = (function figwheel$client$set_repl_pprint(b){
if(((b === true) || (b === false))){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),b);
});
goog.exportSymbol('figwheel.client.set_repl_pprint', figwheel.client.set_repl_pprint);
figwheel.client.repl_result_pr_str = (function figwheel$client$repl_result_pr_str(v){
if(cljs.core.truth_(figwheel.client.repl_pprint.call(null))){
return figwheel.client.utils.pprint_to_string.call(null,v);
} else {
return cljs.core.pr_str.call(null,v);
}
});
goog.exportSymbol('figwheel.client.repl_result_pr_str', figwheel.client.repl_result_pr_str);
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel.client.get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__29082){
var map__29083 = p__29082;
var map__29083__$1 = (((((!((map__29083 == null))))?(((((map__29083.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29083.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29083):map__29083);
var message = cljs.core.get.call(null,map__29083__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__29083__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)," : ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__4120__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
if(cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return false;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return ((cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts))));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__23357__auto___29162 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__23358__auto__ = (function (){var switch__23262__auto__ = (function (state_29134){
var state_val_29135 = (state_29134[(1)]);
if((state_val_29135 === (7))){
var inst_29130 = (state_29134[(2)]);
var state_29134__$1 = state_29134;
var statearr_29136_29163 = state_29134__$1;
(statearr_29136_29163[(2)] = inst_29130);

(statearr_29136_29163[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29135 === (1))){
var state_29134__$1 = state_29134;
var statearr_29137_29164 = state_29134__$1;
(statearr_29137_29164[(2)] = null);

(statearr_29137_29164[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29135 === (4))){
var inst_29087 = (state_29134[(7)]);
var inst_29087__$1 = (state_29134[(2)]);
var state_29134__$1 = (function (){var statearr_29138 = state_29134;
(statearr_29138[(7)] = inst_29087__$1);

return statearr_29138;
})();
if(cljs.core.truth_(inst_29087__$1)){
var statearr_29139_29165 = state_29134__$1;
(statearr_29139_29165[(1)] = (5));

} else {
var statearr_29140_29166 = state_29134__$1;
(statearr_29140_29166[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29135 === (15))){
var inst_29094 = (state_29134[(8)]);
var inst_29109 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_29094);
var inst_29110 = cljs.core.first.call(null,inst_29109);
var inst_29111 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_29110);
var inst_29112 = ["Figwheel: Not loading code with warnings - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_29111)].join('');
var inst_29113 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_29112);
var state_29134__$1 = state_29134;
var statearr_29141_29167 = state_29134__$1;
(statearr_29141_29167[(2)] = inst_29113);

(statearr_29141_29167[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29135 === (13))){
var inst_29118 = (state_29134[(2)]);
var state_29134__$1 = state_29134;
var statearr_29142_29168 = state_29134__$1;
(statearr_29142_29168[(2)] = inst_29118);

(statearr_29142_29168[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29135 === (6))){
var state_29134__$1 = state_29134;
var statearr_29143_29169 = state_29134__$1;
(statearr_29143_29169[(2)] = null);

(statearr_29143_29169[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29135 === (17))){
var inst_29116 = (state_29134[(2)]);
var state_29134__$1 = state_29134;
var statearr_29144_29170 = state_29134__$1;
(statearr_29144_29170[(2)] = inst_29116);

(statearr_29144_29170[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29135 === (3))){
var inst_29132 = (state_29134[(2)]);
var state_29134__$1 = state_29134;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29134__$1,inst_29132);
} else {
if((state_val_29135 === (12))){
var inst_29093 = (state_29134[(9)]);
var inst_29107 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_29093,opts);
var state_29134__$1 = state_29134;
if(inst_29107){
var statearr_29145_29171 = state_29134__$1;
(statearr_29145_29171[(1)] = (15));

} else {
var statearr_29146_29172 = state_29134__$1;
(statearr_29146_29172[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29135 === (2))){
var state_29134__$1 = state_29134;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29134__$1,(4),ch);
} else {
if((state_val_29135 === (11))){
var inst_29094 = (state_29134[(8)]);
var inst_29099 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_29100 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_29094);
var inst_29101 = cljs.core.async.timeout.call(null,(1000));
var inst_29102 = [inst_29100,inst_29101];
var inst_29103 = (new cljs.core.PersistentVector(null,2,(5),inst_29099,inst_29102,null));
var state_29134__$1 = state_29134;
return cljs.core.async.ioc_alts_BANG_.call(null,state_29134__$1,(14),inst_29103);
} else {
if((state_val_29135 === (9))){
var inst_29094 = (state_29134[(8)]);
var inst_29120 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_29121 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_29094);
var inst_29122 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_29121);
var inst_29123 = ["Not loading: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_29122)].join('');
var inst_29124 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_29123);
var state_29134__$1 = (function (){var statearr_29147 = state_29134;
(statearr_29147[(10)] = inst_29120);

return statearr_29147;
})();
var statearr_29148_29173 = state_29134__$1;
(statearr_29148_29173[(2)] = inst_29124);

(statearr_29148_29173[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29135 === (5))){
var inst_29087 = (state_29134[(7)]);
var inst_29089 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_29090 = (new cljs.core.PersistentArrayMap(null,2,inst_29089,null));
var inst_29091 = (new cljs.core.PersistentHashSet(null,inst_29090,null));
var inst_29092 = figwheel.client.focus_msgs.call(null,inst_29091,inst_29087);
var inst_29093 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_29092);
var inst_29094 = cljs.core.first.call(null,inst_29092);
var inst_29095 = figwheel.client.autoload_QMARK_.call(null);
var state_29134__$1 = (function (){var statearr_29149 = state_29134;
(statearr_29149[(8)] = inst_29094);

(statearr_29149[(9)] = inst_29093);

return statearr_29149;
})();
if(cljs.core.truth_(inst_29095)){
var statearr_29150_29174 = state_29134__$1;
(statearr_29150_29174[(1)] = (8));

} else {
var statearr_29151_29175 = state_29134__$1;
(statearr_29151_29175[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29135 === (14))){
var inst_29105 = (state_29134[(2)]);
var state_29134__$1 = state_29134;
var statearr_29152_29176 = state_29134__$1;
(statearr_29152_29176[(2)] = inst_29105);

(statearr_29152_29176[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29135 === (16))){
var state_29134__$1 = state_29134;
var statearr_29153_29177 = state_29134__$1;
(statearr_29153_29177[(2)] = null);

(statearr_29153_29177[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29135 === (10))){
var inst_29126 = (state_29134[(2)]);
var state_29134__$1 = (function (){var statearr_29154 = state_29134;
(statearr_29154[(11)] = inst_29126);

return statearr_29154;
})();
var statearr_29155_29178 = state_29134__$1;
(statearr_29155_29178[(2)] = null);

(statearr_29155_29178[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29135 === (8))){
var inst_29093 = (state_29134[(9)]);
var inst_29097 = figwheel.client.reload_file_state_QMARK_.call(null,inst_29093,opts);
var state_29134__$1 = state_29134;
if(cljs.core.truth_(inst_29097)){
var statearr_29156_29179 = state_29134__$1;
(statearr_29156_29179[(1)] = (11));

} else {
var statearr_29157_29180 = state_29134__$1;
(statearr_29157_29180[(1)] = (12));

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
});
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__23263__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__23263__auto____0 = (function (){
var statearr_29158 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29158[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__23263__auto__);

(statearr_29158[(1)] = (1));

return statearr_29158;
});
var figwheel$client$file_reloader_plugin_$_state_machine__23263__auto____1 = (function (state_29134){
while(true){
var ret_value__23264__auto__ = (function (){try{while(true){
var result__23265__auto__ = switch__23262__auto__.call(null,state_29134);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23265__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23265__auto__;
}
break;
}
}catch (e29159){if((e29159 instanceof Object)){
var ex__23266__auto__ = e29159;
var statearr_29160_29181 = state_29134;
(statearr_29160_29181[(5)] = ex__23266__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29134);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29159;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23264__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29182 = state_29134;
state_29134 = G__29182;
continue;
} else {
return ret_value__23264__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__23263__auto__ = function(state_29134){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__23263__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__23263__auto____1.call(this,state_29134);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__23263__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__23263__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__23263__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__23263__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__23263__auto__;
})()
})();
var state__23359__auto__ = (function (){var statearr_29161 = f__23358__auto__.call(null);
(statearr_29161[(6)] = c__23357__auto___29162);

return statearr_29161;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23359__auto__);
}));


return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__29183_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__29183_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(figwheel.client.utils.node_env_QMARK_.call(null)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(goog.userAgent.product.SAFARI){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(goog.userAgent.product.CHROME){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(goog.userAgent.product.FIREFOX){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(goog.userAgent.product.IE){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});
var base_path_29189 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var sb = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__29185 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__29186 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__29187 = true;
var _STAR_print_fn_STAR__temp_val__29188 = (function (x){
return sb.append(x);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__29187);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__29188);

try{var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
var result_value__$1 = (((!(typeof result_value === 'string')))?cljs.core.pr_str.call(null,result_value):result_value);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"out","out",-910545517),cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value__$1], null));
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__29186);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__29185);
}}catch (e29184){if((e29184 instanceof Error)){
var e = e29184;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_29189], null));
} else {
var e = e29184;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return (cljs.user = ({}));
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__29190){
var map__29191 = p__29190;
var map__29191__$1 = (((((!((map__29191 == null))))?(((((map__29191.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29191.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29191):map__29191);
var opts = map__29191__$1;
var build_id = cljs.core.get.call(null,map__29191__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return (function (p__29193){
var vec__29194 = p__29193;
var seq__29195 = cljs.core.seq.call(null,vec__29194);
var first__29196 = cljs.core.first.call(null,seq__29195);
var seq__29195__$1 = cljs.core.next.call(null,seq__29195);
var map__29197 = first__29196;
var map__29197__$1 = (((((!((map__29197 == null))))?(((((map__29197.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29197.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29197):map__29197);
var msg = map__29197__$1;
var msg_name = cljs.core.get.call(null,map__29197__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__29195__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,(function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
}));
} else {
return null;
}
});
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__29199){
var vec__29200 = p__29199;
var seq__29201 = cljs.core.seq.call(null,vec__29200);
var first__29202 = cljs.core.first.call(null,seq__29201);
var seq__29201__$1 = cljs.core.next.call(null,seq__29201);
var map__29203 = first__29202;
var map__29203__$1 = (((((!((map__29203 == null))))?(((((map__29203.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29203.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29203):map__29203);
var msg = map__29203__$1;
var msg_name = cljs.core.get.call(null,map__29203__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__29201__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__29205){
var map__29206 = p__29205;
var map__29206__$1 = (((((!((map__29206 == null))))?(((((map__29206.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29206.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29206):map__29206);
var on_compile_warning = cljs.core.get.call(null,map__29206__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__29206__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return (function (p__29208){
var vec__29209 = p__29208;
var seq__29210 = cljs.core.seq.call(null,vec__29209);
var first__29211 = cljs.core.first.call(null,seq__29210);
var seq__29210__$1 = cljs.core.next.call(null,seq__29210);
var map__29212 = first__29211;
var map__29212__$1 = (((((!((map__29212 == null))))?(((((map__29212.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29212.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29212):map__29212);
var msg = map__29212__$1;
var msg_name = cljs.core.get.call(null,map__29212__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__29210__$1;
var pred__29214 = cljs.core._EQ_;
var expr__29215 = msg_name;
if(cljs.core.truth_(pred__29214.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__29215))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__29214.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__29215))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
});
figwheel.client.auto_jump_to_error = (function figwheel$client$auto_jump_to_error(opts,error){
if(cljs.core.truth_(new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920).cljs$core$IFn$_invoke$arity$1(opts))){
return figwheel.client.heads_up.auto_notify_source_file_line.call(null,error);
} else {
return null;
}
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__23357__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__23358__auto__ = (function (){var switch__23262__auto__ = (function (state_29304){
var state_val_29305 = (state_29304[(1)]);
if((state_val_29305 === (7))){
var inst_29224 = (state_29304[(2)]);
var state_29304__$1 = state_29304;
if(cljs.core.truth_(inst_29224)){
var statearr_29306_29353 = state_29304__$1;
(statearr_29306_29353[(1)] = (8));

} else {
var statearr_29307_29354 = state_29304__$1;
(statearr_29307_29354[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29305 === (20))){
var inst_29298 = (state_29304[(2)]);
var state_29304__$1 = state_29304;
var statearr_29308_29355 = state_29304__$1;
(statearr_29308_29355[(2)] = inst_29298);

(statearr_29308_29355[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29305 === (27))){
var inst_29294 = (state_29304[(2)]);
var state_29304__$1 = state_29304;
var statearr_29309_29356 = state_29304__$1;
(statearr_29309_29356[(2)] = inst_29294);

(statearr_29309_29356[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29305 === (1))){
var inst_29217 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_29304__$1 = state_29304;
if(cljs.core.truth_(inst_29217)){
var statearr_29310_29357 = state_29304__$1;
(statearr_29310_29357[(1)] = (2));

} else {
var statearr_29311_29358 = state_29304__$1;
(statearr_29311_29358[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29305 === (24))){
var inst_29296 = (state_29304[(2)]);
var state_29304__$1 = state_29304;
var statearr_29312_29359 = state_29304__$1;
(statearr_29312_29359[(2)] = inst_29296);

(statearr_29312_29359[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29305 === (4))){
var inst_29302 = (state_29304[(2)]);
var state_29304__$1 = state_29304;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29304__$1,inst_29302);
} else {
if((state_val_29305 === (15))){
var inst_29300 = (state_29304[(2)]);
var state_29304__$1 = state_29304;
var statearr_29313_29360 = state_29304__$1;
(statearr_29313_29360[(2)] = inst_29300);

(statearr_29313_29360[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29305 === (21))){
var inst_29253 = (state_29304[(2)]);
var inst_29254 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_29255 = figwheel.client.auto_jump_to_error.call(null,opts,inst_29254);
var state_29304__$1 = (function (){var statearr_29314 = state_29304;
(statearr_29314[(7)] = inst_29253);

return statearr_29314;
})();
var statearr_29315_29361 = state_29304__$1;
(statearr_29315_29361[(2)] = inst_29255);

(statearr_29315_29361[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29305 === (31))){
var inst_29283 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_29304__$1 = state_29304;
if(inst_29283){
var statearr_29316_29362 = state_29304__$1;
(statearr_29316_29362[(1)] = (34));

} else {
var statearr_29317_29363 = state_29304__$1;
(statearr_29317_29363[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29305 === (32))){
var inst_29292 = (state_29304[(2)]);
var state_29304__$1 = state_29304;
var statearr_29318_29364 = state_29304__$1;
(statearr_29318_29364[(2)] = inst_29292);

(statearr_29318_29364[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29305 === (33))){
var inst_29279 = (state_29304[(2)]);
var inst_29280 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_29281 = figwheel.client.auto_jump_to_error.call(null,opts,inst_29280);
var state_29304__$1 = (function (){var statearr_29319 = state_29304;
(statearr_29319[(8)] = inst_29279);

return statearr_29319;
})();
var statearr_29320_29365 = state_29304__$1;
(statearr_29320_29365[(2)] = inst_29281);

(statearr_29320_29365[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29305 === (13))){
var inst_29238 = figwheel.client.heads_up.clear.call(null);
var state_29304__$1 = state_29304;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29304__$1,(16),inst_29238);
} else {
if((state_val_29305 === (22))){
var inst_29259 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_29260 = figwheel.client.heads_up.append_warning_message.call(null,inst_29259);
var state_29304__$1 = state_29304;
var statearr_29321_29366 = state_29304__$1;
(statearr_29321_29366[(2)] = inst_29260);

(statearr_29321_29366[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29305 === (36))){
var inst_29290 = (state_29304[(2)]);
var state_29304__$1 = state_29304;
var statearr_29322_29367 = state_29304__$1;
(statearr_29322_29367[(2)] = inst_29290);

(statearr_29322_29367[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29305 === (29))){
var inst_29270 = (state_29304[(2)]);
var inst_29271 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_29272 = figwheel.client.auto_jump_to_error.call(null,opts,inst_29271);
var state_29304__$1 = (function (){var statearr_29323 = state_29304;
(statearr_29323[(9)] = inst_29270);

return statearr_29323;
})();
var statearr_29324_29368 = state_29304__$1;
(statearr_29324_29368[(2)] = inst_29272);

(statearr_29324_29368[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29305 === (6))){
var inst_29219 = (state_29304[(10)]);
var state_29304__$1 = state_29304;
var statearr_29325_29369 = state_29304__$1;
(statearr_29325_29369[(2)] = inst_29219);

(statearr_29325_29369[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29305 === (28))){
var inst_29266 = (state_29304[(2)]);
var inst_29267 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_29268 = figwheel.client.heads_up.display_warning.call(null,inst_29267);
var state_29304__$1 = (function (){var statearr_29326 = state_29304;
(statearr_29326[(11)] = inst_29266);

return statearr_29326;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29304__$1,(29),inst_29268);
} else {
if((state_val_29305 === (25))){
var inst_29264 = figwheel.client.heads_up.clear.call(null);
var state_29304__$1 = state_29304;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29304__$1,(28),inst_29264);
} else {
if((state_val_29305 === (34))){
var inst_29285 = figwheel.client.heads_up.flash_loaded.call(null);
var state_29304__$1 = state_29304;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29304__$1,(37),inst_29285);
} else {
if((state_val_29305 === (17))){
var inst_29244 = (state_29304[(2)]);
var inst_29245 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_29246 = figwheel.client.auto_jump_to_error.call(null,opts,inst_29245);
var state_29304__$1 = (function (){var statearr_29327 = state_29304;
(statearr_29327[(12)] = inst_29244);

return statearr_29327;
})();
var statearr_29328_29370 = state_29304__$1;
(statearr_29328_29370[(2)] = inst_29246);

(statearr_29328_29370[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29305 === (3))){
var inst_29236 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_29304__$1 = state_29304;
if(inst_29236){
var statearr_29329_29371 = state_29304__$1;
(statearr_29329_29371[(1)] = (13));

} else {
var statearr_29330_29372 = state_29304__$1;
(statearr_29330_29372[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29305 === (12))){
var inst_29232 = (state_29304[(2)]);
var state_29304__$1 = state_29304;
var statearr_29331_29373 = state_29304__$1;
(statearr_29331_29373[(2)] = inst_29232);

(statearr_29331_29373[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29305 === (2))){
var inst_29219 = (state_29304[(10)]);
var inst_29219__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_29304__$1 = (function (){var statearr_29332 = state_29304;
(statearr_29332[(10)] = inst_29219__$1);

return statearr_29332;
})();
if(cljs.core.truth_(inst_29219__$1)){
var statearr_29333_29374 = state_29304__$1;
(statearr_29333_29374[(1)] = (5));

} else {
var statearr_29334_29375 = state_29304__$1;
(statearr_29334_29375[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29305 === (23))){
var inst_29262 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_29304__$1 = state_29304;
if(inst_29262){
var statearr_29335_29376 = state_29304__$1;
(statearr_29335_29376[(1)] = (25));

} else {
var statearr_29336_29377 = state_29304__$1;
(statearr_29336_29377[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29305 === (35))){
var state_29304__$1 = state_29304;
var statearr_29337_29378 = state_29304__$1;
(statearr_29337_29378[(2)] = null);

(statearr_29337_29378[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29305 === (19))){
var inst_29257 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_29304__$1 = state_29304;
if(inst_29257){
var statearr_29338_29379 = state_29304__$1;
(statearr_29338_29379[(1)] = (22));

} else {
var statearr_29339_29380 = state_29304__$1;
(statearr_29339_29380[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29305 === (11))){
var inst_29228 = (state_29304[(2)]);
var state_29304__$1 = state_29304;
var statearr_29340_29381 = state_29304__$1;
(statearr_29340_29381[(2)] = inst_29228);

(statearr_29340_29381[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29305 === (9))){
var inst_29230 = figwheel.client.heads_up.clear.call(null);
var state_29304__$1 = state_29304;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29304__$1,(12),inst_29230);
} else {
if((state_val_29305 === (5))){
var inst_29221 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_29304__$1 = state_29304;
var statearr_29341_29382 = state_29304__$1;
(statearr_29341_29382[(2)] = inst_29221);

(statearr_29341_29382[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29305 === (14))){
var inst_29248 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_29304__$1 = state_29304;
if(inst_29248){
var statearr_29342_29383 = state_29304__$1;
(statearr_29342_29383[(1)] = (18));

} else {
var statearr_29343_29384 = state_29304__$1;
(statearr_29343_29384[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29305 === (26))){
var inst_29274 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_29304__$1 = state_29304;
if(inst_29274){
var statearr_29344_29385 = state_29304__$1;
(statearr_29344_29385[(1)] = (30));

} else {
var statearr_29345_29386 = state_29304__$1;
(statearr_29345_29386[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29305 === (16))){
var inst_29240 = (state_29304[(2)]);
var inst_29241 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_29242 = figwheel.client.heads_up.display_exception.call(null,inst_29241);
var state_29304__$1 = (function (){var statearr_29346 = state_29304;
(statearr_29346[(13)] = inst_29240);

return statearr_29346;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29304__$1,(17),inst_29242);
} else {
if((state_val_29305 === (30))){
var inst_29276 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_29277 = figwheel.client.heads_up.display_warning.call(null,inst_29276);
var state_29304__$1 = state_29304;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29304__$1,(33),inst_29277);
} else {
if((state_val_29305 === (10))){
var inst_29234 = (state_29304[(2)]);
var state_29304__$1 = state_29304;
var statearr_29347_29387 = state_29304__$1;
(statearr_29347_29387[(2)] = inst_29234);

(statearr_29347_29387[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29305 === (18))){
var inst_29250 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_29251 = figwheel.client.heads_up.display_exception.call(null,inst_29250);
var state_29304__$1 = state_29304;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29304__$1,(21),inst_29251);
} else {
if((state_val_29305 === (37))){
var inst_29287 = (state_29304[(2)]);
var state_29304__$1 = state_29304;
var statearr_29348_29388 = state_29304__$1;
(statearr_29348_29388[(2)] = inst_29287);

(statearr_29348_29388[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29305 === (8))){
var inst_29226 = figwheel.client.heads_up.flash_loaded.call(null);
var state_29304__$1 = state_29304;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29304__$1,(11),inst_29226);
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
});
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23263__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23263__auto____0 = (function (){
var statearr_29349 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29349[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23263__auto__);

(statearr_29349[(1)] = (1));

return statearr_29349;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23263__auto____1 = (function (state_29304){
while(true){
var ret_value__23264__auto__ = (function (){try{while(true){
var result__23265__auto__ = switch__23262__auto__.call(null,state_29304);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23265__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23265__auto__;
}
break;
}
}catch (e29350){if((e29350 instanceof Object)){
var ex__23266__auto__ = e29350;
var statearr_29351_29389 = state_29304;
(statearr_29351_29389[(5)] = ex__23266__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29304);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29350;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23264__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29390 = state_29304;
state_29304 = G__29390;
continue;
} else {
return ret_value__23264__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23263__auto__ = function(state_29304){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23263__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23263__auto____1.call(this,state_29304);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23263__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23263__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23263__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23263__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23263__auto__;
})()
})();
var state__23359__auto__ = (function (){var statearr_29352 = f__23358__auto__.call(null);
(statearr_29352[(6)] = c__23357__auto__);

return statearr_29352;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23359__auto__);
}));

return c__23357__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__23357__auto___29419 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__23358__auto__ = (function (){var switch__23262__auto__ = (function (state_29405){
var state_val_29406 = (state_29405[(1)]);
if((state_val_29406 === (1))){
var state_29405__$1 = state_29405;
var statearr_29407_29420 = state_29405__$1;
(statearr_29407_29420[(2)] = null);

(statearr_29407_29420[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29406 === (2))){
var state_29405__$1 = state_29405;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29405__$1,(4),ch);
} else {
if((state_val_29406 === (3))){
var inst_29403 = (state_29405[(2)]);
var state_29405__$1 = state_29405;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29405__$1,inst_29403);
} else {
if((state_val_29406 === (4))){
var inst_29393 = (state_29405[(7)]);
var inst_29393__$1 = (state_29405[(2)]);
var state_29405__$1 = (function (){var statearr_29408 = state_29405;
(statearr_29408[(7)] = inst_29393__$1);

return statearr_29408;
})();
if(cljs.core.truth_(inst_29393__$1)){
var statearr_29409_29421 = state_29405__$1;
(statearr_29409_29421[(1)] = (5));

} else {
var statearr_29410_29422 = state_29405__$1;
(statearr_29410_29422[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29406 === (5))){
var inst_29393 = (state_29405[(7)]);
var inst_29395 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_29393);
var state_29405__$1 = state_29405;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29405__$1,(8),inst_29395);
} else {
if((state_val_29406 === (6))){
var state_29405__$1 = state_29405;
var statearr_29411_29423 = state_29405__$1;
(statearr_29411_29423[(2)] = null);

(statearr_29411_29423[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29406 === (7))){
var inst_29401 = (state_29405[(2)]);
var state_29405__$1 = state_29405;
var statearr_29412_29424 = state_29405__$1;
(statearr_29412_29424[(2)] = inst_29401);

(statearr_29412_29424[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29406 === (8))){
var inst_29397 = (state_29405[(2)]);
var state_29405__$1 = (function (){var statearr_29413 = state_29405;
(statearr_29413[(8)] = inst_29397);

return statearr_29413;
})();
var statearr_29414_29425 = state_29405__$1;
(statearr_29414_29425[(2)] = null);

(statearr_29414_29425[(1)] = (2));


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
});
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__23263__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__23263__auto____0 = (function (){
var statearr_29415 = [null,null,null,null,null,null,null,null,null];
(statearr_29415[(0)] = figwheel$client$heads_up_plugin_$_state_machine__23263__auto__);

(statearr_29415[(1)] = (1));

return statearr_29415;
});
var figwheel$client$heads_up_plugin_$_state_machine__23263__auto____1 = (function (state_29405){
while(true){
var ret_value__23264__auto__ = (function (){try{while(true){
var result__23265__auto__ = switch__23262__auto__.call(null,state_29405);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23265__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23265__auto__;
}
break;
}
}catch (e29416){if((e29416 instanceof Object)){
var ex__23266__auto__ = e29416;
var statearr_29417_29426 = state_29405;
(statearr_29417_29426[(5)] = ex__23266__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29405);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29416;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23264__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29427 = state_29405;
state_29405 = G__29427;
continue;
} else {
return ret_value__23264__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__23263__auto__ = function(state_29405){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__23263__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__23263__auto____1.call(this,state_29405);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__23263__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__23263__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__23263__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__23263__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__23263__auto__;
})()
})();
var state__23359__auto__ = (function (){var statearr_29418 = f__23358__auto__.call(null);
(statearr_29418[(6)] = c__23357__auto___29419);

return statearr_29418;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23359__auto__);
}));


figwheel.client.heads_up.ensure_container.call(null);

return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__23357__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__23358__auto__ = (function (){var switch__23262__auto__ = (function (state_29433){
var state_val_29434 = (state_29433[(1)]);
if((state_val_29434 === (1))){
var inst_29428 = cljs.core.async.timeout.call(null,(3000));
var state_29433__$1 = state_29433;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29433__$1,(2),inst_29428);
} else {
if((state_val_29434 === (2))){
var inst_29430 = (state_29433[(2)]);
var inst_29431 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_29433__$1 = (function (){var statearr_29435 = state_29433;
(statearr_29435[(7)] = inst_29430);

return statearr_29435;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29433__$1,inst_29431);
} else {
return null;
}
}
});
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__23263__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__23263__auto____0 = (function (){
var statearr_29436 = [null,null,null,null,null,null,null,null];
(statearr_29436[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__23263__auto__);

(statearr_29436[(1)] = (1));

return statearr_29436;
});
var figwheel$client$enforce_project_plugin_$_state_machine__23263__auto____1 = (function (state_29433){
while(true){
var ret_value__23264__auto__ = (function (){try{while(true){
var result__23265__auto__ = switch__23262__auto__.call(null,state_29433);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23265__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23265__auto__;
}
break;
}
}catch (e29437){if((e29437 instanceof Object)){
var ex__23266__auto__ = e29437;
var statearr_29438_29440 = state_29433;
(statearr_29438_29440[(5)] = ex__23266__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29433);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29437;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23264__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29441 = state_29433;
state_29433 = G__29441;
continue;
} else {
return ret_value__23264__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__23263__auto__ = function(state_29433){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__23263__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__23263__auto____1.call(this,state_29433);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__23263__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__23263__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__23263__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__23263__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__23263__auto__;
})()
})();
var state__23359__auto__ = (function (){var statearr_29439 = f__23358__auto__.call(null);
(statearr_29439[(6)] = c__23357__auto__);

return statearr_29439;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23359__auto__);
}));

return c__23357__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.enforce_figwheel_version_plugin = (function figwheel$client$enforce_figwheel_version_plugin(opts){
return (function (msg_hist){
var temp__5735__auto__ = new cljs.core.Keyword(null,"figwheel-version","figwheel-version",1409553832).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,msg_hist));
if(cljs.core.truth_(temp__5735__auto__)){
var figwheel_version = temp__5735__auto__;
if(cljs.core.not_EQ_.call(null,figwheel_version,figwheel.client._figwheel_version_)){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different version of Figwheel.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__23357__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__23358__auto__ = (function (){var switch__23262__auto__ = (function (state_29448){
var state_val_29449 = (state_29448[(1)]);
if((state_val_29449 === (1))){
var inst_29442 = cljs.core.async.timeout.call(null,(2000));
var state_29448__$1 = state_29448;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29448__$1,(2),inst_29442);
} else {
if((state_val_29449 === (2))){
var inst_29444 = (state_29448[(2)]);
var inst_29445 = ["Figwheel Client Version <strong>",figwheel.client._figwheel_version_,"</strong> is not equal to ","Figwheel Sidecar Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel_version),"</strong>",".  Shutting down Websocket Connection!","<h4>To fix try:</h4>","<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>","<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>","<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>"].join('');
var inst_29446 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_29445);
var state_29448__$1 = (function (){var statearr_29450 = state_29448;
(statearr_29450[(7)] = inst_29444);

return statearr_29450;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29448__$1,inst_29446);
} else {
return null;
}
}
});
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__23263__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__23263__auto____0 = (function (){
var statearr_29451 = [null,null,null,null,null,null,null,null];
(statearr_29451[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__23263__auto__);

(statearr_29451[(1)] = (1));

return statearr_29451;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__23263__auto____1 = (function (state_29448){
while(true){
var ret_value__23264__auto__ = (function (){try{while(true){
var result__23265__auto__ = switch__23262__auto__.call(null,state_29448);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23265__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23265__auto__;
}
break;
}
}catch (e29452){if((e29452 instanceof Object)){
var ex__23266__auto__ = e29452;
var statearr_29453_29455 = state_29448;
(statearr_29453_29455[(5)] = ex__23266__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29448);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29452;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23264__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29456 = state_29448;
state_29448 = G__29456;
continue;
} else {
return ret_value__23264__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__23263__auto__ = function(state_29448){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__23263__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__23263__auto____1.call(this,state_29448);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__23263__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__23263__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__23263__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__23263__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__23263__auto__;
})()
})();
var state__23359__auto__ = (function (){var statearr_29454 = f__23358__auto__.call(null);
(statearr_29454[(6)] = c__23357__auto__);

return statearr_29454;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23359__auto__);
}));

return c__23357__auto__;
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__29457){
var map__29458 = p__29457;
var map__29458__$1 = (((((!((map__29458 == null))))?(((((map__29458.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29458.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29458):map__29458);
var file = cljs.core.get.call(null,map__29458__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__29458__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__29458__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__29460 = "";
var G__29460__$1 = (cljs.core.truth_(file)?[G__29460,"file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):G__29460);
var G__29460__$2 = (cljs.core.truth_(line)?[G__29460__$1," at line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__29460__$1);
if(cljs.core.truth_((function (){var and__4109__auto__ = line;
if(cljs.core.truth_(and__4109__auto__)){
return column;
} else {
return and__4109__auto__;
}
})())){
return [G__29460__$2,", column ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join('');
} else {
return G__29460__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__29461){
var map__29462 = p__29461;
var map__29462__$1 = (((((!((map__29462 == null))))?(((((map__29462.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29462.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29462):map__29462);
var ed = map__29462__$1;
var exception_data = cljs.core.get.call(null,map__29462__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__29462__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
var message_29465 = (function (){var G__29464 = cljs.core.apply.call(null,cljs.core.str,"Figwheel: Compile Exception ",figwheel.client.format_messages.call(null,exception_data));
if(cljs.core.truth_(new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(exception_data))){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__29464)," Error on ",figwheel.client.file_line_column.call(null,exception_data)].join('');
} else {
return G__29464;
}
})();
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),message_29465);

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__29466){
var map__29467 = p__29466;
var map__29467__$1 = (((((!((map__29467 == null))))?(((((map__29467.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29467.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29467):map__29467);
var w = map__29467__$1;
var message = cljs.core.get.call(null,map__29467__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),["Figwheel: Compile Warning - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(message))," in ",figwheel.client.file_line_column.call(null,message)].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.config_defaults !== 'undefined')){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[new cljs.core.Var(function(){return figwheel.client.default_on_compile_warning;},new cljs.core.Symbol("figwheel.client","default-on-compile-warning","figwheel.client/default-on-compile-warning",584144208,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-warning","default-on-compile-warning",-18911586,null),"resources/public/out/figwheel/client.cljs",33,1,362,362,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"message","message",1234475525,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"w","w",1994700528,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_warning)?figwheel.client.default_on_compile_warning.cljs$lang$test:null)])),figwheel.client.default_on_jsload,true,new cljs.core.Var(function(){return figwheel.client.default_on_compile_fail;},new cljs.core.Symbol("figwheel.client","default-on-compile-fail","figwheel.client/default-on-compile-fail",1384826337,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-fail","default-on-compile-fail",-158814813,null),"resources/public/out/figwheel/client.cljs",30,1,355,355,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"exception-data","exception-data",1128056641,null),new cljs.core.Symbol(null,"cause","cause",1872432779,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"ed","ed",2076825751,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_fail)?figwheel.client.default_on_compile_fail.cljs$lang$test:null)])),false,true,["ws://",cljs.core.str.cljs$core$IFn$_invoke$arity$1(((figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),"/figwheel-ws"].join(''),false,figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.fill_url_template = (function figwheel$client$fill_url_template(config){
if(figwheel.client.utils.html_env_QMARK_.call(null)){
return cljs.core.update_in.call(null,config,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938)], null),(function (x){
return clojure.string.replace.call(null,clojure.string.replace.call(null,x,"[[client-hostname]]",location.hostname),"[[client-port]]",location.port);
}));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"enforce-figwheel-version-plugin","enforce-figwheel-version-plugin",-1916185220),figwheel.client.enforce_figwheel_version_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = (((!(figwheel.client.utils.html_env_QMARK_.call(null))))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__4109__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__4109__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__4109__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_message_watch = (function figwheel$client$add_message_watch(key,callback){
return cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,key,(function (_,___$1,___$2,msg_hist){
return callback.call(null,cljs.core.first.call(null,msg_hist));
}));
});
figwheel.client.add_json_message_watch = (function figwheel$client$add_json_message_watch(key,callback){
return figwheel.client.add_message_watch.call(null,key,cljs.core.comp.call(null,callback,cljs.core.clj__GT_js));
});
goog.exportSymbol('figwheel.client.add_json_message_watch', figwheel.client.add_json_message_watch);
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__29469 = cljs.core.seq.call(null,plugins);
var chunk__29470 = null;
var count__29471 = (0);
var i__29472 = (0);
while(true){
if((i__29472 < count__29471)){
var vec__29479 = cljs.core._nth.call(null,chunk__29470,i__29472);
var k = cljs.core.nth.call(null,vec__29479,(0),null);
var plugin = cljs.core.nth.call(null,vec__29479,(1),null);
if(cljs.core.truth_(plugin)){
var pl_29485 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__29469,chunk__29470,count__29471,i__29472,pl_29485,vec__29479,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_29485.call(null,msg_hist);
});})(seq__29469,chunk__29470,count__29471,i__29472,pl_29485,vec__29479,k,plugin))
);
} else {
}


var G__29486 = seq__29469;
var G__29487 = chunk__29470;
var G__29488 = count__29471;
var G__29489 = (i__29472 + (1));
seq__29469 = G__29486;
chunk__29470 = G__29487;
count__29471 = G__29488;
i__29472 = G__29489;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__29469);
if(temp__5735__auto__){
var seq__29469__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29469__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__29469__$1);
var G__29490 = cljs.core.chunk_rest.call(null,seq__29469__$1);
var G__29491 = c__4550__auto__;
var G__29492 = cljs.core.count.call(null,c__4550__auto__);
var G__29493 = (0);
seq__29469 = G__29490;
chunk__29470 = G__29491;
count__29471 = G__29492;
i__29472 = G__29493;
continue;
} else {
var vec__29482 = cljs.core.first.call(null,seq__29469__$1);
var k = cljs.core.nth.call(null,vec__29482,(0),null);
var plugin = cljs.core.nth.call(null,vec__29482,(1),null);
if(cljs.core.truth_(plugin)){
var pl_29494 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__29469,chunk__29470,count__29471,i__29472,pl_29494,vec__29482,k,plugin,seq__29469__$1,temp__5735__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_29494.call(null,msg_hist);
});})(seq__29469,chunk__29470,count__29471,i__29472,pl_29494,vec__29482,k,plugin,seq__29469__$1,temp__5735__auto__))
);
} else {
}


var G__29495 = cljs.core.next.call(null,seq__29469__$1);
var G__29496 = null;
var G__29497 = (0);
var G__29498 = (0);
seq__29469 = G__29495;
chunk__29470 = G__29496;
count__29471 = G__29497;
i__29472 = G__29498;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(var_args){
var G__29500 = arguments.length;
switch (G__29500) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.__figwheel_start_once__ !== 'undefined')){
return null;
} else {
return (
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.fill_url_template.call(null,figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370)))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
(figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts));

figwheel.client.enable_repl_print_BANG_.call(null);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

var seq__29501_29506 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__29502_29507 = null;
var count__29503_29508 = (0);
var i__29504_29509 = (0);
while(true){
if((i__29504_29509 < count__29503_29508)){
var msg_29510 = cljs.core._nth.call(null,chunk__29502_29507,i__29504_29509);
figwheel.client.socket.handle_incoming_message.call(null,msg_29510);


var G__29511 = seq__29501_29506;
var G__29512 = chunk__29502_29507;
var G__29513 = count__29503_29508;
var G__29514 = (i__29504_29509 + (1));
seq__29501_29506 = G__29511;
chunk__29502_29507 = G__29512;
count__29503_29508 = G__29513;
i__29504_29509 = G__29514;
continue;
} else {
var temp__5735__auto___29515 = cljs.core.seq.call(null,seq__29501_29506);
if(temp__5735__auto___29515){
var seq__29501_29516__$1 = temp__5735__auto___29515;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29501_29516__$1)){
var c__4550__auto___29517 = cljs.core.chunk_first.call(null,seq__29501_29516__$1);
var G__29518 = cljs.core.chunk_rest.call(null,seq__29501_29516__$1);
var G__29519 = c__4550__auto___29517;
var G__29520 = cljs.core.count.call(null,c__4550__auto___29517);
var G__29521 = (0);
seq__29501_29506 = G__29518;
chunk__29502_29507 = G__29519;
count__29503_29508 = G__29520;
i__29504_29509 = G__29521;
continue;
} else {
var msg_29522 = cljs.core.first.call(null,seq__29501_29516__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_29522);


var G__29523 = cljs.core.next.call(null,seq__29501_29516__$1);
var G__29524 = null;
var G__29525 = (0);
var G__29526 = (0);
seq__29501_29506 = G__29523;
chunk__29502_29507 = G__29524;
count__29503_29508 = G__29525;
i__29504_29509 = G__29526;
continue;
}
} else {
}
}
break;
}

return figwheel.client.socket.open.call(null,system_options);
})))
;
}
}
}));

(figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
}));

(figwheel.client.start.cljs$lang$maxFixedArity = 1);

figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__4736__auto__ = [];
var len__4730__auto___29531 = arguments.length;
var i__4731__auto___29532 = (0);
while(true){
if((i__4731__auto___29532 < len__4730__auto___29531)){
args__4736__auto__.push((arguments[i__4731__auto___29532]));

var G__29533 = (i__4731__auto___29532 + (1));
i__4731__auto___29532 = G__29533;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__29528){
var map__29529 = p__29528;
var map__29529__$1 = (((((!((map__29529 == null))))?(((((map__29529.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29529.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29529):map__29529);
var opts = map__29529__$1;
return figwheel.client.start.call(null,opts);
}));

(figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq29527){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29527));
}));

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e29534){if((e29534 instanceof Error)){
var e = e29534;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e29534;

}
}});
figwheel.client.console_intro_message = "Figwheel has compiled a temporary helper application to your :output-file.\n\nThe code currently in your configured output file does not\nrepresent the code that you are trying to compile.\n\nThis temporary application is intended to help you continue to get\nfeedback from Figwheel until the build you are working on compiles\ncorrectly.\n\nWhen your ClojureScript source code compiles correctly this helper\napplication will auto-reload and pick up your freshly compiled\nClojureScript program.";
figwheel.client.bad_compile_helper_app = (function figwheel$client$bad_compile_helper_app(){
cljs.core.enable_console_print_BANG_.call(null);

var config = figwheel.client.fetch_data_from_env.call(null);
cljs.core.println.call(null,figwheel.client.console_intro_message);

figwheel.client.heads_up.bad_compile_screen.call(null);

if(cljs.core.truth_(goog.dependencies_)){
} else {
(goog.dependencies_ = true);
}

figwheel.client.start.call(null,config);

return figwheel.client.add_message_watch.call(null,new cljs.core.Keyword(null,"listen-for-successful-compile","listen-for-successful-compile",-995277603),(function (p__29535){
var map__29536 = p__29535;
var map__29536__$1 = (((((!((map__29536 == null))))?(((((map__29536.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29536.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29536):map__29536);
var msg_name = cljs.core.get.call(null,map__29536__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return (location.href = location.href);
} else {
return null;
}
}));
});

//# sourceMappingURL=client.js.map?rel=1609259931292
