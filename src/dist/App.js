"use strict";
exports.__esModule = true;
var React = require("react");
var native_1 = require("@react-navigation/native");
var Routes_1 = require("./Routes");
function App() {
    return (React.createElement(native_1.NavigationContainer, null,
        React.createElement(Routes_1.RootStack, null)));
}
exports["default"] = App;
