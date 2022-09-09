import React, { UseState } from 'react';

export default function Login() {
  return (
    <div className='content box'>
      <h1 className='has-text-centered block box'> Login! </h1>
      <div className='columns'>
        <div className='column'>
          <div className='box block'>
            <div class='field'>
              <label class='label'>Username</label>
              <div class='control'>
                <input class='input' type='username' />
              </div>
            </div>

            <div class='field'>
              <label class='label'>Password</label>
              <div class='control'>
                <input class='input' type='password' placeholder='********' />
              </div>
            </div>
            <button className='button is-primary'>Login</button>
          </div>
        </div>
      </div>
    </div>
  );
}
