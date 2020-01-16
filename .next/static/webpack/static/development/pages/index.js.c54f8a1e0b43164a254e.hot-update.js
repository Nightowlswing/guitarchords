webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Header/EditQuery/EditQuery.js":
/*!**************************************************!*\
  !*** ./components/Header/EditQuery/EditQuery.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return EditQuery; });
function EditQuery(query) {
  return query.replace(/ /g, "_").replace(/'/g, "");
}

/***/ }),

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
        alert('Invalid search data');
        document.querySelector('#search').value = '';
      } //console.log(this.state.Search);

    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "handleClick", function (e) {
      e.preventDefault();
      window.location.href = '/SearchPages/' + _this.Search;
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
        onClick: this.onClick,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        },
        __self: this
      }))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a, {
        id: "2081448487",
        __self: this
      }, ".navbar.jsx-2081448487{background:#82A3A1;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL29lbS9Eb2N1bWVudHMvRGV2ZWxvcG1lbnQvQ291cnN3b3JrL2d1aXRhcmNob3Jkcy9jb21wb25lbnRzL0hlYWRlci9IZWFkZXIuanN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXFFNEIsQUFHNEMsbUJBQ3ZCIiwiZmlsZSI6Ii9ob21lL29lbS9Eb2N1bWVudHMvRGV2ZWxvcG1lbnQvQ291cnN3b3JrL2d1aXRhcmNob3Jkcy9jb21wb25lbnRzL0hlYWRlci9IZWFkZXIuanN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5pbXBvcnQgbG9nbyBmcm9tICcuLi8uLi9zdGF0aWMvbG9nby5wbmcnO1xuaW1wb3J0ICdib290c3RyYXAvZGlzdC9jc3MvYm9vdHN0cmFwLm1pbi5jc3MnO1xuaW1wb3J0ICcuLi8uLi9TdHlsZXMvSGVhZGVyU3R5bGUvSGVhZGVyU3R5bGUuY3NzJztcbmltcG9ydCBFZGl0UXVlcnkgZnJvbSAnLi9FZGl0UXVlcnkvRWRpdFF1ZXJ5JztcblxuXG5jbGFzcyBIZWFkZXIgZXh0ZW5kcyBDb21wb25lbnR7XG4gICAgY29uc3RydWN0b3IocHJvcHMpe1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICBTZWFyY2g6IFwiXCIsXG4gICAgICAgICAgICBmb3JtRXJyb3JzOntcbiAgICAgICAgICAgICAgICBzZWFyY2g6IHRydWVcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBvcGVuU2xpZGVNZW51ID0gZSA9PiB7XG4gICAgICAgIC8vIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNzaWRlLW1lbnVcIikuc3R5bGUud2lkdGggPSBcIjI1MHB4XCI7XG4gICAgICAgLy8gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJvZHlcIikuc3R5bGUubWFyZ2luTGVmdCA9IFwiMjUwcHhcIjtcbiAgICAgICAgXG4gICAgfVxuXG4gICAgY2xvc2VTbGlkZU1lbnUgPSBlID0+IHtcbiAgICAgICAgLy8gZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgIFxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3NpZGUtbWVudVwiKS5zdHlsZS53aWR0aCA9IFwiMHB4XCI7XG4gICAgICAgLy8gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJvZHlcIikuc3R5bGUubWFyZ2luTGVmdCA9IFwiMHB4XCI7XG4gICAgICAgIFxuICAgIH1cblxuXG4gICAgaGFuZGxlQ2hhbmdlID0gZSA9PntcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBjb25zdCB7bmFtZSwgdmFsdWV9ID0gZS50YXJnZXQ7XG4gICAgICAgIFxuICAgICAgICBpZih2YWx1ZS5sZW5ndGggPiAwICYmIHZhbHVlLmxlbmd0aCA8IDY0KVxuICAgICAgICB7dGhpcy5zZXRTdGF0ZSh7U2VhcmNoOiBFZGl0UXVlcnkodmFsdWUpfSk7fVxuICAgICAgICBlbHNle1xuICAgICAgICAgICAgYWxlcnQoJ0ludmFsaWQgc2VhcmNoIGRhdGEnKTtcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzZWFyY2gnKS52YWx1ZSA9ICcnO1xuICAgICAgICB9XG4gICAgICAgIC8vY29uc29sZS5sb2codGhpcy5zdGF0ZS5TZWFyY2gpO1xuICAgIH1cblxuICAgIGhhbmRsZUNsaWNrID0gZSA9PntcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9ICcvU2VhcmNoUGFnZXMvJyArIHRoaXMuU2VhcmNoO1xuICAgIH1cblxuICAgIHJlbmRlcigpe1xuICAgICAgICByZXR1cm4oXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIDxkaXYgPlxuICAgICAgICAgICAgICAgIDxuYXYgY2xhc3NOYW1lID0gJ25hdmJhcic+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lID0gJ2NvbnRhaW5lci1mbHVpZCc+XG4gICAgICAgICAgICAgICAgICAgIDxTaWRlTWVudSBvbkNsaWNrID0ge3RoaXMuY2xvc2VTbGlkZU1lbnV9Lz5cbiAgICAgICAgICAgICAgICAgICAgPEJ1cmdlciBvbkNsaWNrID0ge3RoaXMub3BlblNsaWRlTWVudX0vPlxuICAgICAgICAgICAgICAgICAgICA8TWVudS8+XG4gICAgICAgICAgICAgICAgICAgIHsvKiA8UmVmIGxpbmsgPSAnLi9hZGRzb25nJyB0ZXh0ID0gJ2FkZCBuZXcgc29uZycvPlxuICAgICAgICAgICAgICAgICAgICA8UmVmIGxpbmsgPSAnLi9sb2dpbicgdGV4dCA9ICdzaW5nIGluJy8+XG4gICAgICAgICAgICAgICAgICAgIDxSZWYgbGluayA9ICcuL3Npbmd1cCcgdGV4dCA9ICdzaW5nIHVwJy8+ICovfVxuICAgICAgICAgICAgICAgICAgICA8U2VhcmNoQm94IG9uQ2hhbmdlID0ge3RoaXMuaGFuZGxlQ2hhbmdlfSAgc2VhcmNoID0ge3RoaXMuc3RhdGUuU2VhcmNofSBvbkNsaWNrID0ge3RoaXMub25DbGlja30vPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L25hdj5cblxuICAgICAgICAgICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAgICAgICAgICAgLm5hdmJhcntcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICM4MkEzQTE7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBgfTwvc3R5bGU+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cbmNvbnN0IFNpbmdlZE91dCA9IHByb3BzID0+KFxuICAgIDxkaXY+XG4gICAgICAgIDxSZWYgbGluayA9ICcuL2xvZ2luJyB0ZXh0ID0gJ3NpbmcgaW4nLz5cbiAgICAgICAgL1xuICAgICAgICA8UmVmIGxpbmsgPSAnLi9zaW5ndXAnIHRleHQgPSAnc2luZyB1cCcvPlxuICAgIDwvZGl2PlxuKTtcblxuY29uc3QgU2luZ091dCA9IHByb3BzID0+KFxuICAgIDxkaXY+XG4gICAgICAgIDxSZWYgbGluayA9ICcuL2FkZHNvbmcnIHRleHQgPSAnYWRkIG5ldyBzb25nJy8+XG4gICAgICAgIDxSZWYgbGluayA9ICcuL3Byb2ZpbGUnIHRleHQgPSAnc2luZyB1cCcvPlxuICAgICAgICA8UmVmIGxpbmsgPSAnLi8nIHRleHQgPSAnbG9nIG91dCcvPlxuICAgIDwvZGl2PlxuKTtcblxuY29uc3QgTG9nbyA9IHByb3BzID0+IChcbiAgICA8ZGl2IGNsYXNzTmFtZSA9ICcnPlxuICAgICAgICA8TGluayBocmVmID0gJyMnPlxuICAgICAgICAgICAgPGEgY2xhc3NOYW1lID0gJ25hdmJhci1icmFuZCc+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17bG9nb30gYWx0ID0gJ2xvZ28nLz5cbiAgICAgICAgICAgIDwvYT5cbiAgICAgICAgPC9MaW5rPlxuXG4gICAgICAgIFxuICAgIDwvZGl2PlxuKTtcblxuY29uc3QgTWVudUJ1dHRvbiA9IHByb3BzID0+KFxuICAgIDxMaW5rIGhyZWYgPSB7YCR7cHJvcHMuaHJlZn1gfT5cbiAgICAgICAgPGxpIGNsYXNzTmFtZSA9ICduYXYtaXRlbSc+PGEgY2xhc3NOYW1lID0gJ25hdi1saW5rJz57YCR7cHJvcHMubmFtZX1gfTwvYT48L2xpPiAgICBcbiAgICA8L0xpbms+XG4pO1xuXG5jb25zdCBNZW51ID0gcHJvcHMgPT4oXG4gICAgPHVsIGNsYXNzTmFtZSA9ICduYXYnPlxuICAgICAgICA8TWVudUJ1dHRvbiBuYW1lID0gJ0luZm8nIGhyZWYgPSAnLycvPlxuICAgICAgICA8TWVudUJ1dHRvbiBuYW1lID0gJ1NvbmdzJyBocmVmID0gJy9zb25ncycvPlxuICAgICAgICA8TWVudUJ1dHRvbiBuYW1lID0gJ0NvbXBvc2l0b3JzJyBocmVmID0gJy9Db21wUGFnZXMvY29tcHMnLz5cbiAgICAgICAgey8qIDxNZW51QnV0dG9uIG5hbWUgPSAnQ2hvcmRzJyBocmVmID0gJyMnLz4gKi99XG4gICAgICAgIDxNZW51QnV0dG9uIG5hbWUgPSAnQXJ0aWNsZXMnIGhyZWYgPSAnL0FydGljbGVzL2FydGljbGVzJy8+XG4gICAgICAgIHsvKiA8TWVudUJ1dHRvbiBuYW1lID0gJ1NpbmcgaW4nIGhyZWYgPSAnL2xvZ2luJy8+XG4gICAgICAgIDxNZW51QnV0dG9uIG5hbWUgPSAnU2luZyB1cCcgaHJlZiA9ICcvc2luZ3VwJyAvPiAqL31cbiAgICA8L3VsPlxuXG4gICAgXG4pO1xuXG5jb25zdCBTZWFyY2hCb3ggPSBwcm9wcyA9PihcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInNlYXJjaEJveFwiPlxuICAgICAgICBcbiAgICAgICAgPGRpdiBpZCA9ICdncm91cCcgY2xhc3NOYW1lPVwiaW5wdXQtZ3JvdXBcIj4gXG4gICAgICAgICAgICA8aW5wdXQgaWQgPSAnc2VhcmNoJyBvbkNoYW5nZSA9IHtwcm9wcy5vbkNoYW5nZX0gdHlwZT1cInRleHRcIiBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiBuYW1lPVwieFwiIHBsYWNlaG9sZGVyPVwiU2VhcmNoXCIvPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaW5wdXQtZ3JvdXAtYnRuXCI+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiAgY2xhc3NOYW1lID0gJ3NlYXJjaEJ1dHRvbicgdHlwZT1cImJ1dHRvblwiIG9uQ2xpY2sgPSB7cHJvcHMub25DbGlja30+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImdseXBoaWNvbiBnbHlwaGljb24tc2VhcmNoXCI+PC9zcGFuPiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIHsvKiA8TGluayBocmVmPScvU2VhcmNoUGFnZXMvW3NlYXJjaF0nIGFzID0ge2AvU2VhcmNoUGFnZXMvJHtwcm9wcy5zZWFyY2h9YH0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZSA9ICcubG9nbycgc3JjID0gJy4uLy4uL3N0YXRpYy9zZWFyY2gucG5nJyAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICA8L0xpbms+ICovfVxuICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZSA9ICcubG9nbycgc3JjID0gJy4uLy4uL3N0YXRpYy9zZWFyY2gucG5nJyAvPlxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICA8L2Rpdj4gXG4gICAgPC9kaXY+XG5cbik7XG5cblxuXG5jb25zdCBCdXJnZXIgPSBwcm9wcyA9PihcbiAgICA8c3BhbiBjbGFzc05hbWUgPVwib3Blbi1zbGlkZVwiPlxuICAgICAgICA8YSBocmVmPVwiI1wiIG9uQ2xpY2sgPSB7cHJvcHMub25DbGlja30+XG4gICAgICAgICAgICA8c3ZnIHdpZHRoID0gXCIzMFwiIGhlaWdodCA9IFwiMzBcIj5cbiAgICAgICAgICAgICAgICA8cGF0aCBkID0gXCJNMCwgNSwgMzAsIDVcIiBzdHJva2UgPSBcIiNmZmZcIiBzdHJva2VXaWR0aD1cIjVcIi8+XG4gICAgICAgICAgICAgICAgPHBhdGggZCA9IFwiTTAsIDE0LCAzMCwgMTRcIiBzdHJva2UgPSBcIiNmZmZcIiBzdHJva2VXaWR0aD1cIjVcIi8+XG4gICAgICAgICAgICAgICAgPHBhdGggZCA9IFwiTTAsIDIzLCAzMCwgMjNcIiBzdHJva2UgPSBcIiNmZmZcIiBzdHJva2VXaWR0aD1cIjVcIi8+XG4gICAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgPC9hPlxuICAgIDwvc3Bhbj5cbiAgICBcbik7XG5cbmNvbnN0IFNpZGVNZW51ID0gcHJvcHMgPT4oXG4gICAgPGRpdiBpZCA9IFwic2lkZS1tZW51XCIgY2xhc3NOYW1lID0gXCJzaWRlLW5hdlwiPlxuICAgICAgICA8YSBocmVmPVwiI1wiIGNsYXNzTmFtZSA9IFwiYnRuLWNsb3NlXCIgb25DbGljayA9IHtwcm9wcy5vbkNsaWNrfT4mdGltZXM7PC9hPlxuICAgICAgICA8TWVudUJ1dHRvbiBuYW1lID0gJ0luZm8nIGhyZWYgPSAnLycvPlxuICAgICAgICA8TWVudUJ1dHRvbiBuYW1lID0gJ1NvbmdzJyBocmVmID0gJy9zb25ncycvPlxuICAgICAgICA8TWVudUJ1dHRvbiBuYW1lID0gJ0NvbXBvc2l0b3JzJyBocmVmID0gJy9Db21wUGFnZXMvY29tcHMnLz5cbiAgICAgICAgPE1lbnVCdXR0b24gbmFtZSA9ICdBcnRpY2xlcycgaHJlZiA9ICcvQXJ0aWNsZXMvYXJ0aWNsZXMnLz5cbiAgICAgICAgey8qIDxNZW51QnV0dG9uIG5hbWUgPSAnU2luZyBpbicgaHJlZiA9ICcvbG9naW4nLz5cbiAgICAgICAgPE1lbnVCdXR0b24gbmFtZSA9ICdTaW5nIHVwJyBocmVmID0gJy9zaW5ndXAnIC8+ICovfVxuICAgIDwvZGl2PlxuKTtcblxuY29uc3QgUmVmID0gcHJvcHMgPT4oXG4gICAgPExpbmsgaHJlZiA9IHtgLyR7cHJvcHMubGlua31gfT5cbiAgICAgICAgPGE+e3Byb3BzLnRleHR9PC9hPlxuICAgIDwvTGluaz5cbilcblxuXG5leHBvcnQgZGVmYXVsdCBIZWFkZXI7XG5cblxuIl19 */\n/*@ sourceURL=/home/oem/Documents/Development/Courswork/guitarchords/components/Header/Header.jsx */"));
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
    onClick: props.onClick,
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
  }), __jsx("img", {
    className: ".logo",
    src: "../../static/search.png",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141
    },
    __self: this
  })))));
};

