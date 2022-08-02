"use strict";
exports.__esModule = true;
exports.UserDetails = void 0;
var react_1 = require("react");
var react_native_1 = require("react-native");
var firestore_1 = require("@react-native-firebase/firestore");
var TopNoPaddingContainer_1 = require("../../components/TopNoPaddingContainer");
var MyTextView_1 = require("../../components/MyTextView");
var MyLabel_1 = require("../../components/MyLabel");
var BottomButton_1 = require("../../components/BottomButton");
var DefaultContainer_1 = require("../../components/DefaultContainer");
var DeleteButton_1 = require("../../components/DeleteButton");
function UserDetails(_a) {
    var route = _a.route, navigation = _a.navigation;
    var _b = react_1.useState(''), itemId = _b[0], setItemId = _b[1];
    var _c = react_1.useState(), fieldName = _c[0], setFieldName = _c[1];
    var _d = react_1.useState(), fieldAddress = _d[0], setFieldAddress = _d[1];
    react_1.useEffect(function () {
        setItemId(route.params.itemId);
        setFieldName(route.params.name);
        setFieldAddress(route.params.address);
    });
    function editUser() {
        console.log('edit user --->', itemId);
        navigation.navigate('AddUser', {
            isEdit: true,
            itemId: itemId,
            name: fieldName,
            address: fieldAddress
        });
    }
    function deleteUser() {
        console.log('edit user --->', itemId);
        react_native_1.Alert.alert("Are your sure?", "Are you sure you want to delete this user?", [
            // The "Yes" button
            {
                text: "Yes",
                onPress: function () {
                    firestore_1["default"]()
                        .collection('users')
                        .doc(itemId)["delete"]()
                        .then(function () {
                        console.log('User deleted!');
                        navigation.navigate('ListUser');
                    });
                }
            },
            // The "No" button
            // Does nothing but dismiss the dialog when tapped
            {
                text: "No"
            },
        ]);
    }
    return (react_1["default"].createElement(DefaultContainer_1.DefaultContainer, null,
        react_1["default"].createElement(TopNoPaddingContainer_1.TopNoPaddingContainer, null,
            react_1["default"].createElement(MyLabel_1.MyLabel, { value: 'Name' }),
            react_1["default"].createElement(MyTextView_1.MyTextView, { value: fieldName }),
            react_1["default"].createElement(MyLabel_1.MyLabel, { value: 'Address' }),
            react_1["default"].createElement(MyTextView_1.MyTextView, { value: fieldAddress })),
        react_1["default"].createElement(BottomButton_1.BottomButton, { onPress: function () { return editUser(); }, label: "Edit" }),
        react_1["default"].createElement(DeleteButton_1.DeleteButton, { onPress: function () { return deleteUser(); }, label: "Delete" })));
}
exports.UserDetails = UserDetails;
