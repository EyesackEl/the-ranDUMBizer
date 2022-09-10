import React, { useState } from 'react';

import { useMutation } from '@apollo/client';
import { ADD_USER } from '../utils/mutations';
import Auth from '../utils/auth';


export default function Signup() {

  const [formState, setFormState] = useState({
    username: '',
    password: '',
  });
  const [addUser, { error, data }] = useMutation(ADD_USER);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(formState);

    try {
      const { data } = await addUser({
        variables: { ...formState },
      });

      Auth.login(data.addUser.token);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div className='content box'>
      <h1 className='has-text-centered block box'> Sign Up! </h1>

      <form className='columns is-centered' onSubmit={handleFormSubmit}>
        <div className='column is-1-tablet is-2-desktop' />

        <div className='column'>
          <div className='box block'>
            <div className='field'>
              <label className='label'>Username</label>
              <div className='control'>
                <input
                  className='input'
                  type='username'
                  placeholder="Make it something cool, it'll probably follow you around for a while"
                  value={formState.username}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className='field'>
              <label className='label'>Password</label>
              <div className='control'>
                <input
                  className='input'
                  type='password'
                  placeholder='********'
                  value={formState.password}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className='field'>
              <label className='label'>Re-Enter Password</label>
              <div className='control'>
                <input
                  className='input'
                  type='password'
                  placeholder='********'
                />
              </div>
            </div>
          </div>
        </div>

        <div className='mt-5 column is-vcentered has-text-centered'>
          <button className='button is-medium is-primary mt-6' type='submit'>
            Sign Up
          </button>
          <h4 className='my-4'>-- OR --</h4>
          <a className='button is-medium is-warning mb-4' href='/login'>
            Log In
          </a>
        </div>

        <div className='column is-2-desktop is-1-tablet' />
      </form>
    </div>
  );
}

