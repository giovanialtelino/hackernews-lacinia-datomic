goog.provide('shadow.dom');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('goog.dom.forms');
goog.require('goog.dom.classlist');
goog.require('goog.style');
goog.require('goog.style.transition');
goog.require('goog.string');
goog.require('clojure.string');
goog.require('cljs.core.async');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_58802 = (function (this$){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (shadow.dom._to_dom[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4429__auto__.call(null,this$));
} else {
var m__4426__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4426__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
});
shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
return shadow$dom$IElement$_to_dom$dyn_58802(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_58805 = (function (this$){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (shadow.dom._to_svg[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4429__auto__.call(null,this$));
} else {
var m__4426__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4426__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
});
shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
return shadow$dom$SVGElement$_to_svg$dyn_58805(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__58186 = coll;
var G__58187 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__58186,G__58187) : shadow.dom.lazy_native_coll_seq.call(null,G__58186,G__58187));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__4126__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return not_found;
}
}));

(shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
}));

(shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
}));

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
}));

(shadow.dom.NativeColl.cljs$lang$type = true);

(shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl");

(shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"shadow.dom/NativeColl");
}));

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null);
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode(cljs.core.str.cljs$core$IFn$_invoke$arity$1(el));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__58208 = arguments.length;
switch (G__58208) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
}));

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
}));

(shadow.dom.query_one.cljs$lang$maxFixedArity = 2);

shadow.dom.query = (function shadow$dom$query(var_args){
var G__58216 = arguments.length;
switch (G__58216) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$lang$maxFixedArity = 2);

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__58222 = arguments.length;
switch (G__58222) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
}));

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
}));

(shadow.dom.by_id.cljs$lang$maxFixedArity = 2);

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__58226 = arguments.length;
switch (G__58226) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
(e.cancelBubble = true);

(e.returnValue = false);
}

return e;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4);

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__58233 = arguments.length;
switch (G__58233) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
return goog.dom.contains(document,shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
return goog.dom.contains(shadow.dom.dom_node(parent),shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2);

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
return goog.dom.classlist.add(shadow.dom.dom_node(el),cls);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
return goog.dom.classlist.remove(shadow.dom.dom_node(el),cls);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__58244 = arguments.length;
switch (G__58244) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
return goog.dom.classlist.toggle(shadow.dom.dom_node(el),cls);
}));

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
}));

(shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3);

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__4126__auto__ = (!((typeof document !== 'undefined')));
if(or__4126__auto__){
return or__4126__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e58257){if((e58257 instanceof Object)){
var e = e58257;
return console.log("didnt support attachEvent",el,e);
} else {
throw e58257;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__4126__auto__ = (!((typeof document !== 'undefined')));
if(or__4126__auto__){
return or__4126__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__58259 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__58260 = null;
var count__58261 = (0);
var i__58262 = (0);
while(true){
if((i__58262 < count__58261)){
var el = chunk__58260.cljs$core$IIndexed$_nth$arity$2(null,i__58262);
var handler_58829__$1 = ((function (seq__58259,chunk__58260,count__58261,i__58262,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__58259,chunk__58260,count__58261,i__58262,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_58829__$1);


var G__58831 = seq__58259;
var G__58832 = chunk__58260;
var G__58833 = count__58261;
var G__58834 = (i__58262 + (1));
seq__58259 = G__58831;
chunk__58260 = G__58832;
count__58261 = G__58833;
i__58262 = G__58834;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__58259);
if(temp__5735__auto__){
var seq__58259__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__58259__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__58259__$1);
var G__58836 = cljs.core.chunk_rest(seq__58259__$1);
var G__58837 = c__4556__auto__;
var G__58838 = cljs.core.count(c__4556__auto__);
var G__58839 = (0);
seq__58259 = G__58836;
chunk__58260 = G__58837;
count__58261 = G__58838;
i__58262 = G__58839;
continue;
} else {
var el = cljs.core.first(seq__58259__$1);
var handler_58840__$1 = ((function (seq__58259,chunk__58260,count__58261,i__58262,el,seq__58259__$1,temp__5735__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__58259,chunk__58260,count__58261,i__58262,el,seq__58259__$1,temp__5735__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_58840__$1);


var G__58841 = cljs.core.next(seq__58259__$1);
var G__58842 = null;
var G__58843 = (0);
var G__58844 = (0);
seq__58259 = G__58841;
chunk__58260 = G__58842;
count__58261 = G__58843;
i__58262 = G__58844;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__58274 = arguments.length;
switch (G__58274) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
}));

(shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});
return shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(ev),handler__$1);
}
}));

