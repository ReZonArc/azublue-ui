"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deepMapValues = void 0;
var mapValues_1 = require("lodash/mapValues");
/**
 * Recursively maps the values of an object using a callback function.
 */
var deepMapValues = function (obj, callback) {
    var cb = function (val, key, collection) {
        if (typeof val === 'object') {
            return (0, exports.deepMapValues)(val, callback);
        }
        return callback(val, key, collection);
    };
    return (0, mapValues_1.default)(obj, cb);
};
exports.deepMapValues = deepMapValues;
