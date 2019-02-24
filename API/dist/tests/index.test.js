"use strict";

var _supertest = _interopRequireDefault(require("supertest"));

var _index = _interopRequireDefault(require("../index"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable no-undef */
describe('API Test', function () {
  it('should return "The API is set" as response', function (done) {
    (0, _supertest.default)(_index.default).get('/').expect(200).expect('The API is set').end(done);
  });
});