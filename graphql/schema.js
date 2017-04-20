const {
  GraphQLSchema
} = require('graphql');
const QueryType = require('./types/query-type');
const MutationType = require('./types/mutation-type');

const schema = new GraphQLSchema({
  query: QueryType,
  mutation: MutationType
});

module.exports = schema;
