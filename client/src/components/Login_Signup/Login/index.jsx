import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../../../utils/mutations';
import Auth from '../../../utils/auth';

import diceLogo from '../../assets/dice.png';
import '../../../style/Login/login.css';

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
    <div className="login-page-container">
      <div className='login-content-box'>
        <div className="login-side">
          <h1>Login</h1>
          <p>Welcome back! Enter login information:</p>
          <form className='login-form' onSubmit={handleFormSubmit}>
            <div className='login-input'>
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


            <div className='login-button-container'>
              <button className='login-button' type='submit'>
                Login
              </button>
              <div className="divider"></div>
              <p className='my-0'>Don't have an account?</p>
              <a href='signup'>
                Register
              </a>
            </div>

            <div className='column is-2-desktop is-1-tablet' />
          </form>
        </div>
        <div className="login-banner-side">
          <img src={diceLogo} alt='logo' className='login-logo' />
          <div className="login-banner-bg"></div>
        </div>
      </div>
    </div>
  );
}
