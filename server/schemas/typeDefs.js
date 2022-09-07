const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type list {
    _id: ID
    name: String
    listItems: String
  }

  type user {
    _id: ID
    username: String
    email: String
    password: String
    lists: [List]
  }
`;

module.exports = typeDefs;
