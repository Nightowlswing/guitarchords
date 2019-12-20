module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Header/Header.jsx":
/*!**************************************!*\
  !*** ./components/Header/Header.jsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _static_logo_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../static/logo.png */ "./static/logo.png");
/* harmony import */ var _static_logo_png__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_static_logo_png__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _static_search_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../static/search.png */ "./static/search.png");
/* harmony import */ var _static_search_png__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_static_search_png__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.min.css */ "./node_modules/bootstrap/dist/css/bootstrap.min.css");
/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! reactstrap */ "reactstrap");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _HeaderStyle_Header_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./HeaderStyle/Header.css */ "./components/Header/HeaderStyle/Header.css");
/* harmony import */ var _HeaderStyle_Header_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_HeaderStyle_Header_css__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var popper_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! popper.js */ "popper.js");
/* harmony import */ var popper_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(popper_js__WEBPACK_IMPORTED_MODULE_10__);

var _jsxFileName = "/home/oem/Documents/Development/Courswork/guitarchords/components/Header/Header.jsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;






 //import openSlideMenu from './openSlideMenu';
//import closeSlideMenu from './closeSlideMenu';




class Header extends react__WEBPACK_IMPORTED_MODULE_2__["Component"] {
  constructor(props) {
    super(props);

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "openSlideMenu", e => {
      // e.preventDefault();
      document.querySelector("#side-menu").style.width = "250px";
      document.querySelector("body").style.marginLeft = "250px";
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "closeSlideMenu", e => {
      // e.preventDefault();
      document.querySelector("#side-menu").style.width = "0px";
      document.querySelector("body").style.marginLeft = "0px";
    });

    this.state = {};
  }

