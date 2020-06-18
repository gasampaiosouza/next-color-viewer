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
    className: "back--container",
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
  }, color.error ? ':[' : colorName || 'write some hex')), color.error ? __jsx(_components_ErrorMessage__WEBPACK_IMPORTED_MODULE_4__["default"], {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9jb2xvcm5hbWUudHN4Il0sIm5hbWVzIjpbImNvbG9yTmFtZSIsInVzZVN0YXRlIiwic2V0Q29sb3JOYW1lIiwiY29sb3IiLCJlcnJvciIsInNldENvbG9yIiwidGltZXIiLCJnZXREYXRhIiwidmFsdWUiLCJ0aW1lIiwiY2xlYXJUaW1lb3V0Iiwid2luZG93Iiwic2V0VGltZW91dCIsIm1hdGNoIiwiZmV0Y2giLCJ0aGVuIiwicmVzIiwianNvbiIsImRhdGEiLCJuYW1lIiwiaGVpZ2h0IiwiZmFBcnJvd0xlZnQiLCJlIiwidGFyZ2V0IiwiYmFja2dyb3VuZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBOztBQUVBLElBQU1BLFNBQVMsR0FBRyxxQkFBTTtBQUFBOztBQUFBLGtCQUNZQyxzREFBUSxDQUFDLEVBQUQsQ0FEcEI7QUFBQSxNQUNmRCxTQURlO0FBQUEsTUFDSkUsWUFESTs7QUFBQSxtQkFFSUQsc0RBQVEsQ0FBQztBQUNqQ0UsU0FBSyxFQUFFLEVBRDBCO0FBRWpDQyxTQUFLLEVBQUU7QUFGMEIsR0FBRCxDQUZaO0FBQUEsTUFFZkQsS0FGZTtBQUFBLE1BRVJFLFFBRlE7O0FBT3RCLE1BQUlDLEtBQUo7O0FBRUEsTUFBTUMsT0FBTyxHQUFHLFNBQVZBLE9BQVUsQ0FBQ0MsS0FBRCxFQUFtQjtBQUNqQyxRQUFNQyxJQUFJLEdBQUcsSUFBYjtBQUNBQyxnQkFBWSxDQUFDSixLQUFELENBQVo7QUFFQUEsU0FBSyxHQUFHSyxNQUFNLENBQUNDLFVBQVAsQ0FBa0IsWUFBTTtBQUM5QixVQUFJLENBQUNKLEtBQUwsRUFBWTs7QUFFWixVQUFJQSxLQUFLLENBQUNLLEtBQU4sQ0FBWSxlQUFaLENBQUosRUFBa0M7QUFDaENSLGdCQUFRLGlDQUNIRixLQURHO0FBRU5DLGVBQUssRUFBRSxLQUZEO0FBR05ELGVBQUssYUFBTUssS0FB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bG9ybmFtZS5qcy4xNDQ1MGQ5MTk0NmZjZDY4MjNkMC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL0xheW91dCc7XHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5cclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuXHJcbmltcG9ydCBFcnJvck1lc3NhZ2UgZnJvbSAnLi4vY29tcG9uZW50cy9FcnJvck1lc3NhZ2UnO1xyXG5pbXBvcnQgeyBGb250QXdlc29tZUljb24gfSBmcm9tICdAZm9ydGF3ZXNvbWUvcmVhY3QtZm9udGF3ZXNvbWUnO1xyXG5pbXBvcnQgeyBmYUFycm93TGVmdCB9IGZyb20gJ0Bmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29ucyc7XHJcblxyXG5jb25zdCBjb2xvck5hbWUgPSAoKSA9PiB7XHJcbiAgY29uc3QgW2NvbG9yTmFtZSwgc2V0Q29sb3JOYW1lXSA9IHVzZVN0YXRlKCcnKTtcclxuICBjb25zdCBbY29sb3IsIHNldENvbG9yXSA9IHVzZVN0YXRlKHtcclxuICAgIGNvbG9yOiAnJyxcclxuICAgIGVycm9yOiBmYWxzZSxcclxuICB9KTtcclxuXHJcbiAgbGV0IHRpbWVyOiBudW1iZXI7XHJcblxyXG4gIGNvbnN0IGdldERhdGEgPSAodmFsdWU6IHN0cmluZykgPT4ge1xyXG4gICAgY29uc3QgdGltZSA9IDEwMDA7XHJcbiAgICBjbGVhclRpbWVvdXQodGltZXIpO1xyXG5cclxuICAgIHRpbWVyID0gd2luZG93LnNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICBpZiAoIXZhbHVlKSByZXR1cm47XHJcblxyXG4gICAgICBpZiAodmFsdWUubWF0Y2goL15bMC05YS1mQS1GXSsvKSkge1xyXG4gICAgICAgIHNldENvbG9yKHtcclxuICAgICAgICAgIC4uLmNvbG9yLFxyXG4gICAgICAgICAgZXJyb3I6IGZhbHNlLFxyXG4gICAgICAgICAgY29sb3I6IGAjJHt2YWx1ZX1gLFxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBmZXRjaChgaHR0cHM6Ly93d3cudGhlY29sb3JhcGkuY29tL2lkP2hleD0ke3ZhbHVlfWApXHJcbiAgICAgICAgICAudGhlbigocmVzKSA9PiByZXMuanNvbigpKVxyXG4gICAgICAgICAgLnRoZW4oKGRhdGEpID0+IHNldENvbG9yTmFtZShkYXRhLm5hbWUudmFsdWUpKTtcclxuICAgICAgfSBlbHNlXHJcbiAgICAgICAgc2V0Q29sb3Ioe1xyXG4gICAgICAgICAgLi4uY29sb3IsXHJcbiAgICAgICAgICBlcnJvcjogdHJ1ZSxcclxuICAgICAgICB9KTtcclxuICAgIH0sIHRpbWUpO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8TGF5b3V0IHN0eWxlPXt7IGhlaWdodDogJzc1dmgnIH19PlxyXG4gICAgICA8TGluayBocmVmPVwiL1wiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmFjay0tY29udGFpbmVyXCI+XHJcbiAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhQXJyb3dMZWZ0fSBjbGFzc05hbWU9XCJhcnJvdy0taWNvblwiIC8+XHJcbiAgICAgICAgICA8c3Bhbj5CYWNrIHRvIGhvbWU8L3NwYW4+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvTGluaz5cclxuXHJcbiAgICAgIDxoMSBjbGFzc05hbWU9XCJ0aXRsZVwiPkdldCBhbnkgY29sb3IgbmFtZTwvaDE+XHJcblxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LS1jb250YWluZXIgbXktNVwiPlxyXG4gICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwiaW5wdXRcIlxyXG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJZb3VyIGNvbG9yXCJcclxuICAgICAgICAgIG1heExlbmd0aD17Nn1cclxuICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gZ2V0RGF0YShlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAvLyByZXF1aXJlZFxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaGFzaHRhZ1wiPlxyXG4gICAgICAgICAgI1xyXG4gICAgICAgICAgPHNwYW5cclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiY29sb3ItLWJhclwiXHJcbiAgICAgICAgICAgIHN0eWxlPXt7IGJhY2tncm91bmQ6IGNvbG9yLmVycm9yID8gJ3JlZCcgOiBjb2xvclsnY29sb3InXSB9fVxyXG4gICAgICAgICAgPjwvc3Bhbj5cclxuICAgICAgICA8L3NwYW4+XHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgPHAgY2xhc3NOYW1lPVwiZGVzY1wiPlxyXG4gICAgICAgIFlvdXIgY29sb3IncyBuYW1lOnsnICd9XHJcbiAgICAgICAgPHNwYW5cclxuICAgICAgICAgIGNsYXNzTmFtZT1cImNvbG9yLS1uYW1lXCJcclxuICAgICAgICAgIHN0eWxlPXt7IGNvbG9yOiBjb2xvci5lcnJvciA/ICdyZWQnIDogY29sb3JbJ2NvbG9yJ10gfX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICB7Y29sb3IuZXJyb3IgPyAnOlsnIDogY29sb3JOYW1lIHx8ICd3cml0ZSBzb21lIGhleCd9XHJcbiAgICAgICAgPC9zcGFuPlxyXG4gICAgICA8L3A+XHJcblxyXG4gICAgICB7Y29sb3IuZXJyb3IgPyAoXHJcbiAgICAgICAgPEVycm9yTWVzc2FnZSB0aXRsZT1cIkludmFsaWQgY29sb3JcIiBkZXNjPVwiUGxlYXNlLCB3cml0ZSB2YWxpZCBjb2xvclwiIC8+XHJcbiAgICAgICkgOiAoXHJcbiAgICAgICAgPD48Lz5cclxuICAgICAgKX1cclxuICAgIDwvTGF5b3V0PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb2xvck5hbWU7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=