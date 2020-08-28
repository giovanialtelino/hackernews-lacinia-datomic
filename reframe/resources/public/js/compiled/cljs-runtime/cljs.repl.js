goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('goog.string');
goog.require('goog.string.format');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__60348){
var map__60349 = p__60348;
var map__60349__$1 = (((((!((map__60349 == null))))?(((((map__60349.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60349.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60349):map__60349);
var m = map__60349__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60349__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60349__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__4126__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
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
})()], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__60353_60642 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__60354_60643 = null;
var count__60355_60644 = (0);
var i__60356_60645 = (0);
while(true){
if((i__60356_60645 < count__60355_60644)){
var f_60646 = chunk__60354_60643.cljs$core$IIndexed$_nth$arity$2(null,i__60356_60645);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_60646], 0));


var G__60647 = seq__60353_60642;
var G__60648 = chunk__60354_60643;
var G__60649 = count__60355_60644;
var G__60650 = (i__60356_60645 + (1));
seq__60353_60642 = G__60647;
chunk__60354_60643 = G__60648;
count__60355_60644 = G__60649;
i__60356_60645 = G__60650;
continue;
} else {
var temp__5735__auto___60651 = cljs.core.seq(seq__60353_60642);
if(temp__5735__auto___60651){
var seq__60353_60652__$1 = temp__5735__auto___60651;
if(cljs.core.chunked_seq_QMARK_(seq__60353_60652__$1)){
var c__4556__auto___60653 = cljs.core.chunk_first(seq__60353_60652__$1);
var G__60654 = cljs.core.chunk_rest(seq__60353_60652__$1);
var G__60655 = c__4556__auto___60653;
var G__60656 = cljs.core.count(c__4556__auto___60653);
var G__60657 = (0);
seq__60353_60642 = G__60654;
chunk__60354_60643 = G__60655;
count__60355_60644 = G__60656;
i__60356_60645 = G__60657;
continue;
} else {
var f_60658 = cljs.core.first(seq__60353_60652__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_60658], 0));


var G__60660 = cljs.core.next(seq__60353_60652__$1);
var G__60661 = null;
var G__60662 = (0);
var G__60663 = (0);
seq__60353_60642 = G__60660;
chunk__60354_60643 = G__60661;
count__60355_60644 = G__60662;
i__60356_60645 = G__60663;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_60666 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4126__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_60666], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_60666)))?cljs.core.second(arglists_60666):arglists_60666)], 0));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Macro"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__60358_60668 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__60359_60669 = null;
var count__60360_60670 = (0);
var i__60361_60671 = (0);
while(true){
if((i__60361_60671 < count__60360_60670)){
var vec__60378_60672 = chunk__60359_60669.cljs$core$IIndexed$_nth$arity$2(null,i__60361_60671);
var name_60673 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60378_60672,(0),null);
var map__60381_60674 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60378_60672,(1),null);
var map__60381_60675__$1 = (((((!((map__60381_60674 == null))))?(((((map__60381_60674.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60381_60674.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60381_60674):map__60381_60674);
var doc_60676 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60381_60675__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_60677 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60381_60675__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_60673], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_60677], 0));

if(cljs.core.truth_(doc_60676)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_60676], 0));
} else {
}


var G__60678 = seq__60358_60668;
var G__60679 = chunk__60359_60669;
var G__60680 = count__60360_60670;
var G__60681 = (i__60361_60671 + (1));
seq__60358_60668 = G__60678;
chunk__60359_60669 = G__60679;
count__60360_60670 = G__60680;
i__60361_60671 = G__60681;
continue;
} else {
var temp__5735__auto___60682 = cljs.core.seq(seq__60358_60668);
if(temp__5735__auto___60682){
var seq__60358_60683__$1 = temp__5735__auto___60682;
if(cljs.core.chunked_seq_QMARK_(seq__60358_60683__$1)){
var c__4556__auto___60684 = cljs.core.chunk_first(seq__60358_60683__$1);
var G__60685 = cljs.core.chunk_rest(seq__60358_60683__$1);
var G__60686 = c__4556__auto___60684;
var G__60687 = cljs.core.count(c__4556__auto___60684);
var G__60688 = (0);
seq__60358_60668 = G__60685;
chunk__60359_60669 = G__60686;
count__60360_60670 = G__60687;
i__60361_60671 = G__60688;
continue;
} else {
var vec__60390_60689 = cljs.core.first(seq__60358_60683__$1);
var name_60690 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60390_60689,(0),null);
var map__60393_60691 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60390_60689,(1),null);
var map__60393_60692__$1 = (((((!((map__60393_60691 == null))))?(((((map__60393_60691.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60393_60691.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60393_60691):map__60393_60691);
var doc_60693 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60393_60692__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_60694 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60393_60692__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_60690], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_60694], 0));

if(cljs.core.truth_(doc_60693)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_60693], 0));
} else {
}