(shadow.dom.on.cljs$lang$maxFixedArity = 4);

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
return shadow.dom.dom_listen_remove(shadow.dom.dom_node(el),cljs.core.name(ev),handler);
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__58281 = cljs.core.seq(events);
var chunk__58282 = null;
var count__58283 = (0);
var i__58284 = (0);
while(true){
if((i__58284 < count__58283)){
var vec__58300 = chunk__58282.cljs$core$IIndexed$_nth$arity$2(null,i__58284);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58300,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58300,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__58850 = seq__58281;
var G__58851 = chunk__58282;
var G__58852 = count__58283;
var G__58853 = (i__58284 + (1));
seq__58281 = G__58850;
chunk__58282 = G__58851;
count__58283 = G__58852;
i__58284 = G__58853;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__58281);
if(temp__5735__auto__){
var seq__58281__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__58281__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__58281__$1);
var G__58854 = cljs.core.chunk_rest(seq__58281__$1);
var G__58855 = c__4556__auto__;
var G__58856 = cljs.core.count(c__4556__auto__);
var G__58857 = (0);
seq__58281 = G__58854;
chunk__58282 = G__58855;
count__58283 = G__58856;
i__58284 = G__58857;
continue;
} else {
var vec__58305 = cljs.core.first(seq__58281__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58305,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58305,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__58859 = cljs.core.next(seq__58281__$1);
var G__58860 = null;
var G__58861 = (0);
var G__58862 = (0);
seq__58281 = G__58859;
chunk__58282 = G__58860;
count__58283 = G__58861;
i__58284 = G__58862;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__58308 = cljs.core.seq(styles);
var chunk__58309 = null;
var count__58310 = (0);
var i__58311 = (0);
while(true){
if((i__58311 < count__58310)){
var vec__58326 = chunk__58309.cljs$core$IIndexed$_nth$arity$2(null,i__58311);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58326,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58326,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__58864 = seq__58308;
var G__58865 = chunk__58309;
var G__58866 = count__58310;
var G__58867 = (i__58311 + (1));
seq__58308 = G__58864;
chunk__58309 = G__58865;
count__58310 = G__58866;
i__58311 = G__58867;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__58308);
if(temp__5735__auto__){
var seq__58308__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__58308__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__58308__$1);
var G__58868 = cljs.core.chunk_rest(seq__58308__$1);
var G__58869 = c__4556__auto__;
var G__58870 = cljs.core.count(c__4556__auto__);
var G__58871 = (0);
seq__58308 = G__58868;
chunk__58309 = G__58869;
count__58310 = G__58870;
i__58311 = G__58871;
continue;
} else {
var vec__58333 = cljs.core.first(seq__58308__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58333,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58333,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__58874 = cljs.core.next(seq__58308__$1);
var G__58875 = null;
var G__58876 = (0);
var G__58877 = (0);
seq__58308 = G__58874;
chunk__58309 = G__58875;
count__58310 = G__58876;
i__58311 = G__58877;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__58343_58879 = key;
var G__58343_58880__$1 = (((G__58343_58879 instanceof cljs.core.Keyword))?G__58343_58879.fqn:null);
switch (G__58343_58880__$1) {
case "id":
(el.id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "class":
(el.className = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "for":
(el.htmlFor = value);

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_58882 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__4126__auto__ = goog.string.startsWith(ks_58882,"data-");
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return goog.string.startsWith(ks_58882,"aria-");
}
})())){
el.setAttribute(ks_58882,value);
} else {
(el[ks_58882] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
return goog.dom.classlist.contains(shadow.dom.dom_node(el),cls);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class)].join('');
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw ["cant have id after class?",spec__$1].join('');
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__58356){
var map__58357 = p__58356;
var map__58357__$1 = (((((!((map__58357 == null))))?(((((map__58357.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58357.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58357):map__58357);
var props = map__58357__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58357__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__58360 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58360,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58360,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58360,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__58364 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__58364,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__58364;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__58369 = arguments.length;
switch (G__58369) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5735__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5735__auto__)){
var n = temp__5735__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5735__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5735__auto__)){
var n = temp__5735__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$lang$maxFixedArity = 2);

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__58378){
var vec__58380 = p__58378;
var seq__58381 = cljs.core.seq(vec__58380);
var first__58382 = cljs.core.first(seq__58381);
var seq__58381__$1 = cljs.core.next(seq__58381);
var nn = first__58382;
var first__58382__$1 = cljs.core.first(seq__58381__$1);
var seq__58381__$2 = cljs.core.next(seq__58381__$1);
var np = first__58382__$1;
var nc = seq__58381__$2;
var node = vec__58380;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__58384 = nn;
var G__58385 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__58384,G__58385) : create_fn.call(null,G__58384,G__58385));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__58386 = nn;
var G__58387 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__58386,G__58387) : create_fn.call(null,G__58386,G__58387));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__58391 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58391,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58391,(1),null);
var seq__58394_58896 = cljs.core.seq(node_children);
var chunk__58395_58897 = null;
var count__58396_58898 = (0);
var i__58397_58899 = (0);
while(true){
if((i__58397_58899 < count__58396_58898)){
var child_struct_58900 = chunk__58395_58897.cljs$core$IIndexed$_nth$arity$2(null,i__58397_58899);
var children_58901 = shadow.dom.dom_node(child_struct_58900);
if(cljs.core.seq_QMARK_(children_58901)){
var seq__58424_58902 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_58901));
var chunk__58426_58903 = null;
var count__58427_58904 = (0);
var i__58428_58905 = (0);
while(true){
if((i__58428_58905 < count__58427_58904)){
var child_58906 = chunk__58426_58903.cljs$core$IIndexed$_nth$arity$2(null,i__58428_58905);
if(cljs.core.truth_(child_58906)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_58906);


var G__58907 = seq__58424_58902;
var G__58908 = chunk__58426_58903;
var G__58909 = count__58427_58904;
var G__58910 = (i__58428_58905 + (1));
seq__58424_58902 = G__58907;
chunk__58426_58903 = G__58908;
count__58427_58904 = G__58909;
i__58428_58905 = G__58910;
continue;
} else {
var G__58911 = seq__58424_58902;
var G__58912 = chunk__58426_58903;
var G__58913 = count__58427_58904;
var G__58914 = (i__58428_58905 + (1));
seq__58424_58902 = G__58911;
chunk__58426_58903 = G__58912;
count__58427_58904 = G__58913;
i__58428_58905 = G__58914;
continue;
}
} else {
var temp__5735__auto___58915 = cljs.core.seq(seq__58424_58902);
if(temp__5735__auto___58915){
var seq__58424_58916__$1 = temp__5735__auto___58915;
if(cljs.core.chunked_seq_QMARK_(seq__58424_58916__$1)){
var c__4556__auto___58917 = cljs.core.chunk_first(seq__58424_58916__$1);
var G__58918 = cljs.core.chunk_rest(seq__58424_58916__$1);
var G__58919 = c__4556__auto___58917;
var G__58920 = cljs.core.count(c__4556__auto___58917);
var G__58921 = (0);
seq__58424_58902 = G__58918;
chunk__58426_58903 = G__58919;
count__58427_58904 = G__58920;
i__58428_58905 = G__58921;
continue;
} else {
var child_58922 = cljs.core.first(seq__58424_58916__$1);
if(cljs.core.truth_(child_58922)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_58922);


var G__58924 = cljs.core.next(seq__58424_58916__$1);
var G__58925 = null;
var G__58926 = (0);
var G__58927 = (0);
seq__58424_58902 = G__58924;
chunk__58426_58903 = G__58925;
count__58427_58904 = G__58926;
i__58428_58905 = G__58927;
continue;
} else {
var G__58928 = cljs.core.next(seq__58424_58916__$1);
var G__58929 = null;
var G__58930 = (0);
var G__58931 = (0);
seq__58424_58902 = G__58928;
chunk__58426_58903 = G__58929;
count__58427_58904 = G__58930;
i__58428_58905 = G__58931;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_58901);
}


var G__58933 = seq__58394_58896;
var G__58934 = chunk__58395_58897;
var G__58935 = count__58396_58898;
var G__58936 = (i__58397_58899 + (1));
seq__58394_58896 = G__58933;
chunk__58395_58897 = G__58934;
count__58396_58898 = G__58935;
i__58397_58899 = G__58936;
continue;
} else {
var temp__5735__auto___58937 = cljs.core.seq(seq__58394_58896);
if(temp__5735__auto___58937){
var seq__58394_58938__$1 = temp__5735__auto___58937;
if(cljs.core.chunked_seq_QMARK_(seq__58394_58938__$1)){
var c__4556__auto___58939 = cljs.core.chunk_first(seq__58394_58938__$1);
var G__58940 = cljs.core.chunk_rest(seq__58394_58938__$1);
var G__58941 = c__4556__auto___58939;
var G__58942 = cljs.core.count(c__4556__auto___58939);
var G__58943 = (0);
seq__58394_58896 = G__58940;
chunk__58395_58897 = G__58941;
count__58396_58898 = G__58942;
i__58397_58899 = G__58943;
continue;
} else {
var child_struct_58944 = cljs.core.first(seq__58394_58938__$1);
var children_58945 = shadow.dom.dom_node(child_struct_58944);
if(cljs.core.seq_QMARK_(children_58945)){
var seq__58438_58947 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_58945));
var chunk__58440_58948 = null;
var count__58441_58949 = (0);
var i__58442_58950 = (0);
while(true){
if((i__58442_58950 < count__58441_58949)){
var child_58951 = chunk__58440_58948.cljs$core$IIndexed$_nth$arity$2(null,i__58442_58950);
if(cljs.core.truth_(child_58951)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_58951);


var G__58952 = seq__58438_58947;
var G__58953 = chunk__58440_58948;
var G__58954 = count__58441_58949;
var G__58955 = (i__58442_58950 + (1));
seq__58438_58947 = G__58952;
chunk__58440_58948 = G__58953;
count__58441_58949 = G__58954;
i__58442_58950 = G__58955;
continue;
} else {
var G__58957 = seq__58438_58947;
var G__58958 = chunk__58440_58948;
var G__58959 = count__58441_58949;
var G__58960 = (i__58442_58950 + (1));
seq__58438_58947 = G__58957;
chunk__58440_58948 = G__58958;
count__58441_58949 = G__58959;
i__58442_58950 = G__58960;
continue;
}
} else {
var temp__5735__auto___58961__$1 = cljs.core.seq(seq__58438_58947);
if(temp__5735__auto___58961__$1){
var seq__58438_58962__$1 = temp__5735__auto___58961__$1;
if(cljs.core.chunked_seq_QMARK_(seq__58438_58962__$1)){
var c__4556__auto___58963 = cljs.core.chunk_first(seq__58438_58962__$1);
var G__58964 = cljs.core.chunk_rest(seq__58438_58962__$1);
var G__58965 = c__4556__auto___58963;
var G__58966 = cljs.core.count(c__4556__auto___58963);
var G__58967 = (0);
seq__58438_58947 = G__58964;
chunk__58440_58948 = G__58965;
count__58441_58949 = G__58966;
i__58442_58950 = G__58967;
continue;
} else {
var child_58968 = cljs.core.first(seq__58438_58962__$1);
if(cljs.core.truth_(child_58968)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_58968);


var G__58969 = cljs.core.next(seq__58438_58962__$1);
var G__58970 = null;
var G__58971 = (0);
var G__58972 = (0);
seq__58438_58947 = G__58969;
chunk__58440_58948 = G__58970;
count__58441_58949 = G__58971;
i__58442_58950 = G__58972;
continue;
} else {
var G__58973 = cljs.core.next(seq__58438_58962__$1);
var G__58974 = null;
var G__58975 = (0);
var G__58976 = (0);
seq__58438_58947 = G__58973;
chunk__58440_58948 = G__58974;
count__58441_58949 = G__58975;
i__58442_58950 = G__58976;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_58945);
}


var G__58977 = cljs.core.next(seq__58394_58938__$1);
var G__58978 = null;
var G__58979 = (0);
var G__58980 = (0);
seq__58394_58896 = G__58977;
chunk__58395_58897 = G__58978;
count__58396_58898 = G__58979;
i__58397_58899 = G__58980;
continue;
}
} else {
}
}
break;
}

