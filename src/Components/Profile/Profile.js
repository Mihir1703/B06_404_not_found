import React from 'react'
import profile from '../../static/images/profile.png'
import { useEffect, useState } from 'react'
import axios from 'axios'
import Cookies from 'universal-cookie/es6'
import { useNavigate } from "react-router-dom";

const Profile = () => {
    const cookies = new Cookies();
    const history = useNavigate();
    const [user, setUser] = useState({})
    const handleLogOut = async () => {
        cookies.remove('token');
        history('/login');
    }
    useEffect(() => {
        if (!cookies.get('token')) {
            history('/signup');
        }
        axios.post('/user/profile', {}, {
            headers: {
                'Content-Type': 'application/json',
                'auth-token': cookies.get('token')
            }
        }).then((response) => {
            setUser(response.data.user)
            console.log(response.data)
        })
    }, [])
    setTimeout(() => {
        document.getElementById('warn').style.display = 'none';
    }, 10_000)
    return (
        <>
            <div class="bg-gray-100">
                <div class="w-full text-white bg-main-color">
                    <div x-data="{ open: false }"
                        class="flex flex-col max-w-screen-xl px-4 mx-auto md:items-center md:justify-between md:flex-row md:px-6 lg:px-8">
                        <div class="p-4 flex flex-row items-center justify-between">
                            <a href="#"
                                class="text-lg font-semibold tracking-widest uppercase rounded-lg focus:outline-none">
                                profile</a>
                        </div>
                        <nav class="flex-col flex-grow pb-4 md:pb-0 hidden md:flex md:justify-end md:flex-row">
                            <div class="relative">
                                <button onClick={handleLogOut} class="flex flex-row items-center space-x-2 w-full px-4 py-2 mt-2 text-sm font-semibold text-left bg-transparent hover:bg-gray-800 md:w-auto md:inline md:mt-0 md:ml-4 hover:bg-gray-200 focus:outline-none rounded-md">
                                    <span>Logout</span>
                                </button>
                            </div>
                        </nav>
                    </div>
                </div>
                <div id="profile" class="grid place-items-center">
                    <img src={profile} alt="profile photo" />
                    <div class="p-3">
                        <h1 class="text-gray-900 font-bold text-3xl leading-8 my-1">
                            {user.firstName} {user.lastName}
                        </h1>
                        <h3 class="text-gray-600 font-lg text-semibold leading-6 grid place-items-center">
                            {user.userType === 'admin' ? 'Warden' : 'Student'}
                        </h3>
                    </div>
                </div>
                <div class="container mx-auto my-5 p-5">
                    {user.roomNumber == 0 && <div id="warn" class="p-4 mb-4 text-sm text-yellow-700 bg-yellow-100 rounded-lg dark:bg-yellow-200 dark:text-yellow-800" role="alert">
                        Your room allotment request is currently under review.
                    </div>}
                    <div class="md:flex no-wrap md:-mx-2">
                        <div class="w-full md:w-100 mx-2 h-64 border-8 rounded-xl border-gray-900">
                            <div class="bg-white p-3 shadow-sm rounded-sm">
                                <div className="grid place-items-center p-2">
                                    <div class="flex items-center space-x-2 font-semibold text-gray-900 leading-8 items-center justify-content-center">
                                        <span clas="text-green-500">
                                            <svg class="h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                stroke="currentColor">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                            </svg>
                                        </span>
                                        <span class="tracking-wide text-xl">About</span>
                                    </div>
                                </div>
                                <div class="text-gray-700">
                                    <div class="grid md:grid-cols-2 text-sm">
                                        <div class="grid grid-cols-2">
                                            <div class="px-4 py-2 font-semibold">First Name</div>
                                            <div class="px-4 py-2">{user.firstName}</div>
                                        </div>
                                        <div class="grid grid-cols-2">
                                            <div class="px-4 py-2 font-semibold">Last Name</div>
                                            <div class="px-4 py-2">{user.lastName}</div>
                                        </div>
                                        <div class="grid grid-cols-2">
                                            <div class="px-4 py-2 font-semibold">Contact No.</div>
                                            <div class="px-4 py-2">+91 {user.mobileNumber}</div>
                                        </div>
                                        <div class="grid grid-cols-2">
                                            <div class="px-4 py-2 font-semibold">Current Address</div>
                                            <div class="px-4 py-2">Hoste No : {user.hostelAlloted} Room No : {user.roomNumber}</div>
                                        </div>
                                        <div class="grid grid-cols-2">
                                            <div class="px-4 py-2 font-semibold">Permanant Address</div>
                                            <div class="px-4 py-2">Bhopal</div>
                                        </div>
                                        <div class="grid grid-cols-2">
                                            <div class="px-4 py-2 font-semibold">Email.</div>
                                            <div class="px-4 py-2">
                                                <a class="text-blue-800" href={`mailto:${user.email}`}>{user.email}</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Profile