"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

var _order = _interopRequireDefault(require("../controllers/order.Controller"));

var _passport = _interopRequireDefault(require("passport"));

var _passport2 = _interopRequireDefault(require("../services/passport"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var requireAuthentication = _passport.default.authenticate('jwt', {
  session: false
});

var orderRouter = (0, _express.Router)();
orderRouter.get("/", requireAuthentication, _order.default.fetchAllOrders);
orderRouter.post("/", requireAuthentication, _order.default.placeorder);
orderRouter.put("/:id", requireAuthentication, _order.default.updateOrder);
var _default = orderRouter;
exports.default = _default;