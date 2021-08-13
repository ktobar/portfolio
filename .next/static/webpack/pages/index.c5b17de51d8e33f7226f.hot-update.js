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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Skills; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_bootstrap_Table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap/Table */ \"./node_modules/react-bootstrap/esm/Table.js\");\n/* harmony import */ var _styles_Skills_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../styles/Skills.module.scss */ \"./styles/Skills.module.scss\");\n/* harmony import */ var _styles_Skills_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_Skills_module_scss__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap/Card */ \"./node_modules/react-bootstrap/esm/Card.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\nvar _jsxFileName = \"/Users/kelvindt/Projects/portfolio/components/Skills/Skills.jsx\";\n\n\n\n\nfunction Skills(props) {\n  var _this = this;\n\n  var skills = props.skills;\n\n  var icon = function icon(data) {\n    if (typeof data.icon) {\n      console.log(typeof data.icon);\n    }\n  };\n\n  var skillList = function skillList(data) {\n    var list = data.map(function (item) {\n      icon(item.icon);\n      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n        children: [\" \", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"i\", {\n          \"class\": item.icon\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 21,\n          columnNumber: 19\n        }, _this), \" \", item.name, \" \"]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 21,\n        columnNumber: 14\n      }, _this);\n    });\n    return list;\n  };\n\n  var card = function card(data) {\n    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_1__.default, {\n      style: {\n        width: \"18rem\"\n      },\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_1__.default.Body, {\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_1__.default.Title, {\n          children: data.title\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 30,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_1__.default.Text, {\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Table__WEBPACK_IMPORTED_MODULE_2__.default, {\n            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tbody\", {\n              children: skillList(data.info)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 33,\n              columnNumber: 15\n            }, _this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 32,\n            columnNumber: 13\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 31,\n          columnNumber: 11\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 29,\n        columnNumber: 9\n      }, _this)\n    }, data.title, false, {\n      fileName: _jsxFileName,\n      lineNumber: 28,\n      columnNumber: 7\n    }, _this);\n  };\n\n  var cardList = function cardList(data) {\n    var list = data.map(function (info) {\n      return card(info);\n    });\n    return list;\n  };\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n    className: (_styles_Skills_module_scss__WEBPACK_IMPORTED_MODULE_3___default().skills),\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n      children: \"Skills\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 52,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      className: (_styles_Skills_module_scss__WEBPACK_IMPORTED_MODULE_3___default().cardList),\n      children: cardList(skills)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 53,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 51,\n    columnNumber: 5\n  }, this);\n}\n_c = Skills;\n\nvar _c;\n\n$RefreshReg$(_c, \"Skills\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Ta2lsbHMvU2tpbGxzLmpzeD9lZDQ1Il0sIm5hbWVzIjpbIlNraWxscyIsInByb3BzIiwic2tpbGxzIiwiaWNvbiIsImRhdGEiLCJjb25zb2xlIiwibG9nIiwic2tpbGxMaXN0IiwibGlzdCIsIm1hcCIsIml0ZW0iLCJuYW1lIiwiY2FyZCIsIndpZHRoIiwidGl0bGUiLCJpbmZvIiwiY2FyZExpc3QiLCJzdHlsZXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBR0E7QUFFQTtBQUVlLFNBQVNBLE1BQVQsQ0FBZ0JDLEtBQWhCLEVBQXVCO0FBQUE7O0FBQUEsTUFDNUJDLE1BRDRCLEdBQ2pCRCxLQURpQixDQUM1QkMsTUFENEI7O0FBR3BDLE1BQU1DLElBQUksR0FBRyxTQUFQQSxJQUFPLENBQUNDLElBQUQsRUFBUztBQUNwQixRQUFJLE9BQU9BLElBQUksQ0FBQ0QsSUFBaEIsRUFBc0I7QUFDcEJFLGFBQU8sQ0FBQ0MsR0FBUixDQUFZLE9BQU9GLElBQUksQ0FBQ0QsSUFBeEI7QUFDRDtBQUNGLEdBSkQ7O0FBTUEsTUFBTUksU0FBUyxHQUFHLFNBQVpBLFNBQVksQ0FBQ0gsSUFBRCxFQUFVO0FBQzFCLFFBQUlJLElBQUksR0FBR0osSUFBSSxDQUFDSyxHQUFMLENBQVMsVUFBQ0MsSUFBRCxFQUFVO0FBQzVCUCxVQUFJLENBQUNPLElBQUksQ0FBQ1AsSUFBTixDQUFKO0FBQ0EsMEJBQU87QUFBQSxxQ0FBSztBQUFHLG1CQUFPTyxJQUFJLENBQUNQO0FBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFBTCxPQUE2Qk8sSUFBSSxDQUFDQyxJQUFsQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFBUDtBQUNELEtBSFUsQ0FBWDtBQUlBLFdBQU9ILElBQVA7QUFDRCxHQU5EOztBQVFBLE1BQU1JLElBQUksR0FBRyxTQUFQQSxJQUFPLENBQUNSLElBQUQsRUFBVTtBQUNyQix3QkFDRSw4REFBQyx5REFBRDtBQUF1QixXQUFLLEVBQUU7QUFBRVMsYUFBSyxFQUFFO0FBQVQsT0FBOUI7QUFBQSw2QkFDRSw4REFBQyw4REFBRDtBQUFBLGdDQUNFLDhEQUFDLCtEQUFEO0FBQUEsb0JBQWFULElBQUksQ0FBQ1U7QUFBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERixlQUVFLDhEQUFDLDhEQUFEO0FBQUEsaUNBQ0UsOERBQUMsMERBQUQ7QUFBQSxtQ0FDRTtBQUFBLHdCQUNHUCxTQUFTLENBQUNILElBQUksQ0FBQ1csSUFBTjtBQURaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERixPQUFXWCxJQUFJLENBQUNVLEtBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERjtBQWNELEdBZkQ7O0FBaUJBLE1BQU1FLFFBQVEsR0FBRyxTQUFYQSxRQUFXLENBQUNaLElBQUQsRUFBVTtBQUN6QixRQUFNSSxJQUFJLEdBQUdKLElBQUksQ0FBQ0ssR0FBTCxDQUFTLFVBQUNNLElBQUQsRUFBVTtBQUM5QixhQUFPSCxJQUFJLENBQUNHLElBQUQsQ0FBWDtBQUNELEtBRlksQ0FBYjtBQUdBLFdBQU9QLElBQVA7QUFDRCxHQUxEOztBQU9BLHNCQUNFO0FBQUssYUFBUyxFQUFFUywwRUFBaEI7QUFBQSw0QkFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLGVBRUU7QUFBSyxlQUFTLEVBQUVBLDRFQUFoQjtBQUFBLGdCQUFrQ0QsUUFBUSxDQUFDZCxNQUFEO0FBQTFDO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQU1EO0tBL0N1QkYsTSIsImZpbGUiOiIuL2NvbXBvbmVudHMvU2tpbGxzL1NraWxscy5qc3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgVGFibGUgZnJvbSBcInJlYWN0LWJvb3RzdHJhcC9UYWJsZVwiO1xuaW1wb3J0IHsgSGlEYXRhYmFzZSB9IGZyb20gXCJyZWFjdC1pY29ucy9oaVwiO1xuXG5cbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4uLy4uL3N0eWxlcy9Ta2lsbHMubW9kdWxlLnNjc3NcIjtcblxuaW1wb3J0IENhcmQgZnJvbSBcInJlYWN0LWJvb3RzdHJhcC9DYXJkXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNraWxscyhwcm9wcykge1xuICBjb25zdCB7IHNraWxscyB9ID0gcHJvcHM7XG5cbiAgY29uc3QgaWNvbiA9IChkYXRhKT0+IHtcbiAgICBpZiAodHlwZW9mIGRhdGEuaWNvbikge1xuICAgICAgY29uc29sZS5sb2codHlwZW9mIGRhdGEuaWNvbilcbiAgICB9XG4gIH07XG5cbiAgY29uc3Qgc2tpbGxMaXN0ID0gKGRhdGEpID0+IHtcbiAgICBsZXQgbGlzdCA9IGRhdGEubWFwKChpdGVtKSA9PiB7XG4gICAgICBpY29uKGl0ZW0uaWNvbilcbiAgICAgIHJldHVybiA8dHI+IDxpIGNsYXNzPXtpdGVtLmljb259Lz4ge2l0ZW0ubmFtZX0gPC90cj47XG4gICAgfSk7XG4gICAgcmV0dXJuIGxpc3Q7XG4gIH07XG5cbiAgY29uc3QgY2FyZCA9IChkYXRhKSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxDYXJkIGtleT17ZGF0YS50aXRsZX0gc3R5bGU9e3sgd2lkdGg6IFwiMThyZW1cIiB9fT5cbiAgICAgICAgPENhcmQuQm9keT5cbiAgICAgICAgICA8Q2FyZC5UaXRsZT57ZGF0YS50aXRsZX08L0NhcmQuVGl0bGU+XG4gICAgICAgICAgPENhcmQuVGV4dD5cbiAgICAgICAgICAgIDxUYWJsZT5cbiAgICAgICAgICAgICAgPHRib2R5PlxuICAgICAgICAgICAgICAgIHtza2lsbExpc3QoZGF0YS5pbmZvKX1cbiAgICAgICAgICAgICAgPC90Ym9keT5cbiAgICAgICAgICAgIDwvVGFibGU+XG4gICAgICAgICAgPC9DYXJkLlRleHQ+XG4gICAgICAgIDwvQ2FyZC5Cb2R5PlxuICAgICAgPC9DYXJkPlxuICAgICk7XG4gIH07XG5cbiAgY29uc3QgY2FyZExpc3QgPSAoZGF0YSkgPT4ge1xuICAgIGNvbnN0IGxpc3QgPSBkYXRhLm1hcCgoaW5mbykgPT4ge1xuICAgICAgcmV0dXJuIGNhcmQoaW5mbyk7XG4gICAgfSk7XG4gICAgcmV0dXJuIGxpc3Q7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnNraWxsc30+XG4gICAgICA8aDE+U2tpbGxzPC9oMT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY2FyZExpc3R9PntjYXJkTGlzdChza2lsbHMpfTwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Skills/Skills.jsx\n");

/***/ })

});