"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./context/state.tsx":
/*!***************************!*\
  !*** ./context/state.tsx ***!
  \***************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"AppContext\": function() { return /* binding */ AppContext; },\n/* harmony export */   \"AppWrapper\": function() { return /* binding */ AppWrapper; },\n/* harmony export */   \"useAppContext\": function() { return /* binding */ useAppContext; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$(), _s1 = $RefreshSig$();\n\nvar defState = {\n    viewedBooks: [],\n    chengeBooks: function(ids) {}\n};\nvar AppContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)(defState);\nfunction AppWrapper(param) {\n    var children = param.children;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]), viewedBooks = ref[0], setViewedBooks = ref[1];\n    var changeBooks = function(booksIds) {\n        debugger;\n        setViewedBooks(booksIds);\n        sharedState.viewedBooks = booksIds;\n    };\n    usest;\n    var sharedState = {\n        viewedBooks: [],\n        chengeBooks: changeBooks\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(AppContext.Provider, {\n        value: sharedState,\n        children: children\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\yanah\\\\book-store\\\\context\\\\state.tsx\",\n        lineNumber: 32,\n        columnNumber: 5\n    }, this);\n}\n_s(AppWrapper, \"4bWmwqNpSmwrWYwBxf0uO8LDcFo=\");\n_c = AppWrapper;\nfunction useAppContext() {\n    _s1();\n    return (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(AppContext);\n}\n_s1(useAppContext, \"gDsCjeeItUuvgOWf1v4qoK9RF6k=\");\nvar _c;\n$RefreshReg$(_c, \"AppWrapper\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb250ZXh0L3N0YXRlLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7O0FBQW1FO0FBT25FLElBQU1JLFFBQVEsR0FBa0I7SUFDOUJDLFdBQVcsRUFBRSxFQUFFO0lBQ2ZDLFdBQVcsRUFBRSxTQUFDQyxHQUFHLEVBQUssQ0FBQyxDQUFDO0NBQ3pCO0FBRU0sSUFBTUMsVUFBVSxpQkFBR1Asb0RBQWEsQ0FBQ0csUUFBUSxDQUFDLENBQUM7QUFFM0MsU0FBU0ssVUFBVSxDQUFDLEtBQXVELEVBQUU7UUFBekQsUUFBVSxHQUFWLEtBQXVELENBQXJEQyxRQUFROztJQUVuQyxJQUFzQ1AsR0FBb0IsR0FBcEJBLCtDQUFRLENBQVMsRUFBRSxDQUFDLEVBQW5ERSxXQUFXLEdBQW9CRixHQUFvQixHQUF4QyxFQUFFUSxjQUFjLEdBQUlSLEdBQW9CLEdBQXhCO0lBRWxDLElBQU1TLFdBQVcsR0FBRyxTQUFDQyxRQUFrQixFQUFLO1FBQzFDLFFBQVE7UUFDUkYsY0FBYyxDQUFDRSxRQUFRLENBQUMsQ0FBQztRQUN6QkMsV0FBVyxDQUFDVCxXQUFXLEdBQUdRLFFBQVEsQ0FBQztJQUNyQyxDQUFDO0lBRURFLEtBQUs7SUFDTCxJQUFJRCxXQUFXLEdBQWtCO1FBQy9CVCxXQUFXLEVBQUUsRUFBRTtRQUNmQyxXQUFXLEVBQUVNLFdBQVc7S0FDekI7SUFFRCxxQkFDRSw4REFBQ0osVUFBVSxDQUFDUSxRQUFRO1FBQUNDLEtBQUssRUFBRUgsV0FBVztrQkFDcENKLFFBQVE7Ozs7O1lBQ1csQ0FDdEI7QUFDSixDQUFDO0dBckJlRCxVQUFVO0FBQVZBLEtBQUFBLFVBQVU7QUF1Qm5CLFNBQVNTLGFBQWEsR0FBRzs7SUFDOUIsT0FBT2hCLGlEQUFVLENBQUNNLFVBQVUsQ0FBQyxDQUFDO0FBQ2hDLENBQUM7SUFGZVUsYUFBYSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb250ZXh0L3N0YXRlLnRzeD9mOWUwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBjcmVhdGVDb250ZXh0LCB1c2VDb250ZXh0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuXHJcbmludGVyZmFjZSBJQ29udGV4dFN0YXRlIHtcclxuICB2aWV3ZWRCb29rczogbnVtYmVyW11cclxuICBjaGVuZ2VCb29rczogKGlkczogbnVtYmVyW10pID0+IHZvaWRcclxufVxyXG5cclxuY29uc3QgZGVmU3RhdGU6IElDb250ZXh0U3RhdGUgPSB7XHJcbiAgdmlld2VkQm9va3M6IFtdLFxyXG4gIGNoZW5nZUJvb2tzOiAoaWRzKSA9PiB7fVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgQXBwQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQoZGVmU3RhdGUpO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIEFwcFdyYXBwZXIoeyBjaGlsZHJlbiB9OiB7Y2hpbGRyZW46IFJlYWN0LlJlYWN0Tm9kZSB8IEpTWC5FbGVtZW50fSkge1xyXG5cclxuICBjb25zdCBbdmlld2VkQm9va3MsIHNldFZpZXdlZEJvb2tzXSA9IHVzZVN0YXRlPG51bWJlcj4oW10pO1xyXG5cclxuICBjb25zdCBjaGFuZ2VCb29rcyA9IChib29rc0lkczogbnVtYmVyW10pID0+IHtcclxuICAgIGRlYnVnZ2VyXHJcbiAgICBzZXRWaWV3ZWRCb29rcyhib29rc0lkcyk7XHJcbiAgICBzaGFyZWRTdGF0ZS52aWV3ZWRCb29rcyA9IGJvb2tzSWRzO1xyXG4gIH1cclxuXHJcbiAgdXNlc3RcclxuICBsZXQgc2hhcmVkU3RhdGU6IElDb250ZXh0U3RhdGUgPSB7XHJcbiAgICB2aWV3ZWRCb29rczogW10sXHJcbiAgICBjaGVuZ2VCb29rczogY2hhbmdlQm9va3MsXHJcbiAgfSAgIFxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPEFwcENvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3NoYXJlZFN0YXRlfT5cclxuICAgICAge2NoaWxkcmVufVxyXG4gICAgPC9BcHBDb250ZXh0LlByb3ZpZGVyPlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiB1c2VBcHBDb250ZXh0KCkge1xyXG4gIHJldHVybiB1c2VDb250ZXh0KEFwcENvbnRleHQpO1xyXG59Il0sIm5hbWVzIjpbIlJlYWN0IiwiY3JlYXRlQ29udGV4dCIsInVzZUNvbnRleHQiLCJ1c2VTdGF0ZSIsImRlZlN0YXRlIiwidmlld2VkQm9va3MiLCJjaGVuZ2VCb29rcyIsImlkcyIsIkFwcENvbnRleHQiLCJBcHBXcmFwcGVyIiwiY2hpbGRyZW4iLCJzZXRWaWV3ZWRCb29rcyIsImNoYW5nZUJvb2tzIiwiYm9va3NJZHMiLCJzaGFyZWRTdGF0ZSIsInVzZXN0IiwiUHJvdmlkZXIiLCJ2YWx1ZSIsInVzZUFwcENvbnRleHQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./context/state.tsx\n"));

/***/ })

});