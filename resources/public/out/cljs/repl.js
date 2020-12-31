// Compiled by ClojureScript 1.10.741 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('goog.string');
goog.require('goog.string.format');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__28722){
var map__28723 = p__28722;
var map__28723__$1 = (((((!((map__28723 == null))))?(((((map__28723.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28723.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28723):map__28723);
var m = map__28723__$1;
var n = cljs.core.get.call(null,map__28723__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__28723__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,(function (){var or__4120__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return [(function (){var temp__5735__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5735__auto__)){
var ns = temp__5735__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})());

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__28725_28757 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__28726_28758 = null;
var count__28727_28759 = (0);
var i__28728_28760 = (0);
while(true){
if((i__28728_28760 < count__28727_28759)){
var f_28761 = cljs.core._nth.call(null,chunk__28726_28758,i__28728_28760);
cljs.core.println.call(null,"  ",f_28761);


var G__28762 = seq__28725_28757;
var G__28763 = chunk__28726_28758;
var G__28764 = count__28727_28759;
var G__28765 = (i__28728_28760 + (1));
seq__28725_28757 = G__28762;
chunk__28726_28758 = G__28763;
count__28727_28759 = G__28764;
i__28728_28760 = G__28765;
continue;
} else {
var temp__5735__auto___28766 = cljs.core.seq.call(null,seq__28725_28757);
if(temp__5735__auto___28766){
var seq__28725_28767__$1 = temp__5735__auto___28766;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28725_28767__$1)){
var c__4550__auto___28768 = cljs.core.chunk_first.call(null,seq__28725_28767__$1);
var G__28769 = cljs.core.chunk_rest.call(null,seq__28725_28767__$1);
var G__28770 = c__4550__auto___28768;
var G__28771 = cljs.core.count.call(null,c__4550__auto___28768);
var G__28772 = (0);
seq__28725_28757 = G__28769;
chunk__28726_28758 = G__28770;
count__28727_28759 = G__28771;
i__28728_28760 = G__28772;
continue;
} else {
var f_28773 = cljs.core.first.call(null,seq__28725_28767__$1);
cljs.core.println.call(null,"  ",f_28773);


var G__28774 = cljs.core.next.call(null,seq__28725_28767__$1);
var G__28775 = null;
var G__28776 = (0);
var G__28777 = (0);
seq__28725_28757 = G__28774;
chunk__28726_28758 = G__28775;
count__28727_28759 = G__28776;
i__28728_28760 = G__28777;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_28778 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4120__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_28778);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_28778)))?cljs.core.second.call(null,arglists_28778):arglists_28778));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Spec");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__28729_28779 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__28730_28780 = null;
var count__28731_28781 = (0);
var i__28732_28782 = (0);
while(true){
if((i__28732_28782 < count__28731_28781)){
var vec__28743_28783 = cljs.core._nth.call(null,chunk__28730_28780,i__28732_28782);
var name_28784 = cljs.core.nth.call(null,vec__28743_28783,(0),null);
var map__28746_28785 = cljs.core.nth.call(null,vec__28743_28783,(1),null);
var map__28746_28786__$1 = (((((!((map__28746_28785 == null))))?(((((map__28746_28785.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28746_28785.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28746_28785):map__28746_28785);
var doc_28787 = cljs.core.get.call(null,map__28746_28786__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_28788 = cljs.core.get.call(null,map__28746_28786__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_28784);

cljs.core.println.call(null," ",arglists_28788);

if(cljs.core.truth_(doc_28787)){
cljs.core.println.call(null," ",doc_28787);
} else {
}


var G__28789 = seq__28729_28779;
var G__28790 = chunk__28730_28780;
var G__28791 = count__28731_28781;
var G__28792 = (i__28732_28782 + (1));
seq__28729_28779 = G__28789;
chunk__28730_28780 = G__28790;
count__28731_28781 = G__28791;
i__28732_28782 = G__28792;
continue;
} else {
var temp__5735__auto___28793 = cljs.core.seq.call(null,seq__28729_28779);
if(temp__5735__auto___28793){
var seq__28729_28794__$1 = temp__5735__auto___28793;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28729_28794__$1)){
var c__4550__auto___28795 = cljs.core.chunk_first.call(null,seq__28729_28794__$1);
var G__28796 = cljs.core.chunk_rest.call(null,seq__28729_28794__$1);
var G__28797 = c__4550__auto___28795;
var G__28798 = cljs.core.count.call(null,c__4550__auto___28795);
var G__28799 = (0);
seq__28729_28779 = G__28796;
chunk__28730_28780 = G__28797;
count__28731_28781 = G__28798;
i__28732_28782 = G__28799;
continue;
} else {
var vec__28748_28800 = cljs.core.first.call(null,seq__28729_28794__$1);
var name_28801 = cljs.core.nth.call(null,vec__28748_28800,(0),null);
var map__28751_28802 = cljs.core.nth.call(null,vec__28748_28800,(1),null);
var map__28751_28803__$1 = (((((!((map__28751_28802 == null))))?(((((map__28751_28802.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28751_28802.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28751_28802):map__28751_28802);
var doc_28804 = cljs.core.get.call(null,map__28751_28803__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_28805 = cljs.core.get.call(null,map__28751_28803__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_28801);

cljs.core.println.call(null," ",arglists_28805);

if(cljs.core.truth_(doc_28804)){
cljs.core.println.call(null," ",doc_28804);
} else {
}


var G__28806 = cljs.core.next.call(null,seq__28729_28794__$1);
var G__28807 = null;
var G__28808 = (0);
var G__28809 = (0);
seq__28729_28779 = G__28806;
chunk__28730_28780 = G__28807;
count__28731_28781 = G__28808;
i__28732_28782 = G__28809;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5735__auto__ = cljs.spec.alpha.get_spec.call(null,cljs.core.symbol.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name.call(null,n)),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__5735__auto__)){
var fnspec = temp__5735__auto__;
cljs.core.print.call(null,"Spec");

var seq__28753 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__28754 = null;
var count__28755 = (0);
var i__28756 = (0);
while(true){
if((i__28756 < count__28755)){
var role = cljs.core._nth.call(null,chunk__28754,i__28756);
var temp__5735__auto___28810__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5735__auto___28810__$1)){
var spec_28811 = temp__5735__auto___28810__$1;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_28811));
} else {
}


var G__28812 = seq__28753;
var G__28813 = chunk__28754;
var G__28814 = count__28755;
var G__28815 = (i__28756 + (1));
seq__28753 = G__28812;
chunk__28754 = G__28813;
count__28755 = G__28814;
i__28756 = G__28815;
continue;
} else {
var temp__5735__auto____$1 = cljs.core.seq.call(null,seq__28753);
if(temp__5735__auto____$1){
var seq__28753__$1 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28753__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__28753__$1);
var G__28816 = cljs.core.chunk_rest.call(null,seq__28753__$1);
var G__28817 = c__4550__auto__;
var G__28818 = cljs.core.count.call(null,c__4550__auto__);
var G__28819 = (0);
seq__28753 = G__28816;
chunk__28754 = G__28817;
count__28755 = G__28818;
i__28756 = G__28819;
continue;
} else {
var role = cljs.core.first.call(null,seq__28753__$1);
var temp__5735__auto___28820__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5735__auto___28820__$2)){
var spec_28821 = temp__5735__auto___28820__$2;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_28821));
} else {
}


var G__28822 = cljs.core.next.call(null,seq__28753__$1);
var G__28823 = null;
var G__28824 = (0);
var G__28825 = (0);
seq__28753 = G__28822;
chunk__28754 = G__28823;
count__28755 = G__28824;
i__28756 = G__28825;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol(null,"ExceptionInfo","ExceptionInfo",294935087,null):(((t instanceof Error))?cljs.core.symbol.call(null,"js",t.name):null
))], null),(function (){var temp__5735__auto__ = cljs.core.ex_message.call(null,t);
if(cljs.core.truth_(temp__5735__auto__)){
var msg = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = cljs.core.ex_data.call(null,t);
if(cljs.core.truth_(temp__5735__auto__)){
var ed = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})());
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__28826 = cljs.core.conj.call(null,via,t);
var G__28827 = cljs.core.ex_cause.call(null,t);
via = G__28826;
t = G__28827;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek.call(null,via);
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec.call(null,cljs.core.map.call(null,base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5735__auto__ = cljs.core.ex_message.call(null,root);
if(cljs.core.truth_(temp__5735__auto__)){
var root_msg = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = cljs.core.ex_data.call(null,root);
if(cljs.core.truth_(temp__5735__auto__)){
var data = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data.call(null,o));
if(cljs.core.truth_(temp__5735__auto__)){
var phase = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})());
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__28830 = datafied_throwable;
var map__28830__$1 = (((((!((map__28830 == null))))?(((((map__28830.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28830.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28830):map__28830);
var via = cljs.core.get.call(null,map__28830__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.call(null,map__28830__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.call(null,map__28830__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__28831 = cljs.core.last.call(null,via);
var map__28831__$1 = (((((!((map__28831 == null))))?(((((map__28831.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28831.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28831):map__28831);
var type = cljs.core.get.call(null,map__28831__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.call(null,map__28831__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.call(null,map__28831__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__28832 = data;
var map__28832__$1 = (((((!((map__28832 == null))))?(((((map__28832.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28832.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28832):map__28832);
var problems = cljs.core.get.call(null,map__28832__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.call(null,map__28832__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.call(null,map__28832__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__28833 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,via));
var map__28833__$1 = (((((!((map__28833 == null))))?(((((map__28833.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28833.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28833):map__28833);
var top_data = map__28833__$1;
var source = cljs.core.get.call(null,map__28833__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.call(null,(function (){var G__28838 = phase;
var G__28838__$1 = (((G__28838 instanceof cljs.core.Keyword))?G__28838.fqn:null);
switch (G__28838__$1) {
case "read-source":
var map__28839 = data;
var map__28839__$1 = (((((!((map__28839 == null))))?(((((map__28839.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28839.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28839):map__28839);
var line = cljs.core.get.call(null,map__28839__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__28839__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__28841 = cljs.core.merge.call(null,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,via)),top_data);
var G__28841__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__28841,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__28841);
var G__28841__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__28841__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__28841__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__28841__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__28841__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__28842 = top_data;
var G__28842__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__28842,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__28842);
var G__28842__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__28842__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__28842__$1);
var G__28842__$3 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__28842__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__28842__$2);
var G__28842__$4 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__28842__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__28842__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__28842__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__28842__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__28843 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__28843,(0),null);
var method = cljs.core.nth.call(null,vec__28843,(1),null);
var file = cljs.core.nth.call(null,vec__28843,(2),null);
var line = cljs.core.nth.call(null,vec__28843,(3),null);
var G__28846 = top_data;
var G__28846__$1 = (cljs.core.truth_(line)?cljs.core.assoc.call(null,G__28846,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__28846);
var G__28846__$2 = (cljs.core.truth_(file)?cljs.core.assoc.call(null,G__28846__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__28846__$1);
var G__28846__$3 = (cljs.core.truth_((function (){var and__4109__auto__ = source__$1;
if(cljs.core.truth_(and__4109__auto__)){
return method;
} else {
return and__4109__auto__;
}
})())?cljs.core.assoc.call(null,G__28846__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__28846__$2);
var G__28846__$4 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__28846__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__28846__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__28846__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__28846__$4;
}

break;
case "execution":
var vec__28847 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__28847,(0),null);
var method = cljs.core.nth.call(null,vec__28847,(1),null);
var file = cljs.core.nth.call(null,vec__28847,(2),null);
var line = cljs.core.nth.call(null,vec__28847,(3),null);
var file__$1 = cljs.core.first.call(null,cljs.core.remove.call(null,(function (p1__28829_SHARP_){
var or__4120__auto__ = (p1__28829_SHARP_ == null);
if(or__4120__auto__){
return or__4120__auto__;
} else {
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,p1__28829_SHARP_);
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4120__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return line;
}
})();
var G__28850 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__28850__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.call(null,G__28850,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__28850);
var G__28850__$2 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__28850__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__28850__$1);
var G__28850__$3 = (cljs.core.truth_((function (){var or__4120__auto__ = fn;
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
var and__4109__auto__ = source__$1;
if(cljs.core.truth_(and__4109__auto__)){
return method;
} else {
return and__4109__auto__;
}
}
})())?cljs.core.assoc.call(null,G__28850__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4120__auto__ = fn;
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__28850__$2);
var G__28850__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.call(null,G__28850__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__28850__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__28850__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__28850__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__28838__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__28854){
var map__28855 = p__28854;
var map__28855__$1 = (((((!((map__28855 == null))))?(((((map__28855.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28855.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28855):map__28855);
var triage_data = map__28855__$1;
var phase = cljs.core.get.call(null,map__28855__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.call(null,map__28855__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.call(null,map__28855__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__28855__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.call(null,map__28855__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.call(null,map__28855__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.call(null,map__28855__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.call(null,map__28855__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4120__auto__ = source;
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4120__auto__ = line;
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name.call(null,(function (){var or__4120__auto__ = class$;
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__28857 = phase;
var G__28857__$1 = (((G__28857 instanceof cljs.core.Keyword))?G__28857.fqn:null);
switch (G__28857__$1) {
case "read-source":
return format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause);

break;
case "macro-syntax-check":
return format.call(null,"Syntax error macroexpanding %sat (%s).\n%s",(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,(cljs.core.truth_(spec)?(function (){var sb__4661__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__28858_28867 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__28859_28868 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__28860_28869 = true;
var _STAR_print_fn_STAR__temp_val__28861_28870 = (function (x__4662__auto__){
return sb__4661__auto__.append(x__4662__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__28860_28869);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__28861_28870);

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.call(null,(function (p1__28852_SHARP_){
return cljs.core.dissoc.call(null,p1__28852_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__28859_28868);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__28858_28867);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4661__auto__);
})():format.call(null,"%s\n",cause)));

break;
case "macroexpansion":
return format.call(null,"Unexpected error%s macroexpanding %sat (%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);

break;
case "compile-syntax-check":
return format.call(null,"Syntax error%s compiling %sat (%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);

break;
case "compilation":
return format.call(null,"Unexpected error%s compiling %sat (%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);

break;
case "read-eval-result":
return format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause);

break;
case "print-eval-result":
return format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause);

break;
case "execution":
if(cljs.core.truth_(spec)){
return format.call(null,"Execution error - invalid arguments to %s at (%s).\n%s",symbol,loc,(function (){var sb__4661__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__28862_28871 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__28863_28872 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__28864_28873 = true;
var _STAR_print_fn_STAR__temp_val__28865_28874 = (function (x__4662__auto__){
return sb__4661__auto__.append(x__4662__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__28864_28873);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__28865_28874);

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.call(null,(function (p1__28853_SHARP_){
return cljs.core.dissoc.call(null,p1__28853_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__28863_28872);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__28862_28871);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4661__auto__);
})());
} else {
return format.call(null,"Execution error%s at %s(%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__28857__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str.call(null,cljs.repl.ex_triage.call(null,cljs.repl.Error__GT_map.call(null,error)));
});

//# sourceMappingURL=repl.js.map?rel=1609259930951
