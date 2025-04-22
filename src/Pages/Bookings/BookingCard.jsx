import React from 'react';
import { toast, ToastContainer } from 'react-toastify';

const BookingCard = ({ lawyer, handelDelete }) => {

    const notify = () => toast.error('Appointment Canceled Successfully!');

    const handleCansalation = (id) => {
        notify();
        handelDelete(id);
    };

    return (
        <div>
            <div className="border border-gray-200 rounded-xl px-4 py-6">
                <div className="flex justify-between items-start mb-2 py-4">
                    <div className='space-y-4'>
                        <p className="font-bold text-gray-900 text-xl leading-5">{lawyer.Name}</p>
                        <p className="text-gray-500 text-lg font-medium leading-5">{lawyer.Speciality}</p>
                    </div>
                    <p className="text-gray-500 text-lg font-medium leading-5">
                        Appointment Fee : {lawyer.Fee} Taka
                    </p>
                </div>
                <hr className="border-dashed border-gray-300 mb-3" />
                <ToastContainer></ToastContainer>
                <button
                    onClick={() => handleCansalation(lawyer.id)}
                    className="w-full text-red-600 font-semibold text-sm leading-5 border border-red-600 rounded-full py-2 px-4 hover:bg-red-50 transition"
                    type="button"
                >
                    Cancel Appointment
                </button>
            </div>
        </div>
    );
};

export default BookingCard;
