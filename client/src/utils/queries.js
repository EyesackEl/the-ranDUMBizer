import { gql } from '@apollo/client';

export const QUERY_USER = gql`
  query user($username: String!) {
    user(username: $username) {
      _id
      username
      email
      list {
        _id
        name
        listItems
      }
    }
  }
`;

export const QUERY_SINGLE_LIST = gql`
  query getSingleList($listId: ID!) {
    list(listId: $listId){
      _id
      name
      listItems
    }
  }
`;

export const QUERY_ALL_LISTS = gql `
  query getLists {
    lists {
      _id
      name
      listItems
    }
  }
`
export const QUERY_USER_LISTS = gql `
  query getLists ($listId: ID!) {
    lists(listId: $listId) {
      _id
      name
      listItems
    }
  }
`

