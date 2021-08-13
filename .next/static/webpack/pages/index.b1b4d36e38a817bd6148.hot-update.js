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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Skills; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_bootstrap_Table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap/Table */ \"./node_modules/react-bootstrap/esm/Table.js\");\n/* harmony import */ var _styles_Skills_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../styles/Skills.module.scss */ \"./styles/Skills.module.scss\");\n/* harmony import */ var _styles_Skills_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_Skills_module_scss__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap/Card */ \"./node_modules/react-bootstrap/esm/Card.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\nvar _jsxFileName = \"/Users/kelvindt/Projects/portfolio/components/Skills/Skills.jsx\";\n\n\n\n\nfunction Skills(props) {\n  var _this = this;\n\n  var skills = props.skills;\n\n  var icon = function icon(data) {\n    var icon = data.icon;\n\n    var isString = function isString(data) {\n      return Object.prototype.toString.call(icon) === \"[object String]\";\n    };\n\n    if (isString(data.icon)) {\n      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"i\", {\n        \"class\": data.icon\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 20,\n        columnNumber: 14\n      }, _this);\n    } else {// return data.icon\n    }\n  };\n\n  var skillList = function skillList(data) {\n    var list = data.map(function (item) {\n      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n        children: [\" \", icon(item), \" \", item.name, \" \"]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 30,\n        columnNumber: 9\n      }, _this);\n    });\n    return list;\n  };\n\n  var card = function card(data) {\n    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_1__.default, {\n      style: {\n        width: \"18rem\"\n      },\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_1__.default.Body, {\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_1__.default.Title, {\n          children: data.title\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 43,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_1__.default.Text, {\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Table__WEBPACK_IMPORTED_MODULE_2__.default, {\n            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tbody\", {\n              children: skillList(data.info)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 46,\n              columnNumber: 15\n            }, _this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 45,\n            columnNumber: 13\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 44,\n          columnNumber: 11\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 42,\n        columnNumber: 9\n      }, _this)\n    }, data.title, false, {\n      fileName: _jsxFileName,\n      lineNumber: 41,\n      columnNumber: 7\n    }, _this);\n  };\n\n  var cardList = function cardList(data) {\n    var list = data.map(function (info) {\n      return card(info);\n    });\n    return list;\n  };\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n    className: (_styles_Skills_module_scss__WEBPACK_IMPORTED_MODULE_3___default().skills),\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n      children: \"Skills\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 63,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      className: (_styles_Skills_module_scss__WEBPACK_IMPORTED_MODULE_3___default().cardList),\n      children: cardList(skills)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 64,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 62,\n    columnNumber: 5\n  }, this);\n}\n_c = Skills;\n\nvar _c;\n\n$RefreshReg$(_c, \"Skills\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Ta2lsbHMvU2tpbGxzLmpzeD9lZDQ1Il0sIm5hbWVzIjpbIlNraWxscyIsInByb3BzIiwic2tpbGxzIiwiaWNvbiIsImRhdGEiLCJpc1N0cmluZyIsIk9iamVjdCIsInByb3RvdHlwZSIsInRvU3RyaW5nIiwiY2FsbCIsInNraWxsTGlzdCIsImxpc3QiLCJtYXAiLCJpdGVtIiwibmFtZSIsImNhcmQiLCJ3aWR0aCIsInRpdGxlIiwiaW5mbyIsImNhcmRMaXN0Iiwic3R5bGVzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBO0FBRUE7QUFFZSxTQUFTQSxNQUFULENBQWdCQyxLQUFoQixFQUF1QjtBQUFBOztBQUFBLE1BQzVCQyxNQUQ0QixHQUNqQkQsS0FEaUIsQ0FDNUJDLE1BRDRCOztBQUdwQyxNQUFNQyxJQUFJLEdBQUcsY0FBQ0MsSUFBRCxFQUFVO0FBRXJCLFFBQUlELElBQUksR0FBR0MsSUFBSSxDQUFDRCxJQUFoQjs7QUFFQSxRQUFNRSxRQUFRLEdBQUcsU0FBWEEsUUFBVyxDQUFDRCxJQUFELEVBQVU7QUFDekIsYUFBT0UsTUFBTSxDQUFDQyxTQUFQLENBQWlCQyxRQUFqQixDQUEwQkMsSUFBMUIsQ0FBK0JOLElBQS9CLE1BQXlDLGlCQUFoRDtBQUNELEtBRkQ7O0FBSUEsUUFBSUUsUUFBUSxDQUFDRCxJQUFJLENBQUNELElBQU4sQ0FBWixFQUF5QjtBQUN2QiwwQkFBTztBQUFHLGlCQUFPQyxJQUFJLENBQUNEO0FBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUFQO0FBQ0QsS0FGRCxNQUdLLENBQ0g7QUFDRDtBQUNGLEdBZEQ7O0FBZ0JBLE1BQU1PLFNBQVMsR0FBRyxTQUFaQSxTQUFZLENBQUNOLElBQUQsRUFBVTtBQUMxQixRQUFJTyxJQUFJLEdBQUdQLElBQUksQ0FBQ1EsR0FBTCxDQUFTLFVBQUNDLElBQUQsRUFBVTtBQUM1QiwwQkFDRTtBQUFBLG1CQUNHLEdBREgsRUFFR1YsSUFBSSxDQUFDVSxJQUFELENBRlAsT0FFZ0JBLElBQUksQ0FBQ0MsSUFGckIsRUFFMkIsR0FGM0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREY7QUFNRCxLQVBVLENBQVg7QUFRQSxXQUFPSCxJQUFQO0FBQ0QsR0FWRDs7QUFZQSxNQUFNSSxJQUFJLEdBQUcsU0FBUEEsSUFBTyxDQUFDWCxJQUFELEVBQVU7QUFDckIsd0JBQ0UsOERBQUMseURBQUQ7QUFBdUIsV0FBSyxFQUFFO0FBQUVZLGFBQUssRUFBRTtBQUFULE9BQTlCO0FBQUEsNkJBQ0UsOERBQUMsOERBQUQ7QUFBQSxnQ0FDRSw4REFBQywrREFBRDtBQUFBLG9CQUFhWixJQUFJLENBQUNhO0FBQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREYsZUFFRSw4REFBQyw4REFBRDtBQUFBLGlDQUNFLDhEQUFDLDBEQUFEO0FBQUEsbUNBQ0U7QUFBQSx3QkFBUVAsU0FBUyxDQUFDTixJQUFJLENBQUNjLElBQU47QUFBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGLE9BQVdkLElBQUksQ0FBQ2EsS0FBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGO0FBWUQsR0FiRDs7QUFlQSxNQUFNRSxRQUFRLEdBQUcsU0FBWEEsUUFBVyxDQUFDZixJQUFELEVBQVU7QUFDekIsUUFBTU8sSUFBSSxHQUFHUCxJQUFJLENBQUNRLEdBQUwsQ0FBUyxVQUFDTSxJQUFELEVBQVU7QUFDOUIsYUFBT0gsSUFBSSxDQUFDRyxJQUFELENBQVg7QUFDRCxLQUZZLENBQWI7QUFHQSxXQUFPUCxJQUFQO0FBQ0QsR0FMRDs7QUFPQSxzQkFDRTtBQUFLLGFBQVMsRUFBRVMsMEVBQWhCO0FBQUEsNEJBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixlQUVFO0FBQUssZUFBUyxFQUFFQSw0RUFBaEI7QUFBQSxnQkFBa0NELFFBQVEsQ0FBQ2pCLE1BQUQ7QUFBMUM7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBTUQ7S0EzRHVCRixNIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9Ta2lsbHMvU2tpbGxzLmpzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBUYWJsZSBmcm9tIFwicmVhY3QtYm9vdHN0cmFwL1RhYmxlXCI7XG5pbXBvcnQgeyBIaURhdGFiYXNlIH0gZnJvbSBcInJlYWN0LWljb25zL2hpXCI7XG5cbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4uLy4uL3N0eWxlcy9Ta2lsbHMubW9kdWxlLnNjc3NcIjtcblxuaW1wb3J0IENhcmQgZnJvbSBcInJlYWN0LWJvb3RzdHJhcC9DYXJkXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNraWxscyhwcm9wcykge1xuICBjb25zdCB7IHNraWxscyB9ID0gcHJvcHM7XG5cbiAgY29uc3QgaWNvbiA9IChkYXRhKSA9PiB7XG5cbiAgICBsZXQgaWNvbiA9IGRhdGEuaWNvblxuXG4gICAgY29uc3QgaXNTdHJpbmcgPSAoZGF0YSkgPT4ge1xuICAgICAgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChpY29uKSA9PT0gXCJbb2JqZWN0IFN0cmluZ11cIjtcbiAgICB9O1xuXG4gICAgaWYgKGlzU3RyaW5nKGRhdGEuaWNvbikpIHtcbiAgICAgIHJldHVybiA8aSBjbGFzcz17ZGF0YS5pY29ufSAvPjtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAvLyByZXR1cm4gZGF0YS5pY29uXG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IHNraWxsTGlzdCA9IChkYXRhKSA9PiB7XG4gICAgbGV0IGxpc3QgPSBkYXRhLm1hcCgoaXRlbSkgPT4ge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPHRyPlxuICAgICAgICAgIHtcIiBcIn1cbiAgICAgICAgICB7aWNvbihpdGVtKX0ge2l0ZW0ubmFtZX17XCIgXCJ9XG4gICAgICAgIDwvdHI+XG4gICAgICApO1xuICAgIH0pO1xuICAgIHJldHVybiBsaXN0O1xuICB9O1xuXG4gIGNvbnN0IGNhcmQgPSAoZGF0YSkgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICA8Q2FyZCBrZXk9e2RhdGEudGl0bGV9IHN0eWxlPXt7IHdpZHRoOiBcIjE4cmVtXCIgfX0+XG4gICAgICAgIDxDYXJkLkJvZHk+XG4gICAgICAgICAgPENhcmQuVGl0bGU+e2RhdGEudGl0bGV9PC9DYXJkLlRpdGxlPlxuICAgICAgICAgIDxDYXJkLlRleHQ+XG4gICAgICAgICAgICA8VGFibGU+XG4gICAgICAgICAgICAgIDx0Ym9keT57c2tpbGxMaXN0KGRhdGEuaW5mbyl9PC90Ym9keT5cbiAgICAgICAgICAgIDwvVGFibGU+XG4gICAgICAgICAgPC9DYXJkLlRleHQ+XG4gICAgICAgIDwvQ2FyZC5Cb2R5PlxuICAgICAgPC9DYXJkPlxuICAgICk7XG4gIH07XG5cbiAgY29uc3QgY2FyZExpc3QgPSAoZGF0YSkgPT4ge1xuICAgIGNvbnN0IGxpc3QgPSBkYXRhLm1hcCgoaW5mbykgPT4ge1xuICAgICAgcmV0dXJuIGNhcmQoaW5mbyk7XG4gICAgfSk7XG4gICAgcmV0dXJuIGxpc3Q7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnNraWxsc30+XG4gICAgICA8aDE+U2tpbGxzPC9oMT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY2FyZExpc3R9PntjYXJkTGlzdChza2lsbHMpfTwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Skills/Skills.jsx\n");

/***/ })

});