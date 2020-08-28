
shadow.cljs.devtools.client.env.module_loaded('app');

try { hackernews_reframe.core.init(); } catch (e) { console.error("An error occurred when calling (hackernews-reframe.core/init)"); throw(e); }