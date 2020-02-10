/******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./docs/js/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./docs/js/main.js":
/*!*************************!*\
  !*** ./docs/js/main.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _js_modules_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../js/modules/api.js */ \"./docs/js/modules/api.js\");\n/* harmony import */ var _js_modules_render_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../js/modules/render.js */ \"./docs/js/modules/render.js\");\n\r\n\r\n\r\napp()\r\nasync function app() {\r\n    let data = await Object(_js_modules_api_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])()\r\n    console.log(data)\r\n    Object(_js_modules_render_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(data)\r\n}\r\n\r\n\r\n// to push: (git add .) > (git commit -m \"message\") \r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9kb2NzL2pzL21haW4uanM/MDg2YiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBdUM7QUFDSzs7QUFFNUM7QUFDQTtBQUNBLHFCQUFxQixrRUFBRztBQUN4QjtBQUNBLElBQUkscUVBQU07QUFDVjs7O0FBR0EiLCJmaWxlIjoiLi9kb2NzL2pzL21haW4uanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXBpIGZyb20gXCIuLi9qcy9tb2R1bGVzL2FwaS5qc1wiO1xyXG5pbXBvcnQgcmVuZGVyIGZyb20gXCIuLi9qcy9tb2R1bGVzL3JlbmRlci5qc1wiXHJcblxyXG5hcHAoKVxyXG5hc3luYyBmdW5jdGlvbiBhcHAoKSB7XHJcbiAgICBsZXQgZGF0YSA9IGF3YWl0IGFwaSgpXHJcbiAgICBjb25zb2xlLmxvZyhkYXRhKVxyXG4gICAgcmVuZGVyKGRhdGEpXHJcbn1cclxuXHJcblxyXG4vLyB0byBwdXNoOiAoZ2l0IGFkZCAuKSA+IChnaXQgY29tbWl0IC1tIFwibWVzc2FnZVwiKSBcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./docs/js/main.js\n");

/***/ }),

/***/ "./docs/js/modules/api.js":
/*!********************************!*\
  !*** ./docs/js/modules/api.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (async() => {\r\n   \r\nconst url = 'https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/f7728ea8db68a12bfc3c597a2d5cc1bb/37.8267,-122.4233';\r\n\r\nlet data = await fetch(url)\r\n.then((response) => {\r\n  return response.json();\r\n})\r\n\r\n.then((myJson) => {\r\n    console.table(myJson);\r\n    return myJson;\r\n});\r\nreturn data\r\n});\r\n\r\n\r\n// to push: (git add .) > (git commit -m \"message\") //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9kb2NzL2pzL21vZHVsZXMvYXBpLmpzPzUwMTYiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFBZTs7QUFFZjs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBLENBQUM7OztBQUdEIiwiZmlsZSI6Ii4vZG9jcy9qcy9tb2R1bGVzL2FwaS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGFzeW5jKCkgPT4ge1xyXG4gICBcclxuY29uc3QgdXJsID0gJ2h0dHBzOi8vY29ycy1hbnl3aGVyZS5oZXJva3VhcHAuY29tL2h0dHBzOi8vYXBpLmRhcmtza3kubmV0L2ZvcmVjYXN0L2Y3NzI4ZWE4ZGI2OGExMmJmYzNjNTk3YTJkNWNjMWJiLzM3LjgyNjcsLTEyMi40MjMzJztcclxuXHJcbmxldCBkYXRhID0gYXdhaXQgZmV0Y2godXJsKVxyXG4udGhlbigocmVzcG9uc2UpID0+IHtcclxuICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xyXG59KVxyXG5cclxuLnRoZW4oKG15SnNvbikgPT4ge1xyXG4gICAgY29uc29sZS50YWJsZShteUpzb24pO1xyXG4gICAgcmV0dXJuIG15SnNvbjtcclxufSk7XHJcbnJldHVybiBkYXRhXHJcbn1cclxuXHJcblxyXG4vLyB0byBwdXNoOiAoZ2l0IGFkZCAuKSA+IChnaXQgY29tbWl0IC1tIFwibWVzc2FnZVwiKSAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./docs/js/modules/api.js\n");

/***/ }),

/***/ "./docs/js/modules/render.js":
/*!***********************************!*\
  !*** ./docs/js/modules/render.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ((weatherData) => {\r\n\r\nconst minContainer = document.getElementById('mainContent');\r\n  var markup = \r\n    `\r\n    <section>\r\n      <article>${weatherData.timezone}</article>\r\n      <article>${weatherData.currently.summary}</article>\r\n      <article></article>\r\n    </section>\r\n    `\r\n  minContainer.insertAdjacentHTML('beforeend', markup);\r\n});\r\n\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9kb2NzL2pzL21vZHVsZXMvcmVuZGVyLmpzPzhkMDciXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFBYzs7QUFFZDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQixxQkFBcUI7QUFDdEMsaUJBQWlCLDhCQUE4QjtBQUMvQztBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMiLCJmaWxlIjoiLi9kb2NzL2pzL21vZHVsZXMvcmVuZGVyLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQod2VhdGhlckRhdGEpID0+IHtcclxuXHJcbmNvbnN0IG1pbkNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYWluQ29udGVudCcpO1xyXG4gIHZhciBtYXJrdXAgPSBcclxuICAgIGBcclxuICAgIDxzZWN0aW9uPlxyXG4gICAgICA8YXJ0aWNsZT4ke3dlYXRoZXJEYXRhLnRpbWV6b25lfTwvYXJ0aWNsZT5cclxuICAgICAgPGFydGljbGU+JHt3ZWF0aGVyRGF0YS5jdXJyZW50bHkuc3VtbWFyeX08L2FydGljbGU+XHJcbiAgICAgIDxhcnRpY2xlPjwvYXJ0aWNsZT5cclxuICAgIDwvc2VjdGlvbj5cclxuICAgIGBcclxuICBtaW5Db250YWluZXIuaW5zZXJ0QWRqYWNlbnRIVE1MKCdiZWZvcmVlbmQnLCBtYXJrdXApO1xyXG59XHJcblxyXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./docs/js/modules/render.js\n");

/***/ })

/******/ });