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
      lineNumber: 36,
      columnNumber: 5
    }
  }, __jsx(_components_BackArrow__WEBPACK_IMPORTED_MODULE_2__["default"], {
    style: {
      color: color['contrast']
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
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
      ev.preventDefault();
      navigator.clipboard.writeText(color['color']);
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
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
      lineNumber: 51,
      columnNumber: 9
    }
  }, __jsx("h1", {
    className: "title mb-4",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 11
    }
  }, color['color'] ? "#".concat(color['color']) : 'click!'), __jsx("p", {
    className: "desc",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 11
    }
  }, "Left click: Change color"), __jsx("p", {
    className: "desc",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9yYW5kb20udHN4Il0sIm5hbWVzIjpbInJhbmRvbSIsInVzZVN0YXRlIiwiY29sb3IiLCJjb250cmFzdCIsInNldENvbG9yIiwiaGFuZGxlQ29sb3IiLCJsZXR0ZXJzIiwiaSIsIk1hdGgiLCJmbG9vciIsImdldENvbnRyYXN0WUlRIiwiaGV4Y29sb3IiLCJyIiwicGFyc2VJbnQiLCJzdWJzdHIiLCJnIiwiYiIsInlpcSIsImhlaWdodCIsImJhY2tncm91bmQiLCJldiIsInByZXZlbnREZWZhdWx0IiwibmF2aWdhdG9yIiwiY2xpcGJvYXJkIiwid3JpdGVUZXh0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsTUFBZ0IsR0FBRyxTQUFuQkEsTUFBbUIsR0FBTTtBQUFBOztBQUFBLGtCQUNIQyxzREFBUSxDQUFDO0FBQ2pDQyxTQUFLLEVBQUUsRUFEMEI7QUFFakNDLFlBQVEsRUFBRTtBQUZ1QixHQUFELENBREw7QUFBQSxNQUN0QkQsS0FEc0I7QUFBQSxNQUNmRSxRQURlOztBQU03QixNQUFNQyxXQUFXLEdBQUcsU0FBZEEsV0FBYyxHQUFNO0FBQ3hCLFFBQU1DLE9BQU8sR0FBRyxrQkFBaEI7QUFDQSxRQUFJSixLQUFLLEdBQUcsRUFBWjs7QUFDQSxTQUFLLElBQUlLLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUcsQ0FBcEIsRUFBdUJBLENBQUMsRUFBeEIsRUFBNEI7QUFDMUJMLFdBQUssSUFBSUksT0FBTyxDQUFDRSxJQUFJLENBQUNDLEtBQUwsQ0FBV0QsSUFBSSxDQUFDUixNQUFMLEtBQWdCLEVBQTNCLENBQUQsQ0FBaEI7QUFDRDs7QUFFRCxRQUFNRyxRQUFRLEdBQUdPLGNBQWMsQ0FBQ1IsS0FBRCxDQUEvQjtBQUVBRSxZQUFRLENBQUM7QUFDUEYsV0FBSyxFQUFMQSxLQURPO0FBRVBDLGNBQVEsRUFBUkE7QUFGTyxLQUFELENBQVI7QUFJRCxHQWJEOztBQWVBLE1BQU1PLGNBQWMsR0FBRyxTQUFqQkEsY0FBaUIsQ0FBQ0MsUUFBRCxFQUFzQjtBQUMzQyxRQUFJQyxDQUFDLEdBQUdDLFFBQVEsQ0FBQ0YsUUFBUSxDQUFDRyxNQUFULENBQWdCLENBQWhCLEVBQW1CLENBQW5CLENBQUQsRUFBd0IsRUFBeEIsQ0FBaEI7QUFDQSxRQUFJQyxDQUFDLEdBQUdGLFFBQVEsQ0FBQ0YsUUFBUSxDQUFDRyxNQUFULENBQWdCLENBQWhCLEVBQW1CLENBQW5CLENBQUQsRUFBd0IsRUFBeEIsQ0FBaEI7QUFDQSxRQUFJRSxDQUFDLEdBQUdILFFBQVEsQ0FBQ0YsUUFBUSxDQUFDRyxNQUFULENBQWdCLENBQWhCLEVBQW1CLENBQW5CLENBQUQsRUFBd0IsRUFBeEIsQ0FBaEI7QUFDQSxRQUFJRyxHQUFHLEdBQUcsQ0FBQ0wsQ0FBQyxHQUFHLEdBQUosR0FBVUcsQ0FBQyxHQUFHLEdBQWQsR0FBb0JDLENBQUMsR0FBRyxHQUF6QixJQUFnQyxJQUExQztBQUVBLFdBQU9DLEdBQUcsSUFBSSxHQUFQLEdBQWEsU0FBYixHQUF5QixNQUFoQztBQUNELEdBUEQ7O0FBU0EsU0FDRSxNQUFDLDBEQUFEO0FBQVEsU0FBSyxFQUFFO0FBQUVDLFlBQU0sRUFBRTtBQUFWLEtBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsNkRBQUQ7QUFBVyxTQUFLLEVBQUU7QUFBRWhCLFdBQUssRUFBRUEsS0FBSyxDQUFDLFVBQUQ7QUFBZCxLQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsRUFHRTtBQUNFLGFBQVMsRUFBQyxZQURaO0FBRUUsV0FBTyxFQUFFO0FBQUEsYUFBTUcsV0FBVyxFQUFqQjtBQUFBLEtBRlg7QUFHRSxTQUFLLEVBQUU7QUFDTGMsZ0JBQVUsYUFBTWpCLEtBQUssQ0FBQyxPQUFELENBQVg7QUFETCxLQUhUO0FBTUUsaUJBQWEsRUFBRSx1QkFBQ2tCLEVBQUQsRUFBUTtBQUNyQkEsUUFBRSxDQUFDQyxjQUFIO0FBRUFDLGVBQVMsQ0FBQ0MsU0FBVixDQUFvQkMsU0FBcEIsQ0FBOEJ0QixLQUFLLENBQUMsT0FBRCxDQUFuQztBQUNELEtBVkg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQVlFO0FBQUssYUFBUyxFQUFDLGdCQUFmO0FBQWdDLFNBQUssRUFBRTtBQUFFQSxXQUFLLEVBQUVBLEtBQUssQ0FBQyxVQUFEO0FBQWQsS0FBdkM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUksYUFBUyxFQUFDLFlBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNHQSxLQUFLLENBQUMsT0FBRCxDQUFMLGNBQXFCQSxLQUFLLENBQUMsT0FBRCxDQUExQixJQUF3QyxRQUQzQyxDQURGLEVBSUU7QUFBRyxhQUFTLEVBQUMsTUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdDQUpGLEVBS0U7QUFBRyxhQUFTLEVBQUMsTUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9DQUxGLENBWkYsQ0FIRixDQURGO0FBMEJELENBeEREOztHQUFNRixNOztBQTBEU0EscUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXHJhbmRvbS5qcy5jMGMxMWE3MTQ1MTI5NmQxZmUzNi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL0xheW91dCc7XHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgQmFja0Fycm93IGZyb20gJy4uL2NvbXBvbmVudHMvQmFja0Fycm93JztcclxuXHJcbmNvbnN0IHJhbmRvbTogUmVhY3QuRkMgPSAoKSA9PiB7XHJcbiAgY29uc3QgW2NvbG9yLCBzZXRDb2xvcl0gPSB1c2VTdGF0ZSh7XHJcbiAgICBjb2xvcjogJycsXHJcbiAgICBjb250cmFzdDogJycsXHJcbiAgfSk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZUNvbG9yID0gKCkgPT4ge1xyXG4gICAgY29uc3QgbGV0dGVycyA9ICcwMTIzNDU2Nzg5QUJDREVGJztcclxuICAgIGxldCBjb2xvciA9ICcnO1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCA2OyBpKyspIHtcclxuICAgICAgY29sb3IgKz0gbGV0dGVyc1tNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxNildO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGNvbnRyYXN0ID0gZ2V0Q29udHJhc3RZSVEoY29sb3IpO1xyXG5cclxuICAgIHNldENvbG9yKHtcclxuICAgICAgY29sb3IsXHJcbiAgICAgIGNvbnRyYXN0LFxyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgZ2V0Q29udHJhc3RZSVEgPSAoaGV4Y29sb3I6IHN0cmluZykgPT4ge1xyXG4gICAgbGV0IHIgPSBwYXJzZUludChoZXhjb2xvci5zdWJzdHIoMCwgMiksIDE2KTtcclxuICAgIGxldCBnID0gcGFyc2VJbnQoaGV4Y29sb3Iuc3Vic3RyKDIsIDIpLCAxNik7XHJcbiAgICBsZXQgYiA9IHBhcnNlSW50KGhleGNvbG9yLnN1YnN0cig0LCAyKSwgMTYpO1xyXG4gICAgbGV0IHlpcSA9IChyICogMjk5ICsgZyAqIDU4NyArIGIgKiAxMTQpIC8gMTAwMDtcclxuXHJcbiAgICByZXR1cm4geWlxID49IDEyOCA/ICcjMzQzYTQwJyA6ICcjZmZmJztcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPExheW91dCBzdHlsZT17eyBoZWlnaHQ6ICcxMDB2aCcgfX0+XHJcbiAgICAgIDxCYWNrQXJyb3cgc3R5bGU9e3sgY29sb3I6IGNvbG9yWydjb250cmFzdCddIH19IC8+XHJcblxyXG4gICAgICA8ZGl2XHJcbiAgICAgICAgY2xhc3NOYW1lPVwiZnVsbHNjcmVlblwiXHJcbiAgICAgICAgb25DbGljaz17KCkgPT4gaGFuZGxlQ29sb3IoKX1cclxuICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgYmFja2dyb3VuZDogYCMke2NvbG9yWydjb2xvciddfWAsXHJcbiAgICAgICAgfX1cclxuICAgICAgICBvbkNvbnRleHRNZW51PXsoZXYpID0+IHtcclxuICAgICAgICAgIGV2LnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgICAgICAgbmF2aWdhdG9yLmNsaXBib2FyZC53cml0ZVRleHQoY29sb3JbJ2NvbG9yJ10pO1xyXG4gICAgICAgIH19XHJcbiAgICAgID5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1pZC0tY29udGFpbmVyXCIgc3R5bGU9e3sgY29sb3I6IGNvbG9yWydjb250cmFzdCddIH19PlxyXG4gICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRpdGxlIG1iLTRcIj5cclxuICAgICAgICAgICAge2NvbG9yWydjb2xvciddID8gYCMke2NvbG9yWydjb2xvciddfWAgOiAnY2xpY2shJ31cclxuICAgICAgICAgIDwvaDE+XHJcbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJkZXNjXCI+TGVmdCBjbGljazogQ2hhbmdlIGNvbG9yPC9wPlxyXG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZGVzY1wiPlJpZ2h0IGNsaWNrOiBDb3B5IGNvbG9yIGNvZGU8L3A+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9MYXlvdXQ+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHJhbmRvbTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==