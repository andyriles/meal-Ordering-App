"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

var _passport = _interopRequireDefault(require("passport"));

var _meal = _interopRequireDefault(require("../controllers/meal.Controller"));

var _passport2 = _interopRequireDefault(require("../services/passport"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = (0, _express.Router)();

var requireAuthentication = _passport.default.authenticate('jwt', {
  session: false
});

router.get("/", requireAuthentication, _meal.default.fetchAllMeals);
router.post("/", requireAuthentication, _meal.default.addMeal);
router.get("/:id", requireAuthentication, _meal.default.getSingleMeal);
router.put("/:id", requireAuthentication, _meal.default.updateMeal);
router.delete("/:id", requireAuthentication, _meal.default.deleteAMeal);
var _default = router;
exports.default = _default;