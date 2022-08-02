"use strict";
exports.__esModule = true;
exports.Signup = void 0;
var react_1 = require("react");
var react_native_1 = require("react-native");
var styles_1 = require("./styles");
var DefaultContainer_1 = require("../../components/DefaultContainer");
var Loader_1 = require("../../components/Loader");
var Input_1 = require("../../components/Input");
var DefaultButton_1 = require("../../components/DefaultButton");
var auth_1 = require("@react-native-firebase/auth");
function Signup(_a) {
    var navigation = _a.navigation;
    var _b = react_1.useState(false), isLoading = _b[0], setIsLoading = _b[1];
    var _c = react_1.useState(''), fieldName = _c[0], setFieldName = _c[1];
    var _d = react_1.useState(''), fieldEmail = _d[0], setFieldEmail = _d[1];
    var _e = react_1.useState(''), fieldPassword = _e[0], setFieldPassword = _e[1];
    function clearFields() {
        setFieldName('');
        setFieldEmail('');
        setFieldPassword('');
    }
    function registerUser() {
        if (fieldName === '' || fieldEmail === '' || fieldPassword === '') {
            react_native_1.Alert.alert('Error', 'All fields are required.');
        }
        else {
            setIsLoading(true);
            auth_1["default"]()
                .createUserWithEmailAndPassword(fieldEmail, fieldPassword)
                .then(function (res) {
                res.user.updateProfile({
                    displayName: fieldName
                });
                setIsLoading(false);
                clearFields();
                react_native_1.Alert.alert('Success', 'Account has been created successfully, please login.');
                navigation.navigate('Login');
            })["catch"](function (error) {
                setIsLoading(false);
                if (error.code === 'auth/email-already-in-use') {
                    react_native_1.Alert.alert('Error', 'This email is already in use.');
                    return;
                }
                if (error.code === 'auth/invalid-email') {
                    react_native_1.Alert.alert('Error', 'This email is invalid.');
                    return;
                }
                if (error.code === 'auth/weak-password') {
                    react_native_1.Alert.alert('Error', 'Your password must have a minimum of 6 characters.');
                    return;
                }
                react_native_1.Alert.alert('Error', 'An unmapped error has occurred, please check your internet connection or change your registration details.');
                console.error(error);
            });
        }
    }
    if (isLoading) {
        return react_1["default"].createElement(Loader_1.Loader, null);
    }
    return (react_1["default"].createElement(DefaultContainer_1.DefaultContainer, null,
        react_1["default"].createElement(Input_1.Input, { placeholder: "Name", value: fieldName, onChangeText: function (val) { return setFieldName(val); } }),
        react_1["default"].createElement(Input_1.Input, { placeholder: "E-mail", value: fieldEmail, onChangeText: function (val) { return setFieldEmail(val); } }),
        react_1["default"].createElement(Input_1.Input, { placeholder: "Password", value: fieldPassword, onChangeText: function (val) { return setFieldPassword(val); }, secureTextEntry: true }),
        react_1["default"].createElement(DefaultButton_1.DefaultButton, { onPress: function () { return registerUser(); }, label: "Register" }),
        react_1["default"].createElement(styles_1.LinkToLogin, { onPress: function () { return navigation.navigate('Login'); } }, "Already registered? Click here to login.")));
}
exports.Signup = Signup;
