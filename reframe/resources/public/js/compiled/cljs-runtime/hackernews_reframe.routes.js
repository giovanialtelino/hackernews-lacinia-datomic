goog.provide('hackernews_reframe.routes');
goog.require('cljs.core');
goog.require('goog.History');
goog.require('goog.history.EventType');
goog.require('secretary.core');
goog.require('goog.events');
goog.require('re_frame.core');
goog.require('hackernews_reframe.events');
hackernews_reframe.routes.hook_browser_navigation_BANG_ = (function hackernews_reframe$routes$hook_browser_navigation_BANG_(){
var G__63954 = (new goog.History());
goog.events.listen(G__63954,goog.history.EventType.NAVIGATE,(function (event){
return secretary.core.dispatch_BANG_(event.token);
}));

G__63954.setEnabled(true);

return G__63954;
});
hackernews_reframe.routes.app_routes = (function hackernews_reframe$routes$app_routes(){
secretary.core.set_config_BANG_(new cljs.core.Keyword(null,"prefix","prefix",-265908465),"#");

var action__63470__auto___64137 = (function (params__63471__auto__){
if(cljs.core.map_QMARK_(params__63471__auto__)){
var map__63961 = params__63471__auto__;
var map__63961__$1 = (((((!((map__63961 == null))))?(((((map__63961.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63961.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__63961):map__63961);
var G__63963_64138 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("hackernews-reframe.events","clean-posts","hackernews-reframe.events/clean-posts",1980928124)], null);
(re_frame.core.dispatch_sync.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch_sync.cljs$core$IFn$_invoke$arity$1(G__63963_64138) : re_frame.core.dispatch_sync.call(null,G__63963_64138));

var G__63964_64139 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("hackernews-reframe.events","start-headers","hackernews-reframe.events/start-headers",644899362)], null);
(re_frame.core.dispatch_sync.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch_sync.cljs$core$IFn$_invoke$arity$1(G__63964_64139) : re_frame.core.dispatch_sync.call(null,G__63964_64139));

var G__63965_64140 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("hackernews-reframe.events","refresh","hackernews-reframe.events/refresh",-1608309116)], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__63965_64140) : re_frame.core.dispatch.call(null,G__63965_64140));

var G__63966_64141 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("hackernews-reframe.events","set-active-panel","hackernews-reframe.events/set-active-panel",-1692528511),new cljs.core.Keyword(null,"news-panel","news-panel",-975450739)], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__63966_64141) : re_frame.core.dispatch.call(null,G__63966_64141));

var G__63967 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("hackernews-reframe.events","get-news","hackernews-reframe.events/get-news",1160584264)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__63967) : re_frame.core.dispatch.call(null,G__63967));
} else {
if(cljs.core.vector_QMARK_(params__63471__auto__)){
var vec__63968 = params__63471__auto__;
var G__63971_64142 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("hackernews-reframe.events","clean-posts","hackernews-reframe.events/clean-posts",1980928124)], null);
(re_frame.core.dispatch_sync.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch_sync.cljs$core$IFn$_invoke$arity$1(G__63971_64142) : re_frame.core.dispatch_sync.call(null,G__63971_64142));

var G__63972_64148 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("hackernews-reframe.events","start-headers","hackernews-reframe.events/start-headers",644899362)], null);
(re_frame.core.dispatch_sync.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch_sync.cljs$core$IFn$_invoke$arity$1(G__63972_64148) : re_frame.core.dispatch_sync.call(null,G__63972_64148));

var G__63973_64149 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("hackernews-reframe.events","refresh","hackernews-reframe.events/refresh",-1608309116)], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__63973_64149) : re_frame.core.dispatch.call(null,G__63973_64149));

var G__63974_64150 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("hackernews-reframe.events","set-active-panel","hackernews-reframe.events/set-active-panel",-1692528511),new cljs.core.Keyword(null,"news-panel","news-panel",-975450739)], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__63974_64150) : re_frame.core.dispatch.call(null,G__63974_64150));

var G__63975 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("hackernews-reframe.events","get-news","hackernews-reframe.events/get-news",1160584264)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__63975) : re_frame.core.dispatch.call(null,G__63975));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/",action__63470__auto___64137);

