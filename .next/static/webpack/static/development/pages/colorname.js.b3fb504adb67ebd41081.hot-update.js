webpackHotUpdate("static\\development\\pages\\colorname.js",{

/***/ "./pages/colorname.tsx":
/*!*****************************!*\
  !*** ./pages/colorname.tsx ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.tsx");
/* harmony import */ var _components_ErrorMessage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/ErrorMessage */ "./components/ErrorMessage.tsx");


var _this = undefined,
    _jsxFileName = "E:\\AATrabalhoG\\react\\txen\\pages\\colorname.tsx",
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }





var colorName = function colorName() {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(''),
      colorName = _useState[0],
      setColorName = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])({
    color: '',
    error: false
  }),
      color = _useState2[0],
      setColor = _useState2[1];

  var timer;

  var getData = function getData(value) {
    var time = 1000;
    clearTimeout(timer);
    timer = window.setTimeout(function () {
      if (!value) return;

      if (value.match(/[0-9a-fA-F]+/)) {
        setColor(_objectSpread(_objectSpread({}, color), {}, {
          error: false,
          color: "#".concat(value)
        }));
        fetch("https://www.thecolorapi.com/id?hex=".concat(value)).then(function (res) {
          return res.json();
        }).then(function (data) {
          return setColorName(data.name.value);
        });
      } else setColor(_objectSpread(_objectSpread({}, color), {}, {
        error: true
      }));
    }, time);
  };

  return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "back--container",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 7
    }
  }, __jsx("span", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 9
    }
  }, "Back to home")), __jsx("h1", {
    className: "title",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 7
    }
  }, "Get any color name"), __jsx("div", {
    className: "input--container my-5",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 7
    }
  }, __jsx("input", {
    type: "text",
    className: "input",
    placeholder: "Your color",
    maxLength: 6,
    onChange: function onChange(e) {
      return getData(e.target.value);
    } // required
    ,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 9
    }
  }), __jsx("span", {
    className: "hashtag",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 9
    }
  }, "#", __jsx("span", {
    className: "color--bar",
    style: {
      background: color.error ? 'red' : color['color']
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 11
    }
  }))), __jsx("p", {
    className: "desc",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 7
    }
  }, "Your color's name:", ' ', __jsx("span", {
    className: "color--name",
    style: {
      color: color['color']
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 9
    }
  }, colorName)), color.error ? __jsx(_components_ErrorMessage__WEBPACK_IMPORTED_MODULE_3__["default"], {
    title: "Invalid color",
    desc: "Please, write valid color",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 9
    }
  }) : __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null));
};

_s(colorName, "vezxy0G5pWw5QU1lfJq4T18iERY=");

