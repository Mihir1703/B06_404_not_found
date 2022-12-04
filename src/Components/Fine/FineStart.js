import React,{useEffect,useState} from 'react'
import { useNavigate } from 'react-router-dom'
import Cookies from 'universal-cookie/es6'

const FineStart = () => {
    const history = useNavigate();
    const cookies = new Cookies();
    useEffect(() => {
        console.log(cookies.get('admin'));
        if (cookies.get('admin') === true) {
            window.location.href = '/admin/fineBoard';
        }
        if (!cookies.get('token')) {
            history('/login');
        }
    },[])
  return (
    <><div class="container px-6 py-16 mx-auto">
            <div class="items-center lg:flex">
                <div class="w-full lg:w-1/2">
                    <div class="lg:max-w-lg">
                        <h1 class="text-3xl font-semibold text-gray-800 dark:text-white lg:text-4xl">Your Fine goes here.</h1>

                        <p class="mt-4 text-gray-600 dark:text-gray-400">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro beatae error laborum ab amet sunt recusandae? Reiciendis natus perspiciatis optio.</p>

                        <button onClick={() => {
                            history('/paid_fines')
                        }} class="w-full px-5 py-2 mt-6 text-sm tracking-wider text-white uppercase transition-colors duration-300 transform bg-blue-600 rounded-md lg:w-auto hover:bg-blue-500 focus:outline-none focus:bg-blue-500">Show Paid Fines</button>

                        <button onClick={() => {
                            history('/pending_fines')
                        }} class="ml-5 w-full px-5 py-2 mt-6 text-sm tracking-wider text-white uppercase transition-colors duration-300 transform bg-blue-600 rounded-md lg:w-auto hover:bg-blue-500 focus:outline-none focus:bg-blue-500">Show Unpaid Fines</button>
                    </div>
                </div>

                <div class="flex items-center justify-center w-full mt-6 lg:mt-0 lg:w-1/2 rounded-xl">
                    <img class="w-full h-full lg:max-w-md rounded-xl" src="https://img.icons8.com/external-flaticons-lineal-color-flat-icons/320/000000/external-guilty-emotions-and-emotional-intelligence-flaticons-lineal-color-flat-icons.png" alt="Catalogue-pana.svg" />
                </div>
            </div>
        </div></>
  )
}

export default FineStart