// Compiled by ClojureScript 1.10.741 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('figwheel.client.utils');
goog.require('goog.Uri');
goog.require('goog.string');
goog.require('goog.object');
goog.require('goog.net.jsloader');
goog.require('goog.html.legacyconversions');
goog.require('clojure.string');
goog.require('clojure.set');
goog.require('cljs.core.async');
goog.require('goog.async.Deferred');
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined')){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.on_cssload_custom_event = (function figwheel$client$file_reloading$on_cssload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.css-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__4120__auto__ = ((cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && ((((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string'))) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372))));
if(or__4120__auto__){
return or__4120__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = (function figwheel$client$file_reloading$name__GT_path(ns){

return goog.object.get(goog.dependencies_.nameToPath,ns);
});
figwheel.client.file_reloading.provided_QMARK_ = (function figwheel$client$file_reloading$provided_QMARK_(ns){
return goog.object.get(goog.dependencies_.written,figwheel.client.file_reloading.name__GT_path.call(null,ns));
});
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(name){
var or__4120__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, ["cljs.nodejs",null,"goog",null,"cljs.core",null], null), null).call(null,name);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return ((goog.string.startsWith("clojure.",name)) || (goog.string.startsWith("goog.",name)));
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__27174_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__27174_SHARP_));
}),goog.object.getKeys(goog.object.get(goog.dependencies_.requires,figwheel.client.file_reloading.name__GT_path.call(null,ns)))));
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.dependency_data !== 'undefined')){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = (function figwheel$client$file_reloading$path_to_name_BANG_(path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.createAsIfByAssoc([name]));
});
/**
 * Setup a path to name dependencies map.
 * That goes from path -> #{ ns-names }
 */
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = (function figwheel$client$file_reloading$setup_path__GT_name_BANG_(){
var nameToPath = goog.object.filter(goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return goog.object.forEach(nameToPath,(function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
}));
});
/**
 * returns a set of namespaces defined by a path
 */
figwheel.client.file_reloading.path__GT_name = (function figwheel$client$file_reloading$path__GT_name(path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
});
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.createAsIfByAssoc([parent_ns]));
});
/**
 * This reverses the goog.dependencies_.requires for looking up ns-dependents.
 */
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = (function figwheel$client$file_reloading$setup_ns__GT_dependents_BANG_(){
var requires = goog.object.filter(goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return goog.object.forEach(requires,(function (v,k,_){
return goog.object.forEach(v,(function (v_SINGLEQUOTE_,k_SINGLEQUOTE_,___$1){
var seq__27175 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__27176 = null;
var count__27177 = (0);
var i__27178 = (0);
while(true){
if((i__27178 < count__27177)){
var n = cljs.core._nth.call(null,chunk__27176,i__27178);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);


var G__27179 = seq__27175;
var G__27180 = chunk__27176;
var G__27181 = count__27177;
var G__27182 = (i__27178 + (1));
seq__27175 = G__27179;
chunk__27176 = G__27180;
count__27177 = G__27181;
i__27178 = G__27182;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__27175);
if(temp__5735__auto__){
var seq__27175__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27175__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__27175__$1);
var G__27183 = cljs.core.chunk_rest.call(null,seq__27175__$1);
var G__27184 = c__4550__auto__;
var G__27185 = cljs.core.count.call(null,c__4550__auto__);
var G__27186 = (0);
seq__27175 = G__27183;
chunk__27176 = G__27184;
count__27177 = G__27185;
i__27178 = G__27186;
continue;
} else {
var n = cljs.core.first.call(null,seq__27175__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);


var G__27187 = cljs.core.next.call(null,seq__27175__$1);
var G__27188 = null;
var G__27189 = (0);
var G__27190 = (0);
seq__27175 = G__27187;
chunk__27176 = G__27188;
count__27177 = G__27189;
i__27178 = G__27190;
continue;
}
} else {
return null;
}
}
break;
}
}));
}));
});
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.in_upper_level_QMARK_ = (function figwheel$client$file_reloading$in_upper_level_QMARK_(topo_state,current_depth,dep){
return cljs.core.some.call(null,(function (p__27191){
var vec__27192 = p__27191;
var _ = cljs.core.nth.call(null,vec__27192,(0),null);
var v = cljs.core.nth.call(null,vec__27192,(1),null);
var and__4109__auto__ = v;
if(cljs.core.truth_(and__4109__auto__)){
return v.call(null,dep);
} else {
return and__4109__auto__;
}
}),cljs.core.filter.call(null,(function (p__27195){
var vec__27196 = p__27195;
var k = cljs.core.nth.call(null,vec__27196,(0),null);
var v = cljs.core.nth.call(null,vec__27196,(1),null);
return (k > current_depth);
}),topo_state));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});
var topo_sort_STAR_ = (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__27208_27216 = cljs.core.seq.call(null,deps);
var chunk__27209_27217 = null;
var count__27210_27218 = (0);
var i__27211_27219 = (0);
while(true){
if((i__27211_27219 < count__27210_27218)){
var dep_27220 = cljs.core._nth.call(null,chunk__27209_27217,i__27211_27219);
if(cljs.core.truth_((function (){var and__4109__auto__ = dep_27220;
if(cljs.core.truth_(and__4109__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_27220));
} else {
return and__4109__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_27220,(depth + (1)),state);
} else {
}


var G__27221 = seq__27208_27216;
var G__27222 = chunk__27209_27217;
var G__27223 = count__27210_27218;
var G__27224 = (i__27211_27219 + (1));
seq__27208_27216 = G__27221;
chunk__27209_27217 = G__27222;
count__27210_27218 = G__27223;
i__27211_27219 = G__27224;
continue;
} else {
var temp__5735__auto___27225 = cljs.core.seq.call(null,seq__27208_27216);
if(temp__5735__auto___27225){
var seq__27208_27226__$1 = temp__5735__auto___27225;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27208_27226__$1)){
var c__4550__auto___27227 = cljs.core.chunk_first.call(null,seq__27208_27226__$1);
var G__27228 = cljs.core.chunk_rest.call(null,seq__27208_27226__$1);
var G__27229 = c__4550__auto___27227;
var G__27230 = cljs.core.count.call(null,c__4550__auto___27227);
var G__27231 = (0);
seq__27208_27216 = G__27228;
chunk__27209_27217 = G__27229;
count__27210_27218 = G__27230;
i__27211_27219 = G__27231;
continue;
} else {
var dep_27232 = cljs.core.first.call(null,seq__27208_27226__$1);
if(cljs.core.truth_((function (){var and__4109__auto__ = dep_27232;
if(cljs.core.truth_(and__4109__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_27232));
} else {
return and__4109__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_27232,(depth + (1)),state);
} else {
}


var G__27233 = cljs.core.next.call(null,seq__27208_27226__$1);
var G__27234 = null;
var G__27235 = (0);
var G__27236 = (0);
seq__27208_27216 = G__27233;
chunk__27209_27217 = G__27234;
count__27210_27218 = G__27235;
i__27211_27219 = G__27236;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return elim_dups_STAR_.call(null,cljs.core.reverse.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = function(deps,depth,state){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1.call(this,deps);
case 3:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3.call(this,deps,depth,state);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;
var elim_dups_STAR_ = (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__27212){
var vec__27213 = p__27212;
var seq__27214 = cljs.core.seq.call(null,vec__27213);
var first__27215 = cljs.core.first.call(null,seq__27214);
var seq__27214__$1 = cljs.core.next.call(null,seq__27214);
var x = first__27215;
var xs = seq__27214__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,(function (p1__27199_SHARP_){
return clojure.set.difference.call(null,p1__27199_SHARP_,x);
}),xs)));
}
});
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,figwheel.client.file_reloading.immutable_ns_QMARK_),cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss)))));
});
figwheel.client.file_reloading.unprovide_BANG_ = (function figwheel$client$file_reloading$unprovide_BANG_(ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)].join(''));
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_reloading.name__GT_path.call(null,ns))].join('');
});
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__27237 = cljs.core.seq.call(null,provides);
var chunk__27238 = null;
var count__27239 = (0);
var i__27240 = (0);
while(true){
if((i__27240 < count__27239)){
var prov = cljs.core._nth.call(null,chunk__27238,i__27240);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__27249_27257 = cljs.core.seq.call(null,requires);
var chunk__27250_27258 = null;
var count__27251_27259 = (0);
var i__27252_27260 = (0);
while(true){
if((i__27252_27260 < count__27251_27259)){
var req_27261 = cljs.core._nth.call(null,chunk__27250_27258,i__27252_27260);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_27261,prov);


var G__27262 = seq__27249_27257;
var G__27263 = chunk__27250_27258;
var G__27264 = count__27251_27259;
var G__27265 = (i__27252_27260 + (1));
seq__27249_27257 = G__27262;
chunk__27250_27258 = G__27263;
count__27251_27259 = G__27264;
i__27252_27260 = G__27265;
continue;
} else {
var temp__5735__auto___27266 = cljs.core.seq.call(null,seq__27249_27257);
if(temp__5735__auto___27266){
var seq__27249_27267__$1 = temp__5735__auto___27266;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27249_27267__$1)){
var c__4550__auto___27268 = cljs.core.chunk_first.call(null,seq__27249_27267__$1);
var G__27269 = cljs.core.chunk_rest.call(null,seq__27249_27267__$1);
var G__27270 = c__4550__auto___27268;
var G__27271 = cljs.core.count.call(null,c__4550__auto___27268);
var G__27272 = (0);
seq__27249_27257 = G__27269;
chunk__27250_27258 = G__27270;
count__27251_27259 = G__27271;
i__27252_27260 = G__27272;
continue;
} else {
var req_27273 = cljs.core.first.call(null,seq__27249_27267__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_27273,prov);


var G__27274 = cljs.core.next.call(null,seq__27249_27267__$1);
var G__27275 = null;
var G__27276 = (0);
var G__27277 = (0);
seq__27249_27257 = G__27274;
chunk__27250_27258 = G__27275;
count__27251_27259 = G__27276;
i__27252_27260 = G__27277;
continue;
}
} else {
}
}
break;
}


