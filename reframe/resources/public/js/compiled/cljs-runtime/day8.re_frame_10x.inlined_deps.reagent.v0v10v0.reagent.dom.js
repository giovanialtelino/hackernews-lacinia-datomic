goog.provide('day8.re_frame_10x.inlined_deps.reagent.v0v10v0.reagent.dom');
goog.require('cljs.core');
var module$node_modules$react_dom$index=shadow.js.require("module$node_modules$react_dom$index", {});
goog.require('day8.re_frame_10x.inlined_deps.reagent.v0v10v0.reagent.impl.util');
goog.require('day8.re_frame_10x.inlined_deps.reagent.v0v10v0.reagent.impl.template');
goog.require('day8.re_frame_10x.inlined_deps.reagent.v0v10v0.reagent.impl.batching');
goog.require('day8.re_frame_10x.inlined_deps.reagent.v0v10v0.reagent.ratom');
if((typeof day8 !== 'undefined') && (typeof day8.re_frame_10x !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.reagent !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.reagent.v0v10v0 !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.reagent.v0v10v0.reagent !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.reagent.v0v10v0.reagent.dom !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.reagent.v0v10v0.reagent.dom.roots !== 'undefined')){
} else {
day8.re_frame_10x.inlined_deps.reagent.v0v10v0.reagent.dom.roots = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}
day8.re_frame_10x.inlined_deps.reagent.v0v10v0.reagent.dom.unmount_comp = (function day8$re_frame_10x$inlined_deps$reagent$v0v10v0$reagent$dom$unmount_comp(container){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.reagent.v0v10v0.reagent.dom.roots,cljs.core.dissoc,container);

return module$node_modules$react_dom$index.unmountComponentAtNode(container);
});
day8.re_frame_10x.inlined_deps.reagent.v0v10v0.reagent.dom.render_comp = (function day8$re_frame_10x$inlined_deps$reagent$v0v10v0$reagent$dom$render_comp(comp,container,callback){
var _STAR_always_update_STAR__orig_val__47600 = day8.re_frame_10x.inlined_deps.reagent.v0v10v0.reagent.impl.util._STAR_always_update_STAR_;
var _STAR_always_update_STAR__temp_val__47601 = true;
(day8.re_frame_10x.inlined_deps.reagent.v0v10v0.reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__temp_val__47601);

try{return module$node_modules$react_dom$index.render((comp.cljs$core$IFn$_invoke$arity$0 ? comp.cljs$core$IFn$_invoke$arity$0() : comp.call(null)),container,(function (){
var _STAR_always_update_STAR__orig_val__47604 = day8.re_frame_10x.inlined_deps.reagent.v0v10v0.reagent.impl.util._STAR_always_update_STAR_;
var _STAR_always_update_STAR__temp_val__47605 = false;
(day8.re_frame_10x.inlined_deps.reagent.v0v10v0.reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__temp_val__47605);

try{cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(day8.re_frame_10x.inlined_deps.reagent.v0v10v0.reagent.dom.roots,cljs.core.assoc,container,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [comp,container], null));

day8.re_frame_10x.inlined_deps.reagent.v0v10v0.reagent.impl.batching.flush_after_render();

if((!((callback == null)))){
return (callback.cljs$core$IFn$_invoke$arity$0 ? callback.cljs$core$IFn$_invoke$arity$0() : callback.call(null));
} else {
return null;
}
}finally {(day8.re_frame_10x.inlined_deps.reagent.v0v10v0.reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__orig_val__47604);
}}));
}finally {(day8.re_frame_10x.inlined_deps.reagent.v0v10v0.reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__orig_val__47600);
}});
day8.re_frame_10x.inlined_deps.reagent.v0v10v0.reagent.dom.re_render_component = (function day8$re_frame_10x$inlined_deps$reagent$v0v10v0$reagent$dom$re_render_component(comp,container){
return day8.re_frame_10x.inlined_deps.reagent.v0v10v0.reagent.dom.render_comp(comp,container,null);
});
/**
 * Render a Reagent component into the DOM. The first argument may be
 *   either a vector (using Reagent's Hiccup syntax), or a React element.
 *   The second argument should be a DOM node.
 * 
 *   Optionally takes a callback that is called when the component is in place.
 * 
 *   Returns the mounted component instance.
 */
