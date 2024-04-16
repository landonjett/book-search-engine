const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    # Define any other fields as needed
  }

  type Query {
    # Define query operations here
    # Example:
    # getUser(id: ID!): User
  }

  type Mutation {
    # Define mutation operations here
    # Example:
    # addUser(username: String!, email: String!, password: String!): User
  }
`;

module.exports = typeDefs;
