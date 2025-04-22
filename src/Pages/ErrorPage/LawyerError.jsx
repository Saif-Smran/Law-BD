import React from 'react';
import { Link } from 'react-router';

const LawyerError = () => {
    return (
        <div className='max-w-screen-xl mx-auto mb-30 mt-20 text-center'>
            <h1 className='text-7xl font-bold text-center my-10'>No lawyer has been found</h1>
            <Link to={'/'} className='btn btn-success  text-white rounded-2xl p-4 bg-[#0EA106] font-bold' >Click To See Lawyers</Link>
        </div>
    );
};

export default LawyerError;