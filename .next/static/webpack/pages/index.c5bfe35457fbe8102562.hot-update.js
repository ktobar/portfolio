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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Projects; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _comps_Icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../comps/Icon */ \"./components/comps/Icon.jsx\");\n/* harmony import */ var _styles_Project_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../styles/Project.module.scss */ \"./styles/Project.module.scss\");\n/* harmony import */ var _styles_Project_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_Project_module_scss__WEBPACK_IMPORTED_MODULE_2__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\nvar _jsxFileName = \"/Users/kelvindt/Projects/portfolio/components/Projects/Project.jsx\";\n\n\nfunction Projects(_ref) {\n  var _this = this;\n\n  var projects = _ref.projects;\n\n  var stackList = function stackList(data) {\n    var list = data.map(function (item) {\n      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_comps_Icon__WEBPACK_IMPORTED_MODULE_1__.default, {\n          name: item\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 10,\n          columnNumber: 11\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 9,\n        columnNumber: 9\n      }, _this);\n    });\n    return list;\n  };\n\n  var card = function card(data) {\n    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      className: \"col-sm-12 col-md-6 col-lg-3\",\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"card\",\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n          className: \"card-body\",\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h5\", {\n            className: \"card-title\",\n            children: data.title\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 23,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n            className: \"\".concat((_styles_Project_module_scss__WEBPACK_IMPORTED_MODULE_2___default().img), \" img-fluid\"),\n            src: data.image[0]\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 24,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n            className: \"card-text\",\n            children: data.info\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 25,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n            className: \"card-text\",\n            children: [\"Stack:\", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n              children: stackList(data.stack)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 28,\n              columnNumber: 15\n            }, _this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 26,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n            href: data.link,\n            children: data.link\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 30,\n            columnNumber: 13\n          }, _this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 22,\n          columnNumber: 11\n        }, _this)\n      }, data.title, false, {\n        fileName: _jsxFileName,\n        lineNumber: 21,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 20,\n      columnNumber: 7\n    }, _this);\n  };\n\n  var cardList = function cardList(data) {\n    var list = data.map(function (info) {\n      return card(info);\n    });\n    return list;\n  };\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n    className: \"projects\",\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      className: \"container\",\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"row\",\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n          className: \"display-5\",\n          children: \"Projects\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 48,\n          columnNumber: 11\n        }, this), cardList(projects)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 47,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 46,\n      columnNumber: 7\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 45,\n    columnNumber: 5\n  }, this);\n}\n_c = Projects;\n\nvar _c;\n\n$RefreshReg$(_c, \"Projects\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1Byb2plY3RzL1Byb2plY3QuanN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBO0FBRUE7QUFFZSxTQUFTRSxRQUFULE9BQWdDO0FBQUE7O0FBQUEsTUFBWkMsUUFBWSxRQUFaQSxRQUFZOztBQUM3QyxNQUFNQyxTQUFTLEdBQUcsU0FBWkEsU0FBWSxDQUFDQyxJQUFELEVBQVU7QUFDMUIsUUFBTUMsSUFBSSxHQUFHRCxJQUFJLENBQUNFLEdBQUwsQ0FBUyxVQUFDQyxJQUFELEVBQVU7QUFDOUIsMEJBQ0U7QUFBQSwrQkFDRSw4REFBQyxnREFBRDtBQUFNLGNBQUksRUFBRUE7QUFBWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGO0FBS0QsS0FOWSxDQUFiO0FBUUEsV0FBT0YsSUFBUDtBQUNELEdBVkQ7O0FBWUEsTUFBTUcsSUFBSSxHQUFHLFNBQVBBLElBQU8sQ0FBQ0osSUFBRCxFQUFVO0FBQ3JCLHdCQUNFO0FBQUssZUFBUyxFQUFDLDZCQUFmO0FBQUEsNkJBQ0U7QUFBSyxpQkFBUyxFQUFDLE1BQWY7QUFBQSwrQkFDRTtBQUFLLG1CQUFTLEVBQUMsV0FBZjtBQUFBLGtDQUNFO0FBQUkscUJBQVMsRUFBQyxZQUFkO0FBQUEsc0JBQTRCQSxJQUFJLENBQUNLO0FBQWpDO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREYsZUFFRTtBQUFLLHFCQUFTLFlBQUtULHdFQUFMLGVBQWQ7QUFBMkMsZUFBRyxFQUFFSSxJQUFJLENBQUNPLEtBQUwsQ0FBVyxDQUFYO0FBQWhEO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRkYsZUFHRTtBQUFHLHFCQUFTLEVBQUMsV0FBYjtBQUFBLHNCQUEwQlAsSUFBSSxDQUFDUTtBQUEvQjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUhGLGVBSUU7QUFBRyxxQkFBUyxFQUFDLFdBQWI7QUFBQSw4Q0FFRTtBQUFBLHdCQUFLVCxTQUFTLENBQUNDLElBQUksQ0FBQ1MsS0FBTjtBQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUpGLGVBUUU7QUFBRyxnQkFBSSxFQUFFVCxJQUFJLENBQUNVLElBQWQ7QUFBQSxzQkFBcUJWLElBQUksQ0FBQ1U7QUFBMUI7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFSRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERixTQUEyQlYsSUFBSSxDQUFDSyxLQUFoQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGO0FBZ0JELEdBakJEOztBQW1CQSxNQUFNTSxRQUFRLEdBQUcsU0FBWEEsUUFBVyxDQUFDWCxJQUFELEVBQVU7QUFDekIsUUFBTUMsSUFBSSxHQUFHRCxJQUFJLENBQUNFLEdBQUwsQ0FBUyxVQUFDTSxJQUFELEVBQVU7QUFDOUIsYUFBT0osSUFBSSxDQUFDSSxJQUFELENBQVg7QUFDRCxLQUZZLENBQWI7QUFHQSxXQUFPUCxJQUFQO0FBQ0QsR0FMRDs7QUFPQSxzQkFDRTtBQUFLLGFBQVMsRUFBQyxVQUFmO0FBQUEsMkJBQ0U7QUFBSyxlQUFTLEVBQUMsV0FBZjtBQUFBLDZCQUNFO0FBQUssaUJBQVMsRUFBQyxLQUFmO0FBQUEsZ0NBQ0U7QUFBSSxtQkFBUyxFQUFDLFdBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREYsRUFFR1UsUUFBUSxDQUFDYixRQUFELENBRlg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQVVEO0tBakR1QkQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Qcm9qZWN0cy9Qcm9qZWN0LmpzeD83ZmMwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBJY29uIGZyb20gXCIuLi9jb21wcy9JY29uXCI7XG5cbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4uLy4uL3N0eWxlcy9Qcm9qZWN0Lm1vZHVsZS5zY3NzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFByb2plY3RzKHsgcHJvamVjdHMgfSkge1xuICBjb25zdCBzdGFja0xpc3QgPSAoZGF0YSkgPT4ge1xuICAgIGNvbnN0IGxpc3QgPSBkYXRhLm1hcCgoaXRlbSkgPT4ge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPGxpPlxuICAgICAgICAgIDxJY29uIG5hbWU9e2l0ZW19IC8+XG4gICAgICAgIDwvbGk+XG4gICAgICApO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIGxpc3Q7XG4gIH07XG5cbiAgY29uc3QgY2FyZCA9IChkYXRhKSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNtLTEyIGNvbC1tZC02IGNvbC1sZy0zXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZFwiIGtleT17ZGF0YS50aXRsZX0+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWJvZHlcIj5cbiAgICAgICAgICAgIDxoNSBjbGFzc05hbWU9XCJjYXJkLXRpdGxlXCI+e2RhdGEudGl0bGV9PC9oNT5cbiAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPXtgJHtzdHlsZXMuaW1nfSBpbWctZmx1aWRgfSBzcmM9e2RhdGEuaW1hZ2VbMF19IC8+XG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJjYXJkLXRleHRcIj57ZGF0YS5pbmZvfTwvcD5cbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImNhcmQtdGV4dFwiPlxuICAgICAgICAgICAgICBTdGFjazpcbiAgICAgICAgICAgICAgPHVsPntzdGFja0xpc3QoZGF0YS5zdGFjayl9PC91bD5cbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgIDxhIGhyZWY9e2RhdGEubGlua30+e2RhdGEubGlua308L2E+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfTtcblxuICBjb25zdCBjYXJkTGlzdCA9IChkYXRhKSA9PiB7XG4gICAgY29uc3QgbGlzdCA9IGRhdGEubWFwKChpbmZvKSA9PiB7XG4gICAgICByZXR1cm4gY2FyZChpbmZvKTtcbiAgICB9KTtcbiAgICByZXR1cm4gbGlzdDtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvamVjdHNcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG4gICAgICAgICAgPGgxIGNsYXNzTmFtZT1cImRpc3BsYXktNVwiPlByb2plY3RzPC9oMT5cbiAgICAgICAgICB7Y2FyZExpc3QocHJvamVjdHMpfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufVxuIl0sIm5hbWVzIjpbIkljb24iLCJzdHlsZXMiLCJQcm9qZWN0cyIsInByb2plY3RzIiwic3RhY2tMaXN0IiwiZGF0YSIsImxpc3QiLCJtYXAiLCJpdGVtIiwiY2FyZCIsInRpdGxlIiwiaW1nIiwiaW1hZ2UiLCJpbmZvIiwic3RhY2siLCJsaW5rIiwiY2FyZExpc3QiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Projects/Project.jsx\n");

/***/ })

});