return node;
});
(cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
}));

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
}));
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
(HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
(DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
return goog.dom.removeChildren(shadow.dom.dom_node(node));
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__58457 = cljs.core.seq(node);
var chunk__58458 = null;
var count__58459 = (0);
var i__58460 = (0);
while(true){
if((i__58460 < count__58459)){
var n = chunk__58458.cljs$core$IIndexed$_nth$arity$2(null,i__58460);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__58984 = seq__58457;
var G__58985 = chunk__58458;
var G__58986 = count__58459;
var G__58987 = (i__58460 + (1));
seq__58457 = G__58984;
chunk__58458 = G__58985;
count__58459 = G__58986;
i__58460 = G__58987;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__58457);
if(temp__5735__auto__){
var seq__58457__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__58457__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__58457__$1);
var G__58988 = cljs.core.chunk_rest(seq__58457__$1);
var G__58989 = c__4556__auto__;
var G__58990 = cljs.core.count(c__4556__auto__);
var G__58991 = (0);
seq__58457 = G__58988;
chunk__58458 = G__58989;
count__58459 = G__58990;
i__58460 = G__58991;
continue;
} else {
var n = cljs.core.first(seq__58457__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__58992 = cljs.core.next(seq__58457__$1);
var G__58993 = null;
var G__58994 = (0);
var G__58995 = (0);
seq__58457 = G__58992;
chunk__58458 = G__58993;
count__58459 = G__58994;
i__58460 = G__58995;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
return goog.dom.replaceNode(shadow.dom.dom_node(new$),shadow.dom.dom_node(old));
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__58467 = arguments.length;
switch (G__58467) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return (shadow.dom.dom_node(el).innerText = new_text);
}));

(shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
}));

