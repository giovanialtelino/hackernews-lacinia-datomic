goog.provide('cljs_http.core');
goog.require('cljs.core');
goog.require('goog.net.EventType');
goog.require('goog.net.ErrorCode');
goog.require('goog.net.XhrIo');
goog.require('goog.net.Jsonp');
goog.require('cljs_http.util');
goog.require('cljs.core.async');
goog.require('clojure.string');
cljs_http.core.pending_requests = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
/**
 * Attempt to close the given channel and abort the pending HTTP request
 *   with which it is associated.
 */
cljs_http.core.abort_BANG_ = (function cljs_http$core$abort_BANG_(channel){
var temp__5735__auto__ = (function (){var fexpr__62694 = cljs.core.deref(cljs_http.core.pending_requests);
return (fexpr__62694.cljs$core$IFn$_invoke$arity$1 ? fexpr__62694.cljs$core$IFn$_invoke$arity$1(channel) : fexpr__62694.call(null,channel));
})();
if(cljs.core.truth_(temp__5735__auto__)){
var req = temp__5735__auto__;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cljs_http.core.pending_requests,cljs.core.dissoc,channel);

cljs.core.async.close_BANG_(channel);

if(cljs.core.truth_(req.hasOwnProperty("abort"))){
return req.abort();
} else {
return new cljs.core.Keyword(null,"jsonp","jsonp",226119588).cljs$core$IFn$_invoke$arity$1(req).cancel(new cljs.core.Keyword(null,"request","request",1772954723).cljs$core$IFn$_invoke$arity$1(req));
}
} else {
return null;
}
});
cljs_http.core.aborted_QMARK_ = (function cljs_http$core$aborted_QMARK_(xhr){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(xhr.getLastErrorCode(),goog.net.ErrorCode.ABORT);
});
/**
 * Takes an XhrIo object and applies the default-headers to it.
 */
cljs_http.core.apply_default_headers_BANG_ = (function cljs_http$core$apply_default_headers_BANG_(xhr,headers){
var formatted_h = cljs.core.zipmap(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs_http.util.camelize,cljs.core.keys(headers)),cljs.core.vals(headers));
return cljs.core.dorun.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__62697){
var vec__62698 = p__62697;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62698,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62698,(1),null);
return xhr.headers.set(k,v);
}),formatted_h));
});
/**
 * Takes an XhrIo object and sets response-type if not nil.
 */
cljs_http.core.apply_response_type_BANG_ = (function cljs_http$core$apply_response_type_BANG_(xhr,response_type){
return xhr.setResponseType((function (){var G__62704 = response_type;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"array-buffer","array-buffer",519008380),G__62704)){
return goog.net.XhrIo.ResponseType.ARRAY_BUFFER;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"blob","blob",1636965233),G__62704)){
return goog.net.XhrIo.ResponseType.BLOB;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"document","document",-1329188687),G__62704)){
return goog.net.XhrIo.ResponseType.DOCUMENT;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"text","text",-1790561697),G__62704)){
return goog.net.XhrIo.ResponseType.TEXT;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"default","default",-1987822328),G__62704)){
return goog.net.XhrIo.ResponseType.DEFAULT;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(null,G__62704)){
return goog.net.XhrIo.ResponseType.DEFAULT;
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__62704)].join('')));

}
}
}
}
}
}
})());
});
/**
 * Builds an XhrIo object from the request parameters.
 */
cljs_http.core.build_xhr = (function cljs_http$core$build_xhr(p__62726){
var map__62727 = p__62726;
var map__62727__$1 = (((((!((map__62727 == null))))?(((((map__62727.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62727.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62727):map__62727);
var request = map__62727__$1;
var with_credentials_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62727__$1,new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222));
var default_headers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62727__$1,new cljs.core.Keyword(null,"default-headers","default-headers",-43146094));
var response_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62727__$1,new cljs.core.Keyword(null,"response-type","response-type",-1493770458));
var timeout = (function (){var or__4126__auto__ = new cljs.core.Keyword(null,"timeout","timeout",-318625318).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (0);
}
})();
var send_credentials = (((with_credentials_QMARK_ == null))?true:with_credentials_QMARK_);
var G__62734 = (new goog.net.XhrIo());
cljs_http.core.apply_default_headers_BANG_(G__62734,default_headers);

cljs_http.core.apply_response_type_BANG_(G__62734,response_type);

G__62734.setTimeoutInterval(timeout);

G__62734.setWithCredentials(send_credentials);

return G__62734;
});
cljs_http.core.error_kw = cljs.core.PersistentHashMap.fromArrays([(0),(7),(1),(4),(6),(3),(2),(9),(5),(8)],[new cljs.core.Keyword(null,"no-error","no-error",1984610064),new cljs.core.Keyword(null,"abort","abort",521193198),new cljs.core.Keyword(null,"access-denied","access-denied",959449406),new cljs.core.Keyword(null,"custom-error","custom-error",-1565161123),new cljs.core.Keyword(null,"http-error","http-error",-1040049553),new cljs.core.Keyword(null,"ff-silent-error","ff-silent-error",189390514),new cljs.core.Keyword(null,"file-not-found","file-not-found",-65398940),new cljs.core.Keyword(null,"offline","offline",-107631935),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"timeout","timeout",-318625318)]);
/**
 * Execute the HTTP request corresponding to the given Ring request
 *   map and return a core.async channel.
 */
