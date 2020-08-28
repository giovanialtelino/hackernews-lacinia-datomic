goog.provide('re_graph.core');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('re_graph.internals');
goog.require('re_graph.logging');
goog.require('clojure.string');
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("re-graph.core","mutate","re-graph.core/mutate",602713205),re_graph.internals.interceptors,(function (p__63210,p__63211){
var map__63212 = p__63210;
var map__63212__$1 = (((((!((map__63212 == null))))?(((((map__63212.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63212.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__63212):map__63212);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63212__$1,new cljs.core.Keyword(null,"db","db",993250759));
var dispatchable_event = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63212__$1,new cljs.core.Keyword(null,"dispatchable-event","dispatchable-event",-477590483));
var instance_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63212__$1,new cljs.core.Keyword(null,"instance-name","instance-name",-2046274941));
var vec__63213 = p__63211;
var query_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63213,(0),null);
var query = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63213,(1),null);
var variables = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63213,(2),null);
var callback_event = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63213,(3),null);
var event = vec__63213;
var query__$1 = ["mutation ",clojure.string.replace(query,/^mutation\s?/,"")].join('');
if(cljs.core.truth_((function (){var or__4126__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"http-requests","http-requests",-1122754764),query_id], null));
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"subscriptions","subscriptions",1250949776),query_id], null));
}
})())){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
if(cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"websocket","websocket",-1714963101),new cljs.core.Keyword(null,"ready?","ready?",-105765697)], null)))){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"subscriptions","subscriptions",1250949776),query_id], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"callback","callback",-705136228),callback_event], null)),new cljs.core.Keyword("re-graph.internals","send-ws","re-graph.internals/send-ws",-599941143),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"websocket","websocket",-1714963101),new cljs.core.Keyword(null,"connection","connection",-123599300)], null)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),query_id,new cljs.core.Keyword(null,"type","type",1174270348),"start",new cljs.core.Keyword(null,"payload","payload",-383036092),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"query","query",-1288509510),query__$1,new cljs.core.Keyword(null,"variables","variables",1563680814),variables], null)], null)], null)], null);
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"websocket","websocket",-1714963101).cljs$core$IFn$_invoke$arity$1(db))){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"websocket","websocket",-1714963101),new cljs.core.Keyword(null,"queue","queue",1455835879)], null),cljs.core.conj,dispatchable_event)], null);
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"http-requests","http-requests",-1122754764),query_id], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"callback","callback",-705136228),callback_event], null)),new cljs.core.Keyword("re-graph.internals","send-http","re-graph.internals/send-http",-1765659875),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [instance_name,query_id,new cljs.core.Keyword(null,"http-url","http-url",-2043776269).cljs$core$IFn$_invoke$arity$1(db),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"request","request",1772954723),new cljs.core.Keyword(null,"http-parameters","http-parameters",652689694).cljs$core$IFn$_invoke$arity$1(db),new cljs.core.Keyword(null,"payload","payload",-383036092),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"query","query",-1288509510),query__$1,new cljs.core.Keyword(null,"variables","variables",1563680814),variables], null)], null)], null)], null);

}
}
}
}));
/**
 * Execute a GraphQL mutation. The arguments are:
 * 
 *   [instance-name query-string variables callback]
 * 
 *   If the optional `instance-name` is not provided, the default instance is
 *   used. The callback function will receive the result of the mutation as its
 *   sole argument.
 */
re_graph.core.mutate = (function re_graph$core$mutate(var_args){
var args__4742__auto__ = [];
var len__4736__auto___63361 = arguments.length;
var i__4737__auto___63362 = (0);
while(true){
if((i__4737__auto___63362 < len__4736__auto___63361)){
args__4742__auto__.push((arguments[i__4737__auto___63362]));

var G__63363 = (i__4737__auto___63362 + (1));
i__4737__auto___63362 = G__63363;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return re_graph.core.mutate.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(re_graph.core.mutate.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var callback_fn = cljs.core.last(args);
var G__63221 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("re-graph.core","mutate","re-graph.core/mutate",602713205)], null),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.vec(cljs.core.butlast(args)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("re-graph.internals","callback","re-graph.internals/callback",-367275336),callback_fn], null)));
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__63221) : re_frame.core.dispatch.call(null,G__63221));
}));

