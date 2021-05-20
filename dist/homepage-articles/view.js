(function(e, a) { for(var i in a) e[i] = a[i]; }(window, /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@babel/runtime/helpers/arrayLikeToArray.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayLikeToArray.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function _arrayLikeToArray(arr, len) {\n  if (len == null || len > arr.length) len = arr.length;\n\n  for (var i = 0, arr2 = new Array(len); i < len; i++) {\n    arr2[i] = arr[i];\n  }\n\n  return arr2;\n}\n\nmodule.exports = _arrayLikeToArray;\nmodule.exports[\"default\"] = module.exports, module.exports.__esModule = true;\n\n//# sourceURL=webpack:///./node_modules/@babel/runtime/helpers/arrayLikeToArray.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var arrayLikeToArray = __webpack_require__(/*! ./arrayLikeToArray.js */ \"./node_modules/@babel/runtime/helpers/arrayLikeToArray.js\");\n\nfunction _arrayWithoutHoles(arr) {\n  if (Array.isArray(arr)) return arrayLikeToArray(arr);\n}\n\nmodule.exports = _arrayWithoutHoles;\nmodule.exports[\"default\"] = module.exports, module.exports.__esModule = true;\n\n//# sourceURL=webpack:///./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/iterableToArray.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/iterableToArray.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function _iterableToArray(iter) {\n  if (typeof Symbol !== \"undefined\" && Symbol.iterator in Object(iter)) return Array.from(iter);\n}\n\nmodule.exports = _iterableToArray;\nmodule.exports[\"default\"] = module.exports, module.exports.__esModule = true;\n\n//# sourceURL=webpack:///./node_modules/@babel/runtime/helpers/iterableToArray.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/nonIterableSpread.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/nonIterableSpread.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function _nonIterableSpread() {\n  throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\n\nmodule.exports = _nonIterableSpread;\nmodule.exports[\"default\"] = module.exports, module.exports.__esModule = true;\n\n//# sourceURL=webpack:///./node_modules/@babel/runtime/helpers/nonIterableSpread.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/toConsumableArray.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/toConsumableArray.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var arrayWithoutHoles = __webpack_require__(/*! ./arrayWithoutHoles.js */ \"./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js\");\n\nvar iterableToArray = __webpack_require__(/*! ./iterableToArray.js */ \"./node_modules/@babel/runtime/helpers/iterableToArray.js\");\n\nvar unsupportedIterableToArray = __webpack_require__(/*! ./unsupportedIterableToArray.js */ \"./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js\");\n\nvar nonIterableSpread = __webpack_require__(/*! ./nonIterableSpread.js */ \"./node_modules/@babel/runtime/helpers/nonIterableSpread.js\");\n\nfunction _toConsumableArray(arr) {\n  return arrayWithoutHoles(arr) || iterableToArray(arr) || unsupportedIterableToArray(arr) || nonIterableSpread();\n}\n\nmodule.exports = _toConsumableArray;\nmodule.exports[\"default\"] = module.exports, module.exports.__esModule = true;\n\n//# sourceURL=webpack:///./node_modules/@babel/runtime/helpers/toConsumableArray.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var arrayLikeToArray = __webpack_require__(/*! ./arrayLikeToArray.js */ \"./node_modules/@babel/runtime/helpers/arrayLikeToArray.js\");\n\nfunction _unsupportedIterableToArray(o, minLen) {\n  if (!o) return;\n  if (typeof o === \"string\") return arrayLikeToArray(o, minLen);\n  var n = Object.prototype.toString.call(o).slice(8, -1);\n  if (n === \"Object\" && o.constructor) n = o.constructor.name;\n  if (n === \"Map\" || n === \"Set\") return Array.from(o);\n  if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return arrayLikeToArray(o, minLen);\n}\n\nmodule.exports = _unsupportedIterableToArray;\nmodule.exports[\"default\"] = module.exports, module.exports.__esModule = true;\n\n//# sourceURL=webpack:///./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js?");

/***/ }),

