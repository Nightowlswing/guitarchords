webpackHotUpdate("static/development/pages/SearchPages/[search].js",{

/***/ "./components/Header/Header.jsx":
/*!**************************************!*\
  !*** ./components/Header/Header.jsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _static_logo_png__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../static/logo.png */ "./static/logo.png");
/* harmony import */ var _static_logo_png__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_static_logo_png__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.min.css */ "./node_modules/bootstrap/dist/css/bootstrap.min.css");
/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _Styles_HeaderStyle_HeaderStyle_css__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../Styles/HeaderStyle/HeaderStyle.css */ "./Styles/HeaderStyle/HeaderStyle.css");
/* harmony import */ var _Styles_HeaderStyle_HeaderStyle_css__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_Styles_HeaderStyle_HeaderStyle_css__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _EditQuery_EditQuery__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./EditQuery/EditQuery */ "./components/Header/EditQuery/EditQuery.js");







var _jsxFileName = "/home/oem/Documents/Development/Courswork/guitarchords/components/Header/Header.jsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement;







var Header =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(Header, _Component);

  function Header(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Header);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Header).call(this, props));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "openSlideMenu", function (e) {
      // e.preventDefault();
      document.querySelector("#side-menu").style.width = "250px"; // document.querySelector("body").style.marginLeft = "250px";
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "closeSlideMenu", function (e) {
      // e.preventDefault();
      document.querySelector("#side-menu").style.width = "0px"; // document.querySelector("body").style.marginLeft = "0px";
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "handleChange", function (e) {
      e.preventDefault();
      var _e$target = e.target,
          name = _e$target.name,
          value = _e$target.value;

      if (value.length > 0 && value.length < 64) {
        _this.setState({
          Search: Object(_EditQuery_EditQuery__WEBPACK_IMPORTED_MODULE_13__["default"])(value)
        });
      } else {
        alert('Invalid search');
        document.querySelector('#search').value = '';
      } //console.log(this.state.Search);

    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "handleClick", function (e) {
      e.preventDefault();
      window.location.href = window.location.href;
    });

    _this.state = {
      Search: "",
      formErrors: {
        search: true
      }
    };
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Header, [{
    key: "render",
    value: function render() {
      return __jsx("div", {
        className: "jsx-2081448487",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        },
        __self: this
      }, __jsx("nav", {
        className: "jsx-2081448487" + " " + 'navbar',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        },
        __self: this
      }, __jsx("div", {
        className: "jsx-2081448487" + " " + 'container-fluid',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        },
        __self: this
      }, __jsx(SideMenu, {
        onClick: this.closeSlideMenu,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        },
        __self: this
      }), __jsx(Burger, {
        onClick: this.openSlideMenu,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        },
        __self: this
      }), __jsx(Menu, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        },
        __self: this
      }), __jsx(SearchBox, {
        onChange: this.handleChange,
        search: this.state.Search,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        },
        __self: this
      }))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a, {
        id: "2081448487",
        __self: this
      }, ".navbar.jsx-2081448487{background:#82A3A1;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL29lbS9Eb2N1bWVudHMvRGV2ZWxvcG1lbnQvQ291cnN3b3JrL2d1aXRhcmNob3Jkcy9jb21wb25lbnRzL0hlYWRlci9IZWFkZXIuanN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXFFNEIsQUFHNEMsbUJBQ3ZCIiwiZmlsZSI6Ii9ob21lL29lbS9Eb2N1bWVudHMvRGV2ZWxvcG1lbnQvQ291cnN3b3JrL2d1aXRhcmNob3Jkcy9jb21wb25lbnRzL0hlYWRlci9IZWFkZXIuanN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5pbXBvcnQgbG9nbyBmcm9tICcuLi8uLi9zdGF0aWMvbG9nby5wbmcnO1xuaW1wb3J0ICdib290c3RyYXAvZGlzdC9jc3MvYm9vdHN0cmFwLm1pbi5jc3MnO1xuaW1wb3J0ICcuLi8uLi9TdHlsZXMvSGVhZGVyU3R5bGUvSGVhZGVyU3R5bGUuY3NzJztcbmltcG9ydCBFZGl0UXVlcnkgZnJvbSAnLi9FZGl0UXVlcnkvRWRpdFF1ZXJ5JztcblxuXG5jbGFzcyBIZWFkZXIgZXh0ZW5kcyBDb21wb25lbnR7XG4gICAgY29uc3RydWN0b3IocHJvcHMpe1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICBTZWFyY2g6IFwiXCIsXG4gICAgICAgICAgICBmb3JtRXJyb3JzOntcbiAgICAgICAgICAgICAgICBzZWFyY2g6IHRydWVcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBvcGVuU2xpZGVNZW51ID0gZSA9PiB7XG4gICAgICAgIC8vIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNzaWRlLW1lbnVcIikuc3R5bGUud2lkdGggPSBcIjI1MHB4XCI7XG4gICAgICAgLy8gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJvZHlcIikuc3R5bGUubWFyZ2luTGVmdCA9IFwiMjUwcHhcIjtcbiAgICAgICAgXG4gICAgfVxuXG4gICAgY2xvc2VTbGlkZU1lbnUgPSBlID0+IHtcbiAgICAgICAgLy8gZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgIFxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3NpZGUtbWVudVwiKS5zdHlsZS53aWR0aCA9IFwiMHB4XCI7XG4gICAgICAgLy8gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJvZHlcIikuc3R5bGUubWFyZ2luTGVmdCA9IFwiMHB4XCI7XG4gICAgICAgIFxuICAgIH1cblxuXG4gICAgaGFuZGxlQ2hhbmdlID0gZSA9PntcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBjb25zdCB7bmFtZSwgdmFsdWV9ID0gZS50YXJnZXQ7XG4gICAgICAgIFxuICAgICAgICBpZih2YWx1ZS5sZW5ndGggPiAwICYmIHZhbHVlLmxlbmd0aCA8IDY0KVxuICAgICAgICB7dGhpcy5zZXRTdGF0ZSh7U2VhcmNoOiBFZGl0UXVlcnkodmFsdWUpfSk7fVxuICAgICAgICBlbHNle1xuICAgICAgICAgICAgYWxlcnQoJ0ludmFsaWQgc2VhcmNoJyk7XG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc2VhcmNoJykudmFsdWUgPSAnJztcbiAgICAgICAgfVxuICAgICAgICAvL2NvbnNvbGUubG9nKHRoaXMuc3RhdGUuU2VhcmNoKTtcbiAgICB9XG5cbiAgICBoYW5kbGVDbGljayA9IGUgPT57XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSB3aW5kb3cubG9jYXRpb24uaHJlZlxuICAgIH1cblxuICAgIHJlbmRlcigpe1xuICAgICAgICByZXR1cm4oXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIDxkaXYgPlxuICAgICAgICAgICAgICAgIDxuYXYgY2xhc3NOYW1lID0gJ25hdmJhcic+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lID0gJ2NvbnRhaW5lci1mbHVpZCc+XG4gICAgICAgICAgICAgICAgICAgIDxTaWRlTWVudSBvbkNsaWNrID0ge3RoaXMuY2xvc2VTbGlkZU1lbnV9Lz5cbiAgICAgICAgICAgICAgICAgICAgPEJ1cmdlciBvbkNsaWNrID0ge3RoaXMub3BlblNsaWRlTWVudX0vPlxuICAgICAgICAgICAgICAgICAgICA8TWVudS8+XG4gICAgICAgICAgICAgICAgICAgIHsvKiA8UmVmIGxpbmsgPSAnLi9hZGRzb25nJyB0ZXh0ID0gJ2FkZCBuZXcgc29uZycvPlxuICAgICAgICAgICAgICAgICAgICA8UmVmIGxpbmsgPSAnLi9sb2dpbicgdGV4dCA9ICdzaW5nIGluJy8+XG4gICAgICAgICAgICAgICAgICAgIDxSZWYgbGluayA9ICcuL3Npbmd1cCcgdGV4dCA9ICdzaW5nIHVwJy8+ICovfVxuICAgICAgICAgICAgICAgICAgICA8U2VhcmNoQm94IG9uQ2hhbmdlID0ge3RoaXMuaGFuZGxlQ2hhbmdlfSAgc2VhcmNoID0ge3RoaXMuc3RhdGUuU2VhcmNofSAvPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L25hdj5cblxuICAgICAgICAgICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAgICAgICAgICAgLm5hdmJhcntcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICM4MkEzQTE7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBgfTwvc3R5bGU+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cbmNvbnN0IFNpbmdlZE91dCA9IHByb3BzID0+KFxuICAgIDxkaXY+XG4gICAgICAgIDxSZWYgbGluayA9ICcuL2xvZ2luJyB0ZXh0ID0gJ3NpbmcgaW4nLz5cbiAgICAgICAgL1xuICAgICAgICA8UmVmIGxpbmsgPSAnLi9zaW5ndXAnIHRleHQgPSAnc2luZyB1cCcvPlxuICAgIDwvZGl2PlxuKTtcblxuY29uc3QgU2luZ091dCA9IHByb3BzID0+KFxuICAgIDxkaXY+XG4gICAgICAgIDxSZWYgbGluayA9ICcuL2FkZHNvbmcnIHRleHQgPSAnYWRkIG5ldyBzb25nJy8+XG4gICAgICAgIDxSZWYgbGluayA9ICcuL3Byb2ZpbGUnIHRleHQgPSAnc2luZyB1cCcvPlxuICAgICAgICA8UmVmIGxpbmsgPSAnLi8nIHRleHQgPSAnbG9nIG91dCcvPlxuICAgIDwvZGl2PlxuKTtcblxuY29uc3QgTG9nbyA9IHByb3BzID0+IChcbiAgICA8ZGl2IGNsYXNzTmFtZSA9ICcnPlxuICAgICAgICA8TGluayBocmVmID0gJyMnPlxuICAgICAgICAgICAgPGEgY2xhc3NOYW1lID0gJ25hdmJhci1icmFuZCc+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17bG9nb30gYWx0ID0gJ2xvZ28nLz5cbiAgICAgICAgICAgIDwvYT5cbiAgICAgICAgPC9MaW5rPlxuXG4gICAgICAgIFxuICAgIDwvZGl2PlxuKTtcblxuY29uc3QgTWVudUJ1dHRvbiA9IHByb3BzID0+KFxuICAgIDxMaW5rIGhyZWYgPSB7YCR7cHJvcHMuaHJlZn1gfT5cbiAgICAgICAgPGxpIGNsYXNzTmFtZSA9ICduYXYtaXRlbSc+PGEgY2xhc3NOYW1lID0gJ25hdi1saW5rJz57YCR7cHJvcHMubmFtZX1gfTwvYT48L2xpPiAgICBcbiAgICA8L0xpbms+XG4pO1xuXG5jb25zdCBNZW51ID0gcHJvcHMgPT4oXG4gICAgPHVsIGNsYXNzTmFtZSA9ICduYXYnPlxuICAgICAgICA8TWVudUJ1dHRvbiBuYW1lID0gJ0luZm8nIGhyZWYgPSAnLycvPlxuICAgICAgICA8TWVudUJ1dHRvbiBuYW1lID0gJ1NvbmdzJyBocmVmID0gJy9zb25ncycvPlxuICAgICAgICA8TWVudUJ1dHRvbiBuYW1lID0gJ0NvbXBvc2l0b3JzJyBocmVmID0gJy9Db21wUGFnZXMvY29tcHMnLz5cbiAgICAgICAgey8qIDxNZW51QnV0dG9uIG5hbWUgPSAnQ2hvcmRzJyBocmVmID0gJyMnLz4gKi99XG4gICAgICAgIDxNZW51QnV0dG9uIG5hbWUgPSAnQXJ0aWNsZXMnIGhyZWYgPSAnL0FydGljbGVzL2FydGljbGVzJy8+XG4gICAgICAgIDxNZW51QnV0dG9uIG5hbWUgPSAnU2luZyBpbicgaHJlZiA9ICcvbG9naW4nLz5cbiAgICAgICAgPE1lbnVCdXR0b24gbmFtZSA9ICdTaW5nIHVwJyBocmVmID0gJy9zaW5ndXAnIC8+XG4gICAgPC91bD5cblxuICAgIFxuKTtcblxuY29uc3QgU2VhcmNoQm94ID0gcHJvcHMgPT4oXG4gICAgPGRpdiBjbGFzc05hbWU9XCJzZWFyY2hCb3hcIj5cbiAgICAgICAgXG4gICAgICAgIDxkaXYgaWQgPSAnZ3JvdXAnIGNsYXNzTmFtZT1cImlucHV0LWdyb3VwXCI+IFxuICAgICAgICAgICAgPGlucHV0IGlkID0gJ3NlYXJjaCcgb25DaGFuZ2UgPSB7cHJvcHMub25DaGFuZ2V9IHR5cGU9XCJ0ZXh0XCIgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgbmFtZT1cInhcIiBwbGFjZWhvbGRlcj1cIlNlYXJjaFwiLz5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImlucHV0LWdyb3VwLWJ0blwiPlxuICAgICAgICAgICAgICAgIDxidXR0b24gIGNsYXNzTmFtZSA9ICdzZWFyY2hCdXR0b24nIHR5cGU9XCJidXR0b25cIiA+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImdseXBoaWNvbiBnbHlwaGljb24tc2VhcmNoXCI+PC9zcGFuPiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9Jy9TZWFyY2hQYWdlcy9bc2VhcmNoXScgYXMgPSB7YC9TZWFyY2hQYWdlcy8ke3Byb3BzLnNlYXJjaH1gfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxhPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lID0gJy5sb2dvJyBzcmMgPSAnLi4vLi4vc3RhdGljL3NlYXJjaC5wbmcnIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgPC9kaXY+IFxuICAgIDwvZGl2PlxuXG4pO1xuXG5cblxuY29uc3QgQnVyZ2VyID0gcHJvcHMgPT4oXG4gICAgPHNwYW4gY2xhc3NOYW1lID1cIm9wZW4tc2xpZGVcIj5cbiAgICAgICAgPGEgaHJlZj1cIiNcIiBvbkNsaWNrID0ge3Byb3BzLm9uQ2xpY2t9PlxuICAgICAgICAgICAgPHN2ZyB3aWR0aCA9IFwiMzBcIiBoZWlnaHQgPSBcIjMwXCI+XG4gICAgICAgICAgICAgICAgPHBhdGggZCA9IFwiTTAsIDUsIDMwLCA1XCIgc3Ryb2tlID0gXCIjZmZmXCIgc3Ryb2tlV2lkdGg9XCI1XCIvPlxuICAgICAgICAgICAgICAgIDxwYXRoIGQgPSBcIk0wLCAxNCwgMzAsIDE0XCIgc3Ryb2tlID0gXCIjZmZmXCIgc3Ryb2tlV2lkdGg9XCI1XCIvPlxuICAgICAgICAgICAgICAgIDxwYXRoIGQgPSBcIk0wLCAyMywgMzAsIDIzXCIgc3Ryb2tlID0gXCIjZmZmXCIgc3Ryb2tlV2lkdGg9XCI1XCIvPlxuICAgICAgICAgICAgPC9zdmc+XG4gICAgICAgIDwvYT5cbiAgICA8L3NwYW4+XG4gICAgXG4pO1xuXG5jb25zdCBTaWRlTWVudSA9IHByb3BzID0+KFxuICAgIDxkaXYgaWQgPSBcInNpZGUtbWVudVwiIGNsYXNzTmFtZSA9IFwic2lkZS1uYXZcIj5cbiAgICAgICAgPGEgaHJlZj1cIiNcIiBjbGFzc05hbWUgPSBcImJ0bi1jbG9zZVwiIG9uQ2xpY2sgPSB7cHJvcHMub25DbGlja30+JnRpbWVzOzwvYT5cbiAgICAgICAgPE1lbnVCdXR0b24gbmFtZSA9ICdJbmZvJyBocmVmID0gJy8nLz5cbiAgICAgICAgPE1lbnVCdXR0b24gbmFtZSA9ICdTb25ncycgaHJlZiA9ICcvc29uZ3MnLz5cbiAgICAgICAgPE1lbnVCdXR0b24gbmFtZSA9ICdDb21wb3NpdG9ycycgaHJlZiA9ICcvQ29tcFBhZ2VzL2NvbXBzJy8+XG4gICAgICAgIDxNZW51QnV0dG9uIG5hbWUgPSAnQXJ0aWNsZXMnIGhyZWYgPSAnL0FydGljbGVzL2FydGljbGVzJy8+XG4gICAgICAgIDxNZW51QnV0dG9uIG5hbWUgPSAnU2luZyBpbicgaHJlZiA9ICcvbG9naW4nLz5cbiAgICAgICAgPE1lbnVCdXR0b24gbmFtZSA9ICdTaW5nIHVwJyBocmVmID0gJy9zaW5ndXAnIC8+XG4gICAgPC9kaXY+XG4pO1xuXG5jb25zdCBSZWYgPSBwcm9wcyA9PihcbiAgICA8TGluayBocmVmID0ge2AvJHtwcm9wcy5saW5rfWB9PlxuICAgICAgICA8YT57cHJvcHMudGV4dH08L2E+XG4gICAgPC9MaW5rPlxuKVxuXG5cbmV4cG9ydCBkZWZhdWx0IEhlYWRlcjtcblxuXG4iXX0= */\n/*@ sourceURL=/home/oem/Documents/Development/Courswork/guitarchords/components/Header/Header.jsx */"));
    }
  }]);

  return Header;
}(react__WEBPACK_IMPORTED_MODULE_8__["Component"]);