(re_graph.core.mutate.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(re_graph.core.mutate.cljs$lang$applyTo = (function (seq63217){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq63217));
}));

re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("re-graph.core","query","re-graph.core/query",-2079477791),re_graph.internals.interceptors,(function (p__63225,p__63226){
var map__63227 = p__63225;
var map__63227__$1 = (((((!((map__63227 == null))))?(((((map__63227.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63227.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__63227):map__63227);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63227__$1,new cljs.core.Keyword(null,"db","db",993250759));
var dispatchable_event = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63227__$1,new cljs.core.Keyword(null,"dispatchable-event","dispatchable-event",-477590483));
var instance_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63227__$1,new cljs.core.Keyword(null,"instance-name","instance-name",-2046274941));
var vec__63228 = p__63226;
var query_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63228,(0),null);
var query = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63228,(1),null);
var variables = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63228,(2),null);
var callback_event = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63228,(3),null);
var event = vec__63228;
var query__$1 = ["query ",clojure.string.replace(query,/^query\s?/,"")].join('');
if(cljs.core.truth_((function (){var or__4126__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"http-requests","http-requests",-1122754764),query_id], null));
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"subscriptions","subscriptions",1250949776),query_id], null));
}
})())){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
if(cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"websocket","websocket",-1714963101),new cljs.core.Keyword(null,"ready?","ready?",-105765697)], null)))){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"subscriptions","subscriptions",1250949776),query_id], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"callback","callback",-705136228),callback_event], null)),new cljs.core.Keyword("re-graph.internals","send-ws","re-graph.internals/send-ws",-599941143),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"websocket","websocket",-1714963101),new cljs.core.Keyword(null,"connection","connection",-123599300)], null)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),query_id,new cljs.core.Keyword(null,"type","type",1174270348),"start",new cljs.core.Keyword(null,"payload","payload",-383036092),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"query","query",-1288509510),query__$1,new cljs.core.Keyword(null,"variables","variables",1563680814),variables], null)], null)], null)], null);
} else {
if(cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"websocket","websocket",-1714963101)], null)))){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"websocket","websocket",-1714963101),new cljs.core.Keyword(null,"queue","queue",1455835879)], null),cljs.core.conj,dispatchable_event)], null);
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"http-requests","http-requests",-1122754764),query_id], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"callback","callback",-705136228),callback_event], null)),new cljs.core.Keyword("re-graph.internals","send-http","re-graph.internals/send-http",-1765659875),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [instance_name,query_id,new cljs.core.Keyword(null,"http-url","http-url",-2043776269).cljs$core$IFn$_invoke$arity$1(db),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"request","request",1772954723),new cljs.core.Keyword(null,"http-parameters","http-parameters",652689694).cljs$core$IFn$_invoke$arity$1(db),new cljs.core.Keyword(null,"payload","payload",-383036092),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"query","query",-1288509510),query__$1,new cljs.core.Keyword(null,"variables","variables",1563680814),variables], null)], null)], null)], null);

}
}
}
}));
/**
 * Execute a GraphQL query. The arguments are:
 * 
 *   [instance-name query-string variables callback]
 * 
 *   If the optional `instance-name` is not provided, the default instance is
 *   used. The callback function will receive the result of the query as its
 *   sole argument.
 */
re_graph.core.query = (function re_graph$core$query(var_args){
var args__4742__auto__ = [];
var len__4736__auto___63400 = arguments.length;
var i__4737__auto___63401 = (0);
while(true){
if((i__4737__auto___63401 < len__4736__auto___63400)){
args__4742__auto__.push((arguments[i__4737__auto___63401]));

var G__63404 = (i__4737__auto___63401 + (1));
i__4737__auto___63401 = G__63404;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return re_graph.core.query.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(re_graph.core.query.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var callback_fn = cljs.core.last(args);
var G__63244 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("re-graph.core","query","re-graph.core/query",-2079477791)], null),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.vec(cljs.core.butlast(args)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("re-graph.internals","callback","re-graph.internals/callback",-367275336),callback_fn], null)));
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__63244) : re_frame.core.dispatch.call(null,G__63244));
}));

