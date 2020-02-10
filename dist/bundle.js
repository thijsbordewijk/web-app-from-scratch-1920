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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _js_modules_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../js/modules/api.js */ \"./docs/js/modules/api.js\");\n/* harmony import */ var _js_modules_render_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../js/modules/render.js */ \"./docs/js/modules/render.js\");\n\r\n\r\n\r\n//onderstaande code zorgt ervoor dat de data pas ingeladen wordt zodra de fetch is afgelopen\r\n\r\napp()\r\nasync function app() {\r\n    let data = await Object(_js_modules_api_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])()\r\n    console.log(data)\r\n    Object(_js_modules_render_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(data)\r\n}\r\n \r\n\r\n\r\n// to push: (git add .) > (git commit -m \"message\") > (git push)\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9kb2NzL2pzL21haW4uanM/MDg2YiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBdUM7QUFDSzs7QUFFNUM7O0FBRUE7QUFDQTtBQUNBLHFCQUFxQixrRUFBRztBQUN4QjtBQUNBLElBQUkscUVBQU07QUFDVjs7OztBQUlBIiwiZmlsZSI6Ii4vZG9jcy9qcy9tYWluLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGFwaSBmcm9tIFwiLi4vanMvbW9kdWxlcy9hcGkuanNcIjtcclxuaW1wb3J0IHJlbmRlciBmcm9tIFwiLi4vanMvbW9kdWxlcy9yZW5kZXIuanNcIlxyXG5cclxuLy9vbmRlcnN0YWFuZGUgY29kZSB6b3JndCBlcnZvb3IgZGF0IGRlIGRhdGEgcGFzIGluZ2VsYWRlbiB3b3JkdCB6b2RyYSBkZSBmZXRjaCBpcyBhZmdlbG9wZW5cclxuXHJcbmFwcCgpXHJcbmFzeW5jIGZ1bmN0aW9uIGFwcCgpIHtcclxuICAgIGxldCBkYXRhID0gYXdhaXQgYXBpKClcclxuICAgIGNvbnNvbGUubG9nKGRhdGEpXHJcbiAgICByZW5kZXIoZGF0YSlcclxufVxyXG4gXHJcblxyXG5cclxuLy8gdG8gcHVzaDogKGdpdCBhZGQgLikgPiAoZ2l0IGNvbW1pdCAtbSBcIm1lc3NhZ2VcIikgPiAoZ2l0IHB1c2gpXHJcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./docs/js/main.js\n");

/***/ }),

/***/ "./docs/js/modules/api.js":
/*!********************************!*\
  !*** ./docs/js/modules/api.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n//fetch code\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (async() => {\r\n   \r\nconst url = 'https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/f7728ea8db68a12bfc3c597a2d5cc1bb/37.8267,-122.4233';\r\n\r\nlet data = await fetch(url)\r\n.then((response) => {\r\n  return response.json();\r\n})\r\n\r\n.then((myJson) => {\r\n    console.table(myJson);\r\n    return myJson;\r\n});\r\nreturn data\r\n});\r\n\r\n\r\n// to push: (git add .) > (git commit -m \"message\") //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9kb2NzL2pzL21vZHVsZXMvYXBpLmpzPzUwMTYiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTs7QUFFZTs7QUFFZjs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBLENBQUM7OztBQUdEIiwiZmlsZSI6Ii4vZG9jcy9qcy9tb2R1bGVzL2FwaS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vZmV0Y2ggY29kZVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgYXN5bmMoKSA9PiB7XHJcbiAgIFxyXG5jb25zdCB1cmwgPSAnaHR0cHM6Ly9jb3JzLWFueXdoZXJlLmhlcm9rdWFwcC5jb20vaHR0cHM6Ly9hcGkuZGFya3NreS5uZXQvZm9yZWNhc3QvZjc3MjhlYThkYjY4YTEyYmZjM2M1OTdhMmQ1Y2MxYmIvMzcuODI2NywtMTIyLjQyMzMnO1xyXG5cclxubGV0IGRhdGEgPSBhd2FpdCBmZXRjaCh1cmwpXHJcbi50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gIHJldHVybiByZXNwb25zZS5qc29uKCk7XHJcbn0pXHJcblxyXG4udGhlbigobXlKc29uKSA9PiB7XHJcbiAgICBjb25zb2xlLnRhYmxlKG15SnNvbik7XHJcbiAgICByZXR1cm4gbXlKc29uO1xyXG59KTtcclxucmV0dXJuIGRhdGFcclxufVxyXG5cclxuXHJcbi8vIHRvIHB1c2g6IChnaXQgYWRkIC4pID4gKGdpdCBjb21taXQgLW0gXCJtZXNzYWdlXCIpICJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./docs/js/modules/api.js\n");

/***/ }),

