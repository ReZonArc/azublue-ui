"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deepOmit = deepOmit;
var isObject_1 = require("lodash/isObject");
var omit_1 = require("lodash/omit");
/**
 * Deeply omits properties from an object based on specified paths.
 *
 * @example
 * ```ts
 * const obj = {
 *  a: 1,
 *  b: {
 *   c: 2,
 *   d: 3,
 *   e: {
 *    f: 4
 *   }
 *  }
 * };
 * deepOmit(obj, ['b.d', 'b.e.f']);
 * // returns { a: 1, b: { c: 2, e: {} } }
 *```
 * @param obj
 * @param paths
 * @returns
 */
function deepOmit(obj, paths) {
    var omittedObject = (0, omit_1.default)(obj, paths);
    var _loop_1 = function (key) {
        var value = omittedObject[key];
        if ((0, isObject_1.default)(value) &&
            // Only transform simple objects, not arrays or other complex classes
            value.constructor === Object) {
            // Filter and transform paths for the nested object
            var nestedPaths = paths
                .filter(function (p) { return p.startsWith(key + '.'); })
                .map(function (p) { return p.slice(key.length + 1); });
            omittedObject[key] = deepOmit(omittedObject[key], nestedPaths);
        }
    };
    for (var key in omittedObject) {
        _loop_1(key);
    }
    return omittedObject;
}