day8.re_frame_10x.inlined_deps.reagent.v0v10v0.reagent.dom.render = (function day8$re_frame_10x$inlined_deps$reagent$v0v10v0$reagent$dom$render(var_args){
var G__47614 = arguments.length;
switch (G__47614) {
case 2:
return day8.re_frame_10x.inlined_deps.reagent.v0v10v0.reagent.dom.render.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return day8.re_frame_10x.inlined_deps.reagent.v0v10v0.reagent.dom.render.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(day8.re_frame_10x.inlined_deps.reagent.v0v10v0.reagent.dom.render.cljs$core$IFn$_invoke$arity$2 = (function (comp,container){
return day8.re_frame_10x.inlined_deps.reagent.v0v10v0.reagent.dom.render.cljs$core$IFn$_invoke$arity$3(comp,container,null);
}));

(day8.re_frame_10x.inlined_deps.reagent.v0v10v0.reagent.dom.render.cljs$core$IFn$_invoke$arity$3 = (function (comp,container,callback){
day8.re_frame_10x.inlined_deps.reagent.v0v10v0.reagent.ratom.flush_BANG_();

var f = (function (){
return day8.re_frame_10x.inlined_deps.reagent.v0v10v0.reagent.impl.template.as_element(((cljs.core.fn_QMARK_(comp))?(comp.cljs$core$IFn$_invoke$arity$0 ? comp.cljs$core$IFn$_invoke$arity$0() : comp.call(null)):comp));
});
return day8.re_frame_10x.inlined_deps.reagent.v0v10v0.reagent.dom.render_comp(f,container,callback);
}));

(day8.re_frame_10x.inlined_deps.reagent.v0v10v0.reagent.dom.render.cljs$lang$maxFixedArity = 3);

/**
 * Remove a component from the given DOM node.
 */
day8.re_frame_10x.inlined_deps.reagent.v0v10v0.reagent.dom.unmount_component_at_node = (function day8$re_frame_10x$inlined_deps$reagent$v0v10v0$reagent$dom$unmount_component_at_node(container){
return day8.re_frame_10x.inlined_deps.reagent.v0v10v0.reagent.dom.unmount_comp(container);
});
/**
 * Returns the root DOM node of a mounted component.
 */
day8.re_frame_10x.inlined_deps.reagent.v0v10v0.reagent.dom.dom_node = (function day8$re_frame_10x$inlined_deps$reagent$v0v10v0$reagent$dom$dom_node(this$){
return module$node_modules$react_dom$index.findDOMNode(this$);
});
(day8.re_frame_10x.inlined_deps.reagent.v0v10v0.reagent.impl.template.find_dom_node = day8.re_frame_10x.inlined_deps.reagent.v0v10v0.reagent.dom.dom_node);
/**
 * Force re-rendering of all mounted Reagent components. This is
 *   probably only useful in a development environment, when you want to
 *   update components in response to some dynamic changes to code.
 * 
 *   Note that force-update-all may not update root components. This
 *   happens if a component 'foo' is mounted with `(render [foo])` (since
 *   functions are passed by value, and not by reference, in
 *   ClojureScript). To get around this you'll have to introduce a layer
 *   of indirection, for example by using `(render [#'foo])` instead.
 */
day8.re_frame_10x.inlined_deps.reagent.v0v10v0.reagent.dom.force_update_all = (function day8$re_frame_10x$inlined_deps$reagent$v0v10v0$reagent$dom$force_update_all(){
day8.re_frame_10x.inlined_deps.reagent.v0v10v0.reagent.ratom.flush_BANG_();

var seq__47616_47668 = cljs.core.seq(cljs.core.vals(cljs.core.deref(day8.re_frame_10x.inlined_deps.reagent.v0v10v0.reagent.dom.roots)));
var chunk__47617_47669 = null;
var count__47618_47670 = (0);
var i__47619_47671 = (0);
while(true){
if((i__47619_47671 < count__47618_47670)){
var v_47672 = chunk__47617_47669.cljs$core$IIndexed$_nth$arity$2(null,i__47619_47671);
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(day8.re_frame_10x.inlined_deps.reagent.v0v10v0.reagent.dom.re_render_component,v_47672);


var G__47673 = seq__47616_47668;
var G__47674 = chunk__47617_47669;
var G__47675 = count__47618_47670;
var G__47676 = (i__47619_47671 + (1));
seq__47616_47668 = G__47673;
chunk__47617_47669 = G__47674;
count__47618_47670 = G__47675;
i__47619_47671 = G__47676;
continue;
} else {
var temp__5735__auto___47677 = cljs.core.seq(seq__47616_47668);
if(temp__5735__auto___47677){
var seq__47616_47680__$1 = temp__5735__auto___47677;
if(cljs.core.chunked_seq_QMARK_(seq__47616_47680__$1)){
var c__4556__auto___47685 = cljs.core.chunk_first(seq__47616_47680__$1);
var G__47687 = cljs.core.chunk_rest(seq__47616_47680__$1);
var G__47688 = c__4556__auto___47685;
var G__47689 = cljs.core.count(c__4556__auto___47685);
var G__47690 = (0);
seq__47616_47668 = G__47687;
chunk__47617_47669 = G__47688;
count__47618_47670 = G__47689;
i__47619_47671 = G__47690;
continue;
} else {
var v_47694 = cljs.core.first(seq__47616_47680__$1);
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(day8.re_frame_10x.inlined_deps.reagent.v0v10v0.reagent.dom.re_render_component,v_47694);


var G__47695 = cljs.core.next(seq__47616_47680__$1);
var G__47696 = null;
var G__47697 = (0);
var G__47698 = (0);
seq__47616_47668 = G__47695;
chunk__47617_47669 = G__47696;
count__47618_47670 = G__47697;
i__47619_47671 = G__47698;
continue;
}
} else {
}
}
break;
}

return day8.re_frame_10x.inlined_deps.reagent.v0v10v0.reagent.impl.batching.flush_after_render();
});

//# sourceMappingURL=day8.re_frame_10x.inlined_deps.reagent.v0v10v0.reagent.dom.js.map
