webpackHotUpdate("static\\development\\pages\\colorname.js",{

/***/ "./pages/colorname.tsx":
/*!*****************************!*\
  !*** ./pages/colorname.tsx ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.tsx");
var _this = undefined,
    _jsxFileName = "E:\\AATrabalhoG\\react\\txen\\pages\\colorname.tsx",
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



var colorName = function colorName() {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(''),
      colorName = _useState[0],
      setColorName = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(''),
      color = _useState2[0],
      setColor = _useState2[1];

  var timer;

  function getData(value) {
    var time = 1000;
    clearTimeout(timer);
    timer = window.setTimeout(function () {
      if (value.match(/[0-9a-fA-F]+/)) {
        setColor(value);
        console.log(value);
        fetch("https://www.thecolorapi.com/id?hex=".concat(value)).then(function (res) {
          return res.json();
        }).then(function (data) {
          return setColorName(data.name.value);
        });
      } else console.log('error');
    }, time);
  }

  return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 5
    }
  }, __jsx("h1", {
    className: "title",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 7
    }
  }, "Get a random color"), __jsx("div", {
    className: "input--container my-5",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
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
      lineNumber: 31,
      columnNumber: 9
    }
  }), __jsx("span", {
    className: "hashtag",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 9
    }
  }, "#", __jsx("span", {
    className: "color--bar",
    style: {
      background: color
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 12
    }
  }))), __jsx("p", {
    className: "desc",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 7
    }
  }, "Your color's name: ", __jsx("span", {
    className: "color--name",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 28
    }
  }, colorName)));
};

_s(colorName, "dgwdTbUWzwevjpMs7OBBzBI+p+s=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9jb2xvcm5hbWUudHN4Il0sIm5hbWVzIjpbImNvbG9yTmFtZSIsInVzZVN0YXRlIiwic2V0Q29sb3JOYW1lIiwiY29sb3IiLCJzZXRDb2xvciIsInRpbWVyIiwiZ2V0RGF0YSIsInZhbHVlIiwidGltZSIsImNsZWFyVGltZW91dCIsIndpbmRvdyIsInNldFRpbWVvdXQiLCJtYXRjaCIsImNvbnNvbGUiLCJsb2ciLCJmZXRjaCIsInRoZW4iLCJyZXMiLCJqc29uIiwiZGF0YSIsIm5hbWUiLCJlIiwidGFyZ2V0IiwiYmFja2dyb3VuZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOztBQUVBLElBQU1BLFNBQVMsR0FBRyxxQkFBTTtBQUFBOztBQUFBLGtCQUNZQyxzREFBUSxDQUFDLEVBQUQsQ0FEcEI7QUFBQSxNQUNmRCxTQURlO0FBQUEsTUFDSkUsWUFESTs7QUFBQSxtQkFFSUQsc0RBQVEsQ0FBQyxFQUFELENBRlo7QUFBQSxNQUVmRSxLQUZlO0FBQUEsTUFFUkMsUUFGUTs7QUFJdEIsTUFBSUMsS0FBSjs7QUFFQSxXQUFTQyxPQUFULENBQWlCQyxLQUFqQixFQUFnQztBQUM5QixRQUFNQyxJQUFJLEdBQUcsSUFBYjtBQUNBQyxnQkFBWSxDQUFDSixLQUFELENBQVo7QUFFQUEsU0FBSyxHQUFHSyxNQUFNLENBQUNDLFVBQVAsQ0FBa0IsWUFBTTtBQUM5QixVQUFJSixLQUFLLENBQUNLLEtBQU4sQ0FBWSxjQUFaLENBQUosRUFBaUM7QUFDL0JSLGdCQUFRLENBQUNHLEtBQUQsQ0FBUjtBQUNBTSxlQUFPLENBQUNDLEdBQVIsQ0FBWVAsS0FBWjtBQUVBUSxhQUFLLDhDQUF1Q1IsS0FBdkMsRUFBTCxDQUNHUyxJQURILENBQ1EsVUFBQ0MsR0FBRDtBQUFBLGlCQUFTQSxHQUFHLENBQUNDLElBQUosRUFBVDtBQUFBLFNBRFIsRUFFR0YsSUFGSCxDQUVRLFVBQUNHLElBQUQ7QUFBQSxpQkFBVWpCLFlBQVksQ0FBQ2lCLElBQUksQ0FBQ0MsSUFBTCxDQUFVYixLQUFYLENBQXRCO0FBQUEsU0FGUjtBQUdELE9BUEQsTUFPT00sT0FBTyxDQUFDQyxHQUFSLENBQVksT0FBWjtBQUNSLEtBVE8sRUFTTE4sSUFUSyxDQUFSO0FBVUQ7O0FBRUQsU0FDRSxNQUFDLDBEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFJLGFBQVMsRUFBQyxPQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsMEJBREYsRUFHRTtBQUFLLGFBQVMsRUFBQyx1QkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFDRSxRQUFJLEVBQUMsTUFEUDtBQUVFLGFBQVMsRUFBQyxPQUZaO0FBR0UsZUFBVyxFQUFDLFlBSGQ7QUFJRSxhQUFTLEVBQUUsQ0FKYjtBQUtFLFlBQVEsRUFBRSxrQkFBQ2EsQ0FBRDtBQUFBLGFBQU9mLE9BQU8sQ0FBQ2UsQ0FBQyxDQUFDQyxNQUFGLENBQVNmLEtBQVYsQ0FBZDtBQUFBLEtBTFo7QUFNRSxZQUFRLE1BTlY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLEVBU0U7QUFBTSxhQUFTLEVBQUMsU0FBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUNHO0FBQU0sYUFBUyxFQUFDLFlBQWhCO0FBQTZCLFNBQUssRUFBRTtBQUFFZ0IsZ0JBQVUsRUFBRXBCO0FBQWQsS0FBcEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURILENBVEYsQ0FIRixFQWlCRTtBQUFHLGFBQVMsRUFBQyxNQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsNEJBQ3FCO0FBQU0sYUFBUyxFQUFDLGFBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBK0JILFNBQS9CLENBRHJCLENBakJGLENBREY7QUF1QkQsQ0E3Q0Q7O0dBQU1BLFM7O0FBK0NTQSx3RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcY29sb3JuYW1lLmpzLjJhYjEyN2QyNDE5N2FjNDIyN2RjLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvTGF5b3V0JztcclxuaW1wb3J0IHsgdXNlU3RhdGUsIENoYW5nZUV2ZW50IH0gZnJvbSAncmVhY3QnO1xyXG5cclxuY29uc3QgY29sb3JOYW1lID0gKCkgPT4ge1xyXG4gIGNvbnN0IFtjb2xvck5hbWUsIHNldENvbG9yTmFtZV0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgY29uc3QgW2NvbG9yLCBzZXRDb2xvcl0gPSB1c2VTdGF0ZSgnJyk7XHJcblxyXG4gIGxldCB0aW1lcjogbnVtYmVyO1xyXG5cclxuICBmdW5jdGlvbiBnZXREYXRhKHZhbHVlOiBzdHJpbmcpIHtcclxuICAgIGNvbnN0IHRpbWUgPSAxMDAwO1xyXG4gICAgY2xlYXJUaW1lb3V0KHRpbWVyKTtcclxuXHJcbiAgICB0aW1lciA9IHdpbmRvdy5zZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgaWYgKHZhbHVlLm1hdGNoKC9bMC05YS1mQS1GXSsvKSkge1xyXG4gICAgICAgIHNldENvbG9yKHZhbHVlKTtcclxuICAgICAgICBjb25zb2xlLmxvZyh2YWx1ZSk7XHJcblxyXG4gICAgICAgIGZldGNoKGBodHRwczovL3d3dy50aGVjb2xvcmFwaS5jb20vaWQ/aGV4PSR7dmFsdWV9YClcclxuICAgICAgICAgIC50aGVuKChyZXMpID0+IHJlcy5qc29uKCkpXHJcbiAgICAgICAgICAudGhlbigoZGF0YSkgPT4gc2V0Q29sb3JOYW1lKGRhdGEubmFtZS52YWx1ZSkpO1xyXG4gICAgICB9IGVsc2UgY29uc29sZS5sb2coJ2Vycm9yJyk7XHJcbiAgICB9LCB0aW1lKTtcclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8TGF5b3V0PlxyXG4gICAgICA8aDEgY2xhc3NOYW1lPVwidGl0bGVcIj5HZXQgYSByYW5kb20gY29sb3I8L2gxPlxyXG5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC0tY29udGFpbmVyIG15LTVcIj5cclxuICAgICAgICA8aW5wdXRcclxuICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgIGNsYXNzTmFtZT1cImlucHV0XCJcclxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwiWW91ciBjb2xvclwiXHJcbiAgICAgICAgICBtYXhMZW5ndGg9ezZ9XHJcbiAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IGdldERhdGEoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAvPlxyXG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImhhc2h0YWdcIj5cclxuICAgICAgICAgICM8c3BhbiBjbGFzc05hbWU9XCJjb2xvci0tYmFyXCIgc3R5bGU9e3sgYmFja2dyb3VuZDogY29sb3IgfX0+PC9zcGFuPlxyXG4gICAgICAgIDwvc3Bhbj5cclxuICAgICAgPC9kaXY+XHJcblxyXG4gICAgICA8cCBjbGFzc05hbWU9XCJkZXNjXCI+XHJcbiAgICAgICAgWW91ciBjb2xvcidzIG5hbWU6IDxzcGFuIGNsYXNzTmFtZT1cImNvbG9yLS1uYW1lXCI+e2NvbG9yTmFtZX08L3NwYW4+XHJcbiAgICAgIDwvcD5cclxuICAgIDwvTGF5b3V0PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb2xvck5hbWU7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=