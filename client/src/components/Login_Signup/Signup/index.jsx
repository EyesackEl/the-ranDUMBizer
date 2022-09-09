import React, { UseState } from 'react';

export default function Signup() {
  return (
    <div className='content box'>
      <h1 className='has-text-centered block box'> Sign Up! </h1>

      <form className='columns is-centered'>
        <div className='column is-1' />

        <div className='column is-half'>
          <div className='box block'>
            <div className='field'>
              <label className='label'>Username</label>
              <div className='control'>
                <input
                  className='input'
                  type='username'
                  placeholder="Make it something cool, it'll probably follow you around for a while"
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

        <div className='column is-vcentered has-text-centered'>
          <button className='button is-medium is-primary mt-6'>Sign Up</button>
          <h4 className='my-4'>-- OR --</h4>
          <a className='button is-medium is-warning mb-4' href='/login'>
            Log In
          </a>
        </div>

        <div className='column is-1' />
      </form>
    </div>
  );
}
