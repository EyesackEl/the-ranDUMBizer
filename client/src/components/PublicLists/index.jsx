import React from 'react';
import { useQuery } from '@apollo/client';
import { QUERY_ALL_LISTS } from '../../utils/queries';

import Card from '../cards/listCard';

export default function PublicLists() {
  let pubLists = [];
  const { loading, data } = useQuery(QUERY_ALL_LISTS);
  console.log(loading ? {} : data.lists);
  if (!loading) {
    data.lists.map((list) => {
      if (list.public) {
        pubLists.push(list);
      }
    });
  }
  // console.log(data.lists);
  console.log(pubLists);
  return (
    <div className='content has-text-centered'>
      <h1>Shared Lists</h1>
      <div className='columns is-centered is-multiline'>
        {pubLists.map((list) => (
          <Card key={list._id} props={list} username={list.user.username} />
        ))}
      </div>
    </div>
  );
}
