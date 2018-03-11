'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

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

var _moment = require('moment');

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