webpackHotUpdate("static\\development\\pages\\random.js",{

/***/ "./components/BackArrow.tsx":
/*!**********************************!*\
  !*** ./components/BackArrow.tsx ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
var _this = undefined,
    _jsxFileName = "E:\\AATrabalhoG\\react\\txen\\components\\BackArrow.tsx";


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




var BackArrow = function BackArrow() {
  return __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "back--container colorname",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 7
    }
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faArrowLeft"],
    className: "arrow--icon",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 9
    }
  }), __jsx("span", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 9
    }
  }, "Back to home")));
};

_c = BackArrow;
/* harmony default export */ __webpack_exports__["default"] = (BackArrow);

var _c;

$RefreshReg$(_c, "BackArrow");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports_1 = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports_1;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./pages/random.tsx":
/*!**************************!*\
  !*** ./pages/random.tsx ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.tsx");
/* harmony import */ var _components_BackArrow__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/BackArrow */ "./components/BackArrow.tsx");
var _this = undefined,
    _jsxFileName = "E:\\AATrabalhoG\\react\\txen\\pages\\random.tsx",
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




var random = function random() {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({
    color: '',
    contrast: ''
  }),
      color = _useState[0],
      setColor = _useState[1];

  var handleColor = function handleColor() {
    var letters = '0123456789ABCDEF';
    var color = '';

    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }

    var contrast = getContrastYIQ(color);
    setColor({
      color: color,
      contrast: contrast
    });
    console.log(contrast); // navigator.clipboard.writeText(color);
  };

  var getContrastYIQ = function getContrastYIQ(hexcolor) {
    var r = parseInt(hexcolor.substr(0, 2), 16);
    var g = parseInt(hexcolor.substr(2, 2), 16);
    var b = parseInt(hexcolor.substr(4, 2), 16);
    var yiq = (r * 299 + g * 587 + b * 114) / 1000;
    return yiq >= 128 ? '#343a40' : '#fff';
  };

  return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_1__["default"], {
    style: {
      height: '100vh'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 5
    }
  }, __jsx(_components_BackArrow__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 7
    }
  }), __jsx("div", {
    className: "fullscreen",
    onClick: function onClick() {
      return handleColor();
    },
    style: {
      background: "#".concat(color['color'])
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "mid--container",
    style: {
      color: color['contrast']
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 9
    }
  }, __jsx("h1", {
    className: "title mb-4",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 11
    }
  }, "#".concat(color['color'])), __jsx("p", {
    className: "desc",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 11
    }
  }, "Left click: Change color"), __jsx("p", {
    className: "desc",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 11
    }
  }, "Right click: Copy color code"))));
};

_s(random, "FRcCbhlns39UvrdSHUqzrrXAEiA=");

