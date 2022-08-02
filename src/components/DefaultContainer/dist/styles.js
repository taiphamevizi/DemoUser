"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
exports.Container = void 0;
var native_1 = require("styled-components/native");
var Color_1 = require("../../utilities/Color");
exports.Container = native_1["default"].View(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    flex: 1;\n    flex-direction: column;\n    justify-content: center;\n    padding: 25px;\n    background-color: ", ";\n"], ["\n    flex: 1;\n    flex-direction: column;\n    justify-content: center;\n    padding: 25px;\n    background-color: ", ";\n"])), Color_1["default"].main_background);
var templateObject_1;
