webpackHotUpdate("static/development/pages/[song].js",{

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
      dir = document.querySelector('#search').value;
      window.location.href = '/SearchPages/' + dir;
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
          lineNumber: 58
        },
        __self: this
      }, __jsx("nav", {
        className: "jsx-2081448487" + " " + 'navbar',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        },
        __self: this
      }, __jsx("div", {
        className: "jsx-2081448487" + " " + 'container-fluid',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        },
        __self: this
      }, __jsx(SideMenu, {
        onClick: this.closeSlideMenu,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        },
        __self: this
      }), __jsx(Burger, {
        onClick: this.openSlideMenu,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        },
        __self: this
      }), __jsx(Menu, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        },
        __self: this
      }), __jsx(SearchBox, {
        onChange: this.handleChange,
        search: this.state.Search,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        },
        __self: this
      }))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a, {
        id: "2081448487",
        __self: this
      }, ".navbar.jsx-2081448487{background:#82A3A1;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL29lbS9Eb2N1bWVudHMvRGV2ZWxvcG1lbnQvQ291cnN3b3JrL2d1aXRhcmNob3Jkcy9jb21wb25lbnRzL0hlYWRlci9IZWFkZXIuanN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXNFNEIsQUFHNEMsbUJBQ3ZCIiwiZmlsZSI6Ii9ob21lL29lbS9Eb2N1bWVudHMvRGV2ZWxvcG1lbnQvQ291cnN3b3JrL2d1aXRhcmNob3Jkcy9jb21wb25lbnRzL0hlYWRlci9IZWFkZXIuanN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5pbXBvcnQgbG9nbyBmcm9tICcuLi8uLi9zdGF0aWMvbG9nby5wbmcnO1xuaW1wb3J0ICdib290c3RyYXAvZGlzdC9jc3MvYm9vdHN0cmFwLm1pbi5jc3MnO1xuaW1wb3J0ICcuLi8uLi9TdHlsZXMvSGVhZGVyU3R5bGUvSGVhZGVyU3R5bGUuY3NzJztcbmltcG9ydCBFZGl0UXVlcnkgZnJvbSAnLi9FZGl0UXVlcnkvRWRpdFF1ZXJ5JztcblxuXG5jbGFzcyBIZWFkZXIgZXh0ZW5kcyBDb21wb25lbnR7XG4gICAgY29uc3RydWN0b3IocHJvcHMpe1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICBTZWFyY2g6IFwiXCIsXG4gICAgICAgICAgICBmb3JtRXJyb3JzOntcbiAgICAgICAgICAgICAgICBzZWFyY2g6IHRydWVcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBvcGVuU2xpZGVNZW51ID0gZSA9PiB7XG4gICAgICAgIC8vIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNzaWRlLW1lbnVcIikuc3R5bGUud2lkdGggPSBcIjI1MHB4XCI7XG4gICAgICAgLy8gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJvZHlcIikuc3R5bGUubWFyZ2luTGVmdCA9IFwiMjUwcHhcIjtcbiAgICAgICAgXG4gICAgfVxuXG4gICAgY2xvc2VTbGlkZU1lbnUgPSBlID0+IHtcbiAgICAgICAgLy8gZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgIFxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3NpZGUtbWVudVwiKS5zdHlsZS53aWR0aCA9IFwiMHB4XCI7XG4gICAgICAgLy8gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJvZHlcIikuc3R5bGUubWFyZ2luTGVmdCA9IFwiMHB4XCI7XG4gICAgICAgIFxuICAgIH1cblxuXG4gICAgaGFuZGxlQ2hhbmdlID0gZSA9PntcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBjb25zdCB7bmFtZSwgdmFsdWV9ID0gZS50YXJnZXQ7XG4gICAgICAgIFxuICAgICAgICBpZih2YWx1ZS5sZW5ndGggPiAwICYmIHZhbHVlLmxlbmd0aCA8IDY0KVxuICAgICAgICB7dGhpcy5zZXRTdGF0ZSh7U2VhcmNoOiBFZGl0UXVlcnkodmFsdWUpfSk7fVxuICAgICAgICBlbHNle1xuICAgICAgICAgICAgYWxlcnQoJ0ludmFsaWQgc2VhcmNoIGRhdGEnKTtcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzZWFyY2gnKS52YWx1ZSA9ICcnO1xuICAgICAgICB9XG4gICAgICAgIC8vY29uc29sZS5sb2codGhpcy5zdGF0ZS5TZWFyY2gpO1xuICAgIH1cblxuICAgIGhhbmRsZUNsaWNrID0gZSA9PntcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBkaXIgPSAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3NlYXJjaCcpLnZhbHVlKVxuICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9ICcvU2VhcmNoUGFnZXMvJyArIGRpcjtcbiAgICB9XG5cbiAgICByZW5kZXIoKXtcbiAgICAgICAgcmV0dXJuKFxuICAgICAgICAgICAgXG4gICAgICAgICAgICA8ZGl2ID5cbiAgICAgICAgICAgICAgICA8bmF2IGNsYXNzTmFtZSA9ICduYXZiYXInPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZSA9ICdjb250YWluZXItZmx1aWQnPlxuICAgICAgICAgICAgICAgICAgICA8U2lkZU1lbnUgb25DbGljayA9IHt0aGlzLmNsb3NlU2xpZGVNZW51fS8+XG4gICAgICAgICAgICAgICAgICAgIDxCdXJnZXIgb25DbGljayA9IHt0aGlzLm9wZW5TbGlkZU1lbnV9Lz5cbiAgICAgICAgICAgICAgICAgICAgPE1lbnUvPlxuICAgICAgICAgICAgICAgICAgICB7LyogPFJlZiBsaW5rID0gJy4vYWRkc29uZycgdGV4dCA9ICdhZGQgbmV3IHNvbmcnLz5cbiAgICAgICAgICAgICAgICAgICAgPFJlZiBsaW5rID0gJy4vbG9naW4nIHRleHQgPSAnc2luZyBpbicvPlxuICAgICAgICAgICAgICAgICAgICA8UmVmIGxpbmsgPSAnLi9zaW5ndXAnIHRleHQgPSAnc2luZyB1cCcvPiAqL31cbiAgICAgICAgICAgICAgICAgICAgPFNlYXJjaEJveCBvbkNoYW5nZSA9IHt0aGlzLmhhbmRsZUNoYW5nZX0gIHNlYXJjaCA9IHt0aGlzLnN0YXRlLlNlYXJjaH0gLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9uYXY+XG5cbiAgICAgICAgICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgICAgICAgICAgIC5uYXZiYXJ7XG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjODJBM0ExO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYH08L3N0eWxlPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5jb25zdCBTaW5nZWRPdXQgPSBwcm9wcyA9PihcbiAgICA8ZGl2PlxuICAgICAgICA8UmVmIGxpbmsgPSAnLi9sb2dpbicgdGV4dCA9ICdzaW5nIGluJy8+XG4gICAgICAgIC9cbiAgICAgICAgPFJlZiBsaW5rID0gJy4vc2luZ3VwJyB0ZXh0ID0gJ3NpbmcgdXAnLz5cbiAgICA8L2Rpdj5cbik7XG5cbmNvbnN0IFNpbmdPdXQgPSBwcm9wcyA9PihcbiAgICA8ZGl2PlxuICAgICAgICA8UmVmIGxpbmsgPSAnLi9hZGRzb25nJyB0ZXh0ID0gJ2FkZCBuZXcgc29uZycvPlxuICAgICAgICA8UmVmIGxpbmsgPSAnLi9wcm9maWxlJyB0ZXh0ID0gJ3NpbmcgdXAnLz5cbiAgICAgICAgPFJlZiBsaW5rID0gJy4vJyB0ZXh0ID0gJ2xvZyBvdXQnLz5cbiAgICA8L2Rpdj5cbik7XG5cbmNvbnN0IExvZ28gPSBwcm9wcyA9PiAoXG4gICAgPGRpdiBjbGFzc05hbWUgPSAnJz5cbiAgICAgICAgPExpbmsgaHJlZiA9ICcjJz5cbiAgICAgICAgICAgIDxhIGNsYXNzTmFtZSA9ICduYXZiYXItYnJhbmQnPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2xvZ299IGFsdCA9ICdsb2dvJy8+XG4gICAgICAgICAgICA8L2E+XG4gICAgICAgIDwvTGluaz5cblxuICAgICAgICBcbiAgICA8L2Rpdj5cbik7XG5cbmNvbnN0IE1lbnVCdXR0b24gPSBwcm9wcyA9PihcbiAgICA8TGluayBocmVmID0ge2Ake3Byb3BzLmhyZWZ9YH0+XG4gICAgICAgIDxsaSBjbGFzc05hbWUgPSAnbmF2LWl0ZW0nPjxhIGNsYXNzTmFtZSA9ICduYXYtbGluayc+e2Ake3Byb3BzLm5hbWV9YH08L2E+PC9saT4gICAgXG4gICAgPC9MaW5rPlxuKTtcblxuY29uc3QgTWVudSA9IHByb3BzID0+KFxuICAgIDx1bCBjbGFzc05hbWUgPSAnbmF2Jz5cbiAgICAgICAgPE1lbnVCdXR0b24gbmFtZSA9ICdJbmZvJyBocmVmID0gJy8nLz5cbiAgICAgICAgPE1lbnVCdXR0b24gbmFtZSA9ICdTb25ncycgaHJlZiA9ICcvc29uZ3MnLz5cbiAgICAgICAgPE1lbnVCdXR0b24gbmFtZSA9ICdDb21wb3NpdG9ycycgaHJlZiA9ICcvQ29tcFBhZ2VzL2NvbXBzJy8+XG4gICAgICAgIHsvKiA8TWVudUJ1dHRvbiBuYW1lID0gJ0Nob3JkcycgaHJlZiA9ICcjJy8+ICovfVxuICAgICAgICA8TWVudUJ1dHRvbiBuYW1lID0gJ0FydGljbGVzJyBocmVmID0gJy9BcnRpY2xlcy9hcnRpY2xlcycvPlxuICAgICAgICA8TWVudUJ1dHRvbiBuYW1lID0gJ1NpbmcgaW4nIGhyZWYgPSAnL2xvZ2luJy8+XG4gICAgICAgIDxNZW51QnV0dG9uIG5hbWUgPSAnU2luZyB1cCcgaHJlZiA9ICcvc2luZ3VwJyAvPlxuICAgIDwvdWw+XG5cbiAgICBcbik7XG5cbmNvbnN0IFNlYXJjaEJveCA9IHByb3BzID0+KFxuICAgIDxkaXYgY2xhc3NOYW1lPVwic2VhcmNoQm94XCI+XG4gICAgICAgIFxuICAgICAgICA8ZGl2IGlkID0gJ2dyb3VwJyBjbGFzc05hbWU9XCJpbnB1dC1ncm91cFwiPiBcbiAgICAgICAgICAgIDxpbnB1dCBpZCA9ICdzZWFyY2gnIG9uQ2hhbmdlID0ge3Byb3BzLm9uQ2hhbmdlfSB0eXBlPVwidGV4dFwiIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIG5hbWU9XCJ4XCIgcGxhY2Vob2xkZXI9XCJTZWFyY2hcIi8+XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJpbnB1dC1ncm91cC1idG5cIj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uICBjbGFzc05hbWUgPSAnc2VhcmNoQnV0dG9uJyB0eXBlPVwiYnV0dG9uXCIgPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJnbHlwaGljb24gZ2x5cGhpY29uLXNlYXJjaFwiPjwvc3Bhbj4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPScvU2VhcmNoUGFnZXMvW3NlYXJjaF0nIGFzID0ge2AvU2VhcmNoUGFnZXMvJHtwcm9wcy5zZWFyY2h9YH0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZSA9ICcubG9nbycgc3JjID0gJy4uLy4uL3N0YXRpYy9zZWFyY2gucG5nJyAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgIDwvZGl2PiBcbiAgICA8L2Rpdj5cblxuKTtcblxuXG5cbmNvbnN0IEJ1cmdlciA9IHByb3BzID0+KFxuICAgIDxzcGFuIGNsYXNzTmFtZSA9XCJvcGVuLXNsaWRlXCI+XG4gICAgICAgIDxhIGhyZWY9XCIjXCIgb25DbGljayA9IHtwcm9wcy5vbkNsaWNrfT5cbiAgICAgICAgICAgIDxzdmcgd2lkdGggPSBcIjMwXCIgaGVpZ2h0ID0gXCIzMFwiPlxuICAgICAgICAgICAgICAgIDxwYXRoIGQgPSBcIk0wLCA1LCAzMCwgNVwiIHN0cm9rZSA9IFwiI2ZmZlwiIHN0cm9rZVdpZHRoPVwiNVwiLz5cbiAgICAgICAgICAgICAgICA8cGF0aCBkID0gXCJNMCwgMTQsIDMwLCAxNFwiIHN0cm9rZSA9IFwiI2ZmZlwiIHN0cm9rZVdpZHRoPVwiNVwiLz5cbiAgICAgICAgICAgICAgICA8cGF0aCBkID0gXCJNMCwgMjMsIDMwLCAyM1wiIHN0cm9rZSA9IFwiI2ZmZlwiIHN0cm9rZVdpZHRoPVwiNVwiLz5cbiAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgICA8L2E+XG4gICAgPC9zcGFuPlxuICAgIFxuKTtcblxuY29uc3QgU2lkZU1lbnUgPSBwcm9wcyA9PihcbiAgICA8ZGl2IGlkID0gXCJzaWRlLW1lbnVcIiBjbGFzc05hbWUgPSBcInNpZGUtbmF2XCI+XG4gICAgICAgIDxhIGhyZWY9XCIjXCIgY2xhc3NOYW1lID0gXCJidG4tY2xvc2VcIiBvbkNsaWNrID0ge3Byb3BzLm9uQ2xpY2t9PiZ0aW1lczs8L2E+XG4gICAgICAgIDxNZW51QnV0dG9uIG5hbWUgPSAnSW5mbycgaHJlZiA9ICcvJy8+XG4gICAgICAgIDxNZW51QnV0dG9uIG5hbWUgPSAnU29uZ3MnIGhyZWYgPSAnL3NvbmdzJy8+XG4gICAgICAgIDxNZW51QnV0dG9uIG5hbWUgPSAnQ29tcG9zaXRvcnMnIGhyZWYgPSAnL0NvbXBQYWdlcy9jb21wcycvPlxuICAgICAgICA8TWVudUJ1dHRvbiBuYW1lID0gJ0FydGljbGVzJyBocmVmID0gJy9BcnRpY2xlcy9hcnRpY2xlcycvPlxuICAgICAgICA8TWVudUJ1dHRvbiBuYW1lID0gJ1NpbmcgaW4nIGhyZWYgPSAnL2xvZ2luJy8+XG4gICAgICAgIDxNZW51QnV0dG9uIG5hbWUgPSAnU2luZyB1cCcgaHJlZiA9ICcvc2luZ3VwJyAvPlxuICAgIDwvZGl2PlxuKTtcblxuY29uc3QgUmVmID0gcHJvcHMgPT4oXG4gICAgPExpbmsgaHJlZiA9IHtgLyR7cHJvcHMubGlua31gfT5cbiAgICAgICAgPGE+e3Byb3BzLnRleHR9PC9hPlxuICAgIDwvTGluaz5cbilcblxuXG5leHBvcnQgZGVmYXVsdCBIZWFkZXI7XG5cblxuIl19 */\n/*@ sourceURL=/home/oem/Documents/Development/Courswork/guitarchords/components/Header/Header.jsx */"));
    }
  }]);

  return Header;
}(react__WEBPACK_IMPORTED_MODULE_8__["Component"]);