/* harmony default export */ __webpack_exports__["default"] = (colorName);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9jb2xvcm5hbWUudHN4Il0sIm5hbWVzIjpbImNvbG9yTmFtZSIsInVzZVN0YXRlIiwic2V0Q29sb3JOYW1lIiwiY29sb3IiLCJlcnJvciIsInNldENvbG9yIiwidGltZXIiLCJnZXREYXRhIiwidmFsdWUiLCJ0aW1lIiwiY2xlYXJUaW1lb3V0Iiwid2luZG93Iiwic2V0VGltZW91dCIsIm1hdGNoIiwiZmV0Y2giLCJ0aGVuIiwicmVzIiwianNvbiIsImRhdGEiLCJuYW1lIiwiZSIsInRhcmdldCIsImJhY2tncm91bmQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBOztBQUVBLElBQU1BLFNBQVMsR0FBRyxxQkFBTTtBQUFBOztBQUFBLGtCQUNZQyxzREFBUSxDQUFDLEVBQUQsQ0FEcEI7QUFBQSxNQUNmRCxTQURlO0FBQUEsTUFDSkUsWUFESTs7QUFBQSxtQkFFSUQsc0RBQVEsQ0FBQztBQUNqQ0UsU0FBSyxFQUFFLEVBRDBCO0FBRWpDQyxTQUFLLEVBQUU7QUFGMEIsR0FBRCxDQUZaO0FBQUEsTUFFZkQsS0FGZTtBQUFBLE1BRVJFLFFBRlE7O0FBT3RCLE1BQUlDLEtBQUo7O0FBRUEsTUFBTUMsT0FBTyxHQUFHLFNBQVZBLE9BQVUsQ0FBQ0MsS0FBRCxFQUFtQjtBQUNqQyxRQUFNQyxJQUFJLEdBQUcsSUFBYjtBQUNBQyxnQkFBWSxDQUFDSixLQUFELENBQVo7QUFFQUEsU0FBSyxHQUFHSyxNQUFNLENBQUNDLFVBQVAsQ0FBa0IsWUFBTTtBQUM5QixVQUFJLENBQUNKLEtBQUwsRUFBWTs7QUFFWixVQUFJQSxLQUFLLENBQUNLLEtBQU4sQ0FBWSxjQUFaLENBQUosRUFBaUM7QUFDL0JSLGdCQUFRLGlDQUNIRixLQURHO0FBRU5DLGVBQUssRUFBRSxLQUZEO0FBR05ELGVBQUssYUFBTUssS0FBTjtBQUhDLFdBQVI7QUFNQU0sYUFBSyw4Q0FBdUNOLEtBQXZDLEVBQUwsQ0FDR08sSUFESCxDQUNRLFVBQUNDLEdBQUQ7QUFBQSxpQkFBU0EsR0FBRyxDQUFDQyxJQUFKLEVBQVQ7QUFBQSxTQURSLEVBRUdGLElBRkgsQ0FFUSxVQUFDRyxJQUFEO0FBQUEsaUJBQVVoQixZQUFZLENBQUNnQixJQUFJLENBQUNDLElBQUwsQ0FBVVgsS0FBWCxDQUF0QjtBQUFBLFNBRlI7QUFHRCxPQVZELE1BV0VILFFBQVEsaUNBQ0hGLEtBREc7QUFFTkMsYUFBSyxFQUFFO0FBRkQsU0FBUjtBQUlILEtBbEJPLEVBa0JMSyxJQWxCSyxDQUFSO0FBbUJELEdBdkJEOztBQXlCQSxTQUNFLE1BQUMsMERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUssYUFBUyxFQUFDLGlCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQURGLENBREYsRUFLRTtBQUFJLGFBQVMsRUFBQyxPQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsMEJBTEYsRUFPRTtBQUFLLGFBQVMsRUFBQyx1QkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFDRSxRQUFJLEVBQUMsTUFEUDtBQUVFLGFBQVMsRUFBQyxPQUZaO0FBR0UsZUFBVyxFQUFDLFlBSGQ7QUFJRSxhQUFTLEVBQUUsQ0FKYjtBQUtFLFlBQVEsRUFBRSxrQkFBQ1csQ0FBRDtBQUFBLGFBQU9iLE9BQU8sQ0FBQ2EsQ0FBQyxDQUFDQyxNQUFGLENBQVNiLEtBQVYsQ0FBZDtBQUFBLEtBTFosQ0FNRTtBQU5GO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixFQVNFO0FBQU0sYUFBUyxFQUFDLFNBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFFRTtBQUNFLGFBQVMsRUFBQyxZQURaO0FBRUUsU0FBSyxFQUFFO0FBQUVjLGdCQUFVLEVBQUVuQixLQUFLLENBQUNDLEtBQU4sR0FBYyxLQUFkLEdBQXNCRCxLQUFLLENBQUMsT0FBRDtBQUF6QyxLQUZUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFGRixDQVRGLENBUEYsRUF5QkU7QUFBRyxhQUFTLEVBQUMsTUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDJCQUNxQixHQURyQixFQUVFO0FBQU0sYUFBUyxFQUFDLGFBQWhCO0FBQThCLFNBQUssRUFBRTtBQUFFQSxXQUFLLEVBQUVBLEtBQUssQ0FBQyxPQUFEO0FBQWQsS0FBckM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNHSCxTQURILENBRkYsQ0F6QkYsRUFnQ0dHLEtBQUssQ0FBQ0MsS0FBTixHQUNDLE1BQUMsZ0VBQUQ7QUFBYyxTQUFLLEVBQUMsZUFBcEI7QUFBb0MsUUFBSSxFQUFDLDJCQUF6QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREQsR0FHQyxrRUFuQ0osQ0FERjtBQXdDRCxDQTFFRDs7R0FBTUosUzs7QUE0RVNBLHdFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxjb2xvcm5hbWUuanMuYjNmYjUwNGFkYjY3ZWJkNDEwODEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9MYXlvdXQnO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuXHJcbmltcG9ydCBFcnJvck1lc3NhZ2UgZnJvbSAnLi4vY29tcG9uZW50cy9FcnJvck1lc3NhZ2UnO1xyXG5cclxuY29uc3QgY29sb3JOYW1lID0gKCkgPT4ge1xyXG4gIGNvbnN0IFtjb2xvck5hbWUsIHNldENvbG9yTmFtZV0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgY29uc3QgW2NvbG9yLCBzZXRDb2xvcl0gPSB1c2VTdGF0ZSh7XHJcbiAgICBjb2xvcjogJycsXHJcbiAgICBlcnJvcjogZmFsc2UsXHJcbiAgfSk7XHJcblxyXG4gIGxldCB0aW1lcjogbnVtYmVyO1xyXG5cclxuICBjb25zdCBnZXREYXRhID0gKHZhbHVlOiBzdHJpbmcpID0+IHtcclxuICAgIGNvbnN0IHRpbWUgPSAxMDAwO1xyXG4gICAgY2xlYXJUaW1lb3V0KHRpbWVyKTtcclxuXHJcbiAgICB0aW1lciA9IHdpbmRvdy5zZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgaWYgKCF2YWx1ZSkgcmV0dXJuO1xyXG5cclxuICAgICAgaWYgKHZhbHVlLm1hdGNoKC9bMC05YS1mQS1GXSsvKSkge1xyXG4gICAgICAgIHNldENvbG9yKHtcclxuICAgICAgICAgIC4uLmNvbG9yLFxyXG4gICAgICAgICAgZXJyb3I6IGZhbHNlLFxyXG4gICAgICAgICAgY29sb3I6IGAjJHt2YWx1ZX1gLFxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBmZXRjaChgaHR0cHM6Ly93d3cudGhlY29sb3JhcGkuY29tL2lkP2hleD0ke3ZhbHVlfWApXHJcbiAgICAgICAgICAudGhlbigocmVzKSA9PiByZXMuanNvbigpKVxyXG4gICAgICAgICAgLnRoZW4oKGRhdGEpID0+IHNldENvbG9yTmFtZShkYXRhLm5hbWUudmFsdWUpKTtcclxuICAgICAgfSBlbHNlXHJcbiAgICAgICAgc2V0Q29sb3Ioe1xyXG4gICAgICAgICAgLi4uY29sb3IsXHJcbiAgICAgICAgICBlcnJvcjogdHJ1ZSxcclxuICAgICAgICB9KTtcclxuICAgIH0sIHRpbWUpO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8TGF5b3V0PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImJhY2stLWNvbnRhaW5lclwiPlxyXG4gICAgICAgIDxzcGFuPkJhY2sgdG8gaG9tZTwvc3Bhbj5cclxuICAgICAgPC9kaXY+XHJcblxyXG4gICAgICA8aDEgY2xhc3NOYW1lPVwidGl0bGVcIj5HZXQgYW55IGNvbG9yIG5hbWU8L2gxPlxyXG5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC0tY29udGFpbmVyIG15LTVcIj5cclxuICAgICAgICA8aW5wdXRcclxuICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgIGNsYXNzTmFtZT1cImlucHV0XCJcclxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwiWW91ciBjb2xvclwiXHJcbiAgICAgICAgICBtYXhMZW5ndGg9ezZ9XHJcbiAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IGdldERhdGEoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgLy8gcmVxdWlyZWRcclxuICAgICAgICAvPlxyXG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImhhc2h0YWdcIj5cclxuICAgICAgICAgICNcclxuICAgICAgICAgIDxzcGFuXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImNvbG9yLS1iYXJcIlxyXG4gICAgICAgICAgICBzdHlsZT17eyBiYWNrZ3JvdW5kOiBjb2xvci5lcnJvciA/ICdyZWQnIDogY29sb3JbJ2NvbG9yJ10gfX1cclxuICAgICAgICAgID48L3NwYW4+XHJcbiAgICAgICAgPC9zcGFuPlxyXG4gICAgICA8L2Rpdj5cclxuXHJcbiAgICAgIDxwIGNsYXNzTmFtZT1cImRlc2NcIj5cclxuICAgICAgICBZb3VyIGNvbG9yJ3MgbmFtZTp7JyAnfVxyXG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImNvbG9yLS1uYW1lXCIgc3R5bGU9e3sgY29sb3I6IGNvbG9yWydjb2xvciddIH19PlxyXG4gICAgICAgICAge2NvbG9yTmFtZX1cclxuICAgICAgICA8L3NwYW4+XHJcbiAgICAgIDwvcD5cclxuXHJcbiAgICAgIHtjb2xvci5lcnJvciA/IChcclxuICAgICAgICA8RXJyb3JNZXNzYWdlIHRpdGxlPVwiSW52YWxpZCBjb2xvclwiIGRlc2M9XCJQbGVhc2UsIHdyaXRlIHZhbGlkIGNvbG9yXCIgLz5cclxuICAgICAgKSA6IChcclxuICAgICAgICA8PjwvPlxyXG4gICAgICApfVxyXG4gICAgPC9MYXlvdXQ+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbG9yTmFtZTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==