  render() {
    return __jsx("div", {
      className: "jsx-2081448487",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41
      },
      __self: this
    }, __jsx("nav", {
      className: "jsx-2081448487" + " " + 'navbar',
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42
      },
      __self: this
    }, __jsx("div", {
      className: "jsx-2081448487" + " " + 'container-fluid',
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43
      },
      __self: this
    }, __jsx(SideMenu, {
      onClick: this.closeSlideMenu,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44
      },
      __self: this
    }), __jsx(Burger, {
      onClick: this.openSlideMenu,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45
      },
      __self: this
    }), __jsx(Menu, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46
      },
      __self: this
    }), __jsx(SearchBox, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47
      },
      __self: this
    }))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
      id: "2081448487",
      __self: this
    }, ".navbar.jsx-2081448487{background:#82A3A1;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL29lbS9Eb2N1bWVudHMvRGV2ZWxvcG1lbnQvQ291cnN3b3JrL2d1aXRhcmNob3Jkcy9jb21wb25lbnRzL0hlYWRlci9IZWFkZXIuanN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW9ENEIsQUFHNEMsbUJBQ3ZCIiwiZmlsZSI6Ii9ob21lL29lbS9Eb2N1bWVudHMvRGV2ZWxvcG1lbnQvQ291cnN3b3JrL2d1aXRhcmNob3Jkcy9jb21wb25lbnRzL0hlYWRlci9IZWFkZXIuanN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5pbXBvcnQgbG9nbyBmcm9tICcuLi8uLi9zdGF0aWMvbG9nby5wbmcnO1xuaW1wb3J0IHNlYXJjaCBmcm9tICcuLi8uLi9zdGF0aWMvc2VhcmNoLnBuZyc7XG5pbXBvcnQgJ2Jvb3RzdHJhcC9kaXN0L2Nzcy9ib290c3RyYXAubWluLmNzcyc7XG5pbXBvcnQgeyBDYXJkLCBDYXJkVGV4dCwgQ2FyZEhlYWRlciwgQ2FyZEJvZHksIEJ1dHRvbiB9IGZyb20gJ3JlYWN0c3RyYXAnO1xuaW1wb3J0ICcuL0hlYWRlclN0eWxlL0hlYWRlci5jc3MnO1xuLy9pbXBvcnQgb3BlblNsaWRlTWVudSBmcm9tICcuL29wZW5TbGlkZU1lbnUnO1xuLy9pbXBvcnQgY2xvc2VTbGlkZU1lbnUgZnJvbSAnLi9jbG9zZVNsaWRlTWVudSc7XG5pbXBvcnQgJCBmcm9tICdqcXVlcnknO1xuaW1wb3J0IFBvcHBlciBmcm9tICdwb3BwZXIuanMnO1xuXG5cbmNsYXNzIEhlYWRlciBleHRlbmRzIENvbXBvbmVudHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcyl7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIFxuXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgb3BlblNsaWRlTWVudSA9IGUgPT4ge1xuICAgICAgICAvLyBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjc2lkZS1tZW51XCIpLnN0eWxlLndpZHRoID0gXCIyNTBweFwiO1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYm9keVwiKS5zdHlsZS5tYXJnaW5MZWZ0ID0gXCIyNTBweFwiO1xuICAgICAgICBcbiAgICB9XG5cbiAgICBjbG9zZVNsaWRlTWVudSA9IGUgPT4ge1xuICAgICAgICAvLyBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjc2lkZS1tZW51XCIpLnN0eWxlLndpZHRoID0gXCIwcHhcIjtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJvZHlcIikuc3R5bGUubWFyZ2luTGVmdCA9IFwiMHB4XCI7XG4gICAgICAgIFxuICAgIH1cblxuICAgIHJlbmRlcigpe1xuICAgICAgICByZXR1cm4oXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIDxkaXYgPlxuICAgICAgICAgICAgICAgIDxuYXYgY2xhc3NOYW1lID0gJ25hdmJhcic+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lID0gJ2NvbnRhaW5lci1mbHVpZCc+XG4gICAgICAgICAgICAgICAgICAgIDxTaWRlTWVudSBvbkNsaWNrID0ge3RoaXMuY2xvc2VTbGlkZU1lbnV9Lz5cbiAgICAgICAgICAgICAgICAgICAgPEJ1cmdlciBvbkNsaWNrID0ge3RoaXMub3BlblNsaWRlTWVudX0vPlxuICAgICAgICAgICAgICAgICAgICA8TWVudS8+XG4gICAgICAgICAgICAgICAgICAgIDxTZWFyY2hCb3ggLz5cbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvbmF2PlxuXG4gICAgICAgICAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgICAgICAgICAgICAubmF2YmFye1xuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogIzgyQTNBMTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGB9PC9zdHlsZT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cbn1cblxuY29uc3QgTG9nbyA9IHByb3BzID0+IChcbiAgICA8ZGl2IGNsYXNzTmFtZSA9ICcnPlxuICAgICAgICA8TGluayBocmVmID0gJyMnPlxuICAgICAgICAgICAgPGEgY2xhc3NOYW1lID0gJ25hdmJhci1icmFuZCc+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17bG9nb30gYWx0ID0gJ2xvZ28nLz5cbiAgICAgICAgICAgIDwvYT5cbiAgICAgICAgPC9MaW5rPlxuXG4gICAgICAgIFxuICAgIDwvZGl2PlxuKTtcblxuY29uc3QgTWVudUJ1dHRvbiA9IHByb3BzID0+KFxuICAgIDxMaW5rIGhyZWYgPSB7YCR7cHJvcHMuaHJlZn1gfT5cbiAgICAgICAgPGxpIGNsYXNzTmFtZSA9ICduYXYtaXRlbSc+PGEgY2xhc3NOYW1lID0gJ25hdi1saW5rJz57YCR7cHJvcHMubmFtZX1gfTwvYT48L2xpPiAgICBcbiAgICA8L0xpbms+XG4pO1xuXG5jb25zdCBNZW51ID0gcHJvcHMgPT4oXG4gICAgPHVsIGNsYXNzTmFtZSA9ICduYXYnPlxuICAgICAgICA8TWVudUJ1dHRvbiBuYW1lID0gJ01haW4nIGhyZWYgPSAnIycvPlxuICAgICAgICA8TWVudUJ1dHRvbiBuYW1lID0gJ1NvbmdzJyBocmVmID0gJy4vc29uZycvPlxuICAgICAgICA8TWVudUJ1dHRvbiBuYW1lID0gJ0NvbXBvc2l0b3JzJyBocmVmID0gJyMnLz5cbiAgICAgICAgPE1lbnVCdXR0b24gbmFtZSA9ICdDaG9yZHMnIGhyZWYgPSAnIycvPlxuICAgICAgICA8TWVudUJ1dHRvbiBuYW1lID0gJ0FydGljbGVzJyBocmVmID0gJyMnLz5cbiAgICAgICAgXG4gICAgPC91bD5cblxuICAgIFxuKTtcblxuY29uc3QgU2VhcmNoQm94ID0gcHJvcHMgPT4oXG4gICAgPGRpdiBjbGFzc05hbWU9XCJzZWFyY2hCb3hcIj5cbiAgICAgICAgXG4gICAgICAgIDxkaXYgaWQgPSAnZ3JvdXAnIGNsYXNzTmFtZT1cImlucHV0LWdyb3VwXCI+IFxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgbmFtZT1cInhcIiBwbGFjZWhvbGRlcj1cIlNlYXJjaFwiLz5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImlucHV0LWdyb3VwLWJ0blwiPlxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lID0gJ3NlYXJjaEJ1dHRvbicgdHlwZT1cImJ1dHRvblwiPjxzcGFuIGNsYXNzTmFtZT1cImdseXBoaWNvbiBnbHlwaGljb24tc2VhcmNoXCI+PC9zcGFuPjxpbWcgIHNyYz17c2VhcmNofSBhbHQgPSAnc2VhcmNoJy8+PC9idXR0b24+XG4gICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgIDwvZGl2PiBcbiAgICA8L2Rpdj5cblxuKTtcblxuY29uc3QgQnVyZ2VyID0gcHJvcHMgPT4oXG4gICAgPHNwYW4gY2xhc3NOYW1lID1cIm9wZW4tc2xpZGVcIj5cbiAgICAgICAgPGEgaHJlZj1cIiNcIiBvbkNsaWNrID0ge3Byb3BzLm9uQ2xpY2t9PlxuICAgICAgICAgICAgPHN2ZyB3aWR0aCA9IFwiMzBcIiBoZWlnaHQgPSBcIjMwXCI+XG4gICAgICAgICAgICAgICAgPHBhdGggZCA9IFwiTTAsIDUsIDMwLCA1XCIgc3Ryb2tlID0gXCIjZmZmXCIgc3Ryb2tlV2lkdGg9XCI1XCIvPlxuICAgICAgICAgICAgICAgIDxwYXRoIGQgPSBcIk0wLCAxNCwgMzAsIDE0XCIgc3Ryb2tlID0gXCIjZmZmXCIgc3Ryb2tlV2lkdGg9XCI1XCIvPlxuICAgICAgICAgICAgICAgIDxwYXRoIGQgPSBcIk0wLCAyMywgMzAsIDIzXCIgc3Ryb2tlID0gXCIjZmZmXCIgc3Ryb2tlV2lkdGg9XCI1XCIvPlxuICAgICAgICAgICAgPC9zdmc+XG4gICAgICAgIDwvYT5cbiAgICA8L3NwYW4+XG4gICAgXG4pO1xuXG5jb25zdCBTaWRlTWVudSA9IHByb3BzID0+KFxuICAgIDxkaXYgaWQgPSBcInNpZGUtbWVudVwiIGNsYXNzTmFtZSA9IFwic2lkZS1uYXZcIj5cbiAgICAgICAgPGEgaHJlZj1cIiNcIiBjbGFzc05hbWUgPSBcImJ0bi1jbG9zZVwiIG9uQ2xpY2sgPSB7cHJvcHMub25DbGlja30+JnRpbWVzOzwvYT5cbiAgICAgICAgPE1lbnVCdXR0b24gbmFtZSA9ICdNYWluJyBocmVmID0gJyMnLz5cbiAgICAgICAgPE1lbnVCdXR0b24gbmFtZSA9ICdTb25ncycgaHJlZiA9ICcuLi8uLi9wYWdlcy9zb25nJy8+XG4gICAgICAgIDxNZW51QnV0dG9uIG5hbWUgPSAnQ29tcG9zaXRvcnMnIGhyZWYgPSAnIycvPlxuICAgICAgICA8TWVudUJ1dHRvbiBuYW1lID0gJ0Nob3JkcycgaHJlZiA9ICcjJy8+XG4gICAgICAgIDxNZW51QnV0dG9uIG5hbWUgPSAnQXJ0aWNsZXMnIGhyZWYgPSAnIycvPlxuICAgIDwvZGl2PlxuKTtcblxuXG5cblxuXG5leHBvcnQgZGVmYXVsdCBIZWFkZXI7XG5cblxuIl19 */\n/*@ sourceURL=/home/oem/Documents/Development/Courswork/guitarchords/components/Header/Header.jsx */"));
  }

}

const Logo = props => __jsx("div", {
  className: "",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 64
  },
  __self: undefined
}, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
  href: "#",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 65
  },
  __self: undefined
}, __jsx("a", {
  className: "navbar-brand",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 66
  },
  __self: undefined
}, __jsx("img", {
  src: _static_logo_png__WEBPACK_IMPORTED_MODULE_4___default.a,
  alt: "logo",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 67
  },
  __self: undefined
}))));

