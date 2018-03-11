"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _getPrototypeOf = require("_babel-runtime@6.23.0@babel-runtime/core-js/object/get-prototype-of");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require("_babel-runtime@6.23.0@babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require("_babel-runtime@6.23.0@babel-runtime/helpers/createClass");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require("_babel-runtime@6.23.0@babel-runtime/helpers/possibleConstructorReturn");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require("_babel-runtime@6.23.0@babel-runtime/helpers/inherits");

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require("react");

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