import React from 'react';
import { useLoaderData, useParams } from 'react-router';
import { FaRegRegistered } from "react-icons/fa";
import { CircleAlert } from 'lucide-react';
import { getStoredData, storeDataToDB } from '../../Utility/Utility';
import { toast, ToastContainer } from 'react-toastify';


const LawyerDetails = () => {

    const { id } = useParams()
    const data = useLoaderData()

    const lawyer = data.find(lawyer => lawyer.id === parseInt(id))
    // console.log(lawyer)

    const notify2 = () => toast.success('Successfully Added to the list')
    const notify1 = () => toast.error('Already Added to the list')

    const handelAddToLawyerList = (id) =>{
        const storedData = getStoredData('lawyerList')
        if (storedData.includes(id)){
            notify1()
        }else{
            storeDataToDB(id, 'lawyerList')
            notify2()
        }
    }

    return (
        <div className='max-w-screen-xl mx-auto mb-30 mt-20'>
            <div className="text-center bg-base-300 rounded-2xl">
                <div className='max-w-[1000px] mx-auto my-10 py-15 space-y-3'>
                    <h1 className="text-3xl font-extrabold">Lawyer’s Profile Details</h1>
                    <p>With a strong commitment to justice and years of courtroom experience, {lawyer.Name} specializes in representing clients with dedication, integrity, and expertise. Known for strategic thinking and clear communication, [he/she] works tirelessly to ensure each client receives fair representation and a strong legal defense. Whether navigating complex legal issues or advocating in hearings, {lawyer.Name} is focused on achieving the best possible outcomes.</p>
                </div>
            </div>
            <div className="space-y-6">
                {/* Profile Card  */}
                <div class="border border-gray-200 rounded-lg p-6 flex flex-col sm:flex-row sm:items-start sm:space-x-6">
                    <img alt="Portrait of Awlad Hossain, a professional criminal expert" class="w-[308px] h-[308px] rounded-lg object-cover object-top flex-shrink-0"
                        src={lawyer?.Image} />
                    <div class="mt-4 sm:mt-0 flex-1 py-12">
                        <div>
                            <span class="inline-block bg-blue-100 text-blue-700 text-xs font-medium px-3 py-1 rounded-full select-none">
                                {lawyer.Experience} Experience
                            </span>
                        </div>
                        <h2 class="mt-2 text-3xl font-extrabold text-gray-900">
                            {lawyer.Name}
                        </h2>
                        <div class="flex flex-wrap items-center space-x-6 text-gray-500 mt-1">
                            <span>
                                {lawyer?.Speciality}
                            </span>
                            <span class="flex items-center space-x-1">
                                <FaRegRegistered size={25} />
                                <span>
                                    License No: {lawyer.LicenseNumber}
                                </span>
                            </span>
                        </div>
                        <div class="mt-3 flex flex-wrap items-center space-x-2 text-gray-700 font-semibold">
                            <span className='font-bold'>
                                Availability
                            </span>
                            {
                                lawyer.Availability.map((day, index) => <Aval key={index} day={day}></Aval>)
                            }
                        </div>
                        <div class="mt-2 font-bold text-gray-700">
                            Consultation Fee:
                            <span class="text-green-700 font-extrabold ml-4">
                                Taka : {lawyer.Fee}
                            </span>
                        </div>
                    </div>
                </div>

                {/* Appointment Section  */}
                <div class="border border-gray-200 rounded-lg p-6">
                    <h3 class="text-center font-semibold text-lg mb-4">Book an Appointment</h3>
                    <hr class="border-dashed border-gray-300 mb-4" />
                    <div class="flex justify-between items-center mb-3">
                        <span class="font-semibold text-gray-900">Availability</span>
                        <span class="text-xs font-normal bg-green-100 text-green-700 rounded-full px-3 py-1 select-none">Lawyer Available Today</span>
                    </div>
                    <div class="flex items-center space-x-2 text-xs text-orange-500 bg-orange-100 rounded-full px-3 py-1 mb-6 select-none">
                        <CircleAlert  size={25} />
                        <span>Due to high patient volume, we are currently accepting appointments for today only. We appreciate your understanding and cooperation.</span>
                    </div>
                    <button onClick={()=>handelAddToLawyerList(lawyer.id)} class="cursor-pointer w-full bg-green-700 hover:bg-green-800 text-white font-semibold py-3 rounded-full">
                        Book Appointment Now
                    </button>
                    <ToastContainer></ToastContainer>
                </div>
            </div>
        </div>
    );
};

const Aval = ({day}) => {
    return <span class="text-sm font-normal bg-orange-100 text-orange-500 rounded-full px-3 py-0.5 select-none">
        {day}
    </span>
}

export default LawyerDetails;