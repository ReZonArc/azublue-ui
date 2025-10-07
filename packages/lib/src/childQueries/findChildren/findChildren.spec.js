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
var findChildren_1 = require("./findChildren");
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
describe('packages/lib/findChildren', function () {
    describe('basic functionality', function () {
        it('should find all children with matching static property', function () {
            var children = [
                <Foo text="first"/>,
                <Bar text="second"/>,
                <Foo text="third"/>,
                <Baz text="fourth"/>,
                <Foo text="fifth"/>,
            ];
            var found = (0, findChildren_1.findChildren)(children, 'isFoo');
            expect(found).toHaveLength(3);
            expect(found[0].props.text).toBe('first');
            expect(found[1].props.text).toBe('third');
            expect(found[2].props.text).toBe('fifth');
        });
        it('should return empty array if no children match', function () {
            var children = [<Foo text="first"/>, <Bar text="second"/>];
            var found = (0, findChildren_1.findChildren)(children, 'isBaz');
            expect(found).toEqual([]);
        });
        it('should find single matching child', function () {
            var children = [
                <Foo key="1" text="only-foo"/>,
                <Bar key="2" text="second"/>,
            ];
            var found = (0, findChildren_1.findChildren)(children, 'isFoo');
            expect(found).toHaveLength(1);
            expect(found[0].props.text).toBe('only-foo');
        });
    });
    describe('empty and null children handling', function () {
        it('should handle null children', function () {
            var found = (0, findChildren_1.findChildren)(null, 'isFoo');
            expect(found).toEqual([]);
        });
        it('should handle undefined children', function () {
            var found = (0, findChildren_1.findChildren)(undefined, 'isFoo');
            expect(found).toEqual([]);
        });
        it('should handle empty fragment', function () {
            var children = <></>;
            var found = (0, findChildren_1.findChildren)(children, 'isFoo');
            expect(found).toEqual([]);
        });
        it('should handle empty array children', function () {
            var children = [];
            var found = (0, findChildren_1.findChildren)(children, 'isFoo');
            expect(found).toEqual([]);
        });
    });
    describe('Fragment handling', function () {
        it('should handle single-level fragment children', function () {
            var children = (<react_1.default.Fragment>
          <Foo text="foo-in-fragment"/>
          <Bar text="bar-in-fragment"/>
          <Foo text="another-foo"/>
        </react_1.default.Fragment>);
            var found = (0, findChildren_1.findChildren)(children, 'isFoo');
            expect(found).toHaveLength(2);
            expect(found[0].props.text).toBe('foo-in-fragment');
            expect(found[1].props.text).toBe('another-foo');
        });
        it('should NOT find children in deeply nested Fragments', function () {
            var children = (<react_1.default.Fragment>
          <Foo text="direct-foo"/>
          <react_1.default.Fragment>
            <react_1.default.Fragment>
              <Foo text="deeply-nested-foo"/>
            </react_1.default.Fragment>
          </react_1.default.Fragment>
          <Bar text="direct-bar"/>
        </react_1.default.Fragment>);
            // Should only find direct children, not double-nested ones
            var found = (0, findChildren_1.findChildren)(children, 'isFoo');
            expect(found).toHaveLength(1);
            expect(found[0].props.text).toBe('direct-foo');
        });
    });
    describe('styled components', function () {
        it('should work with styled components from @emotion/styled', function () {
            var StyledFoo = (0, styled_1.default)(Foo)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n        background-color: red;\n        padding: 8px;\n      "], ["\n        background-color: red;\n        padding: 8px;\n      "])));
            var children = [
                <Foo text="regular-foo"/>,
                <StyledFoo text="styled-foo"/>,
                <StyledFoo text="styled-foo-two"/>,
                <Bar text="regular-bar"/>,
                <Foo text="another-foo"/>,
            ];
            var found = (0, findChildren_1.findChildren)(children, 'isFoo');
            expect(found).toHaveLength(4);
            expect(found.map(function (c) { return c.props.text; })).toEqual([
                'regular-foo',
                'styled-foo',
                'styled-foo-two',
                'another-foo',
            ]);
            // Verify the styled component is actually styled
            var styledComponent = found[1];
            var styledType = styledComponent.type;
            var hasEmotionProps = !!(styledType.target || styledType.__emotion_base);
            expect(hasEmotionProps).toBe(true);
        });
    });
    describe('search depth limitations', function () {
        it('should NOT find deeply nested components', function () {
            var children = [
                <react_1.Fragment>
          <Foo text="single-fragment"/>
        </react_1.Fragment>,
                <react_1.Fragment>
          <react_1.Fragment>
            <Foo text="double-nested"/>
          </react_1.Fragment>
        </react_1.Fragment>,
                <div>
          <Foo text="inside-div"/>
        </div>,
                <Foo text="direct-child"/>,
            ];
            var found = (0, findChildren_1.findChildren)(children, 'isFoo');
            expect(found).toHaveLength(1);
            expect(found[0].props.text).toBe('direct-child');
        });
    });
});
var templateObject_1;
