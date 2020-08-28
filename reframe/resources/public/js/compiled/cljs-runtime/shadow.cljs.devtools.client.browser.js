goog.provide('shadow.cljs.devtools.client.browser');
goog.require('cljs.core');
goog.require('cljs.reader');
goog.require('clojure.string');
goog.require('goog.dom');
goog.require('goog.userAgent.product');
goog.require('goog.Uri');
goog.require('goog.net.XhrIo');
goog.require('shadow.cljs.devtools.client.env');
goog.require('shadow.cljs.devtools.client.console');
goog.require('shadow.cljs.devtools.client.hud');
goog.require('clojure.set');
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.repl_ns_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.repl_ns_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.socket_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.socket_ref = cljs.core.volatile_BANG_(null);
}
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__4742__auto__ = [];
var len__4736__auto___60362 = arguments.length;
var i__4737__auto___60367 = (0);
while(true){
if((i__4737__auto___60367 < len__4736__auto___60362)){
args__4742__auto__.push((arguments[i__4737__auto___60367]));

var G__60370 = (i__4737__auto___60367 + (1));
i__4737__auto___60367 = G__60370;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
if(cljs.core.seq(shadow.cljs.devtools.client.env.log_style)){
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["%c\uD83E\uDC36 shadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''),shadow.cljs.devtools.client.env.log_style], null),args)));
} else {
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["shadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join('')], null),args)));
}
}));

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq60106){
var G__60107 = cljs.core.first(seq60106);
var seq60106__$1 = cljs.core.next(seq60106);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__60107,seq60106__$1);
}));

shadow.cljs.devtools.client.browser.ws_msg = (function shadow$cljs$devtools$client$browser$ws_msg(msg){
var temp__5733__auto__ = cljs.core.deref(shadow.cljs.devtools.client.browser.socket_ref);
if(cljs.core.truth_(temp__5733__auto__)){
var s = temp__5733__auto__;
return s.send(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0)));
} else {
return console.warn("WEBSOCKET NOT CONNECTED",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0)));
}
});
shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__60108 = cljs.core.seq(sources);
var chunk__60109 = null;
var count__60110 = (0);
var i__60111 = (0);
while(true){
if((i__60111 < count__60110)){
var map__60135 = chunk__60109.cljs$core$IIndexed$_nth$arity$2(null,i__60111);
var map__60135__$1 = (((((!((map__60135 == null))))?(((((map__60135.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60135.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60135):map__60135);
var src = map__60135__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60135__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60135__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60135__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60135__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''));
}catch (e60138){var e_60385 = e60138;
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_60385);

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_60385.message)].join('')));
}

var G__60386 = seq__60108;
var G__60387 = chunk__60109;
var G__60388 = count__60110;
var G__60389 = (i__60111 + (1));
seq__60108 = G__60386;
chunk__60109 = G__60387;
count__60110 = G__60388;
i__60111 = G__60389;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__60108);
if(temp__5735__auto__){
var seq__60108__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__60108__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__60108__$1);
var G__60395 = cljs.core.chunk_rest(seq__60108__$1);
var G__60396 = c__4556__auto__;
var G__60397 = cljs.core.count(c__4556__auto__);
var G__60398 = (0);
seq__60108 = G__60395;
chunk__60109 = G__60396;
count__60110 = G__60397;
i__60111 = G__60398;
continue;
} else {
var map__60141 = cljs.core.first(seq__60108__$1);
var map__60141__$1 = (((((!((map__60141 == null))))?(((((map__60141.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60141.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60141):map__60141);
var src = map__60141__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60141__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60141__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60141__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60141__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''));
}catch (e60144){var e_60405 = e60144;
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_60405);

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_60405.message)].join('')));
}

var G__60406 = cljs.core.next(seq__60108__$1);
var G__60407 = null;
var G__60408 = (0);
var G__60409 = (0);
seq__60108 = G__60406;
chunk__60109 = G__60407;
count__60110 = G__60408;
i__60111 = G__60409;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.do_js_reload = (function shadow$cljs$devtools$client$browser$do_js_reload(msg,sources,complete_fn,failure_fn){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(msg,new cljs.core.Keyword(null,"log-missing-fn","log-missing-fn",732676765),(function (fn_sym){
return null;
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"log-call-async","log-call-async",183826192),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call async ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),new cljs.core.Keyword(null,"log-call","log-call",412404391),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
})], 0)),(function (){
return shadow.cljs.devtools.client.browser.do_js_load(sources);
}),complete_fn,failure_fn);
});
/**
 * when (require '["some-str" :as x]) is done at the REPL we need to manually call the shadow.js.require for it
 * since the file only adds the shadow$provide. only need to do this for shadow-js.
 */