var SingedOut = function SingedOut(props) {
  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81
    },
    __self: this
  }, __jsx(Ref, {
    link: "./login",
    text: "sing in",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82
    },
    __self: this
  }), "/", __jsx(Ref, {
    link: "./singup",
    text: "sing up",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84
    },
    __self: this
  }));
};

var SingOut = function SingOut(props) {
  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89
    },
    __self: this
  }, __jsx(Ref, {
    link: "./addsong",
    text: "add new song",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90
    },
    __self: this
  }), __jsx(Ref, {
    link: "./profile",
    text: "sing up",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91
    },
    __self: this
  }), __jsx(Ref, {
    link: "./",
    text: "log out",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92
    },
    __self: this
  }));
};

var Logo = function Logo(props) {
  return __jsx("div", {
    className: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97
    },
    __self: this
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
    href: "#",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98
    },
    __self: this
  }, __jsx("a", {
    className: "navbar-brand",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99
    },
    __self: this
  }, __jsx("img", {
    src: _static_logo_png__WEBPACK_IMPORTED_MODULE_10___default.a,
    alt: "logo",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100
    },
    __self: this
  }))));
};

var MenuButton = function MenuButton(props) {
  return __jsx(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
    href: "".concat(props.href),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109
    },
    __self: this
  }, __jsx("li", {
    className: "nav-item",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110
    },
    __self: this
  }, __jsx("a", {
    className: "nav-link",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110
    },
    __self: this
  }, "".concat(props.name))));
};

