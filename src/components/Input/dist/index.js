"use strict";
exports.__esModule = true;
exports.Input = void 0;
var react_1 = require("react");
var styles_1 = require("./styles");
function Input(_a) {
    var placeholder = _a.placeholder, value = _a.value, onChangeText = _a.onChangeText, _b = _a.secureTextEntry, secureTextEntry = _b === void 0 ? false : _b;
    return (react_1["default"].createElement(styles_1.Container, null,
        react_1["default"].createElement(styles_1.TextInput, { placeholder: placeholder, value: value, onChangeText: onChangeText, secureTextEntry: secureTextEntry, placeholderTextColor: "black" })));
}
exports.Input = Input;