var Burger = function Burger(props) {
  return __jsx("span", {
    className: "open-slide",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 152
    },
    __self: this
  }, __jsx("a", {
    href: "#",
    onClick: props.onClick,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 153
    },
    __self: this
  }, __jsx("svg", {
    width: "30",
    height: "30",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 154
    },
    __self: this
  }, __jsx("path", {
    d: "M0, 5, 30, 5",
    stroke: "#fff",
    strokeWidth: "5",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 155
    },
    __self: this
  }), __jsx("path", {
    d: "M0, 14, 30, 14",
    stroke: "#fff",
    strokeWidth: "5",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 156
    },
    __self: this
  }), __jsx("path", {
    d: "M0, 23, 30, 23",
    stroke: "#fff",
    strokeWidth: "5",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 157
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
      lineNumber: 165
    },
    __self: this
  }, __jsx("a", {
    href: "#",
    className: "btn-close",
    onClick: props.onClick,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 166
    },
    __self: this
  }, "\xD7"), __jsx(MenuButton, {
    name: "Info",
    href: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 167
    },
    __self: this
  }), __jsx(MenuButton, {
    name: "Songs",
    href: "/songs",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 168
    },
    __self: this
  }), __jsx(MenuButton, {
    name: "Compositors",
    href: "/CompPages/comps",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 169
    },
    __self: this
  }), __jsx(MenuButton, {
    name: "Articles",
    href: "/Articles/articles",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 170
    },
    __self: this
  }));
};

