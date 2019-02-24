"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _order = _interopRequireDefault(require("../../Services/order.services"));

var _dummyData = _interopRequireDefault(require("../../Utilities/dummyData"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var orderController = {
  fetchAllOrders: function fetchAllOrders(req, res) {
    var allOrders = _order.default.getAllOrders();

    return res.json({
      status: "success",
      data: allOrders
    }).status(200);
  },
  placeorder: function placeorder(req, res) {
    var newOrder = req.body;

    var CreatedOrder = _order.default.placeorder(newOrder);

    res.status(201);
    return res.json({
      status: "success",
      data: CreatedOrder
    });
  },
  updateOrder: function updateOrder(req, res) {
    var id = req.params.id;
    var UpdatedOrder = req.body;

    var Update = _order.default.updateOrder(UpdatedOrder, id);

    var response = {};
    var status = 0;

    if (Update.orderIdAvailable) {
      response = _objectSpread({}, response, {
        status: 'success',
        message: "Order with id: ".concat(id, " edited successfully."),
        data: Update.editedOrder
      });
      status = 202;
    } else {
      response = _objectSpread({}, response, {
        status: 'error',
        message: "Order with id: ".concat(id, " not found")
      });
      status = 404;
    }

    return res.status(status).json({
      response: response
    });
  }
};
var _default = orderController;
exports.default = _default;