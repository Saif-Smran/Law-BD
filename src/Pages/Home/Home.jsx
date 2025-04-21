import React from 'react';
import Hero from '../../Components/Hero/Hero';
import Lawyer from '../Lawyers/Lawyer';

const Home = () => {
    return (
        <div className='max-w-screen-xl mx-auto mb-30'>
            <Hero></Hero>
            <Lawyer></Lawyer>
        </div>
    );
};

export default Home;