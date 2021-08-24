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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Icon; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_icons_go__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-icons/go */ \"./node_modules/react-icons/go/index.esm.js\");\n/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-icons/fa */ \"./node_modules/react-icons/fa/index.esm.js\");\n/* harmony import */ var react_icons_hi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-icons/hi */ \"./node_modules/react-icons/hi/index.esm.js\");\n/* harmony import */ var react_icons_si__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-icons/si */ \"./node_modules/react-icons/si/index.esm.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\nvar _jsxFileName = \"/Users/kelvindt/Projects/portfolio/components/comps/Icon.jsx\";\n\n\n\n\nfunction Icon(_ref) {\n  var _this = this;\n\n  var name = _ref.name,\n      title = _ref.title,\n      label = _ref.label;\n  var iconList = {\n    Bootstrap: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_fa__WEBPACK_IMPORTED_MODULE_1__.FaBootstrap, {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 13,\n      columnNumber: 16\n    }, this),\n    CSS: \"devicon-css3-plain\",\n    Email: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_hi__WEBPACK_IMPORTED_MODULE_2__.HiOutlineMail, {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 15,\n      columnNumber: 12\n    }, this),\n    Express: \"devicon-express-original\",\n    FontAwesome: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_fa__WEBPACK_IMPORTED_MODULE_1__.FaFontAwesome, {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 17,\n      columnNumber: 18\n    }, this),\n    Github: \"devicon-github-original\",\n    HTML: \"devicon-html5-plain\",\n    Javascript: \"devicon-javascript-plain\",\n    jQuery: \"devicon-jquery-plain\",\n    Linkedin: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_fa__WEBPACK_IMPORTED_MODULE_1__.FaLinkedin, {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 15\n    }, this),\n    NodeJS: \"devicon-nodejs-plain\",\n    PostgresSQL: \"devicon-postgresql-plain\",\n    Rails: \"devicon-rails-plain\",\n    ReactJS: \"devicon-react-original\",\n    ReactRouter: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_si__WEBPACK_IMPORTED_MODULE_3__.SiReactrouter, {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 27,\n      columnNumber: 18\n    }, this),\n    Ruby: \"devicon-ruby-plain\",\n    SASS: \"devicon-sass-original\",\n    SQL: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_go__WEBPACK_IMPORTED_MODULE_4__.GoDatabase, {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 30,\n      columnNumber: 10\n    }, this),\n    Storybook: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_si__WEBPACK_IMPORTED_MODULE_3__.SiStorybook, {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 16\n    }, this)\n  };\n\n  if (!iconList[name]) {\n    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_fa__WEBPACK_IMPORTED_MODULE_1__.FaProjectDiagram, {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 35,\n        columnNumber: 18\n      }, this), \" \", title ? title : name, \" \"]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 35,\n      columnNumber: 12\n    }, this);\n  }\n\n  var icon = function icon(data) {\n    var icon = iconList[data];\n\n    var isString = function isString(icon) {\n      return Object.prototype.toString.call(icon) === \"[object String]\";\n    };\n\n    console.log();\n\n    if (label.toString === \"false\") {\n      return isString(icon) ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"i\", {\n        \"class\": icon\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 47,\n        columnNumber: 31\n      }, _this) : {\n        icon: icon\n      };\n    }\n\n    return isString(icon) ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"i\", {\n        \"class\": icon\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 50,\n        columnNumber: 35\n      }, _this), \" \", title ? title : data]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 50,\n      columnNumber: 29\n    }, _this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n      children: [icon, \" \", title ? title : data]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 50,\n      columnNumber: 88\n    }, _this);\n  };\n\n  return icon(name);\n}\n_c = Icon;\n\nvar _c;\n\n$RefreshReg$(_c, \"Icon\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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S0FBRCxHQUFVQSxLQUFWLEdBQWtCdUIsSUFBaEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBQW5GO0FBRUQsR0FkRDs7QUFnQkEsU0FBT0QsSUFBSSxDQUFDdkIsSUFBRCxDQUFYO0FBQ0Q7S0E1Q3VCRCIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL2NvbXBzL0ljb24uanN4PzVlNGMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgR29EYXRhYmFzZSB9IGZyb20gXCJyZWFjdC1pY29ucy9nb1wiO1xuaW1wb3J0IHtcbiAgRmFCb290c3RyYXAsXG4gIEZhRm9udEF3ZXNvbWUsXG4gIEZhTGlua2VkaW4sXG4gIEZhUHJvamVjdERpYWdyYW0sXG59IGZyb20gXCJyZWFjdC1pY29ucy9mYVwiO1xuaW1wb3J0IHsgSGlPdXRsaW5lTWFpbCB9IGZyb20gXCJyZWFjdC1pY29ucy9oaVwiO1xuaW1wb3J0IHsgU2lSZWFjdHJvdXRlciwgU2lTdG9yeWJvb2sgfSBmcm9tIFwicmVhY3QtaWNvbnMvc2lcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSWNvbih7IG5hbWUsIHRpdGxlLCBsYWJlbCB9KSB7XG4gIGNvbnN0IGljb25MaXN0ID0ge1xuICAgIEJvb3RzdHJhcDogPEZhQm9vdHN0cmFwIC8+LFxuICAgIENTUzogXCJkZXZpY29uLWNzczMtcGxhaW5cIixcbiAgICBFbWFpbDogPEhpT3V0bGluZU1haWwgLz4sXG4gICAgRXhwcmVzczogXCJkZXZpY29uLWV4cHJlc3Mtb3JpZ2luYWxcIixcbiAgICBGb250QXdlc29tZTogPEZhRm9udEF3ZXNvbWUgLz4sXG4gICAgR2l0aHViOiBcImRldmljb24tZ2l0aHViLW9yaWdpbmFsXCIsXG4gICAgSFRNTDogXCJkZXZpY29uLWh0bWw1LXBsYWluXCIsXG4gICAgSmF2YXNjcmlwdDogXCJkZXZpY29uLWphdmFzY3JpcHQtcGxhaW5cIixcbiAgICBqUXVlcnk6IFwiZGV2aWNvbi1qcXVlcnktcGxhaW5cIixcbiAgICBMaW5rZWRpbjogPEZhTGlua2VkaW4gLz4sXG4gICAgTm9kZUpTOiBcImRldmljb24tbm9kZWpzLXBsYWluXCIsXG4gICAgUG9zdGdyZXNTUUw6IFwiZGV2aWNvbi1wb3N0Z3Jlc3FsLXBsYWluXCIsXG4gICAgUmFpbHM6IFwiZGV2aWNvbi1yYWlscy1wbGFpblwiLFxuICAgIFJlYWN0SlM6IFwiZGV2aWNvbi1yZWFjdC1vcmlnaW5hbFwiLFxuICAgIFJlYWN0Um91dGVyOiA8U2lSZWFjdHJvdXRlciAvPixcbiAgICBSdWJ5OiBcImRldmljb24tcnVieS1wbGFpblwiLFxuICAgIFNBU1M6IFwiZGV2aWNvbi1zYXNzLW9yaWdpbmFsXCIsXG4gICAgU1FMOiA8R29EYXRhYmFzZSAvPixcbiAgICBTdG9yeWJvb2s6IDxTaVN0b3J5Ym9vayAvPixcbiAgfTtcblxuICBpZiAoIWljb25MaXN0W25hbWVdKSB7XG4gICAgcmV0dXJuIDxzcGFuPjxGYVByb2plY3REaWFncmFtIC8+IHsodGl0bGUpID8gdGl0bGUgOiBuYW1lfSA8L3NwYW4+O1xuICB9XG5cbiAgY29uc3QgaWNvbiA9IChkYXRhKSA9PiB7XG4gICAgY29uc3QgaWNvbiA9IGljb25MaXN0W2RhdGFdO1xuXG4gICAgY29uc3QgaXNTdHJpbmcgPSAoaWNvbikgPT4ge1xuICAgICAgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChpY29uKSA9PT0gXCJbb2JqZWN0IFN0cmluZ11cIjtcbiAgICB9O1xuICAgIGNvbnNvbGUubG9nKClcblxuICAgIGlmKGxhYmVsLnRvU3RyaW5nPT09XCJmYWxzZVwiKXtcbiAgICAgIHJldHVybiBpc1N0cmluZyhpY29uKSA/IDxpIGNsYXNzPXtpY29ufSAvPiA6IHtpY29ufTtcbiAgICB9XG5cbiAgICByZXR1cm4gaXNTdHJpbmcoaWNvbikgPyA8c3Bhbj48aSBjbGFzcz17aWNvbn0gLz4geyh0aXRsZSkgPyB0aXRsZSA6IGRhdGF9PC9zcGFuPiA6IDxzcGFuPntpY29ufSB7KHRpdGxlKSA/IHRpdGxlIDogZGF0YX08L3NwYW4+O1xuXG4gIH07XG5cbiAgcmV0dXJuIGljb24obmFtZSk7XG59XG4iXSwibmFtZXMiOlsiR29EYXRhYmFzZSIsIkZhQm9vdHN0cmFwIiwiRmFGb250QXdlc29tZSIsIkZhTGlua2VkaW4iLCJGYVByb2plY3REaWFncmFtIiwiSGlPdXRsaW5lTWFpbCIsIlNpUmVhY3Ryb3V0ZXIiLCJTaVN0b3J5Ym9vayIsIkljb24iLCJuYW1lIiwidGl0bGUiLCJsYWJlbCIsImljb25MaXN0IiwiQm9vdHN0cmFwIiwiQ1NTIiwiRW1haWwiLCJFeHByZXNzIiwiRm9udEF3ZXNvbWUiLCJHaXRodWIiLCJIVE1MIiwiSmF2YXNjcmlwdCIsImpRdWVyeSIsIkxpbmtlZGluIiwiTm9kZUpTIiwiUG9zdGdyZXNTUUwiLCJSYWlscyIsIlJlYWN0SlMiLCJSZWFjdFJvdXRlciIsIlJ1YnkiLCJTQVNTIiwiU1FMIiwiU3Rvcnlib29rIiwiaWNvbiIsImRhdGEiLCJpc1N0cmluZyIsIk9iamVjdCIsInByb3RvdHlwZSIsInRvU3RyaW5nIiwiY2FsbCIsImNvbnNvbGUiLCJsb2ciXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/comps/Icon.jsx\n");

/***/ })

});