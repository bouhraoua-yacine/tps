// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"8TtF2":[function(require,module,exports) {
"use strict";
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "bed887d14d6bcbeb";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, globalThis, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/"); // Web extension context
    var extCtx = typeof chrome === "undefined" ? typeof browser === "undefined" ? null : browser : chrome; // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    } // $FlowFixMe
    ws.onmessage = async function(event) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        acceptedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH); // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear(); // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          🚨 ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>📝 <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", link.getAttribute("href").split("?")[0] + "?" + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension bugfix for Chromium
                    // https://bugs.chromium.org/p/chromium/issues/detail?id=1255412#c12
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3) {
                        if (typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                            extCtx.runtime.reload();
                            return;
                        }
                        asset.url = extCtx.runtime.getURL("/__parcel_hmr_proxy__?url=" + encodeURIComponent(asset.url + "?t=" + Date.now()));
                        return hmrDownload(asset);
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
             // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id1) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id1]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id1][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id1];
        delete bundle.cache[id1]; // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id1);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) return true;
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"gLLPy":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _tinySlider = require("tiny-slider");
// Adress autocomplete *******************************
var _autocompleteJs = require("@tarekraafat/autocomplete.js");
var _autocompleteJsDefault = parcelHelpers.interopDefault(_autocompleteJs);
"use strict";
//Slider **********************************************************
const navMenu = document.getElementById("navbar-default");
const navButton = document.getElementById("nav-button");
navButton.addEventListener("click", ()=>{
    navMenu.classList.toggle("hidden");
});
//Slider **********************************************************
const slider = (0, _tinySlider.tns)({
    container: ".my-slider",
    controls: false,
    items: 1,
    mouseDrag: true,
    slideBy: "page",
    swipeAngle: false,
    speed: 400,
    nav: true,
    navContainer: ".dotes-container",
    autoplay: true,
    autoplayButtonOutput: false,
    autoplayHoverPause: true
});
slider.getInfo();
document.querySelector(".dotes-container").onclick = function() {
    // get slider info
    const info = slider.getInfo(), indexPrev = info.indexCached, indexCurrent = info.index;
    // update style based on index
    info.slideItems[indexPrev].classList.remove("active");
    info.slideItems[indexCurrent].classList.add("active");
};
//Fade in animations*****************************************************************************
const observerOptions = {
    root: null,
    threshold: 0,
    rootMargin: "0px"
};
const fadeObserver = new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
        if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
            fadeObserver.unobserve(entry.target);
        }
    });
}, observerOptions);
window.addEventListener("DOMContentLoaded", (event)=>{
    const fades1 = Array.from(document.getElementsByClassName("fade"));
    for (let fade1 of fades1)fadeObserver.observe(fade1);
});
const fades = Array.from(document.getElementsByClassName("fade"));
for (let fade of fades){
    const fadeups = fade.getElementsByClassName("fade-delay");
    for(let count = 0; count < fadeups.length; count++)fadeups[count].setAttribute("style", "transition-delay: " + count * 0.5 + "s");
    fadeObserver.observe(fade);
}
//History section counter ************************************************
function animate(obj, initVal, lastVal, duration) {
    let startTime = null;
    //get the current timestamp and assign it to the currentTime variable
    let currentTime1 = Date.now();
    //pass the current timestamp to the step function
    const step = (currentTime)=>{
        //if the start time is null, assign the current time to startTime
        if (!startTime) startTime = currentTime;
        //calculate the value to be used in calculating the number to be displayed
        const progress = Math.min((currentTime - startTime) / duration, 1);
        //calculate what to be displayed using the value gotten above
        obj.innerHTML = Math.floor(progress * (lastVal - initVal) + initVal);
        //checking to make sure the counter does not exceed the last value (lastVal)
        if (progress < 1) window.requestAnimationFrame(step);
        else window.cancelAnimationFrame(window.requestAnimationFrame(step));
    };
    //start animating
    window.requestAnimationFrame(step);
}
const text1 = document.getElementById("num-demenage");
const text2 = document.getElementById("num-transp");
const countObserver = new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
        if (entry.isIntersecting) {
            animate(text1, 0, 325, 2000);
            animate(text2, 0, 412, 2000);
            countObserver.unobserve(entry.target);
        }
    });
}, observerOptions);
window.addEventListener("DOMContentLoaded", (event)=>{
    countObserver.observe(text1);
    countObserver.observe(text2);
});
//Main modal handling*******************************************************************
const mainModal = document.getElementById("main-modal");
const overlay = document.getElementById("overlay");
const toggleModal = (modal, overlay1)=>{
    modal.classList.toggle("hidden");
    overlay1.classList.toggle("hidden");
};
const modalTogglers = document.querySelectorAll(".modal-toggle");
modalTogglers.forEach((toggler)=>toggler.addEventListener("click", ()=>{
        toggleModal(mainModal, overlay);
        initModal();
    }));
//Contact modal handling*******************************************************************
const contactModal = document.getElementById("contact-modal");
const contactOverlay = document.getElementById("contact-overlay");
const contactModalTogglers = document.querySelectorAll(".contact-modal-toggle");
contactModalTogglers.forEach((toggler)=>toggler.addEventListener("click", ()=>{
        toggleModal(contactModal, contactOverlay);
        //initialize the contact form
        document.getElementById("contact-modal").querySelector(".success").classList.add("hidden");
        document.getElementById("contact-modal").querySelector(".error").classList.add("hidden");
        document.querySelector(".contact-send-btn-txt").classList.remove("hidden");
        document.querySelector(".contact-lds-ellipsis").style.display = "none";
        document.getElementById("contact-modal").querySelector("form").classList.remove("hidden");
    }));
//Handling landing page form*******************************************************************
const devisBtn = document.getElementById("devis-btn");
devisBtn.addEventListener("click", (e)=>{
    e.preventDefault();
    const startInput = document.getElementById("start-input");
    const endInput = document.getElementById("end-input");
    const startInputModal = document.getElementById("start-input-modal");
    const endInputModal = document.getElementById("end-input-modal");
    toggleModal(mainModal, overlay);
    startInputModal.value = startInput.value;
    endInputModal.value = endInput.value;
});
const config = {
    data: {
        src: async (query)=>{
            try {
                const res = await fetch(`https://api-adresse.data.gouv.fr/search/?q=${query.trim().replace(" ", "+")}&limit=5`);
                const data = await res.json();
                const addressArr = [];
                data.features.forEach((entry)=>addressArr.push(entry.properties.label));
                return addressArr;
            } catch (error) {
                return error;
            }
        },
        cache: false
    },
    searchEngine: "loose",
    resultsList: {
        element: (list, data)=>{
            if (!data.results.length) {
                // Create "No Results" message element
                const message = document.createElement("div");
                // Add class to the created element
                message.setAttribute("class", "no_result");
                // Add message text content
                message.innerHTML = `<span>Aucun Results trouvés pour "${data.query}"</span>`;
                // Append message element to the results list
                list.prepend(message);
            }
        },
        noResults: true
    },
    threshold: 5,
    debounce: 300,
    resultItem: {
        highlight: true
    }
};
const startInputAutoComplete = new (0, _autocompleteJsDefault.default)({
    ...config,
    selector: "#start-input",
    events: {
        input: {
            selection: (event)=>{
                const selection = event.detail.selection.value;
                startInputAutoComplete.input.value = selection;
            }
        }
    }
});
const endInputAutoComplete = new (0, _autocompleteJsDefault.default)({
    ...config,
    selector: "#end-input",
    events: {
        input: {
            selection: (event)=>{
                const selection = event.detail.selection.value;
                endInputAutoComplete.input.value = selection;
            }
        }
    }
});
const startInputAutoCompleteModal = new (0, _autocompleteJsDefault.default)({
    ...config,
    selector: "#start-input-modal",
    events: {
        input: {
            selection: (event)=>{
                const selection = event.detail.selection.value;
                startInputAutoCompleteModal.input.value = selection;
            }
        }
    }
});
const endInputAutoCompleteModal = new (0, _autocompleteJsDefault.default)({
    ...config,
    selector: "#end-input-modal",
    events: {
        input: {
            selection: (event)=>{
                const selection = event.detail.selection.value;
                endInputAutoCompleteModal.input.value = selection;
            }
        }
    }
});
// Form sending (main) *********************************
//cheking validty
const tel = document.getElementById("tel");
const email = document.getElementById("email");
//show error message when invalid
tel.addEventListener("invalid", (e)=>{
    e.preventDefault();
    tel.nextElementSibling?.remove();
    tel.classList.add("ring-red-600", "ring-1");
    tel.insertAdjacentHTML("afterend", `<div class="invalid-err-txt | text-red-600 text-xs -mt-4">
  Doit contenir une série 10 chiffres, sans espaces, commençant par zero.
</div>`);
});
email.addEventListener("invalid", (e)=>{
    e.preventDefault();
    email.nextElementSibling?.remove();
    email.classList.add("ring-red-600", "ring-1");
    email.insertAdjacentHTML("afterend", `<div class="invalid-err-txt | text-red-600 text-xs -mt-4 mb-4">
  Veuillez entrer une adresse email valide.
</div>`);
});
//reinitialize the inputs on focus
email.addEventListener("focus", (e)=>{
    e.preventDefault();
    email.classList.remove("ring-red-600", "ring-1");
    email.nextElementSibling?.remove();
});
tel.addEventListener("focus", (e)=>{
    e.preventDefault();
    tel.classList.remove("ring-red-600", "ring-1");
    tel.nextElementSibling?.remove();
});
// Checking validity on change
email.addEventListener("blur", ()=>{
    email.checkValidity();
});
tel.addEventListener("blur", ()=>{
    tel.checkValidity();
});
//checking form validity before sending
//Click event on send form
document.getElementById("main-modal-btn").addEventListener("click", async (e)=>{
    try {
        e.preventDefault();
        const emailValid = await email.checkValidity();
        const telValid = await tel.checkValidity();
        if (!(emailValid && telValid)) return;
        const inpObj = {};
        Array.from(mainModal.querySelectorAll("input ,select"), (input)=>inpObj[input.name] = input.value);
        showLoader();
        await fetch("https://submit-form.com/L6ISlz89", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: JSON.stringify(inpObj)
        });
        hiddeForm();
        showSuccess();
    } catch (err) {
        console.error(err);
        hiddeForm();
        showErr();
    }
});
function showLoader() {
    document.querySelector(".send-btn-txt").classList.add("hidden");
    document.querySelector(".lds-ellipsis").style.display = "inline-block";
}
function hiddeForm() {
    const modalForm = document.getElementById("main-modal").querySelector("form");
    modalForm.classList.add("hidden");
}
function showSuccess() {
    const success = document.getElementById("main-modal").querySelector(".success");
    success.classList.remove("hidden");
}
function showErr() {
    const error = document.getElementById("main-modal").querySelector(".error");
    error.classList.remove("hidden");
}
// Form sending (contact) *********************************
//cheking validty
const emailContact = document.getElementById("email-contact");
emailContact.addEventListener("invalid", (e)=>{
    e.preventDefault();
    emailContact.nextElementSibling?.remove();
    emailContact.classList.add("ring-red-600", "ring-1");
    emailContact.insertAdjacentHTML("afterend", `<div class="invalid-err-txt | text-red-600 text-xs -mt-4 mb-4">
  Veuillez entrer une adresse email valide.
</div>`);
});
//reinitialize the inputs on focus
emailContact.addEventListener("focus", (e)=>{
    e.preventDefault();
    emailContact.classList.remove("ring-red-600", "ring-1");
    emailContact.nextElementSibling?.remove();
});
// Checking validity on change
emailContact.addEventListener("blur", ()=>{
    emailContact.checkValidity();
});
document.getElementById("contact-modal-btn").addEventListener("click", async (e)=>{
    try {
        e.preventDefault();
        const emailValid = await emailContact.checkValidity();
        if (!emailValid) return;
        const inpObj = {};
        Array.from(contactModal.querySelectorAll("input ,textarea"), (input)=>inpObj[input.name] = input.value);
        //show lodder
        document.querySelector(".contact-send-btn-txt").classList.add("hidden");
        document.querySelector(".contact-lds-ellipsis").style.display = "inline-block";
        await fetch("https://submit-form.com/BHEc4lxD", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: JSON.stringify(inpObj)
        });
        //hidde form
        document.getElementById("contact-modal").querySelector("form").classList.add("hidden");
        //show success message
        document.getElementById("contact-modal").querySelector(".success").classList.remove("hidden");
    } catch (err) {
        console.error(err);
        //hidde form
        document.getElementById("contact-modal").querySelector("form").classList.add("hidden");
        //show error
        document.getElementById("contact-modal").querySelector(".error").classList.remove("hidden");
    }
});
// Initialize modal
document.querySelectorAll(".modal-init").forEach((entry)=>entry.addEventListener("click", (e)=>{
        initModal();
    }));
