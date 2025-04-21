import React from 'react';

const ErrorPage = () => {
    return (
        <div className='mulish'>
            <div className='text-center justify-center items-center flex flex-col h-screen'>
                <img src="https://img.freepik.com/free-vector/oops-404-error-with-broken-robot-concept-illustration_114360-5529.jpg" alt="404" className='w-1/5 mb-6' />
                <h1 className='text-9xl text-red-600'>404</h1>
                <h2 className='text-5xl mb-6'> Page Not Found</h2>
            </div>
        </div>
    );
};

export default ErrorPage;