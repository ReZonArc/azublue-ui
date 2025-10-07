"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Disabling `react/jsx-key` lets us pass `children` as an Iterable<ReactNode> directly to the test function
 * instead of needing to wrap everything in a Fragment,
 * which is not representative of real use-cases
 */
/* eslint-disable react/jsx-key */
var react_1 = require("react");
var styled_1 = require("@emotion/styled");
var findChild_1 = require("./findChild");
// Test components
var Foo = react_1.default.forwardRef(function (_a, ref) {
    var text = _a.text;
    return <div ref={ref}>{text}</div>;
});
Foo.displayName = 'Foo';
var Bar = react_1.default.forwardRef(function (_a, ref) {
    var text = _a.text;
    return <div ref={ref}>{text}</div>;
});
Bar.displayName = 'Bar';
var Baz = react_1.default.forwardRef(function (_a, ref) {
    var text = _a.text;
    return <div ref={ref}>{text}</div>;
});
Baz.displayName = 'Baz';
// Add static properties to test components with type assertion
Foo.isFoo = true;
Bar.isBar = true;
Baz.isBaz = true;
describe('packages/lib/findChild', function () {
    test('should find a child component with matching static property', function () {
        // Create an iterable to test different iteration scenarios
        var children = [<Foo text="Foo"/>, <Bar text="Bar"/>];
        var found = (0, findChild_1.findChild)(children, 'isFoo');
        expect(found).toBeDefined();
        expect(found.props.text).toBe('Foo');
    });
    test('should find the first child component with matching static property', function () {
        var children = [
            <Foo text="first"/>,
            <Bar text="second"/>,
            <Foo text="third"/>,
        ];
        var found = (0, findChild_1.findChild)(children, 'isFoo');
        expect(found).toBeDefined();
        expect(found.props.text).toBe('first');
    });
    test('should return undefined if no child matches', function () {
        var children = [<Foo text="first"/>, <Bar text="second"/>];
        var found = (0, findChild_1.findChild)(children, 'isBaz');
        expect(found).toBeUndefined();
    });
    test('should handle empty children', function () {
        var found = (0, findChild_1.findChild)(null, 'isFoo');
        expect(found).toBeUndefined();
    });
    test('should handle a single-level of fragment children', function () {
        var children = (<react_1.default.Fragment>
        <Foo text="in-fragment"/>
        <Bar text="also-in-fragment"/>
      </react_1.default.Fragment>);
        var found = (0, findChild_1.findChild)(children, 'isBar');
        expect(found).toBeDefined();
        expect(found.props.text).toBe('also-in-fragment');
    });
    test('should NOT find components in deeply nested fragments (search depth limitation)', function () {
        var children = (<react_1.default.Fragment>
        <react_1.default.Fragment>
          <Foo text="deeply-nested"/>
          <Bar text="also-in-fragment"/>
        </react_1.default.Fragment>
      </react_1.default.Fragment>);
        // Should NOT find the deeply nested Foo instances
        var found = (0, findChild_1.findChild)(children, 'isFoo');
        expect(found).toBeUndefined();
    });
    test('should NOT find components wrapped in other elements', function () {
        var children = (<div>
        <Foo text="inside-div"/>
      </div>);
        // Should NOT find the deeply nested Foo instances
        var found = (0, findChild_1.findChild)(children, 'isFoo');
        expect(found).toBeUndefined();
    });
    test('should work with styled components from @emotion/styled', function () {
        // Create a real styled component using the actual styled() function
        var StyledFoo = (0, styled_1.default)(Foo)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n      background-color: red;\n      padding: 8px;\n    "], ["\n      background-color: red;\n      padding: 8px;\n    "])));
        var children = [<StyledFoo text="real-styled"/>, <Bar text="regular"/>];
        // The key test: findChild should find the styled component
        var found = (0, findChild_1.findChild)(children, 'isFoo');
        expect(found).toBeDefined();
        expect(found.props.text).toBe('real-styled');
        // Verify it's actually using a styled component (has emotion properties)
        var styledType = found.type;
        var hasEmotionProps = !!(styledType.target || styledType.__emotion_base);
        expect(hasEmotionProps).toBe(true);
    });
});
var templateObject_1;
