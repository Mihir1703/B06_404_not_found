import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Cookies from 'universal-cookie/es6'
import axios from 'axios'

const UserTable = () => {
    const history = useNavigate();
    const cookies = new Cookies();
    const [users, setUsers] = React.useState([]);
    const fetchUsers = async () => {
        let req = await axios.post('/admin/users', {}, {
            headers: {
                'Content-Type': 'application/json',
                'auth-token': cookies.get('token')
            }
        });
        let json = await req.data;
        if (json.status === 'success') {
            setUsers(json.data);
        }
    }
    useEffect(() => {
        if (!cookies.get('token')) {
            history('/login');
        }
        if (!cookies.get('admin') || cookies.get('admin') === false) {
            history('/');
        }
        fetchUsers();
    }, [])
    return (
        <div className="flex justify-around mt-6">
            <div class="overflow-x-auto relative">
                <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" class="py-3 px-6">
                                Name
                            </th>
                            <th scope="col" class="py-3 px-6">
                                Scholar No
                            </th>
                            <th scope="col" class="py-3 px-6">
                                Year
                            </th>
                            <th scope="col" class="py-3 px-6">
                                Room Number
                            </th>
                            <th scope="col" class="py-3 px-6">
                                Hostel
                            </th>
                            <th scope="col" class="py-3 px-6">
                                Phone No
                            </th>
                            <th scope="col" class="py-3 px-6">
                                Email
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {users && users.map((user) => {
                            console.log(user);
                            return (
                                <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                    <th scope="row" class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        {user.firstName + ' ' + user.lastName}
                                    </th>
                                    <td class="py-4 px-6">
                                        {user.scholarId}
                                    </td>
                                    <td class="py-4 px-6">
                                        {user.year}
                                    </td>
                                    <td class="py-4 px-6">
                                        {user.roomNumber === 0 ? 'Not Alloted' : user.roomNumber}
                                    </td>
                                    <td class="py-4 px-6">
                                        {user.hostelAlloted}
                                    </td>
                                    <td class="py-4 px-6">
                                        {user.mobileNumber}
                                    </td>
                                    <td class="py-4 px-6">
                                        {user.email}
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>

        </div>
    )
}

export default UserTable