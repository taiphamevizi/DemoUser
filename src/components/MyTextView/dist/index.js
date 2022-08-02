"use strict";
exports.__esModule = true;
exports.MyTextView = void 0;
var react_1 = require("react");
var styles_1 = require("./styles");
function MyTextView(_a) {
    var value = _a.value;
    return (react_1["default"].createElement(styles_1.Container, null,
        react_1["default"].createElement(styles_1.TextView, { placeholderTextColor: "black" }, value)));
}
exports.MyTextView = MyTextView;
