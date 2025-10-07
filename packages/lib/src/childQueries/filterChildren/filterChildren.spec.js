"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var styled_1 = require("@emotion/styled");
var filterChildren_1 = require("./filterChildren");
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
describe('filterChildren', function () {
    test('should filter out children with matching static properties', function () {
        var children = (<>
        <Foo text="should-be-filtered"/>
        <Bar text="should-remain"/>
        <Baz text="should-be-filtered"/>
        <div>regular-div</div>
      </>);
        var filtered = (0, filterChildren_1.filterChildren)(children, ['isFoo', 'isBaz']);
        var filteredArray = react_1.default.Children.toArray(filtered);
        expect(filteredArray).toHaveLength(2);
        expect(filteredArray[0].props.text).toBe('should-remain');
        expect(filteredArray[1].type).toBe('div');
    });
    test('should return all children when no properties match', function () {
        var children = (<>
        <Foo text="first"/>
        <Bar text="second"/>
      </>);
        var filtered = (0, filterChildren_1.filterChildren)(children, ['isNonExistent']);
        var filteredArray = react_1.default.Children.toArray(filtered);
        expect(filteredArray).toHaveLength(2);
        expect(filteredArray[0].props.text).toBe('first');
        expect(filteredArray[1].props.text).toBe('second');
    });
    test('should handle empty children', function () {
        var filtered = (0, filterChildren_1.filterChildren)(null, ['isFoo']);
        expect(filtered).toEqual([]);
    });
    test('should handle array children', function () {
        var children = [
            <Foo key="1" text="filter-me"/>,
            <Bar key="2" text="keep-me"/>,
        ];
        var filtered = (0, filterChildren_1.filterChildren)(children, ['isFoo']);
        var filteredArray = react_1.default.Children.toArray(filtered);
        expect(filteredArray).toHaveLength(1);
        expect(filteredArray[0].props.text).toBe('keep-me');
    });
    test('should filter children inside fragments', function () {
        var children = (<react_1.default.Fragment>
        <Foo text="filter-from-fragment"/>
        <Bar text="keep-from-fragment"/>
      </react_1.default.Fragment>);
        var filtered = (0, filterChildren_1.filterChildren)(children, ['isFoo']);
        var filteredArray = react_1.default.Children.toArray(filtered);
        // Fragment children get flattened, so we should have 1 Bar component directly
        expect(filteredArray).toHaveLength(1);
        expect(filteredArray[0].props.text).toBe('keep-from-fragment');
    });
    test('should work with styled components from @emotion/styled', function () {
        // Create a real styled component
        var StyledFoo = (0, styled_1.default)(Foo)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n      background-color: blue;\n    "], ["\n      background-color: blue;\n    "])));
        var children = (<>
        <StyledFoo text="styled-should-be-filtered"/>
        <Bar text="regular-should-remain"/>
      </>);
        var filtered = (0, filterChildren_1.filterChildren)(children, ['isFoo']);
        var filteredArray = react_1.default.Children.toArray(filtered);
        // Should only have Bar remaining (fragment gets flattened)
        expect(filteredArray).toHaveLength(1);
        expect(filteredArray[0].props.text).toBe('regular-should-remain');
    });
    test('should NOT filter deeply nested components (search depth limitation)', function () {
        var children = (<>
        {/* Nested fragment - should NOT be filtered */}
        <react_1.default.Fragment>
          <react_1.default.Fragment>
            <Foo text="deeply-nested"/>
          </react_1.default.Fragment>
        </react_1.default.Fragment>

        {/* Component inside div - should NOT be filtered */}
        <div>
          <Foo text="inside-div"/>
        </div>

        {/* Direct Foo - SHOULD be filtered */}
        <Foo text="direct-foo"/>
        <Bar text="direct-bar"/>
      </>);
        var filtered = (0, filterChildren_1.filterChildren)(children, ['isFoo']);
        var filteredArray = react_1.default.Children.toArray(filtered);
        // Should have 3 items: nested fragment content, div with Foo inside, and Bar
        // (fragments get flattened, so nested fragment becomes its children)
        expect(filteredArray).toHaveLength(3);
        // The direct Foo should be filtered out, but nested ones should remain
        var barChild = filteredArray.find(function (child) {
            return react_1.default.isValidElement(child) &&
                child.props.text === 'direct-bar';
        });
        expect(barChild).toBeDefined();
    });
    test('should handle multiple properties to filter', function () {
        var children = (<>
        <Foo text="filter-foo"/>
        <Bar text="filter-bar"/>
        <Baz text="keep-baz"/>
        <div>keep-div</div>
      </>);
        var filtered = (0, filterChildren_1.filterChildren)(children, ['isFoo', 'isBar']);
        var filteredArray = react_1.default.Children.toArray(filtered);
        expect(filteredArray).toHaveLength(2);
        expect(filteredArray[0].props.text).toBe('keep-baz');
        expect(filteredArray[1].type).toBe('div');
    });
});
var templateObject_1;
