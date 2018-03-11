
          window.__NEXT_REGISTER_PAGE('/', function() {
            var comp = module.exports =
webpackJsonp([5],{

/***/ 691:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__resourceQuery) {

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _regenerator = __webpack_require__(723);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _getIterator2 = __webpack_require__(724);

var _getIterator3 = _interopRequireDefault(_getIterator2);

var _asyncToGenerator2 = __webpack_require__(722);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = __webpack_require__(718);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(716);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(717);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(720);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(719);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(12);

var _react2 = _interopRequireDefault(_react);

var _link = __webpack_require__(562);

var _link2 = _interopRequireDefault(_link);

var _head = __webpack_require__(702);

var _head2 = _interopRequireDefault(_head);

var _index_header = __webpack_require__(708);

var _index_header2 = _interopRequireDefault(_index_header);

var _index_banner = __webpack_require__(706);

var _index_banner2 = _interopRequireDefault(_index_banner);

var _script_import = __webpack_require__(709);

var _script_import2 = _interopRequireDefault(_script_import);

var _index_main_view = __webpack_require__(703);

var _index_main_view2 = _interopRequireDefault(_index_main_view);

var _recommend_list = __webpack_require__(705);

var _recommend_list2 = _interopRequireDefault(_recommend_list);

var _index_footer = __webpack_require__(707);

var _index_footer2 = _interopRequireDefault(_index_footer);

var _service_path = __webpack_require__(711);

var _service_path2 = _interopRequireDefault(_service_path);

var _fetchQuery = __webpack_require__(710);

var _fetchQuery2 = _interopRequireDefault(_fetchQuery);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'e:\\VSCode\\react\\\u9879\u76EE1\\website_server\\pages\\index.js?entry';


var _class = function (_React$Component) {
    (0, _inherits3.default)(_class, _React$Component);

    function _class() {
        (0, _classCallCheck3.default)(this, _class);

        return (0, _possibleConstructorReturn3.default)(this, (_class.__proto__ || (0, _getPrototypeOf2.default)(_class)).apply(this, arguments));
    }

    (0, _createClass3.default)(_class, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement('div', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 133
                }
            }, _react2.default.createElement(_head2.default, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 134
                }
            }), _react2.default.createElement(_index_banner2.default, { list: this.props.top_ads, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 135
                }
            }), _react2.default.createElement(_index_header2.default, { channel_list: this.props.nav_list, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 136
                }
            }), _react2.default.createElement('div', { className: 'container', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 137
                }
            }, _react2.default.createElement('div', { className: 'col-md-8', id: 'main_view', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 139
                }
            }, _react2.default.createElement(_index_main_view2.default, { list: this.props.main_view_list, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 140
                }
            })), _react2.default.createElement('div', { className: 'col-md-4', id: 'sidebar', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 143
                }
            }, _react2.default.createElement(_recommend_list2.default, { list: this.props.hot_list, title: '\u70ED\u95E8\u6392\u884C', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 144
                }
            }), _react2.default.createElement(_recommend_list2.default, { list: this.props.recommend_list, title: '\u63A8\u8350\u9605\u8BFB', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 145
                }
            }))), _react2.default.createElement(_index_footer2.default, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 148
                }
            }), _react2.default.createElement(_script_import2.default, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 149
                }
            }));
        }
    }], [{
        key: 'getInitialProps',
        value: function () {
            var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(arg) {
                var pathname, query, asPath, req, res, jsonPageRes, err, nav_list, content_main_list, recommend, top_ads, content_hits, hotArray, hot_list, tempArr;
                return _regenerator2.default.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                pathname = arg.pathname, query = arg.query, asPath = arg.asPath, req = arg.req, res = arg.res, jsonPageRes = arg.jsonPageRes, err = arg.err;
                                //导航条11

                                _context.next = 3;
                                return _fetchQuery2.default.find((0, _service_path2.default)(req).find, "channel", { show: true }, { order_index: 1 });

                            case 3:
                                nav_list = _context.sent;
                                _context.next = 6;
                                return _fetchQuery2.default.find((0, _service_path2.default)(req).find, "content", {
                                    show: true,
                                    draft: false,
                                    beginTime: { $lt: new Date(Date.now()) }
                                }, {
                                    isTop: -1, createTime: -1
                                }, 1, 10);

                            case 6:
                                content_main_list = _context.sent;
                                _context.next = 9;
                                return _fetchQuery2.default.find((0, _service_path2.default)(req).find, "content", {
                                    show: true,
                                    draft: false,
                                    beginTime: { $lt: new Date(Date.now()) },
                                    isRecommend: true
                                }, {
                                    createTime: -1
                                }, 1, 10);

                            case 9:
                                recommend = _context.sent;
                                _context.next = 12;
                                return _fetchQuery2.default.find((0, _service_path2.default)(req).find, "ad", {
                                    show: true,
                                    sort_key: "top"
                                }, {
                                    createTime: -1
                                }, 1, 10);

                            case 12:
                                top_ads = _context.sent;
                                _context.next = 15;
                                return _fetchQuery2.default.find((0, _service_path2.default)(req).find, "content_hits", {}, {
                                    create_date: -1, hits: -1
                                }, 1, 10);

                            case 15:
                                content_hits = _context.sent;
                                hotArray = content_hits.list.map(function (v, k) {
                                    return v.content_id;
                                });
                                _context.next = 19;
                                return _fetchQuery2.default.find((0, _service_path2.default)(req).find, "content", {
                                    _id: { $in: hotArray }
                                }, {}, 1, 10);

                            case 19:
                                hot_list = _context.sent;

                                hot_list = hotArray.map(function (v, k) {
                                    var _iteratorNormalCompletion = true;
                                    var _didIteratorError = false;
                                    var _iteratorError = undefined;

                                    try {
                                        for (var _iterator = (0, _getIterator3.default)(hot_list.list), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                                            var item = _step.value;

                                            if (item._id === v) {
                                                return item;
                                            }
                                        }
                                    } catch (err) {
                                        _didIteratorError = true;
                                        _iteratorError = err;
                                    } finally {
                                        try {
                                            if (!_iteratorNormalCompletion && _iterator.return) {
                                                _iterator.return();
                                            }
                                        } finally {
                                            if (_didIteratorError) {
                                                throw _iteratorError;
                                            }
                                        }
                                    }
                                });
                                //去重
                                tempArr = [];

                                hot_list = hot_list.filter(function (v, k, obj) {
                                    if (tempArr.indexOf(v) >= 0) {
                                        return false;
                                    } else {
                                        tempArr.push(v);
                                        return v;
                                    }
                                });

                                return _context.abrupt('return', {
                                    nav_list: nav_list.list,
                                    main_view_list: content_main_list.list,
                                    recommend_list: recommend.list,
                                    top_ads: top_ads.list,
                                    hot_list: hot_list
                                });

                            case 24:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));

            function getInitialProps(_x) {
                return _ref.apply(this, arguments);
            }

            return getInitialProps;
        }()
    }]);

    return _class;
}(_react2.default.Component);

exports.default = _class;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "e:\\VSCode\\react\\项目1\\website_server\\pages\\index.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "e:\\VSCode\\react\\项目1\\website_server\\pages\\index.js"); } } })();
    (function (Component, route) {
      if (false) return
      if (false) return

      var qs = __webpack_require__(85)
      var params = qs.parse(__resourceQuery.slice(1))
      if (params.entry == null) return

      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(module.exports.default || module.exports, "/")
  
/* WEBPACK VAR INJECTION */}.call(exports, "?entry"))

/***/ }),

