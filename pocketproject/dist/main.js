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

/***/ "./src/clock.js":
/*!**********************!*\
  !*** ./src/clock.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Clock)\n/* harmony export */ });\n/* harmony import */ var _warmup_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./warmup.js */ \"./src/warmup.js\");\n\n\nclass Clock {\n    constructor() {\n        const timeNow = new Date();\n\n        this.hours = timeNow.getHours();\n        this.minutes = timeNow.getMinutes();\n        this.seconds = timeNow.getSeconds();\n\n        let clockEle = document.getElementById(\"clock\")\n        \n        let theDiv = (0,_warmup_js__WEBPACK_IMPORTED_MODULE_0__.htmlGenerator)(this.printTime(), clockEle);\n        this.el = Array.from( theDiv.children )[0];\n        setInterval(this._tick.bind(this), 1000)\n    }\n\n    _tick() {\n        this.seconds += 1;\n        if (this.seconds === 60) {\n            this.seconds = 0;\n            this.minutes += 1;\n        }\n        if (this.minutes === 60) {\n            this.minutes = 0;\n            this.hours += 1;\n        }\n        if (this.hours === 24){\n            this.hours = (this.hours + 1) % 24;\n        }\n        this.el.textContent = this.printTime();\n    }\n\n    stringify(val) {\n        if (val < 10) {\n            return `0${val}`;\n        } else {\n            return `${val}`\n        }\n    }\n\n    printTime() {\n        let str =  `${this.stringify(this.hours)}:${this.stringify(this.minutes)}:${this.stringify(this.seconds)}`;\n        \n        // ele.textContent = str;\n\n        return str;\n    }\n}\n\nnew Clock();\n\n//# sourceURL=webpack:///./src/clock.js?");

/***/ }),

/***/ "./src/drop_down.js":
/*!**************************!*\
  !*** ./src/drop_down.js ***!
  \**************************/
/***/ (() => {

eval("\nconst dogs = {\n  \"Corgi\": \"https://www.akc.org/dog-breeds/cardigan-welsh-corgi/\",\n  \"Australian Shepherd\": \"https://www.akc.org/dog-breeds/australian-shepherd/\",\n  \"Affenpinscher\": \"https://www.akc.org/dog-breeds/affenpinscher/\",\n  \"American Staffordshire Terrier\": \"https://www.akc.org/dog-breeds/american-staffordshire-terrier/\",\n  \"Tosa\": \"https://www.akc.org/dog-breeds/tosa/\",\n  \"Labrador Retriever\": \"https://www.akc.org/dog-breeds/labrador-retriever/\",\n  \"French Bulldog\": \"https://www.akc.org/dog-breeds/french-bulldog/\"\n};\n\nconst dogLinkCreator = () => {\n  let dogLinks = [];\n\n  for(let key in dogs) {\n    let atag = document.createElement('a');\n    atag.innerHTML = key;\n    atag.href = dogs[key];\n    console.log(atag);\n    let litag = document.createElement('li');\n    litag.classList.add('dog-link');\n    console.log(litag);\n    litag.appendChild(atag);\n\n    dogLinks.push(litag);\n  };\n  return dogLinks;\n};\n\nconst attachDogLinks = () => {\n  let dogLinks = dogLinkCreator();\n\n  let ul = document.querySelector('.drop-down-dog-list');\n  dogLinks.forEach((dogLink) => {\n    ul.appendChild(dogLink);\n  });\n};\n\nattachDogLinks();\n\nconst handleEnter = () => {\n  let dogLinks = document.querySelectorAll('.dog-link');\n  dogLinks.forEach((dog) => {\n    dog.classList.add('entered');\n  });\n};\n\nconst handleLeave = () => {\n  let dogLinks = document.querySelectorAll('.dog-link');\n  dogLinks.forEach((dog) => {\n    dog.classList.remove('entered');\n  });\n};\n\nlet nav = document.querySelector('.drop-down-dog-nav');\nnav.addEventListener('mouseenter', handleEnter);\nnav.addEventListener('mouseleave', handleLeave);\n\n\n//# sourceURL=webpack:///./src/drop_down.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _warmup__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./warmup */ \"./src/warmup.js\");\n/* harmony import */ var _clock__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./clock */ \"./src/clock.js\");\n/* harmony import */ var _drop_down__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./drop_down */ \"./src/drop_down.js\");\n/* harmony import */ var _drop_down__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_drop_down__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/warmup.js":
/*!***********************!*\
  !*** ./src/warmup.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"htmlGenerator\": () => (/* binding */ htmlGenerator)\n/* harmony export */ });\n\nconst partyHeader = document.getElementById('party');\n\nconst htmlGenerator = (string, htmlElement) => {\n    const paragraph = document.createElement(\"p\");\n    paragraph.textContent = string;\n    htmlElement.appendChild(paragraph);\n    return htmlElement;\n};\n\nhtmlGenerator('Welcome To the Pocket Project Marathon!', partyHeader);\n\n//# sourceURL=webpack:///./src/warmup.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;