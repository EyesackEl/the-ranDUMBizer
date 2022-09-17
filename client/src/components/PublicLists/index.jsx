import React from 'react';
import { useQuery } from '@apollo/client';
import { QUERY_ALL_LISTS } from '../../utils/queries';

import diceLogo from '../assets/dice.png';
import Card from '../cards/listCard';

export default function PublicLists() {
  let pubLists = [];
  const { loading, data } = useQuery(QUERY_ALL_LISTS);
  if (!loading) {
    data.lists.map((list) => {
      if (list.public) {
        pubLists.push(list);
      }
    });
  }

  return (
    <div className='public-lists'>
      <div className="public-list-content-box">
        <header>
          
          <h1>Public Lists</h1>
          <img src={diceLogo} alt='logo' className='public-lists-logo' />
          <div className="public-lists-bg"></div>
        </header>
        <div className='public-lists-page-container'>
          {pubLists.map((list) => (
            <Card key={list._id} props={list} username={list.user.username} />
          ))}
        </div>
      </div>
    </div>
  );
}
