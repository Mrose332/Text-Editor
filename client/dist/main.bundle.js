/*! For license information please see main.bundle.js.LICENSE.txt */
(()=>{var n={402:(n,t,r)=>{"use strict";r.d(t,{Z:()=>c});var e=r(81),o=r.n(e),i=r(645),a=r.n(i)()(o());a.push([n.id,"/* app shell CSS */\r\n:root {\r\n  --primary: #31a9e1;\r\n  --gray: #ececec;\r\n  --whitesmoke: #f5f5f5;\r\n  --dark: #222;\r\n  --monoaki: #272822;\r\n  --navbar-height: 50px;\r\n}\r\n\r\nbody {\r\n  margin: 0;\r\n  background-color: var(--monoaki);\r\n  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,\r\n    Oxygen, Ubuntu, Cantarell, 'Fira Sans', 'Droid Sans', 'Helvetica Neue',\r\n    sans-serif;\r\n}\r\n\r\nh1 {\r\n  font-size: 22px;\r\n}\r\n\r\n#navbar {\r\n  height: var(--navbar-height);\r\n  background-color: var(--primary);\r\n  box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.1);\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n  color: white;\r\n  font-size: 22px;\r\n  font-weight: 550;\r\n  letter-spacing: 0.9px;\r\n}\r\n\r\n.navbar-brand img {\r\n  padding-top: 10px;\r\n}\r\n\r\n.loading-spinner {\r\n  animation-duration: 0.75s;\r\n  animation-iteration-count: infinite;\r\n  animation-name: rotate-forever;\r\n  animation-timing-function: linear;\r\n  height: 30px;\r\n  width: 30px;\r\n  border: 3px solid var(--primary);\r\n  border-right-color: transparent;\r\n  border-radius: 50%;\r\n}\r\n\r\n.loading-container {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  height: calc(100vh - var(--navbar-height));\r\n}\r\n\r\n@keyframes rotate-forever {\r\n  0% {\r\n    transform: rotate(0deg);\r\n  }\r\n\r\n  100% {\r\n    transform: rotate(360deg);\r\n  }\r\n}\r\n\r\n.app-update {\r\n  display: none;\r\n  position: absolute;\r\n  right: 10px;\r\n}\r\n\r\n.app-update.show {\r\n  display: block;\r\n}\r\n\r\n.nav-btn {\r\n  margin: 25px;\r\n}\r\n\r\n.btn {\r\n  text-align: center;\r\n  display: inline-block;\r\n  padding: 0.5rem 1.2rem;\r\n  margin: 0;\r\n  text-decoration: none;\r\n  font-size: 1rem;\r\n  border-radius: 0.3rem;\r\n  border: 1px solid transparent;\r\n  outline: none;\r\n  color: #1a1a1a;\r\n  background-color: #aeaeae;\r\n  transition: color 0.2s ease-in-out, background-color 0.2s ease-in-out;\r\n}\r\n\r\n.btn:hover {\r\n  background-color: #cecece;\r\n  cursor: pointer;\r\n}\r\n\r\n.btn.btn-squared {\r\n  border-radius: 0;\r\n}\r\n\r\n.btn.btn-sm {\r\n  font-size: 0.85rem;\r\n  padding: 0.3rem 0.9rem;\r\n}\r\n\r\n.btn.btn-lg {\r\n  font-size: 1.25rem;\r\n  padding: 0.8rem 1.4rem;\r\n}\r\n\r\n.btn.btn-block {\r\n  width: 100%;\r\n  display: block;\r\n  text-align: center;\r\n}\r\n\r\n.btn.btn-primary {\r\n  background-color: #2d3e50;\r\n  color: #d9e9e8;\r\n}\r\n\r\n.btn.btn-primary:hover {\r\n  background-color: #57779a;\r\n}\r\n\r\n.btn.btn-danger {\r\n  background-color: #e64c66;\r\n  color: #ffffff;\r\n}\r\n\r\n.btn.btn-danger:hover {\r\n  background-color: #ee8294;\r\n}\r\n\r\n.btn.btn-info {\r\n  background-color: #1bbc9b;\r\n  color: #ffffff;\r\n}\r\n\r\n.btn.btn-info:hover {\r\n  background-color: #31e1bd;\r\n}\r\n\r\n.btn.btn-light {\r\n  background-color: #d9e9e8;\r\n  color: #1a1a1a;\r\n}\r\n\r\n.btn.btn-light:hover {\r\n  background-color: #84b8b4;\r\n}\r\n\r\n.btn.btn-dark {\r\n  background-color: #1a1a1a;\r\n  color: #d9e9e8;\r\n}\r\n\r\n.btn.btn-dark:hover {\r\n  background-color: #5f5f5f;\r\n}\r\n\r\n.btn.btn-white {\r\n  background-color: #ffffff;\r\n  color: #1a1a1a;\r\n}\r\n\r\n.btn.btn-white:hover {\r\n  background-color: #cccccc;\r\n}\r\n\r\n.btn.btn-black {\r\n  background-color: #000000;\r\n  color: #ffffff;\r\n}\r\n\r\n.btn.btn-black:hover {\r\n  background-color: #666666;\r\n}\r\n\r\n.btn.btn-link {\r\n  background-color: #1b89bc;\r\n  color: #ffffff;\r\n}\r\n\r\n.btn.btn-link:hover {\r\n  background-color: #31a9e1;\r\n}\r\n\r\n@media only screen and (max-width: 600px) {\r\n  .nav-btn {\r\n    display: none;\r\n  }\r\n\r\n  .navbar-brand {\r\n    display: none;\r\n  }\r\n\r\n  #navbar {\r\n    justify-content: center;\r\n  }\r\n\r\n  h1 {\r\n    font-size: 18px;\r\n  }\r\n}\r\n",""]);const c=a},645:n=>{"use strict";n.exports=function(n){var t=[];return t.toString=function(){return this.map((function(t){var r="",e=void 0!==t[5];return t[4]&&(r+="@supports (".concat(t[4],") {")),t[2]&&(r+="@media ".concat(t[2]," {")),e&&(r+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),r+=n(t),e&&(r+="}"),t[2]&&(r+="}"),t[4]&&(r+="}"),r})).join("")},t.i=function(n,r,e,o,i){"string"==typeof n&&(n=[[null,n,void 0]]);var a={};if(e)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(a[s]=!0)}for(var u=0;u<n.length;u++){var l=[].concat(n[u]);e&&a[l[0]]||(void 0!==i&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=i),r&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=r):l[2]=r),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),t.push(l))}},t}},81:n=>{"use strict";n.exports=function(n){return n[1]}},379:n=>{"use strict";var t=[];function r(n){for(var r=-1,e=0;e<t.length;e++)if(t[e].identifier===n){r=e;break}return r}function e(n,e){for(var i={},a=[],c=0;c<n.length;c++){var s=n[c],u=e.base?s[0]+e.base:s[0],l=i[u]||0,f="".concat(u," ").concat(l);i[u]=l+1;var d=r(f),p={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==d)t[d].references++,t[d].updater(p);else{var h=o(p,e);e.byIndex=c,t.splice(c,0,{identifier:f,updater:h,references:1})}a.push(f)}return a}function o(n,t){var r=t.domAPI(t);return r.update(n),function(t){if(t){if(t.css===n.css&&t.media===n.media&&t.sourceMap===n.sourceMap&&t.supports===n.supports&&t.layer===n.layer)return;r.update(n=t)}else r.remove()}}n.exports=function(n,o){var i=e(n=n||[],o=o||{});return function(n){n=n||[];for(var a=0;a<i.length;a++){var c=r(i[a]);t[c].references--}for(var s=e(n,o),u=0;u<i.length;u++){var l=r(i[u]);0===t[l].references&&(t[l].updater(),t.splice(l,1))}i=s}}},569:n=>{"use strict";var t={};n.exports=function(n,r){var e=function(n){if(void 0===t[n]){var r=document.querySelector(n);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(n){r=null}t[n]=r}return t[n]}(n);if(!e)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");e.appendChild(r)}},216:n=>{"use strict";n.exports=function(n){var t=document.createElement("style");return n.setAttributes(t,n.attributes),n.insert(t,n.options),t}},565:(n,t,r)=>{"use strict";n.exports=function(n){var t=r.nc;t&&n.setAttribute("nonce",t)}},795:n=>{"use strict";n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=n.insertStyleElement(n);return{update:function(r){!function(n,t,r){var e="";r.supports&&(e+="@supports (".concat(r.supports,") {")),r.media&&(e+="@media ".concat(r.media," {"));var o=void 0!==r.layer;o&&(e+="@layer".concat(r.layer.length>0?" ".concat(r.layer):""," {")),e+=r.css,o&&(e+="}"),r.media&&(e+="}"),r.supports&&(e+="}");var i=r.sourceMap;i&&"undefined"!=typeof btoa&&(e+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),t.styleTagTransform(e,n,t.options)}(t,n,r)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(t)}}}},589:n=>{"use strict";n.exports=function(n,t){if(t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}},61:(n,t,r)=>{var e=r(698).default;function o(){"use strict";n.exports=o=function(){return t},n.exports.__esModule=!0,n.exports.default=n.exports;var t={},r=Object.prototype,i=r.hasOwnProperty,a=Object.defineProperty||function(n,t,r){n[t]=r.value},c="function"==typeof Symbol?Symbol:{},s=c.iterator||"@@iterator",u=c.asyncIterator||"@@asyncIterator",l=c.toStringTag||"@@toStringTag";function f(n,t,r){return Object.defineProperty(n,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),n[t]}try{f({},"")}catch(n){f=function(n,t,r){return n[t]=r}}function d(n,t,r,e){var o=t&&t.prototype instanceof v?t:v,i=Object.create(o.prototype),c=new P(e||[]);return a(i,"_invoke",{value:S(n,r,c)}),i}function p(n,t,r){try{return{type:"normal",arg:n.call(t,r)}}catch(n){return{type:"throw",arg:n}}}t.wrap=d;var h={};function v(){}function g(){}function y(){}var m={};f(m,s,(function(){return this}));var b=Object.getPrototypeOf,w=b&&b(b(I([])));w&&w!==r&&i.call(w,s)&&(m=w);var x=y.prototype=v.prototype=Object.create(m);function _(n){["next","throw","return"].forEach((function(t){f(n,t,(function(n){return this._invoke(t,n)}))}))}function k(n,t){function r(o,a,c,s){var u=p(n[o],n,a);if("throw"!==u.type){var l=u.arg,f=l.value;return f&&"object"==e(f)&&i.call(f,"__await")?t.resolve(f.__await).then((function(n){r("next",n,c,s)}),(function(n){r("throw",n,c,s)})):t.resolve(f).then((function(n){l.value=n,c(l)}),(function(n){return r("throw",n,c,s)}))}s(u.arg)}var o;a(this,"_invoke",{value:function(n,e){function i(){return new t((function(t,o){r(n,e,t,o)}))}return o=o?o.then(i,i):i()}})}function S(n,t,r){var e="suspendedStart";return function(o,i){if("executing"===e)throw new Error("Generator is already running");if("completed"===e){if("throw"===o)throw i;return{value:void 0,done:!0}}for(r.method=o,r.arg=i;;){var a=r.delegate;if(a){var c=E(a,r);if(c){if(c===h)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===e)throw e="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);e="executing";var s=p(n,t,r);if("normal"===s.type){if(e=r.done?"completed":"suspendedYield",s.arg===h)continue;return{value:s.arg,done:r.done}}"throw"===s.type&&(e="completed",r.method="throw",r.arg=s.arg)}}}function E(n,t){var r=t.method,e=n.iterator[r];if(void 0===e)return t.delegate=null,"throw"===r&&n.iterator.return&&(t.method="return",t.arg=void 0,E(n,t),"throw"===t.method)||"return"!==r&&(t.method="throw",t.arg=new TypeError("The iterator does not provide a '"+r+"' method")),h;var o=p(e,n.iterator,t.arg);if("throw"===o.type)return t.method="throw",t.arg=o.arg,t.delegate=null,h;var i=o.arg;return i?i.done?(t[n.resultName]=i.value,t.next=n.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,h):i:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,h)}function j(n){var t={tryLoc:n[0]};1 in n&&(t.catchLoc=n[1]),2 in n&&(t.finallyLoc=n[2],t.afterLoc=n[3]),this.tryEntries.push(t)}function L(n){var t=n.completion||{};t.type="normal",delete t.arg,n.completion=t}function P(n){this.tryEntries=[{tryLoc:"root"}],n.forEach(j,this),this.reset(!0)}function I(n){if(n){var t=n[s];if(t)return t.call(n);if("function"==typeof n.next)return n;if(!isNaN(n.length)){var r=-1,e=function t(){for(;++r<n.length;)if(i.call(n,r))return t.value=n[r],t.done=!1,t;return t.value=void 0,t.done=!0,t};return e.next=e}}return{next:T}}function T(){return{value:void 0,done:!0}}return g.prototype=y,a(x,"constructor",{value:y,configurable:!0}),a(y,"constructor",{value:g,configurable:!0}),g.displayName=f(y,l,"GeneratorFunction"),t.isGeneratorFunction=function(n){var t="function"==typeof n&&n.constructor;return!!t&&(t===g||"GeneratorFunction"===(t.displayName||t.name))},t.mark=function(n){return Object.setPrototypeOf?Object.setPrototypeOf(n,y):(n.__proto__=y,f(n,l,"GeneratorFunction")),n.prototype=Object.create(x),n},t.awrap=function(n){return{__await:n}},_(k.prototype),f(k.prototype,u,(function(){return this})),t.AsyncIterator=k,t.async=function(n,r,e,o,i){void 0===i&&(i=Promise);var a=new k(d(n,r,e,o),i);return t.isGeneratorFunction(r)?a:a.next().then((function(n){return n.done?n.value:a.next()}))},_(x),f(x,l,"Generator"),f(x,s,(function(){return this})),f(x,"toString",(function(){return"[object Generator]"})),t.keys=function(n){var t=Object(n),r=[];for(var e in t)r.push(e);return r.reverse(),function n(){for(;r.length;){var e=r.pop();if(e in t)return n.value=e,n.done=!1,n}return n.done=!0,n}},t.values=I,P.prototype={constructor:P,reset:function(n){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(L),!n)for(var t in this)"t"===t.charAt(0)&&i.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var n=this.tryEntries[0].completion;if("throw"===n.type)throw n.arg;return this.rval},dispatchException:function(n){if(this.done)throw n;var t=this;function r(r,e){return a.type="throw",a.arg=n,t.next=r,e&&(t.method="next",t.arg=void 0),!!e}for(var e=this.tryEntries.length-1;e>=0;--e){var o=this.tryEntries[e],a=o.completion;if("root"===o.tryLoc)return r("end");if(o.tryLoc<=this.prev){var c=i.call(o,"catchLoc"),s=i.call(o,"finallyLoc");if(c&&s){if(this.prev<o.catchLoc)return r(o.catchLoc,!0);if(this.prev<o.finallyLoc)return r(o.finallyLoc)}else if(c){if(this.prev<o.catchLoc)return r(o.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return r(o.finallyLoc)}}}},abrupt:function(n,t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.tryLoc<=this.prev&&i.call(e,"finallyLoc")&&this.prev<e.finallyLoc){var o=e;break}}o&&("break"===n||"continue"===n)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var a=o?o.completion:{};return a.type=n,a.arg=t,o?(this.method="next",this.next=o.finallyLoc,h):this.complete(a)},complete:function(n,t){if("throw"===n.type)throw n.arg;return"break"===n.type||"continue"===n.type?this.next=n.arg:"return"===n.type?(this.rval=this.arg=n.arg,this.method="return",this.next="end"):"normal"===n.type&&t&&(this.next=t),h},finish:function(n){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===n)return this.complete(r.completion,r.afterLoc),L(r),h}},catch:function(n){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===n){var e=r.completion;if("throw"===e.type){var o=e.arg;L(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(n,t,r){return this.delegate={iterator:I(n),resultName:t,nextLoc:r},"next"===this.method&&(this.arg=void 0),h}},t}n.exports=o,n.exports.__esModule=!0,n.exports.default=n.exports},698:n=>{function t(r){return n.exports=t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},n.exports.__esModule=!0,n.exports.default=n.exports,t(r)}n.exports=t,n.exports.__esModule=!0,n.exports.default=n.exports},687:(n,t,r)=>{var e=r(61)();n.exports=e;try{regeneratorRuntime=e}catch(n){"object"==typeof globalThis?globalThis.regeneratorRuntime=e:Function("r","regeneratorRuntime = r")(e)}}},t={};function r(e){var o=t[e];if(void 0!==o)return o.exports;var i=t[e]={id:e,exports:{}};return n[e](i,i.exports,r),i.exports}r.n=n=>{var t=n&&n.__esModule?()=>n.default:()=>n;return r.d(t,{a:t}),t},r.d=(n,t)=>{for(var e in t)r.o(t,e)&&!r.o(n,e)&&Object.defineProperty(n,e,{enumerable:!0,get:t[e]})},r.o=(n,t)=>Object.prototype.hasOwnProperty.call(n,t),r.nc=void 0,(()=>{"use strict";try{self["workbox:window:6.5.3"]&&_()}catch(n){}function n(n,t){return new Promise((function(r){var e=new MessageChannel;e.port1.onmessage=function(n){r(n.data)},n.postMessage(t,[e.port2])}))}function t(n,t){(null==t||t>n.length)&&(t=n.length);for(var r=0,e=new Array(t);r<t;r++)e[r]=n[r];return e}function e(n,r){var e;if("undefined"==typeof Symbol||null==n[Symbol.iterator]){if(Array.isArray(n)||(e=function(n,r){if(n){if("string"==typeof n)return t(n,r);var e=Object.prototype.toString.call(n).slice(8,-1);return"Object"===e&&n.constructor&&(e=n.constructor.name),"Map"===e||"Set"===e?Array.from(n):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?t(n,r):void 0}}(n))||r&&n&&"number"==typeof n.length){e&&(n=e);var o=0;return function(){return o>=n.length?{done:!0}:{done:!1,value:n[o++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}return(e=n[Symbol.iterator]()).next.bind(e)}try{self["workbox:core:6.5.3"]&&_()}catch(n){}var o=function(){var n=this;this.promise=new Promise((function(t,r){n.resolve=t,n.reject=r}))};function i(n,t){var r=location.href;return new URL(n,r).href===new URL(t,r).href}var a=function(n,t){this.type=n,Object.assign(this,t)};function c(n,t,r){return r?t?t(n):n:(n&&n.then||(n=Promise.resolve(n)),t?n.then(t):n)}function s(){}var u={type:"SKIP_WAITING"};function l(n,t){if(!t)return n&&n.then?n.then(s):Promise.resolve()}var f=function(t){var r,e;function s(n,r){var e,s;return void 0===r&&(r={}),(e=t.call(this)||this).nn={},e.tn=0,e.rn=new o,e.en=new o,e.on=new o,e.un=0,e.an=new Set,e.cn=function(){var n=e.fn,t=n.installing;e.tn>0||!i(t.scriptURL,e.sn.toString())||performance.now()>e.un+6e4?(e.vn=t,n.removeEventListener("updatefound",e.cn)):(e.hn=t,e.an.add(t),e.rn.resolve(t)),++e.tn,t.addEventListener("statechange",e.ln)},e.ln=function(n){var t=e.fn,r=n.target,o=r.state,i=r===e.vn,c={sw:r,isExternal:i,originalEvent:n};!i&&e.mn&&(c.isUpdate=!0),e.dispatchEvent(new a(o,c)),"installed"===o?e.wn=self.setTimeout((function(){"installed"===o&&t.waiting===r&&e.dispatchEvent(new a("waiting",c))}),200):"activating"===o&&(clearTimeout(e.wn),i||e.en.resolve(r))},e.dn=function(n){var t=e.hn,r=t!==navigator.serviceWorker.controller;e.dispatchEvent(new a("controlling",{isExternal:r,originalEvent:n,sw:t,isUpdate:e.mn})),r||e.on.resolve(t)},e.gn=(s=function(n){var t=n.data,r=n.ports,o=n.source;return c(e.getSW(),(function(){e.an.has(o)&&e.dispatchEvent(new a("message",{data:t,originalEvent:n,ports:r,sw:o}))}))},function(){for(var n=[],t=0;t<arguments.length;t++)n[t]=arguments[t];try{return Promise.resolve(s.apply(this,n))}catch(n){return Promise.reject(n)}}),e.sn=n,e.nn=r,navigator.serviceWorker.addEventListener("message",e.gn),e}e=t,(r=s).prototype=Object.create(e.prototype),r.prototype.constructor=r,r.__proto__=e;var f,d=s.prototype;return d.register=function(n){var t=(void 0===n?{}:n).immediate,r=void 0!==t&&t;try{var e=this;return function(n,t){var r=n();return r&&r.then?r.then(t):t()}((function(){if(!r&&"complete"!==document.readyState)return l(new Promise((function(n){return window.addEventListener("load",n)})))}),(function(){return e.mn=Boolean(navigator.serviceWorker.controller),e.yn=e.pn(),c(e.bn(),(function(n){e.fn=n,e.yn&&(e.hn=e.yn,e.en.resolve(e.yn),e.on.resolve(e.yn),e.yn.addEventListener("statechange",e.ln,{once:!0}));var t=e.fn.waiting;return t&&i(t.scriptURL,e.sn.toString())&&(e.hn=t,Promise.resolve().then((function(){e.dispatchEvent(new a("waiting",{sw:t,wasWaitingBeforeRegister:!0}))})).then((function(){}))),e.hn&&(e.rn.resolve(e.hn),e.an.add(e.hn)),e.fn.addEventListener("updatefound",e.cn),navigator.serviceWorker.addEventListener("controllerchange",e.dn),e.fn}))}))}catch(n){return Promise.reject(n)}},d.update=function(){try{return this.fn?l(this.fn.update()):void 0}catch(n){return Promise.reject(n)}},d.getSW=function(){return void 0!==this.hn?Promise.resolve(this.hn):this.rn.promise},d.messageSW=function(t){try{return c(this.getSW(),(function(r){return n(r,t)}))}catch(n){return Promise.reject(n)}},d.messageSkipWaiting=function(){this.fn&&this.fn.waiting&&n(this.fn.waiting,u)},d.pn=function(){var n=navigator.serviceWorker.controller;return n&&i(n.scriptURL,this.sn.toString())?n:void 0},d.bn=function(){try{var n=this;return function(n,t){try{var r=n()}catch(n){return t(n)}return r&&r.then?r.then(void 0,t):r}((function(){return c(navigator.serviceWorker.register(n.sn,n.nn),(function(t){return n.un=performance.now(),t}))}),(function(n){throw n}))}catch(n){return Promise.reject(n)}},(f=[{key:"active",get:function(){return this.en.promise}},{key:"controlling",get:function(){return this.on.promise}}])&&function(n,t){for(var r=0;r<t.length;r++){var e=t[r];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(n,e.key,e)}}(s.prototype,f),s}(function(){function n(){this.Pn=new Map}var t=n.prototype;return t.addEventListener=function(n,t){this.Sn(n).add(t)},t.removeEventListener=function(n,t){this.Sn(n).delete(t)},t.dispatchEvent=function(n){n.target=this;for(var t,r=e(this.Sn(n.type));!(t=r()).done;)(0,t.value)(n)},t.Sn=function(n){return this.Pn.has(n)||this.Pn.set(n,new Set),this.Pn.get(n)},n}());function d(n){return d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},d(n)}function p(n,t){for(var r=0;r<t.length;r++){var e=t[r];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(n,(o=e.key,i=void 0,i=function(n,t){if("object"!==d(n)||null===n)return n;var r=n[Symbol.toPrimitive];if(void 0!==r){var e=r.call(n,"string");if("object"!==d(e))return e;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(n)}(o),"symbol"===d(i)?i:String(i)),e)}var o,i}function h(n,t,r){return t&&p(n.prototype,t),r&&p(n,r),Object.defineProperty(n,"prototype",{writable:!1}),n}function v(n,t,r,e,o,i,a){try{var c=n[i](a),s=c.value}catch(n){return void r(n)}c.done?t(s):Promise.resolve(s).then(e,o)}function g(n){return function(){var t=this,r=arguments;return new Promise((function(e,o){var i=n.apply(t,r);function a(n){v(i,e,o,a,c,"next",n)}function c(n){v(i,e,o,a,c,"throw",n)}a(void 0)}))}}var y=r(687),m=r.n(y);const b=(n,t)=>t.some((t=>n instanceof t));let w,x;const k=new WeakMap,S=new WeakMap,E=new WeakMap,j=new WeakMap,L=new WeakMap;let P={get(n,t,r){if(n instanceof IDBTransaction){if("done"===t)return S.get(n);if("objectStoreNames"===t)return n.objectStoreNames||E.get(n);if("store"===t)return r.objectStoreNames[1]?void 0:r.objectStore(r.objectStoreNames[0])}return T(n[t])},set:(n,t,r)=>(n[t]=r,!0),has:(n,t)=>n instanceof IDBTransaction&&("done"===t||"store"===t)||t in n};function I(n){return"function"==typeof n?(t=n)!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(x||(x=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(t)?function(...n){return t.apply(O(this),n),T(k.get(this))}:function(...n){return T(t.apply(O(this),n))}:function(n,...r){const e=t.call(O(this),n,...r);return E.set(e,n.sort?n.sort():[n]),T(e)}:(n instanceof IDBTransaction&&function(n){if(S.has(n))return;const t=new Promise(((t,r)=>{const e=()=>{n.removeEventListener("complete",o),n.removeEventListener("error",i),n.removeEventListener("abort",i)},o=()=>{t(),e()},i=()=>{r(n.error||new DOMException("AbortError","AbortError")),e()};n.addEventListener("complete",o),n.addEventListener("error",i),n.addEventListener("abort",i)}));S.set(n,t)}(n),b(n,w||(w=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction]))?new Proxy(n,P):n);var t}function T(n){if(n instanceof IDBRequest)return function(n){const t=new Promise(((t,r)=>{const e=()=>{n.removeEventListener("success",o),n.removeEventListener("error",i)},o=()=>{t(T(n.result)),e()},i=()=>{r(n.error),e()};n.addEventListener("success",o),n.addEventListener("error",i)}));return t.then((t=>{t instanceof IDBCursor&&k.set(t,n)})).catch((()=>{})),L.set(t,n),t}(n);if(j.has(n))return j.get(n);const t=I(n);return t!==n&&(j.set(n,t),L.set(t,n)),t}const O=n=>L.get(n);function M(n,t,{blocked:r,upgrade:e,blocking:o,terminated:i}={}){const a=indexedDB.open(n,t),c=T(a);return e&&a.addEventListener("upgradeneeded",(n=>{e(T(a.result),n.oldVersion,n.newVersion,T(a.transaction))})),r&&a.addEventListener("blocked",(()=>r())),c.then((n=>{i&&n.addEventListener("close",(()=>i())),o&&n.addEventListener("versionchange",(()=>o()))})).catch((()=>{})),c}const D=["get","getKey","getAll","getAllKeys","count"],B=["put","add","delete","clear"],C=new Map;function N(n,t){if(!(n instanceof IDBDatabase)||t in n||"string"!=typeof t)return;if(C.get(t))return C.get(t);const r=t.replace(/FromIndex$/,""),e=t!==r,o=B.includes(r);if(!(r in(e?IDBIndex:IDBObjectStore).prototype)||!o&&!D.includes(r))return;const i=async function(n,...t){const i=this.transaction(n,o?"readwrite":"readonly");let a=i.store;return e&&(a=a.index(t.shift())),(await Promise.all([a[r](...t),o&&i.done]))[0]};return C.set(t,i),i}var W;W=P,P={...W,get:(n,t,r)=>N(n,t)||W.get(n,t,r),has:(n,t)=>!!N(n,t)||W.has(n,t)};var A=function(){var n=g(m().mark((function n(){return m().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",M("jate",1,{upgrade:function(n){n.objectStoreNames.contains("jate")?console.log("jate database already exists"):(n.createObjectStore("jate",{keyPath:"id",autoIncrement:!0}),console.log("jate database created"))}}));case 1:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),U=function(){var n=g(m().mark((function n(t,r){var e,o,i,a,c;return m().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return console.log("PUT request to the database"),n.next=3,M("jate",1);case 3:return e=n.sent,o=e.transaction("jate","readwrite"),i=o.objectStore("jate"),a=i.put({id:t,content:r}),n.next=9,a;case 9:c=n.sent,console.log("data saved to the database",c);case 11:case"end":return n.stop()}}),n)})));return function(t,r){return n.apply(this,arguments)}}(),R=function(){var n=g(m().mark((function n(t){var r,e;return m().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return console.log("GET content from the database"),n.next=3,M("jate",1);case 3:return r=n.sent,n.next=6,r.transaction("jate","readonly").objectStore("jate").get(t);case 6:return e=n.sent,console.log("result.value",e),e?console.log("You got Data!"):console.log("data not found"),n.abrupt("return",null==e?void 0:e.jate);case 10:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}();A();var F=h((function n(){var t=this;!function(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}(this,n);var r=localStorage.getItem("content");if("undefined"==typeof CodeMirror)throw new Error("CodeMirror is not loaded");this.editor=CodeMirror(document.querySelector("#main"),{value:"",mode:"javascript",theme:"monokai",lineNumbers:!0,lineWrapping:!0,autofocus:!0,indentUnit:2,tabSize:2}),R().then((function(n){console.info("Loaded data from IndexedDB, injecting into editor"),t.editor.setValue(n||r||"\n/*\n       _____  ____________\n      / /   |/_  __/ ____/\n __  / / /| | / / / __/   \n/ /_/ / ___ |/ / / /___   \n ____/_/  |_/_/ /_____/   \njust another text editor\n*/                          \n")})),this.editor.on("change",(function(){localStorage.setItem("content",t.editor.getValue())})),this.editor.on("blur",(function(){console.log("The editor has lost focus"),U(localStorage.getItem("content"))}))})),G=r(379),z=r.n(G),q=r(795),H=r.n(q),Z=r(569),K=r.n(Z),V=r(565),Y=r.n(V),$=r(216),J=r.n($),Q=r(589),X=r.n(Q),nn=r(402),tn={};tn.styleTagTransform=X(),tn.setAttributes=Y(),tn.insert=K().bind(null,"head"),tn.domAPI=H(),tn.insertStyleElement=J(),z()(nn.Z,tn),nn.Z&&nn.Z.locals&&nn.Z.locals;var rn,en=document.querySelector("#main");en.innerHTML="",void 0===new F&&((rn=document.createElement("div")).classList.add("spinner"),rn.innerHTML='\n  <div class="loading-container">\n  <div class="loading-spinner" />\n  </div>\n  ',en.appendChild(rn)),"serviceWorker"in navigator?new f("/src-sw.js").register():console.error("Service workers are not supported in this browser.")})()})();