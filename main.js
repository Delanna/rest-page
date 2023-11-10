/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/contactTab":
/*!************************!*\
  !*** ./src/contactTab ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ contact)\n/* harmony export */ });\nfunction contact(){\n\n  const contentDiv = document.getElementById(\"content\");\n  contentDiv.classList.add(\"contact\");\n  contentDiv.innerHTML =  `\n  <div class=\"container\">\n  <h2>Home page images</h2>\n  <a href=\"https://www.flaticon.com/free-stickers/hourglass\" title=\"hourglass stickers\">Hourglass stickers created by Gohsantosadrive - Flaticon</a>\n\n  <a href=\"https://www.flaticon.com/free-stickers/paper\" title=\"paper stickers\">Paper stickers created by Design Circle - Flaticon</a>\n\n  <a href=\"https://www.flaticon.com/free-stickers/beach-bar\" title=\"beach bar stickers\">Beach bar stickers created by DinosoftLabs - Flaticon</a>\n  </div>\n  <div class=\"container\">\n    <h2>Contact Info</h2>\n    <h3>Email:</h3>\n    <p>notmadeup@Forreal.com</p>\n    <h3>Phone:</h3>\n    <p>784 4567890</p>\n  </div>\n  <div class=\"container\">\n    <h2>Menu page images</h2>\n    <p>Image by catalyststuff on Flaticon.com</p>\n  </div>  `\n}\n\n//# sourceURL=webpack://rest-page/./src/contactTab?");

/***/ }),

/***/ "./src/homeTab.js":
/*!************************!*\
  !*** ./src/homeTab.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ home)\n/* harmony export */ });\nfunction home(){\n\n  const contentDiv = document.getElementById(\"content\");\n  contentDiv.classList.add(\"home\");\n  contentDiv.innerHTML = `\n  <div class=\"container\">\n    <img src=\"./imgs/notes.png\" alt=\"a cute notepad illustration\">\n    <div class=\"card\">\n      <h2>Description</h2>\n      <p>We sell ver cute food meant to be looked at and photographed. Note that if you enter this restaurant starving you will be leaving famished, but your instagram will be one picture cuter!\n      </p>\n    </div>\n</div>\n<div class=\"container\">\n  <img src=\"imgs/sand-clock.png\" alt=\"a cute hourglass illustration\">\n  <div class=\"card\">\n    <h2>Hours</h2>\n    <h4>Monday - Friday</h4>\n    <p>9:00 am - 5:00 pm</p>\n    <h3>Saturday</h3>\n    <p>9:00 am - 10:00 pm</p>\n    <h4>Sunday</h4>\n    <p>Closed</p>\n  </div>\n</div>\n<div class=\"container\">\n  <img src=\"imgs/beach-bar.png\" alt=\"a cute beach bar illustration\">\n  <div class=\"card\">\n    <h2>Location</h2>\n    <h4>Arcadia Glade</h4>\n    <p>101 Snack Snapshot Street</p><br>\n    <p>Sugar Syntax City</p><br>\n    <p>JS 40410</p>\n  </div>`\n};\n\n//# sourceURL=webpack://rest-page/./src/homeTab.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _homeTab__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./homeTab */ \"./src/homeTab.js\");\n/* harmony import */ var _menuTab__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menuTab */ \"./src/menuTab\");\n/* harmony import */ var _contactTab__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contactTab */ \"./src/contactTab\");\n\n\n\n\ndisplayNav();\n\nfunction displayNav(){\n\n  const nav = document.getElementById(\"nav\");\n  // let content = document.getElementById(\"content\");\n\n  const homeTab = document.createElement(\"div\");\n    homeTab.id = \"home\";\n    homeTab.classList.add(\"tab\",\"active\");\n  const menuTab = document.createElement(\"div\");\n    menuTab.id = \"menu\";\n    menuTab.classList.add(\"tab\");\n  const contactTab = document.createElement(\"div\");\n    contactTab.id = \"contact\";\n    contactTab.classList.add(\"tab\");\n\n  const homeH1 = document.createElement(\"h1\"); \n    homeH1.textContent = \"Home\";\n  const menuH1 = document.createElement(\"h1\"); \n    menuH1.textContent = \"Menu\";\n  const contactH1 = document.createElement(\"h1\"); \n    contactH1.textContent = \"Contact\";\n\n\n  homeTab.append(homeH1);\n  menuTab.append(menuH1);\n  contactTab.append(contactH1);\n\n  nav.append(homeTab,menuTab,contactTab);\n\n\n  const tabs = document.querySelectorAll(\".tab\");\n\n    tabs.forEach(tab => {\n      tab.addEventListener(\"click\", (e) => {\n        let target = e.currentTarget;\n        page = target.id;\n\n        tabs.forEach (tab => {\n          tab.classList.remove('active')\n        });\n\n        target.classList.add('active')\n\n        loadPage(page);\n      });\n\n      let page = \"home\";\n      loadPage(page);\n    });  \n}\n\nfunction loadPage(page){\n  if (page === \"home\"){\n    (0,_homeTab__WEBPACK_IMPORTED_MODULE_0__[\"default\"])()\n  } else if (page === \"menu\"){\n    (0,_menuTab__WEBPACK_IMPORTED_MODULE_1__[\"default\"])()  \n  } else if (page === \"contact\"){\n    (0,_contactTab__WEBPACK_IMPORTED_MODULE_2__[\"default\"])()\n  }  \n};\n\n\n\n//# sourceURL=webpack://rest-page/./src/index.js?");

/***/ }),

/***/ "./src/menuTab":
/*!*********************!*\
  !*** ./src/menuTab ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ menu)\n/* harmony export */ });\nfunction menu(){\n\n  const contentDiv = document.getElementById(\"content\");\n  contentDiv.classList.add(\"menu\");\n  contentDiv.innerHTML = `\n  <div class=\"container\">\n  <div class=\"card\">\n    <h2>Lunch</h2>\n    <div class=\"imgs\">\n      <img src=\"imgs/burger.jpg\" alt=\"burger illustration\">\n      <p>$15.00</p>\n      <img src=\"imgs/hotdog.jpg\" alt=\"hotdog illustration\">\n      <p>$5.00</p>\n      <img src=\"imgs/pizza.jpg\" alt=\"\">\n      <p>$7.00</p>\n    </div>\n  </div>\n  </div>\n  <div class=\"container\">\n    <div class=\"card\">\n      <h2>Dessert</h2>\n      <div class=\"imgs\">\n        <img src=\"imgs/cookie.jpg\" alt=\"cookie illustration\">\n        <p>$2.00</p>\n        <img src=\"imgs/cupcake.jpg\" alt=\"cupcake illustration\">\n        <p>$4.00</p>\n        <img src=\"imgs/donut.jpg\" alt=\"donut illustration\">\n        <p>$2.50</p>\n      </div>\n    </div>\n  </div>\n  <div class=\"container\">\n    <div class=\"card\">\n      <h2>Drinks</h2>\n      <div class=\"img\">\n        <img src=\"imgs/coconut.jpg\" alt=\"coconut illustration\">\n        <p>$5.00</p>\n        <img src=\"imgs/coffee.jpg\" alt=\"coffee illustration\">\n        <p>$8.00</p>\n        <img src=\"imgs/espresso.jpg\" alt=\"espresso illustration\">\n        <p>$6.00</p>\n      </div>\n    </div>\n  </div>\n  `\n};\n\n//# sourceURL=webpack://rest-page/./src/menuTab?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
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