hackernews_reframe.routes.home = (function hackernews_reframe$routes$app_routes_$_home(var_args){
var args__4742__auto__ = [];
var len__4736__auto___64151 = arguments.length;
var i__4737__auto___64152 = (0);
while(true){
if((i__4737__auto___64152 < len__4736__auto___64151)){
args__4742__auto__.push((arguments[i__4737__auto___64152]));

var G__64153 = (i__4737__auto___64152 + (1));
i__4737__auto___64152 = G__64153;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return hackernews_reframe.routes.home.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(hackernews_reframe.routes.home.cljs$core$IFn$_invoke$arity$variadic = (function (args__63469__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(secretary.core.render_route_STAR_,"/",args__63469__auto__);
}));

(hackernews_reframe.routes.home.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(hackernews_reframe.routes.home.cljs$lang$applyTo = (function (seq63976){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq63976));
}));


var action__63470__auto___64154 = (function (params__63471__auto__){
if(cljs.core.map_QMARK_(params__63471__auto__)){
var map__63977 = params__63471__auto__;
var map__63977__$1 = (((((!((map__63977 == null))))?(((((map__63977.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63977.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__63977):map__63977);
var G__63979_64155 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("hackernews-reframe.events","start-headers","hackernews-reframe.events/start-headers",644899362)], null);
(re_frame.core.dispatch_sync.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch_sync.cljs$core$IFn$_invoke$arity$1(G__63979_64155) : re_frame.core.dispatch_sync.call(null,G__63979_64155));

var G__63980_64156 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("hackernews-reframe.events","refresh","hackernews-reframe.events/refresh",-1608309116)], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__63980_64156) : re_frame.core.dispatch.call(null,G__63980_64156));

var G__63981 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("hackernews-reframe.events","set-active-panel","hackernews-reframe.events/set-active-panel",-1692528511),new cljs.core.Keyword(null,"login-panel","login-panel",-2123767360)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__63981) : re_frame.core.dispatch.call(null,G__63981));
} else {
if(cljs.core.vector_QMARK_(params__63471__auto__)){
var vec__63982 = params__63471__auto__;
var G__63985_64157 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("hackernews-reframe.events","start-headers","hackernews-reframe.events/start-headers",644899362)], null);
(re_frame.core.dispatch_sync.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch_sync.cljs$core$IFn$_invoke$arity$1(G__63985_64157) : re_frame.core.dispatch_sync.call(null,G__63985_64157));

var G__63986_64158 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("hackernews-reframe.events","refresh","hackernews-reframe.events/refresh",-1608309116)], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__63986_64158) : re_frame.core.dispatch.call(null,G__63986_64158));

var G__63987 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("hackernews-reframe.events","set-active-panel","hackernews-reframe.events/set-active-panel",-1692528511),new cljs.core.Keyword(null,"login-panel","login-panel",-2123767360)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__63987) : re_frame.core.dispatch.call(null,G__63987));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/login",action__63470__auto___64154);

hackernews_reframe.routes.login = (function hackernews_reframe$routes$app_routes_$_login(var_args){
var args__4742__auto__ = [];
var len__4736__auto___64159 = arguments.length;
var i__4737__auto___64160 = (0);
while(true){
if((i__4737__auto___64160 < len__4736__auto___64159)){
args__4742__auto__.push((arguments[i__4737__auto___64160]));

var G__64161 = (i__4737__auto___64160 + (1));
i__4737__auto___64160 = G__64161;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return hackernews_reframe.routes.login.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(hackernews_reframe.routes.login.cljs$core$IFn$_invoke$arity$variadic = (function (args__63469__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(secretary.core.render_route_STAR_,"/login",args__63469__auto__);
}));

(hackernews_reframe.routes.login.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(hackernews_reframe.routes.login.cljs$lang$applyTo = (function (seq63988){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq63988));
}));


var action__63470__auto___64162 = (function (params__63471__auto__){
if(cljs.core.map_QMARK_(params__63471__auto__)){
var map__63989 = params__63471__auto__;
var map__63989__$1 = (((((!((map__63989 == null))))?(((((map__63989.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63989.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__63989):map__63989);
var G__63991_64163 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("hackernews-reframe.events","start-headers","hackernews-reframe.events/start-headers",644899362)], null);
(re_frame.core.dispatch_sync.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch_sync.cljs$core$IFn$_invoke$arity$1(G__63991_64163) : re_frame.core.dispatch_sync.call(null,G__63991_64163));

var G__63992_64164 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("hackernews-reframe.events","refresh","hackernews-reframe.events/refresh",-1608309116)], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__63992_64164) : re_frame.core.dispatch.call(null,G__63992_64164));

var G__63993 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("hackernews-reframe.events","set-active-panel","hackernews-reframe.events/set-active-panel",-1692528511),new cljs.core.Keyword(null,"sign-panel","sign-panel",1248159101)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__63993) : re_frame.core.dispatch.call(null,G__63993));
} else {
if(cljs.core.vector_QMARK_(params__63471__auto__)){
var vec__63994 = params__63471__auto__;
var G__63997_64165 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("hackernews-reframe.events","start-headers","hackernews-reframe.events/start-headers",644899362)], null);
(re_frame.core.dispatch_sync.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch_sync.cljs$core$IFn$_invoke$arity$1(G__63997_64165) : re_frame.core.dispatch_sync.call(null,G__63997_64165));

var G__63998_64166 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("hackernews-reframe.events","refresh","hackernews-reframe.events/refresh",-1608309116)], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__63998_64166) : re_frame.core.dispatch.call(null,G__63998_64166));

var G__63999 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("hackernews-reframe.events","set-active-panel","hackernews-reframe.events/set-active-panel",-1692528511),new cljs.core.Keyword(null,"sign-panel","sign-panel",1248159101)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__63999) : re_frame.core.dispatch.call(null,G__63999));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/sign",action__63470__auto___64162);

