"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var formatCssSize_1 = require("./formatCssSize");
describe('formatCssSize', function () {
    test('appends px to number input', function () {
        expect((0, formatCssSize_1.formatCssSize)(100)).toBe('100px');
        expect((0, formatCssSize_1.formatCssSize)(0)).toBe('0px');
        expect((0, formatCssSize_1.formatCssSize)(-5)).toBe('-5px');
    });
    test('appends px to numeric string input', function () {
        expect((0, formatCssSize_1.formatCssSize)('100')).toBe('100px');
        expect((0, formatCssSize_1.formatCssSize)('0')).toBe('0px');
        expect((0, formatCssSize_1.formatCssSize)('-5')).toBe('-5px');
        expect((0, formatCssSize_1.formatCssSize)(' 42 ')).toBe('42px');
    });
    test('returns string with units as is', function () {
        expect((0, formatCssSize_1.formatCssSize)('100px')).toBe('100px');
        expect((0, formatCssSize_1.formatCssSize)('5rem')).toBe('5rem');
        expect((0, formatCssSize_1.formatCssSize)('2em')).toBe('2em');
        expect((0, formatCssSize_1.formatCssSize)('50%')).toBe('50%');
        expect((0, formatCssSize_1.formatCssSize)('auto')).toBe('auto');
        expect((0, formatCssSize_1.formatCssSize)('inherit')).toBe('inherit');
        expect((0, formatCssSize_1.formatCssSize)('calc(100% - 10px)')).toBe('calc(100% - 10px)');
    });
    test('handles edge cases for string input', function () {
        expect((0, formatCssSize_1.formatCssSize)('')).toBe('');
        expect((0, formatCssSize_1.formatCssSize)(' ')).toBe('');
        expect((0, formatCssSize_1.formatCssSize)('px')).toBe('px');
        expect((0, formatCssSize_1.formatCssSize)('100 px')).toBe('100 px');
        expect((0, formatCssSize_1.formatCssSize)('100.5')).toBe('100.5px');
        expect((0, formatCssSize_1.formatCssSize)('.5')).toBe('.5px');
        expect((0, formatCssSize_1.formatCssSize)('-.5')).toBe('-.5px');
    });
    test('does not append px to non-numeric stripnngs', function () {
        expect((0, formatCssSize_1.formatCssSize)('foo')).toBe('foo');
        expect((0, formatCssSize_1.formatCssSize)('barpx')).toBe('barpx');
        expect((0, formatCssSize_1.formatCssSize)('100abc')).toBe('100abc');
    });
});
