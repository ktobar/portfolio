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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Icon; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_icons_go__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-icons/go */ \"./node_modules/react-icons/go/index.esm.js\");\n/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-icons/fa */ \"./node_modules/react-icons/fa/index.esm.js\");\n/* harmony import */ var react_icons_hi__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-icons/hi */ \"./node_modules/react-icons/hi/index.esm.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\nvar _jsxFileName = \"/Users/kelvindt/Projects/portfolio/components/comps/Icon.jsx\";\n\n\n\nfunction Icon(_ref) {\n  var _this = this;\n\n  var name = _ref.name;\n  var iconList = {\n    Javascript: \"devicon-javascript-plain\",\n    HTML: \"devicon-html5-plain\",\n    CSS: \"devicon-css3-plain\",\n    SQL: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_go__WEBPACK_IMPORTED_MODULE_1__.GoDatabase, {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 10,\n      columnNumber: 10\n    }, this),\n    Ruby: \"devicon-ruby-plain\",\n    ReactJS: \"devicon-react-original\",\n    NodeJS: \"devicon-nodejs-plain\",\n    Express: \"devicon-express-original\",\n    Rails: \"devicon-rails-plain\",\n    JQuery: \"devicon-jquery-plain\",\n    SASS: \"devicon-sass-original\",\n    Bootstrap: \"devicon-bootstrap-plain\",\n    FontAwesome: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_fa__WEBPACK_IMPORTED_MODULE_2__.FaFontAwesome, {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 19,\n      columnNumber: 18\n    }, this),\n    PostgresSQL: \"devicon-postgresql-plain\",\n    Email: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_hi__WEBPACK_IMPORTED_MODULE_3__.HiOutlineMail, {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 21,\n      columnNumber: 12\n    }, this),\n    Linkedin: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_fa__WEBPACK_IMPORTED_MODULE_2__.FaLinkedin, {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 15\n    }, this)\n  };\n\n  var icon = function icon(data) {\n    var icon = iconList[data];\n\n    var isString = function isString(icon) {\n      return Object.prototype.toString.call(icon) === \"[object String]\";\n    };\n\n    return isString(icon) ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"i\", {\n      \"class\": icon\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 32,\n      columnNumber: 29\n    }, _this) : icon;\n  };\n\n  if (!iconList[name]) {\n    return null;\n  }\n\n  return icon(name);\n}\n_c = Icon;\n\nvar _c;\n\n$RefreshReg$(_c, \"Icon\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2NvbXBzL0ljb24uanN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVlLFNBQVNJLElBQVQsT0FBd0I7QUFBQTs7QUFBQSxNQUFSQyxJQUFRLFFBQVJBLElBQVE7QUFDckMsTUFBTUMsUUFBUSxHQUFHO0FBQ2ZDLElBQUFBLFVBQVUsRUFBRSwwQkFERztBQUVmQyxJQUFBQSxJQUFJLEVBQUUscUJBRlM7QUFHZkMsSUFBQUEsR0FBRyxFQUFFLG9CQUhVO0FBSWZDLElBQUFBLEdBQUcsZUFBRSw4REFBQyxzREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBSlU7QUFLZkMsSUFBQUEsSUFBSSxFQUFFLG9CQUxTO0FBTWZDLElBQUFBLE9BQU8sRUFBRSx3QkFOTTtBQU9mQyxJQUFBQSxNQUFNLEVBQUUsc0JBUE87QUFRZkMsSUFBQUEsT0FBTyxFQUFFLDBCQVJNO0FBU2ZDLElBQUFBLEtBQUssRUFBRSxxQkFUUTtBQVVmQyxJQUFBQSxNQUFNLEVBQUUsc0JBVk87QUFXZkMsSUFBQUEsSUFBSSxFQUFFLHVCQVhTO0FBWWZDLElBQUFBLFNBQVMsRUFBRSx5QkFaSTtBQWFmQyxJQUFBQSxXQUFXLGVBQUUsOERBQUMseURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQWJFO0FBY2ZDLElBQUFBLFdBQVcsRUFBRSwwQkFkRTtBQWVmQyxJQUFBQSxLQUFLLGVBQUUsOERBQUMseURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQWZRO0FBZ0JmQyxJQUFBQSxRQUFRLGVBQUUsOERBQUMsc0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQWhCSyxHQUFqQjs7QUFtQkEsTUFBTUMsSUFBSSxHQUFHLGNBQUNDLElBQUQsRUFBVTtBQUNyQixRQUFNRCxJQUFJLEdBQUdqQixRQUFRLENBQUNrQixJQUFELENBQXJCOztBQUVBLFFBQU1DLFFBQVEsR0FBRyxTQUFYQSxRQUFXLENBQUNGLElBQUQsRUFBVTtBQUN6QixhQUFPRyxNQUFNLENBQUNDLFNBQVAsQ0FBaUJDLFFBQWpCLENBQTBCQyxJQUExQixDQUErQk4sSUFBL0IsTUFBeUMsaUJBQWhEO0FBQ0QsS0FGRDs7QUFJQSxXQUFPRSxRQUFRLENBQUNGLElBQUQsQ0FBUixnQkFBaUI7QUFBRyxlQUFPQTtBQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFBakIsR0FBc0NBLElBQTdDO0FBQ0QsR0FSRDs7QUFVQSxNQUFJLENBQUNqQixRQUFRLENBQUNELElBQUQsQ0FBYixFQUFxQjtBQUNuQixXQUFPLElBQVA7QUFDRDs7QUFFRCxTQUFPa0IsSUFBSSxDQUFDbEIsSUFBRCxDQUFYO0FBQ0Q7S0FuQ3VCRCIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL2NvbXBzL0ljb24uanN4PzVlNGMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgR29EYXRhYmFzZSB9IGZyb20gXCJyZWFjdC1pY29ucy9nb1wiO1xuaW1wb3J0IHsgRmFGb250QXdlc29tZSwgRmFMaW5rZWRpbiB9IGZyb20gXCJyZWFjdC1pY29ucy9mYVwiO1xuaW1wb3J0IHsgSGlPdXRsaW5lTWFpbCB9IGZyb20gXCJyZWFjdC1pY29ucy9oaVwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBJY29uKHsgbmFtZSB9KSB7XG4gIGNvbnN0IGljb25MaXN0ID0ge1xuICAgIEphdmFzY3JpcHQ6IFwiZGV2aWNvbi1qYXZhc2NyaXB0LXBsYWluXCIsXG4gICAgSFRNTDogXCJkZXZpY29uLWh0bWw1LXBsYWluXCIsXG4gICAgQ1NTOiBcImRldmljb24tY3NzMy1wbGFpblwiLFxuICAgIFNRTDogPEdvRGF0YWJhc2UgLz4sXG4gICAgUnVieTogXCJkZXZpY29uLXJ1YnktcGxhaW5cIixcbiAgICBSZWFjdEpTOiBcImRldmljb24tcmVhY3Qtb3JpZ2luYWxcIixcbiAgICBOb2RlSlM6IFwiZGV2aWNvbi1ub2RlanMtcGxhaW5cIixcbiAgICBFeHByZXNzOiBcImRldmljb24tZXhwcmVzcy1vcmlnaW5hbFwiLFxuICAgIFJhaWxzOiBcImRldmljb24tcmFpbHMtcGxhaW5cIixcbiAgICBKUXVlcnk6IFwiZGV2aWNvbi1qcXVlcnktcGxhaW5cIixcbiAgICBTQVNTOiBcImRldmljb24tc2Fzcy1vcmlnaW5hbFwiLFxuICAgIEJvb3RzdHJhcDogXCJkZXZpY29uLWJvb3RzdHJhcC1wbGFpblwiLFxuICAgIEZvbnRBd2Vzb21lOiA8RmFGb250QXdlc29tZSAvPixcbiAgICBQb3N0Z3Jlc1NRTDogXCJkZXZpY29uLXBvc3RncmVzcWwtcGxhaW5cIixcbiAgICBFbWFpbDogPEhpT3V0bGluZU1haWwgLz4sXG4gICAgTGlua2VkaW46IDxGYUxpbmtlZGluIC8+LFxuICB9O1xuXG4gIGNvbnN0IGljb24gPSAoZGF0YSkgPT4ge1xuICAgIGNvbnN0IGljb24gPSBpY29uTGlzdFtkYXRhXTtcblxuICAgIGNvbnN0IGlzU3RyaW5nID0gKGljb24pID0+IHtcbiAgICAgIHJldHVybiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoaWNvbikgPT09IFwiW29iamVjdCBTdHJpbmddXCI7XG4gICAgfTtcblxuICAgIHJldHVybiBpc1N0cmluZyhpY29uKSA/IDxpIGNsYXNzPXtpY29ufSAvPiA6IGljb247XG4gIH07XG5cbiAgaWYgKCFpY29uTGlzdFtuYW1lXSkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgcmV0dXJuIGljb24obmFtZSk7XG59XG4iXSwibmFtZXMiOlsiR29EYXRhYmFzZSIsIkZhRm9udEF3ZXNvbWUiLCJGYUxpbmtlZGluIiwiSGlPdXRsaW5lTWFpbCIsIkljb24iLCJuYW1lIiwiaWNvbkxpc3QiLCJKYXZhc2NyaXB0IiwiSFRNTCIsIkNTUyIsIlNRTCIsIlJ1YnkiLCJSZWFjdEpTIiwiTm9kZUpTIiwiRXhwcmVzcyIsIlJhaWxzIiwiSlF1ZXJ5IiwiU0FTUyIsIkJvb3RzdHJhcCIsIkZvbnRBd2Vzb21lIiwiUG9zdGdyZXNTUUwiLCJFbWFpbCIsIkxpbmtlZGluIiwiaWNvbiIsImRhdGEiLCJpc1N0cmluZyIsIk9iamVjdCIsInByb3RvdHlwZSIsInRvU3RyaW5nIiwiY2FsbCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/comps/Icon.jsx\n");

/***/ })

});