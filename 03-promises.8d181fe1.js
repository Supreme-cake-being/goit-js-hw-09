!function(){function e(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},o={},i=n.parcelRequire7bc7;null==i&&((i=function(e){if(e in t)return t[e].exports;if(e in o){var n=o[e];delete o[e];var i={id:e,exports:{}};return t[e]=i,n.call(i.exports,i,i.exports),i.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,n){o[e]=n},n.parcelRequire7bc7=i);var r=i("6JpON"),u=document.querySelector("input[name='delay']"),a=document.querySelector("input[name='step']"),l=document.querySelector("input[name='amount']"),c=document.querySelector(".form");function f(e,n){return new Promise((function(t,o){setTimeout((function(){Math.random()>.3?t({position:e,delay:n}):o({position:e,delay:n})}),n)}))}e(r).Notify.init({success:{notiflixIconColor:"white"},failure:{notiflixIconColor:"white"}}),c.addEventListener("submit",(function(n){n.preventDefault();for(var t=0;t<parseInt(l.value);t+=1)f(t+1,parseInt(u.value)+t*parseInt(a.value)).then((function(n){var t=n.position,o=n.delay;e(r).Notify.success("Fulfilled promise ".concat(t," in ").concat(o,"ms"))})).catch((function(n){var t=n.position,o=n.delay;e(r).Notify.failure("Rejected promise ".concat(t," in ").concat(o,"ms"))}))}))}();
//# sourceMappingURL=03-promises.8d181fe1.js.map
