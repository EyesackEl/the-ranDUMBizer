import { gql } from '@apollo/client';

export const QUERY_USER = gql`
  query user($username: String!) {
    user(username: $username) {
      _id
      username
      list {
        _id
        name
        listItems
        user
      }
    }
  }
`;

export const QUERY_ME = gql`
  query me($id: ID!) {
    me(_id: $id) {
      _id
      lists {
        _id
        name
        listItems
        public
      }
    }
  }
`;

export const QUERY_SINGLE_LIST = gql`
  query list($listId: ID!) {
    list(listId: $listId) {
      name
      listItems
      public
      user {
        username
      }
    }
  }
`;

export const QUERY_ALL_LISTS = gql`
  query getLists {
    lists {
      _id
      name
      listItems
      public
      user {
        username
      }
    }
  }
`;

export const QUERY_USER_LISTS = gql`
  query getLists($userId: ID!) {
    lists(userId: $userId) {
      _id
      name
      listItems
      public
    }
  }
`;

