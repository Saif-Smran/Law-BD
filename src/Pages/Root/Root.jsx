import React from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import { Outlet } from 'react-router';
import Footer from '../../Components/Footer/Footer';

const Root = () => {
    return (
        <div className='mulish'> 
            <Navbar></Navbar>
            <hr className='mt-2 border-t-1 ' />
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;