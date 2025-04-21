import React from 'react';
import Hero from '../../Components/Hero/Hero';

const Home = () => {
    return (
        <div className='max-w-screen-xl mx-auto mb-30'>
            <Hero></Hero>
            <div>
                <div className='text-center my-10 max-w-[1000px] mx-auto'>
                    <h1 className="text-[2.5rem] font-extrabold">Our Best Lawyers</h1>
                    <p>Our platform connects you with verified, experienced Lawyers across various specialties — all at your convenience. Whether it's a routine checkup or urgent consultation, book appointments in minutes and receive quality care you can trust.</p>
                </div>
                
            </div>
        </div>
    );
};

export default Home;