(re_graph.core.query.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(re_graph.core.query.cljs$lang$applyTo = (function (seq63235){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq63235));
}));

re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("re-graph.core","abort","re-graph.core/abort",368406247),re_graph.internals.interceptors,(function (p__63245,p__63246){
var map__63247 = p__63245;
var map__63247__$1 = (((((!((map__63247 == null))))?(((((map__63247.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63247.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__63247):map__63247);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63247__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__63248 = p__63246;
var query_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63248,(0),null);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.update.cljs$core$IFn$_invoke$arity$4(db,new cljs.core.Keyword(null,"subscriptions","subscriptions",1250949776),cljs.core.dissoc,query_id),new cljs.core.Keyword(null,"http-requests","http-requests",-1122754764),cljs.core.dissoc,query_id)], null),(function (){var temp__5735__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"http-requests","http-requests",-1122754764),query_id,new cljs.core.Keyword(null,"abort","abort",521193198)], null));
if(cljs.core.truth_(temp__5735__auto__)){
var abort_fn = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("re-graph.internals","call-abort","re-graph.internals/call-abort",794010792),abort_fn], null);
} else {
return null;
}
})()], 0));
}));
re_graph.core.abort = (function re_graph$core$abort(var_args){
var G__63257 = arguments.length;
switch (G__63257) {
case 1:
return re_graph.core.abort.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return re_graph.core.abort.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(re_graph.core.abort.cljs$core$IFn$_invoke$arity$1 = (function (query_id){
return re_graph.core.abort.cljs$core$IFn$_invoke$arity$2(re_graph.internals.default_instance_name,query_id);
}));

(re_graph.core.abort.cljs$core$IFn$_invoke$arity$2 = (function (instance_name,query_id){
var G__63265 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("re-graph.core","abort","re-graph.core/abort",368406247),instance_name,query_id], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__63265) : re_frame.core.dispatch.call(null,G__63265));
}));

(re_graph.core.abort.cljs$lang$maxFixedArity = 2);