/***/ 702:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__resourceQuery) {

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _getPrototypeOf = __webpack_require__(718);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(716);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(717);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(720);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(719);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(12);

var _react2 = _interopRequireDefault(_react);

var _link = __webpack_require__(562);

var _link2 = _interopRequireDefault(_link);

var _head = __webpack_require__(729);

var _head2 = _interopRequireDefault(_head);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'e:\\VSCode\\react\\\u9879\u76EE1\\website_server\\pages\\component\\head.js';


var _class = function (_Component) {
    (0, _inherits3.default)(_class, _Component);

    function _class(props) {
        (0, _classCallCheck3.default)(this, _class);

        return (0, _possibleConstructorReturn3.default)(this, (_class.__proto__ || (0, _getPrototypeOf2.default)(_class)).call(this));
    }

    (0, _createClass3.default)(_class, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(_head2.default, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 13
                }
            }, _react2.default.createElement('meta', { charset: 'UTF-8', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 14
                }
            }), _react2.default.createElement('meta', { name: 'viewport', content: 'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 15
                }
            }), _react2.default.createElement('meta', { name: 'Description', content: '\u4E8C\u7EC4\u5B66\u4E60\u7F51\u7AD9\u5F00\u53D1\u7684\u7EC3\u4E60\u7AD9\u70B9', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 16
                }
            }), _react2.default.createElement('meta', { name: 'Keywords', content: '\u4E8C\u7EC4 \u5B66\u4E60 \u7EC3\u4E60', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 17
                }
            }), _react2.default.createElement('link', { rel: 'stylesheet', type: 'text/css', href: '/bootstrap/css/bootstrap.min.css', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 18
                }
            }), _react2.default.createElement('link', { rel: 'stylesheet', type: 'text/css', href: '/css/website.css', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 19
                }
            }), _react2.default.createElement('title', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 20
                }
            }, this.props.title, ' \u4E8C\u7EC4\u7EC3\u4E60\u9879\u76EE-\u9996\u9875'));
        }
    }]);

    return _class;
}(_react.Component);

exports.default = _class;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "e:\\VSCode\\react\\项目1\\website_server\\pages\\component\\head.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "e:\\VSCode\\react\\项目1\\website_server\\pages\\component\\head.js"); } } })();
    (function (Component, route) {
      if (false) return
      if (true) return

      var qs = __webpack_require__(85)
      var params = qs.parse(__resourceQuery.slice(1))
      if (params.entry == null) return

      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(module.exports.default || module.exports, "/component\\head")
  
/* WEBPACK VAR INJECTION */}.call(exports, ""))

/***/ }),

/***/ 703:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__resourceQuery) {

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _getIterator2 = __webpack_require__(724);

var _getIterator3 = _interopRequireDefault(_getIterator2);

var _getPrototypeOf = __webpack_require__(718);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(716);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(717);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(720);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(719);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(12);

var _react2 = _interopRequireDefault(_react);

var _index_main_view_item = __webpack_require__(704);

var _index_main_view_item2 = _interopRequireDefault(_index_main_view_item);

var _link = __webpack_require__(562);

var _link2 = _interopRequireDefault(_link);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'e:\\VSCode\\react\\\u9879\u76EE1\\website_server\\pages\\component\\index\\index_main_view.js';


var _class = function (_React$Component) {
    (0, _inherits3.default)(_class, _React$Component);

    function _class() {
        (0, _classCallCheck3.default)(this, _class);

        return (0, _possibleConstructorReturn3.default)(this, (_class.__proto__ || (0, _getPrototypeOf2.default)(_class)).apply(this, arguments));
    }

    (0, _createClass3.default)(_class, [{
        key: 'createList',
        value: function createList() {
            var results = [],
                count = 0;
            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = undefined;

            try {
                for (var _iterator = (0, _getIterator3.default)(this.props.list), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                    var item = _step.value;

                    results.push(_react2.default.createElement(_index_main_view_item2.default, { item: item, __source: {
                            fileName: _jsxFileName,
                            lineNumber: 11
                        }
                    }));
                }
            } catch (err) {
                _didIteratorError = true;
                _iteratorError = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion && _iterator.return) {
                        _iterator.return();
                    }
                } finally {
                    if (_didIteratorError) {
                        throw _iteratorError;
                    }
                }
            }

            return results;
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement('ul', { className: 'main_view_list', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 19
                }
            }, this.createList());
        }
    }]);

    return _class;
}(_react2.default.Component);

exports.default = _class;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "e:\\VSCode\\react\\项目1\\website_server\\pages\\component\\index\\index_main_view.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "e:\\VSCode\\react\\项目1\\website_server\\pages\\component\\index\\index_main_view.js"); } } })();
    (function (Component, route) {
      if (false) return
      if (true) return

      var qs = __webpack_require__(85)
      var params = qs.parse(__resourceQuery.slice(1))
      if (params.entry == null) return

      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(module.exports.default || module.exports, "/component\\index\\index_main_view")
  
/* WEBPACK VAR INJECTION */}.call(exports, ""))

/***/ }),

/***/ 704:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__resourceQuery) {

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _getPrototypeOf = __webpack_require__(718);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(716);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(717);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(720);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(719);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(12);

var _react2 = _interopRequireDefault(_react);

var _moment = __webpack_require__(551);

var _moment2 = _interopRequireDefault(_moment);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'e:\\VSCode\\react\\\u9879\u76EE1\\website_server\\pages\\component\\index\\index_main_view_item.js';


var _class = function (_React$Component) {
    (0, _inherits3.default)(_class, _React$Component);

    function _class() {
        (0, _classCallCheck3.default)(this, _class);

        return (0, _possibleConstructorReturn3.default)(this, (_class.__proto__ || (0, _getPrototypeOf2.default)(_class)).apply(this, arguments));
    }

    (0, _createClass3.default)(_class, [{
        key: 'render',
        value: function render() {
            var item = this.props.item;

            return _react2.default.createElement('li', { className: 'main_view_list_item panel panel-default', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 7
                }
            }, _react2.default.createElement('div', { className: 'panel-body', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 8
                }
            }, _react2.default.createElement('h2', { className: 'title', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 9
                }
            }, item.title), _react2.default.createElement('div', { className: 'info', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 10
                }
            }, _react2.default.createElement('span', { className: 'author', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 11
                }
            }, item.author), _react2.default.createElement('span', { className: 'begin_time', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 12
                }
            }, (0, _moment2.default)(item.createTime).format("YYYY-MM-DD HH:mm:ss"))), item.titleImage && _react2.default.createElement('div', { className: 'item_title_image', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 15
                }
            }, _react2.default.createElement('img', { src: '/uploadfile/' + item.titleImage, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 16
                }
            })), _react2.default.createElement('p', { className: 'sub_title', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 19
                }
            }, item.subTitle), _react2.default.createElement('hr', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 22
                }
            }), _react2.default.createElement('a', { className: 'btn btn-default', href: '/content/full_text?id=' + item._id,
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 23
                }
            }, '\u9605\u8BFB\u5168\u6587')));
        }
    }]);

    return _class;
}(_react2.default.Component);

exports.default = _class;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "e:\\VSCode\\react\\项目1\\website_server\\pages\\component\\index\\index_main_view_item.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "e:\\VSCode\\react\\项目1\\website_server\\pages\\component\\index\\index_main_view_item.js"); } } })();
    (function (Component, route) {
      if (false) return
      if (true) return

      var qs = __webpack_require__(85)
      var params = qs.parse(__resourceQuery.slice(1))
      if (params.entry == null) return

      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(module.exports.default || module.exports, "/component\\index\\index_main_view_item")
  
/* WEBPACK VAR INJECTION */}.call(exports, ""))

/***/ }),

/***/ 705:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__resourceQuery) {

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _getPrototypeOf = __webpack_require__(718);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(716);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(717);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(720);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(719);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(12);

var _react2 = _interopRequireDefault(_react);

var _link = __webpack_require__(562);

var _link2 = _interopRequireDefault(_link);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'e:\\VSCode\\react\\\u9879\u76EE1\\website_server\\pages\\component\\index\\recommend_list.js';


var _class = function (_React$Component) {
    (0, _inherits3.default)(_class, _React$Component);

    function _class() {
        (0, _classCallCheck3.default)(this, _class);

        return (0, _possibleConstructorReturn3.default)(this, (_class.__proto__ || (0, _getPrototypeOf2.default)(_class)).apply(this, arguments));
    }

    (0, _createClass3.default)(_class, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement('div', { className: 'panel panel-default', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 6
                }
            }, _react2.default.createElement('div', { className: 'panel-heading', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 7
                }
            }, this.props.title || "推荐阅读"), _react2.default.createElement('div', { className: 'panel-body', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 8
                }
            }, _react2.default.createElement('ul', { className: 'sidebar_list_ul', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 9
                }
            }, this.props.list.map(function (v, k) {
                return _react2.default.createElement('li', {
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 12
                    }
                }, _react2.default.createElement(_link2.default, { className: 'link', href: '/content/full_text?id=' + v._id, title: v.title, target: '_blank', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 13
                    }
                }, v.title));
            }))));
        }
    }]);

    return _class;
}(_react2.default.Component);

