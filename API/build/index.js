"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = _interopRequireDefault(require("express"));

var _bodyParser = _interopRequireDefault(require("body-parser"));

var _meal = _interopRequireDefault(require("./Routes/meal.route"));

var _menu = _interopRequireDefault(require("./Routes/menu.route"));

var _order = _interopRequireDefault(require("./Routes/order.route"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express.default)();
var PORT = process.env.PORT
app.use(_bodyParser.default.json());
app.get('/', function (req, res) {
  res.send('The API is set');
});
app.use('/api/v1/meals', _meal.default);
app.use('/api/v1/menu', _menu.default);
app.use('/api/v1/order', _order.default);
app.listen(PORT, function () {
  console.log("Server is running on ".concat(PORT));
});
var _default = app;
exports.default = _default;