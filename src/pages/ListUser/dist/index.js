"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
exports.ListUser = void 0;
var react_1 = require("react");
var firestore_1 = require("@react-native-firebase/firestore");
var Loader_1 = require("../../components/Loader");
var User_1 = require("../../components/User");
var react_native_1 = require("react-native");
var styles_1 = require("./styles");
var DefaultContainer_1 = require("../../components/DefaultContainer");
var BottomButton_1 = require("../../components/BottomButton");
var qtdPerPage = 10;
function ListUser(_a) {
    var navigation = _a.navigation;
    var _b = react_1.useState(false), isLoading = _b[0], setIsLoading = _b[1];
    var _c = react_1.useState(''), fieldEmail = _c[0], setFieldEmail = _c[1];
    var _d = react_1.useState(''), fieldPassword = _d[0], setFieldPassword = _d[1];
    var _e = react_1.useState(qtdPerPage), limit = _e[0], setLimit = _e[1];
    var _f = react_1.useState(0), totalUsers = _f[0], setTotalUsers = _f[1];
    var _g = react_1.useState(false), isLoadingMore = _g[0], setIsLoadingMore = _g[1];
    var _h = react_1.useState(140), screenHeightWithoutScrollView = _h[0], setScreenHeightWithoutScrollView = _h[1];
    var _j = react_1.useState([]), users = _j[0], setUsers = _j[1];
    react_1.useEffect(function () {
        getUsers();
        setTimeout(function () {
            setIsLoadingMore(false);
        }, 1000);
    }, [limit]);
    if (isLoading) {
        if (isLoading) {
            return react_1["default"].createElement(Loader_1.Loader, null);
        }
    }
    function onResult(querySnapshot) {
        console.log('Got users collection result');
        setUsers(querySnapshot.docs.reverse());
    }
    function onError(error) {
        console.error(error);
    }
    function getUsers() {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                firestore_1["default"]()
                    .collection('users')
                    .limit(limit)
                    .onSnapshot(onResult, onError);
                // const user = await firestore().collection('users').get().then(onResult, onError);
                // get total user
                firestore_1["default"]()
                    .collection('users')
                    .get()
                    .then(function (querySnapshot) {
                    setTotalUsers(querySnapshot.size);
                    console.log('Total users => ' + querySnapshot.size);
                });
                return [2 /*return*/];
            });
        });
    }
    function itemClick(item) {
        // alert(item._data.name + "\n" + item._data.address)
        console.log("item = " + item._data.name);
        navigation.navigate('UserDetails', {
            itemId: item.id,
            name: item._data.name,
            address: item._data.address
        });
    }
    function addNew() {
        console.log("add new");
        navigation.navigate('AddUser', { isEdit: false });
    }
    return (react_1["default"].createElement(DefaultContainer_1.DefaultContainer, null,
        react_1["default"].createElement(styles_1.ScrollViewContainer, { screenHeightWithoutScrollView: screenHeightWithoutScrollView }, users.map(function (item, index) {
            return react_1["default"].createElement(react_native_1.TouchableOpacity, { key: item.id, onPress: function () { return itemClick(item); } },
                react_1["default"].createElement(User_1.User, { index: index, name: item._data.name, address: item._data.address }));
        })),
        react_1["default"].createElement(BottomButton_1.BottomButton, { onPress: function () { return addNew(); }, label: "Add New" })));
}
exports.ListUser = ListUser;