var Menu = function Menu(props) {
  return __jsx("ul", {
    className: "nav",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115
    },
    __self: this
  }, __jsx(MenuButton, {
    name: "Info",
    href: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116
    },
    __self: this
  }), __jsx(MenuButton, {
    name: "Songs",
    href: "/songs",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117
    },
    __self: this
  }), __jsx(MenuButton, {
    name: "Compositors",
    href: "/CompPages/comps",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118
    },
    __self: this
  }), __jsx(MenuButton, {
    name: "Articles",
    href: "/Articles/articles",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120
    },
    __self: this
  }), __jsx(MenuButton, {
    name: "Sing in",
    href: "/login",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121
    },
    __self: this
  }), __jsx(MenuButton, {
    name: "Sing up",
    href: "/singup",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122
    },
    __self: this
  }));
};

var SearchBox = function SearchBox(props) {
  return __jsx("div", {
    className: "searchBox",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129
    },
    __self: this
  }, __jsx("div", {
    id: "group",
    className: "input-group",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131
    },
    __self: this
  }, __jsx("input", {
    id: "search",
    onChange: props.onChange,
    type: "text",
    className: "form-control",
    name: "x",
    placeholder: "Search",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132
    },
    __self: this
  }), __jsx("span", {
    className: "input-group-btn",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133
    },
    __self: this
  }, __jsx("button", {
    className: "searchButton",
    type: "button",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134
    },
    __self: this
  }, __jsx("span", {
    className: "glyphicon glyphicon-search",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135
    },
    __self: this
  }), __jsx(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
    href: "/SearchPages/[search]",
    as: "/SearchPages/".concat(props.search),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136
    },
    __self: this
  }, __jsx("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137
    },
    __self: this
  }, __jsx("img", {
    className: ".logo",
    src: "../../static/search.png",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138
    },
    __self: this
  })))))));
};

