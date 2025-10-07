"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isChildWithProperty = void 0;
var react_1 = require("react");
var hasStaticProperty_1 = require("../hasStaticProperty");
var isChildWithProperty = function (child, staticProperty) {
    if (!(0, react_1.isValidElement)(child))
        return false;
    // child must be a single node
    if (react_1.Children.count(child) !== 1)
        return false;
    return (0, hasStaticProperty_1.hasStaticProperty)(child.type, staticProperty);
};
exports.isChildWithProperty = isChildWithProperty;
