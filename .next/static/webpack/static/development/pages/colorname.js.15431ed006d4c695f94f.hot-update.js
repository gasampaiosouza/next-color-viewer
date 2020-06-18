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
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_ErrorMessage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/ErrorMessage */ "./components/ErrorMessage.tsx");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");


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

      if (value.match(/^[0-9a-fA-F]+/)) {
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
    style: {
      height: '75vh'
    },
    className: "container mt-4",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 5
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "back--container colorname",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 9
    }
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_5__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__["faArrowLeft"],
    className: "arrow--icon",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 11
    }
  }), __jsx("span", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 11
    }
  }, "Back to home"))), __jsx("h1", {
    className: "title",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 7
    }
  }, "Get any color name"), __jsx("div", {
    className: "input--container my-5",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
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
      lineNumber: 56,
      columnNumber: 9
    }
  }), __jsx("span", {
    className: "hashtag",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
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
      lineNumber: 66,
      columnNumber: 11
    }
  }))), __jsx("p", {
    className: "desc",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 7
    }
  }, "Your color's name:", ' ', __jsx("span", {
    className: "color--name",
    style: {
      color: color.error ? 'red' : color['color']
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 9
    }
  }, color.error ? ':[' : colorName || 'write something')), color.error ? __jsx(_components_ErrorMessage__WEBPACK_IMPORTED_MODULE_4__["default"], {
    title: "Invalid color",
    desc: "Please, write valid color",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9jb2xvcm5hbWUudHN4Il0sIm5hbWVzIjpbImNvbG9yTmFtZSIsInVzZVN0YXRlIiwic2V0Q29sb3JOYW1lIiwiY29sb3IiLCJlcnJvciIsInNldENvbG9yIiwidGltZXIiLCJnZXREYXRhIiwidmFsdWUiLCJ0aW1lIiwiY2xlYXJUaW1lb3V0Iiwid2luZG93Iiwic2V0VGltZW91dCIsIm1hdGNoIiwiZmV0Y2giLCJ0aGVuIiwicmVzIiwianNvbiIsImRhdGEiLCJuYW1lIiwiaGVpZ2h0IiwiZmFBcnJvd0xlZnQiLCJlIiwidGFyZ2V0IiwiYmFja2dyb3VuZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBOztBQUVBLElBQU1BLFNBQVMsR0FBRyxxQkFBTTtBQUFBOztBQUFBLGtCQUNZQyxzREFBUSxDQUFDLEVBQUQsQ0FEcEI7QUFBQSxNQUNmRCxTQURlO0FBQUEsTUFDSkUsWUFESTs7QUFBQSxtQkFFSUQsc0RBQVEsQ0FBQztBQUNqQ0UsU0FBSyxFQUFFLEVBRDBCO0FBRWpDQyxTQUFLLEVBQUU7QUFGMEIsR0FBRCxDQUZaO0FBQUEsTUFFZkQsS0FGZTtBQUFBLE1BRVJFLFFBRlE7O0FBT3RCLE1BQUlDLEtBQUo7O0FBRUEsTUFBTUMsT0FBTyxHQUFHLFNBQVZBLE9BQVUsQ0FBQ0MsS0FBRCxFQUFtQjtBQUNqQyxRQUFNQyxJQUFJLEdBQUcsSUFBYjtBQUNBQyxnQkFBWSxDQUFDSixLQUFELENBQVo7QUFFQUEsU0FBSyxHQUFHSyxNQUFNLENBQUNDLFVBQVAsQ0FBa0IsWUFBTTtBQUM5QixVQUFJLENBQUNKLEtBQUwsRUFBWTs7QUFFWixVQUFJQSxLQUFLLENBQUNLLEtBQU4sQ0FBWSxlQUFaLENBQUosRUFBa0M7QUFDaENSLGdCQUFRLGlDQUNIRixLQURHO0FBRU5DLGVBQUssRUFBRSxLQUZEO0FBR05ELGVBQUssYUFBTUssS0FB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XGRldmVsb3BtZW50XFxwYWdlc1xcY29sb3JuYW1lLmpzLjE1NDMxZWQwMDZkNGM2OTVmOTRmLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvTGF5b3V0JztcclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcblxyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5cclxuaW1wb3J0IEVycm9yTWVzc2FnZSBmcm9tICcuLi9jb21wb25lbnRzL0Vycm9yTWVzc2FnZSc7XHJcbmltcG9ydCB7IEZvbnRBd2Vzb21lSWNvbiB9IGZyb20gJ0Bmb3J0YXdlc29tZS9yZWFjdC1mb250YXdlc29tZSc7XHJcbmltcG9ydCB7IGZhQXJyb3dMZWZ0IH0gZnJvbSAnQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zJztcclxuXHJcbmNvbnN0IGNvbG9yTmFtZSA9ICgpID0+IHtcclxuICBjb25zdCBbY29sb3JOYW1lLCBzZXRDb2xvck5hbWVdID0gdXNlU3RhdGUoJycpO1xyXG4gIGNvbnN0IFtjb2xvciwgc2V0Q29sb3JdID0gdXNlU3RhdGUoe1xyXG4gICAgY29sb3I6ICcnLFxyXG4gICAgZXJyb3I6IGZhbHNlLFxyXG4gIH0pO1xyXG5cclxuICBsZXQgdGltZXI6IG51bWJlcjtcclxuXHJcbiAgY29uc3QgZ2V0RGF0YSA9ICh2YWx1ZTogc3RyaW5nKSA9PiB7XHJcbiAgICBjb25zdCB0aW1lID0gMTAwMDtcclxuICAgIGNsZWFyVGltZW91dCh0aW1lcik7XHJcblxyXG4gICAgdGltZXIgPSB3aW5kb3cuc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgIGlmICghdmFsdWUpIHJldHVybjtcclxuXHJcbiAgICAgIGlmICh2YWx1ZS5tYXRjaCgvXlswLTlhLWZBLUZdKy8pKSB7XHJcbiAgICAgICAgc2V0Q29sb3Ioe1xyXG4gICAgICAgICAgLi4uY29sb3IsXHJcbiAgICAgICAgICBlcnJvcjogZmFsc2UsXHJcbiAgICAgICAgICBjb2xvcjogYCMke3ZhbHVlfWAsXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGZldGNoKGBodHRwczovL3d3dy50aGVjb2xvcmFwaS5jb20vaWQ/aGV4PSR7dmFsdWV9YClcclxuICAgICAgICAgIC50aGVuKChyZXMpID0+IHJlcy5qc29uKCkpXHJcbiAgICAgICAgICAudGhlbigoZGF0YSkgPT4gc2V0Q29sb3JOYW1lKGRhdGEubmFtZS52YWx1ZSkpO1xyXG4gICAgICB9IGVsc2VcclxuICAgICAgICBzZXRDb2xvcih7XHJcbiAgICAgICAgICAuLi5jb2xvcixcclxuICAgICAgICAgIGVycm9yOiB0cnVlLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfSwgdGltZSk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxMYXlvdXQgc3R5bGU9e3sgaGVpZ2h0OiAnNzV2aCcgfX0gY2xhc3NOYW1lPVwiY29udGFpbmVyIG10LTRcIj5cclxuICAgICAgPExpbmsgaHJlZj1cIi9cIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJhY2stLWNvbnRhaW5lciBjb2xvcm5hbWVcIj5cclxuICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj17ZmFBcnJvd0xlZnR9IGNsYXNzTmFtZT1cImFycm93LS1pY29uXCIgLz5cclxuICAgICAgICAgIDxzcGFuPkJhY2sgdG8gaG9tZTwvc3Bhbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9MaW5rPlxyXG5cclxuICAgICAgPGgxIGNsYXNzTmFtZT1cInRpdGxlXCI+R2V0IGFueSBjb2xvciBuYW1lPC9oMT5cclxuXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtLWNvbnRhaW5lciBteS01XCI+XHJcbiAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJpbnB1dFwiXHJcbiAgICAgICAgICBwbGFjZWhvbGRlcj1cIllvdXIgY29sb3JcIlxyXG4gICAgICAgICAgbWF4TGVuZ3RoPXs2fVxyXG4gICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBnZXREYXRhKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgIC8vIHJlcXVpcmVkXHJcbiAgICAgICAgLz5cclxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJoYXNodGFnXCI+XHJcbiAgICAgICAgICAjXHJcbiAgICAgICAgICA8c3BhblxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJjb2xvci0tYmFyXCJcclxuICAgICAgICAgICAgc3R5bGU9e3sgYmFja2dyb3VuZDogY29sb3IuZXJyb3IgPyAncmVkJyA6IGNvbG9yWydjb2xvciddIH19XHJcbiAgICAgICAgICA+PC9zcGFuPlxyXG4gICAgICAgIDwvc3Bhbj5cclxuICAgICAgPC9kaXY+XHJcblxyXG4gICAgICA8cCBjbGFzc05hbWU9XCJkZXNjXCI+XHJcbiAgICAgICAgWW91ciBjb2xvcidzIG5hbWU6eycgJ31cclxuICAgICAgICA8c3BhblxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwiY29sb3ItLW5hbWVcIlxyXG4gICAgICAgICAgc3R5bGU9e3sgY29sb3I6IGNvbG9yLmVycm9yID8gJ3JlZCcgOiBjb2xvclsnY29sb3InXSB9fVxyXG4gICAgICAgID5cclxuICAgICAgICAgIHtjb2xvci5lcnJvciA/ICc6WycgOiBjb2xvck5hbWUgfHwgJ3dyaXRlIHNvbWV0aGluZyd9XHJcbiAgICAgICAgPC9zcGFuPlxyXG4gICAgICA8L3A+XHJcblxyXG4gICAgICB7Y29sb3IuZXJyb3IgPyAoXHJcbiAgICAgICAgPEVycm9yTWVzc2FnZSB0aXRsZT1cIkludmFsaWQgY29sb3JcIiBkZXNjPVwiUGxlYXNlLCB3cml0ZSB2YWxpZCBjb2xvclwiIC8+XHJcbiAgICAgICkgOiAoXHJcbiAgICAgICAgPD48Lz5cclxuICAgICAgKX1cclxuICAgIDwvTGF5b3V0PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb2xvck5hbWU7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=