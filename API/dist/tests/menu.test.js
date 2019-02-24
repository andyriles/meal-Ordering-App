"use strict";

var _supertest = _interopRequireDefault(require("supertest"));

var _expect = _interopRequireDefault(require("expect"));

var _index = _interopRequireDefault(require("../index"));

var _dummyData = _interopRequireDefault(require("../Utilities/dummyData"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

describe('Menu API\'s test', function () {
  /*
        test to get all menu items
        response must be an object
        created menu must also be an object
    */
  describe('#GET, fetch menu API test', function () {
    it('should return all menu items', function (done) {
      (0, _supertest.default)(_index.default).get('/api/v1/menu').expect(200).expect(function (res) {
        (0, _expect.default)(_typeof(res.body)).toBe('object');
        (0, _expect.default)(_typeof(res.body.data[0])).toBe('object');
      }).end(done);
    });
  });
  describe('#POST, add Menu API test', function () {
    it('should create a menu for the day', function (done) {
      (0, _supertest.default)(_index.default).post('/api/v1/menu').send(_dummyData.default).expect(201).expect(function (res) {
        (0, _expect.default)(_typeof(res.body)).toBe('object');
        (0, _expect.default)(_typeof(res.body.data[0])).toBe('object');
      }).end(done);
    });
  });
});