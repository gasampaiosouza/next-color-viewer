webpackHotUpdate("static\\development\\pages\\colorname.js",{

/***/ "./pages/colorname.tsx":
/*!*****************************!*\
  !*** ./pages/colorname.tsx ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.tsx");



var _this = undefined,
    _jsxFileName = "E:\\AATrabalhoG\\react\\txen\\pages\\colorname.tsx",
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;



var colorName = function colorName() {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(''),
      color = _useState[0],
      setColor = _useState[1];

  var timeout;

  var getData = function getData(e) {
    e.persist();
    clearTimeout(timeout);
    var value = e.target.value;
    setColor(value);
    timeout = window.setTimeout( /*#__PURE__*/Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      var res, data;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (!value.match(/[0-9a-fA-F]+/)) {
                _context.next = 12;
                break;
              }

              console.log(color);
              _context.next = 4;
              return fetch("https://www.thecolorapi.com/id?hex=".concat(color));

            case 4:
              res = _context.sent;
              _context.next = 7;
              return res.json();

            case 7:
              data = _context.sent;
              console.log(data.name.value);
              console.log(color);
              _context.next = 13;
              break;

            case 12:
              console.log('error');

            case 13:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    })), 1000);
  };

  return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 5
    }
  }, __jsx("h1", {
    className: "title",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 7
    }
  }, "Get a random color"), __jsx("div", {
    className: "input--container my-5",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 7
    }
  }, __jsx("input", {
    type: "text",
    className: "input",
    placeholder: "Your color",
    maxLength: 6,
    onChange: getData,
    required: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 9
    }
  }), __jsx("span", {
    className: "hashtag",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 9
    }
  }, "#")), __jsx("p", {
    className: "desc",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 7
    }
  }, "Your color's name:", ' ', __jsx("span", {
    className: "color--name",
    style: {
      color: color
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 9
    }
  }, "PURPLE")));
};