var Ref = function Ref(props) {
  return __jsx(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
    href: "/".concat(props.link),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 177
    },
    __self: this
  }, __jsx("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 178
    },
    __self: this
  }, props.text));
};

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _defineProperty; });
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);

function _defineProperty(obj, key, value) {
  if (key in obj) {
    _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/***/ }),

/***/ "./node_modules/function-bind/implementation.js":
/*!******************************************************!*\
  !*** ./node_modules/function-bind/implementation.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/* eslint no-invalid-this: 1 */

var ERROR_MESSAGE = 'Function.prototype.bind called on incompatible ';
var slice = Array.prototype.slice;
var toStr = Object.prototype.toString;
var funcType = '[object Function]';

module.exports = function bind(that) {
    var target = this;
    if (typeof target !== 'function' || toStr.call(target) !== funcType) {
        throw new TypeError(ERROR_MESSAGE + target);
    }
    var args = slice.call(arguments, 1);

    var bound;
    var binder = function () {
        if (this instanceof bound) {
            var result = target.apply(
                this,
                args.concat(slice.call(arguments))
            );
            if (Object(result) === result) {
                return result;
            }
            return this;
        } else {
            return target.apply(
                that,
                args.concat(slice.call(arguments))
            );
        }
    };

    var boundLength = Math.max(0, target.length - args.length);
    var boundArgs = [];
    for (var i = 0; i < boundLength; i++) {
        boundArgs.push('$' + i);
    }

    bound = Function('binder', 'return function (' + boundArgs.join(',') + '){ return binder.apply(this,arguments); }')(binder);

    if (target.prototype) {
        var Empty = function Empty() {};
        Empty.prototype = target.prototype;
        bound.prototype = new Empty();
        Empty.prototype = null;
    }

    return bound;
};