hackernews_reframe.routes.sign = (function hackernews_reframe$routes$app_routes_$_sign(var_args){
var args__4742__auto__ = [];
var len__4736__auto___64167 = arguments.length;
var i__4737__auto___64168 = (0);
while(true){
if((i__4737__auto___64168 < len__4736__auto___64167)){
args__4742__auto__.push((arguments[i__4737__auto___64168]));

var G__64169 = (i__4737__auto___64168 + (1));
i__4737__auto___64168 = G__64169;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return hackernews_reframe.routes.sign.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(hackernews_reframe.routes.sign.cljs$core$IFn$_invoke$arity$variadic = (function (args__63469__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(secretary.core.render_route_STAR_,"/sign",args__63469__auto__);
}));

(hackernews_reframe.routes.sign.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(hackernews_reframe.routes.sign.cljs$lang$applyTo = (function (seq64000){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq64000));
}));


var action__63470__auto___64172 = (function (params__63471__auto__){
if(cljs.core.map_QMARK_(params__63471__auto__)){
var map__64001 = params__63471__auto__;
var map__64001__$1 = (((((!((map__64001 == null))))?(((((map__64001.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64001.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64001):map__64001);
var G__64003_64173 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("hackernews-reframe.events","start-headers","hackernews-reframe.events/start-headers",644899362)], null);
(re_frame.core.dispatch_sync.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch_sync.cljs$core$IFn$_invoke$arity$1(G__64003_64173) : re_frame.core.dispatch_sync.call(null,G__64003_64173));

var G__64004_64174 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("hackernews-reframe.events","refresh","hackernews-reframe.events/refresh",-1608309116)], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__64004_64174) : re_frame.core.dispatch.call(null,G__64004_64174));

var G__64005 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("hackernews-reframe.events","set-active-panel","hackernews-reframe.events/set-active-panel",-1692528511),new cljs.core.Keyword(null,"post-panel","post-panel",-1534645304)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__64005) : re_frame.core.dispatch.call(null,G__64005));
} else {
if(cljs.core.vector_QMARK_(params__63471__auto__)){
var vec__64006 = params__63471__auto__;
var G__64009_64175 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("hackernews-reframe.events","start-headers","hackernews-reframe.events/start-headers",644899362)], null);
(re_frame.core.dispatch_sync.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch_sync.cljs$core$IFn$_invoke$arity$1(G__64009_64175) : re_frame.core.dispatch_sync.call(null,G__64009_64175));

var G__64010_64176 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("hackernews-reframe.events","refresh","hackernews-reframe.events/refresh",-1608309116)], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__64010_64176) : re_frame.core.dispatch.call(null,G__64010_64176));

var G__64011 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("hackernews-reframe.events","set-active-panel","hackernews-reframe.events/set-active-panel",-1692528511),new cljs.core.Keyword(null,"post-panel","post-panel",-1534645304)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__64011) : re_frame.core.dispatch.call(null,G__64011));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/submit",action__63470__auto___64172);

hackernews_reframe.routes.submit = (function hackernews_reframe$routes$app_routes_$_submit(var_args){
var args__4742__auto__ = [];
var len__4736__auto___64177 = arguments.length;
var i__4737__auto___64178 = (0);
while(true){
if((i__4737__auto___64178 < len__4736__auto___64177)){
args__4742__auto__.push((arguments[i__4737__auto___64178]));

var G__64179 = (i__4737__auto___64178 + (1));
i__4737__auto___64178 = G__64179;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return hackernews_reframe.routes.submit.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(hackernews_reframe.routes.submit.cljs$core$IFn$_invoke$arity$variadic = (function (args__63469__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(secretary.core.render_route_STAR_,"/submit",args__63469__auto__);
}));

(hackernews_reframe.routes.submit.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(hackernews_reframe.routes.submit.cljs$lang$applyTo = (function (seq64012){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq64012));
}));


var action__63470__auto___64180 = (function (params__63471__auto__){
if(cljs.core.map_QMARK_(params__63471__auto__)){
var map__64013 = params__63471__auto__;
var map__64013__$1 = (((((!((map__64013 == null))))?(((((map__64013.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64013.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64013):map__64013);
var G__64015_64181 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("hackernews-reframe.events","start-headers","hackernews-reframe.events/start-headers",644899362)], null);
(re_frame.core.dispatch_sync.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch_sync.cljs$core$IFn$_invoke$arity$1(G__64015_64181) : re_frame.core.dispatch_sync.call(null,G__64015_64181));

var G__64016_64182 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("hackernews-reframe.events","refresh","hackernews-reframe.events/refresh",-1608309116)], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__64016_64182) : re_frame.core.dispatch.call(null,G__64016_64182));

var G__64017 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("hackernews-reframe.events","set-active-panel","hackernews-reframe.events/set-active-panel",-1692528511),new cljs.core.Keyword(null,"past-panel","past-panel",-2054059766)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__64017) : re_frame.core.dispatch.call(null,G__64017));
} else {
if(cljs.core.vector_QMARK_(params__63471__auto__)){
var vec__64022 = params__63471__auto__;
var G__64025_64183 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("hackernews-reframe.events","start-headers","hackernews-reframe.events/start-headers",644899362)], null);
(re_frame.core.dispatch_sync.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch_sync.cljs$core$IFn$_invoke$arity$1(G__64025_64183) : re_frame.core.dispatch_sync.call(null,G__64025_64183));

var G__64026_64184 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("hackernews-reframe.events","refresh","hackernews-reframe.events/refresh",-1608309116)], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__64026_64184) : re_frame.core.dispatch.call(null,G__64026_64184));

var G__64027 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("hackernews-reframe.events","set-active-panel","hackernews-reframe.events/set-active-panel",-1692528511),new cljs.core.Keyword(null,"past-panel","past-panel",-2054059766)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__64027) : re_frame.core.dispatch.call(null,G__64027));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/past",action__63470__auto___64180);

