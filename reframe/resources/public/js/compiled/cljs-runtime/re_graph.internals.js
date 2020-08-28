goog.provide('re_graph.internals');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('re_frame.interceptor');
goog.require('re_frame.std_interceptors');
goog.require('re_frame.interop');
goog.require('re_graph.logging');
goog.require('cljs_http.client');
goog.require('cljs_http.core');
goog.require('cljs.core.async');
re_graph.internals.default_instance_name = new cljs.core.Keyword("re-graph.internals","default","re-graph.internals/default",-1918427164);
re_graph.internals.destroyed_instance = new cljs.core.Keyword("re-graph.internals","destroyed-instance","re-graph.internals/destroyed-instance",645691936);
re_graph.internals.cons_interceptor = (function re_graph$internals$cons_interceptor(ctx,interceptor){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(ctx,new cljs.core.Keyword(null,"queue","queue",1455835879),(function (p1__63003_SHARP_){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.into.cljs$core$IFn$_invoke$arity$2(re_frame.interop.empty_queue,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [interceptor], null)),p1__63003_SHARP_);
}));
});
re_graph.internals.encode = (function re_graph$internals$encode(obj){
return JSON.stringify(cljs.core.clj__GT_js(obj));
});
re_graph.internals.message__GT_data = (function re_graph$internals$message__GT_data(m){
return cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(JSON.parse((m["data"])),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0));
});
re_graph.internals.generate_query_id = (function re_graph$internals$generate_query_id(){
return Math.random().toString((36)).substr((2),(8));
});
re_graph.internals.ensure_query_id = (function re_graph$internals$ensure_query_id(event_name,trimmed_event){
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("re-graph.core","query","re-graph.core/query",-2079477791),null,new cljs.core.Keyword("re-graph.core","mutate","re-graph.core/mutate",602713205),null], null), null),event_name)){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((3),cljs.core.count(trimmed_event))){
return cljs.core.vec(cljs.core.cons(re_graph.internals.generate_query_id(),trimmed_event));
} else {
return trimmed_event;
}
} else {
return trimmed_event;
}
});
re_graph.internals.re_graph_instance = re_frame.interceptor.__GT_interceptor.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword("re-graph.internals","instance","re-graph.internals/instance",-2055238806),new cljs.core.Keyword(null,"before","before",-1633692388),(function (ctx){
var re_graph__$1 = new cljs.core.Keyword(null,"re-graph","re-graph",-2120583638).cljs$core$IFn$_invoke$arity$1(re_frame.interceptor.get_coeffect.cljs$core$IFn$_invoke$arity$2(ctx,new cljs.core.Keyword(null,"db","db",993250759)));
var event = re_frame.interceptor.get_coeffect.cljs$core$IFn$_invoke$arity$2(ctx,new cljs.core.Keyword(null,"event","event",301435442));
var provided_instance_name = cljs.core.first(event);
var instance_name = ((cljs.core.contains_QMARK_(re_graph__$1,provided_instance_name))?provided_instance_name:re_graph.internals.default_instance_name);
var instance = cljs.core.get.cljs$core$IFn$_invoke$arity$2(re_graph__$1,instance_name);
var event_name = cljs.core.first(re_frame.interceptor.get_coeffect.cljs$core$IFn$_invoke$arity$2(ctx,new cljs.core.Keyword("re-frame.std-interceptors","untrimmed-event","re-frame.std-interceptors/untrimmed-event",-840935075)));
var trimmed_event = re_graph.internals.ensure_query_id(event_name,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(provided_instance_name,instance_name))?cljs.core.subvec.cljs$core$IFn$_invoke$arity$2(event,(1)):event));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(instance,new cljs.core.Keyword("re-graph.internals","destroyed-instance","re-graph.internals/destroyed-instance",645691936))){
return ctx;
} else {
if(cljs.core.truth_(instance)){
return re_frame.interceptor.assoc_coeffect(re_graph.internals.cons_interceptor(re_frame.interceptor.assoc_coeffect(re_frame.interceptor.assoc_coeffect(re_frame.interceptor.assoc_coeffect(ctx,new cljs.core.Keyword(null,"instance","instance",-2121349050),instance),new cljs.core.Keyword(null,"instance-name","instance-name",-2046274941),instance_name),new cljs.core.Keyword(null,"dispatchable-event","dispatchable-event",-477590483),cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [event_name,instance_name], null),trimmed_event)),re_frame.std_interceptors.path.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"re-graph","re-graph",-2120583638),instance_name], 0))),new cljs.core.Keyword(null,"event","event",301435442),trimmed_event);
} else {
re_graph.logging.error.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["No default instance of re-graph found but no valid instance name was provided. Valid instance names are:",cljs.core.keys(re_graph__$1),"but was provided with",provided_instance_name,"handling event",event_name], 0));

