"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getMobileMediaQuery = void 0;
var _baseQuery = function (size) {
    return "@media only screen and (max-width: ".concat(size, "px) and (hover: none)");
};
/** Any screen with no pointer, or a coarse pointer and no hover capability (i.e. touch screen)
 * For more details, see: https://css-tricks.com/touch-devices-not-judged-size/
 * @param size - The maximum width of the screen
 */
var getMobileMediaQuery = function (size) {
    return "".concat(_baseQuery(size), " and (pointer: coarse), ").concat(_baseQuery(size), " and (pointer: none)");
};
exports.getMobileMediaQuery = getMobileMediaQuery;
