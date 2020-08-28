["^ ","~:resource-id",["~:shadow.build.classpath/resource","goog/fx/anim/anim.js"],"~:js","goog.provide(\"goog.fx.anim\");\ngoog.provide(\"goog.fx.anim.Animated\");\ngoog.require(\"goog.async.AnimationDelay\");\ngoog.require(\"goog.async.Delay\");\ngoog.require(\"goog.object\");\n/** @interface */ goog.fx.anim.Animated = function() {\n};\n/**\n * @param {number} now\n */\ngoog.fx.anim.Animated.prototype.onAnimationFrame;\n/** @const @type {number} */ goog.fx.anim.TIMEOUT = goog.async.AnimationDelay.TIMEOUT;\n/** @private @type {!Object<number,goog.fx.anim.Animated>} */ goog.fx.anim.activeAnimations_ = {};\n/** @private @type {?Window} */ goog.fx.anim.animationWindow_ = null;\n/** @private @type {(?goog.async.Delay|?goog.async.AnimationDelay)} */ goog.fx.anim.animationDelay_ = null;\n/**\n * @param {goog.fx.anim.Animated} animation\n */\ngoog.fx.anim.registerAnimation = function(animation) {\n  var uid = goog.getUid(animation);\n  if (!(uid in goog.fx.anim.activeAnimations_)) {\n    goog.fx.anim.activeAnimations_[uid] = animation;\n  }\n  goog.fx.anim.requestAnimationFrame_();\n};\n/**\n * @param {goog.fx.anim.Animated} animation\n */\ngoog.fx.anim.unregisterAnimation = function(animation) {\n  var uid = goog.getUid(animation);\n  delete goog.fx.anim.activeAnimations_[uid];\n  if (goog.object.isEmpty(goog.fx.anim.activeAnimations_)) {\n    goog.fx.anim.cancelAnimationFrame_();\n  }\n};\ngoog.fx.anim.tearDown = function() {\n  goog.fx.anim.animationWindow_ = null;\n  goog.dispose(goog.fx.anim.animationDelay_);\n  goog.fx.anim.animationDelay_ = null;\n  goog.fx.anim.activeAnimations_ = {};\n};\n/**\n * @param {Window} animationWindow\n */\ngoog.fx.anim.setAnimationWindow = function(animationWindow) {\n  var hasTimer = goog.fx.anim.animationDelay_ && goog.fx.anim.animationDelay_.isActive();\n  goog.dispose(goog.fx.anim.animationDelay_);\n  goog.fx.anim.animationDelay_ = null;\n  goog.fx.anim.animationWindow_ = animationWindow;\n  if (hasTimer) {\n    goog.fx.anim.requestAnimationFrame_();\n  }\n};\n/** @private */ goog.fx.anim.requestAnimationFrame_ = function() {\n  if (!goog.fx.anim.animationDelay_) {\n    if (goog.fx.anim.animationWindow_) {\n      goog.fx.anim.animationDelay_ = new goog.async.AnimationDelay(function(now) {\n        goog.fx.anim.cycleAnimations_(now);\n      }, goog.fx.anim.animationWindow_);\n    } else {\n      goog.fx.anim.animationDelay_ = new goog.async.Delay(function() {\n        goog.fx.anim.cycleAnimations_(goog.now());\n      }, goog.fx.anim.TIMEOUT);\n    }\n  }\n  var delay = goog.fx.anim.animationDelay_;\n  if (!delay.isActive()) {\n    delay.start();\n  }\n};\n/** @private */ goog.fx.anim.cancelAnimationFrame_ = function() {\n  if (goog.fx.anim.animationDelay_) {\n    goog.fx.anim.animationDelay_.stop();\n  }\n};\n/**\n * @private\n * @param {number} now\n */\ngoog.fx.anim.cycleAnimations_ = function(now) {\n  goog.object.forEach(goog.fx.anim.activeAnimations_, function(anim) {\n    anim.onAnimationFrame(now);\n  });\n  if (!goog.object.isEmpty(goog.fx.anim.activeAnimations_)) {\n    goog.fx.anim.requestAnimationFrame_();\n  }\n};\n","~:source","// Copyright 2006 The Closure Library Authors. All Rights Reserved.\n//\n// Licensed under the Apache License, Version 2.0 (the \"License\");\n// you may not use this file except in compliance with the License.\n// You may obtain a copy of the License at\n//\n//      http://www.apache.org/licenses/LICENSE-2.0\n//\n// Unless required by applicable law or agreed to in writing, software\n// distributed under the License is distributed on an \"AS-IS\" BASIS,\n// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n// See the License for the specific language governing permissions and\n// limitations under the License.\n\n/**\n * @fileoverview Basic animation controls.\n *\n * @author arv@google.com (Erik Arvidsson)\n */\ngoog.provide('goog.fx.anim');\ngoog.provide('goog.fx.anim.Animated');\n\ngoog.require('goog.async.AnimationDelay');\ngoog.require('goog.async.Delay');\ngoog.require('goog.object');\n\n\n\n/**\n * An interface for programatically animated objects. I.e. rendered in\n * javascript frame by frame.\n *\n * @interface\n */\ngoog.fx.anim.Animated = function() {};\n\n\n/**\n * Function called when a frame is requested for the animation.\n *\n * @param {number} now Current time in milliseconds.\n */\ngoog.fx.anim.Animated.prototype.onAnimationFrame;\n\n\n/**\n * Default wait timeout for animations (in milliseconds).  Only used for timed\n * animation, which uses a timer (setTimeout) to schedule animation.\n *\n * @type {number}\n * @const\n */\ngoog.fx.anim.TIMEOUT = goog.async.AnimationDelay.TIMEOUT;\n\n\n/**\n * A map of animations which should be cycled on the global timer.\n *\n * @type {!Object<number, goog.fx.anim.Animated>}\n * @private\n */\ngoog.fx.anim.activeAnimations_ = {};\n\n\n/**\n * An optional animation window.\n * @type {?Window}\n * @private\n */\ngoog.fx.anim.animationWindow_ = null;\n\n\n/**\n * An interval ID for the global timer or event handler uid.\n * @type {?goog.async.Delay|?goog.async.AnimationDelay}\n * @private\n */\ngoog.fx.anim.animationDelay_ = null;\n\n\n/**\n * Registers an animation to be cycled on the global timer.\n * @param {goog.fx.anim.Animated} animation The animation to register.\n */\ngoog.fx.anim.registerAnimation = function(animation) {\n  var uid = goog.getUid(animation);\n  if (!(uid in goog.fx.anim.activeAnimations_)) {\n    goog.fx.anim.activeAnimations_[uid] = animation;\n  }\n\n  // If the timer is not already started, start it now.\n  goog.fx.anim.requestAnimationFrame_();\n};\n\n\n/**\n * Removes an animation from the list of animations which are cycled on the\n * global timer.\n * @param {goog.fx.anim.Animated} animation The animation to unregister.\n */\ngoog.fx.anim.unregisterAnimation = function(animation) {\n  var uid = goog.getUid(animation);\n  delete goog.fx.anim.activeAnimations_[uid];\n\n  // If a timer is running and we no longer have any active timers we stop the\n  // timers.\n  if (goog.object.isEmpty(goog.fx.anim.activeAnimations_)) {\n    goog.fx.anim.cancelAnimationFrame_();\n  }\n};\n\n\n/**\n * Tears down this module. Useful for testing.\n */\n// TODO(nicksantos): Wow, this api is pretty broken. This should be fixed.\ngoog.fx.anim.tearDown = function() {\n  goog.fx.anim.animationWindow_ = null;\n  goog.dispose(goog.fx.anim.animationDelay_);\n  goog.fx.anim.animationDelay_ = null;\n  goog.fx.anim.activeAnimations_ = {};\n};\n\n\n/**\n * Registers an animation window. This allows usage of the timing control API\n * for animations. Note that this window must be visible, as non-visible\n * windows can potentially stop animating. This window does not necessarily\n * need to be the window inside which animation occurs, but must remain visible.\n * See: https://developer.mozilla.org/en/DOM/window.mozRequestAnimationFrame.\n *\n * @param {Window} animationWindow The window in which to animate elements.\n */\ngoog.fx.anim.setAnimationWindow = function(animationWindow) {\n  // If a timer is currently running, reset it and restart with new functions\n  // after a timeout. This is to avoid mismatching timer UIDs if we change the\n  // animation window during a running animation.\n  //\n  // In practice this cannot happen before some animation window and timer\n  // control functions has already been set.\n  var hasTimer =\n      goog.fx.anim.animationDelay_ && goog.fx.anim.animationDelay_.isActive();\n\n  goog.dispose(goog.fx.anim.animationDelay_);\n  goog.fx.anim.animationDelay_ = null;\n  goog.fx.anim.animationWindow_ = animationWindow;\n\n  // If the timer was running, start it again.\n  if (hasTimer) {\n    goog.fx.anim.requestAnimationFrame_();\n  }\n};\n\n\n/**\n * Requests an animation frame based on the requestAnimationFrame and\n * cancelRequestAnimationFrame function pair.\n * @private\n */\ngoog.fx.anim.requestAnimationFrame_ = function() {\n  if (!goog.fx.anim.animationDelay_) {\n    // We cannot guarantee that the global window will be one that fires\n    // requestAnimationFrame events (consider off-screen chrome extension\n    // windows). Default to use goog.async.Delay, unless\n    // the client has explicitly set an animation window.\n    if (goog.fx.anim.animationWindow_) {\n      // requestAnimationFrame will call cycleAnimations_ with the current\n      // time in ms, as returned from goog.now().\n      goog.fx.anim.animationDelay_ =\n          new goog.async.AnimationDelay(function(now) {\n            goog.fx.anim.cycleAnimations_(now);\n          }, goog.fx.anim.animationWindow_);\n    } else {\n      goog.fx.anim.animationDelay_ = new goog.async.Delay(function() {\n        goog.fx.anim.cycleAnimations_(goog.now());\n      }, goog.fx.anim.TIMEOUT);\n    }\n  }\n\n  var delay = goog.fx.anim.animationDelay_;\n  if (!delay.isActive()) {\n    delay.start();\n  }\n};\n\n\n/**\n * Cancels an animation frame created by requestAnimationFrame_().\n * @private\n */\ngoog.fx.anim.cancelAnimationFrame_ = function() {\n  if (goog.fx.anim.animationDelay_) {\n    goog.fx.anim.animationDelay_.stop();\n  }\n};\n\n\n/**\n * Cycles through all registered animations.\n * @param {number} now Current time in milliseconds.\n * @private\n */\ngoog.fx.anim.cycleAnimations_ = function(now) {\n  goog.object.forEach(goog.fx.anim.activeAnimations_, function(anim) {\n    anim.onAnimationFrame(now);\n  });\n\n  if (!goog.object.isEmpty(goog.fx.anim.activeAnimations_)) {\n    goog.fx.anim.requestAnimationFrame_();\n  }\n};\n","~:compiled-at",1598576858573,"~:source-map-json","{\n\"version\":3,\n\"file\":\"goog.fx.anim.anim.js\",\n\"lineCount\":88,\n\"mappings\":\"AAmBAA,IAAAC,QAAA,CAAa,cAAb,CAAA;AACAD,IAAAC,QAAA,CAAa,uBAAb,CAAA;AAEAD,IAAAE,QAAA,CAAa,2BAAb,CAAA;AACAF,IAAAE,QAAA,CAAa,kBAAb,CAAA;AACAF,IAAAE,QAAA,CAAa,aAAb,CAAA;AAUA,kBAAAF,IAAAG,GAAAC,KAAAC,SAAA,GAAwBC,QAAQ,EAAG;CAAnC;AAQA;;;AAAAN,IAAAG,GAAAC,KAAAC,SAAAE,UAAAC,iBAAA;AAUA,6BAAAR,IAAAG,GAAAC,KAAAK,QAAA,GAAuBT,IAAAU,MAAAC,eAAAF,QAAvB;AASA,8DAAAT,IAAAG,GAAAC,KAAAQ,kBAAA,GAAiC,EAAjC;AAQA,gCAAAZ,IAAAG,GAAAC,KAAAS,iBAAA,GAAgC,IAAhC;AAQA,uEAAAb,IAAAG,GAAAC,KAAAU,gBAAA,GAA+B,IAA/B;AAOA;;;AAAAd,IAAAG,GAAAC,KAAAW,kBAAA,GAAiCC,QAAQ,CAACC,SAAD,CAAY;AACnD,MAAIC,MAAMlB,IAAAmB,OAAA,CAAYF,SAAZ,CAAV;AACA,MAAI,EAAEC,GAAF,IAASlB,IAAAG,GAAAC,KAAAQ,kBAAT,CAAJ;AACEZ,QAAAG,GAAAC,KAAAQ,kBAAA,CAA+BM,GAA/B,CAAA,GAAsCD,SAAtC;AADF;AAKAjB,MAAAG,GAAAC,KAAAgB,uBAAA,EAAA;AAPmD,CAArD;AAgBA;;;AAAApB,IAAAG,GAAAC,KAAAiB,oBAAA,GAAmCC,QAAQ,CAACL,SAAD,CAAY;AACrD,MAAIC,MAAMlB,IAAAmB,OAAA,CAAYF,SAAZ,CAAV;AACA,SAAOjB,IAAAG,GAAAC,KAAAQ,kBAAA,CAA+BM,GAA/B,CAAP;AAIA,MAAIlB,IAAAuB,OAAAC,QAAA,CAAoBxB,IAAAG,GAAAC,KAAAQ,kBAApB,CAAJ;AACEZ,QAAAG,GAAAC,KAAAqB,sBAAA,EAAA;AADF;AANqD,CAAvD;AAgBAzB,IAAAG,GAAAC,KAAAsB,SAAA,GAAwBC,QAAQ,EAAG;AACjC3B,MAAAG,GAAAC,KAAAS,iBAAA,GAAgC,IAAhC;AACAb,MAAA4B,QAAA,CAAa5B,IAAAG,GAAAC,KAAAU,gBAAb,CAAA;AACAd,MAAAG,GAAAC,KAAAU,gBAAA,GAA+B,IAA/B;AACAd,MAAAG,GAAAC,KAAAQ,kBAAA,GAAiC,EAAjC;AAJiC,CAAnC;AAiBA;;;AAAAZ,IAAAG,GAAAC,KAAAyB,mBAAA,GAAkCC,QAAQ,CAACC,eAAD,CAAkB;AAO1D,MAAIC,WACAhC,IAAAG,GAAAC,KAAAU,gBADAkB,IACgChC,IAAAG,GAAAC,KAAAU,gBAAAmB,SAAA,EADpC;AAGAjC,MAAA4B,QAAA,CAAa5B,IAAAG,GAAAC,KAAAU,gBAAb,CAAA;AACAd,MAAAG,GAAAC,KAAAU,gBAAA,GAA+B,IAA/B;AACAd,MAAAG,GAAAC,KAAAS,iBAAA,GAAgCkB,eAAhC;AAGA,MAAIC,QAAJ;AACEhC,QAAAG,GAAAC,KAAAgB,uBAAA,EAAA;AADF;AAf0D,CAA5D;AA0BA,gBAAApB,IAAAG,GAAAC,KAAAgB,uBAAA,GAAsCc,QAAQ,EAAG;AAC/C,MAAI,CAAClC,IAAAG,GAAAC,KAAAU,gBAAL;AAKE,QAAId,IAAAG,GAAAC,KAAAS,iBAAJ;AAGEb,UAAAG,GAAAC,KAAAU,gBAAA,GACI,IAAId,IAAAU,MAAAC,eAAJ,CAA8B,QAAQ,CAACwB,GAAD,CAAM;AAC1CnC,YAAAG,GAAAC,KAAAgC,iBAAA,CAA8BD,GAA9B,CAAA;AAD0C,OAA5C,EAEGnC,IAAAG,GAAAC,KAAAS,iBAFH,CADJ;AAHF;AAQEb,UAAAG,GAAAC,KAAAU,gBAAA,GAA+B,IAAId,IAAAU,MAAA2B,MAAJ,CAAqB,QAAQ,EAAG;AAC7DrC,YAAAG,GAAAC,KAAAgC,iBAAA,CAA8BpC,IAAAmC,IAAA,EAA9B,CAAA;AAD6D,OAAhC,EAE5BnC,IAAAG,GAAAC,KAAAK,QAF4B,CAA/B;AARF;AALF;AAmBA,MAAI6B,QAAQtC,IAAAG,GAAAC,KAAAU,gBAAZ;AACA,MAAI,CAACwB,KAAAL,SAAA,EAAL;AACEK,SAAAC,MAAA,EAAA;AADF;AArB+C,CAAjD;AA+BA,gBAAAvC,IAAAG,GAAAC,KAAAqB,sBAAA,GAAqCe,QAAQ,EAAG;AAC9C,MAAIxC,IAAAG,GAAAC,KAAAU,gBAAJ;AACEd,QAAAG,GAAAC,KAAAU,gBAAA2B,KAAA,EAAA;AADF;AAD8C,CAAhD;AAYA;;;;AAAAzC,IAAAG,GAAAC,KAAAgC,iBAAA,GAAgCM,QAAQ,CAACP,GAAD,CAAM;AAC5CnC,MAAAuB,OAAAoB,QAAA,CAAoB3C,IAAAG,GAAAC,KAAAQ,kBAApB,EAAoD,QAAQ,CAACR,IAAD,CAAO;AACjEA,QAAAI,iBAAA,CAAsB2B,GAAtB,CAAA;AADiE,GAAnE,CAAA;AAIA,MAAI,CAACnC,IAAAuB,OAAAC,QAAA,CAAoBxB,IAAAG,GAAAC,KAAAQ,kBAApB,CAAL;AACEZ,QAAAG,GAAAC,KAAAgB,uBAAA,EAAA;AADF;AAL4C,CAA9C;;\",\n\"sources\":[\"goog/fx/anim/anim.js\"],\n\"sourcesContent\":[\"// Copyright 2006 The Closure Library Authors. All Rights Reserved.\\n//\\n// Licensed under the Apache License, Version 2.0 (the \\\"License\\\");\\n// you may not use this file except in compliance with the License.\\n// You may obtain a copy of the License at\\n//\\n//      http://www.apache.org/licenses/LICENSE-2.0\\n//\\n// Unless required by applicable law or agreed to in writing, software\\n// distributed under the License is distributed on an \\\"AS-IS\\\" BASIS,\\n// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\\n// See the License for the specific language governing permissions and\\n// limitations under the License.\\n\\n/**\\n * @fileoverview Basic animation controls.\\n *\\n * @author arv@google.com (Erik Arvidsson)\\n */\\ngoog.provide('goog.fx.anim');\\ngoog.provide('goog.fx.anim.Animated');\\n\\ngoog.require('goog.async.AnimationDelay');\\ngoog.require('goog.async.Delay');\\ngoog.require('goog.object');\\n\\n\\n\\n/**\\n * An interface for programatically animated objects. I.e. rendered in\\n * javascript frame by frame.\\n *\\n * @interface\\n */\\ngoog.fx.anim.Animated = function() {};\\n\\n\\n/**\\n * Function called when a frame is requested for the animation.\\n *\\n * @param {number} now Current time in milliseconds.\\n */\\ngoog.fx.anim.Animated.prototype.onAnimationFrame;\\n\\n\\n/**\\n * Default wait timeout for animations (in milliseconds).  Only used for timed\\n * animation, which uses a timer (setTimeout) to schedule animation.\\n *\\n * @type {number}\\n * @const\\n */\\ngoog.fx.anim.TIMEOUT = goog.async.AnimationDelay.TIMEOUT;\\n\\n\\n/**\\n * A map of animations which should be cycled on the global timer.\\n *\\n * @type {!Object<number, goog.fx.anim.Animated>}\\n * @private\\n */\\ngoog.fx.anim.activeAnimations_ = {};\\n\\n\\n/**\\n * An optional animation window.\\n * @type {?Window}\\n * @private\\n */\\ngoog.fx.anim.animationWindow_ = null;\\n\\n\\n/**\\n * An interval ID for the global timer or event handler uid.\\n * @type {?goog.async.Delay|?goog.async.AnimationDelay}\\n * @private\\n */\\ngoog.fx.anim.animationDelay_ = null;\\n\\n\\n/**\\n * Registers an animation to be cycled on the global timer.\\n * @param {goog.fx.anim.Animated} animation The animation to register.\\n */\\ngoog.fx.anim.registerAnimation = function(animation) {\\n  var uid = goog.getUid(animation);\\n  if (!(uid in goog.fx.anim.activeAnimations_)) {\\n    goog.fx.anim.activeAnimations_[uid] = animation;\\n  }\\n\\n  // If the timer is not already started, start it now.\\n  goog.fx.anim.requestAnimationFrame_();\\n};\\n\\n\\n/**\\n * Removes an animation from the list of animations which are cycled on the\\n * global timer.\\n * @param {goog.fx.anim.Animated} animation The animation to unregister.\\n */\\ngoog.fx.anim.unregisterAnimation = function(animation) {\\n  var uid = goog.getUid(animation);\\n  delete goog.fx.anim.activeAnimations_[uid];\\n\\n  // If a timer is running and we no longer have any active timers we stop the\\n  // timers.\\n  if (goog.object.isEmpty(goog.fx.anim.activeAnimations_)) {\\n    goog.fx.anim.cancelAnimationFrame_();\\n  }\\n};\\n\\n\\n/**\\n * Tears down this module. Useful for testing.\\n */\\n// TODO(nicksantos): Wow, this api is pretty broken. This should be fixed.\\ngoog.fx.anim.tearDown = function() {\\n  goog.fx.anim.animationWindow_ = null;\\n  goog.dispose(goog.fx.anim.animationDelay_);\\n  goog.fx.anim.animationDelay_ = null;\\n  goog.fx.anim.activeAnimations_ = {};\\n};\\n\\n\\n/**\\n * Registers an animation window. This allows usage of the timing control API\\n * for animations. Note that this window must be visible, as non-visible\\n * windows can potentially stop animating. This window does not necessarily\\n * need to be the window inside which animation occurs, but must remain visible.\\n * See: https://developer.mozilla.org/en/DOM/window.mozRequestAnimationFrame.\\n *\\n * @param {Window} animationWindow The window in which to animate elements.\\n */\\ngoog.fx.anim.setAnimationWindow = function(animationWindow) {\\n  // If a timer is currently running, reset it and restart with new functions\\n  // after a timeout. This is to avoid mismatching timer UIDs if we change the\\n  // animation window during a running animation.\\n  //\\n  // In practice this cannot happen before some animation window and timer\\n  // control functions has already been set.\\n  var hasTimer =\\n      goog.fx.anim.animationDelay_ && goog.fx.anim.animationDelay_.isActive();\\n\\n  goog.dispose(goog.fx.anim.animationDelay_);\\n  goog.fx.anim.animationDelay_ = null;\\n  goog.fx.anim.animationWindow_ = animationWindow;\\n\\n  // If the timer was running, start it again.\\n  if (hasTimer) {\\n    goog.fx.anim.requestAnimationFrame_();\\n  }\\n};\\n\\n\\n/**\\n * Requests an animation frame based on the requestAnimationFrame and\\n * cancelRequestAnimationFrame function pair.\\n * @private\\n */\\ngoog.fx.anim.requestAnimationFrame_ = function() {\\n  if (!goog.fx.anim.animationDelay_) {\\n    // We cannot guarantee that the global window will be one that fires\\n    // requestAnimationFrame events (consider off-screen chrome extension\\n    // windows). Default to use goog.async.Delay, unless\\n    // the client has explicitly set an animation window.\\n    if (goog.fx.anim.animationWindow_) {\\n      // requestAnimationFrame will call cycleAnimations_ with the current\\n      // time in ms, as returned from goog.now().\\n      goog.fx.anim.animationDelay_ =\\n          new goog.async.AnimationDelay(function(now) {\\n            goog.fx.anim.cycleAnimations_(now);\\n          }, goog.fx.anim.animationWindow_);\\n    } else {\\n      goog.fx.anim.animationDelay_ = new goog.async.Delay(function() {\\n        goog.fx.anim.cycleAnimations_(goog.now());\\n      }, goog.fx.anim.TIMEOUT);\\n    }\\n  }\\n\\n  var delay = goog.fx.anim.animationDelay_;\\n  if (!delay.isActive()) {\\n    delay.start();\\n  }\\n};\\n\\n\\n/**\\n * Cancels an animation frame created by requestAnimationFrame_().\\n * @private\\n */\\ngoog.fx.anim.cancelAnimationFrame_ = function() {\\n  if (goog.fx.anim.animationDelay_) {\\n    goog.fx.anim.animationDelay_.stop();\\n  }\\n};\\n\\n\\n/**\\n * Cycles through all registered animations.\\n * @param {number} now Current time in milliseconds.\\n * @private\\n */\\ngoog.fx.anim.cycleAnimations_ = function(now) {\\n  goog.object.forEach(goog.fx.anim.activeAnimations_, function(anim) {\\n    anim.onAnimationFrame(now);\\n  });\\n\\n  if (!goog.object.isEmpty(goog.fx.anim.activeAnimations_)) {\\n    goog.fx.anim.requestAnimationFrame_();\\n  }\\n};\\n\"],\n\"names\":[\"goog\",\"provide\",\"require\",\"fx\",\"anim\",\"Animated\",\"goog.fx.anim.Animated\",\"prototype\",\"onAnimationFrame\",\"TIMEOUT\",\"async\",\"AnimationDelay\",\"activeAnimations_\",\"animationWindow_\",\"animationDelay_\",\"registerAnimation\",\"goog.fx.anim.registerAnimation\",\"animation\",\"uid\",\"getUid\",\"requestAnimationFrame_\",\"unregisterAnimation\",\"goog.fx.anim.unregisterAnimation\",\"object\",\"isEmpty\",\"cancelAnimationFrame_\",\"tearDown\",\"goog.fx.anim.tearDown\",\"dispose\",\"setAnimationWindow\",\"goog.fx.anim.setAnimationWindow\",\"animationWindow\",\"hasTimer\",\"isActive\",\"goog.fx.anim.requestAnimationFrame_\",\"now\",\"cycleAnimations_\",\"Delay\",\"delay\",\"start\",\"goog.fx.anim.cancelAnimationFrame_\",\"stop\",\"goog.fx.anim.cycleAnimations_\",\"forEach\"]\n}\n"]