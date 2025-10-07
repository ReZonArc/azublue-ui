"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _1 = require(".");
describe('packages/lib/helpers/rollover', function () {
    test('returns value when within bounds', function () {
        expect((0, _1.rollover)(5, 1, 12)).toEqual(5);
    });
    test('returns a rolled over value', function () {
        expect((0, _1.rollover)(13, 1, 12)).toEqual(1);
    });
    test('returns a rolled under value', function () {
        expect((0, _1.rollover)(0, 1, 12)).toEqual(12);
    });
    test('returns a rolled over value when value is > 2x the range', function () {
        expect((0, _1.rollover)(25, 1, 12)).toEqual(2);
    });
    test('returns a rolled under value when value is > 2x the range', function () {
        expect((0, _1.rollover)(-12, 1, 12)).toEqual(11);
    });
});
