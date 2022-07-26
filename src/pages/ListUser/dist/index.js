"use strict";
exports.__esModule = true;
exports.ListUser = void 0;
var react_1 = require("react");
var Loader_1 = require("../../components/Loader");
var User_1 = require("../../components/User");
var react_native_1 = require("react-native");
var styles_1 = require("./styles");
function ListUser(_a) {
    var navigation = _a.navigation;
    var scrollViewRef = react_1.useRef(null);
    var _b = react_1.useState(false), isLoading = _b[0], setIsLoading = _b[1];
    var _c = react_1.useState(''), fieldEmail = _c[0], setFieldEmail = _c[1];
    var _d = react_1.useState(''), fieldPassword = _d[0], setFieldPassword = _d[1];
    var _e = react_1.useState(140), screenHeightWithoutScrollView = _e[0], setScreenHeightWithoutScrollView = _e[1];
    var names = react_1.useState([
        { 'name': 'Ben', 'id': 1, 'address': 'United States Ben' },
        { 'name': 'Susan', 'id': 2, 'address': 'United States Susan' },
        { 'name': 'Robert', 'id': 3, 'address': 'United States Robert' },
        { 'name': 'Mary', 'id': 4, 'address': 'United States Mary' },
        { 'name': 'Daniel', 'id': 5, 'address': 'United States Daniel' },
        { 'name': 'Laura', 'id': 6, 'address': 'United States Laura' },
        { 'name': 'John', 'id': 7, 'address': 'United States John' },
        { 'name': 'Debra', 'id': 8, 'address': 'United States Debra' },
        { 'name': 'Aron', 'id': 9, 'address': 'United States Aron' },
        { 'name': 'Ann', 'id': 10, 'address': 'United States Ann' },
        { 'name': 'Steve', 'id': 11, 'address': 'United States Steve' },
        { 'name': 'Olivia', 'id': 12, 'address': 'United States Olivia' }
    ])[0];
    if (isLoading) {
        if (isLoading) {
            return react_1["default"].createElement(Loader_1.Loader, null);
        }
    }
    function alertItemName(item) {
        // alert(item.name + "\n" + item.address)
        console.log("item = " + item.name);
        navigation.navigate('Login');
    }
    return (react_1["default"].createElement(styles_1.Container, null,
        react_1["default"].createElement(styles_1.ScrollViewContainer, { screenHeightWithoutScrollView: screenHeightWithoutScrollView }, names.map(function (item, index) {
            return react_1["default"].createElement(react_native_1.TouchableOpacity, { key: item.id, onPress: function () { return alertItemName(item); } },
                react_1["default"].createElement(User_1.User, { index: index, name: item.name, address: item.address }));
        }))));
}
exports.ListUser = ListUser;
