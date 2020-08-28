goog.provide("goog.fx.anim");
goog.provide("goog.fx.anim.Animated");
goog.require("goog.async.AnimationDelay");
goog.require("goog.async.Delay");
goog.require("goog.object");
/** @interface */ goog.fx.anim.Animated = function() {
};
/**
 * @param {number} now
 */
goog.fx.anim.Animated.prototype.onAnimationFrame;
/** @const @type {number} */ goog.fx.anim.TIMEOUT = goog.async.AnimationDelay.TIMEOUT;
/** @private @type {!Object<number,goog.fx.anim.Animated>} */ goog.fx.anim.activeAnimations_ = {};
/** @private @type {?Window} */ goog.fx.anim.animationWindow_ = null;
/** @private @type {(?goog.async.Delay|?goog.async.AnimationDelay)} */ goog.fx.anim.animationDelay_ = null;
/**
 * @param {goog.fx.anim.Animated} animation
 */
goog.fx.anim.registerAnimation = function(animation) {
  var uid = goog.getUid(animation);
  if (!(uid in goog.fx.anim.activeAnimations_)) {
    goog.fx.anim.activeAnimations_[uid] = animation;
  }
  goog.fx.anim.requestAnimationFrame_();
};
/**
 * @param {goog.fx.anim.Animated} animation
 */
goog.fx.anim.unregisterAnimation = function(animation) {
  var uid = goog.getUid(animation);
  delete goog.fx.anim.activeAnimations_[uid];
  if (goog.object.isEmpty(goog.fx.anim.activeAnimations_)) {
    goog.fx.anim.cancelAnimationFrame_();
  }
};
goog.fx.anim.tearDown = function() {
  goog.fx.anim.animationWindow_ = null;
  goog.dispose(goog.fx.anim.animationDelay_);
  goog.fx.anim.animationDelay_ = null;
  goog.fx.anim.activeAnimations_ = {};
};
/**
 * @param {Window} animationWindow
 */
goog.fx.anim.setAnimationWindow = function(animationWindow) {
  var hasTimer = goog.fx.anim.animationDelay_ && goog.fx.anim.animationDelay_.isActive();
  goog.dispose(goog.fx.anim.animationDelay_);
  goog.fx.anim.animationDelay_ = null;
  goog.fx.anim.animationWindow_ = animationWindow;
  if (hasTimer) {
    goog.fx.anim.requestAnimationFrame_();
  }
};
/** @private */ goog.fx.anim.requestAnimationFrame_ = function() {
  if (!goog.fx.anim.animationDelay_) {
    if (goog.fx.anim.animationWindow_) {
      goog.fx.anim.animationDelay_ = new goog.async.AnimationDelay(function(now) {
        goog.fx.anim.cycleAnimations_(now);
      }, goog.fx.anim.animationWindow_);
    } else {
      goog.fx.anim.animationDelay_ = new goog.async.Delay(function() {
        goog.fx.anim.cycleAnimations_(goog.now());
      }, goog.fx.anim.TIMEOUT);
    }
  }
  var delay = goog.fx.anim.animationDelay_;
  if (!delay.isActive()) {
    delay.start();
  }
};
/** @private */ goog.fx.anim.cancelAnimationFrame_ = function() {
  if (goog.fx.anim.animationDelay_) {
    goog.fx.anim.animationDelay_.stop();
  }
};
/**
 * @private
 * @param {number} now
 */
goog.fx.anim.cycleAnimations_ = function(now) {
  goog.object.forEach(goog.fx.anim.activeAnimations_, function(anim) {
    anim.onAnimationFrame(now);
  });
  if (!goog.object.isEmpty(goog.fx.anim.activeAnimations_)) {
    goog.fx.anim.requestAnimationFrame_();
  }
};

//# sourceMappingURL=goog.fx.anim.anim.js.map