var G__27278 = seq__27237;
var G__27279 = chunk__27238;
var G__27280 = count__27239;
var G__27281 = (i__27240 + (1));
seq__27237 = G__27278;
chunk__27238 = G__27279;
count__27239 = G__27280;
i__27240 = G__27281;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__27237);
if(temp__5735__auto__){
var seq__27237__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27237__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__27237__$1);
var G__27282 = cljs.core.chunk_rest.call(null,seq__27237__$1);
var G__27283 = c__4550__auto__;
var G__27284 = cljs.core.count.call(null,c__4550__auto__);
var G__27285 = (0);
seq__27237 = G__27282;
chunk__27238 = G__27283;
count__27239 = G__27284;
i__27240 = G__27285;
continue;
} else {
var prov = cljs.core.first.call(null,seq__27237__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__27253_27286 = cljs.core.seq.call(null,requires);
var chunk__27254_27287 = null;
var count__27255_27288 = (0);
var i__27256_27289 = (0);
while(true){
if((i__27256_27289 < count__27255_27288)){
var req_27290 = cljs.core._nth.call(null,chunk__27254_27287,i__27256_27289);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_27290,prov);


var G__27291 = seq__27253_27286;
var G__27292 = chunk__27254_27287;
var G__27293 = count__27255_27288;
var G__27294 = (i__27256_27289 + (1));
seq__27253_27286 = G__27291;
chunk__27254_27287 = G__27292;
count__27255_27288 = G__27293;
i__27256_27289 = G__27294;
continue;
} else {
var temp__5735__auto___27295__$1 = cljs.core.seq.call(null,seq__27253_27286);
if(temp__5735__auto___27295__$1){
var seq__27253_27296__$1 = temp__5735__auto___27295__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27253_27296__$1)){
var c__4550__auto___27297 = cljs.core.chunk_first.call(null,seq__27253_27296__$1);
var G__27298 = cljs.core.chunk_rest.call(null,seq__27253_27296__$1);
var G__27299 = c__4550__auto___27297;
var G__27300 = cljs.core.count.call(null,c__4550__auto___27297);
var G__27301 = (0);
seq__27253_27286 = G__27298;
chunk__27254_27287 = G__27299;
count__27255_27288 = G__27300;
i__27256_27289 = G__27301;
continue;
} else {
var req_27302 = cljs.core.first.call(null,seq__27253_27296__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_27302,prov);


var G__27303 = cljs.core.next.call(null,seq__27253_27296__$1);
var G__27304 = null;
var G__27305 = (0);
var G__27306 = (0);
seq__27253_27286 = G__27303;
chunk__27254_27287 = G__27304;
count__27255_27288 = G__27305;
i__27256_27289 = G__27306;
continue;
}
} else {
}
}
break;
}


var G__27307 = cljs.core.next.call(null,seq__27237__$1);
var G__27308 = null;
var G__27309 = (0);
var G__27310 = (0);
seq__27237 = G__27307;
chunk__27238 = G__27308;
count__27239 = G__27309;
i__27240 = G__27310;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.file_reloading.figwheel_require = (function figwheel$client$file_reloading$figwheel_require(src,reload){
(goog.require = figwheel.client.file_reloading.figwheel_require);

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__27311_27315 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__27312_27316 = null;
var count__27313_27317 = (0);
var i__27314_27318 = (0);
while(true){
if((i__27314_27318 < count__27313_27317)){
var ns_27319 = cljs.core._nth.call(null,chunk__27312_27316,i__27314_27318);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_27319);


var G__27320 = seq__27311_27315;
var G__27321 = chunk__27312_27316;
var G__27322 = count__27313_27317;
var G__27323 = (i__27314_27318 + (1));
seq__27311_27315 = G__27320;
chunk__27312_27316 = G__27321;
count__27313_27317 = G__27322;
i__27314_27318 = G__27323;
continue;
} else {
var temp__5735__auto___27324 = cljs.core.seq.call(null,seq__27311_27315);
if(temp__5735__auto___27324){
var seq__27311_27325__$1 = temp__5735__auto___27324;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27311_27325__$1)){
var c__4550__auto___27326 = cljs.core.chunk_first.call(null,seq__27311_27325__$1);
var G__27327 = cljs.core.chunk_rest.call(null,seq__27311_27325__$1);
var G__27328 = c__4550__auto___27326;
var G__27329 = cljs.core.count.call(null,c__4550__auto___27326);
var G__27330 = (0);
seq__27311_27315 = G__27327;
chunk__27312_27316 = G__27328;
count__27313_27317 = G__27329;
i__27314_27318 = G__27330;
continue;
} else {
var ns_27331 = cljs.core.first.call(null,seq__27311_27325__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_27331);


var G__27332 = cljs.core.next.call(null,seq__27311_27325__$1);
var G__27333 = null;
var G__27334 = (0);
var G__27335 = (0);
seq__27311_27315 = G__27332;
chunk__27312_27316 = G__27333;
count__27313_27317 = G__27334;
i__27314_27318 = G__27335;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(reload)){
figwheel.client.file_reloading.unprovide_BANG_.call(null,src);
} else {
}

return goog.require_figwheel_backup_(src);
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
(goog.require_figwheel_backup_ = (function (){var or__4120__auto__ = goog.require__;
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return goog.require;
}
})());

(goog.isProvided_ = (function (name){
return false;
}));

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

(goog.addDependency_figwheel_backup_ = goog.addDependency);

(goog.addDependency = (function() { 
var G__27336__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__27336 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__27337__i = 0, G__27337__a = new Array(arguments.length -  0);
while (G__27337__i < G__27337__a.length) {G__27337__a[G__27337__i] = arguments[G__27337__i + 0]; ++G__27337__i;}
  args = new cljs.core.IndexedSeq(G__27337__a,0,null);
} 
return G__27336__delegate.call(this,args);};
G__27336.cljs$lang$maxFixedArity = 0;
G__27336.cljs$lang$applyTo = (function (arglist__27338){
var args = cljs.core.seq(arglist__27338);
return G__27336__delegate(args);
});
G__27336.cljs$core$IFn$_invoke$arity$variadic = G__27336__delegate;
return G__27336;
})()
);

goog.constructNamespace_("cljs.user");

(goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload);

