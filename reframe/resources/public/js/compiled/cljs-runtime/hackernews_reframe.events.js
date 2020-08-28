goog.provide('hackernews_reframe.events');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('hackernews_reframe.db');
goog.require('day8.re_frame.tracing');
goog.require('re_graph.core');
goog.require('hackernews_reframe.subs');
goog.require('secretary.core');
goog.require('hackernews_reframe.graphql');
hackernews_reframe.events.add_local_storage = (function hackernews_reframe$events$add_local_storage(key,value){
return localStorage.setItem(key,value);
});
hackernews_reframe.events.remove_local_storage = (function hackernews_reframe$events$remove_local_storage(key){
return localStorage.removeItem(key);
});
hackernews_reframe.events.get_local_storage = (function hackernews_reframe$events$get_local_storage(key){
return localStorage.getItem(key);
});
hackernews_reframe.events.re_graph_init = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"ws-url","ws-url",-1466481235),null,new cljs.core.Keyword(null,"http-url","http-url",-2043776269),"http://localhost:8080/graphql",new cljs.core.Keyword(null,"http-parameters","http-parameters",652689694),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222),false], null)], null);
var G__63603_63951 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("re-graph.core","init","re-graph.core/init",1695143043),hackernews_reframe.events.re_graph_init], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__63603_63951) : re_frame.core.dispatch.call(null,G__63603_63951));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("hackernews-reframe.events","update-re-graph","hackernews-reframe.events/update-re-graph",-374749717),(function (p__63604,p__63605){
var map__63606 = p__63604;
var map__63606__$1 = (((((!((map__63606 == null))))?(((((map__63606.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63606.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__63606):map__63606);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63606__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__63607 = p__63605;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63607,(0),null);
var vec__63610 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63607,(1),null);
var token = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63610,(0),null);
var refresh = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63610,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"re-graph","re-graph",-2120583638),new cljs.core.Keyword("re-graph.internals","default","re-graph.internals/default",-1918427164),new cljs.core.Keyword(null,"http-parameters","http-parameters",652689694),new cljs.core.Keyword(null,"headers","headers",-835030129)], null),new cljs.core.PersistentArrayMap(null, 2, ["Authorization",token,"Refresh",refresh], null))], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("hackernews-reframe.events","start-headers","hackernews-reframe.events/start-headers",644899362),(function (p__63614,_){
var map__63615 = p__63614;
var map__63615__$1 = (((((!((map__63615 == null))))?(((((map__63615.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63615.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__63615):map__63615);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63615__$1,new cljs.core.Keyword(null,"db","db",993250759));
var token = hackernews_reframe.events.get_local_storage("token");
var refresh = hackernews_reframe.events.get_local_storage("refresh-token");
var username = hackernews_reframe.events.get_local_storage("username");
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"username","username",1605666410),username),new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("hackernews-reframe.events","update-re-graph","hackernews-reframe.events/update-re-graph",-374749717),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [token,refresh], null)], null)], null);
}));
var G__63617_63952 = new cljs.core.Keyword(null,"set-local-store","set-local-store",1294751859);
var G__63618_63953 = (function (array){
var keys = cljs.core.first(array);
hackernews_reframe.events.add_local_storage("username",new cljs.core.Keyword(null,"username","username",1605666410).cljs$core$IFn$_invoke$arity$1(keys));

hackernews_reframe.events.add_local_storage("token",new cljs.core.Keyword(null,"token","token",-1211463215).cljs$core$IFn$_invoke$arity$1(keys));

return hackernews_reframe.events.add_local_storage("refresh-token",new cljs.core.Keyword(null,"refresh","refresh",1947415525).cljs$core$IFn$_invoke$arity$1(keys));
});
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__63617_63952,G__63618_63953) : re_frame.core.reg_fx.call(null,G__63617_63952,G__63618_63953));
var G__63619_63955 = new cljs.core.Keyword(null,"dispatch-panel","dispatch-panel",1494900817);
var G__63620_63956 = (function (panel){
var G__63621 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("hackernews-reframe.events","set-active-panel","hackernews-reframe.events/set-active-panel",-1692528511),panel], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__63621) : re_frame.core.dispatch.call(null,G__63621));
});
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__63619_63955,G__63620_63956) : re_frame.core.reg_fx.call(null,G__63619_63955,G__63620_63956));
var G__63622_63957 = new cljs.core.Keyword(null,"dispatch-directly","dispatch-directly",-104036812);
var G__63623_63958 = (function (route){
return (window.location.hash = ["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first(route))].join(''));
});
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__63622_63957,G__63623_63958) : re_frame.core.reg_fx.call(null,G__63622_63957,G__63623_63958));
var G__63624_63959 = new cljs.core.Keyword(null,"remove-local-store","remove-local-store",1321627846);
var G__63625_63960 = (function (){
hackernews_reframe.events.remove_local_storage("token");

hackernews_reframe.events.remove_local_storage("username");

return hackernews_reframe.events.remove_local_storage("refresh-token");
});
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__63624_63959,G__63625_63960) : re_frame.core.reg_fx.call(null,G__63624_63959,G__63625_63960));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("hackernews-reframe.events","initialize-db","hackernews-reframe.events/initialize-db",1351928311),((day8.re_frame.tracing.is_trace_enabled_QMARK_())?(function (_,___$1){
var _PLUS_debux_dbg_opts_PLUS_ = cljs.core.PersistentArrayMap.EMPTY;
try{debux.common.util.send_form_BANG_(new cljs.core.Symbol("db","default-db","db/default-db",-1149096552,null));

var opts__62290__auto__ = _PLUS_debux_dbg_opts_PLUS_;
var result__62291__auto__ = hackernews_reframe.db.default_db;
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__62291__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol("db","default-db","db/default-db",-1149096552,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(0)], null));

return result__62291__auto__;
}catch (e63627){var e = e63627;
throw e;
}}):(function (_,___$1){
return hackernews_reframe.db.default_db;
})));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("hackernews-reframe.events","set-active-panel","hackernews-reframe.events/set-active-panel",-1692528511),((day8.re_frame.tracing.is_trace_enabled_QMARK_())?(function (db,p__63629){
var vec__63630 = p__63629;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63630,(0),null);
var active_panel = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63630,(1),null);
var _PLUS_debux_dbg_opts_PLUS_ = cljs.core.PersistentArrayMap.EMPTY;
try{debux.common.util.send_form_BANG_(cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword(null,"active-panel","active-panel",-1802545994),new cljs.core.Symbol(null,"active-panel","active-panel",-162014467,null)));

var opts__62290__auto__ = _PLUS_debux_dbg_opts_PLUS_;
var result__62291__auto__ = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var opts__62290__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__62291__auto__ = db;
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__62291__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__62291__auto__;
})(),new cljs.core.Keyword(null,"active-panel","active-panel",-1802545994),(function (){var opts__62290__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__62291__auto__ = active_panel;
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__62291__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"active-panel","active-panel",-162014467,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__62291__auto__;
})());
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__62291__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword(null,"active-panel","active-panel",-1802545994),new cljs.core.Symbol(null,"active-panel","active-panel",-162014467,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(0)], null));

return result__62291__auto__;
}catch (e63635){var e = e63635;
throw e;
}}):(function (db,p__63636){
var vec__63637 = p__63636;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63637,(0),null);
var active_panel = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63637,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"active-panel","active-panel",-1802545994),active_panel);
})));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("hackernews-reframe.events","change-email","hackernews-reframe.events/change-email",236997746),((day8.re_frame.tracing.is_trace_enabled_QMARK_())?(function (db,p__63640){
var vec__63641 = p__63640;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63641,(0),null);
var email = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63641,(1),null);
var _PLUS_debux_dbg_opts_PLUS_ = cljs.core.PersistentArrayMap.EMPTY;
try{debux.common.util.send_form_BANG_(cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword(null,"email","email",1415816706),new cljs.core.Symbol(null,"email","email",-1238619063,null)));

var opts__62290__auto__ = _PLUS_debux_dbg_opts_PLUS_;
var result__62291__auto__ = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var opts__62290__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__62291__auto__ = db;
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__62291__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__62291__auto__;
})(),new cljs.core.Keyword(null,"email","email",1415816706),(function (){var opts__62290__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__62291__auto__ = email;
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__62291__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"email","email",-1238619063,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__62291__auto__;
})());
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__62291__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword(null,"email","email",1415816706),new cljs.core.Symbol(null,"email","email",-1238619063,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(0)], null));

return result__62291__auto__;
}catch (e63645){var e = e63645;
throw e;
}}):(function (db,p__63646){
var vec__63647 = p__63646;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63647,(0),null);
var email = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63647,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"email","email",1415816706),email);
})));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("hackernews-reframe.events","change-new-email","hackernews-reframe.events/change-new-email",-1755301226),((day8.re_frame.tracing.is_trace_enabled_QMARK_())?(function (db,p__63650){
var vec__63651 = p__63650;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63651,(0),null);
var email = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63651,(1),null);
var _PLUS_debux_dbg_opts_PLUS_ = cljs.core.PersistentArrayMap.EMPTY;
try{debux.common.util.send_form_BANG_(cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword(null,"new-email","new-email",106233565),new cljs.core.Symbol(null,"email","email",-1238619063,null)));

var opts__62290__auto__ = _PLUS_debux_dbg_opts_PLUS_;
var result__62291__auto__ = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var opts__62290__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__62291__auto__ = db;
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__62291__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__62291__auto__;
})(),new cljs.core.Keyword(null,"new-email","new-email",106233565),(function (){var opts__62290__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__62291__auto__ = email;
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__62291__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"email","email",-1238619063,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__62291__auto__;
})());
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__62291__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword(null,"new-email","new-email",106233565),new cljs.core.Symbol(null,"email","email",-1238619063,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(0)], null));