exports.default = _class;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "e:\\VSCode\\react\\项目1\\website_server\\pages\\component\\index\\recommend_list.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "e:\\VSCode\\react\\项目1\\website_server\\pages\\component\\index\\recommend_list.js"); } } })();
    (function (Component, route) {
      if (false) return
      if (true) return

      var qs = __webpack_require__(85)
      var params = qs.parse(__resourceQuery.slice(1))
      if (params.entry == null) return

      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(module.exports.default || module.exports, "/component\\index\\recommend_list")
  
/* WEBPACK VAR INJECTION */}.call(exports, ""))

/***/ }),

/***/ 706:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__resourceQuery) {

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _getPrototypeOf = __webpack_require__(718);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(716);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(717);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(720);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(719);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(12);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "e:\\VSCode\\react\\\u9879\u76EE1\\website_server\\pages\\component\\index_banner.js";


var _class = function (_React$Component) {
    (0, _inherits3.default)(_class, _React$Component);

    function _class() {
        (0, _classCallCheck3.default)(this, _class);

        return (0, _possibleConstructorReturn3.default)(this, (_class.__proto__ || (0, _getPrototypeOf2.default)(_class)).apply(this, arguments));
    }

    (0, _createClass3.default)(_class, [{
        key: "render",
        value: function render() {
            var list = this.props.list;

            return _react2.default.createElement("div", { id: "carousel-example-generic", className: "carousel slide", "data-ride": "carousel", __source: {
                    fileName: _jsxFileName,
                    lineNumber: 7
                }
            }, _react2.default.createElement("ol", { className: "carousel-indicators", __source: {
                    fileName: _jsxFileName,
                    lineNumber: 8
                }
            }, list && list.map(function (v, k) {
                return _react2.default.createElement("li", {
                    "data-target": "#carousel-example-generic",
                    key: k,
                    "data-slide-to": k,
                    className: k === 0 ? "active" : "",
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 12
                    }
                });
            })), _react2.default.createElement("div", { className: "carousel-inner", role: "listbox", style: { height: "240px", overflow: "hidden" }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 24
                }
            }, list && list.map(function (v, k) {
                return _react2.default.createElement("div", { className: "item " + (k === 0 ? "active" : ""), __source: {
                        fileName: _jsxFileName,
                        lineNumber: 28
                    }
                }, _react2.default.createElement("img", { className: "top_ad_photo ", src: "/uploadfile/" + v.photo, alt: v.title, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 29
                    }
                }), _react2.default.createElement("div", { className: "carousel-caption", __source: {
                        fileName: _jsxFileName,
                        lineNumber: 30
                    }
                }, v.title));
            })), _react2.default.createElement("a", { className: "left carousel-control", href: "#carousel-example-generic", role: "button", "data-slide": "prev", __source: {
                    fileName: _jsxFileName,
                    lineNumber: 39
                }
            }, _react2.default.createElement("span", { className: "glyphicon glyphicon-chevron-left", "aria-hidden": "true", __source: {
                    fileName: _jsxFileName,
                    lineNumber: 40
                }
            }), _react2.default.createElement("span", { className: "sr-only", __source: {
                    fileName: _jsxFileName,
                    lineNumber: 41
                }
            }, "Previous")), _react2.default.createElement("a", { className: "right carousel-control", href: "#carousel-example-generic", role: "button", "data-slide": "next", __source: {
                    fileName: _jsxFileName,
                    lineNumber: 43
                }
            }, _react2.default.createElement("span", { className: "glyphicon glyphicon-chevron-right", "aria-hidden": "true", __source: {
                    fileName: _jsxFileName,
                    lineNumber: 44
                }
            }), _react2.default.createElement("span", { className: "sr-only", __source: {
                    fileName: _jsxFileName,
                    lineNumber: 45
                }
            }, "Next")));
        }
    }]);

    return _class;
}(_react2.default.Component);

exports.default = _class;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "e:\\VSCode\\react\\项目1\\website_server\\pages\\component\\index_banner.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "e:\\VSCode\\react\\项目1\\website_server\\pages\\component\\index_banner.js"); } } })();
    (function (Component, route) {
      if (false) return
      if (true) return

      var qs = __webpack_require__(85)
      var params = qs.parse(__resourceQuery.slice(1))
      if (params.entry == null) return

      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(module.exports.default || module.exports, "/component\\index_banner")
  
/* WEBPACK VAR INJECTION */}.call(exports, ""))

/***/ }),

/***/ 707:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__resourceQuery) {

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _getPrototypeOf = __webpack_require__(718);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(716);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(717);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(720);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(719);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(12);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "e:\\VSCode\\react\\\u9879\u76EE1\\website_server\\pages\\component\\index_footer.js";


var _class = function (_React$Component) {
    (0, _inherits3.default)(_class, _React$Component);

    function _class() {
        (0, _classCallCheck3.default)(this, _class);

        return (0, _possibleConstructorReturn3.default)(this, (_class.__proto__ || (0, _getPrototypeOf2.default)(_class)).apply(this, arguments));
    }

    (0, _createClass3.default)(_class, [{
        key: "render",
        value: function render() {
            return _react2.default.createElement("div", { className: "container-fluid index_footer", __source: {
                    fileName: _jsxFileName,
                    lineNumber: 5
                }
            }, _react2.default.createElement("ul", {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 6
                }
            }, _react2.default.createElement("li", {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 7
                }
            }, "Copyright \xA9 \u6CA1\u6709\u7248\u6743\u6240\u6709"), _react2.default.createElement("li", {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 8
                }
            }, "\u9ED1ICP\u5907 00000000000000")));
        }
    }]);

    return _class;
}(_react2.default.Component);

exports.default = _class;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "e:\\VSCode\\react\\项目1\\website_server\\pages\\component\\index_footer.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "e:\\VSCode\\react\\项目1\\website_server\\pages\\component\\index_footer.js"); } } })();
    (function (Component, route) {
      if (false) return
      if (true) return

      var qs = __webpack_require__(85)
      var params = qs.parse(__resourceQuery.slice(1))
      if (params.entry == null) return

      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(module.exports.default || module.exports, "/component\\index_footer")
  
/* WEBPACK VAR INJECTION */}.call(exports, ""))

/***/ }),