var Burger = function Burger(props) {
  return __jsx("span", {
    className: "open-slide",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 151
    },
    __self: this
  }, __jsx("a", {
    href: "#",
    onClick: props.onClick,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 152
    },
    __self: this
  }, __jsx("svg", {
    width: "30",
    height: "30",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 153
    },
    __self: this
  }, __jsx("path", {
    d: "M0, 5, 30, 5",
    stroke: "#fff",
    strokeWidth: "5",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 154
    },
    __self: this
  }), __jsx("path", {
    d: "M0, 14, 30, 14",
    stroke: "#fff",
    strokeWidth: "5",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 155
    },
    __self: this
  }), __jsx("path", {
    d: "M0, 23, 30, 23",
    stroke: "#fff",
    strokeWidth: "5",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 156
    },
    __self: this
  }))));
};

var SideMenu = function SideMenu(props) {
  return __jsx("div", {
    id: "side-menu",
    className: "side-nav",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 164
    },
    __self: this
  }, __jsx("a", {
    href: "#",
    className: "btn-close",
    onClick: props.onClick,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 165
    },
    __self: this
  }, "\xD7"), __jsx(MenuButton, {
    name: "Info",
    href: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 166
    },
    __self: this
  }), __jsx(MenuButton, {
    name: "Songs",
    href: "/songs",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 167
    },
    __self: this
  }), __jsx(MenuButton, {
    name: "Compositors",
    href: "/CompPages/comps",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 168
    },
    __self: this
  }), __jsx(MenuButton, {
    name: "Articles",
    href: "/Articles/articles",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 169
    },
    __self: this
  }), __jsx(MenuButton, {
    name: "Sing in",
    href: "/login",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 170
    },
    __self: this
  }), __jsx(MenuButton, {
    name: "Sing up",
    href: "/singup",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 171
    },
    __self: this
  }));
};

var Ref = function Ref(props) {
  return __jsx(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
    href: "/".concat(props.link),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 176
    },
    __self: this
  }, __jsx("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 177
    },
    __self: this
  }, props.text));
};

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ })

})
//# sourceMappingURL=[search].js.f1d17bd7f3bd4b8e034e.hot-update.js.map