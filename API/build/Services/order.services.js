"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _dummyData = _interopRequireDefault(require("../Utilities/dummyData"));

var _order = _interopRequireDefault(require("../models/order"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

var orderServices = {
  //Post
  placeorder: function placeorder(order) {
    var orderLength = _dummyData.default.orders.length;
    var lastId = _dummyData.default.orders[orderLength - 1].id;
    var newId = lastId + 1;
    order.id = newId;

    _dummyData.default.orders.push(order);

    return _dummyData.default.orders;
  },
  //put
  updateOrder: function updateOrder(order, id) {
    var checkOrderId = parseInt(id, Number);

    var newOrderList = _dummyData.default.orders.filter(function (order) {
      return order.id !== checkOrderId;
    });

    var orderIdAvailable = _dummyData.default.orders.length !== newOrderList.length;
    var editedOrder = {
      id: checkOrderId,
      name: order.name,
      quantity: order.quantity,
      price: order.price
    };

    if (orderIdAvailable) {
      _dummyData.default.orders = [editedOrder].concat(_toConsumableArray(newOrderList));
    }

    return {
      editedOrder: editedOrder,
      orderIdAvailable: orderIdAvailable
    };
  },
  //get
  getAllOrders: function getAllOrders() {
    var validOrder = _dummyData.default.orders.map(function (orders) {
      var newOrder = new _order.default();
      newOrder.id = orders.id;
      newOrder.name = orders.name;
      newOrder.quantity = orders.quantity;
      newOrder.price = orders.price;
      return newOrder;
    });

    return validOrder;
  }
};
var _default = orderServices;
exports.default = _default;