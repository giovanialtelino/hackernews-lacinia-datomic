goog.provide("goog.fx.Transition");
goog.provide("goog.fx.Transition.EventType");
/** @interface */ goog.fx.Transition = function() {
};
/** @enum {string} */ goog.fx.Transition.EventType = {PLAY:"play", BEGIN:"begin", RESUME:"resume", END:"end", STOP:"stop", FINISH:"finish", PAUSE:"pause"};
/** @type {function()} */ goog.fx.Transition.prototype.play;
/** @type {function()} */ goog.fx.Transition.prototype.stop;

//# sourceMappingURL=goog.fx.transition.js.map
