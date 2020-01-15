webpackHotUpdate("static/development/pages/SearchPages/[search].js",{

/***/ "./components/Search/SearchResults.jsx":
/*!*********************************************!*\
  !*** ./components/Search/SearchResults.jsx ***!
  \*********************************************/
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
/* harmony import */ var _EditDir_EditDir__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./EditDir/EditDir */ "./components/Search/EditDir/EditDir.js");
/* harmony import */ var _Articles_ArticleCut_ArticleCut__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../Articles/ArticleCut/ArticleCut */ "./components/Articles/ArticleCut/ArticleCut.js");
/* harmony import */ var _Styles_SearchStyle_SearchResault_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../Styles/SearchStyle/SearchResault.css */ "./Styles/SearchStyle/SearchResault.css");
/* harmony import */ var _Styles_SearchStyle_SearchResault_css__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_Styles_SearchStyle_SearchResault_css__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _Styles_global_css__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../Styles/global.css */ "./Styles/global.css");
/* harmony import */ var _Styles_global_css__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_Styles_global_css__WEBPACK_IMPORTED_MODULE_11__);





var _jsxFileName = "/home/oem/Documents/Development/Courswork/guitarchords/components/Search/SearchResults.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement;
 //import '../../Styles/SongStyle/SongStyle.css';








var SearchResault =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(SearchResault, _Component);

  function SearchResault(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, SearchResault);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(SearchResault).call(this, props));
    _this.state = {
      compositors: [],
      songs: [],
      articles: [],
      Compositors: false,
      Songs: false,
      Articles: false
    };
    return _this;
  } // handleClick = e =>{
  //     e.preventDefault();
  //     const {name, value} = e.target;
  //     if(this.state.name){
  //         e.target.style.backgroundColor = '#60f78a';
  //         this.setState({name: false})
  //         document.getElementById(name).style.display = 'none';
  //     }
  //     else{
  //         e.target.style.backgroundColor = '#8fffae';
  //         this.setState({name: true})
  //         document.getElementById(name).style.display = 'block';
  //     }
  // }


  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(SearchResault, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      var dir = Object(_EditDir_EditDir__WEBPACK_IMPORTED_MODULE_8__["default"])(window.location.pathname);
      alert('h');
      axios__WEBPACK_IMPORTED_MODULE_6___default.a.get('http://localhost:3210/searchC', {
        params: {
          Q: dir
        }
      }).then(function (response) {
        _this2.setState({
          compositors: response.data
        });
      });
      axios__WEBPACK_IMPORTED_MODULE_6___default.a.get('http://localhost:3210/searchS', {
        params: {
          Q: dir
        }
      }).then(function (response) {
        _this2.setState({
          songs: response.data
        });
      });
      axios__WEBPACK_IMPORTED_MODULE_6___default.a.get('http://localhost:3210/searchA', {
        params: {
          Q: dir
        }
      }).then(function (response) {
        _this2.setState({
          articles: response.data
        });
      });
    }
  }, {
    key: "render",
    value: function render() {
      return __jsx("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        },
        __self: this
      }, __jsx("div", {
        className: "LightDiv",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        },
        __self: this
      }, __jsx("div", {
        id: "Compositors",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        },
        __self: this
      }, __jsx("ul", {
        className: "searchResults",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        },
        __self: this
      }, this.state.compositors.map(function (value) {
        return __jsx(CompRef, {
          id: value.id,
          cname: value.cname,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 59
          },
          __self: this
        });
      }))), __jsx("div", {
        id: "Songs",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        },
        __self: this
      }, __jsx("ul", {
        className: "searchResults",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        },
        __self: this
      }, this.state.songs.map(function (value) {
        return __jsx(SongRef, {
          id: value.id,
          name: value.name,
          cname: value.cname,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 72
          },
          __self: this
        });
      }))), __jsx("div", {
        id: "Articles",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81
        },
        __self: this
      }, __jsx("ul", {
        className: "searchResults",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 82
        },
        __self: this
      }, this.state.articles.map(function (value) {
        return __jsx(ArticleRef, {
          id: value.id,
          name: value.name,
          text: value.text,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 85
          },
          __self: this
        });
      })))));
    }
  }]);

  return SearchResault;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

var Button = function Button(props) {
  return __jsx("div", {
    className: "".concat(props.divclassname),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105
    },
    __self: this
  }, __jsx("button", {
    name: "".concat(props.name),
    className: "".concat(props.buttonclassname),
    type: "".concat(props.type),
    onClick: props.onClick,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106
    },
    __self: this
  }, props.name));
};

var CompRef = function CompRef(props) {
  return __jsx(next_link__WEBPACK_IMPORTED_MODULE_7___default.a, {
    href: "/CompPages/[comp]",
    as: "/CompPages/".concat(props.id),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111
    },
    __self: this
  }, __jsx("li", {
    className: "searchResult",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112
    },
    __self: this
  }, __jsx("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112
    },
    __self: this
  }, __jsx("i", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112
    },
    __self: this
  }, "Compositor:"), " ", props.cname)));
};

var SongRef = function SongRef(props) {
  return __jsx(next_link__WEBPACK_IMPORTED_MODULE_7___default.a, {
    href: "/[song]/",
    as: "/".concat(props.id),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117
    },
    __self: this
  }, __jsx("li", {
    className: "searchResult",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118
    },
    __self: this
  }, __jsx("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118
    },
    __self: this
  }, __jsx("i", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118
    },
    __self: this
  }, "Song:"), " ", props.name)));
};

var ArticleRef = function ArticleRef(props) {
  return __jsx("div", {
    className: "articleBlock",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123
    },
    __self: this
  }, __jsx("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124
    },
    __self: this
  }, __jsx("h6", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125
    },
    __self: this
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_7___default.a, {
    href: "/Articles/[article]",
    as: "/Articles/".concat(props.id),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126
    },
    __self: this
  }, __jsx("li", {
    className: "searchResult headLine",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127
    },
    __self: this
  }, __jsx("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127
    },
    __self: this
  }, " ", __jsx("i", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127
    },
    __self: this
  }, "Article:"), " ", props.name))))), __jsx("div", {
    className: "subResaults",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131
    },
    __self: this
  }, Object(_Articles_ArticleCut_ArticleCut__WEBPACK_IMPORTED_MODULE_9__["default"])(props.text)));
};

/* harmony default export */ __webpack_exports__["default"] = (SearchResault);

/***/ })

})
//# sourceMappingURL=[search].js.33f2c2ef8f069669a378.hot-update.js.map