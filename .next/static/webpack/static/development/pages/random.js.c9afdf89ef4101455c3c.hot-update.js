webpackHotUpdate("static\\development\\pages\\random.js",{

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
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
var _this = undefined,
    _jsxFileName = "E:\\AATrabalhoG\\react\\txen\\pages\\random.tsx",
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






var random = function random() {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(''),
      color = _useState[0],
      setColor = _useState[1];

  var handleColor = function handleColor() {
    var letters = '0123456789ABCDEF';
    var hash = '#';

    for (var i = 0; i < 6; i++) {
      hash += letters[Math.floor(Math.random() * 16)];
    }

    return setColor(hash); // navigator.clipboard.writeText(color);
  };

  return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_1__["default"], {
    style: {
      height: '100vh'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 5
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "back--container random",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 9
    }
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faArrowLeft"],
    className: "arrow--icon",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 11
    }
  }), __jsx("span", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 11
    }
  }, "Back to home"))), __jsx("div", {
    className: "fullscreen",
    onClick: function onClick() {
      return handleColor();
    },
    style: {
      background: color
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "mid--container",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 9
    }
  }, __jsx("h1", {
    className: "title mb-4",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 11
    }
  }, "#".concat(color)), __jsx("p", {
    className: "desc",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 11
    }
  }, "Left click: Change color"), __jsx("p", {
    className: "desc",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 11
    }
  }, "Right click: Copy color code"))));
};

_s(random, "5SCJp6l3vLBveqZVPs7KjXxIMCY=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9yYW5kb20udHN4Il0sIm5hbWVzIjpbInJhbmRvbSIsInVzZVN0YXRlIiwiY29sb3IiLCJzZXRDb2xvciIsImhhbmRsZUNvbG9yIiwibGV0dGVycyIsImhhc2giLCJpIiwiTWF0aCIsImZsb29yIiwiaGVpZ2h0IiwiZmFBcnJvd0xlZnQiLCJiYWNrZ3JvdW5kIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLE1BQWdCLEdBQUcsU0FBbkJBLE1BQW1CLEdBQU07QUFBQTs7QUFBQSxrQkFDSEMsc0RBQVEsQ0FBQyxFQUFELENBREw7QUFBQSxNQUN0QkMsS0FEc0I7QUFBQSxNQUNmQyxRQURlOztBQUc3QixNQUFNQyxXQUFXLEdBQUcsU0FBZEEsV0FBYyxHQUFNO0FBQ3hCLFFBQU1DLE9BQU8sR0FBRyxrQkFBaEI7QUFDQSxRQUFJQyxJQUFJLEdBQUcsR0FBWDs7QUFDQSxTQUFLLElBQUlDLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUcsQ0FBcEIsRUFBdUJBLENBQUMsRUFBeEIsRUFBNEI7QUFDMUJELFVBQUksSUFBSUQsT0FBTyxDQUFDRyxJQUFJLENBQUNDLEtBQUwsQ0FBV0QsSUFBSSxDQUFDUixNQUFMLEtBQWdCLEVBQTNCLENBQUQsQ0FBZjtBQUNEOztBQUVELFdBQU9HLFFBQVEsQ0FBQ0csSUFBRCxDQUFmLENBUHdCLENBU3hCO0FBQ0QsR0FWRDs7QUFZQSxTQUNFLE1BQUMsMERBQUQ7QUFBUSxTQUFLLEVBQUU7QUFBRUksWUFBTSxFQUFFO0FBQVYsS0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxnREFBRDtBQUFNLFFBQUksRUFBQyxHQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLGFBQVMsRUFBQyx3QkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyw4RUFBRDtBQUFpQixRQUFJLEVBQUVDLDZFQUF2QjtBQUFvQyxhQUFTLEVBQUMsYUFBOUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLEVBRUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFGRixDQURGLENBREYsRUFRRTtBQUNFLGFBQVMsRUFBQyxZQURaO0FBRUUsV0FBTyxFQUFFO0FBQUEsYUFBTVAsV0FBVyxFQUFqQjtBQUFBLEtBRlg7QUFHRSxTQUFLLEVBQUU7QUFBRVEsZ0JBQVUsRUFBRVY7QUFBZCxLQUhUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FLRTtBQUFLLGFBQVMsRUFBQyxnQkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSSxhQUFTLEVBQUMsWUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUFnQ0EsS0FBaEMsRUFERixFQUVFO0FBQUcsYUFBUyxFQUFDLE1BQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQ0FGRixFQUdFO0FBQUcsYUFBUyxFQUFDLE1BQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQ0FIRixDQUxGLENBUkYsQ0FERjtBQXNCRCxDQXJDRDs7R0FBTUYsTTs7QUF1Q1NBLHFFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxyYW5kb20uanMuYzlhZmRmODllZjQxMDE0NTVjM2MuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9MYXlvdXQnO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5pbXBvcnQgeyBGb250QXdlc29tZUljb24gfSBmcm9tICdAZm9ydGF3ZXNvbWUvcmVhY3QtZm9udGF3ZXNvbWUnO1xyXG5pbXBvcnQgeyBmYUFycm93TGVmdCB9IGZyb20gJ0Bmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29ucyc7XHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5cclxuY29uc3QgcmFuZG9tOiBSZWFjdC5GQyA9ICgpID0+IHtcclxuICBjb25zdCBbY29sb3IsIHNldENvbG9yXSA9IHVzZVN0YXRlKCcnKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlQ29sb3IgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBsZXR0ZXJzID0gJzAxMjM0NTY3ODlBQkNERUYnO1xyXG4gICAgbGV0IGhhc2ggPSAnIyc7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDY7IGkrKykge1xyXG4gICAgICBoYXNoICs9IGxldHRlcnNbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTYpXTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gc2V0Q29sb3IoaGFzaCk7XHJcblxyXG4gICAgLy8gbmF2aWdhdG9yLmNsaXBib2FyZC53cml0ZVRleHQoY29sb3IpO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8TGF5b3V0IHN0eWxlPXt7IGhlaWdodDogJzEwMHZoJyB9fT5cclxuICAgICAgPExpbmsgaHJlZj1cIi9cIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJhY2stLWNvbnRhaW5lciByYW5kb21cIj5cclxuICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj17ZmFBcnJvd0xlZnR9IGNsYXNzTmFtZT1cImFycm93LS1pY29uXCIgLz5cclxuICAgICAgICAgIDxzcGFuPkJhY2sgdG8gaG9tZTwvc3Bhbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9MaW5rPlxyXG5cclxuICAgICAgPGRpdlxyXG4gICAgICAgIGNsYXNzTmFtZT1cImZ1bGxzY3JlZW5cIlxyXG4gICAgICAgIG9uQ2xpY2s9eygpID0+IGhhbmRsZUNvbG9yKCl9XHJcbiAgICAgICAgc3R5bGU9e3sgYmFja2dyb3VuZDogY29sb3IgfX1cclxuICAgICAgPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWlkLS1jb250YWluZXJcIj5cclxuICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0aXRsZSBtYi00XCI+e2AjJHtjb2xvcn1gfTwvaDE+XHJcbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJkZXNjXCI+TGVmdCBjbGljazogQ2hhbmdlIGNvbG9yPC9wPlxyXG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZGVzY1wiPlJpZ2h0IGNsaWNrOiBDb3B5IGNvbG9yIGNvZGU8L3A+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9MYXlvdXQ+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHJhbmRvbTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==