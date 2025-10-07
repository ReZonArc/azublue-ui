"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.allEqual = allEqual;
/**
 * Utility function that checks if the values in an array are all equal
 *
 *
 * @param arr `Array<any>`
 * @returns boolean
 */
function allEqual(arr) {
    return new Set(arr).size == 1;
}
