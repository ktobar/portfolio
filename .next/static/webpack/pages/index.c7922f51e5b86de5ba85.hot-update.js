/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/Skills/Skills.jsx":
/*!**************************************!*\
  !*** ./components/Skills/Skills.jsx ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Skills; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_bootstrap_Table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap/Table */ \"./node_modules/react-bootstrap/esm/Table.js\");\n/* harmony import */ var _styles_Skills_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../styles/Skills.module.scss */ \"./styles/Skills.module.scss\");\n/* harmony import */ var _styles_Skills_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_Skills_module_scss__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap/Card */ \"./node_modules/react-bootstrap/esm/Card.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\nvar _jsxFileName = \"/Users/kelvindt/Projects/portfolio/components/Skills/Skills.jsx\";\n\n\n\nfunction Skills(props) {\n  var _this = this;\n\n  var skills = props.skills;\n\n  var skillList = function skillList(data) {\n    var list = data.map(function (item) {\n      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n        children: item\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 12,\n        columnNumber: 14\n      }, _this);\n    });\n    return list;\n  };\n\n  var card = function card(data) {\n    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_1__.default, {\n      style: {\n        width: '18rem'\n      },\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_1__.default.Body, {\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_1__.default.Title, {\n          children: data.title\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 21,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Table__WEBPACK_IMPORTED_MODULE_2__.default, {\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n              children: data.title\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 23,\n              columnNumber: 17\n            }, _this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 23,\n            columnNumber: 13\n          }, _this), skillList(data.info)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 22,\n          columnNumber: 11\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 20,\n        columnNumber: 9\n      }, _this)\n    }, data.title, false, {\n      fileName: _jsxFileName,\n      lineNumber: 19,\n      columnNumber: 7\n    }, _this);\n  };\n\n  var cardList = function cardList(data) {\n    var list = data.map(function (info) {\n      return card(info);\n    });\n    return list;\n  };\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n    className: (_styles_Skills_module_scss__WEBPACK_IMPORTED_MODULE_3___default().skills),\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n      children: \"Skills\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 38,\n      columnNumber: 7\n    }, this), cardList(skills)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 37,\n    columnNumber: 5\n  }, this);\n}\n_c = Skills;\n\nvar _c;\n\n$RefreshReg$(_c, \"Skills\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Ta2lsbHMvU2tpbGxzLmpzeD9lZDQ1Il0sIm5hbWVzIjpbIlNraWxscyIsInByb3BzIiwic2tpbGxzIiwic2tpbGxMaXN0IiwiZGF0YSIsImxpc3QiLCJtYXAiLCJpdGVtIiwiY2FyZCIsIndpZHRoIiwidGl0bGUiLCJpbmZvIiwiY2FyZExpc3QiLCJzdHlsZXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBO0FBRUE7QUFFZSxTQUFTQSxNQUFULENBQWdCQyxLQUFoQixFQUF1QjtBQUFBOztBQUFBLE1BQzVCQyxNQUQ0QixHQUNqQkQsS0FEaUIsQ0FDNUJDLE1BRDRCOztBQUdwQyxNQUFNQyxTQUFTLEdBQUcsU0FBWkEsU0FBWSxDQUFDQyxJQUFELEVBQVU7QUFDMUIsUUFBSUMsSUFBSSxHQUFHRCxJQUFJLENBQUNFLEdBQUwsQ0FBUyxVQUFDQyxJQUFELEVBQVE7QUFDMUIsMEJBQU87QUFBQSxrQkFBS0E7QUFBTDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBQVA7QUFDRCxLQUZVLENBQVg7QUFHQSxXQUFPRixJQUFQO0FBQ0QsR0FMRDs7QUFPQSxNQUFNRyxJQUFJLEdBQUcsU0FBUEEsSUFBTyxDQUFDSixJQUFELEVBQVU7QUFDckIsd0JBQ0UsOERBQUMseURBQUQ7QUFBeUIsV0FBSyxFQUFFO0FBQUVLLGFBQUssRUFBRTtBQUFULE9BQWhDO0FBQUEsNkJBQ0UsOERBQUMsOERBQUQ7QUFBQSxnQ0FDRSw4REFBQywrREFBRDtBQUFBLG9CQUFhTCxJQUFJLENBQUNNO0FBQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREYsZUFFRSw4REFBQywwREFBRDtBQUFBLGtDQUNFO0FBQUEsbUNBQUk7QUFBQSx3QkFBS04sSUFBSSxDQUFDTTtBQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBSjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURGLEVBRUdQLFNBQVMsQ0FBQ0MsSUFBSSxDQUFDTyxJQUFOLENBRlo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGLE9BQWFQLElBQUksQ0FBQ00sS0FBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGO0FBV0QsR0FaRDs7QUFjQSxNQUFNRSxRQUFRLEdBQUcsU0FBWEEsUUFBVyxDQUFDUixJQUFELEVBQVU7QUFDekIsUUFBTUMsSUFBSSxHQUFHRCxJQUFJLENBQUNFLEdBQUwsQ0FBUyxVQUFDSyxJQUFELEVBQVU7QUFBQyxhQUFPSCxJQUFJLENBQUNHLElBQUQsQ0FBWDtBQUFrQixLQUF0QyxDQUFiO0FBQ0EsV0FBT04sSUFBUDtBQUNELEdBSEQ7O0FBS0Esc0JBQ0U7QUFBSyxhQUFTLEVBQUVRLDBFQUFoQjtBQUFBLDRCQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsRUFFR0QsUUFBUSxDQUFDVixNQUFELENBRlg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFNRDtLQW5DdUJGLE0iLCJmaWxlIjoiLi9jb21wb25lbnRzL1NraWxscy9Ta2lsbHMuanN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFRhYmxlIGZyb20gJ3JlYWN0LWJvb3RzdHJhcC9UYWJsZSdcblxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vLi4vc3R5bGVzL1NraWxscy5tb2R1bGUuc2Nzc1wiXG5cbmltcG9ydCBDYXJkIGZyb20gXCJyZWFjdC1ib290c3RyYXAvQ2FyZFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTa2lsbHMocHJvcHMpIHtcbiAgY29uc3QgeyBza2lsbHMgfSA9IHByb3BzO1xuXG4gIGNvbnN0IHNraWxsTGlzdCA9IChkYXRhKSA9PiB7XG4gICAgbGV0IGxpc3QgPSBkYXRhLm1hcCgoaXRlbSk9PntcbiAgICAgIHJldHVybiA8dGQ+e2l0ZW19PC90ZD5cbiAgICB9KVxuICAgIHJldHVybiBsaXN0XG4gIH07XG5cbiAgY29uc3QgY2FyZCA9IChkYXRhKSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxDYXJkIGtleSA9IHtkYXRhLnRpdGxlfSBzdHlsZT17eyB3aWR0aDogJzE4cmVtJyB9fT5cbiAgICAgICAgPENhcmQuQm9keT5cbiAgICAgICAgICA8Q2FyZC5UaXRsZT57ZGF0YS50aXRsZX08L0NhcmQuVGl0bGU+XG4gICAgICAgICAgPFRhYmxlPlxuICAgICAgICAgICAgPHRyPjx0aD57ZGF0YS50aXRsZX08L3RoPjwvdHI+XG4gICAgICAgICAgICB7c2tpbGxMaXN0KGRhdGEuaW5mbyl9XG4gICAgICAgICAgPC9UYWJsZT5cbiAgICAgICAgPC9DYXJkLkJvZHk+XG4gICAgICA8L0NhcmQ+XG4gICAgKTtcbiAgfTtcblxuICBjb25zdCBjYXJkTGlzdCA9IChkYXRhKSA9PiB7XG4gICAgY29uc3QgbGlzdCA9IGRhdGEubWFwKChpbmZvKSA9PiB7cmV0dXJuIGNhcmQoaW5mbyl9KTtcbiAgICByZXR1cm4gbGlzdDtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuc2tpbGxzfT5cbiAgICAgIDxoMT5Ta2lsbHM8L2gxPlxuICAgICAge2NhcmRMaXN0KHNraWxscyl9XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Skills/Skills.jsx\n");

/***/ })

});