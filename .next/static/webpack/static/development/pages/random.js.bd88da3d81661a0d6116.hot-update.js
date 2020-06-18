webpackHotUpdate("static\\development\\pages\\random.js",{

/***/ "./pages/random.tsx":
/*!**************************!*\
  !*** ./pages/random.tsx ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.tsx");
/* harmony import */ var _components_BackArrow__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/BackArrow */ "./components/BackArrow.tsx");
/* harmony import */ var _components_ErrorMessage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/ErrorMessage */ "./components/ErrorMessage.tsx");


var _this = undefined,
    _jsxFileName = "E:\\AATrabalhoG\\react\\txen\\pages\\random.tsx",
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }






var random = function random() {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])({
    color: '',
    contrast: '#343a40',
    error: false
  }),
      color = _useState[0],
      setColor = _useState[1];

  var handleColor = function handleColor() {
    var letters = '0123456789ABCDEF'.split('');
    var color = ''; // change loop

    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }

    var contrast = getContrastYIQ(color);
    setColor({
      color: color,
      contrast: contrast,
      error: false
    });
  };

  var getContrastYIQ = function getContrastYIQ(hexcolor) {
    var r = parseInt(hexcolor.substr(0, 2), 16);
    var g = parseInt(hexcolor.substr(2, 2), 16);
    var b = parseInt(hexcolor.substr(4, 2), 16);
    var yiq = (r * 299 + g * 587 + b * 114) / 1000;
    return yiq >= 128 ? '#343a40' : '#fff';
  };

  return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_2__["default"], {
    style: {
      height: '100vh'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 5
    }
  }, __jsx(_components_BackArrow__WEBPACK_IMPORTED_MODULE_3__["default"], {
    style: {
      color: color['contrast']
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
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
    onContextMenu: function onContextMenu(ev) {
      ev.preventDefault(); // copy to clipboard

      color['color'] ? navigator.clipboard.writeText(color['color']) : (console.log('nop'), setColor(_objectSpread(_objectSpread({}, color), {}, {
        error: true
      })));
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
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
      lineNumber: 64,
      columnNumber: 9
    }
  }, __jsx("h1", {
    className: "title mb-4",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 11
    }
  }, color['color'] ? "#".concat(color['color']) : 'click!'), __jsx("p", {
    className: "desc",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 11
    }
  }, __jsx("span", {
    className: "line",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 13
    }
  }, "Left click"), ": Change color"), __jsx("p", {
    className: "desc",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 11
    }
  }, __jsx("span", {
    className: "line",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 13
    }
  }, "Right click"), ": Copy color code"))), color['error'] ? __jsx(_components_ErrorMessage__WEBPACK_IMPORTED_MODULE_4__["default"], {
    title: "No color yet",
    desc: "Click to see a color, then you can copy it!",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 9
    }
  }) : __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null));
};

