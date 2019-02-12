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
/******/ 	return __webpack_require__(__webpack_require__.s = 7);
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
/***/ (function(module, exports) {

module.exports = require("react-loadable");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/core-js/promise");

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
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _promise = __webpack_require__(4);

var _promise2 = _interopRequireDefault(_promise);

var _regenerator = __webpack_require__(8);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(9);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var createHtml = function () {
    var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(reactStr, scriptsStr) {
        var $;
        return _regenerator2.default.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        _context.t0 = cheerio;
                        _context.next = 3;
                        return readFile(HTML_TEMPLATE);

                    case 3:
                        _context.t1 = _context.sent;
                        $ = _context.t0.load.call(_context.t0, _context.t1);

                        $(HTML_ROOT_DIV).html(reactStr);
                        $(HTML_BODY).append(scriptsStr);

                        return _context.abrupt('return', $.html());

                    case 8:
                    case 'end':
                        return _context.stop();
                }
            }
        }, _callee, this);
    }));

    return function createHtml(_x, _x2) {
        return _ref.apply(this, arguments);
    };
}();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var React = __webpack_require__(0);
var ReactDOMServer = __webpack_require__(10);
var fs = __webpack_require__(11);
var path = __webpack_require__(12);
var cheerio = __webpack_require__(13);
var Loadable = __webpack_require__(3);

var _require = __webpack_require__(14),
    getBundles = _require.getBundles;

var stats = __webpack_require__(15);
var ReactApp = __webpack_require__(16);

var HTML_TEMPLATE = path.join(__dirname, './react/public/index.html');
var HTML_ROOT_DIV = '#root';
var HTML_BODY = 'body';

function getScripts(bundles) {
    var scripts = bundles.map(function (bundle) {
        return '<script src="' + bundle.file + '"></script>';
    });

    scripts.push('<script src="static/index.js"></script>');
    scripts.unshift('<script src="static/runtime.js"></script>');

    return scripts;
}

function readFile(filePath) {
    return new _promise2.default(function (resolve, reject) {
        fs.readFile(filePath, 'utf8', function (err, content) {
            if (err) {
                reject(err);
            } else {
                resolve(content);
            }
        });
    });
}

module.exports = function () {
    var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(ctx, next) {
        var modules, staticContext, reactStr, bundles, scripts, htmlStr;
        return _regenerator2.default.wrap(function _callee2$(_context2) {
            while (1) {
                switch (_context2.prev = _context2.next) {
                    case 0:
                        modules = [];
                        staticContext = {};
                        reactStr = ReactDOMServer.renderToString(React.createElement(
                            Loadable.Capture,
                            { report: function report(moduleName) {
                                    return modules.push(moduleName);
                                } },
                            ReactApp(ctx.path, staticContext)
                        ));

                        if (!staticContext.url) {
                            _context2.next = 7;
                            break;
                        }

                        ctx.status = 301;
                        ctx.redirect(staticContext.url);
                        return _context2.abrupt('return');

                    case 7:
                        bundles = getBundles(stats, modules);
                        scripts = getScripts(bundles);
                        _context2.next = 11;
                        return createHtml(reactStr, scripts.join('\n'));

                    case 11:
                        htmlStr = _context2.sent;


                        ctx.body = htmlStr;

                    case 13:
                    case 'end':
                        return _context2.stop();
                }
            }
        }, _callee2, this);
    }));

    function ssr(_x3, _x4) {
        return _ref2.apply(this, arguments);
    }

    return ssr;
}();

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/regenerator");

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/helpers/asyncToGenerator");

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = require("fs");

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = require("cheerio");

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = require("react-loadable/webpack");

