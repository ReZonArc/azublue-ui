"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var styled_1 = require("@emotion/styled");
var isChildWithProperty_1 = require("./isChildWithProperty");
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
describe('isChildWithProperty', function () {
    describe('basic component property checking', function () {
        test('should return true when child has the specified static property', function () {
            var element = <Foo text="test"/>;
            expect((0, isChildWithProperty_1.isChildWithProperty)(element, 'isFoo')).toBe(true);
        });
        test('should return false when child does not have the specified static property', function () {
            var element = <Foo text="test"/>;
            expect((0, isChildWithProperty_1.isChildWithProperty)(element, 'isBar')).toBe(false);
        });
    });
    describe('non-React element handling', function () {
        test('should return false for non-React elements', function () {
            expect((0, isChildWithProperty_1.isChildWithProperty)('string', 'isFoo')).toBe(false);
            expect((0, isChildWithProperty_1.isChildWithProperty)(123, 'isFoo')).toBe(false);
            expect((0, isChildWithProperty_1.isChildWithProperty)(null, 'isFoo')).toBe(false);
            expect((0, isChildWithProperty_1.isChildWithProperty)(undefined, 'isFoo')).toBe(false);
            expect((0, isChildWithProperty_1.isChildWithProperty)(true, 'isFoo')).toBe(false);
            expect((0, isChildWithProperty_1.isChildWithProperty)({}, 'isFoo')).toBe(false);
            expect((0, isChildWithProperty_1.isChildWithProperty)([], 'isFoo')).toBe(false);
        });
    });
    describe('Fragment handling', function () {
        test('should return false when root element is a fragment', function () {
            var fragmentElement = (<react_1.Fragment>
          <Foo text="inside fragment"/>
        </react_1.Fragment>);
            expect((0, isChildWithProperty_1.isChildWithProperty)(fragmentElement, 'isFoo')).toBe(false);
        });
        test('should handle empty Fragment', function () {
            var emptyFragment = <react_1.Fragment />;
            expect((0, isChildWithProperty_1.isChildWithProperty)(emptyFragment, 'isFoo')).toBe(false);
        });
        test('should handle Fragment with non-element children', function () {
            var fragmentWithText = <react_1.Fragment>text content</react_1.Fragment>;
            expect((0, isChildWithProperty_1.isChildWithProperty)(fragmentWithText, 'isFoo')).toBe(false);
        });
        test('should NOT handle nested Fragments recursively', function () {
            var nestedFragment = (<react_1.Fragment>
          <react_1.Fragment>
            <Foo text="nested single child"/>
          </react_1.Fragment>
        </react_1.Fragment>);
            // Should recursively find Foo through the nested single child fragments
            expect((0, isChildWithProperty_1.isChildWithProperty)(nestedFragment, 'isFoo')).toBe(false);
            expect((0, isChildWithProperty_1.isChildWithProperty)(nestedFragment, 'isBar')).toBe(false);
        });
    });
    describe('native HTML elements', function () {
        test('should return false for native HTML elements without static properties', function () {
            var divElement = <div>content</div>;
            var spanElement = <span>content</span>;
            expect((0, isChildWithProperty_1.isChildWithProperty)(divElement, 'isFoo')).toBe(false);
            expect((0, isChildWithProperty_1.isChildWithProperty)(spanElement, 'isBar')).toBe(false);
        });
    });
    describe('styled components', function () {
        test('should work with styled components from @emotion/styled', function () {
            // Create a real styled component using the actual styled() function
            var StyledFoo = (0, styled_1.default)(Foo)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n        background-color: red;\n        padding: 8px;\n      "], ["\n        background-color: red;\n        padding: 8px;\n      "])));
            var styledElement = <StyledFoo text="styled component"/>;
            // The styled component should inherit the static property from the base component
            expect((0, isChildWithProperty_1.isChildWithProperty)(styledElement, 'isFoo')).toBe(true);
            expect((0, isChildWithProperty_1.isChildWithProperty)(styledElement, 'isBar')).toBe(false);
        });
    });
    describe('edge cases', function () {
        test('should handle components with multiple static properties', function () {
            // Add multiple static properties to a component
            var ComponentWithProps = function (_a) {
                var text = _a.text;
                return (<div>{text}</div>);
            };
            ComponentWithProps.isPrimary = true;
            ComponentWithProps.isSecondary = true;
            ComponentWithProps.isSpecial = 'yes';
            var element = <ComponentWithProps text="multi-prop"/>;
            expect((0, isChildWithProperty_1.isChildWithProperty)(element, 'isPrimary')).toBe(true);
            expect((0, isChildWithProperty_1.isChildWithProperty)(element, 'isSecondary')).toBe(true);
            expect((0, isChildWithProperty_1.isChildWithProperty)(element, 'isSpecial')).toBe(true);
            expect((0, isChildWithProperty_1.isChildWithProperty)(element, 'nonExistent')).toBe(false);
        });
        test('should handle falsy static property values', function () {
            var FalsyPropComponent = function (_a) {
                var text = _a.text;
                return (<div>{text}</div>);
            };
            FalsyPropComponent.isFalse = false;
            FalsyPropComponent.isZero = 0;
            FalsyPropComponent.isEmpty = '';
            var element = <FalsyPropComponent text="falsy props"/>;
            // hasStaticProperty returns false for falsy values (this is expected behavior)
            expect((0, isChildWithProperty_1.isChildWithProperty)(element, 'isFalse')).toBe(false);
            expect((0, isChildWithProperty_1.isChildWithProperty)(element, 'isZero')).toBe(false);
            expect((0, isChildWithProperty_1.isChildWithProperty)(element, 'isEmpty')).toBe(false);
        });
    });
});
var templateObject_1;