var SingedOut = function SingedOut(props) {
  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82
    },
    __self: this
  }, __jsx(Ref, {
    link: "./login",
    text: "sing in",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83
    },
    __self: this
  }), "/", __jsx(Ref, {
    link: "./singup",
    text: "sing up",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85
    },
    __self: this
  }));
};

var SingOut = function SingOut(props) {
  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90
    },
    __self: this
  }, __jsx(Ref, {
    link: "./addsong",
    text: "add new song",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91
    },
    __self: this
  }), __jsx(Ref, {
    link: "./profile",
    text: "sing up",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92
    },
    __self: this
  }), __jsx(Ref, {
    link: "./",
    text: "log out",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93
    },
    __self: this
  }));
};

var Logo = function Logo(props) {
  return __jsx("div", {
    className: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98
    },
    __self: this
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
    href: "#",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99
    },
    __self: this
  }, __jsx("a", {
    className: "navbar-brand",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100
    },
    __self: this
  }, __jsx("img", {
    src: _static_logo_png__WEBPACK_IMPORTED_MODULE_10___default.a,
    alt: "logo",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101
    },
    __self: this
  }))));
};

var MenuButton = function MenuButton(props) {
  return __jsx(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
    href: "".concat(props.href),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110
    },
    __self: this
  }, __jsx("li", {
    className: "nav-item",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111
    },
    __self: this
  }, __jsx("a", {
    className: "nav-link",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111
    },
    __self: this
  }, "".concat(props.name))));
};