/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = {"./Hello":[{"id":74,"name":"./src/Hello.js","file":"static/Hello.js","publicPath":"static/Hello.js"}],"./Footer":[{"id":75,"name":"./src/Footer.js","file":"static/Footer.js","publicPath":"static/Footer.js"}],"react":[{"id":0,"name":"./node_modules/_react@16.4.2@react/index.js","file":"static/index.js","publicPath":"static/index.js"}],"./../_process@0.11.10@process/browser.js":[{"id":1,"name":"./node_modules/_process@0.11.10@process/browser.js","file":"static/index.js","publicPath":"static/index.js"}],"prop-types":[{"id":2,"name":"./node_modules/_prop-types@15.6.2@prop-types/index.js","file":"static/index.js","publicPath":"static/index.js"}],"invariant":[{"id":3,"name":"./node_modules/_invariant@2.2.4@invariant/browser.js","file":"static/index.js","publicPath":"static/index.js"}],"../../modules/_core":[{"id":4,"name":"./node_modules/_core-js@2.6.2@core-js/library/modules/_core.js","file":"static/index.js","publicPath":"static/index.js"}],"warning":[{"id":5,"name":"./node_modules/_warning@4.0.2@warning/warning.js","file":"static/index.js","publicPath":"static/index.js"},{"id":23,"name":"./node_modules/_warning@3.0.0@warning/browser.js","file":"static/index.js","publicPath":"static/index.js"}],"./_global":[{"id":6,"name":"./node_modules/_core-js@2.6.2@core-js/library/modules/_global.js","file":"static/index.js","publicPath":"static/index.js"}],"./_has":[{"id":7,"name":"./node_modules/_core-js@2.6.2@core-js/library/modules/_has.js","file":"static/index.js","publicPath":"static/index.js"}],"./_object-dp":[{"id":8,"name":"./node_modules/_core-js@2.6.2@core-js/library/modules/_object-dp.js","file":"static/index.js","publicPath":"static/index.js"}],"./_descriptors":[{"id":9,"name":"./node_modules/_core-js@2.6.2@core-js/library/modules/_descriptors.js","file":"static/index.js","publicPath":"static/index.js"}],"history":[{"id":10,"name":"./node_modules/_history@4.7.2@history/es/index.js","file":"static/index.js","publicPath":"static/index.js"}],"./_export":[{"id":11,"name":"./node_modules/_core-js@2.6.2@core-js/library/modules/_export.js","file":"static/index.js","publicPath":"static/index.js"}],"./_hide":[{"id":12,"name":"./node_modules/_core-js@2.6.2@core-js/library/modules/_hide.js","file":"static/index.js","publicPath":"static/index.js"}],"./_is-object":[{"id":13,"name":"./node_modules/_core-js@2.6.2@core-js/library/modules/_is-object.js","file":"static/index.js","publicPath":"static/index.js"}],"./_to-iobject":[{"id":14,"name":"./node_modules/_core-js@2.6.2@core-js/library/modules/_to-iobject.js","file":"static/index.js","publicPath":"static/index.js"}],"./_wks":[{"id":15,"name":"./node_modules/_core-js@2.6.2@core-js/library/modules/_wks.js","file":"static/index.js","publicPath":"static/index.js"}],"object-assign":[{"id":16,"name":"./node_modules/_object-assign@4.1.1@object-assign/index.js","file":"static/index.js","publicPath":"static/index.js"}],"fbjs/lib/emptyFunction":[{"id":17,"name":"./node_modules/_fbjs@0.8.17@fbjs/lib/emptyFunction.js","file":"static/index.js","publicPath":"static/index.js"}],"./PathUtils":[{"id":18,"name":"./node_modules/_history@4.7.2@history/es/PathUtils.js","file":"static/index.js","publicPath":"static/index.js"}],"./_an-object":[{"id":19,"name":"./node_modules/_core-js@2.6.2@core-js/library/modules/_an-object.js","file":"static/index.js","publicPath":"static/index.js"}],"./_fails":[{"id":20,"name":"./node_modules/_core-js@2.6.2@core-js/library/modules/_fails.js","file":"static/index.js","publicPath":"static/index.js"}],"fbjs/lib/invariant":[{"id":21,"name":"./node_modules/_fbjs@0.8.17@fbjs/lib/invariant.js","file":"static/index.js","publicPath":"static/index.js"}],"fbjs/lib/emptyObject":[{"id":22,"name":"./node_modules/_fbjs@0.8.17@fbjs/lib/emptyObject.js","file":"static/index.js","publicPath":"static/index.js"}],"./LocationUtils":[{"id":24,"name":"./node_modules/_history@4.7.2@history/es/LocationUtils.js","file":"static/index.js","publicPath":"static/index.js"}],"./_library":[{"id":25,"name":"./node_modules/_core-js@2.6.2@core-js/library/modules/_library.js","file":"static/index.js","publicPath":"static/index.js"}],"./_uid":[{"id":26,"name":"./node_modules/_core-js@2.6.2@core-js/library/modules/_uid.js","file":"static/index.js","publicPath":"static/index.js"}],"./_property-desc":[{"id":27,"name":"./node_modules/_core-js@2.6.2@core-js/library/modules/_property-desc.js","file":"static/index.js","publicPath":"static/index.js"}],"react-dom":[{"id":28,"name":"./node_modules/_react-dom@16.4.2@react-dom/index.js","file":"static/index.js","publicPath":"static/index.js"}],"react-router-dom":[{"id":29,"name":"./node_modules/_react-router-dom@4.3.1@react-router-dom/es/index.js","file":"static/index.js","publicPath":"static/index.js"}],"prop-types/checkPropTypes":[{"id":30,"name":"./node_modules/_prop-types@15.6.2@prop-types/checkPropTypes.js","file":"static/index.js","publicPath":"static/index.js"}],"./lib/ReactPropTypesSecret":[{"id":31,"name":"./node_modules/_prop-types@15.6.2@prop-types/lib/ReactPropTypesSecret.js","file":"static/index.js","publicPath":"static/index.js"}],"./createTransitionManager":[{"id":32,"name":"./node_modules/_history@4.7.2@history/es/createTransitionManager.js","file":"static/index.js","publicPath":"static/index.js"}],"./Router":[{"id":33,"name":"./node_modules/_react-router-dom@4.3.1@react-router-dom/es/Router.js","file":"static/index.js","publicPath":"static/index.js"}],"react-router/es/Router":[{"id":34,"name":"./node_modules/_react-router@4.3.1@react-router/es/Router.js","file":"static/index.js","publicPath":"static/index.js"}],"react-router/es/matchPath":[{"id":35,"name":"./node_modules/_react-router@4.3.1@react-router/es/matchPath.js","file":"static/index.js","publicPath":"static/index.js"}],"./_defined":[{"id":36,"name":"./node_modules/_core-js@2.6.2@core-js/library/modules/_defined.js","file":"static/index.js","publicPath":"static/index.js"}],"./_shared-key":[{"id":37,"name":"./node_modules/_core-js@2.6.2@core-js/library/modules/_shared-key.js","file":"static/index.js","publicPath":"static/index.js"}],"./_shared":[{"id":38,"name":"./node_modules/_core-js@2.6.2@core-js/library/modules/_shared.js","file":"static/index.js","publicPath":"static/index.js"}],"./_to-primitive":[{"id":39,"name":"./node_modules/_core-js@2.6.2@core-js/library/modules/_to-primitive.js","file":"static/index.js","publicPath":"static/index.js"}],"./_to-integer":[{"id":40,"name":"./node_modules/_core-js@2.6.2@core-js/library/modules/_to-integer.js","file":"static/index.js","publicPath":"static/index.js"}],"./_iterators":[{"id":41,"name":"./node_modules/_core-js@2.6.2@core-js/library/modules/_iterators.js","file":"static/index.js","publicPath":"static/index.js"}],"./_object-create":[{"id":42,"name":"./node_modules/_core-js@2.6.2@core-js/library/modules/_object-create.js","file":"static/index.js","publicPath":"static/index.js"}],"./_object-keys":[{"id":43,"name":"./node_modules/_core-js@2.6.2@core-js/library/modules/_object-keys.js","file":"static/index.js","publicPath":"static/index.js"}],"./_enum-bug-keys":[{"id":44,"name":"./node_modules/_core-js@2.6.2@core-js/library/modules/_enum-bug-keys.js","file":"static/index.js","publicPath":"static/index.js"}],"./_set-to-string-tag":[{"id":45,"name":"./node_modules/_core-js@2.6.2@core-js/library/modules/_set-to-string-tag.js","file":"static/index.js","publicPath":"static/index.js"}],"../../modules/_wks-ext":[{"id":46,"name":"./node_modules/_core-js@2.6.2@core-js/library/modules/_wks-ext.js","file":"static/index.js","publicPath":"static/index.js"}],"./_wks-define":[{"id":47,"name":"./node_modules/_core-js@2.6.2@core-js/library/modules/_wks-define.js","file":"static/index.js","publicPath":"static/index.js"}],"./_object-pie":[{"id":48,"name":"./node_modules/_core-js@2.6.2@core-js/library/modules/_object-pie.js","file":"static/index.js","publicPath":"static/index.js"}],"fbjs/lib/warning":[{"id":49,"name":"./node_modules/_fbjs@0.8.17@fbjs/lib/warning.js","file":"static/index.js","publicPath":"static/index.js"}],"fbjs/lib/ExecutionEnvironment":[{"id":50,"name":"./node_modules/_fbjs@0.8.17@fbjs/lib/ExecutionEnvironment.js","file":"static/index.js","publicPath":"static/index.js"}],"fbjs/lib/getActiveElement":[{"id":51,"name":"./node_modules/_fbjs@0.8.17@fbjs/lib/getActiveElement.js","file":"static/index.js","publicPath":"static/index.js"}],"fbjs/lib/shallowEqual":[{"id":52,"name":"./node_modules/_fbjs@0.8.17@fbjs/lib/shallowEqual.js","file":"static/index.js","publicPath":"static/index.js"}],"fbjs/lib/containsNode":[{"id":53,"name":"./node_modules/_fbjs@0.8.17@fbjs/lib/containsNode.js","file":"static/index.js","publicPath":"static/index.js"}],"react-loadable":[{"id":54,"name":"./node_modules/_react-loadable@5.5.0@react-loadable/lib/index.js","file":"static/index.js","publicPath":"static/index.js"}],"./DOMUtils":[{"id":55,"name":"./node_modules/_history@4.7.2@history/es/DOMUtils.js","file":"static/index.js","publicPath":"static/index.js"}],"./Link":[{"id":56,"name":"./node_modules/_react-router-dom@4.3.1@react-router-dom/es/Link.js","file":"static/index.js","publicPath":"static/index.js"}],"./Route":[{"id":57,"name":"./node_modules/_react-router-dom@4.3.1@react-router-dom/es/Route.js","file":"static/index.js","publicPath":"static/index.js"}],"react-router/es/Route":[{"id":58,"name":"./node_modules/_react-router@4.3.1@react-router/es/Route.js","file":"static/index.js","publicPath":"static/index.js"}],"path-to-regexp":[{"id":59,"name":"./node_modules/_path-to-regexp@1.7.0@path-to-regexp/index.js","file":"static/index.js","publicPath":"static/index.js"}],"react-router/es/generatePath":[{"id":60,"name":"./node_modules/_react-router@4.3.1@react-router/es/generatePath.js","file":"static/index.js","publicPath":"static/index.js"}],"./_to-object":[{"id":61,"name":"./node_modules/_core-js@2.6.2@core-js/library/modules/_to-object.js","file":"static/index.js","publicPath":"static/index.js"}],"./_object-gpo":[{"id":62,"name":"./node_modules/_core-js@2.6.2@core-js/library/modules/_object-gpo.js","file":"static/index.js","publicPath":"static/index.js"}],"./_ctx":[{"id":63,"name":"./node_modules/_core-js@2.6.2@core-js/library/modules/_ctx.js","file":"static/index.js","publicPath":"static/index.js"}],"./_ie8-dom-define":[{"id":64,"name":"./node_modules/_core-js@2.6.2@core-js/library/modules/_ie8-dom-define.js","file":"static/index.js","publicPath":"static/index.js"}],"./_dom-create":[{"id":65,"name":"./node_modules/_core-js@2.6.2@core-js/library/modules/_dom-create.js","file":"static/index.js","publicPath":"static/index.js"}],"../helpers/typeof":[{"id":66,"name":"./node_modules/_babel-runtime@6.26.0@babel-runtime/helpers/typeof.js","file":"static/index.js","publicPath":"static/index.js"}],"./_iter-define":[{"id":67,"name":"./node_modules/_core-js@2.6.2@core-js/library/modules/_iter-define.js","file":"static/index.js","publicPath":"static/index.js"}],"./_redefine":[{"id":68,"name":"./node_modules/_core-js@2.6.2@core-js/library/modules/_redefine.js","file":"static/index.js","publicPath":"static/index.js"}],"./_object-keys-internal":[{"id":69,"name":"./node_modules/_core-js@2.6.2@core-js/library/modules/_object-keys-internal.js","file":"static/index.js","publicPath":"static/index.js"}],"./_cof":[{"id":70,"name":"./node_modules/_core-js@2.6.2@core-js/library/modules/_cof.js","file":"static/index.js","publicPath":"static/index.js"}],"./_object-gops":[{"id":71,"name":"./node_modules/_core-js@2.6.2@core-js/library/modules/_object-gops.js","file":"static/index.js","publicPath":"static/index.js"}],"./_object-gopn":[{"id":72,"name":"./node_modules/_core-js@2.6.2@core-js/library/modules/_object-gopn.js","file":"static/index.js","publicPath":"static/index.js"}],"./_object-gopd":[{"id":73,"name":"./node_modules/_core-js@2.6.2@core-js/library/modules/_object-gopd.js","file":"static/index.js","publicPath":"static/index.js"}],"D:\\jiajianrong-d\\react-ssr-demos\\pure-webpack-babel-react-router-node-ssr-config-org\\react\\src\\AppBSR.js":[{"id":76,"name":"./src/AppBSR.js","file":"static/index.js","publicPath":"static/index.js"}],"./cjs/react.production.min.js":[{"id":77,"name":"./node_modules/_react@16.4.2@react/cjs/react.production.min.js","file":"static/index.js","publicPath":"static/index.js"}],"./cjs/react.development.js":[{"id":78,"name":"./node_modules/_react@16.4.2@react/cjs/react.development.js","file":"static/index.js","publicPath":"static/index.js"}],"./cjs/react-dom.production.min.js":[{"id":79,"name":"./node_modules/_react-dom@16.4.2@react-dom/cjs/react-dom.production.min.js","file":"static/index.js","publicPath":"static/index.js"}],"./isTextNode":[{"id":80,"name":"./node_modules/_fbjs@0.8.17@fbjs/lib/isTextNode.js","file":"static/index.js","publicPath":"static/index.js"}],"./isNode":[{"id":81,"name":"./node_modules/_fbjs@0.8.17@fbjs/lib/isNode.js","file":"static/index.js","publicPath":"static/index.js"}],"./cjs/react-dom.development.js":[{"id":82,"name":"./node_modules/_react-dom@16.4.2@react-dom/cjs/react-dom.development.js","file":"static/index.js","publicPath":"static/index.js"}],"fbjs/lib/hyphenateStyleName":[{"id":83,"name":"./node_modules/_fbjs@0.8.17@fbjs/lib/hyphenateStyleName.js","file":"static/index.js","publicPath":"static/index.js"}],"./hyphenate":[{"id":84,"name":"./node_modules/_fbjs@0.8.17@fbjs/lib/hyphenate.js","file":"static/index.js","publicPath":"static/index.js"}],"fbjs/lib/camelizeStyleName":[{"id":85,"name":"./node_modules/_fbjs@0.8.17@fbjs/lib/camelizeStyleName.js","file":"static/index.js","publicPath":"static/index.js"}],"./camelize":[{"id":86,"name":"./node_modules/_fbjs@0.8.17@fbjs/lib/camelize.js","file":"static/index.js","publicPath":"static/index.js"}],"./factoryWithTypeCheckers":[{"id":87,"name":"./node_modules/_prop-types@15.6.2@prop-types/factoryWithTypeCheckers.js","file":"static/index.js","publicPath":"static/index.js"}],"./factoryWithThrowingShims":[{"id":88,"name":"./node_modules/_prop-types@15.6.2@prop-types/factoryWithThrowingShims.js","file":"static/index.js","publicPath":"static/index.js"}],"./BrowserRouter":[{"id":89,"name":"./node_modules/_react-router-dom@4.3.1@react-router-dom/es/BrowserRouter.js","file":"static/index.js","publicPath":"static/index.js"}],"./createBrowserHistory":[{"id":90,"name":"./node_modules/_history@4.7.2@history/es/createBrowserHistory.js","file":"static/index.js","publicPath":"static/index.js"}],"resolve-pathname":[{"id":91,"name":"./node_modules/_resolve-pathname@2.2.0@resolve-pathname/index.js","file":"static/index.js","publicPath":"static/index.js"}],"value-equal":[{"id":92,"name":"./node_modules/_value-equal@0.4.0@value-equal/index.js","file":"static/index.js","publicPath":"static/index.js"}],"./createHashHistory":[{"id":93,"name":"./node_modules/_history@4.7.2@history/es/createHashHistory.js","file":"static/index.js","publicPath":"static/index.js"}],"./createMemoryHistory":[{"id":94,"name":"./node_modules/_history@4.7.2@history/es/createMemoryHistory.js","file":"static/index.js","publicPath":"static/index.js"}],"./HashRouter":[{"id":95,"name":"./node_modules/_react-router-dom@4.3.1@react-router-dom/es/HashRouter.js","file":"static/index.js","publicPath":"static/index.js"}],"./MemoryRouter":[{"id":96,"name":"./node_modules/_react-router-dom@4.3.1@react-router-dom/es/MemoryRouter.js","file":"static/index.js","publicPath":"static/index.js"}],"react-router/es/MemoryRouter":[{"id":97,"name":"./node_modules/_react-router@4.3.1@react-router/es/MemoryRouter.js","file":"static/index.js","publicPath":"static/index.js"}],"./NavLink":[{"id":98,"name":"./node_modules/_react-router-dom@4.3.1@react-router-dom/es/NavLink.js","file":"static/index.js","publicPath":"static/index.js"}],"isarray":[{"id":99,"name":"./node_modules/_isarray@0.0.1@isarray/index.js","file":"static/index.js","publicPath":"static/index.js"}],"./Prompt":[{"id":100,"name":"./node_modules/_react-router-dom@4.3.1@react-router-dom/es/Prompt.js","file":"static/index.js","publicPath":"static/index.js"}],"react-router/es/Prompt":[{"id":101,"name":"./node_modules/_react-router@4.3.1@react-router/es/Prompt.js","file":"static/index.js","publicPath":"static/index.js"}],"./Redirect":[{"id":102,"name":"./node_modules/_react-router-dom@4.3.1@react-router-dom/es/Redirect.js","file":"static/index.js","publicPath":"static/index.js"}],"react-router/es/Redirect":[{"id":103,"name":"./node_modules/_react-router@4.3.1@react-router/es/Redirect.js","file":"static/index.js","publicPath":"static/index.js"}],"./StaticRouter":[{"id":104,"name":"./node_modules/_react-router-dom@4.3.1@react-router-dom/es/StaticRouter.js","file":"static/index.js","publicPath":"static/index.js"}],"react-router/es/StaticRouter":[{"id":105,"name":"./node_modules/_react-router@4.3.1@react-router/es/StaticRouter.js","file":"static/index.js","publicPath":"static/index.js"}],"./Switch":[{"id":106,"name":"./node_modules/_react-router-dom@4.3.1@react-router-dom/es/Switch.js","file":"static/index.js","publicPath":"static/index.js"}],"react-router/es/Switch":[{"id":107,"name":"./node_modules/_react-router@4.3.1@react-router/es/Switch.js","file":"static/index.js","publicPath":"static/index.js"}],"./generatePath":[{"id":108,"name":"./node_modules/_react-router-dom@4.3.1@react-router-dom/es/generatePath.js","file":"static/index.js","publicPath":"static/index.js"}],"./matchPath":[{"id":109,"name":"./node_modules/_react-router-dom@4.3.1@react-router-dom/es/matchPath.js","file":"static/index.js","publicPath":"static/index.js"}],"./withRouter":[{"id":110,"name":"./node_modules/_react-router-dom@4.3.1@react-router-dom/es/withRouter.js","file":"static/index.js","publicPath":"static/index.js"}],"react-router/es/withRouter":[{"id":111,"name":"./node_modules/_react-router@4.3.1@react-router/es/withRouter.js","file":"static/index.js","publicPath":"static/index.js"}],"hoist-non-react-statics":[{"id":112,"name":"./node_modules/_hoist-non-react-statics@2.5.5@hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js","file":"static/index.js","publicPath":"static/index.js"}],"./Routes":[{"id":113,"name":"./src/Routes.js","file":"static/index.js","publicPath":"static/index.js"}],"./Home":[{"id":114,"name":"./src/Home.js","file":"static/index.js","publicPath":"static/index.js"}],"babel-runtime/core-js/object/get-prototype-of":[{"id":115,"name":"./node_modules/_babel-runtime@6.26.0@babel-runtime/core-js/object/get-prototype-of.js","file":"static/index.js","publicPath":"static/index.js"}],"core-js/library/fn/object/get-prototype-of":[{"id":116,"name":"./node_modules/_core-js@2.6.2@core-js/library/fn/object/get-prototype-of.js","file":"static/index.js","publicPath":"static/index.js"}],"../../modules/es6.object.get-prototype-of":[{"id":117,"name":"./node_modules/_core-js@2.6.2@core-js/library/modules/es6.object.get-prototype-of.js","file":"static/index.js","publicPath":"static/index.js"}],"./_object-sap":[{"id":118,"name":"./node_modules/_core-js@2.6.2@core-js/library/modules/_object-sap.js","file":"static/index.js","publicPath":"static/index.js"}],"./_a-function":[{"id":119,"name":"./node_modules/_core-js@2.6.2@core-js/library/modules/_a-function.js","file":"static/index.js","publicPath":"static/index.js"}],"babel-runtime/helpers/classCallCheck":[{"id":120,"name":"./node_modules/_babel-runtime@6.26.0@babel-runtime/helpers/classCallCheck.js","file":"static/index.js","publicPath":"static/index.js"}],"babel-runtime/helpers/createClass":[{"id":121,"name":"./node_modules/_babel-runtime@6.26.0@babel-runtime/helpers/createClass.js","file":"static/index.js","publicPath":"static/index.js"}],"../core-js/object/define-property":[{"id":122,"name":"./node_modules/_babel-runtime@6.26.0@babel-runtime/core-js/object/define-property.js","file":"static/index.js","publicPath":"static/index.js"}],"core-js/library/fn/object/define-property":[{"id":123,"name":"./node_modules/_core-js@2.6.2@core-js/library/fn/object/define-property.js","file":"static/index.js","publicPath":"static/index.js"}],"../../modules/es6.object.define-property":[{"id":124,"name":"./node_modules/_core-js@2.6.2@core-js/library/modules/es6.object.define-property.js","file":"static/index.js","publicPath":"static/index.js"}],"babel-runtime/helpers/possibleConstructorReturn":[{"id":125,"name":"./node_modules/_babel-runtime@6.26.0@babel-runtime/helpers/possibleConstructorReturn.js","file":"static/index.js","publicPath":"static/index.js"}],"../core-js/symbol/iterator":[{"id":126,"name":"./node_modules/_babel-runtime@6.26.0@babel-runtime/core-js/symbol/iterator.js","file":"static/index.js","publicPath":"static/index.js"}],"core-js/library/fn/symbol/iterator":[{"id":127,"name":"./node_modules/_core-js@2.6.2@core-js/library/fn/symbol/iterator.js","file":"static/index.js","publicPath":"static/index.js"}],"../../modules/es6.string.iterator":[{"id":128,"name":"./node_modules/_core-js@2.6.2@core-js/library/modules/es6.string.iterator.js","file":"static/index.js","publicPath":"static/index.js"}],"./_string-at":[{"id":129,"name":"./node_modules/_core-js@2.6.2@core-js/library/modules/_string-at.js","file":"static/index.js","publicPath":"static/index.js"}],"./_iter-create":[{"id":130,"name":"./node_modules/_core-js@2.6.2@core-js/library/modules/_iter-create.js","file":"static/index.js","publicPath":"static/index.js"}],"./_object-dps":[{"id":131,"name":"./node_modules/_core-js@2.6.2@core-js/library/modules/_object-dps.js","file":"static/index.js","publicPath":"static/index.js"}],"./_iobject":[{"id":132,"name":"./node_modules/_core-js@2.6.2@core-js/library/modules/_iobject.js","file":"static/index.js","publicPath":"static/index.js"}],"./_array-includes":[{"id":133,"name":"./node_modules/_core-js@2.6.2@core-js/library/modules/_array-includes.js","file":"static/index.js","publicPath":"static/index.js"}],"./_to-length":[{"id":134,"name":"./node_modules/_core-js@2.6.2@core-js/library/modules/_to-length.js","file":"static/index.js","publicPath":"static/index.js"}],"./_to-absolute-index":[{"id":135,"name":"./node_modules/_core-js@2.6.2@core-js/library/modules/_to-absolute-index.js","file":"static/index.js","publicPath":"static/index.js"}],"./_html":[{"id":136,"name":"./node_modules/_core-js@2.6.2@core-js/library/modules/_html.js","file":"static/index.js","publicPath":"static/index.js"}],"../../modules/web.dom.iterable":[{"id":137,"name":"./node_modules/_core-js@2.6.2@core-js/library/modules/web.dom.iterable.js","file":"static/index.js","publicPath":"static/index.js"}],"./es6.array.iterator":[{"id":138,"name":"./node_modules/_core-js@2.6.2@core-js/library/modules/es6.array.iterator.js","file":"static/index.js","publicPath":"static/index.js"}],"./_add-to-unscopables":[{"id":139,"name":"./node_modules/_core-js@2.6.2@core-js/library/modules/_add-to-unscopables.js","file":"static/index.js","publicPath":"static/index.js"}],"./_iter-step":[{"id":140,"name":"./node_modules/_core-js@2.6.2@core-js/library/modules/_iter-step.js","file":"static/index.js","publicPath":"static/index.js"}],"../core-js/symbol":[{"id":141,"name":"./node_modules/_babel-runtime@6.26.0@babel-runtime/core-js/symbol.js","file":"static/index.js","publicPath":"static/index.js"}],"core-js/library/fn/symbol":[{"id":142,"name":"./node_modules/_core-js@2.6.2@core-js/library/fn/symbol/index.js","file":"static/index.js","publicPath":"static/index.js"}],"../../modules/es6.symbol":[{"id":143,"name":"./node_modules/_core-js@2.6.2@core-js/library/modules/es6.symbol.js","file":"static/index.js","publicPath":"static/index.js"}],"./_meta":[{"id":144,"name":"./node_modules/_core-js@2.6.2@core-js/library/modules/_meta.js","file":"static/index.js","publicPath":"static/index.js"}],"./_enum-keys":[{"id":145,"name":"./node_modules/_core-js@2.6.2@core-js/library/modules/_enum-keys.js","file":"static/index.js","publicPath":"static/index.js"}],"./_is-array":[{"id":146,"name":"./node_modules/_core-js@2.6.2@core-js/library/modules/_is-array.js","file":"static/index.js","publicPath":"static/index.js"}],"./_object-gopn-ext":[{"id":147,"name":"./node_modules/_core-js@2.6.2@core-js/library/modules/_object-gopn-ext.js","file":"static/index.js","publicPath":"static/index.js"}],"../../modules/es6.object.to-string":[{"id":148,"name":"./node_modules/_core-js@2.6.2@core-js/library/modules/es6.object.to-string.js","file":"static/index.js","publicPath":"static/index.js"}],"../../modules/es7.symbol.async-iterator":[{"id":149,"name":"./node_modules/_core-js@2.6.2@core-js/library/modules/es7.symbol.async-iterator.js","file":"static/index.js","publicPath":"static/index.js"}],"../../modules/es7.symbol.observable":[{"id":150,"name":"./node_modules/_core-js@2.6.2@core-js/library/modules/es7.symbol.observable.js","file":"static/index.js","publicPath":"static/index.js"}],"babel-runtime/helpers/inherits":[{"id":151,"name":"./node_modules/_babel-runtime@6.26.0@babel-runtime/helpers/inherits.js","file":"static/index.js","publicPath":"static/index.js"}],"../core-js/object/set-prototype-of":[{"id":152,"name":"./node_modules/_babel-runtime@6.26.0@babel-runtime/core-js/object/set-prototype-of.js","file":"static/index.js","publicPath":"static/index.js"}],"core-js/library/fn/object/set-prototype-of":[{"id":153,"name":"./node_modules/_core-js@2.6.2@core-js/library/fn/object/set-prototype-of.js","file":"static/index.js","publicPath":"static/index.js"}],"../../modules/es6.object.set-prototype-of":[{"id":154,"name":"./node_modules/_core-js@2.6.2@core-js/library/modules/es6.object.set-prototype-of.js","file":"static/index.js","publicPath":"static/index.js"}],"./_set-proto":[{"id":155,"name":"./node_modules/_core-js@2.6.2@core-js/library/modules/_set-proto.js","file":"static/index.js","publicPath":"static/index.js"}],"../core-js/object/create":[{"id":156,"name":"./node_modules/_babel-runtime@6.26.0@babel-runtime/core-js/object/create.js","file":"static/index.js","publicPath":"static/index.js"}],"core-js/library/fn/object/create":[{"id":157,"name":"./node_modules/_core-js@2.6.2@core-js/library/fn/object/create.js","file":"static/index.js","publicPath":"static/index.js"}],"../../modules/es6.object.create":[{"id":158,"name":"./node_modules/_core-js@2.6.2@core-js/library/modules/es6.object.create.js","file":"static/index.js","publicPath":"static/index.js"}]}

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(1);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactLoadable = __webpack_require__(3);

