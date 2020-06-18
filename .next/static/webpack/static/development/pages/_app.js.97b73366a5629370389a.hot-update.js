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
exports.push([module.i, "* {\n  color: #343a40;\n}\n\n.title {\n  font-weight: 900 !important;\n  letter-spacing: 1px;\n}\n\n.desc {\n  font-size: 1rem;\n  opacity: 0.75;\n}\n\n.btn-primary {\n  cursor: pointer;\n  border: none;\n  background: #06d6a0;\n  color: #fff;\n  font-weight: 900;\n  box-shadow: 5px 5px 15px rgba(6, 214, 160, 0.5);\n  border-radius: 5px;\n  padding: 15px 20px;\n  font-size: 17px;\n  letter-spacing: 0.5px;\n}\n.btn-primary:hover {\n  background: #07efb3;\n}\n\n.input--container {\n  width: 300px;\n  height: 50px;\n  display: flex;\n  flex-direction: row-reverse;\n  box-shadow: 0 5px 15px rgba(52, 58, 64, 0.15);\n}\n.input--container .hashtag {\n  position: relative;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 50px;\n  height: 100%;\n  font-weight: 900;\n}\n.input--container .hashtag::after {\n  content: \"\";\n  position: absolute;\n  width: 3px;\n  height: 0;\n  right: -3px;\n  bottom: 0;\n  background: #eee;\n  transition: 0.2s ease-in-out;\n}\n.input--container .input {\n  width: 100%;\n  border: none;\n  outline: none;\n  padding-left: 15px;\n  text-transform: uppercase;\n}\n.input--container .input::-moz-placeholder {\n  text-transform: none;\n}\n.input--container .input:-ms-input-placeholder {\n  text-transform: none;\n}\n.input--container .input::-ms-input-placeholder {\n  text-transform: none;\n}\n.input--container .input::placeholder {\n  text-transform: none;\n}\n.input--container .input:focus ~ .hashtag::after, .input--container .input:valid ~ .hashtag::after {\n  top: 0;\n  height: 100%;\n}\n\n.color--name {\n  font-weight: 900;\n  letter-spacing: 0.5px;\n  color: #343a40 !important;\n}", "",{"version":3,"sources":["E:/AATrabalhoG/react/txen/style.scss"],"names":[],"mappings":"AAGA;EACE,cAHM;AACR;;AAKA;EACE,2BAAA;EACA,mBAAA;AAFF;;AAKA;EACE,eAAA;EACA,aAAA;AAFF;;AAKA;EACE,eAAA;EACA,YAAA;EACA,mBApBK;EAqBL,WAAA;EACA,gBAAA;EACA,+CAAA;EACA,kBAAA;EACA,kBAAA;EACA,eAAA;EACA,qBAAA;AAFF;AAIE;EACE,mBAAA;AAFJ;;AAMA;EACE,YAAA;EACA,YAAA;EACA,aAAA;EACA,2BAAA;EACA,6CAAA;AAHF;AAKE;EACE,kBAAA;EACA,aAAA;EACA,uBAAA;EACA,mBAAA;EAEA,WAAA;EACA,YAAA;EACA,gBAAA;AAJJ;AAMI;EACE,WAAA;EACA,kBAAA;EACA,UAAA;EACA,SAAA;EACA,WAAA;EACA,SAAA;EACA,gBAAA;EACA,4BAAA;AAJN;AAQE;EACE,WAAA;EACA,YAAA;EACA,aAAA;EACA,kBAAA;EACA,yBAAA;AANJ;AAQI;EACE,oBAAA;AANN;AAKI;EACE,oBAAA;AANN;AAKI;EACE,oBAAA;AANN;AAKI;EACE,oBAAA;AANN;AASI;EAEE,MAAA;EACA,YAAA;AARN;;AAaA;EACE,gBAAA;EACA,qBAAA;EACA,yBAAA;AAVF","file":"style.scss","sourcesContent":["$main: #06d6a0;\r\n$black: #343a40;\r\n\r\n* {\r\n  color: $black;\r\n}\r\n\r\n.title {\r\n  font-weight: 900 !important;\r\n  letter-spacing: 1px;\r\n}\r\n\r\n.desc {\r\n  font-size: 1rem;\r\n  opacity: 0.75;\r\n}\r\n\r\n.btn-primary {\r\n  cursor: pointer;\r\n  border: none;\r\n  background: $main;\r\n  color: #fff;\r\n  font-weight: 900;\r\n  box-shadow: 5px 5px 15px rgba($main, 0.5);\r\n  border-radius: 5px;\r\n  padding: 15px 20px;\r\n  font-size: 17px;\r\n  letter-spacing: 0.5px;\r\n\r\n  &:hover {\r\n    background: lighten($main, 5);\r\n  }\r\n}\r\n\r\n.input--container {\r\n  width: 300px;\r\n  height: 50px;\r\n  display: flex;\r\n  flex-direction: row-reverse;\r\n  box-shadow: 0 5px 15px rgba($black, 0.15);\r\n\r\n  .hashtag {\r\n    position: relative;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n\r\n    width: 50px;\r\n    height: 100%;\r\n    font-weight: 900;\r\n\r\n    &::after {\r\n      content: '';\r\n      position: absolute;\r\n      width: 3px;\r\n      height: 0;\r\n      right: -3px;\r\n      bottom: 0;\r\n      background: #eee;\r\n      transition: 0.2s ease-in-out;\r\n    }\r\n  }\r\n\r\n  .input {\r\n    width: 100%;\r\n    border: none;\r\n    outline: none;\r\n    padding-left: 15px;\r\n    text-transform: uppercase;\r\n\r\n    &::placeholder {\r\n      text-transform: none;\r\n    }\r\n\r\n    &:focus ~ .hashtag::after,\r\n    &:valid ~ .hashtag::after {\r\n      top: 0;\r\n      height: 100%;\r\n    }\r\n  }\r\n}\r\n\r\n.color--name {\r\n  font-weight: 900;\r\n  letter-spacing: 0.5px;\r\n  color: $black !important;\r\n}\r\n"]}]);
// Exports
module.exports = exports;