(shadow.dom.text.cljs$lang$maxFixedArity = 2);

shadow.dom.check = (function shadow$dom$check(var_args){
var G__58474 = arguments.length;
switch (G__58474) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
}));

(shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return (shadow.dom.dom_node(el).checked = checked);
}));

(shadow.dom.check.cljs$lang$maxFixedArity = 2);

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__58487 = arguments.length;
switch (G__58487) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
}));

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__4126__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return default$;
}
}));

(shadow.dom.attr.cljs$lang$maxFixedArity = 3);

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute(["data-",cljs.core.name(key)].join(''));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute(["data-",cljs.core.name(key)].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return (shadow.dom.dom_node(node).innerHTML = text);
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__4742__auto__ = [];
var len__4736__auto___59006 = arguments.length;
var i__4737__auto___59007 = (0);
while(true){
if((i__4737__auto___59007 < len__4736__auto___59006)){
args__4742__auto__.push((arguments[i__4737__auto___59007]));

var G__59008 = (i__4737__auto___59007 + (1));
i__4737__auto___59007 = G__59008;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__58493_59009 = cljs.core.seq(nodes);
var chunk__58494_59010 = null;
var count__58495_59011 = (0);
var i__58496_59012 = (0);
while(true){
if((i__58496_59012 < count__58495_59011)){
var node_59013 = chunk__58494_59010.cljs$core$IIndexed$_nth$arity$2(null,i__58496_59012);
fragment.appendChild(shadow.dom._to_dom(node_59013));


var G__59014 = seq__58493_59009;
var G__59015 = chunk__58494_59010;
var G__59016 = count__58495_59011;
var G__59017 = (i__58496_59012 + (1));
seq__58493_59009 = G__59014;
chunk__58494_59010 = G__59015;
count__58495_59011 = G__59016;
i__58496_59012 = G__59017;
continue;
} else {
var temp__5735__auto___59018 = cljs.core.seq(seq__58493_59009);
if(temp__5735__auto___59018){
var seq__58493_59019__$1 = temp__5735__auto___59018;
if(cljs.core.chunked_seq_QMARK_(seq__58493_59019__$1)){
var c__4556__auto___59020 = cljs.core.chunk_first(seq__58493_59019__$1);
var G__59021 = cljs.core.chunk_rest(seq__58493_59019__$1);
var G__59022 = c__4556__auto___59020;
var G__59023 = cljs.core.count(c__4556__auto___59020);
var G__59024 = (0);
seq__58493_59009 = G__59021;
chunk__58494_59010 = G__59022;
count__58495_59011 = G__59023;
i__58496_59012 = G__59024;
continue;
} else {
var node_59025 = cljs.core.first(seq__58493_59019__$1);
fragment.appendChild(shadow.dom._to_dom(node_59025));


var G__59026 = cljs.core.next(seq__58493_59019__$1);
var G__59027 = null;
var G__59028 = (0);
var G__59029 = (0);
seq__58493_59009 = G__59026;
chunk__58494_59010 = G__59027;
count__58495_59011 = G__59028;
i__58496_59012 = G__59029;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
}));

(shadow.dom.fragment.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq58491){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58491));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__58497_59030 = cljs.core.seq(scripts);
var chunk__58498_59031 = null;
var count__58499_59032 = (0);
var i__58500_59033 = (0);
while(true){
if((i__58500_59033 < count__58499_59032)){
var vec__58509_59037 = chunk__58498_59031.cljs$core$IIndexed$_nth$arity$2(null,i__58500_59033);
var script_tag_59038 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58509_59037,(0),null);
var script_body_59039 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58509_59037,(1),null);
eval(script_body_59039);


var G__59040 = seq__58497_59030;
var G__59041 = chunk__58498_59031;
var G__59042 = count__58499_59032;
var G__59043 = (i__58500_59033 + (1));
seq__58497_59030 = G__59040;
chunk__58498_59031 = G__59041;
count__58499_59032 = G__59042;
i__58500_59033 = G__59043;
continue;
} else {
var temp__5735__auto___59044 = cljs.core.seq(seq__58497_59030);
if(temp__5735__auto___59044){
var seq__58497_59045__$1 = temp__5735__auto___59044;
if(cljs.core.chunked_seq_QMARK_(seq__58497_59045__$1)){
var c__4556__auto___59046 = cljs.core.chunk_first(seq__58497_59045__$1);
var G__59047 = cljs.core.chunk_rest(seq__58497_59045__$1);
var G__59048 = c__4556__auto___59046;
var G__59049 = cljs.core.count(c__4556__auto___59046);
var G__59050 = (0);
seq__58497_59030 = G__59047;
chunk__58498_59031 = G__59048;
count__58499_59032 = G__59049;
i__58500_59033 = G__59050;
continue;
} else {
var vec__58515_59051 = cljs.core.first(seq__58497_59045__$1);
var script_tag_59052 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58515_59051,(0),null);
var script_body_59053 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58515_59051,(1),null);
eval(script_body_59053);


var G__59054 = cljs.core.next(seq__58497_59045__$1);
var G__59055 = null;
var G__59056 = (0);
var G__59057 = (0);
seq__58497_59030 = G__59054;
chunk__58498_59031 = G__59055;
count__58499_59032 = G__59056;
i__58500_59033 = G__59057;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__58520){
var vec__58521 = p__58520;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58521,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58521,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
}),s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
(el.innerHTML = s);

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
return goog.dom.getAncestorByClass(shadow.dom.dom_node(el),cls);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__58531 = arguments.length;
switch (G__58531) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag));
}));

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag),cljs.core.name(cls));
}));

(shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3);

shadow.dom.get_value = (function shadow$dom$get_value(dom){
return goog.dom.forms.getValue(shadow.dom.dom_node(dom));
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
return goog.dom.forms.setValue(shadow.dom.dom_node(dom),value);
});
shadow.dom.px = (function shadow$dom$px(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | (0))),"px"].join('');
});
shadow.dom.pct = (function shadow$dom$pct(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"%"].join('');
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__58541 = cljs.core.seq(style_keys);
var chunk__58542 = null;
var count__58543 = (0);
var i__58544 = (0);
while(true){
if((i__58544 < count__58543)){
var it = chunk__58542.cljs$core$IIndexed$_nth$arity$2(null,i__58544);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__59064 = seq__58541;
var G__59065 = chunk__58542;
var G__59066 = count__58543;
var G__59067 = (i__58544 + (1));
seq__58541 = G__59064;
chunk__58542 = G__59065;
count__58543 = G__59066;
i__58544 = G__59067;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__58541);
if(temp__5735__auto__){
var seq__58541__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__58541__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__58541__$1);
var G__59068 = cljs.core.chunk_rest(seq__58541__$1);
var G__59069 = c__4556__auto__;
var G__59070 = cljs.core.count(c__4556__auto__);
var G__59071 = (0);
seq__58541 = G__59068;
chunk__58542 = G__59069;
count__58543 = G__59070;
i__58544 = G__59071;
continue;
} else {
var it = cljs.core.first(seq__58541__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__59076 = cljs.core.next(seq__58541__$1);
var G__59077 = null;
var G__59078 = (0);
var G__59079 = (0);
seq__58541 = G__59076;
chunk__58542 = G__59077;
count__58543 = G__59078;
i__58544 = G__59079;
continue;
}
} else {
return null;
}
}
break;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k58550,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__58560 = k58550;
var G__58560__$1 = (((G__58560 instanceof cljs.core.Keyword))?G__58560.fqn:null);
switch (G__58560__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k58550,else__4383__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__58564){
var vec__58565 = p__58564;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58565,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58565,(1),null);
return (f__4400__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4400__auto__.cljs$core$IFn$_invoke$arity$3(ret__4402__auto__,k__4403__auto__,v__4404__auto__) : f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__));
}),init__4401__auto__,this__4399__auto____$1);
}));

(shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer(writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer(writer__4395__auto__,pr_pair__4397__auto__,"#shadow.dom.Coordinate{",", ","}",opts__4396__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__58549){
var self__ = this;
var G__58549__$1 = this;
return (new cljs.core.RecordIter((0),G__58549__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (coll__4377__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__4377__auto__));
})(this__4376__auto____$1);
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this58551,other58552){
var self__ = this;
var this58551__$1 = this;
return (((!((other58552 == null)))) && ((this58551__$1.constructor === other58552.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this58551__$1.x,other58552.x)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this58551__$1.y,other58552.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this58551__$1.__extmap,other58552.__extmap)));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__4390__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4390__auto__)),null));
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__58549){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__58584 = cljs.core.keyword_identical_QMARK_;
var expr__58585 = k__4388__auto__;
if(cljs.core.truth_((pred__58584.cljs$core$IFn$_invoke$arity$2 ? pred__58584.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__58585) : pred__58584.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__58585)))){
return (new shadow.dom.Coordinate(G__58549,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__58584.cljs$core$IFn$_invoke$arity$2 ? pred__58584.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__58585) : pred__58584.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__58585)))){
return (new shadow.dom.Coordinate(self__.x,G__58549,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__58549),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__58549){
var self__ = this;
var this__4379__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__58549,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4386__auto__,(0)),cljs.core._nth(entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
}));

(shadow.dom.Coordinate.cljs$lang$type = true);

(shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
}));

(shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write(writer__4424__auto__,"shadow.dom/Coordinate");
}));

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__58553){
var extmap__4419__auto__ = (function (){var G__58595 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__58553,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__58553)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__58595);
} else {
return G__58595;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__58553),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__58553),null,cljs.core.not_empty(extmap__4419__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = goog.style.getPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = goog.style.getClientPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = goog.style.getPageOffset(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k58599,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__58605 = k58599;
var G__58605__$1 = (((G__58605 instanceof cljs.core.Keyword))?G__58605.fqn:null);
switch (G__58605__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k58599,else__4383__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__58607){
var vec__58608 = p__58607;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58608,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58608,(1),null);
return (f__4400__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4400__auto__.cljs$core$IFn$_invoke$arity$3(ret__4402__auto__,k__4403__auto__,v__4404__auto__) : f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__));
}),init__4401__auto__,this__4399__auto____$1);
}));

(shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer(writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer(writer__4395__auto__,pr_pair__4397__auto__,"#shadow.dom.Size{",", ","}",opts__4396__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__58598){
var self__ = this;
var G__58598__$1 = this;
return (new cljs.core.RecordIter((0),G__58598__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (coll__4377__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__4377__auto__));
})(this__4376__auto____$1);
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this58600,other58601){
var self__ = this;
var this58600__$1 = this;
return (((!((other58601 == null)))) && ((this58600__$1.constructor === other58601.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this58600__$1.w,other58601.w)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this58600__$1.h,other58601.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this58600__$1.__extmap,other58601.__extmap)));
}));

(shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__4390__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4390__auto__)),null));
}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__58598){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__58617 = cljs.core.keyword_identical_QMARK_;
var expr__58618 = k__4388__auto__;
if(cljs.core.truth_((pred__58617.cljs$core$IFn$_invoke$arity$2 ? pred__58617.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__58618) : pred__58617.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__58618)))){
return (new shadow.dom.Size(G__58598,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__58617.cljs$core$IFn$_invoke$arity$2 ? pred__58617.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__58618) : pred__58617.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__58618)))){
return (new shadow.dom.Size(self__.w,G__58598,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__58598),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__58598){
var self__ = this;
var this__4379__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__58598,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4386__auto__,(0)),cljs.core._nth(entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
}));

(shadow.dom.Size.cljs$lang$type = true);

(shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
}));

(shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write(writer__4424__auto__,"shadow.dom/Size");
}));

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__58602){
var extmap__4419__auto__ = (function (){var G__58626 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__58602,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__58602)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__58626);
} else {
return G__58626;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__58602),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__58602),null,cljs.core.not_empty(extmap__4419__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj(goog.style.getSize(shadow.dom.dom_node(el)));
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return shadow.dom.get_size(el).h;
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__4610__auto__ = opts;
var l__4611__auto__ = a__4610__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__4611__auto__)){
var G__59123 = (i + (1));
var G__59124 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__59123;
ret = G__59124;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__58648){
var vec__58650 = p__58648;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58650,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58650,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__58656 = arguments.length;
switch (G__58656) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
}));

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
}));

