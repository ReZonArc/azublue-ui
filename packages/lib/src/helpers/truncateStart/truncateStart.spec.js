"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _1 = require(".");
describe('packages/lib/helpers/truncateStart', function () {
    test('does not truncate when less than maxLength', function () {
        expect((0, _1.truncateStart)('abc')).toBe('abc');
    });
    test('truncates to maxLength', function () {
        expect((0, _1.truncateStart)('abc', { length: 2 })).toBe('bc');
    });
});
