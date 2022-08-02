"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
exports.AddressContainer = exports.NameContainer = exports.Container = void 0;
var native_1 = require("styled-components/native");
var Color_1 = require("../../utilities/Color");
exports.Container = native_1["default"].View(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    background: ", ";\n    padding: 15px;\n    margin: ", " 2px 5px 2px;\n    border-radius: 10px;\n"], ["\n    background: ", ";\n    padding: 15px;\n    margin: ", " 2px 5px 2px;\n    border-radius: 10px;\n"])), Color_1["default"].item_background, function (props) { return props.index === 0 ? '2px' : '0px'; });
exports.NameContainer = native_1["default"].Text(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n    font-size: 18px;\n    font-weight: bold;\n    margin-bottom: 10px;\n    color: ", ";\n"], ["\n    font-size: 18px;\n    font-weight: bold;\n    margin-bottom: 10px;\n    color: ", ";\n"])), Color_1["default"].main_text_color);
exports.AddressContainer = native_1["default"].Text(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n    font-size: 16px;\n    font-weight: bold;\n    margin-bottom: 10px;\n    color: ", ";\n"], ["\n    font-size: 16px;\n    font-weight: bold;\n    margin-bottom: 10px;\n    color: ", ";\n"])), Color_1["default"].main_text_color);
var templateObject_1, templateObject_2, templateObject_3;
