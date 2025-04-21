import React from 'react';
import Hero from '../../Components/Hero/Hero';
import Lawyer from '../Lawyers/Lawyer';
import { useLoaderData } from 'react-router';
import Success from './Success';

const Home = () => {

    const data = useLoaderData()

    return (
        <div className='max-w-screen-xl mx-auto mb-30'>
            <Hero></Hero>
            <Lawyer data ={data}></Lawyer>
            <Success></Success>
        </div>
    );
};

export default Home;