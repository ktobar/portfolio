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

/***/ "./components/Projects/Project.jsx":
/*!*****************************************!*\
  !*** ./components/Projects/Project.jsx ***!
  \*****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Projects; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_Project_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../styles/Project.module.scss */ \"./styles/Project.module.scss\");\n/* harmony import */ var _styles_Project_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_Project_module_scss__WEBPACK_IMPORTED_MODULE_1__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\nvar _jsxFileName = \"/Users/kelvindt/Projects/portfolio/components/Projects/Project.jsx\";\n\n\nfunction Projects(props) {\n  var _this = this;\n\n  var projects = props.projects;\n\n  var card = function card(data) {\n    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      className: \"col-sm-12 col-md-6 col-lg-3\",\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"card\",\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n          className: \"card-body\",\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h5\", {\n            className: \"card-title\",\n            children: data.title\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 13,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n            className: (_styles_Project_module_scss__WEBPACK_IMPORTED_MODULE_1___default().img),\n            src: data.image[0]\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 14,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n            className: \"card-text\",\n            children: data.info\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 15,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n            className: \"card-text\",\n            children: [\"Stack: \", data.stack]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 18,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n            href: data.link,\n            children: data.link\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 21,\n            columnNumber: 13\n          }, _this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 12,\n          columnNumber: 11\n        }, _this)\n      }, data.title, false, {\n        fileName: _jsxFileName,\n        lineNumber: 11,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 10,\n      columnNumber: 7\n    }, _this);\n  };\n\n  var cardList = function cardList(data) {\n    var list = data.map(function (info) {\n      return card(info);\n    });\n    return list;\n  };\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n    className: \"projects\",\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      className: \"container\",\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"row\",\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n          className: \"display-1\",\n          children: \"Projects\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 40,\n          columnNumber: 11\n        }, this), cardList(projects)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 39,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 38,\n      columnNumber: 7\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 37,\n    columnNumber: 5\n  }, this);\n}\n_c = Projects;\n\nvar _c;\n\n$RefreshReg$(_c, \"Projects\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1Byb2plY3RzL1Byb2plY3QuanN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVlLFNBQVNFLFFBQVQsQ0FBa0JDLEtBQWxCLEVBQXlCO0FBQUE7O0FBQUEsTUFDOUJDLFFBRDhCLEdBQ2pCRCxLQURpQixDQUM5QkMsUUFEOEI7O0FBR3RDLE1BQU1DLElBQUksR0FBRyxTQUFQQSxJQUFPLENBQUNDLElBQUQsRUFBVTtBQUNyQix3QkFFRTtBQUFLLGVBQVMsRUFBQyw2QkFBZjtBQUFBLDZCQUNFO0FBQUssaUJBQVMsRUFBQyxNQUFmO0FBQUEsK0JBQ0U7QUFBSyxtQkFBUyxFQUFDLFdBQWY7QUFBQSxrQ0FDRTtBQUFJLHFCQUFTLEVBQUMsWUFBZDtBQUFBLHNCQUE0QkEsSUFBSSxDQUFDQztBQUFqQztBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURGLGVBRUU7QUFBSyxxQkFBUyxFQUFFUCx3RUFBaEI7QUFBNEIsZUFBRyxFQUFFTSxJQUFJLENBQUNHLEtBQUwsQ0FBVyxDQUFYO0FBQWpDO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRkYsZUFHRTtBQUFHLHFCQUFTLEVBQUMsV0FBYjtBQUFBLHNCQUNHSCxJQUFJLENBQUNJO0FBRFI7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFIRixlQU1FO0FBQUcscUJBQVMsRUFBQyxXQUFiO0FBQUEsa0NBQ1VKLElBQUksQ0FBQ0ssS0FEZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBTkYsZUFTRTtBQUFHLGdCQUFJLEVBQUVMLElBQUksQ0FBQ00sSUFBZDtBQUFBLHNCQUFxQk4sSUFBSSxDQUFDTTtBQUExQjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQVRGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGLFNBQTJCTixJQUFJLENBQUNDLEtBQWhDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBRkY7QUFrQkQsR0FuQkQ7O0FBcUJBLE1BQU1NLFFBQVEsR0FBRyxTQUFYQSxRQUFXLENBQUNQLElBQUQsRUFBVTtBQUN6QixRQUFNUSxJQUFJLEdBQUdSLElBQUksQ0FBQ1MsR0FBTCxDQUFTLFVBQUNMLElBQUQsRUFBVTtBQUM5QixhQUFPTCxJQUFJLENBQUNLLElBQUQsQ0FBWDtBQUNELEtBRlksQ0FBYjtBQUdBLFdBQU9JLElBQVA7QUFDRCxHQUxEOztBQU9BLHNCQUVFO0FBQUssYUFBUyxFQUFDLFVBQWY7QUFBQSwyQkFDRTtBQUFLLGVBQVMsRUFBQyxXQUFmO0FBQUEsNkJBQ0U7QUFBSyxpQkFBUyxFQUFDLEtBQWY7QUFBQSxnQ0FDRTtBQUFJLG1CQUFTLEVBQUMsV0FBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFERixFQUVHRCxRQUFRLENBQUNULFFBQUQsQ0FGWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUZGO0FBV0Q7S0ExQ3VCRiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL1Byb2plY3RzL1Byb2plY3QuanN4PzdmYzAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vLi4vc3R5bGVzL1Byb2plY3QubW9kdWxlLnNjc3NcIjtcbmltcG9ydCBDYXJkIGZyb20gXCJyZWFjdC1ib290c3RyYXAvQ2FyZFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQcm9qZWN0cyhwcm9wcykge1xuICBjb25zdCB7IHByb2plY3RzIH0gPSBwcm9wcztcblxuICBjb25zdCBjYXJkID0gKGRhdGEpID0+IHtcbiAgICByZXR1cm4gKFxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zbS0xMiBjb2wtbWQtNiBjb2wtbGctM1wiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmRcIiBrZXk9e2RhdGEudGl0bGV9PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1ib2R5XCI+XG4gICAgICAgICAgICA8aDUgY2xhc3NOYW1lPVwiY2FyZC10aXRsZVwiPntkYXRhLnRpdGxlfTwvaDU+XG4gICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT17c3R5bGVzLmltZ30gc3JjPXtkYXRhLmltYWdlWzBdfS8+XG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJjYXJkLXRleHRcIj5cbiAgICAgICAgICAgICAge2RhdGEuaW5mb31cbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImNhcmQtdGV4dFwiPlxuICAgICAgICAgICAgICBTdGFjazoge2RhdGEuc3RhY2t9XG4gICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICA8YSBocmVmPXtkYXRhLmxpbmt9PntkYXRhLmxpbmt9PC9hPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH07XG5cbiAgY29uc3QgY2FyZExpc3QgPSAoZGF0YSkgPT4ge1xuICAgIGNvbnN0IGxpc3QgPSBkYXRhLm1hcCgoaW5mbykgPT4ge1xuICAgICAgcmV0dXJuIGNhcmQoaW5mbyk7XG4gICAgfSk7XG4gICAgcmV0dXJuIGxpc3Q7XG4gIH07XG5cbiAgcmV0dXJuIChcblxuICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvamVjdHNcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG4gICAgICAgICAgPGgxIGNsYXNzTmFtZT1cImRpc3BsYXktMVwiPlByb2plY3RzPC9oMT5cbiAgICAgICAgICB7Y2FyZExpc3QocHJvamVjdHMpfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufVxuIl0sIm5hbWVzIjpbInN0eWxlcyIsIkNhcmQiLCJQcm9qZWN0cyIsInByb3BzIiwicHJvamVjdHMiLCJjYXJkIiwiZGF0YSIsInRpdGxlIiwiaW1nIiwiaW1hZ2UiLCJpbmZvIiwic3RhY2siLCJsaW5rIiwiY2FyZExpc3QiLCJsaXN0IiwibWFwIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Projects/Project.jsx\n");

/***/ })

});