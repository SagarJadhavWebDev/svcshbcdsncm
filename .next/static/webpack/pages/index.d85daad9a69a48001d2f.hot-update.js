webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/POSTREQ.tsx":
/*!***************************!*\
  !*** ./pages/POSTREQ.tsx ***!
  \***************************/
/*! exports provided: POSTREQ, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "POSTREQ", function() { return POSTREQ; });
/* harmony import */ var C_NextProjects_NewOne_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var C_NextProjects_NewOne_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var C_NextProjects_NewOne_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var C_NextProjects_NewOne_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var C_NextProjects_NewOne_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var C_NextProjects_NewOne_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var C_NextProjects_NewOne_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! isomorphic-unfetch */ "./node_modules/next/dist/build/polyfills/fetch/index.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_10__);








var _jsxFileName = "C:\\NextProjects\\NewOne\\pages\\POSTREQ.tsx";

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(C_NextProjects_NewOne_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(C_NextProjects_NewOne_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(C_NextProjects_NewOne_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }




var POSTREQ = /*#__PURE__*/function (_Component) {
  Object(C_NextProjects_NewOne_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__["default"])(POSTREQ, _Component);

  var _super = _createSuper(POSTREQ);

  function POSTREQ(props) {
    var _this;

    Object(C_NextProjects_NewOne_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, POSTREQ);

    _this = _super.call(this, props);

    Object(C_NextProjects_NewOne_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(C_NextProjects_NewOne_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "changeHandler", function (e) {
      _this.setState(Object(C_NextProjects_NewOne_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])({}, e.target.name, e.target.value));
    });

    Object(C_NextProjects_NewOne_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(C_NextProjects_NewOne_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "suubmitHandler", function (e) {
      e.preventDefault();
      console.log(_this.state);
      axios__WEBPACK_IMPORTED_MODULE_10___default.a.post('https://jsonplaceholder.typicode.com/posts', _this.state);
    });

    _this.state = {
      userId: '',
      title: '',
      Body: ''
    };
    return _this;
  }

  Object(C_NextProjects_NewOne_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(POSTREQ, [{
    key: "render",
    value: function render() {
      var _this$state = this.state,
          userId = _this$state.userId,
          title = _this$state.title,
          Body = _this$state.Body;
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
        className: "w3-card",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("form", {
          onSubmit: this.suubmitHandler,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("section", {
            className: "text-gray-700 body-font",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
              className: "container md:w-1/3 px-5 py-24 mx-auto flex flex-wrap items-center",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
                className: " text-left  shadow-lg bg-gray-200 rounded-lg p-8 flex flex-col md:ml-auto w-full  mt-10 md:mt-0",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("h2", {
                  className: "text-gray-900 text-lg font-medium title-font mb-5",
                  children: "Sign Up"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 46,
                  columnNumber: 7
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
                  className: "relative mb-4",
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("label", {
                    className: "leading-7 text-sm text-gray-600",
                    children: "Full Name"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 48,
                    columnNumber: 9
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("input", {
                    type: "text",
                    id: "full-name",
                    name: "userId",
                    value: userId,
                    onChange: this.changeHandler,
                    className: "w-full bg-white rounded border border-gray-300 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 49,
                    columnNumber: 9
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 47,
                  columnNumber: 7
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
                  className: "relative mb-4",
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("label", {
                    className: "leading-7 text-sm text-gray-600",
                    children: "Subject"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 52,
                    columnNumber: 9
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("input", {
                    type: "text",
                    id: "full-name",
                    name: "title",
                    value: title,
                    onChange: this.changeHandler,
                    className: "w-full bg-white rounded border border-gray-300 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 53,
                    columnNumber: 9
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 51,
                  columnNumber: 7
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
                  className: "relative mb-4",
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("label", {
                    className: "leading-7 text-sm text-gray-600",
                    children: "Email"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 56,
                    columnNumber: 9
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("input", {
                    type: "email",
                    id: "email",
                    name: "Body",
                    value: Body,
                    onChange: this.changeHandler,
                    className: "w-full bg-white rounded border border-gray-300 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 57,
                    columnNumber: 9
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 55,
                  columnNumber: 7
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("button", {
                  type: "submit",
                  className: "w3-hover-blue text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-500 rounded text-lg",
                  children: "Submit"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 59,
                  columnNumber: 7
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("p", {
                  className: "text-xs text-gray-500 mt-3",
                  children: "Literally you probably haven't heard of them jean shorts."
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 60,
                  columnNumber: 7
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 45,
                columnNumber: 5
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 44,
              columnNumber: 3
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 43,
            columnNumber: 17
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 41,
          columnNumber: 17
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 13
      }, this);
    }
  }]);

  return POSTREQ;
}(react__WEBPACK_IMPORTED_MODULE_8__["Component"]);
/* harmony default export */ __webpack_exports__["default"] = (POSTREQ);

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
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
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvUE9TVFJFUS50c3giXSwibmFtZXMiOlsiUE9TVFJFUSIsInByb3BzIiwiZSIsInNldFN0YXRlIiwidGFyZ2V0IiwibmFtZSIsInZhbHVlIiwicHJldmVudERlZmF1bHQiLCJjb25zb2xlIiwibG9nIiwic3RhdGUiLCJheGlvcyIsInBvc3QiLCJ1c2VySWQiLCJ0aXRsZSIsIkJvZHkiLCJzdXVibWl0SGFuZGxlciIsImNoYW5nZUhhbmRsZXIiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBVU8sSUFBTUEsT0FBYjtBQUFBOztBQUFBOztBQUNJLG1CQUFZQyxLQUFaLEVBQXVCO0FBQUE7O0FBQUE7O0FBQ25CLDhCQUFNQSxLQUFOOztBQURtQiw0UkFXUCxVQUFDQyxDQUFELEVBQVU7QUFDdEIsWUFBS0MsUUFBTCxpSUFBZ0JELENBQUMsQ0FBQ0UsTUFBRixDQUFTQyxJQUF6QixFQUFpQ0gsQ0FBQyxDQUFDRSxNQUFGLENBQVNFLEtBQTFDO0FBQ0gsS0Fic0I7O0FBQUEsNlJBZU4sVUFBQ0osQ0FBRCxFQUF1QztBQUNwREEsT0FBQyxDQUFDSyxjQUFGO0FBQ0FDLGFBQU8sQ0FBQ0MsR0FBUixDQUFZLE1BQUtDLEtBQWpCO0FBQ0FDLG1EQUFLLENBQUNDLElBQU4sQ0FBVyw0Q0FBWCxFQUEwRCxNQUFLRixLQUEvRDtBQUVILEtBcEJzQjs7QUFHbkIsVUFBS0EsS0FBTCxHQUFhO0FBQ1RHLFlBQU0sRUFBRSxFQURDO0FBRVRDLFdBQUssRUFBRSxFQUZFO0FBR1RDLFVBQUksRUFBQztBQUhJLEtBQWI7QUFIbUI7QUFTdEI7O0FBVkw7QUFBQTtBQUFBLDZCQXdCYTtBQUFBLHdCQUM0QixLQUFLTCxLQURqQztBQUFBLFVBQ0dHLE1BREgsZUFDR0EsTUFESDtBQUFBLFVBQ1lDLEtBRFosZUFDWUEsS0FEWjtBQUFBLFVBQ29CQyxJQURwQixlQUNvQkEsSUFEcEI7QUFFTCwwQkFDSTtBQUFLLGlCQUFTLEVBQUMsU0FBZjtBQUFBLCtCQUNJO0FBQU0sa0JBQVEsRUFBRSxLQUFLQyxjQUFyQjtBQUFBLGlDQUVBO0FBQVMscUJBQVMsRUFBQyx5QkFBbkI7QUFBQSxtQ0FDZDtBQUFLLHVCQUFTLEVBQUMsbUVBQWY7QUFBQSxxQ0FDRTtBQUFLLHlCQUFTLEVBQUMsaUdBQWY7QUFBQSx3Q0FDRTtBQUFJLDJCQUFTLEVBQUMsbURBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsd0JBREYsZUFFRTtBQUFLLDJCQUFTLEVBQUMsZUFBZjtBQUFBLDBDQUNFO0FBQVEsNkJBQVMsRUFBQyxpQ0FBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsMEJBREYsZUFFRTtBQUFPLHdCQUFJLEVBQUMsTUFBWjtBQUFtQixzQkFBRSxFQUFDLFdBQXRCO0FBQWtDLHdCQUFJLEVBQUMsUUFBdkM7QUFBZ0QseUJBQUssRUFBRUgsTUFBdkQ7QUFBK0QsNEJBQVEsRUFBRSxLQUFLSSxhQUE5RTtBQUE4Riw2QkFBUyxFQUFDO0FBQXhHO0FBQUE7QUFBQTtBQUFBO0FBQUEsMEJBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHdCQUZGLGVBTUU7QUFBSywyQkFBUyxFQUFDLGVBQWY7QUFBQSwwQ0FDRTtBQUFRLDZCQUFTLEVBQUMsaUNBQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDBCQURGLGVBRUU7QUFBTyx3QkFBSSxFQUFDLE1BQVo7QUFBbUIsc0JBQUUsRUFBQyxXQUF0QjtBQUFrQyx3QkFBSSxFQUFDLE9BQXZDO0FBQStDLHlCQUFLLEVBQUVILEtBQXREO0FBQTZELDRCQUFRLEVBQUUsS0FBS0csYUFBNUU7QUFBMkYsNkJBQVMsRUFBQztBQUFyRztBQUFBO0FBQUE7QUFBQTtBQUFBLDBCQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx3QkFORixlQVVFO0FBQUssMkJBQVMsRUFBQyxlQUFmO0FBQUEsMENBQ0U7QUFBTyw2QkFBUyxFQUFDLGlDQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwwQkFERixlQUVFO0FBQU8sd0JBQUksRUFBQyxPQUFaO0FBQW9CLHNCQUFFLEVBQUMsT0FBdkI7QUFBK0Isd0JBQUksRUFBQyxNQUFwQztBQUEyQyx5QkFBSyxFQUFFRixJQUFsRDtBQUF3RCw0QkFBUSxFQUFFLEtBQUtFLGFBQXZFO0FBQXNGLDZCQUFTLEVBQUM7QUFBaEc7QUFBQTtBQUFBO0FBQUE7QUFBQSwwQkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsd0JBVkYsZUFjRTtBQUFVLHNCQUFJLEVBQUMsUUFBZjtBQUF3QiwyQkFBUyxFQUFDLGtIQUFsQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx3QkFkRixlQWVFO0FBQUcsMkJBQVMsRUFBQyw0QkFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx3QkFmRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRGM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUZBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREo7QUErQkg7QUF6REw7O0FBQUE7QUFBQSxFQUE2QkMsK0NBQTdCO0FBNERlbEIsc0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguZDg1ZGFhZDlhNjlhNDgwMDFkMmYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0ICdpc29tb3JwaGljLXVuZmV0Y2gnO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5cclxuXHJcbmludGVyZmFjZSBBcHBQcm9wcyB7XHJcbiAgICAvL2NvZGUgcmVsYXRlZCB0byB5b3VyIHByb3BzIGdvZXMgaGVyZVxyXG4gfVxyXG4gXHJcbiBpbnRlcmZhY2UgQXBwU3RhdGUge1xyXG4gICAgdmFsdWU6IGFueVxyXG4gfVxyXG5leHBvcnQgY2xhc3MgUE9TVFJFUSBleHRlbmRzIENvbXBvbmVudCAge1xyXG4gICAgY29uc3RydWN0b3IocHJvcHM6YW55KSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpXHJcbiAgICBcclxuICAgICAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICAgICAgICB1c2VySWQ6ICcnLFxyXG4gICAgICAgICAgICB0aXRsZTogJycsXHJcbiAgICAgICAgICAgIEJvZHk6JycsXHJcbiAgICAgICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY2hhbmdlSGFuZGxlciA9IChlOmFueSkgPT57XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7W2UudGFyZ2V0Lm5hbWVdIDogZS50YXJnZXQudmFsdWUgfSlcclxuICAgIH1cclxuXHJcbiAgICBzdXVibWl0SGFuZGxlciA9IChlOiB7IHByZXZlbnREZWZhdWx0OiAoKSA9PiB2b2lkOyB9KSA9PntcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcclxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnN0YXRlKVxyXG4gICAgICAgIGF4aW9zLnBvc3QoJ2h0dHBzOi8vanNvbnBsYWNlaG9sZGVyLnR5cGljb2RlLmNvbS9wb3N0cycgLCB0aGlzLnN0YXRlIClcclxuXHJcbiAgICB9XHJcbiAgICBcclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgY29uc3QgIHt1c2VySWQgLCB0aXRsZSAsIEJvZHl9ID0gdGhpcy5zdGF0ZVxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidzMtY2FyZFwiPlxyXG4gICAgICAgICAgICAgICAgPGZvcm0gb25TdWJtaXQ9e3RoaXMuc3V1Ym1pdEhhbmRsZXJ9PlxyXG5cclxuICAgICAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cInRleHQtZ3JheS03MDAgYm9keS1mb250XCI+XHJcbiAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgbWQ6dy0xLzMgcHgtNSBweS0yNCBteC1hdXRvIGZsZXggZmxleC13cmFwIGl0ZW1zLWNlbnRlclwiPlxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCIgdGV4dC1sZWZ0ICBzaGFkb3ctbGcgYmctZ3JheS0yMDAgcm91bmRlZC1sZyBwLTggZmxleCBmbGV4LWNvbCBtZDptbC1hdXRvIHctZnVsbCAgbXQtMTAgbWQ6bXQtMFwiPlxyXG4gICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC1ncmF5LTkwMCB0ZXh0LWxnIGZvbnQtbWVkaXVtIHRpdGxlLWZvbnQgbWItNVwiPlNpZ24gVXA8L2gyPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlIG1iLTRcIj5cclxuICAgICAgICA8bGFiZWwgIGNsYXNzTmFtZT1cImxlYWRpbmctNyB0ZXh0LXNtIHRleHQtZ3JheS02MDBcIj5GdWxsIE5hbWU8L2xhYmVsPlxyXG4gICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGlkPVwiZnVsbC1uYW1lXCIgbmFtZT1cInVzZXJJZFwiIHZhbHVlPXt1c2VySWR9IG9uQ2hhbmdlPXt0aGlzLmNoYW5nZUhhbmRsZXJ9ICBjbGFzc05hbWU9XCJ3LWZ1bGwgYmctd2hpdGUgcm91bmRlZCBib3JkZXIgYm9yZGVyLWdyYXktMzAwIGZvY3VzOmJvcmRlci1pbmRpZ28tNTAwIHRleHQtYmFzZSBvdXRsaW5lLW5vbmUgdGV4dC1ncmF5LTcwMCBweS0xIHB4LTMgbGVhZGluZy04IHRyYW5zaXRpb24tY29sb3JzIGR1cmF0aW9uLTIwMCBlYXNlLWluLW91dFwiLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmUgbWItNFwiPlxyXG4gICAgICAgIDxsYWJlbCAgY2xhc3NOYW1lPVwibGVhZGluZy03IHRleHQtc20gdGV4dC1ncmF5LTYwMFwiPlN1YmplY3Q8L2xhYmVsPlxyXG4gICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGlkPVwiZnVsbC1uYW1lXCIgbmFtZT1cInRpdGxlXCIgdmFsdWU9e3RpdGxlfSBvbkNoYW5nZT17dGhpcy5jaGFuZ2VIYW5kbGVyfSBjbGFzc05hbWU9XCJ3LWZ1bGwgYmctd2hpdGUgcm91bmRlZCBib3JkZXIgYm9yZGVyLWdyYXktMzAwIGZvY3VzOmJvcmRlci1pbmRpZ28tNTAwIHRleHQtYmFzZSBvdXRsaW5lLW5vbmUgdGV4dC1ncmF5LTcwMCBweS0xIHB4LTMgbGVhZGluZy04IHRyYW5zaXRpb24tY29sb3JzIGR1cmF0aW9uLTIwMCBlYXNlLWluLW91dFwiLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmUgbWItNFwiPlxyXG4gICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJsZWFkaW5nLTcgdGV4dC1zbSB0ZXh0LWdyYXktNjAwXCI+RW1haWw8L2xhYmVsPlxyXG4gICAgICAgIDxpbnB1dCB0eXBlPVwiZW1haWxcIiBpZD1cImVtYWlsXCIgbmFtZT1cIkJvZHlcIiB2YWx1ZT17Qm9keX0gb25DaGFuZ2U9e3RoaXMuY2hhbmdlSGFuZGxlcn0gY2xhc3NOYW1lPVwidy1mdWxsIGJnLXdoaXRlIHJvdW5kZWQgYm9yZGVyIGJvcmRlci1ncmF5LTMwMCBmb2N1czpib3JkZXItaW5kaWdvLTUwMCB0ZXh0LWJhc2Ugb3V0bGluZS1ub25lIHRleHQtZ3JheS03MDAgcHktMSBweC0zIGxlYWRpbmctOCB0cmFuc2l0aW9uLWNvbG9ycyBkdXJhdGlvbi0yMDAgZWFzZS1pbi1vdXRcIi8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8YnV0dG9uICAgdHlwZT1cInN1Ym1pdFwiIGNsYXNzTmFtZT1cInczLWhvdmVyLWJsdWUgdGV4dC13aGl0ZSBiZy1pbmRpZ28tNTAwIGJvcmRlci0wIHB5LTIgcHgtOCBmb2N1czpvdXRsaW5lLW5vbmUgaG92ZXI6YmctaW5kaWdvLTUwMCByb3VuZGVkIHRleHQtbGdcIj5TdWJtaXQ8L2J1dHRvbj5cclxuICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC14cyB0ZXh0LWdyYXktNTAwIG10LTNcIj5MaXRlcmFsbHkgeW91IHByb2JhYmx5IGhhdmVuJ3QgaGVhcmQgb2YgdGhlbSBqZWFuIHNob3J0cy48L3A+XHJcbiAgICA8L2Rpdj5cclxuICA8L2Rpdj5cclxuPC9zZWN0aW9uPlxyXG5cclxuICAgICAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQT1NUUkVRXHJcbiJdLCJzb3VyY2VSb290IjoiIn0=