return result__62291__auto__;
}catch (e63654){var e = e63654;
throw e;
}}):(function (db,p__63656){
var vec__63657 = p__63656;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63657,(0),null);
var email = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63657,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"new-email","new-email",106233565),email);
})));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("hackernews-reframe.events","change-usr","hackernews-reframe.events/change-usr",1213120150),((day8.re_frame.tracing.is_trace_enabled_QMARK_())?(function (db,p__63660){
var vec__63661 = p__63660;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63661,(0),null);
var email = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63661,(1),null);
var _PLUS_debux_dbg_opts_PLUS_ = cljs.core.PersistentArrayMap.EMPTY;
try{debux.common.util.send_form_BANG_(cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword(null,"username","username",1605666410),new cljs.core.Symbol(null,"email","email",-1238619063,null)));

var opts__62290__auto__ = _PLUS_debux_dbg_opts_PLUS_;
var result__62291__auto__ = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var opts__62290__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__62291__auto__ = db;
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__62291__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__62291__auto__;
})(),new cljs.core.Keyword(null,"username","username",1605666410),(function (){var opts__62290__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__62291__auto__ = email;
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__62291__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"email","email",-1238619063,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__62291__auto__;
})());
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__62291__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword(null,"username","username",1605666410),new cljs.core.Symbol(null,"email","email",-1238619063,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(0)], null));

return result__62291__auto__;
}catch (e63664){var e = e63664;
throw e;
}}):(function (db,p__63665){
var vec__63666 = p__63665;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63666,(0),null);
var email = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63666,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"username","username",1605666410),email);
})));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("hackernews-reframe.events","change-new-usr","hackernews-reframe.events/change-new-usr",-1974478822),((day8.re_frame.tracing.is_trace_enabled_QMARK_())?(function (db,p__63669){
var vec__63670 = p__63669;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63670,(0),null);
var email = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63670,(1),null);
var _PLUS_debux_dbg_opts_PLUS_ = cljs.core.PersistentArrayMap.EMPTY;
try{debux.common.util.send_form_BANG_(cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword(null,"new-usr","new-usr",-46077293),new cljs.core.Symbol(null,"email","email",-1238619063,null)));

var opts__62290__auto__ = _PLUS_debux_dbg_opts_PLUS_;
var result__62291__auto__ = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var opts__62290__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__62291__auto__ = db;
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__62291__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__62291__auto__;
})(),new cljs.core.Keyword(null,"new-usr","new-usr",-46077293),(function (){var opts__62290__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__62291__auto__ = email;
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__62291__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"email","email",-1238619063,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__62291__auto__;
})());
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__62291__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword(null,"new-usr","new-usr",-46077293),new cljs.core.Symbol(null,"email","email",-1238619063,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(0)], null));

return result__62291__auto__;
}catch (e63673){var e = e63673;
throw e;
}}):(function (db,p__63674){
var vec__63675 = p__63674;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63675,(0),null);
var email = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63675,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"new-usr","new-usr",-46077293),email);
})));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("hackernews-reframe.events","change-comment-type","hackernews-reframe.events/change-comment-type",2002770029),((day8.re_frame.tracing.is_trace_enabled_QMARK_())?(function (db,p__63678){
var vec__63679 = p__63678;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63679,(0),null);
var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63679,(1),null);
var _PLUS_debux_dbg_opts_PLUS_ = cljs.core.PersistentArrayMap.EMPTY;
try{debux.common.util.send_form_BANG_(cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword(null,"comment-type","comment-type",-1344156995),new cljs.core.Symbol(null,"type","type",-1480165421,null)));

var opts__62290__auto__ = _PLUS_debux_dbg_opts_PLUS_;
var result__62291__auto__ = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var opts__62290__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__62291__auto__ = db;
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__62291__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__62291__auto__;
})(),new cljs.core.Keyword(null,"comment-type","comment-type",-1344156995),(function (){var opts__62290__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__62291__auto__ = type;
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__62291__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"type","type",-1480165421,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__62291__auto__;
})());
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__62291__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword(null,"comment-type","comment-type",-1344156995),new cljs.core.Symbol(null,"type","type",-1480165421,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(0)], null));

return result__62291__auto__;
}catch (e63682){var e = e63682;
throw e;
}}):(function (db,p__63683){
var vec__63684 = p__63683;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63684,(0),null);
var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63684,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"comment-type","comment-type",-1344156995),type);
})));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("hackernews-reframe.events","change-pwd","hackernews-reframe.events/change-pwd",-1478129042),((day8.re_frame.tracing.is_trace_enabled_QMARK_())?(function (db,p__63687){
var vec__63688 = p__63687;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63688,(0),null);
var pwd = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63688,(1),null);
var _PLUS_debux_dbg_opts_PLUS_ = cljs.core.PersistentArrayMap.EMPTY;
try{debux.common.util.send_form_BANG_(cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword(null,"pwd","pwd",583478407),new cljs.core.Symbol(null,"pwd","pwd",-2070957362,null)));

var opts__62290__auto__ = _PLUS_debux_dbg_opts_PLUS_;
var result__62291__auto__ = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var opts__62290__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__62291__auto__ = db;
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__62291__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__62291__auto__;
})(),new cljs.core.Keyword(null,"pwd","pwd",583478407),(function (){var opts__62290__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__62291__auto__ = pwd;
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__62291__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"pwd","pwd",-2070957362,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__62291__auto__;
})());
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__62291__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword(null,"pwd","pwd",583478407),new cljs.core.Symbol(null,"pwd","pwd",-2070957362,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(0)], null));

return result__62291__auto__;
}catch (e63691){var e = e63691;
throw e;
}}):(function (db,p__63692){
var vec__63693 = p__63692;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63693,(0),null);
var pwd = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63693,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"pwd","pwd",583478407),pwd);
})));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("hackernews-reframe.events","new-comment","hackernews-reframe.events/new-comment",-337952228),((day8.re_frame.tracing.is_trace_enabled_QMARK_())?(function (db,p__63696){
var vec__63697 = p__63696;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63697,(0),null);
var comment = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63697,(1),null);
var _PLUS_debux_dbg_opts_PLUS_ = cljs.core.PersistentArrayMap.EMPTY;
try{debux.common.util.send_form_BANG_(cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword(null,"new-comment","new-comment",1342914881),new cljs.core.Symbol(null,"comment","comment",-2122229700,null)));

var opts__62290__auto__ = _PLUS_debux_dbg_opts_PLUS_;
var result__62291__auto__ = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var opts__62290__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__62291__auto__ = db;
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__62291__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__62291__auto__;
})(),new cljs.core.Keyword(null,"new-comment","new-comment",1342914881),(function (){var opts__62290__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__62291__auto__ = comment;
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__62291__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"comment","comment",-2122229700,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__62291__auto__;
})());
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__62291__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword(null,"new-comment","new-comment",1342914881),new cljs.core.Symbol(null,"comment","comment",-2122229700,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(0)], null));

return result__62291__auto__;
}catch (e63700){var e = e63700;
throw e;
}}):(function (db,p__63701){
var vec__63702 = p__63701;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63702,(0),null);
var comment = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63702,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"new-comment","new-comment",1342914881),comment);
})));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("hackernews-reframe.events","change-new-pwd","hackernews-reframe.events/change-new-pwd",-13406874),((day8.re_frame.tracing.is_trace_enabled_QMARK_())?(function (db,p__63705){
var vec__63706 = p__63705;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63706,(0),null);
var pwd = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63706,(1),null);
var _PLUS_debux_dbg_opts_PLUS_ = cljs.core.PersistentArrayMap.EMPTY;
try{debux.common.util.send_form_BANG_(cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword(null,"new-pwd","new-pwd",2099436325),new cljs.core.Symbol(null,"pwd","pwd",-2070957362,null)));

var opts__62290__auto__ = _PLUS_debux_dbg_opts_PLUS_;
var result__62291__auto__ = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var opts__62290__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__62291__auto__ = db;
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__62291__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__62291__auto__;
})(),new cljs.core.Keyword(null,"new-pwd","new-pwd",2099436325),(function (){var opts__62290__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__62291__auto__ = pwd;
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__62291__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"pwd","pwd",-2070957362,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__62291__auto__;
})());
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__62291__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword(null,"new-pwd","new-pwd",2099436325),new cljs.core.Symbol(null,"pwd","pwd",-2070957362,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(0)], null));