return ctx;

}
}
})], 0));
re_graph.internals.interceptors = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frame.core.trim_v,re_graph.internals.re_graph_instance], null);
/**
 * Validates that response has a valid GraphQL errors map
 */
re_graph.internals.valid_graphql_errors_QMARK_ = (function re_graph$internals$valid_graphql_errors_QMARK_(response){
return ((cljs.core.map_QMARK_(response)) && (cljs.core.vector_QMARK_(new cljs.core.Keyword(null,"errors","errors",-908790718).cljs$core$IFn$_invoke$arity$1(response))) && (cljs.core.seq(new cljs.core.Keyword(null,"errors","errors",-908790718).cljs$core$IFn$_invoke$arity$1(response))) && (cljs.core.every_QMARK_(cljs.core.map_QMARK_,new cljs.core.Keyword(null,"errors","errors",-908790718).cljs$core$IFn$_invoke$arity$1(response))));
});
/**
 * Inserts the HTTP status into the response for 3 conditions:
 * 1. Response contains a valid GraphQL errors map: update the map with HTTP status
 * 2. Response is a map but does not contain a valid errors map: merge in default errors
 * 3. Response is anything else: return default errors map
 */
re_graph.internals.insert_http_status = (function re_graph$internals$insert_http_status(response,status){
var f = (function (errors){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (error){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(error,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),new cljs.core.Keyword(null,"status","status",-1997798413)], null),(function (p1__63013_SHARP_){
var or__4126__auto__ = p1__63013_SHARP_;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return status;
}
}));
}),errors);
});
var default_errors = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"errors","errors",-908790718),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"message","message",-406056002),"The HTTP call failed.",new cljs.core.Keyword(null,"extensions","extensions",-1103629196),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"status","status",-1997798413),status], null)], null)], null)], null);
if(re_graph.internals.valid_graphql_errors_QMARK_(response)){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(response,new cljs.core.Keyword(null,"errors","errors",-908790718),f);
} else {
if(cljs.core.map_QMARK_(response)){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([response,default_errors], 0));
} else {
return default_errors;

}
}
});
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("re-graph.internals","http-complete","re-graph.internals/http-complete",1043989359),re_graph.internals.interceptors,(function (p__63014,p__63015){
var map__63016 = p__63014;
var map__63016__$1 = (((((!((map__63016 == null))))?(((((map__63016.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63016.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__63016):map__63016);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63016__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__63017 = p__63015;
var query_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63017,(0),null);
var payload = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63017,(1),null);
var callback_event = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"http-requests","http-requests",-1122754764),query_id,new cljs.core.Keyword(null,"callback","callback",-705136228)], null));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.update.cljs$core$IFn$_invoke$arity$4(db,new cljs.core.Keyword(null,"subscriptions","subscriptions",1250949776),cljs.core.dissoc,query_id),new cljs.core.Keyword(null,"http-requests","http-requests",-1122754764),cljs.core.dissoc,query_id),new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(callback_event,payload)], null);
}));
var G__63021_63239 = new cljs.core.Keyword("re-graph.internals","call-abort","re-graph.internals/call-abort",794010792);
var G__63022_63240 = (function (abort_fn){
return (abort_fn.cljs$core$IFn$_invoke$arity$0 ? abort_fn.cljs$core$IFn$_invoke$arity$0() : abort_fn.call(null));
});
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__63021_63239,G__63022_63240) : re_frame.core.reg_fx.call(null,G__63021_63239,G__63022_63240));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("re-graph.internals","register-abort","re-graph.internals/register-abort",249622905),re_graph.internals.interceptors,(function (db,p__63023){
var vec__63024 = p__63023;
var query_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63024,(0),null);
var abort_fn = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63024,(1),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"http-requests","http-requests",-1122754764),query_id,new cljs.core.Keyword(null,"abort","abort",521193198)], null),abort_fn);
}));
var G__63027_63241 = new cljs.core.Keyword("re-graph.internals","send-http","re-graph.internals/send-http",-1765659875);
var G__63028_63242 = (function (p__63029){
var vec__63030 = p__63029;
var instance_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63030,(0),null);
var query_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63030,(1),null);
var http_url = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63030,(2),null);
var map__63033 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63030,(3),null);
var map__63033__$1 = (((((!((map__63033 == null))))?(((((map__63033.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63033.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__63033):map__63033);
var request = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63033__$1,new cljs.core.Keyword(null,"request","request",1772954723));
var payload = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63033__$1,new cljs.core.Keyword(null,"payload","payload",-383036092));
var response_chan = cljs_http.client.post.cljs$core$IFn$_invoke$arity$variadic(http_url,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(request,new cljs.core.Keyword(null,"json-params","json-params",-1112693596),payload)], 0));
var G__63035_63243 = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("re-graph.internals","register-abort","re-graph.internals/register-abort",249622905),instance_name,query_id,(function (){
return cljs_http.core.abort_BANG_(response_chan);
})], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__63035_63243) : re_frame.core.dispatch.call(null,G__63035_63243));