const MenuButton = props => __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
  href: `${props.href}`,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 76
  },
  __self: undefined
}, __jsx("li", {
  className: "nav-item",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 77
  },
  __self: undefined
}, __jsx("a", {
  className: "nav-link",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 77
  },
  __self: undefined
}, `${props.name}`)));

const Menu = props => __jsx("ul", {
  className: "nav",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 82
  },
  __self: undefined
}, __jsx(MenuButton, {
  name: "Main",
  href: "#",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 83
  },
  __self: undefined
}), __jsx(MenuButton, {
  name: "Songs",
  href: "./song",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 84
  },
  __self: undefined
}), __jsx(MenuButton, {
  name: "Compositors",
  href: "#",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 85
  },
  __self: undefined
}), __jsx(MenuButton, {
  name: "Chords",
  href: "#",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 86
  },
  __self: undefined
}), __jsx(MenuButton, {
  name: "Articles",
  href: "#",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 87
  },
  __self: undefined
}));

const SearchBox = props => __jsx("div", {
  className: "searchBox",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 95
  },
  __self: undefined
}, __jsx("div", {
  id: "group",
  className: "input-group",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 97
  },
  __self: undefined
}, __jsx("input", {
  type: "text",
  className: "form-control",
  name: "x",
  placeholder: "Search",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 98
  },
  __self: undefined
}), __jsx("span", {
  className: "input-group-btn",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 99
  },
  __self: undefined
}, __jsx("button", {
  className: "searchButton",
  type: "button",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 100
  },
  __self: undefined
}, __jsx("span", {
  className: "glyphicon glyphicon-search",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 100
  },
  __self: undefined
}), __jsx("img", {
  src: _static_search_png__WEBPACK_IMPORTED_MODULE_5___default.a,
  alt: "search",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 100
  },
  __self: undefined
})))));

const Burger = props => __jsx("span", {
  className: "open-slide",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 108
  },
  __self: undefined
}, __jsx("a", {
  href: "#",
  onClick: props.onClick,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 109
  },
  __self: undefined
}, __jsx("svg", {
  width: "30",
  height: "30",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 110
  },
  __self: undefined
}, __jsx("path", {
  d: "M0, 5, 30, 5",
  stroke: "#fff",
  strokeWidth: "5",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 111
  },
  __self: undefined
}), __jsx("path", {
  d: "M0, 14, 30, 14",
  stroke: "#fff",
  strokeWidth: "5",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 112
  },
  __self: undefined
}), __jsx("path", {
  d: "M0, 23, 30, 23",
  stroke: "#fff",
  strokeWidth: "5",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 113
  },
  __self: undefined
}))));

const SideMenu = props => __jsx("div", {
  id: "side-menu",
  className: "side-nav",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 121
  },
  __self: undefined
}, __jsx("a", {
  href: "#",
  className: "btn-close",
  onClick: props.onClick,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 122
  },
  __self: undefined
}, "\xD7"), __jsx(MenuButton, {
  name: "Main",
  href: "#",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 123
  },
  __self: undefined
}), __jsx(MenuButton, {
  name: "Songs",
  href: "../../pages/song",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 124
  },
  __self: undefined
}), __jsx(MenuButton, {
  name: "Compositors",
  href: "#",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 125
  },
  __self: undefined
}), __jsx(MenuButton, {
  name: "Chords",
  href: "#",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 126
  },
  __self: undefined
}), __jsx(MenuButton, {
  name: "Articles",
  href: "#",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 127
  },
  __self: undefined
}));

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ }),

/***/ "./components/Header/HeaderStyle/Header.css":
/*!**************************************************!*\
  !*** ./components/Header/HeaderStyle/Header.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./components/Songs/Song.js":
/*!**********************************!*\
  !*** ./components/Songs/Song.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _SongStyle_SongStyle_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SongStyle/SongStyle.css */ "./components/Songs/SongStyle/SongStyle.css");
/* harmony import */ var _SongStyle_SongStyle_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_SongStyle_SongStyle_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/home/oem/Documents/Development/Courswork/guitarchords/components/Songs/Song.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




class Song extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(props) {
    super(props);
    this.state = {
      tracks: []
    };
  }

  GetProfiles() {
    console.log(this.state);
    axios__WEBPACK_IMPORTED_MODULE_2___default.a.get('http://localhost:3210/profile').then(response => {
      this.setState({
        tracks: response.data
      });
    });
    console.log(this.state.tracks);
  }

  render() {
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
    }), this.state.tracks.map(value => {
      return __jsx(SongText, {
        adress: value.adress,
        avatar: value.avatar,
        email: value.email,
        id: value.id,
        name: value.name,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        },
        __self: this
      });
    }));
  }

}

const SongHead = props => __jsx("div", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 45
  },
  __self: undefined
}, __jsx("span", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 46
  },
  __self: undefined
}, __jsx("h1", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 46
  },
  __self: undefined
}, props.compName), __jsx("h3", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 47
  },
  __self: undefined
}, props.name)), __jsx("span", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 48
  },
  __self: undefined
}, __jsx("h6", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 48
  },
  __self: undefined
}, "Capo: ", props.capo)), __jsx("span", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 49
  },
  __self: undefined
}, "----------------------------"));

const SongText = props => __jsx("div", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 54
  },
  __self: undefined
}, __jsx("span", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 55
  },
  __self: undefined
}, `adress: ${props.adress}`), __jsx("br", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 55
  },
  __self: undefined
}), __jsx("span", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 56
  },
  __self: undefined
}, `avatar: ${props.avatar}`), __jsx("br", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 56
  },
  __self: undefined
}), __jsx("span", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 57
  },
  __self: undefined
}, `email: ${props.email}`), __jsx("br", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 57
  },
  __self: undefined
}), __jsx("span", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 58
  },
  __self: undefined
}, `id: ${props.id}`), __jsx("br", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 58
  },
  __self: undefined
}), __jsx("span", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 59
  },
  __self: undefined
}, `name: ${props.name}`), __jsx("br", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 59
  },
  __self: undefined
}));

/* harmony default export */ __webpack_exports__["default"] = (Song);

/***/ }),

