"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _dummyData = _interopRequireDefault(require("../Utilities/dummyData"));

var _menu = _interopRequireDefault(require("../models/menu.models"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//for the caterer and customer
var menuServices = {
  getMenu: function getMenu(id) {
    var menu = _dummyData.default.menu.find(function (menu) {
      return menu.id == id;
    });

    return menu || ["There is no menu for this day"];
  },
  //to be accessed only by the caterer
  addMenu: function addMenu(menu) {
    var menuLength = _dummyData.default.menu.length;
    var lastId = _dummyData.default.menu[menuLength - 1].id;
    var newId = lastId + 1;
    menu.id = newId;

    _dummyData.default.menu.push(menu);

    return _dummyData.default.menu;
  },
  //for ease of access
  getAllMenu: function getAllMenu() {
    var validMenu = _dummyData.default.menu.map(function (menu) {
      var newmenu = new _menu.default();
      newmenu.id = menu.id;
      newmenu.name = menu.name;
      newmenu.quantity = menu.quantity;
      newmenu.price = menu.price;
      return newmenu;
    });

    return validMenu;
  }
};
var _default = menuServices;
exports.default = _default;