return result__62291__auto__;
}catch (e63709){var e = e63709;
throw e;
}}):(function (db,p__63713){
var vec__63714 = p__63713;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63714,(0),null);
var pwd = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63714,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"new-pwd","new-pwd",2099436325),pwd);
})));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("hackernews-reframe.events","change-new-pwd-conf","hackernews-reframe.events/change-new-pwd-conf",341143558),((day8.re_frame.tracing.is_trace_enabled_QMARK_())?(function (db,p__63717){
var vec__63718 = p__63717;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63718,(0),null);
var pwd = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63718,(1),null);
var _PLUS_debux_dbg_opts_PLUS_ = cljs.core.PersistentArrayMap.EMPTY;
try{debux.common.util.send_form_BANG_(cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword(null,"pwd-new-conf","pwd-new-conf",-1370958226),new cljs.core.Symbol(null,"pwd","pwd",-2070957362,null)));

var opts__62290__auto__ = _PLUS_debux_dbg_opts_PLUS_;
var result__62291__auto__ = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var opts__62290__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__62291__auto__ = db;
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__62291__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__62291__auto__;
})(),new cljs.core.Keyword(null,"pwd-new-conf","pwd-new-conf",-1370958226),(function (){var opts__62290__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__62291__auto__ = pwd;
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__62291__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"pwd","pwd",-2070957362,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__62291__auto__;
})());
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__62291__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword(null,"pwd-new-conf","pwd-new-conf",-1370958226),new cljs.core.Symbol(null,"pwd","pwd",-2070957362,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(0)], null));

return result__62291__auto__;
}catch (e63721){var e = e63721;
throw e;
}}):(function (db,p__63722){
var vec__63723 = p__63722;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63723,(0),null);
var pwd = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63723,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"pwd-new-conf","pwd-new-conf",-1370958226),pwd);
})));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("hackernews-reframe.events","change-new-title","hackernews-reframe.events/change-new-title",-1701488544),((day8.re_frame.tracing.is_trace_enabled_QMARK_())?(function (db,p__63726){
var vec__63727 = p__63726;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63727,(0),null);
var title = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63727,(1),null);
var _PLUS_debux_dbg_opts_PLUS_ = cljs.core.PersistentArrayMap.EMPTY;
try{debux.common.util.send_form_BANG_(cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword(null,"new-title","new-title",-2087375544),new cljs.core.Symbol(null,"title","title",-2017930186,null)));

var opts__62290__auto__ = _PLUS_debux_dbg_opts_PLUS_;
var result__62291__auto__ = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var opts__62290__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__62291__auto__ = db;
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__62291__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__62291__auto__;
})(),new cljs.core.Keyword(null,"new-title","new-title",-2087375544),(function (){var opts__62290__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__62291__auto__ = title;
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__62291__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"title","title",-2017930186,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__62291__auto__;
})());
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__62291__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword(null,"new-title","new-title",-2087375544),new cljs.core.Symbol(null,"title","title",-2017930186,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(0)], null));

return result__62291__auto__;
}catch (e63730){var e = e63730;
throw e;
}}):(function (db,p__63731){
var vec__63732 = p__63731;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63732,(0),null);
var title = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63732,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"new-title","new-title",-2087375544),title);
})));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("hackernews-reframe.events","change-new-url","hackernews-reframe.events/change-new-url",1840268862),((day8.re_frame.tracing.is_trace_enabled_QMARK_())?(function (db,p__63735){
var vec__63736 = p__63735;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63736,(0),null);
var url = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63736,(1),null);
var _PLUS_debux_dbg_opts_PLUS_ = cljs.core.PersistentArrayMap.EMPTY;
try{debux.common.util.send_form_BANG_(cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword(null,"new-url","new-url",1939173707),new cljs.core.Symbol(null,"url","url",1916828573,null)));

var opts__62290__auto__ = _PLUS_debux_dbg_opts_PLUS_;
var result__62291__auto__ = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var opts__62290__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__62291__auto__ = db;
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__62291__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__62291__auto__;
})(),new cljs.core.Keyword(null,"new-url","new-url",1939173707),(function (){var opts__62290__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__62291__auto__ = url;
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__62291__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"url","url",1916828573,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__62291__auto__;
})());
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__62291__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword(null,"new-url","new-url",1939173707),new cljs.core.Symbol(null,"url","url",1916828573,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(0)], null));

return result__62291__auto__;
}catch (e63739){var e = e63739;
throw e;
}}):(function (db,p__63740){
var vec__63741 = p__63740;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63741,(0),null);
var url = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63741,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"new-url","new-url",1939173707),url);
})));
hackernews_reframe.events.remove_new_id = (function hackernews_reframe$events$remove_new_id(news_list,id){
var new$ = cljs.core.PersistentVector.EMPTY;
var i = (0);
while(true){
if((i < cljs.core.count(news_list))){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(news_list,i)),id)){
var G__64018 = new$;
var G__64019 = (i + (1));
new$ = G__64018;
i = G__64019;
continue;
} else {
var G__64020 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(new$,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(news_list,i));
var G__64021 = (i + (1));
new$ = G__64020;
i = G__64021;
continue;
}
} else {
return new$;
}
break;
}
});
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("hackernews-reframe.events","remove-view","hackernews-reframe.events/remove-view",1074228910),((day8.re_frame.tracing.is_trace_enabled_QMARK_())?(function (db,p__63747){
var vec__63748 = p__63747;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63748,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63748,(1),null);
var _PLUS_debux_dbg_opts_PLUS_ = cljs.core.PersistentArrayMap.EMPTY;
try{debux.common.util.send_form_BANG_(cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword(null,"news-list","news-list",-1892492424),cljs.core.list(new cljs.core.Symbol(null,"remove-new-id","remove-new-id",-65752967,null),cljs.core.list(new cljs.core.Keyword(null,"news-list","news-list",-1892492424),new cljs.core.Symbol(null,"db","db",-1661185010,null)),new cljs.core.Symbol(null,"id","id",252129435,null))));

var opts__62290__auto__ = _PLUS_debux_dbg_opts_PLUS_;
var result__62291__auto__ = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var opts__62290__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__62291__auto__ = db;
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__62291__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__62291__auto__;
})(),new cljs.core.Keyword(null,"news-list","news-list",-1892492424),(function (){var opts__62290__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__62291__auto__ = hackernews_reframe.events.remove_new_id((function (){var opts__62290__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__62291__auto__ = new cljs.core.Keyword(null,"news-list","news-list",-1892492424).cljs$core$IFn$_invoke$arity$1((function (){var opts__62290__auto____$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__62291__auto__ = db;
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__62291__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__62291__auto__;
})());
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__62291__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Keyword(null,"news-list","news-list",-1892492424),new cljs.core.Symbol(null,"db","db",-1661185010,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__62291__auto__;
})(),(function (){var opts__62290__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__62291__auto__ = id;
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__62291__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"id","id",252129435,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__62291__auto__;
})());
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__62291__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"remove-new-id","remove-new-id",-65752967,null),cljs.core.list(new cljs.core.Keyword(null,"news-list","news-list",-1892492424),new cljs.core.Symbol(null,"db","db",-1661185010,null)),new cljs.core.Symbol(null,"id","id",252129435,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__62291__auto__;
})());
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__62291__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword(null,"news-list","news-list",-1892492424),cljs.core.list(new cljs.core.Symbol(null,"remove-new-id","remove-new-id",-65752967,null),cljs.core.list(new cljs.core.Keyword(null,"news-list","news-list",-1892492424),new cljs.core.Symbol(null,"db","db",-1661185010,null)),new cljs.core.Symbol(null,"id","id",252129435,null))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(0)], null));

