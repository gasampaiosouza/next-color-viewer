webpackHotUpdate("static\\development\\pages\\_app.js",{

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./style.scss":
/*!************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-6-1!./node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!./node_modules/resolve-url-loader??ref--5-oneOf-6-3!./node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-6-4!./style.scss ***!
  \************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ./node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(true);
// Module
exports.push([module.i, "@keyframes error-appear {\n  0% {\n    transform: translate(0);\n    opacity: 0;\n  }\n  25%, 50%, 75% {\n    transform: translateX(-400px);\n    opacity: 1;\n  }\n  100% {\n    transform: translate(0);\n    opacity: 0;\n  }\n}\n@keyframes appear-top {\n  0% {\n    transform: translateY(-15px);\n    opacity: 0;\n  }\n  100% {\n    transform: none;\n    opacity: 1;\n  }\n}\n@keyframes appear-bottom {\n  0% {\n    transform: translateY(15px);\n    opacity: 0;\n  }\n  100% {\n    transform: none;\n    opacity: 1;\n  }\n}\n@keyframes appear-left {\n  0% {\n    transform: translateX(-15px);\n    opacity: 0;\n  }\n  100% {\n    transform: none;\n    opacity: 1;\n  }\n}\n* {\n  color: #343a40;\n  overflow: hidden;\n}\n\n.title {\n  font-weight: 900 !important;\n  letter-spacing: 1px;\n  animation: appear-top 0.75s ease-in-out;\n}\n\n.desc {\n  font-size: 1rem;\n  opacity: 0.75;\n  animation: appear-bottom 0.75s ease-in-out;\n}\n\n.btn-primary {\n  cursor: pointer;\n  border: none;\n  background: #06d6a0;\n  color: #fff;\n  font-weight: 900;\n  box-shadow: 5px 5px 15px rgba(6, 214, 160, 0.5);\n  border-radius: 5px;\n  padding: 15px 20px;\n  font-size: 17px;\n  letter-spacing: 0.5px;\n  margin: 0 15px;\n  animation: appear-left 0.75s ease-in-out;\n}\n.btn-primary:hover {\n  background: #07efb3;\n}\n\n.back--container {\n  cursor: pointer;\n  position: absolute;\n  top: 50px;\n  left: 50px;\n  animation: appear-top 0.75s ease-in-out;\n  border-radius: 5px;\n  padding: 15px 25px;\n  width: 190px;\n  font-weight: 900;\n  display: flex;\n  justify-content: space-between;\n  transition: box-shadow 0.1s ease-in-out;\n}\n.back--container:hover {\n  box-shadow: 5px 5px 15px rgba(52, 58, 64, 0.15);\n}\n.back--container .arrow--icon {\n  color: #343a40;\n  width: 15px;\n}\n\n.input--container {\n  width: 300px;\n  height: 50px;\n  display: flex;\n  flex-direction: row-reverse;\n  box-shadow: 0 5px 15px rgba(52, 58, 64, 0.15);\n  overflow: visible;\n  animation: appear-left 0.75s ease-in-out;\n}\n.input--container .hashtag {\n  position: relative;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 50px;\n  font-weight: 900;\n}\n.input--container .hashtag .color--bar {\n  position: absolute;\n  width: 3px;\n  height: 0;\n  right: 0;\n  bottom: -2px;\n  background: #eee;\n  border: 0.3px solid rgba(52, 58, 64, 0.1);\n  transition: 0.2s ease-in-out;\n}\n.input--container .input {\n  width: 100%;\n  border: none;\n  outline: none;\n  padding-left: 15px;\n  text-transform: uppercase;\n}\n.input--container .input::-moz-placeholder {\n  text-transform: none;\n}\n.input--container .input:-ms-input-placeholder {\n  text-transform: none;\n}\n.input--container .input::-ms-input-placeholder {\n  text-transform: none;\n}\n.input--container .input::placeholder {\n  text-transform: none;\n}\n.input--container .input:focus ~ .hashtag > .color--bar {\n  top: 0px;\n  height: 100%;\n}\n\n.color--name {\n  font-weight: 900;\n  letter-spacing: 0.5px;\n  opacity: 1 !important;\n}\n\n.error--container {\n  position: absolute;\n  top: 50px;\n  right: -400px;\n  animation: error-appear 5s ease-in-out;\n  box-shadow: 5px 5px 15px rgba(230, 57, 70, 0.5);\n  width: 350px;\n  text-align: left;\n  padding: 10px 40px;\n  background: #e63946;\n  border-radius: 2px 0 0 2px;\n}\n.error--container .error--title {\n  color: #fff;\n}\n.error--container .error--desc {\n  color: #fff;\n}\n\n.fullscreen {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  transition: background 0.1s ease-in-out;\n}\n.fullscreen .mid--container {\n  color: #fff;\n}\n.fullscreen .title {\n  color: inherit;\n  text-transform: uppercase;\n}\n\n.back--container.random {\n  background: #fff;\n  box-shadow: 5px 5px 15px rgba(52, 58, 64, 0.15);\n}", "",{"version":3,"sources":["E:/AATrabalhoG/react/txen/animation.scss","E:/AATrabalhoG/react/txen/style.scss"],"names":[],"mappings":"AAAA;EACE;IACE,uBAAA;IACA,UAAA;ECCF;EDEA;IAGE,6BAAA;IACA,UAAA;ECFF;EDKA;IACE,uBAAA;IACA,UAAA;ECHF;AACF;ADMA;EACE;IACE,4BAAA;IACA,UAAA;ECJF;EDOA;IACE,eAAA;IACA,UAAA;ECLF;AACF;ADQA;EACE;IACE,2BAAA;IACA,UAAA;ECNF;EDSA;IACE,eAAA;IACA,UAAA;ECPF;AACF;ADUA;EACE;IACE,4BAAA;IACA,UAAA;ECRF;EDWA;IACE,eAAA;IACA,UAAA;ECTF;AACF;AArCA;EACE,cAJM;EAKN,gBAAA;AAuCF;;AApCA;EACE,2BAAA;EACA,mBAAA;EACA,uCAAA;AAuCF;;AApCA;EACE,eAAA;EACA,aAAA;EACA,0CAAA;AAuCF;;AApCA;EACE,eAAA;EACA,YAAA;EACA,mBAxBK;EAyBL,WAAA;EACA,gBAAA;EACA,+CAAA;EACA,kBAAA;EACA,kBAAA;EACA,eAAA;EACA,qBAAA;EACA,cAAA;EAEA,wCAAA;AAsCF;AApCE;EACE,mBAAA;AAsCJ;;AAlCA;EACE,eAAA;EACA,kBAAA;EACA,SAAA;EACA,UAAA;EAEA,uCAAA;EAEA,kBAAA;EAEA,kBAAA;EACA,YAAA;EACA,gBAAA;EAEA,aAAA;EACA,8BAAA;EAEA,uCAAA;AAgCF;AA9BE;EACE,+CAAA;AAgCJ;AA7BE;EACE,cAhEI;EAiEJ,WAAA;AA+BJ;;AA3BA;EACE,YAAA;EACA,YAAA;EACA,aAAA;EACA,2BAAA;EACA,6CAAA;EACA,iBAAA;EAEA,wCAAA;AA6BF;AA3BE;EACE,kBAAA;EACA,aAAA;EACA,uBAAA;EACA,mBAAA;EAEA,WAAA;EACA,gBAAA;AA4BJ;AA1BI;EACE,kBAAA;EACA,UAAA;EACA,SAAA;EACA,QAAA;EACA,YAAA;EACA,gBAAA;EACA,yCAAA;EACA,4BAAA;AA4BN;AAxBE;EACE,WAAA;EACA,YAAA;EACA,aAAA;EACA,kBAAA;EACA,yBAAA;AA0BJ;AAxBI;EACE,oBAAA;AA0BN;AA3BI;EACE,oBAAA;AA0BN;AA3BI;EACE,oBAAA;AA0BN;AA3BI;EACE,oBAAA;AA0BN;AAvBI;EACE,QAAA;EACA,YAAA;AAyBN;;AApBA;EACE,gBAAA;EACA,qBAAA;EACA,qBAAA;AAuBF;;AAlBA;EACE,kBAAA;EACA,SAAA;EACA,aAAA;EAEA,sCAAA;EACA,+CAAA;EAEA,YAAA;EAEA,gBAAA;EACA,kBAAA;EACA,mBAzIM;EA2IN,0BAAA;AAiBF;AAfE;EACE,WAAA;AAiBJ;AAdE;EACE,WAAA;AAgBJ;;AAZA;EACE,WAAA;EACA,YAAA;EAEA,aAAA;EACA,sBAAA;EACA,uBAAA;EACA,mBAAA;EACA,yBAAA;KAAA,sBAAA;MAAA,qBAAA;UAAA,iBAAA;EAEA,uCAAA;AAaF;AAXE;EACE,WAAA;AAaJ;AAVE;EACE,cAAA;EACA,yBAAA;AAYJ;;AARA;EACE,gBAAA;EACA,+CAAA;AAWF","file":"style.scss","sourcesContent":["@keyframes error-appear {\r\n  0% {\r\n    transform: translate(0);\r\n    opacity: 0;\r\n  }\r\n\r\n  25%,\r\n  50%,\r\n  75% {\r\n    transform: translateX(-400px);\r\n    opacity: 1;\r\n  }\r\n\r\n  100% {\r\n    transform: translate(0);\r\n    opacity: 0;\r\n  }\r\n}\r\n\r\n@keyframes appear-top {\r\n  0% {\r\n    transform: translateY(-15px);\r\n    opacity: 0;\r\n  }\r\n\r\n  100% {\r\n    transform: none;\r\n    opacity: 1;\r\n  }\r\n}\r\n\r\n@keyframes appear-bottom {\r\n  0% {\r\n    transform: translateY(15px);\r\n    opacity: 0;\r\n  }\r\n\r\n  100% {\r\n    transform: none;\r\n    opacity: 1;\r\n  }\r\n}\r\n\r\n@keyframes appear-left {\r\n  0% {\r\n    transform: translateX(-15px);\r\n    opacity: 0;\r\n  }\r\n\r\n  100% {\r\n    transform: none;\r\n    opacity: 1;\r\n  }\r\n}\r\n","@keyframes error-appear {\n  0% {\n    transform: translate(0);\n    opacity: 0;\n  }\n  25%, 50%, 75% {\n    transform: translateX(-400px);\n    opacity: 1;\n  }\n  100% {\n    transform: translate(0);\n    opacity: 0;\n  }\n}\n@keyframes appear-top {\n  0% {\n    transform: translateY(-15px);\n    opacity: 0;\n  }\n  100% {\n    transform: none;\n    opacity: 1;\n  }\n}\n@keyframes appear-bottom {\n  0% {\n    transform: translateY(15px);\n    opacity: 0;\n  }\n  100% {\n    transform: none;\n    opacity: 1;\n  }\n}\n@keyframes appear-left {\n  0% {\n    transform: translateX(-15px);\n    opacity: 0;\n  }\n  100% {\n    transform: none;\n    opacity: 1;\n  }\n}\n* {\n  color: #343a40;\n  overflow: hidden;\n}\n\n.title {\n  font-weight: 900 !important;\n  letter-spacing: 1px;\n  animation: appear-top 0.75s ease-in-out;\n}\n\n.desc {\n  font-size: 1rem;\n  opacity: 0.75;\n  animation: appear-bottom 0.75s ease-in-out;\n}\n\n.btn-primary {\n  cursor: pointer;\n  border: none;\n  background: #06d6a0;\n  color: #fff;\n  font-weight: 900;\n  box-shadow: 5px 5px 15px rgba(6, 214, 160, 0.5);\n  border-radius: 5px;\n  padding: 15px 20px;\n  font-size: 17px;\n  letter-spacing: 0.5px;\n  margin: 0 15px;\n  animation: appear-left 0.75s ease-in-out;\n}\n.btn-primary:hover {\n  background: #07efb3;\n}\n\n.back--container {\n  cursor: pointer;\n  position: absolute;\n  top: 50px;\n  left: 50px;\n  animation: appear-top 0.75s ease-in-out;\n  border-radius: 5px;\n  padding: 15px 25px;\n  width: 190px;\n  font-weight: 900;\n  display: flex;\n  justify-content: space-between;\n  transition: box-shadow 0.1s ease-in-out;\n}\n.back--container:hover {\n  box-shadow: 5px 5px 15px rgba(52, 58, 64, 0.15);\n}\n.back--container .arrow--icon {\n  color: #343a40;\n  width: 15px;\n}\n\n.input--container {\n  width: 300px;\n  height: 50px;\n  display: flex;\n  flex-direction: row-reverse;\n  box-shadow: 0 5px 15px rgba(52, 58, 64, 0.15);\n  overflow: visible;\n  animation: appear-left 0.75s ease-in-out;\n}\n.input--container .hashtag {\n  position: relative;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 50px;\n  font-weight: 900;\n}\n.input--container .hashtag .color--bar {\n  position: absolute;\n  width: 3px;\n  height: 0;\n  right: 0;\n  bottom: -2px;\n  background: #eee;\n  border: 0.3px solid rgba(52, 58, 64, 0.1);\n  transition: 0.2s ease-in-out;\n}\n.input--container .input {\n  width: 100%;\n  border: none;\n  outline: none;\n  padding-left: 15px;\n  text-transform: uppercase;\n}\n.input--container .input::placeholder {\n  text-transform: none;\n}\n.input--container .input:focus ~ .hashtag > .color--bar {\n  top: 0px;\n  height: 100%;\n}\n\n.color--name {\n  font-weight: 900;\n  letter-spacing: 0.5px;\n  opacity: 1 !important;\n}\n\n.error--container {\n  position: absolute;\n  top: 50px;\n  right: -400px;\n  animation: error-appear 5s ease-in-out;\n  box-shadow: 5px 5px 15px rgba(230, 57, 70, 0.5);\n  width: 350px;\n  text-align: left;\n  padding: 10px 40px;\n  background: #e63946;\n  border-radius: 2px 0 0 2px;\n}\n.error--container .error--title {\n  color: #fff;\n}\n.error--container .error--desc {\n  color: #fff;\n}\n\n.fullscreen {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  user-select: none;\n  transition: background 0.1s ease-in-out;\n}\n.fullscreen .mid--container {\n  color: #fff;\n}\n.fullscreen .title {\n  color: inherit;\n  text-transform: uppercase;\n}\n\n.back--container.random {\n  background: #fff;\n  box-shadow: 5px 5px 15px rgba(52, 58, 64, 0.15);\n}"]}]);
// Exports
module.exports = exports;


/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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K0IsR0FBRyxtQ0FBbUMsZ0JBQWdCLEdBQUcsa0NBQWtDLGdCQUFnQixHQUFHLGlCQUFpQixnQkFBZ0IsaUJBQWlCLGtCQUFrQiwyQkFBMkIsNEJBQTRCLHdCQUF3QixzQkFBc0IsNENBQTRDLEdBQUcsK0JBQStCLGdCQUFnQixHQUFHLHNCQUFzQixtQkFBbUIsOEJBQThCLEdBQUcsNkJBQTZCLHFCQUFxQixvREFBb0QsR0FBRyxHQUFHO0FBQ3ZpVTtBQUNBIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxfYXBwLmpzLjgyMzgxMTFkNTU1MTAwNzRhMDdkLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKTtcbmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18odHJ1ZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIkBrZXlmcmFtZXMgZXJyb3ItYXBwZWFyIHtcXG4gIDAlIHtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCk7XFxuICAgIG9wYWNpdHk6IDA7XFxuICB9XFxuICAyNSUsIDUwJSwgNzUlIHtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC00MDBweCk7XFxuICAgIG9wYWNpdHk6IDE7XFxuICB9XFxuICAxMDAlIHtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCk7XFxuICAgIG9wYWNpdHk6IDA7XFxuICB9XFxufVxcbkBrZXlmcmFtZXMgYXBwZWFyLXRvcCB7XFxuICAwJSB7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTVweCk7XFxuICAgIG9wYWNpdHk6IDA7XFxuICB9XFxuICAxMDAlIHtcXG4gICAgdHJhbnNmb3JtOiBub25lO1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgfVxcbn1cXG5Aa2V5ZnJhbWVzIGFwcGVhci1ib3R0b20ge1xcbiAgMCUge1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMTVweCk7XFxuICAgIG9wYWNpdHk6IDA7XFxuICB9XFxuICAxMDAlIHtcXG4gICAgdHJhbnNmb3JtOiBub25lO1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgfVxcbn1cXG5Aa2V5ZnJhbWVzIGFwcGVhci1sZWZ0IHtcXG4gIDAlIHtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xNXB4KTtcXG4gICAgb3BhY2l0eTogMDtcXG4gIH1cXG4gIDEwMCUge1xcbiAgICB0cmFuc2Zvcm06IG5vbmU7XFxuICAgIG9wYWNpdHk6IDE7XFxuICB9XFxufVxcbioge1xcbiAgY29sb3I6ICMzNDNhNDA7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbn1cXG5cXG4udGl0bGUge1xcbiAgZm9udC13ZWlnaHQ6IDkwMCAhaW1wb3J0YW50O1xcbiAgbGV0dGVyLXNwYWNpbmc6IDFweDtcXG4gIGFuaW1hdGlvbjogYXBwZWFyLXRvcCAwLjc1cyBlYXNlLWluLW91dDtcXG59XFxuXFxuLmRlc2Mge1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbiAgb3BhY2l0eTogMC43NTtcXG4gIGFuaW1hdGlvbjogYXBwZWFyLWJvdHRvbSAwLjc1cyBlYXNlLWluLW91dDtcXG59XFxuXFxuLmJ0bi1wcmltYXJ5IHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJhY2tncm91bmQ6ICMwNmQ2YTA7XFxuICBjb2xvcjogI2ZmZjtcXG4gIGZvbnQtd2VpZ2h0OiA5MDA7XFxuICBib3gtc2hhZG93OiA1cHggNXB4IDE1cHggcmdiYSg2LCAyMTQsIDE2MCwgMC41KTtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIHBhZGRpbmc6IDE1cHggMjBweDtcXG4gIGZvbnQtc2l6ZTogMTdweDtcXG4gIGxldHRlci1zcGFjaW5nOiAwLjVweDtcXG4gIG1hcmdpbjogMCAxNXB4O1xcbiAgYW5pbWF0aW9uOiBhcHBlYXItbGVmdCAwLjc1cyBlYXNlLWluLW91dDtcXG59XFxuLmJ0bi1wcmltYXJ5OmhvdmVyIHtcXG4gIGJhY2tncm91bmQ6ICMwN2VmYjM7XFxufVxcblxcbi5iYWNrLS1jb250YWluZXIge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiA1MHB4O1xcbiAgbGVmdDogNTBweDtcXG4gIGFuaW1hdGlvbjogYXBwZWFyLXRvcCAwLjc1cyBlYXNlLWluLW91dDtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIHBhZGRpbmc6IDE1cHggMjVweDtcXG4gIHdpZHRoOiAxOTBweDtcXG4gIGZvbnQtd2VpZ2h0OiA5MDA7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgdHJhbnNpdGlvbjogYm94LXNoYWRvdyAwLjFzIGVhc2UtaW4tb3V0O1xcbn1cXG4uYmFjay0tY29udGFpbmVyOmhvdmVyIHtcXG4gIGJveC1zaGFkb3c6IDVweCA1cHggMTVweCByZ2JhKDUyLCA1OCwgNjQsIDAuMTUpO1xcbn1cXG4uYmFjay0tY29udGFpbmVyIC5hcnJvdy0taWNvbiB7XFxuICBjb2xvcjogIzM0M2E0MDtcXG4gIHdpZHRoOiAxNXB4O1xcbn1cXG5cXG4uaW5wdXQtLWNvbnRhaW5lciB7XFxuICB3aWR0aDogMzAwcHg7XFxuICBoZWlnaHQ6IDUwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdy1yZXZlcnNlO1xcbiAgYm94LXNoYWRvdzogMCA1cHggMTVweCByZ2JhKDUyLCA1OCwgNjQsIDAuMTUpO1xcbiAgb3ZlcmZsb3c6IHZpc2libGU7XFxuICBhbmltYXRpb246IGFwcGVhci1sZWZ0IDAuNzVzIGVhc2UtaW4tb3V0O1xcbn1cXG4uaW5wdXQtLWNvbnRhaW5lciAuaGFzaHRhZyB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgd2lkdGg6IDUwcHg7XFxuICBmb250LXdlaWdodDogOTAwO1xcbn1cXG4uaW5wdXQtLWNvbnRhaW5lciAuaGFzaHRhZyAuY29sb3ItLWJhciB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB3aWR0aDogM3B4O1xcbiAgaGVpZ2h0OiAwO1xcbiAgcmlnaHQ6IDA7XFxuICBib3R0b206IC0ycHg7XFxuICBiYWNrZ3JvdW5kOiAjZWVlO1xcbiAgYm9yZGVyOiAwLjNweCBzb2xpZCByZ2JhKDUyLCA1OCwgNjQsIDAuMSk7XFxuICB0cmFuc2l0aW9uOiAwLjJzIGVhc2UtaW4tb3V0O1xcbn1cXG4uaW5wdXQtLWNvbnRhaW5lciAuaW5wdXQge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBib3JkZXI6IG5vbmU7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgcGFkZGluZy1sZWZ0OiAxNXB4O1xcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG59XFxuLmlucHV0LS1jb250YWluZXIgLmlucHV0OjotbW96LXBsYWNlaG9sZGVyIHtcXG4gIHRleHQtdHJhbnNmb3JtOiBub25lO1xcbn1cXG4uaW5wdXQtLWNvbnRhaW5lciAuaW5wdXQ6LW1zLWlucHV0LXBsYWNlaG9sZGVyIHtcXG4gIHRleHQtdHJhbnNmb3JtOiBub25lO1xcbn1cXG4uaW5wdXQtLWNvbnRhaW5lciAuaW5wdXQ6Oi1tcy1pbnB1dC1wbGFjZWhvbGRlciB7XFxuICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcXG59XFxuLmlucHV0LS1jb250YWluZXIgLmlucHV0OjpwbGFjZWhvbGRlciB7XFxuICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcXG59XFxuLmlucHV0LS1jb250YWluZXIgLmlucHV0OmZvY3VzIH4gLmhhc2h0YWcgPiAuY29sb3ItLWJhciB7XFxuICB0b3A6IDBweDtcXG4gIGhlaWdodDogMTAwJTtcXG59XFxuXFxuLmNvbG9yLS1uYW1lIHtcXG4gIGZvbnQtd2VpZ2h0OiA5MDA7XFxuICBsZXR0ZXItc3BhY2luZzogMC41cHg7XFxuICBvcGFjaXR5OiAxICFpbXBvcnRhbnQ7XFxufVxcblxcbi5lcnJvci0tY29udGFpbmVyIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogNTBweDtcXG4gIHJpZ2h0OiAtNDAwcHg7XFxuICBhbmltYXRpb246IGVycm9yLWFwcGVhciA1cyBlYXNlLWluLW91dDtcXG4gIGJveC1zaGFkb3c6IDVweCA1cHggMTVweCByZ2JhKDIzMCwgNTcsIDcwLCAwLjUpO1xcbiAgd2lkdGg6IDM1MHB4O1xcbiAgdGV4dC1hbGlnbjogbGVmdDtcXG4gIHBhZGRpbmc6IDEwcHggNDBweDtcXG4gIGJhY2tncm91bmQ6ICNlNjM5NDY7XFxuICBib3JkZXItcmFkaXVzOiAycHggMCAwIDJweDtcXG59XFxuLmVycm9yLS1jb250YWluZXIgLmVycm9yLS10aXRsZSB7XFxuICBjb2xvcjogI2ZmZjtcXG59XFxuLmVycm9yLS1jb250YWluZXIgLmVycm9yLS1kZXNjIHtcXG4gIGNvbG9yOiAjZmZmO1xcbn1cXG5cXG4uZnVsbHNjcmVlbiB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcXG4gICAgIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAgICAgLW1zLXVzZXItc2VsZWN0OiBub25lO1xcbiAgICAgICAgICB1c2VyLXNlbGVjdDogbm9uZTtcXG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQgMC4xcyBlYXNlLWluLW91dDtcXG59XFxuLmZ1bGxzY3JlZW4gLm1pZC0tY29udGFpbmVyIHtcXG4gIGNvbG9yOiAjZmZmO1xcbn1cXG4uZnVsbHNjcmVlbiAudGl0bGUge1xcbiAgY29sb3I6IGluaGVyaXQ7XFxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbn1cXG5cXG4uYmFjay0tY29udGFpbmVyLnJhbmRvbSB7XFxuICBiYWNrZ3JvdW5kOiAjZmZmO1xcbiAgYm94LXNoYWRvdzogNXB4IDVweCAxNXB4IHJnYmEoNTIsIDU4LCA2NCwgMC4xNSk7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIkU6L0FBVHJhYmFsaG9HL3JlYWN0L3R4ZW4vYW5pbWF0aW9uLnNjc3NcIixcIkU6L0FBVHJhYmFsaG9HL3JlYWN0L3R4ZW4vc3R5bGUuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFO0lBQ0UsdUJBQUE7SUFDQSxVQUFBO0VDQ0Y7RURFQTtJQUdFLDZCQUFBO0lBQ0EsVUFBQTtFQ0ZGO0VES0E7SUFDRSx1QkFBQTtJQUNBLFVBQUE7RUNIRjtBQUNGO0FETUE7RUFDRTtJQUNFLDRCQUFBO0lBQ0EsVUFBQTtFQ0pGO0VET0E7SUFDRSxlQUFBO0lBQ0EsVUFBQTtFQ0xGO0FBQ0Y7QURRQTtFQUNFO0lBQ0UsMkJBQUE7SUFDQSxVQUFBO0VDTkY7RURTQTtJQUNFLGVBQUE7SUFDQSxVQUFBO0VDUEY7QUFDRjtBRFVBO0VBQ0U7SUFDRSw0QkFBQTtJQUNBLFVBQUE7RUNSRjtFRFdBO0lBQ0UsZUFBQTtJQUNBLFVBQUE7RUNURjtBQUNGO0FBckNBO0VBQ0UsY0FKTTtFQUtOLGdCQUFBO0FBdUNGOztBQXBDQTtFQUNFLDJCQUFBO0VBQ0EsbUJBQUE7RUFDQSx1Q0FBQTtBQXVDRjs7QUFwQ0E7RUFDRSxlQUFBO0VBQ0EsYUFBQTtFQUNBLDBDQUFBO0FBdUNGOztBQXBDQTtFQUNFLGVBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBeEJLO0VBeUJMLFdBQUE7RUFDQSxnQkFBQTtFQUNBLCtDQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxxQkFBQTtFQUNBLGNBQUE7RUFFQSx3Q0FBQTtBQXNDRjtBQXBDRTtFQUNFLG1CQUFBO0FBc0NKOztBQWxDQTtFQUNFLGVBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBRUEsdUNBQUE7RUFFQSxrQkFBQTtFQUVBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBRUEsYUFBQTtFQUNBLDhCQUFBO0VBRUEsdUNBQUE7QUFnQ0Y7QUE5QkU7RUFDRSwrQ0FBQTtBQWdDSjtBQTdCRTtFQUNFLGNBaEVJO0VBaUVKLFdBQUE7QUErQko7O0FBM0JBO0VBQ0UsWUFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsMkJBQUE7RUFDQSw2Q0FBQTtFQUNBLGlCQUFBO0VBRUEsd0NBQUE7QUE2QkY7QUEzQkU7RUFDRSxrQkFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBRUEsV0FBQTtFQUNBLGdCQUFBO0FBNEJKO0FBMUJJO0VBQ0Usa0JBQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtFQUNBLFFBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5Q0FBQTtFQUNBLDRCQUFBO0FBNEJOO0FBeEJFO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtBQTBCSjtBQXhCSTtFQUNFLG9CQUFBO0FBMEJOO0FBM0JJO0VBQ0Usb0JBQUE7QUEwQk47QUEzQkk7RUFDRSxvQkFBQTtBQTBCTjtBQTNCSTtFQUNFLG9CQUFBO0FBMEJOO0FBdkJJO0VBQ0UsUUFBQTtFQUNBLFlBQUE7QUF5Qk47O0FBcEJBO0VBQ0UsZ0JBQUE7RUFDQSxxQkFBQTtFQUNBLHFCQUFBO0FBdUJGOztBQWxCQTtFQUNFLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLGFBQUE7RUFFQSxzQ0FBQTtFQUNBLCtDQUFBO0VBRUEsWUFBQTtFQUVBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkF6SU07RUEySU4sMEJBQUE7QUFpQkY7QUFmRTtFQUNFLFdBQUE7QUFpQko7QUFkRTtFQUNFLFdBQUE7QUFnQko7O0FBWkE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUVBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtLQUFBLHNCQUFBO01BQUEscUJBQUE7VUFBQSxpQkFBQTtFQUVBLHVDQUFBO0FBYUY7QUFYRTtFQUNFLFdBQUE7QUFhSjtBQVZFO0VBQ0UsY0FBQTtFQUNBLHlCQUFBO0FBWUo7O0FBUkE7RUFDRSxnQkFBQTtFQUNBLCtDQUFBO0FBV0ZcIixcImZpbGVcIjpcInN0eWxlLnNjc3NcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGtleWZyYW1lcyBlcnJvci1hcHBlYXIge1xcclxcbiAgMCUge1xcclxcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwKTtcXHJcXG4gICAgb3BhY2l0eTogMDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIDI1JSxcXHJcXG4gIDUwJSxcXHJcXG4gIDc1JSB7XFxyXFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNDAwcHgpO1xcclxcbiAgICBvcGFjaXR5OiAxO1xcclxcbiAgfVxcclxcblxcclxcbiAgMTAwJSB7XFxyXFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDApO1xcclxcbiAgICBvcGFjaXR5OiAwO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG5Aa2V5ZnJhbWVzIGFwcGVhci10b3Age1xcclxcbiAgMCUge1xcclxcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTE1cHgpO1xcclxcbiAgICBvcGFjaXR5OiAwO1xcclxcbiAgfVxcclxcblxcclxcbiAgMTAwJSB7XFxyXFxuICAgIHRyYW5zZm9ybTogbm9uZTtcXHJcXG4gICAgb3BhY2l0eTogMTtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuQGtleWZyYW1lcyBhcHBlYXItYm90dG9tIHtcXHJcXG4gIDAlIHtcXHJcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDE1cHgpO1xcclxcbiAgICBvcGFjaXR5OiAwO1xcclxcbiAgfVxcclxcblxcclxcbiAgMTAwJSB7XFxyXFxuICAgIHRyYW5zZm9ybTogbm9uZTtcXHJcXG4gICAgb3BhY2l0eTogMTtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuQGtleWZyYW1lcyBhcHBlYXItbGVmdCB7XFxyXFxuICAwJSB7XFxyXFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTVweCk7XFxyXFxuICAgIG9wYWNpdHk6IDA7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAxMDAlIHtcXHJcXG4gICAgdHJhbnNmb3JtOiBub25lO1xcclxcbiAgICBvcGFjaXR5OiAxO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cIixcIkBrZXlmcmFtZXMgZXJyb3ItYXBwZWFyIHtcXG4gIDAlIHtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCk7XFxuICAgIG9wYWNpdHk6IDA7XFxuICB9XFxuICAyNSUsIDUwJSwgNzUlIHtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC00MDBweCk7XFxuICAgIG9wYWNpdHk6IDE7XFxuICB9XFxuICAxMDAlIHtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCk7XFxuICAgIG9wYWNpdHk6IDA7XFxuICB9XFxufVxcbkBrZXlmcmFtZXMgYXBwZWFyLXRvcCB7XFxuICAwJSB7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTVweCk7XFxuICAgIG9wYWNpdHk6IDA7XFxuICB9XFxuICAxMDAlIHtcXG4gICAgdHJhbnNmb3JtOiBub25lO1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgfVxcbn1cXG5Aa2V5ZnJhbWVzIGFwcGVhci1ib3R0b20ge1xcbiAgMCUge1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMTVweCk7XFxuICAgIG9wYWNpdHk6IDA7XFxuICB9XFxuICAxMDAlIHtcXG4gICAgdHJhbnNmb3JtOiBub25lO1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgfVxcbn1cXG5Aa2V5ZnJhbWVzIGFwcGVhci1sZWZ0IHtcXG4gIDAlIHtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xNXB4KTtcXG4gICAgb3BhY2l0eTogMDtcXG4gIH1cXG4gIDEwMCUge1xcbiAgICB0cmFuc2Zvcm06IG5vbmU7XFxuICAgIG9wYWNpdHk6IDE7XFxuICB9XFxufVxcbioge1xcbiAgY29sb3I6ICMzNDNhNDA7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbn1cXG5cXG4udGl0bGUge1xcbiAgZm9udC13ZWlnaHQ6IDkwMCAhaW1wb3J0YW50O1xcbiAgbGV0dGVyLXNwYWNpbmc6IDFweDtcXG4gIGFuaW1hdGlvbjogYXBwZWFyLXRvcCAwLjc1cyBlYXNlLWluLW91dDtcXG59XFxuXFxuLmRlc2Mge1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbiAgb3BhY2l0eTogMC43NTtcXG4gIGFuaW1hdGlvbjogYXBwZWFyLWJvdHRvbSAwLjc1cyBlYXNlLWluLW91dDtcXG59XFxuXFxuLmJ0bi1wcmltYXJ5IHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJhY2tncm91bmQ6ICMwNmQ2YTA7XFxuICBjb2xvcjogI2ZmZjtcXG4gIGZvbnQtd2VpZ2h0OiA5MDA7XFxuICBib3gtc2hhZG93OiA1cHggNXB4IDE1cHggcmdiYSg2LCAyMTQsIDE2MCwgMC41KTtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIHBhZGRpbmc6IDE1cHggMjBweDtcXG4gIGZvbnQtc2l6ZTogMTdweDtcXG4gIGxldHRlci1zcGFjaW5nOiAwLjVweDtcXG4gIG1hcmdpbjogMCAxNXB4O1xcbiAgYW5pbWF0aW9uOiBhcHBlYXItbGVmdCAwLjc1cyBlYXNlLWluLW91dDtcXG59XFxuLmJ0bi1wcmltYXJ5OmhvdmVyIHtcXG4gIGJhY2tncm91bmQ6ICMwN2VmYjM7XFxufVxcblxcbi5iYWNrLS1jb250YWluZXIge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiA1MHB4O1xcbiAgbGVmdDogNTBweDtcXG4gIGFuaW1hdGlvbjogYXBwZWFyLXRvcCAwLjc1cyBlYXNlLWluLW91dDtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIHBhZGRpbmc6IDE1cHggMjVweDtcXG4gIHdpZHRoOiAxOTBweDtcXG4gIGZvbnQtd2VpZ2h0OiA5MDA7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgdHJhbnNpdGlvbjogYm94LXNoYWRvdyAwLjFzIGVhc2UtaW4tb3V0O1xcbn1cXG4uYmFjay0tY29udGFpbmVyOmhvdmVyIHtcXG4gIGJveC1zaGFkb3c6IDVweCA1cHggMTVweCByZ2JhKDUyLCA1OCwgNjQsIDAuMTUpO1xcbn1cXG4uYmFjay0tY29udGFpbmVyIC5hcnJvdy0taWNvbiB7XFxuICBjb2xvcjogIzM0M2E0MDtcXG4gIHdpZHRoOiAxNXB4O1xcbn1cXG5cXG4uaW5wdXQtLWNvbnRhaW5lciB7XFxuICB3aWR0aDogMzAwcHg7XFxuICBoZWlnaHQ6IDUwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdy1yZXZlcnNlO1xcbiAgYm94LXNoYWRvdzogMCA1cHggMTVweCByZ2JhKDUyLCA1OCwgNjQsIDAuMTUpO1xcbiAgb3ZlcmZsb3c6IHZpc2libGU7XFxuICBhbmltYXRpb246IGFwcGVhci1sZWZ0IDAuNzVzIGVhc2UtaW4tb3V0O1xcbn1cXG4uaW5wdXQtLWNvbnRhaW5lciAuaGFzaHRhZyB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgd2lkdGg6IDUwcHg7XFxuICBmb250LXdlaWdodDogOTAwO1xcbn1cXG4uaW5wdXQtLWNvbnRhaW5lciAuaGFzaHRhZyAuY29sb3ItLWJhciB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB3aWR0aDogM3B4O1xcbiAgaGVpZ2h0OiAwO1xcbiAgcmlnaHQ6IDA7XFxuICBib3R0b206IC0ycHg7XFxuICBiYWNrZ3JvdW5kOiAjZWVlO1xcbiAgYm9yZGVyOiAwLjNweCBzb2xpZCByZ2JhKDUyLCA1OCwgNjQsIDAuMSk7XFxuICB0cmFuc2l0aW9uOiAwLjJzIGVhc2UtaW4tb3V0O1xcbn1cXG4uaW5wdXQtLWNvbnRhaW5lciAuaW5wdXQge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBib3JkZXI6IG5vbmU7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgcGFkZGluZy1sZWZ0OiAxNXB4O1xcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG59XFxuLmlucHV0LS1jb250YWluZXIgLmlucHV0OjpwbGFjZWhvbGRlciB7XFxuICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcXG59XFxuLmlucHV0LS1jb250YWluZXIgLmlucHV0OmZvY3VzIH4gLmhhc2h0YWcgPiAuY29sb3ItLWJhciB7XFxuICB0b3A6IDBweDtcXG4gIGhlaWdodDogMTAwJTtcXG59XFxuXFxuLmNvbG9yLS1uYW1lIHtcXG4gIGZvbnQtd2VpZ2h0OiA5MDA7XFxuICBsZXR0ZXItc3BhY2luZzogMC41cHg7XFxuICBvcGFjaXR5OiAxICFpbXBvcnRhbnQ7XFxufVxcblxcbi5lcnJvci0tY29udGFpbmVyIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogNTBweDtcXG4gIHJpZ2h0OiAtNDAwcHg7XFxuICBhbmltYXRpb246IGVycm9yLWFwcGVhciA1cyBlYXNlLWluLW91dDtcXG4gIGJveC1zaGFkb3c6IDVweCA1cHggMTVweCByZ2JhKDIzMCwgNTcsIDcwLCAwLjUpO1xcbiAgd2lkdGg6IDM1MHB4O1xcbiAgdGV4dC1hbGlnbjogbGVmdDtcXG4gIHBhZGRpbmc6IDEwcHggNDBweDtcXG4gIGJhY2tncm91bmQ6ICNlNjM5NDY7XFxuICBib3JkZXItcmFkaXVzOiAycHggMCAwIDJweDtcXG59XFxuLmVycm9yLS1jb250YWluZXIgLmVycm9yLS10aXRsZSB7XFxuICBjb2xvcjogI2ZmZjtcXG59XFxuLmVycm9yLS1jb250YWluZXIgLmVycm9yLS1kZXNjIHtcXG4gIGNvbG9yOiAjZmZmO1xcbn1cXG5cXG4uZnVsbHNjcmVlbiB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XFxuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIDAuMXMgZWFzZS1pbi1vdXQ7XFxufVxcbi5mdWxsc2NyZWVuIC5taWQtLWNvbnRhaW5lciB7XFxuICBjb2xvcjogI2ZmZjtcXG59XFxuLmZ1bGxzY3JlZW4gLnRpdGxlIHtcXG4gIGNvbG9yOiBpbmhlcml0O1xcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG59XFxuXFxuLmJhY2stLWNvbnRhaW5lci5yYW5kb20ge1xcbiAgYmFja2dyb3VuZDogI2ZmZjtcXG4gIGJveC1zaGFkb3c6IDVweCA1cHggMTVweCByZ2JhKDUyLCA1OCwgNjQsIDAuMTUpO1xcbn1cIl19XSk7XG4vLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHM7XG4iXSwic291cmNlUm9vdCI6IiJ9