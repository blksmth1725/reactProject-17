"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_sliced_to_array_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @swc/helpers/src/_sliced_to_array.mjs */ \"./node_modules/@swc/helpers/src/_sliced_to_array.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _state_atom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../state/atom */ \"./state/atom.js\");\n/* harmony import */ var jotai__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! jotai */ \"./node_modules/jotai/esm/index.js\");\n/* harmony import */ var _css_myApp_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../css/myApp.module.css */ \"./css/myApp.module.css\");\n/* harmony import */ var _css_myApp_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_css_myApp_module_css__WEBPACK_IMPORTED_MODULE_5__);\n\n\nvar _s = $RefreshSig$();\n\n\n\n\nfunction MyApp() {\n    var _this = this;\n    _s();\n    var ref = (0,_swc_helpers_src_sliced_to_array_mjs__WEBPACK_IMPORTED_MODULE_3__[\"default\"])((0,jotai__WEBPACK_IMPORTED_MODULE_4__.useAtom)(_state_atom__WEBPACK_IMPORTED_MODULE_2__.categoryAtom), 2), categories = ref[0], setCategories = ref[1];\n    console.log(categories);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_css_myApp_module_css__WEBPACK_IMPORTED_MODULE_5___default().mainPageContainer),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: categories.map(function(category) {\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    style: {\n                        backgroundColor: \"black\"\n                    },\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: category.id\n                        }, void 0, false, {\n                            fileName: \"/Users/blksmth/Desktop/CODE/reactProject-17/pages/index.js\",\n                            lineNumber: 14,\n                            columnNumber: 13\n                        }, _this),\n                        \";\",\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: category.category\n                        }, void 0, false, {\n                            fileName: \"/Users/blksmth/Desktop/CODE/reactProject-17/pages/index.js\",\n                            lineNumber: 14,\n                            columnNumber: 38\n                        }, _this),\n                        \";\"\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/blksmth/Desktop/CODE/reactProject-17/pages/index.js\",\n                    lineNumber: 13,\n                    columnNumber: 11\n                }, _this);\n            })\n        }, void 0, false, {\n            fileName: \"/Users/blksmth/Desktop/CODE/reactProject-17/pages/index.js\",\n            lineNumber: 11,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/blksmth/Desktop/CODE/reactProject-17/pages/index.js\",\n        lineNumber: 10,\n        columnNumber: 5\n    }, this);\n}\n_s(MyApp, \"UlTlJt9VvMPxQRy3JhFygGD1Ti4=\", false, function() {\n    return [\n        jotai__WEBPACK_IMPORTED_MODULE_4__.useAtom\n    ];\n});\n_c = MyApp;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MyApp);\nvar _c;\n$RefreshReg$(_c, \"MyApp\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7OztBQUEwQjtBQUNtQjtBQUNiO0FBQ2E7QUFFN0MsU0FBU0ksS0FBSyxHQUFHOzs7SUFDZixJQUFvQ0YsR0FBcUIsb0ZBQXJCQSw4Q0FBTyxDQUFDRCxxREFBWSxDQUFDLE1BQWxESSxVQUFVLEdBQW1CSCxHQUFxQixHQUF4QyxFQUFFSSxhQUFhLEdBQUlKLEdBQXFCLEdBQXpCO0lBQ2hDSyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0gsVUFBVSxDQUFDLENBQUM7SUFDeEIscUJBQ0UsOERBQUNJLEtBQUc7UUFBQ0MsU0FBUyxFQUFFUCxnRkFBd0I7a0JBQ3RDLDRFQUFDTSxLQUFHO3NCQUNESixVQUFVLENBQUNPLEdBQUcsQ0FBQyxTQUFDQyxRQUFRLEVBQUs7OEJBQzVCLDhEQUFDSixLQUFHO29CQUFDSyxLQUFLLEVBQUU7d0JBQUVDLGVBQWUsRUFBRSxPQUFPO3FCQUFFOztzQ0FDdEMsOERBQUNOLEtBQUc7c0NBQUVJLFFBQVEsQ0FBQ0csRUFBRTs7Ozs7aUNBQU87d0JBQUEsR0FBQztzQ0FBQSw4REFBQ1AsS0FBRztzQ0FBRUksUUFBUSxDQUFDQSxRQUFROzs7OztpQ0FBTzt3QkFBQSxHQUN6RDs7Ozs7O3lCQUFNLENBQUM7YUFDUixDQUFDOzs7OztnQkFDRTs7Ozs7WUFDRixDQUNOO0NBQ0g7R0FkUVQsS0FBSzs7UUFDd0JGLDBDQUFPOzs7QUFEcENFLEtBQUFBLEtBQUs7QUFnQmQsK0RBQWVBLEtBQUssRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC5qcz9iZWU3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IGNhdGVnb3J5QXRvbSB9IGZyb20gXCIuLi9zdGF0ZS9hdG9tXCI7XG5pbXBvcnQgeyB1c2VBdG9tIH0gZnJvbSBcImpvdGFpXCI7XG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuLi9jc3MvbXlBcHAubW9kdWxlLmNzc1wiO1xuXG5mdW5jdGlvbiBNeUFwcCgpIHtcbiAgY29uc3QgW2NhdGVnb3JpZXMsIHNldENhdGVnb3JpZXNdID0gdXNlQXRvbShjYXRlZ29yeUF0b20pO1xuICBjb25zb2xlLmxvZyhjYXRlZ29yaWVzKTtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm1haW5QYWdlQ29udGFpbmVyfT5cbiAgICAgIDxkaXY+XG4gICAgICAgIHtjYXRlZ29yaWVzLm1hcCgoY2F0ZWdvcnkpID0+IHtcbiAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGJhY2tncm91bmRDb2xvcjogXCJibGFja1wiIH19PlxuICAgICAgICAgICAgPGRpdj57Y2F0ZWdvcnkuaWR9PC9kaXY+OzxkaXY+e2NhdGVnb3J5LmNhdGVnb3J5fTwvZGl2PjtcbiAgICAgICAgICA8L2Rpdj47XG4gICAgICAgIH0pfVxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IE15QXBwO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwiY2F0ZWdvcnlBdG9tIiwidXNlQXRvbSIsInN0eWxlcyIsIk15QXBwIiwiY2F0ZWdvcmllcyIsInNldENhdGVnb3JpZXMiLCJjb25zb2xlIiwibG9nIiwiZGl2IiwiY2xhc3NOYW1lIiwibWFpblBhZ2VDb250YWluZXIiLCJtYXAiLCJjYXRlZ29yeSIsInN0eWxlIiwiYmFja2dyb3VuZENvbG9yIiwiaWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});