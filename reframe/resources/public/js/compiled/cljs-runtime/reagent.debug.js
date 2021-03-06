goog.provide('reagent.debug');
goog.require('cljs.core');
reagent.debug.has_console = (typeof console !== 'undefined');
reagent.debug.tracking = false;
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.warnings !== 'undefined')){
} else {
reagent.debug.warnings = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.track_console !== 'undefined')){
} else {
reagent.debug.track_console = (function (){var o = ({});
(o.warn = (function() { 
var G__52298__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__52298 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__52299__i = 0, G__52299__a = new Array(arguments.length -  0);
while (G__52299__i < G__52299__a.length) {G__52299__a[G__52299__i] = arguments[G__52299__i + 0]; ++G__52299__i;}
  args = new cljs.core.IndexedSeq(G__52299__a,0,null);
} 
return G__52298__delegate.call(this,args);};
G__52298.cljs$lang$maxFixedArity = 0;
G__52298.cljs$lang$applyTo = (function (arglist__52300){
var args = cljs.core.seq(arglist__52300);
return G__52298__delegate(args);
});
G__52298.cljs$core$IFn$_invoke$arity$variadic = G__52298__delegate;
return G__52298;
})()
);

(o.error = (function() { 
var G__52301__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__52301 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__52304__i = 0, G__52304__a = new Array(arguments.length -  0);
while (G__52304__i < G__52304__a.length) {G__52304__a[G__52304__i] = arguments[G__52304__i + 0]; ++G__52304__i;}
  args = new cljs.core.IndexedSeq(G__52304__a,0,null);
} 
return G__52301__delegate.call(this,args);};
G__52301.cljs$lang$maxFixedArity = 0;
G__52301.cljs$lang$applyTo = (function (arglist__52305){
var args = cljs.core.seq(arglist__52305);
return G__52301__delegate(args);
});
G__52301.cljs$core$IFn$_invoke$arity$variadic = G__52301__delegate;
return G__52301;
})()
);

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
(reagent.debug.tracking = true);

cljs.core.reset_BANG_(reagent.debug.warnings,null);

(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));

var warns = cljs.core.deref(reagent.debug.warnings);
cljs.core.reset_BANG_(reagent.debug.warnings,null);

(reagent.debug.tracking = false);

return warns;
});

//# sourceMappingURL=reagent.debug.js.map
