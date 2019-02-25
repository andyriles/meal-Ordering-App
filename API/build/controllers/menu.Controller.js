"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _menu = _interopRequireDefault(require("../Services/menu.services"));

var _dummyData = _interopRequireDefault(require("../Utilities/dummyData"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var menuController = {
  getMenu: function getMenu(req, res) {
    var id = req.params.id;

    var Menu = _menu.default.getMenu(id);

    return res.json({
      status: "success",
      data: Menu
    }).status(200);
  },
  addMenu: function addMenu(req, res) {
    var newMenu = req.body;

    var createdMenu = _menu.default.addMenu(newMenu);

    res.status(201);
    return res.json({
      status: "new menu successfully created",
      data: createdMenu
    });
  },
  fetchAllMenu: function fetchAllMenu(req, res) {
    var allMenu = _menu.default.getAllMenu();

    return res.json({
      data: allMenu
    }).status(200);
  }
};
var _default = menuController;
exports.default = _default;