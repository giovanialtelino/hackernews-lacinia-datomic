goog.provide('day8.re_frame_10x.subs');
goog.require('cljs.core');
goog.require('day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core');
goog.require('day8.re_frame_10x.metamorphic');
goog.require('day8.re_frame_10x.utils.utils');
goog.require('clojure.string');
goog.require('cljs.spec.alpha');
goog.require('zprint.core');
var G__53528_54021 = new cljs.core.Keyword("settings","root","settings/root",-1329120290);
var G__53529_54022 = (function (db,_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.Keyword(null,"settings","settings",1556144875));
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__53528_54021,G__53529_54022) : day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.reg_sub.call(null,G__53528_54021,G__53529_54022));
var G__53530_54023 = new cljs.core.Keyword("settings","panel-width%","settings/panel-width%",-1897072808);
var G__53531_54024 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__53532_54025 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","root","settings/root",-1329120290)], null);
var G__53533_54026 = (function (settings,_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(settings,new cljs.core.Keyword(null,"panel-width%","panel-width%",-110515341));
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__53530_54023,G__53531_54024,G__53532_54025,G__53533_54026) : day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.reg_sub.call(null,G__53530_54023,G__53531_54024,G__53532_54025,G__53533_54026));
var G__53534_54027 = new cljs.core.Keyword("settings","panel-width%-rounded","settings/panel-width%-rounded",1475049191);
var G__53535_54028 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__53536_54029 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","panel-width%","settings/panel-width%",-1897072808)], null);
var G__53537_54030 = (function (panel_width_PERCENT_,p__53538){
var vec__53539 = p__53538;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53539,(0),null);
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53539,(1),null);
return ((Math.ceil(((panel_width_PERCENT_ * (100)) / n)) * n) / 100.0);
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__53534_54027,G__53535_54028,G__53536_54029,G__53537_54030) : day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.reg_sub.call(null,G__53534_54027,G__53535_54028,G__53536_54029,G__53537_54030));
var G__53542_54031 = new cljs.core.Keyword("settings","window-width","settings/window-width",640332180);
var G__53543_54032 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__53544_54033 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","root","settings/root",-1329120290)], null);
var G__53545_54034 = (function (settings,_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(settings,new cljs.core.Keyword(null,"window-width","window-width",2057825599));
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__53542_54031,G__53543_54032,G__53544_54033,G__53545_54034) : day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.reg_sub.call(null,G__53542_54031,G__53543_54032,G__53544_54033,G__53545_54034));
var G__53546_54035 = new cljs.core.Keyword("settings","window-width-rounded","settings/window-width-rounded",-924202629);
var G__53547_54036 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__53548_54037 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","window-width","settings/window-width",640332180)], null);
var G__53549_54038 = (function (width,p__53550){
var vec__53551 = p__53550;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53551,(0),null);
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53551,(1),null);
return (Math.ceil((width / n)) * n);
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__53546_54035,G__53547_54036,G__53548_54037,G__53549_54038) : day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.reg_sub.call(null,G__53546_54035,G__53547_54036,G__53548_54037,G__53549_54038));
var G__53554_54039 = new cljs.core.Keyword("settings","show-panel?","settings/show-panel?",-194286945);
var G__53555_54040 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__53556_54041 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","root","settings/root",-1329120290)], null);
var G__53557_54042 = (function (settings,_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(settings,new cljs.core.Keyword(null,"show-panel?","show-panel?",1475128892));
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__53554_54039,G__53555_54040,G__53556_54041,G__53557_54042) : day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.reg_sub.call(null,G__53554_54039,G__53555_54040,G__53556_54041,G__53557_54042));
var G__53558_54043 = new cljs.core.Keyword("settings","selected-tab","settings/selected-tab",-124010089);
var G__53559_54044 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__53560_54045 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","root","settings/root",-1329120290)], null);
var G__53561_54046 = (function (settings,_){
if(cljs.core.truth_(new cljs.core.Keyword(null,"showing-settings?","showing-settings?",-140540878).cljs$core$IFn$_invoke$arity$1(settings))){
return new cljs.core.Keyword(null,"settings","settings",1556144875);
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(settings,new cljs.core.Keyword(null,"selected-tab","selected-tab",-1558510156));
}
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__53558_54043,G__53559_54044,G__53560_54045,G__53561_54046) : day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.reg_sub.call(null,G__53558_54043,G__53559_54044,G__53560_54045,G__53561_54046));
var G__53562_54047 = new cljs.core.Keyword("settings","number-of-retained-epochs","settings/number-of-retained-epochs",347300150);
var G__53563_54048 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__53564_54049 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","root","settings/root",-1329120290)], null);
var G__53565_54050 = (function (settings){
return new cljs.core.Keyword(null,"number-of-epochs","number-of-epochs",57769252).cljs$core$IFn$_invoke$arity$1(settings);
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__53562_54047,G__53563_54048,G__53564_54049,G__53565_54050) : day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.reg_sub.call(null,G__53562_54047,G__53563_54048,G__53564_54049,G__53565_54050));
var G__53566_54051 = new cljs.core.Keyword("settings","ignored-events","settings/ignored-events",1377799632);
var G__53567_54052 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__53568_54053 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","root","settings/root",-1329120290)], null);
var G__53569_54054 = (function (settings){
return cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"sort","sort",953465918),cljs.core.vals(new cljs.core.Keyword(null,"ignored-events","ignored-events",1738756589).cljs$core$IFn$_invoke$arity$1(settings)));
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__53566_54051,G__53567_54052,G__53568_54053,G__53569_54054) : day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.reg_sub.call(null,G__53566_54051,G__53567_54052,G__53568_54053,G__53569_54054));
var G__53571_54055 = new cljs.core.Keyword("settings","filtered-view-trace","settings/filtered-view-trace",818098350);
var G__53572_54056 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__53573_54057 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","root","settings/root",-1329120290)], null);
var G__53574_54058 = (function (settings){
return cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"sort","sort",953465918),cljs.core.vals(new cljs.core.Keyword(null,"filtered-view-trace","filtered-view-trace",-901876599).cljs$core$IFn$_invoke$arity$1(settings)));
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__53571_54055,G__53572_54056,G__53573_54057,G__53574_54058) : day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.reg_sub.call(null,G__53571_54055,G__53572_54056,G__53573_54057,G__53574_54058));
var G__53575_54060 = new cljs.core.Keyword("settings","low-level-trace","settings/low-level-trace",191054289);
var G__53576_54061 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__53577_54062 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","root","settings/root",-1329120290)], null);
var G__53578_54063 = (function (settings){
return new cljs.core.Keyword(null,"low-level-trace","low-level-trace",638447092).cljs$core$IFn$_invoke$arity$1(settings);
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__53575_54060,G__53576_54061,G__53577_54062,G__53578_54063) : day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.reg_sub.call(null,G__53575_54060,G__53576_54061,G__53577_54062,G__53578_54063));
var G__53579_54065 = new cljs.core.Keyword("settings","debug?","settings/debug?",-128490920);
var G__53580_54066 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__53581_54067 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","root","settings/root",-1329120290)], null);
var G__53582_54068 = (function (settings){
return new cljs.core.Keyword(null,"debug?","debug?",-1831756173).cljs$core$IFn$_invoke$arity$1(settings);
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__53579_54065,G__53580_54066,G__53581_54067,G__53582_54068) : day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.reg_sub.call(null,G__53579_54065,G__53580_54066,G__53581_54067,G__53582_54068));
var G__53584_54069 = new cljs.core.Keyword("settings","app-db-follows-events?","settings/app-db-follows-events?",-115495889);
var G__53585_54070 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__53586_54071 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","root","settings/root",-1329120290)], null);
var G__53587_54072 = (function (settings){
return new cljs.core.Keyword(null,"app-db-follows-events?","app-db-follows-events?",-1566738462).cljs$core$IFn$_invoke$arity$1(settings);
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__53584_54069,G__53585_54070,G__53586_54071,G__53587_54072) : day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.reg_sub.call(null,G__53584_54069,G__53585_54070,G__53586_54071,G__53587_54072));
var G__53588_54075 = new cljs.core.Keyword("app-db","root","app-db/root",-1721368731);
var G__53589_54076 = (function (db,_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.Keyword(null,"app-db","app-db",865606302));
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__53588_54075,G__53589_54076) : day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.reg_sub.call(null,G__53588_54075,G__53589_54076));
var G__53590_54077 = new cljs.core.Keyword("app-db","current-epoch-app-db-after","app-db/current-epoch-app-db-after",-1412128095);
var G__53591_54078 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__53592_54079 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","current-event-trace","epochs/current-event-trace",-1911057851)], null);
var G__53593_54080 = (function (trace,_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(trace,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.Keyword(null,"app-db-after","app-db-after",1477492964)], null));
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__53590_54077,G__53591_54078,G__53592_54079,G__53593_54080) : day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.reg_sub.call(null,G__53590_54077,G__53591_54078,G__53592_54079,G__53593_54080));
var G__53594_54083 = new cljs.core.Keyword("app-db","current-epoch-app-db-before","app-db/current-epoch-app-db-before",-615465288);
var G__53595_54084 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__53596_54085 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","current-event-trace","epochs/current-event-trace",-1911057851)], null);
var G__53597_54087 = (function (trace,_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(trace,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.Keyword(null,"app-db-before","app-db-before",-1442902645)], null));
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__53594_54083,G__53595_54084,G__53596_54085,G__53597_54087) : day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.reg_sub.call(null,G__53594_54083,G__53595_54084,G__53596_54085,G__53597_54087));
var G__53599_54088 = new cljs.core.Keyword("app-db","paths","app-db/paths",-1600032730);
var G__53600_54089 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__53601_54090 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app-db","root","app-db/root",-1721368731)], null);
var G__53602_54091 = (function (app_db_settings,_){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__53598_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.val(p1__53598_SHARP_),new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.key(p1__53598_SHARP_));
}),cljs.core.get.cljs$core$IFn$_invoke$arity$2(app_db_settings,new cljs.core.Keyword(null,"paths","paths",-1807389588)));
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__53599_54088,G__53600_54089,G__53601_54090,G__53602_54091) : day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.reg_sub.call(null,G__53599_54088,G__53600_54089,G__53601_54090,G__53602_54091));
var G__53603_54092 = new cljs.core.Keyword("app-db","search-string","app-db/search-string",939397656);
var G__53604_54093 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__53605_54094 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app-db","root","app-db/root",-1721368731)], null);
var G__53606_54095 = (function (app_db_settings,_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(app_db_settings,new cljs.core.Keyword(null,"search-string","search-string",68818394));
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__53603_54092,G__53604_54093,G__53605_54094,G__53606_54095) : day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.reg_sub.call(null,G__53603_54092,G__53604_54093,G__53605_54094,G__53606_54095));
var G__53607_54096 = new cljs.core.Keyword("app-db","expansions","app-db/expansions",-1814314845);
var G__53608_54097 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__53609_54098 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app-db","root","app-db/root",-1721368731)], null);
var G__53610_54099 = (function (app_db_settings,_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(app_db_settings,new cljs.core.Keyword(null,"json-ml-expansions","json-ml-expansions",1112306261));
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__53607_54096,G__53608_54097,G__53609_54098,G__53610_54099) : day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.reg_sub.call(null,G__53607_54096,G__53608_54097,G__53609_54098,G__53610_54099));
var G__53613_54102 = new cljs.core.Keyword("app-db","node-expanded?","app-db/node-expanded?",-1032853540);
var G__53614_54103 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__53615_54104 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app-db","expansions","app-db/expansions",-1814314845)], null);
var G__53616_54105 = (function (expansions,p__53617){
var vec__53618 = p__53617;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53618,(0),null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53618,(1),null);
return cljs.core.contains_QMARK_(expansions,path);
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__53613_54102,G__53614_54103,G__53615_54104,G__53616_54105) : day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.reg_sub.call(null,G__53613_54102,G__53614_54103,G__53615_54104,G__53616_54105));
var G__53621_54106 = new cljs.core.Keyword("app-db","reagent-id","app-db/reagent-id",916858371);
var G__53622_54107 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__53623_54108 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app-db","root","app-db/root",-1721368731)], null);
var G__53624_54109 = (function (root,_){
return new cljs.core.Keyword(null,"reagent-id","reagent-id",-766893415).cljs$core$IFn$_invoke$arity$1(root);
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__53621_54106,G__53622_54107,G__53623_54108,G__53624_54109) : day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.reg_sub.call(null,G__53621_54106,G__53622_54107,G__53623_54108,G__53624_54109));
var G__53625_54110 = new cljs.core.Keyword("traces","trace-root","traces/trace-root",-1794329946);
var G__53626_54111 = (function (db,_){
return new cljs.core.Keyword(null,"traces","traces",-1301138004).cljs$core$IFn$_invoke$arity$1(db);
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__53625_54110,G__53626_54111) : day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.reg_sub.call(null,G__53625_54110,G__53626_54111));
var G__53627_54112 = new cljs.core.Keyword("trace-panel","root","trace-panel/root",974242647);
var G__53628_54113 = (function (db,_){
return new cljs.core.Keyword(null,"trace-panel","trace-panel",-645338665).cljs$core$IFn$_invoke$arity$1(db);
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__53627_54112,G__53628_54113) : day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.reg_sub.call(null,G__53627_54112,G__53628_54113));
var G__53633_54114 = new cljs.core.Keyword("traces","filter-items","traces/filter-items",977390347);
var G__53634_54115 = (function (db,_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"traces","traces",-1301138004),new cljs.core.Keyword(null,"filter-items","filter-items",232493909)], null));
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__53633_54114,G__53634_54115) : day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.reg_sub.call(null,G__53633_54114,G__53634_54115));
var G__53635_54116 = new cljs.core.Keyword("traces","expansions","traces/expansions",1935277191);
var G__53636_54117 = (function (db,_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"traces","traces",-1301138004),new cljs.core.Keyword(null,"expansions","expansions",533713877)], null));
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__53635_54116,G__53636_54117) : day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.reg_sub.call(null,G__53635_54116,G__53636_54117));
var G__53637_54120 = new cljs.core.Keyword("traces","categories","traces/categories",-821318016);
var G__53638_54121 = (function (db,_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"traces","traces",-1301138004),new cljs.core.Keyword(null,"categories","categories",178386610)], null));
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__53637_54120,G__53638_54121) : day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.reg_sub.call(null,G__53637_54120,G__53638_54121));
var G__53639_54122 = new cljs.core.Keyword("traces","all-traces","traces/all-traces",-755374523);
var G__53640_54123 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__53641_54124 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("traces","trace-root","traces/trace-root",-1794329946)], null);
var G__53642_54125 = (function (traces,_){
return new cljs.core.Keyword(null,"all-traces","all-traces",-1494241641).cljs$core$IFn$_invoke$arity$1(traces);
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__53639_54122,G__53640_54123,G__53641_54124,G__53642_54125) : day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.reg_sub.call(null,G__53639_54122,G__53640_54123,G__53641_54124,G__53642_54125));
var G__53643_54126 = new cljs.core.Keyword("traces","number-of-traces","traces/number-of-traces",-1195045241);
var G__53644_54127 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__53645_54128 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("traces","all-traces","traces/all-traces",-755374523)], null);
var G__53646_54129 = (function (traces,_){
return cljs.core.count(traces);
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__53643_54126,G__53644_54127,G__53645_54128,G__53646_54129) : day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.reg_sub.call(null,G__53643_54126,G__53644_54127,G__53645_54128,G__53646_54129));
var G__53647_54130 = new cljs.core.Keyword("traces","current-event-traces","traces/current-event-traces",1386605769);
var G__53648_54131 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__53649_54132 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("traces","all-traces","traces/all-traces",-755374523)], null);
var G__53650_54133 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__53651_54134 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","beginning-trace-id","epochs/beginning-trace-id",-1340593887)], null);
var G__53652_54135 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__53653_54136 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","ending-trace-id","epochs/ending-trace-id",-1920901579)], null);
var G__53654_54137 = (function (p__53656,_){
var vec__53657 = p__53656;
var traces = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53657,(0),null);
var beginning = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53657,(1),null);
var ending = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53657,(2),null);
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,day8.re_frame_10x.utils.utils.id_between_xf(beginning,ending),traces);
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$8 ? day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$8(G__53647_54130,G__53648_54131,G__53649_54132,G__53650_54133,G__53651_54134,G__53652_54135,G__53653_54136,G__53654_54137) : day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.reg_sub.call(null,G__53647_54130,G__53648_54131,G__53649_54132,G__53650_54133,G__53651_54134,G__53652_54135,G__53653_54136,G__53654_54137));
day8.re_frame_10x.subs.filter_ignored_views = (function day8$re_frame_10x$subs$filter_ignored_views(p__53660,_){
var vec__53661 = p__53660;
var traces = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53661,(0),null);
var filtered_views = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53661,(1),null);
var munged_ns = cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.munge,new cljs.core.Keyword(null,"ns-str","ns-str",-2062616499)),filtered_views));
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$1((function (trace){
return ((day8.re_frame_10x.metamorphic.render_QMARK_(trace)) && (cljs.core.contains_QMARK_(munged_ns,cljs.core.subs.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"operation","operation",-1267664310).cljs$core$IFn$_invoke$arity$1(trace),(0),clojure.string.last_index_of.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"operation","operation",-1267664310).cljs$core$IFn$_invoke$arity$1(trace),".")))));
})),traces);
});
var G__53676_54138 = new cljs.core.Keyword("traces","current-event-visible-traces","traces/current-event-visible-traces",-133224585);
var G__53677_54139 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__53678_54140 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("traces","current-event-traces","traces/current-event-traces",1386605769)], null);
var G__53679_54141 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__53680_54142 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","filtered-view-trace","settings/filtered-view-trace",818098350)], null);
var G__53681_54143 = day8.re_frame_10x.subs.filter_ignored_views;
(day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$6 ? day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$6(G__53676_54138,G__53677_54139,G__53678_54140,G__53679_54141,G__53680_54142,G__53681_54143) : day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.reg_sub.call(null,G__53676_54138,G__53677_54139,G__53678_54140,G__53679_54141,G__53680_54142,G__53681_54143));
var G__53682_54145 = new cljs.core.Keyword("traces","all-visible-traces","traces/all-visible-traces",-1694272071);
var G__53683_54146 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__53684_54147 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("traces","all-traces","traces/all-traces",-755374523)], null);
var G__53685_54148 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__53686_54149 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","filtered-view-trace","settings/filtered-view-trace",818098350)], null);
var G__53687_54150 = day8.re_frame_10x.subs.filter_ignored_views;
(day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$6 ? day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$6(G__53682_54145,G__53683_54146,G__53684_54147,G__53685_54148,G__53686_54149,G__53687_54150) : day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.reg_sub.call(null,G__53682_54145,G__53683_54146,G__53684_54147,G__53685_54148,G__53686_54149,G__53687_54150));
var G__53688_54154 = new cljs.core.Keyword("trace-panel","show-epoch-traces?","trace-panel/show-epoch-traces?",-826345951);
var G__53689_54155 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__53690_54156 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("trace-panel","root","trace-panel/root",974242647)], null);
var G__53691_54157 = (function (trace_root){
return new cljs.core.Keyword(null,"show-epoch-traces?","show-epoch-traces?",-2096255323).cljs$core$IFn$_invoke$arity$1(trace_root);
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__53688_54154,G__53689_54155,G__53690_54156,G__53691_54157) : day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.reg_sub.call(null,G__53688_54154,G__53689_54155,G__53690_54156,G__53691_54157));
var G__53692_54158 = new cljs.core.Keyword("global","unloading?","global/unloading?",-351325001);
var G__53693_54159 = (function (db,_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"global","global",93595047),new cljs.core.Keyword(null,"unloading?","unloading?",621163286)], null));
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__53692_54158,G__53693_54159) : day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.reg_sub.call(null,G__53692_54158,G__53693_54159));
var G__53694_54160 = new cljs.core.Keyword("snapshot","snapshot-root","snapshot/snapshot-root",466086517);
var G__53695_54161 = (function (db,_){
return new cljs.core.Keyword(null,"snapshot","snapshot",-1274785710).cljs$core$IFn$_invoke$arity$1(db);
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__53694_54160,G__53695_54161) : day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.reg_sub.call(null,G__53694_54160,G__53695_54161));
var G__53696_54162 = new cljs.core.Keyword("snapshot","snapshot-ready?","snapshot/snapshot-ready?",-1152726072);
var G__53697_54163 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__53698_54164 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("snapshot","snapshot-root","snapshot/snapshot-root",466086517)], null);
var G__53699_54165 = (function (snapshot,_){
return cljs.core.contains_QMARK_(snapshot,new cljs.core.Keyword(null,"current-snapshot","current-snapshot",1368356222));
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__53696_54162,G__53697_54163,G__53698_54164,G__53699_54165) : day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.reg_sub.call(null,G__53696_54162,G__53697_54163,G__53698_54164,G__53699_54165));
var G__53700_54166 = new cljs.core.Keyword("epochs","epoch-root","epochs/epoch-root",-2097634597);
var G__53701_54167 = (function (db,_){
return new cljs.core.Keyword(null,"epochs","epochs",1796936425).cljs$core$IFn$_invoke$arity$1(db);
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__53700_54166,G__53701_54167) : day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.reg_sub.call(null,G__53700_54166,G__53701_54167));
var G__53703_54168 = new cljs.core.Keyword("epochs","all-events-by-id","epochs/all-events-by-id",-1225664812);
var G__53704_54169 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__53705_54170 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","epoch-root","epochs/epoch-root",-2097634597)], null);
var G__53706_54171 = (function (epochs,_){
return cljs.core.sort_by.cljs$core$IFn$_invoke$arity$3(cljs.core.first,cljs.core._GT_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(cljs.core.key,cljs.core.comp.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"event","event",301435442),new cljs.core.Keyword(null,"tags","tags",1771418977),day8.re_frame_10x.metamorphic.matched_event,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"match-info","match-info",666319879),cljs.core.val], 0))),new cljs.core.Keyword(null,"matches-by-id","matches-by-id",1749529562).cljs$core$IFn$_invoke$arity$1(epochs)));
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__53703_54168,G__53704_54169,G__53705_54170,G__53706_54171) : day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.reg_sub.call(null,G__53703_54168,G__53704_54169,G__53705_54170,G__53706_54171));
var G__53707_54176 = new cljs.core.Keyword("epochs","current-match-state","epochs/current-match-state",-1577612281);
var G__53708_54177 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__53709_54178 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","epoch-root","epochs/epoch-root",-2097634597)], null);
var G__53710_54179 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__53711_54180 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","match-ids","epochs/match-ids",-669448057)], null);
var G__53712_54181 = (function (p__53713,_){
var vec__53714 = p__53713;
var epochs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53714,(0),null);
var match_ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53714,(1),null);
var current_id = new cljs.core.Keyword(null,"current-epoch-id","current-epoch-id",-1357591568).cljs$core$IFn$_invoke$arity$1(epochs);
var match = (((current_id == null))?cljs.core.last(new cljs.core.Keyword(null,"matches","matches",635497998).cljs$core$IFn$_invoke$arity$1(epochs)):(((current_id < cljs.core.first(match_ids)))?cljs.core.first(new cljs.core.Keyword(null,"matches","matches",635497998).cljs$core$IFn$_invoke$arity$1(epochs)):(((current_id > cljs.core.last(match_ids)))?cljs.core.last(new cljs.core.Keyword(null,"matches","matches",635497998).cljs$core$IFn$_invoke$arity$1(epochs)):cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"matches-by-id","matches-by-id",1749529562).cljs$core$IFn$_invoke$arity$1(epochs),current_id)
)));
return match;
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$6 ? day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$6(G__53707_54176,G__53708_54177,G__53709_54178,G__53710_54179,G__53711_54180,G__53712_54181) : day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.reg_sub.call(null,G__53707_54176,G__53708_54177,G__53709_54178,G__53710_54179,G__53711_54180,G__53712_54181));
var G__53718_54185 = new cljs.core.Keyword("epochs","current-match","epochs/current-match",-1687592087);
var G__53719_54186 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__53720_54187 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","current-match-state","epochs/current-match-state",-1577612281)], null);
var G__53721_54188 = (function (match_state,_){
return new cljs.core.Keyword(null,"match-info","match-info",666319879).cljs$core$IFn$_invoke$arity$1(match_state);
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__53718_54185,G__53719_54186,G__53720_54187,G__53721_54188) : day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.reg_sub.call(null,G__53718_54185,G__53719_54186,G__53720_54187,G__53721_54188));
var G__53722_54189 = new cljs.core.Keyword("epochs","current-event-trace","epochs/current-event-trace",-1911057851);
var G__53723_54190 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__53724_54191 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","current-match","epochs/current-match",-1687592087)], null);
var G__53725_54192 = (function (match,_){
return day8.re_frame_10x.metamorphic.matched_event(match);
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__53722_54189,G__53723_54190,G__53724_54191,G__53725_54192) : day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.reg_sub.call(null,G__53722_54189,G__53723_54190,G__53724_54191,G__53725_54192));
var G__53727_54193 = new cljs.core.Keyword("epochs","current-event","epochs/current-event",10990104);
var G__53728_54194 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__53729_54195 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","current-event-trace","epochs/current-event-trace",-1911057851)], null);
var G__53730_54196 = (function (trace,_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(trace,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.Keyword(null,"event","event",301435442)], null));
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__53727_54193,G__53728_54194,G__53729_54195,G__53730_54196) : day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.reg_sub.call(null,G__53727_54193,G__53728_54194,G__53729_54195,G__53730_54196));
var G__53731_54199 = new cljs.core.Keyword("epochs","number-of-matches","epochs/number-of-matches",1018247531);
var G__53732_54200 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__53733_54201 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","epoch-root","epochs/epoch-root",-2097634597)], null);
var G__53734_54202 = (function (epochs,_){
return cljs.core.count(cljs.core.get.cljs$core$IFn$_invoke$arity$2(epochs,new cljs.core.Keyword(null,"matches","matches",635497998)));
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__53731_54199,G__53732_54200,G__53733_54201,G__53734_54202) : day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.reg_sub.call(null,G__53731_54199,G__53732_54200,G__53733_54201,G__53734_54202));
var G__53735_54203 = new cljs.core.Keyword("epochs","current-event-index","epochs/current-event-index",-2026503803);
var G__53736_54204 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__53737_54205 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","epoch-root","epochs/epoch-root",-2097634597)], null);
var G__53738_54206 = (function (epochs,_){
return new cljs.core.Keyword(null,"current-epoch-index","current-epoch-index",-903378376).cljs$core$IFn$_invoke$arity$1(epochs);
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__53735_54203,G__53736_54204,G__53737_54205,G__53738_54206) : day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.reg_sub.call(null,G__53735_54203,G__53736_54204,G__53737_54205,G__53738_54206));
var G__53739_54207 = new cljs.core.Keyword("epochs","current-epoch-id","epochs/current-epoch-id",-482598682);
var G__53740_54208 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__53741_54209 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","current-match","epochs/current-match",-1687592087)], null);
var G__53742_54210 = (function (epochs,_){
return new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cljs.core.first(epochs));
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__53739_54207,G__53740_54208,G__53741_54209,G__53742_54210) : day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.reg_sub.call(null,G__53739_54207,G__53740_54208,G__53741_54209,G__53742_54210));
var G__53743_54211 = new cljs.core.Keyword("epochs","match-ids","epochs/match-ids",-669448057);
var G__53744_54212 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__53745_54213 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","epoch-root","epochs/epoch-root",-2097634597)], null);
var G__53746_54214 = (function (epochs){
return new cljs.core.Keyword(null,"match-ids","match-ids",752973161).cljs$core$IFn$_invoke$arity$1(epochs);
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__53743_54211,G__53744_54212,G__53745_54213,G__53746_54214) : day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.reg_sub.call(null,G__53743_54211,G__53744_54212,G__53745_54213,G__53746_54214));
var G__53747_54215 = new cljs.core.Keyword("epochs","beginning-trace-id","epochs/beginning-trace-id",-1340593887);
var G__53748_54216 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__53749_54217 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","current-match","epochs/current-match",-1687592087)], null);
var G__53750_54218 = (function (match){
return new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cljs.core.first(match));
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__53747_54215,G__53748_54216,G__53749_54217,G__53750_54218) : day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.reg_sub.call(null,G__53747_54215,G__53748_54216,G__53749_54217,G__53750_54218));
var G__53751_54219 = new cljs.core.Keyword("epochs","ending-trace-id","epochs/ending-trace-id",-1920901579);
var G__53752_54220 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__53753_54221 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","current-match","epochs/current-match",-1687592087)], null);
var G__53754_54222 = (function (match){
return new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cljs.core.last(match));
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__53751_54219,G__53752_54220,G__53753_54221,G__53754_54222) : day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.reg_sub.call(null,G__53751_54219,G__53752_54220,G__53753_54221,G__53754_54222));
var G__53755_54223 = new cljs.core.Keyword("epochs","older-epochs-available?","epochs/older-epochs-available?",366051335);
var G__53756_54224 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__53757_54225 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","current-epoch-id","epochs/current-epoch-id",-482598682)], null);
var G__53758_54226 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__53759_54227 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","match-ids","epochs/match-ids",-669448057)], null);
var G__53760_54228 = (function (p__53761){
var vec__53762 = p__53761;
var current = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53762,(0),null);
var ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53762,(1),null);
return ((((1) < cljs.core.count(ids))) && ((((current == null)) || ((current > cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ids,(0)))))));
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$6 ? day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$6(G__53755_54223,G__53756_54224,G__53757_54225,G__53758_54226,G__53759_54227,G__53760_54228) : day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.reg_sub.call(null,G__53755_54223,G__53756_54224,G__53757_54225,G__53758_54226,G__53759_54227,G__53760_54228));
var G__53765_54229 = new cljs.core.Keyword("epochs","newer-epochs-available?","epochs/newer-epochs-available?",-1411103953);
var G__53766_54230 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__53767_54231 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","current-epoch-id","epochs/current-epoch-id",-482598682)], null);
var G__53768_54232 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__53769_54233 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","match-ids","epochs/match-ids",-669448057)], null);
var G__53770_54234 = (function (p__53771){
var vec__53772 = p__53771;
var current = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53772,(0),null);
var ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53772,(1),null);
return ((((1) < cljs.core.count(ids))) && ((!((current == null)))) && ((current < day8.re_frame_10x.utils.utils.last_in_vec(ids))));
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$6 ? day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$6(G__53765_54229,G__53766_54230,G__53767_54231,G__53768_54232,G__53769_54233,G__53770_54234) : day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.reg_sub.call(null,G__53765_54229,G__53766_54230,G__53767_54231,G__53768_54232,G__53769_54233,G__53770_54234));
var G__53776_54235 = new cljs.core.Keyword("timing","total-epoch-time","timing/total-epoch-time",-912032018);
var G__53777_54236 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__53778_54237 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("traces","current-event-traces","traces/current-event-traces",1386605769)], null);
var G__53779_54238 = (function (traces){
var start_of_epoch = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(traces,(0));
var end_of_epoch = day8.re_frame_10x.utils.utils.last_in_vec(traces);
return day8.re_frame_10x.metamorphic.elapsed_time(start_of_epoch,end_of_epoch);
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__53776_54235,G__53777_54236,G__53778_54237,G__53779_54238) : day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.reg_sub.call(null,G__53776_54235,G__53777_54236,G__53778_54237,G__53779_54238));
var G__53781_54239 = new cljs.core.Keyword("timing","animation-frame-traces","timing/animation-frame-traces",394987473);
var G__53782_54240 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__53783_54241 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("traces","current-event-traces","traces/current-event-traces",1386605769)], null);
var G__53784_54242 = (function (traces){
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__53780_SHARP_){
return ((day8.re_frame_10x.metamorphic.request_animation_frame_QMARK_(p1__53780_SHARP_)) || (day8.re_frame_10x.metamorphic.request_animation_frame_end_QMARK_(p1__53780_SHARP_)));
}),traces);
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__53781_54239,G__53782_54240,G__53783_54241,G__53784_54242) : day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.reg_sub.call(null,G__53781_54239,G__53782_54240,G__53783_54241,G__53784_54242));
var G__53785_54244 = new cljs.core.Keyword("timing","animation-frame-count","timing/animation-frame-count",-281075152);
var G__53786_54245 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__53787_54246 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("timing","animation-frame-traces","timing/animation-frame-traces",394987473)], null);
var G__53788_54247 = (function (frame_traces){
return cljs.core.count(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(day8.re_frame_10x.metamorphic.request_animation_frame_QMARK_,frame_traces));
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__53785_54244,G__53786_54245,G__53787_54246,G__53788_54247) : day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.reg_sub.call(null,G__53785_54244,G__53786_54245,G__53787_54246,G__53788_54247));
/**
 * Returns the sum of nums. (+) returns nil (not 0 like in cljs.core).
 */