hackernews_reframe.routes.past = (function hackernews_reframe$routes$app_routes_$_past(var_args){
var args__4742__auto__ = [];
var len__4736__auto___64185 = arguments.length;
var i__4737__auto___64186 = (0);
while(true){
if((i__4737__auto___64186 < len__4736__auto___64185)){
args__4742__auto__.push((arguments[i__4737__auto___64186]));

var G__64187 = (i__4737__auto___64186 + (1));
i__4737__auto___64186 = G__64187;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return hackernews_reframe.routes.past.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(hackernews_reframe.routes.past.cljs$core$IFn$_invoke$arity$variadic = (function (args__63469__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(secretary.core.render_route_STAR_,"/past",args__63469__auto__);
}));

(hackernews_reframe.routes.past.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(hackernews_reframe.routes.past.cljs$lang$applyTo = (function (seq64028){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq64028));
}));


var action__63470__auto___64188 = (function (params__63471__auto__){
if(cljs.core.map_QMARK_(params__63471__auto__)){
var map__64029 = params__63471__auto__;
var map__64029__$1 = (((((!((map__64029 == null))))?(((((map__64029.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64029.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64029):map__64029);
var father = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64029__$1,new cljs.core.Keyword(null,"father","father",-173311021));
var G__64031_64189 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("hackernews-reframe.events","start-headers","hackernews-reframe.events/start-headers",644899362)], null);
(re_frame.core.dispatch_sync.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch_sync.cljs$core$IFn$_invoke$arity$1(G__64031_64189) : re_frame.core.dispatch_sync.call(null,G__64031_64189));

var G__64032_64190 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("hackernews-reframe.events","refresh","hackernews-reframe.events/refresh",-1608309116)], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__64032_64190) : re_frame.core.dispatch.call(null,G__64032_64190));

var G__64033_64191 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("hackernews-reframe.events","clean-comments","hackernews-reframe.events/clean-comments",-1868629933)], null);
(re_frame.core.dispatch_sync.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch_sync.cljs$core$IFn$_invoke$arity$1(G__64033_64191) : re_frame.core.dispatch_sync.call(null,G__64033_64191));

var G__64034_64192 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("hackernews-reframe.events","change-comment-type","hackernews-reframe.events/change-comment-type",2002770029),"link"], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__64034_64192) : re_frame.core.dispatch.call(null,G__64034_64192));

var G__64035_64194 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("hackernews-reframe.events","get-father-comments","hackernews-reframe.events/get-father-comments",108429314),father], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__64035_64194) : re_frame.core.dispatch.call(null,G__64035_64194));

var G__64036 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("hackernews-reframe.events","set-active-panel","hackernews-reframe.events/set-active-panel",-1692528511),new cljs.core.Keyword(null,"comment-panel","comment-panel",-390866391)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__64036) : re_frame.core.dispatch.call(null,G__64036));
} else {
if(cljs.core.vector_QMARK_(params__63471__auto__)){
var vec__64037 = params__63471__auto__;
var father = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64037,(0),null);
var G__64040_64196 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("hackernews-reframe.events","start-headers","hackernews-reframe.events/start-headers",644899362)], null);
(re_frame.core.dispatch_sync.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch_sync.cljs$core$IFn$_invoke$arity$1(G__64040_64196) : re_frame.core.dispatch_sync.call(null,G__64040_64196));

var G__64041_64197 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("hackernews-reframe.events","refresh","hackernews-reframe.events/refresh",-1608309116)], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__64041_64197) : re_frame.core.dispatch.call(null,G__64041_64197));

var G__64042_64198 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("hackernews-reframe.events","clean-comments","hackernews-reframe.events/clean-comments",-1868629933)], null);
(re_frame.core.dispatch_sync.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch_sync.cljs$core$IFn$_invoke$arity$1(G__64042_64198) : re_frame.core.dispatch_sync.call(null,G__64042_64198));

var G__64043_64199 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("hackernews-reframe.events","change-comment-type","hackernews-reframe.events/change-comment-type",2002770029),"link"], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__64043_64199) : re_frame.core.dispatch.call(null,G__64043_64199));

var G__64044_64201 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("hackernews-reframe.events","get-father-comments","hackernews-reframe.events/get-father-comments",108429314),father], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__64044_64201) : re_frame.core.dispatch.call(null,G__64044_64201));

var G__64045 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("hackernews-reframe.events","set-active-panel","hackernews-reframe.events/set-active-panel",-1692528511),new cljs.core.Keyword(null,"comment-panel","comment-panel",-390866391)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__64045) : re_frame.core.dispatch.call(null,G__64045));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/comments/:father",action__63470__auto___64188);

