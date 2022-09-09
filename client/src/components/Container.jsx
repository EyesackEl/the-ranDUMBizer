import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useAppContext } from '../utils/GlobalState';

import NavBar from './Navbar';
// import Footer from './Footer';
import Home from './Home';
import Problem from './Problem';
import Login from './Login_Signup/Login';
import Signup from './Login_Signup/Signup';

import '../style/style.css'

export default function Container() {
  //   const [currentPage, setCurrentPage] = useState('Home');

  //   const renderPage = () => {
  //     switch (currentPage) {
  //       case 'Home':
  //         return <Home handlePageChange={handlePageChange} />;
  //       case 'Problem':
  //         return <Problem handlePageChange={handlePageChange} />;
  //       case 'Login':
  //         return <Login handlePageChange={handlePageChange} />;
  //       case 'Signup':
  //         return <Signup handlePageChange={handlePageChange} />;
  //       default:
  //         return <Home />;
  //     }
  //   };

  //   const handlePageChange = (page) => setCurrentPage(page);
  //   const state = useAppContext();

  //   const [loggedIn, setLoggedIn] = useState(state.isLoggedIn);

  return (
    <Router>
      <NavBar />
      <main>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/waah' element={<Problem />} />
        </Routes>
      </main>
      {/* <Footer /> */}
    </Router>
  );
}