"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var getClosestFocusableElement_1 = require("./getClosestFocusableElement");
describe('getClosestFocusableElement', function () {
    // Setup and cleanup
    beforeEach(function () {
        document.body.innerHTML = '';
    });
    afterEach(function () {
        jest.restoreAllMocks();
    });
    describe('when element itself is focusable', function () {
        test('returns anchor element when element is an anchor', function () {
            var anchor = document.createElement('a');
            document.body.appendChild(anchor);
            expect((0, getClosestFocusableElement_1.getClosestFocusableElement)(anchor)).toBe(anchor);
        });
        test('returns button element when element is a button', function () {
            var button = document.createElement('button');
            document.body.appendChild(button);
            expect((0, getClosestFocusableElement_1.getClosestFocusableElement)(button)).toBe(button);
        });
        test('returns frame element when element is a frame', function () {
            var frame = document.createElement('frame');
            document.body.appendChild(frame);
            expect((0, getClosestFocusableElement_1.getClosestFocusableElement)(frame)).toBe(frame);
        });
        test('returns iframe element when element is an iframe', function () {
            var iframe = document.createElement('iframe');
            document.body.appendChild(iframe);
            expect((0, getClosestFocusableElement_1.getClosestFocusableElement)(iframe)).toBe(iframe);
        });
        test('returns input element when element is an input (not hidden)', function () {
            var input = document.createElement('input');
            document.body.appendChild(input);
            expect((0, getClosestFocusableElement_1.getClosestFocusableElement)(input)).toBe(input);
        });
        test('does not return input when type is hidden', function () {
            var hiddenInput = document.createElement('input');
            hiddenInput.type = 'hidden';
            var div = document.createElement('div');
            div.appendChild(hiddenInput);
            document.body.appendChild(div);
            expect((0, getClosestFocusableElement_1.getClosestFocusableElement)(hiddenInput)).toBe(document.body);
        });
        test('returns select element when element is a select', function () {
            var select = document.createElement('select');
            document.body.appendChild(select);
            expect((0, getClosestFocusableElement_1.getClosestFocusableElement)(select)).toBe(select);
        });
        test('returns textarea element when element is a textarea', function () {
            var textarea = document.createElement('textarea');
            document.body.appendChild(textarea);
            expect((0, getClosestFocusableElement_1.getClosestFocusableElement)(textarea)).toBe(textarea);
        });
        test('returns element with tabindex when element has tabindex', function () {
            var div = document.createElement('div');
            div.setAttribute('tabindex', '0');
            document.body.appendChild(div);
            expect((0, getClosestFocusableElement_1.getClosestFocusableElement)(div)).toBe(div);
        });
    });
    describe('when element is not focusable but has focusable parent', function () {
        test('returns the closest focusable parent', function () {
            var button = document.createElement('button');
            var span = document.createElement('span');
            var text = document.createElement('p');
            button.appendChild(span);
            span.appendChild(text);
            document.body.appendChild(button);
            expect((0, getClosestFocusableElement_1.getClosestFocusableElement)(text)).toBe(button);
        });
        test('returns the closest focusable ancestor at any level', function () {
            var anchor = document.createElement('a');
            var div1 = document.createElement('div');
            var div2 = document.createElement('div');
            var div3 = document.createElement('div');
            anchor.appendChild(div1);
            div1.appendChild(div2);
            div2.appendChild(div3);
            document.body.appendChild(anchor);
            expect((0, getClosestFocusableElement_1.getClosestFocusableElement)(div3)).toBe(anchor);
        });
    });
    describe('when no focusable element is found', function () {
        test('returns document.body when no focusable element exists in the chain', function () {
            var div = document.createElement('div');
            var span = document.createElement('span');
            div.appendChild(span);
            document.body.appendChild(div);
            expect((0, getClosestFocusableElement_1.getClosestFocusableElement)(span)).toBe(document.body);
        });
    });
});
