"use strict";
exports.__esModule = true;
exports.DeleteButton = void 0;
var react_1 = require("react");
var styles_1 = require("./styles");
function DeleteButton(_a) {
    var onPress = _a.onPress, label = _a.label;
    return (react_1["default"].createElement(styles_1.Container, null,
        react_1["default"].createElement(styles_1.Button, { onPress: onPress },
            react_1["default"].createElement(styles_1.ButtonText, null, label))));
}
exports.DeleteButton = DeleteButton;
