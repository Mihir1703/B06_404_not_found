import React,{useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import Cookies from 'universal-cookie/es6'
import Swal from 'sweetalert2'
import { Navbar } from '../Navbar'

const Form = () => {
    const cookies = new Cookies();
    const history = useNavigate();
    useEffect(() => {
        if (!cookies.get('token')) {
            history('/login');
        }
    })
    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = new FormData(e.target);
        const object = {
            title: data.get('title'),
            holderName: data.get('fname') + ' ' + data.get('lname'),
            content: data.get('content'),
            category: data.get('countries'),
        };
        axios.post('/complaint/add', object, {
            headers: {
                'Content-Type': 'application/json',
                'auth-token': cookies.get('token')
            }
        }).then((response) => {
            if(response.data.status == 'success'){
                Swal.fire({
                    title: 'Success',
                    text: response.data.message,
                    icon: 'success',
                    confirmButtonText: 'Ok'
                }).then(() => {
                    history('/');
                })
            }else{
                Swal.fire({
                    title: 'Error',
                    text: response.data.message,
                    icon: 'error',
                    confirmButtonText: 'Ok'
                })
            }
        })
    }
    return (
        <>
            <Navbar />
        <section id="registration-form"
            class="anim my-12 max-w-4xl p-6 mx-auto bg-white  rounded-xl shadow-lg dark:bg-gray-800">
            <h2 class="text-3xl text-center font-Roboto text-gray-700 capitalize dark:text-white font-semibold">Make a Complaint
            </h2>

            <form id="registration" onSubmit={handleSubmit}>
                <div class="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">

                    <div>
                        <label class="text-gray-700 dark:text-gray-200"
                            for="fname">First Name</label>
                        <input required
                            name="fname"
                            id="fname"
                            placeholder=""
                            type="text"
                            class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"/>
                    </div>
                    <div>
                        <label class="text-gray-700 dark:text-gray-200"
                            for="lname">Last Name</label>
                        <input required
                            name="lname"
                            id="lname"
                            placeholder=""
                            type="text"
                            class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"/>
                    </div>
                </div>

                <div>
                    <label class="text-gray-700 dark:text-gray-200"
                        for="email">Title</label>
                    <input required
                        name="title"
                        id="title"
                        class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"/>
                </div>
                <div class="my-5">
                    <label class="my-5 text-gray-700 dark:text-gray-200 text-xl"
                        for="invest">Type of Complaint</label>

                    <fieldset class="my-3" id="fields-pay">
                        <div class="flex items-center my-4">
                            <input id="country-option-1"
                                type="radio"
                                name="countries"
                                value="sanitation"
                                class="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:bg-gray-700 dark:border-gray-600"
                                aria-labelledby="country-option-3"
                                aria-describedby="country-option-3"/>
                                <label for="country-option-3"
                                    class="block ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                                    Sanitation
                                </label>
                        </div>
                        <div class="flex items-center my-4">
                            <input id="country-option-${index + 1}"
                                type="radio"
                                name="countries"
                                value="electricity"
                                class="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:bg-gray-700 dark:border-gray-600"
                                aria-labelledby="country-option-3"
                                aria-describedby="country-option-3"/>
                                <label for="country-option-3"
                                    class="block ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                                    Electricity
                                </label>
                        </div>
                        <div class="flex items-center my-4">
                            <input id="country-option-${index + 1}"
                                type="radio"
                                name="countries"
                                value="mess"
                                class="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:bg-gray-700 dark:border-gray-600"
                                aria-labelledby="country-option-3"
                                aria-describedby="country-option-3"/>
                                <label for="country-option-3"
                                    class="block ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                                    Mess
                                </label>
                        </div>
                        <div class="flex items-center my-4">
                            <input id="country-option-${index + 1}"
                                type="radio"
                                name="countries"
                                value="water"
                                class="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:bg-gray-700 dark:border-gray-600"
                                aria-labelledby="country-option-3"
                                aria-describedby="country-option-3"/>
                                <label for="country-option-3"
                                    class="block ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                                    Water
                                </label>
                        </div>
                        <div class="flex items-center my-4">
                            <input id="country-option-4"
                                type="radio"
                                name="countries"
                                value="others"
                                class="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:bg-gray-700 dark:border-gray-600"
                                aria-labelledby="country-option-3"
                                aria-describedby="country-option-3"/>
                                <label for="country-option-3"
                                    class="block ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                                    Others
                                </label>
                        </div>
                    </fieldset>

                </div>
                <label for="message" class="text-gray-700 dark:text-gray-200">Description</label>
                <textarea id="message" name='content' rows="4" class="block p-4 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write your thoughts here..."></textarea>
                <div class="flex justify-end mt-6">
                    <button type="submit"
                        class="px-6 py-2 leading-5 text-white transition-colors duration-200 transform bg-gray-700 shadow-lg hover:shadow-xl rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">Save</button>
                </div>
            </form>
        </section>
        </>

    )
}

export default Form