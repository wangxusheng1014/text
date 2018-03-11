'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _regenerator = require('_babel-runtime@6.23.0@babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _getIterator2 = require('_babel-runtime@6.23.0@babel-runtime/core-js/get-iterator');

var _getIterator3 = _interopRequireDefault(_getIterator2);

var _asyncToGenerator2 = require('_babel-runtime@6.23.0@babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = require('_babel-runtime@6.23.0@babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('_babel-runtime@6.23.0@babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('_babel-runtime@6.23.0@babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('_babel-runtime@6.23.0@babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('_babel-runtime@6.23.0@babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _link = require('_next@2.4.9@next\\dist\\lib\\link.js');

var _link2 = _interopRequireDefault(_link);

var _head = require('./component/head');

var _head2 = _interopRequireDefault(_head);

var _index_header = require('./component/index_header');

var _index_header2 = _interopRequireDefault(_index_header);

var _index_banner = require('./component/index_banner');

var _index_banner2 = _interopRequireDefault(_index_banner);

var _script_import = require('./component/script_import');

var _script_import2 = _interopRequireDefault(_script_import);

var _index_main_view = require('./component/index/index_main_view');

var _index_main_view2 = _interopRequireDefault(_index_main_view);

var _recommend_list = require('./component/index/recommend_list');

var _recommend_list2 = _interopRequireDefault(_recommend_list);

var _index_footer = require('./component/index_footer');

var _index_footer2 = _interopRequireDefault(_index_footer);

var _service_path = require('./db/service_path');

var _service_path2 = _interopRequireDefault(_service_path);

var _fetchQuery = require('./db/fetchQuery');

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