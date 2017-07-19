"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
var stores = {};
var storage = {
    setItem: function setItem(k, v) {
        stores[k] = v;
    }, getItem: function getItem(k) {
        return stores[k];
    }, removeItem: function removeItem(k) {
        delete stores[k];
    }
};
exports.default = storage;
module.exports = exports["default"];