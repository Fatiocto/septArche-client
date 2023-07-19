import React from 'react';
import NavBar from '../NavBar/NavBar';
import Footer from './Footer';
import  Search  from './Search';
import Cards from './Cart';

const HomePage = () => {
    return (
        <div className='homePage'>
        <NavBar/>
        <Search/>
        <Cards/>
        <Footer/>

        </div>
    );
};

export default HomePage;
