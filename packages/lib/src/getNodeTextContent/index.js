"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = getNodeTextContent;
/**
 * Returns the text string of a React node
 */
function getNodeTextContent(node) {
    if (isText(node)) {
        return node.toString().trim();
    }
    if (Array.isArray(node)) {
        return node.map(getNodeTextContent).join(' ').trim();
    }
    if (isReactElement(node)) {
        if (isFunctionalComponent(node)) {
            var Component = node.type;
            return getNodeTextContent(Component(node.props));
        }
        return getNodeTextContent(node.props.children);
    }
    return '';
}
function isFunctionalComponent(item) {
    return isReactElement(item) && typeof item.type === 'function';
}
function isReactElement(item) {
    return item && typeof item === 'object' && item.props;
}
function isText(item) {
    return typeof item === 'string' || typeof item === 'number';
}
