/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./context/state.tsx":
/*!***************************!*\
  !*** ./context/state.tsx ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"AppContext\": () => (/* binding */ AppContext),\n/* harmony export */   \"AppWrapper\": () => (/* binding */ AppWrapper),\n/* harmony export */   \"useAppContext\": () => (/* binding */ useAppContext)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst defState = {\n    viewedBooks: [],\n    chengeBooks: (ids)=>{}\n};\nconst AppContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)(defState);\nfunction AppWrapper({ children  }) {\n    const { 0: viewedBooks , 1: setViewedBooks  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const changeBooks = (booksIds)=>{\n        setViewedBooks(booksIds);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(AppContext.Provider, {\n        value: {\n            viewedBooks: viewedBooks,\n            chengeBooks: changeBooks\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\yanah\\\\book-store\\\\context\\\\state.tsx\",\n        lineNumber: 24,\n        columnNumber: 5\n    }, this);\n}\nfunction useAppContext() {\n    return (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(AppContext);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb250ZXh0L3N0YXRlLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBbUU7QUFPbkUsTUFBTUksUUFBUSxHQUFrQjtJQUM5QkMsV0FBVyxFQUFFLEVBQUU7SUFDZkMsV0FBVyxFQUFFLENBQUNDLEdBQUcsR0FBSyxDQUFDLENBQUM7Q0FDekI7QUFFTSxNQUFNQyxVQUFVLGlCQUFHUCxvREFBYSxDQUFDRyxRQUFRLENBQUMsQ0FBQztBQUUzQyxTQUFTSyxVQUFVLENBQUMsRUFBRUMsUUFBUSxHQUE2QyxFQUFFO0lBRWxGLE1BQU0sS0FBQ0wsV0FBVyxNQUFFTSxjQUFjLE1BQUlSLCtDQUFRLENBQVcsRUFBRSxDQUFDO0lBRTVELE1BQU1TLFdBQVcsR0FBRyxDQUFDQyxRQUFrQixHQUFLO1FBQzFDRixjQUFjLENBQUNFLFFBQVEsQ0FBQyxDQUFDO0lBQzNCLENBQUM7SUFFRCxxQkFDRSw4REFBQ0wsVUFBVSxDQUFDTSxRQUFRO1FBQUNDLEtBQUssRUFBRTtZQUMxQlYsV0FBVyxFQUFFQSxXQUFXO1lBQ3hCQyxXQUFXLEVBQUVNLFdBQVc7U0FDekI7a0JBQ0VGLFFBQVE7Ozs7O1lBQ1csQ0FDdEI7QUFDSixDQUFDO0FBRU0sU0FBU00sYUFBYSxHQUFHO0lBQzlCLE9BQU9kLGlEQUFVLENBQUNNLFVBQVUsQ0FBQyxDQUFDO0FBQ2hDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ib29rLXN0b3JlLy4vY29udGV4dC9zdGF0ZS50c3g/ZjllMCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgY3JlYXRlQ29udGV4dCwgdXNlQ29udGV4dCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcblxyXG5pbnRlcmZhY2UgSUNvbnRleHRTdGF0ZSB7XHJcbiAgdmlld2VkQm9va3M6IG51bWJlcltdXHJcbiAgY2hlbmdlQm9va3M6IChpZHM6IG51bWJlcltdKSA9PiB2b2lkXHJcbn1cclxuXHJcbmNvbnN0IGRlZlN0YXRlOiBJQ29udGV4dFN0YXRlID0ge1xyXG4gIHZpZXdlZEJvb2tzOiBbXSxcclxuICBjaGVuZ2VCb29rczogKGlkcykgPT4ge31cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IEFwcENvbnRleHQgPSBjcmVhdGVDb250ZXh0KGRlZlN0YXRlKTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBBcHBXcmFwcGVyKHsgY2hpbGRyZW4gfToge2NoaWxkcmVuOiBSZWFjdC5SZWFjdE5vZGUgfCBKU1guRWxlbWVudH0pIHtcclxuXHJcbiAgY29uc3QgW3ZpZXdlZEJvb2tzLCBzZXRWaWV3ZWRCb29rc10gPSB1c2VTdGF0ZTxudW1iZXJbXT4oW10pO1xyXG5cclxuICBjb25zdCBjaGFuZ2VCb29rcyA9IChib29rc0lkczogbnVtYmVyW10pID0+IHtcclxuICAgIHNldFZpZXdlZEJvb2tzKGJvb2tzSWRzKTtcclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8QXBwQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17e1xyXG4gICAgICB2aWV3ZWRCb29rczogdmlld2VkQm9va3MsXHJcbiAgICAgIGNoZW5nZUJvb2tzOiBjaGFuZ2VCb29rcyxcclxuICAgIH19PlxyXG4gICAgICB7Y2hpbGRyZW59XHJcbiAgICA8L0FwcENvbnRleHQuUHJvdmlkZXI+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHVzZUFwcENvbnRleHQoKSB7XHJcbiAgcmV0dXJuIHVzZUNvbnRleHQoQXBwQ29udGV4dCk7XHJcbn0iXSwibmFtZXMiOlsiUmVhY3QiLCJjcmVhdGVDb250ZXh0IiwidXNlQ29udGV4dCIsInVzZVN0YXRlIiwiZGVmU3RhdGUiLCJ2aWV3ZWRCb29rcyIsImNoZW5nZUJvb2tzIiwiaWRzIiwiQXBwQ29udGV4dCIsIkFwcFdyYXBwZXIiLCJjaGlsZHJlbiIsInNldFZpZXdlZEJvb2tzIiwiY2hhbmdlQm9va3MiLCJib29rc0lkcyIsIlByb3ZpZGVyIiwidmFsdWUiLCJ1c2VBcHBDb250ZXh0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./context/state.tsx\n");

