module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 6);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("react-dom");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(1);

var _reactDom2 = _interopRequireDefault(_reactDom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = function () {
  return _react2.default.createElement(
    'div',
    null,
    'Footer'
  );
};

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(1);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactRouterDom = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Home = function Home() {
    return _react2.default.createElement(
        'div',
        null,
        'Home | ',
        _react2.default.createElement(
            _reactRouterDom.Link,
            { to: '/hello' },
            'go'
        )
    );
};

module.exports = Home;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(1);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactRouterDom = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Hello = function Hello() {
  return _react2.default.createElement(
    'div',
    null,
    'Hello | ',
    _react2.default.createElement(
      _reactRouterDom.Link,
      { to: '/' },
      'go'
    )
  );
};

module.exports = Hello;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _promise = __webpack_require__(7);

var _promise2 = _interopRequireDefault(_promise);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(1);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactLoadable = __webpack_require__(8);

var _reactLoadable2 = _interopRequireDefault(_reactLoadable);

var _reactRouterDom = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//--------------
// loadable
//--------------
var Footer = (0, _reactLoadable2.default)({
  loader: function loader() {
    return _promise2.default.resolve().then(function () {
      return __webpack_require__(3);
    });
  },
  modules: ['./Footer'],
  webpack: function webpack() {
    return [/*require.resolve*/(3)];
  },
  loading: function loading() {
    return _react2.default.createElement(
      'div',
      null,
      'Loading...'
    );
  }
});
var Home = (0, _reactLoadable2.default)({
  loader: function loader() {
    return _promise2.default.resolve().then(function () {
      return __webpack_require__(4);
    });
  },
  modules: ['./Home'],
  webpack: function webpack() {
    return [/*require.resolve*/(4)];
  },
  loading: function loading() {
    return _react2.default.createElement(
      'div',
      null,
      'Loading...'
    );
  }
});
var Hello = (0, _reactLoadable2.default)({
  loader: function loader() {
    return _promise2.default.resolve().then(function () {
      return __webpack_require__(5);
    });
  },
  modules: ['./Hello'],
  webpack: function webpack() {
    return [/*require.resolve*/(5)];
  },
  loading: function loading() {
    return _react2.default.createElement(
      'div',
      null,
      'Loading...'
    );
  }
});

//--------------
// main app
//--------------
var App = function App(routeKey) {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      _reactRouterDom.StaticRouter,
      { location: routeKey, context: {} },
      _react2.default.createElement(
        _reactRouterDom.Switch,
        null,
        _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/', component: Home }),
        _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/hello', component: Hello }),
        _react2.default.createElement(_reactRouterDom.Redirect, { to: '/' })
      )
    ),
    _react2.default.createElement(Footer, null)
  );
};

module.exports = App;
//ReactDOM.render(<App/>, document.getElementById('root'))

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/core-js/promise");

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("react-loadable");

/***/ })
/******/ ]);