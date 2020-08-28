goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('goog.array');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__56661 = arguments.length;
switch (G__56661) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async56662 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async56662 = (function (f,blockable,meta56663){
this.f = f;
this.blockable = blockable;
this.meta56663 = meta56663;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async56662.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_56664,meta56663__$1){
var self__ = this;
var _56664__$1 = this;
return (new cljs.core.async.t_cljs$core$async56662(self__.f,self__.blockable,meta56663__$1));
}));

(cljs.core.async.t_cljs$core$async56662.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_56664){
var self__ = this;
var _56664__$1 = this;
return self__.meta56663;
}));

(cljs.core.async.t_cljs$core$async56662.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async56662.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async56662.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async56662.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async56662.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta56663","meta56663",834617098,null)], null);
}));

(cljs.core.async.t_cljs$core$async56662.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async56662.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async56662");

(cljs.core.async.t_cljs$core$async56662.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async56662");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async56662.
 */
cljs.core.async.__GT_t_cljs$core$async56662 = (function cljs$core$async$__GT_t_cljs$core$async56662(f__$1,blockable__$1,meta56663){
return (new cljs.core.async.t_cljs$core$async56662(f__$1,blockable__$1,meta56663));
});

}

return (new cljs.core.async.t_cljs$core$async56662(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__56667 = arguments.length;
switch (G__56667) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__56669 = arguments.length;
switch (G__56669) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__56671 = arguments.length;
switch (G__56671) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_58174 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_58174) : fn1.call(null,val_58174));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_58174) : fn1.call(null,val_58174));
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__56673 = arguments.length;
switch (G__56673) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5733__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5733__auto__)){
var ret = temp__5733__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5733__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5733__auto__)){
var retb = temp__5733__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4613__auto___58182 = n;
var x_58183 = (0);
while(true){
if((x_58183 < n__4613__auto___58182)){
(a[x_58183] = x_58183);

var G__58184 = (x_58183 + (1));
x_58183 = G__58184;
continue;
} else {
}
break;
}

goog.array.shuffle(a);

return a;
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async56674 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async56674 = (function (flag,meta56675){
this.flag = flag;
this.meta56675 = meta56675;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async56674.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_56676,meta56675__$1){
var self__ = this;
var _56676__$1 = this;
return (new cljs.core.async.t_cljs$core$async56674(self__.flag,meta56675__$1));
}));

(cljs.core.async.t_cljs$core$async56674.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_56676){
var self__ = this;
var _56676__$1 = this;
return self__.meta56675;
}));

(cljs.core.async.t_cljs$core$async56674.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async56674.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async56674.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async56674.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async56674.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta56675","meta56675",-505331072,null)], null);
}));

(cljs.core.async.t_cljs$core$async56674.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async56674.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async56674");

(cljs.core.async.t_cljs$core$async56674.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async56674");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async56674.
 */
cljs.core.async.__GT_t_cljs$core$async56674 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async56674(flag__$1,meta56675){
return (new cljs.core.async.t_cljs$core$async56674(flag__$1,meta56675));
});

}

return (new cljs.core.async.t_cljs$core$async56674(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async56677 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async56677 = (function (flag,cb,meta56678){
this.flag = flag;
this.cb = cb;
this.meta56678 = meta56678;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async56677.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_56679,meta56678__$1){
var self__ = this;
var _56679__$1 = this;
return (new cljs.core.async.t_cljs$core$async56677(self__.flag,self__.cb,meta56678__$1));
}));

(cljs.core.async.t_cljs$core$async56677.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_56679){
var self__ = this;
var _56679__$1 = this;
return self__.meta56678;
}));

(cljs.core.async.t_cljs$core$async56677.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async56677.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async56677.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async56677.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async56677.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta56678","meta56678",-366556186,null)], null);
}));

(cljs.core.async.t_cljs$core$async56677.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async56677.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async56677");

(cljs.core.async.t_cljs$core$async56677.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async56677");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async56677.
 */
cljs.core.async.__GT_t_cljs$core$async56677 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async56677(flag__$1,cb__$1,meta56678){
return (new cljs.core.async.t_cljs$core$async56677(flag__$1,cb__$1,meta56678));
});

}

