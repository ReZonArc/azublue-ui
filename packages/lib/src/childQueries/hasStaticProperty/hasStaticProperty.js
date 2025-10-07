"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.hasStaticProperty = hasStaticProperty;
exports.hasAnyStaticProperty = hasAnyStaticProperty;
/**
 * Check if a component has the specified static property.
 * Handles React components, styled components, HTML elements, and forwardRef components.
 *
 * @param component The component to check (React component, HTML tag name, or null/undefined)
 * @param staticProperty The static property name to check for
 * @returns True if the component has the static property
 *
 * @example
 * ```ts
 * // Regular component
 * const MyComponent = () => <div />;
 * MyComponent.isMyComponent = true;
 * hasStaticProperty(MyComponent, 'isMyComponent'); // true
 *
 * // Styled component
 * const StyledComponent = styled(MyComponent)`color: red;`;
 * hasStaticProperty(StyledComponent, 'isMyComponent'); // true (via .target)
 *
 * // HTML element (returns false)
 * hasStaticProperty('div', 'someProp'); // false
 * ```
 */
function hasStaticProperty(component, staticProperty) {
    var _a, _b;
    if (!component || typeof component === 'string')
        return false;
    return !!(component[staticProperty] || // Direct property on component
        ((_a = component.target) === null || _a === void 0 ? void 0 : _a[staticProperty]) || // Standard styled() components: original component is stored in .target
        (
        // For components created by styled() wrapping a component that uses React.forwardRef,
        // Emotion does NOT hoist static properties to the styled wrapper. Instead, the original
        // component is stored in .__emotion_base, and static properties must be checked there.
        // This is required for correct detection when styled wraps a forwardRef component.
        (_b = component.__emotion_base) === null || _b === void 0 ? void 0 : _b[staticProperty]));
}
/**
 * Check if a component has any of the specified static properties.
 * Handles React components, styled components, HTML elements, and forwardRef components.
 *
 * @param component The component to check (React component, HTML tag name, or null/undefined)
 * @param staticProperties Array of static property names to check for
 * @returns True if the component has any of the static properties
 *
 * @example
 * ```ts
 * // Check multiple properties
 * const MyComponent = () => <div />;
 * MyComponent.isButton = true;
 * hasAnyStaticProperty(MyComponent, ['isButton', 'isInput']); // true
 * hasAnyStaticProperty(MyComponent, ['isInput', 'isSelect']); // false
 * ```
 */
function hasAnyStaticProperty(component, staticProperties) {
    return staticProperties.some(function (property) {
        return hasStaticProperty(component, property);
    });
}
