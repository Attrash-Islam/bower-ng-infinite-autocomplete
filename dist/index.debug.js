(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("angular"));
	else if(typeof define === 'function' && define.amd)
		define(["angular"], factory);
	else {
		var a = typeof exports === 'object' ? factory(require("angular")) : factory(root["angular"]);
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(this, function(__WEBPACK_EXTERNAL_MODULE_1__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var angular = __webpack_require__(/*! angular */ 1);
	//Don't use InfiniteAutocomplete, use InfiniteAutocompleteCore instead
	var infinite_autocomplete_1 = __webpack_require__(/*! infinite-autocomplete */ 2);
	angular.module("infinite-autocomplete", [])
	    .constant("InfiniteAutocompleteCore", infinite_autocomplete_1.InfiniteAutocomplete)
	    .directive("ngInfiniteAutocomplete", ['InfiniteAutocompleteCore', function (InfiniteAutocompleteCore) {
	        return {
	            restrict: 'EA',
	            scope: {
	                data: '=',
	                fetchSize: '=',
	                maxHeight: '=',
	                onSelect: '&',
	                getDataFromApi: '&',
	                customizedInput: '=',
	                customizedOptions: '='
	            },
	            link: function (scope, element, attrs) {
	                scope.mutable = attrs['immutable'] === undefined;
	                var inifinityAutocomplete = new InfiniteAutocompleteCore(element[0]);
	                if (attrs['onSelect'] !== undefined) {
	                    inifinityAutocomplete.setConfig({
	                        onSelect: function (element, data) {
	                            scope.onSelect({
	                                $element: element,
	                                $data: data
	                            });
	                            scope.$apply();
	                        }
	                    });
	                }
	                if (attrs['getDataFromApi'] !== undefined) {
	                    inifinityAutocomplete.setConfig({
	                        getDataFromApi: function (text, page, fetchSize) {
	                            return scope.getDataFromApi({
	                                $text: text,
	                                $page: page,
	                                $fetchSize: fetchSize
	                            });
	                        }
	                    });
	                }
	                var fetchSizeWatchListener = scope.$watch("fetchSize", function (newFetchSize) {
	                    if (newFetchSize) {
	                        inifinityAutocomplete.setConfig({
	                            fetchSize: newFetchSize
	                        });
	                    }
	                });
	                var maxHeightWatchListener = scope.$watch("maxHeight", function (newMaxHeight) {
	                    if (newMaxHeight) {
	                        inifinityAutocomplete.setConfig({
	                            maxHeight: newMaxHeight
	                        });
	                    }
	                });
	                var dataWatchListener = scope.$watch("data", function (newData) {
	                    if (newData) {
	                        inifinityAutocomplete.setConfig({
	                            data: newData
	                        });
	                    }
	                }, scope.mutable);
	                var customInputWatchListener = scope.$watch("customizedInput", function (newCustomizedInput) {
	                    if (newCustomizedInput) {
	                        inifinityAutocomplete.setConfig({
	                            customizedInput: newCustomizedInput
	                        });
	                    }
	                });
	                var customizedOptionsListener = scope.$watch("customizedOptions", function (newCustomizedOptions) {
	                    if (newCustomizedOptions) {
	                        inifinityAutocomplete.setConfig({
	                            customizedOptions: newCustomizedOptions
	                        });
	                    }
	                });
	                scope.$on("$destroy", function () {
	                    fetchSizeWatchListener();
	                    maxHeightWatchListener();
	                    dataWatchListener();
	                    customInputWatchListener();
	                    customizedOptionsListener();
	                    inifinityAutocomplete.destroy();
	                });
	            }
	        };
	    }]);


/***/ },
/* 1 */
/*!**************************!*\
  !*** external "angular" ***!
  \**************************/
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_1__;

/***/ },
/* 2 */
/*!***********************************************!*\
  !*** ./~/infinite-autocomplete/dist/index.js ***!
  \***********************************************/
/***/ function(module, exports, __webpack_require__) {

	!function(t,e){if(true)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var n=e();for(var i in n)("object"==typeof exports?exports:t)[i]=n[i]}}(this,function(){return function(t){function e(i){if(n[i])return n[i].exports;var o=n[i]={exports:{},id:i,loaded:!1};return t[i].call(o.exports,o,o.exports,e),o.loaded=!0,o.exports}var n={};return e.m=t,e.c=n,e.p="",e(0)}([function(t,e,n){"use strict";var i=this&&this.__assign||Object.assign||function(t){for(var e,n=1,i=arguments.length;n<i;n++){e=arguments[n];for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o])}return t},o=this&&this.__awaiter||function(t,e,n,i){return new(n||(n=Promise))(function(o,r){function s(t){try{u(i.next(t))}catch(t){r(t)}}function c(t){try{u(i.throw(t))}catch(t){r(t)}}function u(t){t.done?o(t.value):new n(function(e){e(t.value)}).then(s,c)}u((i=i.apply(t,e||[])).next())})},r=this&&this.__generator||function(t,e){function n(t){return function(e){return i([t,e])}}function i(n){if(o)throw new TypeError("Generator is already executing.");for(;c;)try{if(o=1,r&&(s=r[2&n[0]?"return":n[0]?"throw":"next"])&&!(s=s.call(r,n[1])).done)return s;switch(r=0,s&&(n=[0,s.value]),n[0]){case 0:case 1:s=n;break;case 4:return c.label++,{value:n[1],done:!1};case 5:c.label++,r=n[1],n=[0];continue;case 7:n=c.ops.pop(),c.trys.pop();continue;default:if(s=c.trys,!(s=s.length>0&&s[s.length-1])&&(6===n[0]||2===n[0])){c=0;continue}if(3===n[0]&&(!s||n[1]>s[0]&&n[1]<s[3])){c.label=n[1];break}if(6===n[0]&&c.label<s[1]){c.label=s[1],s=n;break}if(s&&c.label<s[2]){c.label=s[2],c.ops.push(n);break}s[2]&&c.ops.pop(),c.trys.pop();continue}n=e.call(t,c)}catch(t){n=[6,t],r=0}finally{o=s=0}if(5&n[0])throw n[1];return{value:n[0]?n[1]:void 0,done:!0}}var o,r,s,c={label:0,sent:function(){if(1&s[0])throw s[1];return s[1]},trys:[],ops:[]};return{next:n(0),throw:n(1),return:n(2)}},s=n(3),c=n(4),u=n(1),a=n(5);e.InputComponent=s.InputComponent,e.OptionsComponent=c.OptionsComponent;var l=function(){function t(t,e){this.page=1,this.preventMoreRequests=!1,this.fetchingData=!1,this.defaultConfig={fetchSize:10,maxHeight:"160px",customizedInput:s.InputComponent,customizedOptions:c.OptionsComponent},this.element=t,this.config=i({},this.defaultConfig,e),this.inputComponent=new this.config.customizedInput,this.optionsComponent=new this.config.customizedOptions,this.init()}return t.prototype.init=function(){this.applyStylesRules(),this.appendInfiniteAutocompleteWrapperClass(),this.linkInputComponent(),this.linkOptionsComponent(),this.bindScrollReachBottomEvent(),this.bindEscapeEvent(),this.bindOutSideClickEvent()},t.prototype.bindOutSideClickEvent=function(){document.addEventListener("click",this.onDocumentClickHandler.bind(this))},t.prototype.onDocumentClickHandler=function(t){if(!this.isOptionsHidden()){var e=this.checkIfClickedOutSideTheAutocompleteComponents(t.target);e&&this.clearOptions()}},t.prototype.checkIfClickedOutSideTheAutocompleteComponents=function(t){return null===t||t!==this.element&&this.checkIfClickedOutSideTheAutocompleteComponents(t.parentElement)},t.prototype.bindEscapeEvent=function(){document.addEventListener("keydown",this.onEscapeEventHandler.bind(this))},t.prototype.onEscapeEventHandler=function(t){27!==t.keyCode||this.isOptionsHidden()||this.clearOptions()},t.prototype.appendInfiniteAutocompleteWrapperClass=function(){this.element.className&&this.element.className.indexOf("infinite-autocomplete-wrapper")!==-1||(this.element.className=this.element.className.split(" ").concat(["infinite-autocomplete-wrapper"]).filter(function(t){return t}).join(" "))},t.prototype.resetCurrentPage=function(){this.page=1},t.prototype.linkInputComponent=function(){var t=this,e=new Error("Customized input should contain input element <input />"),n=document.createElement("div");n.className="infinite-autocomplete-input-wrapper",n.innerHTML=this.inputComponent.render();var i=n.querySelector("input");if(!i)throw a.Utils.throwErrorInConsole(e),e;i.addEventListener("input",function(e){return t.onInputChange(e)}),i.addEventListener("click",function(e){return t.onInputChange(e)}),this.element.appendChild(n)},t.prototype.onInputChange=function(t){var e=t.currentTarget;this.inputComponent.onInputChange&&this.inputComponent.onInputChange(e,e.value),("input"===t.type||"click"===t.type&&this.isOptionsHidden())&&this.buildOptions(e.value,!0)},t.prototype.setConfig=function(t){this.destroy(),this.config=i({},this.config,t),this.inputComponent=new this.config.customizedInput,this.optionsComponent=new this.config.customizedOptions,this.init()},t.prototype.destroy=function(){var t=this;this.isOptionsHidden()||this.clearOptions();var e=this.getOptionsBaseElement();e.removeEventListener("scroll",this.scrollReachedBottomHandler.bind(this));var n=this.getInputElement();n.removeEventListener("input",function(e){return t.onInputChange(e)}),n.removeEventListener("click",function(e){return t.onInputChange(e)}),document.removeEventListener("click",this.onDocumentClickHandler.bind(this)),document.removeEventListener("keydown",this.onEscapeEventHandler.bind(this)),this.element.innerHTML=""},t.prototype.linkOptionsComponent=function(){var t=document.createElement("div");t.className="infinite-autocomplete-options-wrapper",t.innerHTML=this.optionsComponent.render();var e=t.querySelector(this.optionsComponent.listElementSelector);this.setElementVisiblity(t,!1),e.style.overflow="scroll",e.style.overflowX="hidden",e.style.border="1px solid #bcbcbc",e.style.paddingBottom="5px",e.style.maxHeight=this.config.maxHeight||null,this.element.appendChild(t)},t.prototype.isOptionsHidden=function(){var t=this.element.querySelector(".infinite-autocomplete-options-wrapper");return t.className.indexOf("infinite-autocomplete-hidden-element")>-1},t.prototype.applyStylesRules=function(){var t=document.head.querySelector("#infinite-autocomplete-wrapper-style");if(!t){var e=document.createElement("style");e.id="infinite-autocomplete-wrapper-style",e.innerHTML="\n                .infinite-autocomplete-wrapper {\n                    position: relative;\n                }\n            ",document.head.appendChild(e)}var n=document.head.querySelector("#infinite-autocomplete-hidden-style");if(!n){var i=document.createElement("style");i.id="infinite-autocomplete-hidden-style",i.innerHTML="\n                .infinite-autocomplete-hidden-element {\n                    visibility: hidden;\n                    z-index: -1;\n                }\n            ",document.head.appendChild(i)}var o=document.head.querySelector("#infinite-autocomplete-defaults-style");if(!o){var r=document.createElement("style");r.id="infinite-autocomplete-defaults-style",r.innerHTML="\n                .infinite-autocomplete-input-wrapper .infinite-autocomplete-default-input {\n                    height: 28px;\n                    border-radius: 8px;\n                    box-shadow: inset 0px 0px 15px -4px transparent;\n                }\n                .infinite-autocomplete-options-wrapper .infinite-autocomplete-default-options {\n                    list-style-type: none;\n                    margin-top: 0;\n                    padding-left: 0;\n                }\n                .infinite-autocomplete-options-wrapper .infinite-autocomplete-default-options li {\n                    padding: 5px 10px 10px 10px;\n                }\n                .infinite-autocomplete-options-wrapper .infinite-autocomplete-default-options li:hover {\n                    background: #d5ebff;\n                    color: black;\n                    cursor: pointer;\n                }\n            ",document.head.appendChild(r)}var s=document.head.querySelector("#infinite-autocomplete-input-style");if(!s){var c=document.createElement("style");c.id="infinite-autocomplete-input-style",c.innerHTML="\n                .infinite-autocomplete-input-wrapper input {\n                    width: 100%;\n                }\n            ",document.head.appendChild(c)}var u=document.head.querySelector("#infinite-autocomplete-options-style");if(!u){var a=document.createElement("style");a.id="infinite-autocomplete-options-style",a.innerHTML="\n                .infinite-autocomplete-options-wrapper {\n                    position: absolute;\n                    z-index: 10;\n                    background: white;\n                }\n            ",document.head.appendChild(a)}var l=document.head.querySelector("#infinite-autocomplete-scrollbar-style");if(!l){var p=document.createElement("style");p.id="infinite-autocomplete-scrollbar-style",p.innerHTML="\n                .infinite-autocomplete-wrapper ::-webkit-scrollbar {\n                        width: 4px;\n                    }\n                    \n                    .infinite-autocomplete-wrapper ::-webkit-scrollbar-track {\n                        -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3); \n                        -webkit-border-radius: 10px;\n                        border-radius: 10px;\n                    }\n                    \n                    .infinite-autocomplete-wrapper ::-webkit-scrollbar-thumb {\n                        -webkit-border-radius: 10px;\n                        border-radius: 10px;\n                        background: rgba(128, 128, 128, 0.8); \n                        -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.5); \n                    }\n                    .infinite-autocomplete-wrapper ::-webkit-scrollbar-thumb:window-inactive {\n                        background: rgba(255,0,0,0.4); \n                    }\n            ",document.head.appendChild(p)}},t.prototype.bindScrollReachBottomEvent=function(){var t=this.getOptionsBaseElement();t.addEventListener("scroll",this.scrollReachedBottomHandler.bind(this))},t.prototype.scrollReachedBottomHandler=function(t){var e=t.currentTarget;this.fetchingData||this.preventMoreRequests||this.isOptionsHidden()||e.scrollTop+e.clientHeight>=e.scrollHeight&&(this.page++,this.buildOptions(this.getInputElement().value,!1))},t.prototype.clearOptions=function(){this.detachClickEventHandlers(this.getOptionsBaseElement().querySelectorAll("[infinite-clickable]")),this.resetCurrentPage(),this.preventMoreRequests=!1;var t=this.getOptionsBaseElement();this.setElementVisiblity(this.element.querySelector(".infinite-autocomplete-options-wrapper"),!1),t.innerHTML=""},t.prototype.setElementVisiblity=function(t,e){e?t.className=t.className.split(" ").filter(function(t){return"infinite-autocomplete-hidden-element"!==t}).join(" "):t.className.indexOf("infinite-autocomplete-hidden-element")===-1&&(t.className+=" infinite-autocomplete-hidden-element")},t.prototype.getOptionsBaseElement=function(){var t=new Error("Couldn't get the options base element.");if(this.element){var e=this.element.querySelector(".infinite-autocomplete-options-wrapper");if(e)return e.querySelector(this.optionsComponent.listElementSelector);throw a.Utils.throwErrorInConsole(t),t}throw a.Utils.throwErrorInConsole(t),t},t.prototype.detachClickEventHandlers=function(t){for(var e=this,n=0;n<t.length;n++)t[n].removeEventListener("click",function(t){return e.onOptionClickEvent(t)})},t.prototype.onOptionClickEvent=function(t){this.config.onSelect&&this.config.onSelect(t.currentTarget,t.currentTarget.data),this.clearOptions(),this.setInput(t.currentTarget.data.text)},t.prototype.getInputElement=function(){var t=new Error("Couldn't get the input element.");if(this.element){var e=this.element.querySelector(".infinite-autocomplete-input-wrapper");if(e)return e.querySelector("input");throw a.Utils.throwErrorInConsole(t),t}throw a.Utils.throwErrorInConsole(t),t},t.prototype.setInput=function(t){this.getInputElement().value=t},t.prototype.getData=function(t){return o(this,void 0,u.Promise,function(){var e,n,i,o;return r(this,function(r){switch(r.label){case 0:return e=new Error("You must pass data or getDataFromApi function via config"),this.config.data?(this.fetchingData=!0,n=(this.page-1)*this.config.fetchSize,i=this.config.fetchSize*(this.page-1)+this.config.fetchSize,this.fetchingData=!1,[2,this.config.data.filter(function(e){return e.text.toLowerCase().indexOf(t.toLowerCase())!==-1}).slice(n,i)]):[3,1];case 1:return this.config.getDataFromApi?(this.fetchingData=!0,[4,this.config.getDataFromApi(t,this.page,this.config.fetchSize)]):[3,3];case 2:return o=r.sent(),this.fetchingData=!1,[2,o];case 3:throw a.Utils.throwErrorInConsole(e),e}})})},t.prototype.buildOptions=function(t,e){return void 0===e&&(e=!0),o(this,void 0,u.Promise,function(){var n,i,o,s,c,u,l,p=this;return r(this,function(r){switch(r.label){case 0:return n=new Error("fetchSize must be overriden with correct numeric value"),i=this.getOptionsBaseElement(),e&&this.clearOptions(),this.config.fetchSize?[4,this.getData(t)]:[3,2];case 1:return o=r.sent(),o.length<this.config.fetchSize&&(this.preventMoreRequests=!0),o.forEach(function(t){var e=p.optionsComponent.renderOption(t),n=document.createElement("div");n.innerHTML=e;var o=n.childNodes[0];o.data={text:t.text,value:t.value},o.setAttribute("infinite-clickable",""),o.addEventListener("click",function(t){return p.onOptionClickEvent(t)}),i.appendChild(o)}),s=i.children[0].clientHeight,this.config.maxHeight&&(c=parseInt(this.config.maxHeight),c>=s*this.config.fetchSize&&(this.config.maxHeight=s*this.config.fetchSize-5+"px",u=this.element.querySelector(".infinite-autocomplete-options-wrapper"),l=u.querySelector(this.optionsComponent.listElementSelector),l.style.maxHeight=this.config.maxHeight)),""!==i.innerHTML?this.setElementVisiblity(this.element.querySelector(".infinite-autocomplete-options-wrapper"),!0):this.setElementVisiblity(this.element.querySelector(".infinite-autocomplete-options-wrapper"),!1),[3,3];case 2:throw a.Utils.throwErrorInConsole(n),n;case 3:return[2]}})})},t}();e.InfiniteAutocomplete=l},function(t,e,n){(function(e,i){/*!
		 * @overview es6-promise - a tiny implementation of Promises/A+.
		 * @copyright Copyright (c) 2014 Yehuda Katz, Tom Dale, Stefan Penner and contributors (Conversion to ES6 API by Jake Archibald)
		 * @license   Licensed under MIT license
		 *            See https://raw.githubusercontent.com/stefanpenner/es6-promise/master/LICENSE
		 * @version   4.0.5
		 */
	!function(e,n){t.exports=n()}(this,function(){"use strict";function t(t){return"function"==typeof t||"object"==typeof t&&null!==t}function o(t){return"function"==typeof t}function r(t){X=t}function s(t){J=t}function c(){return function(){return e.nextTick(h)}}function u(){return"undefined"!=typeof K?function(){K(h)}:p()}function a(){var t=0,e=new $(h),n=document.createTextNode("");return e.observe(n,{characterData:!0}),function(){n.data=t=++t%2}}function l(){var t=new MessageChannel;return t.port1.onmessage=h,function(){return t.port2.postMessage(0)}}function p(){var t=setTimeout;return function(){return t(h,1)}}function h(){for(var t=0;t<G;t+=2){var e=nt[t],n=nt[t+1];e(n),nt[t]=void 0,nt[t+1]=void 0}G=0}function f(){try{var t=n(6);return K=t.runOnLoop||t.runOnContext,u()}catch(t){return p()}}function d(t,e){var n=arguments,i=this,o=new this.constructor(v);void 0===o[ot]&&z(o);var r=i._state;return r?!function(){var t=n[r-1];J(function(){return L(r,o,t,i._result)})}():T(i,o,t,e),o}function m(t){var e=this;if(t&&"object"==typeof t&&t.constructor===e)return t;var n=new e(v);return x(n,t),n}function v(){}function y(){return new TypeError("You cannot resolve a promise with itself")}function g(){return new TypeError("A promises callback cannot return that same promise.")}function w(t){try{return t.then}catch(t){return ut.error=t,ut}}function b(t,e,n,i){try{t.call(e,n,i)}catch(t){return t}}function E(t,e,n){J(function(t){var i=!1,o=b(n,e,function(n){i||(i=!0,e!==n?x(t,n):k(t,n))},function(e){i||(i=!0,O(t,e))},"Settle: "+(t._label||" unknown promise"));!i&&o&&(i=!0,O(t,o))},t)}function C(t,e){e._state===st?k(t,e._result):e._state===ct?O(t,e._result):T(e,void 0,function(e){return x(t,e)},function(e){return O(t,e)})}function _(t,e,n){e.constructor===t.constructor&&n===d&&e.constructor.resolve===m?C(t,e):n===ut?O(t,ut.error):void 0===n?k(t,e):o(n)?E(t,e,n):k(t,e)}function x(e,n){e===n?O(e,y()):t(n)?_(e,n,w(n)):k(e,n)}function S(t){t._onerror&&t._onerror(t._result),H(t)}function k(t,e){t._state===rt&&(t._result=e,t._state=st,0!==t._subscribers.length&&J(H,t))}function O(t,e){t._state===rt&&(t._state=ct,t._result=e,J(S,t))}function T(t,e,n,i){var o=t._subscribers,r=o.length;t._onerror=null,o[r]=e,o[r+st]=n,o[r+ct]=i,0===r&&t._state&&J(H,t)}function H(t){var e=t._subscribers,n=t._state;if(0!==e.length){for(var i=void 0,o=void 0,r=t._result,s=0;s<e.length;s+=3)i=e[s],o=e[s+n],i?L(n,i,o,r):o(r);t._subscribers.length=0}}function I(){this.error=null}function A(t,e){try{return t(e)}catch(t){return at.error=t,at}}function L(t,e,n,i){var r=o(n),s=void 0,c=void 0,u=void 0,a=void 0;if(r){if(s=A(n,i),s===at?(a=!0,c=s.error,s=null):u=!0,e===s)return void O(e,g())}else s=i,u=!0;e._state!==rt||(r&&u?x(e,s):a?O(e,c):t===st?k(e,s):t===ct&&O(e,s))}function q(t,e){try{e(function(e){x(t,e)},function(e){O(t,e)})}catch(e){O(t,e)}}function M(){return lt++}function z(t){t[ot]=lt++,t._state=void 0,t._result=void 0,t._subscribers=[]}function j(t,e){this._instanceConstructor=t,this.promise=new t(v),this.promise[ot]||z(this.promise),W(e)?(this._input=e,this.length=e.length,this._remaining=e.length,this._result=new Array(this.length),0===this.length?k(this.promise,this._result):(this.length=this.length||0,this._enumerate(),0===this._remaining&&k(this.promise,this._result))):O(this.promise,D())}function D(){return new Error("Array Methods must be provided an Array")}function N(t){return new j(this,t).promise}function B(t){var e=this;return new e(W(t)?function(n,i){for(var o=t.length,r=0;r<o;r++)e.resolve(t[r]).then(n,i)}:function(t,e){return e(new TypeError("You must pass an array to race."))})}function P(t){var e=this,n=new e(v);return O(n,t),n}function R(){throw new TypeError("You must pass a resolver function as the first argument to the promise constructor")}function U(){throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.")}function F(t){this[ot]=M(),this._result=this._state=void 0,this._subscribers=[],v!==t&&("function"!=typeof t&&R(),this instanceof F?q(this,t):U())}function V(){var t=void 0;if("undefined"!=typeof i)t=i;else if("undefined"!=typeof self)t=self;else try{t=Function("return this")()}catch(t){throw new Error("polyfill failed because global object is unavailable in this environment")}var e=t.Promise;if(e){var n=null;try{n=Object.prototype.toString.call(e.resolve())}catch(t){}if("[object Promise]"===n&&!e.cast)return}t.Promise=F}var Y=void 0;Y=Array.isArray?Array.isArray:function(t){return"[object Array]"===Object.prototype.toString.call(t)};var W=Y,G=0,K=void 0,X=void 0,J=function(t,e){nt[G]=t,nt[G+1]=e,G+=2,2===G&&(X?X(h):it())},Q="undefined"!=typeof window?window:void 0,Z=Q||{},$=Z.MutationObserver||Z.WebKitMutationObserver,tt="undefined"==typeof self&&"undefined"!=typeof e&&"[object process]"==={}.toString.call(e),et="undefined"!=typeof Uint8ClampedArray&&"undefined"!=typeof importScripts&&"undefined"!=typeof MessageChannel,nt=new Array(1e3),it=void 0;it=tt?c():$?a():et?l():void 0===Q?f():p();var ot=Math.random().toString(36).substring(16),rt=void 0,st=1,ct=2,ut=new I,at=new I,lt=0;return j.prototype._enumerate=function(){for(var t=this.length,e=this._input,n=0;this._state===rt&&n<t;n++)this._eachEntry(e[n],n)},j.prototype._eachEntry=function(t,e){var n=this._instanceConstructor,i=n.resolve;if(i===m){var o=w(t);if(o===d&&t._state!==rt)this._settledAt(t._state,e,t._result);else if("function"!=typeof o)this._remaining--,this._result[e]=t;else if(n===F){var r=new n(v);_(r,t,o),this._willSettleAt(r,e)}else this._willSettleAt(new n(function(e){return e(t)}),e)}else this._willSettleAt(i(t),e)},j.prototype._settledAt=function(t,e,n){var i=this.promise;i._state===rt&&(this._remaining--,t===ct?O(i,n):this._result[e]=n),0===this._remaining&&k(i,this._result)},j.prototype._willSettleAt=function(t,e){var n=this;T(t,void 0,function(t){return n._settledAt(st,e,t)},function(t){return n._settledAt(ct,e,t)})},F.all=N,F.race=B,F.resolve=m,F.reject=P,F._setScheduler=r,F._setAsap=s,F._asap=J,F.prototype={constructor:F,then:d,catch:function(t){return this.then(null,t)}},F.polyfill=V,F.Promise=F,F})}).call(e,n(2),function(){return this}())},function(t,e){function n(){throw new Error("setTimeout has not been defined")}function i(){throw new Error("clearTimeout has not been defined")}function o(t){if(l===setTimeout)return setTimeout(t,0);if((l===n||!l)&&setTimeout)return l=setTimeout,setTimeout(t,0);try{return l(t,0)}catch(e){try{return l.call(null,t,0)}catch(e){return l.call(this,t,0)}}}function r(t){if(p===clearTimeout)return clearTimeout(t);if((p===i||!p)&&clearTimeout)return p=clearTimeout,clearTimeout(t);try{return p(t)}catch(e){try{return p.call(null,t)}catch(e){return p.call(this,t)}}}function s(){m&&f&&(m=!1,f.length?d=f.concat(d):v=-1,d.length&&c())}function c(){if(!m){var t=o(s);m=!0;for(var e=d.length;e;){for(f=d,d=[];++v<e;)f&&f[v].run();v=-1,e=d.length}f=null,m=!1,r(t)}}function u(t,e){this.fun=t,this.array=e}function a(){}var l,p,h=t.exports={};!function(){try{l="function"==typeof setTimeout?setTimeout:n}catch(t){l=n}try{p="function"==typeof clearTimeout?clearTimeout:i}catch(t){p=i}}();var f,d=[],m=!1,v=-1;h.nextTick=function(t){var e=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)e[n-1]=arguments[n];d.push(new u(t,e)),1!==d.length||m||o(c)},u.prototype.run=function(){this.fun.apply(null,this.array)},h.title="browser",h.browser=!0,h.env={},h.argv=[],h.version="",h.versions={},h.on=a,h.addListener=a,h.once=a,h.off=a,h.removeListener=a,h.removeAllListeners=a,h.emit=a,h.binding=function(t){throw new Error("process.binding is not supported")},h.cwd=function(){return"/"},h.chdir=function(t){throw new Error("process.chdir is not supported")},h.umask=function(){return 0}},function(t,e){"use strict";var n=function(){function t(){}return t.prototype.render=function(){return'<input class="infinite-autocomplete-default-input" type="text" />'},t}();e.InputComponent=n},function(t,e){"use strict";var n=function(){function t(){this.listElementSelector="ul"}return t.prototype.render=function(){return"<"+this.listElementSelector+' class="infinite-autocomplete-default-options"></'+this.listElementSelector+">"},t.prototype.renderOption=function(t){return"<li>\n                    "+t.text+"\n                </li>"},t}();e.OptionsComponent=n},function(t,e){"use strict";var n=function(){function t(){}return t.throwErrorInConsole=function(t){console.error(t)},t}();e.Utils=n},function(t,e){}])});

/***/ }
/******/ ])
});
;
//# sourceMappingURL=index.debug.js.map