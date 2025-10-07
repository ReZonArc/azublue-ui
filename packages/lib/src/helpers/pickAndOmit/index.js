"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pickAndOmit = void 0;
var omit_1 = require("lodash/omit");
var pick_1 = require("lodash/pick");
/**
 * Returns an array of 2 objects,
 * first, the result of calling `_.pick`,
 * second, the result of calling `_.omit`
 *
 * e.g.
 * ```js
 * const obj = { a: 'A', b: 'B', c: 'C', d: 'D' }
 * pickAndOmit(obj, ['a', 'b']) // [{a: "A", b: "B"}, {c: "C", d: "D"}]
 * ```
 */
var pickAndOmit = function (object, keys) {
    var picked = (0, pick_1.default)(object, keys);
    var omitted = (0, omit_1.default)(object, keys);
    return [picked, omitted];
};
exports.pickAndOmit = pickAndOmit;