cljs_http.core.xhr = (function cljs_http$core$xhr(p__62736){
var map__62738 = p__62736;
var map__62738__$1 = (((((!((map__62738 == null))))?(((((map__62738.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62738.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62738):map__62738);
var request = map__62738__$1;
var request_method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62738__$1,new cljs.core.Keyword(null,"request-method","request-method",1764796830));
var headers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62738__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62738__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var with_credentials_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62738__$1,new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222));
var cancel = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62738__$1,new cljs.core.Keyword(null,"cancel","cancel",-1964088360));
var progress = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62738__$1,new cljs.core.Keyword(null,"progress","progress",244323547));
var channel = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var request_url = cljs_http.util.build_url(request);
var method = cljs.core.name((function (){var or__4126__auto__ = request_method;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return new cljs.core.Keyword(null,"get","get",1683182755);
}
})());
var headers__$1 = cljs_http.util.build_headers(headers);
var xhr = cljs_http.core.build_xhr(request);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs_http.core.pending_requests,cljs.core.assoc,channel,xhr);

xhr.listen(goog.net.EventType.COMPLETE,(function (evt){
var target = evt.target;
var response = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"status","status",-1997798413),target.getStatus(),new cljs.core.Keyword(null,"success","success",1890645906),target.isSuccess(),new cljs.core.Keyword(null,"body","body",-2049205669),target.getResponse(),new cljs.core.Keyword(null,"headers","headers",-835030129),cljs_http.util.parse_headers(target.getAllResponseHeaders()),new cljs.core.Keyword(null,"trace-redirects","trace-redirects",-1149427907),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [request_url,target.getLastUri()], null),new cljs.core.Keyword(null,"error-code","error-code",180497232),(function (){var G__62746 = target.getLastErrorCode();
return (cljs_http.core.error_kw.cljs$core$IFn$_invoke$arity$1 ? cljs_http.core.error_kw.cljs$core$IFn$_invoke$arity$1(G__62746) : cljs_http.core.error_kw.call(null,G__62746));
})(),new cljs.core.Keyword(null,"error-text","error-text",2021893718),target.getLastError()], null);
if((!(cljs_http.core.aborted_QMARK_(xhr)))){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(channel,response);
} else {
}

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cljs_http.core.pending_requests,cljs.core.dissoc,channel);

if(cljs.core.truth_(cancel)){
cljs.core.async.close_BANG_(cancel);
} else {
}

return cljs.core.async.close_BANG_(channel);
}));

if(cljs.core.truth_(progress)){
var listener_62843 = (function (direction,evt){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(progress,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"direction","direction",-633359395),direction,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),evt.loaded], null),(cljs.core.truth_(evt.lengthComputable)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"total","total",1916810418),evt.total], null):null)], 0)));
});
var G__62757_62844 = xhr;
G__62757_62844.setProgressEventsEnabled(true);

G__62757_62844.listen(goog.net.EventType.UPLOAD_PROGRESS,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(listener_62843,new cljs.core.Keyword(null,"upload","upload",-255769218)));

G__62757_62844.listen(goog.net.EventType.DOWNLOAD_PROGRESS,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(listener_62843,new cljs.core.Keyword(null,"download","download",-300081668)));

} else {
}

xhr.send(request_url,method,body,headers__$1);

