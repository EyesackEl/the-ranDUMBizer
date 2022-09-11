import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useAppContext } from '../utils/GlobalState';

import NavBar from './Navbar';
// import Footer from './Footer';
import Home from './Home';
import Problem from './Problem';
import Login from './Login_Signup/Login';
import Signup from './Login_Signup/Signup';
import ListForm from './Listform';
import ProfilePage from './ProfilePage';

import '../style/style.css';

export default function Container() {
  const [state, dispatch] = useAppContext();

  return (
    <Router>
      <NavBar />
      <main>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/waah' element={<Problem />} />
          <Route path='/new-list' element={<ListForm />} />
          <Route
            path={ // {'/profile'}
              state.isLoggedIn ? '/profile/me' : '/profile'
            }
            element={<ProfilePage />}
          />
          {/* <Route path='/list/:listId' element={<List />} /> */}
        </Routes>
      </main>
      {/* <Footer /> */}
    </Router>
  );
}