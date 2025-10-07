"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createSyntheticEvent = void 0;
/**
 * Creates a React SyntheticEvent based on the provided native event and target.
 *
 * Based on https://stackoverflow.com/a/68979462/2200383
 */
var createSyntheticEvent = function (event, target) {
    // Assign the target property to the event
    Object.defineProperty(event, 'target', { writable: false, value: target });
    var isDefaultPrevented = false;
    var isPropagationStopped = false;
    var preventDefault = function () {
        isDefaultPrevented = true;
        event.preventDefault();
    };
    var stopPropagation = function () {
        isPropagationStopped = true;
        event.stopPropagation();
    };
    var syntheticEvent = __assign(__assign({ nativeEvent: event }, event), { currentTarget: event.currentTarget, target: event.target, bubbles: event.bubbles, cancelable: event.cancelable, defaultPrevented: event.defaultPrevented, eventPhase: event.eventPhase, isTrusted: event.isTrusted, timeStamp: event.timeStamp, type: event.type, preventDefault: preventDefault, isDefaultPrevented: function () { return isDefaultPrevented; }, stopPropagation: stopPropagation, isPropagationStopped: function () { return isPropagationStopped; }, persist: function () { } });
    return syntheticEvent;
};
exports.createSyntheticEvent = createSyntheticEvent;