shadow.cljs.devtools.client.browser.do_js_requires = (function shadow$cljs$devtools$client$browser$do_js_requires(js_requires){
var seq__60148 = cljs.core.seq(js_requires);
var chunk__60149 = null;
var count__60150 = (0);
var i__60151 = (0);
while(true){
if((i__60151 < count__60150)){
var js_ns = chunk__60149.cljs$core$IIndexed$_nth$arity$2(null,i__60151);
var require_str_60414 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_60414);


var G__60415 = seq__60148;
var G__60416 = chunk__60149;
var G__60417 = count__60150;
var G__60418 = (i__60151 + (1));
seq__60148 = G__60415;
chunk__60149 = G__60416;
count__60150 = G__60417;
i__60151 = G__60418;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__60148);
if(temp__5735__auto__){
var seq__60148__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__60148__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__60148__$1);
var G__60419 = cljs.core.chunk_rest(seq__60148__$1);
var G__60420 = c__4556__auto__;
var G__60421 = cljs.core.count(c__4556__auto__);
var G__60422 = (0);
seq__60148 = G__60419;
chunk__60149 = G__60420;
count__60150 = G__60421;
i__60151 = G__60422;
continue;
} else {
var js_ns = cljs.core.first(seq__60148__$1);
var require_str_60423 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_60423);


var G__60424 = cljs.core.next(seq__60148__$1);
var G__60425 = null;
var G__60426 = (0);
var G__60427 = (0);
seq__60148 = G__60424;
chunk__60149 = G__60425;
count__60150 = G__60426;
i__60151 = G__60427;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.load_sources = (function shadow$cljs$devtools$client$browser$load_sources(sources,callback){
if(cljs.core.empty_QMARK_(sources)){
var G__60156 = cljs.core.PersistentVector.EMPTY;
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(G__60156) : callback.call(null,G__60156));
} else {
return goog.net.XhrIo.send(shadow.cljs.devtools.client.env.files_url(),(function (res){
var req = this;
var content = cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(req.getResponseText());
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(content) : callback.call(null,content));
}),"POST",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"client","client",-1323448117),new cljs.core.Keyword(null,"browser","browser",828191719),new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources)], null)], 0)),({"content-type": "application/edn; charset=utf-8"}));
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(p__60160){
var map__60161 = p__60160;
var map__60161__$1 = (((((!((map__60161 == null))))?(((((map__60161.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60161.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60161):map__60161);
var msg = map__60161__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60161__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60161__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__4529__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__60164(s__60165){
return (new cljs.core.LazySeq(null,(function (){
var s__60165__$1 = s__60165;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__60165__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var map__60170 = cljs.core.first(xs__6292__auto__);
var map__60170__$1 = (((((!((map__60170 == null))))?(((((map__60170.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60170.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60170):map__60170);
var src = map__60170__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60170__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60170__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__4525__auto__ = ((function (s__60165__$1,map__60170,map__60170__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__60161,map__60161__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__60164_$_iter__60166(s__60167){
return (new cljs.core.LazySeq(null,((function (s__60165__$1,map__60170,map__60170__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__60161,map__60161__$1,msg,info,reload_info){
return (function (){
var s__60167__$1 = s__60167;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__60167__$1);
if(temp__5735__auto____$1){
var s__60167__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__60167__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__60167__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__60169 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__60168 = (0);
while(true){
if((i__60168 < size__4528__auto__)){
var warning = cljs.core._nth(c__4527__auto__,i__60168);
cljs.core.chunk_append(b__60169,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__60453 = (i__60168 + (1));
i__60168 = G__60453;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__60169),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__60164_$_iter__60166(cljs.core.chunk_rest(s__60167__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__60169),null);
}
} else {
var warning = cljs.core.first(s__60167__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__60164_$_iter__60166(cljs.core.rest(s__60167__$2)));
}
} else {
return null;
}
break;
}
});})(s__60165__$1,map__60170,map__60170__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__60161,map__60161__$1,msg,info,reload_info))
,null,null));
});})(s__60165__$1,map__60170,map__60170__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__60161,map__60161__$1,msg,info,reload_info))
;
var fs__4526__auto__ = cljs.core.seq(iterys__4525__auto__(warnings));
if(fs__4526__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4526__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__60164(cljs.core.rest(s__60165__$1)));
} else {
var G__60456 = cljs.core.rest(s__60165__$1);
s__60165__$1 = G__60456;
continue;
}
} else {
var G__60457 = cljs.core.rest(s__60165__$1);
s__60165__$1 = G__60457;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(info));
})()));
var seq__60175_60459 = cljs.core.seq(warnings);
var chunk__60176_60460 = null;
var count__60177_60461 = (0);
var i__60178_60462 = (0);
while(true){
if((i__60178_60462 < count__60177_60461)){
var map__60183_60466 = chunk__60176_60460.cljs$core$IIndexed$_nth$arity$2(null,i__60178_60462);
var map__60183_60467__$1 = (((((!((map__60183_60466 == null))))?(((((map__60183_60466.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60183_60466.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60183_60466):map__60183_60466);
var w_60468 = map__60183_60467__$1;
var msg_60469__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60183_60467__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_60470 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60183_60467__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_60471 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60183_60467__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_60472 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60183_60467__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_60472)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_60470),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_60471),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_60469__$1)].join(''));


var G__60478 = seq__60175_60459;
var G__60479 = chunk__60176_60460;
var G__60480 = count__60177_60461;
var G__60481 = (i__60178_60462 + (1));
seq__60175_60459 = G__60478;
chunk__60176_60460 = G__60479;
count__60177_60461 = G__60480;
i__60178_60462 = G__60481;
continue;
} else {
var temp__5735__auto___60483 = cljs.core.seq(seq__60175_60459);
if(temp__5735__auto___60483){
var seq__60175_60484__$1 = temp__5735__auto___60483;
if(cljs.core.chunked_seq_QMARK_(seq__60175_60484__$1)){
var c__4556__auto___60485 = cljs.core.chunk_first(seq__60175_60484__$1);
var G__60487 = cljs.core.chunk_rest(seq__60175_60484__$1);
var G__60488 = c__4556__auto___60485;
var G__60489 = cljs.core.count(c__4556__auto___60485);
var G__60490 = (0);
seq__60175_60459 = G__60487;
chunk__60176_60460 = G__60488;
count__60177_60461 = G__60489;
i__60178_60462 = G__60490;
continue;
} else {
var map__60185_60496 = cljs.core.first(seq__60175_60484__$1);
var map__60185_60497__$1 = (((((!((map__60185_60496 == null))))?(((((map__60185_60496.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60185_60496.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60185_60496):map__60185_60496);
var w_60498 = map__60185_60497__$1;
var msg_60499__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60185_60497__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_60500 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60185_60497__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_60501 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60185_60497__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_60502 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60185_60497__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_60502)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_60500),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_60501),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_60499__$1)].join(''));


var G__60504 = cljs.core.next(seq__60175_60484__$1);
var G__60505 = null;
var G__60506 = (0);
var G__60507 = (0);
seq__60175_60459 = G__60504;
chunk__60176_60460 = G__60505;
count__60177_60461 = G__60506;
i__60178_60462 = G__60507;
continue;
}
} else {
}
}
break;
}

if((!(shadow.cljs.devtools.client.env.autoload))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))){
var sources_to_get = shadow.cljs.devtools.client.env.filter_reload_sources(info,reload_info);
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.browser.load_sources(sources_to_get,(function (p1__60158_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__60158_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
}));
}
} else {
return null;
}
}
});
shadow.cljs.devtools.client.browser.page_load_uri = (cljs.core.truth_(goog.global.document)?goog.Uri.parse(document.location.href):null);
shadow.cljs.devtools.client.browser.match_paths = (function shadow$cljs$devtools$client$browser$match_paths(old,new$){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("file",shadow.cljs.devtools.client.browser.page_load_uri.getScheme())){
var rel_new = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(new$,(1));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,rel_new)) || (clojure.string.starts_with_QMARK_(old,[rel_new,"?"].join(''))))){
return rel_new;
} else {
return null;
}
} else {
var node_uri = goog.Uri.parse(old);
var node_uri_resolved = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri);
var node_abs = node_uri_resolved.getPath();
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())))){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$)){
return new$;
} else {
return false;
}
} else {
return false;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_watch = (function shadow$cljs$devtools$client$browser$handle_asset_watch(p__60192){
var map__60193 = p__60192;
var map__60193__$1 = (((((!((map__60193 == null))))?(((((map__60193.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60193.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60193):map__60193);
var msg = map__60193__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60193__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var seq__60195 = cljs.core.seq(updates);
var chunk__60197 = null;
var count__60198 = (0);
var i__60199 = (0);
while(true){
if((i__60199 < count__60198)){
var path = chunk__60197.cljs$core$IIndexed$_nth$arity$2(null,i__60199);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__60239_60517 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__60242_60518 = null;
var count__60243_60519 = (0);
var i__60244_60520 = (0);
while(true){
if((i__60244_60520 < count__60243_60519)){
var node_60523 = chunk__60242_60518.cljs$core$IIndexed$_nth$arity$2(null,i__60244_60520);
var path_match_60524 = shadow.cljs.devtools.client.browser.match_paths(node_60523.getAttribute("href"),path);
if(cljs.core.truth_(path_match_60524)){
var new_link_60525 = (function (){var G__60253 = node_60523.cloneNode(true);
G__60253.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_60524),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__60253;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_60524], 0));

goog.dom.insertSiblingAfter(new_link_60525,node_60523);

goog.dom.removeNode(node_60523);


var G__60526 = seq__60239_60517;
var G__60527 = chunk__60242_60518;
var G__60528 = count__60243_60519;
var G__60529 = (i__60244_60520 + (1));
seq__60239_60517 = G__60526;
chunk__60242_60518 = G__60527;
count__60243_60519 = G__60528;
i__60244_60520 = G__60529;
continue;
} else {
var G__60530 = seq__60239_60517;
var G__60531 = chunk__60242_60518;
var G__60532 = count__60243_60519;
var G__60533 = (i__60244_60520 + (1));
seq__60239_60517 = G__60530;
chunk__60242_60518 = G__60531;
count__60243_60519 = G__60532;
i__60244_60520 = G__60533;
continue;
}
} else {
var temp__5735__auto___60534 = cljs.core.seq(seq__60239_60517);
if(temp__5735__auto___60534){
var seq__60239_60535__$1 = temp__5735__auto___60534;
if(cljs.core.chunked_seq_QMARK_(seq__60239_60535__$1)){
var c__4556__auto___60536 = cljs.core.chunk_first(seq__60239_60535__$1);
var G__60537 = cljs.core.chunk_rest(seq__60239_60535__$1);
var G__60538 = c__4556__auto___60536;
var G__60539 = cljs.core.count(c__4556__auto___60536);
var G__60540 = (0);
seq__60239_60517 = G__60537;
chunk__60242_60518 = G__60538;
count__60243_60519 = G__60539;
i__60244_60520 = G__60540;
continue;
} else {
var node_60542 = cljs.core.first(seq__60239_60535__$1);
var path_match_60543 = shadow.cljs.devtools.client.browser.match_paths(node_60542.getAttribute("href"),path);
if(cljs.core.truth_(path_match_60543)){
var new_link_60548 = (function (){var G__60256 = node_60542.cloneNode(true);
G__60256.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_60543),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__60256;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_60543], 0));

goog.dom.insertSiblingAfter(new_link_60548,node_60542);

goog.dom.removeNode(node_60542);


var G__60553 = cljs.core.next(seq__60239_60535__$1);
var G__60554 = null;
var G__60555 = (0);
var G__60556 = (0);
seq__60239_60517 = G__60553;
chunk__60242_60518 = G__60554;
count__60243_60519 = G__60555;
i__60244_60520 = G__60556;
continue;
} else {
var G__60557 = cljs.core.next(seq__60239_60535__$1);
var G__60558 = null;
var G__60559 = (0);
var G__60560 = (0);
seq__60239_60517 = G__60557;
chunk__60242_60518 = G__60558;
count__60243_60519 = G__60559;
i__60244_60520 = G__60560;
continue;
}
}
} else {
}
}
break;
}


var G__60561 = seq__60195;
var G__60562 = chunk__60197;
var G__60563 = count__60198;
var G__60564 = (i__60199 + (1));
seq__60195 = G__60561;
chunk__60197 = G__60562;
count__60198 = G__60563;
i__60199 = G__60564;
continue;
} else {
var G__60570 = seq__60195;
var G__60571 = chunk__60197;
var G__60572 = count__60198;
var G__60573 = (i__60199 + (1));
seq__60195 = G__60570;
chunk__60197 = G__60571;
count__60198 = G__60572;
i__60199 = G__60573;
continue;
}
} else {
var temp__5735__auto__ = cljs.core.seq(seq__60195);
if(temp__5735__auto__){
var seq__60195__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__60195__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__60195__$1);
var G__60584 = cljs.core.chunk_rest(seq__60195__$1);
var G__60585 = c__4556__auto__;
var G__60586 = cljs.core.count(c__4556__auto__);
var G__60587 = (0);
seq__60195 = G__60584;
chunk__60197 = G__60585;
count__60198 = G__60586;
i__60199 = G__60587;
continue;
} else {
var path = cljs.core.first(seq__60195__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__60261_60596 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__60264_60597 = null;
var count__60265_60598 = (0);
var i__60266_60599 = (0);
while(true){
if((i__60266_60599 < count__60265_60598)){
var node_60600 = chunk__60264_60597.cljs$core$IIndexed$_nth$arity$2(null,i__60266_60599);
var path_match_60601 = shadow.cljs.devtools.client.browser.match_paths(node_60600.getAttribute("href"),path);
if(cljs.core.truth_(path_match_60601)){
var new_link_60602 = (function (){var G__60281 = node_60600.cloneNode(true);
G__60281.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_60601),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__60281;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_60601], 0));

goog.dom.insertSiblingAfter(new_link_60602,node_60600);

goog.dom.removeNode(node_60600);


var G__60608 = seq__60261_60596;
var G__60609 = chunk__60264_60597;
var G__60610 = count__60265_60598;
var G__60611 = (i__60266_60599 + (1));
seq__60261_60596 = G__60608;
chunk__60264_60597 = G__60609;
count__60265_60598 = G__60610;
i__60266_60599 = G__60611;
continue;
} else {
var G__60612 = seq__60261_60596;
var G__60613 = chunk__60264_60597;
var G__60614 = count__60265_60598;
var G__60615 = (i__60266_60599 + (1));
seq__60261_60596 = G__60612;
chunk__60264_60597 = G__60613;
count__60265_60598 = G__60614;
i__60266_60599 = G__60615;
continue;
}
} else {
var temp__5735__auto___60616__$1 = cljs.core.seq(seq__60261_60596);
if(temp__5735__auto___60616__$1){
var seq__60261_60617__$1 = temp__5735__auto___60616__$1;
if(cljs.core.chunked_seq_QMARK_(seq__60261_60617__$1)){
var c__4556__auto___60618 = cljs.core.chunk_first(seq__60261_60617__$1);
var G__60619 = cljs.core.chunk_rest(seq__60261_60617__$1);
var G__60620 = c__4556__auto___60618;
var G__60621 = cljs.core.count(c__4556__auto___60618);
var G__60622 = (0);
seq__60261_60596 = G__60619;
chunk__60264_60597 = G__60620;
count__60265_60598 = G__60621;
i__60266_60599 = G__60622;
continue;
} else {
var node_60623 = cljs.core.first(seq__60261_60617__$1);
var path_match_60624 = shadow.cljs.devtools.client.browser.match_paths(node_60623.getAttribute("href"),path);
if(cljs.core.truth_(path_match_60624)){
var new_link_60625 = (function (){var G__60285 = node_60623.cloneNode(true);
G__60285.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_60624),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__60285;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_60624], 0));

goog.dom.insertSiblingAfter(new_link_60625,node_60623);

goog.dom.removeNode(node_60623);


var G__60626 = cljs.core.next(seq__60261_60617__$1);
var G__60627 = null;
var G__60628 = (0);
var G__60629 = (0);
seq__60261_60596 = G__60626;
chunk__60264_60597 = G__60627;
count__60265_60598 = G__60628;
i__60266_60599 = G__60629;
continue;
} else {
var G__60630 = cljs.core.next(seq__60261_60617__$1);
var G__60631 = null;
var G__60632 = (0);
var G__60633 = (0);
seq__60261_60596 = G__60630;
chunk__60264_60597 = G__60631;
count__60265_60598 = G__60632;
i__60266_60599 = G__60633;
continue;
}
}
} else {
}
}
break;
}


var G__60634 = cljs.core.next(seq__60195__$1);
var G__60635 = null;
var G__60636 = (0);
var G__60637 = (0);
seq__60195 = G__60634;
chunk__60197 = G__60635;
count__60198 = G__60636;
i__60199 = G__60637;
continue;
} else {
var G__60638 = cljs.core.next(seq__60195__$1);
var G__60639 = null;
var G__60640 = (0);
var G__60641 = (0);
seq__60195 = G__60638;
chunk__60197 = G__60639;
count__60198 = G__60640;
i__60199 = G__60641;
continue;
}
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.get_ua_product = (function shadow$cljs$devtools$client$browser$get_ua_product(){
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
});
shadow.cljs.devtools.client.browser.get_asset_root = (function shadow$cljs$devtools$client$browser$get_asset_root(){
var loc = (new goog.Uri(document.location.href));
var cbp = (new goog.Uri(CLOSURE_BASE_PATH));
var s = loc.resolve(cbp).toString();
return clojure.string.replace(s,/^file:\//,"file:///");
});
shadow.cljs.devtools.client.browser.repl_error = (function shadow$cljs$devtools$client$browser$repl_error(e){
console.error("repl/invoke error",e);

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(shadow.cljs.devtools.client.env.repl_error(e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),shadow.cljs.devtools.client.browser.get_ua_product(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"asset-root","asset-root",1771735072),shadow.cljs.devtools.client.browser.get_asset_root()], 0));
});
shadow.cljs.devtools.client.browser.global_eval = (function shadow$cljs$devtools$client$browser$global_eval(js){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("undefined",typeof(module))){
return eval(js);
} else {
return (0,eval)(js);;
}
});
shadow.cljs.devtools.client.browser.repl_invoke = (function shadow$cljs$devtools$client$browser$repl_invoke(p__60298){
var map__60299 = p__60298;
var map__60299__$1 = (((((!((map__60299 == null))))?(((((map__60299.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60299.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60299):map__60299);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60299__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60299__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var result = shadow.cljs.devtools.client.env.repl_call((function (){
return shadow.cljs.devtools.client.browser.global_eval(js);
}),shadow.cljs.devtools.client.browser.repl_error);
return shadow.cljs.devtools.client.browser.ws_msg(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result,new cljs.core.Keyword(null,"id","id",-1388402092),id));
});
shadow.cljs.devtools.client.browser.repl_require = (function shadow$cljs$devtools$client$browser$repl_require(p__60307,done){
var map__60308 = p__60307;
var map__60308__$1 = (((((!((map__60308 == null))))?(((((map__60308.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60308.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60308):map__60308);
var msg = map__60308__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60308__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60308__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60308__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60308__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__60315){
var map__60316 = p__60315;
var map__60316__$1 = (((((!((map__60316 == null))))?(((((map__60316.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60316.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60316):map__60316);
var src = map__60316__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60316__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__4115__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__4115__auto__;
}
}),sources));
return shadow.cljs.devtools.client.browser.load_sources(sources_to_load,(function (sources__$1){
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","require-complete","repl/require-complete",-2140254719),new cljs.core.Keyword(null,"id","id",-1388402092),id], null));
}catch (e60323){var e = e60323;
return shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","require-error","repl/require-error",1689310021),new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"error","error",-978969032),e.message], null));
}finally {(done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}}));
});
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(p__60326,done){
var map__60328 = p__60326;
var map__60328__$1 = (((((!((map__60328 == null))))?(((((map__60328.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60328.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60328):map__60328);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60328__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60328__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return shadow.cljs.devtools.client.browser.load_sources(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535).cljs$core$IFn$_invoke$arity$1(repl_state))),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","init-complete","repl/init-complete",-162252879),new cljs.core.Keyword(null,"id","id",-1388402092),id], null));

shadow.cljs.devtools.client.browser.devtools_msg("REPL session start successful");

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
});
shadow.cljs.devtools.client.browser.repl_set_ns = (function shadow$cljs$devtools$client$browser$repl_set_ns(p__60333){
var map__60334 = p__60333;
var map__60334__$1 = (((((!((map__60334 == null))))?(((((map__60334.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60334.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60334):map__60334);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60334__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60334__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
return shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","set-ns-complete","repl/set-ns-complete",680944662),new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"ns","ns",441598760),ns], null));
});
shadow.cljs.devtools.client.browser.close_reason_ref = cljs.core.volatile_BANG_(null);
shadow.cljs.devtools.client.browser.stale_client_detected = cljs.core.volatile_BANG_(false);
shadow.cljs.devtools.client.browser.handle_message = (function shadow$cljs$devtools$client$browser$handle_message(p__60336,done){
var map__60339 = p__60336;
var map__60339__$1 = (((((!((map__60339 == null))))?(((((map__60339.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60339.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60339):map__60339);
var msg = map__60339__$1;
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60339__$1,new cljs.core.Keyword(null,"type","type",1174270348));
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

var G__60343_60719 = type;
var G__60343_60720__$1 = (((G__60343_60719 instanceof cljs.core.Keyword))?G__60343_60719.fqn:null);
switch (G__60343_60720__$1) {
case "asset-watch":
shadow.cljs.devtools.client.browser.handle_asset_watch(msg);

break;
case "repl/invoke":
shadow.cljs.devtools.client.browser.repl_invoke(msg);

break;
case "repl/require":
shadow.cljs.devtools.client.browser.repl_require(msg,done);

break;
case "repl/set-ns":
shadow.cljs.devtools.client.browser.repl_set_ns(msg);

break;
case "repl/init":
shadow.cljs.devtools.client.browser.repl_init(msg,done);

break;
case "repl/session-start":
shadow.cljs.devtools.client.browser.repl_init(msg,done);

break;
case "repl/ping":
shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","pong","repl/pong",-166610159),new cljs.core.Keyword(null,"time-server","time-server",786726561),new cljs.core.Keyword(null,"time-server","time-server",786726561).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"time-runtime","time-runtime",-40294923),Date.now()], null));

break;
case "build-complete":
shadow.cljs.devtools.client.hud.hud_warnings(msg);

shadow.cljs.devtools.client.browser.handle_build_complete(msg);

break;
case "build-failure":
shadow.cljs.devtools.client.hud.load_end();

shadow.cljs.devtools.client.hud.hud_error(msg);

break;
case "build-init":
shadow.cljs.devtools.client.hud.hud_warnings(msg);

break;
case "build-start":
shadow.cljs.devtools.client.hud.hud_hide();

shadow.cljs.devtools.client.hud.load_start();

break;
case "pong":

break;
case "client/stale":
cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.stale_client_detected,true);

cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.close_reason_ref,"Stale Client! You are not using the latest compilation output!");

break;
case "client/no-worker":
cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.stale_client_detected,true);

cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.close_reason_ref,["watch for build \"",shadow.cljs.devtools.client.env.build_id,"\" not running"].join(''));

break;
case "custom-msg":
shadow.cljs.devtools.client.env.publish_BANG_(new cljs.core.Keyword(null,"payload","payload",-383036092).cljs$core$IFn$_invoke$arity$1(msg));

break;
default:

}

if(cljs.core.contains_QMARK_(shadow.cljs.devtools.client.env.async_ops,type)){
return null;
} else {
return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}
});
shadow.cljs.devtools.client.browser.compile = (function shadow$cljs$devtools$client$browser$compile(text,callback){
return goog.net.XhrIo.send(["http",((shadow.cljs.devtools.client.env.ssl)?"s":null),"://",shadow.cljs.devtools.client.env.server_host,":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.env.server_port),"/worker/compile/",shadow.cljs.devtools.client.env.build_id,"/",shadow.cljs.devtools.client.env.proc_id,"/browser"].join(''),(function (res){
var req = this;
var actions = cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(req.getResponseText());
if(cljs.core.truth_(callback)){
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(actions) : callback.call(null,actions));
} else {
return null;
}
}),"POST",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"input","input",556931961),text], null)], 0)),({"content-type": "application/edn; charset=utf-8"}));
});
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.ws_status !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.ws_status = cljs.core.volatile_BANG_(new cljs.core.Keyword(null,"init","init",-1875481434));
}
shadow.cljs.devtools.client.browser.ws_connect = (function shadow$cljs$devtools$client$browser$ws_connect(){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1((function (){var fexpr__60344 = cljs.core.deref(shadow.cljs.devtools.client.browser.ws_status);
return (fexpr__60344.cljs$core$IFn$_invoke$arity$1 ? fexpr__60344.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"init","init",-1875481434)) : fexpr__60344.call(null,new cljs.core.Keyword(null,"init","init",-1875481434)));
})())){
return (shadow.cljs.devtools.client.browser.ws_connect_impl.cljs$core$IFn$_invoke$arity$0 ? shadow.cljs.devtools.client.browser.ws_connect_impl.cljs$core$IFn$_invoke$arity$0() : shadow.cljs.devtools.client.browser.ws_connect_impl.call(null));
} else {
return null;
}
});
shadow.cljs.devtools.client.browser.maybe_reconnect = (function shadow$cljs$devtools$client$browser$maybe_reconnect(){
if(((cljs.core.not(cljs.core.deref(shadow.cljs.devtools.client.browser.stale_client_detected))) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.cljs.devtools.client.browser.ws_status),new cljs.core.Keyword(null,"init","init",-1875481434))))){
cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.ws_status,new cljs.core.Keyword(null,"init","init",-1875481434));

return setTimeout(shadow.cljs.devtools.client.browser.ws_connect,(3000));
} else {
return null;
}
});
shadow.cljs.devtools.client.browser.ws_connect_impl = (function shadow$cljs$devtools$client$browser$ws_connect_impl(){
cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.ws_status,new cljs.core.Keyword(null,"connecting","connecting",-1347943866));

try{var print_fn = cljs.core._STAR_print_fn_STAR_;
var ws_url = shadow.cljs.devtools.client.env.ws_url(new cljs.core.Keyword(null,"browser","browser",828191719));
var socket = (new WebSocket(ws_url));
cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.socket_ref,socket);

(socket.onmessage = (function (e){
return shadow.cljs.devtools.client.env.process_ws_msg(e.data,shadow.cljs.devtools.client.browser.handle_message);
}));

(socket.onopen = (function (e){
cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.ws_status,new cljs.core.Keyword(null,"connected","connected",-169833045));

shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.close_reason_ref,null);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("goog",shadow.cljs.devtools.client.env.module_format)){
(goog.provide = goog.constructNamespace_);
} else {
}

shadow.cljs.devtools.client.env.set_print_fns_BANG_(shadow.cljs.devtools.client.browser.ws_msg);

return shadow.cljs.devtools.client.browser.devtools_msg("WebSocket connected!");
}));

(socket.onclose = (function (e){
shadow.cljs.devtools.client.browser.devtools_msg("WebSocket disconnected!");

shadow.cljs.devtools.client.hud.connection_error((function (){var or__4126__auto__ = cljs.core.deref(shadow.cljs.devtools.client.browser.close_reason_ref);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return "Connection closed!";
}
})());

cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.socket_ref,null);

shadow.cljs.devtools.client.env.reset_print_fns_BANG_();

return shadow.cljs.devtools.client.browser.maybe_reconnect();
}));

return (socket.onerror = (function (e){
shadow.cljs.devtools.client.hud.connection_error("Connection failed!");

shadow.cljs.devtools.client.browser.maybe_reconnect();

return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("websocket error",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([e], 0));
}));
}catch (e60347){var e = e60347;
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("WebSocket setup failed",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([e], 0));
}});
if(shadow.cljs.devtools.client.env.enabled){
var temp__5735__auto___60740 = cljs.core.deref(shadow.cljs.devtools.client.browser.socket_ref);
if(cljs.core.truth_(temp__5735__auto___60740)){
var s_60741 = temp__5735__auto___60740;
shadow.cljs.devtools.client.browser.devtools_msg("connection reset!");

(s_60741.onclose = (function (e){
return null;
}));

s_60741.close();

cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.socket_ref,null);
} else {
}

if(cljs.core.truth_(goog.global.window)){
window.addEventListener("beforeunload",(function (){
var temp__5735__auto__ = cljs.core.deref(shadow.cljs.devtools.client.browser.socket_ref);
if(cljs.core.truth_(temp__5735__auto__)){
var s = temp__5735__auto__;
return s.close();
} else {
return null;
}
}));
} else {
}

if(cljs.core.truth_((function (){var and__4115__auto__ = goog.global.document;
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("loading",goog.global.document.readyState);
} else {
return and__4115__auto__;
}
})())){
window.addEventListener("DOMContentLoaded",shadow.cljs.devtools.client.browser.ws_connect);
} else {
setTimeout(shadow.cljs.devtools.client.browser.ws_connect,(10));
}
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
