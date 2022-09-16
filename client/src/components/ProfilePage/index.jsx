import React from 'react';
import { useQuery } from '@apollo/client';
import { useAppContext } from '../../utils/GlobalState';
import Auth from '../../utils/auth';
import { QUERY_ME } from '../../utils/queries';
import ListForm from '../Listform';

import Card from '../cards/listCard';

export default function ProfilePage() {
  const [state, dispatch] = useAppContext();
  const myProfile = Auth.getProfile();

  const { loading, data } = useQuery(QUERY_ME, {
    variables: { id: myProfile.data._id },
  });

  const myLists = data?.me.lists || [];


  if (myLists.length > 0){
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
  } else {
    return (
      <div>
        <h1 className='columns is-centered'>Make a List!</h1>
        <div className='columns is-centered'>Seems like you don't have any lists yet.</div>
        <div className='columns is-centered'>Why not make your first?</div>
        <ListForm />
      </div>
    );
  } 


}
