import React, {useState} from 'react';

export default function Navbar({ currentPage, handlePageChange }) {
    const [burgerState, setBurgerState] = useState(false);

    return (
        <nav class="navbar" role="navigation" aria-label="main navigation">
            <div class="navbar-brand">
                <a class="navbar-item" href="https://bulma.io">
                <img src="./DICE.jpg" width="50" height="5000"/>
                </a>

                <button 
                    onClick={() => !burgerState ? setBurgerState(true) : setBurgerState(false)}
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

            <div id="navbarContent" className={!burgerState ? 'navbar-menu' : 'navbar-menu is-active'}>
                <div class="navbar-start">
                <a class="navbar-item">
                    Home
                </a>

                <a class="navbar-item">
                    Documentation
                </a>

                <div class="navbar-item has-dropdown is-hoverable">
                    <a class="navbar-link">
                    More
                    </a>

                    <div class="navbar-dropdown">
                    <a class="navbar-item">
                        About
                    </a>
                    <a class="navbar-item">
                        Jobs
                    </a>
                    <a class="navbar-item">
                        Contact
                    </a>
                    <hr class="navbar-divider"/>
                    <a class="navbar-item">
                        Report an issue
                    </a>
                    </div>
                </div>
                </div>

                <div class="navbar-end">
                <div class="navbar-item">
                    <div class="buttons">
                    <a class="button is-primary">
                        <strong>Sign up</strong>
                    </a>
                    <a class="button is-light">
                        Log in
                    </a>
                    </div>
                </div>
                </div>
            </div>
            </nav>
    )
}