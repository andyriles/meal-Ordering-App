/* eslint-disable no-undef */
import request from 'supertest';

import app from '../index';


describe('API Test', () => {
  it('should return "The API is set" as response', (done) => {
    request(app)
      .get('/')
      .expect(200)
      .expect('The API is set')
      .end(done);
  });
});