/***/ "./docs/js/modules/render.js":
/*!***********************************!*\
  !*** ./docs/js/modules/render.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ((weatherData) => {\r\n\r\n// Hier wordt de opgehaalde data uitgekozen en in HTML gezet, deze wordt vervolgens in een section in de html code geplaatst\r\n\r\nconst currContainer = document.getElementById('currentContent');\r\nvar currentMarkup = \r\n`  <section>\r\n    <article><p>The weather forecast is:</p><h2>${weatherData.currently.summary}</h2></article>\r\n    <article><p>The temperature is:</p><h2>${weatherData.currently.temperature}</h2></article>\r\n    <article><p>The windspeed is:</p><h2>${weatherData.currently.windSpeed}</h2></article>\r\n    <article><p>The chance of rain is:</p><h2>${weatherData.currently.precipProbability}</h2>\r\n  </section> `\r\ncurrContainer.insertAdjacentHTML('beforeend', currentMarkup);\r\n\r\nconst hourContainer = document.getElementById('hourlyContent');\r\nvar hourlyMarkup = \r\n`  <section>\r\n    <article><p>The weather forecast is:</p><h2>${weatherData.minutely.summary}</h2></article>\r\n    <article><p>The temperature is:</p><h2>${weatherData.minutely.temperature}</h2></article>\r\n    <article><p>The windspeed is:</p><h2>${weatherData.minutely.windSpeed}</h2></article>\r\n    <article><p>The chance of rain is:</p><h2>${weatherData.currently.precipProbability}</h2>\r\n  </section> `\r\nhourContainer.insertAdjacentHTML('beforeend', hourlyMarkup);\r\n\r\nconst dailyContainer = document.getElementById('dailyContent');\r\nvar dailyMarkup = \r\n`  <section>\r\n    <article><p>The weather forecast today is:</p><h2>${weatherData.hourly.summary}</h2></article>\r\n    <article><p>The temperature is:</p><h2>${weatherData.hourly.temperature}</h2></article>\r\n    <article><p>The windspeed is:</p><h2>${weatherData.hourly.windSpeed}</h2></article>\r\n    <article><p>The chance of rain is:</p><h2>${weatherData.currently.precipProbability}</h2>\r\n  </section> `\r\ndailyContainer.insertAdjacentHTML('beforeend', dailyMarkup);\r\n\r\nconst weekContainer = document.getElementById('weeklyContent');\r\nvar weeklyMarkup = \r\n`  <section>\r\n    <article><p>The weather forecast this week is:</p><h2>${weatherData.daily.summary}</h2></article>\r\n    <article><p>The temperature is:</p><h2>${weatherData.daily.temperature}</h2></article>\r\n    <article><p>The windspeed is:</p><h2>${weatherData.daily.windSpeed}</h2></article>\r\n    <article><p>The chance of rain is:</p><h2>${weatherData.currently.precipProbability}</h2>\r\n  </section> `\r\nweekContainer.insertAdjacentHTML('beforeend', weeklyMarkup);\r\n\r\n});\r\n\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9kb2NzL2pzL21vZHVsZXMvcmVuZGVyLmpzPzhkMDciXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFBYzs7QUFFZDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBa0QsOEJBQThCO0FBQ2hGLDZDQUE2QyxrQ0FBa0M7QUFDL0UsMkNBQTJDLGdDQUFnQztBQUMzRSxnREFBZ0Qsd0NBQXdDO0FBQ3hGO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQWtELDZCQUE2QjtBQUMvRSw2Q0FBNkMsaUNBQWlDO0FBQzlFLDJDQUEyQywrQkFBK0I7QUFDMUUsZ0RBQWdELHdDQUF3QztBQUN4RjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHdEQUF3RCwyQkFBMkI7QUFDbkYsNkNBQTZDLCtCQUErQjtBQUM1RSwyQ0FBMkMsNkJBQTZCO0FBQ3hFLGdEQUFnRCx3Q0FBd0M7QUFDeEY7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSw0REFBNEQsMEJBQTBCO0FBQ3RGLDZDQUE2Qyw4QkFBOEI7QUFDM0UsMkNBQTJDLDRCQUE0QjtBQUN2RSxnREFBZ0Qsd0NBQXdDO0FBQ3hGO0FBQ0E7O0FBRUEsQ0FBQyIsImZpbGUiOiIuL2RvY3MvanMvbW9kdWxlcy9yZW5kZXIuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCh3ZWF0aGVyRGF0YSkgPT4ge1xyXG5cclxuLy8gSGllciB3b3JkdCBkZSBvcGdlaGFhbGRlIGRhdGEgdWl0Z2Vrb3plbiBlbiBpbiBIVE1MIGdlemV0LCBkZXplIHdvcmR0IHZlcnZvbGdlbnMgaW4gZWVuIHNlY3Rpb24gaW4gZGUgaHRtbCBjb2RlIGdlcGxhYXRzdFxyXG5cclxuY29uc3QgY3VyckNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjdXJyZW50Q29udGVudCcpO1xyXG52YXIgY3VycmVudE1hcmt1cCA9IFxyXG5gICA8c2VjdGlvbj5cclxuICAgIDxhcnRpY2xlPjxwPlRoZSB3ZWF0aGVyIGZvcmVjYXN0IGlzOjwvcD48aDI+JHt3ZWF0aGVyRGF0YS5jdXJyZW50bHkuc3VtbWFyeX08L2gyPjwvYXJ0aWNsZT5cclxuICAgIDxhcnRpY2xlPjxwPlRoZSB0ZW1wZXJhdHVyZSBpczo8L3A+PGgyPiR7d2VhdGhlckRhdGEuY3VycmVudGx5LnRlbXBlcmF0dXJlfTwvaDI+PC9hcnRpY2xlPlxyXG4gICAgPGFydGljbGU+PHA+VGhlIHdpbmRzcGVlZCBpczo8L3A+PGgyPiR7d2VhdGhlckRhdGEuY3VycmVudGx5LndpbmRTcGVlZH08L2gyPjwvYXJ0aWNsZT5cclxuICAgIDxhcnRpY2xlPjxwPlRoZSBjaGFuY2Ugb2YgcmFpbiBpczo8L3A+PGgyPiR7d2VhdGhlckRhdGEuY3VycmVudGx5LnByZWNpcFByb2JhYmlsaXR5fTwvaDI+XHJcbiAgPC9zZWN0aW9uPiBgXHJcbmN1cnJDb250YWluZXIuaW5zZXJ0QWRqYWNlbnRIVE1MKCdiZWZvcmVlbmQnLCBjdXJyZW50TWFya3VwKTtcclxuXHJcbmNvbnN0IGhvdXJDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaG91cmx5Q29udGVudCcpO1xyXG52YXIgaG91cmx5TWFya3VwID0gXHJcbmAgIDxzZWN0aW9uPlxyXG4gICAgPGFydGljbGU+PHA+VGhlIHdlYXRoZXIgZm9yZWNhc3QgaXM6PC9wPjxoMj4ke3dlYXRoZXJEYXRhLm1pbnV0ZWx5LnN1bW1hcnl9PC9oMj48L2FydGljbGU+XHJcbiAgICA8YXJ0aWNsZT48cD5UaGUgdGVtcGVyYXR1cmUgaXM6PC9wPjxoMj4ke3dlYXRoZXJEYXRhLm1pbnV0ZWx5LnRlbXBlcmF0dXJlfTwvaDI+PC9hcnRpY2xlPlxyXG4gICAgPGFydGljbGU+PHA+VGhlIHdpbmRzcGVlZCBpczo8L3A+PGgyPiR7d2VhdGhlckRhdGEubWludXRlbHkud2luZFNwZWVkfTwvaDI+PC9hcnRpY2xlPlxyXG4gICAgPGFydGljbGU+PHA+VGhlIGNoYW5jZSBvZiByYWluIGlzOjwvcD48aDI+JHt3ZWF0aGVyRGF0YS5jdXJyZW50bHkucHJlY2lwUHJvYmFiaWxpdHl9PC9oMj5cclxuICA8L3NlY3Rpb24+IGBcclxuaG91ckNvbnRhaW5lci5pbnNlcnRBZGphY2VudEhUTUwoJ2JlZm9yZWVuZCcsIGhvdXJseU1hcmt1cCk7XHJcblxyXG5jb25zdCBkYWlseUNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkYWlseUNvbnRlbnQnKTtcclxudmFyIGRhaWx5TWFya3VwID0gXHJcbmAgIDxzZWN0aW9uPlxyXG4gICAgPGFydGljbGU+PHA+VGhlIHdlYXRoZXIgZm9yZWNhc3QgdG9kYXkgaXM6PC9wPjxoMj4ke3dlYXRoZXJEYXRhLmhvdXJseS5zdW1tYXJ5fTwvaDI+PC9hcnRpY2xlPlxyXG4gICAgPGFydGljbGU+PHA+VGhlIHRlbXBlcmF0dXJlIGlzOjwvcD48aDI+JHt3ZWF0aGVyRGF0YS5ob3VybHkudGVtcGVyYXR1cmV9PC9oMj48L2FydGljbGU+XHJcbiAgICA8YXJ0aWNsZT48cD5UaGUgd2luZHNwZWVkIGlzOjwvcD48aDI+JHt3ZWF0aGVyRGF0YS5ob3VybHkud2luZFNwZWVkfTwvaDI+PC9hcnRpY2xlPlxyXG4gICAgPGFydGljbGU+PHA+VGhlIGNoYW5jZSBvZiByYWluIGlzOjwvcD48aDI+JHt3ZWF0aGVyRGF0YS5jdXJyZW50bHkucHJlY2lwUHJvYmFiaWxpdHl9PC9oMj5cclxuICA8L3NlY3Rpb24+IGBcclxuZGFpbHlDb250YWluZXIuaW5zZXJ0QWRqYWNlbnRIVE1MKCdiZWZvcmVlbmQnLCBkYWlseU1hcmt1cCk7XHJcblxyXG5jb25zdCB3ZWVrQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3dlZWtseUNvbnRlbnQnKTtcclxudmFyIHdlZWtseU1hcmt1cCA9IFxyXG5gICA8c2VjdGlvbj5cclxuICAgIDxhcnRpY2xlPjxwPlRoZSB3ZWF0aGVyIGZvcmVjYXN0IHRoaXMgd2VlayBpczo8L3A+PGgyPiR7d2VhdGhlckRhdGEuZGFpbHkuc3VtbWFyeX08L2gyPjwvYXJ0aWNsZT5cclxuICAgIDxhcnRpY2xlPjxwPlRoZSB0ZW1wZXJhdHVyZSBpczo8L3A+PGgyPiR7d2VhdGhlckRhdGEuZGFpbHkudGVtcGVyYXR1cmV9PC9oMj48L2FydGljbGU+XHJcbiAgICA8YXJ0aWNsZT48cD5UaGUgd2luZHNwZWVkIGlzOjwvcD48aDI+JHt3ZWF0aGVyRGF0YS5kYWlseS53aW5kU3BlZWR9PC9oMj48L2FydGljbGU+XHJcbiAgICA8YXJ0aWNsZT48cD5UaGUgY2hhbmNlIG9mIHJhaW4gaXM6PC9wPjxoMj4ke3dlYXRoZXJEYXRhLmN1cnJlbnRseS5wcmVjaXBQcm9iYWJpbGl0eX08L2gyPlxyXG4gIDwvc2VjdGlvbj4gYFxyXG53ZWVrQ29udGFpbmVyLmluc2VydEFkamFjZW50SFRNTCgnYmVmb3JlZW5kJywgd2Vla2x5TWFya3VwKTtcclxuXHJcbn1cclxuXHJcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./docs/js/modules/render.js\n");

/***/ })

/******/ });