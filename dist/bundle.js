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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _js_modules_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../js/modules/api.js */ \"./docs/js/modules/api.js\");\n/* harmony import */ var _js_modules_render_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../js/modules/render.js */ \"./docs/js/modules/render.js\");\n/* harmony import */ var _js_modules_render_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_js_modules_render_js__WEBPACK_IMPORTED_MODULE_1__);\n\r\n\r\n\r\n// to push: (git add .) > (git commit -m \"message\") \r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9kb2NzL2pzL21haW4uanM/MDg2YiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUF1QztBQUNLOztBQUU1QyIsImZpbGUiOiIuL2RvY3MvanMvbWFpbi5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBhcGkgZnJvbSBcIi4uL2pzL21vZHVsZXMvYXBpLmpzXCI7XHJcbmltcG9ydCByZW5kZXIgZnJvbSBcIi4uL2pzL21vZHVsZXMvcmVuZGVyLmpzXCJcclxuXHJcbi8vIHRvIHB1c2g6IChnaXQgYWRkIC4pID4gKGdpdCBjb21taXQgLW0gXCJtZXNzYWdlXCIpIFxyXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./docs/js/main.js\n");

/***/ }),

/***/ "./docs/js/modules/api.js":
/*!********************************!*\
  !*** ./docs/js/modules/api.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (() => {\r\n   \r\n    const url = 'https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/f7728ea8db68a12bfc3c597a2d5cc1bb/37.8267,-122.4233';\r\n\r\nfetch(url)\r\n.then((response) => {\r\n  return response.json();\r\n})\r\n\r\n.then((myJson) => {\r\n    console.table(myJson);\r\n    return \r\n});\r\n});\r\n\r\n\r\n// to push: (git add .) > (git commit -m \"message\") //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9kb2NzL2pzL21vZHVsZXMvYXBpLmpzPzUwMTYiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFBYzs7QUFFZDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxDQUFDOzs7QUFHRCIsImZpbGUiOiIuL2RvY3MvanMvbW9kdWxlcy9hcGkuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCgpID0+IHtcclxuICAgXHJcbiAgICBjb25zdCB1cmwgPSAnaHR0cHM6Ly9jb3JzLWFueXdoZXJlLmhlcm9rdWFwcC5jb20vaHR0cHM6Ly9hcGkuZGFya3NreS5uZXQvZm9yZWNhc3QvZjc3MjhlYThkYjY4YTEyYmZjM2M1OTdhMmQ1Y2MxYmIvMzcuODI2NywtMTIyLjQyMzMnO1xyXG5cclxuZmV0Y2godXJsKVxyXG4udGhlbigocmVzcG9uc2UpID0+IHtcclxuICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xyXG59KVxyXG5cclxuLnRoZW4oKG15SnNvbikgPT4ge1xyXG4gICAgY29uc29sZS50YWJsZShteUpzb24pO1xyXG4gICAgcmV0dXJuIFxyXG59KTtcclxufVxyXG5cclxuXHJcbi8vIHRvIHB1c2g6IChnaXQgYWRkIC4pID4gKGdpdCBjb21taXQgLW0gXCJtZXNzYWdlXCIpICJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./docs/js/modules/api.js\n");

/***/ }),

/***/ "./docs/js/modules/render.js":
/*!***********************************!*\
  !*** ./docs/js/modules/render.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const minContainer = document.getElementById('mainContent');\r\n\r\nfunction render(weatherData) {\r\n  console.log(weatherData)\r\n  var markup = `<h1>${weatherData.timezone}</h1>`\r\n  minContainer.insertAdjacentHTML('beforeend', markup);\r\n} \r\n\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9kb2NzL2pzL21vZHVsZXMvcmVuZGVyLmpzPzhkMDciXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0FBRUE7QUFDQTtBQUNBLHNCQUFzQixxQkFBcUI7QUFDM0M7QUFDQSxDIiwiZmlsZSI6Ii4vZG9jcy9qcy9tb2R1bGVzL3JlbmRlci5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IG1pbkNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYWluQ29udGVudCcpO1xyXG5cclxuZnVuY3Rpb24gcmVuZGVyKHdlYXRoZXJEYXRhKSB7XHJcbiAgY29uc29sZS5sb2cod2VhdGhlckRhdGEpXHJcbiAgdmFyIG1hcmt1cCA9IGA8aDE+JHt3ZWF0aGVyRGF0YS50aW1lem9uZX08L2gxPmBcclxuICBtaW5Db250YWluZXIuaW5zZXJ0QWRqYWNlbnRIVE1MKCdiZWZvcmVlbmQnLCBtYXJrdXApO1xyXG59IFxyXG5cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./docs/js/modules/render.js\n");

/***/ })

/******/ });