hackernews_reframe.routes.hn_comment = (function hackernews_reframe$routes$app_routes_$_hn_comment(var_args){
var args__4742__auto__ = [];
var len__4736__auto___64202 = arguments.length;
var i__4737__auto___64203 = (0);
while(true){
if((i__4737__auto___64203 < len__4736__auto___64202)){
args__4742__auto__.push((arguments[i__4737__auto___64203]));

var G__64204 = (i__4737__auto___64203 + (1));
i__4737__auto___64203 = G__64204;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return hackernews_reframe.routes.hn_comment.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(hackernews_reframe.routes.hn_comment.cljs$core$IFn$_invoke$arity$variadic = (function (args__63469__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(secretary.core.render_route_STAR_,"/comments/:father",args__63469__auto__);
}));

(hackernews_reframe.routes.hn_comment.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(hackernews_reframe.routes.hn_comment.cljs$lang$applyTo = (function (seq64046){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq64046));
}));


var action__63470__auto___64205 = (function (params__63471__auto__){
if(cljs.core.map_QMARK_(params__63471__auto__)){
var map__64047 = params__63471__auto__;
var map__64047__$1 = (((((!((map__64047 == null))))?(((((map__64047.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64047.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64047):map__64047);
var comment = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64047__$1,new cljs.core.Keyword(null,"comment","comment",532206069));
var G__64049_64206 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("hackernews-reframe.events","start-headers","hackernews-reframe.events/start-headers",644899362)], null);
(re_frame.core.dispatch_sync.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch_sync.cljs$core$IFn$_invoke$arity$1(G__64049_64206) : re_frame.core.dispatch_sync.call(null,G__64049_64206));

var G__64050_64207 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("hackernews-reframe.events","refresh","hackernews-reframe.events/refresh",-1608309116)], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__64050_64207) : re_frame.core.dispatch.call(null,G__64050_64207));

var G__64051_64209 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("hackernews-reframe.events","change-comment-type","hackernews-reframe.events/change-comment-type",2002770029),"comment"], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__64051_64209) : re_frame.core.dispatch.call(null,G__64051_64209));

var G__64052_64210 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("hackernews-reframe.events","get-comment","hackernews-reframe.events/get-comment",-709249913),comment], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__64052_64210) : re_frame.core.dispatch.call(null,G__64052_64210));

var G__64053 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("hackernews-reframe.events","set-active-panel","hackernews-reframe.events/set-active-panel",-1692528511),new cljs.core.Keyword(null,"answer-comment-panel","answer-comment-panel",1923878235)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__64053) : re_frame.core.dispatch.call(null,G__64053));
} else {
if(cljs.core.vector_QMARK_(params__63471__auto__)){
var vec__64054 = params__63471__auto__;
var comment = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64054,(0),null);
var G__64057_64212 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("hackernews-reframe.events","start-headers","hackernews-reframe.events/start-headers",644899362)], null);
(re_frame.core.dispatch_sync.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch_sync.cljs$core$IFn$_invoke$arity$1(G__64057_64212) : re_frame.core.dispatch_sync.call(null,G__64057_64212));

var G__64058_64213 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("hackernews-reframe.events","refresh","hackernews-reframe.events/refresh",-1608309116)], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__64058_64213) : re_frame.core.dispatch.call(null,G__64058_64213));

var G__64059_64214 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("hackernews-reframe.events","change-comment-type","hackernews-reframe.events/change-comment-type",2002770029),"comment"], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__64059_64214) : re_frame.core.dispatch.call(null,G__64059_64214));

var G__64060_64215 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("hackernews-reframe.events","get-comment","hackernews-reframe.events/get-comment",-709249913),comment], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__64060_64215) : re_frame.core.dispatch.call(null,G__64060_64215));

var G__64061 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("hackernews-reframe.events","set-active-panel","hackernews-reframe.events/set-active-panel",-1692528511),new cljs.core.Keyword(null,"answer-comment-panel","answer-comment-panel",1923878235)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__64061) : re_frame.core.dispatch.call(null,G__64061));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/reply-comments/:comment",action__63470__auto___64205);

