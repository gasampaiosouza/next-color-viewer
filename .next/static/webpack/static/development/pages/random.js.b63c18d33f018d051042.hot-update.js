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
    return setColor({
      color: color,
      contrast: contrast
    }); // navigator.clipboard.writeText(color);
  };

  var getContrastYIQ = function getContrastYIQ(hexcolor) {
    var r = parseInt(hexcolor.substr(0, 2), 16);
    var g = parseInt(hexcolor.substr(2, 2), 16);
    var b = parseInt(hexcolor.substr(4, 2), 16);
    var yiq = (r * 299 + g * 587 + b * 114) / 1000;
    return yiq >= 128 ? '$black' : '#fff';
  };

  return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_1__["default"], {
    style: {
      height: '100vh'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 5
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "back--container random",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 9
    }
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faArrowLeft"],
    className: "arrow--icon",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 11
    }
  }), __jsx("span", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 11
    }
  }, "Back to home"))), __jsx("div", {
    className: "fullscreen",
    onClick: function onClick() {
      return handleColor();
    },
    style: {
      background: "#".concat(color['color']) // color: color['contrast'],

    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "mid--container",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 9
    }
  }, __jsx("h1", {
    className: "title mb-4",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 11
    }
  }, "#".concat(color['color'])), __jsx("p", {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9yYW5kb20udHN4Il0sIm5hbWVzIjpbInJhbmRvbSIsInVzZVN0YXRlIiwiY29sb3IiLCJjb250cmFzdCIsInNldENvbG9yIiwiaGFuZGxlQ29sb3IiLCJsZXR0ZXJzIiwiaSIsIk1hdGgiLCJmbG9vciIsImdldENvbnRyYXN0WUlRIiwiaGV4Y29sb3IiLCJyIiwicGFyc2VJbnQiLCJzdWJzdHIiLCJnIiwiYiIsInlpcSIsImhlaWdodCIsImZhQXJyb3dMZWZ0IiwiYmFja2dyb3VuZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFHQSxJQUFNQSxNQUFnQixHQUFHLFNBQW5CQSxNQUFtQixHQUFNO0FBQUE7O0FBQUEsa0JBQ0hDLHNEQUFRLENBQUM7QUFDakNDLFNBQUssRUFBRSxFQUQwQjtBQUVqQ0MsWUFBUSxFQUFFO0FBRnVCLEdBQUQsQ0FETDtBQUFBLE1BQ3RCRCxLQURzQjtBQUFBLE1BQ2ZFLFFBRGU7O0FBTTdCLE1BQU1DLFdBQVcsR0FBRyxTQUFkQSxXQUFjLEdBQU07QUFDeEIsUUFBTUMsT0FBTyxHQUFHLGtCQUFoQjtBQUNBLFFBQUlKLEtBQUssR0FBRyxFQUFaOztBQUNBLFNBQUssSUFBSUssQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBRyxDQUFwQixFQUF1QkEsQ0FBQyxFQUF4QixFQUE0QjtBQUMxQkwsV0FBSyxJQUFJSSxPQUFPLENBQUNFLElBQUksQ0FBQ0MsS0FBTCxDQUFXRCxJQUFJLENBQUNSLE1BQUwsS0FBZ0IsRUFBM0IsQ0FBRCxDQUFoQjtBQUNEOztBQUVELFFBQU1HLFFBQVEsR0FBR08sY0FBYyxDQUFDUixLQUFELENBQS9CO0FBRUEsV0FBT0UsUUFBUSxDQUFDO0FBQ2RGLFdBQUssRUFBTEEsS0FEYztBQUVkQyxjQUFRLEVBQVJBO0FBRmMsS0FBRCxDQUFmLENBVHdCLENBY3hCO0FBQ0QsR0FmRDs7QUFpQkEsTUFBTU8sY0FBYyxHQUFHLFNBQWpCQSxjQUFpQixDQUFDQyxRQUFELEVBQXNCO0FBQzNDLFFBQUlDLENBQUMsR0FBR0MsUUFBUSxDQUFDRixRQUFRLENBQUNHLE1BQVQsQ0FBZ0IsQ0FBaEIsRUFBbUIsQ0FBbkIsQ0FBRCxFQUF3QixFQUF4QixDQUFoQjtBQUNBLFFBQUlDLENBQUMsR0FBR0YsUUFBUSxDQUFDRixRQUFRLENBQUNHLE1BQVQsQ0FBZ0IsQ0FBaEIsRUFBbUIsQ0FBbkIsQ0FBRCxFQUF3QixFQUF4QixDQUFoQjtBQUNBLFFBQUlFLENBQUMsR0FBR0gsUUFBUSxDQUFDRixRQUFRLENBQUNHLE1BQVQsQ0FBZ0IsQ0FBaEIsRUFBbUIsQ0FBbkIsQ0FBRCxFQUF3QixFQUF4QixDQUFoQjtBQUNBLFFBQUlHLEdBQUcsR0FBRyxDQUFDTCxDQUFDLEdBQUcsR0FBSixHQUFVRyxDQUFDLEdBQUcsR0FBZCxHQUFvQkMsQ0FBQyxHQUFHLEdBQXpCLElBQWdDLElBQTFDO0FBRUEsV0FBT0MsR0FBRyxJQUFJLEdBQVAsR0FBYSxRQUFiLEdBQXdCLE1BQS9CO0FBQ0QsR0FQRDs7QUFTQSxTQUNFLE1BQUMsMERBQUQ7QUFBUSxTQUFLLEVBQUU7QUFBRUMsWUFBTSxFQUFFO0FBQVYsS0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxnREFBRDtBQUFNLFFBQUksRUFBQyxHQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLGFBQVMsRUFBQyx3QkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyw4RUFBRDtBQUFpQixRQUFJLEVBQUVDLDZFQUF2QjtBQUFvQyxhQUFTLEVBQUMsYUFBOUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLEVBRUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFGRixDQURGLENBREYsRUFRRTtBQUNFLGFBQVMsRUFBQyxZQURaO0FBRUUsV0FBTyxFQUFFO0FBQUEsYUFBTWQsV0FBVyxFQUFqQjtBQUFBLEtBRlg7QUFHRSxTQUFLLEVBQUU7QUFDTGUsZ0JBQVUsYUFBTWxCLEtBQUssQ0FBQyxPQUFELENBQVgsQ0FETCxDQUVMOztBQUZLLEtBSFQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQVFFO0FBQUssYUFBUyxFQUFDLGdCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFJLGFBQVMsRUFBQyxZQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBQWdDQSxLQUFLLENBQUMsT0FBRCxDQUFyQyxFQURGLEVBRUU7QUFBRyxhQUFTLEVBQUMsTUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdDQUZGLEVBR0U7QUFBRyxhQUFTLEVBQUMsTUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9DQUhGLENBUkYsQ0FSRixDQURGO0FBeUJELENBekREOztHQUFNRixNOztBQTJEU0EscUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXHJhbmRvbS5qcy5iNjNjMThkMzNmMDE4ZDA1MTA0Mi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL0xheW91dCc7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbmltcG9ydCB7IEZvbnRBd2Vzb21lSWNvbiB9IGZyb20gJ0Bmb3J0YXdlc29tZS9yZWFjdC1mb250YXdlc29tZSc7XHJcbmltcG9ydCB7IGZhQXJyb3dMZWZ0IH0gZnJvbSAnQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zJztcclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IHN0cmluZ2lmeSB9IGZyb20gJ3F1ZXJ5c3RyaW5nJztcclxuXHJcbmNvbnN0IHJhbmRvbTogUmVhY3QuRkMgPSAoKSA9PiB7XHJcbiAgY29uc3QgW2NvbG9yLCBzZXRDb2xvcl0gPSB1c2VTdGF0ZSh7XHJcbiAgICBjb2xvcjogJycsXHJcbiAgICBjb250cmFzdDogJycsXHJcbiAgfSk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZUNvbG9yID0gKCkgPT4ge1xyXG4gICAgY29uc3QgbGV0dGVycyA9ICcwMTIzNDU2Nzg5QUJDREVGJztcclxuICAgIGxldCBjb2xvciA9ICcnO1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCA2OyBpKyspIHtcclxuICAgICAgY29sb3IgKz0gbGV0dGVyc1tNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxNildO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGNvbnRyYXN0ID0gZ2V0Q29udHJhc3RZSVEoY29sb3IpO1xyXG5cclxuICAgIHJldHVybiBzZXRDb2xvcih7XHJcbiAgICAgIGNvbG9yLFxyXG4gICAgICBjb250cmFzdCxcclxuICAgIH0pO1xyXG5cclxuICAgIC8vIG5hdmlnYXRvci5jbGlwYm9hcmQud3JpdGVUZXh0KGNvbG9yKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBnZXRDb250cmFzdFlJUSA9IChoZXhjb2xvcjogc3RyaW5nKSA9PiB7XHJcbiAgICBsZXQgciA9IHBhcnNlSW50KGhleGNvbG9yLnN1YnN0cigwLCAyKSwgMTYpO1xyXG4gICAgbGV0IGcgPSBwYXJzZUludChoZXhjb2xvci5zdWJzdHIoMiwgMiksIDE2KTtcclxuICAgIGxldCBiID0gcGFyc2VJbnQoaGV4Y29sb3Iuc3Vic3RyKDQsIDIpLCAxNik7XHJcbiAgICBsZXQgeWlxID0gKHIgKiAyOTkgKyBnICogNTg3ICsgYiAqIDExNCkgLyAxMDAwO1xyXG5cclxuICAgIHJldHVybiB5aXEgPj0gMTI4ID8gJyRibGFjaycgOiAnI2ZmZic7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxMYXlvdXQgc3R5bGU9e3sgaGVpZ2h0OiAnMTAwdmgnIH19PlxyXG4gICAgICA8TGluayBocmVmPVwiL1wiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmFjay0tY29udGFpbmVyIHJhbmRvbVwiPlxyXG4gICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYUFycm93TGVmdH0gY2xhc3NOYW1lPVwiYXJyb3ctLWljb25cIiAvPlxyXG4gICAgICAgICAgPHNwYW4+QmFjayB0byBob21lPC9zcGFuPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L0xpbms+XHJcblxyXG4gICAgICA8ZGl2XHJcbiAgICAgICAgY2xhc3NOYW1lPVwiZnVsbHNjcmVlblwiXHJcbiAgICAgICAgb25DbGljaz17KCkgPT4gaGFuZGxlQ29sb3IoKX1cclxuICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgYmFja2dyb3VuZDogYCMke2NvbG9yWydjb2xvciddfWAsXHJcbiAgICAgICAgICAvLyBjb2xvcjogY29sb3JbJ2NvbnRyYXN0J10sXHJcbiAgICAgICAgfX1cclxuICAgICAgPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWlkLS1jb250YWluZXJcIj5cclxuICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0aXRsZSBtYi00XCI+e2AjJHtjb2xvclsnY29sb3InXX1gfTwvaDE+XHJcbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJkZXNjXCI+TGVmdCBjbGljazogQ2hhbmdlIGNvbG9yPC9wPlxyXG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZGVzY1wiPlJpZ2h0IGNsaWNrOiBDb3B5IGNvbG9yIGNvZGU8L3A+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9MYXlvdXQ+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHJhbmRvbTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==