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
/* harmony import */ var _components_ErrorMessage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/ErrorMessage */ "./components/ErrorMessage.tsx");
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
      lineNumber: 40,
      columnNumber: 5
    }
  }, __jsx(_components_BackArrow__WEBPACK_IMPORTED_MODULE_2__["default"], {
    style: {
      color: color['contrast']
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
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

      color['color'] ? navigator.clipboard.writeText(color['color']) : (console.log('nop'), __jsx(_components_ErrorMessage__WEBPACK_IMPORTED_MODULE_3__["default"], {
        title: "No color yet",
        desc: "Click to see a color, then you can copy it!",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57,
          columnNumber: 17
        }
      }));
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
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
  }, "Left click: Change color"), __jsx("p", {
    className: "desc",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9yYW5kb20udHN4Il0sIm5hbWVzIjpbInJhbmRvbSIsInVzZVN0YXRlIiwiY29sb3IiLCJjb250cmFzdCIsInNldENvbG9yIiwiaGFuZGxlQ29sb3IiLCJsZXR0ZXJzIiwic3BsaXQiLCJpIiwiTWF0aCIsImZsb29yIiwiZ2V0Q29udHJhc3RZSVEiLCJoZXhjb2xvciIsInIiLCJwYXJzZUludCIsInN1YnN0ciIsImciLCJiIiwieWlxIiwiaGVpZ2h0IiwiYmFja2dyb3VuZCIsImV2IiwicHJldmVudERlZmF1bHQiLCJuYXZpZ2F0b3IiLCJjbGlwYm9hcmQiLCJ3cml0ZVRleHQiLCJjb25zb2xlIiwibG9nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsTUFBZ0IsR0FBRyxTQUFuQkEsTUFBbUIsR0FBTTtBQUFBOztBQUFBLGtCQUNIQyxzREFBUSxDQUFDO0FBQ2pDQyxTQUFLLEVBQUUsRUFEMEI7QUFFakNDLFlBQVEsRUFBRTtBQUZ1QixHQUFELENBREw7QUFBQSxNQUN0QkQsS0FEc0I7QUFBQSxNQUNmRSxRQURlOztBQU03QixNQUFNQyxXQUFXLEdBQUcsU0FBZEEsV0FBYyxHQUFNO0FBQ3hCLFFBQU1DLE9BQU8sR0FBRyxtQkFBbUJDLEtBQW5CLENBQXlCLEVBQXpCLENBQWhCO0FBQ0EsUUFBSUwsS0FBSyxHQUFHLEVBQVosQ0FGd0IsQ0FJeEI7O0FBRUEsU0FBSyxJQUFJTSxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHLENBQXBCLEVBQXVCQSxDQUFDLEVBQXhCLEVBQTRCO0FBQzFCTixXQUFLLElBQUlJLE9BQU8sQ0FBQ0csSUFBSSxDQUFDQyxLQUFMLENBQVdELElBQUksQ0FBQ1QsTUFBTCxLQUFnQixFQUEzQixDQUFELENBQWhCO0FBQ0Q7O0FBRUQsUUFBTUcsUUFBUSxHQUFHUSxjQUFjLENBQUNULEtBQUQsQ0FBL0I7QUFFQUUsWUFBUSxDQUFDO0FBQ1BGLFdBQUssRUFBTEEsS0FETztBQUVQQyxjQUFRLEVBQVJBO0FBRk8sS0FBRCxDQUFSO0FBSUQsR0FoQkQ7O0FBa0JBLE1BQU1RLGNBQWMsR0FBRyxTQUFqQkEsY0FBaUIsQ0FBQ0MsUUFBRCxFQUFzQjtBQUMzQyxRQUFJQyxDQUFDLEdBQUdDLFFBQVEsQ0FBQ0YsUUFBUSxDQUFDRyxNQUFULENBQWdCLENBQWhCLEVBQW1CLENBQW5CLENBQUQsRUFBd0IsRUFBeEIsQ0FBaEI7QUFDQSxRQUFJQyxDQUFDLEdBQUdGLFFBQVEsQ0FBQ0YsUUFBUSxDQUFDRyxNQUFULENBQWdCLENBQWhCLEVBQW1CLENBQW5CLENBQUQsRUFBd0IsRUFBeEIsQ0FBaEI7QUFDQSxRQUFJRSxDQUFDLEdBQUdILFFBQVEsQ0FBQ0YsUUFBUSxDQUFDRyxNQUFULENBQWdCLENBQWhCLEVBQW1CLENBQW5CLENBQUQsRUFBd0IsRUFBeEIsQ0FBaEI7QUFDQSxRQUFJRyxHQUFHLEdBQUcsQ0FBQ0wsQ0FBQyxHQUFHLEdBQUosR0FBVUcsQ0FBQyxHQUFHLEdBQWQsR0FBb0JDLENBQUMsR0FBRyxHQUF6QixJQUFnQyxJQUExQztBQUVBLFdBQU9DLEdBQUcsSUFBSSxHQUFQLEdBQWEsU0FBYixHQUF5QixNQUFoQztBQUNELEdBUEQ7O0FBU0EsU0FDRSxNQUFDLDBEQUFEO0FBQVEsU0FBSyxFQUFFO0FBQUVDLFlBQU0sRUFBRTtBQUFWLEtBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsNkRBQUQ7QUFBVyxTQUFLLEVBQUU7QUFBRWpCLFdBQUssRUFBRUEsS0FBSyxDQUFDLFVBQUQ7QUFBZCxLQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsRUFHRTtBQUNFLGFBQVMsRUFBQyxZQURaO0FBRUUsV0FBTyxFQUFFO0FBQUEsYUFBTUcsV0FBVyxFQUFqQjtBQUFBLEtBRlg7QUFHRSxTQUFLLEVBQUU7QUFDTGUsZ0JBQVUsYUFBTWxCLEtBQUssQ0FBQyxPQUFELENBQVg7QUFETCxLQUhUO0FBTUUsaUJBQWEsRUFBRSx1QkFBQ21CLEVBQUQsRUFBUTtBQUNyQkEsUUFBRSxDQUFDQyxjQUFILEdBRHFCLENBR3JCOztBQUNBcEIsV0FBSyxDQUFDLE9BQUQsQ0FBTCxHQUNJcUIsU0FBUyxDQUFDQyxTQUFWLENBQW9CQyxTQUFwQixDQUE4QnZCLEtBQUssQ0FBQyxPQUFELENBQW5DLENBREosSUFFS3dCLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLEtBQVosR0FFQyxNQUFDLGdFQUFEO0FBQ0UsYUFBSyxFQUFDLGNBRFI7QUFFRSxZQUFJLEVBQUMsNkNBRlA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQUpOO0FBU0QsS0FuQkg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQXFCRTtBQUFLLGFBQVMsRUFBQyxnQkFBZjtBQUFnQyxTQUFLLEVBQUU7QUFBRXpCLFdBQUssRUFBRUEsS0FBSyxDQUFDLFVBQUQ7QUFBZCxLQUF2QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSSxhQUFTLEVBQUMsWUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0dBLEtBQUssQ0FBQyxPQUFELENBQUwsY0FBcUJBLEtBQUssQ0FBQyxPQUFELENBQTFCLElBQXdDLFFBRDNDLENBREYsRUFJRTtBQUFHLGFBQVMsRUFBQyxNQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0NBSkYsRUFLRTtBQUFHLGFBQVMsRUFBQyxNQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0NBTEYsQ0FyQkYsQ0FIRixDQURGO0FBbUNELENBcEVEOztHQUFNRixNOztBQXNFU0EscUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXHJhbmRvbS5qcy40NTU2MjVjNGYzM2RmZjI5NDdkNy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL0xheW91dCc7XHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgQmFja0Fycm93IGZyb20gJy4uL2NvbXBvbmVudHMvQmFja0Fycm93JztcclxuaW1wb3J0IEVycm9yTWVzc2FnZSBmcm9tICcuLi9jb21wb25lbnRzL0Vycm9yTWVzc2FnZSc7XHJcblxyXG5jb25zdCByYW5kb206IFJlYWN0LkZDID0gKCkgPT4ge1xyXG4gIGNvbnN0IFtjb2xvciwgc2V0Q29sb3JdID0gdXNlU3RhdGUoe1xyXG4gICAgY29sb3I6ICcnLFxyXG4gICAgY29udHJhc3Q6ICcjMzQzYTQwJyxcclxuICB9KTtcclxuXHJcbiAgY29uc3QgaGFuZGxlQ29sb3IgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBsZXR0ZXJzID0gJzAxMjM0NTY3ODlBQkNERUYnLnNwbGl0KCcnKTtcclxuICAgIGxldCBjb2xvciA9ICcnO1xyXG5cclxuICAgIC8vIGNoYW5nZSBsb29wXHJcblxyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCA2OyBpKyspIHtcclxuICAgICAgY29sb3IgKz0gbGV0dGVyc1tNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxNildO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGNvbnRyYXN0ID0gZ2V0Q29udHJhc3RZSVEoY29sb3IpO1xyXG5cclxuICAgIHNldENvbG9yKHtcclxuICAgICAgY29sb3IsXHJcbiAgICAgIGNvbnRyYXN0LFxyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgZ2V0Q29udHJhc3RZSVEgPSAoaGV4Y29sb3I6IHN0cmluZykgPT4ge1xyXG4gICAgbGV0IHIgPSBwYXJzZUludChoZXhjb2xvci5zdWJzdHIoMCwgMiksIDE2KTtcclxuICAgIGxldCBnID0gcGFyc2VJbnQoaGV4Y29sb3Iuc3Vic3RyKDIsIDIpLCAxNik7XHJcbiAgICBsZXQgYiA9IHBhcnNlSW50KGhleGNvbG9yLnN1YnN0cig0LCAyKSwgMTYpO1xyXG4gICAgbGV0IHlpcSA9IChyICogMjk5ICsgZyAqIDU4NyArIGIgKiAxMTQpIC8gMTAwMDtcclxuXHJcbiAgICByZXR1cm4geWlxID49IDEyOCA/ICcjMzQzYTQwJyA6ICcjZmZmJztcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPExheW91dCBzdHlsZT17eyBoZWlnaHQ6ICcxMDB2aCcgfX0+XHJcbiAgICAgIDxCYWNrQXJyb3cgc3R5bGU9e3sgY29sb3I6IGNvbG9yWydjb250cmFzdCddIH19IC8+XHJcblxyXG4gICAgICA8ZGl2XHJcbiAgICAgICAgY2xhc3NOYW1lPVwiZnVsbHNjcmVlblwiXHJcbiAgICAgICAgb25DbGljaz17KCkgPT4gaGFuZGxlQ29sb3IoKX1cclxuICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgYmFja2dyb3VuZDogYCMke2NvbG9yWydjb2xvciddfWAsXHJcbiAgICAgICAgfX1cclxuICAgICAgICBvbkNvbnRleHRNZW51PXsoZXYpID0+IHtcclxuICAgICAgICAgIGV2LnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgICAgICAgLy8gY29weSB0byBjbGlwYm9hcmRcclxuICAgICAgICAgIGNvbG9yWydjb2xvciddXHJcbiAgICAgICAgICAgID8gbmF2aWdhdG9yLmNsaXBib2FyZC53cml0ZVRleHQoY29sb3JbJ2NvbG9yJ10pXHJcbiAgICAgICAgICAgIDogKGNvbnNvbGUubG9nKCdub3AnKSxcclxuICAgICAgICAgICAgICAoXHJcbiAgICAgICAgICAgICAgICA8RXJyb3JNZXNzYWdlXHJcbiAgICAgICAgICAgICAgICAgIHRpdGxlPVwiTm8gY29sb3IgeWV0XCJcclxuICAgICAgICAgICAgICAgICAgZGVzYz1cIkNsaWNrIHRvIHNlZSBhIGNvbG9yLCB0aGVuIHlvdSBjYW4gY29weSBpdCFcIlxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICApKTtcclxuICAgICAgICB9fVxyXG4gICAgICA+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtaWQtLWNvbnRhaW5lclwiIHN0eWxlPXt7IGNvbG9yOiBjb2xvclsnY29udHJhc3QnXSB9fT5cclxuICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0aXRsZSBtYi00XCI+XHJcbiAgICAgICAgICAgIHtjb2xvclsnY29sb3InXSA/IGAjJHtjb2xvclsnY29sb3InXX1gIDogJ2NsaWNrISd9XHJcbiAgICAgICAgICA8L2gxPlxyXG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZGVzY1wiPkxlZnQgY2xpY2s6IENoYW5nZSBjb2xvcjwvcD5cclxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImRlc2NcIj5SaWdodCBjbGljazogQ29weSBjb2xvciBjb2RlPC9wPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvTGF5b3V0PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCByYW5kb207XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=