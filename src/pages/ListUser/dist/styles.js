"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
exports.ScrollViewContainer = exports.Container = void 0;
var native_1 = require("styled-components/native");
exports.Container = native_1["default"].KeyboardAvoidingView(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n\n"], ["\n\n"])));
exports.ScrollViewContainer = native_1["default"].ScrollView(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n    background: #E5E0DA;\n    height: 100%;\n    width: 100%;\n"], ["\n    background: #E5E0DA;\n    height: 100%;\n    width: 100%;\n"])));
var templateObject_1, templateObject_2;
