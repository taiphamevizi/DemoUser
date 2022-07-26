"use strict";
exports.__esModule = true;
exports.User = void 0;
var react_1 = require("react");
var styles_1 = require("./styles");
function User(_a) {
    var index = _a.index, name = _a.name, address = _a.address;
    return (react_1["default"].createElement(styles_1.Container, { index: index },
        react_1["default"].createElement(styles_1.NameContainer, null, name),
        react_1["default"].createElement(styles_1.AddressContainer, null, address)));
}
exports.User = User;
