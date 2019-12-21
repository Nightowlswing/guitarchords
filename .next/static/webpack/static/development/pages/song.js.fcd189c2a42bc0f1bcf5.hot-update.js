webpackHotUpdate("static/development/pages/song.js",{

/***/ "./components/Songs/Song.js":
/*!**********************************!*\
  !*** ./components/Songs/Song.js ***!
  \**********************************/
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
/* harmony import */ var _SongStyle_SongStyle_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./SongStyle/SongStyle.css */ "./components/Songs/SongStyle/SongStyle.css");
/* harmony import */ var _SongStyle_SongStyle_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_SongStyle_SongStyle_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_7__);





var _jsxFileName = "/home/oem/Documents/Development/Courswork/guitarchords/components/Songs/Song.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement;




var Song =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Song, _Component);

  function Song(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Song);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Song).call(this, props));
    _this.state = {
      tracks: []
    };
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Song, [{
    key: "GetProfiles",
    value: function GetProfiles() {
      var _this2 = this;

      console.log(this.state);
      axios__WEBPACK_IMPORTED_MODULE_7___default.a.get('http://localhost:3210/profile').then(function (response) {
        _this2.setState({
          tracks: response.data
        });
      });
      console.log(this.state.tracks);
    }
  }, {
    key: "render",
    value: function render() {
      return __jsx("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        },
        __self: this
      }, __jsx("button", {
        onClick: this.GetProfiles.bind(this),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        },
        __self: this
      }), this.state.tracks.map(function (value) {
        return __jsx(SongText // adress = {value.adress}
        , {
          text: value.text // avatar = {value.avatar}
          // email = {value.email}
          // id = {value.id}
          // name = {value.name}
          ,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 29
          },
          __self: this
        });
      }));
    }
  }]);

  return Song;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

var SongHead = function SongHead(props) {
  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }, __jsx("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }, __jsx("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }, props.compName), __jsx("h3", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }, props.name)), __jsx("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }, __jsx("h6", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }, "Capo: ", props.capo)), __jsx("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }, "----------------------------"));
};

var SongText = function SongText(props) {
  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }, props.text.map(function (value, index) {
    console.log(index);
    return __jsx(SongVerse, {
      verse: value,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 57
      },
      __self: this
    });
  }));
};

var SongVerse = function SongVerse(props) {
  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: this
  }, props.verse.map(function (value, index) {
    return __jsx(SongLine, {
      line: value,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 67
      },
      __self: this
    });
  }), __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: this
  }), __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: this
  }));
};

var SongLine = function SongLine(props) {
  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    },
    __self: this
  }, __jsx("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    },
    __self: this
  }, props.line.map(function (value, index) {
    return __jsx(WordBlock, {
      words: value.words,
      chord: value.chord,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 79
      },
      __self: this
    });
  })), __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84
    },
    __self: this
  }));
};

var WordBlock = function WordBlock(props) {
  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89
    },
    __self: this
  }, props.words, __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90
    },
    __self: this
  }), props.chord);
};

/* harmony default export */ __webpack_exports__["default"] = (Song);

/***/ })

})
//# sourceMappingURL=song.js.fcd189c2a42bc0f1bcf5.hot-update.js.map