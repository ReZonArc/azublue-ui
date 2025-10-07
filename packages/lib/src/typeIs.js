"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.element = element;
exports.button = button;
exports.input = input;
exports.array = array;
function element(node) {
    return node != null && node.nodeType === Node.ELEMENT_NODE;
}
function button(el) {
    return element(el) && el.tagName.toLowerCase() === 'button';
}
function input(el) {
    return element(el) && el.tagName.toLowerCase() === 'input';
}
function array(item) {
    return item != null && item instanceof Array;
}
