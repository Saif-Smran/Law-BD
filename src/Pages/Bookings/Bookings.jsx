import React, { useEffect, useState } from 'react';
import {
    BarChart, Bar, XAxis, YAxis, Cell, Tooltip, ResponsiveContainer, LabelList,
} from 'recharts';
import { getStoredData, removeDataFromDB } from '../../Utility/Utility';
import { Link, useLoaderData } from 'react-router';
import BookingCard from './BookingCard';

function generateRandomColors(n) {
    const colors = [];

    for (let i = 0; i < n; i++) {
        const color = `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0')}`;
        colors.push(color);
    }

    return colors;
}

const Bookings = () => {

    // const [lawyer, setLawyer] = useState([])

    const lawyerData = useLoaderData()

    const [colors, setColors] = useState([]);

    const lawyerList = getStoredData('lawyerList')

    const lawyerListData = lawyerData.filter(lawyer => lawyerList.includes(lawyer.id))

    const [Data, setData] = useState(lawyerListData)

    const handelDelete = (id) => {
        const remaining = removeDataFromDB(id, 'lawyerList')
        const newData = lawyerData.filter(lawyer => remaining.includes(lawyer.id))
        setData(newData)
    }
    const n = Data.length

    useEffect(() => {
        const randomColors = generateRandomColors(n);
        setColors(randomColors);
    }, [n])

    const getPath = (x, y, width, height) => {
        return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
        ${x + width / 2}, ${y}
        C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
        Z`;
    };

    const TriangleBar = (props) => {
        const { fill, x, y, width, height } = props;

        return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
    };

    return (
        <div className='max-w-screen-xl mx-auto mb-30 mt-20'>
            <div className='max-w-screen-xl mx-auto mb-30 mt-5 p-10 bg-base-200 rounded-lg'>
                {
                    n == 0 ? <>
                        <div className='text-center py-10 bg-base-300 rounded-lg my-10 space-y-4'>
                            <h2 className='font-bold text-2xl text-center'>No Lawyers in your booking list</h2>
                            <p className='text-center mt-5'>Please add Lawyers to your booking list.</p>
                            <Link to={'/'} className='btn btn-success  text-white rounded-2xl p-4 bg-[#0EA106] font-bold' >Click To See Lawyers</Link>
                        </div>
                    </> : <>
                        <ResponsiveContainer width="100%" height={500} >
                            <BarChart data={Data}>
                                <XAxis dataKey="Name" />
                                <YAxis />
                                <Tooltip />
                                <Bar
                                    dataKey="Fee"
                                    shape={<TriangleBar />}
                                    label={{
                                        position: 'top',
                                        formatter: (value) => `${value}`,
                                        fill: "#8884d8",
                                        fontWeight: 'bold',
                                    }}
                                >
                                    {Data.map((entry, index) => (
                                        <Cell key={`cell-${index}`} fill={colors[index]} />
                                    ))}
                                </Bar>
                            </BarChart>
                        </ResponsiveContainer>
                    </>
                }
            </div>
            <div className='text-center py-10 rounded-lg my-10 space-y-4'>
                <div className="max-w-[1000px]"></div>
                <h1 className="text-4xl font-extrabold">My Today Appointments</h1>
                <p className='text-lg'>Our platform connects you with verified, experienced Lawyers across various specialties — all at your convenience.</p>
            </div>
            <div className="my-10 space-y-4">
                {
                    Data.map(lawyer => <BookingCard key={lawyer.id} lawyer={lawyer} handelDelete={handelDelete}></BookingCard>)
                }
            </div>
        </div>
    );
};




export default Bookings;