import React from 'react';
import img1 from '../../assets/success-doctor.png';
import img2 from '../../assets/success-patients.png';
import img3 from '../../assets/success-review.png';
import img4 from '../../assets/success-staffs.png';
import CountUp from 'react-countup';
import { useInView } from "react-intersection-observer";
const Success = () => {

    return (
        <div className='my-10'>
            <div className='text-center my-10 max-w-[1000px] mx-auto'>
                <h1 className="text-[2.5rem] font-extrabold">We Provide Best Law Services</h1>
                <p>Our platform connects you with verified, experienced Lawyers across various specialities — all at your convenience. </p>
            </div>

            <div className="flex justify-center items-center gap-4">
                <Card image={img1} amount={199} massage={"Total Lawyer"}></Card>
                <Card image={img2} amount={467} massage={"Total Reviews"}></Card>
                <Card image={img3} amount={1900} massage={"Cases Initiated"}></Card>
                <Card image={img4} amount={300} massage={"Total Stuffs"}></Card>
            </div>

        </div>
    );
};

const Card = ({ image, amount, massage }) => {

    const { ref, inView } = useInView({
        triggerOnce: true, 
        threshold: 0.5,     
    });

    return <div class="bg-gray-100 rounded-xl p-8 w-[300px] h-[260px] flex flex-col items-start space-y-6">
        <img
            alt="Emoji of a man in a suit with scales of justice"
            class="w-12 h-12"
            draggable="false"
            height="48"
            src={image}
            width="48"
        />
        <h2 class="text-4xl font-extrabold text-black">
            <div ref={ref}>
                {inView && <CountUp end={amount} duration={3.5} />}+
            </div>
        </h2>
        <p class="text-gray-500 text-lg">
            {massage}
        </p>
    </div>
}

export default Success;