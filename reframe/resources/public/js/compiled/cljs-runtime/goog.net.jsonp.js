goog.provide("goog.net.Jsonp");
goog.require("goog.html.TrustedResourceUrl");
goog.require("goog.net.jsloader");
goog.require("goog.object");
/**
 * @final
 * @constructor
 * @param {!goog.html.TrustedResourceUrl} uri
 * @param {string=} opt_callbackParamName
 */
goog.net.Jsonp = function(uri, opt_callbackParamName) {
  /** @private @type {!goog.html.TrustedResourceUrl} */ this.uri_ = uri;
  /** @private @type {string} */ this.callbackParamName_ = opt_callbackParamName ? opt_callbackParamName : "callback";
  /** @private @type {number} */ this.timeout_ = 5000;
  /** @private @type {string} */ this.nonce_ = "";
};
goog.net.Jsonp.CALLBACKS = "_callbacks_";
/** @private */ goog.net.Jsonp.scriptCounter_ = 0;
/**
 * @private
 * @param {string} id
 * @return {string}
 */
goog.net.Jsonp.getCallbackId_ = function(id) {
  return goog.net.Jsonp.CALLBACKS + "__" + id;
};
/**
 * @param {number} timeout
 */
goog.net.Jsonp.prototype.setRequestTimeout = function(timeout) {
  this.timeout_ = timeout;
};
/**
 * @return {number}
 */
goog.net.Jsonp.prototype.getRequestTimeout = function() {
  return this.timeout_;
};
/**
 * @param {string} nonce
 */
goog.net.Jsonp.prototype.setNonce = function(nonce) {
  this.nonce_ = nonce;
};
/**
 * @param {Object=} opt_payload
 * @param {Function=} opt_replyCallback
 * @param {Function=} opt_errorCallback
 * @param {string=} opt_callbackParamValue
 * @return {!Object}
 */
goog.net.Jsonp.prototype.send = function(opt_payload, opt_replyCallback, opt_errorCallback, opt_callbackParamValue) {
  var payload = opt_payload ? goog.object.clone(opt_payload) : {};
  var id = opt_callbackParamValue || "_" + (goog.net.Jsonp.scriptCounter_++).toString(36) + goog.now().toString(36);
  var callbackId = goog.net.Jsonp.getCallbackId_(id);
  if (opt_replyCallback) {
    var reply = goog.net.Jsonp.newReplyHandler_(id, opt_replyCallback);
    goog.global[callbackId] = reply;
    payload[this.callbackParamName_] = callbackId;
  }
  var options = {timeout:this.timeout_, cleanupWhenDone:true};
  if (this.nonce_) {
    options.attributes = {"nonce":this.nonce_};
  }
  var uri = this.uri_.cloneWithParams(payload);
  var deferred = goog.net.jsloader.safeLoad(uri, options);
  var error = goog.net.Jsonp.newErrorHandler_(id, payload, opt_errorCallback);
  deferred.addErrback(error);
  return {id_:id, deferred_:deferred};
};
/**
 * @param {Object} request
 * @suppress {strictMissingProperties}
 */
goog.net.Jsonp.prototype.cancel = function(request) {
  if (request) {
    if (request.deferred_) {
      request.deferred_.cancel();
    }
    if (request.id_) {
      goog.net.Jsonp.cleanup_(request.id_, false);
    }
  }
};
/**
 * @private
 * @param {string} id
 * @param {Object} payload
 * @param {Function=} opt_errorCallback
 * @return {!Function}
 */
goog.net.Jsonp.newErrorHandler_ = function(id, payload, opt_errorCallback) {
  return function() {
    goog.net.Jsonp.cleanup_(id, false);
    if (opt_errorCallback) {
      opt_errorCallback(payload);
    }
  };
};
/**
 * @private
 * @param {string} id
 * @param {Function} replyCallback
 * @return {!Function}
 */
goog.net.Jsonp.newReplyHandler_ = function(id, replyCallback) {
  /**
   * @param {...Object} var_args
   */
  var handler = function(var_args) {
    goog.net.Jsonp.cleanup_(id, true);
    replyCallback.apply(undefined, arguments);
  };
  return handler;
};
/**
 * @private
 * @param {string} id
 * @param {boolean} deleteReplyHandler
 */
goog.net.Jsonp.cleanup_ = function(id, deleteReplyHandler) {
  var callbackId = goog.net.Jsonp.getCallbackId_(id);
  if (goog.global[callbackId]) {
    if (deleteReplyHandler) {
      try {
        delete goog.global[callbackId];
      } catch (e) {
        goog.global[callbackId] = undefined;
      }
    } else {
      goog.global[callbackId] = goog.nullFunction;
    }
  }
};

//# sourceMappingURL=goog.net.jsonp.js.map
