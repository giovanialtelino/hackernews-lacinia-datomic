goog.provide("goog.memoize");
/**
 * @param {Function} f
 * @param {function(number,Object):string=} opt_serializer
 * @return {!Function}
 */
goog.memoize = function(f, opt_serializer) {
  /** @const */ var serializer = opt_serializer || goog.memoize.simpleSerializer;
  return (/**
   * @this {Object}
   * @return {?}
   */
  function() {
    if (goog.memoize.ENABLE_MEMOIZE) {
      /** @const */ var thisOrGlobal = this || goog.global;
      /** @const */ var cache = thisOrGlobal[goog.memoize.CACHE_PROPERTY_] || (thisOrGlobal[goog.memoize.CACHE_PROPERTY_] = {});
      /** @const */ var key = serializer(goog.getUid(f), arguments);
      return cache.hasOwnProperty(key) ? cache[key] : cache[key] = f.apply(this, arguments);
    } else {
      return f.apply(this, arguments);
    }
  });
};
/** @define {boolean} */ goog.memoize.ENABLE_MEMOIZE = goog.define("goog.memoize.ENABLE_MEMOIZE", true);
/**
 * @param {Object} cacheOwner
 */
goog.memoize.clearCache = function(cacheOwner) {
  cacheOwner[goog.memoize.CACHE_PROPERTY_] = {};
};
/** @private @type {string} */ goog.memoize.CACHE_PROPERTY_ = "closure_memoize_cache_";
/**
 * @param {number} functionUid
 * @param {?{length:number}} args
 * @return {string}
 */
goog.memoize.simpleSerializer = function(functionUid, args) {
  /** @const */ var context = [functionUid];
  for (var i = args.length - 1; i >= 0; --i) {
    context.push(typeof args[i], args[i]);
  }
  return context.join("\x0B");
};

//# sourceMappingURL=goog.memoize.memoize.js.map
