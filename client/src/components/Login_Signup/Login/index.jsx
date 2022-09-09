import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../../../utils/mutations';
import Auth from '../../../utils/auth';

export default function Login() {
  // state hooks for user data and mutation hook for login check
  const [formState, setFormState] = useState({ username: '', password: '' });
  const [login, { error, data }] = useMutation(LOGIN_USER);

  // function to update state with every keystroke when typing into username and password bars
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  // Function to login with whatever form we choose to render
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(formState);
    try {
      const { data } = await login({
        variables: { ...formState },
      });

      Auth.login(data.login.token);
    } catch (e) {
      console.error(e);
    }

    // clear form values
    setFormState({
      username: '',
      password: '',
    });
  };

  return (
    <div className='content box'>
      <h1 className='has-text-centered block box'> Login! </h1>
      <form className='columns is-centered' onSubmit={handleFormSubmit}>
        <div className='column is-1' />

        <div className='column is-half'>
          <div className='box block'>
            <div class='field'>
              <label class='label'>Username</label>
              <div class='control'>
                <input
                  class='input'
                  type='username'
                  placeholder='Your Username'
                  name='username'
                  value={formState.email}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div class='field'>
              <label class='label'>Password</label>
              <div class='control'>
                <input
                  class='input'
                  type='password'
                  name='password'
                  placeholder='********'
                  value={formState.password}
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>
        </div>
        <div className='mt-5 column is-vcentered has-text-centered'>
          <button className='button is-medium is-primary' type='submit'>
            Login
          </button>
          <h4 className='my-4'>--OR--</h4>
          <a className='button is-medium is-warning' href='signup'>
            Make an Account!
          </a>
        </div>
        <div className='column is-1' />
      </form>
    </div>
  );
}
