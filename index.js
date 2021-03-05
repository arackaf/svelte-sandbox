import { SvelteElement } from "svelte/internal";

// Temporarily monkey-patch the Svelte root html element (ie for web components)
// so that the unmount callback fires.

// The issue is apparently caused by some subtleties in what disconnected means for web components.
// These subtleties don't apply to us, and so we can just consistently have web components 
// destroyed when removed from the dom.

// Issue is here: https://github.com/sveltejs/svelte/issues/1152
// PR tracking a better solution is here: https://github.com/sveltejs/svelte/pull/4522
// Note that this code MUST be here, and must run BEFORE our web components are defined (ie before require("../uikit-v2/index.js") which is in shared-components-api.js),
// since lifecycle methods are read at definition time, for perf reasons, as explained here: https://twitter.com/justinfagnani/status/1359213920272044034 
// SvelteElement.prototype.disconnectedCallback = function () {
//   this.$destroy();
// };

require("./src/App.svelte");
require("./src/WC2.svelte");
require("./src/WC3.svelte");
require("./src/WC4.svelte");
require("./src/wc-scrollable.svelte");