var _reactLoadable2 = _interopRequireDefault(_reactLoadable);

var _reactRouterDom = __webpack_require__(2);

var _Routes = __webpack_require__(17);

var _Routes2 = _interopRequireDefault(_Routes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var App = function App(routeKey, staticContext) {
    return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
            _reactRouterDom.StaticRouter,
            { location: routeKey, context: staticContext },
            _react2.default.createElement(_Routes2.default, null)
        )
    );
};

module.exports = App;

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _promise = __webpack_require__(4);

var _promise2 = _interopRequireDefault(_promise);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(1);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactLoadable = __webpack_require__(3);

var _reactLoadable2 = _interopRequireDefault(_reactLoadable);

var _reactRouterDom = __webpack_require__(2);

var _Home = __webpack_require__(18);

var _Home2 = _interopRequireDefault(_Home);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//--------------
// async route
//--------------
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

var Footer = (0, _reactLoadable2.default)({
    loader: function loader() {
        return _promise2.default.resolve().then(function () {
            return __webpack_require__(6);
        });
    },
    modules: ['./Footer'],
    webpack: function webpack() {
        return [/*require.resolve*/(6)];
    },
    loading: function loading() {
        return _react2.default.createElement(
            'div',
            null,
            'Loading...'
        );
    }
    //  modules: ['./Footer'],
    //  webpack: () => [require.resolveWeak('./Footer')],
});

