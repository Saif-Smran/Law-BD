import React, { useEffect, useState } from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import { Outlet, useLocation } from 'react-router';
import Footer from '../../Components/Footer/Footer';

const Root = () => {

    const location = useLocation();
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);

        const timeout = setTimeout(() => {
            setLoading(false);
        }, 200); 

        return () => clearTimeout(timeout);
    }, [location.pathname]);


    return (
        <div className='mulish'>
            <Navbar></Navbar>
            <hr className='mt-2 border-t-1' />
            {loading && <span className="loading loading-bars min-w-screen loading-xl min-h-screen text-center"></span>}
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;