hackernews_reframe.routes.reply_comment = (function hackernews_reframe$routes$app_routes_$_reply_comment(var_args){
var args__4742__auto__ = [];
var len__4736__auto___64216 = arguments.length;
var i__4737__auto___64217 = (0);
while(true){
if((i__4737__auto___64217 < len__4736__auto___64216)){
args__4742__auto__.push((arguments[i__4737__auto___64217]));

var G__64218 = (i__4737__auto___64217 + (1));
i__4737__auto___64217 = G__64218;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return hackernews_reframe.routes.reply_comment.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(hackernews_reframe.routes.reply_comment.cljs$core$IFn$_invoke$arity$variadic = (function (args__63469__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(secretary.core.render_route_STAR_,"/reply-comments/:comment",args__63469__auto__);
}));

(hackernews_reframe.routes.reply_comment.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(hackernews_reframe.routes.reply_comment.cljs$lang$applyTo = (function (seq64062){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq64062));
}));


var action__63470__auto___64219 = (function (params__63471__auto__){
if(cljs.core.map_QMARK_(params__63471__auto__)){
var map__64063 = params__63471__auto__;
var map__64063__$1 = (((((!((map__64063 == null))))?(((((map__64063.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64063.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64063):map__64063);
var user = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64063__$1,new cljs.core.Keyword(null,"user","user",1532431356));
var G__64065_64220 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("hackernews-reframe.events","start-headers","hackernews-reframe.events/start-headers",644899362)], null);
(re_frame.core.dispatch_sync.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch_sync.cljs$core$IFn$_invoke$arity$1(G__64065_64220) : re_frame.core.dispatch_sync.call(null,G__64065_64220));

var G__64066_64221 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("hackernews-reframe.events","refresh","hackernews-reframe.events/refresh",-1608309116)], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__64066_64221) : re_frame.core.dispatch.call(null,G__64066_64221));

var G__64067_64222 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("hackernews-reframe.events","clean-comments","hackernews-reframe.events/clean-comments",-1868629933)], null);
(re_frame.core.dispatch_sync.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch_sync.cljs$core$IFn$_invoke$arity$1(G__64067_64222) : re_frame.core.dispatch_sync.call(null,G__64067_64222));

var G__64068_64223 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("hackernews-reframe.events","get-user-comments","hackernews-reframe.events/get-user-comments",362596330),user], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__64068_64223) : re_frame.core.dispatch.call(null,G__64068_64223));

var G__64069 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("hackernews-reframe.events","set-active-panel","hackernews-reframe.events/set-active-panel",-1692528511),new cljs.core.Keyword(null,"comment-panel","comment-panel",-390866391)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__64069) : re_frame.core.dispatch.call(null,G__64069));
} else {
if(cljs.core.vector_QMARK_(params__63471__auto__)){
var vec__64070 = params__63471__auto__;
var user = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64070,(0),null);
var G__64073_64224 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("hackernews-reframe.events","start-headers","hackernews-reframe.events/start-headers",644899362)], null);
(re_frame.core.dispatch_sync.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch_sync.cljs$core$IFn$_invoke$arity$1(G__64073_64224) : re_frame.core.dispatch_sync.call(null,G__64073_64224));

var G__64074_64225 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("hackernews-reframe.events","refresh","hackernews-reframe.events/refresh",-1608309116)], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__64074_64225) : re_frame.core.dispatch.call(null,G__64074_64225));

var G__64075_64226 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("hackernews-reframe.events","clean-comments","hackernews-reframe.events/clean-comments",-1868629933)], null);
(re_frame.core.dispatch_sync.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch_sync.cljs$core$IFn$_invoke$arity$1(G__64075_64226) : re_frame.core.dispatch_sync.call(null,G__64075_64226));

var G__64076_64227 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("hackernews-reframe.events","get-user-comments","hackernews-reframe.events/get-user-comments",362596330),user], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__64076_64227) : re_frame.core.dispatch.call(null,G__64076_64227));

var G__64077 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("hackernews-reframe.events","set-active-panel","hackernews-reframe.events/set-active-panel",-1692528511),new cljs.core.Keyword(null,"comment-panel","comment-panel",-390866391)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__64077) : re_frame.core.dispatch.call(null,G__64077));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/user-comments/:user",action__63470__auto___64219);

hackernews_reframe.routes.user_comments = (function hackernews_reframe$routes$app_routes_$_user_comments(var_args){
var args__4742__auto__ = [];
var len__4736__auto___64228 = arguments.length;
var i__4737__auto___64229 = (0);
while(true){
if((i__4737__auto___64229 < len__4736__auto___64228)){
args__4742__auto__.push((arguments[i__4737__auto___64229]));

var G__64230 = (i__4737__auto___64229 + (1));
i__4737__auto___64229 = G__64230;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return hackernews_reframe.routes.user_comments.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(hackernews_reframe.routes.user_comments.cljs$core$IFn$_invoke$arity$variadic = (function (args__63469__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(secretary.core.render_route_STAR_,"/user-comments/:user",args__63469__auto__);
}));

(hackernews_reframe.routes.user_comments.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(hackernews_reframe.routes.user_comments.cljs$lang$applyTo = (function (seq64078){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq64078));
}));


var action__63470__auto___64231 = (function (params__63471__auto__){
if(cljs.core.map_QMARK_(params__63471__auto__)){
var map__64079 = params__63471__auto__;
var map__64079__$1 = (((((!((map__64079 == null))))?(((((map__64079.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64079.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64079):map__64079);
var user = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64079__$1,new cljs.core.Keyword(null,"user","user",1532431356));
var G__64081_64232 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("hackernews-reframe.events","start-headers","hackernews-reframe.events/start-headers",644899362)], null);
(re_frame.core.dispatch_sync.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch_sync.cljs$core$IFn$_invoke$arity$1(G__64081_64232) : re_frame.core.dispatch_sync.call(null,G__64081_64232));

var G__64082_64233 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("hackernews-reframe.events","refresh","hackernews-reframe.events/refresh",-1608309116)], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__64082_64233) : re_frame.core.dispatch.call(null,G__64082_64233));

var G__64083_64234 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("hackernews-reframe.events","clean-posts","hackernews-reframe.events/clean-posts",1980928124)], null);
(re_frame.core.dispatch_sync.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch_sync.cljs$core$IFn$_invoke$arity$1(G__64083_64234) : re_frame.core.dispatch_sync.call(null,G__64083_64234));

var G__64084_64235 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("hackernews-reframe.events","get-user-posts","hackernews-reframe.events/get-user-posts",342076260),user], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__64084_64235) : re_frame.core.dispatch.call(null,G__64084_64235));

var G__64085 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("hackernews-reframe.events","set-active-panel","hackernews-reframe.events/set-active-panel",-1692528511),new cljs.core.Keyword(null,"news-panel","news-panel",-975450739)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__64085) : re_frame.core.dispatch.call(null,G__64085));
} else {
if(cljs.core.vector_QMARK_(params__63471__auto__)){
var vec__64086 = params__63471__auto__;
var user = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64086,(0),null);
var G__64089_64236 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("hackernews-reframe.events","start-headers","hackernews-reframe.events/start-headers",644899362)], null);
(re_frame.core.dispatch_sync.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch_sync.cljs$core$IFn$_invoke$arity$1(G__64089_64236) : re_frame.core.dispatch_sync.call(null,G__64089_64236));

