!function(){function t(n){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t(n)}function n(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}function e(t,n){for(var e=0;e<n.length;e++){var r=n[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function r(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),Object.defineProperty(t,"prototype",{writable:!1}),t}function o(t,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(n&&n.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),n&&i(t,n)}function i(t,n){return i=Object.setPrototypeOf||function(t,n){return t.__proto__=n,t},i(t,n)}function c(t){var n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var e,r=a(t);if(n){var o=a(this).constructor;e=Reflect.construct(r,arguments,o)}else e=r.apply(this,arguments);return u(this,e)}}function u(n,e){if(e&&("object"===t(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return f(n)}function f(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function a(t){return a=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},a(t)}function s(t,n){return function(t){if(Array.isArray(t))return t}(t)||function(t,n){var e=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null==e)return;var r,o,i=[],c=!0,u=!1;try{for(e=e.call(t);!(c=(r=e.next()).done)&&(i.push(r.value),!n||i.length!==n);c=!0);}catch(f){u=!0,o=f}finally{try{c||null==e.return||e.return()}finally{if(u)throw o}}return i}(t,n)||l(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function l(t,n){if(t){if("string"==typeof t)return m(t,n);var e=Object.prototype.toString.call(t).slice(8,-1);return"Object"===e&&t.constructor&&(e=t.constructor.name),"Map"===e||"Set"===e?Array.from(t):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?m(t,n):void 0}}function m(t,n){(null==n||n>t.length)&&(n=t.length);for(var e=0,r=new Array(n);e<n;e++)r[e]=t[e];return r}System.register(["./vendor-legacy.f374bcce.js"],(function(){"use strict";var t,e,i,u,a,l,m,p,y,v,h,b,d,g,$,w,j,O,S,k,E,R,_,x,T,A,P,B;return{setters:[function(n){t=n.S,e=n.i,i=n.s,u=n.d,a=n.v,l=n.a,m=n.e,p=n.t,y=n.b,v=n.c,h=n.f,b=n.g,d=n.h,g=n.j,$=n.k,w=n.l,j=n.m,O=n.n,S=n.o,k=n.p,E=n.q,R=n.r,_=n.u,x=n.w,T=n.x,A=n.y,P=n.z,B=n.A}],execute:function(){var I="src/components/Tree.svelte";function C(t,n,e){var r=t.slice();return r[1]=n[e],r}function L(t){var n,e;n=new z({props:{items:t[1].items},$$inline:!0});var r={c:function(){x(n.$$.fragment)},l:function(t){T(n.$$.fragment,t)},m:function(t,r){A(n,t,r),e=!0},p:function(t,e){var r={};1&e&&(r.items=t[1].items),n.$set(r)},i:function(t){e||(S(n.$$.fragment,t),e=!0)},o:function(t){E(n.$$.fragment,t),e=!1},d:function(t){P(n,t)}};return u("SvelteRegisterBlock",{block:r,id:L.name,type:"if",source:"(10:3) {#if item.items}",ctx:t}),r}function N(t){var n,e,r,o,i,c=t[1].name+"",f=t[1].items&&L(t),a={c:function(){n=m("li"),e=p(c),r=y(),f&&f.c(),o=y(),this.h()},l:function(t){n=v(t,"LI",{});var i=h(n);e=b(i,c),r=d(i),f&&f.l(i),o=d(i),i.forEach(g),this.h()},h:function(){$(n,I,6,2,74)},m:function(t,c){w(t,n,c),j(n,e),j(n,r),f&&f.m(n,null),j(n,o),i=!0},p:function(t,r){(!i||1&r)&&c!==(c=t[1].name+"")&&O(e,c),t[1].items?f?(f.p(t,r),1&r&&S(f,1)):((f=L(t)).c(),S(f,1),f.m(n,o)):f&&(k(),E(f,1,1,(function(){f=null})),R())},i:function(t){i||(S(f),i=!0)},o:function(t){E(f),i=!1},d:function(t){t&&g(n),f&&f.d()}};return u("SvelteRegisterBlock",{block:a,id:N.name,type:"each",source:"(6:1) {#each items as item}",ctx:t}),a}function U(t){var n,e,r=t[0];a(r);for(var o=[],i=0;i<r.length;i+=1)o[i]=N(C(t,r,i));var c=function(t){return E(o[t],1,1,(function(){o[t]=null}))},f={c:function(){n=m("ul");for(var t=0;t<o.length;t+=1)o[t].c();this.h()},l:function(t){n=v(t,"UL",{});for(var e=h(n),r=0;r<o.length;r+=1)o[r].l(e);e.forEach(g),this.h()},h:function(){$(n,I,4,0,44)},m:function(t,r){w(t,n,r);for(var i=0;i<o.length;i+=1)o[i].m(n,null);e=!0},p:function(t,e){var i=s(e,1)[0];if(1&i){var u;for(r=t[0],a(r),u=0;u<r.length;u+=1){var f=C(t,r,u);o[u]?(o[u].p(f,i),S(o[u],1)):(o[u]=N(f),o[u].c(),S(o[u],1),o[u].m(n,null))}for(k(),u=r.length;u<o.length;u+=1)c(u);R()}},i:function(t){if(!e){for(var n=0;n<r.length;n+=1)S(o[n]);e=!0}},o:function(t){o=o.filter(Boolean);for(var n=0;n<o.length;n+=1)E(o[n]);e=!1},d:function(t){t&&g(n),_(o,t)}};return u("SvelteRegisterBlock",{block:f,id:U.name,type:"component",source:"",ctx:t}),f}function q(t,n,e){var r=n.$$slots,o=void 0===r?{}:r;n.$$scope;l("Tree",o,[]);var i=n.items,c=void 0===i?[]:i,u=["items"];return Object.keys(n).forEach((function(t){~u.indexOf(t)||"$$"===t.slice(0,2)||"slot"===t||console.warn("<Tree> was created with unknown prop '".concat(t,"'"))})),t.$$set=function(t){"items"in t&&e(0,c=t.items)},t.$capture_state=function(){return{items:c}},t.$inject_state=function(t){"items"in t&&e(0,c=t.items)},n&&"$$inject"in n&&t.$inject_state(n.$$inject),[c]}var z=function(t){o(s,t);var a=c(s);function s(t){var r;return n(this,s),r=a.call(this,t),e(f(r),t,q,U,i,{items:0}),u("SvelteRegisterComponent",{component:f(r),tagName:"Tree",options:t,id:U.name}),r}return r(s,[{key:"items",get:function(){throw new Error("<Tree>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")},set:function(t){throw new Error("<Tree>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}}]),s}(t);function D(t){var n,e;n=new z({props:{items:t[0]},$$inline:!0});var r={c:function(){x(n.$$.fragment)},l:function(t){T(n.$$.fragment,t)},m:function(t,r){A(n,t,r),e=!0},p:B,i:function(t){e||(S(n.$$.fragment,t),e=!0)},o:function(t){E(n.$$.fragment,t),e=!1},d:function(t){P(n,t)}};return u("SvelteRegisterBlock",{block:r,id:D.name,type:"component",source:"",ctx:t}),r}function M(t,n,e){var r=n.$$slots,o=void 0===r?{}:r;n.$$scope;l("App",o,[]);var i=[{name:1,items:[{name:11},{name:12},{name:13},{name:14},{name:15}]},{name:2},{name:3},{name:4},{name:5}],c=[];return Object.keys(n).forEach((function(t){~c.indexOf(t)||"$$"===t.slice(0,2)||"slot"===t||console.warn("<App> was created with unknown prop '".concat(t,"'"))})),t.$capture_state=function(){return{Tree:z,items:i}},[i]}new(function(t){o(s,t);var a=c(s);function s(t){var r;return n(this,s),r=a.call(this,t),e(f(r),t,M,D,i,{}),u("SvelteRegisterComponent",{component:f(r),tagName:"App",options:t,id:D.name}),r}return r(s)}(t))({target:document.getElementById("svelte"),hydrate:!0})}}}))}();
