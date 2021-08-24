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

/***/ "./components/comps/Icon.jsx":
/*!***********************************!*\
  !*** ./components/comps/Icon.jsx ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Icon; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_icons_go__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-icons/go */ \"./node_modules/react-icons/go/index.esm.js\");\n/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-icons/fa */ \"./node_modules/react-icons/fa/index.esm.js\");\n/* harmony import */ var react_icons_hi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-icons/hi */ \"./node_modules/react-icons/hi/index.esm.js\");\n/* harmony import */ var react_icons_si__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-icons/si */ \"./node_modules/react-icons/si/index.esm.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\nvar _jsxFileName = \"/Users/kelvindt/Projects/portfolio/components/comps/Icon.jsx\";\n\n\n\n\nfunction Icon(_ref) {\n  var _this = this;\n\n  var name = _ref.name,\n      title = _ref.title,\n      label = _ref.label;\n  var iconList = {\n    Bootstrap: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_fa__WEBPACK_IMPORTED_MODULE_1__.FaBootstrap, {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 13,\n      columnNumber: 16\n    }, this),\n    CSS: \"devicon-css3-plain\",\n    Email: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_hi__WEBPACK_IMPORTED_MODULE_2__.HiOutlineMail, {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 15,\n      columnNumber: 12\n    }, this),\n    Express: \"devicon-express-original\",\n    FontAwesome: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_fa__WEBPACK_IMPORTED_MODULE_1__.FaFontAwesome, {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 17,\n      columnNumber: 18\n    }, this),\n    Github: \"devicon-github-original\",\n    HTML: \"devicon-html5-plain\",\n    Javascript: \"devicon-javascript-plain\",\n    jQuery: \"devicon-jquery-plain\",\n    Linkedin: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_fa__WEBPACK_IMPORTED_MODULE_1__.FaLinkedin, {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 15\n    }, this),\n    NodeJS: \"devicon-nodejs-plain\",\n    PostgresSQL: \"devicon-postgresql-plain\",\n    Rails: \"devicon-rails-plain\",\n    ReactJS: \"devicon-react-original\",\n    ReactRouter: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_si__WEBPACK_IMPORTED_MODULE_3__.SiReactrouter, {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 27,\n      columnNumber: 18\n    }, this),\n    Ruby: \"devicon-ruby-plain\",\n    SASS: \"devicon-sass-original\",\n    SQL: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_go__WEBPACK_IMPORTED_MODULE_4__.GoDatabase, {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 30,\n      columnNumber: 10\n    }, this),\n    Storybook: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_si__WEBPACK_IMPORTED_MODULE_3__.SiStorybook, {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 16\n    }, this)\n  };\n\n  if (!iconList[name]) {\n    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_fa__WEBPACK_IMPORTED_MODULE_1__.FaProjectDiagram, {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 35,\n        columnNumber: 18\n      }, this), \" \", title ? title : name, \" \"]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 35,\n      columnNumber: 12\n    }, this);\n  }\n\n  var icon = function icon(data) {\n    var icon = iconList[data];\n\n    var isString = function isString(icon) {\n      return Object.prototype.toString.call(icon) === \"[object String]\";\n    };\n\n    if (label === false) {\n      return isString(icon) ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"i\", {\n        \"class\": icon\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 47,\n        columnNumber: 33\n      }, _this) : {\n        icon: icon\n      };\n    }\n\n    return isString(icon) ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"i\", {\n        \"class\": icon\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 50,\n        columnNumber: 37\n      }, _this), \" \", title ? title : data]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 50,\n      columnNumber: 31\n    }, _this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n      children: [icon, \" \", title ? title : data]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 50,\n      columnNumber: 90\n    }, _this);\n  };\n\n  return icon(name);\n}\n_c = Icon;\n\nvar _c;\n\n$RefreshReg$(_c, \"Icon\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtBQUFBO0FBQUEsYUFBbkY7QUFFSCxHQWREOztBQWdCQSxTQUFPRCxJQUFJLENBQUN2QixJQUFELENBQVg7QUFDRDtLQTVDdUJEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvY29tcHMvSWNvbi5qc3g/NWU0YyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBHb0RhdGFiYXNlIH0gZnJvbSBcInJlYWN0LWljb25zL2dvXCI7XG5pbXBvcnQge1xuICBGYUJvb3RzdHJhcCxcbiAgRmFGb250QXdlc29tZSxcbiAgRmFMaW5rZWRpbixcbiAgRmFQcm9qZWN0RGlhZ3JhbSxcbn0gZnJvbSBcInJlYWN0LWljb25zL2ZhXCI7XG5pbXBvcnQgeyBIaU91dGxpbmVNYWlsIH0gZnJvbSBcInJlYWN0LWljb25zL2hpXCI7XG5pbXBvcnQgeyBTaVJlYWN0cm91dGVyLCBTaVN0b3J5Ym9vayB9IGZyb20gXCJyZWFjdC1pY29ucy9zaVwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBJY29uKHsgbmFtZSwgdGl0bGUsIGxhYmVsIH0pIHtcbiAgY29uc3QgaWNvbkxpc3QgPSB7XG4gICAgQm9vdHN0cmFwOiA8RmFCb290c3RyYXAgLz4sXG4gICAgQ1NTOiBcImRldmljb24tY3NzMy1wbGFpblwiLFxuICAgIEVtYWlsOiA8SGlPdXRsaW5lTWFpbCAvPixcbiAgICBFeHByZXNzOiBcImRldmljb24tZXhwcmVzcy1vcmlnaW5hbFwiLFxuICAgIEZvbnRBd2Vzb21lOiA8RmFGb250QXdlc29tZSAvPixcbiAgICBHaXRodWI6IFwiZGV2aWNvbi1naXRodWItb3JpZ2luYWxcIixcbiAgICBIVE1MOiBcImRldmljb24taHRtbDUtcGxhaW5cIixcbiAgICBKYXZhc2NyaXB0OiBcImRldmljb24tamF2YXNjcmlwdC1wbGFpblwiLFxuICAgIGpRdWVyeTogXCJkZXZpY29uLWpxdWVyeS1wbGFpblwiLFxuICAgIExpbmtlZGluOiA8RmFMaW5rZWRpbiAvPixcbiAgICBOb2RlSlM6IFwiZGV2aWNvbi1ub2RlanMtcGxhaW5cIixcbiAgICBQb3N0Z3Jlc1NRTDogXCJkZXZpY29uLXBvc3RncmVzcWwtcGxhaW5cIixcbiAgICBSYWlsczogXCJkZXZpY29uLXJhaWxzLXBsYWluXCIsXG4gICAgUmVhY3RKUzogXCJkZXZpY29uLXJlYWN0LW9yaWdpbmFsXCIsXG4gICAgUmVhY3RSb3V0ZXI6IDxTaVJlYWN0cm91dGVyIC8+LFxuICAgIFJ1Ynk6IFwiZGV2aWNvbi1ydWJ5LXBsYWluXCIsXG4gICAgU0FTUzogXCJkZXZpY29uLXNhc3Mtb3JpZ2luYWxcIixcbiAgICBTUUw6IDxHb0RhdGFiYXNlIC8+LFxuICAgIFN0b3J5Ym9vazogPFNpU3Rvcnlib29rIC8+LFxuICB9O1xuXG4gIGlmICghaWNvbkxpc3RbbmFtZV0pIHtcbiAgICByZXR1cm4gPHNwYW4+PEZhUHJvamVjdERpYWdyYW0gLz4geyh0aXRsZSkgPyB0aXRsZSA6IG5hbWV9IDwvc3Bhbj47XG4gIH1cblxuICBjb25zdCBpY29uID0gKGRhdGEpID0+IHtcbiAgICBjb25zdCBpY29uID0gaWNvbkxpc3RbZGF0YV07XG5cbiAgICBjb25zdCBpc1N0cmluZyA9IChpY29uKSA9PiB7XG4gICAgICByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGljb24pID09PSBcIltvYmplY3QgU3RyaW5nXVwiO1xuICAgIH07XG5cblxuICAgICAgaWYobGFiZWw9PT1mYWxzZSl7XG4gICAgICAgIHJldHVybiBpc1N0cmluZyhpY29uKSA/IDxpIGNsYXNzPXtpY29ufSAvPiA6IHtpY29ufTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGlzU3RyaW5nKGljb24pID8gPHNwYW4+PGkgY2xhc3M9e2ljb259IC8+IHsodGl0bGUpID8gdGl0bGUgOiBkYXRhfTwvc3Bhbj4gOiA8c3Bhbj57aWNvbn0geyh0aXRsZSkgPyB0aXRsZSA6IGRhdGF9PC9zcGFuPjtcblxuICB9O1xuXG4gIHJldHVybiBpY29uKG5hbWUpO1xufVxuIl0sIm5hbWVzIjpbIkdvRGF0YWJhc2UiLCJGYUJvb3RzdHJhcCIsIkZhRm9udEF3ZXNvbWUiLCJGYUxpbmtlZGluIiwiRmFQcm9qZWN0RGlhZ3JhbSIsIkhpT3V0bGluZU1haWwiLCJTaVJlYWN0cm91dGVyIiwiU2lTdG9yeWJvb2siLCJJY29uIiwibmFtZSIsInRpdGxlIiwibGFiZWwiLCJpY29uTGlzdCIsIkJvb3RzdHJhcCIsIkNTUyIsIkVtYWlsIiwiRXhwcmVzcyIsIkZvbnRBd2Vzb21lIiwiR2l0aHViIiwiSFRNTCIsIkphdmFzY3JpcHQiLCJqUXVlcnkiLCJMaW5rZWRpbiIsIk5vZGVKUyIsIlBvc3RncmVzU1FMIiwiUmFpbHMiLCJSZWFjdEpTIiwiUmVhY3RSb3V0ZXIiLCJSdWJ5IiwiU0FTUyIsIlNRTCIsIlN0b3J5Ym9vayIsImljb24iLCJkYXRhIiwiaXNTdHJpbmciLCJPYmplY3QiLCJwcm90b3R5cGUiLCJ0b1N0cmluZyIsImNhbGwiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/comps/Icon.jsx\n");

/***/ })

});