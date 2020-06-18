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

  function getData(value) {
    var time = 1000;
    clearTimeout(timer);
    timer = window.setTimeout(function () {
      if (value.match(/[0-9a-fA-F]+/)) {
        setColor(_objectSpread(_objectSpread({}, color), {}, {
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
  }

  return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 5
    }
  }, __jsx("h1", {
    className: "title",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 7
    }
  }, "Get any color name"), __jsx("div", {
    className: "input--container my-5",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 7
    }
  }, __jsx("input", {
    type: "text",
    className: "input",
    placeholder: "Your color",
    maxLength: 6,
    onChange: function onChange(e) {
      return getData(e.target.value);
    },
    required: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 9
    }
  }), __jsx("span", {
    className: "hashtag",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
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
      lineNumber: 52,
      columnNumber: 11
    }
  }))), __jsx("p", {
    className: "desc",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
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
      lineNumber: 61,
      columnNumber: 9
    }
  }, colorName)), color.error ? __jsx(_components_ErrorMessage__WEBPACK_IMPORTED_MODULE_3__["default"], {
    title: "Invalid color",
    desc: "Please, write valid color",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9jb2xvcm5hbWUudHN4Il0sIm5hbWVzIjpbImNvbG9yTmFtZSIsInVzZVN0YXRlIiwic2V0Q29sb3JOYW1lIiwiY29sb3IiLCJlcnJvciIsInNldENvbG9yIiwidGltZXIiLCJnZXREYXRhIiwidmFsdWUiLCJ0aW1lIiwiY2xlYXJUaW1lb3V0Iiwid2luZG93Iiwic2V0VGltZW91dCIsIm1hdGNoIiwiZmV0Y2giLCJ0aGVuIiwicmVzIiwianNvbiIsImRhdGEiLCJuYW1lIiwiZSIsInRhcmdldCIsImJhY2tncm91bmQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBOztBQUVBLElBQU1BLFNBQVMsR0FBRyxxQkFBTTtBQUFBOztBQUFBLGtCQUNZQyxzREFBUSxDQUFDLEVBQUQsQ0FEcEI7QUFBQSxNQUNmRCxTQURlO0FBQUEsTUFDSkUsWUFESTs7QUFBQSxtQkFFSUQsc0RBQVEsQ0FBQztBQUNqQ0UsU0FBSyxFQUFFLEVBRDBCO0FBRWpDQyxTQUFLLEVBQUU7QUFGMEIsR0FBRCxDQUZaO0FBQUEsTUFFZkQsS0FGZTtBQUFBLE1BRVJFLFFBRlE7O0FBT3RCLE1BQUlDLEtBQUo7O0FBRUEsV0FBU0MsT0FBVCxDQUFpQkMsS0FBakIsRUFBZ0M7QUFDOUIsUUFBTUMsSUFBSSxHQUFHLElBQWI7QUFDQUMsZ0JBQVksQ0FBQ0osS0FBRCxDQUFaO0FBRUFBLFNBQUssR0FBR0ssTUFBTSxDQUFDQyxVQUFQLENBQWtCLFlBQU07QUFDOUIsVUFBSUosS0FBSyxDQUFDSyxLQUFOLENBQVksY0FBWixDQUFKLEVBQWlDO0FBQy9CUixnQkFBUSxpQ0FDSEYsS0FERztBQUVOQSxlQUFLLGFBQU1LLEtBQU47QUFGQyxXQUFSO0FBS0FNLGFBQUssOENBQXVDTixLQUF2QyxFQUFMLENBQ0dPLElBREgsQ0FDUSxVQUFDQyxHQUFEO0FBQUEsaUJBQVNBLEdBQUcsQ0FBQ0MsSUFBSixFQUFUO0FBQUEsU0FEUixFQUVHRixJQUZILENBRVEsVUFBQ0csSUFBRDtBQUFBLGlCQUFVaEIsWUFBWSxDQUFDZ0IsSUFBSSxDQUFDQyxJQUFMLENBQVVYLEtBQVgsQ0FBdEI7QUFBQSxTQUZSO0FBR0QsT0FURCxNQVVFSCxRQUFRLGlDQUNIRixLQURHO0FBRU5DLGFBQUssRUFBRTtBQUZELFNBQVI7QUFJSCxLQWZPLEVBZUxLLElBZkssQ0FBUjtBQWdCRDs7QUFFRCxTQUNFLE1BQUMsMERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUksYUFBUyxFQUFDLE9BQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwwQkFERixFQUdFO0FBQUssYUFBUyxFQUFDLHVCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUNFLFFBQUksRUFBQyxNQURQO0FBRUUsYUFBUyxFQUFDLE9BRlo7QUFHRSxlQUFXLEVBQUMsWUFIZDtBQUlFLGFBQVMsRUFBRSxDQUpiO0FBS0UsWUFBUSxFQUFFLGtCQUFDVyxDQUFEO0FBQUEsYUFBT2IsT0FBTyxDQUFDYSxDQUFDLENBQUNDLE1BQUYsQ0FBU2IsS0FBVixDQUFkO0FBQUEsS0FMWjtBQU1FLFlBQVEsTUFOVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsRUFTRTtBQUFNLGFBQVMsRUFBQyxTQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBRUU7QUFDRSxhQUFTLEVBQUMsWUFEWjtBQUVFLFNBQUssRUFBRTtBQUFFYyxnQkFBVSxFQUFFbkIsS0FBSyxDQUFDQyxLQUFOLEdBQWMsS0FBZCxHQUFzQkQsS0FBSyxDQUFDLE9BQUQ7QUFBekMsS0FGVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRkYsQ0FURixDQUhGLEVBcUJFO0FBQUcsYUFBUyxFQUFDLE1BQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwyQkFDcUIsR0FEckIsRUFFRTtBQUFNLGFBQVMsRUFBQyxhQUFoQjtBQUE4QixTQUFLLEVBQUU7QUFBRUEsV0FBSyxFQUFFQSxLQUFLLENBQUMsT0FBRDtBQUFkLEtBQXJDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDR0gsU0FESCxDQUZGLENBckJGLEVBNEJHRyxLQUFLLENBQUNDLEtBQU4sR0FDQyxNQUFDLGdFQUFEO0FBQWMsU0FBSyxFQUFDLGVBQXBCO0FBQW9DLFFBQUksRUFBQywyQkFBekM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURELEdBR0Msa0VBL0JKLENBREY7QUFvQ0QsQ0FuRUQ7O0dBQU1KLFM7O0FBcUVTQSx3RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcY29sb3JuYW1lLmpzLmU4ZGU4MDczNmNiMWYwMWE2ZWVkLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvTGF5b3V0JztcclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcblxyXG5pbXBvcnQgRXJyb3JNZXNzYWdlIGZyb20gJy4uL2NvbXBvbmVudHMvRXJyb3JNZXNzYWdlJztcclxuXHJcbmNvbnN0IGNvbG9yTmFtZSA9ICgpID0+IHtcclxuICBjb25zdCBbY29sb3JOYW1lLCBzZXRDb2xvck5hbWVdID0gdXNlU3RhdGUoJycpO1xyXG4gIGNvbnN0IFtjb2xvciwgc2V0Q29sb3JdID0gdXNlU3RhdGUoe1xyXG4gICAgY29sb3I6ICcnLFxyXG4gICAgZXJyb3I6IGZhbHNlLFxyXG4gIH0pO1xyXG5cclxuICBsZXQgdGltZXI6IG51bWJlcjtcclxuXHJcbiAgZnVuY3Rpb24gZ2V0RGF0YSh2YWx1ZTogc3RyaW5nKSB7XHJcbiAgICBjb25zdCB0aW1lID0gMTAwMDtcclxuICAgIGNsZWFyVGltZW91dCh0aW1lcik7XHJcblxyXG4gICAgdGltZXIgPSB3aW5kb3cuc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgIGlmICh2YWx1ZS5tYXRjaCgvWzAtOWEtZkEtRl0rLykpIHtcclxuICAgICAgICBzZXRDb2xvcih7XHJcbiAgICAgICAgICAuLi5jb2xvcixcclxuICAgICAgICAgIGNvbG9yOiBgIyR7dmFsdWV9YCxcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgZmV0Y2goYGh0dHBzOi8vd3d3LnRoZWNvbG9yYXBpLmNvbS9pZD9oZXg9JHt2YWx1ZX1gKVxyXG4gICAgICAgICAgLnRoZW4oKHJlcykgPT4gcmVzLmpzb24oKSlcclxuICAgICAgICAgIC50aGVuKChkYXRhKSA9PiBzZXRDb2xvck5hbWUoZGF0YS5uYW1lLnZhbHVlKSk7XHJcbiAgICAgIH0gZWxzZVxyXG4gICAgICAgIHNldENvbG9yKHtcclxuICAgICAgICAgIC4uLmNvbG9yLFxyXG4gICAgICAgICAgZXJyb3I6IHRydWUsXHJcbiAgICAgICAgfSk7XHJcbiAgICB9LCB0aW1lKTtcclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8TGF5b3V0PlxyXG4gICAgICA8aDEgY2xhc3NOYW1lPVwidGl0bGVcIj5HZXQgYW55IGNvbG9yIG5hbWU8L2gxPlxyXG5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC0tY29udGFpbmVyIG15LTVcIj5cclxuICAgICAgICA8aW5wdXRcclxuICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgIGNsYXNzTmFtZT1cImlucHV0XCJcclxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwiWW91ciBjb2xvclwiXHJcbiAgICAgICAgICBtYXhMZW5ndGg9ezZ9XHJcbiAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IGdldERhdGEoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAvPlxyXG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImhhc2h0YWdcIj5cclxuICAgICAgICAgICNcclxuICAgICAgICAgIDxzcGFuXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImNvbG9yLS1iYXJcIlxyXG4gICAgICAgICAgICBzdHlsZT17eyBiYWNrZ3JvdW5kOiBjb2xvci5lcnJvciA/ICdyZWQnIDogY29sb3JbJ2NvbG9yJ10gfX1cclxuICAgICAgICAgID48L3NwYW4+XHJcbiAgICAgICAgPC9zcGFuPlxyXG4gICAgICA8L2Rpdj5cclxuXHJcbiAgICAgIDxwIGNsYXNzTmFtZT1cImRlc2NcIj5cclxuICAgICAgICBZb3VyIGNvbG9yJ3MgbmFtZTp7JyAnfVxyXG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImNvbG9yLS1uYW1lXCIgc3R5bGU9e3sgY29sb3I6IGNvbG9yWydjb2xvciddIH19PlxyXG4gICAgICAgICAge2NvbG9yTmFtZX1cclxuICAgICAgICA8L3NwYW4+XHJcbiAgICAgIDwvcD5cclxuXHJcbiAgICAgIHtjb2xvci5lcnJvciA/IChcclxuICAgICAgICA8RXJyb3JNZXNzYWdlIHRpdGxlPVwiSW52YWxpZCBjb2xvclwiIGRlc2M9XCJQbGVhc2UsIHdyaXRlIHZhbGlkIGNvbG9yXCIgLz5cclxuICAgICAgKSA6IChcclxuICAgICAgICA8PjwvPlxyXG4gICAgICApfVxyXG4gICAgPC9MYXlvdXQ+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbG9yTmFtZTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==