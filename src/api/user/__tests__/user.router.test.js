const request = require('supertest');
const express = require('express');
const bodyParser = require('body-parser');
const { assert } = require('chai');

const userRouter = require('../user.router');

const app = new express();
app.use(bodyParser.json());
// Use our userRouter
app.use('/user', userRouter);

describe('api', () => {

  describe('user', () => {
    describe('router', () => {
      describe('/ -> post', () => {
        it('must return 404', () => {
          const status = 404;

          return request(app)
            .post('/user')
            .expect(status);
        });
      });

      describe('/create -> post', () => {
        it('must return a 400 when no username and/or password is provided', () => {
          const status = 400;

          return request(app)
            .post('/user/create')
            .expect(status);
        });

        it('must return an auth token when username and password are provided', () => {
          const expected = {
            status: 200,
            response: {
              auth_token: 'some-auth-token',
            },
          };

          const mockUserData = {
            "username": "test",
            "password": "testing",
          };

          return request(app)
            .post('/user/create')
            .set('Accept', 'application/json')
            .send(mockUserData)
            .expect(expected.status)
            .expect(res => {
              const actual = res.body;
              assert.isObject(actual);
              assert.property(actual, 'auth_token');
            });
        });

        describe.skip('/login -> post', () => {});

        describe.skip('/logout -> post', () => {});

        describe.skip('/delete -> post', () => {});
      });
    });
  });
});
