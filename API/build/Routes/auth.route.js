"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

var _passport = _interopRequireDefault(require("passport"));

var _authController = _interopRequireDefault(require("../controllers/authController"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = (0, _express.Router)();

var requireSignIn = _passport.default.authenticate('local', {
  session: false
});

router.post('/signup', _authController.default.create);
router.post('/login', requireSignIn, _authController.default.login);
var _default = router;
exports.default = _default;