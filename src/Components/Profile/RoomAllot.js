import React, { useEffect } from 'react'
import axios from 'axios'
import Cookies from 'universal-cookie/es6'
import { useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'
const RoomAllot = () => {
    const cookies = new Cookies();
    const history = useNavigate();
    useEffect(() => {
        if (!cookies.get('token')) {
            history('/login');
        }
    }, [])
    const handleSubmit = async (e) => {
        e.preventDefault()
        const data = new FormData(e.target)
        const object = {
            transactionId: data.get('transactionId'),
        }
        if(data.get('terms') === null){
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Please accept the terms and conditions',
            }).then(() => {
                Swal.close();
            })
            return;
        }
        const req = await axios.post('/room/allot', object, {
            headers: {
                'Content-Type': 'application/json',
                'auth-token': cookies.get('token')
            }
        })
        const json = await req.data
        console.log(json)
        if (json.status === 'success') {
            Swal.fire({
                icon: 'success',
                title: 'Success',
                text: json.message,
            }).then(() => {
                history('/profile');
                Swal.close();
            })
        }else{
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: json.message,
            }).then(() => {
                Swal.close();
                history('/');
            })
        }
    }
    return (
        <section id="registration-form"
            class="anim my-12 max-w-4xl p-6 mx-auto bg-white  rounded-xl shadow-lg dark:bg-gray-800">
            <h2 class="text-3xl text-center font-Roboto text-gray-700 capitalize dark:text-white font-semibold">Room
                Allotment
            </h2>

            <form id="registration" onSubmit={handleSubmit}>
                <div>
                    <label class="text-gray-700 dark:text-gray-200"
                        for="email">Transaction ID</label>
                    <input required
                        name="transactionId"
                        id="title"
                        class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                </div>
                <div class="flex items-center mb-4 mt-4">
                    <input id="default-checkbox"
                        type="checkbox"
                        name='terms'
                        value="checked"
                        class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                    <label for="default-checkbox"
                        class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">I agree to all Terms &
                        Conditions specified in the Hostel Rulebook.</label>
                </div>
                <div class="flex justify-end mt-6">
                    <button type="submit"
                        class="px-6 py-2 leading-5 text-white transition-colors duration-200 transform bg-gray-700 shadow-lg hover:shadow-xl rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">Request</button>
                </div>
            </form>
        </section>
    )
}

export default RoomAllot