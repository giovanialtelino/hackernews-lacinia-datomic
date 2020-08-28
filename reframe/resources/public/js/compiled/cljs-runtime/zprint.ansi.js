goog.provide('zprint.ansi');
goog.require('cljs.core');
goog.require('clojure.string');
zprint.ansi.ansi_codes = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"bold","bold",-116809535),new cljs.core.Keyword(null,"back-magenta","back-magenta",1900361441),new cljs.core.Keyword(null,"blink","blink",-271985917),new cljs.core.Keyword(null,"back-green","back-green",1691074021),new cljs.core.Keyword(null,"white","white",-483998618),new cljs.core.Keyword(null,"back-blue","back-blue",-548906873),new cljs.core.Keyword(null,"yellow","yellow",-881035449),new cljs.core.Keyword(null,"back-yellow","back-yellow",432707272),new cljs.core.Keyword(null,"green","green",-945526839),new cljs.core.Keyword(null,"back-purple","back-purple",-1009092470),new cljs.core.Keyword(null,"cyan","cyan",1118839274),new cljs.core.Keyword(null,"underline","underline",2018066703),new cljs.core.Keyword(null,"xsf","xsf",1294187664),new cljs.core.Keyword(null,"back-cyan","back-cyan",-1507796336),new cljs.core.Keyword(null,"strike","strike",-1173815471),new cljs.core.Keyword(null,"back-red","back-red",-1985566158),new cljs.core.Keyword(null,"hidden","hidden",-312506092),new cljs.core.Keyword(null,"red","red",-969428204),new cljs.core.Keyword(null,"blue","blue",-622100620),new cljs.core.Keyword(null,"off","off",606440789),new cljs.core.Keyword(null,"magenta","magenta",1687937081),new cljs.core.Keyword(null,"purple","purple",-876021126),new cljs.core.Keyword(null,"none","none",1333468478),new cljs.core.Keyword(null,"reverse","reverse",-888455266),new cljs.core.Keyword(null,"black","black",1294279647)],[(1),(45),(5),(42),(37),(44),(33),(43),(32),(45),(36),(3),(38),(66),(9),(41),(8),(31),(34),(0),(35),(35),(30),(7),(30)]);
/**
 * Wraps a string with ANSI escape codes.
 */
zprint.ansi.color_str = (function zprint$ansi$color_str(var_args){
var args__4742__auto__ = [];
var len__4736__auto___48968 = arguments.length;
var i__4737__auto___48969 = (0);
while(true){
if((i__4737__auto___48969 < len__4736__auto___48968)){
args__4742__auto__.push((arguments[i__4737__auto___48969]));

var G__48970 = (i__4737__auto___48969 + (1));
i__4737__auto___48969 = G__48970;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return zprint.ansi.color_str.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(zprint.ansi.color_str.cljs$core$IFn$_invoke$arity$variadic = (function (s,ansi){
var ansi_str = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(";",cljs.core.map.cljs$core$IFn$_invoke$arity$2(zprint.ansi.ansi_codes,ansi)));
return ["\u001B","[",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ansi_str),"m",cljs.core.str.cljs$core$IFn$_invoke$arity$1(s),"\u001B","[","0","m"].join('');
}));

(zprint.ansi.color_str.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(zprint.ansi.color_str.cljs$lang$applyTo = (function (seq48965){
var G__48966 = cljs.core.first(seq48965);
var seq48965__$1 = cljs.core.next(seq48965);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__48966,seq48965__$1);
}));


//# sourceMappingURL=zprint.ansi.js.map