day8.re_frame_10x.subs._PLUS_nil = (function day8$re_frame_10x$subs$_PLUS_nil(var_args){
var G__53793 = arguments.length;
switch (G__53793) {
case 0:
return day8.re_frame_10x.subs._PLUS_nil.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return day8.re_frame_10x.subs._PLUS_nil.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return day8.re_frame_10x.subs._PLUS_nil.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4757__auto__ = [];
var len__4736__auto___54253 = arguments.length;
var i__4737__auto___54254 = (0);
while(true){
if((i__4737__auto___54254 < len__4736__auto___54253)){
args_arr__4757__auto__.push((arguments[i__4737__auto___54254]));

var G__54255 = (i__4737__auto___54254 + (1));
i__4737__auto___54254 = G__54255;
continue;
} else {
}
break;
}

var argseq__4758__auto__ = (new cljs.core.IndexedSeq(args_arr__4757__auto__.slice((2)),(0),null));
return day8.re_frame_10x.subs._PLUS_nil.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4758__auto__);

}
});

(day8.re_frame_10x.subs._PLUS_nil.cljs$core$IFn$_invoke$arity$0 = (function (){
return null;
}));

(day8.re_frame_10x.subs._PLUS_nil.cljs$core$IFn$_invoke$arity$1 = (function (x){
return x;
}));

