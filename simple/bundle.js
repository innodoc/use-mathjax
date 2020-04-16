!function(e){function t(t){for(var r,u,i=t[0],c=t[1],l=t[2],f=0,p=[];f<i.length;f++)u=i[f],Object.prototype.hasOwnProperty.call(o,u)&&o[u]&&p.push(o[u][0]),o[u]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);for(s&&s(t);p.length;)p.shift()();return a.push.apply(a,l||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],r=!0,i=1;i<n.length;i++){var c=n[i];0!==o[c]&&(r=!1)}r&&(a.splice(t--,1),e=u(u.s=n[0]))}return e}var r={},o={5:0},a=[];function u(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.m=e,u.c=r,u.d=function(e,t,n){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},u.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)u.d(n,r,function(t){return e[t]}.bind(null,r));return n},u.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="";var i=window.webpackJsonp=window.webpackJsonp||[],c=i.push.bind(i);i.push=t,i=i.slice();for(var l=0;l<i.length;l++)t(i[l]);var s=c;a.push([291,0,1]),n()}({2:function(e,t,n){e.exports=n(26)()},25:function(e,t,n){"use strict";
/** @license React v0.19.1
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var r,o,a,u,i;if("undefined"==typeof window||"function"!=typeof MessageChannel){var c=null,l=null,s=function(){if(null!==c)try{var e=t.unstable_now();c(!0,e),c=null}catch(e){throw setTimeout(s,0),e}},f=Date.now();t.unstable_now=function(){return Date.now()-f},r=function(e){null!==c?setTimeout(r,0,e):(c=e,setTimeout(s,0))},o=function(e,t){l=setTimeout(e,t)},a=function(){clearTimeout(l)},u=function(){return!1},i=t.unstable_forceFrameRate=function(){}}else{var p=window.performance,d=window.Date,b=window.setTimeout,y=window.clearTimeout;if("undefined"!=typeof console){var m=window.cancelAnimationFrame;"function"!=typeof window.requestAnimationFrame&&console.error("This browser doesn't support requestAnimationFrame. Make sure that you load a polyfill in older browsers. https://fb.me/react-polyfills"),"function"!=typeof m&&console.error("This browser doesn't support cancelAnimationFrame. Make sure that you load a polyfill in older browsers. https://fb.me/react-polyfills")}if("object"==typeof p&&"function"==typeof p.now)t.unstable_now=function(){return p.now()};else{var v=d.now();t.unstable_now=function(){return d.now()-v}}var h=!1,w=null,g=-1,O=5,j=0;u=function(){return t.unstable_now()>=j},i=function(){},t.unstable_forceFrameRate=function(e){0>e||125<e?console.error("forceFrameRate takes a positive int between 0 and 125, forcing framerates higher than 125 fps is not unsupported"):O=0<e?Math.floor(1e3/e):5};var x=new MessageChannel,T=x.port2;x.port1.onmessage=function(){if(null!==w){var e=t.unstable_now();j=e+O;try{w(!0,e)?T.postMessage(null):(h=!1,w=null)}catch(e){throw T.postMessage(null),e}}else h=!1},r=function(e){w=e,h||(h=!0,T.postMessage(null))},o=function(e,n){g=b((function(){e(t.unstable_now())}),n)},a=function(){y(g),g=-1}}function P(e,t){var n=e.length;e.push(t);e:for(;;){var r=n-1>>>1,o=e[r];if(!(void 0!==o&&0<C(o,t)))break e;e[r]=t,e[n]=o,n=r}}function _(e){return void 0===(e=e[0])?null:e}function k(e){var t=e[0];if(void 0!==t){var n=e.pop();if(n!==t){e[0]=n;e:for(var r=0,o=e.length;r<o;){var a=2*(r+1)-1,u=e[a],i=a+1,c=e[i];if(void 0!==u&&0>C(u,n))void 0!==c&&0>C(c,u)?(e[r]=c,e[i]=n,r=i):(e[r]=u,e[a]=n,r=a);else{if(!(void 0!==c&&0>C(c,n)))break e;e[r]=c,e[i]=n,r=i}}}return t}return null}function C(e,t){var n=e.sortIndex-t.sortIndex;return 0!==n?n:e.id-t.id}var E=[],M=[],S=1,R=null,I=3,N=!1,D=!1,L=!1;function A(e){for(var t=_(M);null!==t;){if(null===t.callback)k(M);else{if(!(t.startTime<=e))break;k(M),t.sortIndex=t.expirationTime,P(E,t)}t=_(M)}}function F(e){if(L=!1,A(e),!D)if(null!==_(E))D=!0,r(J);else{var t=_(M);null!==t&&o(F,t.startTime-e)}}function J(e,n){D=!1,L&&(L=!1,a()),N=!0;var r=I;try{for(A(n),R=_(E);null!==R&&(!(R.expirationTime>n)||e&&!u());){var i=R.callback;if(null!==i){R.callback=null,I=R.priorityLevel;var c=i(R.expirationTime<=n);n=t.unstable_now(),"function"==typeof c?R.callback=c:R===_(E)&&k(E),A(n)}else k(E);R=_(E)}if(null!==R)var l=!0;else{var s=_(M);null!==s&&o(F,s.startTime-n),l=!1}return l}finally{R=null,I=r,N=!1}}function q(e){switch(e){case 1:return-1;case 2:return 250;case 5:return 1073741823;case 4:return 1e4;default:return 5e3}}var H=i;t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(e){e.callback=null},t.unstable_continueExecution=function(){D||N||(D=!0,r(J))},t.unstable_getCurrentPriorityLevel=function(){return I},t.unstable_getFirstCallbackNode=function(){return _(E)},t.unstable_next=function(e){switch(I){case 1:case 2:case 3:var t=3;break;default:t=I}var n=I;I=t;try{return e()}finally{I=n}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=H,t.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=I;I=e;try{return t()}finally{I=n}},t.unstable_scheduleCallback=function(e,n,u){var i=t.unstable_now();if("object"==typeof u&&null!==u){var c=u.delay;c="number"==typeof c&&0<c?i+c:i,u="number"==typeof u.timeout?u.timeout:q(e)}else u=q(e),c=i;return e={id:S++,callback:n,priorityLevel:e,startTime:c,expirationTime:u=c+u,sortIndex:-1},c>i?(e.sortIndex=c,P(M,e),null===_(E)&&e===_(M)&&(L?a():L=!0,o(F,c-i))):(e.sortIndex=u,P(E,e),D||N||(D=!0,r(J))),e},t.unstable_shouldYield=function(){var e=t.unstable_now();A(e);var n=_(E);return n!==R&&null!==R&&null!==n&&null!==n.callback&&n.startTime<=e&&n.expirationTime<R.expirationTime||u()},t.unstable_wrapCallback=function(e){var t=I;return function(){var n=I;I=t;try{return e.apply(this,arguments)}finally{I=n}}}},26:function(e,t,n){"use strict";var r=n(27);function o(){}function a(){}a.resetWarningCache=o,e.exports=function(){function e(e,t,n,o,a,u){if(u!==r){var i=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw i.name="Invariant Violation",i}}function t(){return e}e.isRequired=e;var n={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:a,resetWarningCache:o};return n.PropTypes=n,n}},27:function(e,t,n){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},291:function(e,t,n){"use strict";n.r(t);var r=n(0),o=n.n(r),a=n(24),u=n.n(a),i=n(8),c=function(){return o.a.createElement(i.a.Provider,null,o.a.createElement("p",null,"Here is some inline math:"," ",o.a.createElement(i.a.MathJaxNode,{displayType:"inline",texCode:"f(x)=x^2"})),o.a.createElement("p",null,"This one is a block element:"),o.a.createElement(i.a.MathJaxNode,{displayType:"display",texCode:"f(x)=x^2"}))};u.a.render(o.a.createElement(c,null),document.getElementById("root"))},36:function(e,t,n){"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/var r=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,a=Object.prototype.propertyIsEnumerable;function u(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach((function(e){r[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(e){return!1}}()?Object.assign:function(e,t){for(var n,i,c=u(e),l=1;l<arguments.length;l++){for(var s in n=Object(arguments[l]))o.call(n,s)&&(c[s]=n[s]);if(r){i=r(n);for(var f=0;f<i.length;f++)a.call(n,i[f])&&(c[i[f]]=n[i[f]])}}return c}},38:function(e,t){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(e){"object"==typeof window&&(n=window)}e.exports=n},54:function(e,t,n){"use strict";e.exports=n(25)},8:function(e,t,n){"use strict";var r=n(0),o=n.n(r),a=n(2),u=n.n(a),i=o.a.createContext({}),c=function(e){var t=e.children,n=e.options;return o.a.createElement(i.Provider,{value:n},t)};c.propTypes={children:u.a.node.isRequired,options:u.a.object},c.defaultProps={options:{}};var l=c,s=o.a.createContext();function f(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?f(Object(n),!0).forEach((function(t){d(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):f(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var b=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"inline",n=Object(r.useRef)(null),o=Object(r.useContext)(s),a=o.promiseMakers,u=o.setTypesetDone,i=o.triggerProcessing;return Object(r.useEffect)((function(){var r="display"===t,o=n.current;return"undefined"!=typeof window&&(a.current.push((function(){return window.MathJax.tex2chtmlPromise(e,p({},window.MathJax.getMetricsFor(o,r),{display:r})).then((function(e){e&&(o.innerHTML=e.outerHTML)}))})),u(!1),i()),function(){o&&(o.innerHTML="")}}),[n,t,a,u,e,i]),n},y=function(e){var t,n=e.classNameHide,a=e.classNameShow,u=e.displayType,i=e.texCode,c=b(i,u),l=Object(r.useContext)(s).typesetDone;return n&&a&&(t=l?a:n),o.a.createElement("span",{className:t,ref:c})};y.propTypes={classNameHide:u.a.string,classNameShow:u.a.string,displayType:u.a.oneOf(["inline","display"]),texCode:u.a.string},y.defaultProps={classNameHide:null,classNameShow:null,displayType:"inline",texCode:""};var m=y;var v=n(5),h=!1,w=!1,g=[],O={chtml:{fontURL:"https://cdn.jsdelivr.net/npm/mathjax@3/es5/output/chtml/fonts/woff-v2"},startup:{typeset:!1,pageReady:function(){for(w=!0;g.length>0;)g.pop()()}},tex:{packages:{"[+]":["ams"]}}},j=function(){var e=Object(r.useContext)(i);if("undefined"!=typeof window)return new Promise((function(t){if(h)w?t():g.push(t);else{var r;if(h=!0,e.startup&&e.startup.pageReady){var o=e.startup.pageReady;delete e.startup.pageReady,r=function(){t(),o()}}else r=t;window.MathJax=Object(v.insert)(O,e,!1),g.push(r),n(37),n(13).Loader.preLoad("loader","startup","core","input/tex-full","output/chtml"),n(56),n(55),n(57),n(58)}}))};function x(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var n=[],r=!0,o=!1,a=void 0;try{for(var u,i=e[Symbol.iterator]();!(r=(u=i.next()).done)&&(n.push(u.value),!t||n.length!==t);r=!0);}catch(e){o=!0,a=e}finally{try{r||null==i.return||i.return()}finally{if(o)throw a}}return n}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return T(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return T(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function T(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var P=function(e){var t=e.children,n=Object(r.useRef)([]),a=x(Object(r.useState)(!1),2),u=a[0],i=a[1],c=Object(r.useRef)([]),l=Object(r.useCallback)((function(e){return c.current.push(e)}),[]),f=Object(r.useCallback)((function(e){return c.current.splice(c.current.indexOf(e),1)}),[]),p=j(),d=x(function(e,t,n){void 0===n&&(n={});var o=n.maxWait,a=Object(r.useRef)(null),u=Object(r.useRef)([]),i=n.leading,c=void 0===n.trailing||n.trailing,l=Object(r.useRef)(!1),s=Object(r.useRef)(null),f=Object(r.useRef)(!1),p=Object(r.useRef)(e);p.current=e;var d=Object(r.useCallback)((function(){clearTimeout(s.current),clearTimeout(a.current),a.current=null,u.current=[],s.current=null,l.current=!1}),[]);Object(r.useEffect)((function(){return function(){f.current=!0}}),[]);var b=Object(r.useCallback)((function(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];u.current=e,clearTimeout(s.current),l.current&&(l.current=!1),s.current||!i||l.current||(p.current.apply(p,e),l.current=!0),s.current=setTimeout((function(){var t=!0;i&&l.current&&(t=!1),d(),!f.current&&c&&t&&p.current.apply(p,e)}),t),o&&!a.current&&c&&(a.current=setTimeout((function(){var e=u.current;d(),f.current||p.current.apply(null,e)}),o))}),[o,t,d,i,c]),y=Object(r.useCallback)((function(){s.current&&(p.current.apply(null,u.current),d())}),[d]);return[b,d,y]}((function(){var e=function(){for(;c.current.length>0;)c.current.pop()()};n.current.length>0?n.current.reduce((function(e,t){return e.then(t)}),p).then((function(){var t,r;n.current=[],t=window.MathJax.chtmlStylesheet(),(r=document.getElementById(t.id))?r.parentNode.replaceChild(t,r):document.getElementsByTagName("head")[0].appendChild(t),i(!0),e()})):(i(!0),e())}),100),1)[0];Object(r.useEffect)((function(){d()}));var b={addCallback:l,removeCallback:f,setTypesetDone:i,typesetDone:u,promiseMakers:n,triggerProcessing:d};return o.a.createElement(s.Provider,{value:b},t)};P.propTypes={children:u.a.node.isRequired};var _=P;t.a={ConfigProvider:l,Context:s,MathJaxNode:m,Provider:_,useMathJax:b}}});