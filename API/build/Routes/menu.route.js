"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

var _menu = _interopRequireDefault(require("../controllers/menu.Controller"));

var _passport = _interopRequireDefault(require("../services/passport"));

var _passport2 = _interopRequireDefault(require("passport"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mealrouter = (0, _express.Router)();
mealrouter.get("/:id", _menu.default.getMenu);
mealrouter.post("/", _menu.default.addMenu);
mealrouter.get("/", _menu.default.fetchAllMenu);
var _default = mealrouter;
exports.default = _default;