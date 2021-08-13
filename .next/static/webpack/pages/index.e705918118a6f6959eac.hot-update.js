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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Skills; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_bootstrap_Table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap/Table */ \"./node_modules/react-bootstrap/esm/Table.js\");\n/* harmony import */ var _styles_Skills_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../styles/Skills.module.scss */ \"./styles/Skills.module.scss\");\n/* harmony import */ var _styles_Skills_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_Skills_module_scss__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap/Card */ \"./node_modules/react-bootstrap/esm/Card.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\nvar _jsxFileName = \"/Users/kelvindt/Projects/portfolio/components/Skills/Skills.jsx\";\n\n\n\n\nfunction Skills(props) {\n  var _this = this;\n\n  var skills = props.skills;\n\n  var icon = function icon(data) {\n    var icon = data.icon;\n\n    var isString = function isString(data) {\n      return Object.prototype.toString.call(icon) === \"[object String]\";\n    };\n\n    return isString(icon) ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"i\", {\n      \"class\": icon\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 19,\n      columnNumber: 31\n    }, _this) : icon;\n  };\n\n  var skillList = function skillList(data) {\n    var list = data.map(function (item) {\n      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n        children: [\" \", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n          children: icon(item)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 28,\n          columnNumber: 13\n        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n          children: item.name\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 31,\n          columnNumber: 13\n        }, _this), \" \"]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 26,\n        columnNumber: 9\n      }, _this);\n    });\n    return list;\n  };\n\n  var card = function card(data) {\n    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_1__.default, {\n      style: {\n        width: \"18rem\"\n      },\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_1__.default.Body, {\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_1__.default.Title, {\n          children: data.title\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 45,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_1__.default.Text, {\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Table__WEBPACK_IMPORTED_MODULE_2__.default, {\n            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tbody\", {\n              children: skillList(data.info)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 48,\n              columnNumber: 15\n            }, _this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 47,\n            columnNumber: 13\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 46,\n          columnNumber: 11\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 44,\n        columnNumber: 9\n      }, _this)\n    }, data.title, false, {\n      fileName: _jsxFileName,\n      lineNumber: 43,\n      columnNumber: 7\n    }, _this);\n  };\n\n  var cardList = function cardList(data) {\n    var list = data.map(function (info) {\n      return card(info);\n    });\n    return list;\n  };\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n    className: (_styles_Skills_module_scss__WEBPACK_IMPORTED_MODULE_3___default().skills),\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n      children: \"Skills\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 65,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      className: (_styles_Skills_module_scss__WEBPACK_IMPORTED_MODULE_3___default().cardList),\n      children: cardList(skills)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 66,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 64,\n    columnNumber: 5\n  }, this);\n}\n_c = Skills;\n\nvar _c;\n\n$RefreshReg$(_c, \"Skills\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Ta2lsbHMvU2tpbGxzLmpzeD9lZDQ1Il0sIm5hbWVzIjpbIlNraWxscyIsInByb3BzIiwic2tpbGxzIiwiaWNvbiIsImRhdGEiLCJpc1N0cmluZyIsIk9iamVjdCIsInByb3RvdHlwZSIsInRvU3RyaW5nIiwiY2FsbCIsInNraWxsTGlzdCIsImxpc3QiLCJtYXAiLCJpdGVtIiwibmFtZSIsImNhcmQiLCJ3aWR0aCIsInRpdGxlIiwiaW5mbyIsImNhcmRMaXN0Iiwic3R5bGVzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBO0FBRUE7QUFFZSxTQUFTQSxNQUFULENBQWdCQyxLQUFoQixFQUF1QjtBQUFBOztBQUFBLE1BQzVCQyxNQUQ0QixHQUNqQkQsS0FEaUIsQ0FDNUJDLE1BRDRCOztBQUdwQyxNQUFNQyxJQUFJLEdBQUcsY0FBQ0MsSUFBRCxFQUFVO0FBRXJCLFFBQU1ELElBQUksR0FBR0MsSUFBSSxDQUFDRCxJQUFsQjs7QUFFQSxRQUFNRSxRQUFRLEdBQUcsU0FBWEEsUUFBVyxDQUFDRCxJQUFELEVBQVU7QUFDekIsYUFBT0UsTUFBTSxDQUFDQyxTQUFQLENBQWlCQyxRQUFqQixDQUEwQkMsSUFBMUIsQ0FBK0JOLElBQS9CLE1BQXlDLGlCQUFoRDtBQUNELEtBRkQ7O0FBSUEsV0FBUUUsUUFBUSxDQUFDRixJQUFELENBQVQsZ0JBQW1CO0FBQUcsZUFBT0E7QUFBVjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBQW5CLEdBQXdDQSxJQUEvQztBQUVELEdBVkQ7O0FBWUEsTUFBTU8sU0FBUyxHQUFHLFNBQVpBLFNBQVksQ0FBQ04sSUFBRCxFQUFVO0FBQzFCLFFBQUlPLElBQUksR0FBR1AsSUFBSSxDQUFDUSxHQUFMLENBQVMsVUFBQ0MsSUFBRCxFQUFVO0FBQzVCLDBCQUNFO0FBQUEsbUJBQ0csR0FESCxlQUVJO0FBQUEsb0JBQ0NWLElBQUksQ0FBQ1UsSUFBRDtBQURMO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRkosZUFLSTtBQUFBLG9CQUNDQSxJQUFJLENBQUNDO0FBRE47QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFMSixFQVFHLEdBUkg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREY7QUFZRCxLQWJVLENBQVg7QUFjQSxXQUFPSCxJQUFQO0FBQ0QsR0FoQkQ7O0FBa0JBLE1BQU1JLElBQUksR0FBRyxTQUFQQSxJQUFPLENBQUNYLElBQUQsRUFBVTtBQUNyQix3QkFDRSw4REFBQyx5REFBRDtBQUF1QixXQUFLLEVBQUU7QUFBRVksYUFBSyxFQUFFO0FBQVQsT0FBOUI7QUFBQSw2QkFDRSw4REFBQyw4REFBRDtBQUFBLGdDQUNFLDhEQUFDLCtEQUFEO0FBQUEsb0JBQWFaLElBQUksQ0FBQ2E7QUFBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERixlQUVFLDhEQUFDLDhEQUFEO0FBQUEsaUNBQ0UsOERBQUMsMERBQUQ7QUFBQSxtQ0FDRTtBQUFBLHdCQUFRUCxTQUFTLENBQUNOLElBQUksQ0FBQ2MsSUFBTjtBQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREYsT0FBV2QsSUFBSSxDQUFDYSxLQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREY7QUFZRCxHQWJEOztBQWVBLE1BQU1FLFFBQVEsR0FBRyxTQUFYQSxRQUFXLENBQUNmLElBQUQsRUFBVTtBQUN6QixRQUFNTyxJQUFJLEdBQUdQLElBQUksQ0FBQ1EsR0FBTCxDQUFTLFVBQUNNLElBQUQsRUFBVTtBQUM5QixhQUFPSCxJQUFJLENBQUNHLElBQUQsQ0FBWDtBQUNELEtBRlksQ0FBYjtBQUdBLFdBQU9QLElBQVA7QUFDRCxHQUxEOztBQU9BLHNCQUNFO0FBQUssYUFBUyxFQUFFUywwRUFBaEI7QUFBQSw0QkFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLGVBRUU7QUFBSyxlQUFTLEVBQUVBLDRFQUFoQjtBQUFBLGdCQUFrQ0QsUUFBUSxDQUFDakIsTUFBRDtBQUExQztBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFNRDtLQTdEdUJGLE0iLCJmaWxlIjoiLi9jb21wb25lbnRzL1NraWxscy9Ta2lsbHMuanN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFRhYmxlIGZyb20gXCJyZWFjdC1ib290c3RyYXAvVGFibGVcIjtcbmltcG9ydCB7IEhpRGF0YWJhc2UgfSBmcm9tIFwicmVhY3QtaWNvbnMvaGlcIjtcblxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vLi4vc3R5bGVzL1NraWxscy5tb2R1bGUuc2Nzc1wiO1xuXG5pbXBvcnQgQ2FyZCBmcm9tIFwicmVhY3QtYm9vdHN0cmFwL0NhcmRcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU2tpbGxzKHByb3BzKSB7XG4gIGNvbnN0IHsgc2tpbGxzIH0gPSBwcm9wcztcblxuICBjb25zdCBpY29uID0gKGRhdGEpID0+IHtcblxuICAgIGNvbnN0IGljb24gPSBkYXRhLmljb25cblxuICAgIGNvbnN0IGlzU3RyaW5nID0gKGRhdGEpID0+IHtcbiAgICAgIHJldHVybiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoaWNvbikgPT09IFwiW29iamVjdCBTdHJpbmddXCI7XG4gICAgfTtcblxuICAgIHJldHVybiAoaXNTdHJpbmcoaWNvbikpID8gPGkgY2xhc3M9e2ljb259IC8+IDogaWNvblxuICAgIFxuICB9O1xuXG4gIGNvbnN0IHNraWxsTGlzdCA9IChkYXRhKSA9PiB7XG4gICAgbGV0IGxpc3QgPSBkYXRhLm1hcCgoaXRlbSkgPT4ge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPHRyPlxuICAgICAgICAgIHtcIiBcIn1cbiAgICAgICAgICAgIDxzcGFuPlxuICAgICAgICAgICAge2ljb24oaXRlbSl9XG4gICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICA8c3Bhbj5cbiAgICAgICAgICAgIHtpdGVtLm5hbWV9XG4gICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAge1wiIFwifVxuICAgICAgICA8L3RyPlxuICAgICAgKTtcbiAgICB9KTtcbiAgICByZXR1cm4gbGlzdDtcbiAgfTtcblxuICBjb25zdCBjYXJkID0gKGRhdGEpID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgPENhcmQga2V5PXtkYXRhLnRpdGxlfSBzdHlsZT17eyB3aWR0aDogXCIxOHJlbVwiIH19PlxuICAgICAgICA8Q2FyZC5Cb2R5PlxuICAgICAgICAgIDxDYXJkLlRpdGxlPntkYXRhLnRpdGxlfTwvQ2FyZC5UaXRsZT5cbiAgICAgICAgICA8Q2FyZC5UZXh0PlxuICAgICAgICAgICAgPFRhYmxlPlxuICAgICAgICAgICAgICA8dGJvZHk+e3NraWxsTGlzdChkYXRhLmluZm8pfTwvdGJvZHk+XG4gICAgICAgICAgICA8L1RhYmxlPlxuICAgICAgICAgIDwvQ2FyZC5UZXh0PlxuICAgICAgICA8L0NhcmQuQm9keT5cbiAgICAgIDwvQ2FyZD5cbiAgICApO1xuICB9O1xuXG4gIGNvbnN0IGNhcmRMaXN0ID0gKGRhdGEpID0+IHtcbiAgICBjb25zdCBsaXN0ID0gZGF0YS5tYXAoKGluZm8pID0+IHtcbiAgICAgIHJldHVybiBjYXJkKGluZm8pO1xuICAgIH0pO1xuICAgIHJldHVybiBsaXN0O1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5za2lsbHN9PlxuICAgICAgPGgxPlNraWxsczwvaDE+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNhcmRMaXN0fT57Y2FyZExpc3Qoc2tpbGxzKX08L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Skills/Skills.jsx\n");

/***/ })

});