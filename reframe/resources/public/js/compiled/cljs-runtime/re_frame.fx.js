goog.provide('re_frame.fx');
goog.require('cljs.core');
goog.require('re_frame.router');
goog.require('re_frame.db');
goog.require('re_frame.interceptor');
goog.require('re_frame.interop');
goog.require('re_frame.events');
goog.require('re_frame.registrar');
goog.require('re_frame.loggers');
goog.require('re_frame.trace');
re_frame.fx.kind = new cljs.core.Keyword(null,"fx","fx",-1237829572);
if(cljs.core.truth_((re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1 ? re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1(re_frame.fx.kind) : re_frame.registrar.kinds.call(null,re_frame.fx.kind)))){
} else {
throw (new Error("Assert failed: (re-frame.registrar/kinds kind)"));
}
/**
 * Register the given effect `handler` for the given `id`.
 * 
 *   `id` is keyword, often namespaced.
 *   `handler` is a side-effecting function which takes a single argument and whose return
 *   value is ignored.
 * 
 *   Example Use
 *   -----------
 * 
 *   First, registration ... associate `:effect2` with a handler.
 * 
 *   (reg-fx
 *   :effect2
 *   (fn [value]
 *      ... do something side-effect-y))
 * 
 *   Then, later, if an event handler were to return this effects map ...
 * 
 *   {...
 * :effect2  [1 2]}
 * 
 * ... then the `handler` `fn` we registered previously, using `reg-fx`, will be
 * called with an argument of `[1 2]`.
 */
re_frame.fx.reg_fx = (function re_frame$fx$reg_fx(id,handler){
return re_frame.registrar.register_handler(re_frame.fx.kind,id,handler);
});
/**
 * An interceptor whose `:after` actions the contents of `:effects`. As a result,
 *   this interceptor is Domino 3.
 * 
 *   This interceptor is silently added (by reg-event-db etc) to the front of
 *   interceptor chains for all events.
 * 
 *   For each key in `:effects` (a map), it calls the registered `effects handler`
 *   (see `reg-fx` for registration of effect handlers).
 * 
 *   So, if `:effects` was:
 *    {:dispatch  [:hello 42]
 *     :db        {...}
 *     :undo      "set flag"}
 * 
 *   it will call the registered effect handlers for each of the map's keys:
 *   `:dispatch`, `:undo` and `:db`. When calling each handler, provides the map
 *   value for that key - so in the example above the effect handler for :dispatch
 *   will be given one arg `[:hello 42]`.
 * 
 *   You cannot rely on the ordering in which effects are executed.
 */