/***/ }),

/***/ "./node_modules/function-bind/index.js":
/*!*********************************************!*\
  !*** ./node_modules/function-bind/index.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var implementation = __webpack_require__(/*! ./implementation */ "./node_modules/function-bind/implementation.js");

module.exports = Function.prototype.bind || implementation;


/***/ }),

/***/ "./node_modules/has/src/index.js":
/*!***************************************!*\
  !*** ./node_modules/has/src/index.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var bind = __webpack_require__(/*! function-bind */ "./node_modules/function-bind/index.js");

module.exports = bind.call(Function.call, Object.prototype.hasOwnProperty);


/***/ }),

/***/ "./node_modules/next/dist/build/polyfills/object.assign/index.js":
/*!***********************************************************************!*\
  !*** ./node_modules/next/dist/build/polyfills/object.assign/index.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var assign=Object.assign.bind(Object);function g(){return assign;}Object.defineProperties(g(),{implementation:{get:g},shim:{value:g},getPolyfill:{value:g}});module.exports=g();

/***/ }),

/***/ "./node_modules/next/dist/client/link.js":
/*!***********************************************!*\
  !*** ./node_modules/next/dist/client/link.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _classCallCheck = __webpack_require__(/*! @babel/runtime-corejs2/helpers/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/classCallCheck.js");

var _createClass = __webpack_require__(/*! @babel/runtime-corejs2/helpers/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/createClass.js");

var _possibleConstructorReturn = __webpack_require__(/*! @babel/runtime-corejs2/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/possibleConstructorReturn.js");

var _getPrototypeOf = __webpack_require__(/*! @babel/runtime-corejs2/helpers/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/getPrototypeOf.js");

var _inherits = __webpack_require__(/*! @babel/runtime-corejs2/helpers/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/inherits.js");

var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports["default"] = void 0;

var _map = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/map */ "./node_modules/@babel/runtime-corejs2/core-js/map.js"));