return result__62291__auto__;
}catch (e63751){var e = e63751;
throw e;
}}):(function (db,p__63752){
var vec__63753 = p__63752;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63753,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63753,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"news-list","news-list",-1892492424),hackernews_reframe.events.remove_new_id(new cljs.core.Keyword(null,"news-list","news-list",-1892492424).cljs$core$IFn$_invoke$arity$1(db),id));
})));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("hackernews-reframe.events","refresh-result","hackernews-reframe.events/refresh-result",1046398477),(function (p__63756,p__63757){
var map__63758 = p__63756;
var map__63758__$1 = (((((!((map__63758 == null))))?(((((map__63758.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63758.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__63758):map__63758);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63758__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__63759 = p__63757;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63759,(0),null);
var response = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63759,(1),null);
var result = cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(response,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"refresh","refresh",1947415525)], null),null);
var error = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(result);
var refresh = new cljs.core.Keyword(null,"refresh","refresh",1947415525).cljs$core$IFn$_invoke$arity$1(result);
var token = new cljs.core.Keyword(null,"token","token",-1211463215).cljs$core$IFn$_invoke$arity$1(result);
var username = cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(result,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"user","user",1532431356),new cljs.core.Keyword(null,"name","name",1843675177)], null),null);
var email = cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(result,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"user","user",1532431356),new cljs.core.Keyword(null,"email","email",1415816706)], null),null);
var created_at = cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(result,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"user","user",1532431356),new cljs.core.Keyword(null,"createdat","createdat",-2076060250)], null),null);
var karma = cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(result,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"user","user",1532431356),new cljs.core.Keyword(null,"karma","karma",1375588493)], null),null);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"email","email",1415816706),null),new cljs.core.Keyword(null,"pwd","pwd",583478407),null),new cljs.core.Keyword(null,"loading?","loading?",1905707049),false),new cljs.core.Keyword(null,"login-error?","login-error?",1917204171),error),new cljs.core.Keyword(null,"username","username",1605666410),username),new cljs.core.Keyword(null,"user-page","user-page",-688251875),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"email-user","email-user",1680426899),email,new cljs.core.Keyword(null,"created-at-user","created-at-user",1988304250),created_at,new cljs.core.Keyword(null,"karma-user","karma-user",-624445479),karma], null)),new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("hackernews-reframe.events","update-re-graph","hackernews-reframe.events/update-re-graph",-374749717),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [token,refresh], null)], null),new cljs.core.Keyword(null,"set-local-store","set-local-store",1294751859),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"token","token",-1211463215),token,new cljs.core.Keyword(null,"refresh","refresh",1947415525),refresh,new cljs.core.Keyword(null,"username","username",1605666410),username], null)], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("hackernews-reframe.events","login-result","hackernews-reframe.events/login-result",1201000761),(function (p__63763,p__63764){
var map__63765 = p__63763;
var map__63765__$1 = (((((!((map__63765 == null))))?(((((map__63765.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63765.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__63765):map__63765);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63765__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__63766 = p__63764;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63766,(0),null);
var response = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63766,(1),null);
var login = cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(response,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"login","login",55217519)], null),null);
var error = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(login);
var refresh = new cljs.core.Keyword(null,"refresh","refresh",1947415525).cljs$core$IFn$_invoke$arity$1(login);
var token = new cljs.core.Keyword(null,"token","token",-1211463215).cljs$core$IFn$_invoke$arity$1(login);
var username = cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(login,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"user","user",1532431356),new cljs.core.Keyword(null,"name","name",1843675177)], null),null);
var email = cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(login,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"user","user",1532431356),new cljs.core.Keyword(null,"email","email",1415816706)], null),null);
var created_at = cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(login,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"user","user",1532431356),new cljs.core.Keyword(null,"createdat","createdat",-2076060250)], null),null);
var karma = cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(login,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"user","user",1532431356),new cljs.core.Keyword(null,"karma","karma",1375588493)], null),null);
var rmap = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"resp","resp",1418702376),response),new cljs.core.Keyword(null,"email","email",1415816706),null),new cljs.core.Keyword(null,"pwd","pwd",583478407),null),new cljs.core.Keyword(null,"loading?","loading?",1905707049),false),new cljs.core.Keyword(null,"login-error?","login-error?",1917204171),error),new cljs.core.Keyword(null,"username","username",1605666410),username),new cljs.core.Keyword(null,"user-page","user-page",-688251875),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"email-user","email-user",1680426899),email,new cljs.core.Keyword(null,"created-at-user","created-at-user",1988304250),created_at,new cljs.core.Keyword(null,"karma-user","karma-user",-624445479),karma], null)),new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("hackernews-reframe.events","update-re-graph","hackernews-reframe.events/update-re-graph",-374749717),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [token,refresh], null)], null),new cljs.core.Keyword(null,"set-local-store","set-local-store",1294751859),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"token","token",-1211463215),token,new cljs.core.Keyword(null,"refresh","refresh",1947415525),refresh,new cljs.core.Keyword(null,"username","username",1605666410),username], null)], null)], null);
if((((error == null)) && ((!((token == null)))))){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rmap,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dispatch-panel","dispatch-panel",1494900817),new cljs.core.Keyword(null,"news-panel","news-panel",-975450739)], null)], 0));
} else {
return rmap;
}
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("hackernews-reframe.events","signup-result","hackernews-reframe.events/signup-result",-279372012),(function (p__63770,p__63771){
var map__63772 = p__63770;
var map__63772__$1 = (((((!((map__63772 == null))))?(((((map__63772.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63772.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__63772):map__63772);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63772__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__63773 = p__63771;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63773,(0),null);
var response = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63773,(1),null);
var login = cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(response,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"signup","signup",1961016747)], null),null);
var error = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(login);
var refresh = new cljs.core.Keyword(null,"refresh","refresh",1947415525).cljs$core$IFn$_invoke$arity$1(login);
var token = new cljs.core.Keyword(null,"token","token",-1211463215).cljs$core$IFn$_invoke$arity$1(login);
var username = cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(login,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"user","user",1532431356),new cljs.core.Keyword(null,"name","name",1843675177)], null),null);
var email = cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(login,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"user","user",1532431356),new cljs.core.Keyword(null,"email","email",1415816706)], null),null);
var created_at = cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(login,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"user","user",1532431356),new cljs.core.Keyword(null,"createdat","createdat",-2076060250)], null),null);
var karma = cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(login,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"user","user",1532431356),new cljs.core.Keyword(null,"karma","karma",1375588493)], null),null);
var rmap = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"email","email",1415816706),null),new cljs.core.Keyword(null,"pwd","pwd",583478407),null),new cljs.core.Keyword(null,"loading?","loading?",1905707049),false),new cljs.core.Keyword(null,"new-pwd","new-pwd",2099436325),null),new cljs.core.Keyword(null,"new-email","new-email",106233565),null),new cljs.core.Keyword(null,"new-usr","new-usr",-46077293),null),new cljs.core.Keyword(null,"pwd-new-conf","pwd-new-conf",-1370958226),null),new cljs.core.Keyword(null,"signup-error?","signup-error?",1246219041),error),new cljs.core.Keyword(null,"username","username",1605666410),username),new cljs.core.Keyword(null,"user-page","user-page",-688251875),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"email-user","email-user",1680426899),email,new cljs.core.Keyword(null,"created-at-user","created-at-user",1988304250),created_at,new cljs.core.Keyword(null,"karma-user","karma-user",-624445479),karma], null)),new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("hackernews-reframe.events","update-re-graph","hackernews-reframe.events/update-re-graph",-374749717),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [token,refresh], null)], null),new cljs.core.Keyword(null,"set-local-store","set-local-store",1294751859),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"token","token",-1211463215),token,new cljs.core.Keyword(null,"refresh","refresh",1947415525),refresh,new cljs.core.Keyword(null,"username","username",1605666410),username], null)], null)], null);
if((((error == null)) && ((!((token == null)))))){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rmap,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dispatch-panel","dispatch-panel",1494900817),new cljs.core.Keyword(null,"news-panel","news-panel",-975450739)], null)], 0));
} else {
return rmap;
}
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("hackernews-reframe.events","login","hackernews-reframe.events/login",-811932664),(function (p__63777,_){
var map__63778 = p__63777;
var map__63778__$1 = (((((!((map__63778 == null))))?(((((map__63778.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63778.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__63778):map__63778);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63778__$1,new cljs.core.Keyword(null,"db","db",993250759));
var email = cljs.core.deref((function (){var G__63780 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("hackernews-reframe.subs","email","hackernews-reframe.subs/email",1776957055)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__63780) : re_frame.core.subscribe.call(null,G__63780));
})());
var pwd = cljs.core.deref((function (){var G__63781 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("hackernews-reframe.subs","pwd","hackernews-reframe.subs/pwd",-2126275562)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__63781) : re_frame.core.subscribe.call(null,G__63781));
})());
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("re-graph.core","mutate","re-graph.core/mutate",602713205),hackernews_reframe.graphql.login,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"email","email",1415816706),email,new cljs.core.Keyword(null,"password","password",417022471),pwd], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("hackernews-reframe.events","login-result","hackernews-reframe.events/login-result",1201000761)], null)], null),new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"loading?","loading?",1905707049),true)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("hackernews-reframe.events","refresh","hackernews-reframe.events/refresh",-1608309116),(function (p__63783,_){
var map__63784 = p__63783;
var map__63784__$1 = (((((!((map__63784 == null))))?(((((map__63784.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63784.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__63784):map__63784);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63784__$1,new cljs.core.Keyword(null,"db","db",993250759));
var not_logged = cljs.core.deref((function (){var G__63786 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("hackernews-reframe.subs","username","hackernews-reframe.subs/username",104216027)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__63786) : re_frame.core.subscribe.call(null,G__63786));
})());
var refresh_token = hackernews_reframe.events.get_local_storage("refresh-token");
if((((!((refresh_token == null)))) && ((not_logged == null)))){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("re-graph.core","mutate","re-graph.core/mutate",602713205),hackernews_reframe.graphql.refresh,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("hackernews-reframe.events","refresh-result","hackernews-reframe.events/refresh-result",1046398477)], null)], null),new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"loading?","loading?",1905707049),true)], null);
} else {
return null;
}
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("hackernews-reframe.events","sign","hackernews-reframe.events/sign",-1218167154),(function (p__63787,_){
var map__63788 = p__63787;
var map__63788__$1 = (((((!((map__63788 == null))))?(((((map__63788.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63788.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__63788):map__63788);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63788__$1,new cljs.core.Keyword(null,"db","db",993250759));
var email = cljs.core.deref((function (){var G__63790 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("hackernews-reframe.subs","new-email","hackernews-reframe.subs/new-email",1826058338)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__63790) : re_frame.core.subscribe.call(null,G__63790));
})());
var pwd = cljs.core.deref((function (){var G__63791 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("hackernews-reframe.subs","new-pwd","hackernews-reframe.subs/new-pwd",-678622566)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__63791) : re_frame.core.subscribe.call(null,G__63791));
})());
var name = cljs.core.deref((function (){var G__63792 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("hackernews-reframe.subs","new-usr","hackernews-reframe.subs/new-usr",-674285042)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__63792) : re_frame.core.subscribe.call(null,G__63792));
})());
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("re-graph.core","mutate","re-graph.core/mutate",602713205),hackernews_reframe.graphql.sign,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"email","email",1415816706),email,new cljs.core.Keyword(null,"password","password",417022471),pwd,new cljs.core.Keyword(null,"name","name",1843675177),name], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("hackernews-reframe.events","signup-result","hackernews-reframe.events/signup-result",-279372012)], null)], null),new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"loading?","loading?",1905707049),true)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("hackernews-reframe.events","submit-result","hackernews-reframe.events/submit-result",1102375731),(function (p__63793,p__63794){
var map__63795 = p__63793;
var map__63795__$1 = (((((!((map__63795 == null))))?(((((map__63795.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63795.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__63795):map__63795);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63795__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__63796 = p__63794;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63796,(0),null);
var response = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63796,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"response","response",-1068424192),response)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("hackernews-reframe.events","submit-post","hackernews-reframe.events/submit-post",-1150486250),(function (p__63800,_){
var map__63801 = p__63800;
var map__63801__$1 = (((((!((map__63801 == null))))?(((((map__63801.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63801.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__63801):map__63801);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63801__$1,new cljs.core.Keyword(null,"db","db",993250759));
var title = cljs.core.deref((function (){var G__63803 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("hackernews-reframe.subs","new-title","hackernews-reframe.subs/new-title",-501908037)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__63803) : re_frame.core.subscribe.call(null,G__63803));
})());
var url = cljs.core.deref((function (){var G__63804 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("hackernews-reframe.subs","new-url","hackernews-reframe.subs/new-url",1427234278)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__63804) : re_frame.core.subscribe.call(null,G__63804));
})());
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("re-graph.core","mutate","re-graph.core/mutate",602713205),hackernews_reframe.graphql.post,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"description","description",-1428560544),title,new cljs.core.Keyword(null,"url","url",276297046),url], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("hackernews-reframe.events","submit-result","hackernews-reframe.events/submit-result",1102375731)], null)], null),new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"loading?","loading?",1905707049),true)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("hackernews-reframe.events","logout","hackernews-reframe.events/logout",-1600299694),(function (p__63805,_){
var map__63806 = p__63805;
var map__63806__$1 = (((((!((map__63806 == null))))?(((((map__63806.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63806.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__63806):map__63806);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63806__$1,new cljs.core.Keyword(null,"db","db",993250759));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"remove-local-store","remove-local-store",1321627846),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("hackernews-reframe.events","update-re-graph","hackernews-reframe.events/update-re-graph",-374749717),null], null),new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"username","username",1605666410),null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("hackernews-reframe.events","get-news-result","hackernews-reframe.events/get-news-result",-1759363080),(function (p__63808,p__63809){
var map__63810 = p__63808;
var map__63810__$1 = (((((!((map__63810 == null))))?(((((map__63810.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63810.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__63810):map__63810);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63810__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__63811 = p__63809;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63811,(0),null);
var response = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63811,(1),null);
var news = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(response,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"feed","feed",-1566486205)], null));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"news-list","news-list",-1892492424),news)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("hackernews-reframe.events","get-news","hackernews-reframe.events/get-news",1160584264),(function (p__63815,_){
var map__63816 = p__63815;
var map__63816__$1 = (((((!((map__63816 == null))))?(((((map__63816.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63816.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__63816):map__63816);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63816__$1,new cljs.core.Keyword(null,"db","db",993250759));
var current_page = cljs.core.deref((function (){var G__63818 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("hackernews-reframe.subs","news-page","hackernews-reframe.subs/news-page",1540262747)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__63818) : re_frame.core.subscribe.call(null,G__63818));
})());
var first = (30);
var skip = (first * current_page);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"loading-news?","loading-news?",-1344808164),true),new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("re-graph.core","query","re-graph.core/query",-2079477791),hackernews_reframe.graphql.feed,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"first","first",-644103046),first,new cljs.core.Keyword(null,"orderby","orderby",-1623567857),"ASC",new cljs.core.Keyword(null,"skip","skip",602715391),skip], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("hackernews-reframe.events","get-news-result","hackernews-reframe.events/get-news-result",-1759363080)], null)], null)], null);
}));
hackernews_reframe.events.update_votes_news = (function hackernews_reframe$events$update_votes_news(news_list,id,votes){
var new$ = cljs.core.PersistentVector.EMPTY;
var i = (0);
while(true){
if((i < cljs.core.count(news_list))){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(news_list,i)),id)){
var G__64109 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(new$,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(news_list,i),new cljs.core.Keyword(null,"votes","votes",-1161459422),votes));
var G__64110 = (i + (1));
new$ = G__64109;
i = G__64110;
continue;
} else {
var G__64111 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(new$,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(news_list,i));
var G__64112 = (i + (1));
new$ = G__64111;
i = G__64112;
continue;
}
} else {
return new$;
}
break;
}
});
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("hackernews-reframe.events","get-new-vote-count","hackernews-reframe.events/get-new-vote-count",-2121134391),((day8.re_frame.tracing.is_trace_enabled_QMARK_())?(function (db,p__63819){
var vec__63820 = p__63819;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63820,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63820,(1),null);
var response = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63820,(2),null);
var _PLUS_debux_dbg_opts_PLUS_ = cljs.core.PersistentArrayMap.EMPTY;
try{debux.common.util.send_form_BANG_(cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword(null,"news-list","news-list",-1892492424),cljs.core.list(new cljs.core.Symbol(null,"update-votes-news","update-votes-news",1134009496,null),cljs.core.list(new cljs.core.Keyword(null,"news-list","news-list",-1892492424),new cljs.core.Symbol(null,"db","db",-1661185010,null)),new cljs.core.Symbol(null,"id","id",252129435,null),cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",-1965644065,null),new cljs.core.Symbol(null,"response","response",572107335,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"vote","vote",1814636835)], null),(0)))));

var opts__62290__auto__ = _PLUS_debux_dbg_opts_PLUS_;
var result__62291__auto__ = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var opts__62290__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__62291__auto__ = db;
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__62291__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__62291__auto__;
})(),new cljs.core.Keyword(null,"news-list","news-list",-1892492424),(function (){var opts__62290__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__62291__auto__ = hackernews_reframe.events.update_votes_news((function (){var opts__62290__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__62291__auto__ = new cljs.core.Keyword(null,"news-list","news-list",-1892492424).cljs$core$IFn$_invoke$arity$1((function (){var opts__62290__auto____$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__62291__auto__ = db;
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__62291__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__62291__auto__;
})());
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__62291__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Keyword(null,"news-list","news-list",-1892492424),new cljs.core.Symbol(null,"db","db",-1661185010,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__62291__auto__;
})(),(function (){var opts__62290__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__62291__auto__ = id;
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__62291__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"id","id",252129435,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__62291__auto__;
})(),(function (){var opts__62290__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__62291__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$3((function (){var opts__62290__auto____$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__62291__auto__ = response;
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__62291__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"response","response",572107335,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__62291__auto__;
})(),(function (){var opts__62290__auto____$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__62291__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"vote","vote",1814636835)], null);
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__62291__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"vote","vote",1814636835)], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__62291__auto__;
})(),(0));
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__62291__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",-1965644065,null),new cljs.core.Symbol(null,"response","response",572107335,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"vote","vote",1814636835)], null),(0)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__62291__auto__;
})());
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__62291__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"update-votes-news","update-votes-news",1134009496,null),cljs.core.list(new cljs.core.Keyword(null,"news-list","news-list",-1892492424),new cljs.core.Symbol(null,"db","db",-1661185010,null)),new cljs.core.Symbol(null,"id","id",252129435,null),cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",-1965644065,null),new cljs.core.Symbol(null,"response","response",572107335,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"vote","vote",1814636835)], null),(0))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__62291__auto__;
})());
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__62291__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword(null,"news-list","news-list",-1892492424),cljs.core.list(new cljs.core.Symbol(null,"update-votes-news","update-votes-news",1134009496,null),cljs.core.list(new cljs.core.Keyword(null,"news-list","news-list",-1892492424),new cljs.core.Symbol(null,"db","db",-1661185010,null)),new cljs.core.Symbol(null,"id","id",252129435,null),cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",-1965644065,null),new cljs.core.Symbol(null,"response","response",572107335,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"vote","vote",1814636835)], null),(0)))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(0)], null));

return result__62291__auto__;
}catch (e63823){var e = e63823;
throw e;
}}):(function (db,p__63824){
var vec__63825 = p__63824;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63825,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63825,(1),null);
var response = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63825,(2),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"news-list","news-list",-1892492424),hackernews_reframe.events.update_votes_news(new cljs.core.Keyword(null,"news-list","news-list",-1892492424).cljs$core$IFn$_invoke$arity$1(db),id,cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(response,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"vote","vote",1814636835)], null),(0))));
})));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("hackernews-reframe.events","get-new-comment-vote-count","hackernews-reframe.events/get-new-comment-vote-count",1391258439),((day8.re_frame.tracing.is_trace_enabled_QMARK_())?(function (db,p__63828){
var vec__63829 = p__63828;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63829,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63829,(1),null);
var response = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63829,(2),null);
var _PLUS_debux_dbg_opts_PLUS_ = cljs.core.PersistentArrayMap.EMPTY;
try{debux.common.util.send_form_BANG_(cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword(null,"comment-list","comment-list",1726130896),cljs.core.list(new cljs.core.Symbol(null,"update-votes-news","update-votes-news",1134009496,null),cljs.core.list(new cljs.core.Keyword(null,"comment-list","comment-list",1726130896),new cljs.core.Symbol(null,"db","db",-1661185010,null)),new cljs.core.Symbol(null,"id","id",252129435,null),cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",-1965644065,null),new cljs.core.Symbol(null,"response","response",572107335,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"comment_vote","comment_vote",-2102195749)], null),(0)))));

var opts__62290__auto__ = _PLUS_debux_dbg_opts_PLUS_;
var result__62291__auto__ = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var opts__62290__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__62291__auto__ = db;
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__62291__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__62291__auto__;
})(),new cljs.core.Keyword(null,"comment-list","comment-list",1726130896),(function (){var opts__62290__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__62291__auto__ = hackernews_reframe.events.update_votes_news((function (){var opts__62290__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__62291__auto__ = new cljs.core.Keyword(null,"comment-list","comment-list",1726130896).cljs$core$IFn$_invoke$arity$1((function (){var opts__62290__auto____$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__62291__auto__ = db;
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__62291__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__62291__auto__;
})());
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__62291__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Keyword(null,"comment-list","comment-list",1726130896),new cljs.core.Symbol(null,"db","db",-1661185010,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__62291__auto__;
})(),(function (){var opts__62290__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__62291__auto__ = id;
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__62291__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"id","id",252129435,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__62291__auto__;
})(),(function (){var opts__62290__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__62291__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$3((function (){var opts__62290__auto____$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__62291__auto__ = response;
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__62291__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"response","response",572107335,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__62291__auto__;
})(),(function (){var opts__62290__auto____$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__62291__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"comment_vote","comment_vote",-2102195749)], null);
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__62291__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"comment_vote","comment_vote",-2102195749)], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__62291__auto__;
})(),(0));
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__62291__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",-1965644065,null),new cljs.core.Symbol(null,"response","response",572107335,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"comment_vote","comment_vote",-2102195749)], null),(0)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__62291__auto__;
})());
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__62291__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"update-votes-news","update-votes-news",1134009496,null),cljs.core.list(new cljs.core.Keyword(null,"comment-list","comment-list",1726130896),new cljs.core.Symbol(null,"db","db",-1661185010,null)),new cljs.core.Symbol(null,"id","id",252129435,null),cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",-1965644065,null),new cljs.core.Symbol(null,"response","response",572107335,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"comment_vote","comment_vote",-2102195749)], null),(0))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__62291__auto__;
})());
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__62291__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword(null,"comment-list","comment-list",1726130896),cljs.core.list(new cljs.core.Symbol(null,"update-votes-news","update-votes-news",1134009496,null),cljs.core.list(new cljs.core.Keyword(null,"comment-list","comment-list",1726130896),new cljs.core.Symbol(null,"db","db",-1661185010,null)),new cljs.core.Symbol(null,"id","id",252129435,null),cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",-1965644065,null),new cljs.core.Symbol(null,"response","response",572107335,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"comment_vote","comment_vote",-2102195749)], null),(0)))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(0)], null));

return result__62291__auto__;
}catch (e63832){var e = e63832;
throw e;
}}):(function (db,p__63833){
var vec__63834 = p__63833;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63834,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63834,(1),null);
var response = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63834,(2),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"comment-list","comment-list",1726130896),hackernews_reframe.events.update_votes_news(new cljs.core.Keyword(null,"comment-list","comment-list",1726130896).cljs$core$IFn$_invoke$arity$1(db),id,cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(response,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"comment_vote","comment_vote",-2102195749)], null),(0))));
})));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("hackernews-reframe.events","vote","hackernews-reframe.events/vote",-1613160326),(function (_,p__63837){
var vec__63838 = p__63837;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63838,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63838,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("re-graph.core","mutate","re-graph.core/mutate",602713205),hackernews_reframe.graphql.vote,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),id], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("hackernews-reframe.events","get-new-vote-count","hackernews-reframe.events/get-new-vote-count",-2121134391),id], null)], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("hackernews-reframe.events","vote-comment","hackernews-reframe.events/vote-comment",1057756880),(function (_,p__63841){
var vec__63842 = p__63841;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63842,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63842,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("re-graph.core","mutate","re-graph.core/mutate",602713205),hackernews_reframe.graphql.vote_comment,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),id], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("hackernews-reframe.events","get-new-comment-vote-count","hackernews-reframe.events/get-new-comment-vote-count",1391258439),id], null)], null)], null);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("hackernews-reframe.events","clean-user-info","hackernews-reframe.events/clean-user-info",-412044907),((day8.re_frame.tracing.is_trace_enabled_QMARK_())?(function (db,_){
var _PLUS_debux_dbg_opts_PLUS_ = cljs.core.PersistentArrayMap.EMPTY;
try{debux.common.util.send_form_BANG_(cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword(null,"generic-user","generic-user",-106373288),null));

var opts__62290__auto__ = _PLUS_debux_dbg_opts_PLUS_;
var result__62291__auto__ = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var opts__62290__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__62291__auto__ = db;
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__62291__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__62291__auto__;
})(),new cljs.core.Keyword(null,"generic-user","generic-user",-106373288),null);
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__62291__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword(null,"generic-user","generic-user",-106373288),null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(0)], null));

