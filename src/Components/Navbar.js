import React, { useEffect } from 'react'
import Cookies from 'universal-cookie/es6'
import { useNavigate } from 'react-router-dom';

export const Navbar = () => {
    const cookies = new Cookies();
    const history = useNavigate();
    useEffect(() => {
        if (!cookies.get('token')) {
            history('/login');
        }
    })
    return (
        <nav class="flex items-center justify-between flex-wrap bg-black p-6">
            <div class="flex items-center flex-shrink-0 text-white mr-6">
                <span class="font-semibold text-xl tracking-tight cursor-pointer" onClick={()=>{
                    history('/profile');
                }}>Hostel Management</span>
            </div>
            <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
                <div class="text-sm lg:flex-grow">
                </div>
                <div>
                    <a href="#" onClick={() => {
                        cookies.remove('token');
                        history('/login');
                    }}
                        class="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-black hover:bg-white mt-4 lg:mt-0">Logout</a>
                </div>
            </div>
        </nav>
    )
}
