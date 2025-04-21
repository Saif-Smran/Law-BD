import React from 'react';
import Baner from '../../assets/banner-img-1.png'

const Hero = () => {
    return (
        <div >
            <div
                className="flex flex-col justify-center items-center h-[600px] rounded-[24px] text-center text-white"
                style={{
                    background: `linear-gradient(180deg, rgba(15, 15, 15, 0) -27.727%, rgba(15, 15, 15, 0.8) 100%), url(${Baner})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            >
                <div className="flex flex-col justify-center items-center max-w-[1000px] gap-4">
                    <h1 className="text-5xl font-extrabold ">It avoids subjective claims or exaggeration that might raise red flags legally</h1>
                    <p className="font-medium">Our platform connects you with verified, experienced doctors across various specialties — all at your convenience. Whether it's a routine checkup or urgent consultation, book appointments in minutes and receive quality care you can trust.</p>
                </div>
            </div>
        </div>
    );
};

export default Hero;