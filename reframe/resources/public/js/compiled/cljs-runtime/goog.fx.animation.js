goog.provide("goog.fx.Animation");
goog.provide("goog.fx.Animation.EventType");
goog.provide("goog.fx.Animation.State");
goog.provide("goog.fx.AnimationEvent");
goog.require("goog.array");
goog.require("goog.asserts");
goog.require("goog.events.Event");
goog.require("goog.fx.Transition");
goog.require("goog.fx.TransitionBase");
goog.require("goog.fx.anim");
goog.require("goog.fx.anim.Animated");
/**
 * @struct
 * @constructor
 * @extends {goog.fx.TransitionBase}
 * @implements {goog.fx.anim.Animated}
 * @implements {goog.fx.Transition}
 * @param {Array<number>} start
 * @param {Array<number>} end
 * @param {number} duration
 * @param {Function=} opt_acc
 */
goog.fx.Animation = function(start, end, duration, opt_acc) {
  goog.fx.Animation.base(this, "constructor");
  if (!goog.isArray(start) || !goog.isArray(end)) {
    throw new Error("Start and end parameters must be arrays");
  }
  if (start.length != end.length) {
    throw new Error("Start and end points must be the same length");
  }
  /** @protected @type {Array<number>} */ this.startPoint = start;
  /** @protected @type {Array<number>} */ this.endPoint = end;
  /** @protected @type {number} */ this.duration = duration;
  /** @private @type {(Function|undefined)} */ this.accel_ = opt_acc;
  /** @protected @type {Array<number>} */ this.coords = [];
  /** @private @type {boolean} */ this.useRightPositioningForRtl_ = false;
  /** @private @type {number} */ this.fps_ = 0;
  /** @protected @type {number} */ this.progress = 0;
  /** @protected @type {?number} */ this.lastFrame = null;
};
goog.inherits(goog.fx.Animation, goog.fx.TransitionBase);
/**
 * @return {number}
 */
goog.fx.Animation.prototype.getDuration = function() {
  return this.duration;
};
/**
 * @param {boolean} useRightPositioningForRtl
 */
goog.fx.Animation.prototype.enableRightPositioningForRtl = function(useRightPositioningForRtl) {
  this.useRightPositioningForRtl_ = useRightPositioningForRtl;
};
/**
 * @return {boolean}
 */
goog.fx.Animation.prototype.isRightPositioningForRtlEnabled = function() {
  return this.useRightPositioningForRtl_;
};
/** @enum {string} */ goog.fx.Animation.EventType = {/**
 * @deprecated Use goog.fx.Transition.EventType.PLAY.
 */
PLAY:goog.fx.Transition.EventType.PLAY, /**
 * @deprecated Use goog.fx.Transition.EventType.BEGIN.
 */
BEGIN:goog.fx.Transition.EventType.BEGIN, /**
 * @deprecated Use goog.fx.Transition.EventType.RESUME.
 */
RESUME:goog.fx.Transition.EventType.RESUME, /**
 * @deprecated Use goog.fx.Transition.EventType.END.
 */
END:goog.fx.Transition.EventType.END, /**
 * @deprecated Use goog.fx.Transition.EventType.STOP.
 */
STOP:goog.fx.Transition.EventType.STOP, /**
 * @deprecated Use goog.fx.Transition.EventType.FINISH.
 */
FINISH:goog.fx.Transition.EventType.FINISH, /**
 * @deprecated Use goog.fx.Transition.EventType.PAUSE.
 */
PAUSE:goog.fx.Transition.EventType.PAUSE, ANIMATE:"animate", DESTROY:"destroy"};
/**
 * @deprecated Use goog.fx.anim.TIMEOUT.
 */
goog.fx.Animation.TIMEOUT = goog.fx.anim.TIMEOUT;
/**
 * @enum {number}
 * @deprecated Use goog.fx.Transition.State instead.
 */
goog.fx.Animation.State = goog.fx.TransitionBase.State;
/**
 * @param {Window} animationWindow
 * @deprecated Use goog.fx.anim.setAnimationWindow.
 */
goog.fx.Animation.setAnimationWindow = function(animationWindow) {
  goog.fx.anim.setAnimationWindow(animationWindow);
};
/**
 * @param {boolean=} opt_restart
 * @return {boolean}
 * @override
 */
goog.fx.Animation.prototype.play = function(opt_restart) {
  if (opt_restart || this.isStopped()) {
    this.progress = 0;
    this.coords = this.startPoint;
  } else {
    if (this.isPlaying()) {
      return false;
    }
  }
  goog.fx.anim.unregisterAnimation(this);
  var now = /** @type {number} */ (goog.now());
  this.startTime = now;
  if (this.isPaused()) {
    this.startTime -= this.duration * this.progress;
  }
  this.endTime = this.startTime + this.duration;
  this.lastFrame = this.startTime;
  if (!this.progress) {
    this.onBegin();
  }
  this.onPlay();
  if (this.isPaused()) {
    this.onResume();
  }
  this.setStatePlaying();
  goog.fx.anim.registerAnimation(this);
  this.cycle(now);
  return true;
};
/**
 * @param {boolean=} opt_gotoEnd
 * @override
 */