if(cljs.core.truth_(cancel)){
var c__56581__auto___62845 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__56582__auto__ = (function (){var switch__56532__auto__ = (function (state_62768){
var state_val_62769 = (state_62768[(1)]);
if((state_val_62769 === (1))){
var state_62768__$1 = state_62768;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_62768__$1,(2),cancel);
} else {
if((state_val_62769 === (2))){
var inst_62759 = (state_62768[(2)]);
var inst_62760 = xhr.isComplete();
var inst_62761 = cljs.core.not(inst_62760);
var state_62768__$1 = (function (){var statearr_62770 = state_62768;
(statearr_62770[(7)] = inst_62759);

return statearr_62770;
})();
if(inst_62761){
var statearr_62771_62848 = state_62768__$1;
(statearr_62771_62848[(1)] = (3));

} else {
var statearr_62772_62849 = state_62768__$1;
(statearr_62772_62849[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62769 === (3))){
var inst_62763 = xhr.abort();
var state_62768__$1 = state_62768;
var statearr_62773_62850 = state_62768__$1;
(statearr_62773_62850[(2)] = inst_62763);

(statearr_62773_62850[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62769 === (4))){
var state_62768__$1 = state_62768;
var statearr_62774_62852 = state_62768__$1;
(statearr_62774_62852[(2)] = null);

(statearr_62774_62852[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62769 === (5))){
var inst_62766 = (state_62768[(2)]);
var state_62768__$1 = state_62768;
return cljs.core.async.impl.ioc_helpers.return_chan(state_62768__$1,inst_62766);
} else {
return null;
}
}
}
}
}
});
return (function() {
var cljs_http$core$xhr_$_state_machine__56533__auto__ = null;
var cljs_http$core$xhr_$_state_machine__56533__auto____0 = (function (){
var statearr_62775 = [null,null,null,null,null,null,null,null];
(statearr_62775[(0)] = cljs_http$core$xhr_$_state_machine__56533__auto__);

(statearr_62775[(1)] = (1));

return statearr_62775;
});
var cljs_http$core$xhr_$_state_machine__56533__auto____1 = (function (state_62768){
while(true){
var ret_value__56534__auto__ = (function (){try{while(true){
var result__56535__auto__ = switch__56532__auto__(state_62768);
if(cljs.core.keyword_identical_QMARK_(result__56535__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__56535__auto__;
}
break;
}
}catch (e62776){var ex__56536__auto__ = e62776;
var statearr_62777_62857 = state_62768;
(statearr_62777_62857[(2)] = ex__56536__auto__);


if(cljs.core.seq((state_62768[(4)]))){
var statearr_62778_62858 = state_62768;
(statearr_62778_62858[(1)] = cljs.core.first((state_62768[(4)])));

} else {
throw ex__56536__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__56534__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__62859 = state_62768;
state_62768 = G__62859;
continue;
} else {
return ret_value__56534__auto__;
}
break;
}
});
cljs_http$core$xhr_$_state_machine__56533__auto__ = function(state_62768){
switch(arguments.length){
case 0:
return cljs_http$core$xhr_$_state_machine__56533__auto____0.call(this);
case 1:
return cljs_http$core$xhr_$_state_machine__56533__auto____1.call(this,state_62768);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs_http$core$xhr_$_state_machine__56533__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_http$core$xhr_$_state_machine__56533__auto____0;
cljs_http$core$xhr_$_state_machine__56533__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_http$core$xhr_$_state_machine__56533__auto____1;
return cljs_http$core$xhr_$_state_machine__56533__auto__;
})()
})();
var state__56583__auto__ = (function (){var statearr_62780 = f__56582__auto__();
(statearr_62780[(6)] = c__56581__auto___62845);

return statearr_62780;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__56583__auto__);
}));

} else {
}

return channel;
});
/**
 * Execute the JSONP request corresponding to the given Ring request
 *   map and return a core.async channel.
 */
cljs_http.core.jsonp = (function cljs_http$core$jsonp(p__62781){
var map__62782 = p__62781;
var map__62782__$1 = (((((!((map__62782 == null))))?(((((map__62782.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62782.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62782):map__62782);
var request = map__62782__$1;
var timeout = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62782__$1,new cljs.core.Keyword(null,"timeout","timeout",-318625318));
var callback_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62782__$1,new cljs.core.Keyword(null,"callback-name","callback-name",336964714));
var cancel = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62782__$1,new cljs.core.Keyword(null,"cancel","cancel",-1964088360));
var keywordize_keys_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__62782__$1,new cljs.core.Keyword(null,"keywordize-keys?","keywordize-keys?",-254545987),true);
var channel = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var jsonp = (new goog.net.Jsonp(cljs_http.util.build_url(request),callback_name));
jsonp.setRequestTimeout(timeout);

var req_62870 = jsonp.send(null,(function cljs_http$core$jsonp_$_success_callback(data){
var response = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),(200),new cljs.core.Keyword(null,"success","success",1890645906),true,new cljs.core.Keyword(null,"body","body",-2049205669),cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(data,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),keywordize_keys_QMARK_], 0))], null);
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(channel,response);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cljs_http.core.pending_requests,cljs.core.dissoc,channel);

if(cljs.core.truth_(cancel)){
cljs.core.async.close_BANG_(cancel);
} else {
}

return cljs.core.async.close_BANG_(channel);
}),(function cljs_http$core$jsonp_$_error_callback(){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cljs_http.core.pending_requests,cljs.core.dissoc,channel);

if(cljs.core.truth_(cancel)){
cljs.core.async.close_BANG_(cancel);
} else {
}

return cljs.core.async.close_BANG_(channel);
}));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs_http.core.pending_requests,cljs.core.assoc,channel,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"jsonp","jsonp",226119588),jsonp,new cljs.core.Keyword(null,"request","request",1772954723),req_62870], null));