/***/ "./src/blocks/homepage-articles/view.js":
/*!**********************************************!*\
  !*** ./src/blocks/homepage-articles/view.js ***!
  \**********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ \"./node_modules/@babel/runtime/helpers/toConsumableArray.js\");\n/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _view_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./view.scss */ \"./src/blocks/homepage-articles/view.scss\");\n/* harmony import */ var _view_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_view_scss__WEBPACK_IMPORTED_MODULE_1__);\n\n\n/**\n * VIEW\n * JavaScript used on front of site.\n */\n\n/**\n * Style dependencies\n */\n\nvar fetchRetryCount = 3;\n/**\n * Load More Button Handling\n *\n * Calls Array.prototype.forEach for IE11 compatibility.\n *\n * @see https://developer.mozilla.org/en-US/docs/Web/API/NodeList\n */\n\nArray.prototype.forEach.call(document.querySelectorAll('.wp-block-newspack-blocks-homepage-articles.has-more-button'), buildLoadMoreHandler);\n/**\n * Builds a function to handle clicks on the load more button.\n * Creates internal state via closure to ensure all state is\n * isolated to a single Block + button instance.\n *\n * @param {HTMLElement} blockWrapperEl the button that was clicked\n */\n\nfunction buildLoadMoreHandler(blockWrapperEl) {\n  var btnEl = blockWrapperEl.querySelector('[data-next]');\n\n  if (!btnEl) {\n    return;\n  }\n\n  var postsContainerEl = blockWrapperEl.querySelector('[data-posts]'); // Set initial state flags.\n\n  var isFetching = false;\n  var isEndOfData = false;\n  btnEl.addEventListener('click', function () {\n    // Early return if still fetching or no more posts to render.\n    if (isFetching || isEndOfData) {\n      return false;\n    }\n\n    isFetching = true;\n    blockWrapperEl.classList.remove('is-error');\n    blockWrapperEl.classList.add('is-loading'); // Set currently rendered posts' IDs as a query param (e.g. exclude_ids=1,2,3)\n\n    var requestURL = btnEl.getAttribute('data-next') + '&exclude_ids=' + getRenderedPostsIds().join(',');\n    fetchWithRetry({\n      url: requestURL,\n      onSuccess: onSuccess,\n      onError: onError\n    }, fetchRetryCount);\n    /**\n     * @param {Object} data Post data\n     */\n\n    function onSuccess(data) {\n      // Validate received data.\n      if (!isPostsDataValid(data)) {\n        return onError();\n      }\n\n      if (data.items.length) {\n        // Render posts' HTML from string.\n        var postsHTML = data.items.map(function (item) {\n          return item.html;\n        }).join('');\n        postsContainerEl.insertAdjacentHTML('beforeend', postsHTML);\n      }\n\n      if (data.next) {\n        // Save next URL as button's attribute.\n        btnEl.setAttribute('data-next', data.next);\n      }\n\n      if (!data.items.length || !data.next) {\n        isEndOfData = true;\n        blockWrapperEl.classList.remove('has-more-button');\n      }\n\n      isFetching = false;\n      blockWrapperEl.classList.remove('is-loading');\n    }\n    /**\n     * Handle fetching error\n     */\n\n\n    function onError() {\n      isFetching = false;\n      blockWrapperEl.classList.remove('is-loading');\n      blockWrapperEl.classList.add('is-error');\n    }\n  });\n}\n/**\n * Returns unique IDs for posts that are currently in the DOM.\n */\n\n\nfunction getRenderedPostsIds() {\n  var postEls = document.querySelectorAll(\"[class^='wp-block-newspack-blocks'] [data-post-id]\");\n  var postIds = Array.from(postEls).map(function (el) {\n    return el.getAttribute('data-post-id');\n  });\n  postIds.push(document.querySelector('div[data-current-post-id]').getAttribute('data-current-post-id'));\n  return _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(new Set(postIds)); // Make values unique with Set\n}\n/**\n * Wrapper for XMLHttpRequest that performs given number of retries when error\n * occurs.\n *\n * @param {Object} options XMLHttpRequest options\n * @param {number} n retry count before throwing\n */\n\n\nfunction fetchWithRetry(options, n) {\n  var xhr = new XMLHttpRequest();\n\n  xhr.onreadystatechange = function () {\n    // Return if the request is completed.\n    if (xhr.readyState !== 4) {\n      return;\n    } // Call onSuccess with parsed JSON if the request is successful.\n\n\n    if (xhr.status >= 200 && xhr.status < 300) {\n      var data = JSON.parse(xhr.responseText);\n      return options.onSuccess(data);\n    } // Call onError if the request has failed n + 1 times (or if n is undefined).\n\n\n    if (!n) {\n      return options.onError();\n    } // Retry fetching if request has failed and n > 0.\n\n\n    return fetchWithRetry(options, n - 1);\n  };\n\n  xhr.open('GET', options.url);\n  xhr.send();\n}\n/**\n * Validates the \"Load more\" posts endpoint schema:\n * {\n * \t\"type\": \"object\",\n * \t\"properties\": {\n * \t\t\"items\": {\n * \t\t\t\"type\": \"array\",\n * \t\t\t\"items\": {\n * \t\t\t\t\"type\": \"object\",\n * \t\t\t\t\"properties\": {\n * \t\t\t\t\t\"html\": {\n * \t\t\t\t\t\t\"type\": \"string\"\n * \t\t\t\t\t}\n * \t\t\t\t},\n * \t\t\t\t\"required\": [\"html\"]\n * \t\t\t},\n * \t\t\t\"required\": [\"items\"]\n * \t\t},\n * \t\t\"next\": {\n * \t\t\t\"type\": [\"string\", \"null\"]\n * \t\t}\n * \t},\n * \t\"required\": [\"items\", \"next\"]\n * }\n *\n * @param {Object} data posts endpoint payload\n */\n\n\nfunction isPostsDataValid(data) {\n  var isValid = false;\n\n  if (data && hasOwnProp(data, 'items') && Array.isArray(data.items) && hasOwnProp(data, 'next') && typeof data.next === 'string') {\n    isValid = true;\n\n    if (data.items.length && !(hasOwnProp(data.items[0], 'html') && typeof data.items[0].html === 'string')) {\n      isValid = false;\n    }\n  }\n\n  return isValid;\n}\n/**\n * Checks if object has own property.\n *\n * @param {Object} obj Object\n * @param {string} prop Property to check\n */\n\n\nfunction hasOwnProp(obj, prop) {\n  return Object.prototype.hasOwnProperty.call(obj, prop);\n}\n\n//# sourceURL=webpack:///./src/blocks/homepage-articles/view.js?");