/***/ "./components/Songs/SongStyle/SongStyle.css":
/*!**************************************************!*\
  !*** ./components/Songs/SongStyle/SongStyle.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./components/global.css":
/*!*******************************!*\
  !*** ./components/global.css ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/map.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/map.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/map */ "core-js/library/fn/map");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/assign.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/assign */ "core-js/library/fn/object/assign");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/create.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/create.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/create */ "core-js/library/fn/object/create");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/define-property */ "core-js/library/fn/object/define-property");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-own-property-descriptor */ "core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/keys.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/keys */ "core-js/library/fn/object/keys");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/promise.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/promise.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/promise */ "core-js/library/fn/promise");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/symbol.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/symbol.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/symbol */ "core-js/library/fn/symbol");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js":
/*!************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/symbol/iterator */ "core-js/library/fn/symbol/iterator");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/weak-map.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/weak-map.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/weak-map */ "core-js/library/fn/weak-map");

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

/***/ "./node_modules/@babel/runtime-corejs2/helpers/extends.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/extends.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$assign = __webpack_require__(/*! ../core-js/object/assign */ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js");

function _extends() {
  module.exports = _extends = _Object$assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

module.exports = _extends;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$getOwnPropertyDescriptor = __webpack_require__(/*! ../core-js/object/get-own-property-descriptor */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js");

var _Object$defineProperty = __webpack_require__(/*! ../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

var _typeof = __webpack_require__(/*! ../helpers/typeof */ "./node_modules/@babel/runtime-corejs2/helpers/typeof.js");

var _WeakMap = __webpack_require__(/*! ../core-js/weak-map */ "./node_modules/@babel/runtime-corejs2/core-js/weak-map.js");

function _getRequireWildcardCache() {
  if (typeof _WeakMap !== "function") return null;
  var cache = new _WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = _Object$defineProperty && _Object$getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? _Object$getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        _Object$defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/typeof.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/typeof.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Symbol$iterator = __webpack_require__(/*! ../core-js/symbol/iterator */ "./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js");

var _Symbol = __webpack_require__(/*! ../core-js/symbol */ "./node_modules/@babel/runtime-corejs2/core-js/symbol.js");

function _typeof2(obj) { if (typeof _Symbol === "function" && typeof _Symbol$iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof _Symbol === "function" && obj.constructor === _Symbol && obj !== _Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof _Symbol === "function" && _typeof2(_Symbol$iterator) === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof _Symbol === "function" && obj.constructor === _Symbol && obj !== _Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "./node_modules/bootstrap/dist/css/bootstrap.min.css":
/*!***********************************************************!*\
  !*** ./node_modules/bootstrap/dist/css/bootstrap.min.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./node_modules/next/dist/client/link.js":
/*!***********************************************!*\
  !*** ./node_modules/next/dist/client/link.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = void 0;

var _map = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/map */ "./node_modules/@babel/runtime-corejs2/core-js/map.js"));

var _url = __webpack_require__(/*! url */ "url");

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "prop-types"));

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
  return (href, as) => {
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
var listeners = new _map.default();
var IntersectionObserver = false ? undefined : null;

function getObserver() {
  // Return shared instance of IntersectionObserver if already created
  if (observer) {
    return observer;
  } // Only create shared IntersectionObserver if supported in browser


  if (!IntersectionObserver) {
    return undefined;
  }

  return observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!listeners.has(entry.target)) {
        return;
      }

      var cb = listeners.get(entry.target);

      if (entry.isIntersecting || entry.intersectionRatio > 0) {
        observer.unobserve(entry.target);
        listeners.delete(entry.target);
        cb();
      }
    });
  }, {
    rootMargin: '200px'
  });
}

var listenToIntersections = (el, cb) => {
  var observer = getObserver();

  if (!observer) {
    return () => {};
  }

  observer.observe(el);
  listeners.set(el, cb);
  return () => {
    try {
      observer.unobserve(el);
    } catch (err) {
      console.error(err);
    }

    listeners.delete(el);
  };
};

class Link extends _react.Component {
  constructor(props) {
    super(props);
    this.p = void 0;

    this.cleanUpListeners = () => {};

    this.formatUrls = memoizedFormatUrl((href, asHref) => {
      return {
        href: formatUrl(href),
        as: asHref ? formatUrl(asHref) : asHref
      };
    });

    this.linkClicked = e => {
      // @ts-ignore target exists on currentTarget
      var {
        nodeName,
        target
      } = e.currentTarget;

      if (nodeName === 'A' && (target && target !== '_self' || e.metaKey || e.ctrlKey || e.shiftKey || e.nativeEvent && e.nativeEvent.which === 2)) {
        // ignore click for new tab / new window behavior
        return;
      }

      var {
        href,
        as
      } = this.formatUrls(this.props.href, this.props.as);

      if (!isLocal(href)) {
        // ignore click if it's outside our scope (e.g. https://google.com)
        return;
      }

      var {
        pathname
      } = window.location;
      href = (0, _url.resolve)(pathname, href);
      as = as ? (0, _url.resolve)(pathname, as) : href;
      e.preventDefault(); //  avoid scroll for urls with anchor refs

      var {
        scroll
      } = this.props;

      if (scroll == null) {
        scroll = as.indexOf('#') < 0;
      } // replace state instead of push if prop is present


      _router.default[this.props.replace ? 'replace' : 'push'](href, as, {
        shallow: this.props.shallow
      }).then(success => {
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

    this.p = props.prefetch !== false;
  }

  componentWillUnmount() {
    this.cleanUpListeners();
  }

  handleRef(ref) {
    if (this.p && IntersectionObserver && ref && ref.tagName) {
      this.cleanUpListeners();
      this.cleanUpListeners = listenToIntersections(ref, () => {
        this.prefetch();
      });
    }
  } // The function is memoized so that no extra lifecycles are needed
  // as per https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html


  prefetch() {
    if (!this.p || true) return; // Prefetch the JSON page if asked (only in the client)

    var {
      pathname
    } = window.location;
    var {
      href: parsedHref
    } = this.formatUrls(this.props.href, this.props.as);
    var href = (0, _url.resolve)(pathname, parsedHref);

    _router.default.prefetch(href);
  }

  render() {
    var {
      children
    } = this.props;
    var {
      href,
      as
    } = this.formatUrls(this.props.href, this.props.as); // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

    if (typeof children === 'string') {
      children = _react.default.createElement("a", null, children);
    } // This will return the first child, if multiple are provided it will throw an error


    var child = _react.Children.only(children);

    var props = {
      ref: el => {
        this.handleRef(el);

        if (child && typeof child === 'object' && child.ref) {
          if (typeof child.ref === 'function') child.ref(el);else if (typeof child.ref === 'object') {
            child.ref.current = el;
          }
        }
      },
      onMouseEnter: e => {
        if (child.props && typeof child.props.onMouseEnter === 'function') {
          child.props.onMouseEnter(e);
        }

        this.prefetch();
      },
      onClick: e => {
        if (child.props && typeof child.props.onClick === 'function') {
          child.props.onClick(e);
        }

        if (!e.defaultPrevented) {
          this.linkClicked(e);
        }
      }
    }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
    // defined, we specify the current 'href', so that repetition is not needed by the user

    if (this.props.passHref || child.type === 'a' && !('href' in child.props)) {
      props.href = as || href;
    } // Add the ending slash to the paths. So, we can serve the
    // "<page>/index.html" directly.


    if (false) {}

    return _react.default.cloneElement(child, props);
  }

}

Link.propTypes = void 0;

if (true) {
  var warn = (0, _utils.execOnce)(console.error); // This module gets removed by webpack.IgnorePlugin

  var exact = __webpack_require__(/*! prop-types-exact */ "prop-types-exact");

  Link.propTypes = exact({
    href: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.object]).isRequired,
    as: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.object]),
    prefetch: _propTypes.default.bool,
    replace: _propTypes.default.bool,
    shallow: _propTypes.default.bool,
    passHref: _propTypes.default.bool,
    scroll: _propTypes.default.bool,
    children: _propTypes.default.oneOfType([_propTypes.default.element, (props, propName) => {
      var value = props[propName];

      if (typeof value === 'string') {
        warn("Warning: You're using a string directly inside <Link>. This usage has been deprecated. Please add an <a> tag as child of <Link>");
      }

      return null;
    }]).isRequired
  });
}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/client/router.js":
/*!*************************************************!*\
  !*** ./node_modules/next/dist/client/router.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/extends */ "./node_modules/@babel/runtime-corejs2/helpers/extends.js"));

