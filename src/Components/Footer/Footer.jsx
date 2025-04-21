import React from 'react';
import logo from '../../assets/logo-footer.png';
import { Link, NavLink } from 'react-router';
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter,FaGithub  } from "react-icons/fa6";

const Footer = () => {

    const link = <>
        <NavLink to='/' className='btn btn-ghost p-2 font-medium'>Home</NavLink>
        <NavLink to='/bookings' className='btn btn-ghost p-2 font-medium'>My-Bookings</NavLink>
        <NavLink to='/blogs' className='btn btn-ghost p-2 font-medium'>Blogs</NavLink>
        <NavLink to='/contact' className='btn btn-ghost p-2 font-medium'>Contact Us</NavLink>
    </>

    return (
        <div className='bg-black py-4'>
            <div className='max-w-screen-xl mx-auto text-center text-white py-30'>
                <h2 className='text-5xl font-bold flex gap-4 justify-center items-center'><img src={logo} alt="" />Law.BD</h2>
                <ul className='flex justify-center items-center space-x-4 my-4'>
                    {link}
                </ul>
                <hr className="border-t border-dashed border-gray-300" />
                <div className='flex justify-center items-center space-x-4 my-4'>
                    <Link to='https://www.facebook.com/saif.smran.1' > <FaFacebook size={30} fill='skyblue' /> </Link>
                    <Link to='https://www.linkedin.com/in/a-h-m-saif-smran/' > <FaLinkedin size={30} fill='blue' /> </Link>
                    <Link to='https://x.com/Soron_Hosain' > <FaXTwitter size={30}  /> </Link>
                    <Link to='https://github.com/saif-Smran/' > <FaGithub size={30}  /> </Link>
                </div>


            </div>
        </div>
    );
};

export default Footer;