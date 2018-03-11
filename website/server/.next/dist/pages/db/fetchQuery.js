'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _stringify = require('_babel-runtime@6.23.0@babel-runtime/core-js/json/stringify');

var _stringify2 = _interopRequireDefault(_stringify);

var _promise = require('_babel-runtime@6.23.0@babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

require('isomorphic-fetch');

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