//--------------
// module.exports = App;
//--------------

exports.default = function () {
    return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
            _reactRouterDom.Switch,
            null,
            _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/', component: _Home2.default }),
            _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/hello', component: Hello }),
            _react2.default.createElement(_reactRouterDom.Redirect, { to: '/' })
        ),
        _react2.default.createElement(Footer, null)
    );
};

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _getPrototypeOf = __webpack_require__(19);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(20);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(21);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(22);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(23);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(1);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactRouterDom = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

console.log('home component compiled');

module.exports = function (_React$Component) {
    (0, _inherits3.default)(_class, _React$Component);

    function _class() {
        (0, _classCallCheck3.default)(this, _class);
        return (0, _possibleConstructorReturn3.default)(this, (_class.__proto__ || (0, _getPrototypeOf2.default)(_class)).apply(this, arguments));
    }

    (0, _createClass3.default)(_class, [{
        key: 'render',
        value: function render() {
            console.log('home component rendered');
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
        }
    }]);
    return _class;
}(_react2.default.Component);

/***/ }),
/* 19 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/core-js/object/get-prototype-of");

/***/ }),
/* 20 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/helpers/classCallCheck");

/***/ }),
/* 21 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/helpers/createClass");

/***/ }),
/* 22 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/helpers/possibleConstructorReturn");

/***/ }),
/* 23 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/helpers/inherits");

/***/ })
/******/ ]);