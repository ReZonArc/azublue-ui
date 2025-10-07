"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var queryFocusableElements_1 = require("./queryFocusableElements");
describe('queryFocusableElements', function () {
    var container;
    beforeEach(function () {
        container = document.createElement('div');
        document.body.appendChild(container);
    });
    afterEach(function () {
        document.body.removeChild(container);
    });
    describe('queryAllFocusableElements', function () {
        test('returns all focusable elements within a container', function () {
            container.innerHTML = "\n      <button>Button</button>\n      <a href=\"#\">Link</a>\n      <input type=\"text\" />\n      <select><option>Option</option></select>\n      <textarea></textarea>\n      <div tabindex=\"0\">Focusable div</div>\n    ";
            var elements = (0, queryFocusableElements_1.queryAllFocusableElements)(container);
            expect(elements).toHaveLength(6);
            expect(elements[0]).toBeInstanceOf(HTMLButtonElement);
            expect(elements[1]).toBeInstanceOf(HTMLAnchorElement);
            expect(elements[2]).toBeInstanceOf(HTMLInputElement);
            expect(elements[3]).toBeInstanceOf(HTMLSelectElement);
            expect(elements[4]).toBeInstanceOf(HTMLTextAreaElement);
            expect(elements[5]).toBeInstanceOf(HTMLDivElement);
        });
        test('excludes elements with tabindex="-1"', function () {
            container.innerHTML = "\n      <button>Button</button>\n      <a href=\"#\" tabindex=\"-1\">Link</a>\n    ";
            var elements = (0, queryFocusableElements_1.queryAllFocusableElements)(container);
            expect(elements).toHaveLength(1);
            expect(elements[0]).toBeInstanceOf(HTMLButtonElement);
        });
        test('excludes hidden inputs', function () {
            container.innerHTML = "\n      <input type=\"text\" />\n      <input type=\"hidden\" />\n    ";
            var elements = (0, queryFocusableElements_1.queryAllFocusableElements)(container);
            expect(elements).toHaveLength(1);
            expect(elements[0]).toBeInstanceOf(HTMLInputElement);
        });
        test('excludes disabled inputs', function () {
            container.innerHTML = "\n      <input type=\"text\" />\n      <input type=\"text\" disabled />\n    ";
            var elements = (0, queryFocusableElements_1.queryAllFocusableElements)(container);
            expect(elements).toHaveLength(1);
            expect(elements[0]).toBeInstanceOf(HTMLInputElement);
        });
        test('uses document.body as default container', function () {
            var spy = jest.spyOn(document.body, 'querySelectorAll');
            (0, queryFocusableElements_1.queryAllFocusableElements)();
            expect(spy).toHaveBeenCalledWith(queryFocusableElements_1.focusableElementSelector);
            spy.mockRestore();
        });
    });
    describe('queryFirstFocusableElement', function () {
        test('returns the first focusable element within a container', function () {
            container.innerHTML = "\n      <button>Button</button>\n      <a href=\"#\">Link</a>\n      <input type=\"text\" />\n    ";
            var element = (0, queryFocusableElements_1.queryFirstFocusableElement)(container);
            expect(element).toBeInstanceOf(HTMLButtonElement);
            expect(element === null || element === void 0 ? void 0 : element.textContent).toBe('Button');
        });
        test('returns null if no focusable elements exist', function () {
            container.innerHTML = "\n      <div>Non-focusable div</div>\n      <p>Paragraph</p>\n    ";
            var element = (0, queryFocusableElements_1.queryFirstFocusableElement)(container);
            expect(element).toBeNull();
        });
        test('uses document.body as default container', function () {
            var spy = jest.spyOn(document.body, 'querySelector');
            (0, queryFocusableElements_1.queryFirstFocusableElement)();
            expect(spy).toHaveBeenCalledWith(queryFocusableElements_1.focusableElementSelector);
            spy.mockRestore();
        });
    });
    describe('queryLastFocusableElement', function () {
        test('returns the last focusable element within a container', function () {
            container.innerHTML = "\n      <button>Button</button>\n      <a href=\"#\">Link</a>\n      <input type=\"text\" />\n    ";
            var element = (0, queryFocusableElements_1.queryLastFocusableElement)(container);
            expect(element).toBeInstanceOf(HTMLInputElement);
        });
        test('returns null if no focusable elements exist', function () {
            container.innerHTML = "\n      <div>Non-focusable div</div>\n      <p>Paragraph</p>\n    ";
            var element = (0, queryFocusableElements_1.queryLastFocusableElement)(container);
            expect(element).toBeNull();
        });
        test('returns null for an empty container', function () {
            var element = (0, queryFocusableElements_1.queryLastFocusableElement)(container);
            expect(element).toBeNull();
        });
        test('uses document.body as default container', function () {
            var querySpy = jest.spyOn(document.body, 'querySelectorAll');
            (0, queryFocusableElements_1.queryLastFocusableElement)();
            expect(querySpy).toHaveBeenCalledWith(queryFocusableElements_1.focusableElementSelector);
            querySpy.mockRestore();
        });
    });
});
