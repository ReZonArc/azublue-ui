"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.rollover = void 0;
/**
 * Returns value if it is between lower & upper bounds (inclusive).
 * Returns the difference between value & relevant bound if outside the bounds
 *
 * e.g.:
 * `rollover(6, 1, 5) // 1`
 * `rollover(0, 1, 5) // 5`
 */
var rollover = function (value, lowerBound, upperBound) {
    var range = upperBound - lowerBound;
    if (value > upperBound) {
        var diff = value - upperBound - 1;
        return lowerBound + (diff % range);
    }
    else if (value < lowerBound) {
        var diff = lowerBound - value - 1;
        return upperBound - (diff % range);
    }
    return value;
};
exports.rollover = rollover;
