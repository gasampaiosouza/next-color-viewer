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
exports.push([module.i, "@keyframes error-appear {\n  0% {\n    transform: translate(0);\n    opacity: 0;\n  }\n  25%, 50%, 75% {\n    transform: translateX(-400px);\n    opacity: 1;\n  }\n  100% {\n    transform: translate(0);\n    opacity: 0;\n  }\n}\n@keyframes appear-top {\n  0% {\n    transform: translateY(-15px);\n    opacity: 0;\n  }\n  100% {\n    transform: none;\n    opacity: 1;\n  }\n}\n@keyframes appear-bottom {\n  0% {\n    transform: translateY(15px);\n    opacity: 0;\n  }\n  100% {\n    transform: none;\n    opacity: 1;\n  }\n}\n@keyframes appear-left {\n  0% {\n    transform: translateX(-15px);\n    opacity: 0;\n  }\n  100% {\n    transform: none;\n    opacity: 1;\n  }\n}\n* {\n  color: #343a40;\n  overflow: hidden;\n}\n\n.title {\n  font-weight: 900 !important;\n  letter-spacing: 1px;\n  animation: appear-top 0.75s ease-in-out;\n}\n\n.desc {\n  font-size: 1rem;\n  opacity: 0.75;\n  animation: appear-bottom 0.75s ease-in-out;\n}\n\n.btn-primary {\n  cursor: pointer;\n  border: none;\n  background: #06d6a0;\n  color: #fff;\n  font-weight: 900;\n  box-shadow: 5px 5px 15px rgba(6, 214, 160, 0.5);\n  border-radius: 5px;\n  padding: 15px 20px;\n  font-size: 17px;\n  letter-spacing: 0.5px;\n  margin: 0 15px;\n  animation: appear-left 0.75s ease-in-out;\n}\n.btn-primary:hover {\n  background: #07efb3;\n}\n\n.back--container {\n  cursor: pointer;\n  position: absolute;\n  top: 50px;\n  left: 50px;\n  animation: appear-top 0.75s ease-in-out;\n  border-radius: 5px;\n  padding: 15px 25px;\n  width: 190px;\n  font-weight: 900;\n  display: flex;\n  justify-content: space-between;\n  transition: box-shadow 0.1s ease-in-out;\n}\n.back--container:hover {\n  box-shadow: 5px 5px 15px rgba(52, 58, 64, 0.15);\n}\n.back--container .arrow--icon {\n  color: #343a40;\n  width: 15px;\n}\n\n.input--container {\n  width: 300px;\n  height: 50px;\n  display: flex;\n  flex-direction: row-reverse;\n  box-shadow: 0 5px 15px rgba(52, 58, 64, 0.15);\n  overflow: visible;\n  animation: appear-left 0.75s ease-in-out;\n}\n.input--container .hashtag {\n  position: relative;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 50px;\n  font-weight: 900;\n}\n.input--container .hashtag .color--bar {\n  position: absolute;\n  width: 3px;\n  height: 0;\n  right: 0;\n  bottom: -2px;\n  background: #eee;\n  border: 0.3px solid rgba(52, 58, 64, 0.1);\n  transition: 0.2s ease-in-out;\n}\n.input--container .input {\n  width: 100%;\n  border: none;\n  outline: none;\n  padding-left: 15px;\n  text-transform: uppercase;\n}\n.input--container .input::-moz-placeholder {\n  text-transform: none;\n}\n.input--container .input:-ms-input-placeholder {\n  text-transform: none;\n}\n.input--container .input::-ms-input-placeholder {\n  text-transform: none;\n}\n.input--container .input::placeholder {\n  text-transform: none;\n}\n.input--container .input:focus ~ .hashtag > .color--bar {\n  top: 0px;\n  height: 100%;\n}\n\n.color--name {\n  font-weight: 900;\n  letter-spacing: 0.5px;\n  opacity: 1 !important;\n}\n\n.error--container {\n  position: absolute;\n  top: 50px;\n  right: -400px;\n  animation: error-appear 5s ease-in-out;\n  box-shadow: 5px 5px 15px rgba(230, 57, 70, 0.5);\n  width: 350px;\n  text-align: left;\n  padding: 10px 40px;\n  background: #e63946;\n  border-radius: 2px 0 0 2px;\n}\n.error--container .error--title {\n  color: #fff;\n}\n.error--container .error--desc {\n  color: #fff;\n}\n\n.fullscreen {\n  width: 100%;\n  height: 100%;\n  color: #fff;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  transition: background 0.1s ease-in-out;\n}\n.fullscreen .title {\n  text-transform: uppercase;\n  color: #000;\n  color: initial;\n}\n\n.back--container.random {\n  background: #fff;\n  box-shadow: 5px 5px 15px rgba(52, 58, 64, 0.15);\n}", "",{"version":3,"sources":["E:/AATrabalhoG/react/txen/animation.scss","E:/AATrabalhoG/react/txen/style.scss"],"names":[],"mappings":"AAAA;EACE;IACE,uBAAA;IACA,UAAA;ECCF;EDEA;IAGE,6BAAA;IACA,UAAA;ECFF;EDKA;IACE,uBAAA;IACA,UAAA;ECHF;AACF;ADMA;EACE;IACE,4BAAA;IACA,UAAA;ECJF;EDOA;IACE,eAAA;IACA,UAAA;ECLF;AACF;ADQA;EACE;IACE,2BAAA;IACA,UAAA;ECNF;EDSA;IACE,eAAA;IACA,UAAA;ECPF;AACF;ADUA;EACE;IACE,4BAAA;IACA,UAAA;ECRF;EDWA;IACE,eAAA;IACA,UAAA;ECTF;AACF;AArCA;EACE,cAJM;EAKN,gBAAA;AAuCF;;AApCA;EACE,2BAAA;EACA,mBAAA;EACA,uCAAA;AAuCF;;AApCA;EACE,eAAA;EACA,aAAA;EACA,0CAAA;AAuCF;;AApCA;EACE,eAAA;EACA,YAAA;EACA,mBAxBK;EAyBL,WAAA;EACA,gBAAA;EACA,+CAAA;EACA,kBAAA;EACA,kBAAA;EACA,eAAA;EACA,qBAAA;EACA,cAAA;EAEA,wCAAA;AAsCF;AApCE;EACE,mBAAA;AAsCJ;;AAlCA;EACE,eAAA;EACA,kBAAA;EACA,SAAA;EACA,UAAA;EAEA,uCAAA;EAEA,kBAAA;EAEA,kBAAA;EACA,YAAA;EACA,gBAAA;EAEA,aAAA;EACA,8BAAA;EAEA,uCAAA;AAgCF;AA9BE;EACE,+CAAA;AAgCJ;AA7BE;EACE,cAhEI;EAiEJ,WAAA;AA+BJ;;AA3BA;EACE,YAAA;EACA,YAAA;EACA,aAAA;EACA,2BAAA;EACA,6CAAA;EACA,iBAAA;EAEA,wCAAA;AA6BF;AA3BE;EACE,kBAAA;EACA,aAAA;EACA,uBAAA;EACA,mBAAA;EAEA,WAAA;EACA,gBAAA;AA4BJ;AA1BI;EACE,kBAAA;EACA,UAAA;EACA,SAAA;EACA,QAAA;EACA,YAAA;EACA,gBAAA;EACA,yCAAA;EACA,4BAAA;AA4BN;AAxBE;EACE,WAAA;EACA,YAAA;EACA,aAAA;EACA,kBAAA;EACA,yBAAA;AA0BJ;AAxBI;EACE,oBAAA;AA0BN;AA3BI;EACE,oBAAA;AA0BN;AA3BI;EACE,oBAAA;AA0BN;AA3BI;EACE,oBAAA;AA0BN;AAvBI;EACE,QAAA;EACA,YAAA;AAyBN;;AApBA;EACE,gBAAA;EACA,qBAAA;EACA,qBAAA;AAuBF;;AAlBA;EACE,kBAAA;EACA,SAAA;EACA,aAAA;EAEA,sCAAA;EACA,+CAAA;EAEA,YAAA;EAEA,gBAAA;EACA,kBAAA;EACA,mBAzIM;EA2IN,0BAAA;AAiBF;AAfE;EACE,WAAA;AAiBJ;AAdE;EACE,WAAA;AAgBJ;;AAZA;EACE,WAAA;EACA,YAAA;EACA,WAAA;EAEA,aAAA;EACA,sBAAA;EACA,uBAAA;EACA,mBAAA;EACA,yBAAA;KAAA,sBAAA;MAAA,qBAAA;UAAA,iBAAA;EAEA,uCAAA;AAaF;AAXE;EACE,yBAAA;EACA,WAAA;EAAA,cAAA;AAaJ;;AATA;EACE,gBAAA;EACA,+CAAA;AAYF","file":"style.scss","sourcesContent":["@keyframes error-appear {\r\n  0% {\r\n    transform: translate(0);\r\n    opacity: 0;\r\n  }\r\n\r\n  25%,\r\n  50%,\r\n  75% {\r\n    transform: translateX(-400px);\r\n    opacity: 1;\r\n  }\r\n\r\n  100% {\r\n    transform: translate(0);\r\n    opacity: 0;\r\n  }\r\n}\r\n\r\n@keyframes appear-top {\r\n  0% {\r\n    transform: translateY(-15px);\r\n    opacity: 0;\r\n  }\r\n\r\n  100% {\r\n    transform: none;\r\n    opacity: 1;\r\n  }\r\n}\r\n\r\n@keyframes appear-bottom {\r\n  0% {\r\n    transform: translateY(15px);\r\n    opacity: 0;\r\n  }\r\n\r\n  100% {\r\n    transform: none;\r\n    opacity: 1;\r\n  }\r\n}\r\n\r\n@keyframes appear-left {\r\n  0% {\r\n    transform: translateX(-15px);\r\n    opacity: 0;\r\n  }\r\n\r\n  100% {\r\n    transform: none;\r\n    opacity: 1;\r\n  }\r\n}\r\n","@keyframes error-appear {\n  0% {\n    transform: translate(0);\n    opacity: 0;\n  }\n  25%, 50%, 75% {\n    transform: translateX(-400px);\n    opacity: 1;\n  }\n  100% {\n    transform: translate(0);\n    opacity: 0;\n  }\n}\n@keyframes appear-top {\n  0% {\n    transform: translateY(-15px);\n    opacity: 0;\n  }\n  100% {\n    transform: none;\n    opacity: 1;\n  }\n}\n@keyframes appear-bottom {\n  0% {\n    transform: translateY(15px);\n    opacity: 0;\n  }\n  100% {\n    transform: none;\n    opacity: 1;\n  }\n}\n@keyframes appear-left {\n  0% {\n    transform: translateX(-15px);\n    opacity: 0;\n  }\n  100% {\n    transform: none;\n    opacity: 1;\n  }\n}\n* {\n  color: #343a40;\n  overflow: hidden;\n}\n\n.title {\n  font-weight: 900 !important;\n  letter-spacing: 1px;\n  animation: appear-top 0.75s ease-in-out;\n}\n\n.desc {\n  font-size: 1rem;\n  opacity: 0.75;\n  animation: appear-bottom 0.75s ease-in-out;\n}\n\n.btn-primary {\n  cursor: pointer;\n  border: none;\n  background: #06d6a0;\n  color: #fff;\n  font-weight: 900;\n  box-shadow: 5px 5px 15px rgba(6, 214, 160, 0.5);\n  border-radius: 5px;\n  padding: 15px 20px;\n  font-size: 17px;\n  letter-spacing: 0.5px;\n  margin: 0 15px;\n  animation: appear-left 0.75s ease-in-out;\n}\n.btn-primary:hover {\n  background: #07efb3;\n}\n\n.back--container {\n  cursor: pointer;\n  position: absolute;\n  top: 50px;\n  left: 50px;\n  animation: appear-top 0.75s ease-in-out;\n  border-radius: 5px;\n  padding: 15px 25px;\n  width: 190px;\n  font-weight: 900;\n  display: flex;\n  justify-content: space-between;\n  transition: box-shadow 0.1s ease-in-out;\n}\n.back--container:hover {\n  box-shadow: 5px 5px 15px rgba(52, 58, 64, 0.15);\n}\n.back--container .arrow--icon {\n  color: #343a40;\n  width: 15px;\n}\n\n.input--container {\n  width: 300px;\n  height: 50px;\n  display: flex;\n  flex-direction: row-reverse;\n  box-shadow: 0 5px 15px rgba(52, 58, 64, 0.15);\n  overflow: visible;\n  animation: appear-left 0.75s ease-in-out;\n}\n.input--container .hashtag {\n  position: relative;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 50px;\n  font-weight: 900;\n}\n.input--container .hashtag .color--bar {\n  position: absolute;\n  width: 3px;\n  height: 0;\n  right: 0;\n  bottom: -2px;\n  background: #eee;\n  border: 0.3px solid rgba(52, 58, 64, 0.1);\n  transition: 0.2s ease-in-out;\n}\n.input--container .input {\n  width: 100%;\n  border: none;\n  outline: none;\n  padding-left: 15px;\n  text-transform: uppercase;\n}\n.input--container .input::placeholder {\n  text-transform: none;\n}\n.input--container .input:focus ~ .hashtag > .color--bar {\n  top: 0px;\n  height: 100%;\n}\n\n.color--name {\n  font-weight: 900;\n  letter-spacing: 0.5px;\n  opacity: 1 !important;\n}\n\n.error--container {\n  position: absolute;\n  top: 50px;\n  right: -400px;\n  animation: error-appear 5s ease-in-out;\n  box-shadow: 5px 5px 15px rgba(230, 57, 70, 0.5);\n  width: 350px;\n  text-align: left;\n  padding: 10px 40px;\n  background: #e63946;\n  border-radius: 2px 0 0 2px;\n}\n.error--container .error--title {\n  color: #fff;\n}\n.error--container .error--desc {\n  color: #fff;\n}\n\n.fullscreen {\n  width: 100%;\n  height: 100%;\n  color: #fff;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  user-select: none;\n  transition: background 0.1s ease-in-out;\n}\n.fullscreen .title {\n  text-transform: uppercase;\n  color: initial;\n}\n\n.back--container.random {\n  background: #fff;\n  box-shadow: 5px 5px 15px rgba(52, 58, 64, 0.15);\n}"]}]);
// Exports
module.exports = exports;


