"use strict";
exports.__esModule = true;
exports.Login = void 0;
var react_1 = require("react");
var react_native_1 = require("react-native");
var auth_1 = require("@react-native-firebase/auth");
var DefaultButton_1 = require("../../components/DefaultButton");
var Input_1 = require("../../components/Input");
var Loader_1 = require("../../components/Loader");
var styles_1 = require("./styles");
var DefaultContainer_1 = require("../../components/DefaultContainer");
function Login(_a) {
    var navigation = _a.navigation;
    var _b = react_1.useState(false), isLoading = _b[0], setIsLoading = _b[1];
    var _c = react_1.useState(''), fieldEmail = _c[0], setFieldEmail = _c[1];
    var _d = react_1.useState(''), fieldPassword = _d[0], setFieldPassword = _d[1];
    function clearFields() {
        setFieldEmail('');
        setFieldPassword('');
    }
    function userLogin() {
        if (fieldEmail === '' || fieldPassword === '') {
            react_native_1.Alert.alert('Error', 'All fields are required.');
        }
        else {
            setIsLoading(true);
            auth_1["default"]().signInWithEmailAndPassword(fieldEmail, fieldPassword)
                .then(function (res) {
                clearFields();
                setIsLoading(false);
                // navigation.navigate('ListUser')
                navigation.reset({
                    index: 0,
                    routes: [{ name: 'ListUser' }]
                });
            })["catch"](function (error) {
                setIsLoading(false);
                // Alert.alert('Error', 'Incorrect data, please try again with other data.')
                console.log('login error --->', error);
            });
        }
    }
    if (isLoading) {
        if (isLoading) {
            return react_1["default"].createElement(Loader_1.Loader, null);
        }
    }
    return (react_1["default"].createElement(DefaultContainer_1.DefaultContainer, null,
        react_1["default"].createElement(Input_1.Input, { placeholder: "E-mail", value: fieldEmail, onChangeText: function (val) { return setFieldEmail(val); } }),
        react_1["default"].createElement(Input_1.Input, { placeholder: "Password", value: fieldPassword, onChangeText: function (val) { return setFieldPassword(val); }, secureTextEntry: true }),
        react_1["default"].createElement(DefaultButton_1.DefaultButton, { onPress: function () { return userLogin(); }, label: "Access" }),
        react_1["default"].createElement(styles_1.LinkToSignup, { onPress: function () { return navigation.navigate('Signup'); } }, "Don't have an account yet? Click here to register.")));
}
exports.Login = Login;
