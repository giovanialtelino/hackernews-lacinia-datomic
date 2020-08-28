goog.provide("goog.history.Event");
goog.require("goog.events.Event");
goog.require("goog.history.EventType");
/**
 * @final
 * @constructor
 * @extends {goog.events.Event}
 * @param {string} token
 * @param {boolean} isNavigation
 */
goog.history.Event = function(token, isNavigation) {
  goog.events.Event.call(this, goog.history.EventType.NAVIGATE);
  /** @type {string} */ this.token = token;
  /** @type {boolean} */ this.isNavigation = isNavigation;
};
goog.inherits(goog.history.Event, goog.events.Event);

//# sourceMappingURL=goog.history.event.js.map
