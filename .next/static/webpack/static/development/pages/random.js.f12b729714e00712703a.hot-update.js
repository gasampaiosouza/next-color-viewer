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
/* harmony import */ var _components_BackArrow__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/BackArrow */ "./components/BackArrow.tsx");
var _this = undefined,
    _jsxFileName = "E:\\AATrabalhoG\\react\\txen\\pages\\random.tsx",
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




var random = function random() {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({
    color: '',
    contrast: '#343a40'
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
      contrast: contrast
    });
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
      lineNumber: 39,
      columnNumber: 5
    }
  }, __jsx(_components_BackArrow__WEBPACK_IMPORTED_MODULE_2__["default"], {
    style: {
      color: color['contrast']
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
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

      navigator.clipboard.writeText(color['color']);
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
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
      lineNumber: 55,
      columnNumber: 9
    }
  }, __jsx("h1", {
    className: "title mb-4",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 11
    }
  }, color['color'] ? "#".concat(color['color']) : 'click!'), __jsx("p", {
    className: "desc",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 11
    }
  }, "Left click: Change color"), __jsx("p", {
    className: "desc",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 11
    }
  }, "Right click: Copy color code"))));
};

_s(random, "h5xtqi9AAgRLopXmoYlM7s2liLE=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9yYW5kb20udHN4Il0sIm5hbWVzIjpbInJhbmRvbSIsInVzZVN0YXRlIiwiY29sb3IiLCJjb250cmFzdCIsInNldENvbG9yIiwiaGFuZGxlQ29sb3IiLCJsZXR0ZXJzIiwic3BsaXQiLCJpIiwiTWF0aCIsImZsb29yIiwiZ2V0Q29udHJhc3RZSVEiLCJoZXhjb2xvciIsInIiLCJwYXJzZUludCIsInN1YnN0ciIsImciLCJiIiwieWlxIiwiaGVpZ2h0IiwiYmFja2dyb3VuZCIsImV2IiwicHJldmVudERlZmF1bHQiLCJuYXZpZ2F0b3IiLCJjbGlwYm9hcmQiLCJ3cml0ZVRleHQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxNQUFnQixHQUFHLFNBQW5CQSxNQUFtQixHQUFNO0FBQUE7O0FBQUEsa0JBQ0hDLHNEQUFRLENBQUM7QUFDakNDLFNBQUssRUFBRSxFQUQwQjtBQUVqQ0MsWUFBUSxFQUFFO0FBRnVCLEdBQUQsQ0FETDtBQUFBLE1BQ3RCRCxLQURzQjtBQUFBLE1BQ2ZFLFFBRGU7O0FBTTdCLE1BQU1DLFdBQVcsR0FBRyxTQUFkQSxXQUFjLEdBQU07QUFDeEIsUUFBTUMsT0FBTyxHQUFHLG1CQUFtQkMsS0FBbkIsQ0FBeUIsRUFBekIsQ0FBaEI7QUFDQSxRQUFJTCxLQUFLLEdBQUcsRUFBWixDQUZ3QixDQUl4Qjs7QUFFQSxTQUFLLElBQUlNLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUcsQ0FBcEIsRUFBdUJBLENBQUMsRUFBeEIsRUFBNEI7QUFDMUJOLFdBQUssSUFBSUksT0FBTyxDQUFDRyxJQUFJLENBQUNDLEtBQUwsQ0FBV0QsSUFBSSxDQUFDVCxNQUFMLEtBQWdCLEVBQTNCLENBQUQsQ0FBaEI7QUFDRDs7QUFFRCxRQUFNRyxRQUFRLEdBQUdRLGNBQWMsQ0FBQ1QsS0FBRCxDQUEvQjtBQUVBRSxZQUFRLENBQUM7QUFDUEYsV0FBSyxFQUFMQSxLQURPO0FBRVBDLGNBQVEsRUFBUkE7QUFGTyxLQUFELENBQVI7QUFJRCxHQWhCRDs7QUFrQkEsTUFBTVEsY0FBYyxHQUFHLFNBQWpCQSxjQUFpQixDQUFDQyxRQUFELEVBQXNCO0FBQzNDLFFBQUlDLENBQUMsR0FBR0MsUUFBUSxDQUFDRixRQUFRLENBQUNHLE1BQVQsQ0FBZ0IsQ0FBaEIsRUFBbUIsQ0FBbkIsQ0FBRCxFQUF3QixFQUF4QixDQUFoQjtBQUNBLFFBQUlDLENBQUMsR0FBR0YsUUFBUSxDQUFDRixRQUFRLENBQUNHLE1BQVQsQ0FBZ0IsQ0FBaEIsRUFBbUIsQ0FBbkIsQ0FBRCxFQUF3QixFQUF4QixDQUFoQjtBQUNBLFFBQUlFLENBQUMsR0FBR0gsUUFBUSxDQUFDRixRQUFRLENBQUNHLE1BQVQsQ0FBZ0IsQ0FBaEIsRUFBbUIsQ0FBbkIsQ0FBRCxFQUF3QixFQUF4QixDQUFoQjtBQUNBLFFBQUlHLEdBQUcsR0FBRyxDQUFDTCxDQUFDLEdBQUcsR0FBSixHQUFVRyxDQUFDLEdBQUcsR0FBZCxHQUFvQkMsQ0FBQyxHQUFHLEdBQXpCLElBQWdDLElBQTFDO0FBRUEsV0FBT0MsR0FBRyxJQUFJLEdBQVAsR0FBYSxTQUFiLEdBQXlCLE1BQWhDO0FBQ0QsR0FQRDs7QUFTQSxTQUNFLE1BQUMsMERBQUQ7QUFBUSxTQUFLLEVBQUU7QUFBRUMsWUFBTSxFQUFFO0FBQVYsS0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyw2REFBRDtBQUFXLFNBQUssRUFBRTtBQUFFakIsV0FBSyxFQUFFQSxLQUFLLENBQUMsVUFBRDtBQUFkLEtBQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixFQUdFO0FBQ0UsYUFBUyxFQUFDLFlBRFo7QUFFRSxXQUFPLEVBQUU7QUFBQSxhQUFNRyxXQUFXLEVBQWpCO0FBQUEsS0FGWDtBQUdFLFNBQUssRUFBRTtBQUNMZSxnQkFBVSxhQUFNbEIsS0FBSyxDQUFDLE9BQUQsQ0FBWDtBQURMLEtBSFQ7QUFNRSxpQkFBYSxFQUFFLHVCQUFDbUIsRUFBRCxFQUFRO0FBQ3JCQSxRQUFFLENBQUNDLGNBQUgsR0FEcUIsQ0FHckI7O0FBQ0FDLGVBQVMsQ0FBQ0MsU0FBVixDQUFvQkMsU0FBcEIsQ0FBOEJ2QixLQUFLLENBQUMsT0FBRCxDQUFuQztBQUNELEtBWEg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQWFFO0FBQUssYUFBUyxFQUFDLGdCQUFmO0FBQWdDLFNBQUssRUFBRTtBQUFFQSxXQUFLLEVBQUVBLEtBQUssQ0FBQyxVQUFEO0FBQWQsS0FBdkM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUksYUFBUyxFQUFDLFlBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNHQSxLQUFLLENBQUMsT0FBRCxDQUFMLGNBQXFCQSxLQUFLLENBQUMsT0FBRCxDQUExQixJQUF3QyxRQUQzQyxDQURGLEVBSUU7QUFBRyxhQUFTLEVBQUMsTUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdDQUpGLEVBS0U7QUFBRyxhQUFTLEVBQUMsTUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9DQUxGLENBYkYsQ0FIRixDQURGO0FBMkJELENBNUREOztHQUFNRixNOztBQThEU0EscUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXHJhbmRvbS5qcy5mMTJiNzI5NzE0ZTAwNzEyNzAzYS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL0xheW91dCc7XHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgQmFja0Fycm93IGZyb20gJy4uL2NvbXBvbmVudHMvQmFja0Fycm93JztcclxuXHJcbmNvbnN0IHJhbmRvbTogUmVhY3QuRkMgPSAoKSA9PiB7XHJcbiAgY29uc3QgW2NvbG9yLCBzZXRDb2xvcl0gPSB1c2VTdGF0ZSh7XHJcbiAgICBjb2xvcjogJycsXHJcbiAgICBjb250cmFzdDogJyMzNDNhNDAnLFxyXG4gIH0pO1xyXG5cclxuICBjb25zdCBoYW5kbGVDb2xvciA9ICgpID0+IHtcclxuICAgIGNvbnN0IGxldHRlcnMgPSAnMDEyMzQ1Njc4OUFCQ0RFRicuc3BsaXQoJycpO1xyXG4gICAgbGV0IGNvbG9yID0gJyc7XHJcblxyXG4gICAgLy8gY2hhbmdlIGxvb3BcclxuXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDY7IGkrKykge1xyXG4gICAgICBjb2xvciArPSBsZXR0ZXJzW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDE2KV07XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgY29udHJhc3QgPSBnZXRDb250cmFzdFlJUShjb2xvcik7XHJcblxyXG4gICAgc2V0Q29sb3Ioe1xyXG4gICAgICBjb2xvcixcclxuICAgICAgY29udHJhc3QsXHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICBjb25zdCBnZXRDb250cmFzdFlJUSA9IChoZXhjb2xvcjogc3RyaW5nKSA9PiB7XHJcbiAgICBsZXQgciA9IHBhcnNlSW50KGhleGNvbG9yLnN1YnN0cigwLCAyKSwgMTYpO1xyXG4gICAgbGV0IGcgPSBwYXJzZUludChoZXhjb2xvci5zdWJzdHIoMiwgMiksIDE2KTtcclxuICAgIGxldCBiID0gcGFyc2VJbnQoaGV4Y29sb3Iuc3Vic3RyKDQsIDIpLCAxNik7XHJcbiAgICBsZXQgeWlxID0gKHIgKiAyOTkgKyBnICogNTg3ICsgYiAqIDExNCkgLyAxMDAwO1xyXG5cclxuICAgIHJldHVybiB5aXEgPj0gMTI4ID8gJyMzNDNhNDAnIDogJyNmZmYnO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8TGF5b3V0IHN0eWxlPXt7IGhlaWdodDogJzEwMHZoJyB9fT5cclxuICAgICAgPEJhY2tBcnJvdyBzdHlsZT17eyBjb2xvcjogY29sb3JbJ2NvbnRyYXN0J10gfX0gLz5cclxuXHJcbiAgICAgIDxkaXZcclxuICAgICAgICBjbGFzc05hbWU9XCJmdWxsc2NyZWVuXCJcclxuICAgICAgICBvbkNsaWNrPXsoKSA9PiBoYW5kbGVDb2xvcigpfVxyXG4gICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kOiBgIyR7Y29sb3JbJ2NvbG9yJ119YCxcclxuICAgICAgICB9fVxyXG4gICAgICAgIG9uQ29udGV4dE1lbnU9eyhldikgPT4ge1xyXG4gICAgICAgICAgZXYucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgICAgICAvLyBjb3B5IHRvIGNsaXBib2FyZFxyXG4gICAgICAgICAgbmF2aWdhdG9yLmNsaXBib2FyZC53cml0ZVRleHQoY29sb3JbJ2NvbG9yJ10pO1xyXG4gICAgICAgIH19XHJcbiAgICAgID5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1pZC0tY29udGFpbmVyXCIgc3R5bGU9e3sgY29sb3I6IGNvbG9yWydjb250cmFzdCddIH19PlxyXG4gICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRpdGxlIG1iLTRcIj5cclxuICAgICAgICAgICAge2NvbG9yWydjb2xvciddID8gYCMke2NvbG9yWydjb2xvciddfWAgOiAnY2xpY2shJ31cclxuICAgICAgICAgIDwvaDE+XHJcbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJkZXNjXCI+TGVmdCBjbGljazogQ2hhbmdlIGNvbG9yPC9wPlxyXG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZGVzY1wiPlJpZ2h0IGNsaWNrOiBDb3B5IGNvbG9yIGNvZGU8L3A+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9MYXlvdXQ+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHJhbmRvbTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==