_s(colorName, "5SCJp6l3vLBveqZVPs7KjXxIMCY=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9jb2xvcm5hbWUudHN4Il0sIm5hbWVzIjpbImNvbG9yTmFtZSIsInVzZVN0YXRlIiwiY29sb3IiLCJzZXRDb2xvciIsInRpbWVvdXQiLCJnZXREYXRhIiwiZSIsInBlcnNpc3QiLCJjbGVhclRpbWVvdXQiLCJ2YWx1ZSIsInRhcmdldCIsIndpbmRvdyIsInNldFRpbWVvdXQiLCJtYXRjaCIsImNvbnNvbGUiLCJsb2ciLCJmZXRjaCIsInJlcyIsImpzb24iLCJkYXRhIiwibmFtZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOztBQUVBLElBQU1BLFNBQVMsR0FBRyxTQUFaQSxTQUFZLEdBQU07QUFBQTs7QUFBQSxrQkFDSUMsc0RBQVEsQ0FBQyxFQUFELENBRFo7QUFBQSxNQUNmQyxLQURlO0FBQUEsTUFDUkMsUUFEUTs7QUFHdEIsTUFBSUMsT0FBSjs7QUFFQSxNQUFNQyxPQUFPLEdBQUcsU0FBVkEsT0FBVSxDQUFDQyxDQUFELEVBQXNDO0FBQ3BEQSxLQUFDLENBQUNDLE9BQUY7QUFDQUMsZ0JBQVksQ0FBQ0osT0FBRCxDQUFaO0FBRUEsUUFBTUssS0FBSyxHQUFHSCxDQUFDLENBQUNJLE1BQUYsQ0FBU0QsS0FBdkI7QUFDQU4sWUFBUSxDQUFDTSxLQUFELENBQVI7QUFFQUwsV0FBTyxHQUFHTyxNQUFNLENBQUNDLFVBQVAsZ01BQWtCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUN0QkgsS0FBSyxDQUFDSSxLQUFOLENBQVksY0FBWixDQURzQjtBQUFBO0FBQUE7QUFBQTs7QUFFeEJDLHFCQUFPLENBQUNDLEdBQVIsQ0FBWWIsS0FBWjtBQUZ3QjtBQUFBLHFCQUlOYyxLQUFLLDhDQUF1Q2QsS0FBdkMsRUFKQzs7QUFBQTtBQUlsQmUsaUJBSmtCO0FBQUE7QUFBQSxxQkFLTEEsR0FBRyxDQUFDQyxJQUFKLEVBTEs7O0FBQUE7QUFLbEJDLGtCQUxrQjtBQU94QkwscUJBQU8sQ0FBQ0MsR0FBUixDQUFZSSxJQUFJLENBQUNDLElBQUwsQ0FBVVgsS0FBdEI7QUFFQUsscUJBQU8sQ0FBQ0MsR0FBUixDQUFZYixLQUFaO0FBVHdCO0FBQUE7O0FBQUE7QUFVbkJZLHFCQUFPLENBQUNDLEdBQVIsQ0FBWSxPQUFaOztBQVZtQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFsQixJQVdQLElBWE8sQ0FBVjtBQVlELEdBbkJEOztBQXFCQSxTQUNFLE1BQUMsMERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUksYUFBUyxFQUFDLE9BQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwwQkFERixFQUdFO0FBQUssYUFBUyxFQUFDLHVCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUNFLFFBQUksRUFBQyxNQURQO0FBRUUsYUFBUyxFQUFDLE9BRlo7QUFHRSxlQUFXLEVBQUMsWUFIZDtBQUlFLGFBQVMsRUFBRSxDQUpiO0FBS0UsWUFBUSxFQUFFVixPQUxaO0FBTUUsWUFBUSxNQU5WO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixFQVNFO0FBQU0sYUFBUyxFQUFDLFNBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FURixDQUhGLEVBZUU7QUFBRyxhQUFTLEVBQUMsTUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDJCQUNxQixHQURyQixFQUVFO0FBQU0sYUFBUyxFQUFDLGFBQWhCO0FBQThCLFNBQUssRUFBRTtBQUFFSCxXQUFLLEVBQUxBO0FBQUYsS0FBckM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUZGLENBZkYsQ0FERjtBQXdCRCxDQWxERDs7R0FBTUYsUzs7QUFvRFNBLHdFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxjb2xvcm5hbWUuanMuNzZiMWYxNDZkMDBiNWUwZjI0YWQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9MYXlvdXQnO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSwgQ2hhbmdlRXZlbnQgfSBmcm9tICdyZWFjdCc7XHJcblxyXG5jb25zdCBjb2xvck5hbWUgPSAoKSA9PiB7XHJcbiAgY29uc3QgW2NvbG9yLCBzZXRDb2xvcl0gPSB1c2VTdGF0ZSgnJyk7XHJcblxyXG4gIGxldCB0aW1lb3V0OiBudW1iZXI7XHJcblxyXG4gIGNvbnN0IGdldERhdGEgPSAoZTogQ2hhbmdlRXZlbnQ8SFRNTElucHV0RWxlbWVudD4pID0+IHtcclxuICAgIGUucGVyc2lzdCgpO1xyXG4gICAgY2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xyXG5cclxuICAgIGNvbnN0IHZhbHVlID0gZS50YXJnZXQudmFsdWU7XHJcbiAgICBzZXRDb2xvcih2YWx1ZSk7XHJcblxyXG4gICAgdGltZW91dCA9IHdpbmRvdy5zZXRUaW1lb3V0KGFzeW5jICgpID0+IHtcclxuICAgICAgaWYgKHZhbHVlLm1hdGNoKC9bMC05YS1mQS1GXSsvKSkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGNvbG9yKTtcclxuXHJcbiAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goYGh0dHBzOi8vd3d3LnRoZWNvbG9yYXBpLmNvbS9pZD9oZXg9JHtjb2xvcn1gKTtcclxuICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKTtcclxuXHJcbiAgICAgICAgY29uc29sZS5sb2coZGF0YS5uYW1lLnZhbHVlKTtcclxuXHJcbiAgICAgICAgY29uc29sZS5sb2coY29sb3IpO1xyXG4gICAgICB9IGVsc2UgY29uc29sZS5sb2coJ2Vycm9yJyk7XHJcbiAgICB9LCAxMDAwKTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPExheW91dD5cclxuICAgICAgPGgxIGNsYXNzTmFtZT1cInRpdGxlXCI+R2V0IGEgcmFuZG9tIGNvbG9yPC9oMT5cclxuXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtLWNvbnRhaW5lciBteS01XCI+XHJcbiAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJpbnB1dFwiXHJcbiAgICAgICAgICBwbGFjZWhvbGRlcj1cIllvdXIgY29sb3JcIlxyXG4gICAgICAgICAgbWF4TGVuZ3RoPXs2fVxyXG4gICAgICAgICAgb25DaGFuZ2U9e2dldERhdGF9XHJcbiAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaGFzaHRhZ1wiPiM8L3NwYW4+XHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgPHAgY2xhc3NOYW1lPVwiZGVzY1wiPlxyXG4gICAgICAgIFlvdXIgY29sb3IncyBuYW1lOnsnICd9XHJcbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiY29sb3ItLW5hbWVcIiBzdHlsZT17eyBjb2xvciB9fT5cclxuICAgICAgICAgIFBVUlBMRVxyXG4gICAgICAgIDwvc3Bhbj5cclxuICAgICAgPC9wPlxyXG4gICAgPC9MYXlvdXQ+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbG9yTmFtZTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==