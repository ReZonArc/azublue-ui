"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var styled_1 = require("@emotion/styled");
var hasStaticProperty_1 = require("./hasStaticProperty");
// Test components
var Foo = function () { return <div>Foo</div>; };
Foo.isFoo = true;
var Bar = function () { return <div>Bar</div>; };
Bar.isBar = true;
var Baz = function () { return <div>Baz</div>; };
Baz.isBaz = true;
var Regular = function () { return <div>Regular</div>; };
// No static properties
describe('hasStaticProperty', function () {
    describe('regular components', function () {
        test('should return true when component has the static property', function () {
            expect((0, hasStaticProperty_1.hasStaticProperty)(Foo, 'isFoo')).toBe(true);
            expect((0, hasStaticProperty_1.hasStaticProperty)(Bar, 'isBar')).toBe(true);
            expect((0, hasStaticProperty_1.hasStaticProperty)(Baz, 'isBaz')).toBe(true);
        });
        test('should return false when component does not have the static property', function () {
            expect((0, hasStaticProperty_1.hasStaticProperty)(Foo, 'isBar')).toBe(false);
            expect((0, hasStaticProperty_1.hasStaticProperty)(Regular, 'isFoo')).toBe(false);
            expect((0, hasStaticProperty_1.hasStaticProperty)(Regular, 'nonExistent')).toBe(false);
        });
    });
    describe('styled components', function () {
        test('should work with standard styled() components via .target', function () {
            var StyledFoo = (0, styled_1.default)(Foo)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n        background-color: blue;\n      "], ["\n        background-color: blue;\n      "])));
            expect((0, hasStaticProperty_1.hasStaticProperty)(StyledFoo, 'isFoo')).toBe(true);
            expect((0, hasStaticProperty_1.hasStaticProperty)(StyledFoo, 'isBar')).toBe(false);
        });
        test('should work with exotic forward ref styled components via .__emotion_base', function () {
            // Create a component that simulates the exotic forwardRef pattern
            var ExoticComponent = {
                __emotion_base: Foo,
                // Other properties that would exist on an exotic styled component
                render: function () { return <div>Exotic</div>; },
            };
            expect((0, hasStaticProperty_1.hasStaticProperty)(ExoticComponent, 'isFoo')).toBe(true);
            expect((0, hasStaticProperty_1.hasStaticProperty)(ExoticComponent, 'isBar')).toBe(false);
        });
    });
    describe('edge cases', function () {
        test('should handle null/undefined components', function () {
            expect((0, hasStaticProperty_1.hasStaticProperty)(null, 'isFoo')).toBe(false);
            expect((0, hasStaticProperty_1.hasStaticProperty)(undefined, 'isFoo')).toBe(false);
        });
        test('should handle empty string property', function () {
            expect((0, hasStaticProperty_1.hasStaticProperty)(Foo, '')).toBe(false);
        });
        test('should handle components with falsy static properties', function () {
            var FalsyComponent = function () { return <div>Falsy</div>; };
            FalsyComponent.isFalsy = false;
            expect((0, hasStaticProperty_1.hasStaticProperty)(FalsyComponent, 'isFalsy')).toBe(false);
        });
        test('should handle components with truthy non-boolean static properties', function () {
            var TruthyComponent = function () { return <div>Truthy</div>; };
            TruthyComponent.customProp = 'some value';
            expect((0, hasStaticProperty_1.hasStaticProperty)(TruthyComponent, 'customProp')).toBe(true);
        });
        test('should handle HTML element names (strings) correctly', function () {
            expect((0, hasStaticProperty_1.hasStaticProperty)('div', 'someProp')).toBe(false);
            expect((0, hasStaticProperty_1.hasStaticProperty)('span', 'className')).toBe(false);
            expect((0, hasStaticProperty_1.hasStaticProperty)('button', 'isButton')).toBe(false);
        });
    });
});
describe('hasAnyStaticProperty', function () {
    describe('basic functionality', function () {
        test('should return true when component has any of the specified properties', function () {
            expect((0, hasStaticProperty_1.hasAnyStaticProperty)(Foo, ['isFoo'])).toBe(true);
            expect((0, hasStaticProperty_1.hasAnyStaticProperty)(Foo, ['isBar', 'isFoo'])).toBe(true);
            expect((0, hasStaticProperty_1.hasAnyStaticProperty)(Foo, ['isFoo', 'isBaz'])).toBe(true);
        });
        test('should return false when component has none of the specified properties', function () {
            expect((0, hasStaticProperty_1.hasAnyStaticProperty)(Foo, ['isBar'])).toBe(false);
            expect((0, hasStaticProperty_1.hasAnyStaticProperty)(Foo, ['isBar', 'isBaz'])).toBe(false);
            expect((0, hasStaticProperty_1.hasAnyStaticProperty)(Regular, ['isFoo', 'isBar', 'isBaz'])).toBe(false);
        });
        test('should return false for empty properties array', function () {
            expect((0, hasStaticProperty_1.hasAnyStaticProperty)(Foo, [])).toBe(false);
            expect((0, hasStaticProperty_1.hasAnyStaticProperty)(Regular, [])).toBe(false);
        });
    });
    describe('styled components', function () {
        test('should work with styled components', function () {
            var StyledFoo = (0, styled_1.default)(Foo)(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n        background-color: red;\n      "], ["\n        background-color: red;\n      "])));
            expect((0, hasStaticProperty_1.hasAnyStaticProperty)(StyledFoo, ['isFoo'])).toBe(true);
            expect((0, hasStaticProperty_1.hasAnyStaticProperty)(StyledFoo, ['isBar', 'isFoo'])).toBe(true);
            expect((0, hasStaticProperty_1.hasAnyStaticProperty)(StyledFoo, ['isBar', 'isBaz'])).toBe(false);
        });
    });
    describe('multiple components scenario', function () {
        test('should correctly identify components with different static properties', function () {
            var components = [Foo, Bar, Baz, Regular];
            var results = components.map(function (comp) {
                return (0, hasStaticProperty_1.hasAnyStaticProperty)(comp, ['isFoo', 'isBar']);
            });
            expect(results).toEqual([true, true, false, false]);
        });
    });
    describe('edge cases', function () {
        test('should handle null/undefined components', function () {
            expect((0, hasStaticProperty_1.hasAnyStaticProperty)(null, ['isFoo'])).toBe(false);
            expect((0, hasStaticProperty_1.hasAnyStaticProperty)(undefined, ['isFoo'])).toBe(false);
        });
        test('should handle array with empty strings', function () {
            expect((0, hasStaticProperty_1.hasAnyStaticProperty)(Foo, ['', 'isFoo'])).toBe(true);
            expect((0, hasStaticProperty_1.hasAnyStaticProperty)(Foo, ['', 'isBar'])).toBe(false);
        });
        test('should handle HTML element names (strings) correctly', function () {
            expect((0, hasStaticProperty_1.hasAnyStaticProperty)('div', ['someProp', 'anotherProp'])).toBe(false);
            expect((0, hasStaticProperty_1.hasAnyStaticProperty)('span', ['className'])).toBe(false);
        });
    });
});
var templateObject_1, templateObject_2;
