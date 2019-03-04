"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

var _models = _interopRequireDefault(require("../models"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Role = _models.default.Role;
var router = (0, _express.Router)();
router.post('/', function (req, res) {
  Role.create({
    name: req.body.name
  }).then(function (role) {
    res.send({
      status: 201,
      data: role
    });
  });
});
var _default = router;
exports.default = _default;