"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.filterChildren = void 0;
var react_1 = require("react");
var hasStaticProperty_1 = require("../hasStaticProperty");
/**
 * Filter out child components that have any of the specified static properties
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
 * // ✅ Will filter out: Direct children with matching properties
 * <Foo isFoo={true} />
 *
 * // ✅ Will filter out: Children inside fragments with matching properties
 * <><Bar isBar={true} /></>
 *
 * // ❌ Will NOT filter: Nested fragments
 * <><><Baz isBaz={true} /></></>
 *
 * // ❌ Will NOT filter: Deeply nested
 * <div><Foo isFoo={true} /></div>
 * ```
 *
 * @param children Any React children
 * @param staticPropertiesToExclude Array of static property names to filter out
 * @returns ReactNode with matching components filtered out
 */
var filterChildren = function (children, staticPropertiesToExclude) {
    // Handle empty/null children - Children.map returns null for these cases
    if (!children)
        return [];
    return react_1.Children.map(children, function (child) {
        if (!(0, react_1.isValidElement)(child))
            return child;
        // Handle fragments by filtering their children
        if (child.type === react_1.Fragment) {
            // Children.map automatically flattens the returned array,
            // maintaining the fragment flattening behavior
            return react_1.Children.map(child.props.children, function (fragmentChild) {
                if (!(0, react_1.isValidElement)(fragmentChild))
                    return fragmentChild;
                if ((0, hasStaticProperty_1.hasAnyStaticProperty)(fragmentChild.type, staticPropertiesToExclude)) {
                    return null; // Filter out - React ignores null returns
                }
                return fragmentChild;
            });
        }
        // Filter direct children
        if ((0, hasStaticProperty_1.hasAnyStaticProperty)(child.type, staticPropertiesToExclude)) {
            return null; // Filter out - React ignores null returns
        }
        return child;
    });
};
exports.filterChildren = filterChildren;