/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zdHlsZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBQ0Esa0NBQWtDLG1CQUFPLENBQUMsb0dBQStDO0FBQ3pGO0FBQ0E7QUFDQSxjQUFjLFFBQVMsTUFBTSxtQkFBbUIsR0FBRyxZQUFZLGdDQUFnQyx3QkFBd0IsR0FBRyxXQUFXLG9CQUFvQixrQkFBa0IsR0FBRyxrQkFBa0Isb0JBQW9CLGlCQUFpQix3QkFBd0IsZ0JBQWdCLHFCQUFxQixvREFBb0QsdUJBQXVCLHVCQUF1QixvQkFBb0IsMEJBQTBCLEdBQUcsc0JBQXNCLHdCQUF3QixHQUFHLHVCQUF1QixpQkFBaUIsaUJBQWlCLGtCQUFrQixnQ0FBZ0Msa0RBQWtELEdBQUcsOEJBQThCLHVCQUF1QixrQkFBa0IsNEJBQTRCLHdCQUF3QixnQkFBZ0IsaUJBQWlCLHFCQUFxQixHQUFHLHFDQUFxQyxrQkFBa0IsdUJBQXVCLGVBQWUsY0FBYyxnQkFBZ0IsY0FBYyxxQkFBcUIsaUNBQWlDLEdBQUcsNEJBQTRCLGdCQUFnQixpQkFBaUIsa0JBQWtCLHVCQUF1Qiw4QkFBOEIsR0FBRyw4Q0FBOEMseUJBQXlCLEdBQUcsa0RBQWtELHlCQUF5QixHQUFHLG1EQUFtRCx5QkFBeUIsR0FBRyx5Q0FBeUMseUJBQXlCLEdBQUcsc0dBQXNHLFdBQVcsaUJBQWlCLEdBQUcsa0JBQWtCLHFCQUFxQiwwQkFBMEIsOEJBQThCLEdBQUcsT0FBTywyRkFBMkYsVUFBVSxNQUFNLEtBQUssV0FBVyxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxVQUFVLFdBQVcsS0FBSyxLQUFLLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLFdBQVcsV0FBVyxLQUFLLEtBQUssV0FBVyxVQUFVLFdBQVcsV0FBVyxVQUFVLFVBQVUsV0FBVyxLQUFLLEtBQUssVUFBVSxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsV0FBVyxXQUFXLEtBQUssS0FBSyxVQUFVLFVBQVUsVUFBVSxXQUFXLFdBQVcsS0FBSyxLQUFLLFdBQVcsS0FBSyxLQUFLLFdBQVcsS0FBSyxLQUFLLFdBQVcsS0FBSyxLQUFLLFdBQVcsS0FBSyxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssV0FBVyxXQUFXLFdBQVcsNERBQTRELG9CQUFvQixXQUFXLG9CQUFvQixLQUFLLGdCQUFnQixrQ0FBa0MsMEJBQTBCLEtBQUssZUFBZSxzQkFBc0Isb0JBQW9CLEtBQUssc0JBQXNCLHNCQUFzQixtQkFBbUIsd0JBQXdCLGtCQUFrQix1QkFBdUIsZ0RBQWdELHlCQUF5Qix5QkFBeUIsc0JBQXNCLDRCQUE0QixtQkFBbUIsc0NBQXNDLE9BQU8sS0FBSywyQkFBMkIsbUJBQW1CLG1CQUFtQixvQkFBb0Isa0NBQWtDLGdEQUFnRCxvQkFBb0IsMkJBQTJCLHNCQUFzQixnQ0FBZ0MsNEJBQTRCLHdCQUF3QixxQkFBcUIseUJBQXlCLHNCQUFzQixzQkFBc0IsNkJBQTZCLHFCQUFxQixvQkFBb0Isc0JBQXNCLG9CQUFvQiwyQkFBMkIsdUNBQXVDLFNBQVMsT0FBTyxrQkFBa0Isb0JBQW9CLHFCQUFxQixzQkFBc0IsMkJBQTJCLGtDQUFrQyw0QkFBNEIsK0JBQStCLFNBQVMseUVBQXlFLGlCQUFpQix1QkFBdUIsU0FBUyxPQUFPLEtBQUssc0JBQXNCLHVCQUF1Qiw0QkFBNEIsK0JBQStCLEtBQUssT0FBTztBQUM5aEk7QUFDQSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcX2FwcC5qcy45N2I3MzM2NmE1NjI5MzcwMzg5YS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIik7XG5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKHRydWUpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIqIHtcXG4gIGNvbG9yOiAjMzQzYTQwO1xcbn1cXG5cXG4udGl0bGUge1xcbiAgZm9udC13ZWlnaHQ6IDkwMCAhaW1wb3J0YW50O1xcbiAgbGV0dGVyLXNwYWNpbmc6IDFweDtcXG59XFxuXFxuLmRlc2Mge1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbiAgb3BhY2l0eTogMC43NTtcXG59XFxuXFxuLmJ0bi1wcmltYXJ5IHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJhY2tncm91bmQ6ICMwNmQ2YTA7XFxuICBjb2xvcjogI2ZmZjtcXG4gIGZvbnQtd2VpZ2h0OiA5MDA7XFxuICBib3gtc2hhZG93OiA1cHggNXB4IDE1cHggcmdiYSg2LCAyMTQsIDE2MCwgMC41KTtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIHBhZGRpbmc6IDE1cHggMjBweDtcXG4gIGZvbnQtc2l6ZTogMTdweDtcXG4gIGxldHRlci1zcGFjaW5nOiAwLjVweDtcXG59XFxuLmJ0bi1wcmltYXJ5OmhvdmVyIHtcXG4gIGJhY2tncm91bmQ6ICMwN2VmYjM7XFxufVxcblxcbi5pbnB1dC0tY29udGFpbmVyIHtcXG4gIHdpZHRoOiAzMDBweDtcXG4gIGhlaWdodDogNTBweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93LXJldmVyc2U7XFxuICBib3gtc2hhZG93OiAwIDVweCAxNXB4IHJnYmEoNTIsIDU4LCA2NCwgMC4xNSk7XFxufVxcbi5pbnB1dC0tY29udGFpbmVyIC5oYXNodGFnIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB3aWR0aDogNTBweDtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGZvbnQtd2VpZ2h0OiA5MDA7XFxufVxcbi5pbnB1dC0tY29udGFpbmVyIC5oYXNodGFnOjphZnRlciB7XFxuICBjb250ZW50OiBcXFwiXFxcIjtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHdpZHRoOiAzcHg7XFxuICBoZWlnaHQ6IDA7XFxuICByaWdodDogLTNweDtcXG4gIGJvdHRvbTogMDtcXG4gIGJhY2tncm91bmQ6ICNlZWU7XFxuICB0cmFuc2l0aW9uOiAwLjJzIGVhc2UtaW4tb3V0O1xcbn1cXG4uaW5wdXQtLWNvbnRhaW5lciAuaW5wdXQge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBib3JkZXI6IG5vbmU7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgcGFkZGluZy1sZWZ0OiAxNXB4O1xcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG59XFxuLmlucHV0LS1jb250YWluZXIgLmlucHV0OjotbW96LXBsYWNlaG9sZGVyIHtcXG4gIHRleHQtdHJhbnNmb3JtOiBub25lO1xcbn1cXG4uaW5wdXQtLWNvbnRhaW5lciAuaW5wdXQ6LW1zLWlucHV0LXBsYWNlaG9sZGVyIHtcXG4gIHRleHQtdHJhbnNmb3JtOiBub25lO1xcbn1cXG4uaW5wdXQtLWNvbnRhaW5lciAuaW5wdXQ6Oi1tcy1pbnB1dC1wbGFjZWhvbGRlciB7XFxuICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcXG59XFxuLmlucHV0LS1jb250YWluZXIgLmlucHV0OjpwbGFjZWhvbGRlciB7XFxuICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcXG59XFxuLmlucHV0LS1jb250YWluZXIgLmlucHV0OmZvY3VzIH4gLmhhc2h0YWc6OmFmdGVyLCAuaW5wdXQtLWNvbnRhaW5lciAuaW5wdXQ6dmFsaWQgfiAuaGFzaHRhZzo6YWZ0ZXIge1xcbiAgdG9wOiAwO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG4uY29sb3ItLW5hbWUge1xcbiAgZm9udC13ZWlnaHQ6IDkwMDtcXG4gIGxldHRlci1zcGFjaW5nOiAwLjVweDtcXG4gIGNvbG9yOiAjMzQzYTQwICFpbXBvcnRhbnQ7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIkU6L0FBVHJhYmFsaG9HL3JlYWN0L3R4ZW4vc3R5bGUuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFHQTtFQUNFLGNBSE07QUFDUjs7QUFLQTtFQUNFLDJCQUFBO0VBQ0EsbUJBQUE7QUFGRjs7QUFLQTtFQUNFLGVBQUE7RUFDQSxhQUFBO0FBRkY7O0FBS0E7RUFDRSxlQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQXBCSztFQXFCTCxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSwrQ0FBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EscUJBQUE7QUFGRjtBQUlFO0VBQ0UsbUJBQUE7QUFGSjs7QUFNQTtFQUNFLFlBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLDJCQUFBO0VBQ0EsNkNBQUE7QUFIRjtBQUtFO0VBQ0Usa0JBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUVBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7QUFKSjtBQU1JO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtFQUNBLGdCQUFBO0VBQ0EsNEJBQUE7QUFKTjtBQVFFO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtBQU5KO0FBUUk7RUFDRSxvQkFBQTtBQU5OO0FBS0k7RUFDRSxvQkFBQTtBQU5OO0FBS0k7RUFDRSxvQkFBQTtBQU5OO0FBS0k7RUFDRSxvQkFBQTtBQU5OO0FBU0k7RUFFRSxNQUFBO0VBQ0EsWUFBQTtBQVJOOztBQWFBO0VBQ0UsZ0JBQUE7RUFDQSxxQkFBQTtFQUNBLHlCQUFBO0FBVkZcIixcImZpbGVcIjpcInN0eWxlLnNjc3NcIixcInNvdXJjZXNDb250ZW50XCI6W1wiJG1haW46ICMwNmQ2YTA7XFxyXFxuJGJsYWNrOiAjMzQzYTQwO1xcclxcblxcclxcbioge1xcclxcbiAgY29sb3I6ICRibGFjaztcXHJcXG59XFxyXFxuXFxyXFxuLnRpdGxlIHtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA5MDAgIWltcG9ydGFudDtcXHJcXG4gIGxldHRlci1zcGFjaW5nOiAxcHg7XFxyXFxufVxcclxcblxcclxcbi5kZXNjIHtcXHJcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXHJcXG4gIG9wYWNpdHk6IDAuNzU7XFxyXFxufVxcclxcblxcclxcbi5idG4tcHJpbWFyeSB7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxuICBiYWNrZ3JvdW5kOiAkbWFpbjtcXHJcXG4gIGNvbG9yOiAjZmZmO1xcclxcbiAgZm9udC13ZWlnaHQ6IDkwMDtcXHJcXG4gIGJveC1zaGFkb3c6IDVweCA1cHggMTVweCByZ2JhKCRtYWluLCAwLjUpO1xcclxcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbiAgcGFkZGluZzogMTVweCAyMHB4O1xcclxcbiAgZm9udC1zaXplOiAxN3B4O1xcclxcbiAgbGV0dGVyLXNwYWNpbmc6IDAuNXB4O1xcclxcblxcclxcbiAgJjpob3ZlciB7XFxyXFxuICAgIGJhY2tncm91bmQ6IGxpZ2h0ZW4oJG1haW4sIDUpO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG4uaW5wdXQtLWNvbnRhaW5lciB7XFxyXFxuICB3aWR0aDogMzAwcHg7XFxyXFxuICBoZWlnaHQ6IDUwcHg7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IHJvdy1yZXZlcnNlO1xcclxcbiAgYm94LXNoYWRvdzogMCA1cHggMTVweCByZ2JhKCRibGFjaywgMC4xNSk7XFxyXFxuXFxyXFxuICAuaGFzaHRhZyB7XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuXFxyXFxuICAgIHdpZHRoOiA1MHB4O1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA5MDA7XFxyXFxuXFxyXFxuICAgICY6OmFmdGVyIHtcXHJcXG4gICAgICBjb250ZW50OiAnJztcXHJcXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgICAgd2lkdGg6IDNweDtcXHJcXG4gICAgICBoZWlnaHQ6IDA7XFxyXFxuICAgICAgcmlnaHQ6IC0zcHg7XFxyXFxuICAgICAgYm90dG9tOiAwO1xcclxcbiAgICAgIGJhY2tncm91bmQ6ICNlZWU7XFxyXFxuICAgICAgdHJhbnNpdGlvbjogMC4ycyBlYXNlLWluLW91dDtcXHJcXG4gICAgfVxcclxcbiAgfVxcclxcblxcclxcbiAgLmlucHV0IHtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGJvcmRlcjogbm9uZTtcXHJcXG4gICAgb3V0bGluZTogbm9uZTtcXHJcXG4gICAgcGFkZGluZy1sZWZ0OiAxNXB4O1xcclxcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcclxcblxcclxcbiAgICAmOjpwbGFjZWhvbGRlciB7XFxyXFxuICAgICAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgJjpmb2N1cyB+IC5oYXNodGFnOjphZnRlcixcXHJcXG4gICAgJjp2YWxpZCB+IC5oYXNodGFnOjphZnRlciB7XFxyXFxuICAgICAgdG9wOiAwO1xcclxcbiAgICAgIGhlaWdodDogMTAwJTtcXHJcXG4gICAgfVxcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG4uY29sb3ItLW5hbWUge1xcclxcbiAgZm9udC13ZWlnaHQ6IDkwMDtcXHJcXG4gIGxldHRlci1zcGFjaW5nOiAwLjVweDtcXHJcXG4gIGNvbG9yOiAkYmxhY2sgIWltcG9ydGFudDtcXHJcXG59XFxyXFxuXCJdfV0pO1xuLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==