var _defineProperty = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router2 = _interopRequireWildcard(__webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__(/*! ../next-server/lib/router-context */ "./node_modules/next/dist/next-server/lib/router-context.js");

var _withRouter = _interopRequireDefault(__webpack_require__(/*! ./with-router */ "./node_modules/next/dist/client/with-router.js"));

exports.withRouter = _withRouter.default;
/* global window */

var singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

var urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components'];
var routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
var coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

(0, _defineProperty.default)(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  (0, _defineProperty.default)(singletonRouter, field, {
    get() {
      var router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = function () {
    var router = getRouter();
    return router[field](...arguments);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, function () {
      var eventField = "on" + event.charAt(0).toUpperCase() + event.substring(1);
      var _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...arguments);
        } catch (err) {
          // tslint:disable-next-line:no-console
          console.error("Error when running the Router event: " + eventField); // tslint:disable-next-line:no-console

          console.error(err.message + "\n" + err.stack);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    var message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


var createRouter = function createRouter() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  var _router = router;
  var instance = {};

  for (var property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = (0, _extends2.default)({}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = function () {
      return _router[field](...arguments);
    };
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/dist/client/with-router.js":
/*!******************************************************!*\
  !*** ./node_modules/next/dist/client/with-router.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = withRouter;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/extends */ "./node_modules/@babel/runtime-corejs2/helpers/extends.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return _react.default.createElement(ComposedComponent, (0, _extends2.default)({
      router: (0, _router.useRouter)()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (true) {
    var name = ComposedComponent.displayName || ComposedComponent.name || 'Unknown';
    WithRouterWrapper.displayName = "withRouter(" + name + ")";
  }

  return WithRouterWrapper;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/mitt.js":
/*!********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/mitt.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
MIT License

Copyright (c) Jason Miller (https://jasonformat.com/)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

var _Object$create = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/create */ "./node_modules/@babel/runtime-corejs2/core-js/object/create.js");

var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

function mitt() {
  const all = _Object$create(null);

  return {
    on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },

    off(type, handler) {
      if (all[type]) {
        // tslint:disable-next-line:no-bitwise
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },

    emit(type, ...evts) {
      // eslint-disable-next-line array-callback-return
      ;
      (all[type] || []).slice().map(handler => {
        handler(...evts);
      });
    }

  };
}

exports.default = mitt;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router-context.js":
/*!******************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router-context.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
  result["default"] = mod;
  return result;
};

_Object$defineProperty(exports, "__esModule", {
  value: true
});

const React = __importStar(__webpack_require__(/*! react */ "react"));

exports.RouterContext = React.createContext(null);

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/rewrite-url-for-export.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/rewrite-url-for-export.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

function rewriteUrlForNextExport(url) {
  const [pathname, hash] = url.split('#'); // tslint:disable-next-line

  let [path, qs] = pathname.split('?');
  path = path.replace(/\/$/, ''); // Append a trailing slash if this path does not have an extension

  if (!/\.[^/]+\/?$/.test(path)) path += `/`;
  if (qs) path += '?' + qs;
  if (hash) path += '#' + hash;
  return path;
}

exports.rewriteUrlForNextExport = rewriteUrlForNextExport;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/router.js":
/*!*****************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/router.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Promise = __webpack_require__(/*! @babel/runtime-corejs2/core-js/promise */ "./node_modules/@babel/runtime-corejs2/core-js/promise.js");

var _Object$assign = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/assign */ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js");

var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

_Object$defineProperty(exports, "__esModule", {
  value: true
});

const url_1 = __webpack_require__(/*! url */ "url");

const mitt_1 = __importDefault(__webpack_require__(/*! ../mitt */ "./node_modules/next/dist/next-server/lib/mitt.js"));

const utils_1 = __webpack_require__(/*! ../utils */ "./node_modules/next/dist/next-server/lib/utils.js");

const rewrite_url_for_export_1 = __webpack_require__(/*! ./rewrite-url-for-export */ "./node_modules/next/dist/next-server/lib/router/rewrite-url-for-export.js");

const is_dynamic_1 = __webpack_require__(/*! ./utils/is-dynamic */ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js");

const route_matcher_1 = __webpack_require__(/*! ./utils/route-matcher */ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js");

const route_regex_1 = __webpack_require__(/*! ./utils/route-regex */ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js");

function toRoute(path) {
  return path.replace(/\/$/, '') || '/';
}

class Router {
  constructor(pathname, query, as, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component,
    err,
    subscription
  }) {
    this.onPopState = e => {
      if (!e.state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        const {
          pathname,
          query
        } = this;
        this.changeState('replaceState', utils_1.formatWithValidation({
          pathname,
          query
        }), utils_1.getURL());
        return;
      } // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site


      if (e.state && this.isSsr && e.state.url === this.pathname && e.state.as === this.asPath) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(e.state)) {
        return;
      }

      const {
        url,
        as,
        options
      } = e.state;

      if (true) {
        if (typeof url === 'undefined' || typeof as === 'undefined') {
          console.warn('`popstate` event triggered but `event.state` did not have `url` or `as` https://err.sh/zeit/next.js/popstate-state-empty');
        }
      }

      this.replace(url, as, options);
    }; // represents the current component key


    this.route = toRoute(pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (pathname !== '/_error') {
      this.components[this.route] = {
        Component,
        props: initialProps,
        err
      };
    }

    this.components['/_app'] = {
      Component: App
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented
    // @ts-ignore backwards compatibility

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = pathname;
    this.query = query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    this.asPath = // @ts-ignore this is temporarily global (attached to window)
    is_dynamic_1.isDynamicRoute(pathname) && __NEXT_DATA__.autoExport ? pathname : as;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;

    if (false) {}
  } // @deprecated backwards compatibility even though it's a private method.


  static _rewriteUrlForNextExport(url) {
    return rewrite_url_for_export_1.rewriteUrlForNextExport(url);
  }

  update(route, mod) {
    const Component = mod.default || mod;
    const data = this.components[route];

    if (!data) {
      throw new Error(`Cannot update unavailable route: ${route}`);
    }

    const newData = _Object$assign(_Object$assign({}, data), {
      Component
    });

    this.components[route] = newData; // pages/_app.js updated

    if (route === '/_app') {
      this.notify(this.components[this.route]);
      return;
    }

    if (route === this.route) {
      this.notify(newData);
    }
  }

  reload() {
    window.location.reload();
  }
  /**
   * Go back in history
   */


  back() {
    window.history.back();
  }
  /**
   * Performs a `pushState` with arguments
   * @param url of the route
   * @param as masks `url` for the browser
   * @param options object you can define `shallow` and other options
   */


  push(url, as = url, options = {}) {
    return this.change('pushState', url, as, options);
  }
  /**
   * Performs a `replaceState` with arguments
   * @param url of the route
   * @param as masks `url` for the browser
   * @param options object you can define `shallow` and other options
   */


  replace(url, as = url, options = {}) {
    return this.change('replaceState', url, as, options);
  }

  change(method, _url, _as, options) {
    return new _Promise((resolve, reject) => {
      if (!options._h) {
        this.isSsr = false;
      } // marking route changes as a navigation start entry


      if (utils_1.SUPPORTS_PERFORMANCE_USER_TIMING) {
        performance.mark('routeChange');
      } // If url and as provided as an object representation,
      // we'll format them into the string version here.


      const url = typeof _url === 'object' ? utils_1.formatWithValidation(_url) : _url;
      let as = typeof _as === 'object' ? utils_1.formatWithValidation(_as) : _as; // Add the ending slash to the paths. So, we can serve the
      // "<page>/index.html" directly for the SSR page.

      if (false) {}

      this.abortComponentLoad(as); // If the url change is only related to a hash change
      // We should not proceed. We should only change the state.
      // WARNING: `_h` is an internal option for handing Next.js client-side
      // hydration. Your app should _never_ use this property. It may change at
      // any time without notice.

      if (!options._h && this.onlyAHashChange(as)) {
        this.asPath = as;
        Router.events.emit('hashChangeStart', as);
        this.changeState(method, url, as);
        this.scrollToHash(as);
        Router.events.emit('hashChangeComplete', as);
        return resolve(true);
      }

      const {
        pathname,
        query,
        protocol
      } = url_1.parse(url, true);

      if (!pathname || protocol) {
        if (true) {
          throw new Error(`Invalid href passed to router: ${url} https://err.sh/zeit/next.js/invalid-href-passed`);
        }

        return resolve(false);
      } // If asked to change the current URL we should reload the current page
      // (not location.reload() but reload getInitialProps and other Next.js stuffs)
      // We also need to set the method = replaceState always
      // as this should not go into the history (That's how browsers work)
      // We should compare the new asPath to the current asPath, not the url


      if (!this.urlIsNew(as)) {
        method = 'replaceState';
      } // @ts-ignore pathname is always a string


      const route = toRoute(pathname);
      const {
        shallow = false
      } = options;

      if (is_dynamic_1.isDynamicRoute(route)) {
        const {
          pathname: asPathname
        } = url_1.parse(as);
        const routeMatch = route_matcher_1.getRouteMatcher(route_regex_1.getRouteRegex(route))(asPathname);

        if (!routeMatch) {
          const error = `The provided \`as\` value (${asPathname}) is incompatible with the \`href\` value (${route}). ` + `Read more: https://err.sh/zeit/next.js/incompatible-href-as`;

          if (true) {
            throw new Error(error);
          } else {}

          return resolve(false);
        } // Merge params into `query`, overwriting any specified in search


        _Object$assign(query, routeMatch);
      }

      Router.events.emit('routeChangeStart', as); // If shallow is true and the route exists in the router cache we reuse the previous result
      // @ts-ignore pathname is always a string

      this.getRouteInfo(route, pathname, query, as, shallow).then(routeInfo => {
        const {
          error
        } = routeInfo;

        if (error && error.cancelled) {
          return resolve(false);
        }

        Router.events.emit('beforeHistoryChange', as);
        this.changeState(method, url, as, options);
        const hash = window.location.hash.substring(1);

        if (true) {
          const appComp = this.components['/_app'].Component;
          window.next.isPrerendered = appComp.getInitialProps === appComp.origGetInitialProps && !routeInfo.Component.getInitialProps;
        } // @ts-ignore pathname is always defined


        this.set(route, pathname, query, as, _Object$assign(_Object$assign({}, routeInfo), {
          hash
        }));

        if (error) {
          Router.events.emit('routeChangeError', error, as);
          throw error;
        }

        Router.events.emit('routeChangeComplete', as);
        return resolve(true);
      }, reject);
    });
  }

  changeState(method, url, as, options = {}) {
    if (true) {
      if (typeof window.history === 'undefined') {
        console.error(`Warning: window.history is not available.`);
        return;
      } // @ts-ignore method should always exist on history


      if (typeof window.history[method] === 'undefined') {
        console.error(`Warning: window.history.${method} is not available`);
        return;
      }
    }

    if (method !== 'pushState' || utils_1.getURL() !== as) {
      // @ts-ignore method should always exist on history
      window.history[method]({
        url,
        as,
        options
      }, null, as);
    }
  }

  getRouteInfo(route, pathname, query, as, shallow = false) {
    const cachedRouteInfo = this.components[route]; // If there is a shallow route transition possible
    // If the route is already rendered on the screen.

    if (shallow && cachedRouteInfo && this.route === route) {
      return _Promise.resolve(cachedRouteInfo);
    }

    return new _Promise((resolve, reject) => {
      if (cachedRouteInfo) {
        return resolve(cachedRouteInfo);
      }

      this.fetchComponent(route).then(Component => resolve({
        Component
      }), reject);
    }).then(routeInfo => {
      const {
        Component
      } = routeInfo;

      if (true) {
        const {
          isValidElementType
        } = __webpack_require__(/*! react-is */ "react-is");

        if (!isValidElementType(Component)) {
          throw new Error(`The default export is not a React Component in page: "${pathname}"`);
        }
      }

      return new _Promise((resolve, reject) => {
        // we provide AppTree later so this needs to be `any`
        this.getInitialProps(Component, {
          pathname,
          query,
          asPath: as
        }).then(props => {
          routeInfo.props = props;
          this.components[route] = routeInfo;
          resolve(routeInfo);
        }, reject);
      });
    }).catch(err => {
      return new _Promise(resolve => {
        if (err.code === 'PAGE_LOAD_ERROR') {
          // If we can't load the page it could be one of following reasons
          //  1. Page doesn't exists
          //  2. Page does exist in a different zone
          //  3. Internal error while loading the page
          // So, doing a hard reload is the proper way to deal with this.
          window.location.href = as; // Changing the URL doesn't block executing the current code path.
          // So, we need to mark it as a cancelled error and stop the routing logic.

          err.cancelled = true; // @ts-ignore TODO: fix the control flow here

          return resolve({
            error: err
          });
        }

        if (err.cancelled) {
          // @ts-ignore TODO: fix the control flow here
          return resolve({
            error: err
          });
        }

        resolve(this.fetchComponent('/_error').then(Component => {
          const routeInfo = {
            Component,
            err
          };
          return new _Promise(resolve => {
            this.getInitialProps(Component, {
              err,
              pathname,
              query
            }).then(props => {
              routeInfo.props = props;
              routeInfo.error = err;
              resolve(routeInfo);
            }, gipErr => {
              console.error('Error in error page `getInitialProps`: ', gipErr);
              routeInfo.error = err;
              routeInfo.props = {};
              resolve(routeInfo);
            });
          });
        }));
      });
    });
  }

  set(route, pathname, query, as, data) {
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    this.notify(data);
  }
  /**
   * Callback to execute before replacing router state
   * @param cb callback to be executed
   */


  beforePopState(cb) {
    this._bps = cb;
  }

  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same

    if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
      return true;
    } // If the urls are change, there's more than a hash change


    if (oldUrlNoHash !== newUrlNoHash) {
      return false;
    } // If the hash has changed, then it's a hash only change.
    // This check is necessary to handle both the enter and
    // leave hash === '' cases. The identity case falls through
    // and is treated as a next reload.


    return oldHash !== newHash;
  }

  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value

    if (hash === '') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found


    const idEl = document.getElementById(hash);

    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers


    const nameEl = document.getElementsByName(hash)[0];

    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }

  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }
  /**
   * Prefetch `page` code, you may wait for the data during `page` rendering.
   * This feature only works in production!
   * @param url of prefetched `page`
   */


  prefetch(url) {
    return new _Promise((resolve, reject) => {
      const {
        pathname,
        protocol
      } = url_1.parse(url);

      if (!pathname || protocol) {
        if (true) {
          throw new Error(`Invalid href passed to router: ${url} https://err.sh/zeit/next.js/invalid-href-passed`);
        }

        return;
      } // Prefetch is not supported in development mode because it would trigger on-demand-entries


      if (true) return; // @ts-ignore pathname is always defined

      const route = toRoute(pathname);
      this.pageLoader.prefetch(route).then(resolve, reject);
    });
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    const Component = await this.pageLoader.loadPage(route);

    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    return Component;
  }

  async getInitialProps(Component, ctx) {
    let cancelled = false;

    const cancel = () => {
      cancelled = true;
    };

    this.clc = cancel;
    const {
      Component: App
    } = this.components['/_app'];
    let props;

    if (Component.__NEXT_SPR) {
      let status; // pathname should have leading slash

      let {
        pathname
      } = url_1.parse(ctx.asPath || ctx.pathname);
      pathname = !pathname || pathname === '/' ? '/index' : pathname;
      props = await fetch( // @ts-ignore __NEXT_DATA__
      `/_next/data/${__NEXT_DATA__.buildId}${pathname}.json`).then(res => {
        if (!res.ok) {
          status = res.status;
          throw new Error('failed to load prerender data');
        }

        return res.json();
      }).catch(err => {
        console.error(`Failed to load data`, status, err);
        window.location.href = pathname;
        return new _Promise(() => {});
      });
    } else {
      const AppTree = this._wrapApp(App);

      ctx.AppTree = AppTree;
      props = await utils_1.loadGetInitialProps(App, {
        AppTree,
        Component,
        router: this,
        ctx
      });
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    if (cancelled) {
      const err = new Error('Loading initial props cancelled');
      err.cancelled = true;
      throw err;
    }

    return props;
  }

  abortComponentLoad(as) {
    if (this.clc) {
      const e = new Error('Route Cancelled');
      e.cancelled = true;
      Router.events.emit('routeChangeError', e, as);
      this.clc();
      this.clc = null;
    }
  }

  notify(data) {
    this.sub(data, this.components['/_app'].Component);
  }

}

exports.default = Router;
Router.events = mitt_1.default();

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
}); // Identify /[param]/ in route string


const TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

exports.isDynamicRoute = isDynamicRoute;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js":
/*!******************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$keys = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");

var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

function getRouteMatcher(routeRegex) {
  const {
    re,
    groups
  } = routeRegex;
  return pathname => {
    const routeMatch = re.exec(pathname);

    if (!routeMatch) {
      return false;
    }

    const decode = decodeURIComponent;
    const params = {};

    _Object$keys(groups).forEach(slugName => {
      const g = groups[slugName];
      const m = routeMatch[g.pos];

      if (m !== undefined) {
        params[slugName] = ~m.indexOf('/') ? m.split('/').map(entry => decode(entry)) : g.repeat ? [decode(m)] : decode(m);
      }
    });

    return params;
  };
}

exports.getRouteMatcher = getRouteMatcher;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-regex.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

function getRouteRegex(normalizedRoute) {
  // Escape all characters that could be considered RegEx
  const escapedRoute = (normalizedRoute.replace(/\/$/, '') || '/').replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
  const groups = {};
  let groupIndex = 1;
  const parameterizedRoute = escapedRoute.replace(/\/\\\[([^/]+?)\\\](?=\/|$)/g, (_, $1) => {
    const isCatchAll = /^(\\\.){3}/.test($1);
    groups[$1 // Un-escape key
    .replace(/\\([|\\{}()[\]^$+*?.-])/g, '$1').replace(/^\.{3}/, '') // eslint-disable-next-line no-sequences
    ] = {
      pos: groupIndex++,
      repeat: isCatchAll
    };
    return isCatchAll ? '/(.+?)' : '/([^/]+?)';
  });
  return {
    re: new RegExp('^' + parameterizedRoute + '(?:/)?$', 'i'),
    groups
  };
}

exports.getRouteRegex = getRouteRegex;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/utils.js":
/*!*********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/utils.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$keys = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");

var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

const url_1 = __webpack_require__(/*! url */ "url");
/**
 * Utils
 */


function execOnce(fn) {
  let used = false;
  let result = null;
  return (...args) => {
    if (!used) {
      used = true;
      result = fn.apply(this, args);
    }

    return result;
  };
}

exports.execOnce = execOnce;

function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}

