"use strict";

var _supertest = _interopRequireDefault(require("supertest"));

var _expect = _interopRequireDefault(require("expect"));

var _index = _interopRequireDefault(require("../index"));

var _dummyData = _interopRequireDefault(require("../Utilities/dummyData"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

describe('Order API Test', function () {
  /*
        test to fetch all orders
        test to see if body of response is an object
        test to see if nested data in body of response is an object
    */
  describe('#GET, fetch all the orders', function () {
    it('should return all the orders', function (done) {
      (0, _supertest.default)(_index.default).get('/api/v1/order').expect(200).expect(function (res) {
        (0, _expect.default)(_typeof(res.body)).toBe('object');
        (0, _expect.default)(_typeof(res.body.data[0])).toBe('object');
      }).end(done);
    });
  });
  /*
        test the 'add an order' API
        test to see if the body of response is an object
        test to see if nested data in body of response is an object
    */

  describe('#POST, add an order', function () {
    it('should add a new order', function (done) {
      (0, _supertest.default)(_index.default).post('/api/v1/order').send(_dummyData.default).expect(201).expect(function (res) {
        (0, _expect.default)(_typeof(res.body)).toBe('object');
        (0, _expect.default)(_typeof(res.body.data[0])).toBe('object');
      }).end(done);
    });
  });
  /*
        test to edit an order with an existing id
    */

  describe('#PUT, edit an order', function () {
    it('should edit an order by id', function (done) {
      (0, _supertest.default)(_index.default).put('/api/v1/order/2').send(_dummyData.default).expect(202).end(done);
    });
    it('should return a 404 if order id does not exist', function (done) {
      (0, _supertest.default)(_index.default).put('/api/v1/order/15').send(_dummyData.default).expect(404).end(done);
    });
  });
});