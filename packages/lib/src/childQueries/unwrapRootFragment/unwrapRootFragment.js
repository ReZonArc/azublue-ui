"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.unwrapRootFragment = void 0;
var react_1 = require("react");
/**
 * If the provided `ReactNode` is a single Fragment,
 * return the children of that fragment.
 *
 * Otherwise, returns the `children` or an empty array
 *
 * @example
 * ```tsx
 * unwrapRootFragment(
 *  <Fragment>
 *    <Foo />
 *    <Bar />
 *  </Fragment>
 * ) // [<Foo />, <Bar />]
 * ```
 */
var unwrapRootFragment = function (children) {
    if (!children)
        return undefined;
    if (react_1.Children.count(children) === 0) {
        return [];
    }
    if (react_1.Children.count(children) === 1) {
        var rootChild = react_1.Children.toArray(children)[0];
        if ((0, react_1.isValidElement)(rootChild) && rootChild.type === react_1.Fragment) {
            return react_1.Children.toArray(rootChild.props.children);
        }
        return [children];
    }
    return children;
};
exports.unwrapRootFragment = unwrapRootFragment;
