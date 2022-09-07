import React, { useState } from 'react';
import NavBar from './Navbar/Navbar';
// import Footer from './Footer';
import Home from './Home/Home';

import '../style/style.css'

export default function Container() {
    const [currentPage, setCurrentPage] = useState("Home");

    const renderPage = () => {
        switch(currentPage) {
            case "Home":
                return <Home />;
            default:
                return <Home />;
        }
    };

    const handlePageChange = (page) => setCurrentPage(page);

    return (
        <>
            <NavBar currentPage = {currentPage} handlePageChange = {handlePageChange} />
                <main>
                    {renderPage()}  
                </main>
            {/* <Footer /> */}
        </>
    );
}