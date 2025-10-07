"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var _1 = require(".");
describe('packages/lib/src/getNodeTextContent', function () {
    describe('getNodeTextContent', function () {
        test('returns empty string for undefined node', function () {
            var result = (0, _1.default)(undefined);
            expect(result).toBe('');
        });
        test('returns correct text content for a string node', function () {
            var result = (0, _1.default)('leafy green');
            expect(result).toBe('leafy green');
        });
        test('returns correct text content for a number node', function () {
            var result = (0, _1.default)(123);
            expect(result).toBe('123');
        });
        test('returns concatenated text content for an array of nodes', function () {
            var result = (0, _1.default)(['leafy', 'green', false]);
            expect(result).toBe('leafy green');
        });
        test('returns text content for intrinsic elements', function () {
            var element = react_1.default.createElement('div', null, 'leafy', react_1.default.createElement('span', null, 'green'));
            var result = (0, _1.default)(element);
            expect(result).toBe('leafy green');
        });
        test('returns text content for functional components', function () {
            var FunctionalComponent = function (_a) {
                var title = _a.title;
                return react_1.default.createElement('h1', null, 'title: ', title);
            };
            var element = react_1.default.createElement(FunctionalComponent, {
                title: 'leafy green',
            });
            var result = (0, _1.default)(element);
            expect(result).toBe('title: leafy green');
        });
        test('returns text content for nested functional components', function () {
            var FunctionalComponent = function (_a) {
                var title = _a.title;
                return react_1.default.createElement('div', null, 'title: ', react_1.default.createElement('span', null, title));
            };
            var element = react_1.default.createElement(FunctionalComponent, {
                title: 'leafy green',
            });
            var result = (0, _1.default)(element);
            expect(result).toBe('title: leafy green');
        });
    });
});