exports.getLocationOrigin = getLocationOrigin;

function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}

exports.getURL = getURL;

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

exports.getDisplayName = getDisplayName;

function isResSent(res) {
  return res.finished || res.headersSent;
}

exports.isResSent = isResSent;

async function loadGetInitialProps(App, ctx) {
  if (true) {
    if (App.prototype && App.prototype.getInitialProps) {
      const message = `"${getDisplayName(App)}.getInitialProps()" is defined as an instance method - visit https://err.sh/zeit/next.js/get-initial-props-as-an-instance-method for more information.`;
      throw new Error(message);
    }
  } // when called from _app `ctx` is nested in `ctx`


  const res = ctx.res || ctx.ctx && ctx.ctx.res;

  if (!App.getInitialProps) {
    if (ctx.ctx && ctx.Component) {
      // @ts-ignore pageProps default
      return {
        pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
      };
    }

    return {};
  }

  const props = await App.getInitialProps(ctx);

  if (res && isResSent(res)) {
    return props;
  }

  if (!props) {
    const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
    throw new Error(message);
  }

  if (true) {
    if (_Object$keys(props).length === 0 && !ctx.ctx) {
      console.warn(`${getDisplayName(App)} returned an empty object from \`getInitialProps\`. This de-optimizes and prevents automatic static optimization. https://err.sh/zeit/next.js/empty-object-getInitialProps`);
    }
  }

  return props;
}

