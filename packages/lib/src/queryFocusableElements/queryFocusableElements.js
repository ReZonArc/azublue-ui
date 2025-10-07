"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.queryLastFocusableElement = exports.queryFirstFocusableElement = exports.queryAllFocusableElements = exports.focusableElementSelector = void 0;
var last_1 = require("lodash/last");
var notNegativeTabIndex = ':not([tabindex="-1"])';
var notHidden = ':not([type="hidden"])';
var notDisabled = ':not([disabled])';
/**
 * Selectors for focusable elements in the DOM.
 *
 * Each of these elements can receive tab-focus,
 * and is not hidden or disabled.
 */
var baseFocusableElementSelectors = [
    'button',
    'a',
    'input',
    'select',
    'textarea',
    '[tabindex]',
];
exports.focusableElementSelector = baseFocusableElementSelectors
    .map(function (selector) { return "".concat(selector).concat(notNegativeTabIndex).concat(notHidden).concat(notDisabled); })
    .join(',');
/**
 * Returns all focusable elements within a given element
 *
 * Focusable elements defined in the constant {@link baseFocusableElementSelectors}
 */
var queryAllFocusableElements = function (root) {
    if (root === void 0) { root = document.body; }
    var focusableElements = root.querySelectorAll(exports.focusableElementSelector);
    return Array.from(focusableElements);
};
exports.queryAllFocusableElements = queryAllFocusableElements;
/**
 * Returns the first focusable element within a given element
 *
 * Focusable elements defined in the constant {@link baseFocusableElementSelectors}
 */
var queryFirstFocusableElement = function (root) {
    if (root === void 0) { root = document.body; }
    var first = root.querySelector(exports.focusableElementSelector);
    return first;
};
exports.queryFirstFocusableElement = queryFirstFocusableElement;
/**
 * Returns the last focusable element within a given element
 *
 * Focusable elements defined in the constant {@link baseFocusableElementSelectors}
 */
var queryLastFocusableElement = function (root) {
    var _a;
    if (root === void 0) { root = document.body; }
    var allElements = (0, exports.queryAllFocusableElements)(root);
    return allElements.length ? (_a = (0, last_1.default)(allElements)) !== null && _a !== void 0 ? _a : null : null;
};
exports.queryLastFocusableElement = queryLastFocusableElement;
