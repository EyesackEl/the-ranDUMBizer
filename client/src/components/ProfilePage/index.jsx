import React from 'react';
import { useQuery } from '@apollo/client';
import { useAppContext } from '../../utils/GlobalState';
import Auth from '../../utils/auth';
import { QUERY_ME } from '../../utils/queries';

import Card from '../cards/listCard';

export default function ProfilePage() {
  const [state, dispatch] = useAppContext();
  const myProfile = Auth.getProfile();

  const { loading, data } = useQuery(QUERY_ME, {
    variables: { id: myProfile.data._id },
  });

  const myLists = data?.me.lists || [];
  // myLists.map((list) => console.log(list));

  return (
    <div>
      {state.isLoggedIn ? (
        <div className='content box has-text-centered'>
          <h1>{myProfile.data.username}'s Lists</h1>
          <div className='columns is-centered is-multiline'>
            {myLists.map((list) => (
              <Card
                key={list._id}
                props={list}
                username={myProfile.data.username}
              />
            ))}
          </div>
        </div>
      ) : (
        <div className='content box has-text-centered'>
          <h1>Profile Page</h1>
        </div>
      )}
    </div>
  );
}
