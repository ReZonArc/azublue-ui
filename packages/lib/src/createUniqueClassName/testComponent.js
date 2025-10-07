"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TestComponent = void 0;
var react_1 = require("react");
var _1 = require(".");
var className1 = (0, _1.default)();
var className2 = (0, _1.default)();
var TestComponent = function (_a) {
    var _props = __rest(_a, []);
    return (<div data-testid="el-1" className={className1}>
      <div data-testid="el-2" className={className2}></div>
    </div>);
};
exports.TestComponent = TestComponent;
