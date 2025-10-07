"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isNotZeroLike = exports.isZeroLike = void 0;
var isDefined_1 = require("../isDefined");
/** Returns whether the provided value is some form of zero value */
var isZeroLike = function (val) {
    return !(0, isDefined_1.isDefined)(val) || ['', '0', '00', 0].includes(val);
};
exports.isZeroLike = isZeroLike;
/** Returns whether the provided value is _not_ some form of zero value */
var isNotZeroLike = function (val) { return !(0, exports.isZeroLike)(val); };
exports.isNotZeroLike = isNotZeroLike;
