goog.provide("goog.async.Deferred");
goog.provide("goog.async.Deferred.AlreadyCalledError");
goog.provide("goog.async.Deferred.CanceledError");
goog.require("goog.Promise");
goog.require("goog.Thenable");
goog.require("goog.array");
goog.require("goog.asserts");
goog.require("goog.debug.Error");
/**
 * @constructor
 * @implements {goog.Thenable<VALUE>}
 * @param {Function=} opt_onCancelFunction
 * @param {Object=} opt_defaultScope
 * @template VALUE
 */
goog.async.Deferred = function(opt_onCancelFunction, opt_defaultScope) {
  /** @private @type {!Array<!Array>} */ this.sequence_ = [];
  /** @private @type {(Function|undefined)} */ this.onCancelFunction_ = opt_onCancelFunction;
  /** @private @type {Object} */ this.defaultScope_ = opt_defaultScope || null;
  /** @private @type {boolean} */ this.fired_ = false;
  /** @private @type {boolean} */ this.hadError_ = false;
  /** @private @type {*} */ this.result_ = undefined;
  /** @private @type {boolean} */ this.blocked_ = false;
  /** @private @type {boolean} */ this.blocking_ = false;
  /** @private @type {boolean} */ this.silentlyCanceled_ = false;
  /** @private @type {number} */ this.unhandledErrorId_ = 0;
  /** @private @type {?goog.async.Deferred} */ this.parent_ = null;
  /** @private @type {number} */ this.branches_ = 0;
  if (goog.async.Deferred.LONG_STACK_TRACES) {
    /** @private @type {?string} */ this.constructorStack_ = null;
    if (Error.captureStackTrace) {
      var target = {stack:""};
      Error.captureStackTrace(target, goog.async.Deferred);
      if (typeof target.stack == "string") {
        this.constructorStack_ = target.stack.replace(/^[^\n]*\n/, "");
      }
    }
  }
};
/** @define {boolean} */ goog.async.Deferred.STRICT_ERRORS = goog.define("goog.async.Deferred.STRICT_ERRORS", false);
/** @define {boolean} */ goog.async.Deferred.LONG_STACK_TRACES = goog.define("goog.async.Deferred.LONG_STACK_TRACES", false);
/**
 * @param {boolean=} opt_deepCancel
 */
goog.async.Deferred.prototype.cancel = function(opt_deepCancel) {
  if (!this.hasFired()) {
    if (this.parent_) {
      var parent = this.parent_;
      delete this.parent_;
      if (opt_deepCancel) {
        parent.cancel(opt_deepCancel);
      } else {
        parent.branchCancel_();
      }
    }
    if (this.onCancelFunction_) {
      this.onCancelFunction_.call(this.defaultScope_, this);
    } else {
      this.silentlyCanceled_ = true;
    }
    if (!this.hasFired()) {
      this.errback(new goog.async.Deferred.CanceledError(this));
    }
  } else {
    if (this.result_ instanceof goog.async.Deferred) {
      this.result_.cancel();
    }
  }
};
/** @private */ goog.async.Deferred.prototype.branchCancel_ = function() {
  this.branches_--;
  if (this.branches_ <= 0) {
    this.cancel();
  }
};
/**
 * @private
 * @param {boolean} isSuccess
 * @param {*} res
 */
goog.async.Deferred.prototype.continue_ = function(isSuccess, res) {
  this.blocked_ = false;
  this.updateResult_(isSuccess, res);
};
/**
 * @private
 * @param {boolean} isSuccess
 * @param {*} res
 */
goog.async.Deferred.prototype.updateResult_ = function(isSuccess, res) {
  this.fired_ = true;
  this.result_ = res;
  this.hadError_ = !isSuccess;
  this.fire_();
};
/** @private @throws {Error} */ goog.async.Deferred.prototype.check_ = function() {
  if (this.hasFired()) {
    if (!this.silentlyCanceled_) {
      throw new goog.async.Deferred.AlreadyCalledError(this);
    }
    this.silentlyCanceled_ = false;
  }
};
/**
 * @param {VALUE=} opt_result
 */