re_frame.fx.do_fx = re_frame.interceptor.__GT_interceptor.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"do-fx","do-fx",1194163050),new cljs.core.Keyword(null,"after","after",594996914),(function re_frame$fx$do_fx_after(context){
if(re_frame.trace.is_trace_enabled_QMARK_()){
var _STAR_current_trace_STAR__orig_val__53279 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__53280 = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));
(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__53280);

try{try{var seq__53282 = cljs.core.seq(new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__53283 = null;
var count__53284 = (0);
var i__53285 = (0);
while(true){
if((i__53285 < count__53284)){
var vec__53294 = chunk__53283.cljs$core$IIndexed$_nth$arity$2(null,i__53285);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53294,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53294,(1),null);
var temp__5733__auto___53380 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___53380)){
var effect_fn_53381 = temp__5733__auto___53380;
(effect_fn_53381.cljs$core$IFn$_invoke$arity$1 ? effect_fn_53381.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_53381.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__53383 = seq__53282;
var G__53384 = chunk__53283;
var G__53385 = count__53284;
var G__53386 = (i__53285 + (1));
seq__53282 = G__53383;
chunk__53283 = G__53384;
count__53284 = G__53385;
i__53285 = G__53386;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__53282);
if(temp__5735__auto__){
var seq__53282__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__53282__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__53282__$1);
var G__53394 = cljs.core.chunk_rest(seq__53282__$1);
var G__53395 = c__4556__auto__;
var G__53396 = cljs.core.count(c__4556__auto__);
var G__53397 = (0);
seq__53282 = G__53394;
chunk__53283 = G__53395;
count__53284 = G__53396;
i__53285 = G__53397;
continue;
} else {
var vec__53298 = cljs.core.first(seq__53282__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53298,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53298,(1),null);
var temp__5733__auto___53398 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___53398)){
var effect_fn_53399 = temp__5733__auto___53398;
(effect_fn_53399.cljs$core$IFn$_invoke$arity$1 ? effect_fn_53399.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_53399.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__53400 = cljs.core.next(seq__53282__$1);
var G__53401 = null;
var G__53402 = (0);
var G__53403 = (0);
seq__53282 = G__53400;
chunk__53283 = G__53401;
count__53284 = G__53402;
i__53285 = G__53403;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__53009__auto___53404 = re_frame.interop.now();
var duration__53010__auto___53405 = (end__53009__auto___53404 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__53010__auto___53405,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now()], 0)));

re_frame.trace.run_tracing_callbacks_BANG_(end__53009__auto___53404);
} else {
}
}}finally {(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__53279);
}} else {
var seq__53301 = cljs.core.seq(new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__53302 = null;
var count__53303 = (0);
var i__53304 = (0);
while(true){
if((i__53304 < count__53303)){
var vec__53313 = chunk__53302.cljs$core$IIndexed$_nth$arity$2(null,i__53304);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53313,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53313,(1),null);
var temp__5733__auto___53412 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___53412)){
var effect_fn_53413 = temp__5733__auto___53412;
(effect_fn_53413.cljs$core$IFn$_invoke$arity$1 ? effect_fn_53413.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_53413.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__53414 = seq__53301;
var G__53415 = chunk__53302;
var G__53416 = count__53303;
var G__53417 = (i__53304 + (1));
seq__53301 = G__53414;
chunk__53302 = G__53415;
count__53303 = G__53416;
i__53304 = G__53417;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__53301);
if(temp__5735__auto__){
var seq__53301__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__53301__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__53301__$1);
var G__53418 = cljs.core.chunk_rest(seq__53301__$1);
var G__53419 = c__4556__auto__;
var G__53420 = cljs.core.count(c__4556__auto__);
var G__53421 = (0);
seq__53301 = G__53418;
chunk__53302 = G__53419;
count__53303 = G__53420;
i__53304 = G__53421;
continue;
} else {
var vec__53317 = cljs.core.first(seq__53301__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53317,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53317,(1),null);
var temp__5733__auto___53422 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___53422)){
var effect_fn_53423 = temp__5733__auto___53422;
(effect_fn_53423.cljs$core$IFn$_invoke$arity$1 ? effect_fn_53423.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_53423.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__53424 = cljs.core.next(seq__53301__$1);
var G__53425 = null;
var G__53426 = (0);
var G__53427 = (0);
seq__53301 = G__53424;
chunk__53302 = G__53425;
count__53303 = G__53426;
i__53304 = G__53427;
continue;
}
} else {
return null;
}
}
break;
}
}
})], 0));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),(function (value){
var seq__53321 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__53322 = null;
var count__53323 = (0);
var i__53324 = (0);
while(true){
if((i__53324 < count__53323)){
var map__53333 = chunk__53322.cljs$core$IIndexed$_nth$arity$2(null,i__53324);
var map__53333__$1 = (((((!((map__53333 == null))))?(((((map__53333.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53333.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53333):map__53333);
var effect = map__53333__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53333__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53333__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
re_frame.interop.set_timeout_BANG_(((function (seq__53321,chunk__53322,count__53323,i__53324,map__53333,map__53333__$1,effect,ms,dispatch){
return (function (){
return re_frame.router.dispatch(dispatch);
});})(seq__53321,chunk__53322,count__53323,i__53324,map__53333,map__53333__$1,effect,ms,dispatch))
,ms);
}


var G__53429 = seq__53321;
var G__53430 = chunk__53322;
var G__53431 = count__53323;
var G__53432 = (i__53324 + (1));
seq__53321 = G__53429;
chunk__53322 = G__53430;
count__53323 = G__53431;
i__53324 = G__53432;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__53321);
if(temp__5735__auto__){
var seq__53321__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__53321__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__53321__$1);
var G__53434 = cljs.core.chunk_rest(seq__53321__$1);
var G__53435 = c__4556__auto__;
var G__53436 = cljs.core.count(c__4556__auto__);
var G__53437 = (0);
seq__53321 = G__53434;
chunk__53322 = G__53435;
count__53323 = G__53436;
i__53324 = G__53437;
continue;
} else {
var map__53335 = cljs.core.first(seq__53321__$1);
var map__53335__$1 = (((((!((map__53335 == null))))?(((((map__53335.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53335.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53335):map__53335);
var effect = map__53335__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53335__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53335__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
re_frame.interop.set_timeout_BANG_(((function (seq__53321,chunk__53322,count__53323,i__53324,map__53335,map__53335__$1,effect,ms,dispatch,seq__53321__$1,temp__5735__auto__){
return (function (){
return re_frame.router.dispatch(dispatch);
});})(seq__53321,chunk__53322,count__53323,i__53324,map__53335,map__53335__$1,effect,ms,dispatch,seq__53321__$1,temp__5735__auto__))
,ms);
}


var G__53438 = cljs.core.next(seq__53321__$1);
var G__53439 = null;
var G__53440 = (0);
var G__53441 = (0);
seq__53321 = G__53438;
chunk__53322 = G__53439;
count__53323 = G__53440;
i__53324 = G__53441;
continue;
}
} else {
return null;
}
}
break;
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),(function (value){
if((!(cljs.core.vector_QMARK_(value)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch value. Expected a vector, but got:",value], 0));
} else {
return re_frame.router.dispatch(value);
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),(function (value){
if((!(cljs.core.sequential_QMARK_(value)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-n value. Expected a collection, but got:",value], 0));
} else {
var seq__53337 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__53338 = null;
var count__53339 = (0);
var i__53340 = (0);
while(true){
if((i__53340 < count__53339)){
var event = chunk__53338.cljs$core$IIndexed$_nth$arity$2(null,i__53340);
re_frame.router.dispatch(event);


var G__53442 = seq__53337;
var G__53443 = chunk__53338;
var G__53444 = count__53339;
var G__53445 = (i__53340 + (1));
seq__53337 = G__53442;
chunk__53338 = G__53443;
count__53339 = G__53444;
i__53340 = G__53445;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__53337);
if(temp__5735__auto__){
var seq__53337__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__53337__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__53337__$1);
var G__53446 = cljs.core.chunk_rest(seq__53337__$1);
var G__53447 = c__4556__auto__;
var G__53448 = cljs.core.count(c__4556__auto__);
var G__53449 = (0);
seq__53337 = G__53446;
chunk__53338 = G__53447;
count__53339 = G__53448;
i__53340 = G__53449;
continue;
} else {
var event = cljs.core.first(seq__53337__$1);
re_frame.router.dispatch(event);


var G__53450 = cljs.core.next(seq__53337__$1);
var G__53451 = null;
var G__53452 = (0);
var G__53453 = (0);
seq__53337 = G__53450;
chunk__53338 = G__53451;
count__53339 = G__53452;
i__53340 = G__53453;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"deregister-event-handler","deregister-event-handler",-1096518994),(function (value){
var clear_event = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(re_frame.registrar.clear_handlers,re_frame.events.kind);
if(cljs.core.sequential_QMARK_(value)){
var seq__53344 = cljs.core.seq(value);
var chunk__53345 = null;
var count__53346 = (0);
var i__53347 = (0);
while(true){
if((i__53347 < count__53346)){
var event = chunk__53345.cljs$core$IIndexed$_nth$arity$2(null,i__53347);
clear_event(event);


var G__53455 = seq__53344;
var G__53456 = chunk__53345;
var G__53457 = count__53346;
var G__53458 = (i__53347 + (1));
seq__53344 = G__53455;
chunk__53345 = G__53456;
count__53346 = G__53457;
i__53347 = G__53458;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__53344);
if(temp__5735__auto__){
var seq__53344__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__53344__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__53344__$1);
var G__53459 = cljs.core.chunk_rest(seq__53344__$1);
var G__53460 = c__4556__auto__;
var G__53461 = cljs.core.count(c__4556__auto__);
var G__53462 = (0);
seq__53344 = G__53459;
chunk__53345 = G__53460;
count__53346 = G__53461;
i__53347 = G__53462;
continue;
} else {
var event = cljs.core.first(seq__53344__$1);
clear_event(event);


var G__53463 = cljs.core.next(seq__53344__$1);
var G__53464 = null;
var G__53465 = (0);
var G__53466 = (0);
seq__53344 = G__53463;
chunk__53345 = G__53464;
count__53346 = G__53465;
i__53347 = G__53466;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return clear_event(value);
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"db","db",993250759),(function (value){
if((!((cljs.core.deref(re_frame.db.app_db) === value)))){
return cljs.core.reset_BANG_(re_frame.db.app_db,value);
} else {
return null;
}
}));

//# sourceMappingURL=re_frame.fx.js.map
