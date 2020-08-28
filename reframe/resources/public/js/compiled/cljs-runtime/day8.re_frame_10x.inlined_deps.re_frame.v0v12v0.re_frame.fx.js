goog.provide('day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.fx');
goog.require('cljs.core');
goog.require('day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.router');
goog.require('day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.db');
goog.require('day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.interceptor');
goog.require('day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.interop');
goog.require('day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.events');
goog.require('day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.registrar');
goog.require('day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.loggers');
goog.require('day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.trace');
day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.fx.kind = new cljs.core.Keyword(null,"fx","fx",-1237829572);
if(cljs.core.truth_((day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1 ? day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1(day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.fx.kind) : day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.registrar.kinds.call(null,day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.fx.kind)))){
} else {
throw (new Error("Assert failed: (registrar/kinds kind)"));
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
day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.fx.reg_fx = (function day8$re_frame_10x$inlined_deps$re_frame$v0v12v0$re_frame$fx$reg_fx(id,handler){
return day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.registrar.register_handler(day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.fx.kind,id,handler);
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
day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.fx.do_fx = day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.interceptor.__GT_interceptor.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"do-fx","do-fx",1194163050),new cljs.core.Keyword(null,"after","after",594996914),(function day8$re_frame_10x$inlined_deps$re_frame$v0v12v0$re_frame$fx$do_fx_after(context){
if(day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.trace.is_trace_enabled_QMARK_()){
var _STAR_current_trace_STAR__orig_val__48529 = day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__48530 = day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));
(day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__48530);

try{try{var seq__48532 = cljs.core.seq(new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__48533 = null;
var count__48534 = (0);
var i__48535 = (0);
while(true){
if((i__48535 < count__48534)){
var vec__48548 = chunk__48533.cljs$core$IIndexed$_nth$arity$2(null,i__48535);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48548,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48548,(1),null);
var temp__5733__auto___48649 = day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___48649)){
var effect_fn_48650 = temp__5733__auto___48649;
(effect_fn_48650.cljs$core$IFn$_invoke$arity$1 ? effect_fn_48650.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_48650.call(null,effect_value));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__48651 = seq__48532;
var G__48652 = chunk__48533;
var G__48653 = count__48534;
var G__48654 = (i__48535 + (1));
seq__48532 = G__48651;
chunk__48533 = G__48652;
count__48534 = G__48653;
i__48535 = G__48654;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__48532);
if(temp__5735__auto__){
var seq__48532__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__48532__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__48532__$1);
var G__48655 = cljs.core.chunk_rest(seq__48532__$1);
var G__48656 = c__4556__auto__;
var G__48657 = cljs.core.count(c__4556__auto__);
var G__48658 = (0);
seq__48532 = G__48655;
chunk__48533 = G__48656;
count__48534 = G__48657;
i__48535 = G__48658;
continue;
} else {
var vec__48551 = cljs.core.first(seq__48532__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48551,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48551,(1),null);
var temp__5733__auto___48659 = day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___48659)){
var effect_fn_48660 = temp__5733__auto___48659;
(effect_fn_48660.cljs$core$IFn$_invoke$arity$1 ? effect_fn_48660.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_48660.call(null,effect_value));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__48661 = cljs.core.next(seq__48532__$1);
var G__48662 = null;
var G__48663 = (0);
var G__48664 = (0);
seq__48532 = G__48661;
chunk__48533 = G__48662;
count__48534 = G__48663;
i__48535 = G__48664;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.trace.is_trace_enabled_QMARK_()){
var end__48269__auto___48665 = day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.interop.now();
var duration__48270__auto___48666 = (end__48269__auto___48665 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__48270__auto___48666,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.interop.now()], 0)));

day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.trace.run_tracing_callbacks_BANG_(end__48269__auto___48665);
} else {
}
}}finally {(day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__48529);
}} else {
var seq__48557 = cljs.core.seq(new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__48558 = null;
var count__48559 = (0);
var i__48560 = (0);
while(true){
if((i__48560 < count__48559)){
var vec__48590 = chunk__48558.cljs$core$IIndexed$_nth$arity$2(null,i__48560);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48590,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48590,(1),null);
var temp__5733__auto___48667 = day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___48667)){
var effect_fn_48668 = temp__5733__auto___48667;
(effect_fn_48668.cljs$core$IFn$_invoke$arity$1 ? effect_fn_48668.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_48668.call(null,effect_value));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__48669 = seq__48557;
var G__48670 = chunk__48558;
var G__48671 = count__48559;
var G__48672 = (i__48560 + (1));
seq__48557 = G__48669;
chunk__48558 = G__48670;
count__48559 = G__48671;
i__48560 = G__48672;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__48557);
if(temp__5735__auto__){
var seq__48557__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__48557__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__48557__$1);
var G__48678 = cljs.core.chunk_rest(seq__48557__$1);
var G__48679 = c__4556__auto__;
var G__48680 = cljs.core.count(c__4556__auto__);
var G__48681 = (0);
seq__48557 = G__48678;
chunk__48558 = G__48679;
count__48559 = G__48680;
i__48560 = G__48681;
continue;
} else {
var vec__48594 = cljs.core.first(seq__48557__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48594,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48594,(1),null);
var temp__5733__auto___48682 = day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___48682)){
var effect_fn_48684 = temp__5733__auto___48682;
(effect_fn_48684.cljs$core$IFn$_invoke$arity$1 ? effect_fn_48684.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_48684.call(null,effect_value));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__48686 = cljs.core.next(seq__48557__$1);
var G__48687 = null;
var G__48688 = (0);
var G__48689 = (0);
seq__48557 = G__48686;
chunk__48558 = G__48687;
count__48559 = G__48688;
i__48560 = G__48689;
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
day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),(function (value){
var seq__48597 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__48598 = null;
var count__48599 = (0);
var i__48600 = (0);
while(true){
if((i__48600 < count__48599)){
var map__48614 = chunk__48598.cljs$core$IIndexed$_nth$arity$2(null,i__48600);
var map__48614__$1 = (((((!((map__48614 == null))))?(((((map__48614.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48614.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__48614):map__48614);
var effect = map__48614__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48614__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48614__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.interop.set_timeout_BANG_(((function (seq__48597,chunk__48598,count__48599,i__48600,map__48614,map__48614__$1,effect,ms,dispatch){
return (function (){
return day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.router.dispatch(dispatch);
});})(seq__48597,chunk__48598,count__48599,i__48600,map__48614,map__48614__$1,effect,ms,dispatch))
,ms);
}


var G__48690 = seq__48597;
var G__48691 = chunk__48598;
var G__48692 = count__48599;
var G__48693 = (i__48600 + (1));
seq__48597 = G__48690;
chunk__48598 = G__48691;
count__48599 = G__48692;
i__48600 = G__48693;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__48597);
if(temp__5735__auto__){
var seq__48597__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__48597__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__48597__$1);
var G__48696 = cljs.core.chunk_rest(seq__48597__$1);
var G__48697 = c__4556__auto__;
var G__48698 = cljs.core.count(c__4556__auto__);
var G__48699 = (0);
seq__48597 = G__48696;
chunk__48598 = G__48697;
count__48599 = G__48698;
i__48600 = G__48699;
continue;
} else {
var map__48617 = cljs.core.first(seq__48597__$1);
var map__48617__$1 = (((((!((map__48617 == null))))?(((((map__48617.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48617.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__48617):map__48617);
var effect = map__48617__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48617__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48617__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.interop.set_timeout_BANG_(((function (seq__48597,chunk__48598,count__48599,i__48600,map__48617,map__48617__$1,effect,ms,dispatch,seq__48597__$1,temp__5735__auto__){
return (function (){
return day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.router.dispatch(dispatch);
});})(seq__48597,chunk__48598,count__48599,i__48600,map__48617,map__48617__$1,effect,ms,dispatch,seq__48597__$1,temp__5735__auto__))
,ms);
}


var G__48700 = cljs.core.next(seq__48597__$1);
var G__48701 = null;
var G__48702 = (0);
var G__48703 = (0);
seq__48597 = G__48700;
chunk__48598 = G__48701;
count__48599 = G__48702;
i__48600 = G__48703;
continue;
}
} else {
return null;
}
}
break;
}
}));
day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),(function (value){
if((!(cljs.core.vector_QMARK_(value)))){
return day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch value. Expected a vector, but got:",value], 0));
} else {
return day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.router.dispatch(value);
}
}));
day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),(function (value){
if((!(cljs.core.sequential_QMARK_(value)))){
return day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-n value. Expected a collection, but got:",value], 0));
} else {
var seq__48622 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__48623 = null;
var count__48624 = (0);
var i__48625 = (0);
while(true){
if((i__48625 < count__48624)){
var event = chunk__48623.cljs$core$IIndexed$_nth$arity$2(null,i__48625);
day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.router.dispatch(event);


var G__48708 = seq__48622;
var G__48709 = chunk__48623;
var G__48710 = count__48624;
var G__48711 = (i__48625 + (1));
seq__48622 = G__48708;
chunk__48623 = G__48709;
count__48624 = G__48710;
i__48625 = G__48711;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__48622);
if(temp__5735__auto__){
var seq__48622__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__48622__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__48622__$1);
var G__48712 = cljs.core.chunk_rest(seq__48622__$1);
var G__48713 = c__4556__auto__;
var G__48714 = cljs.core.count(c__4556__auto__);
var G__48715 = (0);
seq__48622 = G__48712;
chunk__48623 = G__48713;
count__48624 = G__48714;
i__48625 = G__48715;
continue;
} else {
var event = cljs.core.first(seq__48622__$1);
day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.router.dispatch(event);


var G__48716 = cljs.core.next(seq__48622__$1);
var G__48717 = null;
var G__48718 = (0);
var G__48719 = (0);
seq__48622 = G__48716;
chunk__48623 = G__48717;
count__48624 = G__48718;
i__48625 = G__48719;
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
day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.fx.reg_fx(new cljs.core.Keyword(null,"deregister-event-handler","deregister-event-handler",-1096518994),(function (value){
var clear_event = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.registrar.clear_handlers,day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.events.kind);
if(cljs.core.sequential_QMARK_(value)){
var seq__48626 = cljs.core.seq(value);
var chunk__48627 = null;
var count__48628 = (0);
var i__48629 = (0);
while(true){
if((i__48629 < count__48628)){
var event = chunk__48627.cljs$core$IIndexed$_nth$arity$2(null,i__48629);
clear_event(event);


var G__48730 = seq__48626;
var G__48731 = chunk__48627;
var G__48732 = count__48628;
var G__48733 = (i__48629 + (1));
seq__48626 = G__48730;
chunk__48627 = G__48731;
count__48628 = G__48732;
i__48629 = G__48733;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__48626);
if(temp__5735__auto__){
var seq__48626__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__48626__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__48626__$1);
var G__48738 = cljs.core.chunk_rest(seq__48626__$1);
var G__48739 = c__4556__auto__;
var G__48740 = cljs.core.count(c__4556__auto__);
var G__48741 = (0);
seq__48626 = G__48738;
chunk__48627 = G__48739;
count__48628 = G__48740;
i__48629 = G__48741;
continue;
} else {
var event = cljs.core.first(seq__48626__$1);
clear_event(event);


var G__48742 = cljs.core.next(seq__48626__$1);
var G__48743 = null;
var G__48744 = (0);
var G__48745 = (0);
seq__48626 = G__48742;
chunk__48627 = G__48743;
count__48628 = G__48744;
i__48629 = G__48745;
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
day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.fx.reg_fx(new cljs.core.Keyword(null,"db","db",993250759),(function (value){
if((!((cljs.core.deref(day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.db.app_db) === value)))){
return cljs.core.reset_BANG_(day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.db.app_db,value);
} else {
return null;
}
}));

//# sourceMappingURL=day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.fx.js.map
