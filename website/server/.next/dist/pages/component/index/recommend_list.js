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

var _link = require('_next@2.4.9@next\\dist\\lib\\link.js');

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