exports.loadGetInitialProps = loadGetInitialProps;
exports.urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];

function formatWithValidation(url, options) {
  if (true) {
    if (url !== null && typeof url === 'object') {
      _Object$keys(url).forEach(key => {
        if (exports.urlObjectKeys.indexOf(key) === -1) {
          console.warn(`Unknown key passed via urlObject into url.format: ${key}`);
        }
      });
    }
  }

  return url_1.format(url, options);
}

exports.formatWithValidation = formatWithValidation;
exports.SUPPORTS_PERFORMANCE = typeof performance !== 'undefined';
exports.SUPPORTS_PERFORMANCE_USER_TIMING = exports.SUPPORTS_PERFORMANCE && typeof performance.mark === 'function' && typeof performance.measure === 'function';

/***/ }),

/***/ "./node_modules/next/link.js":
/*!***********************************!*\
  !*** ./node_modules/next/link.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/link */ "./node_modules/next/dist/client/link.js")


/***/ }),

/***/ "./pages/song.js":
/*!***********************!*\
  !*** ./pages/song.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Header_Header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Header/Header */ "./components/Header/Header.jsx");
/* harmony import */ var _components_Songs_Song__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../components/Songs/Song */ "./components/Songs/Song.js");
/* harmony import */ var _components_global_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../components/global.css */ "./components/global.css");
/* harmony import */ var _components_global_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_components_global_css__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "/home/oem/Documents/Development/Courswork/guitarchords/pages/song.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





