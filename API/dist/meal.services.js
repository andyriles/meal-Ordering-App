"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _dummyData = _interopRequireDefault(require("../Utilities/dummyData"));

var _meal = _interopRequireDefault(require("../models/meal.models"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

var MEalService = {
  fetchAllMeals: function fetchAllMeals() {
    var validMeals = _dummyData.default.meals.map(function (meal) {
      var newMeal = new _meal.default();
      newMeal.id = meal.id;
      newMeal.name = meal.name;
      return newMeal;
    });

    return validMeals;
  },
  addMeal: function addMeal(meal) {
    var mealLength = _dummyData.default.meals.length;
    var lastId = _dummyData.default.meals[mealLength - 1].id;
    var newId = lastId + 1;
    meal.id = newId;

    _dummyData.default.meals.push(meal);

    return _dummyData.default.meals;
  },
  getAMeal: function getAMeal(id) {
    var meal = _dummyData.default.meals.find(function (meal) {
      return meal.id == id;
    });

    if (meal) {
      return meal;
    } else {
      return "Meal with id: ".concat(id, " does not exist");
    }
  },
  updateAmeal: function updateAmeal(id, meal) {
    var checkId = parseInt(id, Number);

    var newMealList = _dummyData.default.meals.filter(function (meal) {
      return meal.id !== checkId;
    });

    var idAvailable = _dummyData.default.meals.length !== newMealList.length;
    var editedMeal = {
      id: checkId,
      name: meal.name
    };

    if (idAvailable) {
      _dummyData.default.meals = [editedMeal].concat(_toConsumableArray(newMealList));
    }

    return {
      idAvailable: idAvailable,
      editedMeal: editedMeal
    };
  },
  deleteAmeal: function deleteAmeal(id) {
    var checkId = parseInt(id, Number);

    var newMealList = _dummyData.default.meals.filter(function (meal) {
      return meal.id !== checkId;
    });

    var idAvailable = _dummyData.default.meals.length !== newMealList.length;
    _dummyData.default.meals = newMealList;

    if (id) {
      return idAvailable;
    } else {
      return "Meal with id: ".concat(id, " unavailable");
    }
  }
};
var _default = MEalService;
exports.default = _default;