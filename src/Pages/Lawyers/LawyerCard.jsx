import React from 'react';
import { FaRegRegistered } from "react-icons/fa";
import { Link } from 'react-router';

const LawyerCard = ({ lawyer }) => {



    return (
        <div>
            <div
                className="mx-auto border border-gray-300 rounded-xl p-6 flex items-center gap-6"
                style={{ width: 607, height: 215 }}
            >
                <img
                    src={lawyer?.Image}
                    alt="Portrait"
                    className="rounded-lg flex-shrink-0 object-cover object-top w-[160px] h-[160px]"
                />


                <div className="flex-1 h-full flex flex-col justify-center">
                    <div className="flex flex-wrap gap-2 mb-1">
                        <span className="bg-green-100 text-green-600 text-sm font-semibold px-3 py-1 rounded-full select-none">
                            Available
                        </span>
                        <span className="bg-blue-100 text-blue-600 text-sm font-semibold px-3 py-1 rounded-full select-none">
                            {lawyer.Experience} Experience
                        </span>
                    </div>

                    <h2 className="text-2xl font-extrabold text-gray-900 leading-tight mb-1">
                        {lawyer?.Name}
                    </h2>
                    <p className="text-gray-600 text-base mb-1">{lawyer?.Speciality}</p>

                    <p className="text-gray-700 text-base flex items-center gap-2 mb-4">
                        <FaRegRegistered size={25} />
                        License No: {lawyer.LicenseNumber}
                    </p>

                    <Link to={`/lawyerdetails/${lawyer.id}`}
                        type="button"
                        className="w-full text-center text-blue-600 font-semibold border border-blue-300 rounded-full py-2 px-4 hover:bg-blue-50 transition self-start"
                    >
                        View Details
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default LawyerCard;