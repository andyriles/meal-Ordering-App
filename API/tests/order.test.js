/* eslint-disable no-undef */
import request from 'supertest';

import expect from 'expect';

import app from '../index';

import orders from '../Utilities/dummyData';


describe('Order API Test', () => {
  /*
        test to fetch all orders
        test to see if body of response is an object
        test to see if nested data in body of response is an object
    */

  describe('#GET, fetch all the orders', () => {
    it('should return all the orders', (done) => {
      request(app)
        .get('/api/v1/order')
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

  /*
        test the 'add an order' API
        test to see if the body of response is an object
        test to see if nested data in body of response is an object
    */

  describe('#POST, add an order', () => {
    it('should add a new order', (done) => {
      request(app)
        .post('/api/v1/order')
        .send(orders)
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

  /*
        test to edit an order with an existing id
    */

  describe('#PUT, edit an order', () => {
    it('should edit an order by id', (done) => {
      request(app)
        .put('/api/v1/order/2')
        .send(orders)
        .expect(202)
        .end(done);
    });


    it('should return a 404 if order id does not exist', (done) => {
      request(app)
        .put('/api/v1/order/15')
        .send(orders)
        .expect(404)
        .end(done);
    });
  });
});
