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
    useEffect(() => {
        if (!cookies.get('token')) {
            history('/signup');
        }
        axios.post('https://b06-404-not-found.vercel.app/user/profile', {}, {
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
        <section id="registration-form"
                class="anim my-12 max-w-4xl p-6 mx-auto bg-white  rounded-xl shadow-lg dark:bg-gray-800">
                <h2 class="text-3xl text-center font-Roboto text-gray-700 capitalize dark:text-white font-semibold">User Profile
                </h2>
                <div id="profile" class="grid place-items-center">
                    <img src={profile} alt="profile photo" />
                    <div class="p-3">
                        <h1 class="text-gray-900 font-bold text-3xl leading-8 my-1">
                            {user.firstName} {user.lastName}
                        </h1>
                        <h3 class="text-gray-600 font-xl text-semibold leading-6 grid place-items-center">
                            {user.userType === 'admin' ? 'Warden' : 'Student'}
                        </h3>
                    </div>
                </div>

                <form id="registration" >
                    <div class="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">

                        <div>
                            <label class="text-gray-700 dark:text-gray-200"
                                for="fname">First Name</label>
                            <input disabled
                                name="fname"
                                id="fname"
                                placeholder=""
                                type="text"
                                value={user.firstName}
                                class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                        </div>
                        <div>
                            <label class="text-gray-700 dark:text-gray-200"
                                for="lname">Last Name</label>
                            <input disabled
                                name="lname"
                                id="lname"
                                value={user.lastName}
                                placeholder=""
                                type="text"
                                class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                        </div>
                    </div>

                    <div>
                        <label class="text-gray-700 dark:text-gray-200"
                            for="email">Contact Number</label>
                        <input disabled
                            name="title"
                            id="title"
                            value={user.mobileNumber}
                            class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                    </div>
                    <div>
                        <label class="text-gray-700 dark:text-gray-200"
                            for="email">E-Mail</label>
                        <input disabled
                            name="title"
                            id="title"
                            value={user.email}
                            class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                    </div>
                    <div>
                        <label class="text-gray-700 dark:text-gray-200"
                            for="email">Current Address</label>
                        <input disabled
                            name="title"
                            id="title"
                            value={`Hostel No :${user.hostelAlloted}, Room No : ${user.roomNumber ? user.roomNumber : 'Not Alloted'}`}
                            class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                    </div>
                </form>
            </section>
        </>
    )
}

export default Profile