/***/ 708:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__resourceQuery) {

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _getIterator2 = __webpack_require__(724);

var _getIterator3 = _interopRequireDefault(_getIterator2);

var _getPrototypeOf = __webpack_require__(718);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(716);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(717);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(720);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(719);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(12);

var _react2 = _interopRequireDefault(_react);

var _link = __webpack_require__(562);

var _link2 = _interopRequireDefault(_link);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'e:\\VSCode\\react\\\u9879\u76EE1\\website_server\\pages\\component\\index_header.js';


var _class = function (_Component) {
    (0, _inherits3.default)(_class, _Component);

    function _class() {
        (0, _classCallCheck3.default)(this, _class);

        return (0, _possibleConstructorReturn3.default)(this, (_class.__proto__ || (0, _getPrototypeOf2.default)(_class)).apply(this, arguments));
    }

    (0, _createClass3.default)(_class, [{
        key: 'createNavList',
        value: function createNavList() {
            var items = [];
            var url = void 0,
                count = 0;
            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = undefined;

            try {
                for (var _iterator = (0, _getIterator3.default)(this.props.channel_list), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                    var item = _step.value;

                    if (item.module == "content" || item.module == "simple") {
                        url = '/' + item.module + '/sort?id=' + item.param;
                    } else {
                        url = item.param;
                    }

                    items.push(_react2.default.createElement('li', { key: count++, __source: {
                            fileName: _jsxFileName,
                            lineNumber: 18
                        }
                    }, _react2.default.createElement('a', { href: url, __source: {
                            fileName: _jsxFileName,
                            lineNumber: 19
                        }
                    }, item.title)));
                }
            } catch (err) {
                _didIteratorError = true;
                _iteratorError = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion && _iterator.return) {
                        _iterator.return();
                    }
                } finally {
                    if (_didIteratorError) {
                        throw _iteratorError;
                    }
                }
            }

            return items;
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement('nav', { className: 'navbar navbar-inverse ', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 28
                }
            }, _react2.default.createElement('div', { className: 'container', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 29
                }
            }, _react2.default.createElement('div', { className: 'navbar-header', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 30
                }
            }, _react2.default.createElement('button', { type: 'button', className: 'navbar-toggle collapsed', 'data-toggle': 'collapse', 'data-target': '#bs-example-navbar-collapse-1', 'aria-expanded': 'false', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 31
                }
            }, _react2.default.createElement('span', { className: 'sr-only', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 32
                }
            }, 'Toggle navigation'), _react2.default.createElement('span', { className: 'icon-bar', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 33
                }
            }), _react2.default.createElement('span', { className: 'icon-bar', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 34
                }
            }), _react2.default.createElement('span', { className: 'icon-bar', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 35
                }
            })), _react2.default.createElement('a', { className: 'navbar-brand', href: '/', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 37
                }
            }, '\u4E8C\u7EC4\u7EC3\u4E60\u7F51\u7AD9')), _react2.default.createElement('div', { className: 'collapse navbar-collapse', id: 'bs-example-navbar-collapse-1', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 40
                }
            }, _react2.default.createElement('ul', { className: 'nav navbar-nav', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 41
                }
            }, this.props.channel_list && this.props.channel_list.length && this.createNavList()))));
        }
    }]);

    return _class;
}(_react.Component);

exports.default = _class;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "e:\\VSCode\\react\\项目1\\website_server\\pages\\component\\index_header.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "e:\\VSCode\\react\\项目1\\website_server\\pages\\component\\index_header.js"); } } })();
    (function (Component, route) {
      if (false) return
      if (true) return

      var qs = __webpack_require__(85)
      var params = qs.parse(__resourceQuery.slice(1))
      if (params.entry == null) return

      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(module.exports.default || module.exports, "/component\\index_header")
  
/* WEBPACK VAR INJECTION */}.call(exports, ""))

/***/ }),

/***/ 709:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__resourceQuery) {

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(12);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "e:\\VSCode\\react\\\u9879\u76EE1\\website_server\\pages\\component\\script_import.js";

exports.default = function () {
    return _react2.default.createElement("div", { className: "head", __source: {
            fileName: _jsxFileName,
            lineNumber: 3
        }
    }, _react2.default.createElement("noscript", {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 4
        }
    }, _react2.default.createElement("h2", {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 5
        }
    }, "\u60A8\u7684\u6D4F\u89C8\u5668\u4E0D\u652F\u6301javaScript")), _react2.default.createElement("script", { src: "/javascrpt/jquery-1.11.0.js", type: "text/javascript", charset: "utf-8", __source: {
            fileName: _jsxFileName,
            lineNumber: 7
        }
    }), _react2.default.createElement("script", { src: "/bootstrap/js/bootstrap.js", type: "text/javascript", charset: "utf-8", __source: {
            fileName: _jsxFileName,
            lineNumber: 8
        }
    }));
};

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "e:\\VSCode\\react\\项目1\\website_server\\pages\\component\\script_import.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "e:\\VSCode\\react\\项目1\\website_server\\pages\\component\\script_import.js"); } } })();
    (function (Component, route) {
      if (false) return
      if (true) return

      var qs = __webpack_require__(85)
      var params = qs.parse(__resourceQuery.slice(1))
      if (params.entry == null) return

      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(module.exports.default || module.exports, "/component\\script_import")
  
/* WEBPACK VAR INJECTION */}.call(exports, ""))

/***/ }),

/***/ 710:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__resourceQuery) {

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _stringify = __webpack_require__(762);

var _stringify2 = _interopRequireDefault(_stringify);

var _promise = __webpack_require__(721);

var _promise2 = _interopRequireDefault(_promise);

__webpack_require__(697);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    findOne: function findOne(url, model_name, id) {
        return new _promise2.default(function (resolve, reject) {
            var response = fetch(url, {
                method: 'post',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: (0, _stringify2.default)({
                    model_name: model_name,
                    id: id
                })
            }).then(function (response) {
                if (response.status == 200) {
                    return response;
                } else {
                    throw { error: true, message: response.statustext };
                }
            }).then(function (response) {
                return response.json();
            }).then(function (json) {
                resolve(json);
            }).catch(function (err) {
                reject(err);
            });
        });
    },
    find: function find(url, model_name) {
        var $where = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
        var order = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
        var pageNum = arguments[4];
        var pageSize = arguments[5];

        return new _promise2.default(function (resolve, reject) {
            var response = fetch(url, {
                method: 'post',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: (0, _stringify2.default)({
                    model_name: model_name,
                    $where: $where,
                    order: order,
                    pageNum: pageNum,
                    pageSize: pageSize
                })
            }).then(function (response) {
                if (response.status == 200) {
                    return response;
                } else {
                    throw { error: true, message: response.statustext };
                }
            }).then(function (response) {
                return response.json();
            }).then(function (json) {
                resolve(json);
            }).catch(function (err) {
                reject(err);
            });
        });
    },

    //用于提交请求
    postNoResult: function postNoResult(url, body) {
        return new _promise2.default(function (resolve, reject) {
            fetch(url, {
                method: 'post',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: (0, _stringify2.default)(body)
            }).then(function (response) {
                if (response.status == 200) {
                    return response;
                } else {
                    throw { error: true, message: response.statustext };
                }
            }).then(function (response) {
                resolve(true);
            }).catch(function (error) {
                reject(error);
            });
        });
    }
};
//以后fetch可以在 node里使用

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "e:\\VSCode\\react\\项目1\\website_server\\pages\\db\\fetchQuery.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "e:\\VSCode\\react\\项目1\\website_server\\pages\\db\\fetchQuery.js"); } } })();
    (function (Component, route) {
      if (false) return
      if (true) return

      var qs = __webpack_require__(85)
      var params = qs.parse(__resourceQuery.slice(1))
      if (params.entry == null) return

      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(module.exports.default || module.exports, "/db\\fetchQuery")
  
/* WEBPACK VAR INJECTION */}.call(exports, ""))

/***/ }),

/***/ 711:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__resourceQuery) {

Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function (req) {
    return {
        find: "http://" + req.headers.host + "/service/find",
        findOne: "http://" + req.headers.host + "/service/findOn",
        content_hit: "http://" + req.headers.host + "/service/content_hit"
    };
};

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "e:\\VSCode\\react\\项目1\\website_server\\pages\\db\\service_path.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "e:\\VSCode\\react\\项目1\\website_server\\pages\\db\\service_path.js"); } } })();
    (function (Component, route) {
      if (false) return
      if (true) return

      var qs = __webpack_require__(85)
      var params = qs.parse(__resourceQuery.slice(1))
      if (params.entry == null) return

      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(module.exports.default || module.exports, "/db\\service_path")
  
/* WEBPACK VAR INJECTION */}.call(exports, ""))

/***/ }),

/***/ 715:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(691);


