"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isDefined = void 0;
var isNull_1 = require("lodash/isNull");
var isUndefined_1 = require("lodash/isUndefined");
/** Whether the value is _not_ `null` or `undefined` */
var isDefined = function (val) {
    return !(0, isUndefined_1.default)(val) && !(0, isNull_1.default)(val);
};
exports.isDefined = isDefined;