re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("re-graph.core","subscribe","re-graph.core/subscribe",131944293),re_graph.internals.interceptors,(function (p__63267,p__63268){
var map__63270 = p__63267;
var map__63270__$1 = (((((!((map__63270 == null))))?(((((map__63270.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63270.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__63270):map__63270);
var cofx = map__63270__$1;
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63270__$1,new cljs.core.Keyword(null,"db","db",993250759));
var instance_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63270__$1,new cljs.core.Keyword(null,"instance-name","instance-name",-2046274941));
var dispatchable_event = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63270__$1,new cljs.core.Keyword(null,"dispatchable-event","dispatchable-event",-477590483));
var vec__63271 = p__63268;
var subscription_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63271,(0),null);
var query = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63271,(1),null);
var variables = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63271,(2),null);
var callback_event = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63271,(3),null);
var event = vec__63271;
if(cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"subscriptions","subscriptions",1250949776),cljs.core.name(subscription_id),new cljs.core.Keyword(null,"active?","active?",459499776)], null)))){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
if(cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"websocket","websocket",-1714963101),new cljs.core.Keyword(null,"ready?","ready?",-105765697)], null)))){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"subscriptions","subscriptions",1250949776),cljs.core.name(subscription_id)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"callback","callback",-705136228),callback_event,new cljs.core.Keyword(null,"event","event",301435442),dispatchable_event,new cljs.core.Keyword(null,"active?","active?",459499776),true], null)),new cljs.core.Keyword("re-graph.internals","send-ws","re-graph.internals/send-ws",-599941143),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"websocket","websocket",-1714963101),new cljs.core.Keyword(null,"connection","connection",-123599300)], null)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.name(subscription_id),new cljs.core.Keyword(null,"type","type",1174270348),"start",new cljs.core.Keyword(null,"payload","payload",-383036092),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"query","query",-1288509510),["subscription ",clojure.string.replace(query,/^subscription\s?/,"")].join(''),new cljs.core.Keyword(null,"variables","variables",1563680814),variables], null)], null)], null)], null);
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"websocket","websocket",-1714963101).cljs$core$IFn$_invoke$arity$1(db))){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"websocket","websocket",-1714963101),new cljs.core.Keyword(null,"queue","queue",1455835879)], null),cljs.core.conj,dispatchable_event)], null);
} else {
return re_graph.logging.error.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["Error creating subscription ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(subscription_id)," on instance ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(instance_name),": Websocket is not enabled, subscriptions are not possible. Please check your re-graph configuration"].join('')], 0));

}
}
}
}));
re_graph.core.subscribe = (function re_graph$core$subscribe(var_args){
var G__63279 = arguments.length;
switch (G__63279) {
case 4:
return re_graph.core.subscribe.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return re_graph.core.subscribe.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(re_graph.core.subscribe.cljs$core$IFn$_invoke$arity$4 = (function (subscription_id,query,variables,callback_fn){
return re_graph.core.subscribe.cljs$core$IFn$_invoke$arity$5(re_graph.internals.default_instance_name,subscription_id,query,variables,callback_fn);
}));

(re_graph.core.subscribe.cljs$core$IFn$_invoke$arity$5 = (function (instance_name,subscription_id,query,variables,callback_fn){
var G__63283 = new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("re-graph.core","subscribe","re-graph.core/subscribe",131944293),instance_name,subscription_id,query,variables,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("re-graph.internals","callback","re-graph.internals/callback",-367275336),callback_fn], null)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__63283) : re_frame.core.dispatch.call(null,G__63283));
}));

(re_graph.core.subscribe.cljs$lang$maxFixedArity = 5);

re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("re-graph.core","unsubscribe","re-graph.core/unsubscribe",1452330940),re_graph.internals.interceptors,(function (p__63286,p__63287){
var map__63288 = p__63286;
var map__63288__$1 = (((((!((map__63288 == null))))?(((((map__63288.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63288.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__63288):map__63288);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63288__$1,new cljs.core.Keyword(null,"db","db",993250759));
var instance_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63288__$1,new cljs.core.Keyword(null,"instance-name","instance-name",-2046274941));
var vec__63289 = p__63287;
var subscription_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63289,(0),null);
var event = vec__63289;
if(cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"websocket","websocket",-1714963101),new cljs.core.Keyword(null,"ready?","ready?",-105765697)], null)))){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.update.cljs$core$IFn$_invoke$arity$4(db,new cljs.core.Keyword(null,"subscriptions","subscriptions",1250949776),cljs.core.dissoc,cljs.core.name(subscription_id)),new cljs.core.Keyword("re-graph.internals","send-ws","re-graph.internals/send-ws",-599941143),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"websocket","websocket",-1714963101),new cljs.core.Keyword(null,"connection","connection",-123599300)], null)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.name(subscription_id),new cljs.core.Keyword(null,"type","type",1174270348),"stop"], null)], null)], null);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"websocket","websocket",-1714963101),new cljs.core.Keyword(null,"queue","queue",1455835879)], null),cljs.core.conj,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("re-graph.core","unsubscribe","re-graph.core/unsubscribe",1452330940),instance_name,subscription_id], null))], null);
}
}));
re_graph.core.unsubscribe = (function re_graph$core$unsubscribe(var_args){
var G__63296 = arguments.length;
switch (G__63296) {
case 1:
return re_graph.core.unsubscribe.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return re_graph.core.unsubscribe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(re_graph.core.unsubscribe.cljs$core$IFn$_invoke$arity$1 = (function (subscription_id){
return re_graph.core.unsubscribe.cljs$core$IFn$_invoke$arity$2(re_graph.internals.default_instance_name,subscription_id);
}));

(re_graph.core.unsubscribe.cljs$core$IFn$_invoke$arity$2 = (function (instance_name,subscription_id){
var G__63297 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("re-graph.core","unsubscribe","re-graph.core/unsubscribe",1452330940),instance_name,subscription_id], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__63297) : re_frame.core.dispatch.call(null,G__63297));
}));

