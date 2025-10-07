"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var deepOmit_1 = require("./deepOmit");
describe('deepOmit', function () {
    describe('basic functionality', function () {
        it('omits top-level properties', function () {
            var obj = {
                a: 1,
                b: 2,
                c: 3,
            };
            var result = (0, deepOmit_1.deepOmit)(obj, ['b']);
            expect(result).toEqual({ a: 1, c: 3 });
        });
        it('omits multiple top-level properties', function () {
            var obj = {
                a: 1,
                b: 2,
                c: 3,
                d: 4,
            };
            var result = (0, deepOmit_1.deepOmit)(obj, ['b', 'd']);
            expect(result).toEqual({ a: 1, c: 3 });
        });
    });
    describe('nested object handling', function () {
        it('omits nested properties using dot notation', function () {
            var obj = {
                a: 1,
                b: {
                    c: 2,
                    d: 3,
                },
            };
            var result = (0, deepOmit_1.deepOmit)(obj, ['b.d']);
            expect(result).toEqual({
                a: 1,
                b: {
                    c: 2,
                },
            });
        });
        it('handles deeply nested properties', function () {
            var obj = {
                a: 1,
                b: {
                    c: 2,
                    d: 3,
                    e: {
                        f: 4,
                        g: 5,
                        h: {
                            i: 6,
                            j: {
                                k: {
                                    l: 'very deep',
                                    m: 'also very deep',
                                },
                            },
                        },
                    },
                },
            };
            var result = (0, deepOmit_1.deepOmit)(obj, ['b.e.f', 'b.e.h.j.k.l']);
            expect(result).toEqual({
                a: 1,
                b: {
                    c: 2,
                    d: 3,
                    e: {
                        g: 5,
                        h: {
                            i: 6,
                            j: {
                                k: {
                                    m: 'also very deep',
                                },
                            },
                        },
                    },
                },
            });
        });
        it('matches the JSDoc example', function () {
            var obj = {
                a: 1,
                b: {
                    c: 2,
                    d: 3,
                    e: {
                        f: 4,
                    },
                },
            };
            var result = (0, deepOmit_1.deepOmit)(obj, ['b.d', 'b.e.f']);
            expect(result).toEqual({
                a: 1,
                b: {
                    c: 2,
                    e: {},
                },
            });
        });
    });
    describe('edge cases', function () {
        it('handles empty object', function () {
            var obj = {};
            var result = (0, deepOmit_1.deepOmit)(obj, ['a']);
            expect(result).toEqual({});
        });
        it('handles empty paths array', function () {
            var obj = {
                a: 1,
                b: {
                    c: 2,
                },
            };
            var result = (0, deepOmit_1.deepOmit)(obj, []);
            expect(result).toEqual(obj);
        });
        it('handles non-existent paths', function () {
            var obj = {
                a: 1,
                b: {
                    c: 2,
                },
            };
            var result = (0, deepOmit_1.deepOmit)(obj, ['x.y.z', 'b.nonexistent']);
            expect(result).toEqual(obj);
        });
        it('handles null and undefined values', function () {
            var obj = {
                a: 1,
                nullVal: null,
                undefinedVal: undefined,
                c: {
                    d: 2,
                },
            };
            var result = (0, deepOmit_1.deepOmit)(obj, ['c.d']);
            expect(result).toEqual({
                a: 1,
                nullVal: null,
                undefinedVal: undefined,
                c: {},
            });
        });
        it('handles objects with numeric string keys', function () {
            var obj = {
                '0': 'zero',
                '1': {
                    '2': 'two',
                    '3': 'three',
                },
                a: 'letter',
            };
            var result = (0, deepOmit_1.deepOmit)(obj, ['1.3']);
            expect(result).toEqual({
                '0': 'zero',
                '1': {
                    '2': 'two',
                },
                a: 'letter',
            });
        });
    });
    describe('array handling', function () {
        it('arrays are not transformed to objects', function () {
            var obj = {
                a: 1,
                b: [1, 2, 3],
                c: {
                    d: [4, 5, 6],
                    e: 7,
                },
            };
            var result = (0, deepOmit_1.deepOmit)(obj, ['c.e']);
            expect(result).toEqual({
                a: 1,
                b: [1, 2, 3],
                c: {
                    d: [4, 5, 6],
                },
            });
        });
        it('arrays containing objects are not transformed to objects', function () {
            var obj = {
                a: 1,
                b: {
                    c: [
                        { x: 1, y: 2 },
                        { x: 3, y: 4 },
                    ],
                    d: 5,
                },
            };
            var result = (0, deepOmit_1.deepOmit)(obj, ['b.d']);
            expect(result).toEqual({
                a: 1,
                b: {
                    c: [
                        { x: 1, y: 2 },
                        { x: 3, y: 4 },
                    ],
                },
            });
        });
    });
    describe('complex data types', function () {
        it('complex objects (functions, Date, RegExp) are left intact', function () {
            var fn = function () { return 'test'; };
            var date = new Date('2023-01-01');
            var regex = /test/g;
            var obj = {
                a: 1,
                fn: fn,
                date: date,
                regex: regex,
                c: {
                    d: 2,
                },
            };
            var result = (0, deepOmit_1.deepOmit)(obj, ['c.d']);
            expect(result).toEqual({
                a: 1,
                fn: fn,
                date: date,
                regex: regex,
                c: {},
            });
        });
    });
    describe('immutability', function () {
        it('does not modify the original object', function () {
            var obj = {
                a: 1,
                b: {
                    c: 2,
                    d: 3,
                },
            };
            var originalObj = JSON.parse(JSON.stringify(obj));
            (0, deepOmit_1.deepOmit)(obj, ['b.d']);
            expect(obj).toEqual(originalObj);
        });
        it('creates a new object reference', function () {
            var obj = {
                a: 1,
                b: {
                    c: 2,
                },
            };
            var result = (0, deepOmit_1.deepOmit)(obj, []);
            expect(result).not.toBe(obj);
            expect(result.b).not.toBe(obj.b);
        });
    });
    describe('mixed path types', function () {
        it('handles combination of top-level and nested paths', function () {
            var obj = {
                a: 1,
                b: {
                    c: 2,
                    d: {
                        e: 3,
                        f: 4,
                    },
                },
                g: 5,
            };
            var result = (0, deepOmit_1.deepOmit)(obj, ['a', 'b.d.e', 'g']);
            expect(result).toEqual({
                b: {
                    c: 2,
                    d: {
                        f: 4,
                    },
                },
            });
        });
        it('handles overlapping paths', function () {
            var obj = {
                a: {
                    b: {
                        c: 1,
                        d: 2,
                    },
                    e: 3,
                },
            };
            var result = (0, deepOmit_1.deepOmit)(obj, ['a.b', 'a.b.c']);
            expect(result).toEqual({
                a: {
                    e: 3,
                },
            });
        });
    });
    it('does not filter literal key names', function () {
        var obj = {
            user: {
                a: 1,
                'b.c': 'should-stay',
            },
            b: {
                c: 2,
                d: ['3', '4'],
            },
        };
        var result = (0, deepOmit_1.deepOmit)(obj, ['b.c']);
        expect(result).toEqual({
            user: {
                a: 1,
                'b.c': 'should-stay',
            },
            b: {
                d: ['3', '4'],
            },
        });
    });
});