var G__64090_64237 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("hackernews-reframe.events","refresh","hackernews-reframe.events/refresh",-1608309116)], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__64090_64237) : re_frame.core.dispatch.call(null,G__64090_64237));

var G__64091_64238 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("hackernews-reframe.events","clean-posts","hackernews-reframe.events/clean-posts",1980928124)], null);
(re_frame.core.dispatch_sync.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch_sync.cljs$core$IFn$_invoke$arity$1(G__64091_64238) : re_frame.core.dispatch_sync.call(null,G__64091_64238));

var G__64092_64239 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("hackernews-reframe.events","get-user-posts","hackernews-reframe.events/get-user-posts",342076260),user], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__64092_64239) : re_frame.core.dispatch.call(null,G__64092_64239));

var G__64093 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("hackernews-reframe.events","set-active-panel","hackernews-reframe.events/set-active-panel",-1692528511),new cljs.core.Keyword(null,"news-panel","news-panel",-975450739)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__64093) : re_frame.core.dispatch.call(null,G__64093));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/user-posts/:user",action__63470__auto___64231);

hackernews_reframe.routes.user_posts = (function hackernews_reframe$routes$app_routes_$_user_posts(var_args){
var args__4742__auto__ = [];
var len__4736__auto___64240 = arguments.length;
var i__4737__auto___64241 = (0);
while(true){
if((i__4737__auto___64241 < len__4736__auto___64240)){
args__4742__auto__.push((arguments[i__4737__auto___64241]));

var G__64242 = (i__4737__auto___64241 + (1));
i__4737__auto___64241 = G__64242;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return hackernews_reframe.routes.user_posts.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(hackernews_reframe.routes.user_posts.cljs$core$IFn$_invoke$arity$variadic = (function (args__63469__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(secretary.core.render_route_STAR_,"/user-posts/:user",args__63469__auto__);
}));

(hackernews_reframe.routes.user_posts.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(hackernews_reframe.routes.user_posts.cljs$lang$applyTo = (function (seq64094){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq64094));
}));


var action__63470__auto___64247 = (function (params__63471__auto__){
if(cljs.core.map_QMARK_(params__63471__auto__)){
var map__64095 = params__63471__auto__;
var map__64095__$1 = (((((!((map__64095 == null))))?(((((map__64095.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64095.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64095):map__64095);
var G__64097_64248 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("hackernews-reframe.events","start-headers","hackernews-reframe.events/start-headers",644899362)], null);
(re_frame.core.dispatch_sync.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch_sync.cljs$core$IFn$_invoke$arity$1(G__64097_64248) : re_frame.core.dispatch_sync.call(null,G__64097_64248));

var G__64098_64249 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("hackernews-reframe.events","refresh","hackernews-reframe.events/refresh",-1608309116)], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__64098_64249) : re_frame.core.dispatch.call(null,G__64098_64249));

var G__64099 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("hackernews-reframe.events","set-active-panel","hackernews-reframe.events/set-active-panel",-1692528511),new cljs.core.Keyword(null,"user-panel","user-panel",-1191871898)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__64099) : re_frame.core.dispatch.call(null,G__64099));
} else {
if(cljs.core.vector_QMARK_(params__63471__auto__)){
var vec__64100 = params__63471__auto__;
var G__64103_64250 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("hackernews-reframe.events","start-headers","hackernews-reframe.events/start-headers",644899362)], null);
(re_frame.core.dispatch_sync.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch_sync.cljs$core$IFn$_invoke$arity$1(G__64103_64250) : re_frame.core.dispatch_sync.call(null,G__64103_64250));

var G__64104_64251 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("hackernews-reframe.events","refresh","hackernews-reframe.events/refresh",-1608309116)], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__64104_64251) : re_frame.core.dispatch.call(null,G__64104_64251));

var G__64105 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("hackernews-reframe.events","set-active-panel","hackernews-reframe.events/set-active-panel",-1692528511),new cljs.core.Keyword(null,"user-panel","user-panel",-1191871898)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__64105) : re_frame.core.dispatch.call(null,G__64105));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/user",action__63470__auto___64247);

