["^ ","~:resource-id",["~:shadow.build.classpath/resource","goog/reflect/reflect.js"],"~:js","goog.provide(\"goog.reflect\");\n/**\n * @param {!Function} type\n * @param {Object} object\n * @return {Object}\n */\ngoog.reflect.object = function(type, object) {\n  return object;\n};\n/**\n * @param {string} prop\n * @param {!Object} object\n * @return {string}\n */\ngoog.reflect.objectProperty = function(prop, object) {\n  return prop;\n};\n/**\n * @param {T} x\n * @return {T}\n * @template T\n */\ngoog.reflect.sinkValue = function(x) {\n  goog.reflect.sinkValue[\" \"](x);\n  return x;\n};\ngoog.reflect.sinkValue[\" \"] = goog.nullFunction;\n/**\n * @param {Object} obj\n * @param {string} prop\n * @return {boolean}\n */\ngoog.reflect.canAccessProperty = function(obj, prop) {\n  try {\n    goog.reflect.sinkValue(obj[prop]);\n    return true;\n  } catch (e) {\n  }\n  return false;\n};\n/**\n * @param {!Object<K,V>} cacheObj\n * @param {?} key\n * @param {function(?):V} valueFn\n * @param {function(?):K=} opt_keyFn\n * @return {V}\n * @template K\n * @template V\n */\ngoog.reflect.cache = function(cacheObj, key, valueFn, opt_keyFn) {\n  /** @const */ var storedKey = opt_keyFn ? opt_keyFn(key) : key;\n  if (Object.prototype.hasOwnProperty.call(cacheObj, storedKey)) {\n    return cacheObj[storedKey];\n  }\n  return cacheObj[storedKey] = valueFn(key);\n};\n","~:source","// Copyright 2009 The Closure Library Authors. All Rights Reserved.\n//\n// Licensed under the Apache License, Version 2.0 (the \"License\");\n// you may not use this file except in compliance with the License.\n// You may obtain a copy of the License at\n//\n//      http://www.apache.org/licenses/LICENSE-2.0\n//\n// Unless required by applicable law or agreed to in writing, software\n// distributed under the License is distributed on an \"AS-IS\" BASIS,\n// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n// See the License for the specific language governing permissions and\n// limitations under the License.\n\n/**\n * @fileoverview Useful compiler idioms.\n *\n * @author johnlenz@google.com (John Lenz)\n */\n\ngoog.provide('goog.reflect');\n\n\n/**\n * Syntax for object literal casts.\n * @see http://go/jscompiler-renaming\n * @see https://goo.gl/CRs09P\n *\n * Use this if you have an object literal whose keys need to have the same names\n * as the properties of some class even after they are renamed by the compiler.\n *\n * @param {!Function} type Type to cast to.\n * @param {Object} object Object literal to cast.\n * @return {Object} The object literal.\n */\ngoog.reflect.object = function(type, object) {\n  return object;\n};\n\n/**\n * Syntax for renaming property strings.\n * @see http://go/jscompiler-renaming\n * @see https://goo.gl/CRs09P\n *\n * Use this if you have an need to access a property as a string, but want\n * to also have the property renamed by the compiler. In contrast to\n * goog.reflect.object, this method takes an instance of an object.\n *\n * Properties must be simple names (not qualified names).\n *\n * @param {string} prop Name of the property\n * @param {!Object} object Instance of the object whose type will be used\n *     for renaming\n * @return {string} The renamed property.\n */\ngoog.reflect.objectProperty = function(prop, object) {\n  return prop;\n};\n\n/**\n * To assert to the compiler that an operation is needed when it would\n * otherwise be stripped. For example:\n * <code>\n *     // Force a layout\n *     goog.reflect.sinkValue(dialog.offsetHeight);\n * </code>\n * @param {T} x\n * @return {T}\n * @template T\n */\ngoog.reflect.sinkValue = function(x) {\n  goog.reflect.sinkValue[' '](x);\n  return x;\n};\n\n\n/**\n * The compiler should optimize this function away iff no one ever uses\n * goog.reflect.sinkValue.\n */\ngoog.reflect.sinkValue[' '] = goog.nullFunction;\n\n\n/**\n * Check if a property can be accessed without throwing an exception.\n * @param {Object} obj The owner of the property.\n * @param {string} prop The property name.\n * @return {boolean} Whether the property is accessible. Will also return true\n *     if obj is null.\n */\ngoog.reflect.canAccessProperty = function(obj, prop) {\n\n  try {\n    goog.reflect.sinkValue(obj[prop]);\n    return true;\n  } catch (e) {\n  }\n  return false;\n};\n\n\n/**\n * Retrieves a value from a cache given a key. The compiler provides special\n * consideration for this call such that it is generally considered side-effect\n * free. However, if the `opt_keyFn` or `valueFn` have side-effects\n * then the entire call is considered to have side-effects.\n *\n * Conventionally storing the value on the cache would be considered a\n * side-effect and preclude unused calls from being pruned, ie. even if\n * the value was never used, it would still always be stored in the cache.\n *\n * Providing a side-effect free `valueFn` and `opt_keyFn`\n * allows unused calls to `goog.reflect.cache` to be pruned.\n *\n * @param {!Object<K, V>} cacheObj The object that contains the cached values.\n * @param {?} key The key to lookup in the cache. If it is not string or number\n *     then a `opt_keyFn` should be provided. The key is also used as the\n *     parameter to the `valueFn`.\n * @param {function(?):V} valueFn The value provider to use to calculate the\n *     value to store in the cache. This function should be side-effect free\n *     to take advantage of the optimization.\n * @param {function(?):K=} opt_keyFn The key provider to determine the cache\n *     map key. This should be used if the given key is not a string or number.\n *     If not provided then the given key is used. This function should be\n *     side-effect free to take advantage of the optimization.\n * @return {V} The cached or calculated value.\n * @template K\n * @template V\n */\ngoog.reflect.cache = function(cacheObj, key, valueFn, opt_keyFn) {\n  const storedKey = opt_keyFn ? opt_keyFn(key) : key;\n\n  if (Object.prototype.hasOwnProperty.call(cacheObj, storedKey)) {\n    return cacheObj[storedKey];\n  }\n\n  return (cacheObj[storedKey] = valueFn(key));\n};\n","~:compiled-at",1598576858250,"~:source-map-json","{\n\"version\":3,\n\"file\":\"goog.reflect.reflect.js\",\n\"lineCount\":57,\n\"mappings\":\"AAoBAA,IAAAC,QAAA,CAAa,cAAb,CAAA;AAeA;;;;;AAAAD,IAAAE,QAAAC,OAAA,GAAsBC,QAAQ,CAACC,IAAD,EAAOF,MAAP,CAAe;AAC3C,SAAOA,MAAP;AAD2C,CAA7C;AAoBA;;;;;AAAAH,IAAAE,QAAAI,eAAA,GAA8BC,QAAQ,CAACC,IAAD,EAAOL,MAAP,CAAe;AACnD,SAAOK,IAAP;AADmD,CAArD;AAeA;;;;;AAAAR,IAAAE,QAAAO,UAAA,GAAyBC,QAAQ,CAACC,CAAD,CAAI;AACnCX,MAAAE,QAAAO,UAAA,CAAuB,GAAvB,CAAA,CAA4BE,CAA5B,CAAA;AACA,SAAOA,CAAP;AAFmC,CAArC;AAUAX,IAAAE,QAAAO,UAAA,CAAuB,GAAvB,CAAA,GAA8BT,IAAAY,aAA9B;AAUA;;;;;AAAAZ,IAAAE,QAAAW,kBAAA,GAAiCC,QAAQ,CAACC,GAAD,EAAMP,IAAN,CAAY;AAEnD,KAAI;AACFR,QAAAE,QAAAO,UAAA,CAAuBM,GAAA,CAAIP,IAAJ,CAAvB,CAAA;AACA,WAAO,IAAP;AAFE,GAGF,QAAOQ,CAAP,CAAU;;AAEZ,SAAO,KAAP;AAPmD,CAArD;AAuCA;;;;;;;;;AAAAhB,IAAAE,QAAAe,MAAA,GAAqBC,QAAQ,CAACC,QAAD,EAAWC,GAAX,EAAgBC,OAAhB,EAAyBC,SAAzB,CAAoC;gBAC/D,IAAMC,YAAYD,SAAA,GAAYA,SAAA,CAAUF,GAAV,CAAZ,GAA6BA,GAA/C;AAEA,MAAII,MAAAC,UAAAC,eAAAC,KAAA,CAAqCR,QAArC,EAA+CI,SAA/C,CAAJ;AACE,WAAOJ,QAAA,CAASI,SAAT,CAAP;AADF;AAIA,SAAQJ,QAAA,CAASI,SAAT,CAAR,GAA8BF,OAAA,CAAQD,GAAR,CAA9B;AAP+D,CAAjE;;\",\n\"sources\":[\"goog/reflect/reflect.js\"],\n\"sourcesContent\":[\"// Copyright 2009 The Closure Library Authors. All Rights Reserved.\\n//\\n// Licensed under the Apache License, Version 2.0 (the \\\"License\\\");\\n// you may not use this file except in compliance with the License.\\n// You may obtain a copy of the License at\\n//\\n//      http://www.apache.org/licenses/LICENSE-2.0\\n//\\n// Unless required by applicable law or agreed to in writing, software\\n// distributed under the License is distributed on an \\\"AS-IS\\\" BASIS,\\n// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\\n// See the License for the specific language governing permissions and\\n// limitations under the License.\\n\\n/**\\n * @fileoverview Useful compiler idioms.\\n *\\n * @author johnlenz@google.com (John Lenz)\\n */\\n\\ngoog.provide('goog.reflect');\\n\\n\\n/**\\n * Syntax for object literal casts.\\n * @see http://go/jscompiler-renaming\\n * @see https://goo.gl/CRs09P\\n *\\n * Use this if you have an object literal whose keys need to have the same names\\n * as the properties of some class even after they are renamed by the compiler.\\n *\\n * @param {!Function} type Type to cast to.\\n * @param {Object} object Object literal to cast.\\n * @return {Object} The object literal.\\n */\\ngoog.reflect.object = function(type, object) {\\n  return object;\\n};\\n\\n/**\\n * Syntax for renaming property strings.\\n * @see http://go/jscompiler-renaming\\n * @see https://goo.gl/CRs09P\\n *\\n * Use this if you have an need to access a property as a string, but want\\n * to also have the property renamed by the compiler. In contrast to\\n * goog.reflect.object, this method takes an instance of an object.\\n *\\n * Properties must be simple names (not qualified names).\\n *\\n * @param {string} prop Name of the property\\n * @param {!Object} object Instance of the object whose type will be used\\n *     for renaming\\n * @return {string} The renamed property.\\n */\\ngoog.reflect.objectProperty = function(prop, object) {\\n  return prop;\\n};\\n\\n/**\\n * To assert to the compiler that an operation is needed when it would\\n * otherwise be stripped. For example:\\n * <code>\\n *     // Force a layout\\n *     goog.reflect.sinkValue(dialog.offsetHeight);\\n * </code>\\n * @param {T} x\\n * @return {T}\\n * @template T\\n */\\ngoog.reflect.sinkValue = function(x) {\\n  goog.reflect.sinkValue[' '](x);\\n  return x;\\n};\\n\\n\\n/**\\n * The compiler should optimize this function away iff no one ever uses\\n * goog.reflect.sinkValue.\\n */\\ngoog.reflect.sinkValue[' '] = goog.nullFunction;\\n\\n\\n/**\\n * Check if a property can be accessed without throwing an exception.\\n * @param {Object} obj The owner of the property.\\n * @param {string} prop The property name.\\n * @return {boolean} Whether the property is accessible. Will also return true\\n *     if obj is null.\\n */\\ngoog.reflect.canAccessProperty = function(obj, prop) {\\n\\n  try {\\n    goog.reflect.sinkValue(obj[prop]);\\n    return true;\\n  } catch (e) {\\n  }\\n  return false;\\n};\\n\\n\\n/**\\n * Retrieves a value from a cache given a key. The compiler provides special\\n * consideration for this call such that it is generally considered side-effect\\n * free. However, if the `opt_keyFn` or `valueFn` have side-effects\\n * then the entire call is considered to have side-effects.\\n *\\n * Conventionally storing the value on the cache would be considered a\\n * side-effect and preclude unused calls from being pruned, ie. even if\\n * the value was never used, it would still always be stored in the cache.\\n *\\n * Providing a side-effect free `valueFn` and `opt_keyFn`\\n * allows unused calls to `goog.reflect.cache` to be pruned.\\n *\\n * @param {!Object<K, V>} cacheObj The object that contains the cached values.\\n * @param {?} key The key to lookup in the cache. If it is not string or number\\n *     then a `opt_keyFn` should be provided. The key is also used as the\\n *     parameter to the `valueFn`.\\n * @param {function(?):V} valueFn The value provider to use to calculate the\\n *     value to store in the cache. This function should be side-effect free\\n *     to take advantage of the optimization.\\n * @param {function(?):K=} opt_keyFn The key provider to determine the cache\\n *     map key. This should be used if the given key is not a string or number.\\n *     If not provided then the given key is used. This function should be\\n *     side-effect free to take advantage of the optimization.\\n * @return {V} The cached or calculated value.\\n * @template K\\n * @template V\\n */\\ngoog.reflect.cache = function(cacheObj, key, valueFn, opt_keyFn) {\\n  const storedKey = opt_keyFn ? opt_keyFn(key) : key;\\n\\n  if (Object.prototype.hasOwnProperty.call(cacheObj, storedKey)) {\\n    return cacheObj[storedKey];\\n  }\\n\\n  return (cacheObj[storedKey] = valueFn(key));\\n};\\n\"],\n\"names\":[\"goog\",\"provide\",\"reflect\",\"object\",\"goog.reflect.object\",\"type\",\"objectProperty\",\"goog.reflect.objectProperty\",\"prop\",\"sinkValue\",\"goog.reflect.sinkValue\",\"x\",\"nullFunction\",\"canAccessProperty\",\"goog.reflect.canAccessProperty\",\"obj\",\"e\",\"cache\",\"goog.reflect.cache\",\"cacheObj\",\"key\",\"valueFn\",\"opt_keyFn\",\"storedKey\",\"Object\",\"prototype\",\"hasOwnProperty\",\"call\"]\n}\n"]