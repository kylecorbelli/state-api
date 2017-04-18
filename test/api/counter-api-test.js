const expect = require('chai').expect;
const request = require('supertest');

process.env.NODE_ENV = 'test'

const models = require('../../models');
const app = require('../../app');

let counterId;

describe('/counters endpoint', () => {
  beforeEach(() => {
    return models.Counter.destroy({
      where: {},
      truncate: true
    })
    .then(async () => {
      const counter = await models.Counter.create({
        currentValue: 0
      });
      counterId = counter.id
    })
    .catch(error => console.error(error));
  });

  describe('GET /counters/:id', () => {
    it('should return the current value of the counter', () => {
      return request(app)
        .get(`/counters/${counterId}`)
        .expect(200)
        .then(res => {
          expect(res.body).to.deep.equal({
            currentValue: 0
          });
        });
    });
  });

  describe('PATCH /counters/:id', () => {
    it('should increment the count when the payload action ' +
       'is "increment"', () => {
      return request(app)
        .patch(`/counters/${counterId}`)
        .send({
          action: 'increment'
        })
        .then(res => {
          expect(res.body).to.deep.equal({
            currentValue: 1
          });
        });
    });

    it('should decrement the count when the payload action is ' +
       ' "decrement"', () => {
      return request(app)
        .patch(`/counters/${counterId}`)
        .send({
          action: 'decrement'
        })
        .then(res => {
          expect(res.body).to.deep.equal({
            currentValue: -1
          });
        });
    });

    it('should return an error response when the action payload is neither ' +
       '"increment" nor "decrement"', () => {
      return request(app)
        .patch(`/counters/${counterId}`)
        .send({
          action: 'party'
        })
        .expect(422)
        .then(res => {
          expect(res.body).to.deep.equal({
            error: 'Expected "action" to be either "increment" or "decrement"'
          });
        });
    });
  })
});