var G__60695 = cljs.core.next(seq__60358_60683__$1);
var G__60696 = null;
var G__60697 = (0);
var G__60698 = (0);
seq__60358_60668 = G__60695;
chunk__60359_60669 = G__60696;
count__60360_60670 = G__60697;
i__60361_60671 = G__60698;
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
var temp__5735__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n)),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5735__auto__)){
var fnspec = temp__5735__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__60401 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__60402 = null;
var count__60403 = (0);
var i__60404 = (0);
while(true){
if((i__60404 < count__60403)){
var role = chunk__60402.cljs$core$IIndexed$_nth$arity$2(null,i__60404);
var temp__5735__auto___60699__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___60699__$1)){
var spec_60700 = temp__5735__auto___60699__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_60700)], 0));
} else {
}


var G__60701 = seq__60401;
var G__60702 = chunk__60402;
var G__60703 = count__60403;
var G__60704 = (i__60404 + (1));
seq__60401 = G__60701;
chunk__60402 = G__60702;
count__60403 = G__60703;
i__60404 = G__60704;
continue;
} else {
var temp__5735__auto____$1 = cljs.core.seq(seq__60401);
if(temp__5735__auto____$1){
var seq__60401__$1 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__60401__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__60401__$1);
var G__60705 = cljs.core.chunk_rest(seq__60401__$1);
var G__60706 = c__4556__auto__;
var G__60707 = cljs.core.count(c__4556__auto__);
var G__60708 = (0);
seq__60401 = G__60705;
chunk__60402 = G__60706;
count__60403 = G__60707;
i__60404 = G__60708;
continue;
} else {
var role = cljs.core.first(seq__60401__$1);
var temp__5735__auto___60710__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___60710__$2)){
var spec_60711 = temp__5735__auto___60710__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_60711)], 0));
} else {
}


