const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type List {
    _id: ID
    name: String
    listItems: String
    user: User
  }

  type User {
    _id: ID
    username: String
    password: String
    lists: [List]
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    _dummy: String
    user: (userId: ID!): User
    list: (listId: ID!): List
  }

  type Mutation {
    addUser(username: String!, password: String!): Auth
    login(username: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;