hackernews_reframe.routes.user = (function hackernews_reframe$routes$app_routes_$_user(var_args){
var args__4742__auto__ = [];
var len__4736__auto___64252 = arguments.length;
var i__4737__auto___64253 = (0);
while(true){
if((i__4737__auto___64253 < len__4736__auto___64252)){
args__4742__auto__.push((arguments[i__4737__auto___64253]));

var G__64254 = (i__4737__auto___64253 + (1));
i__4737__auto___64253 = G__64254;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return hackernews_reframe.routes.user.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(hackernews_reframe.routes.user.cljs$core$IFn$_invoke$arity$variadic = (function (args__63469__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(secretary.core.render_route_STAR_,"/user",args__63469__auto__);
}));

(hackernews_reframe.routes.user.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(hackernews_reframe.routes.user.cljs$lang$applyTo = (function (seq64106){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq64106));
}));


var action__63470__auto___64255 = (function (params__63471__auto__){
if(cljs.core.map_QMARK_(params__63471__auto__)){
var map__64107 = params__63471__auto__;
var map__64107__$1 = (((((!((map__64107 == null))))?(((((map__64107.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64107.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64107):map__64107);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64107__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var G__64113_64258 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("hackernews-reframe.events","start-headers","hackernews-reframe.events/start-headers",644899362)], null);
(re_frame.core.dispatch_sync.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch_sync.cljs$core$IFn$_invoke$arity$1(G__64113_64258) : re_frame.core.dispatch_sync.call(null,G__64113_64258));

var G__64114_64259 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("hackernews-reframe.events","refresh","hackernews-reframe.events/refresh",-1608309116)], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__64114_64259) : re_frame.core.dispatch.call(null,G__64114_64259));

var G__64115_64260 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("hackernews-reframe.events","clean-user-info","hackernews-reframe.events/clean-user-info",-412044907)], null);
(re_frame.core.dispatch_sync.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch_sync.cljs$core$IFn$_invoke$arity$1(G__64115_64260) : re_frame.core.dispatch_sync.call(null,G__64115_64260));

var G__64116_64265 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("hackernews-reframe.events","get-user-info-by-name","hackernews-reframe.events/get-user-info-by-name",-2133052751),name], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__64116_64265) : re_frame.core.dispatch.call(null,G__64116_64265));

var G__64117 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("hackernews-reframe.events","set-active-panel","hackernews-reframe.events/set-active-panel",-1692528511),new cljs.core.Keyword(null,"generic-user-panel","generic-user-panel",-1675134530)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__64117) : re_frame.core.dispatch.call(null,G__64117));
} else {
if(cljs.core.vector_QMARK_(params__63471__auto__)){
var vec__64118 = params__63471__auto__;
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64118,(0),null);
var G__64121_64266 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("hackernews-reframe.events","start-headers","hackernews-reframe.events/start-headers",644899362)], null);
(re_frame.core.dispatch_sync.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch_sync.cljs$core$IFn$_invoke$arity$1(G__64121_64266) : re_frame.core.dispatch_sync.call(null,G__64121_64266));

var G__64122_64267 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("hackernews-reframe.events","refresh","hackernews-reframe.events/refresh",-1608309116)], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__64122_64267) : re_frame.core.dispatch.call(null,G__64122_64267));

var G__64123_64268 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("hackernews-reframe.events","clean-user-info","hackernews-reframe.events/clean-user-info",-412044907)], null);
(re_frame.core.dispatch_sync.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch_sync.cljs$core$IFn$_invoke$arity$1(G__64123_64268) : re_frame.core.dispatch_sync.call(null,G__64123_64268));

var G__64124_64269 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("hackernews-reframe.events","get-user-info-by-name","hackernews-reframe.events/get-user-info-by-name",-2133052751),name], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__64124_64269) : re_frame.core.dispatch.call(null,G__64124_64269));

var G__64125 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("hackernews-reframe.events","set-active-panel","hackernews-reframe.events/set-active-panel",-1692528511),new cljs.core.Keyword(null,"generic-user-panel","generic-user-panel",-1675134530)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__64125) : re_frame.core.dispatch.call(null,G__64125));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/hn-user/:name",action__63470__auto___64255);

hackernews_reframe.routes.hn_user = (function hackernews_reframe$routes$app_routes_$_hn_user(var_args){
var args__4742__auto__ = [];
var len__4736__auto___64270 = arguments.length;
var i__4737__auto___64271 = (0);
while(true){
if((i__4737__auto___64271 < len__4736__auto___64270)){
args__4742__auto__.push((arguments[i__4737__auto___64271]));

var G__64272 = (i__4737__auto___64271 + (1));
i__4737__auto___64271 = G__64272;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return hackernews_reframe.routes.hn_user.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(hackernews_reframe.routes.hn_user.cljs$core$IFn$_invoke$arity$variadic = (function (args__63469__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(secretary.core.render_route_STAR_,"/hn-user/:name",args__63469__auto__);
}));

(hackernews_reframe.routes.hn_user.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(hackernews_reframe.routes.hn_user.cljs$lang$applyTo = (function (seq64126){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq64126));
}));


return hackernews_reframe.routes.hook_browser_navigation_BANG_();
});

//# sourceMappingURL=hackernews_reframe.routes.js.map
