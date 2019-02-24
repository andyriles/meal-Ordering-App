"use strict";

var _supertest = _interopRequireDefault(require("supertest"));

var _expect = _interopRequireDefault(require("expect"));

var _index = _interopRequireDefault(require("../index"));

var _dummyData = _interopRequireDefault(require("../Utilities/dummyData"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

describe('Meal API\'s test', function () {
  /*
        test to get all meals
        response must be an object
        created meals must also be of type 'object'
    */
  describe('Fetch all meals', function () {
    it('should return all meals', function (done) {
      (0, _supertest.default)(_index.default).get('/api/v1/meals').expect(200).expect(function (res) {
        (0, _expect.default)(_typeof(res.body)).toBe('object');
        (0, _expect.default)(_typeof(res.body.data[0])).toBe('object');
      }).end(done);
    });
  });
  describe('#POST, add meal API test', function () {
    it('should create a meal', function (done) {
      (0, _supertest.default)(_index.default).post('/api/v1/meals').send(_dummyData.default).expect(201).expect(function (res) {
        (0, _expect.default)(_typeof(res.body)).toBe('object');
        (0, _expect.default)(_typeof(res.body.data[0])).toBe('object');
      }).end(done);
    });
  });
  describe('#GET, fetch a single meal by id', function () {
    /*
            this test should return a single meal by id
            the next test should return an HTTP code of 204 if meal id doesn't exist
        */
    it('should return a single meal', function (done) {
      (0, _supertest.default)(_index.default).get('/api/v1/meals/1').expect(200).expect(function (res) {
        (0, _expect.default)(_typeof(res.body)).toBe('object');
        (0, _expect.default)(_typeof(res.body.data)).toBe('object');
      }).end(done);
    });
    it('should return a code of 404 for an id whose meal doesn\'t exist', function (done) {
      (0, _supertest.default)(_index.default).get('/api/v1/meals/30').expect(404).end(done);
    });
  });
  describe('#PUT, edit an existing meal', function () {
    /*
            this test should return a 202 after an update
        */
    it('should edit a meal by id successfully', function (done) {
      (0, _supertest.default)(_index.default).put('/api/v1/meals/4').send(_dummyData.default).expect(202).end(done);
    });
    /*
        this test should return a 404 if meal with given id is not found
       */

    it('should return a 404 status if id of meal does not exist', function (done) {
      (0, _supertest.default)(_index.default).put('/api/v1/meals').send(_dummyData.default).expect(404).end(done);
    });
  });
  describe('#DELETE, delete a meal with a given id', function () {
    /*
            this test should return a 202 when deletion is complete
        */
    it('should return a 202 when deletion of a meal with given id is complete', function (done) {
      (0, _supertest.default)(_index.default).delete('/api/v1/meals/3').expect(202).end(done);
    });
    /*
            this test should return a 404 if meal with given id is not found
        */

    it('should return a 404 if meal id does not exist', function (done) {
      (0, _supertest.default)(_index.default).delete('/api/v1/meals/100').expect(404).end(done);
    });
  });
});