(re_graph.core.unsubscribe.cljs$lang$maxFixedArity = 2);

re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("re-graph.core","init","re-graph.core/init",1695143043),(function (p__63298,p__63299){
var map__63300 = p__63298;
var map__63300__$1 = (((((!((map__63300 == null))))?(((((map__63300.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63300.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__63300):map__63300);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63300__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__63301 = p__63299;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63301,(0),null);
var instance_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63301,(1),null);
var opts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63301,(2),null);
var vec__63305 = (((((instance_name == null)) && ((opts == null))))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_graph.internals.default_instance_name,cljs.core.PersistentArrayMap.EMPTY], null):((cljs.core.map_QMARK_(instance_name))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_graph.internals.default_instance_name,instance_name], null):(((instance_name == null))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_graph.internals.default_instance_name,opts], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [instance_name,opts], null)
)));
var instance_name__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63305,(0),null);
var opts__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63305,(1),null);
var map__63308 = opts__$1;
var map__63308__$1 = (((((!((map__63308 == null))))?(((((map__63308.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63308.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__63308):map__63308);
var ws_url = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__63308__$1,new cljs.core.Keyword(null,"ws-url","ws-url",-1466481235),re_graph.internals.default_ws_url());
var ws_sub_protocol = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__63308__$1,new cljs.core.Keyword(null,"ws-sub-protocol","ws-sub-protocol",2122679143),"graphql-ws");
var ws_reconnect_timeout = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__63308__$1,new cljs.core.Keyword(null,"ws-reconnect-timeout","ws-reconnect-timeout",881557711),(5000));
var resume_subscriptions_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__63308__$1,new cljs.core.Keyword(null,"resume-subscriptions?","resume-subscriptions?",-1500602553),true);
var connection_init_payload = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__63308__$1,new cljs.core.Keyword(null,"connection-init-payload","connection-init-payload",-2110352705),cljs.core.PersistentArrayMap.EMPTY);
var http_url = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__63308__$1,new cljs.core.Keyword(null,"http-url","http-url",-2043776269),"/graphql");
var http_parameters = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__63308__$1,new cljs.core.Keyword(null,"http-parameters","http-parameters",652689694),cljs.core.PersistentArrayMap.EMPTY);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"re-graph","re-graph",-2120583638),instance_name__$1], null),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(cljs.core.truth_(ws_url)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"websocket","websocket",-1714963101),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"url","url",276297046),ws_url,new cljs.core.Keyword(null,"sub-protocol","sub-protocol",410139647),ws_sub_protocol,new cljs.core.Keyword(null,"ready?","ready?",-105765697),false,new cljs.core.Keyword(null,"connection-init-payload","connection-init-payload",-2110352705),connection_init_payload,new cljs.core.Keyword(null,"queue","queue",1455835879),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"reconnect-timeout","reconnect-timeout",839758170),ws_reconnect_timeout,new cljs.core.Keyword(null,"resume-subscriptions?","resume-subscriptions?",-1500602553),resume_subscriptions_QMARK_], null)], null):null),(cljs.core.truth_(http_url)?new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"http-url","http-url",-2043776269),http_url,new cljs.core.Keyword(null,"http-parameters","http-parameters",652689694),http_parameters], null):null)], 0)))], null),(cljs.core.truth_(ws_url)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("re-graph.internals","connect-ws","re-graph.internals/connect-ws",769497536),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [instance_name__$1,ws_url,ws_sub_protocol], null)], null):null)], 0));
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("re-graph.core","destroy","re-graph.core/destroy",-163079292),re_graph.internals.interceptors,(function (p__63314,_){
var map__63315 = p__63314;
var map__63315__$1 = (((((!((map__63315 == null))))?(((((map__63315.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63315.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__63315):map__63315);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63315__$1,new cljs.core.Keyword(null,"db","db",993250759));
var instance_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63315__$1,new cljs.core.Keyword(null,"instance-name","instance-name",-2046274941));
var temp__5733__auto__ = cljs.core.not_empty(cljs.core.keys(new cljs.core.Keyword(null,"subscriptions","subscriptions",1250949776).cljs$core$IFn$_invoke$arity$1(db)));
if(cljs.core.truth_(temp__5733__auto__)){
var subscription_ids = temp__5733__auto__;
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),(function (){var iter__4529__auto__ = (function re_graph$core$iter__63317(s__63318){
return (new cljs.core.LazySeq(null,(function (){
var s__63318__$1 = s__63318;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__63318__$1);
if(temp__5735__auto__){
var s__63318__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__63318__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__63318__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__63320 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__63319 = (0);
while(true){
if((i__63319 < size__4528__auto__)){
var subscription_id = cljs.core._nth(c__4527__auto__,i__63319);
cljs.core.chunk_append(b__63320,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("re-graph.core","unsubscribe","re-graph.core/unsubscribe",1452330940),instance_name,subscription_id], null));

var G__63508 = (i__63319 + (1));
i__63319 = G__63508;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__63320),re_graph$core$iter__63317(cljs.core.chunk_rest(s__63318__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__63320),null);
}
} else {
var subscription_id = cljs.core.first(s__63318__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("re-graph.core","unsubscribe","re-graph.core/unsubscribe",1452330940),instance_name,subscription_id], null),re_graph$core$iter__63317(cljs.core.rest(s__63318__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(subscription_ids);
})(),new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("re-graph.core","destroy","re-graph.core/destroy",-163079292),instance_name], null)], null);
} else {
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),re_graph.internals.destroyed_instance], null),(function (){var temp__5735__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"websocket","websocket",-1714963101),new cljs.core.Keyword(null,"connection","connection",-123599300)], null));
if(cljs.core.truth_(temp__5735__auto__)){
var ws = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("re-graph.internals","disconnect-ws","re-graph.internals/disconnect-ws",-1441616164),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ws], null)], null);
} else {
return null;
}
})()], 0));
}
}));
re_graph.core.init = (function re_graph$core$init(var_args){
var G__63326 = arguments.length;
switch (G__63326) {
case 1:
return re_graph.core.init.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return re_graph.core.init.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(re_graph.core.init.cljs$core$IFn$_invoke$arity$1 = (function (opts){
return re_graph.core.init.cljs$core$IFn$_invoke$arity$2(re_graph.internals.default_instance_name,opts);
}));

(re_graph.core.init.cljs$core$IFn$_invoke$arity$2 = (function (instance_name,opts){
var G__63327 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("re-graph.core","init","re-graph.core/init",1695143043),instance_name,opts], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__63327) : re_frame.core.dispatch.call(null,G__63327));
}));

(re_graph.core.init.cljs$lang$maxFixedArity = 2);

re_graph.core.destroy = (function re_graph$core$destroy(var_args){
var G__63329 = arguments.length;
switch (G__63329) {
case 0:
return re_graph.core.destroy.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return re_graph.core.destroy.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(re_graph.core.destroy.cljs$core$IFn$_invoke$arity$0 = (function (){
return re_graph.core.destroy.cljs$core$IFn$_invoke$arity$1(re_graph.internals.default_instance_name);
}));

(re_graph.core.destroy.cljs$core$IFn$_invoke$arity$1 = (function (instance_name){
var G__63330 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("re-graph.core","destroy","re-graph.core/destroy",-163079292),instance_name], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__63330) : re_frame.core.dispatch.call(null,G__63330));
}));

(re_graph.core.destroy.cljs$lang$maxFixedArity = 1);


//# sourceMappingURL=re_graph.core.js.map