var _url = __webpack_require__(/*! url */ "./node_modules/native-url/dist/index.js");

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

var _router = _interopRequireDefault(__webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js"));

var _rewriteUrlForExport = __webpack_require__(/*! ../next-server/lib/router/rewrite-url-for-export */ "./node_modules/next/dist/next-server/lib/router/rewrite-url-for-export.js");

var _utils = __webpack_require__(/*! ../next-server/lib/utils */ "./node_modules/next/dist/next-server/lib/utils.js");

function isLocal(href) {
  var url = (0, _url.parse)(href, false, true);
  var origin = (0, _url.parse)((0, _utils.getLocationOrigin)(), false, true);
  return !url.host || url.protocol === origin.protocol && url.host === origin.host;
}

function memoizedFormatUrl(formatFunc) {
  var lastHref = null;
  var lastAs = null;
  var lastResult = null;
  return function (href, as) {
    if (lastResult && href === lastHref && as === lastAs) {
      return lastResult;
    }

    var result = formatFunc(href, as);
    lastHref = href;
    lastAs = as;
    lastResult = result;
    return result;
  };
}

function formatUrl(url) {
  return url && typeof url === 'object' ? (0, _utils.formatWithValidation)(url) : url;
}

var observer;
var listeners = new _map["default"]();
var IntersectionObserver = true ? window.IntersectionObserver : undefined;

function getObserver() {
  // Return shared instance of IntersectionObserver if already created
  if (observer) {
    return observer;
  } // Only create shared IntersectionObserver if supported in browser


  if (!IntersectionObserver) {
    return undefined;
  }

  return observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (!listeners.has(entry.target)) {
        return;
      }

      var cb = listeners.get(entry.target);

      if (entry.isIntersecting || entry.intersectionRatio > 0) {
        observer.unobserve(entry.target);
        listeners["delete"](entry.target);
        cb();
      }
    });
  }, {
    rootMargin: '200px'
  });
}