var Menu = function Menu(props) {
  return __jsx("ul", {
    className: "nav",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116
    },
    __self: this
  }, __jsx(MenuButton, {
    name: "Info",
    href: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117
    },
    __self: this
  }), __jsx(MenuButton, {
    name: "Songs",
    href: "/songs",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118
    },
    __self: this
  }), __jsx(MenuButton, {
    name: "Compositors",
    href: "/CompPages/comps",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119
    },
    __self: this
  }), __jsx(MenuButton, {
    name: "Articles",
    href: "/Articles/articles",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121
    },
    __self: this
  }), __jsx(MenuButton, {
    name: "Sing in",
    href: "/login",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122
    },
    __self: this
  }), __jsx(MenuButton, {
    name: "Sing up",
    href: "/singup",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123
    },
    __self: this
  }));
};

var SearchBox = function SearchBox(props) {
  return __jsx("div", {
    className: "searchBox",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130
    },
    __self: this
  }, __jsx("div", {
    id: "group",
    className: "input-group",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132
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
      lineNumber: 133
    },
    __self: this
  }), __jsx("span", {
    className: "input-group-btn",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134
    },
    __self: this
  }, __jsx("button", {
    className: "searchButton",
    type: "button",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135
    },
    __self: this
  }, __jsx("span", {
    className: "glyphicon glyphicon-search",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136
    },
    __self: this
  }), __jsx(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
    href: "/SearchPages/[search]",
    as: "/SearchPages/".concat(props.search),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137
    },
    __self: this
  }, __jsx("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138
    },
    __self: this
  }, __jsx("img", {
    className: ".logo",
    src: "../../static/search.png",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139
    },
    __self: this
  })))))));
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
  }), __jsx(MenuButton, {
    name: "Sing in",
    href: "/login",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 171
    },
    __self: this
  }), __jsx(MenuButton, {
    name: "Sing up",
    href: "/singup",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 172
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

/***/ })

})
//# sourceMappingURL=[song].js.7539790a70da7255f413.hot-update.js.map