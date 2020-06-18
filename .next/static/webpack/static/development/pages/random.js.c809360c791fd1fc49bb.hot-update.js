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



window.addEventListener('contextmenu', function (ev) {
  ev.preventDefault();
});

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
  }, color['color'] ? "#".concat(color['color']) : 'click!'), __jsx("p", {
    className: "desc",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 11
    }
  }, "Left click: Change color"), __jsx("p", {
    className: "desc",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9yYW5kb20udHN4Il0sIm5hbWVzIjpbIndpbmRvdyIsImFkZEV2ZW50TGlzdGVuZXIiLCJldiIsInByZXZlbnREZWZhdWx0IiwicmFuZG9tIiwidXNlU3RhdGUiLCJjb2xvciIsImNvbnRyYXN0Iiwic2V0Q29sb3IiLCJoYW5kbGVDb2xvciIsImxldHRlcnMiLCJpIiwiTWF0aCIsImZsb29yIiwiZ2V0Q29udHJhc3RZSVEiLCJjb25zb2xlIiwibG9nIiwiaGV4Y29sb3IiLCJyIiwicGFyc2VJbnQiLCJzdWJzdHIiLCJnIiwiYiIsInlpcSIsImhlaWdodCIsImJhY2tncm91bmQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVBQSxNQUFNLENBQUNDLGdCQUFQLENBQXdCLGFBQXhCLEVBQXVDLFVBQUNDLEVBQUQsRUFBUTtBQUM3Q0EsSUFBRSxDQUFDQyxjQUFIO0FBQ0QsQ0FGRDs7QUFJQSxJQUFNQyxNQUFnQixHQUFHLFNBQW5CQSxNQUFtQixHQUFNO0FBQUE7O0FBQUEsa0JBQ0hDLHNEQUFRLENBQUM7QUFDakNDLFNBQUssRUFBRSxFQUQwQjtBQUVqQ0MsWUFBUSxFQUFFO0FBRnVCLEdBQUQsQ0FETDtBQUFBLE1BQ3RCRCxLQURzQjtBQUFBLE1BQ2ZFLFFBRGU7O0FBTTdCLE1BQU1DLFdBQVcsR0FBRyxTQUFkQSxXQUFjLEdBQU07QUFDeEIsUUFBTUMsT0FBTyxHQUFHLGtCQUFoQjtBQUNBLFFBQUlKLEtBQUssR0FBRyxFQUFaOztBQUNBLFNBQUssSUFBSUssQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBRyxDQUFwQixFQUF1QkEsQ0FBQyxFQUF4QixFQUE0QjtBQUMxQkwsV0FBSyxJQUFJSSxPQUFPLENBQUNFLElBQUksQ0FBQ0MsS0FBTCxDQUFXRCxJQUFJLENBQUNSLE1BQUwsS0FBZ0IsRUFBM0IsQ0FBRCxDQUFoQjtBQUNEOztBQUVELFFBQU1HLFFBQVEsR0FBR08sY0FBYyxDQUFDUixLQUFELENBQS9CO0FBRUFFLFlBQVEsQ0FBQztBQUNQRixXQUFLLEVBQUxBLEtBRE87QUFFUEMsY0FBUSxFQUFSQTtBQUZPLEtBQUQsQ0FBUjtBQUtBUSxXQUFPLENBQUNDLEdBQVIsQ0FBWVQsUUFBWixFQWR3QixDQWdCeEI7QUFDRCxHQWpCRDs7QUFtQkEsTUFBTU8sY0FBYyxHQUFHLFNBQWpCQSxjQUFpQixDQUFDRyxRQUFELEVBQXNCO0FBQzNDLFFBQUlDLENBQUMsR0FBR0MsUUFBUSxDQUFDRixRQUFRLENBQUNHLE1BQVQsQ0FBZ0IsQ0FBaEIsRUFBbUIsQ0FBbkIsQ0FBRCxFQUF3QixFQUF4QixDQUFoQjtBQUNBLFFBQUlDLENBQUMsR0FBR0YsUUFBUSxDQUFDRixRQUFRLENBQUNHLE1BQVQsQ0FBZ0IsQ0FBaEIsRUFBbUIsQ0FBbkIsQ0FBRCxFQUF3QixFQUF4QixDQUFoQjtBQUNBLFFBQUlFLENBQUMsR0FBR0gsUUFBUSxDQUFDRixRQUFRLENBQUNHLE1BQVQsQ0FBZ0IsQ0FBaEIsRUFBbUIsQ0FBbkIsQ0FBRCxFQUF3QixFQUF4QixDQUFoQjtBQUNBLFFBQUlHLEdBQUcsR0FBRyxDQUFDTCxDQUFDLEdBQUcsR0FBSixHQUFVRyxDQUFDLEdBQUcsR0FBZCxHQUFvQkMsQ0FBQyxHQUFHLEdBQXpCLElBQWdDLElBQTFDO0FBRUEsV0FBT0MsR0FBRyxJQUFJLEdBQVAsR0FBYSxTQUFiLEdBQXlCLE1BQWhDO0FBQ0QsR0FQRDs7QUFTQSxTQUNFLE1BQUMsMERBQUQ7QUFBUSxTQUFLLEVBQUU7QUFBRUMsWUFBTSxFQUFFO0FBQVYsS0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyw2REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsRUFHRTtBQUNFLGFBQVMsRUFBQyxZQURaO0FBRUUsV0FBTyxFQUFFO0FBQUEsYUFBTWYsV0FBVyxFQUFqQjtBQUFBLEtBRlg7QUFHRSxTQUFLLEVBQUU7QUFDTGdCLGdCQUFVLGFBQU1uQixLQUFLLENBQUMsT0FBRCxDQUFYO0FBREwsS0FIVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBT0U7QUFBSyxhQUFTLEVBQUMsZ0JBQWY7QUFBZ0MsU0FBSyxFQUFFO0FBQUVBLFdBQUssRUFBRUEsS0FBSyxDQUFDLFVBQUQ7QUFBZCxLQUF2QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSSxhQUFTLEVBQUMsWUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0dBLEtBQUssQ0FBQyxPQUFELENBQUwsY0FBcUJBLEtBQUssQ0FBQyxPQUFELENBQTFCLElBQXdDLFFBRDNDLENBREYsRUFJRTtBQUFHLGFBQVMsRUFBQyxNQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0NBSkYsRUFLRTtBQUFHLGFBQVMsRUFBQyxNQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0NBTEYsQ0FQRixDQUhGLENBREY7QUFxQkQsQ0F2REQ7O0dBQU1GLE07O0FBeURTQSxxRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xccmFuZG9tLmpzLmM4MDkzNjBjNzkxZmQxZmM0OWJiLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvTGF5b3V0JztcclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBCYWNrQXJyb3cgZnJvbSAnLi4vY29tcG9uZW50cy9CYWNrQXJyb3cnO1xyXG5cclxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2NvbnRleHRtZW51JywgKGV2KSA9PiB7XHJcbiAgZXYucHJldmVudERlZmF1bHQoKTtcclxufSk7XHJcblxyXG5jb25zdCByYW5kb206IFJlYWN0LkZDID0gKCkgPT4ge1xyXG4gIGNvbnN0IFtjb2xvciwgc2V0Q29sb3JdID0gdXNlU3RhdGUoe1xyXG4gICAgY29sb3I6ICcnLFxyXG4gICAgY29udHJhc3Q6ICcnLFxyXG4gIH0pO1xyXG5cclxuICBjb25zdCBoYW5kbGVDb2xvciA9ICgpID0+IHtcclxuICAgIGNvbnN0IGxldHRlcnMgPSAnMDEyMzQ1Njc4OUFCQ0RFRic7XHJcbiAgICBsZXQgY29sb3IgPSAnJztcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgNjsgaSsrKSB7XHJcbiAgICAgIGNvbG9yICs9IGxldHRlcnNbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTYpXTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBjb250cmFzdCA9IGdldENvbnRyYXN0WUlRKGNvbG9yKTtcclxuXHJcbiAgICBzZXRDb2xvcih7XHJcbiAgICAgIGNvbG9yLFxyXG4gICAgICBjb250cmFzdCxcclxuICAgIH0pO1xyXG5cclxuICAgIGNvbnNvbGUubG9nKGNvbnRyYXN0KTtcclxuXHJcbiAgICAvLyBuYXZpZ2F0b3IuY2xpcGJvYXJkLndyaXRlVGV4dChjb2xvcik7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgZ2V0Q29udHJhc3RZSVEgPSAoaGV4Y29sb3I6IHN0cmluZykgPT4ge1xyXG4gICAgbGV0IHIgPSBwYXJzZUludChoZXhjb2xvci5zdWJzdHIoMCwgMiksIDE2KTtcclxuICAgIGxldCBnID0gcGFyc2VJbnQoaGV4Y29sb3Iuc3Vic3RyKDIsIDIpLCAxNik7XHJcbiAgICBsZXQgYiA9IHBhcnNlSW50KGhleGNvbG9yLnN1YnN0cig0LCAyKSwgMTYpO1xyXG4gICAgbGV0IHlpcSA9IChyICogMjk5ICsgZyAqIDU4NyArIGIgKiAxMTQpIC8gMTAwMDtcclxuXHJcbiAgICByZXR1cm4geWlxID49IDEyOCA/ICcjMzQzYTQwJyA6ICcjZmZmJztcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPExheW91dCBzdHlsZT17eyBoZWlnaHQ6ICcxMDB2aCcgfX0+XHJcbiAgICAgIDxCYWNrQXJyb3cgLz5cclxuXHJcbiAgICAgIDxkaXZcclxuICAgICAgICBjbGFzc05hbWU9XCJmdWxsc2NyZWVuXCJcclxuICAgICAgICBvbkNsaWNrPXsoKSA9PiBoYW5kbGVDb2xvcigpfVxyXG4gICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kOiBgIyR7Y29sb3JbJ2NvbG9yJ119YCxcclxuICAgICAgICB9fVxyXG4gICAgICA+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtaWQtLWNvbnRhaW5lclwiIHN0eWxlPXt7IGNvbG9yOiBjb2xvclsnY29udHJhc3QnXSB9fT5cclxuICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0aXRsZSBtYi00XCI+XHJcbiAgICAgICAgICAgIHtjb2xvclsnY29sb3InXSA/IGAjJHtjb2xvclsnY29sb3InXX1gIDogJ2NsaWNrISd9XHJcbiAgICAgICAgICA8L2gxPlxyXG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZGVzY1wiPkxlZnQgY2xpY2s6IENoYW5nZSBjb2xvcjwvcD5cclxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImRlc2NcIj5SaWdodCBjbGljazogQ29weSBjb2xvciBjb2RlPC9wPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvTGF5b3V0PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCByYW5kb207XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=