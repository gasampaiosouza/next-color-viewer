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

  return (// arrow to back to /
    __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_2__["default"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 5
      }
    }, __jsx("h1", {
      className: "title",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 7
      }
    }, "Get any color name"), __jsx("div", {
      className: "input--container my-5",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45,
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
        lineNumber: 46,
        columnNumber: 9
      }
    }), __jsx("span", {
      className: "hashtag",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 54,
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
        lineNumber: 56,
        columnNumber: 11
      }
    }))), __jsx("p", {
      className: "desc",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 63,
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
        lineNumber: 65,
        columnNumber: 9
      }
    }, colorName)), color.error ? __jsx(_components_ErrorMessage__WEBPACK_IMPORTED_MODULE_3__["default"], {
      title: "Invalid color",
      desc: "Please, write valid color",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 71,
        columnNumber: 9
      }
    }) : __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null))
  );
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9jb2xvcm5hbWUudHN4Il0sIm5hbWVzIjpbImNvbG9yTmFtZSIsInVzZVN0YXRlIiwic2V0Q29sb3JOYW1lIiwiY29sb3IiLCJlcnJvciIsInNldENvbG9yIiwidGltZXIiLCJnZXREYXRhIiwidmFsdWUiLCJ0aW1lIiwiY2xlYXJUaW1lb3V0Iiwid2luZG93Iiwic2V0VGltZW91dCIsIm1hdGNoIiwiZmV0Y2giLCJ0aGVuIiwicmVzIiwianNvbiIsImRhdGEiLCJuYW1lIiwiZSIsInRhcmdldCIsImJhY2tncm91bmQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBOztBQUVBLElBQU1BLFNBQVMsR0FBRyxxQkFBTTtBQUFBOztBQUFBLGtCQUNZQyxzREFBUSxDQUFDLEVBQUQsQ0FEcEI7QUFBQSxNQUNmRCxTQURlO0FBQUEsTUFDSkUsWUFESTs7QUFBQSxtQkFFSUQsc0RBQVEsQ0FBQztBQUNqQ0UsU0FBSyxFQUFFLEVBRDBCO0FBRWpDQyxTQUFLLEVBQUU7QUFGMEIsR0FBRCxDQUZaO0FBQUEsTUFFZkQsS0FGZTtBQUFBLE1BRVJFLFFBRlE7O0FBT3RCLE1BQUlDLEtBQUo7O0FBRUEsTUFBTUMsT0FBTyxHQUFHLFNBQVZBLE9BQVUsQ0FBQ0MsS0FBRCxFQUFtQjtBQUNqQyxRQUFNQyxJQUFJLEdBQUcsSUFBYjtBQUNBQyxnQkFBWSxDQUFDSixLQUFELENBQVo7QUFFQUEsU0FBSyxHQUFHSyxNQUFNLENBQUNDLFVBQVAsQ0FBa0IsWUFBTTtBQUM5QixVQUFJLENBQUNKLEtBQUwsRUFBWTs7QUFFWixVQUFJQSxLQUFLLENBQUNLLEtBQU4sQ0FBWSxjQUFaLENBQUosRUFBaUM7QUFDL0JSLGdCQUFRLGlDQUNIRixLQURHO0FBRU5DLGVBQUssRUFBRSxLQUZEO0FBR05ELGVBQUssYUFBTUssS0FBTjtBQUhDLFdBQVI7QUFNQU0sYUFBSyw4Q0FBdUNOLEtBQXZDLEVBQUwsQ0FDR08sSUFESCxDQUNRLFVBQUNDLEdBQUQ7QUFBQSxpQkFBU0EsR0FBRyxDQUFDQyxJQUFKLEVBQVQ7QUFBQSxTQURSLEVBRUdGLElBRkgsQ0FFUSxVQUFDRyxJQUFEO0FBQUEsaUJBQVVoQixZQUFZLENBQUNnQixJQUFJLENBQUNDLElBQUwsQ0FBVVgsS0FBWCxDQUF0QjtBQUFBLFNBRlI7QUFHRCxPQVZELE1BV0VILFFBQVEsaUNBQ0hGLEtBREc7QUFFTkMsYUFBSyxFQUFFO0FBRkQsU0FBUjtBQUlILEtBbEJPLEVBa0JMSyxJQWxCSyxDQUFSO0FBbUJELEdBdkJEOztBQXlCQSxTQUNFO0FBQ0EsVUFBQywwREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0U7QUFBSSxlQUFTLEVBQUMsT0FBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDRCQURGLEVBR0U7QUFBSyxlQUFTLEVBQUMsdUJBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFO0FBQ0UsVUFBSSxFQUFDLE1BRFA7QUFFRSxlQUFTLEVBQUMsT0FGWjtBQUdFLGlCQUFXLEVBQUMsWUFIZDtBQUlFLGVBQVMsRUFBRSxDQUpiO0FBS0UsY0FBUSxFQUFFLGtCQUFDVyxDQUFEO0FBQUEsZUFBT2IsT0FBTyxDQUFDYSxDQUFDLENBQUNDLE1BQUYsQ0FBU2IsS0FBVixDQUFkO0FBQUEsT0FMWixDQU1FO0FBTkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQURGLEVBU0U7QUFBTSxlQUFTLEVBQUMsU0FBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUVFO0FBQ0UsZUFBUyxFQUFDLFlBRFo7QUFFRSxXQUFLLEVBQUU7QUFBRWMsa0JBQVUsRUFBRW5CLEtBQUssQ0FBQ0MsS0FBTixHQUFjLEtBQWQsR0FBc0JELEtBQUssQ0FBQyxPQUFEO0FBQXpDLE9BRlQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUZGLENBVEYsQ0FIRixFQXFCRTtBQUFHLGVBQVMsRUFBQyxNQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsNkJBQ3FCLEdBRHJCLEVBRUU7QUFBTSxlQUFTLEVBQUMsYUFBaEI7QUFBOEIsV0FBSyxFQUFFO0FBQUVBLGFBQUssRUFBRUEsS0FBSyxDQUFDLE9BQUQ7QUFBZCxPQUFyQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0dILFNBREgsQ0FGRixDQXJCRixFQTRCR0csS0FBSyxDQUFDQyxLQUFOLEdBQ0MsTUFBQyxnRUFBRDtBQUFjLFdBQUssRUFBQyxlQUFwQjtBQUFvQyxVQUFJLEVBQUMsMkJBQXpDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFERCxHQUdDLGtFQS9CSjtBQUZGO0FBcUNELENBdkVEOztHQUFNSixTOztBQXlFU0Esd0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXGNvbG9ybmFtZS5qcy43ZDYyMGI2NDZhZjZlMGY2N2I3My5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL0xheW91dCc7XHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5cclxuaW1wb3J0IEVycm9yTWVzc2FnZSBmcm9tICcuLi9jb21wb25lbnRzL0Vycm9yTWVzc2FnZSc7XHJcblxyXG5jb25zdCBjb2xvck5hbWUgPSAoKSA9PiB7XHJcbiAgY29uc3QgW2NvbG9yTmFtZSwgc2V0Q29sb3JOYW1lXSA9IHVzZVN0YXRlKCcnKTtcclxuICBjb25zdCBbY29sb3IsIHNldENvbG9yXSA9IHVzZVN0YXRlKHtcclxuICAgIGNvbG9yOiAnJyxcclxuICAgIGVycm9yOiBmYWxzZSxcclxuICB9KTtcclxuXHJcbiAgbGV0IHRpbWVyOiBudW1iZXI7XHJcblxyXG4gIGNvbnN0IGdldERhdGEgPSAodmFsdWU6IHN0cmluZykgPT4ge1xyXG4gICAgY29uc3QgdGltZSA9IDEwMDA7XHJcbiAgICBjbGVhclRpbWVvdXQodGltZXIpO1xyXG5cclxuICAgIHRpbWVyID0gd2luZG93LnNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICBpZiAoIXZhbHVlKSByZXR1cm47XHJcblxyXG4gICAgICBpZiAodmFsdWUubWF0Y2goL1swLTlhLWZBLUZdKy8pKSB7XHJcbiAgICAgICAgc2V0Q29sb3Ioe1xyXG4gICAgICAgICAgLi4uY29sb3IsXHJcbiAgICAgICAgICBlcnJvcjogZmFsc2UsXHJcbiAgICAgICAgICBjb2xvcjogYCMke3ZhbHVlfWAsXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGZldGNoKGBodHRwczovL3d3dy50aGVjb2xvcmFwaS5jb20vaWQ/aGV4PSR7dmFsdWV9YClcclxuICAgICAgICAgIC50aGVuKChyZXMpID0+IHJlcy5qc29uKCkpXHJcbiAgICAgICAgICAudGhlbigoZGF0YSkgPT4gc2V0Q29sb3JOYW1lKGRhdGEubmFtZS52YWx1ZSkpO1xyXG4gICAgICB9IGVsc2VcclxuICAgICAgICBzZXRDb2xvcih7XHJcbiAgICAgICAgICAuLi5jb2xvcixcclxuICAgICAgICAgIGVycm9yOiB0cnVlLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfSwgdGltZSk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIC8vIGFycm93IHRvIGJhY2sgdG8gL1xyXG4gICAgPExheW91dD5cclxuICAgICAgPGgxIGNsYXNzTmFtZT1cInRpdGxlXCI+R2V0IGFueSBjb2xvciBuYW1lPC9oMT5cclxuXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtLWNvbnRhaW5lciBteS01XCI+XHJcbiAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJpbnB1dFwiXHJcbiAgICAgICAgICBwbGFjZWhvbGRlcj1cIllvdXIgY29sb3JcIlxyXG4gICAgICAgICAgbWF4TGVuZ3RoPXs2fVxyXG4gICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBnZXREYXRhKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgIC8vIHJlcXVpcmVkXHJcbiAgICAgICAgLz5cclxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJoYXNodGFnXCI+XHJcbiAgICAgICAgICAjXHJcbiAgICAgICAgICA8c3BhblxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJjb2xvci0tYmFyXCJcclxuICAgICAgICAgICAgc3R5bGU9e3sgYmFja2dyb3VuZDogY29sb3IuZXJyb3IgPyAncmVkJyA6IGNvbG9yWydjb2xvciddIH19XHJcbiAgICAgICAgICA+PC9zcGFuPlxyXG4gICAgICAgIDwvc3Bhbj5cclxuICAgICAgPC9kaXY+XHJcblxyXG4gICAgICA8cCBjbGFzc05hbWU9XCJkZXNjXCI+XHJcbiAgICAgICAgWW91ciBjb2xvcidzIG5hbWU6eycgJ31cclxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJjb2xvci0tbmFtZVwiIHN0eWxlPXt7IGNvbG9yOiBjb2xvclsnY29sb3InXSB9fT5cclxuICAgICAgICAgIHtjb2xvck5hbWV9XHJcbiAgICAgICAgPC9zcGFuPlxyXG4gICAgICA8L3A+XHJcblxyXG4gICAgICB7Y29sb3IuZXJyb3IgPyAoXHJcbiAgICAgICAgPEVycm9yTWVzc2FnZSB0aXRsZT1cIkludmFsaWQgY29sb3JcIiBkZXNjPVwiUGxlYXNlLCB3cml0ZSB2YWxpZCBjb2xvclwiIC8+XHJcbiAgICAgICkgOiAoXHJcbiAgICAgICAgPD48Lz5cclxuICAgICAgKX1cclxuICAgIDwvTGF5b3V0PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb2xvck5hbWU7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=