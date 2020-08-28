goog.provide('re_frame.trace');
goog.require('cljs.core');
goog.require('re_frame.interop');
goog.require('re_frame.loggers');
goog.require('goog.functions');
re_frame.trace.id = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
re_frame.trace._STAR_current_trace_STAR_ = null;
re_frame.trace.reset_tracing_BANG_ = (function re_frame$trace$reset_tracing_BANG_(){
return cljs.core.reset_BANG_(re_frame.trace.id,(0));
});
/**
 * @define {boolean}
 */
re_frame.trace.trace_enabled_QMARK_ = goog.define("re_frame.trace.trace_enabled_QMARK_",false);
/**
 * See https://groups.google.com/d/msg/clojurescript/jk43kmYiMhA/IHglVr_TPdgJ for more details
 */
re_frame.trace.is_trace_enabled_QMARK_ = (function re_frame$trace$is_trace_enabled_QMARK_(){
return re_frame.trace.trace_enabled_QMARK_;
});
re_frame.trace.trace_cbs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
if((typeof re_frame !== 'undefined') && (typeof re_frame.trace !== 'undefined') && (typeof re_frame.trace.traces !== 'undefined')){
} else {
re_frame.trace.traces = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
}
if((typeof re_frame !== 'undefined') && (typeof re_frame.trace !== 'undefined') && (typeof re_frame.trace.next_delivery !== 'undefined')){
} else {
re_frame.trace.next_delivery = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
}
/**
 * Registers a tracing callback function which will receive a collection of one or more traces.
 *   Will replace an existing callback function if it shares the same key.
 */
re_frame.trace.register_trace_cb = (function re_frame$trace$register_trace_cb(key,f){
if(re_frame.trace.trace_enabled_QMARK_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frame.trace.trace_cbs,cljs.core.assoc,key,f);
} else {
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Tracing is not enabled. Please set {\"re_frame.trace.trace_enabled_QMARK_\" true} in :closure-defines. See: https://github.com/day8/re-frame-10x#installation."], 0));
}
});
re_frame.trace.remove_trace_cb = (function re_frame$trace$remove_trace_cb(key){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.trace_cbs,cljs.core.dissoc,key);

return null;
});
re_frame.trace.next_id = (function re_frame$trace$next_id(){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(re_frame.trace.id,cljs.core.inc);
});
re_frame.trace.start_trace = (function re_frame$trace$start_trace(p__53029){
var map__53030 = p__53029;
var map__53030__$1 = (((((!((map__53030 == null))))?(((((map__53030.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53030.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53030):map__53030);
var operation = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53030__$1,new cljs.core.Keyword(null,"operation","operation",-1267664310));
var op_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53030__$1,new cljs.core.Keyword(null,"op-type","op-type",-1636141668));
var tags = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53030__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));
var child_of = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53030__$1,new cljs.core.Keyword(null,"child-of","child-of",-903376662));
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),re_frame.trace.next_id(),new cljs.core.Keyword(null,"operation","operation",-1267664310),operation,new cljs.core.Keyword(null,"op-type","op-type",-1636141668),op_type,new cljs.core.Keyword(null,"tags","tags",1771418977),tags,new cljs.core.Keyword(null,"child-of","child-of",-903376662),(function (){var or__4126__auto__ = child_of;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_);
}
})(),new cljs.core.Keyword(null,"start","start",-355208981),re_frame.interop.now()], null);
});
re_frame.trace.debounce_time = (50);
re_frame.trace.debounce = (function re_frame$trace$debounce(f,interval){
return goog.functions.debounce(f,interval);
});
re_frame.trace.schedule_debounce = re_frame.trace.debounce((function re_frame$trace$tracing_cb_debounced(){
var seq__53032_53059 = cljs.core.seq(cljs.core.deref(re_frame.trace.trace_cbs));
var chunk__53033_53060 = null;
var count__53034_53061 = (0);
var i__53035_53062 = (0);
while(true){
if((i__53035_53062 < count__53034_53061)){
var vec__53046_53064 = chunk__53033_53060.cljs$core$IIndexed$_nth$arity$2(null,i__53035_53062);
var k_53065 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53046_53064,(0),null);
var cb_53066 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53046_53064,(1),null);
try{var G__53050_53071 = cljs.core.deref(re_frame.trace.traces);
(cb_53066.cljs$core$IFn$_invoke$arity$1 ? cb_53066.cljs$core$IFn$_invoke$arity$1(G__53050_53071) : cb_53066.call(null,G__53050_53071));
}catch (e53049){var e_53075 = e53049;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_53065,"while storing",cljs.core.deref(re_frame.trace.traces),e_53075], 0));
}

var G__53079 = seq__53032_53059;
var G__53080 = chunk__53033_53060;
var G__53081 = count__53034_53061;
var G__53082 = (i__53035_53062 + (1));
seq__53032_53059 = G__53079;
chunk__53033_53060 = G__53080;
count__53034_53061 = G__53081;
i__53035_53062 = G__53082;
continue;
} else {
var temp__5735__auto___53086 = cljs.core.seq(seq__53032_53059);
if(temp__5735__auto___53086){
var seq__53032_53087__$1 = temp__5735__auto___53086;
if(cljs.core.chunked_seq_QMARK_(seq__53032_53087__$1)){
var c__4556__auto___53088 = cljs.core.chunk_first(seq__53032_53087__$1);
var G__53089 = cljs.core.chunk_rest(seq__53032_53087__$1);
var G__53090 = c__4556__auto___53088;
var G__53091 = cljs.core.count(c__4556__auto___53088);
var G__53092 = (0);
seq__53032_53059 = G__53089;
chunk__53033_53060 = G__53090;
count__53034_53061 = G__53091;
i__53035_53062 = G__53092;
continue;
} else {
var vec__53051_53093 = cljs.core.first(seq__53032_53087__$1);
var k_53094 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53051_53093,(0),null);
var cb_53095 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53051_53093,(1),null);
try{var G__53055_53099 = cljs.core.deref(re_frame.trace.traces);
(cb_53095.cljs$core$IFn$_invoke$arity$1 ? cb_53095.cljs$core$IFn$_invoke$arity$1(G__53055_53099) : cb_53095.call(null,G__53055_53099));
}catch (e53054){var e_53100 = e53054;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_53094,"while storing",cljs.core.deref(re_frame.trace.traces),e_53100], 0));
}

var G__53101 = cljs.core.next(seq__53032_53087__$1);
var G__53102 = null;
var G__53103 = (0);
var G__53104 = (0);
seq__53032_53059 = G__53101;
chunk__53033_53060 = G__53102;
count__53034_53061 = G__53103;
i__53035_53062 = G__53104;
continue;
}
} else {
}
}
break;
}

return cljs.core.reset_BANG_(re_frame.trace.traces,cljs.core.PersistentVector.EMPTY);
}),re_frame.trace.debounce_time);
re_frame.trace.run_tracing_callbacks_BANG_ = (function re_frame$trace$run_tracing_callbacks_BANG_(now){
if(((cljs.core.deref(re_frame.trace.next_delivery) - (25)) < now)){
(re_frame.trace.schedule_debounce.cljs$core$IFn$_invoke$arity$0 ? re_frame.trace.schedule_debounce.cljs$core$IFn$_invoke$arity$0() : re_frame.trace.schedule_debounce.call(null));

return cljs.core.reset_BANG_(re_frame.trace.next_delivery,(now + re_frame.trace.debounce_time));
} else {
return null;
}
});

//# sourceMappingURL=re_frame.trace.js.map
