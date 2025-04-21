import React from 'react';
import { NavLink } from 'react-router';
import logo from '../../assets/logo.png'

const Navbar = () => {

    const link = <>
        <NavLink to='/' className='btn btn-ghost p-2 font-medium'>Home</NavLink>
        <NavLink to='/bookings' className='btn btn-ghost p-2 font-medium'>My-Bookings</NavLink>
        <NavLink to='/blogs'  className='btn btn-ghost p-2 font-medium'>Blogs</NavLink>
        <NavLink to='/contact'  className='btn btn-ghost p-2 font-medium'>Contact Us</NavLink>
    </>

    return (
        <div className='max-w-screen-xl mx-auto bg-base-100'>
            <div class="navbar  ">
                <div class="navbar-start">
                    <div class="dropdown">
                        <div tabindex="0" role="button" class="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabindex="0"
                            class="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            {link}

                        </ul>
                    </div>
                    <a class="btn btn-ghost text-2xl font-extrabold space-x-2"><img src={logo} alt="logo" /> Law.BD</a>
                </div>
                <div class="navbar-center hidden lg:flex">
                    <ul class="menu menu-horizontal px-1 space-x-3">
                        {link}
                    </ul>
                </div>
                <div class="navbar-end">
                    <a class="btn btn-success text-white rounded-2xl p-4 bg-[#0EA106] font-bold">Contact Now</a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;