(day8.re_frame_10x.subs._PLUS_nil.cljs$core$IFn$_invoke$arity$2 = (function (x,y){
return (x + y);
}));

(day8.re_frame_10x.subs._PLUS_nil.cljs$core$IFn$_invoke$arity$variadic = (function (x,y,more){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._PLUS_,(x + y),more);
}));

/** @this {Function} */
(day8.re_frame_10x.subs._PLUS_nil.cljs$lang$applyTo = (function (seq53790){
var G__53791 = cljs.core.first(seq53790);
var seq53790__$1 = cljs.core.next(seq53790);
var G__53792 = cljs.core.first(seq53790__$1);
var seq53790__$2 = cljs.core.next(seq53790__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__53791,G__53792,seq53790__$2);
}));

(day8.re_frame_10x.subs._PLUS_nil.cljs$lang$maxFixedArity = (2));

var G__53794_54257 = new cljs.core.Keyword("timing","animation-frame-time","timing/animation-frame-time",1905393593);
var G__53795_54258 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__53796_54259 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("timing","animation-frame-traces","timing/animation-frame-traces",394987473)], null);
var G__53797_54260 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__53798_54261 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("traces","current-event-traces","traces/current-event-traces",1386605769)], null);
var G__53799_54262 = (function (p__53800,p__53801){
var vec__53802 = p__53800;
var af_start_end = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53802,(0),null);
var epoch_traces = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53802,(1),null);
var vec__53805 = p__53801;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53805,(0),null);
var frame_number = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53805,(1),null);
var frame_pairs = cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),af_start_end);
var vec__53808 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(frame_pairs,(frame_number - (1)));
var start = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53808,(0),null);
var end = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53808,(1),null);
var af_traces = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,day8.re_frame_10x.metamorphic.id_between_xf(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(start),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(end)),epoch_traces);
var total_time = day8.re_frame_10x.metamorphic.elapsed_time(start,end);
var subs_time = cljs.core.transduce.cljs$core$IFn$_invoke$arity$3(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.filter.cljs$core$IFn$_invoke$arity$1(day8.re_frame_10x.metamorphic.subscription_QMARK_),cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"duration","duration",1444101068))),day8.re_frame_10x.subs._PLUS_nil,af_traces);
var render_time = cljs.core.transduce.cljs$core$IFn$_invoke$arity$3(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.filter.cljs$core$IFn$_invoke$arity$1(day8.re_frame_10x.metamorphic.render_QMARK_),cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"duration","duration",1444101068))),day8.re_frame_10x.subs._PLUS_nil,af_traces);
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("timing","animation-frame-total","timing/animation-frame-total",-1923627693),total_time,new cljs.core.Keyword("timing","animation-frame-subs","timing/animation-frame-subs",128098226),subs_time,new cljs.core.Keyword("timing","animation-frame-render","timing/animation-frame-render",1587090151),render_time,new cljs.core.Keyword("timing","animation-frame-misc","timing/animation-frame-misc",1250948573),((total_time - subs_time) - render_time)], null);
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$6 ? day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$6(G__53794_54257,G__53795_54258,G__53796_54259,G__53797_54260,G__53798_54261,G__53799_54262) : day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.reg_sub.call(null,G__53794_54257,G__53795_54258,G__53796_54259,G__53797_54260,G__53798_54261,G__53799_54262));
var G__53811_54267 = new cljs.core.Keyword("timing","event-processing-time","timing/event-processing-time",-178806297);
var G__53812_54268 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__53813_54269 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","current-match-state","epochs/current-match-state",-1577612281)], null);
var G__53814_54270 = (function (match){
var map__53818 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(match,new cljs.core.Keyword(null,"timing","timing",-1849225195));
var map__53818__$1 = (((((!((map__53818 == null))))?(((((map__53818.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53818.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53818):map__53818);
var event_time = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53818__$1,new cljs.core.Keyword("re-frame","event-time","re-frame/event-time",-1349372188));
var event_handler_time = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53818__$1,new cljs.core.Keyword("re-frame","event-handler-time","re-frame/event-handler-time",1278050644));
var event_dofx_time = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53818__$1,new cljs.core.Keyword("re-frame","event-dofx-time","re-frame/event-dofx-time",650880716));
var event_run_time = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53818__$1,new cljs.core.Keyword("re-frame","event-run-time","re-frame/event-run-time",1941554897));
var remaining_interceptors = ((event_time - event_handler_time) - event_dofx_time);
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword("timing","event-total","timing/event-total",127009054),event_run_time,new cljs.core.Keyword("timing","event-handler","timing/event-handler",383979787),event_handler_time,new cljs.core.Keyword("timing","event-effects","timing/event-effects",-1312815404),event_dofx_time,new cljs.core.Keyword("timing","event-interceptors","timing/event-interceptors",-113832767),remaining_interceptors,new cljs.core.Keyword("timing","event-misc","timing/event-misc",1534165210),((event_run_time - event_handler_time) - event_dofx_time)], null);
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__53811_54267,G__53812_54268,G__53813_54269,G__53814_54270) : day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.reg_sub.call(null,G__53811_54267,G__53812_54268,G__53813_54269,G__53814_54270));
var G__53820_54271 = new cljs.core.Keyword("timing","render-time","timing/render-time",-2042272059);
var G__53821_54272 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__53822_54273 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("traces","current-event-traces","traces/current-event-traces",1386605769)], null);
var G__53823_54274 = (function (traces){
var start_of_render = cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(day8.re_frame_10x.metamorphic.request_animation_frame_QMARK_,traces));
var end_of_epoch = day8.re_frame_10x.utils.utils.last_in_vec(traces);
return day8.re_frame_10x.metamorphic.elapsed_time(start_of_render,end_of_epoch);
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__53820_54271,G__53821_54272,G__53822_54273,G__53823_54274) : day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.reg_sub.call(null,G__53820_54271,G__53821_54272,G__53822_54273,G__53823_54274));
var G__53824_54275 = new cljs.core.Keyword("timing","data-available?","timing/data-available?",544526662);
var G__53825_54276 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__53826_54277 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("traces","current-event-traces","traces/current-event-traces",1386605769)], null);
var G__53827_54278 = (function (traces){
return (!(cljs.core.empty_QMARK_(traces)));
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__53824_54275,G__53825_54276,G__53826_54277,G__53827_54278) : day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.reg_sub.call(null,G__53824_54275,G__53825_54276,G__53826_54277,G__53827_54278));
var G__53828_54279 = new cljs.core.Keyword("subs","root","subs/root",-432796018);
var G__53829_54280 = (function (db,_){
return new cljs.core.Keyword(null,"subs","subs",-186681991).cljs$core$IFn$_invoke$arity$1(db);
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__53828_54279,G__53829_54280) : day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.reg_sub.call(null,G__53828_54279,G__53829_54280));
var G__53832_54281 = new cljs.core.Keyword("subs","all-sub-traces","subs/all-sub-traces",1860573308);
var G__53833_54282 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__53834_54283 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("traces","current-event-traces","traces/current-event-traces",1386605769)], null);
var G__53835_54284 = (function (traces){
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2(day8.re_frame_10x.metamorphic.subscription_QMARK_,traces);
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__53832_54281,G__53833_54282,G__53834_54283,G__53835_54284) : day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.reg_sub.call(null,G__53832_54281,G__53833_54282,G__53834_54283,G__53835_54284));
var G__53836_54285 = new cljs.core.Keyword("subs","subscription-info","subs/subscription-info",-1799592687);
var G__53837_54286 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__53838_54287 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","epoch-root","epochs/epoch-root",-2097634597)], null);
var G__53839_54288 = (function (epoch){
return new cljs.core.Keyword(null,"subscription-info","subscription-info",-1785424092).cljs$core$IFn$_invoke$arity$1(epoch);
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__53836_54285,G__53837_54286,G__53838_54287,G__53839_54288) : day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.reg_sub.call(null,G__53836_54285,G__53837_54286,G__53838_54287,G__53839_54288));
var G__53842_54289 = new cljs.core.Keyword("subs","sub-state","subs/sub-state",-2134091240);
var G__53843_54290 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__53844_54291 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","epoch-root","epochs/epoch-root",-2097634597)], null);
var G__53845_54292 = (function (epochs){
return new cljs.core.Keyword(null,"sub-state","sub-state",-2129237981).cljs$core$IFn$_invoke$arity$1(epochs);
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__53842_54289,G__53843_54290,G__53844_54291,G__53845_54292) : day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.reg_sub.call(null,G__53842_54289,G__53843_54290,G__53844_54291,G__53845_54292));
var G__53846_54293 = new cljs.core.Keyword("subs","current-epoch-sub-state","subs/current-epoch-sub-state",-1337816884);
var G__53847_54294 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__53848_54295 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","current-match-state","epochs/current-match-state",-1577612281)], null);
var G__53849_54296 = (function (match_state){
return new cljs.core.Keyword(null,"sub-state","sub-state",-2129237981).cljs$core$IFn$_invoke$arity$1(match_state);
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__53846_54293,G__53847_54294,G__53848_54295,G__53849_54296) : day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.reg_sub.call(null,G__53846_54293,G__53847_54294,G__53848_54295,G__53849_54296));
day8.re_frame_10x.subs.string_BANG_ = cljs.spec.alpha.and_spec_impl(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","not","cljs.core/not",100665144,null),cljs.core.list(new cljs.core.Symbol("cljs.core","empty?","cljs.core/empty?",1866613644,null),new cljs.core.Symbol(null,"%","%",-950237169,null))))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.string_QMARK_,(function (p1__53851_SHARP_){
return (!(cljs.core.empty_QMARK_(p1__53851_SHARP_)));
})], null),null);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("sub","id","sub/id",-1388418028),new cljs.core.Symbol("day8.re-frame-10x.subs","string!","day8.re-frame-10x.subs/string!",1827585601,null),day8.re_frame_10x.subs.string_BANG_);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("sub","reagent-id","sub/reagent-id",-767008039),new cljs.core.Symbol("day8.re-frame-10x.subs","string!","day8.re-frame-10x.subs/string!",1827585601,null),day8.re_frame_10x.subs.string_BANG_);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("sub","run-types","sub/run-types",-1599499164),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("sub","run","sub/run",-1821315581),"null",new cljs.core.Keyword("sub","not-run","sub/not-run",-848603451),"null",new cljs.core.Keyword("sub","create","sub/create",-1301317560),"null",new cljs.core.Keyword("sub","dispose","sub/dispose",365440536),"null"], null), null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("sub","run","sub/run",-1821315581),null,new cljs.core.Keyword("sub","not-run","sub/not-run",-848603451),null,new cljs.core.Keyword("sub","create","sub/create",-1301317560),null,new cljs.core.Keyword("sub","dispose","sub/dispose",365440536),null], null), null));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("sub","order","sub/order",-1254825160),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","nilable","cljs.spec.alpha/nilable",1628308748,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("sub","run-types","sub/run-types",-1599499164))),cljs.spec.alpha.nilable_impl(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("sub","run-types","sub/run-types",-1599499164)),cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword("sub","run-types","sub/run-types",-1599499164),new cljs.core.Keyword("sub","run-types","sub/run-types",-1599499164),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),null,new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__53853){
return cljs.core.coll_QMARK_(G__53853);
}),new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("sub","run-types","sub/run-types",-1599499164))], null),null),null));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("sub","layer","sub/layer",-1601935853),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","nilable","cljs.spec.alpha/nilable",1628308748,null),new cljs.core.Symbol("cljs.core","pos-int?","cljs.core/pos-int?",-2115888030,null)),cljs.spec.alpha.nilable_impl(new cljs.core.Symbol("cljs.core","pos-int?","cljs.core/pos-int?",-2115888030,null),cljs.core.pos_int_QMARK_,null));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("sub","path-data","sub/path-data",1442158815),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),cljs.core.any_QMARK_);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("sub","path","sub/path",-188044288),new cljs.core.Symbol("day8.re-frame-10x.subs","string!","day8.re-frame-10x.subs/string!",1827585601,null),day8.re_frame_10x.subs.string_BANG_);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("sub","value","sub/value",307444137),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),cljs.core.any_QMARK_);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("sub","previous-value","sub/previous-value",-1638946429),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),cljs.core.any_QMARK_);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("subs","view-panel-sub","subs/view-panel-sub",-1872730057),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sub","id","sub/id",-1388418028),new cljs.core.Keyword("sub","reagent-id","sub/reagent-id",-767008039),new cljs.core.Keyword("sub","order","sub/order",-1254825160),new cljs.core.Keyword("sub","layer","sub/layer",-1601935853),new cljs.core.Keyword("sub","path-data","sub/path-data",1442158815),new cljs.core.Keyword("sub","path","sub/path",-188044288)], null),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sub","value","sub/value",307444137),new cljs.core.Keyword("sub","previous-value","sub/previous-value",-1638946429)], null)),cljs.spec.alpha.map_spec_impl(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sub","id","sub/id",-1388418028),new cljs.core.Keyword("sub","reagent-id","sub/reagent-id",-767008039),new cljs.core.Keyword("sub","order","sub/order",-1254825160),new cljs.core.Keyword("sub","layer","sub/layer",-1601935853),new cljs.core.Keyword("sub","path-data","sub/path-data",1442158815),new cljs.core.Keyword("sub","path","sub/path",-188044288)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sub","value","sub/value",307444137),new cljs.core.Keyword("sub","previous-value","sub/previous-value",-1638946429)], null),null,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__53858){
return cljs.core.map_QMARK_(G__53858);
}),(function (G__53858){
return cljs.core.contains_QMARK_(G__53858,new cljs.core.Keyword(null,"id","id",-1388402092));
}),(function (G__53858){
return cljs.core.contains_QMARK_(G__53858,new cljs.core.Keyword(null,"reagent-id","reagent-id",-766893415));
}),(function (G__53858){
return cljs.core.contains_QMARK_(G__53858,new cljs.core.Keyword(null,"order","order",-1254677256));
}),(function (G__53858){
return cljs.core.contains_QMARK_(G__53858,new cljs.core.Keyword(null,"layer","layer",-1601820589));
}),(function (G__53858){
return cljs.core.contains_QMARK_(G__53858,new cljs.core.Keyword(null,"path-data","path-data",1441254047));
}),(function (G__53858){
return cljs.core.contains_QMARK_(G__53858,new cljs.core.Keyword(null,"path","path",-188191168));
})], null),(function (G__53858){
return ((cljs.core.map_QMARK_(G__53858)) && (cljs.core.contains_QMARK_(G__53858,new cljs.core.Keyword(null,"id","id",-1388402092))) && (cljs.core.contains_QMARK_(G__53858,new cljs.core.Keyword(null,"reagent-id","reagent-id",-766893415))) && (cljs.core.contains_QMARK_(G__53858,new cljs.core.Keyword(null,"order","order",-1254677256))) && (cljs.core.contains_QMARK_(G__53858,new cljs.core.Keyword(null,"layer","layer",-1601820589))) && (cljs.core.contains_QMARK_(G__53858,new cljs.core.Keyword(null,"path-data","path-data",1441254047))) && (cljs.core.contains_QMARK_(G__53858,new cljs.core.Keyword(null,"path","path",-188191168))));
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"previous-value","previous-value",-1638799677)], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sub","id","sub/id",-1388418028),new cljs.core.Keyword("sub","reagent-id","sub/reagent-id",-767008039),new cljs.core.Keyword("sub","order","sub/order",-1254825160),new cljs.core.Keyword("sub","layer","sub/layer",-1601935853),new cljs.core.Keyword("sub","path-data","sub/path-data",1442158815),new cljs.core.Keyword("sub","path","sub/path",-188044288)], null),null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"reagent-id","reagent-id",-766893415),new cljs.core.Keyword(null,"order","order",-1254677256),new cljs.core.Keyword(null,"layer","layer",-1601820589),new cljs.core.Keyword(null,"path-data","path-data",1441254047),new cljs.core.Keyword(null,"path","path",-188191168)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sub","value","sub/value",307444137),new cljs.core.Keyword("sub","previous-value","sub/previous-value",-1638946429)], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"id","id",-1388402092))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"reagent-id","reagent-id",-766893415))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"order","order",-1254677256))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"layer","layer",-1601820589))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"path-data","path-data",1441254047))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"path","path",-188191168)))], null),null])));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("subs","view-subs","subs/view-subs",253084832),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("subs","view-panel-sub","subs/view-panel-sub",-1872730057)),cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword("subs","view-panel-sub","subs/view-panel-sub",-1872730057),new cljs.core.Keyword("subs","view-panel-sub","subs/view-panel-sub",-1872730057),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),null,new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__53861){
return cljs.core.coll_QMARK_(G__53861);
}),new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("subs","view-panel-sub","subs/view-panel-sub",-1872730057))], null),null));
day8.re_frame_10x.subs.sub_type_value = (function day8$re_frame_10x$subs$sub_type_value(sub_type){
var G__53864 = sub_type;
var G__53864__$1 = (((G__53864 instanceof cljs.core.Keyword))?G__53864.fqn:null);
switch (G__53864__$1) {
case "sub/create":
return (5);

break;
case "sub/run":
return (4);

break;
case "sub/dispose":
return (3);

break;
case "sub/not-run":
return (2);

break;
default:
return (1);

}
});
/**
 * Calculate a sorting value for a series of subscription trace types.
 */