/***/ })

},[715]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlc1xccGFnZXNcXGluZGV4LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGFnZXM/NGVmZTViOCIsIndlYnBhY2s6Ly8vLi9wYWdlcy9jb21wb25lbnQvaGVhZC5qcz80ZWZlNWI4Iiwid2VicGFjazovLy8uL3BhZ2VzL2NvbXBvbmVudC9pbmRleC9pbmRleF9tYWluX3ZpZXcuanM/NGVmZTViOCIsIndlYnBhY2s6Ly8vLi9wYWdlcy9jb21wb25lbnQvaW5kZXgvaW5kZXhfbWFpbl92aWV3X2l0ZW0uanM/NGVmZTViOCIsIndlYnBhY2s6Ly8vLi9wYWdlcy9jb21wb25lbnQvaW5kZXgvcmVjb21tZW5kX2xpc3QuanM/NGVmZTViOCIsIndlYnBhY2s6Ly8vLi9wYWdlcy9jb21wb25lbnQvaW5kZXhfYmFubmVyLmpzPzRlZmU1YjgiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvY29tcG9uZW50L2luZGV4X2Zvb3Rlci5qcz8wZjQzMzc1Iiwid2VicGFjazovLy8uL3BhZ2VzL2NvbXBvbmVudC9pbmRleF9oZWFkZXIuanM/MGY0MzM3NSIsIndlYnBhY2s6Ly8vLi9wYWdlcy9jb21wb25lbnQvc2NyaXB0X2ltcG9ydC5qcz8wZjQzMzc1Iiwid2VicGFjazovLy8uL3BhZ2VzL2RiL2ZldGNoUXVlcnkuanM/MGY0MzM3NSIsIndlYnBhY2s6Ly8vLi9wYWdlcy9kYi9zZXJ2aWNlX3BhdGguanM/MGY0MzM3NSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5cclxuaW1wb3J0IEhlYWQgZnJvbSAnLi9jb21wb25lbnQvaGVhZCc7XHJcbmltcG9ydCBIZWFkZXIgZnJvbSAnLi9jb21wb25lbnQvaW5kZXhfaGVhZGVyJztcclxuaW1wb3J0IEluZGV4QmFubmVyIGZyb20gJy4vY29tcG9uZW50L2luZGV4X2Jhbm5lcic7XHJcbmltcG9ydCBTY3JpcHRJbXBvcnQgZnJvbSAnLi9jb21wb25lbnQvc2NyaXB0X2ltcG9ydCc7XHJcbmltcG9ydCBJbmRleE1haW5WaWV3IGZyb20gJy4vY29tcG9uZW50L2luZGV4L2luZGV4X21haW5fdmlldyc7XHJcbmltcG9ydCBSZWNvbW1lbmRMaXN0IGZyb20gJy4vY29tcG9uZW50L2luZGV4L3JlY29tbWVuZF9saXN0JztcclxuaW1wb3J0IEZvb3RlciBmcm9tICcuL2NvbXBvbmVudC9pbmRleF9mb290ZXInO1xyXG5cclxuaW1wb3J0IHNwIGZyb20gJy4vZGIvc2VydmljZV9wYXRoJztcclxuaW1wb3J0IGZxIGZyb20gJy4vZGIvZmV0Y2hRdWVyeSc7XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gICAgc3RhdGljIGFzeW5jIGdldEluaXRpYWxQcm9wcyhhcmcpIHtcclxuICAgICAgICBjb25zdCB7IHBhdGhuYW1lLCBxdWVyeSwgYXNQYXRoLCByZXEsIHJlcywganNvblBhZ2VSZXMsIGVyciB9ID0gYXJnO1xyXG4gICAgICAgIC8v5a+86Iiq5p2hMTFcclxuICAgICAgICBsZXQgbmF2X2xpc3QgPSBhd2FpdCBmcS5maW5kKFxyXG4gICAgICAgICAgICBzcChyZXEpLmZpbmQsXHJcbiAgICAgICAgICAgIFwiY2hhbm5lbFwiLFxyXG4gICAgICAgICAgICB7IHNob3c6IHRydWUgfSxcclxuICAgICAgICAgICAgeyBvcmRlcl9pbmRleDogMSB9XHJcbiAgICAgICAgKTtcclxuXHJcbiAgICAgICAgLy/kuLvop4blm77liJfooahcclxuICAgICAgICBsZXQgY29udGVudF9tYWluX2xpc3QgPSBhd2FpdCBmcS5maW5kKFxyXG4gICAgICAgICAgICBzcChyZXEpLmZpbmQsXHJcbiAgICAgICAgICAgIFwiY29udGVudFwiLFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBzaG93OiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgZHJhZnQ6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgYmVnaW5UaW1lOiB7ICRsdDogbmV3IERhdGUoRGF0ZS5ub3coKSkgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBpc1RvcDogLTEsIGNyZWF0ZVRpbWU6IC0xXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIDEsXHJcbiAgICAgICAgICAgIDEwXHJcbiAgICAgICAgKTtcclxuICAgICAgICAvLyDmjqjojZDlhoXlrrlcclxuICAgICAgICBsZXQgcmVjb21tZW5kID0gYXdhaXQgZnEuZmluZChcclxuICAgICAgICAgICAgc3AocmVxKS5maW5kLFxyXG4gICAgICAgICAgICBcImNvbnRlbnRcIixcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgc2hvdzogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIGRyYWZ0OiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIGJlZ2luVGltZTogeyAkbHQ6IG5ldyBEYXRlKERhdGUubm93KCkpIH0sXHJcbiAgICAgICAgICAgICAgICBpc1JlY29tbWVuZDogdHJ1ZVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBjcmVhdGVUaW1lOiAtMVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAxLFxyXG4gICAgICAgICAgICAxMFxyXG4gICAgICAgICk7XHJcblxyXG4gICAgICAgIC8vYmVnaW5UaW1lXHJcbiAgICAgICAgbGV0IHRvcF9hZHMgPSBhd2FpdCBmcS5maW5kKFxyXG4gICAgICAgICAgICBzcChyZXEpLmZpbmQsXHJcbiAgICAgICAgICAgIFwiYWRcIixcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgc2hvdzogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIHNvcnRfa2V5OiBcInRvcFwiXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGNyZWF0ZVRpbWU6IC0xXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIDEsXHJcbiAgICAgICAgICAgIDEwXHJcbiAgICAgICAgKTtcclxuICAgICAgICAvLyDng63pl6jnu5/orqFcclxuICAgICAgICBsZXQgY29udGVudF9oaXRzID0gYXdhaXQgZnEuZmluZChcclxuICAgICAgICAgICAgc3AocmVxKS5maW5kLFxyXG4gICAgICAgICAgICBcImNvbnRlbnRfaGl0c1wiLFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGNyZWF0ZV9kYXRlOiAtMSwgaGl0czogLTFcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgMSxcclxuICAgICAgICAgICAgMTBcclxuICAgICAgICApO1xyXG4gICAgICAgIGxldCBob3RBcnJheSA9IGNvbnRlbnRfaGl0cy5saXN0Lm1hcCgodiwgaykgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gdi5jb250ZW50X2lkXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgbGV0IGhvdF9saXN0ID0gYXdhaXQgZnEuZmluZChcclxuICAgICAgICAgICAgc3AocmVxKS5maW5kLFxyXG4gICAgICAgICAgICBcImNvbnRlbnRcIixcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgX2lkOiB7ICRpbjogaG90QXJyYXkgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcblxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAxLFxyXG4gICAgICAgICAgICAxMFxyXG4gICAgICAgICk7XHJcblxyXG4gICAgICAgIGhvdF9saXN0ID0gaG90QXJyYXkubWFwKCh2LCBrKSA9PiB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGl0ZW0gb2YgaG90X2xpc3QubGlzdCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKGl0ZW0uX2lkID09PSB2KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGl0ZW07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICAvL+WOu+mHjVxyXG4gICAgICAgIGxldCB0ZW1wQXJyID0gW107XHJcbiAgICAgICAgaG90X2xpc3Q9aG90X2xpc3QuZmlsdGVyKCh2LCBrLCBvYmopID0+IHtcclxuICAgICAgICAgICAgaWYgKHRlbXBBcnIuaW5kZXhPZih2KSA+PSAwKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0ZW1wQXJyLnB1c2godik7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuXHJcblxyXG5cclxuXHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgbmF2X2xpc3Q6IG5hdl9saXN0Lmxpc3QsXHJcbiAgICAgICAgICAgIG1haW5fdmlld19saXN0OiBjb250ZW50X21haW5fbGlzdC5saXN0LFxyXG4gICAgICAgICAgICByZWNvbW1lbmRfbGlzdDogcmVjb21tZW5kLmxpc3QsXHJcbiAgICAgICAgICAgIHRvcF9hZHM6IHRvcF9hZHMubGlzdCxcclxuICAgICAgICAgICAgaG90X2xpc3RcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8SGVhZCAvPlxyXG4gICAgICAgICAgICAgICAgPEluZGV4QmFubmVyIGxpc3Q9e3RoaXMucHJvcHMudG9wX2Fkc30gLz5cclxuICAgICAgICAgICAgICAgIDxIZWFkZXIgY2hhbm5lbF9saXN0PXt0aGlzLnByb3BzLm5hdl9saXN0fSAvPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICB7Lyog5bem6L6555qE5Li76KeG5Zu+ICovfVxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLThcIiBpZD1cIm1haW5fdmlld1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8SW5kZXhNYWluVmlldyBsaXN0PXt0aGlzLnByb3BzLm1haW5fdmlld19saXN0fSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIHsvKiA8IS0t5Y+z6L655qCPLS0+ICovfVxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTRcIiBpZD1cInNpZGViYXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFJlY29tbWVuZExpc3QgbGlzdD17dGhpcy5wcm9wcy5ob3RfbGlzdH0gdGl0bGU9XCLng63pl6jmjpLooYxcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8UmVjb21tZW5kTGlzdCBsaXN0PXt0aGlzLnByb3BzLnJlY29tbWVuZF9saXN0fSB0aXRsZT1cIuaOqOiNkOmYheivu1wiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxGb290ZXIgLz5cclxuICAgICAgICAgICAgICAgIDxTY3JpcHRJbXBvcnQgLz5cclxuXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wYWdlcz9lbnRyeSIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8SGVhZD5cclxuICAgICAgICAgICAgICAgIDxtZXRhIGNoYXJzZXQ9XCJVVEYtOFwiIC8+XHJcbiAgICAgICAgICAgICAgICA8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwid2lkdGg9ZGV2aWNlLXdpZHRoLCBpbml0aWFsLXNjYWxlPTEsIG1heGltdW0tc2NhbGU9MSwgdXNlci1zY2FsYWJsZT1ub1wiIC8+XHJcbiAgICAgICAgICAgICAgICA8bWV0YSBuYW1lPVwiRGVzY3JpcHRpb25cIiBjb250ZW50PXtg5LqM57uE5a2m5Lmg572R56uZ5byA5Y+R55qE57uD5Lmg56uZ54K5YH0gLz5cclxuICAgICAgICAgICAgICAgIDxtZXRhIG5hbWU9XCJLZXl3b3Jkc1wiIGNvbnRlbnQ9XCLkuoznu4Qg5a2m5LmgIOe7g+S5oFwiIC8+XHJcbiAgICAgICAgICAgICAgICA8bGluayByZWw9XCJzdHlsZXNoZWV0XCIgdHlwZT1cInRleHQvY3NzXCIgaHJlZj1cIi9ib290c3RyYXAvY3NzL2Jvb3RzdHJhcC5taW4uY3NzXCIgLz5cclxuICAgICAgICAgICAgICAgIDxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiB0eXBlPVwidGV4dC9jc3NcIiBocmVmPVwiL2Nzcy93ZWJzaXRlLmNzc1wiIC8+XHJcbiAgICAgICAgICAgICAgICA8dGl0bGU+e3RoaXMucHJvcHMudGl0bGV9IOS6jOe7hOe7g+S5oOmhueebri3pppbpobU8L3RpdGxlPlxyXG4gICAgICAgICAgICA8L0hlYWQ+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufSBcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wYWdlcy9jb21wb25lbnQvaGVhZC5qcyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBTdWJJdGVtIGZyb20gJy4vaW5kZXhfbWFpbl92aWV3X2l0ZW0nO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICAgIGNyZWF0ZUxpc3QoKSB7XHJcbiAgICAgICAgbGV0IHJlc3VsdHMgPSBbXSwgY291bnQgPSAwO1xyXG4gICAgICAgIGZvciAobGV0IGl0ZW0gb2YgdGhpcy5wcm9wcy5saXN0KSB7XHJcbiAgICAgICAgICAgIHJlc3VsdHMucHVzaChcclxuICAgICAgICAgICAgICAgIDxTdWJJdGVtIGl0ZW09e2l0ZW19IC8+XHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiByZXN1bHRzO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8IHVsIGNsYXNzTmFtZT1cIm1haW5fdmlld19saXN0XCIgPlxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY3JlYXRlTGlzdCgpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIDwvdWwgPlxyXG5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcGFnZXMvY29tcG9uZW50L2luZGV4L2luZGV4X21haW5fdmlldy5qcyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBtb21lbnQgZnJvbSAnbW9tZW50JztcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIGNvbnN0IHsgaXRlbSB9ID0gdGhpcy5wcm9wc1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJtYWluX3ZpZXdfbGlzdF9pdGVtIHBhbmVsIHBhbmVsLWRlZmF1bHRcIj4gXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBhbmVsLWJvZHlcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGl0bGVcIj57aXRlbS50aXRsZX08L2gyPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5mb1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJhdXRob3JcIj57aXRlbS5hdXRob3J9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJiZWdpbl90aW1lXCI+e21vbWVudChpdGVtLmNyZWF0ZVRpbWUpLmZvcm1hdChcIllZWVktTU0tREQgSEg6bW06c3NcIil9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS50aXRsZUltYWdlICYmIDxkaXYgY2xhc3NOYW1lPVwiaXRlbV90aXRsZV9pbWFnZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2AvdXBsb2FkZmlsZS8ke2l0ZW0udGl0bGVJbWFnZX1gfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwic3ViX3RpdGxlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtpdGVtLnN1YlRpdGxlfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8aHIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJidG4gYnRuLWRlZmF1bHRcIiBocmVmPXtgL2NvbnRlbnQvZnVsbF90ZXh0P2lkPSR7aXRlbS5faWR9YH1cclxuICAgICAgICAgICAgICAgICAgICA+6ZiF6K+75YWo5paHPC9hPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3BhZ2VzL2NvbXBvbmVudC9pbmRleC9pbmRleF9tYWluX3ZpZXdfaXRlbS5qcyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBhbmVsIHBhbmVsLWRlZmF1bHRcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGFuZWwtaGVhZGluZ1wiPnt0aGlzLnByb3BzLnRpdGxlIHx8IFwi5o6o6I2Q6ZiF6K+7XCJ9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBhbmVsLWJvZHlcIj5cclxuICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwic2lkZWJhcl9saXN0X3VsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLmxpc3QubWFwKCh2LCBrKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgY2xhc3NOYW1lPVwibGlua1wiIGhyZWY9e2AvY29udGVudC9mdWxsX3RleHQ/aWQ9JHt2Ll9pZH1gfSB0aXRsZT17di50aXRsZX0gdGFyZ2V0PVwiX2JsYW5rXCI+e3YudGl0bGV9PC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wYWdlcy9jb21wb25lbnQvaW5kZXgvcmVjb21tZW5kX2xpc3QuanMiLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIGNvbnN0IHsgbGlzdCB9ID0gdGhpcy5wcm9wcztcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2IGlkPVwiY2Fyb3VzZWwtZXhhbXBsZS1nZW5lcmljXCIgY2xhc3NOYW1lPVwiY2Fyb3VzZWwgc2xpZGVcIiBkYXRhLXJpZGU9XCJjYXJvdXNlbFwiPlxyXG4gICAgICAgICAgICAgICAgPG9sIGNsYXNzTmFtZT1cImNhcm91c2VsLWluZGljYXRvcnNcIj5cclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpc3QgJiYgbGlzdC5tYXAoKHYsIGspID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtdGFyZ2V0PVwiI2Nhcm91c2VsLWV4YW1wbGUtZ2VuZXJpY1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17a31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS1zbGlkZS10bz17a31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtrID09PSAwID8gXCJhY3RpdmVcIiA6IFwiXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIDwvb2w+XHJcblxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJvdXNlbC1pbm5lclwiIHJvbGU9XCJsaXN0Ym94XCIgc3R5bGU9e3sgaGVpZ2h0OiBcIjI0MHB4XCIsIG92ZXJmbG93OiBcImhpZGRlblwiIH19PlxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGlzdCAmJiBsaXN0Lm1hcCgodiwgaykgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YGl0ZW0gJHtrID09PSAwID8gXCJhY3RpdmVcIiA6IFwiXCJ9YH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwidG9wX2FkX3Bob3RvIFwiIHNyYz17YC91cGxvYWRmaWxlLyR7di5waG90b31gfSBhbHQ9e3YudGl0bGV9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2Fyb3VzZWwtY2FwdGlvblwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3YudGl0bGV9IFxyXG5cdFx0XHRcdFx0XHQgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJsZWZ0IGNhcm91c2VsLWNvbnRyb2xcIiBocmVmPVwiI2Nhcm91c2VsLWV4YW1wbGUtZ2VuZXJpY1wiIHJvbGU9XCJidXR0b25cIiBkYXRhLXNsaWRlPVwicHJldlwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImdseXBoaWNvbiBnbHlwaGljb24tY2hldnJvbi1sZWZ0XCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInNyLW9ubHlcIj5QcmV2aW91czwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cInJpZ2h0IGNhcm91c2VsLWNvbnRyb2xcIiBocmVmPVwiI2Nhcm91c2VsLWV4YW1wbGUtZ2VuZXJpY1wiIHJvbGU9XCJidXR0b25cIiBkYXRhLXNsaWRlPVwibmV4dFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImdseXBoaWNvbiBnbHlwaGljb24tY2hldnJvbi1yaWdodFwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJzci1vbmx5XCI+TmV4dDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcGFnZXMvY29tcG9uZW50L2luZGV4X2Jhbm5lci5qcyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lci1mbHVpZCBpbmRleF9mb290ZXJcIj5cclxuICAgICAgICAgICAgICAgIDx1bD5cclxuICAgICAgICAgICAgICAgICAgICA8bGk+Q29weXJpZ2h0IMKpIOayoeacieeJiOadg+aJgOaciTwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxpPum7kUlDUOWkhyAwMDAwMDAwMDAwMDAwMDwvbGk+XHJcbiAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcGFnZXMvY29tcG9uZW50L2luZGV4X2Zvb3Rlci5qcyIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBDb21wb25lbnQge1xyXG5cclxuICAgIGNyZWF0ZU5hdkxpc3QoKSB7XHJcbiAgICAgICAgbGV0IGl0ZW1zID0gW107XHJcbiAgICAgICAgbGV0IHVybCwgY291bnQgPSAwO1xyXG4gICAgICAgIGZvciAobGV0IGl0ZW0gb2YgdGhpcy5wcm9wcy5jaGFubmVsX2xpc3QpIHtcclxuICAgICAgICAgICAgaWYgKGl0ZW0ubW9kdWxlID09IFwiY29udGVudFwiIHx8IGl0ZW0ubW9kdWxlID09IFwic2ltcGxlXCIpIHtcclxuICAgICAgICAgICAgICAgIHVybCA9IGAvJHtpdGVtLm1vZHVsZX0vc29ydD9pZD0ke2l0ZW0ucGFyYW19YDtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHVybCA9IGl0ZW0ucGFyYW07XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGl0ZW1zLnB1c2goXHJcbiAgICAgICAgICAgICAgICA8bGkga2V5PXtjb3VudCsrfT5cclxuICAgICAgICAgICAgICAgICAgICA8YSBocmVmPXt1cmx9PntpdGVtLnRpdGxlfTwvYT5cclxuICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBpdGVtcztcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPG5hdiBjbGFzc05hbWU9XCJuYXZiYXIgbmF2YmFyLWludmVyc2UgXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmF2YmFyLWhlYWRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9XCJuYXZiYXItdG9nZ2xlIGNvbGxhcHNlZFwiIGRhdGEtdG9nZ2xlPVwiY29sbGFwc2VcIiBkYXRhLXRhcmdldD1cIiNicy1leGFtcGxlLW5hdmJhci1jb2xsYXBzZS0xXCIgYXJpYS1leHBhbmRlZD1cImZhbHNlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJzci1vbmx5XCI+VG9nZ2xlIG5hdmlnYXRpb248L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJpY29uLWJhclwiPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImljb24tYmFyXCI+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaWNvbi1iYXJcIj48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJuYXZiYXItYnJhbmRcIiBocmVmPVwiL1wiPuS6jOe7hOe7g+S5oOe9keermTwvYT5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xsYXBzZSBuYXZiYXItY29sbGFwc2VcIiBpZD1cImJzLWV4YW1wbGUtbmF2YmFyLWNvbGxhcHNlLTFcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cIm5hdiBuYXZiYXItbmF2XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5jaGFubmVsX2xpc3QgJiYgdGhpcy5wcm9wcy5jaGFubmVsX2xpc3QubGVuZ3RoICYmIHRoaXMuY3JlYXRlTmF2TGlzdCgpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L25hdj5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG59IFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3BhZ2VzL2NvbXBvbmVudC9pbmRleF9oZWFkZXIuanMiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5leHBvcnQgZGVmYXVsdCAoKSA9PiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRcIj5cclxuICAgICAgICA8bm9zY3JpcHQ+XHJcbiAgICAgICAgICAgIDxoMj7mgqjnmoTmtY/op4jlmajkuI3mlK/mjIFqYXZhU2NyaXB0PC9oMj5cclxuICAgICAgICA8L25vc2NyaXB0PlxyXG4gICAgICAgIDxzY3JpcHQgc3JjPVwiL2phdmFzY3JwdC9qcXVlcnktMS4xMS4wLmpzXCIgdHlwZT1cInRleHQvamF2YXNjcmlwdFwiIGNoYXJzZXQ9XCJ1dGYtOFwiPjwvc2NyaXB0PlxyXG4gICAgICAgIDxzY3JpcHQgc3JjPVwiL2Jvb3RzdHJhcC9qcy9ib290c3RyYXAuanNcIiB0eXBlPVwidGV4dC9qYXZhc2NyaXB0XCIgY2hhcnNldD1cInV0Zi04XCI+PC9zY3JpcHQ+XHJcbiAgICA8L2Rpdj5cclxuKTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wYWdlcy9jb21wb25lbnQvc2NyaXB0X2ltcG9ydC5qcyIsIi8v5Lul5ZCOZmV0Y2jlj6/ku6XlnKggbm9kZemHjOS9v+eUqFxyXG5pbXBvcnQgJ2lzb21vcnBoaWMtZmV0Y2gnXHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgICBmaW5kT25lKHVybCwgbW9kZWxfbmFtZSwgaWQpIHtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgICAgICBsZXQgcmVzcG9uc2UgPSBmZXRjaCh1cmwsIHtcclxuICAgICAgICAgICAgICAgIG1ldGhvZDogJ3Bvc3QnLFxyXG4gICAgICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XHJcbiAgICAgICAgICAgICAgICAgICAgbW9kZWxfbmFtZSxcclxuICAgICAgICAgICAgICAgICAgICBpZFxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfSkudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChyZXNwb25zZS5zdGF0dXMgPT0gMjAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICB0aHJvdyB7IGVycm9yOiB0cnVlLCBtZXNzYWdlOiByZXNwb25zZS5zdGF0dXN0ZXh0IH07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xyXG4gICAgICAgICAgICB9KS50aGVuKChqc29uKSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXNvbHZlKGpzb24pO1xyXG4gICAgICAgICAgICB9KS5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZWplY3QoZXJyKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9LFxyXG4gICAgZmluZCh1cmwsIG1vZGVsX25hbWUsICR3aGVyZSA9IHt9LCBvcmRlciA9IHt9LCBwYWdlTnVtLCBwYWdlU2l6ZSkge1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgICAgIGxldCByZXNwb25zZSA9IGZldGNoKHVybCwge1xyXG4gICAgICAgICAgICAgICAgbWV0aG9kOiAncG9zdCcsXHJcbiAgICAgICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcclxuICAgICAgICAgICAgICAgICAgICBtb2RlbF9uYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgICR3aGVyZSxcclxuICAgICAgICAgICAgICAgICAgICBvcmRlcixcclxuICAgICAgICAgICAgICAgICAgICBwYWdlTnVtLFxyXG4gICAgICAgICAgICAgICAgICAgIHBhZ2VTaXplXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9KS50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PSAyMDApIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVzcG9uc2U7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHRocm93IHsgZXJyb3I6IHRydWUsIG1lc3NhZ2U6IHJlc3BvbnNlLnN0YXR1c3RleHQgfTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSkudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XHJcbiAgICAgICAgICAgIH0pLnRoZW4oKGpzb24pID0+IHtcclxuICAgICAgICAgICAgICAgIHJlc29sdmUoanNvbik7XHJcbiAgICAgICAgICAgIH0pLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgICAgICAgICAgIHJlamVjdChlcnIpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH0sXHJcbiAgICAvL+eUqOS6juaPkOS6pOivt+axglxyXG4gICAgcG9zdE5vUmVzdWx0KHVybCwgYm9keSkge1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgICAgIGZldGNoKHVybCwge1xyXG4gICAgICAgICAgICAgICAgbWV0aG9kOiAncG9zdCcsXHJcbiAgICAgICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGJvZHkpXHJcbiAgICAgICAgICAgIH0pLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAocmVzcG9uc2Uuc3RhdHVzID09IDIwMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZXNwb25zZTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgeyBlcnJvcjogdHJ1ZSwgbWVzc2FnZTogcmVzcG9uc2Uuc3RhdHVzdGV4dCB9O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KS50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmVzb2x2ZSh0cnVlKTtcclxuICAgICAgICAgICAgfSkuY2F0Y2goKGVycm9yKSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZWplY3QoZXJyb3IpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3BhZ2VzL2RiL2ZldGNoUXVlcnkuanMiLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbihyZXEpe1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBmaW5kOmBodHRwOi8vJHtyZXEuaGVhZGVycy5ob3N0fS9zZXJ2aWNlL2ZpbmRgLFxyXG4gICAgICAgIGZpbmRPbmU6YGh0dHA6Ly8ke3JlcS5oZWFkZXJzLmhvc3R9L3NlcnZpY2UvZmluZE9uYCxcclxuICAgICAgICBjb250ZW50X2hpdDpgaHR0cDovLyR7cmVxLmhlYWRlcnMuaG9zdH0vc2VydmljZS9jb250ZW50X2hpdGBcclxuICAgIH1cclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3BhZ2VzL2RiL3NlcnZpY2VfcGF0aC5qcyJdLCJtYXBwaW5ncyI6IjtBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUNBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUNBO0FBQ0E7OztBQUFBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFzSEE7QUFDQTs7QUFBQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUVBO0FBRkE7QUFFQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFHQTtBQUhBO0FBR0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFHQTtBQUhBO0FBR0E7O0FBQUE7QUFDQTtBQURBO0FBQUE7O0FBQ0E7QUFJQTtBQUpBO0FBQUE7Ozs7O0FBcElBOzs7OztBQUNBO0FBQUE7Ozs7QUFFQTtBQUNBO0FBREE7OztBQVFBO0FBS0E7QUFDQTtBQUFBO0FBRkE7QUFLQTtBQUFBO0FBQ0E7QUFWQTs7O0FBZUE7QUFLQTtBQUNBO0FBQUE7QUFDQTtBQUhBO0FBTUE7QUFBQTtBQUNBO0FBWEE7OztBQWlCQTtBQUtBO0FBQUE7QUFEQTtBQUlBO0FBQUE7QUFDQTtBQVRBOzs7QUFjQTtBQU1BO0FBQUE7QUFDQTtBQVBBO0FBV0E7QUFBQTtBQUNBO0FBREE7O0FBR0E7QUFJQTtBQUFBO0FBQ0E7QUFMQTtBQWFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUVBO0FBQ0E7QUFMQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFFQTtBQUZBO0FBR0E7QUFFQTtBQUNBO0FBUEE7QUFDQTs7QUFhQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBN0dBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoQkE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7Ozs7Ozs7O0FBRUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUVBOzs7OztBQUdBO0FBQ0E7O0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7O0FBQUE7QUFBQTtBQUFBO0FBQUE7Ozs7O0FBZkE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNMQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSUE7QUFBQTtBQUFBO0FBREE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFFQTtBQUZBO0FBQUE7QUFKQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBT0E7QUFDQTtBQUFBOzs7O0FBR0E7QUFDQTtBQUFBO0FBRUE7QUFGQTtBQUFBOzs7OztBQWJBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNOQTtBQUNBOzs7QUFBQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFHQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBR0E7QUFIQTtBQUdBO0FBQUE7QUFDQTtBQURBO0FBR0E7O0FBQUE7QUFDQTtBQURBO0FBQUE7O0FBQ0E7QUFBQTtBQUFBO0FBS0E7Ozs7O0FBekJBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNIQTtBQUNBOzs7QUFBQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBRUE7O0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFHQTtBQUtBOzs7OztBQWxCQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDSEE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUVBO0FBRkE7QUFFQTs7QUFJQTtBQUNBO0FBQ0E7QUFBQTs7QUFKQTtBQVFBO0FBUkE7QUFDQTtBQVdBO0FBQUE7QUFFQTtBQUZBO0FBRUE7QUFFQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFLQTtBQUlBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUtBOzs7OztBQS9DQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDSEE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUFBO0FBQUE7QUFBQTs7QUFDQTtBQUFBO0FBQUE7QUFBQTs7Ozs7QUFOQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0ZBO0FBQ0E7OztBQUFBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLQTtBQUFBO0FBQ0E7QUFBQTtBQUZBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFHQTtBQUdBO0FBQ0E7QUFEQTtBQUNBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBR0E7QUFmQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBZ0JBO0FBQ0E7QUFBQTs7OztBQUdBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBRUE7QUFGQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBR0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBRUE7QUFGQTtBQUVBOzs7OztBQXRDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0pBO0FBQ0E7Ozs7Ozs7QUFEQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQUE7O0FBQ0E7QUFDQTtBQURBO0FBQUE7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQUE7QUFBQTs7QUFOQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0NBO0FBQ0E7Ozs7QUFEQTtBQUVBO0FBQ0E7QUFFQTs7QUFHQTtBQUZBOztBQUlBO0FBRkE7QUFDQTtBQUxBO0FBU0E7QUFFQTtBQUZBO0FBR0E7QUFFQTtBQWZBO0FBZ0JBO0FBaEJBO0FBbUJBO0FBbkJBO0FBcUJBO0FBQ0E7QUFDQTtBQUNBO0FBM0JBO0FBMkJBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBRUE7O0FBR0E7QUFGQTs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUxBO0FBQ0E7QUFMQTtBQVlBO0FBRUE7QUFGQTtBQUdBO0FBRUE7QUFsQkE7QUFtQkE7QUFuQkE7QUFzQkE7QUF0QkE7QUF3QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBekRBO0FBMERBO0FBQ0E7QUFFQTs7QUFHQTtBQUZBO0FBRUE7QUFKQTtBQU1BO0FBRUE7QUFGQTtBQUdBO0FBRUE7QUFaQTtBQWNBO0FBZEE7QUFnQkE7QUFDQTtBQUNBO0FBN0VBO0FBQ0E7QUFKQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNEQTs7QUFFQTtBQUNBO0FBQ0E7QUFGQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0EiLCJzb3VyY2VSb290IjoiIn0=
            return { page: comp.default }
          })
        