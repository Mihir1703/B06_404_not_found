import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Cookies from 'universal-cookie/es6'
import axios from 'axios'
import Swal from 'sweetalert2'

const PendingFines = () => {
    const history = useNavigate();
    const cookies = new Cookies();
    const [fines, setFines] = useState(undefined);
    const fetchComplaints = async () => {
        axios.post('/fine/view', {}, {
            headers: {
                'auth-token': cookies.get('token'),
                'Content-Type': 'application/json'
            }
        }).then((response) => {
            console.log(response.data);
            if (response.data.status == 'success') {
                setFines(response.data.fine);
            } else {
                history('/login');
            }
        })
    }
    useEffect(() => {
        fetchComplaints();
    }, [])
    return (
        <><div class="container px-6 py-16 mx-auto text-center bg-white">
            <div class="max-w-lg mx-auto">
                <h1 class="text-3xl font-semibold text-gray-800 dark:text-white lg:text-4xl">View Pending Fines on You.</h1>

                <p class="mt-6 text-gray-500 dark:text-gray-300">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero similique obcaecati illum mollitia.
                </p>


            </div>
        </div>
            <div class="flex justify-center m-5 ">
                <h3 class="text-4xl text-gray-800 dark:text-white lg:text-4xl">Pending Fines</h3>
            </div>
            <div class="flex flex-wrap items-center justify-around">

                {
                    (fines && fines.map((fine, index) => {
                        console.log(fine);
                        return (
                            <div key={index} class="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 m-5 w-1/3 grid place-items-center"
                                style={{
                                    minHeight: '256px'
                                }}>
                                <a href="#">
                                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Amount : {fine.amount}</h5>
                                </a>
                                <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{fine.reason}</p>
                                <div>
                                    <label class="text-gray-700 dark:text-gray-200" for="username">Transaction Id</label>
                                    <input id={`txn-${fine._id}`} type="text" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                                </div>
                                <a href="#" onClick={() => {
                                    axios.post('/fine/pay', {
                                        id: fine._id,
                                        transactionId: document.getElementById(`txn-${fine._id}`).value
                                    }, {
                                        headers: {
                                            'auth-token': cookies.get('token'),
                                            'Content-Type': 'application/json'
                                        }
                                    }).then((response) => {
                                        Swal.fire({
                                            title: 'Success',
                                            text: "Paid Successfully",
                                            icon: 'success',
                                            confirmButtonText: 'Ok'
                                        }).then(() => {
                                            fetchComplaints();
                                        })
                                    })
                                }}
                                    class="inline-flex mt-5 items-center px-3 py-2 text-sm font-medium text-center text-white bg-black rounded-lg hover:bg-black focus:ring-4 focus:outline-none ">
                                    Pay
                                </a>
                            </div>
                        )
                    }))
                }

            </div></>
    )
}

export default PendingFines