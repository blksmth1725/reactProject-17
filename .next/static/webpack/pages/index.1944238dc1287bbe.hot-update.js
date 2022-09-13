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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _utils_SpeakerData__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/SpeakerData */ \"./utils/SpeakerData.js\");\n\n\n\nfunction IndexPage() {\n    var _this = this;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"container speakers-list\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"row\",\n            children: _utils_SpeakerData__WEBPACK_IMPORTED_MODULE_2__.data.map(function(speaker) {\n                var id = speaker.id, bio = speaker.bio, first = speaker.first, last = speaker.last, favorite = speaker.favorite, twitterHandle = speaker.twitterHandle, company = speaker.company, sessions = speaker.sessions;\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"col-xs-12 col-sm-12 col-md-6 col-lg-4 col-sm-12 col-xs-12\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"speaker-image d-flex flex-row justify-content-center align-items-center h-300\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                className: \"contain-fit\",\n                                src: \"/images/speaker-\".concat(id, \".jpg\"),\n                                width: \"300\",\n                                height: \"10000\",\n                                alt: \"\".concat(first, \" \").concat(last)\n                            }, void 0, false, {\n                                fileName: \"/Users/blksmth/Desktop/Desktop - Christian’s MacBook Air/CODE/reactProject-17/pages/index.js\",\n                                lineNumber: 25,\n                                columnNumber: 17\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: \"/Users/blksmth/Desktop/Desktop - Christian’s MacBook Air/CODE/reactProject-17/pages/index.js\",\n                            lineNumber: 24,\n                            columnNumber: 15\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"speaker-info\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"d-flex justify-content-between mb-3\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                        className: \"text-truncate w-200\",\n                                        children: [\n                                            first,\n                                            \" \",\n                                            last\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/blksmth/Desktop/Desktop - Christian’s MacBook Air/CODE/reactProject-17/pages/index.js\",\n                                        lineNumber: 35,\n                                        columnNumber: 19\n                                    }, _this)\n                                }, void 0, false, {\n                                    fileName: \"/Users/blksmth/Desktop/Desktop - Christian’s MacBook Air/CODE/reactProject-17/pages/index.js\",\n                                    lineNumber: 34,\n                                    columnNumber: 17\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        children: [\n                                            bio,\n                                            \" \",\n                                            company,\n                                            \" \",\n                                            twitterHandle,\n                                            \" \",\n                                            favorite\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/blksmth/Desktop/Desktop - Christian’s MacBook Air/CODE/reactProject-17/pages/index.js\",\n                                        lineNumber: 40,\n                                        columnNumber: 19\n                                    }, _this)\n                                }, void 0, false, {\n                                    fileName: \"/Users/blksmth/Desktop/Desktop - Christian’s MacBook Air/CODE/reactProject-17/pages/index.js\",\n                                    lineNumber: 39,\n                                    columnNumber: 17\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"sessionBox card h-250\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        className: \"session w-100\",\n                                        children: [\n                                            sessions[0].title,\n                                            \" \",\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                                                children: [\n                                                    \"Room: \",\n                                                    sessions[0].room.name\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"/Users/blksmth/Desktop/Desktop - Christian’s MacBook Air/CODE/reactProject-17/pages/index.js\",\n                                                lineNumber: 47,\n                                                columnNumber: 21\n                                            }, _this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/blksmth/Desktop/Desktop - Christian’s MacBook Air/CODE/reactProject-17/pages/index.js\",\n                                        lineNumber: 45,\n                                        columnNumber: 19\n                                    }, _this)\n                                }, void 0, false, {\n                                    fileName: \"/Users/blksmth/Desktop/Desktop - Christian’s MacBook Air/CODE/reactProject-17/pages/index.js\",\n                                    lineNumber: 44,\n                                    columnNumber: 17\n                                }, _this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/blksmth/Desktop/Desktop - Christian’s MacBook Air/CODE/reactProject-17/pages/index.js\",\n                            lineNumber: 33,\n                            columnNumber: 15\n                        }, _this)\n                    ]\n                }, id, true, {\n                    fileName: \"/Users/blksmth/Desktop/Desktop - Christian’s MacBook Air/CODE/reactProject-17/pages/index.js\",\n                    lineNumber: 20,\n                    columnNumber: 13\n                }, _this);\n            })\n        }, void 0, false, {\n            fileName: \"/Users/blksmth/Desktop/Desktop - Christian’s MacBook Air/CODE/reactProject-17/pages/index.js\",\n            lineNumber: 7,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/blksmth/Desktop/Desktop - Christian’s MacBook Air/CODE/reactProject-17/pages/index.js\",\n        lineNumber: 6,\n        columnNumber: 5\n    }, this);\n}\n_c = IndexPage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (IndexPage);\nvar _c;\n$RefreshReg$(_c, \"IndexPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTtBQUEwQjtBQUNrQjtBQUU1QyxTQUFTRSxTQUFTLEdBQUc7O0lBQ25CLHFCQUNFLDhEQUFDQyxLQUFHO1FBQUNDLFNBQVMsRUFBQyx5QkFBeUI7a0JBQ3RDLDRFQUFDRCxLQUFHO1lBQUNDLFNBQVMsRUFBQyxLQUFLO3NCQUNqQkgsd0RBQVEsQ0FBQyxTQUFDSyxPQUFPLEVBQUs7Z0JBQ3JCLElBQ0VDLEVBQUUsR0FRQUQsT0FBTyxDQVJUQyxFQUFFLEVBQ0ZDLEdBQUcsR0FPREYsT0FBTyxDQVBURSxHQUFHLEVBQ0hDLEtBQUssR0FNSEgsT0FBTyxDQU5URyxLQUFLLEVBQ0xDLElBQUksR0FLRkosT0FBTyxDQUxUSSxJQUFJLEVBQ0pDLFFBQVEsR0FJTkwsT0FBTyxDQUpUSyxRQUFRLEVBQ1JDLGFBQWEsR0FHWE4sT0FBTyxDQUhUTSxhQUFhLEVBQ2JDLE9BQU8sR0FFTFAsT0FBTyxDQUZUTyxPQUFPLEVBQ1BDLFFBQVEsR0FDTlIsT0FBTyxDQURUUSxRQUFRO2dCQUVWLHFCQUNFLDhEQUFDWCxLQUFHO29CQUVGQyxTQUFTLEVBQUMsMkRBQTJEOztzQ0FFckUsOERBQUNELEtBQUc7NEJBQUNDLFNBQVMsRUFBQywrRUFBK0U7c0NBQzVGLDRFQUFDVyxLQUFHO2dDQUNGWCxTQUFTLEVBQUMsYUFBYTtnQ0FDdkJZLEdBQUcsRUFBRSxrQkFBaUIsQ0FBSyxNQUFJLENBQVBULEVBQUUsRUFBQyxNQUFJLENBQUM7Z0NBQ2hDVSxLQUFLLEVBQUMsS0FBSztnQ0FDWEMsTUFBTSxFQUFDLE9BQU87Z0NBQ2RDLEdBQUcsRUFBRSxFQUFDLENBQVdULE1BQUksQ0FBYkQsS0FBSyxFQUFDLEdBQUMsQ0FBTyxRQUFMQyxJQUFJLENBQUU7Ozs7O3FDQUN2Qjs7Ozs7aUNBQ0U7c0NBQ04sOERBQUNQLEtBQUc7NEJBQUNDLFNBQVMsRUFBQyxjQUFjOzs4Q0FDM0IsOERBQUNELEtBQUc7b0NBQUNDLFNBQVMsRUFBQyxxQ0FBcUM7OENBQ2xELDRFQUFDZ0IsSUFBRTt3Q0FBQ2hCLFNBQVMsRUFBQyxxQkFBcUI7OzRDQUNoQ0ssS0FBSzs0Q0FBQyxHQUFDOzRDQUFDQyxJQUFJOzs7Ozs7NkNBQ1Y7Ozs7O3lDQUNEOzhDQUNOLDhEQUFDUCxLQUFHOzhDQUNGLDRFQUFDa0IsR0FBQzs7NENBQ0NiLEdBQUc7NENBQUMsR0FBQzs0Q0FBQ0ssT0FBTzs0Q0FBQyxHQUFDOzRDQUFDRCxhQUFhOzRDQUFDLEdBQUM7NENBQUNELFFBQVE7Ozs7Ozs2Q0FDdkM7Ozs7O3lDQUNBOzhDQUNOLDhEQUFDUixLQUFHO29DQUFDQyxTQUFTLEVBQUMsdUJBQXVCOzhDQUNwQyw0RUFBQ2tCLE1BQUk7d0NBQUNsQixTQUFTLEVBQUMsZUFBZTs7NENBQzVCVSxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUNTLEtBQUs7NENBQUUsR0FBRzswREFDdkIsOERBQUNDLFFBQU07O29EQUFDLFFBQU07b0RBQUNWLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQ1csSUFBSSxDQUFDQyxJQUFJOzs7Ozs7cURBQVU7Ozs7Ozs2Q0FDekM7Ozs7O3lDQUNIOzs7Ozs7aUNBQ0Y7O21CQTdCRG5CLEVBQUU7Ozs7eUJBOEJILENBQ047YUFDSCxDQUFDOzs7OztnQkFDRTs7Ozs7WUFDRixDQUNOO0NBQ0g7QUFyRFFMLEtBQUFBLFNBQVM7QUF1RGxCLCtEQUFlQSxTQUFTLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/YmVlNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBkYXRhIH0gZnJvbSBcIi4uL3V0aWxzL1NwZWFrZXJEYXRhXCI7XG5cbmZ1bmN0aW9uIEluZGV4UGFnZSgpIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBzcGVha2Vycy1saXN0XCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAgICB7ZGF0YS5tYXAoKHNwZWFrZXIpID0+IHtcbiAgICAgICAgICBjb25zdCB7XG4gICAgICAgICAgICBpZCxcbiAgICAgICAgICAgIGJpbyxcbiAgICAgICAgICAgIGZpcnN0LFxuICAgICAgICAgICAgbGFzdCxcbiAgICAgICAgICAgIGZhdm9yaXRlLFxuICAgICAgICAgICAgdHdpdHRlckhhbmRsZSxcbiAgICAgICAgICAgIGNvbXBhbnksXG4gICAgICAgICAgICBzZXNzaW9ucyxcbiAgICAgICAgICB9ID0gc3BlYWtlcjtcbiAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICBrZXk9e2lkfVxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjb2wteHMtMTIgY29sLXNtLTEyIGNvbC1tZC02IGNvbC1sZy00IGNvbC1zbS0xMiBjb2wteHMtMTJcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNwZWFrZXItaW1hZ2UgZC1mbGV4IGZsZXgtcm93IGp1c3RpZnktY29udGVudC1jZW50ZXIgYWxpZ24taXRlbXMtY2VudGVyIGgtMzAwXCI+XG4gICAgICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY29udGFpbi1maXRcIlxuICAgICAgICAgICAgICAgICAgc3JjPXtgL2ltYWdlcy9zcGVha2VyLSR7aWR9LmpwZ2B9XG4gICAgICAgICAgICAgICAgICB3aWR0aD1cIjMwMFwiXG4gICAgICAgICAgICAgICAgICBoZWlnaHQ9XCIxMDAwMFwiXG4gICAgICAgICAgICAgICAgICBhbHQ9e2Ake2ZpcnN0fSAke2xhc3R9YH1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzcGVha2VyLWluZm9cIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtYmV0d2VlbiBtYi0zXCI+XG4gICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwidGV4dC10cnVuY2F0ZSB3LTIwMFwiPlxuICAgICAgICAgICAgICAgICAgICB7Zmlyc3R9IHtsYXN0fVxuICAgICAgICAgICAgICAgICAgPC9oMz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICAgIHtiaW99IHtjb21wYW55fSB7dHdpdHRlckhhbmRsZX0ge2Zhdm9yaXRlfVxuICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2Vzc2lvbkJveCBjYXJkIGgtMjUwXCI+XG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJzZXNzaW9uIHctMTAwXCI+XG4gICAgICAgICAgICAgICAgICAgIHtzZXNzaW9uc1swXS50aXRsZX17XCIgXCJ9XG4gICAgICAgICAgICAgICAgICAgIDxzdHJvbmc+Um9vbToge3Nlc3Npb25zWzBdLnJvb20ubmFtZX08L3N0cm9uZz5cbiAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApO1xuICAgICAgICB9KX1cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBJbmRleFBhZ2U7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJkYXRhIiwiSW5kZXhQYWdlIiwiZGl2IiwiY2xhc3NOYW1lIiwibWFwIiwic3BlYWtlciIsImlkIiwiYmlvIiwiZmlyc3QiLCJsYXN0IiwiZmF2b3JpdGUiLCJ0d2l0dGVySGFuZGxlIiwiY29tcGFueSIsInNlc3Npb25zIiwiaW1nIiwic3JjIiwid2lkdGgiLCJoZWlnaHQiLCJhbHQiLCJoMyIsInAiLCJzcGFuIiwidGl0bGUiLCJzdHJvbmciLCJyb29tIiwibmFtZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});