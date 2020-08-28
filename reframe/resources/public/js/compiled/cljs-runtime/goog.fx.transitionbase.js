goog.provide("goog.fx.TransitionBase");
goog.provide("goog.fx.TransitionBase.State");
goog.require("goog.events.EventTarget");
goog.require("goog.fx.Transition");
/**
 * @struct
 * @constructor
 * @extends {goog.events.EventTarget}
 * @implements {goog.fx.Transition}
 */
goog.fx.TransitionBase = function() {
  goog.fx.TransitionBase.base(this, "constructor");
  /** @private @type {goog.fx.TransitionBase.State} */ this.state_ = goog.fx.TransitionBase.State.STOPPED;
  /** @protected @type {?number} */ this.startTime = null;
  /** @protected @type {?number} */ this.endTime = null;
};
goog.inherits(goog.fx.TransitionBase, goog.events.EventTarget);
/** @enum {number} */ goog.fx.TransitionBase.State = {STOPPED:0, PAUSED:-1, PLAYING:1};
/**
 * @param {boolean=} opt_restart
 * @return {boolean}
 * @override
 */
goog.fx.TransitionBase.prototype.play = goog.abstractMethod;
/**
 * @param {boolean=} opt_gotoEnd
 * @override
 */
goog.fx.TransitionBase.prototype.stop = goog.abstractMethod;
goog.fx.TransitionBase.prototype.pause = goog.abstractMethod;
/**
 * @return {goog.fx.TransitionBase.State}
 */
goog.fx.TransitionBase.prototype.getStateInternal = function() {
  return this.state_;
};
/** @protected */ goog.fx.TransitionBase.prototype.setStatePlaying = function() {
  this.state_ = goog.fx.TransitionBase.State.PLAYING;
};
/** @protected */ goog.fx.TransitionBase.prototype.setStatePaused = function() {
  this.state_ = goog.fx.TransitionBase.State.PAUSED;
};
/** @protected */ goog.fx.TransitionBase.prototype.setStateStopped = function() {
  this.state_ = goog.fx.TransitionBase.State.STOPPED;
};
/**
 * @return {boolean}
 */
goog.fx.TransitionBase.prototype.isPlaying = function() {
  return this.state_ == goog.fx.TransitionBase.State.PLAYING;
};
/**
 * @return {boolean}
 */
goog.fx.TransitionBase.prototype.isPaused = function() {
  return this.state_ == goog.fx.TransitionBase.State.PAUSED;
};
/**
 * @return {boolean}
 */
goog.fx.TransitionBase.prototype.isStopped = function() {
  return this.state_ == goog.fx.TransitionBase.State.STOPPED;
};
/** @protected */ goog.fx.TransitionBase.prototype.onBegin = function() {
  this.dispatchAnimationEvent(goog.fx.Transition.EventType.BEGIN);
};
/** @protected */ goog.fx.TransitionBase.prototype.onEnd = function() {
  this.dispatchAnimationEvent(goog.fx.Transition.EventType.END);
};
/** @protected */ goog.fx.TransitionBase.prototype.onFinish = function() {
  this.dispatchAnimationEvent(goog.fx.Transition.EventType.FINISH);
};
/** @protected */ goog.fx.TransitionBase.prototype.onPause = function() {
  this.dispatchAnimationEvent(goog.fx.Transition.EventType.PAUSE);
};
/** @protected */ goog.fx.TransitionBase.prototype.onPlay = function() {
  this.dispatchAnimationEvent(goog.fx.Transition.EventType.PLAY);
};
/** @protected */ goog.fx.TransitionBase.prototype.onResume = function() {
  this.dispatchAnimationEvent(goog.fx.Transition.EventType.RESUME);
};
/** @protected */ goog.fx.TransitionBase.prototype.onStop = function() {
  this.dispatchAnimationEvent(goog.fx.Transition.EventType.STOP);
};
/**
 * @protected
 * @param {string} type
 */
goog.fx.TransitionBase.prototype.dispatchAnimationEvent = function(type) {
  this.dispatchEvent(type);
};

//# sourceMappingURL=goog.fx.transitionbase.js.map