(shadow.dom.redirect.cljs$lang$maxFixedArity = 2);

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return (document.location.href = document.location.href);
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingAfter(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingBefore(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5733__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5733__auto__)){
var child = temp__5733__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__59130 = ps;
var G__59131 = (i + (1));
el__$1 = G__59130;
i = G__59131;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
return goog.dom.getParentElement(shadow.dom.dom_node(el));
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,(function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null,parent));
}),null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
return goog.dom.getNextElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
return goog.dom.getPreviousElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__58678 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58678,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58678,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58678,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__58681_59134 = cljs.core.seq(props);
var chunk__58682_59135 = null;
var count__58683_59136 = (0);
var i__58684_59137 = (0);
while(true){
if((i__58684_59137 < count__58683_59136)){
var vec__58695_59138 = chunk__58682_59135.cljs$core$IIndexed$_nth$arity$2(null,i__58684_59137);
var k_59139 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58695_59138,(0),null);
var v_59140 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58695_59138,(1),null);
el.setAttributeNS((function (){var temp__5735__auto__ = cljs.core.namespace(k_59139);
if(cljs.core.truth_(temp__5735__auto__)){
var ns = temp__5735__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_59139),v_59140);


var G__59142 = seq__58681_59134;
var G__59143 = chunk__58682_59135;
var G__59144 = count__58683_59136;
var G__59145 = (i__58684_59137 + (1));
seq__58681_59134 = G__59142;
chunk__58682_59135 = G__59143;
count__58683_59136 = G__59144;
i__58684_59137 = G__59145;
continue;
} else {
var temp__5735__auto___59146 = cljs.core.seq(seq__58681_59134);
if(temp__5735__auto___59146){
var seq__58681_59148__$1 = temp__5735__auto___59146;
if(cljs.core.chunked_seq_QMARK_(seq__58681_59148__$1)){
var c__4556__auto___59149 = cljs.core.chunk_first(seq__58681_59148__$1);
var G__59150 = cljs.core.chunk_rest(seq__58681_59148__$1);
var G__59151 = c__4556__auto___59149;
var G__59152 = cljs.core.count(c__4556__auto___59149);
var G__59153 = (0);
seq__58681_59134 = G__59150;
chunk__58682_59135 = G__59151;
count__58683_59136 = G__59152;
i__58684_59137 = G__59153;
continue;
} else {
var vec__58698_59154 = cljs.core.first(seq__58681_59148__$1);
var k_59155 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58698_59154,(0),null);
var v_59156 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58698_59154,(1),null);
el.setAttributeNS((function (){var temp__5735__auto____$1 = cljs.core.namespace(k_59155);
if(cljs.core.truth_(temp__5735__auto____$1)){
var ns = temp__5735__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_59155),v_59156);


var G__59167 = cljs.core.next(seq__58681_59148__$1);
var G__59168 = null;
var G__59169 = (0);
var G__59170 = (0);
seq__58681_59134 = G__59167;
chunk__58682_59135 = G__59168;
count__58683_59136 = G__59169;
i__58684_59137 = G__59170;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null);
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__58705 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58705,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58705,(1),null);
var seq__58708_59173 = cljs.core.seq(node_children);
var chunk__58710_59174 = null;
var count__58711_59175 = (0);
var i__58712_59176 = (0);
while(true){
if((i__58712_59176 < count__58711_59175)){
var child_struct_59178 = chunk__58710_59174.cljs$core$IIndexed$_nth$arity$2(null,i__58712_59176);
if((!((child_struct_59178 == null)))){
if(typeof child_struct_59178 === 'string'){
var text_59180 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_59180),child_struct_59178].join(''));
} else {
var children_59184 = shadow.dom.svg_node(child_struct_59178);
if(cljs.core.seq_QMARK_(children_59184)){
var seq__58744_59185 = cljs.core.seq(children_59184);
var chunk__58746_59186 = null;
var count__58747_59187 = (0);
var i__58748_59188 = (0);
while(true){
if((i__58748_59188 < count__58747_59187)){
var child_59189 = chunk__58746_59186.cljs$core$IIndexed$_nth$arity$2(null,i__58748_59188);
if(cljs.core.truth_(child_59189)){
node.appendChild(child_59189);


var G__59190 = seq__58744_59185;
var G__59191 = chunk__58746_59186;
var G__59192 = count__58747_59187;
var G__59193 = (i__58748_59188 + (1));
seq__58744_59185 = G__59190;
chunk__58746_59186 = G__59191;
count__58747_59187 = G__59192;
i__58748_59188 = G__59193;
continue;
} else {
var G__59194 = seq__58744_59185;
var G__59195 = chunk__58746_59186;
var G__59196 = count__58747_59187;
var G__59197 = (i__58748_59188 + (1));
seq__58744_59185 = G__59194;
chunk__58746_59186 = G__59195;
count__58747_59187 = G__59196;
i__58748_59188 = G__59197;
continue;
}
} else {
var temp__5735__auto___59198 = cljs.core.seq(seq__58744_59185);
if(temp__5735__auto___59198){
var seq__58744_59199__$1 = temp__5735__auto___59198;
if(cljs.core.chunked_seq_QMARK_(seq__58744_59199__$1)){
var c__4556__auto___59200 = cljs.core.chunk_first(seq__58744_59199__$1);
var G__59201 = cljs.core.chunk_rest(seq__58744_59199__$1);
var G__59202 = c__4556__auto___59200;
var G__59203 = cljs.core.count(c__4556__auto___59200);
var G__59204 = (0);
seq__58744_59185 = G__59201;
chunk__58746_59186 = G__59202;
count__58747_59187 = G__59203;
i__58748_59188 = G__59204;
continue;
} else {
var child_59205 = cljs.core.first(seq__58744_59199__$1);
if(cljs.core.truth_(child_59205)){
node.appendChild(child_59205);


var G__59206 = cljs.core.next(seq__58744_59199__$1);
var G__59207 = null;
var G__59208 = (0);
var G__59209 = (0);
seq__58744_59185 = G__59206;
chunk__58746_59186 = G__59207;
count__58747_59187 = G__59208;
i__58748_59188 = G__59209;
continue;
} else {
var G__59210 = cljs.core.next(seq__58744_59199__$1);
var G__59211 = null;
var G__59212 = (0);
var G__59213 = (0);
seq__58744_59185 = G__59210;
chunk__58746_59186 = G__59211;
count__58747_59187 = G__59212;
i__58748_59188 = G__59213;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_59184);
}
}


var G__59215 = seq__58708_59173;
var G__59216 = chunk__58710_59174;
var G__59217 = count__58711_59175;
var G__59218 = (i__58712_59176 + (1));
seq__58708_59173 = G__59215;
chunk__58710_59174 = G__59216;
count__58711_59175 = G__59217;
i__58712_59176 = G__59218;
continue;
} else {
var G__59221 = seq__58708_59173;
var G__59222 = chunk__58710_59174;
var G__59223 = count__58711_59175;
var G__59224 = (i__58712_59176 + (1));
seq__58708_59173 = G__59221;
chunk__58710_59174 = G__59222;
count__58711_59175 = G__59223;
i__58712_59176 = G__59224;
continue;
}
} else {
var temp__5735__auto___59228 = cljs.core.seq(seq__58708_59173);
if(temp__5735__auto___59228){
var seq__58708_59229__$1 = temp__5735__auto___59228;
if(cljs.core.chunked_seq_QMARK_(seq__58708_59229__$1)){
var c__4556__auto___59230 = cljs.core.chunk_first(seq__58708_59229__$1);
var G__59231 = cljs.core.chunk_rest(seq__58708_59229__$1);
var G__59232 = c__4556__auto___59230;
var G__59233 = cljs.core.count(c__4556__auto___59230);
var G__59234 = (0);
seq__58708_59173 = G__59231;
chunk__58710_59174 = G__59232;
count__58711_59175 = G__59233;
i__58712_59176 = G__59234;
continue;
} else {
var child_struct_59235 = cljs.core.first(seq__58708_59229__$1);
if((!((child_struct_59235 == null)))){
if(typeof child_struct_59235 === 'string'){
var text_59236 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_59236),child_struct_59235].join(''));
} else {
var children_59238 = shadow.dom.svg_node(child_struct_59235);
if(cljs.core.seq_QMARK_(children_59238)){
var seq__58759_59239 = cljs.core.seq(children_59238);
var chunk__58761_59240 = null;
var count__58762_59241 = (0);
var i__58763_59242 = (0);
while(true){
if((i__58763_59242 < count__58762_59241)){
var child_59244 = chunk__58761_59240.cljs$core$IIndexed$_nth$arity$2(null,i__58763_59242);
if(cljs.core.truth_(child_59244)){
node.appendChild(child_59244);


var G__59246 = seq__58759_59239;
var G__59247 = chunk__58761_59240;
var G__59248 = count__58762_59241;
var G__59249 = (i__58763_59242 + (1));
seq__58759_59239 = G__59246;
chunk__58761_59240 = G__59247;
count__58762_59241 = G__59248;
i__58763_59242 = G__59249;
continue;
} else {
var G__59250 = seq__58759_59239;
var G__59251 = chunk__58761_59240;
var G__59252 = count__58762_59241;
var G__59253 = (i__58763_59242 + (1));
seq__58759_59239 = G__59250;
chunk__58761_59240 = G__59251;
count__58762_59241 = G__59252;
i__58763_59242 = G__59253;
continue;
}
} else {
var temp__5735__auto___59254__$1 = cljs.core.seq(seq__58759_59239);
if(temp__5735__auto___59254__$1){
var seq__58759_59255__$1 = temp__5735__auto___59254__$1;
if(cljs.core.chunked_seq_QMARK_(seq__58759_59255__$1)){
var c__4556__auto___59256 = cljs.core.chunk_first(seq__58759_59255__$1);
var G__59257 = cljs.core.chunk_rest(seq__58759_59255__$1);
var G__59258 = c__4556__auto___59256;
var G__59259 = cljs.core.count(c__4556__auto___59256);
var G__59260 = (0);
seq__58759_59239 = G__59257;
chunk__58761_59240 = G__59258;
count__58762_59241 = G__59259;
i__58763_59242 = G__59260;
continue;
} else {
var child_59261 = cljs.core.first(seq__58759_59255__$1);
if(cljs.core.truth_(child_59261)){
node.appendChild(child_59261);


var G__59262 = cljs.core.next(seq__58759_59255__$1);
var G__59263 = null;
var G__59264 = (0);
var G__59265 = (0);
seq__58759_59239 = G__59262;
chunk__58761_59240 = G__59263;
count__58762_59241 = G__59264;
i__58763_59242 = G__59265;
continue;
} else {
var G__59266 = cljs.core.next(seq__58759_59255__$1);
var G__59267 = null;
var G__59268 = (0);
var G__59269 = (0);
seq__58759_59239 = G__59266;
chunk__58761_59240 = G__59267;
count__58762_59241 = G__59268;
i__58763_59242 = G__59269;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_59238);
}
}


var G__59273 = cljs.core.next(seq__58708_59229__$1);
var G__59274 = null;
var G__59275 = (0);
var G__59276 = (0);
seq__58708_59173 = G__59273;
chunk__58710_59174 = G__59274;
count__58711_59175 = G__59275;
i__58712_59176 = G__59276;
continue;
} else {
var G__59277 = cljs.core.next(seq__58708_59229__$1);
var G__59278 = null;
var G__59279 = (0);
var G__59280 = (0);
seq__58708_59173 = G__59277;
chunk__58710_59174 = G__59278;
count__58711_59175 = G__59279;
i__58712_59176 = G__59280;
continue;
}
}
} else {
}
}
break;
}

return node;
});
goog.object.set(shadow.dom.SVGElement,"string",true);

goog.object.set(shadow.dom._to_svg,"string",(function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
}));

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
}));