class song extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    return __jsx("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10
      },
      __self: this
    }, __jsx(_components_Header_Header__WEBPACK_IMPORTED_MODULE_1__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11
      },
      __self: this
    }), __jsx(_components_Songs_Song__WEBPACK_IMPORTED_MODULE_2__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12
      },
      __self: this
    }));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (song);

/***/ }),

/***/ "./static/logo.png":
/*!*************************!*\
  !*** ./static/logo.png ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/logo-a86f20959cb6de789db36527fa4d2120.png";

/***/ }),

/***/ "./static/search.png":
/*!***************************!*\
  !*** ./static/search.png ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ 4:
/*!*****************************!*\
  !*** multi ./pages/song.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/oem/Documents/Development/Courswork/guitarchords/pages/song.js */"./pages/song.js");


/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "core-js/library/fn/map":
/*!*****************************************!*\
  !*** external "core-js/library/fn/map" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/map");

/***/ }),

/***/ "core-js/library/fn/object/assign":
/*!***************************************************!*\
  !*** external "core-js/library/fn/object/assign" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/assign");

/***/ }),

/***/ "core-js/library/fn/object/create":
/*!***************************************************!*\
  !*** external "core-js/library/fn/object/create" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/create");

/***/ }),

/***/ "core-js/library/fn/object/define-property":
/*!************************************************************!*\
  !*** external "core-js/library/fn/object/define-property" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "core-js/library/fn/object/get-own-property-descriptor":
/*!************************************************************************!*\
  !*** external "core-js/library/fn/object/get-own-property-descriptor" ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "core-js/library/fn/object/keys":
/*!*************************************************!*\
  !*** external "core-js/library/fn/object/keys" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/keys");

/***/ }),

/***/ "core-js/library/fn/promise":
/*!*********************************************!*\
  !*** external "core-js/library/fn/promise" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/promise");

/***/ }),

/***/ "core-js/library/fn/symbol":
/*!********************************************!*\
  !*** external "core-js/library/fn/symbol" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol");

/***/ }),

/***/ "core-js/library/fn/symbol/iterator":
/*!*****************************************************!*\
  !*** external "core-js/library/fn/symbol/iterator" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol/iterator");

/***/ }),

/***/ "core-js/library/fn/weak-map":
/*!**********************************************!*\
  !*** external "core-js/library/fn/weak-map" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/weak-map");

/***/ }),

/***/ "jquery":
/*!*************************!*\
  !*** external "jquery" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("jquery");

/***/ }),

/***/ "popper.js":
/*!****************************!*\
  !*** external "popper.js" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("popper.js");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "prop-types-exact":
/*!***********************************!*\
  !*** external "prop-types-exact" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types-exact");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-is":
/*!***************************!*\
  !*** external "react-is" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-is");

/***/ }),

/***/ "reactstrap":
/*!*****************************!*\
  !*** external "reactstrap" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("reactstrap");

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("url");

/***/ })

/******/ });
//# sourceMappingURL=song.js.map