_s(random, "xN7GhHCUUD+bogzOQhQLqBdcWfk=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9yYW5kb20udHN4Il0sIm5hbWVzIjpbInJhbmRvbSIsInVzZVN0YXRlIiwiY29sb3IiLCJjb250cmFzdCIsImVycm9yIiwic2V0Q29sb3IiLCJoYW5kbGVDb2xvciIsImxldHRlcnMiLCJzcGxpdCIsImkiLCJNYXRoIiwiZmxvb3IiLCJnZXRDb250cmFzdFlJUSIsImhleGNvbG9yIiwiciIsInBhcnNlSW50Iiwic3Vic3RyIiwiZyIsImIiLCJ5aXEiLCJoZWlnaHQiLCJiYWNrZ3JvdW5kIiwiZXYiLCJwcmV2ZW50RGVmYXVsdCIsIm5hdmlnYXRvciIsImNsaXBib2FyZCIsIndyaXRlVGV4dCIsImNvbnNvbGUiLCJsb2ciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLE1BQWdCLEdBQUcsU0FBbkJBLE1BQW1CLEdBQU07QUFBQTs7QUFBQSxrQkFDSEMsc0RBQVEsQ0FBQztBQUNqQ0MsU0FBSyxFQUFFLEVBRDBCO0FBRWpDQyxZQUFRLEVBQUUsU0FGdUI7QUFHakNDLFNBQUssRUFBRTtBQUgwQixHQUFELENBREw7QUFBQSxNQUN0QkYsS0FEc0I7QUFBQSxNQUNmRyxRQURlOztBQU83QixNQUFNQyxXQUFXLEdBQUcsU0FBZEEsV0FBYyxHQUFNO0FBQ3hCLFFBQU1DLE9BQU8sR0FBRyxtQkFBbUJDLEtBQW5CLENBQXlCLEVBQXpCLENBQWhCO0FBQ0EsUUFBSU4sS0FBSyxHQUFHLEVBQVosQ0FGd0IsQ0FJeEI7O0FBRUEsU0FBSyxJQUFJTyxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHLENBQXBCLEVBQXVCQSxDQUFDLEVBQXhCLEVBQTRCO0FBQzFCUCxXQUFLLElBQUlLLE9BQU8sQ0FBQ0csSUFBSSxDQUFDQyxLQUFMLENBQVdELElBQUksQ0FBQ1YsTUFBTCxLQUFnQixFQUEzQixDQUFELENBQWhCO0FBQ0Q7O0FBRUQsUUFBTUcs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RixDQUhGLEVBbUNHQSxLQUFLLENBQUMsT0FBRCxDQUFMLEdBQ0MsTUFBQyxnRUFBRDtBQUNFLFNBQUssRUFBQyxjQURSO0FBRUUsUUFBSSxFQUFDLDZDQUZQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERCxHQU1DLGtFQXpDSixDQURGO0FBOENELENBakZEOztHQUFNRixNOztBQW1GU0EscUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXHJhbmRvbS5qcy5iZDg4ZGEzZDgxNjYxYTBkNjExNi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL0xheW91dCc7XHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgQmFja0Fycm93IGZyb20gJy4uL2NvbXBvbmVudHMvQmFja0Fycm93JztcclxuaW1wb3J0IEVycm9yTWVzc2FnZSBmcm9tICcuLi9jb21wb25lbnRzL0Vycm9yTWVzc2FnZSc7XHJcblxyXG5jb25zdCByYW5kb206IFJlYWN0LkZDID0gKCkgPT4ge1xyXG4gIGNvbnN0IFtjb2xvciwgc2V0Q29sb3JdID0gdXNlU3RhdGUoe1xyXG4gICAgY29sb3I6ICcnLFxyXG4gICAgY29udHJhc3Q6ICcjMzQzYTQwJyxcclxuICAgIGVycm9yOiBmYWxzZSxcclxuICB9KTtcclxuXHJcbiAgY29uc3QgaGFuZGxlQ29sb3IgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBsZXR0ZXJzID0gJzAxMjM0NTY3ODlBQkNERUYnLnNwbGl0KCcnKTtcclxuICAgIGxldCBjb2xvciA9ICcnO1xyXG5cclxuICAgIC8vIGNoYW5nZSBsb29wXHJcblxyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCA2OyBpKyspIHtcclxuICAgICAgY29sb3IgKz0gbGV0dGVyc1tNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxNildO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGNvbnRyYXN0ID0gZ2V0Q29udHJhc3RZSVEoY29sb3IpO1xyXG5cclxuICAgIHNldENvbG9yKHtcclxuICAgICAgY29sb3IsXHJcbiAgICAgIGNvbnRyYXN0LFxyXG4gICAgICBlcnJvcjogZmFsc2UsXHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICBjb25zdCBnZXRDb250cmFzdFlJUSA9IChoZXhjb2xvcjogc3RyaW5nKSA9PiB7XHJcbiAgICBsZXQgciA9IHBhcnNlSW50KGhleGNvbG9yLnN1YnN0cigwLCAyKSwgMTYpO1xyXG4gICAgbGV0IGcgPSBwYXJzZUludChoZXhjb2xvci5zdWJzdHIoMiwgMiksIDE2KTtcclxuICAgIGxldCBiID0gcGFyc2VJbnQoaGV4Y29sb3Iuc3Vic3RyKDQsIDIpLCAxNik7XHJcbiAgICBsZXQgeWlxID0gKHIgKiAyOTkgKyBnICogNTg3ICsgYiAqIDExNCkgLyAxMDAwO1xyXG5cclxuICAgIHJldHVybiB5aXEgPj0gMTI4ID8gJyMzNDNhNDAnIDogJyNmZmYnO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8TGF5b3V0IHN0eWxlPXt7IGhlaWdodDogJzEwMHZoJyB9fT5cclxuICAgICAgPEJhY2tBcnJvdyBzdHlsZT17eyBjb2xvcjogY29sb3JbJ2NvbnRyYXN0J10gfX0gLz5cclxuXHJcbiAgICAgIDxkaXZcclxuICAgICAgICBjbGFzc05hbWU9XCJmdWxsc2NyZWVuXCJcclxuICAgICAgICBvbkNsaWNrPXsoKSA9PiBoYW5kbGVDb2xvcigpfVxyXG4gICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kOiBgIyR7Y29sb3JbJ2NvbG9yJ119YCxcclxuICAgICAgICB9fVxyXG4gICAgICAgIG9uQ29udGV4dE1lbnU9eyhldikgPT4ge1xyXG4gICAgICAgICAgZXYucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgICAgICAvLyBjb3B5IHRvIGNsaXBib2FyZFxyXG4gICAgICAgICAgY29sb3JbJ2NvbG9yJ11cclxuICAgICAgICAgICAgPyBuYXZpZ2F0b3IuY2xpcGJvYXJkLndyaXRlVGV4dChjb2xvclsnY29sb3InXSlcclxuICAgICAgICAgICAgOiAoY29uc29sZS5sb2coJ25vcCcpLFxyXG4gICAgICAgICAgICAgIHNldENvbG9yKHtcclxuICAgICAgICAgICAgICAgIC4uLmNvbG9yLFxyXG4gICAgICAgICAgICAgICAgZXJyb3I6IHRydWUsXHJcbiAgICAgICAgICAgICAgfSkpO1xyXG4gICAgICAgIH19XHJcbiAgICAgID5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1pZC0tY29udGFpbmVyXCIgc3R5bGU9e3sgY29sb3I6IGNvbG9yWydjb250cmFzdCddIH19PlxyXG4gICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRpdGxlIG1iLTRcIj5cclxuICAgICAgICAgICAge2NvbG9yWydjb2xvciddID8gYCMke2NvbG9yWydjb2xvciddfWAgOiAnY2xpY2shJ31cclxuICAgICAgICAgIDwvaDE+XHJcbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJkZXNjXCI+XHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImxpbmVcIj5MZWZ0IGNsaWNrPC9zcGFuPjogQ2hhbmdlIGNvbG9yXHJcbiAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJkZXNjXCI+XHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImxpbmVcIj5SaWdodCBjbGljazwvc3Bhbj46IENvcHkgY29sb3IgY29kZVxyXG4gICAgICAgICAgPC9wPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuXHJcbiAgICAgIHtjb2xvclsnZXJyb3InXSA/IChcclxuICAgICAgICA8RXJyb3JNZXNzYWdlXHJcbiAgICAgICAgICB0aXRsZT1cIk5vIGNvbG9yIHlldFwiXHJcbiAgICAgICAgICBkZXNjPVwiQ2xpY2sgdG8gc2VlIGEgY29sb3IsIHRoZW4geW91IGNhbiBjb3B5IGl0IVwiXHJcbiAgICAgICAgLz5cclxuICAgICAgKSA6IChcclxuICAgICAgICA8PjwvPlxyXG4gICAgICApfVxyXG4gICAgPC9MYXlvdXQ+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHJhbmRvbTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==