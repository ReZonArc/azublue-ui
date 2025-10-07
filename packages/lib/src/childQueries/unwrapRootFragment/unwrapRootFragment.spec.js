"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var unwrapRootFragment_1 = require("./unwrapRootFragment");
describe('packages/lib/unwrapRootFragment', function () {
    test('returns a single child that is not a Fragment', function () {
        var unwrapped = (0, unwrapRootFragment_1.unwrapRootFragment)(<div></div>);
        expect(unwrapped).toHaveLength(1);
    });
    test('returns children unchanged when it is an array', function () {
        var unwrapped = (0, unwrapRootFragment_1.unwrapRootFragment)([
            <div key="1"></div>,
            <div key="2"></div>,
        ]);
        expect(unwrapped).toHaveLength(2);
    });
    test("returns a single Fragment's children", function () {
        var unwrapped = (0, unwrapRootFragment_1.unwrapRootFragment)(<react_1.Fragment>
        <div />
        <div />
      </react_1.Fragment>);
        expect(unwrapped).toHaveLength(2);
    });
    test('only unwraps a single layer of Fragments', function () {
        var unwrapped = (0, unwrapRootFragment_1.unwrapRootFragment)(<react_1.Fragment>
        <react_1.Fragment>
          <div />
          <div />
        </react_1.Fragment>
      </react_1.Fragment>);
        expect(unwrapped).toHaveLength(1);
    });
    test('returns an empty array children has no length', function () {
        var unwrapped = (0, unwrapRootFragment_1.unwrapRootFragment)([]);
        expect(unwrapped).toBeDefined();
        expect(unwrapped).toHaveLength(0);
    });
    test('returns undefined if no children are provided', function () {
        var unwrapped = (0, unwrapRootFragment_1.unwrapRootFragment)(undefined);
        expect(unwrapped).not.toBeDefined();
    });
});
