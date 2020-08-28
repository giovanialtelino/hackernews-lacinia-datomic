goog.provide("goog.async.AnimationDelay");
goog.require("goog.Disposable");
goog.require("goog.events");
goog.require("goog.functions");
/**
 * @final
 * @struct
 * @constructor
 * @extends {goog.Disposable}
 * @param {function(this:THIS,number)} listener
 * @param {Window=} opt_window
 * @param {THIS=} opt_handler
 * @template THIS
 */
goog.async.AnimationDelay = function(listener, opt_window, opt_handler) {
  goog.async.AnimationDelay.base(this, "constructor");
  /** @private @type {(?goog.events.Key|number)} */ this.id_ = null;
  /** @private @type {?boolean} */ this.usingListeners_ = false;
  /** @private @const */ this.listener_ = listener;
  /** @private @const @type {(THIS|undefined)} */ this.handler_ = opt_handler;
  /** @private @type {Window} */ this.win_ = opt_window || window;
  /** @private @type {function()} */ this.callback_ = goog.bind(this.doAction_, this);
};
goog.inherits(goog.async.AnimationDelay, goog.Disposable);
/** @const @type {number} */ goog.async.AnimationDelay.TIMEOUT = 20;
/** @private @const @type {string} */ goog.async.AnimationDelay.MOZ_BEFORE_PAINT_EVENT_ = "MozBeforePaint";
goog.async.AnimationDelay.prototype.start = function() {
  this.stop();
  this.usingListeners_ = false;
  var raf = this.getRaf_();
  var cancelRaf = this.getCancelRaf_();
  if (raf && !cancelRaf && this.win_.mozRequestAnimationFrame) {
    this.id_ = goog.events.listen(this.win_, goog.async.AnimationDelay.MOZ_BEFORE_PAINT_EVENT_, this.callback_);
    this.win_.mozRequestAnimationFrame(null);
    this.usingListeners_ = true;
  } else {
    if (raf && cancelRaf) {
      this.id_ = raf.call(this.win_, this.callback_);
    } else {
      this.id_ = this.win_.setTimeout(goog.functions.lock(this.callback_), goog.async.AnimationDelay.TIMEOUT);
    }
  }
};
goog.async.AnimationDelay.prototype.startIfNotActive = function() {
  if (!this.isActive()) {
    this.start();
  }
};
goog.async.AnimationDelay.prototype.stop = function() {
  if (this.isActive()) {
    var raf = this.getRaf_();
    var cancelRaf = this.getCancelRaf_();
    if (raf && !cancelRaf && this.win_.mozRequestAnimationFrame) {
      goog.events.unlistenByKey(this.id_);
    } else {
      if (raf && cancelRaf) {
        cancelRaf.call(this.win_, /** @type {number} */ (this.id_));
      } else {
        this.win_.clearTimeout(/** @type {number} */ (this.id_));
      }
    }
  }
  this.id_ = null;
};
goog.async.AnimationDelay.prototype.fire = function() {
  this.stop();
  this.doAction_();
};
goog.async.AnimationDelay.prototype.fireIfActive = function() {
  if (this.isActive()) {
    this.fire();
  }
};
/**
 * @return {boolean}
 */
goog.async.AnimationDelay.prototype.isActive = function() {
  return this.id_ != null;
};
/** @private */ goog.async.AnimationDelay.prototype.doAction_ = function() {
  if (this.usingListeners_ && this.id_) {
    goog.events.unlistenByKey(this.id_);
  }
  this.id_ = null;
  this.listener_.call(this.handler_, goog.now());
};
/** @override */ goog.async.AnimationDelay.prototype.disposeInternal = function() {
  this.stop();
  goog.async.AnimationDelay.base(this, "disposeInternal");
};
/**
 * @private
 * @return {?function(function(number)):number}
 */
goog.async.AnimationDelay.prototype.getRaf_ = function() {
  var win = this.win_;
  return win.requestAnimationFrame || win.webkitRequestAnimationFrame || win.mozRequestAnimationFrame || win.oRequestAnimationFrame || win.msRequestAnimationFrame || null;
};
/**
 * @private
 * @return {?function(number):undefined}
 */
goog.async.AnimationDelay.prototype.getCancelRaf_ = function() {
  var win = this.win_;
  return win.cancelAnimationFrame || win.cancelRequestAnimationFrame || win.webkitCancelRequestAnimationFrame || win.mozCancelRequestAnimationFrame || win.oCancelRequestAnimationFrame || win.msCancelRequestAnimationFrame || null;
};

//# sourceMappingURL=goog.async.animationdelay.js.map