/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFtQyxnQkFBZ0IsR0FBRyxrQ0FBa0MsZ0JBQWdCLEdBQUcsaUJBQWlCLGdCQUFnQixpQkFBaUIsZ0JBQWdCLGtCQUFrQiwyQkFBMkIsNEJBQTRCLHdCQUF3QixzQkFBc0IsNENBQTRDLEdBQUcsc0JBQXNCLDhCQUE4QixtQkFBbUIsR0FBRyw2QkFBNkIscUJBQXFCLG9EQUFvRCxHQUFHLEdBQUc7QUFDbi9UO0FBQ0EiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXF9hcHAuanMuM2Y3NGYwZTc1ODI1NGZmNjNhMzcuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpO1xuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyh0cnVlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiQGtleWZyYW1lcyBlcnJvci1hcHBlYXIge1xcbiAgMCUge1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwKTtcXG4gICAgb3BhY2l0eTogMDtcXG4gIH1cXG4gIDI1JSwgNTAlLCA3NSUge1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTQwMHB4KTtcXG4gICAgb3BhY2l0eTogMTtcXG4gIH1cXG4gIDEwMCUge1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwKTtcXG4gICAgb3BhY2l0eTogMDtcXG4gIH1cXG59XFxuQGtleWZyYW1lcyBhcHBlYXItdG9wIHtcXG4gIDAlIHtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xNXB4KTtcXG4gICAgb3BhY2l0eTogMDtcXG4gIH1cXG4gIDEwMCUge1xcbiAgICB0cmFuc2Zvcm06IG5vbmU7XFxuICAgIG9wYWNpdHk6IDE7XFxuICB9XFxufVxcbkBrZXlmcmFtZXMgYXBwZWFyLWJvdHRvbSB7XFxuICAwJSB7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgxNXB4KTtcXG4gICAgb3BhY2l0eTogMDtcXG4gIH1cXG4gIDEwMCUge1xcbiAgICB0cmFuc2Zvcm06IG5vbmU7XFxuICAgIG9wYWNpdHk6IDE7XFxuICB9XFxufVxcbkBrZXlmcmFtZXMgYXBwZWFyLWxlZnQge1xcbiAgMCUge1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTE1cHgpO1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgfVxcbiAgMTAwJSB7XFxuICAgIHRyYW5zZm9ybTogbm9uZTtcXG4gICAgb3BhY2l0eTogMTtcXG4gIH1cXG59XFxuKiB7XFxuICBjb2xvcjogIzM0M2E0MDtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxufVxcblxcbi50aXRsZSB7XFxuICBmb250LXdlaWdodDogOTAwICFpbXBvcnRhbnQ7XFxuICBsZXR0ZXItc3BhY2luZzogMXB4O1xcbiAgYW5pbWF0aW9uOiBhcHBlYXItdG9wIDAuNzVzIGVhc2UtaW4tb3V0O1xcbn1cXG5cXG4uZGVzYyB7XFxuICBmb250LXNpemU6IDFyZW07XFxuICBvcGFjaXR5OiAwLjc1O1xcbiAgYW5pbWF0aW9uOiBhcHBlYXItYm90dG9tIDAuNzVzIGVhc2UtaW4tb3V0O1xcbn1cXG5cXG4uYnRuLXByaW1hcnkge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYmFja2dyb3VuZDogIzA2ZDZhMDtcXG4gIGNvbG9yOiAjZmZmO1xcbiAgZm9udC13ZWlnaHQ6IDkwMDtcXG4gIGJveC1zaGFkb3c6IDVweCA1cHggMTVweCByZ2JhKDYsIDIxNCwgMTYwLCAwLjUpO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgcGFkZGluZzogMTVweCAyMHB4O1xcbiAgZm9udC1zaXplOiAxN3B4O1xcbiAgbGV0dGVyLXNwYWNpbmc6IDAuNXB4O1xcbiAgbWFyZ2luOiAwIDE1cHg7XFxuICBhbmltYXRpb246IGFwcGVhci1sZWZ0IDAuNzVzIGVhc2UtaW4tb3V0O1xcbn1cXG4uYnRuLXByaW1hcnk6aG92ZXIge1xcbiAgYmFja2dyb3VuZDogIzA3ZWZiMztcXG59XFxuXFxuLmJhY2stLWNvbnRhaW5lciB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDUwcHg7XFxuICBsZWZ0OiA1MHB4O1xcbiAgYW5pbWF0aW9uOiBhcHBlYXItdG9wIDAuNzVzIGVhc2UtaW4tb3V0O1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgcGFkZGluZzogMTVweCAyNXB4O1xcbiAgd2lkdGg6IDE5MHB4O1xcbiAgZm9udC13ZWlnaHQ6IDkwMDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICB0cmFuc2l0aW9uOiBib3gtc2hhZG93IDAuMXMgZWFzZS1pbi1vdXQ7XFxufVxcbi5iYWNrLS1jb250YWluZXI6aG92ZXIge1xcbiAgYm94LXNoYWRvdzogNXB4IDVweCAxNXB4IHJnYmEoNTIsIDU4LCA2NCwgMC4xNSk7XFxufVxcbi5iYWNrLS1jb250YWluZXIgLmFycm93LS1pY29uIHtcXG4gIGNvbG9yOiAjMzQzYTQwO1xcbiAgd2lkdGg6IDE1cHg7XFxufVxcblxcbi5pbnB1dC0tY29udGFpbmVyIHtcXG4gIHdpZHRoOiAzMDBweDtcXG4gIGhlaWdodDogNTBweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93LXJldmVyc2U7XFxuICBib3gtc2hhZG93OiAwIDVweCAxNXB4IHJnYmEoNTIsIDU4LCA2NCwgMC4xNSk7XFxuICBvdmVyZmxvdzogdmlzaWJsZTtcXG4gIGFuaW1hdGlvbjogYXBwZWFyLWxlZnQgMC43NXMgZWFzZS1pbi1vdXQ7XFxufVxcbi5pbnB1dC0tY29udGFpbmVyIC5oYXNodGFnIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB3aWR0aDogNTBweDtcXG4gIGZvbnQtd2VpZ2h0OiA5MDA7XFxufVxcbi5pbnB1dC0tY29udGFpbmVyIC5oYXNodGFnIC5jb2xvci0tYmFyIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHdpZHRoOiAzcHg7XFxuICBoZWlnaHQ6IDA7XFxuICByaWdodDogMDtcXG4gIGJvdHRvbTogLTJweDtcXG4gIGJhY2tncm91bmQ6ICNlZWU7XFxuICBib3JkZXI6IDAuM3B4IHNvbGlkIHJnYmEoNTIsIDU4LCA2NCwgMC4xKTtcXG4gIHRyYW5zaXRpb246IDAuMnMgZWFzZS1pbi1vdXQ7XFxufVxcbi5pbnB1dC0tY29udGFpbmVyIC5pbnB1dCB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBwYWRkaW5nLWxlZnQ6IDE1cHg7XFxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbn1cXG4uaW5wdXQtLWNvbnRhaW5lciAuaW5wdXQ6Oi1tb3otcGxhY2Vob2xkZXIge1xcbiAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XFxufVxcbi5pbnB1dC0tY29udGFpbmVyIC5pbnB1dDotbXMtaW5wdXQtcGxhY2Vob2xkZXIge1xcbiAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XFxufVxcbi5pbnB1dC0tY29udGFpbmVyIC5pbnB1dDo6LW1zLWlucHV0LXBsYWNlaG9sZGVyIHtcXG4gIHRleHQtdHJhbnNmb3JtOiBub25lO1xcbn1cXG4uaW5wdXQtLWNvbnRhaW5lciAuaW5wdXQ6OnBsYWNlaG9sZGVyIHtcXG4gIHRleHQtdHJhbnNmb3JtOiBub25lO1xcbn1cXG4uaW5wdXQtLWNvbnRhaW5lciAuaW5wdXQ6Zm9jdXMgfiAuaGFzaHRhZyA+IC5jb2xvci0tYmFyIHtcXG4gIHRvcDogMHB4O1xcbiAgaGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG4uY29sb3ItLW5hbWUge1xcbiAgZm9udC13ZWlnaHQ6IDkwMDtcXG4gIGxldHRlci1zcGFjaW5nOiAwLjVweDtcXG4gIG9wYWNpdHk6IDEgIWltcG9ydGFudDtcXG59XFxuXFxuLmVycm9yLS1jb250YWluZXIge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiA1MHB4O1xcbiAgcmlnaHQ6IC00MDBweDtcXG4gIGFuaW1hdGlvbjogZXJyb3ItYXBwZWFyIDVzIGVhc2UtaW4tb3V0O1xcbiAgYm94LXNoYWRvdzogNXB4IDVweCAxNXB4IHJnYmEoMjMwLCA1NywgNzAsIDAuNSk7XFxuICB3aWR0aDogMzUwcHg7XFxuICB0ZXh0LWFsaWduOiBsZWZ0O1xcbiAgcGFkZGluZzogMTBweCA0MHB4O1xcbiAgYmFja2dyb3VuZDogI2U2Mzk0NjtcXG4gIGJvcmRlci1yYWRpdXM6IDJweCAwIDAgMnB4O1xcbn1cXG4uZXJyb3ItLWNvbnRhaW5lciAuZXJyb3ItLXRpdGxlIHtcXG4gIGNvbG9yOiAjZmZmO1xcbn1cXG4uZXJyb3ItLWNvbnRhaW5lciAuZXJyb3ItLWRlc2Mge1xcbiAgY29sb3I6ICNmZmY7XFxufVxcblxcbi5mdWxsc2NyZWVuIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgY29sb3I6ICNmZmY7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAgICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xcbiAgICAgIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcXG4gICAgICAgICAgdXNlci1zZWxlY3Q6IG5vbmU7XFxuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIDAuMXMgZWFzZS1pbi1vdXQ7XFxufVxcbi5mdWxsc2NyZWVuIC50aXRsZSB7XFxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbiAgY29sb3I6ICMwMDA7XFxuICBjb2xvcjogaW5pdGlhbDtcXG59XFxuXFxuLmJhY2stLWNvbnRhaW5lci5yYW5kb20ge1xcbiAgYmFja2dyb3VuZDogI2ZmZjtcXG4gIGJveC1zaGFkb3c6IDVweCA1cHggMTVweCByZ2JhKDUyLCA1OCwgNjQsIDAuMTUpO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJFOi9BQVRyYWJhbGhvRy9yZWFjdC90eGVuL2FuaW1hdGlvbi5zY3NzXCIsXCJFOi9BQVRyYWJhbGhvRy9yZWFjdC90eGVuL3N0eWxlLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRTtJQUNFLHVCQUFBO0lBQ0EsVUFBQTtFQ0NGO0VERUE7SUFHRSw2QkFBQTtJQUNBLFVBQUE7RUNGRjtFREtBO0lBQ0UsdUJBQUE7SUFDQSxVQUFBO0VDSEY7QUFDRjtBRE1BO0VBQ0U7SUFDRSw0QkFBQTtJQUNBLFVBQUE7RUNKRjtFRE9BO0lBQ0UsZUFBQTtJQUNBLFVBQUE7RUNMRjtBQUNGO0FEUUE7RUFDRTtJQUNFLDJCQUFBO0lBQ0EsVUFBQTtFQ05GO0VEU0E7SUFDRSxlQUFBO0lBQ0EsVUFBQTtFQ1BGO0FBQ0Y7QURVQTtFQUNFO0lBQ0UsNEJBQUE7SUFDQSxVQUFBO0VDUkY7RURXQTtJQUNFLGVBQUE7SUFDQSxVQUFBO0VDVEY7QUFDRjtBQXJDQTtFQUNFLGNBSk07RUFLTixnQkFBQTtBQXVDRjs7QUFwQ0E7RUFDRSwyQkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUNBQUE7QUF1Q0Y7O0FBcENBO0VBQ0UsZUFBQTtFQUNBLGFBQUE7RUFDQSwwQ0FBQTtBQXVDRjs7QUFwQ0E7RUFDRSxlQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQXhCSztFQXlCTCxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSwrQ0FBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EscUJBQUE7RUFDQSxjQUFBO0VBRUEsd0NBQUE7QUFzQ0Y7QUFwQ0U7RUFDRSxtQkFBQTtBQXNDSjs7QUFsQ0E7RUFDRSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUVBLHVDQUFBO0VBRUEsa0JBQUE7RUFFQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUVBLGFBQUE7RUFDQSw4QkFBQTtFQUVBLHVDQUFBO0FBZ0NGO0FBOUJFO0VBQ0UsK0NBQUE7QUFnQ0o7QUE3QkU7RUFDRSxjQWhFSTtFQWlFSixXQUFBO0FBK0JKOztBQTNCQTtFQUNFLFlBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLDJCQUFBO0VBQ0EsNkNBQUE7RUFDQSxpQkFBQTtFQUVBLHdDQUFBO0FBNkJGO0FBM0JFO0VBQ0Usa0JBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUVBLFdBQUE7RUFDQSxnQkFBQTtBQTRCSjtBQTFCSTtFQUNFLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7RUFDQSxRQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EseUNBQUE7RUFDQSw0QkFBQTtBQTRCTjtBQXhCRTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7QUEwQko7QUF4Qkk7RUFDRSxvQkFBQTtBQTBCTjtBQTNCSTtFQUNFLG9CQUFBO0FBMEJOO0FBM0JJO0VBQ0Usb0JBQUE7QUEwQk47QUEzQkk7RUFDRSxvQkFBQTtBQTBCTjtBQXZCSTtFQUNFLFFBQUE7RUFDQSxZQUFBO0FBeUJOOztBQXBCQTtFQUNFLGdCQUFBO0VBQ0EscUJBQUE7RUFDQSxxQkFBQTtBQXVCRjs7QUFsQkE7RUFDRSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxhQUFBO0VBRUEsc0NBQUE7RUFDQSwrQ0FBQTtFQUVBLFlBQUE7RUFFQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBeklNO0VBMklOLDBCQUFBO0FBaUJGO0FBZkU7RUFDRSxXQUFBO0FBaUJKO0FBZEU7RUFDRSxXQUFBO0FBZ0JKOztBQVpBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBRUEsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0tBQUEsc0JBQUE7TUFBQSxxQkFBQTtVQUFBLGlCQUFBO0VBRUEsdUNBQUE7QUFhRjtBQVhFO0VBQ0UseUJBQUE7RUFDQSxXQUFBO0VBQUEsY0FBQTtBQWFKOztBQVRBO0VBQ0UsZ0JBQUE7RUFDQSwrQ0FBQTtBQVlGXCIsXCJmaWxlXCI6XCJzdHlsZS5zY3NzXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBrZXlmcmFtZXMgZXJyb3ItYXBwZWFyIHtcXHJcXG4gIDAlIHtcXHJcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCk7XFxyXFxuICAgIG9wYWNpdHk6IDA7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAyNSUsXFxyXFxuICA1MCUsXFxyXFxuICA3NSUge1xcclxcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTQwMHB4KTtcXHJcXG4gICAgb3BhY2l0eTogMTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIDEwMCUge1xcclxcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwKTtcXHJcXG4gICAgb3BhY2l0eTogMDtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuQGtleWZyYW1lcyBhcHBlYXItdG9wIHtcXHJcXG4gIDAlIHtcXHJcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xNXB4KTtcXHJcXG4gICAgb3BhY2l0eTogMDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIDEwMCUge1xcclxcbiAgICB0cmFuc2Zvcm06IG5vbmU7XFxyXFxuICAgIG9wYWNpdHk6IDE7XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbkBrZXlmcmFtZXMgYXBwZWFyLWJvdHRvbSB7XFxyXFxuICAwJSB7XFxyXFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgxNXB4KTtcXHJcXG4gICAgb3BhY2l0eTogMDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIDEwMCUge1xcclxcbiAgICB0cmFuc2Zvcm06IG5vbmU7XFxyXFxuICAgIG9wYWNpdHk6IDE7XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbkBrZXlmcmFtZXMgYXBwZWFyLWxlZnQge1xcclxcbiAgMCUge1xcclxcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTE1cHgpO1xcclxcbiAgICBvcGFjaXR5OiAwO1xcclxcbiAgfVxcclxcblxcclxcbiAgMTAwJSB7XFxyXFxuICAgIHRyYW5zZm9ybTogbm9uZTtcXHJcXG4gICAgb3BhY2l0eTogMTtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXCIsXCJAa2V5ZnJhbWVzIGVycm9yLWFwcGVhciB7XFxuICAwJSB7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDApO1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgfVxcbiAgMjUlLCA1MCUsIDc1JSB7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNDAwcHgpO1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgfVxcbiAgMTAwJSB7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDApO1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgfVxcbn1cXG5Aa2V5ZnJhbWVzIGFwcGVhci10b3Age1xcbiAgMCUge1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTE1cHgpO1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgfVxcbiAgMTAwJSB7XFxuICAgIHRyYW5zZm9ybTogbm9uZTtcXG4gICAgb3BhY2l0eTogMTtcXG4gIH1cXG59XFxuQGtleWZyYW1lcyBhcHBlYXItYm90dG9tIHtcXG4gIDAlIHtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDE1cHgpO1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgfVxcbiAgMTAwJSB7XFxuICAgIHRyYW5zZm9ybTogbm9uZTtcXG4gICAgb3BhY2l0eTogMTtcXG4gIH1cXG59XFxuQGtleWZyYW1lcyBhcHBlYXItbGVmdCB7XFxuICAwJSB7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTVweCk7XFxuICAgIG9wYWNpdHk6IDA7XFxuICB9XFxuICAxMDAlIHtcXG4gICAgdHJhbnNmb3JtOiBub25lO1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgfVxcbn1cXG4qIHtcXG4gIGNvbG9yOiAjMzQzYTQwO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG59XFxuXFxuLnRpdGxlIHtcXG4gIGZvbnQtd2VpZ2h0OiA5MDAgIWltcG9ydGFudDtcXG4gIGxldHRlci1zcGFjaW5nOiAxcHg7XFxuICBhbmltYXRpb246IGFwcGVhci10b3AgMC43NXMgZWFzZS1pbi1vdXQ7XFxufVxcblxcbi5kZXNjIHtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG4gIG9wYWNpdHk6IDAuNzU7XFxuICBhbmltYXRpb246IGFwcGVhci1ib3R0b20gMC43NXMgZWFzZS1pbi1vdXQ7XFxufVxcblxcbi5idG4tcHJpbWFyeSB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBib3JkZXI6IG5vbmU7XFxuICBiYWNrZ3JvdW5kOiAjMDZkNmEwO1xcbiAgY29sb3I6ICNmZmY7XFxuICBmb250LXdlaWdodDogOTAwO1xcbiAgYm94LXNoYWRvdzogNXB4IDVweCAxNXB4IHJnYmEoNiwgMjE0LCAxNjAsIDAuNSk7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBwYWRkaW5nOiAxNXB4IDIwcHg7XFxuICBmb250LXNpemU6IDE3cHg7XFxuICBsZXR0ZXItc3BhY2luZzogMC41cHg7XFxuICBtYXJnaW46IDAgMTVweDtcXG4gIGFuaW1hdGlvbjogYXBwZWFyLWxlZnQgMC43NXMgZWFzZS1pbi1vdXQ7XFxufVxcbi5idG4tcHJpbWFyeTpob3ZlciB7XFxuICBiYWNrZ3JvdW5kOiAjMDdlZmIzO1xcbn1cXG5cXG4uYmFjay0tY29udGFpbmVyIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogNTBweDtcXG4gIGxlZnQ6IDUwcHg7XFxuICBhbmltYXRpb246IGFwcGVhci10b3AgMC43NXMgZWFzZS1pbi1vdXQ7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBwYWRkaW5nOiAxNXB4IDI1cHg7XFxuICB3aWR0aDogMTkwcHg7XFxuICBmb250LXdlaWdodDogOTAwO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIHRyYW5zaXRpb246IGJveC1zaGFkb3cgMC4xcyBlYXNlLWluLW91dDtcXG59XFxuLmJhY2stLWNvbnRhaW5lcjpob3ZlciB7XFxuICBib3gtc2hhZG93OiA1cHggNXB4IDE1cHggcmdiYSg1MiwgNTgsIDY0LCAwLjE1KTtcXG59XFxuLmJhY2stLWNvbnRhaW5lciAuYXJyb3ctLWljb24ge1xcbiAgY29sb3I6ICMzNDNhNDA7XFxuICB3aWR0aDogMTVweDtcXG59XFxuXFxuLmlucHV0LS1jb250YWluZXIge1xcbiAgd2lkdGg6IDMwMHB4O1xcbiAgaGVpZ2h0OiA1MHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3ctcmV2ZXJzZTtcXG4gIGJveC1zaGFkb3c6IDAgNXB4IDE1cHggcmdiYSg1MiwgNTgsIDY0LCAwLjE1KTtcXG4gIG92ZXJmbG93OiB2aXNpYmxlO1xcbiAgYW5pbWF0aW9uOiBhcHBlYXItbGVmdCAwLjc1cyBlYXNlLWluLW91dDtcXG59XFxuLmlucHV0LS1jb250YWluZXIgLmhhc2h0YWcge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHdpZHRoOiA1MHB4O1xcbiAgZm9udC13ZWlnaHQ6IDkwMDtcXG59XFxuLmlucHV0LS1jb250YWluZXIgLmhhc2h0YWcgLmNvbG9yLS1iYXIge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgd2lkdGg6IDNweDtcXG4gIGhlaWdodDogMDtcXG4gIHJpZ2h0OiAwO1xcbiAgYm90dG9tOiAtMnB4O1xcbiAgYmFja2dyb3VuZDogI2VlZTtcXG4gIGJvcmRlcjogMC4zcHggc29saWQgcmdiYSg1MiwgNTgsIDY0LCAwLjEpO1xcbiAgdHJhbnNpdGlvbjogMC4ycyBlYXNlLWluLW91dDtcXG59XFxuLmlucHV0LS1jb250YWluZXIgLmlucHV0IHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIHBhZGRpbmctbGVmdDogMTVweDtcXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxufVxcbi5pbnB1dC0tY29udGFpbmVyIC5pbnB1dDo6cGxhY2Vob2xkZXIge1xcbiAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XFxufVxcbi5pbnB1dC0tY29udGFpbmVyIC5pbnB1dDpmb2N1cyB+IC5oYXNodGFnID4gLmNvbG9yLS1iYXIge1xcbiAgdG9wOiAwcHg7XFxuICBoZWlnaHQ6IDEwMCU7XFxufVxcblxcbi5jb2xvci0tbmFtZSB7XFxuICBmb250LXdlaWdodDogOTAwO1xcbiAgbGV0dGVyLXNwYWNpbmc6IDAuNXB4O1xcbiAgb3BhY2l0eTogMSAhaW1wb3J0YW50O1xcbn1cXG5cXG4uZXJyb3ItLWNvbnRhaW5lciB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDUwcHg7XFxuICByaWdodDogLTQwMHB4O1xcbiAgYW5pbWF0aW9uOiBlcnJvci1hcHBlYXIgNXMgZWFzZS1pbi1vdXQ7XFxuICBib3gtc2hhZG93OiA1cHggNXB4IDE1cHggcmdiYSgyMzAsIDU3LCA3MCwgMC41KTtcXG4gIHdpZHRoOiAzNTBweDtcXG4gIHRleHQtYWxpZ246IGxlZnQ7XFxuICBwYWRkaW5nOiAxMHB4IDQwcHg7XFxuICBiYWNrZ3JvdW5kOiAjZTYzOTQ2O1xcbiAgYm9yZGVyLXJhZGl1czogMnB4IDAgMCAycHg7XFxufVxcbi5lcnJvci0tY29udGFpbmVyIC5lcnJvci0tdGl0bGUge1xcbiAgY29sb3I6ICNmZmY7XFxufVxcbi5lcnJvci0tY29udGFpbmVyIC5lcnJvci0tZGVzYyB7XFxuICBjb2xvcjogI2ZmZjtcXG59XFxuXFxuLmZ1bGxzY3JlZW4ge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBjb2xvcjogI2ZmZjtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XFxuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIDAuMXMgZWFzZS1pbi1vdXQ7XFxufVxcbi5mdWxsc2NyZWVuIC50aXRsZSB7XFxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbiAgY29sb3I6IGluaXRpYWw7XFxufVxcblxcbi5iYWNrLS1jb250YWluZXIucmFuZG9tIHtcXG4gIGJhY2tncm91bmQ6ICNmZmY7XFxuICBib3gtc2hhZG93OiA1cHggNXB4IDE1cHggcmdiYSg1MiwgNTgsIDY0LCAwLjE1KTtcXG59XCJdfV0pO1xuLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==