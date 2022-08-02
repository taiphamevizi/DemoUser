"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
exports.TextInput = exports.Container = void 0;
var native_1 = require("styled-components/native");
var Color_1 = require("../../utilities/Color");
exports.Container = native_1["default"].View(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n\n"], ["\n\n"])));
exports.TextInput = native_1["default"].TextInput(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n    width: 100%\n    margin-bottom: 15px\n    padding-bottom: 15px\n    align-self: center;\n    border-color: ", ";\n    border-bottom-width: 1px;\n    color: ", ";\n    background: ", ";\n    padding: 15px;\n    border-radius: 10px;\n"], ["\n    width: 100%\n    margin-bottom: 15px\n    padding-bottom: 15px\n    align-self: center;\n    border-color: ", ";\n    border-bottom-width: 1px;\n    color: ", ";\n    background: ", ";\n    padding: 15px;\n    border-radius: 10px;\n"])), Color_1["default"].border_color, Color_1["default"].main_text_color, Color_1["default"].item_background);
var templateObject_1, templateObject_2;
