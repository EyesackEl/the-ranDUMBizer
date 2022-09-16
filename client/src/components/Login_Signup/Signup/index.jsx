import React, { useState } from 'react';

import { useMutation } from '@apollo/client';
import { ADD_USER } from '../../../utils/mutations';
import Auth from '../../../utils/auth';

import diceLogo from '../../assets/dice.png';
import '../../../style/Signup/signup.css';

export default function Signup() {

  const [formState, setFormState] = useState({
    username: '',
    password: '',
    confPassword: '',
  });

  const [addUser, { error, data }] = useMutation(ADD_USER);

  const handleChange = (event) => {
    // event.preventDefault();
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(formState);

    if (formState.password === formState.confPassword) {
      try {
        const { data } = await addUser({
          variables: { ...formState },
        });

        Auth.login(data.addUser.token);
      } catch (e) {
        console.error(e);
      }
    } else {
      return;
    }
  };

  return (
    <div className="register-page-container">
      <div className='register-content-box'>
        <div className="register-banner-side">
          <img src={diceLogo} alt='logo' className='register-logo' />
          <div className="register-banner-bg"></div>
        </div>
        <div className="register-side">
          <h1>Sign Up</h1>
          <p>Enter information to create an account:</p>
          <form className='register-form' onSubmit={handleFormSubmit}>
            <div className='register-input'>
              <div class='field'>
                <label class='label'>Username</label>
                <div class='control'>
                  <input
                    class='input'
                    type='username'
                    placeholder='Desired Username'
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

              <div class='field'>
                <label class='label'>Re-Enter Password</label>
                <div class='control'>
                  <input
                    class='input'
                    type='password'
                    name='confPassword'
                    placeholder='********'
                    value={formState.confPassword}
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>

            <div className='register-button-container'>
              <button className='register-button' type='submit'>
                Register
              </button>
              <div className="divider"></div>
              <p className='my-0'>Already have an account?</p>
              <a href='login'>
                Login
              </a>
            </div>

            <div className='column is-2-desktop is-1-tablet' />
          </form>
        </div>
      </div>
    </div>
  );
}

