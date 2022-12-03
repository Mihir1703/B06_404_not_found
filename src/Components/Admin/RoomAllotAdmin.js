import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Cookies from 'universal-cookie/es6'
import axios from 'axios'
import Swal from 'sweetalert2'

const RoomAllotAdmin = () => {
    const history = useNavigate();
    const cookies = new Cookies();
    const [roomRequests, setRoomRequests] = useState(undefined);
    const fetchComplaints = async () => {
        await axios.post('/admin/room/request', {}, {
            headers: {
                'auth-token': cookies.get('token')
            }
        }).then((response) => {
            if (response.data.status == 'success') {
                setRoomRequests(response.data.data);
            } else {
                history('/login');
            }
        })
    }
    useEffect(() => {
        if (cookies.get('admin') == false || cookies.get('admin') == undefined) {
            history('/');
        }
        if (!cookies.get('token')) {
            history('/login');
        }
        fetchComplaints();
    }, [])
    return (
        <>
            <div class="container px-6 py-16 mx-auto text-center">
                <div class="max-w-lg mx-auto">
                    <h1 class="text-3xl font-semibold text-gray-800 dark:text-white lg:text-4xl">Here are some of the pending requests.</h1>

                    <p class="mt-6 text-gray-500 dark:text-gray-300">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero similique obcaecati illum mollitia.
                    </p>

                    
                </div>
                <div class="flex flex-wrap justify-around">
                    {
                        roomRequests && roomRequests.map((roomRequest, index) => (
                            <div key={index}
                                class="w-full max-w-md p-4 bg-white border rounded-lg shadow-md sm:p-8 dark:bg-gray-800 dark:border-gray-700 mt-8">
                                <div class="flow-root">
                                    <ul role="list"
                                        class="divide-y divide-gray-200 dark:divide-gray-700">
                                        <li class="py-3 sm:py-4">
                                            <div class="flex items-center space-x-4">
                                                <div class="flex-1 min-w-0">
                                                    <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
                                                        Name
                                                    </p>
                                                </div>
                                                <div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                                                    {roomRequest.name}
                                                </div>
                                            </div>
                                        </li>
                                        <li class="py-3 sm:py-4">
                                            <div class="flex items-center space-x-4">

                                                <div class="flex-1 min-w-0">
                                                    <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
                                                        Scholar ID
                                                    </p>
                                                </div>
                                                <div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                                                    {roomRequest.scholarId}
                                                </div>
                                            </div>
                                        </li>
                                        <li class="py-3 sm:py-4">
                                            <div class="flex items-center space-x-4">

                                                <div class="flex-1 min-w-0">
                                                    <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
                                                        Transaction ID
                                                    </p>
                                                </div>
                                                <div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                                                    {roomRequest.transactionId}
                                                </div>
                                            </div>
                                        </li>
                                        <li class="py-3 sm:py-4">
                                            <div class="flex items-center space-x-4">
                                                <div class="flex-1 min-w-0">
                                                    <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
                                                        Room Number
                                                    </p>
                                                </div>
                                                <div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                                                    {roomRequest.number}
                                                </div>
                                            </div>
                                        </li>
                                        <li class="py-3 grid place-items-center">
                                            <a onClick={() => {
                                                axios.post('/admin/allotRoom', {
                                                    id: roomRequest._id
                                                }, {
                                                    headers: {
                                                        'auth-token': cookies.get('token'),
                                                        'Content-Type': 'application/json'
                                                    }
                                                }).then((response) => {
                                                    if (response.data.status == 'success') {
                                                        Swal.fire({
                                                            icon: 'success',
                                                            title: 'Room Alloted',
                                                            text: 'Room Alloted Successfully',
                                                        })
                                                        fetchComplaints();
                                                    } else {
                                                        Swal.fire({
                                                            icon: 'error',
                                                            title: 'Error!!',
                                                            text: 'Something went wrong',
                                                        })
                                                    }
                                                })
                                            }}
                                                class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-black rounded-lg hover:bg-gray-900 focus:ring-4 focus:outline-none cursor-pointer">
                                                Accept
                                            </a>
                                        </li>

                                    </ul>
                                </div>

                            </div>
                        ))
                    }
                </div>
            </div>
                </>
            )
}

            export default RoomAllotAdmin