goog.fx.Animation.prototype.stop = function(opt_gotoEnd) {
  goog.fx.anim.unregisterAnimation(this);
  this.setStateStopped();
  if (opt_gotoEnd) {
    this.progress = 1;
  }
  this.updateCoords_(this.progress);
  this.onStop();
  this.onEnd();
};
/** @override */ goog.fx.Animation.prototype.pause = function() {
  if (this.isPlaying()) {
    goog.fx.anim.unregisterAnimation(this);
    this.setStatePaused();
    this.onPause();
  }
};
/**
 * @return {number}
 */
goog.fx.Animation.prototype.getProgress = function() {
  return this.progress;
};
/**
 * @param {number} progress
 */
goog.fx.Animation.prototype.setProgress = function(progress) {
  this.progress = progress;
  if (this.isPlaying()) {
    var now = goog.now();
    this.startTime = now - this.duration * this.progress;
    this.endTime = this.startTime + this.duration;
  }
};
/** @protected @override */ goog.fx.Animation.prototype.disposeInternal = function() {
  if (!this.isStopped()) {
    this.stop(false);
  }
  this.onDestroy();
  goog.fx.Animation.base(this, "disposeInternal");
};
/**
 * @deprecated Use dispose() instead.
 */
goog.fx.Animation.prototype.destroy = function() {
  this.dispose();
};
/** @override */ goog.fx.Animation.prototype.onAnimationFrame = function(now) {
  this.cycle(now);
};
/**
 * @param {number} now
 */
goog.fx.Animation.prototype.cycle = function(now) {
  goog.asserts.assertNumber(this.startTime);
  goog.asserts.assertNumber(this.endTime);
  goog.asserts.assertNumber(this.lastFrame);
  if (now < this.startTime) {
    this.endTime = now + this.endTime - this.startTime;
    this.startTime = now;
  }
  this.progress = (now - this.startTime) / (this.endTime - this.startTime);
  if (this.progress > 1) {
    this.progress = 1;
  }
  this.fps_ = 1000 / (now - this.lastFrame);
  this.lastFrame = now;
  this.updateCoords_(this.progress);
  if (this.progress == 1) {
    this.setStateStopped();
    goog.fx.anim.unregisterAnimation(this);
    this.onFinish();
    this.onEnd();
  } else {
    if (this.isPlaying()) {
      this.onAnimate();
    }
  }
};
/**
 * @private
 * @param {number} t
 */
goog.fx.Animation.prototype.updateCoords_ = function(t) {
  if (goog.isFunction(this.accel_)) {
    t = this.accel_(t);
  }
  this.coords = new Array(this.startPoint.length);
  for (var i = 0; i < this.startPoint.length; i++) {
    this.coords[i] = (this.endPoint[i] - this.startPoint[i]) * t + this.startPoint[i];
  }
};
/** @protected */ goog.fx.Animation.prototype.onAnimate = function() {
  this.dispatchAnimationEvent(goog.fx.Animation.EventType.ANIMATE);
};
/** @protected */ goog.fx.Animation.prototype.onDestroy = function() {
  this.dispatchAnimationEvent(goog.fx.Animation.EventType.DESTROY);
};
/** @override */ goog.fx.Animation.prototype.dispatchAnimationEvent = function(type) {
  this.dispatchEvent(new goog.fx.AnimationEvent(type, this));
};
/**
 * @struct
 * @constructor
 * @extends {goog.events.Event}
 * @param {string} type
 * @param {goog.fx.Animation} anim
 */
goog.fx.AnimationEvent = function(type, anim) {
  goog.fx.AnimationEvent.base(this, "constructor", type);
  /** @type {Array<number>} */ this.coords = anim.coords;
  /** @type {number} */ this.x = anim.coords[0];
  /** @type {number} */ this.y = anim.coords[1];
  /** @type {number} */ this.z = anim.coords[2];
  /** @type {number} */ this.duration = anim.duration;
  /** @type {number} */ this.progress = anim.getProgress();
  this.fps = anim.fps_;
  /** @type {number} */ this.state = anim.getStateInternal();
  /** @type {goog.fx.Animation} */ this.anim = anim;
};
goog.inherits(goog.fx.AnimationEvent, goog.events.Event);
/**
 * @return {!Array<number>}
 */
goog.fx.AnimationEvent.prototype.coordsAsInts = function() {
  return goog.array.map(this.coords, Math.round);
};

//# sourceMappingURL=goog.fx.animation.js.map