return (goog.require = figwheel.client.file_reloading.figwheel_require);
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined')){
return null;
} else {
return (
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
)
;
}
});
figwheel.client.file_reloading.gloader = (((typeof goog !== 'undefined') && (typeof goog.net !== 'undefined') && (typeof goog.net.jsloader !== 'undefined') && (typeof goog.net.jsloader.safeLoad !== 'undefined'))?(function (p1__27339_SHARP_,p2__27340_SHARP_){
return goog.net.jsloader.safeLoad(goog.html.legacyconversions.trustedResourceUrlFromString(cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__27339_SHARP_)),p2__27340_SHARP_);
}):(((typeof goog !== 'undefined') && (typeof goog.net !== 'undefined') && (typeof goog.net.jsloader !== 'undefined') && (typeof goog.net.jsloader.load !== 'undefined'))?(function (p1__27341_SHARP_,p2__27342_SHARP_){
return goog.net.jsloader.load(cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__27341_SHARP_),p2__27342_SHARP_);
}):(function(){throw cljs.core.ex_info.call(null,"No remote script loading function found.",cljs.core.PersistentArrayMap.EMPTY)})()
));
figwheel.client.file_reloading.reload_file_in_html_env = (function figwheel$client$file_reloading$reload_file_in_html_env(request_url,callback){

var G__27343 = figwheel.client.file_reloading.gloader.call(null,figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
G__27343.addCallback((function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
}));

G__27343.addErrback((function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
}));

return G__27343;
});
figwheel.client.file_reloading.write_script_tag_import = figwheel.client.file_reloading.reload_file_in_html_env;
goog.exportSymbol('figwheel.client.file_reloading.write_script_tag_import', figwheel.client.file_reloading.write_script_tag_import);
figwheel.client.file_reloading.worker_import_script = (function figwheel$client$file_reloading$worker_import_script(request_url,callback){

return callback.call(null,(function (){try{self.importScripts(figwheel.client.file_reloading.add_cache_buster.call(null,request_url));

return true;
}catch (e27344){if((e27344 instanceof Error)){
var e = e27344;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e27344;

}
}})());
});
goog.exportSymbol('figwheel.client.file_reloading.worker_import_script', figwheel.client.file_reloading.worker_import_script);
figwheel.client.file_reloading.create_node_script_import_fn = (function figwheel$client$file_reloading$create_node_script_import_fn(){
var node_path_lib = require("path");
var util_pattern = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.sep),cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.join("goog","bootstrap","nodejs.js"))].join('');
var util_path = goog.object.findKey(require.cache,(function (v,k,o){
return goog.string.endsWith(k,util_pattern);
}));
var parts = cljs.core.pop.call(null,cljs.core.pop.call(null,clojure.string.split.call(null,util_path,/[\/\\]/)));
var root_path = clojure.string.join.call(null,node_path_lib.sep,parts);
return (function (request_url,callback){

var cache_path = node_path_lib.resolve(root_path,request_url);
goog.object.remove(require.cache,cache_path);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e27345){if((e27345 instanceof Error)){
var e = e27345;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e27345;

}
}})());
});
});
goog.exportSymbol('figwheel.client.file_reloading.create_node_script_import_fn', figwheel.client.file_reloading.create_node_script_import_fn);
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__27346 = cljs.core._EQ_;
var expr__27347 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__27346.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__27347))){
return figwheel.client.file_reloading.create_node_script_import_fn.call(null);
} else {
if(cljs.core.truth_(pred__27346.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__27347))){
return figwheel.client.file_reloading.write_script_tag_import;
} else {
if(cljs.core.truth_(pred__27346.call(null,new cljs.core.Keyword(null,"worker","worker",938239996),expr__27347))){
return figwheel.client.file_reloading.worker_import_script;
} else {
return (function (a,b){
throw "Reload not defined for this platform";
});
}
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__27349,callback){
var map__27350 = p__27349;
var map__27350__$1 = (((((!((map__27350 == null))))?(((((map__27350.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27350.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27350):map__27350);
var file_msg = map__27350__$1;
var request_url = cljs.core.get.call(null,map__27350__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,["FigWheel: Attempting to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return (function (){var or__4120__auto__ = goog.object.get(goog.global,"FIGWHEEL_IMPORT_SCRIPT");
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return figwheel.client.file_reloading.reload_file_STAR_;
}
})().call(null,request_url,(function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,["FigWheel: Successfully loaded ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
}));
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.reload_chan !== 'undefined')){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined')){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined')){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),(function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
}));

return out;
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.reloader_loop !== 'undefined')){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__23357__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__23358__auto__ = (function (){var switch__23262__auto__ = (function (state_27388){
var state_val_27389 = (state_27388[(1)]);
if((state_val_27389 === (7))){
var inst_27384 = (state_27388[(2)]);
var state_27388__$1 = state_27388;
var statearr_27390_27416 = state_27388__$1;
(statearr_27390_27416[(2)] = inst_27384);

(statearr_27390_27416[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27389 === (1))){
var state_27388__$1 = state_27388;
var statearr_27391_27417 = state_27388__$1;
(statearr_27391_27417[(2)] = null);

(statearr_27391_27417[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27389 === (4))){
var inst_27354 = (state_27388[(7)]);
var inst_27354__$1 = (state_27388[(2)]);
var state_27388__$1 = (function (){var statearr_27392 = state_27388;
(statearr_27392[(7)] = inst_27354__$1);

return statearr_27392;
})();
if(cljs.core.truth_(inst_27354__$1)){
var statearr_27393_27418 = state_27388__$1;
(statearr_27393_27418[(1)] = (5));

} else {
var statearr_27394_27419 = state_27388__$1;
(statearr_27394_27419[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27389 === (15))){
var inst_27367 = (state_27388[(8)]);
var inst_27369 = (state_27388[(9)]);
var inst_27371 = inst_27369.call(null,inst_27367);
var state_27388__$1 = state_27388;
var statearr_27395_27420 = state_27388__$1;
(statearr_27395_27420[(2)] = inst_27371);

(statearr_27395_27420[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27389 === (13))){
var inst_27378 = (state_27388[(2)]);
var state_27388__$1 = state_27388;
var statearr_27396_27421 = state_27388__$1;
(statearr_27396_27421[(2)] = inst_27378);

(statearr_27396_27421[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27389 === (6))){
var state_27388__$1 = state_27388;
var statearr_27397_27422 = state_27388__$1;
(statearr_27397_27422[(2)] = null);

(statearr_27397_27422[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27389 === (17))){
var inst_27375 = (state_27388[(2)]);
var state_27388__$1 = state_27388;
var statearr_27398_27423 = state_27388__$1;
(statearr_27398_27423[(2)] = inst_27375);

(statearr_27398_27423[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27389 === (3))){
var inst_27386 = (state_27388[(2)]);
var state_27388__$1 = state_27388;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27388__$1,inst_27386);
} else {
if((state_val_27389 === (12))){
var state_27388__$1 = state_27388;
var statearr_27399_27424 = state_27388__$1;
(statearr_27399_27424[(2)] = null);

(statearr_27399_27424[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27389 === (2))){
var state_27388__$1 = state_27388;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27388__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_27389 === (11))){
var inst_27359 = (state_27388[(10)]);
var inst_27365 = figwheel.client.file_reloading.blocking_load.call(null,inst_27359);
var state_27388__$1 = state_27388;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27388__$1,(14),inst_27365);
} else {
if((state_val_27389 === (9))){
var inst_27359 = (state_27388[(10)]);
var state_27388__$1 = state_27388;
if(cljs.core.truth_(inst_27359)){
var statearr_27400_27425 = state_27388__$1;
(statearr_27400_27425[(1)] = (11));

} else {
var statearr_27401_27426 = state_27388__$1;
(statearr_27401_27426[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27389 === (5))){
var inst_27354 = (state_27388[(7)]);
var inst_27360 = (state_27388[(11)]);
var inst_27359 = cljs.core.nth.call(null,inst_27354,(0),null);
var inst_27360__$1 = cljs.core.nth.call(null,inst_27354,(1),null);
var state_27388__$1 = (function (){var statearr_27402 = state_27388;
(statearr_27402[(10)] = inst_27359);

(statearr_27402[(11)] = inst_27360__$1);

return statearr_27402;
})();
if(cljs.core.truth_(inst_27360__$1)){
var statearr_27403_27427 = state_27388__$1;
(statearr_27403_27427[(1)] = (8));

} else {
var statearr_27404_27428 = state_27388__$1;
(statearr_27404_27428[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27389 === (14))){
var inst_27359 = (state_27388[(10)]);
var inst_27369 = (state_27388[(9)]);
var inst_27367 = (state_27388[(2)]);
var inst_27368 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_27369__$1 = cljs.core.get.call(null,inst_27368,inst_27359);
var state_27388__$1 = (function (){var statearr_27405 = state_27388;
(statearr_27405[(8)] = inst_27367);

(statearr_27405[(9)] = inst_27369__$1);

return statearr_27405;
})();
if(cljs.core.truth_(inst_27369__$1)){
var statearr_27406_27429 = state_27388__$1;
(statearr_27406_27429[(1)] = (15));

} else {
var statearr_27407_27430 = state_27388__$1;
(statearr_27407_27430[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27389 === (16))){
var inst_27367 = (state_27388[(8)]);
var inst_27373 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_27367);
var state_27388__$1 = state_27388;
var statearr_27408_27431 = state_27388__$1;
(statearr_27408_27431[(2)] = inst_27373);

(statearr_27408_27431[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27389 === (10))){
var inst_27380 = (state_27388[(2)]);
var state_27388__$1 = (function (){var statearr_27409 = state_27388;
(statearr_27409[(12)] = inst_27380);

return statearr_27409;
})();
var statearr_27410_27432 = state_27388__$1;
(statearr_27410_27432[(2)] = null);

(statearr_27410_27432[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27389 === (8))){
var inst_27360 = (state_27388[(11)]);
var inst_27362 = eval(inst_27360);
var state_27388__$1 = state_27388;
var statearr_27411_27433 = state_27388__$1;
(statearr_27411_27433[(2)] = inst_27362);

(statearr_27411_27433[(1)] = (10));


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
var figwheel$client$file_reloading$state_machine__23263__auto__ = null;
var figwheel$client$file_reloading$state_machine__23263__auto____0 = (function (){
var statearr_27412 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27412[(0)] = figwheel$client$file_reloading$state_machine__23263__auto__);

(statearr_27412[(1)] = (1));

return statearr_27412;
});
var figwheel$client$file_reloading$state_machine__23263__auto____1 = (function (state_27388){
while(true){
var ret_value__23264__auto__ = (function (){try{while(true){
var result__23265__auto__ = switch__23262__auto__.call(null,state_27388);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23265__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23265__auto__;
}
break;
}
}catch (e27413){if((e27413 instanceof Object)){
var ex__23266__auto__ = e27413;
var statearr_27414_27434 = state_27388;
(statearr_27414_27434[(5)] = ex__23266__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27388);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27413;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23264__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27435 = state_27388;
state_27388 = G__27435;
continue;
} else {
return ret_value__23264__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__23263__auto__ = function(state_27388){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__23263__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__23263__auto____1.call(this,state_27388);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__23263__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__23263__auto____0;
figwheel$client$file_reloading$state_machine__23263__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__23263__auto____1;
return figwheel$client$file_reloading$state_machine__23263__auto__;
})()
})();
var state__23359__auto__ = (function (){var statearr_27415 = f__23358__auto__.call(null);
(statearr_27415[(6)] = c__23357__auto__);

return statearr_27415;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23359__auto__);
}));

return c__23357__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(var_args){
var G__27437 = arguments.length;
switch (G__27437) {
case 1:
return figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$1 = (function (url){
return figwheel.client.file_reloading.queued_file_reload.call(null,url,null);
}));

(figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$2 = (function (url,opt_source_text){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [url,opt_source_text], null));
}));

(figwheel.client.file_reloading.queued_file_reload.cljs$lang$maxFixedArity = 2);

figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__27439,callback){
var map__27440 = p__27439;
var map__27440__$1 = (((((!((map__27440 == null))))?(((((map__27440.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27440.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27440):map__27440);
var file_msg = map__27440__$1;
var namespace = cljs.core.get.call(null,map__27440__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,(function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
}));

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.figwheel_no_load_QMARK_ = (function figwheel$client$file_reloading$figwheel_no_load_QMARK_(p__27442){
var map__27443 = p__27442;
var map__27443__$1 = (((((!((map__27443 == null))))?(((((map__27443.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27443.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27443):map__27443);
var file_msg = map__27443__$1;
var namespace = cljs.core.get.call(null,map__27443__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
});
figwheel.client.file_reloading.ns_exists_QMARK_ = (function figwheel$client$file_reloading$ns_exists_QMARK_(namespace){
return (!((cljs.core.reduce.call(null,cljs.core.fnil.call(null,goog.object.get,({})),goog.global,clojure.string.split.call(null,cljs.core.name.call(null,namespace),".")) == null)));
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__27445){
var map__27446 = p__27445;
var map__27446__$1 = (((((!((map__27446 == null))))?(((((map__27446.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27446.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27446):map__27446);
var file_msg = map__27446__$1;
var namespace = cljs.core.get.call(null,map__27446__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if(cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,file_msg))){
var or__4120__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
var or__4120__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__4120__auto____$1)){
return or__4120__auto____$1;
} else {
var or__4120__auto____$2 = figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
if(cljs.core.truth_(or__4120__auto____$2)){
return or__4120__auto____$2;
} else {
return figwheel.client.file_reloading.ns_exists_QMARK_.call(null,namespace);
}
}
}
} else {
return false;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__27448,callback){
var map__27449 = p__27448;
var map__27449__$1 = (((((!((map__27449 == null))))?(((((map__27449.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27449.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27449):map__27449);
var file_msg = map__27449__$1;
var request_url = cljs.core.get.call(null,map__27449__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__27449__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,["Figwheel: Not trying to load file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,(function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
}));

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__23357__auto___27499 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__23358__auto__ = (function (){var switch__23262__auto__ = (function (state_27484){
var state_val_27485 = (state_27484[(1)]);
if((state_val_27485 === (1))){
var inst_27458 = cljs.core.seq.call(null,files);
var inst_27459 = cljs.core.first.call(null,inst_27458);
var inst_27460 = cljs.core.next.call(null,inst_27458);
var inst_27461 = files;
var state_27484__$1 = (function (){var statearr_27486 = state_27484;
(statearr_27486[(7)] = inst_27459);

(statearr_27486[(8)] = inst_27460);

(statearr_27486[(9)] = inst_27461);

return statearr_27486;
})();
var statearr_27487_27500 = state_27484__$1;
(statearr_27487_27500[(2)] = null);

(statearr_27487_27500[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27485 === (2))){
var inst_27467 = (state_27484[(10)]);
var inst_27461 = (state_27484[(9)]);
var inst_27466 = cljs.core.seq.call(null,inst_27461);
var inst_27467__$1 = cljs.core.first.call(null,inst_27466);
var inst_27468 = cljs.core.next.call(null,inst_27466);
var inst_27469 = (inst_27467__$1 == null);
var inst_27470 = cljs.core.not.call(null,inst_27469);
var state_27484__$1 = (function (){var statearr_27488 = state_27484;
(statearr_27488[(11)] = inst_27468);

(statearr_27488[(10)] = inst_27467__$1);

return statearr_27488;
})();
if(inst_27470){
var statearr_27489_27501 = state_27484__$1;
(statearr_27489_27501[(1)] = (4));

} else {
var statearr_27490_27502 = state_27484__$1;
(statearr_27490_27502[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27485 === (3))){
var inst_27482 = (state_27484[(2)]);
var state_27484__$1 = state_27484;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27484__$1,inst_27482);
} else {
if((state_val_27485 === (4))){
var inst_27467 = (state_27484[(10)]);
var inst_27472 = figwheel.client.file_reloading.reload_js_file.call(null,inst_27467);
var state_27484__$1 = state_27484;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27484__$1,(7),inst_27472);
} else {
if((state_val_27485 === (5))){
var inst_27478 = cljs.core.async.close_BANG_.call(null,out);
var state_27484__$1 = state_27484;
var statearr_27491_27503 = state_27484__$1;
(statearr_27491_27503[(2)] = inst_27478);

(statearr_27491_27503[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27485 === (6))){
var inst_27480 = (state_27484[(2)]);
var state_27484__$1 = state_27484;
var statearr_27492_27504 = state_27484__$1;
(statearr_27492_27504[(2)] = inst_27480);

(statearr_27492_27504[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27485 === (7))){
var inst_27468 = (state_27484[(11)]);
var inst_27474 = (state_27484[(2)]);
var inst_27475 = cljs.core.async.put_BANG_.call(null,out,inst_27474);
var inst_27461 = inst_27468;
var state_27484__$1 = (function (){var statearr_27493 = state_27484;
(statearr_27493[(12)] = inst_27475);

(statearr_27493[(9)] = inst_27461);

return statearr_27493;
})();
var statearr_27494_27505 = state_27484__$1;
(statearr_27494_27505[(2)] = null);

(statearr_27494_27505[(1)] = (2));


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
});
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__23263__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__23263__auto____0 = (function (){
var statearr_27495 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27495[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__23263__auto__);

(statearr_27495[(1)] = (1));

return statearr_27495;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__23263__auto____1 = (function (state_27484){
while(true){
var ret_value__23264__auto__ = (function (){try{while(true){
var result__23265__auto__ = switch__23262__auto__.call(null,state_27484);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23265__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23265__auto__;
}
break;
}
}catch (e27496){if((e27496 instanceof Object)){
var ex__23266__auto__ = e27496;
var statearr_27497_27506 = state_27484;
(statearr_27497_27506[(5)] = ex__23266__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27484);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27496;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23264__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27507 = state_27484;
state_27484 = G__27507;
continue;
} else {
return ret_value__23264__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__23263__auto__ = function(state_27484){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__23263__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__23263__auto____1.call(this,state_27484);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__23263__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__23263__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__23263__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__23263__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__23263__auto__;
})()
})();
var state__23359__auto__ = (function (){var statearr_27498 = f__23358__auto__.call(null);
(statearr_27498[(6)] = c__23357__auto___27499);

return statearr_27498;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23359__auto__);
}));


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__27508,opts){
var map__27509 = p__27508;
var map__27509__$1 = (((((!((map__27509 == null))))?(((((map__27509.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27509.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27509):map__27509);
var eval_body = cljs.core.get.call(null,map__27509__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__27509__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__4109__auto__ = eval_body;
if(cljs.core.truth_(and__4109__auto__)){
return typeof eval_body === 'string';
} else {
return and__4109__auto__;
}
})())){
var code = eval_body;
try{figwheel.client.utils.debug_prn.call(null,["Evaling file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e27511){var e = e27511;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Unable to evaluate ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,cljs.core.partial.call(null,cljs.core.re_matches,/figwheel\.connect.*/),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,(function (n){
var temp__5733__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,(function (p1__27512_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__27512_SHARP_),n);
}),files));
if(cljs.core.truth_(temp__5733__auto__)){
var file_msg = temp__5733__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
}),deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
if((cljs.core.count.call(null,files) <= (1))){
return files;
} else {
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
}
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__27513){
var vec__27514 = p__27513;
var k = cljs.core.nth.call(null,vec__27514,(0),null);
var v = cljs.core.nth.call(null,vec__27514,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__27517){
var vec__27518 = p__27517;
var k = cljs.core.nth.call(null,vec__27518,(0),null);
var v = cljs.core.nth.call(null,vec__27518,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__27524,p__27525){
var map__27526 = p__27524;
var map__27526__$1 = (((((!((map__27526 == null))))?(((((map__27526.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27526.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27526):map__27526);
var opts = map__27526__$1;
var before_jsload = cljs.core.get.call(null,map__27526__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__27526__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__27526__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__27527 = p__27525;
var map__27527__$1 = (((((!((map__27527 == null))))?(((((map__27527.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27527.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27527):map__27527);
var msg = map__27527__$1;
var files = cljs.core.get.call(null,map__27527__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__27527__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__27527__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__23357__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__23358__auto__ = (function (){var switch__23262__auto__ = (function (state_27681){
var state_val_27682 = (state_27681[(1)]);
if((state_val_27682 === (7))){
var inst_27542 = (state_27681[(7)]);
var inst_27544 = (state_27681[(8)]);
var inst_27543 = (state_27681[(9)]);
var inst_27541 = (state_27681[(10)]);
var inst_27549 = cljs.core._nth.call(null,inst_27542,inst_27544);
var inst_27550 = figwheel.client.file_reloading.eval_body.call(null,inst_27549,opts);
var inst_27551 = (inst_27544 + (1));
var tmp27683 = inst_27542;
var tmp27684 = inst_27543;
var tmp27685 = inst_27541;
var inst_27541__$1 = tmp27685;
var inst_27542__$1 = tmp27683;
var inst_27543__$1 = tmp27684;
var inst_27544__$1 = inst_27551;
var state_27681__$1 = (function (){var statearr_27686 = state_27681;
(statearr_27686[(7)] = inst_27542__$1);

(statearr_27686[(8)] = inst_27544__$1);

(statearr_27686[(9)] = inst_27543__$1);

(statearr_27686[(10)] = inst_27541__$1);

(statearr_27686[(11)] = inst_27550);

return statearr_27686;
})();
var statearr_27687_27770 = state_27681__$1;
(statearr_27687_27770[(2)] = null);

(statearr_27687_27770[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27682 === (20))){
var inst_27584 = (state_27681[(12)]);
var inst_27592 = figwheel.client.file_reloading.sort_files.call(null,inst_27584);
var state_27681__$1 = state_27681;
var statearr_27688_27771 = state_27681__$1;
(statearr_27688_27771[(2)] = inst_27592);

(statearr_27688_27771[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27682 === (27))){
var state_27681__$1 = state_27681;
var statearr_27689_27772 = state_27681__$1;
(statearr_27689_27772[(2)] = null);

(statearr_27689_27772[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27682 === (1))){
var inst_27533 = (state_27681[(13)]);
var inst_27530 = before_jsload.call(null,files);
var inst_27531 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_27532 = (function (){return (function (p1__27521_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__27521_SHARP_);
});
})();
var inst_27533__$1 = cljs.core.filter.call(null,inst_27532,files);
var inst_27534 = cljs.core.not_empty.call(null,inst_27533__$1);
var state_27681__$1 = (function (){var statearr_27690 = state_27681;
(statearr_27690[(14)] = inst_27530);

(statearr_27690[(15)] = inst_27531);

(statearr_27690[(13)] = inst_27533__$1);

return statearr_27690;
})();
if(cljs.core.truth_(inst_27534)){
var statearr_27691_27773 = state_27681__$1;
(statearr_27691_27773[(1)] = (2));

} else {
var statearr_27692_27774 = state_27681__$1;
(statearr_27692_27774[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27682 === (24))){
var state_27681__$1 = state_27681;
var statearr_27693_27775 = state_27681__$1;
(statearr_27693_27775[(2)] = null);

(statearr_27693_27775[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27682 === (39))){
var inst_27634 = (state_27681[(16)]);
var state_27681__$1 = state_27681;
var statearr_27694_27776 = state_27681__$1;
(statearr_27694_27776[(2)] = inst_27634);

(statearr_27694_27776[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27682 === (46))){
var inst_27676 = (state_27681[(2)]);
var state_27681__$1 = state_27681;
var statearr_27695_27777 = state_27681__$1;
(statearr_27695_27777[(2)] = inst_27676);

(statearr_27695_27777[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27682 === (4))){
var inst_27578 = (state_27681[(2)]);
var inst_27579 = cljs.core.List.EMPTY;
var inst_27580 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_27579);
var inst_27581 = (function (){return (function (p1__27522_SHARP_){
var and__4109__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__27522_SHARP_);
if(cljs.core.truth_(and__4109__auto__)){
return ((cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__27522_SHARP_))) && (cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,p1__27522_SHARP_))));
} else {
return and__4109__auto__;
}
});
})();
var inst_27582 = cljs.core.filter.call(null,inst_27581,files);
var inst_27583 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_27584 = cljs.core.concat.call(null,inst_27582,inst_27583);
var state_27681__$1 = (function (){var statearr_27696 = state_27681;
(statearr_27696[(17)] = inst_27578);

(statearr_27696[(12)] = inst_27584);

(statearr_27696[(18)] = inst_27580);

return statearr_27696;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_27697_27778 = state_27681__$1;
(statearr_27697_27778[(1)] = (16));

} else {
var statearr_27698_27779 = state_27681__$1;
(statearr_27698_27779[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27682 === (15))){
var inst_27568 = (state_27681[(2)]);
var state_27681__$1 = state_27681;
var statearr_27699_27780 = state_27681__$1;
(statearr_27699_27780[(2)] = inst_27568);

(statearr_27699_27780[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27682 === (21))){
var inst_27594 = (state_27681[(19)]);
var inst_27594__$1 = (state_27681[(2)]);
var inst_27595 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_27594__$1);
var state_27681__$1 = (function (){var statearr_27700 = state_27681;
(statearr_27700[(19)] = inst_27594__$1);

return statearr_27700;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27681__$1,(22),inst_27595);
} else {
if((state_val_27682 === (31))){
var inst_27679 = (state_27681[(2)]);
var state_27681__$1 = state_27681;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27681__$1,inst_27679);
} else {
if((state_val_27682 === (32))){
var inst_27634 = (state_27681[(16)]);
var inst_27639 = inst_27634.cljs$lang$protocol_mask$partition0$;
var inst_27640 = (inst_27639 & (64));
var inst_27641 = inst_27634.cljs$core$ISeq$;
var inst_27642 = (cljs.core.PROTOCOL_SENTINEL === inst_27641);
var inst_27643 = ((inst_27640) || (inst_27642));
var state_27681__$1 = state_27681;
if(cljs.core.truth_(inst_27643)){
var statearr_27701_27781 = state_27681__$1;
(statearr_27701_27781[(1)] = (35));

} else {
var statearr_27702_27782 = state_27681__$1;
(statearr_27702_27782[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27682 === (40))){
var inst_27656 = (state_27681[(20)]);
var inst_27655 = (state_27681[(2)]);
var inst_27656__$1 = cljs.core.get.call(null,inst_27655,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_27657 = cljs.core.get.call(null,inst_27655,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_27658 = cljs.core.not_empty.call(null,inst_27656__$1);
var state_27681__$1 = (function (){var statearr_27703 = state_27681;
(statearr_27703[(21)] = inst_27657);

(statearr_27703[(20)] = inst_27656__$1);

return statearr_27703;
})();
if(cljs.core.truth_(inst_27658)){
var statearr_27704_27783 = state_27681__$1;
(statearr_27704_27783[(1)] = (41));

} else {
var statearr_27705_27784 = state_27681__$1;
(statearr_27705_27784[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27682 === (33))){
var state_27681__$1 = state_27681;
var statearr_27706_27785 = state_27681__$1;
(statearr_27706_27785[(2)] = false);

(statearr_27706_27785[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27682 === (13))){
var inst_27554 = (state_27681[(22)]);
var inst_27558 = cljs.core.chunk_first.call(null,inst_27554);
var inst_27559 = cljs.core.chunk_rest.call(null,inst_27554);
var inst_27560 = cljs.core.count.call(null,inst_27558);
var inst_27541 = inst_27559;
var inst_27542 = inst_27558;
var inst_27543 = inst_27560;
var inst_27544 = (0);
var state_27681__$1 = (function (){var statearr_27707 = state_27681;
(statearr_27707[(7)] = inst_27542);

(statearr_27707[(8)] = inst_27544);

(statearr_27707[(9)] = inst_27543);

(statearr_27707[(10)] = inst_27541);

return statearr_27707;
})();
var statearr_27708_27786 = state_27681__$1;
(statearr_27708_27786[(2)] = null);

(statearr_27708_27786[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27682 === (22))){
var inst_27598 = (state_27681[(23)]);
var inst_27602 = (state_27681[(24)]);
var inst_27597 = (state_27681[(25)]);
var inst_27594 = (state_27681[(19)]);
var inst_27597__$1 = (state_27681[(2)]);
var inst_27598__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_27597__$1);
var inst_27599 = (function (){var all_files = inst_27594;
var res_SINGLEQUOTE_ = inst_27597__$1;
var res = inst_27598__$1;
return (function (p1__27523_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__27523_SHARP_));
});
})();
var inst_27600 = cljs.core.filter.call(null,inst_27599,inst_27597__$1);
var inst_27601 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_27602__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_27601);
var inst_27603 = cljs.core.not_empty.call(null,inst_27602__$1);
var state_27681__$1 = (function (){var statearr_27709 = state_27681;
(statearr_27709[(23)] = inst_27598__$1);

(statearr_27709[(24)] = inst_27602__$1);

(statearr_27709[(25)] = inst_27597__$1);

(statearr_27709[(26)] = inst_27600);

return statearr_27709;
})();
if(cljs.core.truth_(inst_27603)){
var statearr_27710_27787 = state_27681__$1;
(statearr_27710_27787[(1)] = (23));

} else {
var statearr_27711_27788 = state_27681__$1;
(statearr_27711_27788[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27682 === (36))){
var state_27681__$1 = state_27681;
var statearr_27712_27789 = state_27681__$1;
(statearr_27712_27789[(2)] = false);

(statearr_27712_27789[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27682 === (41))){
var inst_27656 = (state_27681[(20)]);
var inst_27660 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_27661 = cljs.core.map.call(null,inst_27660,inst_27656);
var inst_27662 = cljs.core.pr_str.call(null,inst_27661);
var inst_27663 = ["figwheel-no-load meta-data: ",inst_27662].join('');
var inst_27664 = figwheel.client.utils.log.call(null,inst_27663);
var state_27681__$1 = state_27681;
var statearr_27713_27790 = state_27681__$1;
(statearr_27713_27790[(2)] = inst_27664);

(statearr_27713_27790[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27682 === (43))){
var inst_27657 = (state_27681[(21)]);
var inst_27667 = (state_27681[(2)]);
var inst_27668 = cljs.core.not_empty.call(null,inst_27657);
var state_27681__$1 = (function (){var statearr_27714 = state_27681;
(statearr_27714[(27)] = inst_27667);

return statearr_27714;
})();
if(cljs.core.truth_(inst_27668)){
var statearr_27715_27791 = state_27681__$1;
(statearr_27715_27791[(1)] = (44));

} else {
var statearr_27716_27792 = state_27681__$1;
(statearr_27716_27792[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27682 === (29))){
var inst_27598 = (state_27681[(23)]);
var inst_27602 = (state_27681[(24)]);
var inst_27597 = (state_27681[(25)]);
var inst_27600 = (state_27681[(26)]);
var inst_27594 = (state_27681[(19)]);
var inst_27634 = (state_27681[(16)]);
var inst_27630 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_27633 = (function (){var all_files = inst_27594;
var res_SINGLEQUOTE_ = inst_27597;
var res = inst_27598;
var files_not_loaded = inst_27600;
var dependencies_that_loaded = inst_27602;
return (function (p__27632){
var map__27717 = p__27632;
var map__27717__$1 = (((((!((map__27717 == null))))?(((((map__27717.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27717.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27717):map__27717);
var namespace = cljs.core.get.call(null,map__27717__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.truth_(meta_data.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179)))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
});
})();
var inst_27634__$1 = cljs.core.group_by.call(null,inst_27633,inst_27600);
var inst_27636 = (inst_27634__$1 == null);
var inst_27637 = cljs.core.not.call(null,inst_27636);
var state_27681__$1 = (function (){var statearr_27719 = state_27681;
(statearr_27719[(16)] = inst_27634__$1);

(statearr_27719[(28)] = inst_27630);

return statearr_27719;
})();
if(inst_27637){
var statearr_27720_27793 = state_27681__$1;
(statearr_27720_27793[(1)] = (32));

} else {
var statearr_27721_27794 = state_27681__$1;
(statearr_27721_27794[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27682 === (44))){
var inst_27657 = (state_27681[(21)]);
var inst_27670 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_27657);
var inst_27671 = cljs.core.pr_str.call(null,inst_27670);
var inst_27672 = ["not required: ",inst_27671].join('');
var inst_27673 = figwheel.client.utils.log.call(null,inst_27672);
var state_27681__$1 = state_27681;
var statearr_27722_27795 = state_27681__$1;
(statearr_27722_27795[(2)] = inst_27673);

(statearr_27722_27795[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27682 === (6))){
var inst_27575 = (state_27681[(2)]);
var state_27681__$1 = state_27681;
var statearr_27723_27796 = state_27681__$1;
(statearr_27723_27796[(2)] = inst_27575);

(statearr_27723_27796[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27682 === (28))){
var inst_27600 = (state_27681[(26)]);
var inst_27627 = (state_27681[(2)]);
var inst_27628 = cljs.core.not_empty.call(null,inst_27600);
var state_27681__$1 = (function (){var statearr_27724 = state_27681;
(statearr_27724[(29)] = inst_27627);

return statearr_27724;
})();
if(cljs.core.truth_(inst_27628)){
var statearr_27725_27797 = state_27681__$1;
(statearr_27725_27797[(1)] = (29));

} else {
var statearr_27726_27798 = state_27681__$1;
(statearr_27726_27798[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27682 === (25))){
var inst_27598 = (state_27681[(23)]);
var inst_27614 = (state_27681[(2)]);
var inst_27615 = cljs.core.not_empty.call(null,inst_27598);
var state_27681__$1 = (function (){var statearr_27727 = state_27681;
(statearr_27727[(30)] = inst_27614);

return statearr_27727;
})();
if(cljs.core.truth_(inst_27615)){
var statearr_27728_27799 = state_27681__$1;
(statearr_27728_27799[(1)] = (26));

} else {
var statearr_27729_27800 = state_27681__$1;
(statearr_27729_27800[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27682 === (34))){
var inst_27650 = (state_27681[(2)]);
var state_27681__$1 = state_27681;
if(cljs.core.truth_(inst_27650)){
var statearr_27730_27801 = state_27681__$1;
(statearr_27730_27801[(1)] = (38));

} else {
var statearr_27731_27802 = state_27681__$1;
(statearr_27731_27802[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27682 === (17))){
var state_27681__$1 = state_27681;
var statearr_27732_27803 = state_27681__$1;
(statearr_27732_27803[(2)] = recompile_dependents);

(statearr_27732_27803[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27682 === (3))){
var state_27681__$1 = state_27681;
var statearr_27733_27804 = state_27681__$1;
(statearr_27733_27804[(2)] = null);

(statearr_27733_27804[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27682 === (12))){
var inst_27571 = (state_27681[(2)]);
var state_27681__$1 = state_27681;
var statearr_27734_27805 = state_27681__$1;
(statearr_27734_27805[(2)] = inst_27571);

(statearr_27734_27805[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27682 === (2))){
var inst_27533 = (state_27681[(13)]);
var inst_27540 = cljs.core.seq.call(null,inst_27533);
var inst_27541 = inst_27540;
var inst_27542 = null;
var inst_27543 = (0);
var inst_27544 = (0);
var state_27681__$1 = (function (){var statearr_27735 = state_27681;
(statearr_27735[(7)] = inst_27542);

(statearr_27735[(8)] = inst_27544);

(statearr_27735[(9)] = inst_27543);

(statearr_27735[(10)] = inst_27541);

return statearr_27735;
})();
var statearr_27736_27806 = state_27681__$1;
(statearr_27736_27806[(2)] = null);

(statearr_27736_27806[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27682 === (23))){
var inst_27598 = (state_27681[(23)]);
var inst_27602 = (state_27681[(24)]);
var inst_27597 = (state_27681[(25)]);
var inst_27600 = (state_27681[(26)]);
var inst_27594 = (state_27681[(19)]);
var inst_27605 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_27607 = (function (){var all_files = inst_27594;
var res_SINGLEQUOTE_ = inst_27597;
var res = inst_27598;
var files_not_loaded = inst_27600;
var dependencies_that_loaded = inst_27602;
return (function (p__27606){
var map__27737 = p__27606;
var map__27737__$1 = (((((!((map__27737 == null))))?(((((map__27737.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27737.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27737):map__27737);
var request_url = cljs.core.get.call(null,map__27737__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
})();
var inst_27608 = cljs.core.reverse.call(null,inst_27602);
var inst_27609 = cljs.core.map.call(null,inst_27607,inst_27608);
var inst_27610 = cljs.core.pr_str.call(null,inst_27609);
var inst_27611 = figwheel.client.utils.log.call(null,inst_27610);
var state_27681__$1 = (function (){var statearr_27739 = state_27681;
(statearr_27739[(31)] = inst_27605);

return statearr_27739;
})();
var statearr_27740_27807 = state_27681__$1;
(statearr_27740_27807[(2)] = inst_27611);

(statearr_27740_27807[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27682 === (35))){
var state_27681__$1 = state_27681;
var statearr_27741_27808 = state_27681__$1;
(statearr_27741_27808[(2)] = true);

(statearr_27741_27808[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27682 === (19))){
var inst_27584 = (state_27681[(12)]);
var inst_27590 = figwheel.client.file_reloading.expand_files.call(null,inst_27584);
var state_27681__$1 = state_27681;
var statearr_27742_27809 = state_27681__$1;
(statearr_27742_27809[(2)] = inst_27590);

(statearr_27742_27809[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27682 === (11))){
var state_27681__$1 = state_27681;
var statearr_27743_27810 = state_27681__$1;
(statearr_27743_27810[(2)] = null);

(statearr_27743_27810[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27682 === (9))){
var inst_27573 = (state_27681[(2)]);
var state_27681__$1 = state_27681;
var statearr_27744_27811 = state_27681__$1;
(statearr_27744_27811[(2)] = inst_27573);

(statearr_27744_27811[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27682 === (5))){
var inst_27544 = (state_27681[(8)]);
var inst_27543 = (state_27681[(9)]);
var inst_27546 = (inst_27544 < inst_27543);
var inst_27547 = inst_27546;
var state_27681__$1 = state_27681;
if(cljs.core.truth_(inst_27547)){
var statearr_27745_27812 = state_27681__$1;
(statearr_27745_27812[(1)] = (7));

} else {
var statearr_27746_27813 = state_27681__$1;
(statearr_27746_27813[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27682 === (14))){
var inst_27554 = (state_27681[(22)]);
var inst_27563 = cljs.core.first.call(null,inst_27554);
var inst_27564 = figwheel.client.file_reloading.eval_body.call(null,inst_27563,opts);
var inst_27565 = cljs.core.next.call(null,inst_27554);
var inst_27541 = inst_27565;
var inst_27542 = null;
var inst_27543 = (0);
var inst_27544 = (0);
var state_27681__$1 = (function (){var statearr_27747 = state_27681;
(statearr_27747[(7)] = inst_27542);

(statearr_27747[(8)] = inst_27544);

(statearr_27747[(9)] = inst_27543);

(statearr_27747[(32)] = inst_27564);

(statearr_27747[(10)] = inst_27541);

return statearr_27747;
})();
var statearr_27748_27814 = state_27681__$1;
(statearr_27748_27814[(2)] = null);

(statearr_27748_27814[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27682 === (45))){
var state_27681__$1 = state_27681;
var statearr_27749_27815 = state_27681__$1;
(statearr_27749_27815[(2)] = null);

(statearr_27749_27815[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27682 === (26))){
var inst_27598 = (state_27681[(23)]);
var inst_27602 = (state_27681[(24)]);
var inst_27597 = (state_27681[(25)]);
var inst_27600 = (state_27681[(26)]);
var inst_27594 = (state_27681[(19)]);
var inst_27617 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_27619 = (function (){var all_files = inst_27594;
var res_SINGLEQUOTE_ = inst_27597;
var res = inst_27598;
var files_not_loaded = inst_27600;
var dependencies_that_loaded = inst_27602;
return (function (p__27618){
var map__27750 = p__27618;
var map__27750__$1 = (((((!((map__27750 == null))))?(((((map__27750.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27750.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27750):map__27750);
var namespace = cljs.core.get.call(null,map__27750__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__27750__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
})();
var inst_27620 = cljs.core.map.call(null,inst_27619,inst_27598);
var inst_27621 = cljs.core.pr_str.call(null,inst_27620);
var inst_27622 = figwheel.client.utils.log.call(null,inst_27621);
var inst_27623 = (function (){var all_files = inst_27594;
var res_SINGLEQUOTE_ = inst_27597;
var res = inst_27598;
var files_not_loaded = inst_27600;
var dependencies_that_loaded = inst_27602;
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
})();
var inst_27624 = setTimeout(inst_27623,(10));
var state_27681__$1 = (function (){var statearr_27752 = state_27681;
(statearr_27752[(33)] = inst_27617);

(statearr_27752[(34)] = inst_27622);

return statearr_27752;
})();
var statearr_27753_27816 = state_27681__$1;
(statearr_27753_27816[(2)] = inst_27624);

(statearr_27753_27816[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27682 === (16))){
var state_27681__$1 = state_27681;
var statearr_27754_27817 = state_27681__$1;
(statearr_27754_27817[(2)] = reload_dependents);

(statearr_27754_27817[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27682 === (38))){
var inst_27634 = (state_27681[(16)]);
var inst_27652 = cljs.core.apply.call(null,cljs.core.hash_map,inst_27634);
var state_27681__$1 = state_27681;
var statearr_27755_27818 = state_27681__$1;
(statearr_27755_27818[(2)] = inst_27652);

(statearr_27755_27818[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27682 === (30))){
var state_27681__$1 = state_27681;
var statearr_27756_27819 = state_27681__$1;
(statearr_27756_27819[(2)] = null);

(statearr_27756_27819[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27682 === (10))){
var inst_27554 = (state_27681[(22)]);
var inst_27556 = cljs.core.chunked_seq_QMARK_.call(null,inst_27554);
var state_27681__$1 = state_27681;
if(inst_27556){
var statearr_27757_27820 = state_27681__$1;
(statearr_27757_27820[(1)] = (13));

} else {
var statearr_27758_27821 = state_27681__$1;
(statearr_27758_27821[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27682 === (18))){
var inst_27588 = (state_27681[(2)]);
var state_27681__$1 = state_27681;
if(cljs.core.truth_(inst_27588)){
var statearr_27759_27822 = state_27681__$1;
(statearr_27759_27822[(1)] = (19));

} else {
var statearr_27760_27823 = state_27681__$1;
(statearr_27760_27823[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27682 === (42))){
var state_27681__$1 = state_27681;
var statearr_27761_27824 = state_27681__$1;
(statearr_27761_27824[(2)] = null);

(statearr_27761_27824[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27682 === (37))){
var inst_27647 = (state_27681[(2)]);
var state_27681__$1 = state_27681;
var statearr_27762_27825 = state_27681__$1;
(statearr_27762_27825[(2)] = inst_27647);

(statearr_27762_27825[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27682 === (8))){
var inst_27541 = (state_27681[(10)]);
var inst_27554 = (state_27681[(22)]);
var inst_27554__$1 = cljs.core.seq.call(null,inst_27541);
var state_27681__$1 = (function (){var statearr_27763 = state_27681;
(statearr_27763[(22)] = inst_27554__$1);

return statearr_27763;
})();
if(inst_27554__$1){
var statearr_27764_27826 = state_27681__$1;
(statearr_27764_27826[(1)] = (10));

} else {
var statearr_27765_27827 = state_27681__$1;
(statearr_27765_27827[(1)] = (11));

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
}
});
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__23263__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__23263__auto____0 = (function (){
var statearr_27766 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27766[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__23263__auto__);

(statearr_27766[(1)] = (1));

return statearr_27766;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__23263__auto____1 = (function (state_27681){
while(true){
var ret_value__23264__auto__ = (function (){try{while(true){
var result__23265__auto__ = switch__23262__auto__.call(null,state_27681);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23265__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23265__auto__;
}
break;
}
}catch (e27767){if((e27767 instanceof Object)){
var ex__23266__auto__ = e27767;
var statearr_27768_27828 = state_27681;
(statearr_27768_27828[(5)] = ex__23266__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27681);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27767;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23264__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27829 = state_27681;
state_27681 = G__27829;
continue;
} else {
return ret_value__23264__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__23263__auto__ = function(state_27681){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__23263__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__23263__auto____1.call(this,state_27681);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__23263__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__23263__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__23263__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__23263__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__23263__auto__;
})()
})();
var state__23359__auto__ = (function (){var statearr_27769 = f__23358__auto__.call(null);
(statearr_27769[(6)] = c__23357__auto__);

return statearr_27769;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23359__auto__);
}));

return c__23357__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol),"//"].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__27832,link){
var map__27833 = p__27832;
var map__27833__$1 = (((((!((map__27833 == null))))?(((((map__27833.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27833.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27833):map__27833);
var file = cljs.core.get.call(null,map__27833__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__5735__auto__ = link.href;
if(cljs.core.truth_(temp__5735__auto__)){
var link_href = temp__5735__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,(function (p1__27830_SHARP_,p2__27831_SHARP_){
if(cljs.core._EQ_.call(null,p1__27830_SHARP_,p2__27831_SHARP_)){
return p1__27830_SHARP_;
} else {
return false;
}
}),cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = ((match).length);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),((figwheel.client.file_reloading.truncate_url.call(null,link_href)).length)], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__5735__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__27836){
var map__27837 = p__27836;
var map__27837__$1 = (((((!((map__27837 == null))))?(((((map__27837.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27837.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27837):map__27837);
var match_length = cljs.core.get.call(null,map__27837__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__27837__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__27835_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__27835_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__5735__auto__)){
var res = temp__5735__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
(clone.rel = "stylesheet");

(clone.media = link.media);

(clone.disabled = link.disabled);

(clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url));

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
(link.rel = "stylesheet");

(link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url));

return link;
});
figwheel.client.file_reloading.distinctify = (function figwheel$client$file_reloading$distinctify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__27839_SHARP_,p2__27840_SHARP_){
return cljs.core.assoc.call(null,p1__27839_SHARP_,cljs.core.get.call(null,p2__27840_SHARP_,key),p2__27840_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.add_link_to_document = (function figwheel$client$file_reloading$add_link_to_document(orig_link,klone,finished_fn){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout((function (){
parent.removeChild(orig_link);

return finished_fn.call(null);
}),(300));
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.reload_css_deferred_chain !== 'undefined')){
} else {
figwheel.client.file_reloading.reload_css_deferred_chain = cljs.core.atom.call(null,goog.async.Deferred.succeed());
}
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(f_data,fin){
var temp__5733__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__5733__auto__)){
var link = temp__5733__auto__;
return figwheel.client.file_reloading.add_link_to_document.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href),(function (){
return fin.call(null,cljs.core.assoc.call(null,f_data,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),true));
}));
} else {
return fin.call(null,f_data);
}
});
figwheel.client.file_reloading.reload_css_files_STAR_ = (function figwheel$client$file_reloading$reload_css_files_STAR_(deferred,f_datas,on_cssload){
return figwheel.client.utils.liftContD.call(null,figwheel.client.utils.mapConcatD.call(null,deferred,figwheel.client.file_reloading.reload_css_file,f_datas),(function (f_datas_SINGLEQUOTE_,fin){
var loaded_f_datas_27841 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),f_datas_SINGLEQUOTE_);
figwheel.client.file_reloading.on_cssload_custom_event.call(null,loaded_f_datas_27841);

if(cljs.core.fn_QMARK_.call(null,on_cssload)){
on_cssload.call(null,loaded_f_datas_27841);
} else {
}

return fin.call(null);
}));
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__27842,p__27843){
var map__27844 = p__27842;
var map__27844__$1 = (((((!((map__27844 == null))))?(((((map__27844.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27844.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27844):map__27844);
var on_cssload = cljs.core.get.call(null,map__27844__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__27845 = p__27843;
var map__27845__$1 = (((((!((map__27845 == null))))?(((((map__27845.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27845.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27845):map__27845);
var files_msg = map__27845__$1;
var files = cljs.core.get.call(null,map__27845__$1,new cljs.core.Keyword(null,"files","files",-472457450));
if(figwheel.client.utils.html_env_QMARK_.call(null)){
var temp__5735__auto__ = cljs.core.not_empty.call(null,figwheel.client.file_reloading.distinctify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files));
if(cljs.core.truth_(temp__5735__auto__)){
var f_datas = temp__5735__auto__;
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.reload_css_deferred_chain,figwheel.client.file_reloading.reload_css_files_STAR_,f_datas,on_cssload);
} else {
return null;
}
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1609259930034