var c__56581__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__56582__auto__ = (function (){var switch__56532__auto__ = (function (state_63074){
var state_val_63075 = (state_63074[(1)]);
if((state_val_63075 === (7))){
var state_63074__$1 = state_63074;
var statearr_63076_63251 = state_63074__$1;
(statearr_63076_63251[(2)] = false);

(statearr_63076_63251[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63075 === (1))){
var state_63074__$1 = state_63074;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_63074__$1,(2),response_chan);
} else {
if((state_val_63075 === (4))){
var state_63074__$1 = state_63074;
var statearr_63077_63253 = state_63074__$1;
(statearr_63077_63253[(2)] = false);

(statearr_63077_63253[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63075 === (13))){
var inst_63060 = (state_63074[(7)]);
var inst_63061 = (state_63074[(8)]);
var inst_63067 = re_graph.internals.insert_http_status(inst_63061,inst_63060);
var state_63074__$1 = state_63074;
var statearr_63078_63254 = state_63074__$1;
(statearr_63078_63254[(2)] = inst_63067);

(statearr_63078_63254[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63075 === (6))){
var state_63074__$1 = state_63074;
var statearr_63079_63255 = state_63074__$1;
(statearr_63079_63255[(2)] = true);

(statearr_63079_63255[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63075 === (3))){
var inst_63038 = (state_63074[(9)]);
var inst_63043 = inst_63038.cljs$lang$protocol_mask$partition0$;
var inst_63044 = (inst_63043 & (64));
var inst_63045 = inst_63038.cljs$core$ISeq$;
var inst_63046 = (cljs.core.PROTOCOL_SENTINEL === inst_63045);
var inst_63047 = ((inst_63044) || (inst_63046));
var state_63074__$1 = state_63074;
if(cljs.core.truth_(inst_63047)){
var statearr_63080_63258 = state_63074__$1;
(statearr_63080_63258[(1)] = (6));

} else {
var statearr_63081_63259 = state_63074__$1;
(statearr_63081_63259[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63075 === (12))){
var inst_63061 = (state_63074[(8)]);
var state_63074__$1 = state_63074;
var statearr_63089_63260 = state_63074__$1;
(statearr_63089_63260[(2)] = inst_63061);

(statearr_63089_63260[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63075 === (2))){
var inst_63038 = (state_63074[(9)]);
var inst_63038__$1 = (state_63074[(2)]);
var inst_63040 = (inst_63038__$1 == null);
var inst_63041 = cljs.core.not(inst_63040);
var state_63074__$1 = (function (){var statearr_63090 = state_63074;
(statearr_63090[(9)] = inst_63038__$1);

return statearr_63090;
})();
if(inst_63041){
var statearr_63091_63261 = state_63074__$1;
(statearr_63091_63261[(1)] = (3));

} else {
var statearr_63092_63262 = state_63074__$1;
(statearr_63092_63262[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63075 === (11))){
var inst_63059 = (state_63074[(2)]);
var inst_63060 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_63059,new cljs.core.Keyword(null,"status","status",-1997798413));
var inst_63061 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_63059,new cljs.core.Keyword(null,"body","body",-2049205669));
var inst_63062 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_63059,new cljs.core.Keyword(null,"error-code","error-code",180497232));
var inst_63063 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_63064 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"no-error","no-error",1984610064),inst_63062);
var state_63074__$1 = (function (){var statearr_63093 = state_63074;
(statearr_63093[(7)] = inst_63060);

(statearr_63093[(8)] = inst_63061);

(statearr_63093[(10)] = inst_63063);

return statearr_63093;
})();
if(inst_63064){
var statearr_63094_63263 = state_63074__$1;
(statearr_63094_63263[(1)] = (12));

} else {
var statearr_63095_63264 = state_63074__$1;
(statearr_63095_63264[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63075 === (9))){
var inst_63038 = (state_63074[(9)]);
var inst_63056 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_63038);
var state_63074__$1 = state_63074;
var statearr_63096_63266 = state_63074__$1;
(statearr_63096_63266[(2)] = inst_63056);

(statearr_63096_63266[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63075 === (5))){
var inst_63054 = (state_63074[(2)]);
var state_63074__$1 = state_63074;
if(cljs.core.truth_(inst_63054)){
var statearr_63101_63269 = state_63074__$1;
(statearr_63101_63269[(1)] = (9));

} else {
var statearr_63103_63275 = state_63074__$1;
(statearr_63103_63275[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63075 === (14))){
var inst_63063 = (state_63074[(10)]);
var inst_63069 = (state_63074[(2)]);
var inst_63070 = [new cljs.core.Keyword("re-graph.internals","http-complete","re-graph.internals/http-complete",1043989359),instance_name,query_id,inst_63069];
var inst_63071 = (new cljs.core.PersistentVector(null,4,(5),inst_63063,inst_63070,null));
var inst_63072 = (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(inst_63071) : re_frame.core.dispatch.call(null,inst_63071));
var state_63074__$1 = state_63074;
return cljs.core.async.impl.ioc_helpers.return_chan(state_63074__$1,inst_63072);
} else {
if((state_val_63075 === (10))){
var inst_63038 = (state_63074[(9)]);
var state_63074__$1 = state_63074;
var statearr_63113_63277 = state_63074__$1;
(statearr_63113_63277[(2)] = inst_63038);

(statearr_63113_63277[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63075 === (8))){
var inst_63051 = (state_63074[(2)]);
var state_63074__$1 = state_63074;
var statearr_63114_63278 = state_63074__$1;
(statearr_63114_63278[(2)] = inst_63051);

(statearr_63114_63278[(1)] = (5));


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
var re_graph$internals$state_machine__56533__auto__ = null;
var re_graph$internals$state_machine__56533__auto____0 = (function (){
var statearr_63119 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_63119[(0)] = re_graph$internals$state_machine__56533__auto__);

(statearr_63119[(1)] = (1));

return statearr_63119;
});
var re_graph$internals$state_machine__56533__auto____1 = (function (state_63074){
while(true){
var ret_value__56534__auto__ = (function (){try{while(true){
var result__56535__auto__ = switch__56532__auto__(state_63074);
if(cljs.core.keyword_identical_QMARK_(result__56535__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__56535__auto__;
}
break;
}
}catch (e63120){var ex__56536__auto__ = e63120;
var statearr_63121_63280 = state_63074;
(statearr_63121_63280[(2)] = ex__56536__auto__);


if(cljs.core.seq((state_63074[(4)]))){
var statearr_63122_63281 = state_63074;
(statearr_63122_63281[(1)] = cljs.core.first((state_63074[(4)])));

} else {
throw ex__56536__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__56534__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__63282 = state_63074;
state_63074 = G__63282;
continue;
} else {
return ret_value__56534__auto__;
}
break;
}
});
re_graph$internals$state_machine__56533__auto__ = function(state_63074){
switch(arguments.length){
case 0:
return re_graph$internals$state_machine__56533__auto____0.call(this);
case 1:
return re_graph$internals$state_machine__56533__auto____1.call(this,state_63074);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
re_graph$internals$state_machine__56533__auto__.cljs$core$IFn$_invoke$arity$0 = re_graph$internals$state_machine__56533__auto____0;
re_graph$internals$state_machine__56533__auto__.cljs$core$IFn$_invoke$arity$1 = re_graph$internals$state_machine__56533__auto____1;
return re_graph$internals$state_machine__56533__auto__;
})()
})();
var state__56583__auto__ = (function (){var statearr_63123 = f__56582__auto__();
(statearr_63123[(6)] = c__56581__auto__);

return statearr_63123;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__56583__auto__);
}));

return c__56581__auto__;
});
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__63027_63241,G__63028_63242) : re_frame.core.reg_fx.call(null,G__63027_63241,G__63028_63242));
var G__63124_63284 = new cljs.core.Keyword("re-graph.internals","send-ws","re-graph.internals/send-ws",-599941143);
var G__63125_63285 = (function (p__63126){
var vec__63127 = p__63126;
var websocket = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63127,(0),null);
var payload = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63127,(1),null);
return websocket.send(re_graph.internals.encode(payload));
});
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__63124_63284,G__63125_63285) : re_frame.core.reg_fx.call(null,G__63124_63284,G__63125_63285));
var G__63130_63292 = new cljs.core.Keyword("re-graph.internals","call-callback","re-graph.internals/call-callback",-1514430438);
var G__63131_63293 = (function (p__63132){
var vec__63133 = p__63132;
var callback_fn = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63133,(0),null);
var payload = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63133,(1),null);
return (callback_fn.cljs$core$IFn$_invoke$arity$1 ? callback_fn.cljs$core$IFn$_invoke$arity$1(payload) : callback_fn.call(null,payload));
});
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__63130_63292,G__63131_63293) : re_frame.core.reg_fx.call(null,G__63130_63292,G__63131_63293));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("re-graph.internals","callback","re-graph.internals/callback",-367275336),(function (_,p__63136){
var vec__63137 = p__63136;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63137,(0),null);
var callback_fn = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63137,(1),null);
var payload = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63137,(2),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("re-graph.internals","call-callback","re-graph.internals/call-callback",-1514430438),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [callback_fn,payload], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("re-graph.internals","on-ws-data","re-graph.internals/on-ws-data",-1867887305),re_graph.internals.interceptors,(function (p__63140,p__63141){
var map__63142 = p__63140;
var map__63142__$1 = (((((!((map__63142 == null))))?(((((map__63142.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63142.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__63142):map__63142);
var cofx = map__63142__$1;
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63142__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__63143 = p__63141;
var subscription_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63143,(0),null);
var payload = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63143,(1),null);
var event = vec__63143;
var temp__5733__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"subscriptions","subscriptions",1250949776),cljs.core.name(subscription_id),new cljs.core.Keyword(null,"callback","callback",-705136228)], null));
if(cljs.core.truth_(temp__5733__auto__)){
var callback_event = temp__5733__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(callback_event,payload)], null);
} else {
return re_graph.logging.warn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["No callback-event found for subscription",subscription_id], 0));
}
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("re-graph.internals","on-ws-complete","re-graph.internals/on-ws-complete",738561128),re_graph.internals.interceptors,(function (db,p__63147){
var vec__63148 = p__63147;
var subscription_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63148,(0),null);
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(db,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"subscriptions","subscriptions",1250949776)], null),cljs.core.dissoc,cljs.core.name(subscription_id));
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("re-graph.internals","connection-init","re-graph.internals/connection-init",1864056806),re_graph.internals.interceptors,(function (p__63151,_){
var map__63152 = p__63151;
var map__63152__$1 = (((((!((map__63152 == null))))?(((((map__63152.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63152.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__63152):map__63152);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63152__$1,new cljs.core.Keyword(null,"db","db",993250759));
var ws = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"websocket","websocket",-1714963101),new cljs.core.Keyword(null,"connection","connection",-123599300)], null));
var payload = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"websocket","websocket",-1714963101),new cljs.core.Keyword(null,"connection-init-payload","connection-init-payload",-2110352705)], null));
if(cljs.core.truth_(payload)){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("re-graph.internals","send-ws","re-graph.internals/send-ws",-599941143),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ws,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"connection_init",new cljs.core.Keyword(null,"payload","payload",-383036092),payload], null)], null)], null);
} else {
return null;
}
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("re-graph.internals","on-ws-open","re-graph.internals/on-ws-open",-1733176117),re_graph.internals.interceptors,(function (p__63157,p__63158){
var map__63159 = p__63157;
var map__63159__$1 = (((((!((map__63159 == null))))?(((((map__63159.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63159.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__63159):map__63159);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63159__$1,new cljs.core.Keyword(null,"db","db",993250759));
var instance_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63159__$1,new cljs.core.Keyword(null,"instance-name","instance-name",-2046274941));
var vec__63160 = p__63158;
var ws = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63160,(0),null);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.update.cljs$core$IFn$_invoke$arity$variadic(db,new cljs.core.Keyword(null,"websocket","websocket",-1714963101),cljs.core.assoc,new cljs.core.Keyword(null,"connection","connection",-123599300),ws,new cljs.core.Keyword(null,"ready?","ready?",-105765697),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([true,new cljs.core.Keyword(null,"queue","queue",1455835879),cljs.core.PersistentVector.EMPTY], 0))], null),(function (){var resume_QMARK_ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"websocket","websocket",-1714963101),new cljs.core.Keyword(null,"resume-subscriptions?","resume-subscriptions?",-1500602553)], null));
var subscriptions = (cljs.core.truth_(resume_QMARK_)?cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"event","event",301435442),cljs.core.vals(new cljs.core.Keyword(null,"subscriptions","subscriptions",1250949776).cljs$core$IFn$_invoke$arity$1(db))):null);
var queue = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"websocket","websocket",-1714963101),new cljs.core.Keyword(null,"queue","queue",1455835879)], null));
var to_send = cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("re-graph.internals","connection-init","re-graph.internals/connection-init",1864056806),instance_name], null)], null),subscriptions,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([queue], 0));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),to_send], null);
})()], 0));
}));
re_graph.internals.deactivate_subscriptions = (function re_graph$internals$deactivate_subscriptions(subscriptions){
return cljs.core.reduce_kv((function (subs,sub_id,sub){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(subs,sub_id,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(sub,new cljs.core.Keyword(null,"active?","active?",459499776),false));
}),cljs.core.PersistentArrayMap.EMPTY,subscriptions);
});
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("re-graph.internals","on-ws-close","re-graph.internals/on-ws-close",2011209794),re_graph.internals.interceptors,(function (p__63164,_){
var map__63165 = p__63164;
var map__63165__$1 = (((((!((map__63165 == null))))?(((((map__63165.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63165.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__63165):map__63165);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63165__$1,new cljs.core.Keyword(null,"db","db",993250759));
var instance_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63165__$1,new cljs.core.Keyword(null,"instance-name","instance-name",-2046274941));
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),(function (){var new_db = cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"websocket","websocket",-1714963101),new cljs.core.Keyword(null,"ready?","ready?",-105765697)], null),false),new cljs.core.Keyword(null,"subscriptions","subscriptions",1250949776),re_graph.internals.deactivate_subscriptions);
return new_db;
})()], null),(function (){var temp__5735__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"websocket","websocket",-1714963101),new cljs.core.Keyword(null,"reconnect-timeout","reconnect-timeout",839758170)], null));
if(cljs.core.truth_(temp__5735__auto__)){
var reconnect_timeout = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ms","ms",-1152709733),reconnect_timeout,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("re-graph.internals","reconnect-ws","re-graph.internals/reconnect-ws",-2097551060),instance_name], null)], null)], null)], null);
} else {
return null;
}
})()], 0));
}));
re_graph.internals.on_ws_message = (function re_graph$internals$on_ws_message(instance_name){
return (function (m){
var map__63167 = re_graph.internals.message__GT_data(m);
var map__63167__$1 = (((((!((map__63167 == null))))?(((((map__63167.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63167.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__63167):map__63167);
var data = map__63167__$1;
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63167__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63167__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var payload = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63167__$1,new cljs.core.Keyword(null,"payload","payload",-383036092));
var pred__63169 = cljs.core._EQ_;
var expr__63170 = type;
if(cljs.core.truth_((pred__63169.cljs$core$IFn$_invoke$arity$2 ? pred__63169.cljs$core$IFn$_invoke$arity$2("data",expr__63170) : pred__63169.call(null,"data",expr__63170)))){
var G__63172 = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("re-graph.internals","on-ws-data","re-graph.internals/on-ws-data",-1867887305),instance_name,id,payload], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__63172) : re_frame.core.dispatch.call(null,G__63172));
} else {
if(cljs.core.truth_((pred__63169.cljs$core$IFn$_invoke$arity$2 ? pred__63169.cljs$core$IFn$_invoke$arity$2("complete",expr__63170) : pred__63169.call(null,"complete",expr__63170)))){
var G__63173 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("re-graph.internals","on-ws-complete","re-graph.internals/on-ws-complete",738561128),instance_name,id], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__63173) : re_frame.core.dispatch.call(null,G__63173));
} else {
if(cljs.core.truth_((pred__63169.cljs$core$IFn$_invoke$arity$2 ? pred__63169.cljs$core$IFn$_invoke$arity$2("error",expr__63170) : pred__63169.call(null,"error",expr__63170)))){
var G__63174 = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("re-graph.internals","on-ws-data","re-graph.internals/on-ws-data",-1867887305),instance_name,id,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"errors","errors",-908790718),payload], null)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__63174) : re_frame.core.dispatch.call(null,G__63174));
} else {
return re_graph.logging.debug.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Ignoring graphql-ws event ",instance_name," - ",type], 0));
}
}
}
});
});
re_graph.internals.on_open = (function re_graph$internals$on_open(var_args){
var G__63179 = arguments.length;
switch (G__63179) {
case 1:
return re_graph.internals.on_open.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return re_graph.internals.on_open.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(re_graph.internals.on_open.cljs$core$IFn$_invoke$arity$1 = (function (instance_name){
return (function (ws){
var fexpr__63182 = re_graph.internals.on_open.cljs$core$IFn$_invoke$arity$2(instance_name,ws);
return (fexpr__63182.cljs$core$IFn$_invoke$arity$0 ? fexpr__63182.cljs$core$IFn$_invoke$arity$0() : fexpr__63182.call(null));
});
}));

(re_graph.internals.on_open.cljs$core$IFn$_invoke$arity$2 = (function (instance_name,ws){
return (function (){
var G__63184 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("re-graph.internals","on-ws-open","re-graph.internals/on-ws-open",-1733176117),instance_name,ws], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__63184) : re_frame.core.dispatch.call(null,G__63184));
});
}));

