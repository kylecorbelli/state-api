const {
  GraphQLObjectType,
  GraphQLID
} = require('graphql');
const models = require('../../models');
const CounterType = require('./counter-type');

const QueryType = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    getCounter: {
      type: CounterType,
      args: {
        id: { type: GraphQLID }
      },
      async resolve(_, { id }) {
        const counter = await models.counter.findById(id);
        return counter;
      }
    }
  }
});

module.exports = QueryType;
