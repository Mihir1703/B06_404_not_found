import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Cookies from 'universal-cookie/es6'
import axios from 'axios'
import Swal from 'sweetalert2'

const NoticeForm = () => {
    const history = useNavigate();
    const cookies = new Cookies();
    const handleSubmit = async (e) => {
        e.preventDefault();
        let data = new FormData(e.target);
        console.log({ title:data.get('title'), description:data.get('description') });
        await axios.post('https://b06-404-not-found.vercel.app/notice/add', { title:data.get('title'), description:data.get('description') }, {
            headers: {
                'auth-token': cookies.get('token')
            }
        }).then((response) => {
            if (response.data.status == 'success') {
                Swal.fire({
                    title: 'Success',
                    text: 'Notice added successfully',
                    icon: 'success',
                }).then(() => {})
                history('/notice');
            } else {
                history('/login');
            }
        })
    }
    return (
        <><section id="registration-form"
            class="anim my-12 max-w-4xl p-6 mx-auto bg-white  rounded-xl shadow-lg dark:bg-gray-800">
            <h2 class="text-3xl text-center font-Roboto text-gray-700 capitalize dark:text-white font-semibold">Notice
            </h2>

            <form id="registration" onSubmit={handleSubmit}>
                <div>
                    <label class="text-gray-700 dark:text-gray-200"
                        for="email">Title</label>
                    <input required
                        name="title"
                        id="title"
                        class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"/>
                </div>
                <label for="message" class="text-gray-700 dark:text-gray-200">Description</label>
                <textarea id="message" name='description' rows="4" class="p-4 block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write notice here..."></textarea>
                <div class="flex justify-end mt-6">
                    <button type="submit"
                        class="px-6 py-2 leading-5 text-white transition-colors duration-200 transform bg-gray-700 shadow-lg hover:shadow-xl rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">Create</button>
                </div>
            </form>
        </section></>
    )
}

export default NoticeForm