return result__62291__auto__;
}catch (e63845){var e = e63845;
throw e;
}}):(function (db,_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"generic-user","generic-user",-106373288),null);
})));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("hackernews-reframe.events","result-user-info","hackernews-reframe.events/result-user-info",-1498909390),((day8.re_frame.tracing.is_trace_enabled_QMARK_())?(function (db,p__63846){
var vec__63847 = p__63846;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63847,(0),null);
var response = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63847,(1),null);
var _PLUS_debux_dbg_opts_PLUS_ = cljs.core.PersistentArrayMap.EMPTY;
try{debux.common.util.send_form_BANG_(cljs.core.list(new cljs.core.Symbol(null,"let","let",358118826,null),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"user","user",-1122004413,null),cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",-1965644065,null),new cljs.core.Symbol(null,"response","response",572107335,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"userdescription","userdescription",434335813)], null)),new cljs.core.Symbol(null,"username","username",-1048769359,null),cljs.core.list(new cljs.core.Keyword(null,"username","username",1605666410),new cljs.core.Symbol(null,"user","user",-1122004413,null)),new cljs.core.Symbol(null,"karma","karma",-1278847276,null),cljs.core.list(new cljs.core.Keyword(null,"karma","karma",1375588493),new cljs.core.Symbol(null,"user","user",-1122004413,null)),new cljs.core.Symbol(null,"createdat","createdat",-435528723,null),cljs.core.list(new cljs.core.Keyword(null,"createdat","createdat",-2076060250),new cljs.core.Symbol(null,"user","user",-1122004413,null))], null),cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword(null,"generic-user","generic-user",-106373288),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"username","username",1605666410),new cljs.core.Symbol(null,"username","username",-1048769359,null),new cljs.core.Keyword(null,"karma","karma",1375588493),new cljs.core.Symbol(null,"karma","karma",-1278847276,null),new cljs.core.Keyword(null,"created-at","created-at",-89248644),new cljs.core.Symbol(null,"createdat","createdat",-435528723,null)], null))));

var opts__62290__auto__ = _PLUS_debux_dbg_opts_PLUS_;
var result__62291__auto__ = (function (){var user = (function (){var opts__62290__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__62291__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((function (){var opts__62290__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__62291__auto__ = response;
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__62291__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"response","response",572107335,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__62291__auto__;
})(),(function (){var opts__62290__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__62291__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"userdescription","userdescription",434335813)], null);
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__62291__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"userdescription","userdescription",434335813)], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__62291__auto__;
})());
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__62291__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",-1965644065,null),new cljs.core.Symbol(null,"response","response",572107335,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"userdescription","userdescription",434335813)], null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__62291__auto__;
})();
var username = (function (){var opts__62290__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__62291__auto__ = new cljs.core.Keyword(null,"username","username",1605666410).cljs$core$IFn$_invoke$arity$1((function (){var opts__62290__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__62291__auto__ = user;
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__62291__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"user","user",-1122004413,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__62291__auto__;
})());
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__62291__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Keyword(null,"username","username",1605666410),new cljs.core.Symbol(null,"user","user",-1122004413,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__62291__auto__;
})();
var karma = (function (){var opts__62290__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__62291__auto__ = new cljs.core.Keyword(null,"karma","karma",1375588493).cljs$core$IFn$_invoke$arity$1((function (){var opts__62290__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__62291__auto__ = user;
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__62291__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"user","user",-1122004413,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__62291__auto__;
})());
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__62291__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Keyword(null,"karma","karma",1375588493),new cljs.core.Symbol(null,"user","user",-1122004413,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__62291__auto__;
})();
var createdat = (function (){var opts__62290__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__62291__auto__ = new cljs.core.Keyword(null,"createdat","createdat",-2076060250).cljs$core$IFn$_invoke$arity$1((function (){var opts__62290__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__62291__auto__ = user;
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__62291__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"user","user",-1122004413,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__62291__auto__;
})());
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__62291__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Keyword(null,"createdat","createdat",-2076060250),new cljs.core.Symbol(null,"user","user",-1122004413,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__62291__auto__;
})();
var opts__62290__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__62291__auto__ = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var opts__62290__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__62291__auto__ = db;
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__62291__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__62291__auto__;
})(),new cljs.core.Keyword(null,"generic-user","generic-user",-106373288),(function (){var opts__62290__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__62291__auto__ = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"username","username",1605666410),username,new cljs.core.Keyword(null,"karma","karma",1375588493),karma,new cljs.core.Keyword(null,"created-at","created-at",-89248644),createdat], null);
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__62291__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"username","username",1605666410),new cljs.core.Symbol(null,"username","username",-1048769359,null),new cljs.core.Keyword(null,"karma","karma",1375588493),new cljs.core.Symbol(null,"karma","karma",-1278847276,null),new cljs.core.Keyword(null,"created-at","created-at",-89248644),new cljs.core.Symbol(null,"createdat","createdat",-435528723,null)], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__62291__auto__;
})());
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__62291__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword(null,"generic-user","generic-user",-106373288),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"username","username",1605666410),new cljs.core.Symbol(null,"username","username",-1048769359,null),new cljs.core.Keyword(null,"karma","karma",1375588493),new cljs.core.Symbol(null,"karma","karma",-1278847276,null),new cljs.core.Keyword(null,"created-at","created-at",-89248644),new cljs.core.Symbol(null,"createdat","createdat",-435528723,null)], null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__62291__auto__;
})();
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__62291__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"let","let",358118826,null),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"user","user",-1122004413,null),cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",-1965644065,null),new cljs.core.Symbol(null,"response","response",572107335,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"userdescription","userdescription",434335813)], null)),new cljs.core.Symbol(null,"username","username",-1048769359,null),cljs.core.list(new cljs.core.Keyword(null,"username","username",1605666410),new cljs.core.Symbol(null,"user","user",-1122004413,null)),new cljs.core.Symbol(null,"karma","karma",-1278847276,null),cljs.core.list(new cljs.core.Keyword(null,"karma","karma",1375588493),new cljs.core.Symbol(null,"user","user",-1122004413,null)),new cljs.core.Symbol(null,"createdat","createdat",-435528723,null),cljs.core.list(new cljs.core.Keyword(null,"createdat","createdat",-2076060250),new cljs.core.Symbol(null,"user","user",-1122004413,null))], null),cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword(null,"generic-user","generic-user",-106373288),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"username","username",1605666410),new cljs.core.Symbol(null,"username","username",-1048769359,null),new cljs.core.Keyword(null,"karma","karma",1375588493),new cljs.core.Symbol(null,"karma","karma",-1278847276,null),new cljs.core.Keyword(null,"created-at","created-at",-89248644),new cljs.core.Symbol(null,"createdat","createdat",-435528723,null)], null))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(0)], null));

