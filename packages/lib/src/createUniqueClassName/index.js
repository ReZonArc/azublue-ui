"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * `generateUniqueClassName` creates a string intended to be used as a pseudo-unique className.
 *
 * It returns a consecutive 4-number string prefixed by `lg-ui`, followed by a custom second prefix defined by the `prefix` param.
 *
 * @param prefix: a custom prefix that follows the `lg-ui` prefix.
 */
var generateUniqueClassName = function (prefix) {
    var _a, _b;
    var count = (_b = (_a = classNameRegistry.get(prefix)) === null || _a === void 0 ? void 0 : _a.length) !== null && _b !== void 0 ? _b : 0;
    var postfix = count.toString().padStart(4, '0');
    return "lg-ui".concat(prefix ? "-".concat(prefix) : '', "-").concat(postfix);
};
var classNameRegistry = new Map();
var createUniqueClassName = function (prefix) {
    if (prefix === void 0) { prefix = ''; }
    var uniqueClassName = generateUniqueClassName(prefix);
    if (classNameRegistry.has(prefix)) {
        var prefixClasses = classNameRegistry.get(prefix);
        classNameRegistry.set(prefix, __spreadArray([
            uniqueClassName
        ], prefixClasses, true));
    }
    else {
        classNameRegistry.set(prefix, [uniqueClassName]);
    }
    return uniqueClassName;
};
exports.default = createUniqueClassName;