goog.object.set(shadow.dom.SVGElement,"null",true);

goog.object.set(shadow.dom._to_svg,"null",(function (_){
return null;
}));
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__4742__auto__ = [];
var len__4736__auto___59283 = arguments.length;
var i__4737__auto___59284 = (0);
while(true){
if((i__4737__auto___59284 < len__4736__auto___59283)){
args__4742__auto__.push((arguments[i__4737__auto___59284]));

var G__59285 = (i__4737__auto___59284 + (1));
i__4737__auto___59284 = G__59285;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
}));

(shadow.dom.svg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.dom.svg.cljs$lang$applyTo = (function (seq58772){
var G__58773 = cljs.core.first(seq58772);
var seq58772__$1 = cljs.core.next(seq58772);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__58773,seq58772__$1);
}));

/**
 * returns a channel for events on el
 * transform-fn should be a (fn [e el] some-val) where some-val will be put on the chan
 * once-or-cleanup handles the removal of the event handler
 * - true: remove after one event
 * - false: never removed
 * - chan: remove on msg/close
 */
shadow.dom.event_chan = (function shadow$dom$event_chan(var_args){
var G__58777 = arguments.length;
switch (G__58777) {
case 2:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2 = (function (el,event){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,null,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3 = (function (el,event,xf){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,xf,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4 = (function (el,event,xf,once_or_cleanup){
var buf = cljs.core.async.sliding_buffer((1));
var chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2(buf,xf);
var event_fn = (function shadow$dom$event_fn(e){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(chan,e);

if(once_or_cleanup === true){
shadow.dom.remove_event_handler(el,event,shadow$dom$event_fn);

return cljs.core.async.close_BANG_(chan);
} else {
return null;
}
});
shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(event),event_fn);

if(cljs.core.truth_((function (){var and__4115__auto__ = once_or_cleanup;
if(cljs.core.truth_(and__4115__auto__)){
return (!(once_or_cleanup === true));
} else {
return and__4115__auto__;
}
})())){
var c__56581__auto___59290 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__56582__auto__ = (function (){var switch__56532__auto__ = (function (state_58784){
var state_val_58785 = (state_58784[(1)]);
if((state_val_58785 === (1))){
var state_58784__$1 = state_58784;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_58784__$1,(2),once_or_cleanup);
} else {
if((state_val_58785 === (2))){
var inst_58781 = (state_58784[(2)]);
var inst_58782 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_58784__$1 = (function (){var statearr_58788 = state_58784;
(statearr_58788[(7)] = inst_58781);

return statearr_58788;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_58784__$1,inst_58782);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__56533__auto__ = null;
var shadow$dom$state_machine__56533__auto____0 = (function (){
var statearr_58790 = [null,null,null,null,null,null,null,null];
(statearr_58790[(0)] = shadow$dom$state_machine__56533__auto__);

(statearr_58790[(1)] = (1));

return statearr_58790;
});
var shadow$dom$state_machine__56533__auto____1 = (function (state_58784){
while(true){
var ret_value__56534__auto__ = (function (){try{while(true){
var result__56535__auto__ = switch__56532__auto__(state_58784);
if(cljs.core.keyword_identical_QMARK_(result__56535__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__56535__auto__;
}
break;
}
}catch (e58792){var ex__56536__auto__ = e58792;
var statearr_58793_59291 = state_58784;
(statearr_58793_59291[(2)] = ex__56536__auto__);


if(cljs.core.seq((state_58784[(4)]))){
var statearr_58794_59292 = state_58784;
(statearr_58794_59292[(1)] = cljs.core.first((state_58784[(4)])));

} else {
throw ex__56536__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__56534__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__59294 = state_58784;
state_58784 = G__59294;
continue;
} else {
return ret_value__56534__auto__;
}
break;
}
});
shadow$dom$state_machine__56533__auto__ = function(state_58784){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__56533__auto____0.call(this);
case 1:
return shadow$dom$state_machine__56533__auto____1.call(this,state_58784);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__56533__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__56533__auto____0;
shadow$dom$state_machine__56533__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__56533__auto____1;
return shadow$dom$state_machine__56533__auto__;
})()
})();
var state__56583__auto__ = (function (){var statearr_58795 = f__56582__auto__();
(statearr_58795[(6)] = c__56581__auto___59290);

return statearr_58795;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__56583__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map
