"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var DarkModeProps_1 = require("./DarkModeProps");
/**
 *
 * Given a `darkMode` boolean, returns a `Theme` value - either dark or light.
 *
 * @param darkMode
 * @returns `Theme.Dark || Theme.Light`
 */
var getTheme = function (darkMode) {
    return darkMode ? DarkModeProps_1.Theme.Dark : DarkModeProps_1.Theme.Light;
};
exports.default = getTheme;
