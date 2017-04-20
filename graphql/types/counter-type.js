const {
  GraphQLObjectType,
  GraphQLInt
} = require('graphql');

const CounterType = new GraphQLObjectType({
  name: 'CounterType',
  fields: {
    currentValue: { type: GraphQLInt }
  }
});

module.exports = CounterType;