var G__60715 = cljs.core.next(seq__60401__$1);
var G__60716 = null;
var G__60717 = (0);
var G__60718 = (0);
seq__60401 = G__60715;
chunk__60402 = G__60716;
count__60403 = G__60717;
i__60404 = G__60718;
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
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol(null,"ExceptionInfo","ExceptionInfo",294935087,null):(((t instanceof Error))?cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("js",t.name):null
))], null),(function (){var temp__5735__auto__ = cljs.core.ex_message(t);
if(cljs.core.truth_(temp__5735__auto__)){
var msg = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = cljs.core.ex_data(t);
if(cljs.core.truth_(temp__5735__auto__)){
var ed = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})()], 0));
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__60723 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__60724 = cljs.core.ex_cause(t);
via = G__60723;
t = G__60724;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek(via);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5735__auto__ = cljs.core.ex_message(root);
if(cljs.core.truth_(temp__5735__auto__)){
var root_msg = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = cljs.core.ex_data(root);
if(cljs.core.truth_(temp__5735__auto__)){
var data = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data(o));
if(cljs.core.truth_(temp__5735__auto__)){
var phase = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})()], 0));
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
var map__60446 = datafied_throwable;
var map__60446__$1 = (((((!((map__60446 == null))))?(((((map__60446.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60446.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60446):map__60446);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60446__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60446__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__60446__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__60447 = cljs.core.last(via);
var map__60447__$1 = (((((!((map__60447 == null))))?(((((map__60447.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60447.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60447):map__60447);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60447__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60447__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60447__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__60448 = data;
var map__60448__$1 = (((((!((map__60448 == null))))?(((((map__60448.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60448.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60448):map__60448);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60448__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60448__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60448__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__60450 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__60450__$1 = (((((!((map__60450 == null))))?(((((map__60450.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60450.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60450):map__60450);
var top_data = map__60450__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60450__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__60458 = phase;
var G__60458__$1 = (((G__60458 instanceof cljs.core.Keyword))?G__60458.fqn:null);
switch (G__60458__$1) {
case "read-source":
var map__60463 = data;
var map__60463__$1 = (((((!((map__60463 == null))))?(((((map__60463.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60463.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60463):map__60463);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60463__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60463__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__60475 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__60475__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__60475,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__60475);
var G__60475__$2 = (cljs.core.truth_((function (){var fexpr__60476 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__60476.cljs$core$IFn$_invoke$arity$1 ? fexpr__60476.cljs$core$IFn$_invoke$arity$1(source) : fexpr__60476.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__60475__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__60475__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__60475__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__60475__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__60477 = top_data;
var G__60477__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__60477,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__60477);
var G__60477__$2 = (cljs.core.truth_((function (){var fexpr__60482 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__60482.cljs$core$IFn$_invoke$arity$1 ? fexpr__60482.cljs$core$IFn$_invoke$arity$1(source) : fexpr__60482.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__60477__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__60477__$1);
var G__60477__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__60477__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__60477__$2);
var G__60477__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__60477__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__60477__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__60477__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__60477__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__60493 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60493,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60493,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60493,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60493,(3),null);
var G__60503 = top_data;
var G__60503__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__60503,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__60503);
var G__60503__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__60503__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__60503__$1);
var G__60503__$3 = (cljs.core.truth_((function (){var and__4115__auto__ = source__$1;
if(cljs.core.truth_(and__4115__auto__)){
return method;
} else {
return and__4115__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__60503__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__60503__$2);
var G__60503__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__60503__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__60503__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__60503__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__60503__$4;
}

break;
case "execution":
var vec__60508 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60508,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60508,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60508,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60508,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__60445_SHARP_){
var or__4126__auto__ = (p1__60445_SHARP_ == null);
if(or__4126__auto__){
return or__4126__auto__;
} else {
var fexpr__60512 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__60512.cljs$core$IFn$_invoke$arity$1 ? fexpr__60512.cljs$core$IFn$_invoke$arity$1(p1__60445_SHARP_) : fexpr__60512.call(null,p1__60445_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4126__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return line;
}
})();
var G__60513 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__60513__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__60513,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__60513);
var G__60513__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__60513__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__60513__$1);
var G__60513__$3 = (cljs.core.truth_((function (){var or__4126__auto__ = fn;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
var and__4115__auto__ = source__$1;
if(cljs.core.truth_(and__4115__auto__)){
return method;
} else {
return and__4115__auto__;
}
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__60513__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4126__auto__ = fn;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__60513__$2);
var G__60513__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__60513__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__60513__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__60513__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__60513__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__60458__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__60516){
var map__60521 = p__60516;
var map__60521__$1 = (((((!((map__60521 == null))))?(((((map__60521.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60521.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60521):map__60521);
var triage_data = map__60521__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60521__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60521__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60521__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60521__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60521__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60521__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60521__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60521__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4126__auto__ = source;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4126__auto__ = line;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name((function (){var or__4126__auto__ = class$;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__60541 = phase;
var G__60541__$1 = (((G__60541 instanceof cljs.core.Keyword))?G__60541.fqn:null);
switch (G__60541__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__60544 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__60545 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__60546 = loc;
var G__60547 = (cljs.core.truth_(spec)?(function (){var sb__4667__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__60549_60755 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__60550_60756 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__60551_60757 = true;
var _STAR_print_fn_STAR__temp_val__60552_60758 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__60551_60757);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__60552_60758);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__60514_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__60514_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__60550_60756);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__60549_60755);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4667__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__60544,G__60545,G__60546,G__60547) : format.call(null,G__60544,G__60545,G__60546,G__60547));

break;
case "macroexpansion":
var G__60565 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__60566 = cause_type;
var G__60567 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__60568 = loc;
var G__60569 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__60565,G__60566,G__60567,G__60568,G__60569) : format.call(null,G__60565,G__60566,G__60567,G__60568,G__60569));

break;
case "compile-syntax-check":
var G__60574 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__60575 = cause_type;
var G__60576 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__60577 = loc;
var G__60578 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__60574,G__60575,G__60576,G__60577,G__60578) : format.call(null,G__60574,G__60575,G__60576,G__60577,G__60578));

break;
case "compilation":
var G__60579 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__60580 = cause_type;
var G__60581 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__60582 = loc;
var G__60583 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__60579,G__60580,G__60581,G__60582,G__60583) : format.call(null,G__60579,G__60580,G__60581,G__60582,G__60583));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__60588 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__60589 = symbol;
var G__60590 = loc;
var G__60591 = (function (){var sb__4667__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__60592_60762 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__60593_60763 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__60594_60764 = true;
var _STAR_print_fn_STAR__temp_val__60595_60765 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__60594_60764);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__60595_60765);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__60515_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__60515_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__60593_60763);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__60592_60762);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4667__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__60588,G__60589,G__60590,G__60591) : format.call(null,G__60588,G__60589,G__60590,G__60591));
} else {
var G__60603 = "Execution error%s at %s(%s).\n%s\n";
var G__60604 = cause_type;
var G__60605 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__60606 = loc;
var G__60607 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__60603,G__60604,G__60605,G__60606,G__60607) : format.call(null,G__60603,G__60604,G__60605,G__60606,G__60607));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__60541__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
