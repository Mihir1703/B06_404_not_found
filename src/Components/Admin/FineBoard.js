import React,{useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import Cookies from 'universal-cookie'

const FineBoard = () => {
    const history = useNavigate();
    const cookies = new Cookies();
    useEffect(() => {
        if(cookies.get('admin') == false || cookies.get('admin') == undefined){
            history('/fine');
        }
    })
  return (
    <>
            <div class="container px-6 py-16 mx-auto text-center bg-white">
                <div class="max-w-lg mx-auto">
                    <h1 class="text-3xl font-semibold text-gray-800 dark:text-white lg:text-4xl">Manage Fines Here..</h1>

                    <p class="mt-6 text-gray-500 dark:text-gray-300">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero similique obcaecati illum mollitia.
                    </p>


                </div>
            </div>
            <div class="flex justify-around m-5">
                <button
                    class="flex items-center px-4 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-black rounded-lg hover:black focus:outline-none ">
                    <i class="fa-sharp fa-solid fa-plus"></i>

                    <span onClick={
                        () => {
                            history('/admin/fineForm')
                        }
                    } class="mx-1">Create new Fine</span>
                </button>
                <button
                    class="flex items-center px-4 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-black rounded-lg hover:black focus:outline-none ">

                    <span onClick={
                        () => {
                            history('/admin/paidFines')
                        }
                    } class="mx-1">View Paid Fines</span>
                </button>
            </div></>
  )
}

export default FineBoard