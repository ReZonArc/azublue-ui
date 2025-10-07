"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.truncateStart = void 0;
var defaultTruncateStartOptions = {
    length: 30,
};
/** Truncates a string to a given length, starting from the front */
var truncateStart = function (str, _a) {
    var _b = _a === void 0 ? defaultTruncateStartOptions : _a, length = _b.length;
    if (str.length <= length)
        return str;
    return str.substring(str.length - length);
};
exports.truncateStart = truncateStart;
