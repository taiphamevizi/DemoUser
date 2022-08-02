"use strict";
exports.__esModule = true;
exports.MyLabel = void 0;
var react_1 = require("react");
var styles_1 = require("./styles");
function MyLabel(_a) {
    var value = _a.value;
    return (react_1["default"].createElement(styles_1.Container, null,
        react_1["default"].createElement(styles_1.Label, { placeholderTextColor: "black" }, value)));
}
exports.MyLabel = MyLabel;
