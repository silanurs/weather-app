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

eval("const form = document.querySelector('form');\nconst submit = document.querySelector('button[type=submit]');\nform.addEventListener('submit', (e)=> {e.preventDefault()});\nsubmit.addEventListener('click', handleInput)\nasync function getWeatherData(location){\ntry{\n    const response = await fetch(`http://api.weatherapi.com/v1/current.json?key=1f2a375bcd444a9e917183403230403&q=${location}`, {mode:'cors'});\n    const weatherData = await response.json();\n    console.log(weatherData)\n    displayWeatherData(weatherData);\n}\ncatch(error){\n    window.alert(error.message)\n}\n}\nfunction displayWeatherData(newData){\n    document.querySelector('.condition').textContent= newData.current.condition.text;\n    document.querySelector('.city').textContent = newData.location.name + \" ,\";\n    document.querySelector('.country').textContent = newData.location.country;\n    document.querySelector('.degree').innerHTML= Math.round(newData.current.temp_c) + \"&#8451;\";\n    document.querySelector('.feels-like-c').innerHTML = Math.round(newData.current.feelslike_c) + \"&#8451;\";\n    document.querySelector('.humidity').textContent = newData.current.humidity + \"%\";\n    document.querySelector('.wind').textContent = newData.current.wind_mph + \"mph\";\n}\nfunction handleInput(){\n    const city = document.querySelector('.input');\n    const cityName = city.value;\n    getWeatherData(cityName);\n    form.reset()\n}\n\n//# sourceURL=webpack://weather-app/./src/index.js?");

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