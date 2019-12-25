webpackHotUpdate("static/development/pages/Articles/[article].js",{

/***/ "./components/Articles/Article.jsx":
/*!*****************************************!*\
  !*** ./components/Articles/Article.jsx ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _Search_EditDir_EditDir__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../Search/EditDir/EditDir */ "./components/Search/EditDir/EditDir.js");





var _jsxFileName = "/home/oem/Documents/Development/Courswork/guitarchords/components/Articles/Article.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement;





var Article =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Article, _Component);

  function Article(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Article);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Article).call(this, props));
    _this.state = {
      article: []
    };
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Article, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      var dir = Object(_Search_EditDir_EditDir__WEBPACK_IMPORTED_MODULE_8__["default"])(window.location.pathname);
      axios__WEBPACK_IMPORTED_MODULE_6___default.a.get('http://localhost:3210/article', {
        params: {
          id: dir
        }
      }).then(function (response) {
        _this2.setState({
          article: response.data
        });

        console.log(response.data);
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      // const router = useRouter()
      //const {id} = router.query
      return __jsx("div", {
        className: "articleText",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        },
        __self: this
      }, this.state.article.map(function (value) {
        return __jsx("div", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 42
          },
          __self: this
        }, __jsx(ArticleHead, {
          name: _this3.state.article[0].name,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 43
          },
          __self: this
        }), __jsx(ArticleText, {
          text: "".concat(_this3.state.article[0].text),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 44
          },
          __self: this
        }));
      }));
    }
  }]);

  return Article;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

var ArticleHead = function ArticleHead(props) {
  return __jsx("div", {
    className: props.className,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: this
  }, __jsx("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: this
  }, __jsx("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: this
  }, props.name)));
};

var ArticleText = function ArticleText(props) {
  return __jsx("div", {
    className: props.className,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: this
  }, props.text);
};

/* harmony default export */ __webpack_exports__["default"] = (Article);

/***/ })

})
//# sourceMappingURL=[article].js.7f309d28f6ea48a5bec9.hot-update.js.map