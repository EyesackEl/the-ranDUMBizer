import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation login($username: String!, $password: String!) {
    login(username: $username, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;


export const ADD_USER = gql`
  mutation addUser($username: String!, $password: String!) {
    addUser(username: $username, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_LIST = gql`
  mutation addList(
    $userId: ID!.
    $name: String!
    $listItems: [String]!
    $public: Boolean!

  ) {
    addList(
      userId: $userId
      name: $name
      listItems: $listItems
      public: $public
    ) {
      name
    }
`;