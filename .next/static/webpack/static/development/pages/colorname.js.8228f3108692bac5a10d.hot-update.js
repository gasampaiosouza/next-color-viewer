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
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");


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
      lineNumber: 43,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "back--container",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 7
    }
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faArrowLeft"],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 9
    }
  }), __jsx("span", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 9
    }
  }, "Back to home")), __jsx("h1", {
    className: "title",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 7
    }
  }, "Get any color name"), __jsx("div", {
    className: "input--container my-5",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
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
      lineNumber: 52,
      columnNumber: 9
    }
  }), __jsx("span", {
    className: "hashtag",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
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
      lineNumber: 62,
      columnNumber: 11
    }
  }))), __jsx("p", {
    className: "desc",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
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
      lineNumber: 71,
      columnNumber: 9
    }
  }, colorName)), color.error ? __jsx(_components_ErrorMessage__WEBPACK_IMPORTED_MODULE_3__["default"], {
    title: "Invalid color",
    desc: "Please, write valid color",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9jb2xvcm5hbWUudHN4Il0sIm5hbWVzIjpbImNvbG9yTmFtZSIsInVzZVN0YXRlIiwic2V0Q29sb3JOYW1lIiwiY29sb3IiLCJlcnJvciIsInNldENvbG9yIiwidGltZXIiLCJnZXREYXRhIiwidmFsdWUiLCJ0aW1lIiwiY2xlYXJUaW1lb3V0Iiwid2luZG93Iiwic2V0VGltZW91dCIsIm1hdGNoIiwiZmV0Y2giLCJ0aGVuIiwicmVzIiwianNvbiIsImRhdGEiLCJuYW1lIiwiZmFBcnJvd0xlZnQiLCJlIiwidGFyZ2V0IiwiYmFja2dyb3VuZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsU0FBUyxHQUFHLHFCQUFNO0FBQUE7O0FBQUEsa0JBQ1lDLHNEQUFRLENBQUMsRUFBRCxDQURwQjtBQUFBLE1BQ2ZELFNBRGU7QUFBQSxNQUNKRSxZQURJOztBQUFBLG1CQUVJRCxzREFBUSxDQUFDO0FBQ2pDRSxTQUFLLEVBQUUsRUFEMEI7QUFFakNDLFNBQUssRUFBRTtBQUYwQixHQUFELENBRlo7QUFBQSxNQUVmRCxLQUZlO0FBQUEsTUFFUkUsUUFGUTs7QUFPdEIsTUFBSUMsS0FBSjs7QUFFQSxNQUFNQyxPQUFPLEdBQUcsU0FBVkEsT0FBVSxDQUFDQyxLQUFELEVBQW1CO0FBQ2pDLFFBQU1DLElBQUksR0FBRyxJQUFiO0FBQ0FDLGdCQUFZLENBQUNKLEtBQUQsQ0FBWjtBQUVBQSxTQUFLLEdBQUdLLE1BQU0sQ0FBQ0MsVUFBUCxDQUFrQixZQUFNO0FBQzlCLFVBQUksQ0FBQ0osS0FBTCxFQUFZOztBQUVaLFVBQUlBLEtBQUssQ0FBQ0ssS0FBTixDQUFZLGNBQVosQ0FBSixFQUFpQztBQUMvQlIsZ0JBQVEsaUNBQ0hGLEtBREc7QUFFTkMsZUFBSyxFQUFFLEtBRkQ7QUFHTkQsZUFBSyxhQUFNSyxLQUFOO0FBSEMsV0FBUjtBQU1BTSxhQUFLLDhDQUF1Q04sS0FBdkMsRUFBTCxDQUNHTyxJQURILENBQ1EsVUFBQ0MsR0FBRDtBQUFBLGlCQUFTQSxHQUFHLENBQUNDLElBQUosRUFBVDtBQUFBLFNBRFIsRUFFR0YsSUFGSCxDQUVRLFVBQUNHLElBQUQ7QUFBQSxpQkFBVWhCLFlBQVksQ0FBQ2dCLElBQUksQ0FBQ0MsSUFBTCxDQUFVWCxLQUFYLENBQXRCO0FBQUEsU0FGUjtBQUdELE9BVkQsTUFXRUgsUUFBUSxpQ0FDSEYsS0FERztBQUVOQyxhQUFLLEVBQUU7QUFGRCxTQUFSO0FBSUgsS0FsQk8sRUFrQkxLLElBbEJLLENBQVI7QUFtQkQsR0F2QkQ7O0FBeUJBLFNBQ0UsTUFBQywwREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSyxhQUFTLEVBQUMsaUJBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsOEVBQUQ7QUFBaUIsUUFBSSxFQUFFVyw2RUFBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLEVBRUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFGRixDQURGLEVBTUU7QUFBSSxhQUFTLEVBQUMsT0FBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDBCQU5GLEVBUUU7QUFBSyxhQUFTLEVBQUMsdUJBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQ0UsUUFBSSxFQUFDLE1BRFA7QUFFRSxhQUFTLEVBQUMsT0FGWjtBQUdFLGVBQVcsRUFBQyxZQUhkO0FBSUUsYUFBUyxFQUFFLENBSmI7QUFLRSxZQUFRLEVBQUUsa0JBQUNDLENBQUQ7QUFBQSxhQUFPZCxPQUFPLENBQUNjLENBQUMsQ0FBQ0MsTUFBRixDQUFTZCxLQUFWLENBQWQ7QUFBQSxLQUxaLENBTUU7QUFORjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsRUFTRTtBQUFNLGFBQVMsRUFBQyxTQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBRUU7QUFDRSxhQUFTLEVBQUMsWUFEWjtBQUVFLFNBQUssRUFBRTtBQUFFZSxnQkFBVSxFQUFFcEIsS0FBSyxDQUFDQyxLQUFOLEdBQWMsS0FBZCxHQUFzQkQsS0FBSyxDQUFDLE9BQUQ7QUFBekMsS0FGVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRkYsQ0FURixDQVJGLEVBMEJFO0FBQUcsYUFBUyxFQUFDLE1BQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwyQkFDcUIsR0FEckIsRUFFRTtBQUFNLGFBQVMsRUFBQyxhQUFoQjtBQUE4QixTQUFLLEVBQUU7QUFBRUEsV0FBSyxFQUFFQSxLQUFLLENBQUMsT0FBRDtBQUFkLEtBQXJDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDR0gsU0FESCxDQUZGLENBMUJGLEVBaUNHRyxLQUFLLENBQUNDLEtBQU4sR0FDQyxNQUFDLGdFQUFEO0FBQWMsU0FBSyxFQUFDLGVBQXBCO0FBQW9DLFFBQUksRUFBQywyQkFBekM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURELEdBR0Msa0VBcENKLENBREY7QUF5Q0QsQ0EzRUQ7O0dBQU1KLFM7O0FBNkVTQSx3RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcY29sb3JuYW1lLmpzLjgyMjhmMzEwODY5MmJhYzVhMTBkLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvTGF5b3V0JztcclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcblxyXG5pbXBvcnQgRXJyb3JNZXNzYWdlIGZyb20gJy4uL2NvbXBvbmVudHMvRXJyb3JNZXNzYWdlJztcclxuaW1wb3J0IHsgRm9udEF3ZXNvbWVJY29uIH0gZnJvbSAnQGZvcnRhd2Vzb21lL3JlYWN0LWZvbnRhd2Vzb21lJztcclxuaW1wb3J0IHsgZmFBcnJvd0xlZnQgfSBmcm9tICdAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnMnO1xyXG5cclxuY29uc3QgY29sb3JOYW1lID0gKCkgPT4ge1xyXG4gIGNvbnN0IFtjb2xvck5hbWUsIHNldENvbG9yTmFtZV0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgY29uc3QgW2NvbG9yLCBzZXRDb2xvcl0gPSB1c2VTdGF0ZSh7XHJcbiAgICBjb2xvcjogJycsXHJcbiAgICBlcnJvcjogZmFsc2UsXHJcbiAgfSk7XHJcblxyXG4gIGxldCB0aW1lcjogbnVtYmVyO1xyXG5cclxuICBjb25zdCBnZXREYXRhID0gKHZhbHVlOiBzdHJpbmcpID0+IHtcclxuICAgIGNvbnN0IHRpbWUgPSAxMDAwO1xyXG4gICAgY2xlYXJUaW1lb3V0KHRpbWVyKTtcclxuXHJcbiAgICB0aW1lciA9IHdpbmRvdy5zZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgaWYgKCF2YWx1ZSkgcmV0dXJuO1xyXG5cclxuICAgICAgaWYgKHZhbHVlLm1hdGNoKC9bMC05YS1mQS1GXSsvKSkge1xyXG4gICAgICAgIHNldENvbG9yKHtcclxuICAgICAgICAgIC4uLmNvbG9yLFxyXG4gICAgICAgICAgZXJyb3I6IGZhbHNlLFxyXG4gICAgICAgICAgY29sb3I6IGAjJHt2YWx1ZX1gLFxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBmZXRjaChgaHR0cHM6Ly93d3cudGhlY29sb3JhcGkuY29tL2lkP2hleD0ke3ZhbHVlfWApXHJcbiAgICAgICAgICAudGhlbigocmVzKSA9PiByZXMuanNvbigpKVxyXG4gICAgICAgICAgLnRoZW4oKGRhdGEpID0+IHNldENvbG9yTmFtZShkYXRhLm5hbWUudmFsdWUpKTtcclxuICAgICAgfSBlbHNlXHJcbiAgICAgICAgc2V0Q29sb3Ioe1xyXG4gICAgICAgICAgLi4uY29sb3IsXHJcbiAgICAgICAgICBlcnJvcjogdHJ1ZSxcclxuICAgICAgICB9KTtcclxuICAgIH0sIHRpbWUpO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8TGF5b3V0PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImJhY2stLWNvbnRhaW5lclwiPlxyXG4gICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj17ZmFBcnJvd0xlZnR9IC8+XHJcbiAgICAgICAgPHNwYW4+QmFjayB0byBob21lPC9zcGFuPlxyXG4gICAgICA8L2Rpdj5cclxuXHJcbiAgICAgIDxoMSBjbGFzc05hbWU9XCJ0aXRsZVwiPkdldCBhbnkgY29sb3IgbmFtZTwvaDE+XHJcblxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LS1jb250YWluZXIgbXktNVwiPlxyXG4gICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwiaW5wdXRcIlxyXG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJZb3VyIGNvbG9yXCJcclxuICAgICAgICAgIG1heExlbmd0aD17Nn1cclxuICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gZ2V0RGF0YShlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAvLyByZXF1aXJlZFxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaGFzaHRhZ1wiPlxyXG4gICAgICAgICAgI1xyXG4gICAgICAgICAgPHNwYW5cclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiY29sb3ItLWJhclwiXHJcbiAgICAgICAgICAgIHN0eWxlPXt7IGJhY2tncm91bmQ6IGNvbG9yLmVycm9yID8gJ3JlZCcgOiBjb2xvclsnY29sb3InXSB9fVxyXG4gICAgICAgICAgPjwvc3Bhbj5cclxuICAgICAgICA8L3NwYW4+XHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgPHAgY2xhc3NOYW1lPVwiZGVzY1wiPlxyXG4gICAgICAgIFlvdXIgY29sb3IncyBuYW1lOnsnICd9XHJcbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiY29sb3ItLW5hbWVcIiBzdHlsZT17eyBjb2xvcjogY29sb3JbJ2NvbG9yJ10gfX0+XHJcbiAgICAgICAgICB7Y29sb3JOYW1lfVxyXG4gICAgICAgIDwvc3Bhbj5cclxuICAgICAgPC9wPlxyXG5cclxuICAgICAge2NvbG9yLmVycm9yID8gKFxyXG4gICAgICAgIDxFcnJvck1lc3NhZ2UgdGl0bGU9XCJJbnZhbGlkIGNvbG9yXCIgZGVzYz1cIlBsZWFzZSwgd3JpdGUgdmFsaWQgY29sb3JcIiAvPlxyXG4gICAgICApIDogKFxyXG4gICAgICAgIDw+PC8+XHJcbiAgICAgICl9XHJcbiAgICA8L0xheW91dD5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29sb3JOYW1lO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9