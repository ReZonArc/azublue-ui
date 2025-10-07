"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getClosestFocusableElement = void 0;
var focusableSelectors = [
    'a',
    'button',
    'frame',
    'iframe',
    'input:not([type=hidden])',
    'select',
    'textarea',
    '*[tabindex]',
];
var focusableSelectorString = focusableSelectors.join(', ');
/**
 * Crawls up the DOM tree (using `el.closest`) to find the closest focusable element.
 * Returns the element itself if it is focusable.
 * If no focusable element is found, it returns the body element.
 *
 * This is useful for ensuring that focus is returned to a valid element
 * after an event, such as a click or key press.
 */
var getClosestFocusableElement = function (el) {
    var focusableElement = el.closest(focusableSelectorString);
    return focusableElement !== null && focusableElement !== void 0 ? focusableElement : document.body;
};
exports.getClosestFocusableElement = getClosestFocusableElement;