if(cljs.core.truth_(cancel)){
var c__56581__auto___62875 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__56582__auto__ = (function (){var switch__56532__auto__ = (function (state_62801){
var state_val_62802 = (state_62801[(1)]);
if((state_val_62802 === (1))){
var state_62801__$1 = state_62801;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_62801__$1,(2),cancel);
} else {
if((state_val_62802 === (2))){
var inst_62798 = (state_62801[(2)]);
var inst_62799 = jsonp.cancel(req_62870);
var state_62801__$1 = (function (){var statearr_62811 = state_62801;
(statearr_62811[(7)] = inst_62798);

return statearr_62811;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_62801__$1,inst_62799);
} else {
return null;
}
}
});
return (function() {
var cljs_http$core$jsonp_$_state_machine__56533__auto__ = null;
var cljs_http$core$jsonp_$_state_machine__56533__auto____0 = (function (){
var statearr_62812 = [null,null,null,null,null,null,null,null];
(statearr_62812[(0)] = cljs_http$core$jsonp_$_state_machine__56533__auto__);

(statearr_62812[(1)] = (1));

return statearr_62812;
});
var cljs_http$core$jsonp_$_state_machine__56533__auto____1 = (function (state_62801){
while(true){
var ret_value__56534__auto__ = (function (){try{while(true){
var result__56535__auto__ = switch__56532__auto__(state_62801);
if(cljs.core.keyword_identical_QMARK_(result__56535__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__56535__auto__;
}
break;
}
}catch (e62813){var ex__56536__auto__ = e62813;
var statearr_62814_62877 = state_62801;
(statearr_62814_62877[(2)] = ex__56536__auto__);


if(cljs.core.seq((state_62801[(4)]))){
var statearr_62815_62878 = state_62801;
(statearr_62815_62878[(1)] = cljs.core.first((state_62801[(4)])));

} else {
throw ex__56536__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__56534__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__62879 = state_62801;
state_62801 = G__62879;
continue;
} else {
return ret_value__56534__auto__;
}
break;
}
});
cljs_http$core$jsonp_$_state_machine__56533__auto__ = function(state_62801){
switch(arguments.length){
case 0:
return cljs_http$core$jsonp_$_state_machine__56533__auto____0.call(this);
case 1:
return cljs_http$core$jsonp_$_state_machine__56533__auto____1.call(this,state_62801);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs_http$core$jsonp_$_state_machine__56533__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_http$core$jsonp_$_state_machine__56533__auto____0;
cljs_http$core$jsonp_$_state_machine__56533__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_http$core$jsonp_$_state_machine__56533__auto____1;
return cljs_http$core$jsonp_$_state_machine__56533__auto__;
})()
})();
var state__56583__auto__ = (function (){var statearr_62816 = f__56582__auto__();
(statearr_62816[(6)] = c__56581__auto___62875);

return statearr_62816;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__56583__auto__);
}));

} else {
}

return channel;
});
/**
 * Execute the HTTP request corresponding to the given Ring request
 *   map and return a core.async channel.
 */
cljs_http.core.request = (function cljs_http$core$request(p__62819){
var map__62820 = p__62819;
var map__62820__$1 = (((((!((map__62820 == null))))?(((((map__62820.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62820.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62820):map__62820);
var request = map__62820__$1;
var request_method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62820__$1,new cljs.core.Keyword(null,"request-method","request-method",1764796830));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(request_method,new cljs.core.Keyword(null,"jsonp","jsonp",226119588))){
return cljs_http.core.jsonp(request);
} else {
return cljs_http.core.xhr(request);
}
});

//# sourceMappingURL=cljs_http.core.js.map
