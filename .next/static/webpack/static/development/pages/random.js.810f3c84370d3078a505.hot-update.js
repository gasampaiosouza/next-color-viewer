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
  }, color['color'] ? "#".concat(color['color']) : 'click!'), __jsx("div", {
    className: "desc--container",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 11
    }
  }, __jsx("p", {
    className: "desc",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 13
    }
  }, "Left click: Change color"), __jsx("p", {
    className: "desc",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 13
    }
  }, "Right click: Copy color code")))), color['error'] ? __jsx(_components_ErrorMessage__WEBPACK_IMPORTED_MODULE_4__["default"], {
    title: "No color yet",
    desc: "Click to see a color, then you can copy it!",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9yYW5kb20udHN4Il0sIm5hbWVzIjpbInJhbmRvbSIsInVzZVN0YXRlIiwiY29sb3IiLCJjb250cmFzdCIsImVycm9yIiwic2V0Q29sb3IiLCJoYW5kbGVDb2xvciIsImxldHRlcnMiLCJzcGxpdCIsImkiLCJNYXRoIiwiZmxvb3IiLCJnZXRDb250cmFzdFlJUSIsImhleGNvbG9yIiwiciIsInBhcnNlSW50Iiwic3Vic3RyIiwiZyIsImIiLCJ5aXEiLCJoZWlnaHQiLCJiYWNrZ3JvdW5kIiwiZXYiLCJwcmV2ZW50RGVmYXVsdCIsIm5hdmlnYXRvciIsImNsaXBib2FyZCIsIndyaXRlVGV4dCIsImNvbnNvbGUiLCJsb2ciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLE1BQWdCLEdBQUcsU0FBbkJBLE1BQW1CLEdBQU07QUFBQTs7QUFBQSxrQkFDSEMsc0RBQVEsQ0FBQztBQUNqQ0MsU0FBSyxFQUFFLEVBRDBCO0FBRWpDQyxZQUFRLEVBQUUsU0FGdUI7QUFHakNDLFNBQUssRUFBRTtBQUgwQixHQUFELENBREw7QUFBQSxNQUN0QkYsS0FEc0I7QUFBQSxNQUNmRyxRQURlOztBQU83QixNQUFNQyxXQUFXLEdBQUcsU0FBZEEsV0FBYyxHQUFNO0FBQ3hCLFFBQU1DLE9BQU8sR0FBRyxtQkFBbUJDLEtBQW5CLENBQXlCLEVBQXpCLENBQWhCO0FBQ0EsUUFBSU4sS0FBSyxHQUFHLEVBQVosQ0FGd0IsQ0FJeEI7O0FBRUEsU0FBSyxJQUFJTyxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHLENBQXBCLEVBQXVCQSxDQUFDLEVBQXhCLEVBQTRCO0FBQzFCUCxXQUFLLElBQUlLLE9BQU8sQ0FBQ0csSUFBSSxDQUFDQyxLQUFMLENBQVdELElBQUksQ0FBQ1YsTUFBTCxLQUFnQixFQUEzQixDQUFELENBQWhCO0FBQ0Q7O0FBRUQsUUFBTUcs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UjtBQUVFLFFBQUksRUFBQyw2Q0FGUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREQsR0FNQyxrRUF2Q0osQ0FERjtBQTRDRCxDQS9FRDs7R0FBTUYsTTs7QUFpRlNBLHFFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxyYW5kb20uanMuODEwZjNjODQzNzBkMzA3OGE1MDUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9MYXlvdXQnO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IEJhY2tBcnJvdyBmcm9tICcuLi9jb21wb25lbnRzL0JhY2tBcnJvdyc7XHJcbmltcG9ydCBFcnJvck1lc3NhZ2UgZnJvbSAnLi4vY29tcG9uZW50cy9FcnJvck1lc3NhZ2UnO1xyXG5cclxuY29uc3QgcmFuZG9tOiBSZWFjdC5GQyA9ICgpID0+IHtcclxuICBjb25zdCBbY29sb3IsIHNldENvbG9yXSA9IHVzZVN0YXRlKHtcclxuICAgIGNvbG9yOiAnJyxcclxuICAgIGNvbnRyYXN0OiAnIzM0M2E0MCcsXHJcbiAgICBlcnJvcjogZmFsc2UsXHJcbiAgfSk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZUNvbG9yID0gKCkgPT4ge1xyXG4gICAgY29uc3QgbGV0dGVycyA9ICcwMTIzNDU2Nzg5QUJDREVGJy5zcGxpdCgnJyk7XHJcbiAgICBsZXQgY29sb3IgPSAnJztcclxuXHJcbiAgICAvLyBjaGFuZ2UgbG9vcFxyXG5cclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgNjsgaSsrKSB7XHJcbiAgICAgIGNvbG9yICs9IGxldHRlcnNbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTYpXTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBjb250cmFzdCA9IGdldENvbnRyYXN0WUlRKGNvbG9yKTtcclxuXHJcbiAgICBzZXRDb2xvcih7XHJcbiAgICAgIGNvbG9yLFxyXG4gICAgICBjb250cmFzdCxcclxuICAgICAgZXJyb3I6IGZhbHNlLFxyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgZ2V0Q29udHJhc3RZSVEgPSAoaGV4Y29sb3I6IHN0cmluZykgPT4ge1xyXG4gICAgbGV0IHIgPSBwYXJzZUludChoZXhjb2xvci5zdWJzdHIoMCwgMiksIDE2KTtcclxuICAgIGxldCBnID0gcGFyc2VJbnQoaGV4Y29sb3Iuc3Vic3RyKDIsIDIpLCAxNik7XHJcbiAgICBsZXQgYiA9IHBhcnNlSW50KGhleGNvbG9yLnN1YnN0cig0LCAyKSwgMTYpO1xyXG4gICAgbGV0IHlpcSA9IChyICogMjk5ICsgZyAqIDU4NyArIGIgKiAxMTQpIC8gMTAwMDtcclxuXHJcbiAgICByZXR1cm4geWlxID49IDEyOCA/ICcjMzQzYTQwJyA6ICcjZmZmJztcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPExheW91dCBzdHlsZT17eyBoZWlnaHQ6ICcxMDB2aCcgfX0+XHJcbiAgICAgIDxCYWNrQXJyb3cgc3R5bGU9e3sgY29sb3I6IGNvbG9yWydjb250cmFzdCddIH19IC8+XHJcblxyXG4gICAgICA8ZGl2XHJcbiAgICAgICAgY2xhc3NOYW1lPVwiZnVsbHNjcmVlblwiXHJcbiAgICAgICAgb25DbGljaz17KCkgPT4gaGFuZGxlQ29sb3IoKX1cclxuICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgYmFja2dyb3VuZDogYCMke2NvbG9yWydjb2xvciddfWAsXHJcbiAgICAgICAgfX1cclxuICAgICAgICBvbkNvbnRleHRNZW51PXsoZXYpID0+IHtcclxuICAgICAgICAgIGV2LnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgICAgICAgLy8gY29weSB0byBjbGlwYm9hcmRcclxuICAgICAgICAgIGNvbG9yWydjb2xvciddXHJcbiAgICAgICAgICAgID8gbmF2aWdhdG9yLmNsaXBib2FyZC53cml0ZVRleHQoY29sb3JbJ2NvbG9yJ10pXHJcbiAgICAgICAgICAgIDogKGNvbnNvbGUubG9nKCdub3AnKSxcclxuICAgICAgICAgICAgICBzZXRDb2xvcih7XHJcbiAgICAgICAgICAgICAgICAuLi5jb2xvcixcclxuICAgICAgICAgICAgICAgIGVycm9yOiB0cnVlLFxyXG4gICAgICAgICAgICAgIH0pKTtcclxuICAgICAgICB9fVxyXG4gICAgICA+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtaWQtLWNvbnRhaW5lclwiIHN0eWxlPXt7IGNvbG9yOiBjb2xvclsnY29udHJhc3QnXSB9fT5cclxuICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0aXRsZSBtYi00XCI+XHJcbiAgICAgICAgICAgIHtjb2xvclsnY29sb3InXSA/IGAjJHtjb2xvclsnY29sb3InXX1gIDogJ2NsaWNrISd9XHJcbiAgICAgICAgICA8L2gxPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkZXNjLS1jb250YWluZXJcIj5cclxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZGVzY1wiPkxlZnQgY2xpY2s6IENoYW5nZSBjb2xvcjwvcD5cclxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZGVzY1wiPlJpZ2h0IGNsaWNrOiBDb3B5IGNvbG9yIGNvZGU8L3A+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcblxyXG4gICAgICB7Y29sb3JbJ2Vycm9yJ10gPyAoXHJcbiAgICAgICAgPEVycm9yTWVzc2FnZVxyXG4gICAgICAgICAgdGl0bGU9XCJObyBjb2xvciB5ZXRcIlxyXG4gICAgICAgICAgZGVzYz1cIkNsaWNrIHRvIHNlZSBhIGNvbG9yLCB0aGVuIHlvdSBjYW4gY29weSBpdCFcIlxyXG4gICAgICAgIC8+XHJcbiAgICAgICkgOiAoXHJcbiAgICAgICAgPD48Lz5cclxuICAgICAgKX1cclxuICAgIDwvTGF5b3V0PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCByYW5kb207XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=