goog.async.Deferred.prototype.callback = function(opt_result) {
  this.check_();
  this.assertNotDeferred_(opt_result);
  this.updateResult_(true, opt_result);
};
/**
 * @param {*=} opt_result
 */
goog.async.Deferred.prototype.errback = function(opt_result) {
  this.check_();
  this.assertNotDeferred_(opt_result);
  this.makeStackTraceLong_(opt_result);
  this.updateResult_(false, opt_result);
};
/**
 * @private
 * @param {*} error
 */
goog.async.Deferred.prototype.makeStackTraceLong_ = function(error) {
  if (!goog.async.Deferred.LONG_STACK_TRACES) {
    return;
  }
  if (this.constructorStack_ && goog.isObject(error) && error.stack && /^[^\n]+(\n   [^\n]+)+/.test(error.stack)) {
    error.stack = error.stack + "\nDEFERRED OPERATION:\n" + this.constructorStack_;
  }
};
/**
 * @private
 * @param {*} obj
 * @throws {Error}
 */
goog.async.Deferred.prototype.assertNotDeferred_ = function(obj) {
  goog.asserts.assert(!(obj instanceof goog.async.Deferred), "An execution sequence may not be initiated with a blocking Deferred.");
};
/**
 * @param {function(this:T,VALUE):?} cb
 * @param {T=} opt_scope
 * @return {!goog.async.Deferred}
 * @template T
 */
goog.async.Deferred.prototype.addCallback = function(cb, opt_scope) {
  return this.addCallbacks(cb, null, opt_scope);
};
/**
 * @param {function(this:T,?):?} eb
 * @param {T=} opt_scope
 * @return {!goog.async.Deferred<VALUE>}
 * @template T
 */
goog.async.Deferred.prototype.addErrback = function(eb, opt_scope) {
  return this.addCallbacks(null, eb, opt_scope);
};
/**
 * @param {function(this:T,?):?} f
 * @param {T=} opt_scope
 * @return {!goog.async.Deferred}
 * @template T
 */
goog.async.Deferred.prototype.addBoth = function(f, opt_scope) {
  return this.addCallbacks(f, f, opt_scope);
};
/**
 * @param {function(this:T,?):?} f
 * @param {T=} opt_scope
 * @return {!goog.async.Deferred<VALUE>}
 * @template T
 */
goog.async.Deferred.prototype.addFinally = function(f, opt_scope) {
  return this.addCallbacks(f, function(err) {
    var result = f.call(/** @type {?} */ (this), err);
    if (result === undefined) {
      throw err;
    }
    return result;
  }, opt_scope);
};
/**
 * @param {?function(this:T,VALUE):?} cb
 * @param {?function(this:T,?):?} eb
 * @param {T=} opt_scope
 * @return {!goog.async.Deferred}
 * @template T
 */
goog.async.Deferred.prototype.addCallbacks = function(cb, eb, opt_scope) {
  goog.asserts.assert(!this.blocking_, "Blocking Deferreds can not be re-used");
  this.sequence_.push([cb, eb, opt_scope]);
  if (this.hasFired()) {
    this.fire_();
  }
  return this;
};
/** @override */ goog.async.Deferred.prototype.then = function(opt_onFulfilled, opt_onRejected, opt_context) {
  var resolve, reject;
  var promise = new goog.Promise(function(res, rej) {
    resolve = res;
    reject = rej;
  });
  this.addCallbacks(resolve, function(reason) {
    if (reason instanceof goog.async.Deferred.CanceledError) {
      promise.cancel();
    } else {
      reject(reason);
    }
  });
  return promise.then(opt_onFulfilled, opt_onRejected, opt_context);
};
goog.Thenable.addImplementation(goog.async.Deferred);
/**
 * @param {!goog.async.Deferred} otherDeferred
 * @return {!goog.async.Deferred}
 */