day8.re_frame_10x.subs.accumulate_sub_value = (function day8$re_frame_10x$subs$accumulate_sub_value(order){
var exp = (3);
var total = (0);
var order__$1 = order;
while(true){
var temp__5733__auto__ = cljs.core.first(order__$1);
if(cljs.core.truth_(temp__5733__auto__)){
var sub_type = temp__5733__auto__;
var G__54301 = (exp - (1));
var G__54302 = (total + (day8.re_frame_10x.subs.sub_type_value(sub_type) * Math.pow((10),exp)));
var G__54303 = cljs.core.rest(order__$1);
exp = G__54301;
total = G__54302;
order__$1 = G__54303;
continue;
} else {
return total;
}
break;
}
});
day8.re_frame_10x.subs.accumulate_sub_value_memoized = cljs.core.memoize(day8.re_frame_10x.subs.accumulate_sub_value);
day8.re_frame_10x.subs.sub_sort_val = (function day8$re_frame_10x$subs$sub_sort_val(order_x,order_y){
return cljs.core.compare(day8.re_frame_10x.subs.accumulate_sub_value_memoized(order_y),day8.re_frame_10x.subs.accumulate_sub_value_memoized(order_x));
});
day8.re_frame_10x.subs.sub_op_type__GT_type = (function day8$re_frame_10x$subs$sub_op_type__GT_type(t){
var G__53866 = new cljs.core.Keyword(null,"op-type","op-type",-1636141668).cljs$core$IFn$_invoke$arity$1(t);
var G__53866__$1 = (((G__53866 instanceof cljs.core.Keyword))?G__53866.fqn:null);
switch (G__53866__$1) {
case "sub/create":
return new cljs.core.Keyword(null,"created","created",-704993748);

break;
case "sub/run":
return new cljs.core.Keyword(null,"re-run","re-run",-1300247905);

break;
case "sub/dispose":
return new cljs.core.Keyword(null,"destroyed","destroyed",-427566535);

break;
default:
return new cljs.core.Keyword(null,"not-run","not-run",-848069371);

}
});
/**
 * Returns sub info prepared for rendering in pods
 */
