"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
exports.TextView = exports.Container = void 0;
var native_1 = require("styled-components/native");
var Color_1 = require("../../utilities/Color");
exports.Container = native_1["default"].View(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n\n"], ["\n\n"])));
exports.TextView = native_1["default"].Text(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n    font-size: 18px;\n    font-weight: bold;\n    margin-bottom: 10px;\n    color: ", ";\n    border-color: ", ";\n    border-bottom-width: 1px;\n    background: ", ";\n    padding: 15px;\n    border-radius: 10px;\n"], ["\n    font-size: 18px;\n    font-weight: bold;\n    margin-bottom: 10px;\n    color: ", ";\n    border-color: ", ";\n    border-bottom-width: 1px;\n    background: ", ";\n    padding: 15px;\n    border-radius: 10px;\n"])), Color_1["default"].main_text_color, Color_1["default"].border_color, Color_1["default"].item_background);
var templateObject_1, templateObject_2;
