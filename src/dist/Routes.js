"use strict";
exports.__esModule = true;
exports.RootStack = void 0;
var react_1 = require("react");
var stack_1 = require("@react-navigation/stack");
//Pages
var ListUser_1 = require("./pages/ListUser");
var Login_1 = require("./pages/Login");
var Signup_1 = require("./pages/Signup");
var UserDetails_1 = require("./pages/UserDetails");
var AddUser_1 = require("./pages/AddUser");
var Stack = stack_1.createStackNavigator();
function RootStack() {
    return (react_1["default"].createElement(Stack.Navigator, { initialRouteName: "Login", screenOptions: {
            headerTitleAlign: 'center',
            headerStyle: {
                backgroundColor: '#374033'
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                fontWeight: 'bold'
            }
        } },
        react_1["default"].createElement(Stack.Screen, { name: "Login", component: Login_1.Login, options: { title: 'Login' } }),
        react_1["default"].createElement(Stack.Screen, { name: "ListUser", component: ListUser_1.ListUser, options: { title: 'User Management' } }),
        react_1["default"].createElement(Stack.Screen, { name: "Signup", component: Signup_1.Signup, options: { title: 'Register' } }),
        react_1["default"].createElement(Stack.Screen, { name: "UserDetails", component: UserDetails_1.UserDetails, options: { title: 'User Details' } }),
        react_1["default"].createElement(Stack.Screen, { name: "AddUser", component: AddUser_1.AddUser, options: { title: 'Add User' } })));
}
exports.RootStack = RootStack;