(re_graph.internals.on_open.cljs$lang$maxFixedArity = 2);

re_graph.internals.on_close = (function re_graph$internals$on_close(instance_name){
return (function() { 
var G__63311__delegate = function (args){
var G__63185 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("re-graph.internals","on-ws-close","re-graph.internals/on-ws-close",2011209794),instance_name], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__63185) : re_frame.core.dispatch.call(null,G__63185));
};
var G__63311 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__63312__i = 0, G__63312__a = new Array(arguments.length -  0);
while (G__63312__i < G__63312__a.length) {G__63312__a[G__63312__i] = arguments[G__63312__i + 0]; ++G__63312__i;}
  args = new cljs.core.IndexedSeq(G__63312__a,0,null);
} 
return G__63311__delegate.call(this,args);};
G__63311.cljs$lang$maxFixedArity = 0;
G__63311.cljs$lang$applyTo = (function (arglist__63313){
var args = cljs.core.seq(arglist__63313);
return G__63311__delegate(args);
});
G__63311.cljs$core$IFn$_invoke$arity$variadic = G__63311__delegate;
return G__63311;
})()
;
});
re_graph.internals.on_error = (function re_graph$internals$on_error(instance_name){
return (function (e){
return re_graph.logging.warn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["GraphQL websocket error",instance_name,e], 0));
});
});
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("re-graph.internals","reconnect-ws","re-graph.internals/reconnect-ws",-2097551060),re_graph.internals.interceptors,(function (p__63188,_){
var map__63189 = p__63188;
var map__63189__$1 = (((((!((map__63189 == null))))?(((((map__63189.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63189.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__63189):map__63189);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63189__$1,new cljs.core.Keyword(null,"db","db",993250759));
var instance_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63189__$1,new cljs.core.Keyword(null,"instance-name","instance-name",-2046274941));
if(cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"websocket","websocket",-1714963101),new cljs.core.Keyword(null,"ready?","ready?",-105765697)], null)))){
return null;
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("re-graph.internals","connect-ws","re-graph.internals/connect-ws",769497536),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [instance_name,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"websocket","websocket",-1714963101),new cljs.core.Keyword(null,"url","url",276297046)], null)),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"websocket","websocket",-1714963101),new cljs.core.Keyword(null,"sub-protocol","sub-protocol",410139647)], null))], null)], null);
}
}));
var G__63191_63321 = new cljs.core.Keyword("re-graph.internals","connect-ws","re-graph.internals/connect-ws",769497536);
var G__63192_63322 = (function (p__63194){
var vec__63195 = p__63194;
var instance_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63195,(0),null);
var ws_url = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63195,(1),null);
var sub_protocol = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63195,(2),null);
var ws = (((sub_protocol == null))?(new WebSocket(ws_url)):(new WebSocket(ws_url,sub_protocol))
);
(ws["onmessage"] = re_graph.internals.on_ws_message(instance_name));

