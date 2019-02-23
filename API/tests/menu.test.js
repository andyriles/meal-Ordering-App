/* eslint-disable no-undef */
import request from 'supertest';

import expect from 'expect';

import app from '../index';

import menu from '../Utilities/dummyData';


describe('Menu API\'s test', () => {
  /*
        test to get all menu items
        response must be an object
        created menu must also be an object
    */
  describe('#GET, fetch menu API test', () => {
    it('should return all menu items', (done) => {
      request(app)
        .get('/api/v1/menu')
        .expect(200)
        .expect((res) => {
          expect(typeof res.body)
            .toBe('object');
          expect(typeof res.body.data[0])
            .toBe('object');
        })
        .end(done);
    });
  });

  describe('#POST, add Menu API test', () => {
    it('should create a menu for the day', (done) => {
      request(app)
        .post('/api/v1/menu')
        .send(menu)
        .expect(201)
        .expect((res) => {
          expect(typeof res.body)
            .toBe('object');
          expect(typeof res.body.data[0])
            .toBe('object');
        })
        .end(done);
    });
  });
});