goog.async.Deferred.prototype.chainDeferred = function(otherDeferred) {
  this.addCallbacks(otherDeferred.callback, otherDeferred.errback, otherDeferred);
  return this;
};
/**
 * @param {(!goog.async.Deferred|!goog.Thenable)} otherDeferred
 * @return {!goog.async.Deferred}
 */
goog.async.Deferred.prototype.awaitDeferred = function(otherDeferred) {
  if (!(otherDeferred instanceof goog.async.Deferred)) {
    return this.addCallback(function() {
      return otherDeferred;
    });
  }
  return this.addCallback(goog.bind(otherDeferred.branch, otherDeferred));
};
/**
 * @param {boolean=} opt_propagateCancel
 * @return {!goog.async.Deferred<VALUE>}
 */
goog.async.Deferred.prototype.branch = function(opt_propagateCancel) {
  var d = new goog.async.Deferred;
  this.chainDeferred(d);
  if (opt_propagateCancel) {
    d.parent_ = this;
    this.branches_++;
  }
  return d;
};
/**
 * @return {boolean}
 */
goog.async.Deferred.prototype.hasFired = function() {
  return this.fired_;
};
/**
 * @protected
 * @param {*} res
 * @return {boolean}
 */
goog.async.Deferred.prototype.isError = function(res) {
  return res instanceof Error;
};
/**
 * @private
 * @return {boolean}
 */
goog.async.Deferred.prototype.hasErrback_ = function() {
  return goog.array.some(this.sequence_, function(sequenceRow) {
    return goog.isFunction(sequenceRow[1]);
  });
};
/** @private */ goog.async.Deferred.prototype.fire_ = function() {
  if (this.unhandledErrorId_ && this.hasFired() && this.hasErrback_()) {
    goog.async.Deferred.unscheduleError_(this.unhandledErrorId_);
    this.unhandledErrorId_ = 0;
  }
  if (this.parent_) {
    this.parent_.branches_--;
    delete this.parent_;
  }
  var res = this.result_;
  var unhandledException = false;
  var isNewlyBlocked = false;
  while (this.sequence_.length && !this.blocked_) {
    var sequenceEntry = this.sequence_.shift();
    var callback = sequenceEntry[0];
    var errback = sequenceEntry[1];
    var scope = sequenceEntry[2];
    var f = this.hadError_ ? errback : callback;
    if (f) {
      try {
        var ret = f.call(scope || this.defaultScope_, res);
        if (ret !== undefined) {
          this.hadError_ = this.hadError_ && (ret == res || this.isError(ret));
          this.result_ = res = ret;
        }
        if (goog.Thenable.isImplementedBy(res) || typeof goog.global["Promise"] === "function" && res instanceof goog.global["Promise"]) {
          isNewlyBlocked = true;
          this.blocked_ = true;
        }
      } catch (ex) {
        res = ex;
        this.hadError_ = true;
        this.makeStackTraceLong_(res);
        if (!this.hasErrback_()) {
          unhandledException = true;
        }
      }
    }
  }
  this.result_ = res;
  if (isNewlyBlocked) {
    var onCallback = goog.bind(this.continue_, this, true);
    var onErrback = goog.bind(this.continue_, this, false);
    if (res instanceof goog.async.Deferred) {
      res.addCallbacks(onCallback, onErrback);
      res.blocking_ = true;
    } else {
      /** @type {!IThenable} */ (res).then(onCallback, onErrback);
    }
  } else {
    if (goog.async.Deferred.STRICT_ERRORS && this.isError(res) && !(res instanceof goog.async.Deferred.CanceledError)) {
      this.hadError_ = true;
      unhandledException = true;
    }
  }
  if (unhandledException) {
    this.unhandledErrorId_ = goog.async.Deferred.scheduleError_(res);
  }
};
/**
 * @param {*=} opt_result
 * @return {!goog.async.Deferred}
 */
goog.async.Deferred.succeed = function(opt_result) {
  var d = new goog.async.Deferred;
  d.callback(opt_result);
  return d;
};
/**
 * @param {!IThenable<T>} promise
 * @return {!goog.async.Deferred<T>}
 * @template T
 */
