import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Cookies from 'universal-cookie/es6'
import axios from 'axios'


const ShowEntry = () => {
    const history = useNavigate();
    const cookies = new Cookies();
    const [data, setData] = useState([])
    useEffect(() => {
        if (!cookies.get('token')) {
            history('/login');
        }
        axios.post('https://b06-404-not-found.vercel.app/record/data_all', {}, {
            headers: {
                'Content-Type': 'application/json',
                'auth-token': cookies.get('token')
            }
        }).then((res) => {
            if (res.data.status === 'success') {
                setData(res.data.data)
            }
        })
    }, [])
    return (
        <><div class="container px-6 py-16 mx-auto">
            <div class="items-center lg:flex">
                <div class="w-full lg:w-1/2">
                    <div class="lg:max-w-lg">
                        <h1 class="text-3xl font-semibold text-gray-800 dark:text-white lg:text-4xl">Your hostel movement data goes here.</h1>

                        <p class="mt-4 text-gray-600 dark:text-gray-400">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro beatae error laborum ab amet sunt recusandae? Reiciendis natus perspiciatis optio.</p>

                        <button onClick={() => {
                            history('/entry')
                        }} class="w-full px-5 py-2 mt-6 text-sm tracking-wider text-white uppercase transition-colors duration-300 transform bg-blue-600 rounded-md lg:w-auto hover:bg-blue-500 focus:outline-none focus:bg-blue-500">Show Entry QR</button>

                        <button onClick={() => {
                            history('/exit')
                        }} class="ml-5 w-full px-5 py-2 mt-6 text-sm tracking-wider text-white uppercase transition-colors duration-300 transform bg-blue-600 rounded-md lg:w-auto hover:bg-blue-500 focus:outline-none focus:bg-blue-500">Show Exit QR</button>
                    </div>
                </div>

                <div class="flex items-center justify-center w-full mt-6 lg:mt-0 lg:w-1/2 rounded-xl">
                    <img class="w-full h-full lg:max-w-xl rounded-xl" src="https://images.unsplash.com/photo-1591814116567-0ec18eabcf1b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMDg4MDd8MHwxfHNlYXJjaHwxNXx8V2FuZGVyaW5nfGVufDB8fHx8MTY3MDA5OTEzMg&ixlib=rb-4.0.3&q=80&w=1080" alt="Catalogue-pana.svg" />
                </div>
            </div>
        </div>
            <div className="flex justify-around mt-6">
                <div class="overflow-x-auto relative">

                    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                <th scope="col" class="py-3 px-6">
                                    Scholar No
                                </th>
                                <th scope="col" class="py-3 px-6">
                                    Type
                                </th>
                                <th scope="col" class="py-3 px-6">
                                    Entry Time
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {data && data.map((user) => {
                                return (
                                    <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                        <th scope="row" class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                            {user.scholarId}
                                        </th>
                                        <td class="py-4 px-6">
                                            {user.type}
                                        </td>
                                        <td class="py-4 px-6">
                                            {(new Date(user.time)).toDateString() + ' ' + (new Date(user.time)).toLocaleTimeString()}
                                        </td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>

            </div></>
    )
}

export default ShowEntry