/***/ }),

/***/ "./src/blocks/homepage-articles/view.scss":
/*!************************************************!*\
  !*** ./src/blocks/homepage-articles/view.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/blocks/homepage-articles/view.scss?");

/***/ }),

/***/ "./src/setup/public-path.js":
/*!**********************************!*\
  !*** ./src/setup/public-path.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/* exported __webpack_public_path__ */\n\n/* global __webpack_public_path__ */\n\n/**\n * Dynamically set WebPack's publicPath so that split assets can be found.\n *\n * @see https://webpack.js.org/guides/public-path/#on-the-fly\n */\nif (typeof window === 'object' && window.Jetpack_Block_Assets_Base_Url) {\n  // eslint-disable-next-line no-global-assign\n  // eslint-disable-next-line camelcase\n  __webpack_require__.p = window.Jetpack_Block_Assets_Base_Url;\n}\n\n//# sourceURL=webpack:///./src/setup/public-path.js?");

/***/ }),

/***/ "./src/setup/view.js":
/*!***************************!*\
  !*** ./src/setup/view.js ***!
  \***************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _public_path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./public-path */ \"./src/setup/public-path.js\");\n/* harmony import */ var _public_path__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_public_path__WEBPACK_IMPORTED_MODULE_0__);\n/**\n * Internal dependencies\n */\n\n\n//# sourceURL=webpack:///./src/setup/view.js?");

/***/ }),

/***/ 2:
/*!*********************************************************************!*\
  !*** multi ./src/setup/view ./src/blocks/homepage-articles/view.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! /Users/jeffreyong/Local Sites/iccdevelopment/app/public/wp-content/plugins/newspack-blocks/src/setup/view */\"./src/setup/view.js\");\nmodule.exports = __webpack_require__(/*! /Users/jeffreyong/Local Sites/iccdevelopment/app/public/wp-content/plugins/newspack-blocks/src/blocks/homepage-articles/view.js */\"./src/blocks/homepage-articles/view.js\");\n\n\n//# sourceURL=webpack:///multi_./src/setup/view_./src/blocks/homepage-articles/view.js?");

/***/ })

/******/ })));