return result__62291__auto__;
}catch (e63850){var e = e63850;
throw e;
}}):(function (db,p__63851){
var vec__63852 = p__63851;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63852,(0),null);
var response = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63852,(1),null);
var user = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(response,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"userdescription","userdescription",434335813)], null));
var username = new cljs.core.Keyword(null,"username","username",1605666410).cljs$core$IFn$_invoke$arity$1(user);
var karma = new cljs.core.Keyword(null,"karma","karma",1375588493).cljs$core$IFn$_invoke$arity$1(user);
var createdat = new cljs.core.Keyword(null,"createdat","createdat",-2076060250).cljs$core$IFn$_invoke$arity$1(user);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"generic-user","generic-user",-106373288),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"username","username",1605666410),username,new cljs.core.Keyword(null,"karma","karma",1375588493),karma,new cljs.core.Keyword(null,"created-at","created-at",-89248644),createdat], null));
})));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("hackernews-reframe.events","get-user-info-by-name","hackernews-reframe.events/get-user-info-by-name",-2133052751),(function (_,p__63855){
var vec__63856 = p__63855;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63856,(0),null);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63856,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("re-graph.core","query","re-graph.core/query",-2079477791),hackernews_reframe.graphql.user_description,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),name], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("hackernews-reframe.events","result-user-info","hackernews-reframe.events/result-user-info",-1498909390)], null)], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("hackernews-reframe.events","update-comment-main-father","hackernews-reframe.events/update-comment-main-father",-2143761823),(function (p__63859,p__63860){
var map__63861 = p__63859;
var map__63861__$1 = (((((!((map__63861 == null))))?(((((map__63861.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63861.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__63861):map__63861);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63861__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__63862 = p__63860;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63862,(0),null);
var father = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63862,(1),null);
var extra = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63862,(2),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"main-father","main-father",-540196255),father)], null);
}));
hackernews_reframe.events.specific_news_list_value = (function hackernews_reframe$events$specific_news_list_value(id,news_list){
var news_count = cljs.core.count(news_list);
var i = (0);
var found = null;
while(true){
if((((i < news_count)) && ((found == null)))){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(id,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(news_list,i)))){
var G__64170 = (i + (1));
var G__64171 = null;
i = G__64170;
found = G__64171;
continue;
} else {
return found;
}
} else {
return "";
}
break;
}
});
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("hackernews-reframe.events","result-get-comments-father","hackernews-reframe.events/result-get-comments-father",-1613264595),(function (p__63866,p__63867){
var map__63868 = p__63866;
var map__63868__$1 = (((((!((map__63868 == null))))?(((((map__63868.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63868.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__63868):map__63868);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63868__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__63869 = p__63867;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63869,(0),null);
var father = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63869,(1),null);
var response = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63869,(2),null);
var comments = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(response,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"comments","comments",-293346423)], null));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"comment-list","comment-list",1726130896),comments),new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("hackernews-reframe.events","get-link","hackernews-reframe.events/get-link",276239322),father], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("hackernews-reframe.events","get-father-comments","hackernews-reframe.events/get-father-comments",108429314),(function (_,p__63873){
var vec__63874 = p__63873;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63874,(0),null);
var father = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63874,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("re-graph.core","query","re-graph.core/query",-2079477791),hackernews_reframe.graphql.get_comments,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"father","father",-173311021),father], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("hackernews-reframe.events","result-get-comments-father","hackernews-reframe.events/result-get-comments-father",-1613264595),father], null)], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("hackernews-reframe.events","result-get-comments","hackernews-reframe.events/result-get-comments",-1310280310),(function (p__63877,p__63878){
var map__63879 = p__63877;
var map__63879__$1 = (((((!((map__63879 == null))))?(((((map__63879.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63879.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__63879):map__63879);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63879__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__63880 = p__63878;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63880,(0),null);
var response = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63880,(1),null);
var comment = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(response,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"comment","comment",532206069)], null));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"reply-comment","reply-comment",-1804762753),comment)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("hackernews-reframe.events","get-comment","hackernews-reframe.events/get-comment",-709249913),(function (_,p__63884){
var vec__63885 = p__63884;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63885,(0),null);
var comment = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63885,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("re-graph.core","query","re-graph.core/query",-2079477791),hackernews_reframe.graphql.get_comment,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),comment], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("hackernews-reframe.events","result-get-comments","hackernews-reframe.events/result-get-comments",-1310280310)], null)], null)], null);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("hackernews-reframe.events","clean-comments","hackernews-reframe.events/clean-comments",-1868629933),(function (db,_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"comment-list","comment-list",1726130896),null);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("hackernews-reframe.events","clean-posts","hackernews-reframe.events/clean-posts",1980928124),(function (db,_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"news-list","news-list",-1892492424),null);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("hackernews-reframe.events","result-get-user-comments","hackernews-reframe.events/result-get-user-comments",1540518048),((day8.re_frame.tracing.is_trace_enabled_QMARK_())?(function (db,p__63888){
var vec__63889 = p__63888;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63889,(0),null);
var response = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63889,(1),null);
var _PLUS_debux_dbg_opts_PLUS_ = cljs.core.PersistentArrayMap.EMPTY;
try{debux.common.util.send_form_BANG_(cljs.core.list(new cljs.core.Symbol(null,"let","let",358118826,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"comments","comments",1347185104,null),cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",-1965644065,null),new cljs.core.Symbol(null,"response","response",572107335,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"user_comments","user_comments",-902697787)], null))], null),cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword(null,"comment-list","comment-list",1726130896),new cljs.core.Symbol(null,"comments","comments",1347185104,null),new cljs.core.Keyword(null,"main-father","main-father",-540196255),null)));

var opts__62290__auto__ = _PLUS_debux_dbg_opts_PLUS_;
var result__62291__auto__ = (function (){var comments = (function (){var opts__62290__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__62291__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((function (){var opts__62290__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__62291__auto__ = response;
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__62291__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"response","response",572107335,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__62291__auto__;
})(),(function (){var opts__62290__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__62291__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"user_comments","user_comments",-902697787)], null);
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__62291__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"user_comments","user_comments",-902697787)], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__62291__auto__;
})());
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__62291__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",-1965644065,null),new cljs.core.Symbol(null,"response","response",572107335,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"user_comments","user_comments",-902697787)], null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__62291__auto__;
})();
var opts__62290__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__62291__auto__ = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic((function (){var opts__62290__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__62291__auto__ = db;
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__62291__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__62291__auto__;
})(),new cljs.core.Keyword(null,"comment-list","comment-list",1726130896),(function (){var opts__62290__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__62291__auto__ = comments;
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__62291__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"comments","comments",1347185104,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__62291__auto__;
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"main-father","main-father",-540196255),null], 0));
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__62291__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword(null,"comment-list","comment-list",1726130896),new cljs.core.Symbol(null,"comments","comments",1347185104,null),new cljs.core.Keyword(null,"main-father","main-father",-540196255),null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__62291__auto__;
})();
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__62291__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"let","let",358118826,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"comments","comments",1347185104,null),cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",-1965644065,null),new cljs.core.Symbol(null,"response","response",572107335,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"user_comments","user_comments",-902697787)], null))], null),cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword(null,"comment-list","comment-list",1726130896),new cljs.core.Symbol(null,"comments","comments",1347185104,null),new cljs.core.Keyword(null,"main-father","main-father",-540196255),null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(0)], null));