var listenToIntersections = function listenToIntersections(el, cb) {
  var observer = getObserver();

  if (!observer) {
    return function () {};
  }

  observer.observe(el);
  listeners.set(el, cb);
  return function () {
    try {
      observer.unobserve(el);
    } catch (err) {
      console.error(err);
    }

    listeners["delete"](el);
  };
};

var Link =
/*#__PURE__*/
function (_react$Component) {
  _inherits(Link, _react$Component);

  function Link(props) {
    var _this;

    _classCallCheck(this, Link);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Link).call(this, props));
    _this.p = void 0;

    _this.cleanUpListeners = function () {};

    _this.formatUrls = memoizedFormatUrl(function (href, asHref) {
      return {
        href: formatUrl(href),
        as: asHref ? formatUrl(asHref) : asHref
      };
    });

    _this.linkClicked = function (e) {
      // @ts-ignore target exists on currentTarget
      var _e$currentTarget = e.currentTarget,
          nodeName = _e$currentTarget.nodeName,
          target = _e$currentTarget.target;

      if (nodeName === 'A' && (target && target !== '_self' || e.metaKey || e.ctrlKey || e.shiftKey || e.nativeEvent && e.nativeEvent.which === 2)) {
        // ignore click for new tab / new window behavior
        return;
      }

      var _this$formatUrls = _this.formatUrls(_this.props.href, _this.props.as),
          href = _this$formatUrls.href,
          as = _this$formatUrls.as;

      if (!isLocal(href)) {
        // ignore click if it's outside our scope (e.g. https://google.com)
        return;
      }

      var pathname = window.location.pathname;
      href = (0, _url.resolve)(pathname, href);
      as = as ? (0, _url.resolve)(pathname, as) : href;
      e.preventDefault(); //  avoid scroll for urls with anchor refs

      var scroll = _this.props.scroll;

      if (scroll == null) {
        scroll = as.indexOf('#') < 0;
      } // replace state instead of push if prop is present


      _router["default"][_this.props.replace ? 'replace' : 'push'](href, as, {
        shallow: _this.props.shallow
      }).then(function (success) {
        if (!success) return;

        if (scroll) {
          window.scrollTo(0, 0);
          document.body.focus();
        }
      });
    };

    if (true) {
      if (props.prefetch) {
        console.warn('Next.js auto-prefetches automatically based on viewport. The prefetch attribute is no longer needed. More: https://err.sh/zeit/next.js/prefetch-true-deprecated');
      }
    }

    _this.p = props.prefetch !== false;
    return _this;
  }

  _createClass(Link, [{
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.cleanUpListeners();
    }
  }, {
    key: "handleRef",
    value: function handleRef(ref) {
      var _this2 = this;

      if (this.p && IntersectionObserver && ref && ref.tagName) {
        this.cleanUpListeners();
        this.cleanUpListeners = listenToIntersections(ref, function () {
          _this2.prefetch();
        });
      }
    } // The function is memoized so that no extra lifecycles are needed
    // as per https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html

  }, {
    key: "prefetch",
    value: function prefetch() {
      if (!this.p || false) return; // Prefetch the JSON page if asked (only in the client)

      var pathname = window.location.pathname;

      var _this$formatUrls2 = this.formatUrls(this.props.href, this.props.as),
          parsedHref = _this$formatUrls2.href;

      var href = (0, _url.resolve)(pathname, parsedHref);

      _router["default"].prefetch(href);
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var children = this.props.children;

      var _this$formatUrls3 = this.formatUrls(this.props.href, this.props.as),
          href = _this$formatUrls3.href,
          as = _this$formatUrls3.as; // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag


      if (typeof children === 'string') {
        children = _react["default"].createElement("a", null, children);
      } // This will return the first child, if multiple are provided it will throw an error


      var child = _react.Children.only(children);

      var props = {
        ref: function ref(el) {
          _this3.handleRef(el);

          if (child && typeof child === 'object' && child.ref) {
            if (typeof child.ref === 'function') child.ref(el);else if (typeof child.ref === 'object') {
              child.ref.current = el;
            }
          }
        },
        onMouseEnter: function onMouseEnter(e) {
          if (child.props && typeof child.props.onMouseEnter === 'function') {
            child.props.onMouseEnter(e);
          }

          _this3.prefetch();
        },
        onClick: function onClick(e) {
          if (child.props && typeof child.props.onClick === 'function') {
            child.props.onClick(e);
          }

          if (!e.defaultPrevented) {
            _this3.linkClicked(e);
          }
        }
      }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
      // defined, we specify the current 'href', so that repetition is not needed by the user

      if (this.props.passHref || child.type === 'a' && !('href' in child.props)) {
        props.href = as || href;
      } // Add the ending slash to the paths. So, we can serve the
      // "<page>/index.html" directly.


      if (false) {}

      return _react["default"].cloneElement(child, props);
    }
  }]);

  return Link;
}(_react.Component);

