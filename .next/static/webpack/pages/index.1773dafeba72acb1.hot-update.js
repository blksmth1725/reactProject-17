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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_sliced_to_array_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @swc/helpers/src/_sliced_to_array.mjs */ \"./node_modules/@swc/helpers/src/_sliced_to_array.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _state_atom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../state/atom */ \"./state/atom.js\");\n/* harmony import */ var jotai__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! jotai */ \"./node_modules/jotai/esm/index.js\");\n/* harmony import */ var _images_picOfMe_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../images/picOfMe.png */ \"./images/picOfMe.png\");\n/* harmony import */ var _css_myApp_module_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../css/myApp.module.css */ \"./css/myApp.module.css\");\n/* harmony import */ var _css_myApp_module_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_css_myApp_module_css__WEBPACK_IMPORTED_MODULE_7__);\n\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nfunction MyApp() {\n    var _this = this;\n    _s();\n    var ref = (0,_swc_helpers_src_sliced_to_array_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])((0,jotai__WEBPACK_IMPORTED_MODULE_6__.useAtom)(_state_atom__WEBPACK_IMPORTED_MODULE_3__.categoryAtom), 2), categories = ref[0], setCategories = ref[1];\n    console.log(categories);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_css_myApp_module_css__WEBPACK_IMPORTED_MODULE_7___default().mainPageContainer),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: categories.map(function(category) {\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                        src: _images_picOfMe_png__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n                        height: 868,\n                        width: 460\n                    }, void 0, false, {\n                        fileName: \"/Users/blksmth/Desktop/CODE/reactProject-17/pages/index.js\",\n                        lineNumber: 17,\n                        columnNumber: 15\n                    }, _this)\n                }, void 0, false, {\n                    fileName: \"/Users/blksmth/Desktop/CODE/reactProject-17/pages/index.js\",\n                    lineNumber: 16,\n                    columnNumber: 13\n                }, _this);\n            })\n        }, void 0, false, {\n            fileName: \"/Users/blksmth/Desktop/CODE/reactProject-17/pages/index.js\",\n            lineNumber: 13,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/blksmth/Desktop/CODE/reactProject-17/pages/index.js\",\n        lineNumber: 12,\n        columnNumber: 5\n    }, this);\n}\n_s(MyApp, \"UlTlJt9VvMPxQRy3JhFygGD1Ti4=\", false, function() {\n    return [\n        jotai__WEBPACK_IMPORTED_MODULE_6__.useAtom\n    ];\n});\n_c = MyApp;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MyApp);\nvar _c;\n$RefreshReg$(_c, \"MyApp\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUE7OztBQUEwQjtBQUNLO0FBQ2M7QUFDYjtBQUNZO0FBQ0M7QUFFN0MsU0FBU00sS0FBSyxHQUFHOzs7SUFDZixJQUFvQ0gsR0FBcUIsb0ZBQXJCQSw4Q0FBTyxDQUFDRCxxREFBWSxDQUFDLE1BQWxESyxVQUFVLEdBQW1CSixHQUFxQixHQUF4QyxFQUFFSyxhQUFhLEdBQUlMLEdBQXFCLEdBQXpCO0lBQ2hDTSxPQUFPLENBQUNDLEdBQUcsQ0FBQ0gsVUFBVSxDQUFDLENBQUM7SUFDeEIscUJBQ0UsOERBQUNJLEtBQUc7UUFBQ0MsU0FBUyxFQUFFUCxnRkFBd0I7a0JBQ3RDLDRFQUFDTSxLQUFHO3NCQUNESixVQUFVLENBQUNPLEdBQUcsQ0FBQyxTQUFDQyxRQUFRLEVBQUs7Z0JBQzVCLHFCQUNFLDhEQUFDSixLQUFHOzhCQUNGLDRFQUFDVixtREFBSzt3QkFBQ2UsR0FBRyxFQUFFWiwyREFBTzt3QkFBRWEsTUFBTSxFQUFFLEdBQUc7d0JBQUVDLEtBQUssRUFBRSxHQUFHOzs7Ozs2QkFBSTs7Ozs7eUJBQzVDLENBQ047YUFDSCxDQUFDOzs7OztnQkFDRTs7Ozs7WUFDRixDQUNOO0NBQ0g7R0FoQlFaLEtBQUs7O1FBQ3dCSCwwQ0FBTzs7O0FBRHBDRyxLQUFBQSxLQUFLO0FBa0JkLCtEQUFlQSxLQUFLLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/YmVlNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcbmltcG9ydCB7IGNhdGVnb3J5QXRvbSB9IGZyb20gXCIuLi9zdGF0ZS9hdG9tXCI7XG5pbXBvcnQgeyB1c2VBdG9tIH0gZnJvbSBcImpvdGFpXCI7XG5pbXBvcnQgcGljT2ZNZSBmcm9tIFwiLi4vaW1hZ2VzL3BpY09mTWUucG5nXCI7XG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuLi9jc3MvbXlBcHAubW9kdWxlLmNzc1wiO1xuXG5mdW5jdGlvbiBNeUFwcCgpIHtcbiAgY29uc3QgW2NhdGVnb3JpZXMsIHNldENhdGVnb3JpZXNdID0gdXNlQXRvbShjYXRlZ29yeUF0b20pO1xuICBjb25zb2xlLmxvZyhjYXRlZ29yaWVzKTtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm1haW5QYWdlQ29udGFpbmVyfT5cbiAgICAgIDxkaXY+XG4gICAgICAgIHtjYXRlZ29yaWVzLm1hcCgoY2F0ZWdvcnkpID0+IHtcbiAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgPEltYWdlIHNyYz17cGljT2ZNZX0gaGVpZ2h0PXs4Njh9IHdpZHRoPXs0NjB9IC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApO1xuICAgICAgICB9KX1cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBNeUFwcDtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsIkltYWdlIiwiY2F0ZWdvcnlBdG9tIiwidXNlQXRvbSIsInBpY09mTWUiLCJzdHlsZXMiLCJNeUFwcCIsImNhdGVnb3JpZXMiLCJzZXRDYXRlZ29yaWVzIiwiY29uc29sZSIsImxvZyIsImRpdiIsImNsYXNzTmFtZSIsIm1haW5QYWdlQ29udGFpbmVyIiwibWFwIiwiY2F0ZWdvcnkiLCJzcmMiLCJoZWlnaHQiLCJ3aWR0aCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});