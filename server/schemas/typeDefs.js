const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type List {
    _id: ID
    name: String
    listItems: [String]
    public: Boolean
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
    me(_id: ID!): User
    user(_id: ID!): User
    lists(username: String): [List]
    list(_id: ID!): List
  }

  type Mutation {
    addUser(username: String!, password: String!): Auth
    login(username: String!, password: String!): Auth
    addListItems(_id: ID!): List
    addList(userId: ID!): User
  }
`;

module.exports = typeDefs;
