goog.provide("goog.storage.mechanism.Mechanism");
/** @struct @constructor */ goog.storage.mechanism.Mechanism = function() {
};
/**
 * @param {string} key
 * @param {string} value
 */
goog.storage.mechanism.Mechanism.prototype.set = goog.abstractMethod;
/**
 * @param {string} key
 * @return {?string}
 */
goog.storage.mechanism.Mechanism.prototype.get = goog.abstractMethod;
/**
 * @param {string} key
 */
goog.storage.mechanism.Mechanism.prototype.remove = goog.abstractMethod;

//# sourceMappingURL=goog.storage.mechanism.mechanism.js.map
