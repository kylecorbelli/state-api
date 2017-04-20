const {
  GraphQLID,
  GraphQLObjectType
} = require('graphql');
const models = require('../../models');
const CounterType = require('./counter-type');

const MutationType = new GraphQLObjectType({
  name: 'RootMutationType',
  fields: {
    incrementCounter: {
      type: CounterType,
      args: {
        id: { type: GraphQLID }
      },
      async resolve(_, { id }) {
        const counter = await models.counter.findById(id);
        counter.update({
          currentValue: counter.currentValue + 1
        });
        return counter;
      }
    },
    decrementCounter: {
      type: CounterType,
      args: {
        id: { type: GraphQLID }
      },
      async resolve(_, { id }) {
        const counter = await models.counter.findById(id);
        counter.update({
          currentValue: counter.currentValue - 1
        });
        return counter;
      }
    }
  }
});

module.exports = MutationType;
