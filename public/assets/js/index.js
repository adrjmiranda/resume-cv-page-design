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

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ (() => {

eval("// Const classes\nvar SHOW_CLASS = 'show-element';\nvar HIDDEN_CLASS = 'hidden-element';\nvar ACTIVE_CLASS = 'active';\n/**\n * Toggle Navbar Menu\n */\nvar navMenu = document.querySelector('#navbar .nav-menu');\nvar showNavMenuButton = document.querySelector('#toggle-menu .show');\nvar hiddenNavMenuButton = document.querySelector('#toggle-menu .hidden');\nif (navMenu && showNavMenuButton && hiddenNavMenuButton) {\n    showNavMenuButton.addEventListener('click', function () {\n        navMenu.classList.remove(HIDDEN_CLASS);\n        navMenu.classList.add(SHOW_CLASS);\n        showNavMenuButton.classList.remove(SHOW_CLASS);\n        showNavMenuButton.classList.add(HIDDEN_CLASS);\n        hiddenNavMenuButton.classList.remove(HIDDEN_CLASS);\n        hiddenNavMenuButton.classList.add(SHOW_CLASS);\n    });\n    hiddenNavMenuButton.addEventListener('click', function () {\n        navMenu.classList.remove(SHOW_CLASS);\n        navMenu.classList.add(HIDDEN_CLASS);\n        showNavMenuButton.classList.remove(HIDDEN_CLASS);\n        showNavMenuButton.classList.add(SHOW_CLASS);\n        hiddenNavMenuButton.classList.remove(SHOW_CLASS);\n        hiddenNavMenuButton.classList.add(HIDDEN_CLASS);\n    });\n}\n/**\n * Change navbar links color\n */\nvar sectionsElments = document.querySelectorAll('[data-section]');\nvar navLinks = document.querySelectorAll('.nav-link');\nvar clearNavLinksColor = function () {\n    navLinks.forEach(function (navLink) { return navLink.classList.remove(ACTIVE_CLASS); });\n    return;\n};\nvar debounceTimer;\nvar updateNavLinkColorOnScroll = function () {\n    clearTimeout(debounceTimer);\n    debounceTimer = setTimeout(function () {\n        for (var _i = 0, _a = Array.from(sectionsElments); _i < _a.length; _i++) {\n            var section = _a[_i];\n            var sectionIdName = section.getAttribute('id');\n            var navLinkHref = document.querySelector(\".nav-link[href=\\\"#\".concat(sectionIdName !== null && sectionIdName !== void 0 ? sectionIdName : '', \"\\\"]\"));\n            var rect = section.getBoundingClientRect();\n            if (rect.top <= 0 && rect.bottom >= 0) {\n                if (navLinkHref) {\n                    clearNavLinksColor();\n                    navLinkHref.classList.add(ACTIVE_CLASS);\n                    break;\n                }\n            }\n        }\n    }, 100);\n};\nvar updateNavLinkColorOnClick = function (hrefValue) {\n    sectionsElments &&\n        sectionsElments.forEach(function (section) {\n            var sectionIdName = section.getAttribute('id');\n            var navLinkHref = document.querySelector(\".nav-link[href=\\\"#\".concat(hrefValue, \"\\\"]\"));\n            if (sectionIdName === hrefValue && navLinkHref) {\n                clearNavLinksColor();\n                navLinkHref.classList.add(ACTIVE_CLASS);\n                return true;\n            }\n        });\n    return false;\n};\nvar initializeNavbar = function () {\n    if (!sectionsElments.length || !navLinks.length) {\n        console.warn('No sections or nav links found.');\n        return;\n    }\n    updateNavLinkColorOnScroll();\n    // Add click event\n    navLinks.forEach(function (navLink) {\n        navLink.addEventListener('click', function () {\n            if (updateNavLinkColorOnClick(navLink.href.replace('#', ''))) {\n                return;\n            }\n        });\n    });\n    // Add scroll event\n    window.addEventListener('scroll', updateNavLinkColorOnScroll);\n};\ninitializeNavbar();\n\n\n//# sourceURL=webpack://resume-cv-page-design/./src/index.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.ts"]();
/******/ 	
/******/ })()
;