const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type list {
    _id: ID
    name: String
    listItems: String
    user: User
  }

  type user {
    _id: ID
    username: String
    password: String
    lists: [List]
  }

  type Auth {
    token: ID!
    user: User
  }

  type Mutation {
    addUser(username: String!, password: String!): Auth
    login(username: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;