Link.propTypes = void 0;

if (true) {
  var warn = (0, _utils.execOnce)(console.error); // This module gets removed by webpack.IgnorePlugin

  var exact = __webpack_require__(/*! prop-types-exact */ "./node_modules/prop-types-exact/build/index.js");

  Link.propTypes = exact({
    href: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].object]).isRequired,
    as: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].object]),
    prefetch: _propTypes["default"].bool,
    replace: _propTypes["default"].bool,
    shallow: _propTypes["default"].bool,
    passHref: _propTypes["default"].bool,
    scroll: _propTypes["default"].bool,
    children: _propTypes["default"].oneOfType([_propTypes["default"].element, function (props, propName) {
      var value = props[propName];

      if (typeof value === 'string') {
        warn("Warning: You're using a string directly inside <Link>. This usage has been deprecated. Please add an <a> tag as child of <Link>");
      }

      return null;
    }]).isRequired
  });
}

var _default = Link;
exports["default"] = _default;

/***/ }),

/***/ "./node_modules/next/link.js":
/*!***********************************!*\
  !*** ./node_modules/next/link.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/link */ "./node_modules/next/dist/client/link.js")


/***/ }),

/***/ "./node_modules/prop-types-exact/build/helpers/isPlainObject.js":
/*!**********************************************************************!*\
  !*** ./node_modules/prop-types-exact/build/helpers/isPlainObject.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports['default'] = isPlainObject;
function isPlainObject(x) {
  return x && (typeof x === 'undefined' ? 'undefined' : _typeof(x)) === 'object' && !Array.isArray(x);
}
module.exports = exports['default'];
//# sourceMappingURL=isPlainObject.js.map

/***/ }),