day8.re_frame_10x.subs.prepare_pod_info = (function day8$re_frame_10x$subs$prepare_pod_info(p__53867,p__53868){
var vec__53869 = p__53867;
var sub_info = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53869,(0),null);
var sub_state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53869,(1),null);
var vec__53872 = p__53868;
var subscription = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53872,(0),null);
var remove_fn = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(subscription,new cljs.core.Keyword("subs","intra-epoch-subs","subs/intra-epoch-subs",-1298574944)))?(function (me){
return (new cljs.core.Keyword(null,"order","order",-1254677256).cljs$core$IFn$_invoke$arity$1(cljs.core.val(me)) == null);
}):cljs.core.constantly(false));
var subx = cljs.core.sort_by.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"order","order",-1254677256),day8.re_frame_10x.subs.sub_sort_val,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (me){
var state = cljs.core.val(me);
var subscription__$1 = new cljs.core.Keyword(null,"subscription","subscription",1949009182).cljs$core$IFn$_invoke$arity$1(state);
var sub = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.key(me),new cljs.core.Keyword(null,"reagent-id","reagent-id",-766893415),cljs.core.key(me),new cljs.core.Keyword(null,"layer","layer",-1601820589),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(sub_info,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(subscription__$1),new cljs.core.Keyword(null,"layer","layer",-1601820589)], null)),new cljs.core.Keyword(null,"path-data","path-data",1441254047),subscription__$1,new cljs.core.Keyword(null,"path","path",-188191168),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([subscription__$1], 0)),new cljs.core.Keyword(null,"order","order",-1254677256),(function (){var or__4126__auto__ = new cljs.core.Keyword(null,"order","order",-1254677256).cljs$core$IFn$_invoke$arity$1(state);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sub","not-run","sub/not-run",-848603451)], null);
}
})(),new cljs.core.Keyword("sub","traits","sub/traits",1778340671),new cljs.core.Keyword("sub","traits","sub/traits",1778340671).cljs$core$IFn$_invoke$arity$1(state)], null);
var sub__$1 = ((cljs.core.contains_QMARK_(state,new cljs.core.Keyword(null,"value","value",305978217)))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(sub,new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(state)):sub);
var sub__$2 = ((cljs.core.contains_QMARK_(state,new cljs.core.Keyword(null,"previous-value","previous-value",-1638799677)))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(sub__$1,new cljs.core.Keyword(null,"previous-value","previous-value",-1638799677),new cljs.core.Keyword(null,"previous-value","previous-value",-1638799677).cljs$core$IFn$_invoke$arity$1(state)):sub__$1);
return sub__$2;
}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(remove_fn,sub_state)));
return subx;
});
var G__53875_54323 = new cljs.core.Keyword("subs","pre-epoch-state","subs/pre-epoch-state",836844033);
var G__53876_54324 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__53877_54325 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("subs","current-epoch-sub-state","subs/current-epoch-sub-state",-1337816884)], null);
var G__53878_54326 = (function (sub_state){
return new cljs.core.Keyword(null,"pre-epoch-state","pre-epoch-state",834094164).cljs$core$IFn$_invoke$arity$1(sub_state);
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__53875_54323,G__53876_54324,G__53877_54325,G__53878_54326) : day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.reg_sub.call(null,G__53875_54323,G__53876_54324,G__53877_54325,G__53878_54326));
var G__53879_54327 = new cljs.core.Keyword("subs","reaction-state","subs/reaction-state",955533938);
var G__53880_54328 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__53881_54329 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("subs","current-epoch-sub-state","subs/current-epoch-sub-state",-1337816884)], null);
var G__53882_54330 = (function (sub_state){
return new cljs.core.Keyword(null,"reaction-state","reaction-state",958292039).cljs$core$IFn$_invoke$arity$1(sub_state);
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__53879_54327,G__53880_54328,G__53881_54329,G__53882_54330) : day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.reg_sub.call(null,G__53879_54327,G__53880_54328,G__53881_54329,G__53882_54330));
var G__53883_54331 = new cljs.core.Keyword("subs","intra-epoch-subs","subs/intra-epoch-subs",-1298574944);
var G__53884_54332 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__53885_54333 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("subs","subscription-info","subs/subscription-info",-1799592687)], null);
var G__53886_54334 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__53887_54335 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("subs","pre-epoch-state","subs/pre-epoch-state",836844033)], null);
var G__53888_54336 = day8.re_frame_10x.subs.prepare_pod_info;
(day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$6 ? day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$6(G__53883_54331,G__53884_54332,G__53885_54333,G__53886_54334,G__53887_54335,G__53888_54336) : day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.reg_sub.call(null,G__53883_54331,G__53884_54332,G__53885_54333,G__53886_54334,G__53887_54335,G__53888_54336));
var G__53889_54337 = new cljs.core.Keyword("subs","all-subs","subs/all-subs",1599770325);
var G__53890_54338 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__53891_54339 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("subs","subscription-info","subs/subscription-info",-1799592687)], null);
var G__53892_54340 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__53893_54341 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("subs","reaction-state","subs/reaction-state",955533938)], null);
var G__53894_54342 = day8.re_frame_10x.subs.prepare_pod_info;
(day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$6 ? day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$6(G__53889_54337,G__53890_54338,G__53891_54339,G__53892_54340,G__53893_54341,G__53894_54342) : day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.reg_sub.call(null,G__53889_54337,G__53890_54338,G__53891_54339,G__53892_54340,G__53893_54341,G__53894_54342));
var G__53895_54348 = new cljs.core.Keyword("subs","filter-str","subs/filter-str",1975403754);
var G__53896_54349 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__53897_54350 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("subs","root","subs/root",-432796018)], null);
var G__53898_54351 = (function (root,_){
return new cljs.core.Keyword(null,"filter-str","filter-str",1974484789).cljs$core$IFn$_invoke$arity$1(root);
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__53895_54348,G__53896_54349,G__53897_54350,G__53898_54351) : day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.reg_sub.call(null,G__53895_54348,G__53896_54349,G__53897_54350,G__53898_54351));
var G__53899_54353 = new cljs.core.Keyword("subs","visible-subs","subs/visible-subs",-1536647862);
var G__53900_54354 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__53901_54355 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("subs","all-subs","subs/all-subs",1599770325)], null);
var G__53902_54356 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__53903_54357 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("subs","ignore-unchanged-l2-subs?","subs/ignore-unchanged-l2-subs?",-1438622704)], null);
var G__53904_54358 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__53905_54359 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("subs","filter-str","subs/filter-str",1975403754)], null);
var G__53906_54360 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__53907_54361 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("subs","sub-pins","subs/sub-pins",1713411647)], null);
var G__53908_54362 = (function (p__53909){
var vec__53910 = p__53909;
var all_subs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53910,(0),null);
var ignore_unchanged_l2_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53910,(1),null);
var filter_str = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53910,(2),null);
var pins = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53910,(3),null);
var compare_fn = (function (s1,s2){
var p1 = cljs.core.boolean$(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(pins,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(s1),new cljs.core.Keyword(null,"pin?","pin?",-1347894609)], null)));
var p2 = cljs.core.boolean$(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(pins,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(s2),new cljs.core.Keyword(null,"pin?","pin?",-1347894609)], null)));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p1,p2)){
return cljs.core.compare(new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(s1),new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(s2));
} else {
return p1;
}
});
var G__53913 = cljs.core.sort.cljs$core$IFn$_invoke$arity$2(compare_fn,all_subs);
var G__53913__$1 = (cljs.core.truth_(ignore_unchanged_l2_QMARK_)?cljs.core.remove.cljs$core$IFn$_invoke$arity$2(day8.re_frame_10x.metamorphic.unchanged_l2_subscription_QMARK_,G__53913):G__53913);
if(cljs.core.truth_(cljs.core.not_empty(filter_str))){
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__53914){
var map__53915 = p__53914;
var map__53915__$1 = (((((!((map__53915 == null))))?(((((map__53915.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53915.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53915):map__53915);
var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53915__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53915__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var or__4126__auto__ = clojure.string.includes_QMARK_(path,filter_str);
if(or__4126__auto__){
return or__4126__auto__;
} else {
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(pins,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,new cljs.core.Keyword(null,"pin?","pin?",-1347894609)], null));
}
}),G__53913__$1);
} else {
return G__53913__$1;
}
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$10 ? day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$10(G__53899_54353,G__53900_54354,G__53901_54355,G__53902_54356,G__53903_54357,G__53904_54358,G__53905_54359,G__53906_54360,G__53907_54361,G__53908_54362) : day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.reg_sub.call(null,G__53899_54353,G__53900_54354,G__53901_54355,G__53902_54356,G__53903_54357,G__53904_54358,G__53905_54359,G__53906_54360,G__53907_54361,G__53908_54362));
var G__53917_54377 = new cljs.core.Keyword("subs","sub-counts","subs/sub-counts",289359284);
var G__53918_54378 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__53919_54379 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("subs","visible-subs","subs/visible-subs",-1536647862)], null);
var G__53920_54380 = (function (subs,_){
return cljs.core.frequencies(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"order","order",-1254677256),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([subs], 0)));
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__53917_54377,G__53918_54378,G__53919_54379,G__53920_54380) : day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.reg_sub.call(null,G__53917_54377,G__53918_54378,G__53919_54379,G__53920_54380));
var G__53921_54381 = new cljs.core.Keyword("subs","created-count","subs/created-count",-1738545579);
var G__53922_54382 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__53923_54383 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("subs","sub-counts","subs/sub-counts",289359284)], null);
var G__53924_54384 = (function (counts){
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(counts,new cljs.core.Keyword("sub","create","sub/create",-1301317560),(0));
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__53921_54381,G__53922_54382,G__53923_54383,G__53924_54384) : day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.reg_sub.call(null,G__53921_54381,G__53922_54382,G__53923_54383,G__53924_54384));
var G__53925_54385 = new cljs.core.Keyword("subs","re-run-count","subs/re-run-count",603750522);
var G__53926_54386 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__53927_54387 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("subs","sub-counts","subs/sub-counts",289359284)], null);
var G__53928_54388 = (function (counts){
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(counts,new cljs.core.Keyword("sub","run","sub/run",-1821315581),(0));
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__53925_54385,G__53926_54386,G__53927_54387,G__53928_54388) : day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.reg_sub.call(null,G__53925_54385,G__53926_54386,G__53927_54387,G__53928_54388));
var G__53929_54389 = new cljs.core.Keyword("subs","destroyed-count","subs/destroyed-count",-218890338);
var G__53930_54390 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__53931_54391 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("subs","sub-counts","subs/sub-counts",289359284)], null);
var G__53932_54392 = (function (counts){
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(counts,new cljs.core.Keyword("sub","dispose","sub/dispose",365440536),(0));
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__53929_54389,G__53930_54390,G__53931_54391,G__53932_54392) : day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.reg_sub.call(null,G__53929_54389,G__53930_54390,G__53931_54391,G__53932_54392));
var G__53933_54397 = new cljs.core.Keyword("subs","not-run-count","subs/not-run-count",-133338676);
var G__53934_54398 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__53935_54399 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("subs","sub-counts","subs/sub-counts",289359284)], null);
var G__53936_54400 = (function (counts){
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(counts,new cljs.core.Keyword("sub","not-run","sub/not-run",-848603451),(0));
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__53933_54397,G__53934_54398,G__53935_54399,G__53936_54400) : day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.reg_sub.call(null,G__53933_54397,G__53934_54398,G__53935_54399,G__53936_54400));
var G__53937_54401 = new cljs.core.Keyword("subs","unchanged-l2-subs-count","subs/unchanged-l2-subs-count",-1997261328);
var G__53938_54402 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__53939_54403 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("subs","all-subs","subs/all-subs",1599770325)], null);
var G__53940_54404 = (function (subs){
return cljs.core.count(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(day8.re_frame_10x.metamorphic.unchanged_l2_subscription_QMARK_,subs));
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__53937_54401,G__53938_54402,G__53939_54403,G__53940_54404) : day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.reg_sub.call(null,G__53937_54401,G__53938_54402,G__53939_54403,G__53940_54404));
var G__53941_54405 = new cljs.core.Keyword("subs","ignore-unchanged-l2-subs?","subs/ignore-unchanged-l2-subs?",-1438622704);
var G__53942_54406 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__53943_54407 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("subs","root","subs/root",-432796018)], null);
var G__53944_54408 = (function (subs,_){
return new cljs.core.Keyword(null,"ignore-unchanged-subs?","ignore-unchanged-subs?",125806160).cljs$core$IFn$_invoke$arity$2(subs,true);
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__53941_54405,G__53942_54406,G__53943_54407,G__53944_54408) : day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.reg_sub.call(null,G__53941_54405,G__53942_54406,G__53943_54407,G__53944_54408));
var G__53945_54410 = new cljs.core.Keyword("subs","sub-expansions","subs/sub-expansions",-547974030);
var G__53946_54411 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__53947_54412 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("subs","root","subs/root",-432796018)], null);
var G__53948_54413 = (function (subs,_){
return new cljs.core.Keyword(null,"expansions","expansions",533713877).cljs$core$IFn$_invoke$arity$1(subs);
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__53945_54410,G__53946_54411,G__53947_54412,G__53948_54413) : day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.reg_sub.call(null,G__53945_54410,G__53946_54411,G__53947_54412,G__53948_54413));
var G__53954_54414 = new cljs.core.Keyword("subs","sub-pins","subs/sub-pins",1713411647);
var G__53955_54415 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__53956_54416 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("subs","root","subs/root",-432796018)], null);
var G__53957_54417 = (function (subs,_){
return new cljs.core.Keyword(null,"pinned","pinned",-1216085339).cljs$core$IFn$_invoke$arity$1(subs);
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__53954_54414,G__53955_54415,G__53956_54416,G__53957_54417) : day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.reg_sub.call(null,G__53954_54414,G__53955_54415,G__53956_54416,G__53957_54417));
var G__53958_54418 = new cljs.core.Keyword("code","root","code/root",-432838104);
var G__53959_54419 = (function (db,_){
return new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(db);
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__53958_54418,G__53959_54419) : day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.reg_sub.call(null,G__53958_54418,G__53959_54419));
var G__53960_54420 = new cljs.core.Keyword("code","current-code","code/current-code",17389180);
var G__53961_54421 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__53962_54422 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("traces","current-event-traces","traces/current-event-traces",1386605769)], null);
var G__53963_54423 = (function (traces,_){
return cljs.core.keep_indexed.cljs$core$IFn$_invoke$arity$2((function (i,trace){
var temp__5739__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(trace,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.Keyword(null,"code","code",1586293142)], null));
if((temp__5739__auto__ == null)){
return null;
} else {
var code = temp__5739__auto__;
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"id","id",-1388402092),i,new cljs.core.Keyword(null,"trace-id","trace-id",681947249),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(trace),new cljs.core.Keyword(null,"title","title",636505583),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"op-type","op-type",-1636141668).cljs$core$IFn$_invoke$arity$1(trace)], 0)),new cljs.core.Keyword(null,"code","code",1586293142),cljs.core.vec(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (i__$1,code__$1){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(code__$1,new cljs.core.Keyword(null,"id","id",-1388402092),i__$1);
}),code)),new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(trace,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.Keyword(null,"form","form",-1624062471)], null))], null);
}
}),traces);
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__53960_54420,G__53961_54421,G__53962_54422,G__53963_54423) : day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.reg_sub.call(null,G__53960_54420,G__53961_54421,G__53962_54422,G__53963_54423));
var G__53964_54424 = new cljs.core.Keyword("code","current-form","code/current-form",1888662531);
var G__53965_54425 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__53966_54426 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("code","current-code","code/current-code",17389180)], null);
var G__53967_54427 = (function (code,_){
return new cljs.core.Keyword(null,"form","form",-1624062471).cljs$core$IFn$_invoke$arity$1(cljs.core.first(code));
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__53964_54424,G__53965_54425,G__53966_54426,G__53967_54427) : day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.reg_sub.call(null,G__53964_54424,G__53965_54425,G__53966_54426,G__53967_54427));
var G__53968_54428 = new cljs.core.Keyword("code","current-zprint-form","code/current-zprint-form",-1297458353);
var G__53969_54429 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__53970_54430 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("code","current-form","code/current-form",1888662531)], null);
var G__53971_54431 = (function (form,_){
return zprint.core.zprint_str(form);
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__53968_54428,G__53969_54429,G__53970_54430,G__53971_54431) : day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.reg_sub.call(null,G__53968_54428,G__53969_54429,G__53970_54430,G__53971_54431));
var G__53972_54432 = new cljs.core.Keyword("code","code-open?","code/code-open?",1212488779);
var G__53973_54433 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__53974_54434 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("code","root","code/root",-432838104)], null);
var G__53975_54435 = (function (code,_){
return new cljs.core.Keyword(null,"code-open?","code-open?",1228336744).cljs$core$IFn$_invoke$arity$1(code);
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__53972_54432,G__53973_54433,G__53974_54434,G__53975_54435) : day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.reg_sub.call(null,G__53972_54432,G__53973_54433,G__53974_54434,G__53975_54435));
var G__53976_54436 = new cljs.core.Keyword("code","highlighted-form","code/highlighted-form",-1258376614);
var G__53977_54437 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__53978_54438 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("code","root","code/root",-432838104)], null);
var G__53979_54439 = (function (code,_){
return new cljs.core.Keyword(null,"highlighted-form","highlighted-form",-1255288753).cljs$core$IFn$_invoke$arity$1(code);
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__53976_54436,G__53977_54437,G__53978_54438,G__53979_54439) : day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.reg_sub.call(null,G__53976_54436,G__53977_54437,G__53978_54438,G__53979_54439));
var G__53980_54440 = new cljs.core.Keyword("code","show-all-code?","code/show-all-code?",162236201);
var G__53981_54441 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__53982_54442 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("code","root","code/root",-432838104)], null);
var G__53983_54443 = (function (code,_){
return new cljs.core.Keyword(null,"show-all-code?","show-all-code?",159571286).cljs$core$IFn$_invoke$arity$1(code);
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__53980_54440,G__53981_54441,G__53982_54442,G__53983_54443) : day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.reg_sub.call(null,G__53980_54440,G__53981_54441,G__53982_54442,G__53983_54443));
var G__53984_54444 = new cljs.core.Keyword("code","repl-msg-state","code/repl-msg-state",-519328495);
var G__53985_54445 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__53986_54446 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("code","root","code/root",-432838104)], null);
var G__53987_54447 = (function (code,_){
return new cljs.core.Keyword(null,"repl-msg-state","repl-msg-state",-522274040).cljs$core$IFn$_invoke$arity$1(code);
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__53984_54444,G__53985_54445,G__53986_54446,G__53987_54447) : day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.reg_sub.call(null,G__53984_54444,G__53985_54445,G__53986_54446,G__53987_54447));
day8.re_frame_10x.subs.canvas = document.createElement("canvas");
var G__53988_54448 = new cljs.core.Keyword("code","single-character-width","code/single-character-width",-207718647);
var G__53989_54449 = (function (_,___$1){
var context = day8.re_frame_10x.subs.canvas.getContext("2d");
(context.font = "monospace 1em");

return context.measureText("T").width;
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__53988_54448,G__53989_54449) : day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.reg_sub.call(null,G__53988_54448,G__53989_54449));
var G__53990_54450 = new cljs.core.Keyword("code","max-column-width","code/max-column-width",1552872919);
var G__53991_54451 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__53992_54452 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","window-width-rounded","settings/window-width-rounded",-924202629),(100)], null);
var G__53993_54453 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__53994_54454 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("code","single-character-width","code/single-character-width",-207718647)], null);
var G__53995_54455 = (function (p__53996,_){
var vec__53997 = p__53996;
var window_width = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53997,(0),null);
var char_width = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53997,(1),null);
return Math.ceil((window_width / char_width));
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$6 ? day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$6(G__53990_54450,G__53991_54451,G__53992_54452,G__53993_54453,G__53994_54454,G__53995_54455) : day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.reg_sub.call(null,G__53990_54450,G__53991_54451,G__53992_54452,G__53993_54453,G__53994_54454,G__53995_54455));
var G__54000_54457 = new cljs.core.Keyword("component","root","component/root",-1714299688);
var G__54001_54458 = (function (db,_){
return new cljs.core.Keyword(null,"component","component",1555936782).cljs$core$IFn$_invoke$arity$1(db);
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__54000_54457,G__54001_54458) : day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.reg_sub.call(null,G__54000_54457,G__54001_54458));
var G__54009_54463 = new cljs.core.Keyword("component","direction","component/direction",785553634);
var G__54010_54464 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__54011_54465 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("component","root","component/root",-1714299688)], null);
var G__54012_54466 = (function (component,_){
return new cljs.core.Keyword(null,"direction","direction",-633359395).cljs$core$IFn$_invoke$arity$1(component);
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__54009_54463,G__54010_54464,G__54011_54465,G__54012_54466) : day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.reg_sub.call(null,G__54009_54463,G__54010_54464,G__54011_54465,G__54012_54466));
var G__54013_54467 = new cljs.core.Keyword("errors","root","errors/root",-1902924890);
var G__54014_54468 = (function (db,_){
return new cljs.core.Keyword(null,"errors","errors",-908790718).cljs$core$IFn$_invoke$arity$1(db);
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__54013_54467,G__54014_54468) : day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.reg_sub.call(null,G__54013_54467,G__54014_54468));
var G__54015_54469 = new cljs.core.Keyword("errors","popup-failed?","errors/popup-failed?",-600155433);
var G__54016_54470 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__54017_54471 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("errors","root","errors/root",-1902924890)], null);
var G__54018_54472 = (function (errors,_){
return new cljs.core.Keyword(null,"popup-failed?","popup-failed?",-345183682).cljs$core$IFn$_invoke$arity$1(errors);
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__54015_54469,G__54016_54470,G__54017_54471,G__54018_54472) : day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.reg_sub.call(null,G__54015_54469,G__54016_54470,G__54017_54471,G__54018_54472));
var G__54019_54476 = new cljs.core.Keyword("history","showing-history?","history/showing-history?",896856376);
var G__54020_54477 = (function (db,_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"history","history",-247395220),new cljs.core.Keyword(null,"showing-history?","showing-history?",2100610492)], null));
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__54019_54476,G__54020_54477) : day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.reg_sub.call(null,G__54019_54476,G__54020_54477));

//# sourceMappingURL=day8.re_frame_10x.subs.js.map
