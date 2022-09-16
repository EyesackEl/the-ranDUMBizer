import React, { useState } from 'react';
import { useAppContext } from '../../utils/GlobalState';
import { TOGGLE_DARK_MODE } from '../../utils/actions';
import diceLogo from '../assets/dice.png';
import Auth from '../../utils/auth';

export default function Navbar() {
  const [burgerState, setBurgerState] = useState(false);
  const [state, dispatch] = useAppContext();

  // function toggleDarkMode() {
  //   dispatch({ type: TOGGLE_DARK_MODE });
  // }

  return (
    <nav className='navbar' role='navigation' aria-label='main navigation'>
      <div
        id='navbarContent'
        className={!burgerState ? 'navbar-menu' : 'navbar-menu is-active'}
      >
        <div className='navbar-start'>
          <div className='navbar-brand'>
            <a className='navbar-start-item' href='/'>
              <img src={diceLogo} className='navbar-logo' />
            </a>

            <button
              className={
                !burgerState ? 'navbar-burger' : 'navbar-burger is-active'
              }
              aria-label='menu'
              aria-expanded='true'
              data-target='navbarContent'
              onClick={() =>
                !burgerState ? setBurgerState(true) : setBurgerState(false)
              }
            >
              <span aria-hidden='true'></span>
              <span aria-hidden='true'></span>
              <span aria-hidden='true'></span>
            </button>
          </div>
        </div>
        <div className='navbar-center'>
          <a href='#' className='navbar-item'>
            View Lists
          </a>

          <div className='nav-divider'></div>

          <a
            href={state.isLoggedIn ? '/new-list' : '/login'}
            className='navbar-item'
          >
            Create List
          </a>

          <div className='nav-divider'></div>

          {state.isLoggedIn ? (
            <>
              <a href='/profile/me' className='navbar-item'>
                My Lists
              </a>

              <div className='nav-divider'></div>

              <a href='/contact' className='navbar-item'>
                Contact Us
              </a>

              <a
                className='navbar-item navbar-logout-mobile'
                onClick={() => Auth.logout()}
              >
                Log Out
              </a>
            </>
          ) : (
            <>
              <a href='/contact' className='navbar-item'>
                Contact Us
              </a>

              <div className='nav-divider'></div>

              <a className='navbar-item navbar-login-mobile' href='/login'>
                Sign in
              </a>

              <a href='/signup' className='navbar-item'>
                Register
              </a>
            </>
          )}
        </div>

        <div className='navbar-end'>
          <div className='navbar-end-item'>
            {state.isLoggedIn ? (
              <a className='navbar-logout' onClick={() => Auth.logout()}>
                Log Out
              </a>
            ) : (
              <a className='navbar-login' href='/login'>
                Sign in
              </a>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
