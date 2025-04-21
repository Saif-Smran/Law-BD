import React from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import { Link } from 'react-router';

const ErrorPage = () => {
    return (
        <div className='mulish h-screen'>
            <Navbar></Navbar>
            <div className='text-center justify-center items-center flex flex-col '>
                <img src="https://img.freepik.com/free-vector/oops-404-error-with-broken-robot-concept-illustration_114360-5529.jpg" alt="404" className='w-1/5 mb-6' />
                <h1 className='text-6xl text-red-600'>404</h1>
                <h2 className='text-3xl mb-6'> Page Not Found</h2>
                <Link to='/' className='btn btn-success text-white rounded-2xl p-4 bg-[#0EA106] font-bold'>Back to Home</Link>
                
            </div>
        </div>
    );
};

export default ErrorPage;