/* harmony default export */ __webpack_exports__["default"] = (random);

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports_1 = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports_1;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0JhY2tBcnJvdy50c3giLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvcmFuZG9tLnRzeCJdLCJuYW1lcyI6WyJCYWNrQXJyb3ciLCJmYUFycm93TGVmdCIsInJhbmRvbSIsInVzZVN0YXRlIiwiY29sb3IiLCJjb250cmFzdCIsInNldENvbG9yIiwiaGFuZGxlQ29sb3IiLCJsZXR0ZXJzIiwiaSIsIk1hdGgiLCJmbG9vciIsImdldENvbnRyYXN0WUlRIiwiY29uc29sZSIsImxvZyIsImhleGNvbG9yIiwiciIsInBhcnNlSW50Iiwic3Vic3RyIiwiZyIsImIiLCJ5aXEiLCJoZWlnaHQiLCJiYWNrZ3JvdW5kIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztBQUVBLElBQU1BLFNBQW1CLEdBQUcsU0FBdEJBLFNBQXNCLEdBQU07QUFDaEMsU0FDRSxNQUFDLGdEQUFEO0FBQU0sUUFBSSxFQUFDLEdBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUssYUFBUyxFQUFDLDJCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLDhFQUFEO0FBQWlCLFFBQUksRUFBRUMsNkVBQXZCO0FBQW9DLGFBQVMsRUFBQyxhQUE5QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsRUFFRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQUZGLENBREYsQ0FERjtBQVFELENBVEQ7O0tBQU1ELFM7QUFXU0Esd0VBQWY7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2ZBO0FBSUE7QUFFQTs7QUFFQSxJQUFNRSxNQUFnQixHQUFHLFNBQW5CQSxNQUFtQixHQUFNO0FBQUE7O0FBQUEsa0JB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ZWxvcG1lbnRcXHBhZ2VzXFxyYW5kb20uanMuZDkzNTUxMTdmNmE1Y2U5YjNjM2EuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbmltcG9ydCB7IEZvbnRBd2Vzb21lSWNvbiB9IGZyb20gJ0Bmb3J0YXdlc29tZS9yZWFjdC1mb250YXdlc29tZSc7XHJcbmltcG9ydCB7IGZhQXJyb3dMZWZ0IH0gZnJvbSAnQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zJztcclxuXHJcbmNvbnN0IEJhY2tBcnJvdzogUmVhY3QuRkMgPSAoKSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxMaW5rIGhyZWY9XCIvXCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmFjay0tY29udGFpbmVyIGNvbG9ybmFtZVwiPlxyXG4gICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj17ZmFBcnJvd0xlZnR9IGNsYXNzTmFtZT1cImFycm93LS1pY29uXCIgLz5cclxuICAgICAgICA8c3Bhbj5CYWNrIHRvIGhvbWU8L3NwYW4+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9MaW5rPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBCYWNrQXJyb3c7XHJcbiIsImltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9MYXlvdXQnO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5pbXBvcnQgeyBGb250QXdlc29tZUljb24gfSBmcm9tICdAZm9ydGF3ZXNvbWUvcmVhY3QtZm9udGF3ZXNvbWUnO1xyXG5pbXBvcnQgeyBmYUFycm93TGVmdCB9IGZyb20gJ0Bmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29ucyc7XHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBzdHJpbmdpZnkgfSBmcm9tICdxdWVyeXN0cmluZyc7XHJcbmltcG9ydCBCYWNrQXJyb3cgZnJvbSAnLi4vY29tcG9uZW50cy9CYWNrQXJyb3cnO1xyXG5cclxuY29uc3QgcmFuZG9tOiBSZWFjdC5GQyA9ICgpID0+IHtcclxuICBjb25zdCBbY29sb3IsIHNldENvbG9yXSA9IHVzZVN0YXRlKHtcclxuICAgIGNvbG9yOiAnJyxcclxuICAgIGNvbnRyYXN0OiAnJyxcclxuICB9KTtcclxuXHJcbiAgY29uc3QgaGFuZGxlQ29sb3IgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBsZXR0ZXJzID0gJzAxMjM0NTY3ODlBQkNERUYnO1xyXG4gICAgbGV0IGNvbG9yID0gJyc7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDY7IGkrKykge1xyXG4gICAgICBjb2xvciArPSBsZXR0ZXJzW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDE2KV07XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgY29udHJhc3QgPSBnZXRDb250cmFzdFlJUShjb2xvcik7XHJcblxyXG4gICAgc2V0Q29sb3Ioe1xyXG4gICAgICBjb2xvcixcclxuICAgICAgY29udHJhc3QsXHJcbiAgICB9KTtcclxuXHJcbiAgICBjb25zb2xlLmxvZyhjb250cmFzdCk7XHJcblxyXG4gICAgLy8gbmF2aWdhdG9yLmNsaXBib2FyZC53cml0ZVRleHQoY29sb3IpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGdldENvbnRyYXN0WUlRID0gKGhleGNvbG9yOiBzdHJpbmcpID0+IHtcclxuICAgIGxldCByID0gcGFyc2VJbnQoaGV4Y29sb3Iuc3Vic3RyKDAsIDIpLCAxNik7XHJcbiAgICBsZXQgZyA9IHBhcnNlSW50KGhleGNvbG9yLnN1YnN0cigyLCAyKSwgMTYpO1xyXG4gICAgbGV0IGIgPSBwYXJzZUludChoZXhjb2xvci5zdWJzdHIoNCwgMiksIDE2KTtcclxuICAgIGxldCB5aXEgPSAociAqIDI5OSArIGcgKiA1ODcgKyBiICogMTE0KSAvIDEwMDA7XHJcblxyXG4gICAgcmV0dXJuIHlpcSA+PSAxMjggPyAnIzM0M2E0MCcgOiAnI2ZmZic7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxMYXlvdXQgc3R5bGU9e3sgaGVpZ2h0OiAnMTAwdmgnIH19PlxyXG4gICAgICA8QmFja0Fycm93IC8+XHJcblxyXG4gICAgICA8ZGl2XHJcbiAgICAgICAgY2xhc3NOYW1lPVwiZnVsbHNjcmVlblwiXHJcbiAgICAgICAgb25DbGljaz17KCkgPT4gaGFuZGxlQ29sb3IoKX1cclxuICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgYmFja2dyb3VuZDogYCMke2NvbG9yWydjb2xvciddfWAsXHJcbiAgICAgICAgfX1cclxuICAgICAgPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWlkLS1jb250YWluZXJcIiBzdHlsZT17eyBjb2xvcjogY29sb3JbJ2NvbnRyYXN0J10gfX0+XHJcbiAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGl0bGUgbWItNFwiPntgIyR7Y29sb3JbJ2NvbG9yJ119YH08L2gxPlxyXG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZGVzY1wiPkxlZnQgY2xpY2s6IENoYW5nZSBjb2xvcjwvcD5cclxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImRlc2NcIj5SaWdodCBjbGljazogQ29weSBjb2xvciBjb2RlPC9wPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvTGF5b3V0PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCByYW5kb207XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=