function initModal() {
    const success = document.getElementById("main-modal").querySelector(".success");
    success.classList.add("hidden");
    const error = document.getElementById("main-modal").querySelector(".error");
    error.classList.add("hidden");
    document.querySelector(".send-btn-txt").classList.remove("hidden");
    document.querySelector(".lds-ellipsis").style.display = "none";
    const modalForm = document.getElementById("main-modal").querySelector("form");
    modalForm.classList.remove("hidden");
}
// Initialize modal contact
document.querySelectorAll(".contact-modal-init").forEach((entry)=>entry.addEventListener("click", (e)=>{
        //initialize the contact form
        document.getElementById("contact-modal").querySelector(".success").classList.add("hidden");
        document.getElementById("contact-modal").querySelector(".error").classList.add("hidden");
        document.querySelector(".contact-send-btn-txt").classList.remove("hidden");
        document.querySelector(".contact-lds-ellipsis").style.display = "none";
        document.getElementById("contact-modal").querySelector("form").classList.remove("hidden");
    }));

},{"tiny-slider":"hw4TK","@tarekraafat/autocomplete.js":"96Ut5","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hw4TK":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
var win$1 = window;
var raf = win$1.requestAnimationFrame || win$1.webkitRequestAnimationFrame || win$1.mozRequestAnimationFrame || win$1.msRequestAnimationFrame || function(cb) {
    return setTimeout(cb, 16);
};
var win = window;
var caf = win.cancelAnimationFrame || win.mozCancelAnimationFrame || function(id) {
    clearTimeout(id);
};
function extend() {
    var obj, name, copy, target = arguments[0] || {}, i = 1, length = arguments.length;
    for(; i < length; i++){
        if ((obj = arguments[i]) !== null) for(name in obj){
            copy = obj[name];
            if (target === copy) continue;
            else if (copy !== undefined) target[name] = copy;
        }
    }
    return target;
}
function checkStorageValue(value) {
    return [
        "true",
        "false"
    ].indexOf(value) >= 0 ? JSON.parse(value) : value;
}
function setLocalStorage(storage, key, value, access) {
    if (access) try {
        storage.setItem(key, value);
    } catch (e) {}
    return value;
}
function getSlideId() {
    var id = window.tnsId;
    window.tnsId = !id ? 1 : id + 1;
    return "tns" + window.tnsId;
}
function getBody() {
    var doc = document, body = doc.body;
    if (!body) {
        body = doc.createElement("body");
        body.fake = true;
    }
    return body;
}
var docElement = document.documentElement;
function setFakeBody(body) {
    var docOverflow = "";
    if (body.fake) {
        docOverflow = docElement.style.overflow; //avoid crashing IE8, if background image is used
        body.style.background = ""; //Safari 5.13/5.1.4 OSX stops loading if ::-webkit-scrollbar is used and scrollbars are visible
        body.style.overflow = docElement.style.overflow = "hidden";
        docElement.appendChild(body);
    }
    return docOverflow;
}
function resetFakeBody(body, docOverflow) {
    if (body.fake) {
        body.remove();
        docElement.style.overflow = docOverflow; // Trigger layout so kinetic scrolling isn't disabled in iOS6+
        // eslint-disable-next-line
        docElement.offsetHeight;
    }
}
// get css-calc 
function calc() {
    var doc = document, body = getBody(), docOverflow = setFakeBody(body), div = doc.createElement("div"), result = false;
    body.appendChild(div);
    try {
        var str = "(10px * 10)", vals = [
            "calc" + str,
            "-moz-calc" + str,
            "-webkit-calc" + str
        ], val;
        for(var i = 0; i < 3; i++){
            val = vals[i];
            div.style.width = val;
            if (div.offsetWidth === 100) {
                result = val.replace(str, "");
                break;
            }
        }
    } catch (e) {}
    body.fake ? resetFakeBody(body, docOverflow) : div.remove();
    return result;
}
// get subpixel support value
function percentageLayout() {
    // check subpixel layout supporting
    var doc = document, body = getBody(), docOverflow = setFakeBody(body), wrapper = doc.createElement("div"), outer = doc.createElement("div"), str = "", count = 70, perPage = 3, supported = false;
    wrapper.className = "tns-t-subp2";
    outer.className = "tns-t-ct";
    for(var i = 0; i < count; i++)str += "<div></div>";
    outer.innerHTML = str;
    wrapper.appendChild(outer);
    body.appendChild(wrapper);
    supported = Math.abs(wrapper.getBoundingClientRect().left - outer.children[count - perPage].getBoundingClientRect().left) < 2;
    body.fake ? resetFakeBody(body, docOverflow) : wrapper.remove();
    return supported;
}
function mediaquerySupport() {
    if (window.matchMedia || window.msMatchMedia) return true;
    var doc = document, body = getBody(), docOverflow = setFakeBody(body), div = doc.createElement("div"), style = doc.createElement("style"), rule = "@media all and (min-width:1px){.tns-mq-test{position:absolute}}", position;
    style.type = "text/css";
    div.className = "tns-mq-test";
    body.appendChild(style);
    body.appendChild(div);
    if (style.styleSheet) style.styleSheet.cssText = rule;
    else style.appendChild(doc.createTextNode(rule));
    position = window.getComputedStyle ? window.getComputedStyle(div).position : div.currentStyle["position"];
    body.fake ? resetFakeBody(body, docOverflow) : div.remove();
    return position === "absolute";
}
// create and append style sheet
function createStyleSheet(media, nonce) {
    // Create the <style> tag
    var style = document.createElement("style"); // style.setAttribute("type", "text/css");
    // Add a media (and/or media query) here if you'd like!
    // style.setAttribute("media", "screen")
    // style.setAttribute("media", "only screen and (max-width : 1024px)")
    if (media) style.setAttribute("media", media);
     // Add nonce attribute for Content Security Policy
    if (nonce) style.setAttribute("nonce", nonce);
     // WebKit hack :(
    // style.appendChild(document.createTextNode(""));
    // Add the <style> element to the page
    document.querySelector("head").appendChild(style);
    return style.sheet ? style.sheet : style.styleSheet;
}
// cross browsers addRule method
function addCSSRule(sheet, selector, rules, index) {
    // return raf(function() {
    "insertRule" in sheet ? sheet.insertRule(selector + "{" + rules + "}", index) : sheet.addRule(selector, rules, index); // });
}
// cross browsers addRule method
function removeCSSRule(sheet, index) {
    // return raf(function() {
    "deleteRule" in sheet ? sheet.deleteRule(index) : sheet.removeRule(index); // });
}
function getCssRulesLength(sheet) {
    var rule = "insertRule" in sheet ? sheet.cssRules : sheet.rules;
    return rule.length;
}
function toDegree(y, x) {
    return Math.atan2(y, x) * (180 / Math.PI);
}
function getTouchDirection(angle, range) {
    var direction = false, gap = Math.abs(90 - Math.abs(angle));
    if (gap >= 90 - range) direction = "horizontal";
    else if (gap <= range) direction = "vertical";
    return direction;
}
// https://toddmotto.com/ditch-the-array-foreach-call-nodelist-hack/
function forEach(arr, callback, scope) {
    for(var i = 0, l = arr.length; i < l; i++)callback.call(scope, arr[i], i);
}
var classListSupport = "classList" in document.createElement("_");
var hasClass = classListSupport ? function(el, str) {
    return el.classList.contains(str);
} : function(el, str) {
    return el.className.indexOf(str) >= 0;
};
var addClass = classListSupport ? function(el, str) {
    if (!hasClass(el, str)) el.classList.add(str);
} : function(el, str) {
    if (!hasClass(el, str)) el.className += " " + str;
};
var removeClass = classListSupport ? function(el, str) {
    if (hasClass(el, str)) el.classList.remove(str);
} : function(el, str) {
    if (hasClass(el, str)) el.className = el.className.replace(str, "");
};
function hasAttr(el, attr) {
    return el.hasAttribute(attr);
}
function getAttr(el, attr) {
    return el.getAttribute(attr);
}
function isNodeList(el) {
    // Only NodeList has the "item()" function
    return typeof el.item !== "undefined";
}
function setAttrs(els, attrs) {
    els = isNodeList(els) || els instanceof Array ? els : [
        els
    ];
    if (Object.prototype.toString.call(attrs) !== "[object Object]") return;
    for(var i = els.length; i--;)for(var key in attrs)els[i].setAttribute(key, attrs[key]);
}
function removeAttrs(els, attrs) {
    els = isNodeList(els) || els instanceof Array ? els : [
        els
    ];
    attrs = attrs instanceof Array ? attrs : [
        attrs
    ];
    var attrLength = attrs.length;
    for(var i = els.length; i--;)for(var j = attrLength; j--;)els[i].removeAttribute(attrs[j]);
}
function arrayFromNodeList(nl) {
    var arr = [];
    for(var i = 0, l = nl.length; i < l; i++)arr.push(nl[i]);
    return arr;
}
function hideElement(el, forceHide) {
    if (el.style.display !== "none") el.style.display = "none";
}
function showElement(el, forceHide) {
    if (el.style.display === "none") el.style.display = "";
}
function isVisible(el) {
    return window.getComputedStyle(el).display !== "none";
}
function whichProperty(props) {
    if (typeof props === "string") {
        var arr = [
            props
        ], Props = props.charAt(0).toUpperCase() + props.substr(1), prefixes = [
            "Webkit",
            "Moz",
            "ms",
            "O"
        ];
        prefixes.forEach(function(prefix) {
            if (prefix !== "ms" || props === "transform") arr.push(prefix + Props);
        });
        props = arr;
    }
    var el = document.createElement("fakeelement");
    props.length;
    for(var i = 0; i < props.length; i++){
        var prop = props[i];
        if (el.style[prop] !== undefined) return prop;
    }
    return false; // explicit for ie9-
}
function has3DTransforms(tf) {
    if (!tf) return false;
    if (!window.getComputedStyle) return false;
    var doc = document, body = getBody(), docOverflow = setFakeBody(body), el = doc.createElement("p"), has3d, cssTF = tf.length > 9 ? "-" + tf.slice(0, -9).toLowerCase() + "-" : "";
    cssTF += "transform"; // Add it to the body to get the computed style
    body.insertBefore(el, null);
    el.style[tf] = "translate3d(1px,1px,1px)";
    has3d = window.getComputedStyle(el).getPropertyValue(cssTF);
    body.fake ? resetFakeBody(body, docOverflow) : el.remove();
    return has3d !== undefined && has3d.length > 0 && has3d !== "none";
}
// get transitionend, animationend based on transitionDuration
// @propin: string
// @propOut: string, first-letter uppercase
// Usage: getEndProperty('WebkitTransitionDuration', 'Transition') => webkitTransitionEnd
function getEndProperty(propIn, propOut) {
    var endProp = false;
    if (/^Webkit/.test(propIn)) endProp = "webkit" + propOut + "End";
    else if (/^O/.test(propIn)) endProp = "o" + propOut + "End";
    else if (propIn) endProp = propOut.toLowerCase() + "end";
    return endProp;
}
// Test via a getter in the options object to see if the passive property is accessed
var supportsPassive = false;
try {
    var opts = Object.defineProperty({}, "passive", {
        get: function() {
            supportsPassive = true;
        }
    });
    window.addEventListener("test", null, opts);
} catch (e) {}
var passiveOption = supportsPassive ? {
    passive: true
} : false;
function addEvents(el, obj, preventScrolling) {
    for(var prop in obj){
        var option = [
            "touchstart",
            "touchmove"
        ].indexOf(prop) >= 0 && !preventScrolling ? passiveOption : false;
        el.addEventListener(prop, obj[prop], option);
    }
}
function removeEvents(el, obj) {
    for(var prop in obj){
        var option = [
            "touchstart",
            "touchmove"
        ].indexOf(prop) >= 0 ? passiveOption : false;
        el.removeEventListener(prop, obj[prop], option);
    }
}
function Events() {
    return {
        topics: {},
        on: function(eventName, fn) {
            this.topics[eventName] = this.topics[eventName] || [];
            this.topics[eventName].push(fn);
        },
        off: function(eventName, fn) {
            if (this.topics[eventName]) {
                for(var i = 0; i < this.topics[eventName].length; i++)if (this.topics[eventName][i] === fn) {
                    this.topics[eventName].splice(i, 1);
                    break;
                }
            }
        },
        emit: function(eventName, data) {
            data.type = eventName;
            if (this.topics[eventName]) this.topics[eventName].forEach(function(fn) {
                fn(data, eventName);
            });
        }
    };
}
function jsTransform(element, attr, prefix, postfix, to, duration, callback) {
    var tick = Math.min(duration, 10), unit = to.indexOf("%") >= 0 ? "%" : "px", to = to.replace(unit, ""), from = Number(element.style[attr].replace(prefix, "").replace(postfix, "").replace(unit, "")), positionTick = (to - from) / duration * tick;
    setTimeout(moveElement, tick);
    function moveElement() {
        duration -= tick;
        from += positionTick;
        element.style[attr] = prefix + from + unit + postfix;
        if (duration > 0) setTimeout(moveElement, tick);
        else callback();
    }
}
// Object.keys
if (!Object.keys) Object.keys = function(object) {
    var keys = [];
    for(var name in object)if (Object.prototype.hasOwnProperty.call(object, name)) keys.push(name);
    return keys;
};
 // ChildNode.remove
if (!("remove" in Element.prototype)) Element.prototype.remove = function() {
    if (this.parentNode) this.parentNode.removeChild(this);
};
var tns = function(options) {
    options = extend({
        container: ".slider",
        mode: "carousel",
        axis: "horizontal",
        items: 1,
        gutter: 0,
        edgePadding: 0,
        fixedWidth: false,
        autoWidth: false,
        viewportMax: false,
        slideBy: 1,
        center: false,
        controls: true,
        controlsPosition: "top",
        controlsText: [
            "prev",
            "next"
        ],
        controlsContainer: false,
        prevButton: false,
        nextButton: false,
        nav: true,
        navPosition: "top",
        navContainer: false,
        navAsThumbnails: false,
        arrowKeys: false,
        speed: 300,
        autoplay: false,
        autoplayPosition: "top",
        autoplayTimeout: 5000,
        autoplayDirection: "forward",
        autoplayText: [
            "start",
            "stop"
        ],
        autoplayHoverPause: false,
        autoplayButton: false,
        autoplayButtonOutput: true,
        autoplayResetOnVisibility: true,
        animateIn: "tns-fadeIn",
        animateOut: "tns-fadeOut",
        animateNormal: "tns-normal",
        animateDelay: false,
        loop: true,
        rewind: false,
        autoHeight: false,
        responsive: false,
        lazyload: false,
        lazyloadSelector: ".tns-lazy-img",
        touch: true,
        mouseDrag: false,
        swipeAngle: 15,
        nested: false,
        preventActionWhenRunning: false,
        preventScrollOnTouch: false,
        freezable: true,
        onInit: false,
        useLocalStorage: true,
        nonce: false
    }, options || {});
    var doc = document, win1 = window, KEYS = {
        ENTER: 13,
        SPACE: 32,
        LEFT: 37,
        RIGHT: 39
    }, tnsStorage = {}, localStorageAccess = options.useLocalStorage;
    if (localStorageAccess) {
        // check browser version and local storage access
        var browserInfo = navigator.userAgent;
        var uid = new Date();
        try {
            tnsStorage = win1.localStorage;
            if (tnsStorage) {
                tnsStorage.setItem(uid, uid);
                localStorageAccess = tnsStorage.getItem(uid) == uid;
                tnsStorage.removeItem(uid);
            } else localStorageAccess = false;
            if (!localStorageAccess) tnsStorage = {};
        } catch (e) {
            localStorageAccess = false;
        }
        if (localStorageAccess) {
            // remove storage when browser version changes
            if (tnsStorage["tnsApp"] && tnsStorage["tnsApp"] !== browserInfo) [
                "tC",
                "tPL",
                "tMQ",
                "tTf",
                "t3D",
                "tTDu",
                "tTDe",
                "tADu",
                "tADe",
                "tTE",
                "tAE"
            ].forEach(function(item) {
                tnsStorage.removeItem(item);
            });
             // update browserInfo
            localStorage["tnsApp"] = browserInfo;
        }
    }
    var CALC = tnsStorage["tC"] ? checkStorageValue(tnsStorage["tC"]) : setLocalStorage(tnsStorage, "tC", calc(), localStorageAccess), PERCENTAGELAYOUT = tnsStorage["tPL"] ? checkStorageValue(tnsStorage["tPL"]) : setLocalStorage(tnsStorage, "tPL", percentageLayout(), localStorageAccess), CSSMQ = tnsStorage["tMQ"] ? checkStorageValue(tnsStorage["tMQ"]) : setLocalStorage(tnsStorage, "tMQ", mediaquerySupport(), localStorageAccess), TRANSFORM = tnsStorage["tTf"] ? checkStorageValue(tnsStorage["tTf"]) : setLocalStorage(tnsStorage, "tTf", whichProperty("transform"), localStorageAccess), HAS3DTRANSFORMS = tnsStorage["t3D"] ? checkStorageValue(tnsStorage["t3D"]) : setLocalStorage(tnsStorage, "t3D", has3DTransforms(TRANSFORM), localStorageAccess), TRANSITIONDURATION = tnsStorage["tTDu"] ? checkStorageValue(tnsStorage["tTDu"]) : setLocalStorage(tnsStorage, "tTDu", whichProperty("transitionDuration"), localStorageAccess), TRANSITIONDELAY = tnsStorage["tTDe"] ? checkStorageValue(tnsStorage["tTDe"]) : setLocalStorage(tnsStorage, "tTDe", whichProperty("transitionDelay"), localStorageAccess), ANIMATIONDURATION = tnsStorage["tADu"] ? checkStorageValue(tnsStorage["tADu"]) : setLocalStorage(tnsStorage, "tADu", whichProperty("animationDuration"), localStorageAccess), ANIMATIONDELAY = tnsStorage["tADe"] ? checkStorageValue(tnsStorage["tADe"]) : setLocalStorage(tnsStorage, "tADe", whichProperty("animationDelay"), localStorageAccess), TRANSITIONEND = tnsStorage["tTE"] ? checkStorageValue(tnsStorage["tTE"]) : setLocalStorage(tnsStorage, "tTE", getEndProperty(TRANSITIONDURATION, "Transition"), localStorageAccess), ANIMATIONEND = tnsStorage["tAE"] ? checkStorageValue(tnsStorage["tAE"]) : setLocalStorage(tnsStorage, "tAE", getEndProperty(ANIMATIONDURATION, "Animation"), localStorageAccess); // get element nodes from selectors
    var supportConsoleWarn = win1.console && typeof win1.console.warn === "function", tnsList = [
        "container",
        "controlsContainer",
        "prevButton",
        "nextButton",
        "navContainer",
        "autoplayButton"
    ], optionsElements = {};
    tnsList.forEach(function(item) {
        if (typeof options[item] === "string") {
            var str = options[item], el = doc.querySelector(str);
            optionsElements[item] = str;
            if (el && el.nodeName) options[item] = el;
            else {
                if (supportConsoleWarn) console.warn("Can't find", options[item]);
                return;
            }
        }
    }); // make sure at least 1 slide
    if (options.container.children.length < 1) {
        if (supportConsoleWarn) console.warn("No slides found in", options.container);
        return;
    } // update options
    var responsive = options.responsive, nested = options.nested, carousel = options.mode === "carousel" ? true : false;
    if (responsive) {
        // apply responsive[0] to options and remove it
        if (0 in responsive) {
            options = extend(options, responsive[0]);
            delete responsive[0];
        }
        var responsiveTem = {};
        for(var key in responsive){
            var val = responsive[key]; // update responsive
            // from: 300: 2
            // to:
            //   300: {
            //     items: 2
            //   }
            val = typeof val === "number" ? {
                items: val
            } : val;
            responsiveTem[key] = val;
        }
        responsive = responsiveTem;
        responsiveTem = null;
    } // update options
    function updateOptions(obj) {
        for(var key in obj){
            if (!carousel) {
                if (key === "slideBy") obj[key] = "page";
                if (key === "edgePadding") obj[key] = false;
                if (key === "autoHeight") obj[key] = false;
            } // update responsive options
            if (key === "responsive") updateOptions(obj[key]);
        }
    }
    if (!carousel) updateOptions(options);
     // === define and set variables ===
    if (!carousel) {
        options.axis = "horizontal";
        options.slideBy = "page";
        options.edgePadding = false;
        var animateIn = options.animateIn, animateOut = options.animateOut, animateDelay = options.animateDelay, animateNormal = options.animateNormal;
    }
    var horizontal = options.axis === "horizontal" ? true : false, outerWrapper = doc.createElement("div"), innerWrapper = doc.createElement("div"), middleWrapper, container = options.container, containerParent = container.parentNode, containerHTML = container.outerHTML, slideItems = container.children, slideCount = slideItems.length, breakpointZone, windowWidth = getWindowWidth(), isOn = false;
    if (responsive) setBreakpointZone();
    if (carousel) container.className += " tns-vpfix";
     // fixedWidth: viewport > rightBoundary > indexMax
    var autoWidth = options.autoWidth, fixedWidth = getOption("fixedWidth"), edgePadding = getOption("edgePadding"), gutter = getOption("gutter"), viewport = getViewportWidth(), center = getOption("center"), items = !autoWidth ? Math.floor(getOption("items")) : 1, slideBy = getOption("slideBy"), viewportMax = options.viewportMax || options.fixedWidthViewportWidth, arrowKeys = getOption("arrowKeys"), speed1 = getOption("speed"), rewind = options.rewind, loop = rewind ? false : options.loop, autoHeight = getOption("autoHeight"), controls = getOption("controls"), controlsText = getOption("controlsText"), nav = getOption("nav"), touch = getOption("touch"), mouseDrag = getOption("mouseDrag"), autoplay = getOption("autoplay"), autoplayTimeout = getOption("autoplayTimeout"), autoplayText = getOption("autoplayText"), autoplayHoverPause = getOption("autoplayHoverPause"), autoplayResetOnVisibility = getOption("autoplayResetOnVisibility"), sheet = createStyleSheet(null, getOption("nonce")), lazyload = options.lazyload, lazyloadSelector = options.lazyloadSelector, slidePositions, // collection of slide positions
    slideItemsOut = [], cloneCount = loop ? getCloneCountForLoop() : 0, slideCountNew = !carousel ? slideCount + cloneCount : slideCount + cloneCount * 2, hasRightDeadZone = (fixedWidth || autoWidth) && !loop ? true : false, rightBoundary = fixedWidth ? getRightBoundary() : null, updateIndexBeforeTransform = !carousel || !loop ? true : false, // transform
    transformAttr = horizontal ? "left" : "top", transformPrefix = "", transformPostfix = "", // index
    getIndexMax = function() {
        if (fixedWidth) return function() {
            return center && !loop ? slideCount - 1 : Math.ceil(-rightBoundary / (fixedWidth + gutter));
        };
        else if (autoWidth) return function() {
            for(var i = 0; i < slideCountNew; i++){
                if (slidePositions[i] >= -rightBoundary) return i;
            }
        };
        else return function() {
            if (center && carousel && !loop) return slideCount - 1;
            else return loop || carousel ? Math.max(0, slideCountNew - Math.ceil(items)) : slideCountNew - 1;
        };
    }(), index1 = getStartIndex(getOption("startIndex")), indexCached = index1;
    getCurrentSlide();
    var indexMin = 0, indexMax = !autoWidth ? getIndexMax() : null, preventActionWhenRunning = options.preventActionWhenRunning, swipeAngle = options.swipeAngle, moveDirectionExpected = swipeAngle ? "?" : true, running = false, onInit = options.onInit, events = new Events(), // id, class
    newContainerClasses = " tns-slider tns-" + options.mode, slideId = container.id || getSlideId(), disable = getOption("disable"), disabled = false, freezable = options.freezable, freeze = freezable && !autoWidth ? getFreeze() : false, frozen = false, controlsEvents = {
        "click": onControlsClick,
        "keydown": onControlsKeydown
    }, navEvents = {
        "click": onNavClick,
        "keydown": onNavKeydown
    }, hoverEvents = {
        "mouseover": mouseoverPause,
        "mouseout": mouseoutRestart
    }, visibilityEvent = {
        "visibilitychange": onVisibilityChange
    }, docmentKeydownEvent = {
        "keydown": onDocumentKeydown
    }, touchEvents = {
        "touchstart": onPanStart,
        "touchmove": onPanMove,
        "touchend": onPanEnd,
        "touchcancel": onPanEnd
    }, dragEvents = {
        "mousedown": onPanStart,
        "mousemove": onPanMove,
        "mouseup": onPanEnd,
        "mouseleave": onPanEnd
    }, hasControls = hasOption("controls"), hasNav = hasOption("nav"), navAsThumbnails = autoWidth ? true : options.navAsThumbnails, hasAutoplay = hasOption("autoplay"), hasTouch = hasOption("touch"), hasMouseDrag = hasOption("mouseDrag"), slideActiveClass = "tns-slide-active", slideClonedClass = "tns-slide-cloned", imgCompleteClass = "tns-complete", imgEvents = {
        "load": onImgLoaded,
        "error": onImgFailed
    }, imgsComplete, liveregionCurrent, preventScroll = options.preventScrollOnTouch === "force" ? true : false; // controls
    if (hasControls) var controlsContainer = options.controlsContainer, controlsContainerHTML = options.controlsContainer ? options.controlsContainer.outerHTML : "", prevButton = options.prevButton, nextButton = options.nextButton, prevButtonHTML = options.prevButton ? options.prevButton.outerHTML : "", nextButtonHTML = options.nextButton ? options.nextButton.outerHTML : "", prevIsButton, nextIsButton;
     // nav
    if (hasNav) var navContainer = options.navContainer, navContainerHTML = options.navContainer ? options.navContainer.outerHTML : "", navItems, pages = autoWidth ? slideCount : getPages(), pagesCached = 0, navClicked = -1, navCurrentIndex = getCurrentNavIndex(), navCurrentIndexCached = navCurrentIndex, navActiveClass = "tns-nav-active", navStr = "Carousel Page ", navStrCurrent = " (Current Slide)";
     // autoplay
    if (hasAutoplay) var autoplayDirection = options.autoplayDirection === "forward" ? 1 : -1, autoplayButton = options.autoplayButton, autoplayButtonHTML = options.autoplayButton ? options.autoplayButton.outerHTML : "", autoplayHtmlStrings = [
        "<span class='tns-visually-hidden'>",
        " animation</span>"
    ], autoplayTimer, animating, autoplayHoverPaused, autoplayUserPaused, autoplayVisibilityPaused;
    if (hasTouch || hasMouseDrag) var initPosition = {}, lastPosition = {}, translateInit, panStart = false, rafIndex, getDist = horizontal ? function(a, b) {
        return a.x - b.x;
    } : function(a, b) {
        return a.y - b.y;
    };
     // disable slider when slidecount <= items
    if (!autoWidth) resetVariblesWhenDisable(disable || freeze);
    if (TRANSFORM) {
        transformAttr = TRANSFORM;
        transformPrefix = "translate";
        if (HAS3DTRANSFORMS) {
            transformPrefix += horizontal ? "3d(" : "3d(0px, ";
            transformPostfix = horizontal ? ", 0px, 0px)" : ", 0px)";
        } else {
            transformPrefix += horizontal ? "X(" : "Y(";
            transformPostfix = ")";
        }
    }
    if (carousel) container.className = container.className.replace("tns-vpfix", "");
    initStructure();
    initSheet();
    initSliderTransform(); // === COMMON FUNCTIONS === //
    function resetVariblesWhenDisable(condition) {
        if (condition) controls = nav = touch = mouseDrag = arrowKeys = autoplay = autoplayHoverPause = autoplayResetOnVisibility = false;
    }
    function getCurrentSlide() {
        var tem = carousel ? index1 - cloneCount : index1;
        while(tem < 0)tem += slideCount;
        return tem % slideCount + 1;
    }
    function getStartIndex(ind) {
        ind = ind ? Math.max(0, Math.min(loop ? slideCount - 1 : slideCount - items, ind)) : 0;
        return carousel ? ind + cloneCount : ind;
    }
    function getAbsIndex(i) {
        if (i == null) i = index1;
        if (carousel) i -= cloneCount;
        while(i < 0)i += slideCount;
        return Math.floor(i % slideCount);
    }
    function getCurrentNavIndex() {
        var absIndex = getAbsIndex(), result;
        result = navAsThumbnails ? absIndex : fixedWidth || autoWidth ? Math.ceil((absIndex + 1) * pages / slideCount - 1) : Math.floor(absIndex / items); // set active nav to the last one when reaches the right edge
        if (!loop && carousel && index1 === indexMax) result = pages - 1;
        return result;
    }
    function getItemsMax() {
        // fixedWidth or autoWidth while viewportMax is not available
        if (autoWidth || fixedWidth && !viewportMax) return slideCount - 1; // most cases
        else {
            var str = fixedWidth ? "fixedWidth" : "items", arr = [];
            if (fixedWidth || options[str] < slideCount) arr.push(options[str]);
            if (responsive) for(var bp in responsive){
                var tem = responsive[bp][str];
                if (tem && (fixedWidth || tem < slideCount)) arr.push(tem);
            }
            if (!arr.length) arr.push(0);
            return Math.ceil(fixedWidth ? viewportMax / Math.min.apply(null, arr) : Math.max.apply(null, arr));
        }
    }
    function getCloneCountForLoop() {
        var itemsMax = getItemsMax(), result = carousel ? Math.ceil((itemsMax * 5 - slideCount) / 2) : itemsMax * 4 - slideCount;
        result = Math.max(itemsMax, result);
        return hasOption("edgePadding") ? result + 1 : result;
    }
    function getWindowWidth() {
        return win1.innerWidth || doc.documentElement.clientWidth || doc.body.clientWidth;
    }
    function getInsertPosition(pos) {
        return pos === "top" ? "afterbegin" : "beforeend";
    }
    function getClientWidth(el) {
        if (el == null) return;
        var div = doc.createElement("div"), rect, width;
        el.appendChild(div);
        rect = div.getBoundingClientRect();
        width = rect.right - rect.left;
        div.remove();
        return width || getClientWidth(el.parentNode);
    }
    function getViewportWidth() {
        var gap = edgePadding ? edgePadding * 2 - gutter : 0;
        return getClientWidth(containerParent) - gap;
    }
    function hasOption(item) {
        if (options[item]) return true;
        else {
            if (responsive) for(var bp in responsive){
                if (responsive[bp][item]) return true;
            }
            return false;
        }
    } // get option:
    // fixed width: viewport, fixedWidth, gutter => items
    // others: window width => all variables
    // all: items => slideBy
    function getOption(item, ww) {
        if (ww == null) ww = windowWidth;
        if (item === "items" && fixedWidth) return Math.floor((viewport + gutter) / (fixedWidth + gutter)) || 1;
        else {
            var result = options[item];
            if (responsive) for(var bp in responsive){
                // bp: convert string to number
                if (ww >= parseInt(bp)) {
                    if (item in responsive[bp]) result = responsive[bp][item];
                }
            }
            if (item === "slideBy" && result === "page") result = getOption("items");
            if (!carousel && (item === "slideBy" || item === "items")) result = Math.floor(result);
            return result;
        }
    }
    function getSlideMarginLeft(i) {
        return CALC ? CALC + "(" + i * 100 + "% / " + slideCountNew + ")" : i * 100 / slideCountNew + "%";
    }
    function getInnerWrapperStyles(edgePaddingTem, gutterTem, fixedWidthTem, speedTem, autoHeightBP) {
        var str = "";
        if (edgePaddingTem !== undefined) {
            var gap = edgePaddingTem;
            if (gutterTem) gap -= gutterTem;
            str = horizontal ? "margin: 0 " + gap + "px 0 " + edgePaddingTem + "px;" : "margin: " + edgePaddingTem + "px 0 " + gap + "px 0;";
        } else if (gutterTem && !fixedWidthTem) {
            var gutterTemUnit = "-" + gutterTem + "px", dir = horizontal ? gutterTemUnit + " 0 0" : "0 " + gutterTemUnit + " 0";
            str = "margin: 0 " + dir + ";";
        }
        if (!carousel && autoHeightBP && TRANSITIONDURATION && speedTem) str += getTransitionDurationStyle(speedTem);
        return str;
    }
    function getContainerWidth(fixedWidthTem, gutterTem, itemsTem) {
        if (fixedWidthTem) return (fixedWidthTem + gutterTem) * slideCountNew + "px";
        else return CALC ? CALC + "(" + slideCountNew * 100 + "% / " + itemsTem + ")" : slideCountNew * 100 / itemsTem + "%";
    }
    function getSlideWidthStyle(fixedWidthTem, gutterTem, itemsTem) {
        var width;
        if (fixedWidthTem) width = fixedWidthTem + gutterTem + "px";
        else {
            if (!carousel) itemsTem = Math.floor(itemsTem);
            var dividend = carousel ? slideCountNew : itemsTem;
            width = CALC ? CALC + "(100% / " + dividend + ")" : 100 / dividend + "%";
        }
        width = "width:" + width; // inner slider: overwrite outer slider styles
        return nested !== "inner" ? width + ";" : width + " !important;";
    }
    function getSlideGutterStyle(gutterTem) {
        var str = ""; // gutter maybe interger || 0
        // so can't use 'if (gutter)'
        if (gutterTem !== false) {
            var prop = horizontal ? "padding-" : "margin-", dir = horizontal ? "right" : "bottom";
            str = prop + dir + ": " + gutterTem + "px;";
        }
        return str;
    }
    function getCSSPrefix(name, num) {
        var prefix = name.substring(0, name.length - num).toLowerCase();
        if (prefix) prefix = "-" + prefix + "-";
        return prefix;
    }
    function getTransitionDurationStyle(speed) {
        return getCSSPrefix(TRANSITIONDURATION, 18) + "transition-duration:" + speed / 1000 + "s;";
    }
    function getAnimationDurationStyle(speed) {
        return getCSSPrefix(ANIMATIONDURATION, 17) + "animation-duration:" + speed / 1000 + "s;";
    }
    function initStructure() {
        var classOuter = "tns-outer", classInner = "tns-inner";
        hasOption("gutter");
        outerWrapper.className = classOuter;
        innerWrapper.className = classInner;
        outerWrapper.id = slideId + "-ow";
        innerWrapper.id = slideId + "-iw"; // set container properties
        if (container.id === "") container.id = slideId;
        newContainerClasses += PERCENTAGELAYOUT || autoWidth ? " tns-subpixel" : " tns-no-subpixel";
        newContainerClasses += CALC ? " tns-calc" : " tns-no-calc";
        if (autoWidth) newContainerClasses += " tns-autowidth";
        newContainerClasses += " tns-" + options.axis;
        container.className += newContainerClasses; // add constrain layer for carousel
        if (carousel) {
            middleWrapper = doc.createElement("div");
            middleWrapper.id = slideId + "-mw";
            middleWrapper.className = "tns-ovh";
            outerWrapper.appendChild(middleWrapper);
            middleWrapper.appendChild(innerWrapper);
        } else outerWrapper.appendChild(innerWrapper);
        if (autoHeight) {
            var wp = middleWrapper ? middleWrapper : innerWrapper;
            wp.className += " tns-ah";
        }
        containerParent.insertBefore(outerWrapper, container);
        innerWrapper.appendChild(container); // add id, class, aria attributes
        // before clone slides
        forEach(slideItems, function(item, i) {
            addClass(item, "tns-item");
            if (!item.id) item.id = slideId + "-item" + i;
            if (!carousel && animateNormal) addClass(item, animateNormal);
            setAttrs(item, {
                "aria-hidden": "true",
                "tabindex": "-1"
            });
        }); // ## clone slides
        // carousel: n + slides + n
        // gallery:      slides + n
        if (cloneCount) {
            var fragmentBefore = doc.createDocumentFragment(), fragmentAfter = doc.createDocumentFragment();
            for(var j = cloneCount; j--;){
                var num = j % slideCount, cloneFirst = slideItems[num].cloneNode(true);
                addClass(cloneFirst, slideClonedClass);
                removeAttrs(cloneFirst, "id");
                fragmentAfter.insertBefore(cloneFirst, fragmentAfter.firstChild);
                if (carousel) {
                    var cloneLast = slideItems[slideCount - 1 - num].cloneNode(true);
                    addClass(cloneLast, slideClonedClass);
                    removeAttrs(cloneLast, "id");
                    fragmentBefore.appendChild(cloneLast);
                }
            }
            container.insertBefore(fragmentBefore, container.firstChild);
            container.appendChild(fragmentAfter);
            slideItems = container.children;
        }
    }
    function initSliderTransform() {
        // ## images loaded/failed
        if (hasOption("autoHeight") || autoWidth || !horizontal) {
            var imgs = container.querySelectorAll("img"); // add img load event listener
            forEach(imgs, function(img) {
                var src = img.src;
                if (!lazyload) {
                    // not data img
                    if (src && src.indexOf("data:image") < 0) {
                        img.src = "";
                        addEvents(img, imgEvents);
                        addClass(img, "loading");
                        img.src = src; // data img
                    } else imgLoaded(img);
                }
            }); // set imgsComplete
            raf(function() {
                imgsLoadedCheck(arrayFromNodeList(imgs), function() {
                    imgsComplete = true;
                });
            }); // reset imgs for auto height: check visible imgs only
            if (hasOption("autoHeight")) imgs = getImageArray(index1, Math.min(index1 + items - 1, slideCountNew - 1));
            lazyload ? initSliderTransformStyleCheck() : raf(function() {
                imgsLoadedCheck(arrayFromNodeList(imgs), initSliderTransformStyleCheck);
            });
        } else {
            // set container transform property
            if (carousel) doContainerTransformSilent();
             // update slider tools and events
            initTools();
            initEvents();
        }
    }
    function initSliderTransformStyleCheck() {
        if (autoWidth && slideCount > 1) {
            // check styles application
            var num = loop ? index1 : slideCount - 1;
            (function stylesApplicationCheck() {
                var left = slideItems[num].getBoundingClientRect().left;
                var right = slideItems[num - 1].getBoundingClientRect().right;
                Math.abs(left - right) <= 1 ? initSliderTransformCore() : setTimeout(function() {
                    stylesApplicationCheck();
                }, 16);
            })();
        } else initSliderTransformCore();
    }
    function initSliderTransformCore() {
        // run Fn()s which are rely on image loading
        if (!horizontal || autoWidth) {
            setSlidePositions();
            if (autoWidth) {
                rightBoundary = getRightBoundary();
                if (freezable) freeze = getFreeze();
                indexMax = getIndexMax(); // <= slidePositions, rightBoundary <=
                resetVariblesWhenDisable(disable || freeze);
            } else updateContentWrapperHeight();
        } // set container transform property
        if (carousel) doContainerTransformSilent();
         // update slider tools and events
        initTools();
        initEvents();
    }
    function initSheet() {
        // gallery:
        // set animation classes and left value for gallery slider
        if (!carousel) for(var i1 = index1, l = index1 + Math.min(slideCount, items); i1 < l; i1++){
            var item = slideItems[i1];
            item.style.left = (i1 - index1) * 100 / items + "%";
            addClass(item, animateIn);
            removeClass(item, animateNormal);
        }
         // #### LAYOUT
        // ## INLINE-BLOCK VS FLOAT
        // ## PercentageLayout:
        // slides: inline-block
        // remove blank space between slides by set font-size: 0
        // ## Non PercentageLayout:
        // slides: float
        //         margin-right: -100%
        //         margin-left: ~
        // Resource: https://docs.google.com/spreadsheets/d/147up245wwTXeQYve3BRSAD4oVcvQmuGsFteJOeA5xNQ/edit?usp=sharing
        if (horizontal) {
            if (PERCENTAGELAYOUT || autoWidth) {
                addCSSRule(sheet, "#" + slideId + " > .tns-item", "font-size:" + win1.getComputedStyle(slideItems[0]).fontSize + ";", getCssRulesLength(sheet));
                addCSSRule(sheet, "#" + slideId, "font-size:0;", getCssRulesLength(sheet));
            } else if (carousel) forEach(slideItems, function(slide, i) {
                slide.style.marginLeft = getSlideMarginLeft(i);
            });
        } // ## BASIC STYLES
        if (CSSMQ) {
            // middle wrapper style
            if (TRANSITIONDURATION) {
                var str = middleWrapper && options.autoHeight ? getTransitionDurationStyle(options.speed) : "";
                addCSSRule(sheet, "#" + slideId + "-mw", str, getCssRulesLength(sheet));
            } // inner wrapper styles
            str = getInnerWrapperStyles(options.edgePadding, options.gutter, options.fixedWidth, options.speed, options.autoHeight);
            addCSSRule(sheet, "#" + slideId + "-iw", str, getCssRulesLength(sheet)); // container styles
            if (carousel) {
                str = horizontal && !autoWidth ? "width:" + getContainerWidth(options.fixedWidth, options.gutter, options.items) + ";" : "";
                if (TRANSITIONDURATION) str += getTransitionDurationStyle(speed1);
                addCSSRule(sheet, "#" + slideId, str, getCssRulesLength(sheet));
            } // slide styles
            str = horizontal && !autoWidth ? getSlideWidthStyle(options.fixedWidth, options.gutter, options.items) : "";
            if (options.gutter) str += getSlideGutterStyle(options.gutter);
             // set gallery items transition-duration
            if (!carousel) {
                if (TRANSITIONDURATION) str += getTransitionDurationStyle(speed1);
                if (ANIMATIONDURATION) str += getAnimationDurationStyle(speed1);
            }
            if (str) addCSSRule(sheet, "#" + slideId + " > .tns-item", str, getCssRulesLength(sheet));
             // non CSS mediaqueries: IE8
        // ## update inner wrapper, container, slides if needed
        // set inline styles for inner wrapper & container
        // insert stylesheet (one line) for slides only (since slides are many)
        } else {
            // middle wrapper styles
            update_carousel_transition_duration(); // inner wrapper styles
            innerWrapper.style.cssText = getInnerWrapperStyles(edgePadding, gutter, fixedWidth, autoHeight); // container styles
            if (carousel && horizontal && !autoWidth) container.style.width = getContainerWidth(fixedWidth, gutter, items);
             // slide styles
            var str = horizontal && !autoWidth ? getSlideWidthStyle(fixedWidth, gutter, items) : "";
            if (gutter) str += getSlideGutterStyle(gutter);
             // append to the last line
            if (str) addCSSRule(sheet, "#" + slideId + " > .tns-item", str, getCssRulesLength(sheet));
        } // ## MEDIAQUERIES
        if (responsive && CSSMQ) for(var bp in responsive){
            // bp: convert string to number
            bp = parseInt(bp);
            var opts = responsive[bp], str = "", middleWrapperStr = "", innerWrapperStr = "", containerStr = "", slideStr = "", itemsBP = !autoWidth ? getOption("items", bp) : null, fixedWidthBP = getOption("fixedWidth", bp), speedBP = getOption("speed", bp), edgePaddingBP = getOption("edgePadding", bp), autoHeightBP = getOption("autoHeight", bp), gutterBP = getOption("gutter", bp); // middle wrapper string
            if (TRANSITIONDURATION && middleWrapper && getOption("autoHeight", bp) && "speed" in opts) middleWrapperStr = "#" + slideId + "-mw{" + getTransitionDurationStyle(speedBP) + "}";
             // inner wrapper string
            if ("edgePadding" in opts || "gutter" in opts) innerWrapperStr = "#" + slideId + "-iw{" + getInnerWrapperStyles(edgePaddingBP, gutterBP, fixedWidthBP, speedBP, autoHeightBP) + "}";
             // container string
            if (carousel && horizontal && !autoWidth && ("fixedWidth" in opts || "items" in opts || fixedWidth && "gutter" in opts)) containerStr = "width:" + getContainerWidth(fixedWidthBP, gutterBP, itemsBP) + ";";
            if (TRANSITIONDURATION && "speed" in opts) containerStr += getTransitionDurationStyle(speedBP);
            if (containerStr) containerStr = "#" + slideId + "{" + containerStr + "}";
             // slide string
            if ("fixedWidth" in opts || fixedWidth && "gutter" in opts || !carousel && "items" in opts) slideStr += getSlideWidthStyle(fixedWidthBP, gutterBP, itemsBP);
            if ("gutter" in opts) slideStr += getSlideGutterStyle(gutterBP);
             // set gallery items transition-duration
            if (!carousel && "speed" in opts) {
                if (TRANSITIONDURATION) slideStr += getTransitionDurationStyle(speedBP);
                if (ANIMATIONDURATION) slideStr += getAnimationDurationStyle(speedBP);
            }
            if (slideStr) slideStr = "#" + slideId + " > .tns-item{" + slideStr + "}";
             // add up
            str = middleWrapperStr + innerWrapperStr + containerStr + slideStr;
            if (str) sheet.insertRule("@media (min-width: " + bp / 16 + "em) {" + str + "}", sheet.cssRules.length);
        }
    }
    function initTools() {
        // == slides ==
        updateSlideStatus(); // == live region ==
        outerWrapper.insertAdjacentHTML("afterbegin", '<div class="tns-liveregion tns-visually-hidden" aria-live="polite" aria-atomic="true">slide <span class="current">' + getLiveRegionStr() + "</span>  of " + slideCount + "</div>");
        liveregionCurrent = outerWrapper.querySelector(".tns-liveregion .current"); // == autoplayInit ==
        if (hasAutoplay) {
            var txt = autoplay ? "stop" : "start";
            if (autoplayButton) setAttrs(autoplayButton, {
                "data-action": txt
            });
            else if (options.autoplayButtonOutput) {
                outerWrapper.insertAdjacentHTML(getInsertPosition(options.autoplayPosition), '<button type="button" data-action="' + txt + '">' + autoplayHtmlStrings[0] + txt + autoplayHtmlStrings[1] + autoplayText[0] + "</button>");
                autoplayButton = outerWrapper.querySelector("[data-action]");
            } // add event
            if (autoplayButton) addEvents(autoplayButton, {
                "click": toggleAutoplay
            });
            if (autoplay) {
                startAutoplay();
                if (autoplayHoverPause) addEvents(container, hoverEvents);
                if (autoplayResetOnVisibility) addEvents(container, visibilityEvent);
            }
        } // == navInit ==
        if (hasNav) {
            // will not hide the navs in case they're thumbnails
            if (navContainer) {
                setAttrs(navContainer, {
                    "aria-label": "Carousel Pagination"
                });
                navItems = navContainer.children;
                forEach(navItems, function(item, i) {
                    setAttrs(item, {
                        "data-nav": i,
                        "tabindex": "-1",
                        "aria-label": navStr + (i + 1),
                        "aria-controls": slideId
                    });
                }); // generated nav
            } else {
                var navHtml = "", hiddenStr = navAsThumbnails ? "" : 'style="display:none"';
                for(var i2 = 0; i2 < slideCount; i2++)// hide nav items by default
                navHtml += '<button type="button" data-nav="' + i2 + '" tabindex="-1" aria-controls="' + slideId + '" ' + hiddenStr + ' aria-label="' + navStr + (i2 + 1) + '"></button>';
                navHtml = '<div class="tns-nav" aria-label="Carousel Pagination">' + navHtml + "</div>";
                outerWrapper.insertAdjacentHTML(getInsertPosition(options.navPosition), navHtml);
                navContainer = outerWrapper.querySelector(".tns-nav");
                navItems = navContainer.children;
            }
            updateNavVisibility(); // add transition
            if (TRANSITIONDURATION) {
                var prefix = TRANSITIONDURATION.substring(0, TRANSITIONDURATION.length - 18).toLowerCase(), str = "transition: all " + speed1 / 1000 + "s";
                if (prefix) str = "-" + prefix + "-" + str;
                addCSSRule(sheet, "[aria-controls^=" + slideId + "-item]", str, getCssRulesLength(sheet));
            }
            setAttrs(navItems[navCurrentIndex], {
                "aria-label": navStr + (navCurrentIndex + 1) + navStrCurrent
            });
            removeAttrs(navItems[navCurrentIndex], "tabindex");
            addClass(navItems[navCurrentIndex], navActiveClass); // add events
            addEvents(navContainer, navEvents);
        } // == controlsInit ==
        if (hasControls) {
            if (!controlsContainer && (!prevButton || !nextButton)) {
                outerWrapper.insertAdjacentHTML(getInsertPosition(options.controlsPosition), '<div class="tns-controls" aria-label="Carousel Navigation" tabindex="0"><button type="button" data-controls="prev" tabindex="-1" aria-controls="' + slideId + '">' + controlsText[0] + '</button><button type="button" data-controls="next" tabindex="-1" aria-controls="' + slideId + '">' + controlsText[1] + "</button></div>");
                controlsContainer = outerWrapper.querySelector(".tns-controls");
            }
            if (!prevButton || !nextButton) {
                prevButton = controlsContainer.children[0];
                nextButton = controlsContainer.children[1];
            }
            if (options.controlsContainer) setAttrs(controlsContainer, {
                "aria-label": "Carousel Navigation",
                "tabindex": "0"
            });
            if (options.controlsContainer || options.prevButton && options.nextButton) setAttrs([
                prevButton,
                nextButton
            ], {
                "aria-controls": slideId,
                "tabindex": "-1"
            });
            if (options.controlsContainer || options.prevButton && options.nextButton) {
                setAttrs(prevButton, {
                    "data-controls": "prev"
                });
                setAttrs(nextButton, {
                    "data-controls": "next"
                });
            }
            prevIsButton = isButton1(prevButton);
            nextIsButton = isButton1(nextButton);
            updateControlsStatus(); // add events
            if (controlsContainer) addEvents(controlsContainer, controlsEvents);
            else {
                addEvents(prevButton, controlsEvents);
                addEvents(nextButton, controlsEvents);
            }
        } // hide tools if needed
        disableUI();
    }
    function initEvents() {
        // add events
        if (carousel && TRANSITIONEND) {
            var eve = {};
            eve[TRANSITIONEND] = onTransitionEnd;
            addEvents(container, eve);
        }
        if (touch) addEvents(container, touchEvents, options.preventScrollOnTouch);
        if (mouseDrag) addEvents(container, dragEvents);
        if (arrowKeys) addEvents(doc, docmentKeydownEvent);
        if (nested === "inner") events.on("outerResized", function() {
            resizeTasks();
            events.emit("innerLoaded", info());
        });
        else if (responsive || fixedWidth || autoWidth || autoHeight || !horizontal) addEvents(win1, {
            "resize": onResize
        });
        if (autoHeight) {
            if (nested === "outer") events.on("innerLoaded", doAutoHeight);
            else if (!disable) doAutoHeight();
        }
        doLazyLoad();
        if (disable) disableSlider();
        else if (freeze) freezeSlider();
        events.on("indexChanged", additionalUpdates);
        if (nested === "inner") events.emit("innerLoaded", info());
        if (typeof onInit === "function") onInit(info());
        isOn = true;
    }
    function destroy() {
        // sheet
        sheet.disabled = true;
        if (sheet.ownerNode) sheet.ownerNode.remove();
         // remove win event listeners
        removeEvents(win1, {
            "resize": onResize
        }); // arrowKeys, controls, nav
        if (arrowKeys) removeEvents(doc, docmentKeydownEvent);
        if (controlsContainer) removeEvents(controlsContainer, controlsEvents);
        if (navContainer) removeEvents(navContainer, navEvents);
         // autoplay
        removeEvents(container, hoverEvents);
        removeEvents(container, visibilityEvent);
        if (autoplayButton) removeEvents(autoplayButton, {
            "click": toggleAutoplay
        });
        if (autoplay) clearInterval(autoplayTimer);
         // container
        if (carousel && TRANSITIONEND) {
            var eve = {};
            eve[TRANSITIONEND] = onTransitionEnd;
            removeEvents(container, eve);
        }
        if (touch) removeEvents(container, touchEvents);
        if (mouseDrag) removeEvents(container, dragEvents);
         // cache Object values in options && reset HTML
        var htmlList = [
            containerHTML,
            controlsContainerHTML,
            prevButtonHTML,
            nextButtonHTML,
            navContainerHTML,
            autoplayButtonHTML
        ];
        tnsList.forEach(function(item, i) {
            var el = item === "container" ? outerWrapper : options[item];
            if (typeof el === "object" && el) {
                var prevEl = el.previousElementSibling ? el.previousElementSibling : false, parentEl = el.parentNode;
                el.outerHTML = htmlList[i];
                options[item] = prevEl ? prevEl.nextElementSibling : parentEl.firstElementChild;
            }
        }); // reset variables
        tnsList = animateIn = animateOut = animateDelay = animateNormal = horizontal = outerWrapper = innerWrapper = container = containerParent = containerHTML = slideItems = slideCount = breakpointZone = windowWidth = autoWidth = fixedWidth = edgePadding = gutter = viewport = items = slideBy = viewportMax = arrowKeys = speed1 = rewind = loop = autoHeight = sheet = lazyload = slidePositions = slideItemsOut = cloneCount = slideCountNew = hasRightDeadZone = rightBoundary = updateIndexBeforeTransform = transformAttr = transformPrefix = transformPostfix = getIndexMax = index1 = indexCached = indexMin = indexMax = swipeAngle = moveDirectionExpected = running = onInit = events = newContainerClasses = slideId = disable = disabled = freezable = freeze = frozen = controlsEvents = navEvents = hoverEvents = visibilityEvent = docmentKeydownEvent = touchEvents = dragEvents = hasControls = hasNav = navAsThumbnails = hasAutoplay = hasTouch = hasMouseDrag = slideActiveClass = imgCompleteClass = imgEvents = imgsComplete = controls = controlsText = controlsContainer = controlsContainerHTML = prevButton = nextButton = prevIsButton = nextIsButton = nav = navContainer = navContainerHTML = navItems = pages = pagesCached = navClicked = navCurrentIndex = navCurrentIndexCached = navActiveClass = navStr = navStrCurrent = autoplay = autoplayTimeout = autoplayDirection = autoplayText = autoplayHoverPause = autoplayButton = autoplayButtonHTML = autoplayResetOnVisibility = autoplayHtmlStrings = autoplayTimer = animating = autoplayHoverPaused = autoplayUserPaused = autoplayVisibilityPaused = initPosition = lastPosition = translateInit = panStart = rafIndex = getDist = touch = mouseDrag = null; // check variables
        // [animateIn, animateOut, animateDelay, animateNormal, horizontal, outerWrapper, innerWrapper, container, containerParent, containerHTML, slideItems, slideCount, breakpointZone, windowWidth, autoWidth, fixedWidth, edgePadding, gutter, viewport, items, slideBy, viewportMax, arrowKeys, speed, rewind, loop, autoHeight, sheet, lazyload, slidePositions, slideItemsOut, cloneCount, slideCountNew, hasRightDeadZone, rightBoundary, updateIndexBeforeTransform, transformAttr, transformPrefix, transformPostfix, getIndexMax, index, indexCached, indexMin, indexMax, resizeTimer, swipeAngle, moveDirectionExpected, running, onInit, events, newContainerClasses, slideId, disable, disabled, freezable, freeze, frozen, controlsEvents, navEvents, hoverEvents, visibilityEvent, docmentKeydownEvent, touchEvents, dragEvents, hasControls, hasNav, navAsThumbnails, hasAutoplay, hasTouch, hasMouseDrag, slideActiveClass, imgCompleteClass, imgEvents, imgsComplete, controls, controlsText, controlsContainer, controlsContainerHTML, prevButton, nextButton, prevIsButton, nextIsButton, nav, navContainer, navContainerHTML, navItems, pages, pagesCached, navClicked, navCurrentIndex, navCurrentIndexCached, navActiveClass, navStr, navStrCurrent, autoplay, autoplayTimeout, autoplayDirection, autoplayText, autoplayHoverPause, autoplayButton, autoplayButtonHTML, autoplayResetOnVisibility, autoplayHtmlStrings, autoplayTimer, animating, autoplayHoverPaused, autoplayUserPaused, autoplayVisibilityPaused, initPosition, lastPosition, translateInit, disX, disY, panStart, rafIndex, getDist, touch, mouseDrag ].forEach(function(item) { if (item !== null) { console.log(item); } });
        for(var a in this)if (a !== "rebuild") this[a] = null;
        isOn = false;
    } // === ON RESIZE ===
    // responsive || fixedWidth || autoWidth || !horizontal
    function onResize(e1) {
        raf(function() {
            resizeTasks(getEvent(e1));
        });
    }
    function resizeTasks(e2) {
        if (!isOn) return;
        if (nested === "outer") events.emit("outerResized", info(e2));
        windowWidth = getWindowWidth();
        var bpChanged, breakpointZoneTem = breakpointZone, needContainerTransform = false;
        if (responsive) {
            setBreakpointZone();
            bpChanged = breakpointZoneTem !== breakpointZone; // if (hasRightDeadZone) { needContainerTransform = true; } // *?
            if (bpChanged) events.emit("newBreakpointStart", info(e2));
        }
        var indChanged, itemsChanged, itemsTem = items, disableTem = disable, freezeTem = freeze, arrowKeysTem = arrowKeys, controlsTem = controls, navTem = nav, touchTem = touch, mouseDragTem = mouseDrag, autoplayTem = autoplay, autoplayHoverPauseTem = autoplayHoverPause, autoplayResetOnVisibilityTem = autoplayResetOnVisibility, indexTem = index1;
        if (bpChanged) {
            var fixedWidthTem = fixedWidth, autoHeightTem = autoHeight, controlsTextTem = controlsText, centerTem = center, autoplayTextTem = autoplayText;
            if (!CSSMQ) var gutterTem = gutter, edgePaddingTem = edgePadding;
        } // get option:
        // fixed width: viewport, fixedWidth, gutter => items
        // others: window width => all variables
        // all: items => slideBy
        arrowKeys = getOption("arrowKeys");
        controls = getOption("controls");
        nav = getOption("nav");
        touch = getOption("touch");
        center = getOption("center");
        mouseDrag = getOption("mouseDrag");
        autoplay = getOption("autoplay");
        autoplayHoverPause = getOption("autoplayHoverPause");
        autoplayResetOnVisibility = getOption("autoplayResetOnVisibility");
        if (bpChanged) {
            disable = getOption("disable");
            fixedWidth = getOption("fixedWidth");
            speed1 = getOption("speed");
            autoHeight = getOption("autoHeight");
            controlsText = getOption("controlsText");
            autoplayText = getOption("autoplayText");
            autoplayTimeout = getOption("autoplayTimeout");
            if (!CSSMQ) {
                edgePadding = getOption("edgePadding");
                gutter = getOption("gutter");
            }
        } // update options
        resetVariblesWhenDisable(disable);
        viewport = getViewportWidth(); // <= edgePadding, gutter
        if ((!horizontal || autoWidth) && !disable) {
            setSlidePositions();
            if (!horizontal) {
                updateContentWrapperHeight(); // <= setSlidePositions
                needContainerTransform = true;
            }
        }
        if (fixedWidth || autoWidth) {
            rightBoundary = getRightBoundary(); // autoWidth: <= viewport, slidePositions, gutter
            // fixedWidth: <= viewport, fixedWidth, gutter
            indexMax = getIndexMax(); // autoWidth: <= rightBoundary, slidePositions
        // fixedWidth: <= rightBoundary, fixedWidth, gutter
        }
        if (bpChanged || fixedWidth) {
            items = getOption("items");
            slideBy = getOption("slideBy");
            itemsChanged = items !== itemsTem;
            if (itemsChanged) {
                if (!fixedWidth && !autoWidth) indexMax = getIndexMax();
                 // <= items
                // check index before transform in case
                // slider reach the right edge then items become bigger
                updateIndex();
            }
        }
        if (bpChanged) {
            if (disable !== disableTem) {
                if (disable) disableSlider();
                else enableSlider(); // <= slidePositions, rightBoundary, indexMax
            }
        }
        if (freezable && (bpChanged || fixedWidth || autoWidth)) {
            freeze = getFreeze(); // <= autoWidth: slidePositions, gutter, viewport, rightBoundary
            // <= fixedWidth: fixedWidth, gutter, rightBoundary
            // <= others: items
            if (freeze !== freezeTem) {
                if (freeze) {
                    doContainerTransform(getContainerTransformValue(getStartIndex(0)));
                    freezeSlider();
                } else {
                    unfreezeSlider();
                    needContainerTransform = true;
                }
            }
        }
        resetVariblesWhenDisable(disable || freeze); // controls, nav, touch, mouseDrag, arrowKeys, autoplay, autoplayHoverPause, autoplayResetOnVisibility
        if (!autoplay) autoplayHoverPause = autoplayResetOnVisibility = false;
        if (arrowKeys !== arrowKeysTem) arrowKeys ? addEvents(doc, docmentKeydownEvent) : removeEvents(doc, docmentKeydownEvent);
        if (controls !== controlsTem) {
            if (controls) {
                if (controlsContainer) showElement(controlsContainer);
                else {
                    if (prevButton) showElement(prevButton);
                    if (nextButton) showElement(nextButton);
                }
            } else if (controlsContainer) hideElement(controlsContainer);
            else {
                if (prevButton) hideElement(prevButton);
                if (nextButton) hideElement(nextButton);
            }
        }
        if (nav !== navTem) {
            if (nav) {
                showElement(navContainer);
                updateNavVisibility();
            } else hideElement(navContainer);
        }
        if (touch !== touchTem) touch ? addEvents(container, touchEvents, options.preventScrollOnTouch) : removeEvents(container, touchEvents);
        if (mouseDrag !== mouseDragTem) mouseDrag ? addEvents(container, dragEvents) : removeEvents(container, dragEvents);
        if (autoplay !== autoplayTem) {
            if (autoplay) {
                if (autoplayButton) showElement(autoplayButton);
                if (!animating && !autoplayUserPaused) startAutoplay();
            } else {
                if (autoplayButton) hideElement(autoplayButton);
                if (animating) stopAutoplay();
            }
        }
        if (autoplayHoverPause !== autoplayHoverPauseTem) autoplayHoverPause ? addEvents(container, hoverEvents) : removeEvents(container, hoverEvents);
        if (autoplayResetOnVisibility !== autoplayResetOnVisibilityTem) autoplayResetOnVisibility ? addEvents(doc, visibilityEvent) : removeEvents(doc, visibilityEvent);
        if (bpChanged) {
            if (fixedWidth !== fixedWidthTem || center !== centerTem) needContainerTransform = true;
            if (autoHeight !== autoHeightTem) {
                if (!autoHeight) innerWrapper.style.height = "";
            }
            if (controls && controlsText !== controlsTextTem) {
                prevButton.innerHTML = controlsText[0];
                nextButton.innerHTML = controlsText[1];
            }
            if (autoplayButton && autoplayText !== autoplayTextTem) {
                var i = autoplay ? 1 : 0, html = autoplayButton.innerHTML, len = html.length - autoplayTextTem[i].length;
                if (html.substring(len) === autoplayTextTem[i]) autoplayButton.innerHTML = html.substring(0, len) + autoplayText[i];
            }
        } else if (center && (fixedWidth || autoWidth)) needContainerTransform = true;
        if (itemsChanged || fixedWidth && !autoWidth) {
            pages = getPages();
            updateNavVisibility();
        }
        indChanged = index1 !== indexTem;
        if (indChanged) {
            events.emit("indexChanged", info());
            needContainerTransform = true;
        } else if (itemsChanged) {
            if (!indChanged) additionalUpdates();
        } else if (fixedWidth || autoWidth) {
            doLazyLoad();
            updateSlideStatus();
            updateLiveRegion();
        }
        if (itemsChanged && !carousel) updateGallerySlidePositions();
        if (!disable && !freeze) {
            // non-mediaqueries: IE8
            if (bpChanged && !CSSMQ) {
                // middle wrapper styles
                // inner wrapper styles
                if (edgePadding !== edgePaddingTem || gutter !== gutterTem) innerWrapper.style.cssText = getInnerWrapperStyles(edgePadding, gutter, fixedWidth, speed1, autoHeight);
                if (horizontal) {
                    // container styles
                    if (carousel) container.style.width = getContainerWidth(fixedWidth, gutter, items);
                     // slide styles
                    var str = getSlideWidthStyle(fixedWidth, gutter, items) + getSlideGutterStyle(gutter); // remove the last line and
                    // add new styles
                    removeCSSRule(sheet, getCssRulesLength(sheet) - 1);
                    addCSSRule(sheet, "#" + slideId + " > .tns-item", str, getCssRulesLength(sheet));
                }
            } // auto height
            if (autoHeight) doAutoHeight();
            if (needContainerTransform) {
                doContainerTransformSilent();
                indexCached = index1;
            }
        }
        if (bpChanged) events.emit("newBreakpointEnd", info(e2));
    } // === INITIALIZATION FUNCTIONS === //
    function getFreeze() {
        if (!fixedWidth && !autoWidth) {
            var a = center ? items - (items - 1) / 2 : items;
            return slideCount <= a;
        }
        var width = fixedWidth ? (fixedWidth + gutter) * slideCount : slidePositions[slideCount], vp = edgePadding ? viewport + edgePadding * 2 : viewport + gutter;
        if (center) vp -= fixedWidth ? (viewport - fixedWidth) / 2 : (viewport - (slidePositions[index1 + 1] - slidePositions[index1] - gutter)) / 2;
        return width <= vp;
    }
    function setBreakpointZone() {
        breakpointZone = 0;
        for(var bp in responsive){
            bp = parseInt(bp); // convert string to number
            if (windowWidth >= bp) breakpointZone = bp;
        }
    } // (slideBy, indexMin, indexMax) => index
    var updateIndex = function() {
        return loop ? carousel ? function() {
            var leftEdge = indexMin, rightEdge = indexMax;
            leftEdge += slideBy;
            rightEdge -= slideBy; // adjust edges when has edge paddings
            // or fixed-width slider with extra space on the right side
            if (edgePadding) {
                leftEdge += 1;
                rightEdge -= 1;
            } else if (fixedWidth) {
                if ((viewport + gutter) % (fixedWidth + gutter)) rightEdge -= 1;
            }
            if (cloneCount) {
                if (index1 > rightEdge) index1 -= slideCount;
                else if (index1 < leftEdge) index1 += slideCount;
            }
        } : function() {
            if (index1 > indexMax) while(index1 >= indexMin + slideCount)index1 -= slideCount;
            else if (index1 < indexMin) while(index1 <= indexMax - slideCount)index1 += slideCount;
        } : function() {
            index1 = Math.max(indexMin, Math.min(indexMax, index1));
        };
    }();
    function disableUI() {
        if (!autoplay && autoplayButton) hideElement(autoplayButton);
        if (!nav && navContainer) hideElement(navContainer);
        if (!controls) {
            if (controlsContainer) hideElement(controlsContainer);
            else {
                if (prevButton) hideElement(prevButton);
                if (nextButton) hideElement(nextButton);
            }
        }
    }
    function enableUI() {
        if (autoplay && autoplayButton) showElement(autoplayButton);
        if (nav && navContainer) showElement(navContainer);
        if (controls) {
            if (controlsContainer) showElement(controlsContainer);
            else {
                if (prevButton) showElement(prevButton);
                if (nextButton) showElement(nextButton);
            }
        }
    }
    function freezeSlider() {
        if (frozen) return;
         // remove edge padding from inner wrapper
        if (edgePadding) innerWrapper.style.margin = "0px";
         // add class tns-transparent to cloned slides
        if (cloneCount) {
            var str = "tns-transparent";
            for(var i = cloneCount; i--;){
                if (carousel) addClass(slideItems[i], str);
                addClass(slideItems[slideCountNew - i - 1], str);
            }
        } // update tools
        disableUI();
        frozen = true;
    }
    function unfreezeSlider() {
        if (!frozen) return;
         // restore edge padding for inner wrapper
        // for mordern browsers
        if (edgePadding && CSSMQ) innerWrapper.style.margin = "";
         // remove class tns-transparent to cloned slides
        if (cloneCount) {
            var str = "tns-transparent";
            for(var i = cloneCount; i--;){
                if (carousel) removeClass(slideItems[i], str);
                removeClass(slideItems[slideCountNew - i - 1], str);
            }
        } // update tools
        enableUI();
        frozen = false;
    }
    function disableSlider() {
        if (disabled) return;
        sheet.disabled = true;
        container.className = container.className.replace(newContainerClasses.substring(1), "");
        removeAttrs(container, [
            "style"
        ]);
        if (loop) for(var j = cloneCount; j--;){
            if (carousel) hideElement(slideItems[j]);
            hideElement(slideItems[slideCountNew - j - 1]);
        }
         // vertical slider
        if (!horizontal || !carousel) removeAttrs(innerWrapper, [
            "style"
        ]);
         // gallery
        if (!carousel) for(var i = index1, l = index1 + slideCount; i < l; i++){
            var item = slideItems[i];
            removeAttrs(item, [
                "style"
            ]);
            removeClass(item, animateIn);
            removeClass(item, animateNormal);
        }
         // update tools
        disableUI();
        disabled = true;
    }
    function enableSlider() {
        if (!disabled) return;
        sheet.disabled = false;
        container.className += newContainerClasses;
        doContainerTransformSilent();
        if (loop) for(var j = cloneCount; j--;){
            if (carousel) showElement(slideItems[j]);
            showElement(slideItems[slideCountNew - j - 1]);
        }
         // gallery
        if (!carousel) for(var i = index1, l = index1 + slideCount; i < l; i++){
            var item = slideItems[i], classN = i < index1 + items ? animateIn : animateNormal;
            item.style.left = (i - index1) * 100 / items + "%";
            addClass(item, classN);
        }
         // update tools
        enableUI();
        disabled = false;
    }
    function updateLiveRegion() {
        var str = getLiveRegionStr();
        if (liveregionCurrent.innerHTML !== str) liveregionCurrent.innerHTML = str;
    }
    function getLiveRegionStr() {
        var arr = getVisibleSlideRange(), start = arr[0] + 1, end = arr[1] + 1;
        return start === end ? start + "" : start + " to " + end;
    }
    function getVisibleSlideRange(val) {
        if (val == null) val = getContainerTransformValue();
        var start = index1, end, rangestart, rangeend; // get range start, range end for autoWidth and fixedWidth
        if (center || edgePadding) {
            if (autoWidth || fixedWidth) {
                rangestart = -(parseFloat(val) + edgePadding);
                rangeend = rangestart + viewport + edgePadding * 2;
            }
        } else if (autoWidth) {
            rangestart = slidePositions[index1];
            rangeend = rangestart + viewport;
        }
         // get start, end
        // - check auto width
        if (autoWidth) slidePositions.forEach(function(point, i) {
            if (i < slideCountNew) {
                if ((center || edgePadding) && point <= rangestart + 0.5) start = i;
                if (rangeend - point >= 0.5) end = i;
            }
        }); // - check percentage width, fixed width
        else {
            if (fixedWidth) {
                var cell = fixedWidth + gutter;
                if (center || edgePadding) {
                    start = Math.floor(rangestart / cell);
                    end = Math.ceil(rangeend / cell - 1);
                } else end = start + Math.ceil(viewport / cell) - 1;
            } else if (center || edgePadding) {
                var a = items - 1;
                if (center) {
                    start -= a / 2;
                    end = index1 + a / 2;
                } else end = index1 + a;
                if (edgePadding) {
                    var b = edgePadding * items / viewport;
                    start -= b;
                    end += b;
                }
                start = Math.floor(start);
                end = Math.ceil(end);
            } else end = start + items - 1;
            start = Math.max(start, 0);
            end = Math.min(end, slideCountNew - 1);
        }
        return [
            start,
            end
        ];
    }
    function doLazyLoad() {
        if (lazyload && !disable) {
            var arg = getVisibleSlideRange();
            arg.push(lazyloadSelector);
            getImageArray.apply(null, arg).forEach(function(img) {
                if (!hasClass(img, imgCompleteClass)) {
                    // stop propagation transitionend event to container
                    var eve = {};
                    eve[TRANSITIONEND] = function(e3) {
                        e3.stopPropagation();
                    };
                    addEvents(img, eve);
                    addEvents(img, imgEvents); // update src
                    img.src = getAttr(img, "data-src"); // update srcset
                    var srcset = getAttr(img, "data-srcset");
                    if (srcset) img.srcset = srcset;
                    addClass(img, "loading");
                }
            });
        }
    }
    function onImgLoaded(e4) {
        imgLoaded(getTarget(e4));
    }
    function onImgFailed(e5) {
        imgFailed(getTarget(e5));
    }
    function imgLoaded(img) {
        addClass(img, "loaded");
        imgCompleted(img);
    }
    function imgFailed(img) {
        addClass(img, "failed");
        imgCompleted(img);
    }
    function imgCompleted(img) {
        addClass(img, imgCompleteClass);
        removeClass(img, "loading");
        removeEvents(img, imgEvents);
    }
    function getImageArray(start, end, imgSelector) {
        var imgs = [];
        if (!imgSelector) imgSelector = "img";
        while(start <= end){
            forEach(slideItems[start].querySelectorAll(imgSelector), function(img) {
                imgs.push(img);
            });
            start++;
        }
        return imgs;
    } // check if all visible images are loaded
    // and update container height if it's done
    function doAutoHeight() {
        var imgs = getImageArray.apply(null, getVisibleSlideRange());
        raf(function() {
            imgsLoadedCheck(imgs, updateInnerWrapperHeight);
        });
    }
    function imgsLoadedCheck(imgs, cb) {
        // execute callback function if all images are complete
        if (imgsComplete) return cb();
         // check image classes
        imgs.forEach(function(img, index) {
            if (!lazyload && img.complete) imgCompleted(img);
             // Check image.complete
            if (hasClass(img, imgCompleteClass)) imgs.splice(index, 1);
        }); // execute callback function if selected images are all complete
        if (!imgs.length) return cb();
         // otherwise execute this functiona again
        raf(function() {
            imgsLoadedCheck(imgs, cb);
        });
    }
    function additionalUpdates() {
        doLazyLoad();
        updateSlideStatus();
        updateLiveRegion();
        updateControlsStatus();
        updateNavStatus();
    }
    function update_carousel_transition_duration() {
        if (carousel && autoHeight) middleWrapper.style[TRANSITIONDURATION] = speed1 / 1000 + "s";
    }
    function getMaxSlideHeight(slideStart, slideRange) {
        var heights = [];
        for(var i = slideStart, l = Math.min(slideStart + slideRange, slideCountNew); i < l; i++)heights.push(slideItems[i].offsetHeight);
        return Math.max.apply(null, heights);
    } // update inner wrapper height
    // 1. get the max-height of the visible slides
    // 2. set transitionDuration to speed
    // 3. update inner wrapper height to max-height
    // 4. set transitionDuration to 0s after transition done
    function updateInnerWrapperHeight() {
        var maxHeight = autoHeight ? getMaxSlideHeight(index1, items) : getMaxSlideHeight(cloneCount, slideCount), wp = middleWrapper ? middleWrapper : innerWrapper;
        if (wp.style.height !== maxHeight) wp.style.height = maxHeight + "px";
    } // get the distance from the top edge of the first slide to each slide
    // (init) => slidePositions
    function setSlidePositions() {
        slidePositions = [
            0
        ];
        var attr = horizontal ? "left" : "top", attr2 = horizontal ? "right" : "bottom", base = slideItems[0].getBoundingClientRect()[attr];
        forEach(slideItems, function(item, i) {
            // skip the first slide
            if (i) slidePositions.push(item.getBoundingClientRect()[attr] - base);
             // add the end edge
            if (i === slideCountNew - 1) slidePositions.push(item.getBoundingClientRect()[attr2] - base);
        });
    } // update slide
    function updateSlideStatus() {
        var range = getVisibleSlideRange(), start = range[0], end = range[1];
        forEach(slideItems, function(item, i) {
            // show slides
            if (i >= start && i <= end) {
                if (hasAttr(item, "aria-hidden")) {
                    removeAttrs(item, [
                        "aria-hidden",
                        "tabindex"
                    ]);
                    addClass(item, slideActiveClass);
                } // hide slides
            } else if (!hasAttr(item, "aria-hidden")) {
                setAttrs(item, {
                    "aria-hidden": "true",
                    "tabindex": "-1"
                });
                removeClass(item, slideActiveClass);
            }
        });
    } // gallery: update slide position
    function updateGallerySlidePositions() {
        var l = index1 + Math.min(slideCount, items);
        for(var i = slideCountNew; i--;){
            var item = slideItems[i];
            if (i >= index1 && i < l) {
                // add transitions to visible slides when adjusting their positions
                addClass(item, "tns-moving");
                item.style.left = (i - index1) * 100 / items + "%";
                addClass(item, animateIn);
                removeClass(item, animateNormal);
            } else if (item.style.left) {
                item.style.left = "";
                addClass(item, animateNormal);
                removeClass(item, animateIn);
            } // remove outlet animation
            removeClass(item, animateOut);
        } // removing '.tns-moving'
        setTimeout(function() {
            forEach(slideItems, function(el) {
                removeClass(el, "tns-moving");
            });
        }, 300);
    } // set tabindex on Nav
    function updateNavStatus() {
        // get current nav
        if (nav) {
            navCurrentIndex = navClicked >= 0 ? navClicked : getCurrentNavIndex();
            navClicked = -1;
            if (navCurrentIndex !== navCurrentIndexCached) {
                var navPrev = navItems[navCurrentIndexCached], navCurrent = navItems[navCurrentIndex];
                setAttrs(navPrev, {
                    "tabindex": "-1",
                    "aria-label": navStr + (navCurrentIndexCached + 1)
                });
                removeClass(navPrev, navActiveClass);
                setAttrs(navCurrent, {
                    "aria-label": navStr + (navCurrentIndex + 1) + navStrCurrent
                });
                removeAttrs(navCurrent, "tabindex");
                addClass(navCurrent, navActiveClass);
                navCurrentIndexCached = navCurrentIndex;
            }
        }
    }
    function getLowerCaseNodeName(el) {
        return el.nodeName.toLowerCase();
    }
    function isButton1(el) {
        return getLowerCaseNodeName(el) === "button";
    }
    function isAriaDisabled(el) {
        return el.getAttribute("aria-disabled") === "true";
    }
    function disEnableElement(isButton, el, val) {
        if (isButton) el.disabled = val;
        else el.setAttribute("aria-disabled", val.toString());
    } // set 'disabled' to true on controls when reach the edges
    function updateControlsStatus() {
        if (!controls || rewind || loop) return;
        var prevDisabled = prevIsButton ? prevButton.disabled : isAriaDisabled(prevButton), nextDisabled = nextIsButton ? nextButton.disabled : isAriaDisabled(nextButton), disablePrev = index1 <= indexMin ? true : false, disableNext = !rewind && index1 >= indexMax ? true : false;
        if (disablePrev && !prevDisabled) disEnableElement(prevIsButton, prevButton, true);
        if (!disablePrev && prevDisabled) disEnableElement(prevIsButton, prevButton, false);
        if (disableNext && !nextDisabled) disEnableElement(nextIsButton, nextButton, true);
        if (!disableNext && nextDisabled) disEnableElement(nextIsButton, nextButton, false);
    } // set duration
    function resetDuration(el, str) {
        if (TRANSITIONDURATION) el.style[TRANSITIONDURATION] = str;
    }
    function getSliderWidth() {
        return fixedWidth ? (fixedWidth + gutter) * slideCountNew : slidePositions[slideCountNew];
    }
    function getCenterGap(num) {
        if (num == null) num = index1;
        var gap = edgePadding ? gutter : 0;
        return autoWidth ? (viewport - gap - (slidePositions[num + 1] - slidePositions[num] - gutter)) / 2 : fixedWidth ? (viewport - fixedWidth) / 2 : (items - 1) / 2;
    }
    function getRightBoundary() {
        var gap = edgePadding ? gutter : 0, result = viewport + gap - getSliderWidth();
        if (center && !loop) result = fixedWidth ? -(fixedWidth + gutter) * (slideCountNew - 1) - getCenterGap() : getCenterGap(slideCountNew - 1) - slidePositions[slideCountNew - 1];
        if (result > 0) result = 0;
        return result;
    }
    function getContainerTransformValue(num) {
        if (num == null) num = index1;
        var val;
        if (horizontal && !autoWidth) {
            if (fixedWidth) {
                val = -(fixedWidth + gutter) * num;
                if (center) val += getCenterGap();
            } else {
                var denominator = TRANSFORM ? slideCountNew : items;
                if (center) num -= getCenterGap();
                val = -num * 100 / denominator;
            }
        } else {
            val = -slidePositions[num];
            if (center && autoWidth) val += getCenterGap();
        }
        if (hasRightDeadZone) val = Math.max(val, rightBoundary);
        val += horizontal && !autoWidth && !fixedWidth ? "%" : "px";
        return val;
    }
    function doContainerTransformSilent(val) {
        resetDuration(container, "0s");
        doContainerTransform(val);
    }
    function doContainerTransform(val) {
        if (val == null) val = getContainerTransformValue();
        container.style[transformAttr] = transformPrefix + val + transformPostfix;
    }
    function animateSlide(number, classOut, classIn, isOut) {
        var l = number + items;
        if (!loop) l = Math.min(l, slideCountNew);
        for(var i = number; i < l; i++){
            var item = slideItems[i]; // set item positions
            if (!isOut) item.style.left = (i - index1) * 100 / items + "%";
            if (animateDelay && TRANSITIONDELAY) item.style[TRANSITIONDELAY] = item.style[ANIMATIONDELAY] = animateDelay * (i - number) / 1000 + "s";
            removeClass(item, classOut);
            addClass(item, classIn);
            if (isOut) slideItemsOut.push(item);
        }
    } // make transfer after click/drag:
    // 1. change 'transform' property for mordern browsers
    // 2. change 'left' property for legacy browsers
    var transformCore = function() {
        return carousel ? function() {
            resetDuration(container, "");
            if (TRANSITIONDURATION || !speed1) {
                // for morden browsers with non-zero duration or
                // zero duration for all browsers
                doContainerTransform(); // run fallback function manually
                // when duration is 0 / container is hidden
                if (!speed1 || !isVisible(container)) onTransitionEnd();
            } else // for old browser with non-zero duration
            jsTransform(container, transformAttr, transformPrefix, transformPostfix, getContainerTransformValue(), speed1, onTransitionEnd);
            if (!horizontal) updateContentWrapperHeight();
        } : function() {
            slideItemsOut = [];
            var eve = {};
            eve[TRANSITIONEND] = eve[ANIMATIONEND] = onTransitionEnd;
            removeEvents(slideItems[indexCached], eve);
            addEvents(slideItems[index1], eve);
            animateSlide(indexCached, animateIn, animateOut, true);
            animateSlide(index1, animateNormal, animateIn); // run fallback function manually
            // when transition or animation not supported / duration is 0
            if (!TRANSITIONEND || !ANIMATIONEND || !speed1 || !isVisible(container)) onTransitionEnd();
        };
    }();
    function render(e6, sliderMoved) {
        if (updateIndexBeforeTransform) updateIndex();
         // render when slider was moved (touch or drag) even though index may not change
        if (index1 !== indexCached || sliderMoved) {
            // events
            events.emit("indexChanged", info());
            events.emit("transitionStart", info());
            if (autoHeight) doAutoHeight();
             // pause autoplay when click or keydown from user
            if (animating && e6 && [
                "click",
                "keydown"
            ].indexOf(e6.type) >= 0) stopAutoplay();
            running = true;
            transformCore();
        }
    }
    /*
   * Transfer prefixed properties to the same format
   * CSS: -Webkit-Transform => webkittransform
   * JS: WebkitTransform => webkittransform
   * @param {string} str - property
   *
   */ function strTrans(str) {
        return str.toLowerCase().replace(/-/g, "");
    } // AFTER TRANSFORM
    // Things need to be done after a transfer:
    // 1. check index
    // 2. add classes to visible slide
    // 3. disable controls buttons when reach the first/last slide in non-loop slider
    // 4. update nav status
    // 5. lazyload images
    // 6. update container height
    function onTransitionEnd(event) {
        // check running on gallery mode
        // make sure trantionend/animationend events run only once
        if (carousel || running) {
            events.emit("transitionEnd", info(event));
            if (!carousel && slideItemsOut.length > 0) for(var i = 0; i < slideItemsOut.length; i++){
                var item = slideItemsOut[i]; // set item positions
                item.style.left = "";
                if (ANIMATIONDELAY && TRANSITIONDELAY) {
                    item.style[ANIMATIONDELAY] = "";
                    item.style[TRANSITIONDELAY] = "";
                }
                removeClass(item, animateOut);
                addClass(item, animateNormal);
            }
            /* update slides, nav, controls after checking ...
       * => legacy browsers who don't support 'event'
       *    have to check event first, otherwise event.target will cause an error
       * => or 'gallery' mode:
       *   + event target is slide item
       * => or 'carousel' mode:
       *   + event target is container,
       *   + event.property is the same with transform attribute
       */ if (!event || !carousel && event.target.parentNode === container || event.target === container && strTrans(event.propertyName) === strTrans(transformAttr)) {
                if (!updateIndexBeforeTransform) {
                    var indexTem = index1;
                    updateIndex();
                    if (index1 !== indexTem) {
                        events.emit("indexChanged", info());
                        doContainerTransformSilent();
                    }
                }
                if (nested === "inner") events.emit("innerLoaded", info());
                running = false;
                indexCached = index1;
            }
        }
    } // # ACTIONS
    function goTo(targetIndex, e7) {
        if (freeze) return;
         // prev slideBy
        if (targetIndex === "prev") onControlsClick(e7, -1); // next slideBy
        else if (targetIndex === "next") onControlsClick(e7, 1); // go to exact slide
        else {
            if (running) {
                if (preventActionWhenRunning) return;
                else onTransitionEnd();
            }
            var absIndex = getAbsIndex(), indexGap = 0;
            if (targetIndex === "first") indexGap = -absIndex;
            else if (targetIndex === "last") indexGap = carousel ? slideCount - items - absIndex : slideCount - 1 - absIndex;
            else {
                if (typeof targetIndex !== "number") targetIndex = parseInt(targetIndex);
                if (!isNaN(targetIndex)) {
                    // from directly called goTo function
                    if (!e7) targetIndex = Math.max(0, Math.min(slideCount - 1, targetIndex));
                    indexGap = targetIndex - absIndex;
                }
            } // gallery: make sure new page won't overlap with current page
            if (!carousel && indexGap && Math.abs(indexGap) < items) {
                var factor = indexGap > 0 ? 1 : -1;
                indexGap += index1 + indexGap - slideCount >= indexMin ? slideCount * factor : slideCount * 2 * factor * -1;
            }
            index1 += indexGap; // make sure index is in range
            if (carousel && loop) {
                if (index1 < indexMin) index1 += slideCount;
                if (index1 > indexMax) index1 -= slideCount;
            } // if index is changed, start rendering
            if (getAbsIndex(index1) !== getAbsIndex(indexCached)) render(e7);
        }
    } // on controls click
    function onControlsClick(e8, dir) {
        if (running) {
            if (preventActionWhenRunning) return;
            else onTransitionEnd();
        }
        var passEventObject;
        if (!dir) {
            e8 = getEvent(e8);
            var target = getTarget(e8);
            while(target !== controlsContainer && [
                prevButton,
                nextButton
            ].indexOf(target) < 0)target = target.parentNode;
            var targetIn = [
                prevButton,
                nextButton
            ].indexOf(target);
            if (targetIn >= 0) {
                passEventObject = true;
                dir = targetIn === 0 ? -1 : 1;
            }
        }
        if (rewind) {
            if (index1 === indexMin && dir === -1) {
                goTo("last", e8);
                return;
            } else if (index1 === indexMax && dir === 1) {
                goTo("first", e8);
                return;
            }
        }
        if (dir) {
            index1 += slideBy * dir;
            if (autoWidth) index1 = Math.floor(index1);
             // pass e when click control buttons or keydown
            render(passEventObject || e8 && e8.type === "keydown" ? e8 : null);
        }
    } // on nav click
    function onNavClick(e9) {
        if (running) {
            if (preventActionWhenRunning) return;
            else onTransitionEnd();
        }
        e9 = getEvent(e9);
        var target = getTarget(e9), navIndex; // find the clicked nav item
        while(target !== navContainer && !hasAttr(target, "data-nav"))target = target.parentNode;
        if (hasAttr(target, "data-nav")) {
            var navIndex = navClicked = Number(getAttr(target, "data-nav")), targetIndexBase = fixedWidth || autoWidth ? navIndex * slideCount / pages : navIndex * items, targetIndex = navAsThumbnails ? navIndex : Math.min(Math.ceil(targetIndexBase), slideCount - 1);
            goTo(targetIndex, e9);
            if (navCurrentIndex === navIndex) {
                if (animating) stopAutoplay();
                navClicked = -1; // reset navClicked
            }
        }
    } // autoplay functions
    function setAutoplayTimer() {
        autoplayTimer = setInterval(function() {
            onControlsClick(null, autoplayDirection);
        }, autoplayTimeout);
        animating = true;
    }
    function stopAutoplayTimer() {
        clearInterval(autoplayTimer);
        animating = false;
    }
    function updateAutoplayButton(action, txt) {
        setAttrs(autoplayButton, {
            "data-action": action
        });
        autoplayButton.innerHTML = autoplayHtmlStrings[0] + action + autoplayHtmlStrings[1] + txt;
    }
    function startAutoplay() {
        setAutoplayTimer();
        if (autoplayButton) updateAutoplayButton("stop", autoplayText[1]);
    }
    function stopAutoplay() {
        stopAutoplayTimer();
        if (autoplayButton) updateAutoplayButton("start", autoplayText[0]);
    } // programaitcally play/pause the slider
    function play() {
        if (autoplay && !animating) {
            startAutoplay();
            autoplayUserPaused = false;
        }
    }
    function pause() {
        if (animating) {
            stopAutoplay();
            autoplayUserPaused = true;
        }
    }
    function toggleAutoplay() {
        if (animating) {
            stopAutoplay();
            autoplayUserPaused = true;
        } else {
            startAutoplay();
            autoplayUserPaused = false;
        }
    }
    function onVisibilityChange() {
        if (doc.hidden) {
            if (animating) {
                stopAutoplayTimer();
                autoplayVisibilityPaused = true;
            }
        } else if (autoplayVisibilityPaused) {
            setAutoplayTimer();
            autoplayVisibilityPaused = false;
        }
    }
    function mouseoverPause() {
        if (animating) {
            stopAutoplayTimer();
            autoplayHoverPaused = true;
        }
    }
    function mouseoutRestart() {
        if (autoplayHoverPaused) {
            setAutoplayTimer();
            autoplayHoverPaused = false;
        }
    } // keydown events on document
    function onDocumentKeydown(e10) {
        e10 = getEvent(e10);
        var keyIndex = [
            KEYS.LEFT,
            KEYS.RIGHT
        ].indexOf(e10.keyCode);
        if (keyIndex >= 0) onControlsClick(e10, keyIndex === 0 ? -1 : 1);
    } // on key control
    function onControlsKeydown(e11) {
        e11 = getEvent(e11);
        var keyIndex = [
            KEYS.LEFT,
            KEYS.RIGHT
        ].indexOf(e11.keyCode);
        if (keyIndex >= 0) {
            if (keyIndex === 0) {
                if (!prevButton.disabled) onControlsClick(e11, -1);
            } else if (!nextButton.disabled) onControlsClick(e11, 1);
        }
    } // set focus
    function setFocus(el) {
        el.focus();
    } // on key nav
    function onNavKeydown(e12) {
        e12 = getEvent(e12);
        var curElement = doc.activeElement;
        if (!hasAttr(curElement, "data-nav")) return;
         // var code = e.keyCode,
        var keyIndex = [
            KEYS.LEFT,
            KEYS.RIGHT,
            KEYS.ENTER,
            KEYS.SPACE
        ].indexOf(e12.keyCode), navIndex = Number(getAttr(curElement, "data-nav"));
        if (keyIndex >= 0) {
            if (keyIndex === 0) {
                if (navIndex > 0) setFocus(navItems[navIndex - 1]);
            } else if (keyIndex === 1) {
                if (navIndex < pages - 1) setFocus(navItems[navIndex + 1]);
            } else {
                navClicked = navIndex;
                goTo(navIndex, e12);
            }
        }
    }
    function getEvent(e13) {
        e13 = e13 || win1.event;
        return isTouchEvent(e13) ? e13.changedTouches[0] : e13;
    }
    function getTarget(e14) {
        return e14.target || win1.event.srcElement;
    }
    function isTouchEvent(e15) {
        return e15.type.indexOf("touch") >= 0;
    }
    function preventDefaultBehavior(e16) {
        e16.preventDefault ? e16.preventDefault() : e16.returnValue = false;
    }
    function getMoveDirectionExpected() {
        return getTouchDirection(toDegree(lastPosition.y - initPosition.y, lastPosition.x - initPosition.x), swipeAngle) === options.axis;
    }
    function onPanStart(e17) {
        if (running) {
            if (preventActionWhenRunning) return;
            else onTransitionEnd();
        }
        if (autoplay && animating) stopAutoplayTimer();
        panStart = true;
        if (rafIndex) {
            caf(rafIndex);
            rafIndex = null;
        }
        var $ = getEvent(e17);
        events.emit(isTouchEvent(e17) ? "touchStart" : "dragStart", info(e17));
        if (!isTouchEvent(e17) && [
            "img",
            "a"
        ].indexOf(getLowerCaseNodeName(getTarget(e17))) >= 0) preventDefaultBehavior(e17);
        lastPosition.x = initPosition.x = $.clientX;
        lastPosition.y = initPosition.y = $.clientY;
        if (carousel) {
            translateInit = parseFloat(container.style[transformAttr].replace(transformPrefix, ""));
            resetDuration(container, "0s");
        }
    }
    function onPanMove(e18) {
        if (panStart) {
            var $ = getEvent(e18);
            lastPosition.x = $.clientX;
            lastPosition.y = $.clientY;
            if (carousel) {
                if (!rafIndex) rafIndex = raf(function() {
                    panUpdate(e18);
                });
            } else {
                if (moveDirectionExpected === "?") moveDirectionExpected = getMoveDirectionExpected();
                if (moveDirectionExpected) preventScroll = true;
            }
            if ((typeof e18.cancelable !== "boolean" || e18.cancelable) && preventScroll) e18.preventDefault();
        }
    }
    function panUpdate(e19) {
        if (!moveDirectionExpected) {
            panStart = false;
            return;
        }
        caf(rafIndex);
        if (panStart) rafIndex = raf(function() {
            panUpdate(e19);
        });
        if (moveDirectionExpected === "?") moveDirectionExpected = getMoveDirectionExpected();
        if (moveDirectionExpected) {
            if (!preventScroll && isTouchEvent(e19)) preventScroll = true;
            try {
                if (e19.type) events.emit(isTouchEvent(e19) ? "touchMove" : "dragMove", info(e19));
            } catch (err) {}
            var x = translateInit, dist = getDist(lastPosition, initPosition);
            if (!horizontal || fixedWidth || autoWidth) {
                x += dist;
                x += "px";
            } else {
                var percentageX = TRANSFORM ? dist * items * 100 / ((viewport + gutter) * slideCountNew) : dist * 100 / (viewport + gutter);
                x += percentageX;
                x += "%";
            }
            container.style[transformAttr] = transformPrefix + x + transformPostfix;
        }
    }
    function onPanEnd(e20) {
        if (panStart) {
            if (rafIndex) {
                caf(rafIndex);
                rafIndex = null;
            }
            if (carousel) resetDuration(container, "");
            panStart = false;
            var $ = getEvent(e20);
            lastPosition.x = $.clientX;
            lastPosition.y = $.clientY;
            var dist = getDist(lastPosition, initPosition);
            if (Math.abs(dist)) {
                // drag vs click
                if (!isTouchEvent(e20)) {
                    // prevent "click"
                    var target = getTarget(e20);
                    addEvents(target, {
                        "click": function preventClick(e21) {
                            preventDefaultBehavior(e21);
                            removeEvents(target, {
                                "click": preventClick
                            });
                        }
                    });
                }
                if (carousel) rafIndex = raf(function() {
                    if (horizontal && !autoWidth) {
                        var indexMoved = -dist * items / (viewport + gutter);
                        indexMoved = dist > 0 ? Math.floor(indexMoved) : Math.ceil(indexMoved);
                        index1 += indexMoved;
                    } else {
                        var moved = -(translateInit + dist);
                        if (moved <= 0) index1 = indexMin;
                        else if (moved >= slidePositions[slideCountNew - 1]) index1 = indexMax;
                        else {
                            var i = 0;
                            while(i < slideCountNew && moved >= slidePositions[i]){
                                index1 = i;
                                if (moved > slidePositions[i] && dist < 0) index1 += 1;
                                i++;
                            }
                        }
                    }
                    render(e20, dist);
                    events.emit(isTouchEvent(e20) ? "touchEnd" : "dragEnd", info(e20));
                });
                else if (moveDirectionExpected) onControlsClick(e20, dist > 0 ? -1 : 1);
            }
        } // reset
        if (options.preventScrollOnTouch === "auto") preventScroll = false;
        if (swipeAngle) moveDirectionExpected = "?";
        if (autoplay && !animating) setAutoplayTimer();
    } // === RESIZE FUNCTIONS === //
    // (slidePositions, index, items) => vertical_conentWrapper.height
    function updateContentWrapperHeight() {
        var wp = middleWrapper ? middleWrapper : innerWrapper;
        wp.style.height = slidePositions[index1 + items] - slidePositions[index1] + "px";
    }
    function getPages() {
        var rough = fixedWidth ? (fixedWidth + gutter) * slideCount / viewport : slideCount / items;
        return Math.min(Math.ceil(rough), slideCount);
    }
    /*
   * 1. update visible nav items list
   * 2. add "hidden" attributes to previous visible nav items
   * 3. remove "hidden" attrubutes to new visible nav items
   */ function updateNavVisibility() {
        if (!nav || navAsThumbnails) return;
        if (pages !== pagesCached) {
            var min = pagesCached, max = pages, fn = showElement;
            if (pagesCached > pages) {
                min = pages;
                max = pagesCached;
                fn = hideElement;
            }
            while(min < max){
                fn(navItems[min]);
                min++;
            } // cache pages
            pagesCached = pages;
        }
    }
    function info(e22) {
        return {
            container: container,
            slideItems: slideItems,
            navContainer: navContainer,
            navItems: navItems,
            controlsContainer: controlsContainer,
            hasControls: hasControls,
            prevButton: prevButton,
            nextButton: nextButton,
            items: items,
            slideBy: slideBy,
            cloneCount: cloneCount,
            slideCount: slideCount,
            slideCountNew: slideCountNew,
            index: index1,
            indexCached: indexCached,
            displayIndex: getCurrentSlide(),
            navCurrentIndex: navCurrentIndex,
            navCurrentIndexCached: navCurrentIndexCached,
            pages: pages,
            pagesCached: pagesCached,
            sheet: sheet,
            isOn: isOn,
            event: e22 || {}
        };
    }
    return {
        version: "2.9.4",
        getInfo: info,
        events: events,
        goTo: goTo,
        play: play,
        pause: pause,
        isOn: isOn,
        updateSliderHeight: updateInnerWrapperHeight,
        refresh: initSliderTransform,
        destroy: destroy,
        rebuild: function() {
            return tns(extend(options, optionsElements));
        }
    };
};
exports.tns = tns;

},{}],"96Ut5":[function(require,module,exports) {
var e, t;
e = this, t = function() {
    "use strict";
    function e1(e2, t2) {
        var n = Object.keys(e2);
        if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e2);
            t2 && (r = r.filter(function(t3) {
                return Object.getOwnPropertyDescriptor(e2, t3).enumerable;
            })), n.push.apply(n, r);
        }
        return n;
    }
    function t1(t4) {
        for(var n = 1; n < arguments.length; n++){
            var i = null != arguments[n] ? arguments[n] : {};
            n % 2 ? e1(Object(i), !0).forEach(function(e3) {
                r1(t4, e3, i[e3]);
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t4, Object.getOwnPropertyDescriptors(i)) : e1(Object(i)).forEach(function(e4) {
                Object.defineProperty(t4, e4, Object.getOwnPropertyDescriptor(i, e4));
            });
        }
        return t4;
    }
    function n1(e5) {
        return n1 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e6) {
            return typeof e6;
        } : function(e7) {
            return e7 && "function" == typeof Symbol && e7.constructor === Symbol && e7 !== Symbol.prototype ? "symbol" : typeof e7;
        }, n1(e5);
    }
    function r1(e8, t5, n) {
        return t5 in e8 ? Object.defineProperty(e8, t5, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e8[t5] = n, e8;
    }
    function i1(e9) {
        return function(e10) {
            if (Array.isArray(e10)) return s1(e10);
        }(e9) || function(e11) {
            if ("undefined" != typeof Symbol && null != e11[Symbol.iterator] || null != e11["@@iterator"]) return Array.from(e11);
        }(e9) || o1(e9) || function() {
            throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        }();
    }
    function o1(e12, t6) {
        if (e12) {
            if ("string" == typeof e12) return s1(e12, t6);
            var n = Object.prototype.toString.call(e12).slice(8, -1);
            return "Object" === n && e12.constructor && (n = e12.constructor.name), "Map" === n || "Set" === n ? Array.from(e12) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? s1(e12, t6) : void 0;
        }
    }
    function s1(e13, t7) {
        (null == t7 || t7 > e13.length) && (t7 = e13.length);
        for(var n = 0, r = new Array(t7); n < t7; n++)r[n] = e13[n];
        return r;
    }
    var u1 = function(e14) {
        return "string" == typeof e14 ? document.querySelector(e14) : e14();
    }, a1 = function(e15, t8) {
        var n = "string" == typeof e15 ? document.createElement(e15) : e15;
        for(var r in t8){
            var i = t8[r];
            if ("inside" === r) i.append(n);
            else if ("dest" === r) u1(i[0]).insertAdjacentElement(i[1], n);
            else if ("around" === r) {
                var o = i;
                o.parentNode.insertBefore(n, o), n.append(o), null != o.getAttribute("autofocus") && o.focus();
            } else r in n ? n[r] = i : n.setAttribute(r, i);
        }
        return n;
    }, c1 = function(e16, t9) {
        return e16 = String(e16).toLowerCase(), t9 ? e16.normalize("NFD").replace(/[\u0300-\u036f]/g, "").normalize("NFC") : e16;
    }, l1 = function(e17, n) {
        return a1("mark", t1({
            innerHTML: e17
        }, "string" == typeof n && {
            class: n
        })).outerHTML;
    }, f1 = function(e18, t10) {
        t10.input.dispatchEvent(new CustomEvent(e18, {
            bubbles: !0,
            detail: t10.feedback,
            cancelable: !0
        }));
    }, p1 = function(e19, t11, n2) {
        var r = n2 || {}, i = r.mode, o = r.diacritics, s = r.highlight, u = c1(t11, o);
        if (t11 = String(t11), e19 = c1(e19, o), "loose" === i) {
            var a = (e19 = e19.replace(/ /g, "")).length, f = 0, p = Array.from(t11).map(function(t12, n) {
                return f < a && u[n] === e19[f] && (t12 = s ? l1(t12, s) : t12, f++), t12;
            }).join("");
            if (f === a) return p;
        } else {
            var d = u.indexOf(e19);
            if (~d) return e19 = t11.substring(d, d + e19.length), d = s ? t11.replace(e19, l1(e19, s)) : t11;
        }
    }, d1 = function(e20, t13) {
        return new Promise(function(n3, r) {
            var i;
            return (i = e20.data).cache && i.store ? n3() : new Promise(function(e21, n) {
                return "function" == typeof i.src ? i.src(t13).then(e21, n) : e21(i.src);
            }).then(function(t14) {
                try {
                    return e20.feedback = i.store = t14, f1("response", e20), n3();
                } catch (e22) {
                    return r(e22);
                }
            }, r);
        });
    }, h = function(e23, t15) {
        var n4 = t15.data, r2 = t15.searchEngine, i2 = [];
        n4.store.forEach(function(s3, u2) {
            var a2 = function(n) {
                var o = n ? s3[n] : s3, u = "function" == typeof r2 ? r2(e23, o) : p1(e23, o, {
                    mode: r2,
                    diacritics: t15.diacritics,
                    highlight: t15.resultItem.highlight
                });
                if (u) {
                    var a = {
                        match: u,
                        value: s3
                    };
                    n && (a.key = n), i2.push(a);
                }
            };
            if (n4.keys) {
                var c, l = function(e24, t16) {
                    var n = "undefined" != typeof Symbol && e24[Symbol.iterator] || e24["@@iterator"];
                    if (!n) {
                        if (Array.isArray(e24) || (n = o1(e24)) || t16 && e24 && "number" == typeof e24.length) {
                            n && (e24 = n);
                            var r = 0, i = function() {};
                            return {
                                s: i,
                                n: function() {
                                    return r >= e24.length ? {
                                        done: !0
                                    } : {
                                        done: !1,
                                        value: e24[r++]
                                    };
                                },
                                e: function(e25) {
                                    throw e25;
                                },
                                f: i
                            };
                        }
                        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                    }
                    var s, u = !0, a = !1;
                    return {
                        s: function() {
                            n = n.call(e24);
                        },
                        n: function() {
                            var e26 = n.next();
                            return u = e26.done, e26;
                        },
                        e: function(e27) {
                            a = !0, s = e27;
                        },
                        f: function() {
                            try {
                                u || null == n.return || n.return();
                            } finally{
                                if (a) throw s;
                            }
                        }
                    };
                }(n4.keys);
                try {
                    for(l.s(); !(c = l.n()).done;)a2(c.value);
                } catch (e28) {
                    l.e(e28);
                } finally{
                    l.f();
                }
            } else a2();
        }), n4.filter && (i2 = n4.filter(i2));
        var s2 = i2.slice(0, t15.resultsList.maxResults);
        t15.feedback = {
            query: e23,
            matches: i2,
            results: s2
        }, f1("results", t15);
    }, m = "aria-expanded", b = "aria-activedescendant", y = "aria-selected", v = function(e29, n) {
        e29.feedback.selection = t1({
            index: n
        }, e29.feedback.results[n]);
    }, g = function(e30) {
        e30.isOpen || ((e30.wrapper || e30.input).setAttribute(m, !0), e30.list.removeAttribute("hidden"), e30.isOpen = !0, f1("open", e30));
    }, w = function(e31) {
        e31.isOpen && ((e31.wrapper || e31.input).setAttribute(m, !1), e31.input.setAttribute(b, ""), e31.list.setAttribute("hidden", ""), e31.isOpen = !1, f1("close", e31));
    }, O = function(e32, t17) {
        var n = t17.resultItem, r = t17.list.getElementsByTagName(n.tag), o = !!n.selected && n.selected.split(" ");
        if (t17.isOpen && r.length) {
            var s, u, a = t17.cursor;
            e32 >= r.length && (e32 = 0), e32 < 0 && (e32 = r.length - 1), t17.cursor = e32, a > -1 && (r[a].removeAttribute(y), o && (u = r[a].classList).remove.apply(u, i1(o))), r[e32].setAttribute(y, !0), o && (s = r[e32].classList).add.apply(s, i1(o)), t17.input.setAttribute(b, r[t17.cursor].id), t17.list.scrollTop = r[e32].offsetTop - t17.list.clientHeight + r[e32].clientHeight + 5, t17.feedback.cursor = t17.cursor, v(t17, e32), f1("navigate", t17);
        }
    }, A = function(e33) {
        O(e33.cursor + 1, e33);
    }, k = function(e34) {
        O(e34.cursor - 1, e34);
    }, L = function(e35, t18, n) {
        (n = n >= 0 ? n : e35.cursor) < 0 || (e35.feedback.event = t18, v(e35, n), f1("selection", e35), w(e35));
    };
    function j(e36, n5) {
        var r3 = this;
        return new Promise(function(i3, o2) {
            var s4, u3;
            return s4 = n5 || ((u3 = e36.input) instanceof HTMLInputElement || u3 instanceof HTMLTextAreaElement ? u3.value : u3.innerHTML), function(e37, t19, n) {
                return t19 ? t19(e37) : e37.length >= n;
            }(s4 = e36.query ? e36.query(s4) : s4, e36.trigger, e36.threshold) ? d1(e36, s4).then(function(n6) {
                try {
                    return e36.feedback instanceof Error ? i3() : (h(s4, e36), e36.resultsList && function(e38) {
                        var n7 = e38.resultsList, r4 = e38.list, i = e38.resultItem, o = e38.feedback, s = o.matches, u = o.results;
                        if (e38.cursor = -1, r4.innerHTML = "", s.length || n7.noResults) {
                            var c = new DocumentFragment;
                            u.forEach(function(e39, n) {
                                var r = a1(i.tag, t1({
                                    id: "".concat(i.id, "_").concat(n),
                                    role: "option",
                                    innerHTML: e39.match,
                                    inside: c
                                }, i.class && {
                                    class: i.class
                                }));
                                i.element && i.element(r, e39);
                            }), r4.append(c), n7.element && n7.element(r4, o), g(e38);
                        } else w(e38);
                    }(e36), c2.call(r3));
                } catch (e40) {
                    return o2(e40);
                }
            }, o2) : (w(e36), c2.call(r3));
            function c2() {
                return i3();
            }
        });
    }
    var S = function(e41, t20) {
        for(var n in e41)for(var r in e41[n])t20(n, r);
    }, T = function(e42) {
        var n8, r5, i4, o = e42.events, s = (n8 = function() {
            return j(e42);
        }, r5 = e42.debounce, function() {
            clearTimeout(i4), i4 = setTimeout(function() {
                return n8();
            }, r5);
        }), u = e42.events = t1({
            input: t1({}, o && o.input)
        }, e42.resultsList && {
            list: o ? t1({}, o.list) : {}
        }), a = {
            input: {
                input: function() {
                    s();
                },
                keydown: function(t21) {
                    !function(e43, t22) {
                        switch(e43.keyCode){
                            case 40:
                            case 38:
                                e43.preventDefault(), 40 === e43.keyCode ? A(t22) : k(t22);
                                break;
                            case 13:
                                t22.submit || e43.preventDefault(), t22.cursor >= 0 && L(t22, e43);
                                break;
                            case 9:
                                t22.resultsList.tabSelect && t22.cursor >= 0 && L(t22, e43);
                                break;
                            case 27:
                                t22.input.value = "", w(t22);
                        }
                    }(t21, e42);
                },
                blur: function() {
                    w(e42);
                }
            },
            list: {
                mousedown: function(e44) {
                    e44.preventDefault();
                },
                click: function(t23) {
                    !function(e45, t24) {
                        var n = t24.resultItem.tag.toUpperCase(), r = Array.from(t24.list.querySelectorAll(n)), i = e45.target.closest(n);
                        i && i.nodeName === n && L(t24, e45, r.indexOf(i));
                    }(t23, e42);
                }
            }
        };
        S(a, function(t25, n) {
            (e42.resultsList || "input" === n) && (u[t25][n] || (u[t25][n] = a[t25][n]));
        }), S(u, function(t26, n) {
            e42[t26].addEventListener(n, u[t26][n]);
        });
    };
    function E(e46) {
        var n = this;
        return new Promise(function(r, i) {
            var o, s, u;
            if (o = e46.placeHolder, u = {
                role: "combobox",
                "aria-owns": (s = e46.resultsList).id,
                "aria-haspopup": !0,
                "aria-expanded": !1
            }, a1(e46.input, t1(t1({
                "aria-controls": s.id,
                "aria-autocomplete": "both"
            }, o && {
                placeholder: o
            }), !e46.wrapper && t1({}, u))), e46.wrapper && (e46.wrapper = a1("div", t1({
                around: e46.input,
                class: e46.name + "_wrapper"
            }, u))), s && (e46.list = a1(s.tag, t1({
                dest: [
                    s.destination,
                    s.position
                ],
                id: s.id,
                role: "listbox",
                hidden: "hidden"
            }, s.class && {
                class: s.class
            }))), T(e46), e46.data.cache) return d1(e46).then(function(e) {
                try {
                    return c.call(n);
                } catch (e47) {
                    return i(e47);
                }
            }, i);
            function c() {
                return f1("init", e46), r();
            }
            return c.call(n);
        });
    }
    function x(e48) {
        var t27 = e48.prototype;
        t27.init = function() {
            E(this);
        }, t27.start = function(e49) {
            j(this, e49);
        }, t27.unInit = function() {
            if (this.wrapper) {
                var e50 = this.wrapper.parentNode;
                e50.insertBefore(this.input, this.wrapper), e50.removeChild(this.wrapper);
            }
            var t28;
            S((t28 = this).events, function(e51, n) {
                t28[e51].removeEventListener(n, t28.events[e51][n]);
            });
        }, t27.open = function() {
            g(this);
        }, t27.close = function() {
            w(this);
        }, t27.goTo = function(e52) {
            O(e52, this);
        }, t27.next = function() {
            A(this);
        }, t27.previous = function() {
            k(this);
        }, t27.select = function(e53) {
            L(this, null, e53);
        }, t27.search = function(e54, t29, n) {
            return p1(e54, t29, n);
        };
    }
    return function e55(t30) {
        this.options = t30, this.id = e55.instances = (e55.instances || 0) + 1, this.name = "autoComplete", this.wrapper = 1, this.threshold = 1, this.debounce = 0, this.resultsList = {
            position: "afterend",
            tag: "ul",
            maxResults: 5
        }, this.resultItem = {
            tag: "li"
        }, function(e56) {
            var t31 = e56.name, r = e56.options, i = e56.resultsList, o = e56.resultItem;
            for(var s in r)if ("object" === n1(r[s])) for(var a in e56[s] || (e56[s] = {}), r[s])e56[s][a] = r[s][a];
            else e56[s] = r[s];
            e56.selector = e56.selector || "#" + t31, i.destination = i.destination || e56.selector, i.id = i.id || t31 + "_list_" + e56.id, o.id = o.id || t31 + "_result", e56.input = u1(e56.selector);
        }(this), x.call(this, e55), E(this);
    };
}, module.exports = t();

},{}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}]},["8TtF2","gLLPy"], "gLLPy", "parcelRequiref818")

//# sourceMappingURL=index.4d6bcbeb.js.map
