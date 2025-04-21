import React, { useState } from 'react';
import LawyerCard from './LawyerCard';

const Lawyer = ({data}) => {

    const [showFull, setShowFull] = useState(false);

    const handleShowFull = () => {
        setShowFull(!showFull);
    }

    const displayedLawyers = showFull ? data : data.slice(0, 6);
    
    return (
        <div className='max-w-screen-xl mx-auto mb-30'>
            <div className='text-center my-10 max-w-[1000px] mx-auto'>
                <h1 className="text-[2.5rem] font-extrabold">Our Best Lawyers</h1>
                <p>Our platform connects you with verified, experienced Lawyers across various specialties — all at your convenience. Whether it's a routine checkup or urgent consultation, book appointments in minutes and receive quality care you can trust.</p>
            </div>
            <div className="grid grid-cols-2 gap-4">
                {
                    displayedLawyers.map((lawyer) => <LawyerCard key={lawyer._id} lawyer={lawyer}></LawyerCard>)
                }
            </div>
            <div className="text-center my-10">

                <button onClick={handleShowFull} className='btn btn-success bg-[#0EA106] text-white rounded-lg'>{showFull ? "See Less" : "Show All Lawyer"}</button>
            </div>

        </div>
    );
};

export default Lawyer;