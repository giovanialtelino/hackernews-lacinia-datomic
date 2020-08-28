goog.provide('hackernews_reframe.core');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('reagent.dom');
goog.require('re_frame.core');
goog.require('hackernews_reframe.events');
goog.require('hackernews_reframe.routes');
goog.require('hackernews_reframe.views');
goog.require('hackernews_reframe.config');
hackernews_reframe.core.dev_setup = (function hackernews_reframe$core$dev_setup(){
if(hackernews_reframe.config.debug_QMARK_){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["dev mode"], 0));
} else {
return null;
}
});
hackernews_reframe.core.mount_root = (function hackernews_reframe$core$mount_root(){
(re_frame.core.clear_subscription_cache_BANG_.cljs$core$IFn$_invoke$arity$0 ? re_frame.core.clear_subscription_cache_BANG_.cljs$core$IFn$_invoke$arity$0() : re_frame.core.clear_subscription_cache_BANG_.call(null));

var root_el = document.getElementById("app");
reagent.dom.unmount_component_at_node(root_el);

return reagent.dom.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [hackernews_reframe.views.main_panel], null),root_el);
});
hackernews_reframe.core.init = (function hackernews_reframe$core$init(){
hackernews_reframe.routes.app_routes();

var G__64324_64325 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("hackernews-reframe.events","initialize-db","hackernews-reframe.events/initialize-db",1351928311)], null);
(re_frame.core.dispatch_sync.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch_sync.cljs$core$IFn$_invoke$arity$1(G__64324_64325) : re_frame.core.dispatch_sync.call(null,G__64324_64325));

hackernews_reframe.core.dev_setup();

return hackernews_reframe.core.mount_root();
});

//# sourceMappingURL=hackernews_reframe.core.js.map