return (new cljs.core.async.t_cljs$core$async56677(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count(ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__56680_SHARP_){
var G__56682 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__56680_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__56682) : fret.call(null,G__56682));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__56681_SHARP_){
var G__56683 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__56681_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__56683) : fret.call(null,G__56683));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__4126__auto__ = wport;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return port;
}
})()], null));
} else {
var G__58211 = (i + (1));
i = G__58211;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4126__auto__ = ret;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5735__auto__ = (function (){var and__4115__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__4115__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__4115__auto__;
}
})();
if(cljs.core.truth_(temp__5735__auto__)){
var got = temp__5735__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___58215 = arguments.length;
var i__4737__auto___58217 = (0);
while(true){
if((i__4737__auto___58217 < len__4736__auto___58215)){
args__4742__auto__.push((arguments[i__4737__auto___58217]));

var G__58218 = (i__4737__auto___58217 + (1));
i__4737__auto___58217 = G__58218;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__56686){
var map__56687 = p__56686;
var map__56687__$1 = (((((!((map__56687 == null))))?(((((map__56687.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56687.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56687):map__56687);
var opts = map__56687__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq56684){
var G__56685 = cljs.core.first(seq56684);
var seq56684__$1 = cljs.core.next(seq56684);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__56685,seq56684__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__56690 = arguments.length;
switch (G__56690) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__56581__auto___58224 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__56582__auto__ = (function (){var switch__56532__auto__ = (function (state_56714){
var state_val_56715 = (state_56714[(1)]);
if((state_val_56715 === (7))){
var inst_56710 = (state_56714[(2)]);
var state_56714__$1 = state_56714;
var statearr_56716_58227 = state_56714__$1;
(statearr_56716_58227[(2)] = inst_56710);

(statearr_56716_58227[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56715 === (1))){
var state_56714__$1 = state_56714;
var statearr_56717_58228 = state_56714__$1;
(statearr_56717_58228[(2)] = null);

(statearr_56717_58228[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56715 === (4))){
var inst_56693 = (state_56714[(7)]);
var inst_56693__$1 = (state_56714[(2)]);
var inst_56694 = (inst_56693__$1 == null);
var state_56714__$1 = (function (){var statearr_56718 = state_56714;
(statearr_56718[(7)] = inst_56693__$1);

return statearr_56718;
})();
if(cljs.core.truth_(inst_56694)){
var statearr_56719_58229 = state_56714__$1;
(statearr_56719_58229[(1)] = (5));

} else {
var statearr_56720_58230 = state_56714__$1;
(statearr_56720_58230[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56715 === (13))){
var state_56714__$1 = state_56714;
var statearr_56721_58231 = state_56714__$1;
(statearr_56721_58231[(2)] = null);

(statearr_56721_58231[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56715 === (6))){
var inst_56693 = (state_56714[(7)]);
var state_56714__$1 = state_56714;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_56714__$1,(11),to,inst_56693);
} else {
if((state_val_56715 === (3))){
var inst_56712 = (state_56714[(2)]);
var state_56714__$1 = state_56714;
return cljs.core.async.impl.ioc_helpers.return_chan(state_56714__$1,inst_56712);
} else {
if((state_val_56715 === (12))){
var state_56714__$1 = state_56714;
var statearr_56722_58234 = state_56714__$1;
(statearr_56722_58234[(2)] = null);

(statearr_56722_58234[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56715 === (2))){
var state_56714__$1 = state_56714;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_56714__$1,(4),from);
} else {
if((state_val_56715 === (11))){
var inst_56703 = (state_56714[(2)]);
var state_56714__$1 = state_56714;
if(cljs.core.truth_(inst_56703)){
var statearr_56723_58235 = state_56714__$1;
(statearr_56723_58235[(1)] = (12));

} else {
var statearr_56724_58236 = state_56714__$1;
(statearr_56724_58236[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56715 === (9))){
var state_56714__$1 = state_56714;
var statearr_56725_58237 = state_56714__$1;
(statearr_56725_58237[(2)] = null);

(statearr_56725_58237[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56715 === (5))){
var state_56714__$1 = state_56714;
if(cljs.core.truth_(close_QMARK_)){
var statearr_56726_58238 = state_56714__$1;
(statearr_56726_58238[(1)] = (8));

} else {
var statearr_56727_58239 = state_56714__$1;
(statearr_56727_58239[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56715 === (14))){
var inst_56708 = (state_56714[(2)]);
var state_56714__$1 = state_56714;
var statearr_56728_58240 = state_56714__$1;
(statearr_56728_58240[(2)] = inst_56708);

(statearr_56728_58240[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56715 === (10))){
var inst_56700 = (state_56714[(2)]);
var state_56714__$1 = state_56714;
var statearr_56729_58241 = state_56714__$1;
(statearr_56729_58241[(2)] = inst_56700);

(statearr_56729_58241[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56715 === (8))){
var inst_56697 = cljs.core.async.close_BANG_(to);
var state_56714__$1 = state_56714;
var statearr_56730_58243 = state_56714__$1;
(statearr_56730_58243[(2)] = inst_56697);

(statearr_56730_58243[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__56533__auto__ = null;
var cljs$core$async$state_machine__56533__auto____0 = (function (){
var statearr_56731 = [null,null,null,null,null,null,null,null];
(statearr_56731[(0)] = cljs$core$async$state_machine__56533__auto__);

(statearr_56731[(1)] = (1));

return statearr_56731;
});
var cljs$core$async$state_machine__56533__auto____1 = (function (state_56714){
while(true){
var ret_value__56534__auto__ = (function (){try{while(true){
var result__56535__auto__ = switch__56532__auto__(state_56714);
if(cljs.core.keyword_identical_QMARK_(result__56535__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__56535__auto__;
}
break;
}
}catch (e56732){var ex__56536__auto__ = e56732;
var statearr_56733_58245 = state_56714;
(statearr_56733_58245[(2)] = ex__56536__auto__);


if(cljs.core.seq((state_56714[(4)]))){
var statearr_56734_58246 = state_56714;
(statearr_56734_58246[(1)] = cljs.core.first((state_56714[(4)])));

} else {
throw ex__56536__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__56534__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__58255 = state_56714;
state_56714 = G__58255;
continue;
} else {
return ret_value__56534__auto__;
}
break;
}
});
cljs$core$async$state_machine__56533__auto__ = function(state_56714){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__56533__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__56533__auto____1.call(this,state_56714);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__56533__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__56533__auto____0;
cljs$core$async$state_machine__56533__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__56533__auto____1;
return cljs$core$async$state_machine__56533__auto__;
})()
})();
var state__56583__auto__ = (function (){var statearr_56735 = f__56582__auto__();
(statearr_56735[(6)] = c__56581__auto___58224);

return statearr_56735;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__56583__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process = (function (p__56736){
var vec__56737 = p__56736;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56737,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56737,(1),null);
var job = vec__56737;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__56581__auto___58258 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__56582__auto__ = (function (){var switch__56532__auto__ = (function (state_56744){
var state_val_56745 = (state_56744[(1)]);
if((state_val_56745 === (1))){
var state_56744__$1 = state_56744;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_56744__$1,(2),res,v);
} else {
if((state_val_56745 === (2))){
var inst_56741 = (state_56744[(2)]);
var inst_56742 = cljs.core.async.close_BANG_(res);
var state_56744__$1 = (function (){var statearr_56746 = state_56744;
(statearr_56746[(7)] = inst_56741);

return statearr_56746;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_56744__$1,inst_56742);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__56533__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__56533__auto____0 = (function (){
var statearr_56747 = [null,null,null,null,null,null,null,null];
(statearr_56747[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__56533__auto__);

(statearr_56747[(1)] = (1));

return statearr_56747;
});
var cljs$core$async$pipeline_STAR__$_state_machine__56533__auto____1 = (function (state_56744){
while(true){
var ret_value__56534__auto__ = (function (){try{while(true){
var result__56535__auto__ = switch__56532__auto__(state_56744);
if(cljs.core.keyword_identical_QMARK_(result__56535__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__56535__auto__;
}
break;
}
}catch (e56748){var ex__56536__auto__ = e56748;
var statearr_56749_58263 = state_56744;
(statearr_56749_58263[(2)] = ex__56536__auto__);


if(cljs.core.seq((state_56744[(4)]))){
var statearr_56750_58264 = state_56744;
(statearr_56750_58264[(1)] = cljs.core.first((state_56744[(4)])));

} else {
throw ex__56536__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__56534__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__58265 = state_56744;
state_56744 = G__58265;
continue;
} else {
return ret_value__56534__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__56533__auto__ = function(state_56744){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__56533__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__56533__auto____1.call(this,state_56744);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__56533__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__56533__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__56533__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__56533__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__56533__auto__;
})()
})();
var state__56583__auto__ = (function (){var statearr_56751 = f__56582__auto__();
(statearr_56751[(6)] = c__56581__auto___58258);

return statearr_56751;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__56583__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__56752){
var vec__56753 = p__56752;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56753,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56753,(1),null);
var job = vec__56753;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var n__4613__auto___58266 = n;
var __58267 = (0);
while(true){
if((__58267 < n__4613__auto___58266)){
var G__56756_58268 = type;
var G__56756_58269__$1 = (((G__56756_58268 instanceof cljs.core.Keyword))?G__56756_58268.fqn:null);
switch (G__56756_58269__$1) {
case "compute":
var c__56581__auto___58271 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__58267,c__56581__auto___58271,G__56756_58268,G__56756_58269__$1,n__4613__auto___58266,jobs,results,process,async){
return (function (){
var f__56582__auto__ = (function (){var switch__56532__auto__ = ((function (__58267,c__56581__auto___58271,G__56756_58268,G__56756_58269__$1,n__4613__auto___58266,jobs,results,process,async){
return (function (state_56769){
var state_val_56770 = (state_56769[(1)]);
if((state_val_56770 === (1))){
var state_56769__$1 = state_56769;
var statearr_56771_58272 = state_56769__$1;
(statearr_56771_58272[(2)] = null);

(statearr_56771_58272[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56770 === (2))){
var state_56769__$1 = state_56769;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_56769__$1,(4),jobs);
} else {
if((state_val_56770 === (3))){
var inst_56767 = (state_56769[(2)]);
var state_56769__$1 = state_56769;
return cljs.core.async.impl.ioc_helpers.return_chan(state_56769__$1,inst_56767);
} else {
if((state_val_56770 === (4))){
var inst_56759 = (state_56769[(2)]);
var inst_56760 = process(inst_56759);
var state_56769__$1 = state_56769;
if(cljs.core.truth_(inst_56760)){
var statearr_56772_58275 = state_56769__$1;
(statearr_56772_58275[(1)] = (5));

} else {
var statearr_56773_58276 = state_56769__$1;
(statearr_56773_58276[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56770 === (5))){
var state_56769__$1 = state_56769;
var statearr_56774_58277 = state_56769__$1;
(statearr_56774_58277[(2)] = null);

(statearr_56774_58277[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56770 === (6))){
var state_56769__$1 = state_56769;
var statearr_56775_58278 = state_56769__$1;
(statearr_56775_58278[(2)] = null);

(statearr_56775_58278[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56770 === (7))){
var inst_56765 = (state_56769[(2)]);
var state_56769__$1 = state_56769;
var statearr_56776_58279 = state_56769__$1;
(statearr_56776_58279[(2)] = inst_56765);

(statearr_56776_58279[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__58267,c__56581__auto___58271,G__56756_58268,G__56756_58269__$1,n__4613__auto___58266,jobs,results,process,async))
;
return ((function (__58267,switch__56532__auto__,c__56581__auto___58271,G__56756_58268,G__56756_58269__$1,n__4613__auto___58266,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__56533__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__56533__auto____0 = (function (){
var statearr_56777 = [null,null,null,null,null,null,null];
(statearr_56777[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__56533__auto__);

(statearr_56777[(1)] = (1));

return statearr_56777;
});
var cljs$core$async$pipeline_STAR__$_state_machine__56533__auto____1 = (function (state_56769){
while(true){
var ret_value__56534__auto__ = (function (){try{while(true){
var result__56535__auto__ = switch__56532__auto__(state_56769);
if(cljs.core.keyword_identical_QMARK_(result__56535__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__56535__auto__;
}
break;
}
}catch (e56778){var ex__56536__auto__ = e56778;
var statearr_56779_58280 = state_56769;
(statearr_56779_58280[(2)] = ex__56536__auto__);


if(cljs.core.seq((state_56769[(4)]))){
var statearr_56780_58286 = state_56769;
(statearr_56780_58286[(1)] = cljs.core.first((state_56769[(4)])));

} else {
throw ex__56536__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__56534__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__58293 = state_56769;
state_56769 = G__58293;
continue;
} else {
return ret_value__56534__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__56533__auto__ = function(state_56769){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__56533__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__56533__auto____1.call(this,state_56769);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__56533__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__56533__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__56533__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__56533__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__56533__auto__;
})()
;})(__58267,switch__56532__auto__,c__56581__auto___58271,G__56756_58268,G__56756_58269__$1,n__4613__auto___58266,jobs,results,process,async))
})();
var state__56583__auto__ = (function (){var statearr_56781 = f__56582__auto__();
(statearr_56781[(6)] = c__56581__auto___58271);

return statearr_56781;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__56583__auto__);
});})(__58267,c__56581__auto___58271,G__56756_58268,G__56756_58269__$1,n__4613__auto___58266,jobs,results,process,async))
);


break;
case "async":
var c__56581__auto___58294 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__58267,c__56581__auto___58294,G__56756_58268,G__56756_58269__$1,n__4613__auto___58266,jobs,results,process,async){
return (function (){
var f__56582__auto__ = (function (){var switch__56532__auto__ = ((function (__58267,c__56581__auto___58294,G__56756_58268,G__56756_58269__$1,n__4613__auto___58266,jobs,results,process,async){
return (function (state_56794){
var state_val_56795 = (state_56794[(1)]);
if((state_val_56795 === (1))){
var state_56794__$1 = state_56794;
var statearr_56796_58299 = state_56794__$1;
(statearr_56796_58299[(2)] = null);

(statearr_56796_58299[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56795 === (2))){
var state_56794__$1 = state_56794;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_56794__$1,(4),jobs);
} else {
if((state_val_56795 === (3))){
var inst_56792 = (state_56794[(2)]);
var state_56794__$1 = state_56794;
return cljs.core.async.impl.ioc_helpers.return_chan(state_56794__$1,inst_56792);
} else {
if((state_val_56795 === (4))){
var inst_56784 = (state_56794[(2)]);
var inst_56785 = async(inst_56784);
var state_56794__$1 = state_56794;
if(cljs.core.truth_(inst_56785)){
var statearr_56797_58315 = state_56794__$1;
(statearr_56797_58315[(1)] = (5));

} else {
var statearr_56798_58316 = state_56794__$1;
(statearr_56798_58316[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56795 === (5))){
var state_56794__$1 = state_56794;
var statearr_56799_58317 = state_56794__$1;
(statearr_56799_58317[(2)] = null);

(statearr_56799_58317[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56795 === (6))){
var state_56794__$1 = state_56794;
var statearr_56800_58318 = state_56794__$1;
(statearr_56800_58318[(2)] = null);

(statearr_56800_58318[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56795 === (7))){
var inst_56790 = (state_56794[(2)]);
var state_56794__$1 = state_56794;
var statearr_56801_58321 = state_56794__$1;
(statearr_56801_58321[(2)] = inst_56790);

(statearr_56801_58321[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__58267,c__56581__auto___58294,G__56756_58268,G__56756_58269__$1,n__4613__auto___58266,jobs,results,process,async))
;
return ((function (__58267,switch__56532__auto__,c__56581__auto___58294,G__56756_58268,G__56756_58269__$1,n__4613__auto___58266,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__56533__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__56533__auto____0 = (function (){
var statearr_56802 = [null,null,null,null,null,null,null];
(statearr_56802[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__56533__auto__);

(statearr_56802[(1)] = (1));

return statearr_56802;
});
var cljs$core$async$pipeline_STAR__$_state_machine__56533__auto____1 = (function (state_56794){
while(true){
var ret_value__56534__auto__ = (function (){try{while(true){
var result__56535__auto__ = switch__56532__auto__(state_56794);
if(cljs.core.keyword_identical_QMARK_(result__56535__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__56535__auto__;
}
break;
}
}catch (e56803){var ex__56536__auto__ = e56803;
var statearr_56804_58329 = state_56794;
(statearr_56804_58329[(2)] = ex__56536__auto__);


if(cljs.core.seq((state_56794[(4)]))){
var statearr_56805_58331 = state_56794;
(statearr_56805_58331[(1)] = cljs.core.first((state_56794[(4)])));

} else {
throw ex__56536__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__56534__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__58332 = state_56794;
state_56794 = G__58332;
continue;
} else {
return ret_value__56534__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__56533__auto__ = function(state_56794){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__56533__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__56533__auto____1.call(this,state_56794);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__56533__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__56533__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__56533__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__56533__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__56533__auto__;
})()
;})(__58267,switch__56532__auto__,c__56581__auto___58294,G__56756_58268,G__56756_58269__$1,n__4613__auto___58266,jobs,results,process,async))
})();
var state__56583__auto__ = (function (){var statearr_56806 = f__56582__auto__();
(statearr_56806[(6)] = c__56581__auto___58294);

return statearr_56806;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__56583__auto__);
});})(__58267,c__56581__auto___58294,G__56756_58268,G__56756_58269__$1,n__4613__auto___58266,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__56756_58269__$1)].join('')));

}

var G__58336 = (__58267 + (1));
__58267 = G__58336;
continue;
} else {
}
break;
}

var c__56581__auto___58337 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__56582__auto__ = (function (){var switch__56532__auto__ = (function (state_56828){
var state_val_56829 = (state_56828[(1)]);
if((state_val_56829 === (7))){
var inst_56824 = (state_56828[(2)]);
var state_56828__$1 = state_56828;
var statearr_56830_58338 = state_56828__$1;
(statearr_56830_58338[(2)] = inst_56824);

(statearr_56830_58338[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56829 === (1))){
var state_56828__$1 = state_56828;
var statearr_56831_58342 = state_56828__$1;
(statearr_56831_58342[(2)] = null);

(statearr_56831_58342[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56829 === (4))){
var inst_56809 = (state_56828[(7)]);
var inst_56809__$1 = (state_56828[(2)]);
var inst_56810 = (inst_56809__$1 == null);
var state_56828__$1 = (function (){var statearr_56832 = state_56828;
(statearr_56832[(7)] = inst_56809__$1);

return statearr_56832;
})();
if(cljs.core.truth_(inst_56810)){
var statearr_56833_58344 = state_56828__$1;
(statearr_56833_58344[(1)] = (5));

} else {
var statearr_56834_58345 = state_56828__$1;
(statearr_56834_58345[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56829 === (6))){
var inst_56809 = (state_56828[(7)]);
var inst_56814 = (state_56828[(8)]);
var inst_56814__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_56815 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_56816 = [inst_56809,inst_56814__$1];
var inst_56817 = (new cljs.core.PersistentVector(null,2,(5),inst_56815,inst_56816,null));
var state_56828__$1 = (function (){var statearr_56835 = state_56828;
(statearr_56835[(8)] = inst_56814__$1);

return statearr_56835;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_56828__$1,(8),jobs,inst_56817);
} else {
if((state_val_56829 === (3))){
var inst_56826 = (state_56828[(2)]);
var state_56828__$1 = state_56828;
return cljs.core.async.impl.ioc_helpers.return_chan(state_56828__$1,inst_56826);
} else {
if((state_val_56829 === (2))){
var state_56828__$1 = state_56828;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_56828__$1,(4),from);
} else {
if((state_val_56829 === (9))){
var inst_56821 = (state_56828[(2)]);
var state_56828__$1 = (function (){var statearr_56836 = state_56828;
(statearr_56836[(9)] = inst_56821);

return statearr_56836;
})();
var statearr_56837_58346 = state_56828__$1;
(statearr_56837_58346[(2)] = null);

(statearr_56837_58346[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56829 === (5))){
var inst_56812 = cljs.core.async.close_BANG_(jobs);
var state_56828__$1 = state_56828;
var statearr_56838_58347 = state_56828__$1;
(statearr_56838_58347[(2)] = inst_56812);

(statearr_56838_58347[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56829 === (8))){
var inst_56814 = (state_56828[(8)]);
var inst_56819 = (state_56828[(2)]);
var state_56828__$1 = (function (){var statearr_56839 = state_56828;
(statearr_56839[(10)] = inst_56819);

return statearr_56839;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_56828__$1,(9),results,inst_56814);
} else {
return null;
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__56533__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__56533__auto____0 = (function (){
var statearr_56840 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_56840[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__56533__auto__);

(statearr_56840[(1)] = (1));

return statearr_56840;
});
var cljs$core$async$pipeline_STAR__$_state_machine__56533__auto____1 = (function (state_56828){
while(true){
var ret_value__56534__auto__ = (function (){try{while(true){
var result__56535__auto__ = switch__56532__auto__(state_56828);
if(cljs.core.keyword_identical_QMARK_(result__56535__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__56535__auto__;
}
break;
}
}catch (e56841){var ex__56536__auto__ = e56841;
var statearr_56842_58348 = state_56828;
(statearr_56842_58348[(2)] = ex__56536__auto__);


if(cljs.core.seq((state_56828[(4)]))){
var statearr_56843_58349 = state_56828;
(statearr_56843_58349[(1)] = cljs.core.first((state_56828[(4)])));

} else {
throw ex__56536__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__56534__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__58350 = state_56828;
state_56828 = G__58350;
continue;
} else {
return ret_value__56534__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__56533__auto__ = function(state_56828){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__56533__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__56533__auto____1.call(this,state_56828);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__56533__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__56533__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__56533__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__56533__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__56533__auto__;
})()
})();
var state__56583__auto__ = (function (){var statearr_56844 = f__56582__auto__();
(statearr_56844[(6)] = c__56581__auto___58337);

return statearr_56844;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__56583__auto__);
}));


var c__56581__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__56582__auto__ = (function (){var switch__56532__auto__ = (function (state_56882){
var state_val_56883 = (state_56882[(1)]);
if((state_val_56883 === (7))){
var inst_56878 = (state_56882[(2)]);
var state_56882__$1 = state_56882;
var statearr_56884_58351 = state_56882__$1;
(statearr_56884_58351[(2)] = inst_56878);

(statearr_56884_58351[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56883 === (20))){
var state_56882__$1 = state_56882;
var statearr_56885_58352 = state_56882__$1;
(statearr_56885_58352[(2)] = null);

(statearr_56885_58352[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56883 === (1))){
var state_56882__$1 = state_56882;
var statearr_56886_58353 = state_56882__$1;
(statearr_56886_58353[(2)] = null);

(statearr_56886_58353[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56883 === (4))){
var inst_56847 = (state_56882[(7)]);
var inst_56847__$1 = (state_56882[(2)]);
var inst_56848 = (inst_56847__$1 == null);
var state_56882__$1 = (function (){var statearr_56887 = state_56882;
(statearr_56887[(7)] = inst_56847__$1);

return statearr_56887;
})();
if(cljs.core.truth_(inst_56848)){
var statearr_56888_58354 = state_56882__$1;
(statearr_56888_58354[(1)] = (5));

} else {
var statearr_56889_58355 = state_56882__$1;
(statearr_56889_58355[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56883 === (15))){
var inst_56860 = (state_56882[(8)]);
var state_56882__$1 = state_56882;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_56882__$1,(18),to,inst_56860);
} else {
if((state_val_56883 === (21))){
var inst_56873 = (state_56882[(2)]);
var state_56882__$1 = state_56882;
var statearr_56890_58359 = state_56882__$1;
(statearr_56890_58359[(2)] = inst_56873);

(statearr_56890_58359[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56883 === (13))){
var inst_56875 = (state_56882[(2)]);
var state_56882__$1 = (function (){var statearr_56891 = state_56882;
(statearr_56891[(9)] = inst_56875);

return statearr_56891;
})();
var statearr_56892_58363 = state_56882__$1;
(statearr_56892_58363[(2)] = null);

(statearr_56892_58363[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56883 === (6))){
var inst_56847 = (state_56882[(7)]);
var state_56882__$1 = state_56882;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_56882__$1,(11),inst_56847);
} else {
if((state_val_56883 === (17))){
var inst_56868 = (state_56882[(2)]);
var state_56882__$1 = state_56882;
if(cljs.core.truth_(inst_56868)){
var statearr_56893_58365 = state_56882__$1;
(statearr_56893_58365[(1)] = (19));

} else {
var statearr_56894_58366 = state_56882__$1;
(statearr_56894_58366[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56883 === (3))){
var inst_56880 = (state_56882[(2)]);
var state_56882__$1 = state_56882;
return cljs.core.async.impl.ioc_helpers.return_chan(state_56882__$1,inst_56880);
} else {
if((state_val_56883 === (12))){
var inst_56857 = (state_56882[(10)]);
var state_56882__$1 = state_56882;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_56882__$1,(14),inst_56857);
} else {
if((state_val_56883 === (2))){
var state_56882__$1 = state_56882;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_56882__$1,(4),results);
} else {
if((state_val_56883 === (19))){
var state_56882__$1 = state_56882;
var statearr_56895_58368 = state_56882__$1;
(statearr_56895_58368[(2)] = null);

(statearr_56895_58368[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56883 === (11))){
var inst_56857 = (state_56882[(2)]);
var state_56882__$1 = (function (){var statearr_56896 = state_56882;
(statearr_56896[(10)] = inst_56857);

return statearr_56896;
})();
var statearr_56897_58370 = state_56882__$1;
(statearr_56897_58370[(2)] = null);

(statearr_56897_58370[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56883 === (9))){
var state_56882__$1 = state_56882;
var statearr_56898_58371 = state_56882__$1;
(statearr_56898_58371[(2)] = null);

(statearr_56898_58371[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56883 === (5))){
var state_56882__$1 = state_56882;
if(cljs.core.truth_(close_QMARK_)){
var statearr_56899_58372 = state_56882__$1;
(statearr_56899_58372[(1)] = (8));

} else {
var statearr_56900_58373 = state_56882__$1;
(statearr_56900_58373[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56883 === (14))){
var inst_56860 = (state_56882[(8)]);
var inst_56860__$1 = (state_56882[(2)]);
var inst_56861 = (inst_56860__$1 == null);
var inst_56862 = cljs.core.not(inst_56861);
var state_56882__$1 = (function (){var statearr_56901 = state_56882;
(statearr_56901[(8)] = inst_56860__$1);

return statearr_56901;
})();
if(inst_56862){
var statearr_56902_58374 = state_56882__$1;
(statearr_56902_58374[(1)] = (15));

} else {
var statearr_56903_58375 = state_56882__$1;
(statearr_56903_58375[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56883 === (16))){
var state_56882__$1 = state_56882;
var statearr_56904_58376 = state_56882__$1;
(statearr_56904_58376[(2)] = false);

(statearr_56904_58376[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56883 === (10))){
var inst_56854 = (state_56882[(2)]);
var state_56882__$1 = state_56882;
var statearr_56905_58377 = state_56882__$1;
(statearr_56905_58377[(2)] = inst_56854);

(statearr_56905_58377[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56883 === (18))){
var inst_56865 = (state_56882[(2)]);
var state_56882__$1 = state_56882;
var statearr_56906_58379 = state_56882__$1;
(statearr_56906_58379[(2)] = inst_56865);

(statearr_56906_58379[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56883 === (8))){
var inst_56851 = cljs.core.async.close_BANG_(to);
var state_56882__$1 = state_56882;
var statearr_56907_58383 = state_56882__$1;
(statearr_56907_58383[(2)] = inst_56851);

(statearr_56907_58383[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__56533__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__56533__auto____0 = (function (){
var statearr_56908 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_56908[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__56533__auto__);

(statearr_56908[(1)] = (1));

return statearr_56908;
});
var cljs$core$async$pipeline_STAR__$_state_machine__56533__auto____1 = (function (state_56882){
while(true){
var ret_value__56534__auto__ = (function (){try{while(true){
var result__56535__auto__ = switch__56532__auto__(state_56882);
if(cljs.core.keyword_identical_QMARK_(result__56535__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__56535__auto__;
}
break;
}
}catch (e56909){var ex__56536__auto__ = e56909;
var statearr_56910_58388 = state_56882;
(statearr_56910_58388[(2)] = ex__56536__auto__);


if(cljs.core.seq((state_56882[(4)]))){
var statearr_56911_58389 = state_56882;
(statearr_56911_58389[(1)] = cljs.core.first((state_56882[(4)])));

} else {
throw ex__56536__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__56534__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__58390 = state_56882;
state_56882 = G__58390;
continue;
} else {
return ret_value__56534__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__56533__auto__ = function(state_56882){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__56533__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__56533__auto____1.call(this,state_56882);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__56533__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__56533__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__56533__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__56533__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__56533__auto__;
})()
})();
var state__56583__auto__ = (function (){var statearr_56912 = f__56582__auto__();
(statearr_56912[(6)] = c__56581__auto__);

return statearr_56912;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__56583__auto__);
}));

return c__56581__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__56914 = arguments.length;
switch (G__56914) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__56916 = arguments.length;
switch (G__56916) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__56918 = arguments.length;
switch (G__56918) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__56581__auto___58407 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__56582__auto__ = (function (){var switch__56532__auto__ = (function (state_56944){
var state_val_56945 = (state_56944[(1)]);
if((state_val_56945 === (7))){
var inst_56940 = (state_56944[(2)]);
var state_56944__$1 = state_56944;
var statearr_56946_58414 = state_56944__$1;
(statearr_56946_58414[(2)] = inst_56940);

(statearr_56946_58414[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56945 === (1))){
var state_56944__$1 = state_56944;
var statearr_56947_58415 = state_56944__$1;
(statearr_56947_58415[(2)] = null);

(statearr_56947_58415[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56945 === (4))){
var inst_56921 = (state_56944[(7)]);
var inst_56921__$1 = (state_56944[(2)]);
var inst_56922 = (inst_56921__$1 == null);
var state_56944__$1 = (function (){var statearr_56948 = state_56944;
(statearr_56948[(7)] = inst_56921__$1);

return statearr_56948;
})();
if(cljs.core.truth_(inst_56922)){
var statearr_56949_58416 = state_56944__$1;
(statearr_56949_58416[(1)] = (5));

} else {
var statearr_56950_58417 = state_56944__$1;
(statearr_56950_58417[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56945 === (13))){
var state_56944__$1 = state_56944;
var statearr_56951_58418 = state_56944__$1;
(statearr_56951_58418[(2)] = null);

(statearr_56951_58418[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56945 === (6))){
var inst_56921 = (state_56944[(7)]);
var inst_56927 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_56921) : p.call(null,inst_56921));
var state_56944__$1 = state_56944;
if(cljs.core.truth_(inst_56927)){
var statearr_56952_58419 = state_56944__$1;
(statearr_56952_58419[(1)] = (9));

} else {
var statearr_56953_58420 = state_56944__$1;
(statearr_56953_58420[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56945 === (3))){
var inst_56942 = (state_56944[(2)]);
var state_56944__$1 = state_56944;
return cljs.core.async.impl.ioc_helpers.return_chan(state_56944__$1,inst_56942);
} else {
if((state_val_56945 === (12))){
var state_56944__$1 = state_56944;
var statearr_56954_58421 = state_56944__$1;
(statearr_56954_58421[(2)] = null);

(statearr_56954_58421[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56945 === (2))){
var state_56944__$1 = state_56944;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_56944__$1,(4),ch);
} else {
if((state_val_56945 === (11))){
var inst_56921 = (state_56944[(7)]);
var inst_56931 = (state_56944[(2)]);
var state_56944__$1 = state_56944;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_56944__$1,(8),inst_56931,inst_56921);
} else {
if((state_val_56945 === (9))){
var state_56944__$1 = state_56944;
var statearr_56955_58422 = state_56944__$1;
(statearr_56955_58422[(2)] = tc);

(statearr_56955_58422[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56945 === (5))){
var inst_56924 = cljs.core.async.close_BANG_(tc);
var inst_56925 = cljs.core.async.close_BANG_(fc);
var state_56944__$1 = (function (){var statearr_56956 = state_56944;
(statearr_56956[(8)] = inst_56924);

return statearr_56956;
})();
var statearr_56957_58423 = state_56944__$1;
(statearr_56957_58423[(2)] = inst_56925);

(statearr_56957_58423[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56945 === (14))){
var inst_56938 = (state_56944[(2)]);
var state_56944__$1 = state_56944;
var statearr_56958_58430 = state_56944__$1;
(statearr_56958_58430[(2)] = inst_56938);

(statearr_56958_58430[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56945 === (10))){
var state_56944__$1 = state_56944;
var statearr_56959_58431 = state_56944__$1;
(statearr_56959_58431[(2)] = fc);

(statearr_56959_58431[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56945 === (8))){
var inst_56933 = (state_56944[(2)]);
var state_56944__$1 = state_56944;
if(cljs.core.truth_(inst_56933)){
var statearr_56960_58432 = state_56944__$1;
(statearr_56960_58432[(1)] = (12));

} else {
var statearr_56961_58433 = state_56944__$1;
(statearr_56961_58433[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__56533__auto__ = null;
var cljs$core$async$state_machine__56533__auto____0 = (function (){
var statearr_56962 = [null,null,null,null,null,null,null,null,null];
(statearr_56962[(0)] = cljs$core$async$state_machine__56533__auto__);

(statearr_56962[(1)] = (1));

return statearr_56962;
});
var cljs$core$async$state_machine__56533__auto____1 = (function (state_56944){
while(true){
var ret_value__56534__auto__ = (function (){try{while(true){
var result__56535__auto__ = switch__56532__auto__(state_56944);
if(cljs.core.keyword_identical_QMARK_(result__56535__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__56535__auto__;
}
break;
}
}catch (e56963){var ex__56536__auto__ = e56963;
var statearr_56964_58434 = state_56944;
(statearr_56964_58434[(2)] = ex__56536__auto__);


if(cljs.core.seq((state_56944[(4)]))){
var statearr_56965_58435 = state_56944;
(statearr_56965_58435[(1)] = cljs.core.first((state_56944[(4)])));

} else {
throw ex__56536__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__56534__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__58436 = state_56944;
state_56944 = G__58436;
continue;
} else {
return ret_value__56534__auto__;
}
break;
}
});
cljs$core$async$state_machine__56533__auto__ = function(state_56944){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__56533__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__56533__auto____1.call(this,state_56944);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__56533__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__56533__auto____0;
cljs$core$async$state_machine__56533__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__56533__auto____1;
return cljs$core$async$state_machine__56533__auto__;
})()
})();
var state__56583__auto__ = (function (){var statearr_56966 = f__56582__auto__();
(statearr_56966[(6)] = c__56581__auto___58407);

return statearr_56966;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__56583__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__56581__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__56582__auto__ = (function (){var switch__56532__auto__ = (function (state_56988){
var state_val_56989 = (state_56988[(1)]);
if((state_val_56989 === (7))){
var inst_56984 = (state_56988[(2)]);
var state_56988__$1 = state_56988;
var statearr_56990_58437 = state_56988__$1;
(statearr_56990_58437[(2)] = inst_56984);

(statearr_56990_58437[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56989 === (1))){
var inst_56967 = init;
var inst_56968 = inst_56967;
var state_56988__$1 = (function (){var statearr_56991 = state_56988;
(statearr_56991[(7)] = inst_56968);

return statearr_56991;
})();
var statearr_56992_58444 = state_56988__$1;
(statearr_56992_58444[(2)] = null);

(statearr_56992_58444[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56989 === (4))){
var inst_56971 = (state_56988[(8)]);
var inst_56971__$1 = (state_56988[(2)]);
var inst_56972 = (inst_56971__$1 == null);
var state_56988__$1 = (function (){var statearr_56993 = state_56988;
(statearr_56993[(8)] = inst_56971__$1);

return statearr_56993;
})();
if(cljs.core.truth_(inst_56972)){
var statearr_56994_58445 = state_56988__$1;
(statearr_56994_58445[(1)] = (5));

} else {
var statearr_56995_58446 = state_56988__$1;
(statearr_56995_58446[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56989 === (6))){
var inst_56968 = (state_56988[(7)]);
var inst_56975 = (state_56988[(9)]);
var inst_56971 = (state_56988[(8)]);
var inst_56975__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_56968,inst_56971) : f.call(null,inst_56968,inst_56971));
var inst_56976 = cljs.core.reduced_QMARK_(inst_56975__$1);
var state_56988__$1 = (function (){var statearr_56996 = state_56988;
(statearr_56996[(9)] = inst_56975__$1);

return statearr_56996;
})();
if(inst_56976){
var statearr_56997_58447 = state_56988__$1;
(statearr_56997_58447[(1)] = (8));

} else {
var statearr_56998_58448 = state_56988__$1;
(statearr_56998_58448[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56989 === (3))){
var inst_56986 = (state_56988[(2)]);
var state_56988__$1 = state_56988;
return cljs.core.async.impl.ioc_helpers.return_chan(state_56988__$1,inst_56986);
} else {
if((state_val_56989 === (2))){
var state_56988__$1 = state_56988;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_56988__$1,(4),ch);
} else {
if((state_val_56989 === (9))){
var inst_56975 = (state_56988[(9)]);
var inst_56968 = inst_56975;
var state_56988__$1 = (function (){var statearr_56999 = state_56988;
(statearr_56999[(7)] = inst_56968);

return statearr_56999;
})();
var statearr_57000_58449 = state_56988__$1;
(statearr_57000_58449[(2)] = null);

(statearr_57000_58449[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56989 === (5))){
var inst_56968 = (state_56988[(7)]);
var state_56988__$1 = state_56988;
var statearr_57001_58450 = state_56988__$1;
(statearr_57001_58450[(2)] = inst_56968);

(statearr_57001_58450[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56989 === (10))){
var inst_56982 = (state_56988[(2)]);
var state_56988__$1 = state_56988;
var statearr_57002_58451 = state_56988__$1;
(statearr_57002_58451[(2)] = inst_56982);

(statearr_57002_58451[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56989 === (8))){
var inst_56975 = (state_56988[(9)]);
var inst_56978 = cljs.core.deref(inst_56975);
var state_56988__$1 = state_56988;
var statearr_57003_58452 = state_56988__$1;
(statearr_57003_58452[(2)] = inst_56978);

(statearr_57003_58452[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$reduce_$_state_machine__56533__auto__ = null;
var cljs$core$async$reduce_$_state_machine__56533__auto____0 = (function (){
var statearr_57004 = [null,null,null,null,null,null,null,null,null,null];
(statearr_57004[(0)] = cljs$core$async$reduce_$_state_machine__56533__auto__);

(statearr_57004[(1)] = (1));

return statearr_57004;
});
var cljs$core$async$reduce_$_state_machine__56533__auto____1 = (function (state_56988){
while(true){
var ret_value__56534__auto__ = (function (){try{while(true){
var result__56535__auto__ = switch__56532__auto__(state_56988);
if(cljs.core.keyword_identical_QMARK_(result__56535__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__56535__auto__;
}
break;
}
}catch (e57005){var ex__56536__auto__ = e57005;
var statearr_57006_58453 = state_56988;
(statearr_57006_58453[(2)] = ex__56536__auto__);


if(cljs.core.seq((state_56988[(4)]))){
var statearr_57007_58454 = state_56988;
(statearr_57007_58454[(1)] = cljs.core.first((state_56988[(4)])));

} else {
throw ex__56536__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__56534__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__58455 = state_56988;
state_56988 = G__58455;
continue;
} else {
return ret_value__56534__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__56533__auto__ = function(state_56988){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__56533__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__56533__auto____1.call(this,state_56988);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__56533__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__56533__auto____0;
cljs$core$async$reduce_$_state_machine__56533__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__56533__auto____1;
return cljs$core$async$reduce_$_state_machine__56533__auto__;
})()
})();
var state__56583__auto__ = (function (){var statearr_57008 = f__56582__auto__();
(statearr_57008[(6)] = c__56581__auto__);

return statearr_57008;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__56583__auto__);
}));

return c__56581__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__56581__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__56582__auto__ = (function (){var switch__56532__auto__ = (function (state_57014){
var state_val_57015 = (state_57014[(1)]);
if((state_val_57015 === (1))){
var inst_57009 = cljs.core.async.reduce(f__$1,init,ch);
var state_57014__$1 = state_57014;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_57014__$1,(2),inst_57009);
} else {
if((state_val_57015 === (2))){
var inst_57011 = (state_57014[(2)]);
var inst_57012 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_57011) : f__$1.call(null,inst_57011));
var state_57014__$1 = state_57014;
return cljs.core.async.impl.ioc_helpers.return_chan(state_57014__$1,inst_57012);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__56533__auto__ = null;
var cljs$core$async$transduce_$_state_machine__56533__auto____0 = (function (){
var statearr_57016 = [null,null,null,null,null,null,null];
(statearr_57016[(0)] = cljs$core$async$transduce_$_state_machine__56533__auto__);

(statearr_57016[(1)] = (1));

return statearr_57016;
});
var cljs$core$async$transduce_$_state_machine__56533__auto____1 = (function (state_57014){
while(true){
var ret_value__56534__auto__ = (function (){try{while(true){
var result__56535__auto__ = switch__56532__auto__(state_57014);
if(cljs.core.keyword_identical_QMARK_(result__56535__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__56535__auto__;
}
break;
}
}catch (e57017){var ex__56536__auto__ = e57017;
var statearr_57018_58461 = state_57014;
(statearr_57018_58461[(2)] = ex__56536__auto__);


if(cljs.core.seq((state_57014[(4)]))){
var statearr_57019_58462 = state_57014;
(statearr_57019_58462[(1)] = cljs.core.first((state_57014[(4)])));

} else {
throw ex__56536__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__56534__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__58463 = state_57014;
state_57014 = G__58463;
continue;
} else {
return ret_value__56534__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__56533__auto__ = function(state_57014){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__56533__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__56533__auto____1.call(this,state_57014);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__56533__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__56533__auto____0;
cljs$core$async$transduce_$_state_machine__56533__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__56533__auto____1;
return cljs$core$async$transduce_$_state_machine__56533__auto__;
})()
})();
var state__56583__auto__ = (function (){var statearr_57020 = f__56582__auto__();
(statearr_57020[(6)] = c__56581__auto__);

return statearr_57020;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__56583__auto__);
}));

return c__56581__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__57022 = arguments.length;
switch (G__57022) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__56581__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__56582__auto__ = (function (){var switch__56532__auto__ = (function (state_57047){
var state_val_57048 = (state_57047[(1)]);
if((state_val_57048 === (7))){
var inst_57029 = (state_57047[(2)]);
var state_57047__$1 = state_57047;
var statearr_57049_58465 = state_57047__$1;
(statearr_57049_58465[(2)] = inst_57029);

(statearr_57049_58465[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57048 === (1))){
var inst_57023 = cljs.core.seq(coll);
var inst_57024 = inst_57023;
var state_57047__$1 = (function (){var statearr_57050 = state_57047;
(statearr_57050[(7)] = inst_57024);

return statearr_57050;
})();
var statearr_57051_58468 = state_57047__$1;
(statearr_57051_58468[(2)] = null);

(statearr_57051_58468[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57048 === (4))){
var inst_57024 = (state_57047[(7)]);
var inst_57027 = cljs.core.first(inst_57024);
var state_57047__$1 = state_57047;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_57047__$1,(7),ch,inst_57027);
} else {
if((state_val_57048 === (13))){
var inst_57041 = (state_57047[(2)]);
var state_57047__$1 = state_57047;
var statearr_57052_58469 = state_57047__$1;
(statearr_57052_58469[(2)] = inst_57041);

(statearr_57052_58469[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57048 === (6))){
var inst_57032 = (state_57047[(2)]);
var state_57047__$1 = state_57047;
if(cljs.core.truth_(inst_57032)){
var statearr_57053_58470 = state_57047__$1;
(statearr_57053_58470[(1)] = (8));

} else {
var statearr_57054_58471 = state_57047__$1;
(statearr_57054_58471[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57048 === (3))){
var inst_57045 = (state_57047[(2)]);
var state_57047__$1 = state_57047;
return cljs.core.async.impl.ioc_helpers.return_chan(state_57047__$1,inst_57045);
} else {
if((state_val_57048 === (12))){
var state_57047__$1 = state_57047;
var statearr_57055_58473 = state_57047__$1;
(statearr_57055_58473[(2)] = null);

(statearr_57055_58473[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57048 === (2))){
var inst_57024 = (state_57047[(7)]);
var state_57047__$1 = state_57047;
if(cljs.core.truth_(inst_57024)){
var statearr_57056_58475 = state_57047__$1;
(statearr_57056_58475[(1)] = (4));

} else {
var statearr_57057_58476 = state_57047__$1;
(statearr_57057_58476[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57048 === (11))){
var inst_57038 = cljs.core.async.close_BANG_(ch);
var state_57047__$1 = state_57047;
var statearr_57058_58477 = state_57047__$1;
(statearr_57058_58477[(2)] = inst_57038);

(statearr_57058_58477[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57048 === (9))){
var state_57047__$1 = state_57047;
if(cljs.core.truth_(close_QMARK_)){
var statearr_57059_58478 = state_57047__$1;
(statearr_57059_58478[(1)] = (11));

} else {
var statearr_57060_58479 = state_57047__$1;
(statearr_57060_58479[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57048 === (5))){
var inst_57024 = (state_57047[(7)]);
var state_57047__$1 = state_57047;
var statearr_57061_58480 = state_57047__$1;
(statearr_57061_58480[(2)] = inst_57024);

(statearr_57061_58480[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57048 === (10))){
var inst_57043 = (state_57047[(2)]);
var state_57047__$1 = state_57047;
var statearr_57062_58481 = state_57047__$1;
(statearr_57062_58481[(2)] = inst_57043);

(statearr_57062_58481[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57048 === (8))){
var inst_57024 = (state_57047[(7)]);
var inst_57034 = cljs.core.next(inst_57024);
var inst_57024__$1 = inst_57034;
var state_57047__$1 = (function (){var statearr_57063 = state_57047;
(statearr_57063[(7)] = inst_57024__$1);

return statearr_57063;
})();
var statearr_57064_58482 = state_57047__$1;
(statearr_57064_58482[(2)] = null);

(statearr_57064_58482[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__56533__auto__ = null;
var cljs$core$async$state_machine__56533__auto____0 = (function (){
var statearr_57065 = [null,null,null,null,null,null,null,null];
(statearr_57065[(0)] = cljs$core$async$state_machine__56533__auto__);

(statearr_57065[(1)] = (1));

return statearr_57065;
});
var cljs$core$async$state_machine__56533__auto____1 = (function (state_57047){
while(true){
var ret_value__56534__auto__ = (function (){try{while(true){
var result__56535__auto__ = switch__56532__auto__(state_57047);
if(cljs.core.keyword_identical_QMARK_(result__56535__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__56535__auto__;
}
break;
}
}catch (e57066){var ex__56536__auto__ = e57066;
var statearr_57067_58483 = state_57047;
(statearr_57067_58483[(2)] = ex__56536__auto__);


if(cljs.core.seq((state_57047[(4)]))){
var statearr_57068_58484 = state_57047;
(statearr_57068_58484[(1)] = cljs.core.first((state_57047[(4)])));

} else {
throw ex__56536__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__56534__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__58486 = state_57047;
state_57047 = G__58486;
continue;
} else {
return ret_value__56534__auto__;
}
break;
}
});
cljs$core$async$state_machine__56533__auto__ = function(state_57047){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__56533__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__56533__auto____1.call(this,state_57047);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__56533__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__56533__auto____0;
cljs$core$async$state_machine__56533__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__56533__auto____1;
return cljs$core$async$state_machine__56533__auto__;
})()
})();
var state__56583__auto__ = (function (){var statearr_57069 = f__56582__auto__();
(statearr_57069[(6)] = c__56581__auto__);

return statearr_57069;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__56583__auto__);
}));

return c__56581__auto__;
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

var cljs$core$async$Mux$muxch_STAR_$dyn_58488 = (function (_){
var x__4428__auto__ = (((_ == null))?null:_);
var m__4429__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4429__auto__.call(null,_));
} else {
var m__4426__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4426__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_58488(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_58489 = (function (m,ch,close_QMARK_){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4429__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__4426__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4426__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_58489(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_58490 = (function (m,ch){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4429__auto__.call(null,m,ch));
} else {
var m__4426__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4426__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_58490(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_58492 = (function (m){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4429__auto__.call(null,m));
} else {
var m__4426__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4426__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_58492(m);
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async57070 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async57070 = (function (ch,cs,meta57071){
this.ch = ch;
this.cs = cs;
this.meta57071 = meta57071;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async57070.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_57072,meta57071__$1){
var self__ = this;
var _57072__$1 = this;
return (new cljs.core.async.t_cljs$core$async57070(self__.ch,self__.cs,meta57071__$1));
}));

(cljs.core.async.t_cljs$core$async57070.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_57072){
var self__ = this;
var _57072__$1 = this;
return self__.meta57071;
}));

(cljs.core.async.t_cljs$core$async57070.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async57070.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async57070.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async57070.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async57070.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async57070.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async57070.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta57071","meta57071",961738216,null)], null);
}));

(cljs.core.async.t_cljs$core$async57070.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async57070.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async57070");

(cljs.core.async.t_cljs$core$async57070.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async57070");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async57070.
 */
cljs.core.async.__GT_t_cljs$core$async57070 = (function cljs$core$async$mult_$___GT_t_cljs$core$async57070(ch__$1,cs__$1,meta57071){
return (new cljs.core.async.t_cljs$core$async57070(ch__$1,cs__$1,meta57071));
});

}

return (new cljs.core.async.t_cljs$core$async57070(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__56581__auto___58501 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__56582__auto__ = (function (){var switch__56532__auto__ = (function (state_57205){
var state_val_57206 = (state_57205[(1)]);
if((state_val_57206 === (7))){
var inst_57201 = (state_57205[(2)]);
var state_57205__$1 = state_57205;
var statearr_57207_58505 = state_57205__$1;
(statearr_57207_58505[(2)] = inst_57201);

(statearr_57207_58505[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57206 === (20))){
var inst_57106 = (state_57205[(7)]);
var inst_57118 = cljs.core.first(inst_57106);
var inst_57119 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_57118,(0),null);
var inst_57120 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_57118,(1),null);
var state_57205__$1 = (function (){var statearr_57208 = state_57205;
(statearr_57208[(8)] = inst_57119);

return statearr_57208;
})();
if(cljs.core.truth_(inst_57120)){
var statearr_57209_58512 = state_57205__$1;
(statearr_57209_58512[(1)] = (22));

} else {
var statearr_57210_58513 = state_57205__$1;
(statearr_57210_58513[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57206 === (27))){
var inst_57150 = (state_57205[(9)]);
var inst_57148 = (state_57205[(10)]);
var inst_57155 = (state_57205[(11)]);
var inst_57075 = (state_57205[(12)]);
var inst_57155__$1 = cljs.core._nth(inst_57148,inst_57150);
var inst_57156 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_57155__$1,inst_57075,done);
var state_57205__$1 = (function (){var statearr_57211 = state_57205;
(statearr_57211[(11)] = inst_57155__$1);

return statearr_57211;
})();
if(cljs.core.truth_(inst_57156)){
var statearr_57212_58514 = state_57205__$1;
(statearr_57212_58514[(1)] = (30));

} else {
var statearr_57213_58518 = state_57205__$1;
(statearr_57213_58518[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57206 === (1))){
var state_57205__$1 = state_57205;
var statearr_57214_58519 = state_57205__$1;
(statearr_57214_58519[(2)] = null);

(statearr_57214_58519[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57206 === (24))){
var inst_57106 = (state_57205[(7)]);
var inst_57125 = (state_57205[(2)]);
var inst_57126 = cljs.core.next(inst_57106);
var inst_57084 = inst_57126;
var inst_57085 = null;
var inst_57086 = (0);
var inst_57087 = (0);
var state_57205__$1 = (function (){var statearr_57215 = state_57205;
(statearr_57215[(13)] = inst_57086);

(statearr_57215[(14)] = inst_57085);

(statearr_57215[(15)] = inst_57125);

(statearr_57215[(16)] = inst_57084);

(statearr_57215[(17)] = inst_57087);

return statearr_57215;
})();
var statearr_57216_58524 = state_57205__$1;
(statearr_57216_58524[(2)] = null);

(statearr_57216_58524[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57206 === (39))){
var state_57205__$1 = state_57205;
var statearr_57220_58525 = state_57205__$1;
(statearr_57220_58525[(2)] = null);

(statearr_57220_58525[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57206 === (4))){
var inst_57075 = (state_57205[(12)]);
var inst_57075__$1 = (state_57205[(2)]);
var inst_57076 = (inst_57075__$1 == null);
var state_57205__$1 = (function (){var statearr_57221 = state_57205;
(statearr_57221[(12)] = inst_57075__$1);

return statearr_57221;
})();
if(cljs.core.truth_(inst_57076)){
var statearr_57222_58526 = state_57205__$1;
(statearr_57222_58526[(1)] = (5));

} else {
var statearr_57223_58527 = state_57205__$1;
(statearr_57223_58527[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57206 === (15))){
var inst_57086 = (state_57205[(13)]);
var inst_57085 = (state_57205[(14)]);
var inst_57084 = (state_57205[(16)]);
var inst_57087 = (state_57205[(17)]);
var inst_57102 = (state_57205[(2)]);
var inst_57103 = (inst_57087 + (1));
var tmp57217 = inst_57086;
var tmp57218 = inst_57085;
var tmp57219 = inst_57084;
var inst_57084__$1 = tmp57219;
var inst_57085__$1 = tmp57218;
var inst_57086__$1 = tmp57217;
var inst_57087__$1 = inst_57103;
var state_57205__$1 = (function (){var statearr_57224 = state_57205;
(statearr_57224[(13)] = inst_57086__$1);

(statearr_57224[(14)] = inst_57085__$1);

(statearr_57224[(16)] = inst_57084__$1);

(statearr_57224[(17)] = inst_57087__$1);

(statearr_57224[(18)] = inst_57102);

return statearr_57224;
})();
var statearr_57225_58528 = state_57205__$1;
(statearr_57225_58528[(2)] = null);

(statearr_57225_58528[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57206 === (21))){
var inst_57129 = (state_57205[(2)]);
var state_57205__$1 = state_57205;
var statearr_57229_58530 = state_57205__$1;
(statearr_57229_58530[(2)] = inst_57129);

(statearr_57229_58530[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57206 === (31))){
var inst_57155 = (state_57205[(11)]);
var inst_57159 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_57155);
var state_57205__$1 = state_57205;
var statearr_57230_58532 = state_57205__$1;
(statearr_57230_58532[(2)] = inst_57159);

(statearr_57230_58532[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57206 === (32))){
var inst_57150 = (state_57205[(9)]);
var inst_57148 = (state_57205[(10)]);
var inst_57147 = (state_57205[(19)]);
var inst_57149 = (state_57205[(20)]);
var inst_57161 = (state_57205[(2)]);
var inst_57162 = (inst_57150 + (1));
var tmp57226 = inst_57148;
var tmp57227 = inst_57147;
var tmp57228 = inst_57149;
var inst_57147__$1 = tmp57227;
var inst_57148__$1 = tmp57226;
var inst_57149__$1 = tmp57228;
var inst_57150__$1 = inst_57162;
var state_57205__$1 = (function (){var statearr_57231 = state_57205;
(statearr_57231[(9)] = inst_57150__$1);

(statearr_57231[(21)] = inst_57161);

(statearr_57231[(10)] = inst_57148__$1);

(statearr_57231[(19)] = inst_57147__$1);

(statearr_57231[(20)] = inst_57149__$1);

return statearr_57231;
})();
var statearr_57232_58533 = state_57205__$1;
(statearr_57232_58533[(2)] = null);

(statearr_57232_58533[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57206 === (40))){
var inst_57174 = (state_57205[(22)]);
var inst_57178 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_57174);
var state_57205__$1 = state_57205;
var statearr_57233_58534 = state_57205__$1;
(statearr_57233_58534[(2)] = inst_57178);

(statearr_57233_58534[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57206 === (33))){
var inst_57165 = (state_57205[(23)]);
var inst_57167 = cljs.core.chunked_seq_QMARK_(inst_57165);
var state_57205__$1 = state_57205;
if(inst_57167){
var statearr_57234_58535 = state_57205__$1;
(statearr_57234_58535[(1)] = (36));

} else {
var statearr_57235_58536 = state_57205__$1;
(statearr_57235_58536[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57206 === (13))){
var inst_57096 = (state_57205[(24)]);
var inst_57099 = cljs.core.async.close_BANG_(inst_57096);
var state_57205__$1 = state_57205;
var statearr_57236_58537 = state_57205__$1;
(statearr_57236_58537[(2)] = inst_57099);

(statearr_57236_58537[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57206 === (22))){
var inst_57119 = (state_57205[(8)]);
var inst_57122 = cljs.core.async.close_BANG_(inst_57119);
var state_57205__$1 = state_57205;
var statearr_57237_58538 = state_57205__$1;
(statearr_57237_58538[(2)] = inst_57122);

(statearr_57237_58538[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57206 === (36))){
var inst_57165 = (state_57205[(23)]);
var inst_57169 = cljs.core.chunk_first(inst_57165);
var inst_57170 = cljs.core.chunk_rest(inst_57165);
var inst_57171 = cljs.core.count(inst_57169);
var inst_57147 = inst_57170;
var inst_57148 = inst_57169;
var inst_57149 = inst_57171;
var inst_57150 = (0);
var state_57205__$1 = (function (){var statearr_57238 = state_57205;
(statearr_57238[(9)] = inst_57150);

(statearr_57238[(10)] = inst_57148);

(statearr_57238[(19)] = inst_57147);

(statearr_57238[(20)] = inst_57149);

return statearr_57238;
})();
var statearr_57239_58539 = state_57205__$1;
(statearr_57239_58539[(2)] = null);

(statearr_57239_58539[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57206 === (41))){
var inst_57165 = (state_57205[(23)]);
var inst_57180 = (state_57205[(2)]);
var inst_57181 = cljs.core.next(inst_57165);
var inst_57147 = inst_57181;
var inst_57148 = null;
var inst_57149 = (0);
var inst_57150 = (0);
var state_57205__$1 = (function (){var statearr_57240 = state_57205;
(statearr_57240[(9)] = inst_57150);

(statearr_57240[(25)] = inst_57180);

(statearr_57240[(10)] = inst_57148);

(statearr_57240[(19)] = inst_57147);

(statearr_57240[(20)] = inst_57149);

return statearr_57240;
})();
var statearr_57241_58540 = state_57205__$1;
(statearr_57241_58540[(2)] = null);

(statearr_57241_58540[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57206 === (43))){
var state_57205__$1 = state_57205;
var statearr_57242_58545 = state_57205__$1;
(statearr_57242_58545[(2)] = null);

(statearr_57242_58545[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57206 === (29))){
var inst_57189 = (state_57205[(2)]);
var state_57205__$1 = state_57205;
var statearr_57243_58546 = state_57205__$1;
(statearr_57243_58546[(2)] = inst_57189);

(statearr_57243_58546[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57206 === (44))){
var inst_57198 = (state_57205[(2)]);
var state_57205__$1 = (function (){var statearr_57244 = state_57205;
(statearr_57244[(26)] = inst_57198);

return statearr_57244;
})();
var statearr_57245_58547 = state_57205__$1;
(statearr_57245_58547[(2)] = null);

(statearr_57245_58547[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57206 === (6))){
var inst_57139 = (state_57205[(27)]);
var inst_57138 = cljs.core.deref(cs);
var inst_57139__$1 = cljs.core.keys(inst_57138);
var inst_57140 = cljs.core.count(inst_57139__$1);
var inst_57141 = cljs.core.reset_BANG_(dctr,inst_57140);
var inst_57146 = cljs.core.seq(inst_57139__$1);
var inst_57147 = inst_57146;
var inst_57148 = null;
var inst_57149 = (0);
var inst_57150 = (0);
var state_57205__$1 = (function (){var statearr_57246 = state_57205;
(statearr_57246[(9)] = inst_57150);

(statearr_57246[(27)] = inst_57139__$1);

(statearr_57246[(10)] = inst_57148);

(statearr_57246[(19)] = inst_57147);

(statearr_57246[(28)] = inst_57141);

(statearr_57246[(20)] = inst_57149);

return statearr_57246;
})();
var statearr_57247_58548 = state_57205__$1;
(statearr_57247_58548[(2)] = null);

(statearr_57247_58548[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57206 === (28))){
var inst_57165 = (state_57205[(23)]);
var inst_57147 = (state_57205[(19)]);
var inst_57165__$1 = cljs.core.seq(inst_57147);
var state_57205__$1 = (function (){var statearr_57248 = state_57205;
(statearr_57248[(23)] = inst_57165__$1);

return statearr_57248;
})();
if(inst_57165__$1){
var statearr_57249_58554 = state_57205__$1;
(statearr_57249_58554[(1)] = (33));

} else {
var statearr_57250_58555 = state_57205__$1;
(statearr_57250_58555[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57206 === (25))){
var inst_57150 = (state_57205[(9)]);
var inst_57149 = (state_57205[(20)]);
var inst_57152 = (inst_57150 < inst_57149);
var inst_57153 = inst_57152;
var state_57205__$1 = state_57205;
if(cljs.core.truth_(inst_57153)){
var statearr_57251_58556 = state_57205__$1;
(statearr_57251_58556[(1)] = (27));

} else {
var statearr_57252_58557 = state_57205__$1;
(statearr_57252_58557[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57206 === (34))){
var state_57205__$1 = state_57205;
var statearr_57253_58558 = state_57205__$1;
(statearr_57253_58558[(2)] = null);

(statearr_57253_58558[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57206 === (17))){
var state_57205__$1 = state_57205;
var statearr_57254_58559 = state_57205__$1;
(statearr_57254_58559[(2)] = null);

(statearr_57254_58559[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57206 === (3))){
var inst_57203 = (state_57205[(2)]);
var state_57205__$1 = state_57205;
return cljs.core.async.impl.ioc_helpers.return_chan(state_57205__$1,inst_57203);
} else {
if((state_val_57206 === (12))){
var inst_57134 = (state_57205[(2)]);
var state_57205__$1 = state_57205;
var statearr_57255_58561 = state_57205__$1;
(statearr_57255_58561[(2)] = inst_57134);

(statearr_57255_58561[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57206 === (2))){
var state_57205__$1 = state_57205;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_57205__$1,(4),ch);
} else {
if((state_val_57206 === (23))){
var state_57205__$1 = state_57205;
var statearr_57256_58562 = state_57205__$1;
(statearr_57256_58562[(2)] = null);

(statearr_57256_58562[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57206 === (35))){
var inst_57187 = (state_57205[(2)]);
var state_57205__$1 = state_57205;
var statearr_57257_58563 = state_57205__$1;
(statearr_57257_58563[(2)] = inst_57187);

(statearr_57257_58563[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57206 === (19))){
var inst_57106 = (state_57205[(7)]);
var inst_57110 = cljs.core.chunk_first(inst_57106);
var inst_57111 = cljs.core.chunk_rest(inst_57106);
var inst_57112 = cljs.core.count(inst_57110);
var inst_57084 = inst_57111;
var inst_57085 = inst_57110;
var inst_57086 = inst_57112;
var inst_57087 = (0);
var state_57205__$1 = (function (){var statearr_57258 = state_57205;
(statearr_57258[(13)] = inst_57086);

(statearr_57258[(14)] = inst_57085);

(statearr_57258[(16)] = inst_57084);

(statearr_57258[(17)] = inst_57087);

return statearr_57258;
})();
var statearr_57259_58568 = state_57205__$1;
(statearr_57259_58568[(2)] = null);

(statearr_57259_58568[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57206 === (11))){
var inst_57084 = (state_57205[(16)]);
var inst_57106 = (state_57205[(7)]);
var inst_57106__$1 = cljs.core.seq(inst_57084);
var state_57205__$1 = (function (){var statearr_57260 = state_57205;
(statearr_57260[(7)] = inst_57106__$1);

return statearr_57260;
})();
if(inst_57106__$1){
var statearr_57261_58569 = state_57205__$1;
(statearr_57261_58569[(1)] = (16));

} else {
var statearr_57262_58570 = state_57205__$1;
(statearr_57262_58570[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57206 === (9))){
var inst_57136 = (state_57205[(2)]);
var state_57205__$1 = state_57205;
var statearr_57263_58571 = state_57205__$1;
(statearr_57263_58571[(2)] = inst_57136);

(statearr_57263_58571[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57206 === (5))){
var inst_57082 = cljs.core.deref(cs);
var inst_57083 = cljs.core.seq(inst_57082);
var inst_57084 = inst_57083;
var inst_57085 = null;
var inst_57086 = (0);
var inst_57087 = (0);
var state_57205__$1 = (function (){var statearr_57264 = state_57205;
(statearr_57264[(13)] = inst_57086);

(statearr_57264[(14)] = inst_57085);

(statearr_57264[(16)] = inst_57084);

(statearr_57264[(17)] = inst_57087);

return statearr_57264;
})();
var statearr_57265_58572 = state_57205__$1;
(statearr_57265_58572[(2)] = null);

(statearr_57265_58572[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57206 === (14))){
var state_57205__$1 = state_57205;
var statearr_57266_58573 = state_57205__$1;
(statearr_57266_58573[(2)] = null);

(statearr_57266_58573[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57206 === (45))){
var inst_57195 = (state_57205[(2)]);
var state_57205__$1 = state_57205;
var statearr_57267_58574 = state_57205__$1;
(statearr_57267_58574[(2)] = inst_57195);

(statearr_57267_58574[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57206 === (26))){
var inst_57139 = (state_57205[(27)]);
var inst_57191 = (state_57205[(2)]);
var inst_57192 = cljs.core.seq(inst_57139);
var state_57205__$1 = (function (){var statearr_57268 = state_57205;
(statearr_57268[(29)] = inst_57191);

return statearr_57268;
})();
if(inst_57192){
var statearr_57269_58575 = state_57205__$1;
(statearr_57269_58575[(1)] = (42));

} else {
var statearr_57270_58576 = state_57205__$1;
(statearr_57270_58576[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57206 === (16))){
var inst_57106 = (state_57205[(7)]);
var inst_57108 = cljs.core.chunked_seq_QMARK_(inst_57106);
var state_57205__$1 = state_57205;
if(inst_57108){
var statearr_57271_58577 = state_57205__$1;
(statearr_57271_58577[(1)] = (19));

} else {
var statearr_57272_58578 = state_57205__$1;
(statearr_57272_58578[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57206 === (38))){
var inst_57184 = (state_57205[(2)]);
var state_57205__$1 = state_57205;
var statearr_57273_58579 = state_57205__$1;
(statearr_57273_58579[(2)] = inst_57184);

(statearr_57273_58579[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57206 === (30))){
var state_57205__$1 = state_57205;
var statearr_57274_58580 = state_57205__$1;
(statearr_57274_58580[(2)] = null);

(statearr_57274_58580[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57206 === (10))){
var inst_57085 = (state_57205[(14)]);
var inst_57087 = (state_57205[(17)]);
var inst_57095 = cljs.core._nth(inst_57085,inst_57087);
var inst_57096 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_57095,(0),null);
var inst_57097 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_57095,(1),null);
var state_57205__$1 = (function (){var statearr_57275 = state_57205;
(statearr_57275[(24)] = inst_57096);

return statearr_57275;
})();
if(cljs.core.truth_(inst_57097)){
var statearr_57276_58581 = state_57205__$1;
(statearr_57276_58581[(1)] = (13));

} else {
var statearr_57277_58582 = state_57205__$1;
(statearr_57277_58582[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57206 === (18))){
var inst_57132 = (state_57205[(2)]);
var state_57205__$1 = state_57205;
var statearr_57278_58583 = state_57205__$1;
(statearr_57278_58583[(2)] = inst_57132);

(statearr_57278_58583[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57206 === (42))){
var state_57205__$1 = state_57205;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_57205__$1,(45),dchan);
} else {
if((state_val_57206 === (37))){
var inst_57165 = (state_57205[(23)]);
var inst_57174 = (state_57205[(22)]);
var inst_57075 = (state_57205[(12)]);
var inst_57174__$1 = cljs.core.first(inst_57165);
var inst_57175 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_57174__$1,inst_57075,done);
var state_57205__$1 = (function (){var statearr_57279 = state_57205;
(statearr_57279[(22)] = inst_57174__$1);

return statearr_57279;
})();
if(cljs.core.truth_(inst_57175)){
var statearr_57280_58587 = state_57205__$1;
(statearr_57280_58587[(1)] = (39));

} else {
var statearr_57281_58588 = state_57205__$1;
(statearr_57281_58588[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57206 === (8))){
var inst_57086 = (state_57205[(13)]);
var inst_57087 = (state_57205[(17)]);
var inst_57089 = (inst_57087 < inst_57086);
var inst_57090 = inst_57089;
var state_57205__$1 = state_57205;
if(cljs.core.truth_(inst_57090)){
var statearr_57282_58589 = state_57205__$1;
(statearr_57282_58589[(1)] = (10));

} else {
var statearr_57283_58590 = state_57205__$1;
(statearr_57283_58590[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mult_$_state_machine__56533__auto__ = null;
var cljs$core$async$mult_$_state_machine__56533__auto____0 = (function (){
var statearr_57284 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_57284[(0)] = cljs$core$async$mult_$_state_machine__56533__auto__);

(statearr_57284[(1)] = (1));

return statearr_57284;
});
var cljs$core$async$mult_$_state_machine__56533__auto____1 = (function (state_57205){
while(true){
var ret_value__56534__auto__ = (function (){try{while(true){
var result__56535__auto__ = switch__56532__auto__(state_57205);
if(cljs.core.keyword_identical_QMARK_(result__56535__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__56535__auto__;
}
break;
}
}catch (e57285){var ex__56536__auto__ = e57285;
var statearr_57286_58591 = state_57205;
(statearr_57286_58591[(2)] = ex__56536__auto__);


if(cljs.core.seq((state_57205[(4)]))){
var statearr_57287_58592 = state_57205;
(statearr_57287_58592[(1)] = cljs.core.first((state_57205[(4)])));

} else {
throw ex__56536__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__56534__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__58593 = state_57205;
state_57205 = G__58593;
continue;
} else {
return ret_value__56534__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__56533__auto__ = function(state_57205){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__56533__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__56533__auto____1.call(this,state_57205);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__56533__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__56533__auto____0;
cljs$core$async$mult_$_state_machine__56533__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__56533__auto____1;
return cljs$core$async$mult_$_state_machine__56533__auto__;
})()
})();
var state__56583__auto__ = (function (){var statearr_57288 = f__56582__auto__();
(statearr_57288[(6)] = c__56581__auto___58501);

return statearr_57288;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__56583__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__57290 = arguments.length;
switch (G__57290) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

var cljs$core$async$Mix$admix_STAR_$dyn_58596 = (function (m,ch){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4429__auto__.call(null,m,ch));
} else {
var m__4426__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4426__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_58596(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_58597 = (function (m,ch){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4429__auto__.call(null,m,ch));
} else {
var m__4426__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4426__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_58597(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_58603 = (function (m){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4429__auto__.call(null,m));
} else {
var m__4426__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4426__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_58603(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_58604 = (function (m,state_map){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4429__auto__.call(null,m,state_map));
} else {
var m__4426__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4426__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_58604(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_58606 = (function (m,mode){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4429__auto__.call(null,m,mode));
} else {
var m__4426__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4426__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_58606(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___58611 = arguments.length;
var i__4737__auto___58612 = (0);
while(true){
if((i__4737__auto___58612 < len__4736__auto___58611)){
args__4742__auto__.push((arguments[i__4737__auto___58612]));

var G__58613 = (i__4737__auto___58612 + (1));
i__4737__auto___58612 = G__58613;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((3) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4743__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__57295){
var map__57296 = p__57295;
var map__57296__$1 = (((((!((map__57296 == null))))?(((((map__57296.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57296.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57296):map__57296);
var opts = map__57296__$1;
var statearr_57298_58614 = state;
(statearr_57298_58614[(1)] = cont_block);


var temp__5735__auto__ = cljs.core.async.do_alts((function (val){
var statearr_57299_58615 = state;
(statearr_57299_58615[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5735__auto__)){
var cb = temp__5735__auto__;
var statearr_57300_58616 = state;
(statearr_57300_58616[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq57291){
var G__57292 = cljs.core.first(seq57291);
var seq57291__$1 = cljs.core.next(seq57291);
var G__57293 = cljs.core.first(seq57291__$1);
var seq57291__$2 = cljs.core.next(seq57291__$1);
var G__57294 = cljs.core.first(seq57291__$2);
var seq57291__$3 = cljs.core.next(seq57291__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__57292,G__57293,G__57294,seq57291__$3);
}));

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer((1)));
var changed = (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv((function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_(solos))))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async57301 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async57301 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta57302){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta57302 = meta57302;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async57301.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_57303,meta57302__$1){
var self__ = this;
var _57303__$1 = this;
return (new cljs.core.async.t_cljs$core$async57301(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta57302__$1));
}));

(cljs.core.async.t_cljs$core$async57301.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_57303){
var self__ = this;
var _57303__$1 = this;
return self__.meta57302;
}));

(cljs.core.async.t_cljs$core$async57301.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async57301.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async57301.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async57301.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async57301.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async57301.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async57301.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async57301.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async57301.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta57302","meta57302",-1658632157,null)], null);
}));

(cljs.core.async.t_cljs$core$async57301.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async57301.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async57301");

(cljs.core.async.t_cljs$core$async57301.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async57301");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async57301.
 */
cljs.core.async.__GT_t_cljs$core$async57301 = (function cljs$core$async$mix_$___GT_t_cljs$core$async57301(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta57302){
return (new cljs.core.async.t_cljs$core$async57301(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta57302));
});

}

return (new cljs.core.async.t_cljs$core$async57301(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__56581__auto___58620 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__56582__auto__ = (function (){var switch__56532__auto__ = (function (state_57405){
var state_val_57406 = (state_57405[(1)]);
if((state_val_57406 === (7))){
var inst_57320 = (state_57405[(2)]);
var state_57405__$1 = state_57405;
var statearr_57407_58621 = state_57405__$1;
(statearr_57407_58621[(2)] = inst_57320);

(statearr_57407_58621[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57406 === (20))){
var inst_57332 = (state_57405[(7)]);
var state_57405__$1 = state_57405;
var statearr_57408_58622 = state_57405__$1;
(statearr_57408_58622[(2)] = inst_57332);

(statearr_57408_58622[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57406 === (27))){
var state_57405__$1 = state_57405;
var statearr_57409_58623 = state_57405__$1;
(statearr_57409_58623[(2)] = null);

(statearr_57409_58623[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57406 === (1))){
var inst_57307 = (state_57405[(8)]);
var inst_57307__$1 = calc_state();
var inst_57309 = (inst_57307__$1 == null);
var inst_57310 = cljs.core.not(inst_57309);
var state_57405__$1 = (function (){var statearr_57410 = state_57405;
(statearr_57410[(8)] = inst_57307__$1);

return statearr_57410;
})();
if(inst_57310){
var statearr_57411_58624 = state_57405__$1;
(statearr_57411_58624[(1)] = (2));

} else {
var statearr_57412_58625 = state_57405__$1;
(statearr_57412_58625[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57406 === (24))){
var inst_57356 = (state_57405[(9)]);
var inst_57365 = (state_57405[(10)]);
var inst_57379 = (state_57405[(11)]);
var inst_57379__$1 = (inst_57356.cljs$core$IFn$_invoke$arity$1 ? inst_57356.cljs$core$IFn$_invoke$arity$1(inst_57365) : inst_57356.call(null,inst_57365));
var state_57405__$1 = (function (){var statearr_57413 = state_57405;
(statearr_57413[(11)] = inst_57379__$1);

return statearr_57413;
})();
if(cljs.core.truth_(inst_57379__$1)){
var statearr_57414_58627 = state_57405__$1;
(statearr_57414_58627[(1)] = (29));

} else {
var statearr_57415_58628 = state_57405__$1;
(statearr_57415_58628[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57406 === (4))){
var inst_57323 = (state_57405[(2)]);
var state_57405__$1 = state_57405;
if(cljs.core.truth_(inst_57323)){
var statearr_57416_58629 = state_57405__$1;
(statearr_57416_58629[(1)] = (8));

} else {
var statearr_57417_58630 = state_57405__$1;
(statearr_57417_58630[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57406 === (15))){
var inst_57350 = (state_57405[(2)]);
var state_57405__$1 = state_57405;
if(cljs.core.truth_(inst_57350)){
var statearr_57418_58631 = state_57405__$1;
(statearr_57418_58631[(1)] = (19));

} else {
var statearr_57419_58632 = state_57405__$1;
(statearr_57419_58632[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57406 === (21))){
var inst_57355 = (state_57405[(12)]);
var inst_57355__$1 = (state_57405[(2)]);
var inst_57356 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_57355__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_57357 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_57355__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_57358 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_57355__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_57405__$1 = (function (){var statearr_57420 = state_57405;
(statearr_57420[(9)] = inst_57356);

(statearr_57420[(12)] = inst_57355__$1);

(statearr_57420[(13)] = inst_57357);

return statearr_57420;
})();
return cljs.core.async.ioc_alts_BANG_(state_57405__$1,(22),inst_57358);
} else {
if((state_val_57406 === (31))){
var inst_57387 = (state_57405[(2)]);
var state_57405__$1 = state_57405;
if(cljs.core.truth_(inst_57387)){
var statearr_57421_58633 = state_57405__$1;
(statearr_57421_58633[(1)] = (32));

} else {
var statearr_57422_58634 = state_57405__$1;
(statearr_57422_58634[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57406 === (32))){
var inst_57364 = (state_57405[(14)]);
var state_57405__$1 = state_57405;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_57405__$1,(35),out,inst_57364);
} else {
if((state_val_57406 === (33))){
var inst_57355 = (state_57405[(12)]);
var inst_57332 = inst_57355;
var state_57405__$1 = (function (){var statearr_57423 = state_57405;
(statearr_57423[(7)] = inst_57332);

return statearr_57423;
})();
var statearr_57424_58635 = state_57405__$1;
(statearr_57424_58635[(2)] = null);

(statearr_57424_58635[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57406 === (13))){
var inst_57332 = (state_57405[(7)]);
var inst_57339 = inst_57332.cljs$lang$protocol_mask$partition0$;
var inst_57340 = (inst_57339 & (64));
var inst_57341 = inst_57332.cljs$core$ISeq$;
var inst_57342 = (cljs.core.PROTOCOL_SENTINEL === inst_57341);
var inst_57343 = ((inst_57340) || (inst_57342));
var state_57405__$1 = state_57405;
if(cljs.core.truth_(inst_57343)){
var statearr_57425_58636 = state_57405__$1;
(statearr_57425_58636[(1)] = (16));

} else {
var statearr_57426_58637 = state_57405__$1;
(statearr_57426_58637[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57406 === (22))){
var inst_57365 = (state_57405[(10)]);
var inst_57364 = (state_57405[(14)]);
var inst_57363 = (state_57405[(2)]);
var inst_57364__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_57363,(0),null);
var inst_57365__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_57363,(1),null);
var inst_57366 = (inst_57364__$1 == null);
var inst_57367 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_57365__$1,change);
var inst_57368 = ((inst_57366) || (inst_57367));
var state_57405__$1 = (function (){var statearr_57427 = state_57405;
(statearr_57427[(10)] = inst_57365__$1);

(statearr_57427[(14)] = inst_57364__$1);

return statearr_57427;
})();
if(cljs.core.truth_(inst_57368)){
var statearr_57428_58638 = state_57405__$1;
(statearr_57428_58638[(1)] = (23));

} else {
var statearr_57429_58639 = state_57405__$1;
(statearr_57429_58639[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57406 === (36))){
var inst_57355 = (state_57405[(12)]);
var inst_57332 = inst_57355;
var state_57405__$1 = (function (){var statearr_57430 = state_57405;
(statearr_57430[(7)] = inst_57332);

return statearr_57430;
})();
var statearr_57431_58640 = state_57405__$1;
(statearr_57431_58640[(2)] = null);

(statearr_57431_58640[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57406 === (29))){
var inst_57379 = (state_57405[(11)]);
var state_57405__$1 = state_57405;
var statearr_57432_58641 = state_57405__$1;
(statearr_57432_58641[(2)] = inst_57379);

(statearr_57432_58641[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57406 === (6))){
var state_57405__$1 = state_57405;
var statearr_57433_58642 = state_57405__$1;
(statearr_57433_58642[(2)] = false);

(statearr_57433_58642[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57406 === (28))){
var inst_57375 = (state_57405[(2)]);
var inst_57376 = calc_state();
var inst_57332 = inst_57376;
var state_57405__$1 = (function (){var statearr_57434 = state_57405;
(statearr_57434[(15)] = inst_57375);

(statearr_57434[(7)] = inst_57332);

return statearr_57434;
})();
var statearr_57435_58647 = state_57405__$1;
(statearr_57435_58647[(2)] = null);

(statearr_57435_58647[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57406 === (25))){
var inst_57401 = (state_57405[(2)]);
var state_57405__$1 = state_57405;
var statearr_57436_58649 = state_57405__$1;
(statearr_57436_58649[(2)] = inst_57401);

(statearr_57436_58649[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57406 === (34))){
var inst_57399 = (state_57405[(2)]);
var state_57405__$1 = state_57405;
var statearr_57437_58653 = state_57405__$1;
(statearr_57437_58653[(2)] = inst_57399);

(statearr_57437_58653[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57406 === (17))){
var state_57405__$1 = state_57405;
var statearr_57438_58654 = state_57405__$1;
(statearr_57438_58654[(2)] = false);

(statearr_57438_58654[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57406 === (3))){
var state_57405__$1 = state_57405;
var statearr_57439_58657 = state_57405__$1;
(statearr_57439_58657[(2)] = false);

(statearr_57439_58657[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57406 === (12))){
var inst_57403 = (state_57405[(2)]);
var state_57405__$1 = state_57405;
return cljs.core.async.impl.ioc_helpers.return_chan(state_57405__$1,inst_57403);
} else {
if((state_val_57406 === (2))){
var inst_57307 = (state_57405[(8)]);
var inst_57312 = inst_57307.cljs$lang$protocol_mask$partition0$;
var inst_57313 = (inst_57312 & (64));
var inst_57314 = inst_57307.cljs$core$ISeq$;
var inst_57315 = (cljs.core.PROTOCOL_SENTINEL === inst_57314);
var inst_57316 = ((inst_57313) || (inst_57315));
var state_57405__$1 = state_57405;
if(cljs.core.truth_(inst_57316)){
var statearr_57440_58658 = state_57405__$1;
(statearr_57440_58658[(1)] = (5));

} else {
var statearr_57441_58659 = state_57405__$1;
(statearr_57441_58659[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57406 === (23))){
var inst_57364 = (state_57405[(14)]);
var inst_57370 = (inst_57364 == null);
var state_57405__$1 = state_57405;
if(cljs.core.truth_(inst_57370)){
var statearr_57442_58660 = state_57405__$1;
(statearr_57442_58660[(1)] = (26));

} else {
var statearr_57443_58661 = state_57405__$1;
(statearr_57443_58661[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57406 === (35))){
var inst_57390 = (state_57405[(2)]);
var state_57405__$1 = state_57405;
if(cljs.core.truth_(inst_57390)){
var statearr_57444_58662 = state_57405__$1;
(statearr_57444_58662[(1)] = (36));

} else {
var statearr_57445_58663 = state_57405__$1;
(statearr_57445_58663[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57406 === (19))){
var inst_57332 = (state_57405[(7)]);
var inst_57352 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_57332);
var state_57405__$1 = state_57405;
var statearr_57446_58664 = state_57405__$1;
(statearr_57446_58664[(2)] = inst_57352);

(statearr_57446_58664[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57406 === (11))){
var inst_57332 = (state_57405[(7)]);
var inst_57336 = (inst_57332 == null);
var inst_57337 = cljs.core.not(inst_57336);
var state_57405__$1 = state_57405;
if(inst_57337){
var statearr_57447_58665 = state_57405__$1;
(statearr_57447_58665[(1)] = (13));

} else {
var statearr_57448_58666 = state_57405__$1;
(statearr_57448_58666[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57406 === (9))){
var inst_57307 = (state_57405[(8)]);
var state_57405__$1 = state_57405;
var statearr_57449_58667 = state_57405__$1;
(statearr_57449_58667[(2)] = inst_57307);

(statearr_57449_58667[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57406 === (5))){
var state_57405__$1 = state_57405;
var statearr_57450_58668 = state_57405__$1;
(statearr_57450_58668[(2)] = true);

(statearr_57450_58668[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57406 === (14))){
var state_57405__$1 = state_57405;
var statearr_57451_58669 = state_57405__$1;
(statearr_57451_58669[(2)] = false);

(statearr_57451_58669[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57406 === (26))){
var inst_57365 = (state_57405[(10)]);
var inst_57372 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_57365);
var state_57405__$1 = state_57405;
var statearr_57452_58670 = state_57405__$1;
(statearr_57452_58670[(2)] = inst_57372);

(statearr_57452_58670[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57406 === (16))){
var state_57405__$1 = state_57405;
var statearr_57453_58671 = state_57405__$1;
(statearr_57453_58671[(2)] = true);

(statearr_57453_58671[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57406 === (38))){
var inst_57395 = (state_57405[(2)]);
var state_57405__$1 = state_57405;
var statearr_57454_58672 = state_57405__$1;
(statearr_57454_58672[(2)] = inst_57395);

(statearr_57454_58672[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57406 === (30))){
var inst_57356 = (state_57405[(9)]);
var inst_57365 = (state_57405[(10)]);
var inst_57357 = (state_57405[(13)]);
var inst_57382 = cljs.core.empty_QMARK_(inst_57356);
var inst_57383 = (inst_57357.cljs$core$IFn$_invoke$arity$1 ? inst_57357.cljs$core$IFn$_invoke$arity$1(inst_57365) : inst_57357.call(null,inst_57365));
var inst_57384 = cljs.core.not(inst_57383);
var inst_57385 = ((inst_57382) && (inst_57384));
var state_57405__$1 = state_57405;
var statearr_57455_58673 = state_57405__$1;
(statearr_57455_58673[(2)] = inst_57385);

(statearr_57455_58673[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57406 === (10))){
var inst_57307 = (state_57405[(8)]);
var inst_57328 = (state_57405[(2)]);
var inst_57329 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_57328,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_57330 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_57328,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_57331 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_57328,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_57332 = inst_57307;
var state_57405__$1 = (function (){var statearr_57456 = state_57405;
(statearr_57456[(16)] = inst_57331);

(statearr_57456[(17)] = inst_57329);

(statearr_57456[(18)] = inst_57330);

(statearr_57456[(7)] = inst_57332);

return statearr_57456;
})();
var statearr_57457_58674 = state_57405__$1;
(statearr_57457_58674[(2)] = null);

(statearr_57457_58674[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57406 === (18))){
var inst_57347 = (state_57405[(2)]);
var state_57405__$1 = state_57405;
var statearr_57458_58675 = state_57405__$1;
(statearr_57458_58675[(2)] = inst_57347);

(statearr_57458_58675[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57406 === (37))){
var state_57405__$1 = state_57405;
var statearr_57459_58676 = state_57405__$1;
(statearr_57459_58676[(2)] = null);

(statearr_57459_58676[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57406 === (8))){
var inst_57307 = (state_57405[(8)]);
var inst_57325 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_57307);
var state_57405__$1 = state_57405;
var statearr_57460_58677 = state_57405__$1;
(statearr_57460_58677[(2)] = inst_57325);

(statearr_57460_58677[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mix_$_state_machine__56533__auto__ = null;
var cljs$core$async$mix_$_state_machine__56533__auto____0 = (function (){
var statearr_57461 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_57461[(0)] = cljs$core$async$mix_$_state_machine__56533__auto__);

(statearr_57461[(1)] = (1));

return statearr_57461;
});
var cljs$core$async$mix_$_state_machine__56533__auto____1 = (function (state_57405){
while(true){
var ret_value__56534__auto__ = (function (){try{while(true){
var result__56535__auto__ = switch__56532__auto__(state_57405);
if(cljs.core.keyword_identical_QMARK_(result__56535__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__56535__auto__;
}
break;
}
}catch (e57462){var ex__56536__auto__ = e57462;
var statearr_57463_58685 = state_57405;
(statearr_57463_58685[(2)] = ex__56536__auto__);


if(cljs.core.seq((state_57405[(4)]))){
var statearr_57464_58689 = state_57405;
(statearr_57464_58689[(1)] = cljs.core.first((state_57405[(4)])));

} else {
throw ex__56536__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__56534__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__58690 = state_57405;
state_57405 = G__58690;
continue;
} else {
return ret_value__56534__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__56533__auto__ = function(state_57405){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__56533__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__56533__auto____1.call(this,state_57405);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__56533__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__56533__auto____0;
cljs$core$async$mix_$_state_machine__56533__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__56533__auto____1;
return cljs$core$async$mix_$_state_machine__56533__auto__;
})()
})();
var state__56583__auto__ = (function (){var statearr_57465 = f__56582__auto__();
(statearr_57465[(6)] = c__56581__auto___58620);

return statearr_57465;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__56583__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

var cljs$core$async$Pub$sub_STAR_$dyn_58694 = (function (p,v,ch,close_QMARK_){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4429__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__4426__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4426__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_58694(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_58701 = (function (p,v,ch){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4429__auto__.call(null,p,v,ch));
} else {
var m__4426__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4426__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_58701(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_58703 = (function() {
var G__58704 = null;
var G__58704__1 = (function (p){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4429__auto__.call(null,p));
} else {
var m__4426__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4426__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
var G__58704__2 = (function (p,v){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4429__auto__.call(null,p,v));
} else {
var m__4426__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4426__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
G__58704 = function(p,v){
switch(arguments.length){
case 1:
return G__58704__1.call(this,p);
case 2:
return G__58704__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__58704.cljs$core$IFn$_invoke$arity$1 = G__58704__1;
G__58704.cljs$core$IFn$_invoke$arity$2 = G__58704__2;
return G__58704;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__57467 = arguments.length;
switch (G__57467) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_58703(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_58703(p,v);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__57470 = arguments.length;
switch (G__57470) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__4126__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__57468_SHARP_){
if(cljs.core.truth_((p1__57468_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__57468_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__57468_SHARP_.call(null,topic)))){
return p1__57468_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__57468_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async57471 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async57471 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta57472){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta57472 = meta57472;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async57471.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_57473,meta57472__$1){
var self__ = this;
var _57473__$1 = this;
return (new cljs.core.async.t_cljs$core$async57471(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta57472__$1));
}));

(cljs.core.async.t_cljs$core$async57471.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_57473){
var self__ = this;
var _57473__$1 = this;
return self__.meta57472;
}));

(cljs.core.async.t_cljs$core$async57471.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async57471.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async57471.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async57471.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async57471.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5735__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5735__auto__)){
var m = temp__5735__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async57471.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async57471.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async57471.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta57472","meta57472",1903688089,null)], null);
}));

(cljs.core.async.t_cljs$core$async57471.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async57471.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async57471");

(cljs.core.async.t_cljs$core$async57471.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async57471");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async57471.
 */
cljs.core.async.__GT_t_cljs$core$async57471 = (function cljs$core$async$__GT_t_cljs$core$async57471(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta57472){
return (new cljs.core.async.t_cljs$core$async57471(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta57472));
});

}

return (new cljs.core.async.t_cljs$core$async57471(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__56581__auto___58722 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__56582__auto__ = (function (){var switch__56532__auto__ = (function (state_57545){
var state_val_57546 = (state_57545[(1)]);
if((state_val_57546 === (7))){
var inst_57541 = (state_57545[(2)]);
var state_57545__$1 = state_57545;
var statearr_57547_58723 = state_57545__$1;
(statearr_57547_58723[(2)] = inst_57541);

(statearr_57547_58723[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57546 === (20))){
var state_57545__$1 = state_57545;
var statearr_57548_58724 = state_57545__$1;
(statearr_57548_58724[(2)] = null);

(statearr_57548_58724[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57546 === (1))){
var state_57545__$1 = state_57545;
var statearr_57549_58731 = state_57545__$1;
(statearr_57549_58731[(2)] = null);

(statearr_57549_58731[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57546 === (24))){
var inst_57524 = (state_57545[(7)]);
var inst_57533 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_57524);
var state_57545__$1 = state_57545;
var statearr_57550_58732 = state_57545__$1;
(statearr_57550_58732[(2)] = inst_57533);

(statearr_57550_58732[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57546 === (4))){
var inst_57476 = (state_57545[(8)]);
var inst_57476__$1 = (state_57545[(2)]);
var inst_57477 = (inst_57476__$1 == null);
var state_57545__$1 = (function (){var statearr_57551 = state_57545;
(statearr_57551[(8)] = inst_57476__$1);

return statearr_57551;
})();
if(cljs.core.truth_(inst_57477)){
var statearr_57552_58733 = state_57545__$1;
(statearr_57552_58733[(1)] = (5));

} else {
var statearr_57553_58734 = state_57545__$1;
(statearr_57553_58734[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57546 === (15))){
var inst_57518 = (state_57545[(2)]);
var state_57545__$1 = state_57545;
var statearr_57554_58735 = state_57545__$1;
(statearr_57554_58735[(2)] = inst_57518);

(statearr_57554_58735[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57546 === (21))){
var inst_57538 = (state_57545[(2)]);
var state_57545__$1 = (function (){var statearr_57555 = state_57545;
(statearr_57555[(9)] = inst_57538);

return statearr_57555;
})();
var statearr_57556_58736 = state_57545__$1;
(statearr_57556_58736[(2)] = null);

(statearr_57556_58736[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57546 === (13))){
var inst_57500 = (state_57545[(10)]);
var inst_57502 = cljs.core.chunked_seq_QMARK_(inst_57500);
var state_57545__$1 = state_57545;
if(inst_57502){
var statearr_57557_58737 = state_57545__$1;
(statearr_57557_58737[(1)] = (16));

} else {
var statearr_57558_58738 = state_57545__$1;
(statearr_57558_58738[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57546 === (22))){
var inst_57530 = (state_57545[(2)]);
var state_57545__$1 = state_57545;
if(cljs.core.truth_(inst_57530)){
var statearr_57559_58739 = state_57545__$1;
(statearr_57559_58739[(1)] = (23));

} else {
var statearr_57560_58740 = state_57545__$1;
(statearr_57560_58740[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57546 === (6))){
var inst_57526 = (state_57545[(11)]);
var inst_57476 = (state_57545[(8)]);
var inst_57524 = (state_57545[(7)]);
var inst_57524__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_57476) : topic_fn.call(null,inst_57476));
var inst_57525 = cljs.core.deref(mults);
var inst_57526__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_57525,inst_57524__$1);
var state_57545__$1 = (function (){var statearr_57561 = state_57545;
(statearr_57561[(11)] = inst_57526__$1);

(statearr_57561[(7)] = inst_57524__$1);

return statearr_57561;
})();
if(cljs.core.truth_(inst_57526__$1)){
var statearr_57562_58741 = state_57545__$1;
(statearr_57562_58741[(1)] = (19));

} else {
var statearr_57563_58742 = state_57545__$1;
(statearr_57563_58742[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57546 === (25))){
var inst_57535 = (state_57545[(2)]);
var state_57545__$1 = state_57545;
var statearr_57564_58743 = state_57545__$1;
(statearr_57564_58743[(2)] = inst_57535);

(statearr_57564_58743[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57546 === (17))){
var inst_57500 = (state_57545[(10)]);
var inst_57509 = cljs.core.first(inst_57500);
var inst_57510 = cljs.core.async.muxch_STAR_(inst_57509);
var inst_57511 = cljs.core.async.close_BANG_(inst_57510);
var inst_57512 = cljs.core.next(inst_57500);
var inst_57486 = inst_57512;
var inst_57487 = null;
var inst_57488 = (0);
var inst_57489 = (0);
var state_57545__$1 = (function (){var statearr_57565 = state_57545;
(statearr_57565[(12)] = inst_57489);

(statearr_57565[(13)] = inst_57488);

(statearr_57565[(14)] = inst_57486);

(statearr_57565[(15)] = inst_57511);

(statearr_57565[(16)] = inst_57487);

return statearr_57565;
})();
var statearr_57566_58750 = state_57545__$1;
(statearr_57566_58750[(2)] = null);

(statearr_57566_58750[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57546 === (3))){
var inst_57543 = (state_57545[(2)]);
var state_57545__$1 = state_57545;
return cljs.core.async.impl.ioc_helpers.return_chan(state_57545__$1,inst_57543);
} else {
if((state_val_57546 === (12))){
var inst_57520 = (state_57545[(2)]);
var state_57545__$1 = state_57545;
var statearr_57567_58751 = state_57545__$1;
(statearr_57567_58751[(2)] = inst_57520);

(statearr_57567_58751[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57546 === (2))){
var state_57545__$1 = state_57545;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_57545__$1,(4),ch);
} else {
if((state_val_57546 === (23))){
var state_57545__$1 = state_57545;
var statearr_57568_58752 = state_57545__$1;
(statearr_57568_58752[(2)] = null);

(statearr_57568_58752[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57546 === (19))){
var inst_57526 = (state_57545[(11)]);
var inst_57476 = (state_57545[(8)]);
var inst_57528 = cljs.core.async.muxch_STAR_(inst_57526);
var state_57545__$1 = state_57545;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_57545__$1,(22),inst_57528,inst_57476);
} else {
if((state_val_57546 === (11))){
var inst_57500 = (state_57545[(10)]);
var inst_57486 = (state_57545[(14)]);
var inst_57500__$1 = cljs.core.seq(inst_57486);
var state_57545__$1 = (function (){var statearr_57569 = state_57545;
(statearr_57569[(10)] = inst_57500__$1);

return statearr_57569;
})();
if(inst_57500__$1){
var statearr_57570_58753 = state_57545__$1;
(statearr_57570_58753[(1)] = (13));

} else {
var statearr_57571_58754 = state_57545__$1;
(statearr_57571_58754[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57546 === (9))){
var inst_57522 = (state_57545[(2)]);
var state_57545__$1 = state_57545;
var statearr_57572_58755 = state_57545__$1;
(statearr_57572_58755[(2)] = inst_57522);

(statearr_57572_58755[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57546 === (5))){
var inst_57483 = cljs.core.deref(mults);
var inst_57484 = cljs.core.vals(inst_57483);
var inst_57485 = cljs.core.seq(inst_57484);
var inst_57486 = inst_57485;
var inst_57487 = null;
var inst_57488 = (0);
var inst_57489 = (0);
var state_57545__$1 = (function (){var statearr_57573 = state_57545;
(statearr_57573[(12)] = inst_57489);

(statearr_57573[(13)] = inst_57488);

(statearr_57573[(14)] = inst_57486);

(statearr_57573[(16)] = inst_57487);

return statearr_57573;
})();
var statearr_57574_58756 = state_57545__$1;
(statearr_57574_58756[(2)] = null);

(statearr_57574_58756[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57546 === (14))){
var state_57545__$1 = state_57545;
var statearr_57578_58757 = state_57545__$1;
(statearr_57578_58757[(2)] = null);

(statearr_57578_58757[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57546 === (16))){
var inst_57500 = (state_57545[(10)]);
var inst_57504 = cljs.core.chunk_first(inst_57500);
var inst_57505 = cljs.core.chunk_rest(inst_57500);
var inst_57506 = cljs.core.count(inst_57504);
var inst_57486 = inst_57505;
var inst_57487 = inst_57504;
var inst_57488 = inst_57506;
var inst_57489 = (0);
var state_57545__$1 = (function (){var statearr_57579 = state_57545;
(statearr_57579[(12)] = inst_57489);

(statearr_57579[(13)] = inst_57488);

(statearr_57579[(14)] = inst_57486);

(statearr_57579[(16)] = inst_57487);

return statearr_57579;
})();
var statearr_57580_58758 = state_57545__$1;
(statearr_57580_58758[(2)] = null);

(statearr_57580_58758[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57546 === (10))){
var inst_57489 = (state_57545[(12)]);
var inst_57488 = (state_57545[(13)]);
var inst_57486 = (state_57545[(14)]);
var inst_57487 = (state_57545[(16)]);
var inst_57494 = cljs.core._nth(inst_57487,inst_57489);
var inst_57495 = cljs.core.async.muxch_STAR_(inst_57494);
var inst_57496 = cljs.core.async.close_BANG_(inst_57495);
var inst_57497 = (inst_57489 + (1));
var tmp57575 = inst_57488;
var tmp57576 = inst_57486;
var tmp57577 = inst_57487;
var inst_57486__$1 = tmp57576;
var inst_57487__$1 = tmp57577;
var inst_57488__$1 = tmp57575;
var inst_57489__$1 = inst_57497;
var state_57545__$1 = (function (){var statearr_57581 = state_57545;
(statearr_57581[(12)] = inst_57489__$1);

(statearr_57581[(13)] = inst_57488__$1);

(statearr_57581[(17)] = inst_57496);

(statearr_57581[(14)] = inst_57486__$1);

(statearr_57581[(16)] = inst_57487__$1);

return statearr_57581;
})();
var statearr_57582_58765 = state_57545__$1;
(statearr_57582_58765[(2)] = null);

(statearr_57582_58765[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57546 === (18))){
var inst_57515 = (state_57545[(2)]);
var state_57545__$1 = state_57545;
var statearr_57583_58766 = state_57545__$1;
(statearr_57583_58766[(2)] = inst_57515);

(statearr_57583_58766[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57546 === (8))){
var inst_57489 = (state_57545[(12)]);
var inst_57488 = (state_57545[(13)]);
var inst_57491 = (inst_57489 < inst_57488);
var inst_57492 = inst_57491;
var state_57545__$1 = state_57545;
if(cljs.core.truth_(inst_57492)){
var statearr_57584_58767 = state_57545__$1;
(statearr_57584_58767[(1)] = (10));

} else {
var statearr_57585_58768 = state_57545__$1;
(statearr_57585_58768[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__56533__auto__ = null;
var cljs$core$async$state_machine__56533__auto____0 = (function (){
var statearr_57586 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_57586[(0)] = cljs$core$async$state_machine__56533__auto__);

(statearr_57586[(1)] = (1));

return statearr_57586;
});
var cljs$core$async$state_machine__56533__auto____1 = (function (state_57545){
while(true){
var ret_value__56534__auto__ = (function (){try{while(true){
var result__56535__auto__ = switch__56532__auto__(state_57545);
if(cljs.core.keyword_identical_QMARK_(result__56535__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__56535__auto__;
}
break;
}
}catch (e57587){var ex__56536__auto__ = e57587;
var statearr_57588_58769 = state_57545;
(statearr_57588_58769[(2)] = ex__56536__auto__);


if(cljs.core.seq((state_57545[(4)]))){
var statearr_57589_58770 = state_57545;
(statearr_57589_58770[(1)] = cljs.core.first((state_57545[(4)])));

} else {
throw ex__56536__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__56534__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__58771 = state_57545;
state_57545 = G__58771;
continue;
} else {
return ret_value__56534__auto__;
}
break;
}
});
cljs$core$async$state_machine__56533__auto__ = function(state_57545){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__56533__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__56533__auto____1.call(this,state_57545);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__56533__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__56533__auto____0;
cljs$core$async$state_machine__56533__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__56533__auto____1;
return cljs$core$async$state_machine__56533__auto__;
})()
})();
var state__56583__auto__ = (function (){var statearr_57590 = f__56582__auto__();
(statearr_57590[(6)] = c__56581__auto___58722);

return statearr_57590;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__56583__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__57592 = arguments.length;
switch (G__57592) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__57594 = arguments.length;
switch (G__57594) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_(p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_(p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__57596 = arguments.length;
switch (G__57596) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
var c__56581__auto___58779 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__56582__auto__ = (function (){var switch__56532__auto__ = (function (state_57639){
var state_val_57640 = (state_57639[(1)]);
if((state_val_57640 === (7))){
var state_57639__$1 = state_57639;
var statearr_57641_58786 = state_57639__$1;
(statearr_57641_58786[(2)] = null);

(statearr_57641_58786[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57640 === (1))){
var state_57639__$1 = state_57639;
var statearr_57642_58787 = state_57639__$1;
(statearr_57642_58787[(2)] = null);

(statearr_57642_58787[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57640 === (4))){
var inst_57600 = (state_57639[(7)]);
var inst_57599 = (state_57639[(8)]);
var inst_57602 = (inst_57600 < inst_57599);
var state_57639__$1 = state_57639;
if(cljs.core.truth_(inst_57602)){
var statearr_57643_58789 = state_57639__$1;
(statearr_57643_58789[(1)] = (6));

} else {
var statearr_57644_58791 = state_57639__$1;
(statearr_57644_58791[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57640 === (15))){
var inst_57625 = (state_57639[(9)]);
var inst_57630 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_57625);
var state_57639__$1 = state_57639;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_57639__$1,(17),out,inst_57630);
} else {
if((state_val_57640 === (13))){
var inst_57625 = (state_57639[(9)]);
var inst_57625__$1 = (state_57639[(2)]);
var inst_57626 = cljs.core.some(cljs.core.nil_QMARK_,inst_57625__$1);
var state_57639__$1 = (function (){var statearr_57645 = state_57639;
(statearr_57645[(9)] = inst_57625__$1);

return statearr_57645;
})();
if(cljs.core.truth_(inst_57626)){
var statearr_57646_58796 = state_57639__$1;
(statearr_57646_58796[(1)] = (14));

} else {
var statearr_57647_58797 = state_57639__$1;
(statearr_57647_58797[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57640 === (6))){
var state_57639__$1 = state_57639;
var statearr_57648_58798 = state_57639__$1;
(statearr_57648_58798[(2)] = null);

(statearr_57648_58798[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57640 === (17))){
var inst_57632 = (state_57639[(2)]);
var state_57639__$1 = (function (){var statearr_57650 = state_57639;
(statearr_57650[(10)] = inst_57632);

return statearr_57650;
})();
var statearr_57651_58799 = state_57639__$1;
(statearr_57651_58799[(2)] = null);

(statearr_57651_58799[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57640 === (3))){
var inst_57637 = (state_57639[(2)]);
var state_57639__$1 = state_57639;
return cljs.core.async.impl.ioc_helpers.return_chan(state_57639__$1,inst_57637);
} else {
if((state_val_57640 === (12))){
var _ = (function (){var statearr_57652 = state_57639;
(statearr_57652[(4)] = cljs.core.rest((state_57639[(4)])));

return statearr_57652;
})();
var state_57639__$1 = state_57639;
var ex57649 = (state_57639__$1[(2)]);
var statearr_57653_58800 = state_57639__$1;
(statearr_57653_58800[(5)] = ex57649);


if((ex57649 instanceof Object)){
var statearr_57654_58801 = state_57639__$1;
(statearr_57654_58801[(1)] = (11));

(statearr_57654_58801[(5)] = null);

} else {
throw ex57649;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57640 === (2))){
var inst_57598 = cljs.core.reset_BANG_(dctr,cnt);
var inst_57599 = cnt;
var inst_57600 = (0);
var state_57639__$1 = (function (){var statearr_57655 = state_57639;
(statearr_57655[(7)] = inst_57600);

(statearr_57655[(11)] = inst_57598);

(statearr_57655[(8)] = inst_57599);

return statearr_57655;
})();
var statearr_57656_58803 = state_57639__$1;
(statearr_57656_58803[(2)] = null);

(statearr_57656_58803[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57640 === (11))){
var inst_57604 = (state_57639[(2)]);
var inst_57605 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_57639__$1 = (function (){var statearr_57657 = state_57639;
(statearr_57657[(12)] = inst_57604);

return statearr_57657;
})();
var statearr_57658_58804 = state_57639__$1;
(statearr_57658_58804[(2)] = inst_57605);

(statearr_57658_58804[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57640 === (9))){
var inst_57600 = (state_57639[(7)]);
var _ = (function (){var statearr_57659 = state_57639;
(statearr_57659[(4)] = cljs.core.cons((12),(state_57639[(4)])));

return statearr_57659;
})();
var inst_57611 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_57600) : chs__$1.call(null,inst_57600));
var inst_57612 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_57600) : done.call(null,inst_57600));
var inst_57613 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_57611,inst_57612);
var ___$1 = (function (){var statearr_57660 = state_57639;
(statearr_57660[(4)] = cljs.core.rest((state_57639[(4)])));

return statearr_57660;
})();
var state_57639__$1 = state_57639;
var statearr_57661_58806 = state_57639__$1;
(statearr_57661_58806[(2)] = inst_57613);

(statearr_57661_58806[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57640 === (5))){
var inst_57623 = (state_57639[(2)]);
var state_57639__$1 = (function (){var statearr_57662 = state_57639;
(statearr_57662[(13)] = inst_57623);

return statearr_57662;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_57639__$1,(13),dchan);
} else {
if((state_val_57640 === (14))){
var inst_57628 = cljs.core.async.close_BANG_(out);
var state_57639__$1 = state_57639;
var statearr_57663_58807 = state_57639__$1;
(statearr_57663_58807[(2)] = inst_57628);

(statearr_57663_58807[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57640 === (16))){
var inst_57635 = (state_57639[(2)]);
var state_57639__$1 = state_57639;
var statearr_57664_58808 = state_57639__$1;
(statearr_57664_58808[(2)] = inst_57635);

(statearr_57664_58808[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57640 === (10))){
var inst_57600 = (state_57639[(7)]);
var inst_57616 = (state_57639[(2)]);
var inst_57617 = (inst_57600 + (1));
var inst_57600__$1 = inst_57617;
var state_57639__$1 = (function (){var statearr_57665 = state_57639;
(statearr_57665[(14)] = inst_57616);

(statearr_57665[(7)] = inst_57600__$1);

return statearr_57665;
})();
var statearr_57666_58809 = state_57639__$1;
(statearr_57666_58809[(2)] = null);

(statearr_57666_58809[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57640 === (8))){
var inst_57621 = (state_57639[(2)]);
var state_57639__$1 = state_57639;
var statearr_57667_58810 = state_57639__$1;
(statearr_57667_58810[(2)] = inst_57621);

(statearr_57667_58810[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__56533__auto__ = null;
var cljs$core$async$state_machine__56533__auto____0 = (function (){
var statearr_57668 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_57668[(0)] = cljs$core$async$state_machine__56533__auto__);

(statearr_57668[(1)] = (1));

return statearr_57668;
});
var cljs$core$async$state_machine__56533__auto____1 = (function (state_57639){
while(true){
var ret_value__56534__auto__ = (function (){try{while(true){
var result__56535__auto__ = switch__56532__auto__(state_57639);
if(cljs.core.keyword_identical_QMARK_(result__56535__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__56535__auto__;
}
break;
}
}catch (e57669){var ex__56536__auto__ = e57669;
var statearr_57670_58812 = state_57639;
(statearr_57670_58812[(2)] = ex__56536__auto__);


if(cljs.core.seq((state_57639[(4)]))){
var statearr_57671_58813 = state_57639;
(statearr_57671_58813[(1)] = cljs.core.first((state_57639[(4)])));

} else {
throw ex__56536__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__56534__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__58815 = state_57639;
state_57639 = G__58815;
continue;
} else {
return ret_value__56534__auto__;
}
break;
}
});
cljs$core$async$state_machine__56533__auto__ = function(state_57639){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__56533__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__56533__auto____1.call(this,state_57639);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__56533__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__56533__auto____0;
cljs$core$async$state_machine__56533__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__56533__auto____1;
return cljs$core$async$state_machine__56533__auto__;
})()
})();
var state__56583__auto__ = (function (){var statearr_57672 = f__56582__auto__();
(statearr_57672[(6)] = c__56581__auto___58779);

return statearr_57672;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__56583__auto__);
}));


return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__57675 = arguments.length;
switch (G__57675) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__56581__auto___58819 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__56582__auto__ = (function (){var switch__56532__auto__ = (function (state_57707){
var state_val_57708 = (state_57707[(1)]);
if((state_val_57708 === (7))){
var inst_57687 = (state_57707[(7)]);
var inst_57686 = (state_57707[(8)]);
var inst_57686__$1 = (state_57707[(2)]);
var inst_57687__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_57686__$1,(0),null);
var inst_57688 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_57686__$1,(1),null);
var inst_57689 = (inst_57687__$1 == null);
var state_57707__$1 = (function (){var statearr_57709 = state_57707;
(statearr_57709[(7)] = inst_57687__$1);

(statearr_57709[(9)] = inst_57688);

(statearr_57709[(8)] = inst_57686__$1);

return statearr_57709;
})();
if(cljs.core.truth_(inst_57689)){
var statearr_57710_58821 = state_57707__$1;
(statearr_57710_58821[(1)] = (8));

} else {
var statearr_57711_58822 = state_57707__$1;
(statearr_57711_58822[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57708 === (1))){
var inst_57676 = cljs.core.vec(chs);
var inst_57677 = inst_57676;
var state_57707__$1 = (function (){var statearr_57712 = state_57707;
(statearr_57712[(10)] = inst_57677);

return statearr_57712;
})();
var statearr_57713_58823 = state_57707__$1;
(statearr_57713_58823[(2)] = null);

(statearr_57713_58823[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57708 === (4))){
var inst_57677 = (state_57707[(10)]);
var state_57707__$1 = state_57707;
return cljs.core.async.ioc_alts_BANG_(state_57707__$1,(7),inst_57677);
} else {
if((state_val_57708 === (6))){
var inst_57703 = (state_57707[(2)]);
var state_57707__$1 = state_57707;
var statearr_57714_58825 = state_57707__$1;
(statearr_57714_58825[(2)] = inst_57703);

(statearr_57714_58825[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57708 === (3))){
var inst_57705 = (state_57707[(2)]);
var state_57707__$1 = state_57707;
return cljs.core.async.impl.ioc_helpers.return_chan(state_57707__$1,inst_57705);
} else {
if((state_val_57708 === (2))){
var inst_57677 = (state_57707[(10)]);
var inst_57679 = cljs.core.count(inst_57677);
var inst_57680 = (inst_57679 > (0));
var state_57707__$1 = state_57707;
if(cljs.core.truth_(inst_57680)){
var statearr_57716_58826 = state_57707__$1;
(statearr_57716_58826[(1)] = (4));

} else {
var statearr_57717_58827 = state_57707__$1;
(statearr_57717_58827[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57708 === (11))){
var inst_57677 = (state_57707[(10)]);
var inst_57696 = (state_57707[(2)]);
var tmp57715 = inst_57677;
var inst_57677__$1 = tmp57715;
var state_57707__$1 = (function (){var statearr_57718 = state_57707;
(statearr_57718[(10)] = inst_57677__$1);

(statearr_57718[(11)] = inst_57696);

return statearr_57718;
})();
var statearr_57719_58828 = state_57707__$1;
(statearr_57719_58828[(2)] = null);

(statearr_57719_58828[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57708 === (9))){
var inst_57687 = (state_57707[(7)]);
var state_57707__$1 = state_57707;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_57707__$1,(11),out,inst_57687);
} else {
if((state_val_57708 === (5))){
var inst_57701 = cljs.core.async.close_BANG_(out);
var state_57707__$1 = state_57707;
var statearr_57720_58830 = state_57707__$1;
(statearr_57720_58830[(2)] = inst_57701);

(statearr_57720_58830[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57708 === (10))){
var inst_57699 = (state_57707[(2)]);
var state_57707__$1 = state_57707;
var statearr_57721_58835 = state_57707__$1;
(statearr_57721_58835[(2)] = inst_57699);

(statearr_57721_58835[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57708 === (8))){
var inst_57677 = (state_57707[(10)]);
var inst_57687 = (state_57707[(7)]);
var inst_57688 = (state_57707[(9)]);
var inst_57686 = (state_57707[(8)]);
var inst_57691 = (function (){var cs = inst_57677;
var vec__57682 = inst_57686;
var v = inst_57687;
var c = inst_57688;
return (function (p1__57673_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__57673_SHARP_);
});
})();
var inst_57692 = cljs.core.filterv(inst_57691,inst_57677);
var inst_57677__$1 = inst_57692;
var state_57707__$1 = (function (){var statearr_57722 = state_57707;
(statearr_57722[(10)] = inst_57677__$1);

return statearr_57722;
})();
var statearr_57723_58846 = state_57707__$1;
(statearr_57723_58846[(2)] = null);

(statearr_57723_58846[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__56533__auto__ = null;
var cljs$core$async$state_machine__56533__auto____0 = (function (){
var statearr_57724 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_57724[(0)] = cljs$core$async$state_machine__56533__auto__);

(statearr_57724[(1)] = (1));

return statearr_57724;
});
var cljs$core$async$state_machine__56533__auto____1 = (function (state_57707){
while(true){
var ret_value__56534__auto__ = (function (){try{while(true){
var result__56535__auto__ = switch__56532__auto__(state_57707);
if(cljs.core.keyword_identical_QMARK_(result__56535__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__56535__auto__;
}
break;
}
}catch (e57725){var ex__56536__auto__ = e57725;
var statearr_57726_58847 = state_57707;
(statearr_57726_58847[(2)] = ex__56536__auto__);


if(cljs.core.seq((state_57707[(4)]))){
var statearr_57727_58848 = state_57707;
(statearr_57727_58848[(1)] = cljs.core.first((state_57707[(4)])));

} else {
throw ex__56536__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__56534__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__58849 = state_57707;
state_57707 = G__58849;
continue;
} else {
return ret_value__56534__auto__;
}
break;
}
});
cljs$core$async$state_machine__56533__auto__ = function(state_57707){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__56533__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__56533__auto____1.call(this,state_57707);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__56533__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__56533__auto____0;
cljs$core$async$state_machine__56533__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__56533__auto____1;
return cljs$core$async$state_machine__56533__auto__;
})()
})();
var state__56583__auto__ = (function (){var statearr_57728 = f__56582__auto__();
(statearr_57728[(6)] = c__56581__auto___58819);

return statearr_57728;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__56583__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__57730 = arguments.length;
switch (G__57730) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__56581__auto___58863 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__56582__auto__ = (function (){var switch__56532__auto__ = (function (state_57754){
var state_val_57755 = (state_57754[(1)]);
if((state_val_57755 === (7))){
var inst_57736 = (state_57754[(7)]);
var inst_57736__$1 = (state_57754[(2)]);
var inst_57737 = (inst_57736__$1 == null);
var inst_57738 = cljs.core.not(inst_57737);
var state_57754__$1 = (function (){var statearr_57756 = state_57754;
(statearr_57756[(7)] = inst_57736__$1);

return statearr_57756;
})();
if(inst_57738){
var statearr_57757_58872 = state_57754__$1;
(statearr_57757_58872[(1)] = (8));

} else {
var statearr_57758_58873 = state_57754__$1;
(statearr_57758_58873[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57755 === (1))){
var inst_57731 = (0);
var state_57754__$1 = (function (){var statearr_57759 = state_57754;
(statearr_57759[(8)] = inst_57731);

return statearr_57759;
})();
var statearr_57760_58878 = state_57754__$1;
(statearr_57760_58878[(2)] = null);

(statearr_57760_58878[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57755 === (4))){
var state_57754__$1 = state_57754;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_57754__$1,(7),ch);
} else {
if((state_val_57755 === (6))){
var inst_57749 = (state_57754[(2)]);
var state_57754__$1 = state_57754;
var statearr_57761_58883 = state_57754__$1;
(statearr_57761_58883[(2)] = inst_57749);

(statearr_57761_58883[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57755 === (3))){
var inst_57751 = (state_57754[(2)]);
var inst_57752 = cljs.core.async.close_BANG_(out);
var state_57754__$1 = (function (){var statearr_57762 = state_57754;
(statearr_57762[(9)] = inst_57751);

return statearr_57762;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_57754__$1,inst_57752);
} else {
if((state_val_57755 === (2))){
var inst_57731 = (state_57754[(8)]);
var inst_57733 = (inst_57731 < n);
var state_57754__$1 = state_57754;
if(cljs.core.truth_(inst_57733)){
var statearr_57763_58884 = state_57754__$1;
(statearr_57763_58884[(1)] = (4));

} else {
var statearr_57764_58886 = state_57754__$1;
(statearr_57764_58886[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57755 === (11))){
var inst_57731 = (state_57754[(8)]);
var inst_57741 = (state_57754[(2)]);
var inst_57742 = (inst_57731 + (1));
var inst_57731__$1 = inst_57742;
var state_57754__$1 = (function (){var statearr_57765 = state_57754;
(statearr_57765[(8)] = inst_57731__$1);

(statearr_57765[(10)] = inst_57741);

return statearr_57765;
})();
var statearr_57766_58888 = state_57754__$1;
(statearr_57766_58888[(2)] = null);

(statearr_57766_58888[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57755 === (9))){
var state_57754__$1 = state_57754;
var statearr_57767_58889 = state_57754__$1;
(statearr_57767_58889[(2)] = null);

(statearr_57767_58889[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57755 === (5))){
var state_57754__$1 = state_57754;
var statearr_57768_58890 = state_57754__$1;
(statearr_57768_58890[(2)] = null);

(statearr_57768_58890[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57755 === (10))){
var inst_57746 = (state_57754[(2)]);
var state_57754__$1 = state_57754;
var statearr_57769_58891 = state_57754__$1;
(statearr_57769_58891[(2)] = inst_57746);

(statearr_57769_58891[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57755 === (8))){
var inst_57736 = (state_57754[(7)]);
var state_57754__$1 = state_57754;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_57754__$1,(11),out,inst_57736);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__56533__auto__ = null;
var cljs$core$async$state_machine__56533__auto____0 = (function (){
var statearr_57770 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_57770[(0)] = cljs$core$async$state_machine__56533__auto__);

(statearr_57770[(1)] = (1));

return statearr_57770;
});
var cljs$core$async$state_machine__56533__auto____1 = (function (state_57754){
while(true){
var ret_value__56534__auto__ = (function (){try{while(true){
var result__56535__auto__ = switch__56532__auto__(state_57754);
if(cljs.core.keyword_identical_QMARK_(result__56535__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__56535__auto__;
}
break;
}
}catch (e57771){var ex__56536__auto__ = e57771;
var statearr_57772_58893 = state_57754;
(statearr_57772_58893[(2)] = ex__56536__auto__);


if(cljs.core.seq((state_57754[(4)]))){
var statearr_57773_58894 = state_57754;
(statearr_57773_58894[(1)] = cljs.core.first((state_57754[(4)])));

} else {
throw ex__56536__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__56534__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__58895 = state_57754;
state_57754 = G__58895;
continue;
} else {
return ret_value__56534__auto__;
}
break;
}
});
cljs$core$async$state_machine__56533__auto__ = function(state_57754){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__56533__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__56533__auto____1.call(this,state_57754);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__56533__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__56533__auto____0;
cljs$core$async$state_machine__56533__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__56533__auto____1;
return cljs$core$async$state_machine__56533__auto__;
})()
})();
var state__56583__auto__ = (function (){var statearr_57774 = f__56582__auto__();
(statearr_57774[(6)] = c__56581__auto___58863);

return statearr_57774;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__56583__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async57776 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async57776 = (function (f,ch,meta57777){
this.f = f;
this.ch = ch;
this.meta57777 = meta57777;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async57776.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_57778,meta57777__$1){
var self__ = this;
var _57778__$1 = this;
return (new cljs.core.async.t_cljs$core$async57776(self__.f,self__.ch,meta57777__$1));
}));

(cljs.core.async.t_cljs$core$async57776.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_57778){
var self__ = this;
var _57778__$1 = this;
return self__.meta57777;
}));

(cljs.core.async.t_cljs$core$async57776.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async57776.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async57776.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async57776.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async57776.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async57779 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async57779 = (function (f,ch,meta57777,_,fn1,meta57780){
this.f = f;
this.ch = ch;
this.meta57777 = meta57777;
this._ = _;
this.fn1 = fn1;
this.meta57780 = meta57780;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async57779.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_57781,meta57780__$1){
var self__ = this;
var _57781__$1 = this;
return (new cljs.core.async.t_cljs$core$async57779(self__.f,self__.ch,self__.meta57777,self__._,self__.fn1,meta57780__$1));
}));

(cljs.core.async.t_cljs$core$async57779.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_57781){
var self__ = this;
var _57781__$1 = this;
return self__.meta57780;
}));

(cljs.core.async.t_cljs$core$async57779.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async57779.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async57779.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async57779.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__57775_SHARP_){
var G__57782 = (((p1__57775_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__57775_SHARP_) : self__.f.call(null,p1__57775_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__57782) : f1.call(null,G__57782));
});
}));

(cljs.core.async.t_cljs$core$async57779.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta57777","meta57777",951436624,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async57776","cljs.core.async/t_cljs$core$async57776",2018018442,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta57780","meta57780",1716262372,null)], null);
}));

(cljs.core.async.t_cljs$core$async57779.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async57779.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async57779");

(cljs.core.async.t_cljs$core$async57779.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async57779");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async57779.
 */
cljs.core.async.__GT_t_cljs$core$async57779 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async57779(f__$1,ch__$1,meta57777__$1,___$2,fn1__$1,meta57780){
return (new cljs.core.async.t_cljs$core$async57779(f__$1,ch__$1,meta57777__$1,___$2,fn1__$1,meta57780));
});

}

return (new cljs.core.async.t_cljs$core$async57779(self__.f,self__.ch,self__.meta57777,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4115__auto__ = ret;
if(cljs.core.truth_(and__4115__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4115__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__57783 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__57783) : self__.f.call(null,G__57783));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async57776.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async57776.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async57776.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta57777","meta57777",951436624,null)], null);
}));

(cljs.core.async.t_cljs$core$async57776.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async57776.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async57776");

(cljs.core.async.t_cljs$core$async57776.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async57776");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async57776.
 */
cljs.core.async.__GT_t_cljs$core$async57776 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async57776(f__$1,ch__$1,meta57777){
return (new cljs.core.async.t_cljs$core$async57776(f__$1,ch__$1,meta57777));
});

}

return (new cljs.core.async.t_cljs$core$async57776(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async57784 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async57784 = (function (f,ch,meta57785){
this.f = f;
this.ch = ch;
this.meta57785 = meta57785;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async57784.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_57786,meta57785__$1){
var self__ = this;
var _57786__$1 = this;
return (new cljs.core.async.t_cljs$core$async57784(self__.f,self__.ch,meta57785__$1));
}));

(cljs.core.async.t_cljs$core$async57784.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_57786){
var self__ = this;
var _57786__$1 = this;
return self__.meta57785;
}));

(cljs.core.async.t_cljs$core$async57784.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async57784.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async57784.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async57784.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async57784.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async57784.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async57784.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta57785","meta57785",-1608170908,null)], null);
}));

(cljs.core.async.t_cljs$core$async57784.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async57784.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async57784");

(cljs.core.async.t_cljs$core$async57784.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async57784");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async57784.
 */
cljs.core.async.__GT_t_cljs$core$async57784 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async57784(f__$1,ch__$1,meta57785){
return (new cljs.core.async.t_cljs$core$async57784(f__$1,ch__$1,meta57785));
});

}

return (new cljs.core.async.t_cljs$core$async57784(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async57787 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async57787 = (function (p,ch,meta57788){
this.p = p;
this.ch = ch;
this.meta57788 = meta57788;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async57787.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_57789,meta57788__$1){
var self__ = this;
var _57789__$1 = this;
return (new cljs.core.async.t_cljs$core$async57787(self__.p,self__.ch,meta57788__$1));
}));

(cljs.core.async.t_cljs$core$async57787.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_57789){
var self__ = this;
var _57789__$1 = this;
return self__.meta57788;
}));

(cljs.core.async.t_cljs$core$async57787.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async57787.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async57787.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async57787.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async57787.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async57787.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async57787.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async57787.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta57788","meta57788",-512103167,null)], null);
}));

(cljs.core.async.t_cljs$core$async57787.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async57787.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async57787");

(cljs.core.async.t_cljs$core$async57787.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async57787");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async57787.
 */
cljs.core.async.__GT_t_cljs$core$async57787 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async57787(p__$1,ch__$1,meta57788){
return (new cljs.core.async.t_cljs$core$async57787(p__$1,ch__$1,meta57788));
});

}

return (new cljs.core.async.t_cljs$core$async57787(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__57791 = arguments.length;
switch (G__57791) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__56581__auto___59081 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__56582__auto__ = (function (){var switch__56532__auto__ = (function (state_57812){
var state_val_57813 = (state_57812[(1)]);
if((state_val_57813 === (7))){
var inst_57808 = (state_57812[(2)]);
var state_57812__$1 = state_57812;
var statearr_57814_59082 = state_57812__$1;
(statearr_57814_59082[(2)] = inst_57808);

(statearr_57814_59082[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57813 === (1))){
var state_57812__$1 = state_57812;
var statearr_57815_59083 = state_57812__$1;
(statearr_57815_59083[(2)] = null);

(statearr_57815_59083[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57813 === (4))){
var inst_57794 = (state_57812[(7)]);
var inst_57794__$1 = (state_57812[(2)]);
var inst_57795 = (inst_57794__$1 == null);
var state_57812__$1 = (function (){var statearr_57816 = state_57812;
(statearr_57816[(7)] = inst_57794__$1);

return statearr_57816;
})();
if(cljs.core.truth_(inst_57795)){
var statearr_57817_59087 = state_57812__$1;
(statearr_57817_59087[(1)] = (5));

} else {
var statearr_57818_59088 = state_57812__$1;
(statearr_57818_59088[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57813 === (6))){
var inst_57794 = (state_57812[(7)]);
var inst_57799 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_57794) : p.call(null,inst_57794));
var state_57812__$1 = state_57812;
if(cljs.core.truth_(inst_57799)){
var statearr_57819_59089 = state_57812__$1;
(statearr_57819_59089[(1)] = (8));

} else {
var statearr_57820_59090 = state_57812__$1;
(statearr_57820_59090[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57813 === (3))){
var inst_57810 = (state_57812[(2)]);
var state_57812__$1 = state_57812;
return cljs.core.async.impl.ioc_helpers.return_chan(state_57812__$1,inst_57810);
} else {
if((state_val_57813 === (2))){
var state_57812__$1 = state_57812;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_57812__$1,(4),ch);
} else {
if((state_val_57813 === (11))){
var inst_57802 = (state_57812[(2)]);
var state_57812__$1 = state_57812;
var statearr_57821_59094 = state_57812__$1;
(statearr_57821_59094[(2)] = inst_57802);

(statearr_57821_59094[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57813 === (9))){
var state_57812__$1 = state_57812;
var statearr_57822_59095 = state_57812__$1;
(statearr_57822_59095[(2)] = null);

(statearr_57822_59095[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57813 === (5))){
var inst_57797 = cljs.core.async.close_BANG_(out);
var state_57812__$1 = state_57812;
var statearr_57823_59099 = state_57812__$1;
(statearr_57823_59099[(2)] = inst_57797);

(statearr_57823_59099[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57813 === (10))){
var inst_57805 = (state_57812[(2)]);
var state_57812__$1 = (function (){var statearr_57824 = state_57812;
(statearr_57824[(8)] = inst_57805);

return statearr_57824;
})();
var statearr_57825_59100 = state_57812__$1;
(statearr_57825_59100[(2)] = null);

(statearr_57825_59100[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57813 === (8))){
var inst_57794 = (state_57812[(7)]);
var state_57812__$1 = state_57812;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_57812__$1,(11),out,inst_57794);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__56533__auto__ = null;
var cljs$core$async$state_machine__56533__auto____0 = (function (){
var statearr_57826 = [null,null,null,null,null,null,null,null,null];
(statearr_57826[(0)] = cljs$core$async$state_machine__56533__auto__);

(statearr_57826[(1)] = (1));

return statearr_57826;
});
var cljs$core$async$state_machine__56533__auto____1 = (function (state_57812){
while(true){
var ret_value__56534__auto__ = (function (){try{while(true){
var result__56535__auto__ = switch__56532__auto__(state_57812);
if(cljs.core.keyword_identical_QMARK_(result__56535__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__56535__auto__;
}
break;
}
}catch (e57827){var ex__56536__auto__ = e57827;
var statearr_57828_59102 = state_57812;
(statearr_57828_59102[(2)] = ex__56536__auto__);


if(cljs.core.seq((state_57812[(4)]))){
var statearr_57829_59103 = state_57812;
(statearr_57829_59103[(1)] = cljs.core.first((state_57812[(4)])));

} else {
throw ex__56536__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__56534__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__59104 = state_57812;
state_57812 = G__59104;
continue;
} else {
return ret_value__56534__auto__;
}
break;
}
});
cljs$core$async$state_machine__56533__auto__ = function(state_57812){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__56533__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__56533__auto____1.call(this,state_57812);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__56533__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__56533__auto____0;
cljs$core$async$state_machine__56533__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__56533__auto____1;
return cljs$core$async$state_machine__56533__auto__;
})()
})();
var state__56583__auto__ = (function (){var statearr_57830 = f__56582__auto__();
(statearr_57830[(6)] = c__56581__auto___59081);

return statearr_57830;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__56583__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__57832 = arguments.length;
switch (G__57832) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__56581__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__56582__auto__ = (function (){var switch__56532__auto__ = (function (state_57894){
var state_val_57895 = (state_57894[(1)]);
if((state_val_57895 === (7))){
var inst_57890 = (state_57894[(2)]);
var state_57894__$1 = state_57894;
var statearr_57896_59110 = state_57894__$1;
(statearr_57896_59110[(2)] = inst_57890);

(statearr_57896_59110[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57895 === (20))){
var inst_57860 = (state_57894[(7)]);
var inst_57871 = (state_57894[(2)]);
var inst_57872 = cljs.core.next(inst_57860);
var inst_57846 = inst_57872;
var inst_57847 = null;
var inst_57848 = (0);
var inst_57849 = (0);
var state_57894__$1 = (function (){var statearr_57897 = state_57894;
(statearr_57897[(8)] = inst_57849);

(statearr_57897[(9)] = inst_57871);

(statearr_57897[(10)] = inst_57846);

(statearr_57897[(11)] = inst_57848);

(statearr_57897[(12)] = inst_57847);

return statearr_57897;
})();
var statearr_57898_59111 = state_57894__$1;
(statearr_57898_59111[(2)] = null);

(statearr_57898_59111[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57895 === (1))){
var state_57894__$1 = state_57894;
var statearr_57899_59112 = state_57894__$1;
(statearr_57899_59112[(2)] = null);

(statearr_57899_59112[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57895 === (4))){
var inst_57835 = (state_57894[(13)]);
var inst_57835__$1 = (state_57894[(2)]);
var inst_57836 = (inst_57835__$1 == null);
var state_57894__$1 = (function (){var statearr_57900 = state_57894;
(statearr_57900[(13)] = inst_57835__$1);

return statearr_57900;
})();
if(cljs.core.truth_(inst_57836)){
var statearr_57901_59120 = state_57894__$1;
(statearr_57901_59120[(1)] = (5));

} else {
var statearr_57902_59121 = state_57894__$1;
(statearr_57902_59121[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57895 === (15))){
var state_57894__$1 = state_57894;
var statearr_57906_59122 = state_57894__$1;
(statearr_57906_59122[(2)] = null);

(statearr_57906_59122[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57895 === (21))){
var state_57894__$1 = state_57894;
var statearr_57907_59125 = state_57894__$1;
(statearr_57907_59125[(2)] = null);

(statearr_57907_59125[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57895 === (13))){
var inst_57849 = (state_57894[(8)]);
var inst_57846 = (state_57894[(10)]);
var inst_57848 = (state_57894[(11)]);
var inst_57847 = (state_57894[(12)]);
var inst_57856 = (state_57894[(2)]);
var inst_57857 = (inst_57849 + (1));
var tmp57903 = inst_57846;
var tmp57904 = inst_57848;
var tmp57905 = inst_57847;
var inst_57846__$1 = tmp57903;
var inst_57847__$1 = tmp57905;
var inst_57848__$1 = tmp57904;
var inst_57849__$1 = inst_57857;
var state_57894__$1 = (function (){var statearr_57908 = state_57894;
(statearr_57908[(8)] = inst_57849__$1);

(statearr_57908[(10)] = inst_57846__$1);

(statearr_57908[(11)] = inst_57848__$1);

(statearr_57908[(12)] = inst_57847__$1);

(statearr_57908[(14)] = inst_57856);

return statearr_57908;
})();
var statearr_57909_59127 = state_57894__$1;
(statearr_57909_59127[(2)] = null);

(statearr_57909_59127[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57895 === (22))){
var state_57894__$1 = state_57894;
var statearr_57910_59128 = state_57894__$1;
(statearr_57910_59128[(2)] = null);

(statearr_57910_59128[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57895 === (6))){
var inst_57835 = (state_57894[(13)]);
var inst_57844 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_57835) : f.call(null,inst_57835));
var inst_57845 = cljs.core.seq(inst_57844);
var inst_57846 = inst_57845;
var inst_57847 = null;
var inst_57848 = (0);
var inst_57849 = (0);
var state_57894__$1 = (function (){var statearr_57911 = state_57894;
(statearr_57911[(8)] = inst_57849);

(statearr_57911[(10)] = inst_57846);

(statearr_57911[(11)] = inst_57848);

(statearr_57911[(12)] = inst_57847);

return statearr_57911;
})();
var statearr_57912_59129 = state_57894__$1;
(statearr_57912_59129[(2)] = null);

(statearr_57912_59129[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57895 === (17))){
var inst_57860 = (state_57894[(7)]);
var inst_57864 = cljs.core.chunk_first(inst_57860);
var inst_57865 = cljs.core.chunk_rest(inst_57860);
var inst_57866 = cljs.core.count(inst_57864);
var inst_57846 = inst_57865;
var inst_57847 = inst_57864;
var inst_57848 = inst_57866;
var inst_57849 = (0);
var state_57894__$1 = (function (){var statearr_57913 = state_57894;
(statearr_57913[(8)] = inst_57849);

(statearr_57913[(10)] = inst_57846);

(statearr_57913[(11)] = inst_57848);

(statearr_57913[(12)] = inst_57847);

return statearr_57913;
})();
var statearr_57914_59132 = state_57894__$1;
(statearr_57914_59132[(2)] = null);

(statearr_57914_59132[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57895 === (3))){
var inst_57892 = (state_57894[(2)]);
var state_57894__$1 = state_57894;
return cljs.core.async.impl.ioc_helpers.return_chan(state_57894__$1,inst_57892);
} else {
if((state_val_57895 === (12))){
var inst_57880 = (state_57894[(2)]);
var state_57894__$1 = state_57894;
var statearr_57915_59133 = state_57894__$1;
(statearr_57915_59133[(2)] = inst_57880);

(statearr_57915_59133[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57895 === (2))){
var state_57894__$1 = state_57894;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_57894__$1,(4),in$);
} else {
if((state_val_57895 === (23))){
var inst_57888 = (state_57894[(2)]);
var state_57894__$1 = state_57894;
var statearr_57916_59141 = state_57894__$1;
(statearr_57916_59141[(2)] = inst_57888);

(statearr_57916_59141[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57895 === (19))){
var inst_57875 = (state_57894[(2)]);
var state_57894__$1 = state_57894;
var statearr_57917_59147 = state_57894__$1;
(statearr_57917_59147[(2)] = inst_57875);

(statearr_57917_59147[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57895 === (11))){
var inst_57846 = (state_57894[(10)]);
var inst_57860 = (state_57894[(7)]);
var inst_57860__$1 = cljs.core.seq(inst_57846);
var state_57894__$1 = (function (){var statearr_57918 = state_57894;
(statearr_57918[(7)] = inst_57860__$1);

return statearr_57918;
})();
if(inst_57860__$1){
var statearr_57919_59160 = state_57894__$1;
(statearr_57919_59160[(1)] = (14));

} else {
var statearr_57920_59161 = state_57894__$1;
(statearr_57920_59161[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57895 === (9))){
var inst_57882 = (state_57894[(2)]);
var inst_57883 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_57894__$1 = (function (){var statearr_57921 = state_57894;
(statearr_57921[(15)] = inst_57882);

return statearr_57921;
})();
if(cljs.core.truth_(inst_57883)){
var statearr_57922_59165 = state_57894__$1;
(statearr_57922_59165[(1)] = (21));

} else {
var statearr_57923_59166 = state_57894__$1;
(statearr_57923_59166[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57895 === (5))){
var inst_57838 = cljs.core.async.close_BANG_(out);
var state_57894__$1 = state_57894;
var statearr_57924_59171 = state_57894__$1;
(statearr_57924_59171[(2)] = inst_57838);

(statearr_57924_59171[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57895 === (14))){
var inst_57860 = (state_57894[(7)]);
var inst_57862 = cljs.core.chunked_seq_QMARK_(inst_57860);
var state_57894__$1 = state_57894;
if(inst_57862){
var statearr_57925_59172 = state_57894__$1;
(statearr_57925_59172[(1)] = (17));

} else {
var statearr_57926_59177 = state_57894__$1;
(statearr_57926_59177[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57895 === (16))){
var inst_57878 = (state_57894[(2)]);
var state_57894__$1 = state_57894;
var statearr_57927_59179 = state_57894__$1;
(statearr_57927_59179[(2)] = inst_57878);

(statearr_57927_59179[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57895 === (10))){
var inst_57849 = (state_57894[(8)]);
var inst_57847 = (state_57894[(12)]);
var inst_57854 = cljs.core._nth(inst_57847,inst_57849);
var state_57894__$1 = state_57894;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_57894__$1,(13),out,inst_57854);
} else {
if((state_val_57895 === (18))){
var inst_57860 = (state_57894[(7)]);
var inst_57869 = cljs.core.first(inst_57860);
var state_57894__$1 = state_57894;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_57894__$1,(20),out,inst_57869);
} else {
if((state_val_57895 === (8))){
var inst_57849 = (state_57894[(8)]);
var inst_57848 = (state_57894[(11)]);
var inst_57851 = (inst_57849 < inst_57848);
var inst_57852 = inst_57851;
var state_57894__$1 = state_57894;
if(cljs.core.truth_(inst_57852)){
var statearr_57928_59214 = state_57894__$1;
(statearr_57928_59214[(1)] = (10));

} else {
var statearr_57929_59219 = state_57894__$1;
(statearr_57929_59219[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__56533__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__56533__auto____0 = (function (){
var statearr_57930 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_57930[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__56533__auto__);

(statearr_57930[(1)] = (1));

return statearr_57930;
});
var cljs$core$async$mapcat_STAR__$_state_machine__56533__auto____1 = (function (state_57894){
while(true){
var ret_value__56534__auto__ = (function (){try{while(true){
var result__56535__auto__ = switch__56532__auto__(state_57894);
if(cljs.core.keyword_identical_QMARK_(result__56535__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__56535__auto__;
}
break;
}
}catch (e57931){var ex__56536__auto__ = e57931;
var statearr_57932_59237 = state_57894;
(statearr_57932_59237[(2)] = ex__56536__auto__);


if(cljs.core.seq((state_57894[(4)]))){
var statearr_57933_59243 = state_57894;
(statearr_57933_59243[(1)] = cljs.core.first((state_57894[(4)])));

} else {
throw ex__56536__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__56534__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__59245 = state_57894;
state_57894 = G__59245;
continue;
} else {
return ret_value__56534__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__56533__auto__ = function(state_57894){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__56533__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__56533__auto____1.call(this,state_57894);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__56533__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__56533__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__56533__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__56533__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__56533__auto__;
})()
})();
var state__56583__auto__ = (function (){var statearr_57934 = f__56582__auto__();
(statearr_57934[(6)] = c__56581__auto__);

return statearr_57934;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__56583__auto__);
}));

return c__56581__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__57936 = arguments.length;
switch (G__57936) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__57938 = arguments.length;
switch (G__57938) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__57940 = arguments.length;
switch (G__57940) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__56581__auto___59286 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__56582__auto__ = (function (){var switch__56532__auto__ = (function (state_57964){
var state_val_57965 = (state_57964[(1)]);
if((state_val_57965 === (7))){
var inst_57959 = (state_57964[(2)]);
var state_57964__$1 = state_57964;
var statearr_57966_59287 = state_57964__$1;
(statearr_57966_59287[(2)] = inst_57959);

(statearr_57966_59287[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57965 === (1))){
var inst_57941 = null;
var state_57964__$1 = (function (){var statearr_57967 = state_57964;
(statearr_57967[(7)] = inst_57941);

return statearr_57967;
})();
var statearr_57968_59296 = state_57964__$1;
(statearr_57968_59296[(2)] = null);

(statearr_57968_59296[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57965 === (4))){
var inst_57944 = (state_57964[(8)]);
var inst_57944__$1 = (state_57964[(2)]);
var inst_57945 = (inst_57944__$1 == null);
var inst_57946 = cljs.core.not(inst_57945);
var state_57964__$1 = (function (){var statearr_57969 = state_57964;
(statearr_57969[(8)] = inst_57944__$1);

return statearr_57969;
})();
if(inst_57946){
var statearr_57970_59297 = state_57964__$1;
(statearr_57970_59297[(1)] = (5));

} else {
var statearr_57971_59298 = state_57964__$1;
(statearr_57971_59298[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57965 === (6))){
var state_57964__$1 = state_57964;
var statearr_57972_59300 = state_57964__$1;
(statearr_57972_59300[(2)] = null);

(statearr_57972_59300[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57965 === (3))){
var inst_57961 = (state_57964[(2)]);
var inst_57962 = cljs.core.async.close_BANG_(out);
var state_57964__$1 = (function (){var statearr_57973 = state_57964;
(statearr_57973[(9)] = inst_57961);

return statearr_57973;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_57964__$1,inst_57962);
} else {
if((state_val_57965 === (2))){
var state_57964__$1 = state_57964;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_57964__$1,(4),ch);
} else {
if((state_val_57965 === (11))){
var inst_57944 = (state_57964[(8)]);
var inst_57953 = (state_57964[(2)]);
var inst_57941 = inst_57944;
var state_57964__$1 = (function (){var statearr_57974 = state_57964;
(statearr_57974[(10)] = inst_57953);

(statearr_57974[(7)] = inst_57941);

return statearr_57974;
})();
var statearr_57975_59306 = state_57964__$1;
(statearr_57975_59306[(2)] = null);

(statearr_57975_59306[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57965 === (9))){
var inst_57944 = (state_57964[(8)]);
var state_57964__$1 = state_57964;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_57964__$1,(11),out,inst_57944);
} else {
if((state_val_57965 === (5))){
var inst_57941 = (state_57964[(7)]);
var inst_57944 = (state_57964[(8)]);
var inst_57948 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_57944,inst_57941);
var state_57964__$1 = state_57964;
if(inst_57948){
var statearr_57977_59307 = state_57964__$1;
(statearr_57977_59307[(1)] = (8));

} else {
var statearr_57978_59308 = state_57964__$1;
(statearr_57978_59308[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57965 === (10))){
var inst_57956 = (state_57964[(2)]);
var state_57964__$1 = state_57964;
var statearr_57979_59309 = state_57964__$1;
(statearr_57979_59309[(2)] = inst_57956);

(statearr_57979_59309[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57965 === (8))){
var inst_57941 = (state_57964[(7)]);
var tmp57976 = inst_57941;
var inst_57941__$1 = tmp57976;
var state_57964__$1 = (function (){var statearr_57980 = state_57964;
(statearr_57980[(7)] = inst_57941__$1);

return statearr_57980;
})();
var statearr_57981_59311 = state_57964__$1;
(statearr_57981_59311[(2)] = null);

(statearr_57981_59311[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__56533__auto__ = null;
var cljs$core$async$state_machine__56533__auto____0 = (function (){
var statearr_57982 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_57982[(0)] = cljs$core$async$state_machine__56533__auto__);

(statearr_57982[(1)] = (1));

return statearr_57982;
});
var cljs$core$async$state_machine__56533__auto____1 = (function (state_57964){
while(true){
var ret_value__56534__auto__ = (function (){try{while(true){
var result__56535__auto__ = switch__56532__auto__(state_57964);
if(cljs.core.keyword_identical_QMARK_(result__56535__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__56535__auto__;
}
break;
}
}catch (e57983){var ex__56536__auto__ = e57983;
var statearr_57984_59316 = state_57964;
(statearr_57984_59316[(2)] = ex__56536__auto__);


if(cljs.core.seq((state_57964[(4)]))){
var statearr_57985_59317 = state_57964;
(statearr_57985_59317[(1)] = cljs.core.first((state_57964[(4)])));

} else {
throw ex__56536__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__56534__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__59318 = state_57964;
state_57964 = G__59318;
continue;
} else {
return ret_value__56534__auto__;
}
break;
}
});
cljs$core$async$state_machine__56533__auto__ = function(state_57964){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__56533__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__56533__auto____1.call(this,state_57964);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__56533__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__56533__auto____0;
cljs$core$async$state_machine__56533__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__56533__auto____1;
return cljs$core$async$state_machine__56533__auto__;
})()
})();
var state__56583__auto__ = (function (){var statearr_57986 = f__56582__auto__();
(statearr_57986[(6)] = c__56581__auto___59286);

return statearr_57986;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__56583__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__57988 = arguments.length;
switch (G__57988) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__56581__auto___59320 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__56582__auto__ = (function (){var switch__56532__auto__ = (function (state_58026){
var state_val_58027 = (state_58026[(1)]);
if((state_val_58027 === (7))){
var inst_58022 = (state_58026[(2)]);
var state_58026__$1 = state_58026;
var statearr_58028_59321 = state_58026__$1;
(statearr_58028_59321[(2)] = inst_58022);

(statearr_58028_59321[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58027 === (1))){
var inst_57989 = (new Array(n));
var inst_57990 = inst_57989;
var inst_57991 = (0);
var state_58026__$1 = (function (){var statearr_58029 = state_58026;
(statearr_58029[(7)] = inst_57991);

(statearr_58029[(8)] = inst_57990);

return statearr_58029;
})();
var statearr_58030_59322 = state_58026__$1;
(statearr_58030_59322[(2)] = null);

(statearr_58030_59322[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58027 === (4))){
var inst_57994 = (state_58026[(9)]);
var inst_57994__$1 = (state_58026[(2)]);
var inst_57995 = (inst_57994__$1 == null);
var inst_57996 = cljs.core.not(inst_57995);
var state_58026__$1 = (function (){var statearr_58031 = state_58026;
(statearr_58031[(9)] = inst_57994__$1);

return statearr_58031;
})();
if(inst_57996){
var statearr_58032_59326 = state_58026__$1;
(statearr_58032_59326[(1)] = (5));

} else {
var statearr_58033_59327 = state_58026__$1;
(statearr_58033_59327[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58027 === (15))){
var inst_58016 = (state_58026[(2)]);
var state_58026__$1 = state_58026;
var statearr_58034_59328 = state_58026__$1;
(statearr_58034_59328[(2)] = inst_58016);

(statearr_58034_59328[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58027 === (13))){
var state_58026__$1 = state_58026;
var statearr_58035_59329 = state_58026__$1;
(statearr_58035_59329[(2)] = null);

(statearr_58035_59329[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58027 === (6))){
var inst_57991 = (state_58026[(7)]);
var inst_58012 = (inst_57991 > (0));
var state_58026__$1 = state_58026;
if(cljs.core.truth_(inst_58012)){
var statearr_58036_59330 = state_58026__$1;
(statearr_58036_59330[(1)] = (12));

} else {
var statearr_58037_59331 = state_58026__$1;
(statearr_58037_59331[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58027 === (3))){
var inst_58024 = (state_58026[(2)]);
var state_58026__$1 = state_58026;
return cljs.core.async.impl.ioc_helpers.return_chan(state_58026__$1,inst_58024);
} else {
if((state_val_58027 === (12))){
var inst_57990 = (state_58026[(8)]);
var inst_58014 = cljs.core.vec(inst_57990);
var state_58026__$1 = state_58026;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_58026__$1,(15),out,inst_58014);
} else {
if((state_val_58027 === (2))){
var state_58026__$1 = state_58026;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_58026__$1,(4),ch);
} else {
if((state_val_58027 === (11))){
var inst_58006 = (state_58026[(2)]);
var inst_58007 = (new Array(n));
var inst_57990 = inst_58007;
var inst_57991 = (0);
var state_58026__$1 = (function (){var statearr_58038 = state_58026;
(statearr_58038[(7)] = inst_57991);

(statearr_58038[(10)] = inst_58006);

(statearr_58038[(8)] = inst_57990);

return statearr_58038;
})();
var statearr_58039_59332 = state_58026__$1;
(statearr_58039_59332[(2)] = null);

(statearr_58039_59332[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58027 === (9))){
var inst_57990 = (state_58026[(8)]);
var inst_58004 = cljs.core.vec(inst_57990);
var state_58026__$1 = state_58026;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_58026__$1,(11),out,inst_58004);
} else {
if((state_val_58027 === (5))){
var inst_57994 = (state_58026[(9)]);
var inst_57991 = (state_58026[(7)]);
var inst_57999 = (state_58026[(11)]);
var inst_57990 = (state_58026[(8)]);
var inst_57998 = (inst_57990[inst_57991] = inst_57994);
var inst_57999__$1 = (inst_57991 + (1));
var inst_58000 = (inst_57999__$1 < n);
var state_58026__$1 = (function (){var statearr_58040 = state_58026;
(statearr_58040[(12)] = inst_57998);

(statearr_58040[(11)] = inst_57999__$1);

return statearr_58040;
})();
if(cljs.core.truth_(inst_58000)){
var statearr_58041_59334 = state_58026__$1;
(statearr_58041_59334[(1)] = (8));

} else {
var statearr_58042_59335 = state_58026__$1;
(statearr_58042_59335[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58027 === (14))){
var inst_58019 = (state_58026[(2)]);
var inst_58020 = cljs.core.async.close_BANG_(out);
var state_58026__$1 = (function (){var statearr_58044 = state_58026;
(statearr_58044[(13)] = inst_58019);

return statearr_58044;
})();
var statearr_58045_59336 = state_58026__$1;
(statearr_58045_59336[(2)] = inst_58020);

(statearr_58045_59336[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58027 === (10))){
var inst_58010 = (state_58026[(2)]);
var state_58026__$1 = state_58026;
var statearr_58046_59338 = state_58026__$1;
(statearr_58046_59338[(2)] = inst_58010);

(statearr_58046_59338[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58027 === (8))){
var inst_57999 = (state_58026[(11)]);
var inst_57990 = (state_58026[(8)]);
var tmp58043 = inst_57990;
var inst_57990__$1 = tmp58043;
var inst_57991 = inst_57999;
var state_58026__$1 = (function (){var statearr_58047 = state_58026;
(statearr_58047[(7)] = inst_57991);

(statearr_58047[(8)] = inst_57990__$1);

return statearr_58047;
})();
var statearr_58048_59339 = state_58026__$1;
(statearr_58048_59339[(2)] = null);

(statearr_58048_59339[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__56533__auto__ = null;
var cljs$core$async$state_machine__56533__auto____0 = (function (){
var statearr_58049 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_58049[(0)] = cljs$core$async$state_machine__56533__auto__);

(statearr_58049[(1)] = (1));

return statearr_58049;
});
var cljs$core$async$state_machine__56533__auto____1 = (function (state_58026){
while(true){
var ret_value__56534__auto__ = (function (){try{while(true){
var result__56535__auto__ = switch__56532__auto__(state_58026);
if(cljs.core.keyword_identical_QMARK_(result__56535__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__56535__auto__;
}
break;
}
}catch (e58050){var ex__56536__auto__ = e58050;
var statearr_58051_59340 = state_58026;
(statearr_58051_59340[(2)] = ex__56536__auto__);


if(cljs.core.seq((state_58026[(4)]))){
var statearr_58052_59341 = state_58026;
(statearr_58052_59341[(1)] = cljs.core.first((state_58026[(4)])));

} else {
throw ex__56536__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__56534__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__59342 = state_58026;
state_58026 = G__59342;
continue;
} else {
return ret_value__56534__auto__;
}
break;
}
});
cljs$core$async$state_machine__56533__auto__ = function(state_58026){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__56533__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__56533__auto____1.call(this,state_58026);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__56533__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__56533__auto____0;
cljs$core$async$state_machine__56533__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__56533__auto____1;
return cljs$core$async$state_machine__56533__auto__;
})()
})();
var state__56583__auto__ = (function (){var statearr_58053 = f__56582__auto__();
(statearr_58053[(6)] = c__56581__auto___59320);

return statearr_58053;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__56583__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__58055 = arguments.length;
switch (G__58055) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__56581__auto___59344 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__56582__auto__ = (function (){var switch__56532__auto__ = (function (state_58097){
var state_val_58098 = (state_58097[(1)]);
if((state_val_58098 === (7))){
var inst_58093 = (state_58097[(2)]);
var state_58097__$1 = state_58097;
var statearr_58099_59345 = state_58097__$1;
(statearr_58099_59345[(2)] = inst_58093);

(statearr_58099_59345[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58098 === (1))){
var inst_58056 = [];
var inst_58057 = inst_58056;
var inst_58058 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_58097__$1 = (function (){var statearr_58100 = state_58097;
(statearr_58100[(7)] = inst_58057);

(statearr_58100[(8)] = inst_58058);

return statearr_58100;
})();
var statearr_58101_59346 = state_58097__$1;
(statearr_58101_59346[(2)] = null);

(statearr_58101_59346[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58098 === (4))){
var inst_58061 = (state_58097[(9)]);
var inst_58061__$1 = (state_58097[(2)]);
var inst_58062 = (inst_58061__$1 == null);
var inst_58063 = cljs.core.not(inst_58062);
var state_58097__$1 = (function (){var statearr_58102 = state_58097;
(statearr_58102[(9)] = inst_58061__$1);

return statearr_58102;
})();
if(inst_58063){
var statearr_58103_59347 = state_58097__$1;
(statearr_58103_59347[(1)] = (5));

} else {
var statearr_58104_59348 = state_58097__$1;
(statearr_58104_59348[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58098 === (15))){
var inst_58087 = (state_58097[(2)]);
var state_58097__$1 = state_58097;
var statearr_58105_59349 = state_58097__$1;
(statearr_58105_59349[(2)] = inst_58087);

(statearr_58105_59349[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58098 === (13))){
var state_58097__$1 = state_58097;
var statearr_58106_59350 = state_58097__$1;
(statearr_58106_59350[(2)] = null);

(statearr_58106_59350[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58098 === (6))){
var inst_58057 = (state_58097[(7)]);
var inst_58082 = inst_58057.length;
var inst_58083 = (inst_58082 > (0));
var state_58097__$1 = state_58097;
if(cljs.core.truth_(inst_58083)){
var statearr_58107_59351 = state_58097__$1;
(statearr_58107_59351[(1)] = (12));

} else {
var statearr_58108_59352 = state_58097__$1;
(statearr_58108_59352[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58098 === (3))){
var inst_58095 = (state_58097[(2)]);
var state_58097__$1 = state_58097;
return cljs.core.async.impl.ioc_helpers.return_chan(state_58097__$1,inst_58095);
} else {
if((state_val_58098 === (12))){
var inst_58057 = (state_58097[(7)]);
var inst_58085 = cljs.core.vec(inst_58057);
var state_58097__$1 = state_58097;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_58097__$1,(15),out,inst_58085);
} else {
if((state_val_58098 === (2))){
var state_58097__$1 = state_58097;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_58097__$1,(4),ch);
} else {
if((state_val_58098 === (11))){
var inst_58061 = (state_58097[(9)]);
var inst_58065 = (state_58097[(10)]);
var inst_58075 = (state_58097[(2)]);
var inst_58076 = [];
var inst_58077 = inst_58076.push(inst_58061);
var inst_58057 = inst_58076;
var inst_58058 = inst_58065;
var state_58097__$1 = (function (){var statearr_58109 = state_58097;
(statearr_58109[(11)] = inst_58077);

(statearr_58109[(7)] = inst_58057);

(statearr_58109[(12)] = inst_58075);

(statearr_58109[(8)] = inst_58058);

return statearr_58109;
})();
var statearr_58110_59353 = state_58097__$1;
(statearr_58110_59353[(2)] = null);

(statearr_58110_59353[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58098 === (9))){
var inst_58057 = (state_58097[(7)]);
var inst_58073 = cljs.core.vec(inst_58057);
var state_58097__$1 = state_58097;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_58097__$1,(11),out,inst_58073);
} else {
if((state_val_58098 === (5))){
var inst_58061 = (state_58097[(9)]);
var inst_58058 = (state_58097[(8)]);
var inst_58065 = (state_58097[(10)]);
var inst_58065__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_58061) : f.call(null,inst_58061));
var inst_58066 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_58065__$1,inst_58058);
var inst_58067 = cljs.core.keyword_identical_QMARK_(inst_58058,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_58068 = ((inst_58066) || (inst_58067));
var state_58097__$1 = (function (){var statearr_58111 = state_58097;
(statearr_58111[(10)] = inst_58065__$1);

return statearr_58111;
})();
if(cljs.core.truth_(inst_58068)){
var statearr_58112_59354 = state_58097__$1;
(statearr_58112_59354[(1)] = (8));

} else {
var statearr_58113_59355 = state_58097__$1;
(statearr_58113_59355[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58098 === (14))){
var inst_58090 = (state_58097[(2)]);
var inst_58091 = cljs.core.async.close_BANG_(out);
var state_58097__$1 = (function (){var statearr_58115 = state_58097;
(statearr_58115[(13)] = inst_58090);

return statearr_58115;
})();
var statearr_58116_59356 = state_58097__$1;
(statearr_58116_59356[(2)] = inst_58091);

(statearr_58116_59356[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58098 === (10))){
var inst_58080 = (state_58097[(2)]);
var state_58097__$1 = state_58097;
var statearr_58117_59361 = state_58097__$1;
(statearr_58117_59361[(2)] = inst_58080);

(statearr_58117_59361[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58098 === (8))){
var inst_58061 = (state_58097[(9)]);
var inst_58057 = (state_58097[(7)]);
var inst_58065 = (state_58097[(10)]);
var inst_58070 = inst_58057.push(inst_58061);
var tmp58114 = inst_58057;
var inst_58057__$1 = tmp58114;
var inst_58058 = inst_58065;
var state_58097__$1 = (function (){var statearr_58118 = state_58097;
(statearr_58118[(14)] = inst_58070);

(statearr_58118[(7)] = inst_58057__$1);

(statearr_58118[(8)] = inst_58058);

return statearr_58118;
})();
var statearr_58119_59364 = state_58097__$1;
(statearr_58119_59364[(2)] = null);

(statearr_58119_59364[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__56533__auto__ = null;
var cljs$core$async$state_machine__56533__auto____0 = (function (){
var statearr_58120 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_58120[(0)] = cljs$core$async$state_machine__56533__auto__);

(statearr_58120[(1)] = (1));

return statearr_58120;
});
var cljs$core$async$state_machine__56533__auto____1 = (function (state_58097){
while(true){
var ret_value__56534__auto__ = (function (){try{while(true){
var result__56535__auto__ = switch__56532__auto__(state_58097);
if(cljs.core.keyword_identical_QMARK_(result__56535__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__56535__auto__;
}
break;
}
}catch (e58121){var ex__56536__auto__ = e58121;
var statearr_58122_59367 = state_58097;
(statearr_58122_59367[(2)] = ex__56536__auto__);


if(cljs.core.seq((state_58097[(4)]))){
var statearr_58123_59368 = state_58097;
(statearr_58123_59368[(1)] = cljs.core.first((state_58097[(4)])));

} else {
throw ex__56536__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__56534__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__59370 = state_58097;
state_58097 = G__59370;
continue;
} else {
return ret_value__56534__auto__;
}
break;
}
});
cljs$core$async$state_machine__56533__auto__ = function(state_58097){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__56533__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__56533__auto____1.call(this,state_58097);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__56533__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__56533__auto____0;
cljs$core$async$state_machine__56533__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__56533__auto____1;
return cljs$core$async$state_machine__56533__auto__;
})()
})();
var state__56583__auto__ = (function (){var statearr_58124 = f__56582__auto__();
(statearr_58124[(6)] = c__56581__auto___59344);

return statearr_58124;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__56583__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
