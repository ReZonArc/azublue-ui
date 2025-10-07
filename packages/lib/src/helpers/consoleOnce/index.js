"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.consoleOnce = void 0;
var once_1 = require("lodash/once");
exports.consoleOnce = {
    error: (0, once_1.default)(console.error),
    warn: (0, once_1.default)(console.warn),
    log: (0, once_1.default)(console.log), // eslint-disable-line no-console
};