return result__62291__auto__;
}catch (e63892){var e = e63892;
throw e;
}}):(function (db,p__63893){
var vec__63894 = p__63893;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63894,(0),null);
var response = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63894,(1),null);
var comments = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(response,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"user_comments","user_comments",-902697787)], null));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(db,new cljs.core.Keyword(null,"comment-list","comment-list",1726130896),comments,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"main-father","main-father",-540196255),null], 0));
})));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("hackernews-reframe.events","get-user-comments","hackernews-reframe.events/get-user-comments",362596330),(function (_,p__63897){
var vec__63898 = p__63897;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63898,(0),null);
var user = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63898,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("re-graph.core","query","re-graph.core/query",-2079477791),hackernews_reframe.graphql.get_user_comments,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"user","user",1532431356),user], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("hackernews-reframe.events","result-get-user-comments","hackernews-reframe.events/result-get-user-comments",1540518048)], null)], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("hackernews-reframe.events","result-get-user-posts","hackernews-reframe.events/result-get-user-posts",1578171420),(function (p__63901,p__63902){
var map__63903 = p__63901;
var map__63903__$1 = (((((!((map__63903 == null))))?(((((map__63903.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63903.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__63903):map__63903);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63903__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__63904 = p__63902;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63904,(0),null);
var response = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63904,(1),null);
var news = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(response,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"user_posts","user_posts",1752784853)], null));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"news-list","news-list",-1892492424),news)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("hackernews-reframe.events","get-user-posts","hackernews-reframe.events/get-user-posts",342076260),(function (_,p__63908){
var vec__63909 = p__63908;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63909,(0),null);
var user = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63909,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("re-graph.core","query","re-graph.core/query",-2079477791),hackernews_reframe.graphql.get_user_posts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"user","user",1532431356),user], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("hackernews-reframe.events","result-get-user-posts","hackernews-reframe.events/result-get-user-posts",1578171420)], null)], null)], null);
}));
hackernews_reframe.events.remove_comment = (function hackernews_reframe$events$remove_comment(comment_list,id){
var new$ = cljs.core.PersistentVector.EMPTY;
var i = (0);
while(true){
if((i < cljs.core.count(comment_list))){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(comment_list,i)),id)){
var G__64243 = new$;
var G__64244 = (i + (1));
new$ = G__64243;
i = G__64244;
continue;
} else {
var G__64245 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(new$,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(comment_list,i));
var G__64246 = (i + (1));
new$ = G__64245;
i = G__64246;
continue;
}
} else {
return new$;
}
break;
}
});
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("hackernews-reframe.events","result-delete-comment","hackernews-reframe.events/result-delete-comment",-212944109),(function (p__63912,p__63913){
var map__63914 = p__63912;
var map__63914__$1 = (((((!((map__63914 == null))))?(((((map__63914.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63914.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__63914):map__63914);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63914__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__63915 = p__63913;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63915,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63915,(1),null);
var response = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63915,(2),null);
var result = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(response,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"comment_delete","comment_delete",-779543420)], null));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(result,"Post deleted")){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"comment-list","comment-list",1726130896),hackernews_reframe.events.remove_comment(new cljs.core.Keyword(null,"comment-list","comment-list",1726130896).cljs$core$IFn$_invoke$arity$1(db),id))], null);
} else {
return null;
}
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("hackernews-reframe.events","delete-comment","hackernews-reframe.events/delete-comment",-436555520),(function (_,p__63919){
var vec__63920 = p__63919;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63920,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63920,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("re-graph.core","mutate","re-graph.core/mutate",602713205),hackernews_reframe.graphql.delete_comment,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),id], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("hackernews-reframe.events","result-delete-comment","hackernews-reframe.events/result-delete-comment",-212944109),id], null)], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("hackernews-reframe.events","result-get-link","hackernews-reframe.events/result-get-link",1289122926),(function (p__63923,p__63924){
var map__63925 = p__63923;
var map__63925__$1 = (((((!((map__63925 == null))))?(((((map__63925.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63925.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__63925):map__63925);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63925__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__63926 = p__63924;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63926,(0),null);
var response = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63926,(1),null);
var result = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(response,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"link","link",-1769163468)], null));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"main-father","main-father",-540196255),result)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("hackernews-reframe.events","get-link","hackernews-reframe.events/get-link",276239322),(function (_,p__63930){
var vec__63931 = p__63930;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63931,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63931,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("re-graph.core","query","re-graph.core/query",-2079477791),hackernews_reframe.graphql.get_link,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),id], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("hackernews-reframe.events","result-get-link","hackernews-reframe.events/result-get-link",1289122926)], null)], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("hackernews-reframe.events","result-post-comment","hackernews-reframe.events/result-post-comment",-886651522),(function (p__63934,p__63935){
var map__63936 = p__63934;
var map__63936__$1 = (((((!((map__63936 == null))))?(((((map__63936.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63936.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__63936):map__63936);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63936__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__63937 = p__63935;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63937,(0),null);
var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63937,(1),null);
var response = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63937,(2),null);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([type], 0));

var returned_comment = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(response,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"comment_post","comment_post",1689397075)], null));
var result_map = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"dispatch-directly","dispatch-directly",-104036812),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["/comments/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"linkId","linkId",-1210270205).cljs$core$IFn$_invoke$arity$1(returned_comment))].join('')], null),new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(db,new cljs.core.Keyword(null,"reply-comment","reply-comment",-1804762753),"",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"new-comment","new-comment",1342914881),""], 0))], null);
if((new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(returned_comment) == null)){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type,"link")){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([result_map,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("hackernews-reframe.events","get-father-comments","hackernews-reframe.events/get-father-comments",108429314),new cljs.core.Keyword(null,"linkId","linkId",-1210270205).cljs$core$IFn$_invoke$arity$1(returned_comment)], null)], null)], 0));
} else {
return result_map;
}
} else {
return null;
}
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("hackernews-reframe.events","post-comment","hackernews-reframe.events/post-comment",-1465612392),(function (_,p__63941){
var vec__63942 = p__63941;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63942,(0),null);
var ___$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63942,(1),null);
var comment = cljs.core.deref((function (){var G__63945 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("hackernews-reframe.subs","new-comment","hackernews-reframe.subs/new-comment",-1113214666)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__63945) : re_frame.core.subscribe.call(null,G__63945));
})());
var type = cljs.core.deref((function (){var G__63946 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("hackernews-reframe.subs","comment-type","hackernews-reframe.subs/comment-type",711269186)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__63946) : re_frame.core.subscribe.call(null,G__63946));
})());
var father = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type,"link"))?cljs.core.deref((function (){var G__63947 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("hackernews-reframe.subs","main-father-id","hackernews-reframe.subs/main-father-id",1861468698)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__63947) : re_frame.core.subscribe.call(null,G__63947));
})()):cljs.core.deref((function (){var G__63948 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("hackernews-reframe.subs","new-comment-father-id","hackernews-reframe.subs/new-comment-father-id",1317058007)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__63948) : re_frame.core.subscribe.call(null,G__63948));
})()));
var link = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type,"link"))?cljs.core.deref((function (){var G__63949 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("hackernews-reframe.subs","main-father-id","hackernews-reframe.subs/main-father-id",1861468698)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__63949) : re_frame.core.subscribe.call(null,G__63949));
})()):cljs.core.deref((function (){var G__63950 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("hackernews-reframe.subs","new-comment-link-id","hackernews-reframe.subs/new-comment-link-id",-23230569)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__63950) : re_frame.core.subscribe.call(null,G__63950));
})()));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("re-graph.core","mutate","re-graph.core/mutate",602713205),hackernews_reframe.graphql.post_comment,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"comment","comment",532206069),comment,new cljs.core.Keyword(null,"type","type",1174270348),type,new cljs.core.Keyword(null,"father","father",-173311021),father,new cljs.core.Keyword(null,"link","link",-1769163468),link], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("hackernews-reframe.events","result-post-comment","hackernews-reframe.events/result-post-comment",-886651522),type], null)], null)], null);
}));

//# sourceMappingURL=hackernews_reframe.events.js.map