/***/ }),

/***/ "./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _context_state__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../context/state */ \"./context/state.tsx\");\n\n\n\n\nfunction MyApp({ Component , pageProps  }) {\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        if (true) {\n            localStorage.setItem(\"version\", \"dev\");\n        }\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_context_state__WEBPACK_IMPORTED_MODULE_3__.AppWrapper, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n            ...pageProps\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\yanah\\\\book-store\\\\pages\\\\_app.tsx\",\n            lineNumber: 16,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\yanah\\\\book-store\\\\pages\\\\_app.tsx\",\n        lineNumber: 15,\n        columnNumber: 5\n    }, this);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBO0FBQThCO0FBRUk7QUFDWTtBQUU5QyxTQUFTRSxLQUFLLENBQUMsRUFBRUMsU0FBUyxHQUFFQyxTQUFTLEdBQVksRUFBRTtJQUVqREosZ0RBQVMsQ0FBQyxJQUFNO1FBQ2QsSUFBR0ssSUFBK0IsRUFBRTtZQUNsQ0csWUFBWSxDQUFDQyxPQUFPLENBQUMsU0FBUyxFQUFFSixLQUErQixDQUFDLENBQUM7UUFDbkUsQ0FBQztJQUNILENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQztJQUVQLHFCQUNFLDhEQUFDSixzREFBVTtrQkFDVCw0RUFBQ0UsU0FBUztZQUFFLEdBQUdDLFNBQVM7Ozs7O2dCQUFJOzs7OztZQUNqQixDQUNkO0FBQ0gsQ0FBQztBQUVELGlFQUFlRixLQUFLIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYm9vay1zdG9yZS8uL3BhZ2VzL19hcHAudHN4PzJmYmUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICcuLi9zdHlsZXMvZ2xvYmFscy5jc3MnXHJcbmltcG9ydCB0eXBlIHsgQXBwUHJvcHMgfSBmcm9tICduZXh0L2FwcCdcclxuaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBBcHBXcmFwcGVyIH0gZnJvbSAnLi4vY29udGV4dC9zdGF0ZSc7XHJcblxyXG5mdW5jdGlvbiBNeUFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzIH06IEFwcFByb3BzKSB7XHJcbiAgXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmKHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX1ZFUlNJT04pIHtcclxuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3ZlcnNpb24nLCBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19WRVJTSU9OKTtcclxuICAgIH1cclxuICB9LCBbXSk7XHJcblxyXG4gIHJldHVybihcclxuICAgIDxBcHBXcmFwcGVyPlxyXG4gICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XHJcbiAgICA8L0FwcFdyYXBwZXI+XHJcbiAgKSBcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTXlBcHBcclxuXHJcbiJdLCJuYW1lcyI6WyJ1c2VFZmZlY3QiLCJBcHBXcmFwcGVyIiwiTXlBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJwcm9jZXNzIiwiZW52IiwiTkVYVF9QVUJMSUNfVkVSU0lPTiIsImxvY2FsU3RvcmFnZSIsInNldEl0ZW0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/_app.tsx\n");

/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/***/ (() => {



/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.tsx"));
module.exports = __webpack_exports__;

})();