(ws["onopen"] = re_graph.internals.on_open.cljs$core$IFn$_invoke$arity$2(instance_name,ws));

(ws["onclose"] = re_graph.internals.on_close(instance_name));

return (ws["onerror"] = re_graph.internals.on_error(instance_name));
});
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__63191_63321,G__63192_63322) : re_frame.core.reg_fx.call(null,G__63191_63321,G__63192_63322));
var G__63198_63323 = new cljs.core.Keyword("re-graph.internals","disconnect-ws","re-graph.internals/disconnect-ws",-1441616164);
var G__63199_63324 = (function (p__63200){
var vec__63203 = p__63200;
var ws = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63203,(0),null);
return ws.close();
});
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__63198_63323,G__63199_63324) : re_frame.core.reg_fx.call(null,G__63198_63323,G__63199_63324));
re_graph.internals.default_ws_url = (function re_graph$internals$default_ws_url(){
if((((typeof window !== 'undefined')) && ((!((window.location == null)))))){
var host_and_port = window.location.host;
var ssl_QMARK_ = cljs.core.re_find(/^https/,window.location.origin);
return [(cljs.core.truth_(ssl_QMARK_)?"wss":"ws"),"://",cljs.core.str.cljs$core$IFn$_invoke$arity$1(host_and_port),"/graphql-ws"].join('');
} else {
return null;
}
});

//# sourceMappingURL=re_graph.internals.js.map
