"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _1 = require(".");
describe('packages/date-picker/utils/cloneReverse', function () {
    test('reverses the array', function () {
        var arr = ['a', 'b', 'c', 'd'];
        expect((0, _1.cloneReverse)(arr)).toEqual(['d', 'c', 'b', 'a']);
    });
    test('does not affect the original array', function () {
        var arr = ['a', 'b', 'c', 'd'];
        var _ = (0, _1.cloneReverse)(arr);
        expect(arr).toEqual(['a', 'b', 'c', 'd']);
    });
    test('returns undefined for invalid input', function () {
        expect((0, _1.cloneReverse)()).toBeUndefined();
    });
});
