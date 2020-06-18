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
    console.log(contrast); // navigator.clipboard.writeText(color);
  };

  var getContrastYIQ = function getContrastYIQ(hexcolor) {
    var r = parseInt(hexcolor.substr(0, 2), 16);
    var g = parseInt(hexcolor.substr(2, 2), 16);
    var b = parseInt(hexcolor.substr(4, 2), 16);
    var yiq = (r * 299 + g * 587 + b * 114) / 1000;
    return yiq >= 128 ? '#343a40' : '#fff';
  };

  window.addEventListener('contextmenu', function (ev) {
    ev.preventDefault();
  });
  return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_1__["default"], {
    style: {
      height: '100vh'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 5
    }
  }, __jsx(_components_BackArrow__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
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
      lineNumber: 51,
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
      lineNumber: 58,
      columnNumber: 9
    }
  }, __jsx("h1", {
    className: "title mb-4",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 11
    }
  }, color['color'] ? "#".concat(color['color']) : 'click!'), __jsx("p", {
    className: "desc",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 11
    }
  }, "Left click: Change color"), __jsx("p", {
    className: "desc",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9yYW5kb20udHN4Il0sIm5hbWVzIjpbInJhbmRvbSIsInVzZVN0YXRlIiwiY29sb3IiLCJjb250cmFzdCIsInNldENvbG9yIiwiaGFuZGxlQ29sb3IiLCJsZXR0ZXJzIiwiaSIsIk1hdGgiLCJmbG9vciIsImdldENvbnRyYXN0WUlRIiwiY29uc29sZSIsImxvZyIsImhleGNvbG9yIiwiciIsInBhcnNlSW50Iiwic3Vic3RyIiwiZyIsImIiLCJ5aXEiLCJ3aW5kb3ciLCJhZGRFdmVudExpc3RlbmVyIiwiZXYiLCJwcmV2ZW50RGVmYXVsdCIsImhlaWdodCIsImJhY2tncm91bmQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBSUE7QUFFQTs7QUFFQSxJQUFNQSxNQUFnQixHQUFHLFNBQW5CQSxNQUFtQixHQUFNO0FBQUE7O0FBQUEsa0JBQ0hDLHNEQUFRLENBQUM7QUFDakNDLFNBQUssRUFBRSxFQUQwQjtBQUVqQ0MsWUFBUSxFQUFFO0FBRnVCLEdBQUQsQ0FETDtBQUFBLE1BQ3RCRCxLQURzQjtBQUFBLE1BQ2ZFLFFBRGU7O0FBTTdCLE1BQU1DLFdBQVcsR0FBRyxTQUFkQSxXQUFjLEdBQU07QUFDeEIsUUFBTUMsT0FBTyxHQUFHLGtCQUFoQjtBQUNBLFFBQUlKLEtBQUssR0FBRyxFQUFaOztBQUNBLFNBQUssSUFBSUssQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBRyxDQUFwQixFQUF1QkEsQ0FBQyxFQUF4QixFQUE0QjtBQUMxQkwsV0FBSyxJQUFJSSxPQUFPLENBQUNFLElBQUksQ0FBQ0MsS0FBTCxDQUFXRCxJQUFJLENBQUNSLE1BQUwsS0FBZ0IsRUFBM0IsQ0FBRCxDQUFoQjtBQUNEOztBQUVELFFBQU1HLFFBQVEsR0FBR08sY0FBYyxDQUFDUixLQUFELENBQS9CO0FBRUFFLFlBQVEsQ0FBQztBQUNQRixXQUFLLEVBQUxBLEtBRE87QUFFUEMsY0FBUSxFQUFSQTtBQUZPLEtBQUQsQ0FBUjtBQUtBUSxXQUFPLENBQUNDLEdBQVIsQ0FBWVQsUUFBWixFQWR3QixDQWdCeEI7QUFDRCxHQWpCRDs7QUFtQkEsTUFBTU8sY0FBYyxHQUFHLFNBQWpCQSxjQUFpQixDQUFDRyxRQUFELEVBQXNCO0FBQzNDLFFBQUlDLENBQUMsR0FBR0MsUUFBUSxDQUFDRixRQUFRLENBQUNHLE1BQVQsQ0FBZ0IsQ0FBaEIsRUFBbUIsQ0FBbkIsQ0FBRCxFQUF3QixFQUF4QixDQUFoQjtBQUNBLFFBQUlDLENBQUMsR0FBR0YsUUFBUSxDQUFDRixRQUFRLENBQUNHLE1BQVQsQ0FBZ0IsQ0FBaEIsRUFBbUIsQ0FBbkIsQ0FBRCxFQUF3QixFQUF4QixDQUFoQjtBQUNBLFFBQUlFLENBQUMsR0FBR0gsUUFBUSxDQUFDRixRQUFRLENBQUNHLE1BQVQsQ0FBZ0IsQ0FBaEIsRUFBbUIsQ0FBbkIsQ0FBRCxFQUF3QixFQUF4QixDQUFoQjtBQUNBLFFBQUlHLEdBQUcsR0FBRyxDQUFDTCxDQUFDLEdBQUcsR0FBSixHQUFVRyxDQUFDLEdBQUcsR0FBZCxHQUFvQkMsQ0FBQyxHQUFHLEdBQXpCLElBQWdDLElBQTFDO0FBRUEsV0FBT0MsR0FBRyxJQUFJLEdBQVAsR0FBYSxTQUFiLEdBQXlCLE1BQWhDO0FBQ0QsR0FQRDs7QUFTQUMsUUFBTSxDQUFDQyxnQkFBUCxDQUF3QixhQUF4QixFQUF1QyxVQUFDQyxFQUFELEVBQVE7QUFDN0NBLE1BQUUsQ0FBQ0MsY0FBSDtBQUNELEdBRkQ7QUFJQSxTQUNFLE1BQUMsMERBQUQ7QUFBUSxTQUFLLEVBQUU7QUFBRUMsWUFBTSxFQUFFO0FBQVYsS0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyw2REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsRUFHRTtBQUNFLGFBQVMsRUFBQyxZQURaO0FBRUUsV0FBTyxFQUFFO0FBQUEsYUFBTW5CLFdBQVcsRUFBakI7QUFBQSxLQUZYO0FBR0UsU0FBSyxFQUFFO0FBQ0xvQixnQkFBVSxhQUFNdkIsS0FBSyxDQUFDLE9BQUQsQ0FBWDtBQURMLEtBSFQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQU9FO0FBQUssYUFBUyxFQUFDLGdCQUFmO0FBQWdDLFNBQUssRUFBRTtBQUFFQSxXQUFLLEVBQUVBLEtBQUssQ0FBQyxVQUFEO0FBQWQsS0FBdkM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUksYUFBUyxFQUFDLFlBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNHQSxLQUFLLENBQUMsT0FBRCxDQUFMLGNBQXFCQSxLQUFLLENBQUMsT0FBRCxDQUExQixJQUF3QyxRQUQzQyxDQURGLEVBSUU7QUFBRyxhQUFTLEVBQUMsTUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdDQUpGLEVBS0U7QUFBRyxhQUFTLEVBQUMsTUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9DQUxGLENBUEYsQ0FIRixDQURGO0FBcUJELENBM0REOztHQUFNRixNOztBQTZEU0EscUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXHJhbmRvbS5qcy4xNDZhMmRlYzU3NTk5MmJiYjFkZS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL0xheW91dCc7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbmltcG9ydCB7IEZvbnRBd2Vzb21lSWNvbiB9IGZyb20gJ0Bmb3J0YXdlc29tZS9yZWFjdC1mb250YXdlc29tZSc7XHJcbmltcG9ydCB7IGZhQXJyb3dMZWZ0IH0gZnJvbSAnQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zJztcclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IHN0cmluZ2lmeSB9IGZyb20gJ3F1ZXJ5c3RyaW5nJztcclxuaW1wb3J0IEJhY2tBcnJvdyBmcm9tICcuLi9jb21wb25lbnRzL0JhY2tBcnJvdyc7XHJcblxyXG5jb25zdCByYW5kb206IFJlYWN0LkZDID0gKCkgPT4ge1xyXG4gIGNvbnN0IFtjb2xvciwgc2V0Q29sb3JdID0gdXNlU3RhdGUoe1xyXG4gICAgY29sb3I6ICcnLFxyXG4gICAgY29udHJhc3Q6ICcnLFxyXG4gIH0pO1xyXG5cclxuICBjb25zdCBoYW5kbGVDb2xvciA9ICgpID0+IHtcclxuICAgIGNvbnN0IGxldHRlcnMgPSAnMDEyMzQ1Njc4OUFCQ0RFRic7XHJcbiAgICBsZXQgY29sb3IgPSAnJztcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgNjsgaSsrKSB7XHJcbiAgICAgIGNvbG9yICs9IGxldHRlcnNbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTYpXTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBjb250cmFzdCA9IGdldENvbnRyYXN0WUlRKGNvbG9yKTtcclxuXHJcbiAgICBzZXRDb2xvcih7XHJcbiAgICAgIGNvbG9yLFxyXG4gICAgICBjb250cmFzdCxcclxuICAgIH0pO1xyXG5cclxuICAgIGNvbnNvbGUubG9nKGNvbnRyYXN0KTtcclxuXHJcbiAgICAvLyBuYXZpZ2F0b3IuY2xpcGJvYXJkLndyaXRlVGV4dChjb2xvcik7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgZ2V0Q29udHJhc3RZSVEgPSAoaGV4Y29sb3I6IHN0cmluZykgPT4ge1xyXG4gICAgbGV0IHIgPSBwYXJzZUludChoZXhjb2xvci5zdWJzdHIoMCwgMiksIDE2KTtcclxuICAgIGxldCBnID0gcGFyc2VJbnQoaGV4Y29sb3Iuc3Vic3RyKDIsIDIpLCAxNik7XHJcbiAgICBsZXQgYiA9IHBhcnNlSW50KGhleGNvbG9yLnN1YnN0cig0LCAyKSwgMTYpO1xyXG4gICAgbGV0IHlpcSA9IChyICogMjk5ICsgZyAqIDU4NyArIGIgKiAxMTQpIC8gMTAwMDtcclxuXHJcbiAgICByZXR1cm4geWlxID49IDEyOCA/ICcjMzQzYTQwJyA6ICcjZmZmJztcclxuICB9O1xyXG5cclxuICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignY29udGV4dG1lbnUnLCAoZXYpID0+IHtcclxuICAgIGV2LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgfSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8TGF5b3V0IHN0eWxlPXt7IGhlaWdodDogJzEwMHZoJyB9fT5cclxuICAgICAgPEJhY2tBcnJvdyAvPlxyXG5cclxuICAgICAgPGRpdlxyXG4gICAgICAgIGNsYXNzTmFtZT1cImZ1bGxzY3JlZW5cIlxyXG4gICAgICAgIG9uQ2xpY2s9eygpID0+IGhhbmRsZUNvbG9yKCl9XHJcbiAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgIGJhY2tncm91bmQ6IGAjJHtjb2xvclsnY29sb3InXX1gLFxyXG4gICAgICAgIH19XHJcbiAgICAgID5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1pZC0tY29udGFpbmVyXCIgc3R5bGU9e3sgY29sb3I6IGNvbG9yWydjb250cmFzdCddIH19PlxyXG4gICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRpdGxlIG1iLTRcIj5cclxuICAgICAgICAgICAge2NvbG9yWydjb2xvciddID8gYCMke2NvbG9yWydjb2xvciddfWAgOiAnY2xpY2shJ31cclxuICAgICAgICAgIDwvaDE+XHJcbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJkZXNjXCI+TGVmdCBjbGljazogQ2hhbmdlIGNvbG9yPC9wPlxyXG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZGVzY1wiPlJpZ2h0IGNsaWNrOiBDb3B5IGNvbG9yIGNvZGU8L3A+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9MYXlvdXQ+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHJhbmRvbTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==