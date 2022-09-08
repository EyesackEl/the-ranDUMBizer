import React, { useState } from 'react';

export default function Navbar({ loggedIn, setLoggedIn }) {
  const [burgerState, setBurgerState] = useState(false);

  return (
    <nav
      className="navbar block mb-6"
      role="navigation"
      aria-label="main navigation"
    >
      <div className="navbar-brand">
        <a className="navbar-item" href="https://bulma.io">
          <img src="./DICE.jpg" width="50" height="5000" />
        </a>

        <button
          onClick={() =>
            !burgerState ? setBurgerState(true) : setBurgerState(false)
          }
          className={!burgerState ? 'navbar-burger' : 'navbar-burger is-active'}
          aria-label="menu"
          aria-expanded="true"
          data-target="navbarContent"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </button>
      </div>

      <div
        id="navbarContent"
        className={!burgerState ? 'navbar-menu' : 'navbar-menu is-active'}
      >
        <div className="navbar-start">
          <a className="navbar-item" href="/">
            Home
          </a>

          <a className="navbar-item">Public Lists</a>

          <div className="navbar-item has-dropdown is-hoverable">
            <a className="navbar-link">Wonder what's over here?</a>

            <div className="navbar-dropdown">
              <a className="navbar-item">About</a>
              <a className="navbar-item">Jobs</a>
              <a className="navbar-item">Contact</a>
              <hr className="navbar-divider" />
              <a className="navbar-item">Report an issue</a>
            </div>
          </div>
        </div>

        <div className="navbar-end">
          <div className="navbar-item">
            {loggedIn ? (
              <div />
            ) : (
              <div className="buttons">
                <a className="button is-primary" href="/signup">
                  <strong>Sign up</strong>
                </a>
                <a className="button is-light" href="/login">
                  Log in
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
