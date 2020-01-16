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
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _Search_EditDir_EditDir__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../Search/EditDir/EditDir */ "./components/Search/EditDir/EditDir.js");





var _jsxFileName = "/home/oem/Documents/Development/Courswork/guitarchords/components/Articles/Article.jsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement;





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

      var dir = Object(_Search_EditDir_EditDir__WEBPACK_IMPORTED_MODULE_9__["default"])(window.location.pathname);
      axios__WEBPACK_IMPORTED_MODULE_7___default.a.get('http://localhost:3210/article', {
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
        className: "jsx-209279461" + " " + "articleText",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        },
        __self: this
      }, this.state.article.map(function (value) {
        return __jsx("div", {
          className: "jsx-209279461",
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
      }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a, {
        id: "209279461",
        __self: this
      }, "div.jsx-209279461{padding:10px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL29lbS9Eb2N1bWVudHMvRGV2ZWxvcG1lbnQvQ291cnN3b3JrL2d1aXRhcmNob3Jkcy9jb21wb25lbnRzL0FydGljbGVzL0FydGljbGUuanN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWdEd0MsQUFHZ0MsYUFDakIiLCJmaWxlIjoiL2hvbWUvb2VtL0RvY3VtZW50cy9EZXZlbG9wbWVudC9Db3Vyc3dvcmsvZ3VpdGFyY2hvcmRzL2NvbXBvbmVudHMvQXJ0aWNsZXMvQXJ0aWNsZS5qc3giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHtDb21wb25lbnQsIGNyZWF0ZUVsZW1lbnR9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBBeGlvcyBmcm9tICdheGlvcyc7XG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuaW1wb3J0IEVkaXREaXIgZnJvbSAnLi4vU2VhcmNoL0VkaXREaXIvRWRpdERpcic7XG5cblxuY2xhc3MgQXJ0aWNsZSBleHRlbmRzIENvbXBvbmVudHtcbiAgICAgIGNvbnN0cnVjdG9yKHByb3BzKXtcblxuICAgICAgICBzdXBlcihwcm9wcylcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIGFydGljbGU6IFtdXG4gICAgICAgIH1cbiAgICAgIH0gICAgIFxuICAgICAgXG4gICAgIFxuXG4gICAgICBjb21wb25lbnREaWRNb3VudCgpe1xuICAgICAgICB2YXIgZGlyID0gRWRpdERpcih3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUpO1xuXG4gICAgICAgIFxuICAgICAgICBBeGlvcy5nZXQoJ2h0dHA6Ly9sb2NhbGhvc3Q6MzIxMC9hcnRpY2xlJywge1xuICAgICAgICAgIHBhcmFtczoge1xuICAgICAgICAgICAgaWQ6IGRpclxuICAgICAgICAgICAgXG4gICAgICAgICAgfVxuICAgICAgICAgIFxuICAgICAgICB9KS50aGVuICgocmVzcG9uc2UpID0+IHsgXG4gICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7YXJ0aWNsZTogcmVzcG9uc2UuZGF0YX0pO1xuICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlLmRhdGEpXG4gICAgICAgIH0pOyAgIFxuICAgICAgfVxuICAgICAgcmVuZGVyKCl7XG4gICAgICAgIFxuICAgICAgIC8vIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXG4gICAgICAgIC8vY29uc3Qge2lkfSA9IHJvdXRlci5xdWVyeVxuICAgICAgcmV0dXJuKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZSA9IFwiYXJ0aWNsZVRleHRcIj4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuYXJ0aWNsZS5tYXAoKHZhbHVlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxBcnRpY2xlSGVhZCBuYW1lID0ge3RoaXMuc3RhdGUuYXJ0aWNsZVswXS5uYW1lfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPEFydGljbGVUZXh0IHRleHQgPSB7YCR7dGhpcy5zdGF0ZS5hcnRpY2xlWzBdLnRleHR9YH0vPlxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAgICAgZGl2e1xuICAgICAgICAgICAgICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgYH08L3N0eWxlPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgXG4gICAgICApO1xuICAgIH1cbiAgICBcbn1cbiAgXG5jb25zdCBBcnRpY2xlSGVhZCA9IHByb3BzID0+KFxuICAgIDxkaXYgY2xhc3NOYW1lID0ge3Byb3BzLmNsYXNzTmFtZX0+XG4gICAgICAgIDxzcGFuPjxoMT57cHJvcHMubmFtZX08L2gxPjwvc3Bhbj5cbiAgICA8L2Rpdj5cbik7XG5cbmNvbnN0IEFydGljbGVUZXh0ID0gcHJvcHMgPT4oXG4gIDxkaXYgY2xhc3NOYW1lID0ge3Byb3BzLmNsYXNzTmFtZX0+XG4gICAge3Byb3BzLnRleHR9XG4gIDwvZGl2PlxuKVxuXG5leHBvcnQgZGVmYXVsdCBBcnRpY2xlO1xuIl19 */\n/*@ sourceURL=/home/oem/Documents/Development/Courswork/guitarchords/components/Articles/Article.jsx */"));
    }
  }]);

  return Article;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);

var ArticleHead = function ArticleHead(props) {
  return __jsx("div", {
    className: props.className,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  }, __jsx("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: this
  }, __jsx("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: this
  }, props.name)));
};

var ArticleText = function ArticleText(props) {
  return __jsx("div", {
    className: props.className,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: this
  }, props.text);
};

/* harmony default export */ __webpack_exports__["default"] = (Article);

/***/ })

})
//# sourceMappingURL=[article].js.dd96b80a9d4ff4ded9ec.hot-update.js.map