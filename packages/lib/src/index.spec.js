"use strict";
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("./index");
describe('packages/lib', function () {
    describe('OneOf', function () {
        test('Basic usage', function () {
            (function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, { foo: 42 }];
                        case 1:
                            _a.sent();
                            // @ts-expect-error
                            return [4 /*yield*/, { foo: 'hello' }];
                        case 2:
                            // @ts-expect-error
                            _a.sent();
                            return [4 /*yield*/, { bar: 'bar' }];
                        case 3:
                            _a.sent();
                            // @ts-expect-error
                            return [4 /*yield*/, { bar: 42 }];
                        case 4:
                            // @ts-expect-error
                            _a.sent();
                            // @ts-expect-error
                            return [4 /*yield*/, { foo: 42, bar: 'bar' }];
                        case 5:
                            // @ts-expect-error
                            _a.sent();
                            // @ts-expect-error
                            return [4 /*yield*/, {}];
                        case 6:
                            // @ts-expect-error
                            _a.sent();
                            return [2 /*return*/];
                    }
                });
            });
        });
        test('Overlapping properties', function () {
            (function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, { foo: 42, same: 'same', fooOnly: 42 }];
                        case 1:
                            _a.sent();
                            // @ts-expect-error
                            return [4 /*yield*/, { foo: 42, fooOnly: 42 }];
                        case 2:
                            // @ts-expect-error
                            _a.sent();
                            // @ts-expect-error
                            return [4 /*yield*/, { foo: 42, same: 'same' }];
                        case 3:
                            // @ts-expect-error
                            _a.sent();
                            // @ts-expect-error
                            return [4 /*yield*/, {
                                    foo: 42,
                                    same: 'same',
                                    fooOnly: 42,
                                    barOnly: 'barOnly',
                                }];
                        case 4:
                            // @ts-expect-error
                            _a.sent();
                            return [4 /*yield*/, { bar: 'bar', same: 'same', barOnly: 'barOnly' }];
                        case 5:
                            _a.sent();
                            // @ts-expect-error
                            return [4 /*yield*/, { bar: 'bar', barOnly: 'barOnly' }];
                        case 6:
                            // @ts-expect-error
                            _a.sent();
                            // @ts-expect-error
                            return [4 /*yield*/, { bar: 'bar', same: 'same' }];
                        case 7:
                            // @ts-expect-error
                            _a.sent();
                            return [4 /*yield*/, {
                                    bar: 'bar',
                                    same: 'same',
                                    barOnly: 'barOnly',
                                    // @ts-expect-error
                                    fooOnly: '42',
                                }];
                        case 8:
                            _a.sent();
                            return [2 /*return*/];
                    }
                });
            });
        });
        test('Optional properties', function () {
            (function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, { foo: 42, same: 'same' }];
                        case 1:
                            _a.sent();
                            return [4 /*yield*/, { foo: 42 }];
                        case 2:
                            _a.sent();
                            return [4 /*yield*/, { bar: 'bar', same: 'same' }];
                        case 3:
                            _a.sent();
                            // @ts-expect-error
                            return [4 /*yield*/, { bar: 'bar', barOnly: 'barOnly' }];
                        case 4:
                            // @ts-expect-error
                            _a.sent();
                            // @ts-expect-error
                            return [4 /*yield*/, { foo: 42, bar: 'bar', same: 'same' }];
                        case 5:
                            // @ts-expect-error
                            _a.sent();
                            // @ts-expect-error
                            return [4 /*yield*/, { foo: 42, bar: 'bar' }];
                        case 6:
                            // @ts-expect-error
                            _a.sent();
                            // @ts-expect-error
                            return [4 /*yield*/, { same: 'same' }];
                        case 7:
                            // @ts-expect-error
                            _a.sent();
                            return [2 /*return*/];
                    }
                });
            });
        });
    });
    // eslint-disable-next-line jest/no-disabled-tests
    test.skip('enforceExhaustive', function () {
        (function (color) {
            switch (color) {
                case 'red':
                    break;
                case 'blue':
                    break;
                default:
                    (0, index_1.enforceExhaustive)(color);
            }
        });
        (function (color) {
            switch (color) {
                case 'red':
                    break;
                case 'blue':
                    break;
                default:
                    // @ts-expect-error
                    (0, index_1.enforceExhaustive)(color);
            }
        });
        (function (key) {
            if (typeof key === 'string') {
                return;
            }
            if (typeof key === 'number') {
                return;
            }
            (0, index_1.enforceExhaustive)(key);
        });
        (function (key) {
            if (typeof key === 'string') {
                return;
            }
            if (typeof key === 'number') {
                return;
            }
            // @ts-expect-error
            (0, index_1.enforceExhaustive)(key);
        });
    });
});
