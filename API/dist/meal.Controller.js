"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _meal = _interopRequireDefault(require("../Services/meal.services"));

var _dummyData = _interopRequireDefault(require("../Utilities/dummyData"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var Mealcontroller = {
  fetchAllMeals: function fetchAllMeals(req, res) {
    var allMeals = _meal.default.fetchAllMeals();

    return res.json({
      data: allMeals
    }).status(200);
  },
  addMeal: function addMeal(req, res) {
    var newMeal = req.body;

    var createdMeal = _meal.default.addMeal(newMeal);

    res.status(201);
    return res.json({
      status: "meal successfully added",
      data: createdMeal
    });
  },
  getSingleMeal: function getSingleMeal(req, res) {
    var id = req.params.id;

    var singleMeal = _meal.default.getAMeal(id);

    var response = {};

    if (_typeof(singleMeal) === 'object') {
      res.status(200);
      response = res.json({
        status: 'success',
        data: singleMeal
      });
    } else {
      res.status(404);
      response = res.json({
        status: 'failed',
        message: "Meal with id: ".concat(id, " does not exist")
      });
    }

    return response;
  },
  updateMeal: function updateMeal(req, res) {
    var id = req.params.id;
    var entry = req.body;

    var result = _meal.default.updateAmeal(id, entry);

    var response = {};
    var status = 0;

    if (result.idAvailable) {
      response = _objectSpread({}, response, {
        status: 'success',
        message: "Meal with id: ".concat(id, " edited successfully."),
        data: result.editedMeal
      });
      status = 202;
    } else {
      response = _objectSpread({}, response, {
        status: 'error',
        message: "Meal with id: ".concat(id, " not found.")
      });
      status = 404;
    }

    return res.status(status).json({
      response: response
    });
  },
  deleteAMeal: function deleteAMeal(req, res) {
    var id = req.params.id;

    var del = _meal.default.deleteAmeal(id);

    var response = {};
    var status = 0;

    if (del) {
      response = _objectSpread({}, response, {
        status: 'success',
        message: "Meal with id: ".concat(id, " deleted successfully")
      });
      status = 202;
    } else {
      response = _objectSpread({}, response, {
        status: 'error',
        message: "Meal with id: ".concat(id, " not found.")
      });
      status = 404;
    }

    return res.status(status).json({
      response: response
    });
  }
};
var _default = Mealcontroller;
exports.default = _default;