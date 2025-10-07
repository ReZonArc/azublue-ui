"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findChild = void 0;
var react_1 = require("react");
var isChildWithProperty_1 = require("../isChildWithProperty");
var unwrapRootFragment_1 = require("../unwrapRootFragment");
/**
 * Find the first child component with a matching static property
 *
 * **Search Depth:** This function only searches 1 level deep:
 * - Direct children of the provided children
 * - Direct children inside React.Fragment components (1 level of fragment nesting)
 * - Does NOT recursively search nested fragments or deeply nested components
 *
 * **Styled Component Support:** Checks component.target and component.__emotion_base
 * for styled() wrapped components.
 *
 * @example
 * ```ts
 * // ✅ Will find: Direct child
 * findChild(<Foo />, 'isFoo') // <Foo />
 *
 * // ✅ Will find: Child inside a single fragment
 * findChild(<><Foo /></>, 'isFoo') // <Foo />
 *
 * // ❌ Will NOT find: Deeply nested fragments
 * findChild(<><><Foo /></></>, 'isFoo') // undefined
 *
 * // ❌ Will NOT find: Nested in other elements
 * findChild(<div><Foo /></div>, 'isFoo') // undefined
 * ```
 *
 * @param children Any React children
 * @param staticProperty The static property name to check for
 * @returns The first matching ReactElement or undefined if not found
 */
var findChild = function (children, staticProperty) {
    if (!children || react_1.Children.count(children) === 0) {
        return undefined;
    }
    var allChildren = (0, unwrapRootFragment_1.unwrapRootFragment)(children);
    return allChildren === null || allChildren === void 0 ? void 0 : allChildren.find(function (child) {
        return (0, isChildWithProperty_1.isChildWithProperty)(child, staticProperty);
    });
};
exports.findChild = findChild;
