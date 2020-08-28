["^ ","~:resource-id",["~:shadow.build.classpath/resource","goog/html/uncheckedconversions.js"],"~:js","goog.provide(\"goog.html.uncheckedconversions\");\ngoog.require(\"goog.asserts\");\ngoog.require(\"goog.html.SafeHtml\");\ngoog.require(\"goog.html.SafeScript\");\ngoog.require(\"goog.html.SafeStyle\");\ngoog.require(\"goog.html.SafeStyleSheet\");\ngoog.require(\"goog.html.SafeUrl\");\ngoog.require(\"goog.html.TrustedResourceUrl\");\ngoog.require(\"goog.string.Const\");\ngoog.require(\"goog.string.internal\");\n/**\n * @param {!goog.string.Const} justification\n * @param {string} html\n * @param {?goog.i18n.bidi.Dir=} opt_dir\n * @return {!goog.html.SafeHtml}\n */\ngoog.html.uncheckedconversions.safeHtmlFromStringKnownToSatisfyTypeContract = function(justification, html, opt_dir) {\n  goog.asserts.assertString(goog.string.Const.unwrap(justification), \"must provide justification\");\n  goog.asserts.assert(!goog.string.internal.isEmptyOrWhitespace(goog.string.Const.unwrap(justification)), \"must provide non-empty justification\");\n  return goog.html.SafeHtml.createSafeHtmlSecurityPrivateDoNotAccessOrElse(html, opt_dir || null);\n};\n/**\n * @param {!goog.string.Const} justification\n * @param {string} script\n * @return {!goog.html.SafeScript}\n */\ngoog.html.uncheckedconversions.safeScriptFromStringKnownToSatisfyTypeContract = function(justification, script) {\n  goog.asserts.assertString(goog.string.Const.unwrap(justification), \"must provide justification\");\n  goog.asserts.assert(!goog.string.internal.isEmptyOrWhitespace(goog.string.Const.unwrap(justification)), \"must provide non-empty justification\");\n  return goog.html.SafeScript.createSafeScriptSecurityPrivateDoNotAccessOrElse(script);\n};\n/**\n * @param {!goog.string.Const} justification\n * @param {string} style\n * @return {!goog.html.SafeStyle}\n */\ngoog.html.uncheckedconversions.safeStyleFromStringKnownToSatisfyTypeContract = function(justification, style) {\n  goog.asserts.assertString(goog.string.Const.unwrap(justification), \"must provide justification\");\n  goog.asserts.assert(!goog.string.internal.isEmptyOrWhitespace(goog.string.Const.unwrap(justification)), \"must provide non-empty justification\");\n  return goog.html.SafeStyle.createSafeStyleSecurityPrivateDoNotAccessOrElse(style);\n};\n/**\n * @param {!goog.string.Const} justification\n * @param {string} styleSheet\n * @return {!goog.html.SafeStyleSheet}\n */\ngoog.html.uncheckedconversions.safeStyleSheetFromStringKnownToSatisfyTypeContract = function(justification, styleSheet) {\n  goog.asserts.assertString(goog.string.Const.unwrap(justification), \"must provide justification\");\n  goog.asserts.assert(!goog.string.internal.isEmptyOrWhitespace(goog.string.Const.unwrap(justification)), \"must provide non-empty justification\");\n  return goog.html.SafeStyleSheet.createSafeStyleSheetSecurityPrivateDoNotAccessOrElse(styleSheet);\n};\n/**\n * @param {!goog.string.Const} justification\n * @param {string} url\n * @return {!goog.html.SafeUrl}\n */\ngoog.html.uncheckedconversions.safeUrlFromStringKnownToSatisfyTypeContract = function(justification, url) {\n  goog.asserts.assertString(goog.string.Const.unwrap(justification), \"must provide justification\");\n  goog.asserts.assert(!goog.string.internal.isEmptyOrWhitespace(goog.string.Const.unwrap(justification)), \"must provide non-empty justification\");\n  return goog.html.SafeUrl.createSafeUrlSecurityPrivateDoNotAccessOrElse(url);\n};\n/**\n * @param {!goog.string.Const} justification\n * @param {string} url\n * @return {!goog.html.TrustedResourceUrl}\n */\ngoog.html.uncheckedconversions.trustedResourceUrlFromStringKnownToSatisfyTypeContract = function(justification, url) {\n  goog.asserts.assertString(goog.string.Const.unwrap(justification), \"must provide justification\");\n  goog.asserts.assert(!goog.string.internal.isEmptyOrWhitespace(goog.string.Const.unwrap(justification)), \"must provide non-empty justification\");\n  return goog.html.TrustedResourceUrl.createTrustedResourceUrlSecurityPrivateDoNotAccessOrElse(url);\n};\n","~:source","// Copyright 2013 The Closure Library Authors. All Rights Reserved.\n//\n// Licensed under the Apache License, Version 2.0 (the \"License\");\n// you may not use this file except in compliance with the License.\n// You may obtain a copy of the License at\n//\n//      http://www.apache.org/licenses/LICENSE-2.0\n//\n// Unless required by applicable law or agreed to in writing, software\n// distributed under the License is distributed on an \"AS-IS\" BASIS,\n// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n// See the License for the specific language governing permissions and\n// limitations under the License.\n\n/**\n * @fileoverview Unchecked conversions to create values of goog.html types from\n * plain strings.  Use of these functions could potentially result in instances\n * of goog.html types that violate their type contracts, and hence result in\n * security vulnerabilties.\n *\n * Therefore, all uses of the methods herein must be carefully security\n * reviewed.  Avoid use of the methods in this file whenever possible; instead\n * prefer to create instances of goog.html types using inherently safe builders\n * or template systems.\n *\n *\n */\n\n\ngoog.provide('goog.html.uncheckedconversions');\n\ngoog.require('goog.asserts');\ngoog.require('goog.html.SafeHtml');\ngoog.require('goog.html.SafeScript');\ngoog.require('goog.html.SafeStyle');\ngoog.require('goog.html.SafeStyleSheet');\ngoog.require('goog.html.SafeUrl');\ngoog.require('goog.html.TrustedResourceUrl');\ngoog.require('goog.string.Const');\ngoog.require('goog.string.internal');\n\n\n/**\n * Performs an \"unchecked conversion\" to SafeHtml from a plain string that is\n * known to satisfy the SafeHtml type contract.\n *\n * IMPORTANT: Uses of this method must be carefully security-reviewed to ensure\n * that the value of `html` satisfies the SafeHtml type contract in all\n * possible program states.\n *\n *\n * @param {!goog.string.Const} justification A constant string explaining why\n *     this use of this method is safe. May include a security review ticket\n *     number.\n * @param {string} html A string that is claimed to adhere to the SafeHtml\n *     contract.\n * @param {?goog.i18n.bidi.Dir=} opt_dir The optional directionality of the\n *     SafeHtml to be constructed. A null or undefined value signifies an\n *     unknown directionality.\n * @return {!goog.html.SafeHtml} The value of html, wrapped in a SafeHtml\n *     object.\n */\ngoog.html.uncheckedconversions.safeHtmlFromStringKnownToSatisfyTypeContract =\n    function(justification, html, opt_dir) {\n  // unwrap() called inside an assert so that justification can be optimized\n  // away in production code.\n  goog.asserts.assertString(\n      goog.string.Const.unwrap(justification), 'must provide justification');\n  goog.asserts.assert(\n      !goog.string.internal.isEmptyOrWhitespace(\n          goog.string.Const.unwrap(justification)),\n      'must provide non-empty justification');\n  return goog.html.SafeHtml.createSafeHtmlSecurityPrivateDoNotAccessOrElse(\n      html, opt_dir || null);\n};\n\n\n/**\n * Performs an \"unchecked conversion\" to SafeScript from a plain string that is\n * known to satisfy the SafeScript type contract.\n *\n * IMPORTANT: Uses of this method must be carefully security-reviewed to ensure\n * that the value of `script` satisfies the SafeScript type contract in\n * all possible program states.\n *\n *\n * @param {!goog.string.Const} justification A constant string explaining why\n *     this use of this method is safe. May include a security review ticket\n *     number.\n * @param {string} script The string to wrap as a SafeScript.\n * @return {!goog.html.SafeScript} The value of `script`, wrapped in a\n *     SafeScript object.\n */\ngoog.html.uncheckedconversions.safeScriptFromStringKnownToSatisfyTypeContract =\n    function(justification, script) {\n  // unwrap() called inside an assert so that justification can be optimized\n  // away in production code.\n  goog.asserts.assertString(\n      goog.string.Const.unwrap(justification), 'must provide justification');\n  goog.asserts.assert(\n      !goog.string.internal.isEmptyOrWhitespace(\n          goog.string.Const.unwrap(justification)),\n      'must provide non-empty justification');\n  return goog.html.SafeScript.createSafeScriptSecurityPrivateDoNotAccessOrElse(\n      script);\n};\n\n\n/**\n * Performs an \"unchecked conversion\" to SafeStyle from a plain string that is\n * known to satisfy the SafeStyle type contract.\n *\n * IMPORTANT: Uses of this method must be carefully security-reviewed to ensure\n * that the value of `style` satisfies the SafeStyle type contract in all\n * possible program states.\n *\n *\n * @param {!goog.string.Const} justification A constant string explaining why\n *     this use of this method is safe. May include a security review ticket\n *     number.\n * @param {string} style The string to wrap as a SafeStyle.\n * @return {!goog.html.SafeStyle} The value of `style`, wrapped in a\n *     SafeStyle object.\n */\ngoog.html.uncheckedconversions.safeStyleFromStringKnownToSatisfyTypeContract =\n    function(justification, style) {\n  // unwrap() called inside an assert so that justification can be optimized\n  // away in production code.\n  goog.asserts.assertString(\n      goog.string.Const.unwrap(justification), 'must provide justification');\n  goog.asserts.assert(\n      !goog.string.internal.isEmptyOrWhitespace(\n          goog.string.Const.unwrap(justification)),\n      'must provide non-empty justification');\n  return goog.html.SafeStyle.createSafeStyleSecurityPrivateDoNotAccessOrElse(\n      style);\n};\n\n\n/**\n * Performs an \"unchecked conversion\" to SafeStyleSheet from a plain string\n * that is known to satisfy the SafeStyleSheet type contract.\n *\n * IMPORTANT: Uses of this method must be carefully security-reviewed to ensure\n * that the value of `styleSheet` satisfies the SafeStyleSheet type\n * contract in all possible program states.\n *\n *\n * @param {!goog.string.Const} justification A constant string explaining why\n *     this use of this method is safe. May include a security review ticket\n *     number.\n * @param {string} styleSheet The string to wrap as a SafeStyleSheet.\n * @return {!goog.html.SafeStyleSheet} The value of `styleSheet`, wrapped\n *     in a SafeStyleSheet object.\n */\ngoog.html.uncheckedconversions\n    .safeStyleSheetFromStringKnownToSatisfyTypeContract = function(\n    justification, styleSheet) {\n  // unwrap() called inside an assert so that justification can be optimized\n  // away in production code.\n  goog.asserts.assertString(\n      goog.string.Const.unwrap(justification), 'must provide justification');\n  goog.asserts.assert(\n      !goog.string.internal.isEmptyOrWhitespace(\n          goog.string.Const.unwrap(justification)),\n      'must provide non-empty justification');\n  return goog.html.SafeStyleSheet\n      .createSafeStyleSheetSecurityPrivateDoNotAccessOrElse(styleSheet);\n};\n\n\n/**\n * Performs an \"unchecked conversion\" to SafeUrl from a plain string that is\n * known to satisfy the SafeUrl type contract.\n *\n * IMPORTANT: Uses of this method must be carefully security-reviewed to ensure\n * that the value of `url` satisfies the SafeUrl type contract in all\n * possible program states.\n *\n *\n * @param {!goog.string.Const} justification A constant string explaining why\n *     this use of this method is safe. May include a security review ticket\n *     number.\n * @param {string} url The string to wrap as a SafeUrl.\n * @return {!goog.html.SafeUrl} The value of `url`, wrapped in a SafeUrl\n *     object.\n */\ngoog.html.uncheckedconversions.safeUrlFromStringKnownToSatisfyTypeContract =\n    function(justification, url) {\n  // unwrap() called inside an assert so that justification can be optimized\n  // away in production code.\n  goog.asserts.assertString(\n      goog.string.Const.unwrap(justification), 'must provide justification');\n  goog.asserts.assert(\n      !goog.string.internal.isEmptyOrWhitespace(\n          goog.string.Const.unwrap(justification)),\n      'must provide non-empty justification');\n  return goog.html.SafeUrl.createSafeUrlSecurityPrivateDoNotAccessOrElse(url);\n};\n\n\n/**\n * Performs an \"unchecked conversion\" to TrustedResourceUrl from a plain string\n * that is known to satisfy the TrustedResourceUrl type contract.\n *\n * IMPORTANT: Uses of this method must be carefully security-reviewed to ensure\n * that the value of `url` satisfies the TrustedResourceUrl type contract\n * in all possible program states.\n *\n *\n * @param {!goog.string.Const} justification A constant string explaining why\n *     this use of this method is safe. May include a security review ticket\n *     number.\n * @param {string} url The string to wrap as a TrustedResourceUrl.\n * @return {!goog.html.TrustedResourceUrl} The value of `url`, wrapped in\n *     a TrustedResourceUrl object.\n */\ngoog.html.uncheckedconversions\n    .trustedResourceUrlFromStringKnownToSatisfyTypeContract = function(\n    justification, url) {\n  // unwrap() called inside an assert so that justification can be optimized\n  // away in production code.\n  goog.asserts.assertString(\n      goog.string.Const.unwrap(justification), 'must provide justification');\n  goog.asserts.assert(\n      !goog.string.internal.isEmptyOrWhitespace(\n          goog.string.Const.unwrap(justification)),\n      'must provide non-empty justification');\n  return goog.html.TrustedResourceUrl\n      .createTrustedResourceUrlSecurityPrivateDoNotAccessOrElse(url);\n};\n","~:compiled-at",1598576858425,"~:source-map-json","{\n\"version\":3,\n\"file\":\"goog.html.uncheckedconversions.js\",\n\"lineCount\":72,\n\"mappings\":\"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\",\n\"sources\":[\"goog/html/uncheckedconversions.js\"],\n\"sourcesContent\":[\"// Copyright 2013 The Closure Library Authors. All Rights Reserved.\\n//\\n// Licensed under the Apache License, Version 2.0 (the \\\"License\\\");\\n// you may not use this file except in compliance with the License.\\n// You may obtain a copy of the License at\\n//\\n//      http://www.apache.org/licenses/LICENSE-2.0\\n//\\n// Unless required by applicable law or agreed to in writing, software\\n// distributed under the License is distributed on an \\\"AS-IS\\\" BASIS,\\n// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\\n// See the License for the specific language governing permissions and\\n// limitations under the License.\\n\\n/**\\n * @fileoverview Unchecked conversions to create values of goog.html types from\\n * plain strings.  Use of these functions could potentially result in instances\\n * of goog.html types that violate their type contracts, and hence result in\\n * security vulnerabilties.\\n *\\n * Therefore, all uses of the methods herein must be carefully security\\n * reviewed.  Avoid use of the methods in this file whenever possible; instead\\n * prefer to create instances of goog.html types using inherently safe builders\\n * or template systems.\\n *\\n *\\n */\\n\\n\\ngoog.provide('goog.html.uncheckedconversions');\\n\\ngoog.require('goog.asserts');\\ngoog.require('goog.html.SafeHtml');\\ngoog.require('goog.html.SafeScript');\\ngoog.require('goog.html.SafeStyle');\\ngoog.require('goog.html.SafeStyleSheet');\\ngoog.require('goog.html.SafeUrl');\\ngoog.require('goog.html.TrustedResourceUrl');\\ngoog.require('goog.string.Const');\\ngoog.require('goog.string.internal');\\n\\n\\n/**\\n * Performs an \\\"unchecked conversion\\\" to SafeHtml from a plain string that is\\n * known to satisfy the SafeHtml type contract.\\n *\\n * IMPORTANT: Uses of this method must be carefully security-reviewed to ensure\\n * that the value of `html` satisfies the SafeHtml type contract in all\\n * possible program states.\\n *\\n *\\n * @param {!goog.string.Const} justification A constant string explaining why\\n *     this use of this method is safe. May include a security review ticket\\n *     number.\\n * @param {string} html A string that is claimed to adhere to the SafeHtml\\n *     contract.\\n * @param {?goog.i18n.bidi.Dir=} opt_dir The optional directionality of the\\n *     SafeHtml to be constructed. A null or undefined value signifies an\\n *     unknown directionality.\\n * @return {!goog.html.SafeHtml} The value of html, wrapped in a SafeHtml\\n *     object.\\n */\\ngoog.html.uncheckedconversions.safeHtmlFromStringKnownToSatisfyTypeContract =\\n    function(justification, html, opt_dir) {\\n  // unwrap() called inside an assert so that justification can be optimized\\n  // away in production code.\\n  goog.asserts.assertString(\\n      goog.string.Const.unwrap(justification), 'must provide justification');\\n  goog.asserts.assert(\\n      !goog.string.internal.isEmptyOrWhitespace(\\n          goog.string.Const.unwrap(justification)),\\n      'must provide non-empty justification');\\n  return goog.html.SafeHtml.createSafeHtmlSecurityPrivateDoNotAccessOrElse(\\n      html, opt_dir || null);\\n};\\n\\n\\n/**\\n * Performs an \\\"unchecked conversion\\\" to SafeScript from a plain string that is\\n * known to satisfy the SafeScript type contract.\\n *\\n * IMPORTANT: Uses of this method must be carefully security-reviewed to ensure\\n * that the value of `script` satisfies the SafeScript type contract in\\n * all possible program states.\\n *\\n *\\n * @param {!goog.string.Const} justification A constant string explaining why\\n *     this use of this method is safe. May include a security review ticket\\n *     number.\\n * @param {string} script The string to wrap as a SafeScript.\\n * @return {!goog.html.SafeScript} The value of `script`, wrapped in a\\n *     SafeScript object.\\n */\\ngoog.html.uncheckedconversions.safeScriptFromStringKnownToSatisfyTypeContract =\\n    function(justification, script) {\\n  // unwrap() called inside an assert so that justification can be optimized\\n  // away in production code.\\n  goog.asserts.assertString(\\n      goog.string.Const.unwrap(justification), 'must provide justification');\\n  goog.asserts.assert(\\n      !goog.string.internal.isEmptyOrWhitespace(\\n          goog.string.Const.unwrap(justification)),\\n      'must provide non-empty justification');\\n  return goog.html.SafeScript.createSafeScriptSecurityPrivateDoNotAccessOrElse(\\n      script);\\n};\\n\\n\\n/**\\n * Performs an \\\"unchecked conversion\\\" to SafeStyle from a plain string that is\\n * known to satisfy the SafeStyle type contract.\\n *\\n * IMPORTANT: Uses of this method must be carefully security-reviewed to ensure\\n * that the value of `style` satisfies the SafeStyle type contract in all\\n * possible program states.\\n *\\n *\\n * @param {!goog.string.Const} justification A constant string explaining why\\n *     this use of this method is safe. May include a security review ticket\\n *     number.\\n * @param {string} style The string to wrap as a SafeStyle.\\n * @return {!goog.html.SafeStyle} The value of `style`, wrapped in a\\n *     SafeStyle object.\\n */\\ngoog.html.uncheckedconversions.safeStyleFromStringKnownToSatisfyTypeContract =\\n    function(justification, style) {\\n  // unwrap() called inside an assert so that justification can be optimized\\n  // away in production code.\\n  goog.asserts.assertString(\\n      goog.string.Const.unwrap(justification), 'must provide justification');\\n  goog.asserts.assert(\\n      !goog.string.internal.isEmptyOrWhitespace(\\n          goog.string.Const.unwrap(justification)),\\n      'must provide non-empty justification');\\n  return goog.html.SafeStyle.createSafeStyleSecurityPrivateDoNotAccessOrElse(\\n      style);\\n};\\n\\n\\n/**\\n * Performs an \\\"unchecked conversion\\\" to SafeStyleSheet from a plain string\\n * that is known to satisfy the SafeStyleSheet type contract.\\n *\\n * IMPORTANT: Uses of this method must be carefully security-reviewed to ensure\\n * that the value of `styleSheet` satisfies the SafeStyleSheet type\\n * contract in all possible program states.\\n *\\n *\\n * @param {!goog.string.Const} justification A constant string explaining why\\n *     this use of this method is safe. May include a security review ticket\\n *     number.\\n * @param {string} styleSheet The string to wrap as a SafeStyleSheet.\\n * @return {!goog.html.SafeStyleSheet} The value of `styleSheet`, wrapped\\n *     in a SafeStyleSheet object.\\n */\\ngoog.html.uncheckedconversions\\n    .safeStyleSheetFromStringKnownToSatisfyTypeContract = function(\\n    justification, styleSheet) {\\n  // unwrap() called inside an assert so that justification can be optimized\\n  // away in production code.\\n  goog.asserts.assertString(\\n      goog.string.Const.unwrap(justification), 'must provide justification');\\n  goog.asserts.assert(\\n      !goog.string.internal.isEmptyOrWhitespace(\\n          goog.string.Const.unwrap(justification)),\\n      'must provide non-empty justification');\\n  return goog.html.SafeStyleSheet\\n      .createSafeStyleSheetSecurityPrivateDoNotAccessOrElse(styleSheet);\\n};\\n\\n\\n/**\\n * Performs an \\\"unchecked conversion\\\" to SafeUrl from a plain string that is\\n * known to satisfy the SafeUrl type contract.\\n *\\n * IMPORTANT: Uses of this method must be carefully security-reviewed to ensure\\n * that the value of `url` satisfies the SafeUrl type contract in all\\n * possible program states.\\n *\\n *\\n * @param {!goog.string.Const} justification A constant string explaining why\\n *     this use of this method is safe. May include a security review ticket\\n *     number.\\n * @param {string} url The string to wrap as a SafeUrl.\\n * @return {!goog.html.SafeUrl} The value of `url`, wrapped in a SafeUrl\\n *     object.\\n */\\ngoog.html.uncheckedconversions.safeUrlFromStringKnownToSatisfyTypeContract =\\n    function(justification, url) {\\n  // unwrap() called inside an assert so that justification can be optimized\\n  // away in production code.\\n  goog.asserts.assertString(\\n      goog.string.Const.unwrap(justification), 'must provide justification');\\n  goog.asserts.assert(\\n      !goog.string.internal.isEmptyOrWhitespace(\\n          goog.string.Const.unwrap(justification)),\\n      'must provide non-empty justification');\\n  return goog.html.SafeUrl.createSafeUrlSecurityPrivateDoNotAccessOrElse(url);\\n};\\n\\n\\n/**\\n * Performs an \\\"unchecked conversion\\\" to TrustedResourceUrl from a plain string\\n * that is known to satisfy the TrustedResourceUrl type contract.\\n *\\n * IMPORTANT: Uses of this method must be carefully security-reviewed to ensure\\n * that the value of `url` satisfies the TrustedResourceUrl type contract\\n * in all possible program states.\\n *\\n *\\n * @param {!goog.string.Const} justification A constant string explaining why\\n *     this use of this method is safe. May include a security review ticket\\n *     number.\\n * @param {string} url The string to wrap as a TrustedResourceUrl.\\n * @return {!goog.html.TrustedResourceUrl} The value of `url`, wrapped in\\n *     a TrustedResourceUrl object.\\n */\\ngoog.html.uncheckedconversions\\n    .trustedResourceUrlFromStringKnownToSatisfyTypeContract = function(\\n    justification, url) {\\n  // unwrap() called inside an assert so that justification can be optimized\\n  // away in production code.\\n  goog.asserts.assertString(\\n      goog.string.Const.unwrap(justification), 'must provide justification');\\n  goog.asserts.assert(\\n      !goog.string.internal.isEmptyOrWhitespace(\\n          goog.string.Const.unwrap(justification)),\\n      'must provide non-empty justification');\\n  return goog.html.TrustedResourceUrl\\n      .createTrustedResourceUrlSecurityPrivateDoNotAccessOrElse(url);\\n};\\n\"],\n\"names\":[\"goog\",\"provide\",\"require\",\"html\",\"uncheckedconversions\",\"safeHtmlFromStringKnownToSatisfyTypeContract\",\"goog.html.uncheckedconversions.safeHtmlFromStringKnownToSatisfyTypeContract\",\"justification\",\"opt_dir\",\"asserts\",\"assertString\",\"string\",\"Const\",\"unwrap\",\"assert\",\"internal\",\"isEmptyOrWhitespace\",\"SafeHtml\",\"createSafeHtmlSecurityPrivateDoNotAccessOrElse\",\"safeScriptFromStringKnownToSatisfyTypeContract\",\"goog.html.uncheckedconversions.safeScriptFromStringKnownToSatisfyTypeContract\",\"script\",\"SafeScript\",\"createSafeScriptSecurityPrivateDoNotAccessOrElse\",\"safeStyleFromStringKnownToSatisfyTypeContract\",\"goog.html.uncheckedconversions.safeStyleFromStringKnownToSatisfyTypeContract\",\"style\",\"SafeStyle\",\"createSafeStyleSecurityPrivateDoNotAccessOrElse\",\"safeStyleSheetFromStringKnownToSatisfyTypeContract\",\"goog.html.uncheckedconversions.safeStyleSheetFromStringKnownToSatisfyTypeContract\",\"styleSheet\",\"SafeStyleSheet\",\"createSafeStyleSheetSecurityPrivateDoNotAccessOrElse\",\"safeUrlFromStringKnownToSatisfyTypeContract\",\"goog.html.uncheckedconversions.safeUrlFromStringKnownToSatisfyTypeContract\",\"url\",\"SafeUrl\",\"createSafeUrlSecurityPrivateDoNotAccessOrElse\",\"trustedResourceUrlFromStringKnownToSatisfyTypeContract\",\"goog.html.uncheckedconversions.trustedResourceUrlFromStringKnownToSatisfyTypeContract\",\"TrustedResourceUrl\",\"createTrustedResourceUrlSecurityPrivateDoNotAccessOrElse\"]\n}\n"]