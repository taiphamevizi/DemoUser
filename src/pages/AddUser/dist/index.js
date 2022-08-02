"use strict";
exports.__esModule = true;
exports.AddUser = void 0;
var react_1 = require("react");
var react_native_1 = require("react-native");
var firestore_1 = require("@react-native-firebase/firestore");
var Input_1 = require("../../components/Input");
var Loader_1 = require("../../components/Loader");
var TopNoPaddingContainer_1 = require("../../components/TopNoPaddingContainer");
var BottomButton_1 = require("../../components/BottomButton");
var DefaultContainer_1 = require("../../components/DefaultContainer");
var MyLabel_1 = require("../../components/MyLabel");
function AddUser(_a) {
    var route = _a.route, navigation = _a.navigation;
    var _b = react_1.useState(false), isLoading = _b[0], setIsLoading = _b[1];
    var isEdit = react_1.useState(route.params.isEdit)[0];
    var _c = isEdit ? react_1.useState(route.params.itemId) : react_1.useState(''), itemId = _c[0], setItemId = _c[1];
    var _d = isEdit ? react_1.useState(route.params.name) : react_1.useState(''), fieldName = _d[0], setFieldName = _d[1];
    var _e = isEdit ? react_1.useState(route.params.address) : react_1.useState(''), fieldAddress = _e[0], setFieldAddress = _e[1];
    if (isLoading) {
        if (isLoading) {
            return react_1["default"].createElement(Loader_1.Loader, null);
        }
    }
    react_1.useEffect(function () {
        if (isEdit) {
            navigation.setOptions({ title: 'Update User' });
        }
    });
    function clearFields() {
        setFieldName('');
        setFieldAddress('');
    }
    function addUser() {
        if (fieldName === '' || fieldAddress === '') {
            react_native_1.Alert.alert('Error', 'All fields are required.');
        }
        else {
            if (isEdit) {
                console.log('updating user --->');
                firestore_1["default"]()
                    .collection('users')
                    .doc(itemId)
                    .update({
                    name: fieldName,
                    address: fieldAddress
                })
                    .then(function () {
                    console.log('User updated!');
                    react_native_1.Alert.alert('Success', 'User has been updated successfully.');
                    navigation.navigate('ListUser');
                });
            }
            else {
                console.log('adding user --->');
                firestore_1["default"]()
                    .collection('users')
                    .add({
                    name: fieldName,
                    address: fieldAddress
                })
                    .then(function () {
                    console.log('User added!');
                    react_native_1.Alert.alert('Success', 'User has been added successfully.');
                    navigation.navigate('ListUser');
                });
            }
        }
    }
    return (react_1["default"].createElement(DefaultContainer_1.DefaultContainer, null,
        isEdit ?
            react_1["default"].createElement(TopNoPaddingContainer_1.TopNoPaddingContainer, null,
                react_1["default"].createElement(MyLabel_1.MyLabel, { value: 'Name' }),
                react_1["default"].createElement(Input_1.Input, { placeholder: "Name", value: fieldName, onChangeText: function (val) { return setFieldName(val); } }),
                react_1["default"].createElement(MyLabel_1.MyLabel, { value: 'Address' }),
                react_1["default"].createElement(Input_1.Input, { placeholder: "Address", value: fieldAddress, onChangeText: function (val) { return setFieldAddress(val); } }))
            :
                react_1["default"].createElement(TopNoPaddingContainer_1.TopNoPaddingContainer, null,
                    react_1["default"].createElement(Input_1.Input, { placeholder: "Name", value: fieldName, onChangeText: function (val) { return setFieldName(val); } }),
                    react_1["default"].createElement(Input_1.Input, { placeholder: "Address", value: fieldAddress, onChangeText: function (val) { return setFieldAddress(val); } })),
        react_1["default"].createElement(BottomButton_1.BottomButton, { onPress: function () { return addUser(); }, label: isEdit ? "Update" : "Add" })));
}
exports.AddUser = AddUser;
