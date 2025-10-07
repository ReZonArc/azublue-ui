"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var react_2 = require("@testing-library/react");
var user_event_1 = require("@testing-library/user-event");
var __1 = require("..");
var MyInputComponent = function (_a) {
    var onChange = _a.onChange;
    var inputRef = (0, react_1.useRef)(null);
    var handleClick = function () {
        var nativeEvent = new Event('change', { bubbles: true });
        var synthEvent = (0, __1.createSyntheticEvent)(nativeEvent, inputRef.current);
        onChange === null || onChange === void 0 ? void 0 : onChange(synthEvent);
    };
    return (<>
      <input ref={inputRef} data-testid="input" onChange={onChange}/>
      <button data-testid="button" onClick={handleClick}/>
    </>);
};
describe('packages/lib/createSyntheticEvent', function () {
    test('Creates a SyntheticEvent', function () {
        var changeHandler = jest.fn();
        var getByTestId = (0, react_2.render)(<MyInputComponent onChange={changeHandler}/>).getByTestId;
        var buttonEl = getByTestId('button');
        user_event_1.default.click(buttonEl);
        expect(changeHandler).toHaveBeenCalled();
    });
});
