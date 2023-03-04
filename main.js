/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("function getDataFromForm() {\n    // const cityName = 'pirongia';\n    const input = document.querySelector('.search-box-input');\n    const cityName = input.value;\n  \n    // if not an empty string\n    if (cityName) {\n      // remove whitespace for the api call\n  \n      return cityName\n        .replace(/(\\s+$|^\\s+)/g, '') // remove whitespace from begining and end of string\n        .replace(/(,\\s+)/g, ',') // remove any white space that follows a comma\n        .replace(/(\\s+,)/g, ',') // remove any white space that preceeds a comma\n        .replace(/\\s+/g, '+'); // replace any remaining white space with +, so it works in api call\n    }\n    return '';\n  }\n  \n\n\nasync function getWeatherData(location){\n    const response = await fetch('http://api.weatherapi.com/v1/forecast.json?key=1f2a375bcd444a9e917183403230403=${location}', {mode:'cors'});\n    const weatherData = await response.json();\n    console.log(weatherData)\n}\nfunction handleInput(){\n    const city = document.querySelector('input');\n    const location = city.value;\n    getWeatherData(location)\n}\n\n//# sourceURL=webpack://weather-app/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;