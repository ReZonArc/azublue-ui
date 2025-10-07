"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
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
var react_1 = require("react");
var react_2 = require("@testing-library/react");
var testComponent_1 = require("./testComponent");
var _1 = require(".");
var renderTestComponent = function () {
    return (0, react_2.render)(react_1.default.createElement(testComponent_1.TestComponent));
};
describe('packages/lib/createUniqueClassName', function () {
    describe('createUniqueClassName', function () {
        test('Format is correct', function () {
            var lgPrefix = 'lg-ui-';
            var expectedUuidLength = 8;
            var result = (0, _1.default)();
            expect(result.startsWith(lgPrefix)).toBe(true);
            // eslint-disable-next-line jest/valid-expect
            expect(result.length == lgPrefix.length + expectedUuidLength);
        });
        test('Two generated classNames are not equal.', function () {
            var res1 = (0, _1.default)();
            var res2 = (0, _1.default)();
            expect(res1.valueOf()).not.toEqual(res2.valueOf());
        });
        test('Prefixes are correctly applied.', function () {
            var lgPrefix = 'lg-ui-';
            var customPrefix = 'test';
            var res1 = (0, _1.default)(customPrefix);
            var res2 = (0, _1.default)(customPrefix);
            expect(res1.startsWith(lgPrefix + customPrefix + '-')).toBe(true);
            expect(res2.startsWith(lgPrefix + customPrefix + '-')).toBe(true);
            expect(res1.valueOf()).not.toEqual(res2.valueOf());
        });
    });
    describe('rendering', function () {
        test('Separate classNames in a component are unique', function () {
            var renderedTestComponent = renderTestComponent();
            var element1 = renderedTestComponent.getByTestId('el-1');
            var element2 = renderedTestComponent.getByTestId('el-2');
            var className1 = element1.classList.value;
            var className2 = element2.classList.value;
            expect(className1).not.toEqual(className2);
        });
        test('Classnames persist on re-render', function () {
            var renderedTestComponent = renderTestComponent();
            var element1 = renderedTestComponent.getByTestId('el-1');
            var element2 = renderedTestComponent.getByTestId('el-2');
            var className1 = element1.classList.value;
            var className2 = element2.classList.value;
            renderedTestComponent.rerender(react_1.default.createElement(testComponent_1.TestComponent));
            expect(element1.classList.value).toEqual(className1);
            expect(element2.classList.value).toEqual(className2);
        });
        test('Classnames persist when dynamically imported', function () { return __awaiter(void 0, void 0, void 0, function () {
            var TestComponentA, containerA, elementA1, elementA2, TestComponentB, containerB, elementB1, elementB2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, Promise.resolve().then(function () { return require('./testComponent'); })];
                    case 1:
                        TestComponentA = (_a.sent()).TestComponent;
                        containerA = (0, react_2.render)(react_1.default.createElement(TestComponentA)).container;
                        elementA1 = (0, react_2.getByTestId)(containerA, 'el-1');
                        elementA2 = (0, react_2.getByTestId)(containerA, 'el-2');
                        return [4 /*yield*/, Promise.resolve().then(function () { return require('./testComponent'); })];
                    case 2:
                        TestComponentB = (_a.sent()).TestComponent;
                        containerB = (0, react_2.render)(react_1.default.createElement(TestComponentB)).container;
                        elementB1 = (0, react_2.getByTestId)(containerB, 'el-1');
                        elementB2 = (0, react_2.getByTestId)(containerB, 'el-2');
                        expect(elementA1.classList.value).toEqual(elementB1.classList.value);
                        expect(elementA2.classList.value).toEqual(elementB2.classList.value);
                        return [2 /*return*/];
                }
            });
        }); });
        test('Classnames persist in snapshot tests', function () {
            var container = (0, react_2.render)(react_1.default.createElement(testComponent_1.TestComponent)).container;
            expect(container).toMatchSnapshot();
        });
    });
});
