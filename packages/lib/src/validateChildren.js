"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateChildren = void 0;
exports.isComponentType = isComponentType;
var react_1 = require("react");
var isObject_1 = require("lodash/isObject");
var isUndefined_1 = require("lodash/isUndefined");
var _1 = require(".");
/** Helper type to check if element is a specific React Component  */
function isComponentType(element, displayName) {
    var _a;
    return (element != null &&
        typeof element === 'object' &&
        'type' in element &&
        (element.type.displayName === displayName ||
            // TODO: temp solution; Components using InferredPolymorphic have a displayName inside render.
            // https://jira.mongodb.org/browse/LG-3232
            ((0, isObject_1.default)(element.type) &&
                'render' in element.type &&
                ((_a = element.type.render) === null || _a === void 0 ? void 0 : _a.displayName) === displayName)));
}
/**
 * Filters children down to a restricted set of component types.
 *
 * Example:
 * ```ts
 * // `options` will only include `ComboboxOption` components,
 * // and log an error to the console for any invalid children
 * const options = validateChildren(children, ['ComboboxOption'])
 * ```
 *
 * @returns Array<ReactElement>
 */
var validateChildren = function (
/** Any React children */
children, 
/** Array of `displayNames` for valid components */
validTypes) {
    var _a;
    var validChildren = (_a = react_1.default.Children.map(children, function (child) {
        if (validTypes.some(function (type) { return isComponentType(child, type); })) {
            return child;
        }
    })) === null || _a === void 0 ? void 0 : _a.filter(function (child) { return !(0, isUndefined_1.default)(child); });
    if (!(0, isUndefined_1.default)(children) &&
        (validChildren === null || validChildren === void 0 ? void 0 : validChildren.length) !== react_1.default.Children.count(children)) {
        _1.consoleOnce.error("Children must be one of: ".concat(validTypes.join(', ')), "Received children: ", children);
    }
    return validChildren;
};
exports.validateChildren = validateChildren;