/***/ "./node_modules/prop-types-exact/build/index.js":
/*!******************************************************!*\
  !*** ./node_modules/prop-types-exact/build/index.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports['default'] = forbidExtraProps;

var _object = __webpack_require__(/*! object.assign */ "./node_modules/next/dist/build/polyfills/object.assign/index.js");

var _object2 = _interopRequireDefault(_object);

var _has = __webpack_require__(/*! has */ "./node_modules/has/src/index.js");

var _has2 = _interopRequireDefault(_has);

var _isPlainObject = __webpack_require__(/*! ./helpers/isPlainObject */ "./node_modules/prop-types-exact/build/helpers/isPlainObject.js");

var _isPlainObject2 = _interopRequireDefault(_isPlainObject);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var zeroWidthSpace = '\u200B';
var specialProperty = 'prop-types-exact: ' + zeroWidthSpace;
var semaphore = typeof Symbol === 'function' && typeof Symbol['for'] === 'function' ? Symbol['for'](specialProperty) : /* istanbul ignore next */specialProperty;

function brand(fn) {
  return (0, _object2['default'])(fn, _defineProperty({}, specialProperty, semaphore));
}

function isBranded(value) {
  return value && value[specialProperty] === semaphore;
}

function forbidExtraProps(propTypes) {
  if (!(0, _isPlainObject2['default'])(propTypes)) {
    throw new TypeError('given propTypes must be an object');
  }
  if ((0, _has2['default'])(propTypes, specialProperty) && !isBranded(propTypes[specialProperty])) {
    throw new TypeError('Against all odds, you created a propType for a prop that uses both the zero-width space and our custom string - which, sadly, conflicts with `prop-types-exact`');
  }

  return (0, _object2['default'])({}, propTypes, _defineProperty({}, specialProperty, brand(function () {
    function forbidUnknownProps(props, _, componentName) {
      var unknownProps = Object.keys(props).filter(function (prop) {
        return !(0, _has2['default'])(propTypes, prop);
      });
      if (unknownProps.length > 0) {
        return new TypeError(String(componentName) + ': unknown props found: ' + String(unknownProps.join(', ')));
      }
      return null;
    }

    return forbidUnknownProps;
  }())));
}
module.exports = exports['default'];
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
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
/* harmony import */ var _components_Header_Header__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Header/Header */ "./components/Header/Header.jsx");
/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.min.css */ "./node_modules/bootstrap/dist/css/bootstrap.min.css");
/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _Styles_global_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../Styles/global.css */ "./Styles/global.css");
/* harmony import */ var _Styles_global_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_Styles_global_css__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _components_Main_Main__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/Main/Main */ "./components/Main/Main.jsx");





var _jsxFileName = "/home/oem/Documents/Development/Courswork/guitarchords/pages/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement;






var Index =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Index, _Component);

  function Index() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Index);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Index).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Index, [{
    key: "render",
    value: function render() {
      return __jsx("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 13
        },
        __self: this
      }, __jsx(_components_Header_Header__WEBPACK_IMPORTED_MODULE_6__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 14
        },
        __self: this
      }), __jsx(_components_Main_Main__WEBPACK_IMPORTED_MODULE_9__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        },
        __self: this
      }));
    }
  }]);

  return Index;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ }),

/***/ "./static/logo.png":
/*!*************************!*\
  !*** ./static/logo.png ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/logo-a86f20959cb6de789db36527fa4d2120.png";

/***/ })

})
//# sourceMappingURL=index.js.c54f8a1e0b43164a254e.hot-update.js.map