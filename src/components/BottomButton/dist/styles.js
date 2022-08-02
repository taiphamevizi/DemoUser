"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
exports.ButtonText = exports.Button = exports.Container = void 0;
var native_1 = require("styled-components/native");
var Color_1 = require("../../utilities/Color");
exports.Container = native_1["default"].View(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n\n"], ["\n\n"])));
exports.Button = native_1["default"].TouchableOpacity(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n    background: ", ";\n    height: 50px;\n    border-radius: 10px;\n    padding: 15px;\n    right: 0;\n    bottom: 0;\n    align-items: center;\n"], ["\n    background: ", ";\n    height: 50px;\n    border-radius: 10px;\n    padding: 15px;\n    right: 0;\n    bottom: 0;\n    align-items: center;\n"])), Color_1["default"].main_button_background);
exports.ButtonText = native_1["default"].Text(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n    color: ", ";\n    font-weight: bold;\n    text-transform: uppercase;\n"], ["\n    color: ", ";\n    font-weight: bold;\n    text-transform: uppercase;\n"])), Color_1["default"].main_button_text_color);
var templateObject_1, templateObject_2, templateObject_3;