goog.async.Deferred.fromPromise = function(promise) {
  var d = new goog.async.Deferred;
  promise.then(function(value) {
    d.callback(value);
  }, function(error) {
    d.errback(error);
  });
  return d;
};
/**
 * @param {*} res
 * @return {!goog.async.Deferred}
 */
goog.async.Deferred.fail = function(res) {
  var d = new goog.async.Deferred;
  d.errback(res);
  return d;
};
/**
 * @return {!goog.async.Deferred}
 */
goog.async.Deferred.canceled = function() {
  var d = new goog.async.Deferred;
  d.cancel();
  return d;
};
/**
 * @param {*} value
 * @param {function(this:T,?):?} callback
 * @param {T=} opt_scope
 * @return {!goog.async.Deferred}
 * @template T
 */
goog.async.Deferred.when = function(value, callback, opt_scope) {
  if (value instanceof goog.async.Deferred) {
    return value.branch(true).addCallback(callback, opt_scope);
  } else {
    return goog.async.Deferred.succeed(value).addCallback(callback, opt_scope);
  }
};
/**
 * @constructor
 * @extends {goog.debug.Error}
 * @param {!goog.async.Deferred} deferred
 */
goog.async.Deferred.AlreadyCalledError = function(deferred) {
  goog.debug.Error.call(this);
  /** @type {goog.async.Deferred} */ this.deferred = deferred;
};
goog.inherits(goog.async.Deferred.AlreadyCalledError, goog.debug.Error);
/** @override */ goog.async.Deferred.AlreadyCalledError.prototype.message = "Deferred has already fired";
/** @override */ goog.async.Deferred.AlreadyCalledError.prototype.name = "AlreadyCalledError";
/**
 * @constructor
 * @extends {goog.debug.Error}
 * @param {!goog.async.Deferred} deferred
 */
goog.async.Deferred.CanceledError = function(deferred) {
  goog.debug.Error.call(this);
  /** @type {goog.async.Deferred} */ this.deferred = deferred;
};
goog.inherits(goog.async.Deferred.CanceledError, goog.debug.Error);
/** @override */ goog.async.Deferred.CanceledError.prototype.message = "Deferred was canceled";
/** @override */ goog.async.Deferred.CanceledError.prototype.name = "CanceledError";
/**
 * @private
 * @final
 * @struct
 * @constructor
 * @param {*} error
 */
goog.async.Deferred.Error_ = function(error) {
  /** @private @const @type {number} */ this.id_ = goog.global.setTimeout(goog.bind(this.throwError, this), 0);
  /** @private @const @type {*} */ this.error_ = error;
};
goog.async.Deferred.Error_.prototype.throwError = function() {
  goog.asserts.assert(goog.async.Deferred.errorMap_[this.id_], "Cannot throw an error that is not scheduled.");
  delete goog.async.Deferred.errorMap_[this.id_];
  throw this.error_;
};
goog.async.Deferred.Error_.prototype.resetTimer = function() {
  goog.global.clearTimeout(this.id_);
};
/** @private @type {!Object<(number|string),goog.async.Deferred.Error_>} */ goog.async.Deferred.errorMap_ = {};
/**
 * @private
 * @param {*} error
 * @return {number}
 */
goog.async.Deferred.scheduleError_ = function(error) {
  var deferredError = new goog.async.Deferred.Error_(error);
  goog.async.Deferred.errorMap_[deferredError.id_] = deferredError;
  return deferredError.id_;
};
/**
 * @private
 * @param {number} id
 */
goog.async.Deferred.unscheduleError_ = function(id) {
  var error = goog.async.Deferred.errorMap_[id];
  if (error) {
    error.resetTimer();
    delete goog.async.Deferred.errorMap_[id];
  }
};
goog.async.Deferred.assertNoErrors = function() {
  var map = goog.async.Deferred.errorMap_;
  for (var key in map) {
    var error = map[key];
    error.resetTimer();
    error.throwError();
  }
};

//# sourceMappingURL=goog.mochikit.async.deferred.js.map
