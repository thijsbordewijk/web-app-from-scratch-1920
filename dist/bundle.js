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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _js_modules_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../js/modules/api.js */ \"./docs/js/modules/api.js\");\n/* harmony import */ var _js_modules_render_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../js/modules/render.js */ \"./docs/js/modules/render.js\");\n\r\n\r\n\r\n//onderstaande code zorgt ervoor dat de data pas ingeladen wordt zodra de fetch is afgelopen\r\n\r\napp()\r\nasync function app() {\r\n    let data = await Object(_js_modules_api_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])()\r\n    console.log(data)\r\n    Object(_js_modules_render_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(data)\r\n}\r\n \r\n// to use live preview: npm run watch\r\n// to push: (git add .) > (git commit -m \"message\") > (git push)\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9kb2NzL2pzL21haW4uanM/MDg2YiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBdUM7QUFDSzs7QUFFNUM7O0FBRUE7QUFDQTtBQUNBLHFCQUFxQixrRUFBRztBQUN4QjtBQUNBLElBQUkscUVBQU07QUFDVjs7QUFFQTtBQUNBIiwiZmlsZSI6Ii4vZG9jcy9qcy9tYWluLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGFwaSBmcm9tIFwiLi4vanMvbW9kdWxlcy9hcGkuanNcIjtcclxuaW1wb3J0IHJlbmRlciBmcm9tIFwiLi4vanMvbW9kdWxlcy9yZW5kZXIuanNcIlxyXG5cclxuLy9vbmRlcnN0YWFuZGUgY29kZSB6b3JndCBlcnZvb3IgZGF0IGRlIGRhdGEgcGFzIGluZ2VsYWRlbiB3b3JkdCB6b2RyYSBkZSBmZXRjaCBpcyBhZmdlbG9wZW5cclxuXHJcbmFwcCgpXHJcbmFzeW5jIGZ1bmN0aW9uIGFwcCgpIHtcclxuICAgIGxldCBkYXRhID0gYXdhaXQgYXBpKClcclxuICAgIGNvbnNvbGUubG9nKGRhdGEpXHJcbiAgICByZW5kZXIoZGF0YSlcclxufVxyXG4gXHJcbi8vIHRvIHVzZSBsaXZlIHByZXZpZXc6IG5wbSBydW4gd2F0Y2hcclxuLy8gdG8gcHVzaDogKGdpdCBhZGQgLikgPiAoZ2l0IGNvbW1pdCAtbSBcIm1lc3NhZ2VcIikgPiAoZ2l0IHB1c2gpXHJcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./docs/js/main.js\n");

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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ((weatherData) => {\r\n\r\n//for loops to find the average temperatures and average wind speeds\r\n\r\nvar hourlyArray = weatherData.hourly.data;\r\nvar dailyArray = weatherData.daily.data;\r\nvar totalHourlytemp = 0;\r\nvar totalDailytemp = 0;\r\nvar totalHourlywind = 0;\r\nvar totalDailywind = 0;\r\n\r\n\r\nvar i;\r\nfor(i=0; i < hourlyArray.length; i++) {\r\n  totalHourlytemp += hourlyArray[i].temperature;\r\n}\r\nvar actualHourlytemp = (totalHourlytemp / hourlyArray.length);\r\n\r\nvar x;\r\nfor(x=0; x < dailyArray.length; x++) {\r\n  var averageDaytemp = (dailyArray[x].temperatureLow += dailyArray[x].temperatureHigh) / 2\r\n  totalDailytemp += averageDaytemp;\r\n}\r\nvar actualDailytemp = (totalDailytemp / dailyArray.length);\r\n\r\nvar w;\r\nfor(w=0; w < hourlyArray.length; w++) {\r\n  totalHourlywind += hourlyArray[w].windSpeed;\r\n}\r\nvar actualHourlywind = (totalHourlywind / hourlyArray.length);\r\n\r\nvar y;\r\nfor(y=0; y < dailyArray.length; y++) {\r\n  totalDailywind +=  dailyArray[y].windSpeed;\r\n}\r\nvar actualDailywind = (totalDailywind / dailyArray.length);\r\n\r\n// end loops\r\n\r\n// Hier wordt de opgehaalde data uitgekozen en in HTML gezet, deze wordt vervolgens in een section in de html code geplaatst\r\n\r\nconst currContainer = document.getElementById('currentContent');\r\nvar currentMarkup = \r\n`  <section>\r\n    <article><p>The weather forecast is:</p><h2>${weatherData.currently.summary}</h2></article>\r\n    <article><p>The temperature is:</p><h2>${weatherData.currently.temperature}</h2></article>\r\n    <article><p>The windspeed is:</p><h2>${weatherData.currently.windSpeed}</h2></article>\r\n    <article><p>The chance of rain is:</p><h2>${weatherData.currently.precipProbability}</h2></article>\r\n  </section> `\r\ncurrContainer.insertAdjacentHTML('beforeend', currentMarkup);\r\n\r\nconst dailyContainer = document.getElementById('dailyContent');\r\nvar dailyMarkup = \r\n`  <section>\r\n    <article><p>The weather forecast today is:</p><h2>${weatherData.hourly.summary}</h2></article>\r\n    <article><p>The average temperature is:</p><h2>${Math.round(actualHourlytemp)}</h2></article>\r\n    <article><p>The average windspeed is:</p><h2>${Math.round(actualHourlywind)}</h2></article>\r\n    <article><p>The chance of rain is:</p><h2>${weatherData.currently.precipProbability}</h2></article>\r\n  </section> `\r\ndailyContainer.insertAdjacentHTML('beforeend', dailyMarkup);\r\n\r\nconst weekContainer = document.getElementById('weeklyContent');\r\nvar weeklyMarkup = \r\n`  <section>\r\n    <article><p>The weather forecast this week is:</p><h2>${weatherData.daily.summary}</h2></article>\r\n    <article><p>The average temperature is:</p><h2>${Math.round(actualDailytemp)}</h2></article>\r\n    <article><p>The average windspeed is:</p><h2>${Math.round(actualDailywind)}</h2></article>\r\n    <article><p>The daily chance of rain is:</p><h2>${weatherData.currently.precipProbability}</h2></article>\r\n  </section> `\r\nweekContainer.insertAdjacentHTML('beforeend', weeklyMarkup);\r\n\r\n});\r\n\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9kb2NzL2pzL21vZHVsZXMvcmVuZGVyLmpzPzhkMDciXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFBYzs7QUFFZDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0EsUUFBUSx3QkFBd0I7QUFDaEM7QUFDQTtBQUNBOztBQUVBO0FBQ0EsUUFBUSx1QkFBdUI7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxRQUFRLHdCQUF3QjtBQUNoQztBQUNBO0FBQ0E7O0FBRUE7QUFDQSxRQUFRLHVCQUF1QjtBQUMvQjtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQWtELDhCQUE4QjtBQUNoRiw2Q0FBNkMsa0NBQWtDO0FBQy9FLDJDQUEyQyxnQ0FBZ0M7QUFDM0UsZ0RBQWdELHdDQUF3QztBQUN4RjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHdEQUF3RCwyQkFBMkI7QUFDbkYscURBQXFELDZCQUE2QjtBQUNsRixtREFBbUQsNkJBQTZCO0FBQ2hGLGdEQUFnRCx3Q0FBd0M7QUFDeEY7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSw0REFBNEQsMEJBQTBCO0FBQ3RGLHFEQUFxRCw0QkFBNEI7QUFDakYsbURBQW1ELDRCQUE0QjtBQUMvRSxzREFBc0Qsd0NBQXdDO0FBQzlGO0FBQ0E7O0FBRUEsQ0FBQyIsImZpbGUiOiIuL2RvY3MvanMvbW9kdWxlcy9yZW5kZXIuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCh3ZWF0aGVyRGF0YSkgPT4ge1xyXG5cclxuLy9mb3IgbG9vcHMgdG8gZmluZCB0aGUgYXZlcmFnZSB0ZW1wZXJhdHVyZXMgYW5kIGF2ZXJhZ2Ugd2luZCBzcGVlZHNcclxuXHJcbnZhciBob3VybHlBcnJheSA9IHdlYXRoZXJEYXRhLmhvdXJseS5kYXRhO1xyXG52YXIgZGFpbHlBcnJheSA9IHdlYXRoZXJEYXRhLmRhaWx5LmRhdGE7XHJcbnZhciB0b3RhbEhvdXJseXRlbXAgPSAwO1xyXG52YXIgdG90YWxEYWlseXRlbXAgPSAwO1xyXG52YXIgdG90YWxIb3VybHl3aW5kID0gMDtcclxudmFyIHRvdGFsRGFpbHl3aW5kID0gMDtcclxuXHJcblxyXG52YXIgaTtcclxuZm9yKGk9MDsgaSA8IGhvdXJseUFycmF5Lmxlbmd0aDsgaSsrKSB7XHJcbiAgdG90YWxIb3VybHl0ZW1wICs9IGhvdXJseUFycmF5W2ldLnRlbXBlcmF0dXJlO1xyXG59XHJcbnZhciBhY3R1YWxIb3VybHl0ZW1wID0gKHRvdGFsSG91cmx5dGVtcCAvIGhvdXJseUFycmF5Lmxlbmd0aCk7XHJcblxyXG52YXIgeDtcclxuZm9yKHg9MDsgeCA8IGRhaWx5QXJyYXkubGVuZ3RoOyB4KyspIHtcclxuICB2YXIgYXZlcmFnZURheXRlbXAgPSAoZGFpbHlBcnJheVt4XS50ZW1wZXJhdHVyZUxvdyArPSBkYWlseUFycmF5W3hdLnRlbXBlcmF0dXJlSGlnaCkgLyAyXHJcbiAgdG90YWxEYWlseXRlbXAgKz0gYXZlcmFnZURheXRlbXA7XHJcbn1cclxudmFyIGFjdHVhbERhaWx5dGVtcCA9ICh0b3RhbERhaWx5dGVtcCAvIGRhaWx5QXJyYXkubGVuZ3RoKTtcclxuXHJcbnZhciB3O1xyXG5mb3Iodz0wOyB3IDwgaG91cmx5QXJyYXkubGVuZ3RoOyB3KyspIHtcclxuICB0b3RhbEhvdXJseXdpbmQgKz0gaG91cmx5QXJyYXlbd10ud2luZFNwZWVkO1xyXG59XHJcbnZhciBhY3R1YWxIb3VybHl3aW5kID0gKHRvdGFsSG91cmx5d2luZCAvIGhvdXJseUFycmF5Lmxlbmd0aCk7XHJcblxyXG52YXIgeTtcclxuZm9yKHk9MDsgeSA8IGRhaWx5QXJyYXkubGVuZ3RoOyB5KyspIHtcclxuICB0b3RhbERhaWx5d2luZCArPSAgZGFpbHlBcnJheVt5XS53aW5kU3BlZWQ7XHJcbn1cclxudmFyIGFjdHVhbERhaWx5d2luZCA9ICh0b3RhbERhaWx5d2luZCAvIGRhaWx5QXJyYXkubGVuZ3RoKTtcclxuXHJcbi8vIGVuZCBsb29wc1xyXG5cclxuLy8gSGllciB3b3JkdCBkZSBvcGdlaGFhbGRlIGRhdGEgdWl0Z2Vrb3plbiBlbiBpbiBIVE1MIGdlemV0LCBkZXplIHdvcmR0IHZlcnZvbGdlbnMgaW4gZWVuIHNlY3Rpb24gaW4gZGUgaHRtbCBjb2RlIGdlcGxhYXRzdFxyXG5cclxuY29uc3QgY3VyckNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjdXJyZW50Q29udGVudCcpO1xyXG52YXIgY3VycmVudE1hcmt1cCA9IFxyXG5gICA8c2VjdGlvbj5cclxuICAgIDxhcnRpY2xlPjxwPlRoZSB3ZWF0aGVyIGZvcmVjYXN0IGlzOjwvcD48aDI+JHt3ZWF0aGVyRGF0YS5jdXJyZW50bHkuc3VtbWFyeX08L2gyPjwvYXJ0aWNsZT5cclxuICAgIDxhcnRpY2xlPjxwPlRoZSB0ZW1wZXJhdHVyZSBpczo8L3A+PGgyPiR7d2VhdGhlckRhdGEuY3VycmVudGx5LnRlbXBlcmF0dXJlfTwvaDI+PC9hcnRpY2xlPlxyXG4gICAgPGFydGljbGU+PHA+VGhlIHdpbmRzcGVlZCBpczo8L3A+PGgyPiR7d2VhdGhlckRhdGEuY3VycmVudGx5LndpbmRTcGVlZH08L2gyPjwvYXJ0aWNsZT5cclxuICAgIDxhcnRpY2xlPjxwPlRoZSBjaGFuY2Ugb2YgcmFpbiBpczo8L3A+PGgyPiR7d2VhdGhlckRhdGEuY3VycmVudGx5LnByZWNpcFByb2JhYmlsaXR5fTwvaDI+PC9hcnRpY2xlPlxyXG4gIDwvc2VjdGlvbj4gYFxyXG5jdXJyQ29udGFpbmVyLmluc2VydEFkamFjZW50SFRNTCgnYmVmb3JlZW5kJywgY3VycmVudE1hcmt1cCk7XHJcblxyXG5jb25zdCBkYWlseUNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkYWlseUNvbnRlbnQnKTtcclxudmFyIGRhaWx5TWFya3VwID0gXHJcbmAgIDxzZWN0aW9uPlxyXG4gICAgPGFydGljbGU+PHA+VGhlIHdlYXRoZXIgZm9yZWNhc3QgdG9kYXkgaXM6PC9wPjxoMj4ke3dlYXRoZXJEYXRhLmhvdXJseS5zdW1tYXJ5fTwvaDI+PC9hcnRpY2xlPlxyXG4gICAgPGFydGljbGU+PHA+VGhlIGF2ZXJhZ2UgdGVtcGVyYXR1cmUgaXM6PC9wPjxoMj4ke01hdGgucm91bmQoYWN0dWFsSG91cmx5dGVtcCl9PC9oMj48L2FydGljbGU+XHJcbiAgICA8YXJ0aWNsZT48cD5UaGUgYXZlcmFnZSB3aW5kc3BlZWQgaXM6PC9wPjxoMj4ke01hdGgucm91bmQoYWN0dWFsSG91cmx5d2luZCl9PC9oMj48L2FydGljbGU+XHJcbiAgICA8YXJ0aWNsZT48cD5UaGUgY2hhbmNlIG9mIHJhaW4gaXM6PC9wPjxoMj4ke3dlYXRoZXJEYXRhLmN1cnJlbnRseS5wcmVjaXBQcm9iYWJpbGl0eX08L2gyPjwvYXJ0aWNsZT5cclxuICA8L3NlY3Rpb24+IGBcclxuZGFpbHlDb250YWluZXIuaW5zZXJ0QWRqYWNlbnRIVE1MKCdiZWZvcmVlbmQnLCBkYWlseU1hcmt1cCk7XHJcblxyXG5jb25zdCB3ZWVrQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3dlZWtseUNvbnRlbnQnKTtcclxudmFyIHdlZWtseU1hcmt1cCA9IFxyXG5gICA8c2VjdGlvbj5cclxuICAgIDxhcnRpY2xlPjxwPlRoZSB3ZWF0aGVyIGZvcmVjYXN0IHRoaXMgd2VlayBpczo8L3A+PGgyPiR7d2VhdGhlckRhdGEuZGFpbHkuc3VtbWFyeX08L2gyPjwvYXJ0aWNsZT5cclxuICAgIDxhcnRpY2xlPjxwPlRoZSBhdmVyYWdlIHRlbXBlcmF0dXJlIGlzOjwvcD48aDI+JHtNYXRoLnJvdW5kKGFjdHVhbERhaWx5dGVtcCl9PC9oMj48L2FydGljbGU+XHJcbiAgICA8YXJ0aWNsZT48cD5UaGUgYXZlcmFnZSB3aW5kc3BlZWQgaXM6PC9wPjxoMj4ke01hdGgucm91bmQoYWN0dWFsRGFpbHl3aW5kKX08L2gyPjwvYXJ0aWNsZT5cclxuICAgIDxhcnRpY2xlPjxwPlRoZSBkYWlseSBjaGFuY2Ugb2YgcmFpbiBpczo8L3A+PGgyPiR7d2VhdGhlckRhdGEuY3VycmVudGx5LnByZWNpcFByb2JhYmlsaXR5fTwvaDI+PC9hcnRpY2xlPlxyXG4gIDwvc2VjdGlvbj4gYFxyXG53ZWVrQ29udGFpbmVyLmluc2VydEFkamFjZW50SFRNTCgnYmVmb3JlZW5kJywgd2Vla2x5TWFya3VwKTtcclxuXHJcbn1cclxuXHJcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./docs/js/modules/render.js\n");

/***/ })

/******/ });