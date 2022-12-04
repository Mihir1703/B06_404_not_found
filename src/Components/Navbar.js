import React, { useEffect } from 'react'
import Cookies from 'universal-cookie/es6'
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

export const Navbar = () => {
    const cookies = new Cookies();
    const history = useNavigate();
    const handleLogOut = async () => {
        cookies.remove('token');
        cookies.remove('admin');
        history('/login');
    }
    useEffect(() => {
        if (!cookies.get('token')) {
            history('/login');
        }
    })
    return (
        <><nav x-data="{ isOpen: false }" class="relative bg-gray-800 shadow dark:bg-gray-800">
            <div class="container px-6 py-4 mx-auto md:flex md:justify-between md:items-center">
                <div class="flex items-center justify-between">
                    <div>
                        <a class="text-2xl font-bold text-white transition-colors duration-300 transform dark:text-white lg:text-3xl " style={{
                            fontFamily: 'Work Sans',
                        }} href="#">Hostel Management</a>
                    </div>

                    <div class="flex lg:hidden">
                        <button x-cloak type="button" class="text-white dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400" aria-label="toggle menu">
                            <svg x-show="!isOpen" xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M4 8h16M4 16h16" />
                            </svg>

                            <svg x-show="isOpen" xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                </div>

                <div x-cloak class="absolute inset-x-0 z-20 w-full px-6 py-4 transition-all duration-300 ease-in-out bg-white dark:bg-gray-800 md:mt-0 md:p-0 md:top-0 md:relative md:bg-transparent md:w-auto md:opacity-100 md:translate-x-0 md:flex md:items-center">
                    <div class="flex flex-col md:flex-row md:mx-6">
                        <Link class="my-2 text-white transition-colors duration-300 transform dark:text-gray-200 hover:text-blue-100 dark:hover:text-blue-400 md:mx-4 md:my-0" to={cookies.get('admin') === true ? "/admin/dashboard": "/"}>Home</Link>
                        <Link class="my-2 text-white transition-colors duration-300 transform dark:text-gray-200 hover:text-blue-100 dark:hover:text-blue-400 md:mx-4 md:my-0" to="/profile">Profile</Link>
                        <Link class="my-2 text-white transition-colors duration-300 transform dark:text-gray-200 hover:text-blue-100 dark:hover:text-blue-400 md:mx-4 md:my-0" to={"/admin/complaint"}>Complaint</Link>
                        <Link class="my-2 text-white transition-colors duration-300 transform dark:text-gray-200 hover:text-blue-100 dark:hover:text-blue-400 md:mx-4 md:my-0" to="/pass_data">Gate Pass</Link>
                        <Link class="my-2 text-white transition-colors duration-300 transform dark:text-gray-200 hover:text-blue-100 dark:hover:text-blue-400 md:mx-4 md:my-0" to="/admin/fineBoard">Fine</Link>
                        
                        <Link class="my-2 text-white transition-colors duration-300 transform dark:text-gray-200 hover:text-blue-100 dark:hover:text-blue-400 md:mx-4 md:my-0" to="/notice">Notice</Link>
                    </div>
                    <a class="cursor-pointer     my-2 text-white transition-colors duration-300 transform dark:text-gray-200 hover:text-white dark:hover:text-blue-400 md:mx-4 md:my-0" onClick={() => {
                        handleLogOut();
                    }}>Log Out</a>
                </div>
            </div>
        </nav></>
    )
}
