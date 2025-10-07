"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AriaCurrentValue = exports.keyMap = exports.typeIs = exports.Theme = exports.getTheme = exports.getNodeTextContent = exports.createUniqueClassName = exports.validateChildren = exports.isComponentType = exports.queryLastFocusableElement = exports.queryFirstFocusableElement = exports.queryAllFocusableElements = exports.focusableElementSelector = exports.getMobileMediaQuery = exports.getClosestFocusableElement = exports.formatCssSize = exports.deepMapValues = exports.createSyntheticEvent = exports.isChildWithProperty = exports.hasStaticProperty = exports.hasAnyStaticProperty = exports.findChildren = exports.findChild = exports.filterChildren = void 0;
exports.createDataProp = createDataProp;
exports.enforceExhaustive = enforceExhaustive;
var createUniqueClassName_1 = require("./createUniqueClassName");
exports.createUniqueClassName = createUniqueClassName_1.default;
var DarkModeProps_1 = require("./DarkModeProps");
Object.defineProperty(exports, "Theme", { enumerable: true, get: function () { return DarkModeProps_1.Theme; } });
var getNodeTextContent_1 = require("./getNodeTextContent");
exports.getNodeTextContent = getNodeTextContent_1.default;
var getTheme_1 = require("./getTheme");
exports.getTheme = getTheme_1.default;
var typeIs = require("./typeIs");
exports.typeIs = typeIs;
var childQueries_1 = require("./childQueries");
Object.defineProperty(exports, "filterChildren", { enumerable: true, get: function () { return childQueries_1.filterChildren; } });
Object.defineProperty(exports, "findChild", { enumerable: true, get: function () { return childQueries_1.findChild; } });
Object.defineProperty(exports, "findChildren", { enumerable: true, get: function () { return childQueries_1.findChildren; } });
Object.defineProperty(exports, "hasAnyStaticProperty", { enumerable: true, get: function () { return childQueries_1.hasAnyStaticProperty; } });
Object.defineProperty(exports, "hasStaticProperty", { enumerable: true, get: function () { return childQueries_1.hasStaticProperty; } });
Object.defineProperty(exports, "isChildWithProperty", { enumerable: true, get: function () { return childQueries_1.isChildWithProperty; } });
var createSyntheticEvent_1 = require("./createSyntheticEvent");
Object.defineProperty(exports, "createSyntheticEvent", { enumerable: true, get: function () { return createSyntheticEvent_1.createSyntheticEvent; } });
var deepMapValues_1 = require("./deepMapValues");
Object.defineProperty(exports, "deepMapValues", { enumerable: true, get: function () { return deepMapValues_1.deepMapValues; } });
var formatCssSize_1 = require("./formatCssSize");
Object.defineProperty(exports, "formatCssSize", { enumerable: true, get: function () { return formatCssSize_1.formatCssSize; } });
var getClosestFocusableElement_1 = require("./getClosestFocusableElement");
Object.defineProperty(exports, "getClosestFocusableElement", { enumerable: true, get: function () { return getClosestFocusableElement_1.getClosestFocusableElement; } });
var getMobileMediaQuery_1 = require("./getMobileMediaQuery");
Object.defineProperty(exports, "getMobileMediaQuery", { enumerable: true, get: function () { return getMobileMediaQuery_1.getMobileMediaQuery; } });
__exportStar(require("./helpers"), exports);
var queryFocusableElements_1 = require("./queryFocusableElements");
Object.defineProperty(exports, "focusableElementSelector", { enumerable: true, get: function () { return queryFocusableElements_1.focusableElementSelector; } });
Object.defineProperty(exports, "queryAllFocusableElements", { enumerable: true, get: function () { return queryFocusableElements_1.queryAllFocusableElements; } });
Object.defineProperty(exports, "queryFirstFocusableElement", { enumerable: true, get: function () { return queryFocusableElements_1.queryFirstFocusableElement; } });
Object.defineProperty(exports, "queryLastFocusableElement", { enumerable: true, get: function () { return queryFocusableElements_1.queryLastFocusableElement; } });
var validateChildren_1 = require("./validateChildren");
Object.defineProperty(exports, "isComponentType", { enumerable: true, get: function () { return validateChildren_1.isComponentType; } });
Object.defineProperty(exports, "validateChildren", { enumerable: true, get: function () { return validateChildren_1.validateChildren; } });
/**
 * Utility for making it easier to couple a React Component to a css selector.
 * Useful when writing css selectors that rely on interactivity, i.e. :hover.
 * Example:
 *  const checkBoxWrapper = createDataProp('checkbox-wrapper');
 *  // Used as selector:
 *  css`&:hover ${checkboxWrapper.selector} { }`
 *  // Used on React Component
 *  <div {...checkboxWrapper.prop} />
 * @param {string} name Name of element we want to reference.
 *
 * @deprecated
 */
function createDataProp(name) {
    var _a;
    // ts:emit throws an error if this is not typed. Usually this can be inferred.
    var prefix = 'data-leafygreen-ui';
    return {
        prop: (_a = {},
            _a[prefix] = name,
            _a),
        selector: "[".concat(prefix, "=\"").concat(name, "\"]"),
    };
}
/** Object mapping keyCodes to keys */
exports.keyMap = {
    ArrowUp: 'ArrowUp',
    ArrowDown: 'ArrowDown',
    ArrowLeft: 'ArrowLeft',
    ArrowRight: 'ArrowRight',
    Backspace: 'Backspace',
    BracketLeft: '[',
    Delete: 'Delete',
    Enter: 'Enter',
    Escape: 'Escape',
    Space: ' ',
    Tab: 'Tab',
};
/**
 * An enum of accepted values for the "aria-current" attribute, used for
 * indicating current/active state across several contexts.
 *
 * The values "false", the empty string, and an ommission of this attribute
 * are all treated identically by user agents and screen readers.
 *
 * W3C Recommendation: https://www.w3.org/TR/wai-aria-1.1/#aria-current
 */
exports.AriaCurrentValue = {
    Page: 'page', // current value in a set of pagination links
    Step: 'step', // current value in a step indicator
    Location: 'location', // current value in a chart or other visual flow
    Date: 'date', // current value in a calendar or date picker
    Time: 'time', // current value in a timetable or time picker
    True: 'true', // (fallback) current value in any set of options/elements
    Unset: 'false', // equivalent to omitting the aria-current attribute
};
/**
 * Helper function to use the typechecker to catch when
 * not all cases of a type have been handled.
 *
 * Example 1:
 *   let color: 'red' | 'blue' | 'green';
 *   switch (color) {
 *      case 'red':
 *        ...
 *        break;
 *      case 'blue':
 *        ...
 *        break;
 *      default:
 *        enforceExhaustive(color);
 *                          ^^^^^
 *          Argument of type 'string' is not assignable to parameter of type 'never'.
 *   }
 *
 * Example 2:
 *   let key: number | string | symbol;
 *
 *   if (typeof key === 'string') {
 *     ...
 *     return;
 *   }
 *
 *   if (typeof key === 'number') {
 *      ...
 *      return;
 *   }
 *
 *   enforceExhaustive(key);
 *                     ^^^
 *     Argument of type 'symbol' is not assignable to parameter of type 'never'.
 */
function enforceExhaustive(value) {
    throw Error("Received unhandled value: ".concat(value));
}
