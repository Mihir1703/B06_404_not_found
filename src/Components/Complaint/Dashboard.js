import React, { useEffect, useState } from 'react'
import { Navbar } from '../Navbar'
import { useNavigate } from 'react-router-dom'
import Cookies from 'universal-cookie/es6'
import axios from 'axios'
import Swal from 'sweetalert2'

const Dashboard = () => {
    const history = useNavigate();
    const cookies = new Cookies();
    const [complaints, setComplaints] = useState(undefined);
    const [loading, setLoading] = useState(true);
    const fetchComplaints = async () => {
        await axios.post('/complaint/get', {}, {
            headers: {
                'auth-token': cookies.get('token')
            }
        }).then((response) => {
            if (response.data.status == 'success') {
                setComplaints(response.data);
                setLoading(false);
            } else {
                history('/login');
            }
            console.log(response.data);
        })
    }
    useEffect(() => {
        if (cookies.get('admin') === true) {
            console.log(cookies.get('admin'), 'Admin hu mai');
            history('/');
            return;
        }
        if (!cookies.get('token')) {
            history('/login');
        }
        fetchComplaints();
    }, [])
    return (
        <>
            <div class="container px-6 py-16 mx-auto text-center bg-white">
                <div class="max-w-lg mx-auto">
                    <h1 class="text-3xl font-semibold text-gray-800 dark:text-white lg:text-4xl">View Pending Complaints in your hostel.</h1>

                    <p class="mt-6 text-gray-500 dark:text-gray-300">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero similique obcaecati illum mollitia.
                    </p>


                </div>
            </div>
            <div class="flex justify-between m-5">
                <h3 class="text-4xl text-gray-800 dark:text-white lg:text-4xl">Pending Complaints</h3>
                <button
                    class="flex items-center px-4 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-black rounded-lg hover:black focus:outline-none ">
                    <i class="fa-sharp fa-solid fa-plus"></i>

                    <span onClick={
                        () => {
                            history('/complaint/new')
                        }
                    } class="mx-1">Make New Complaint</span>
                </button>
            </div>
            <div class="flex flex-wrap items-center justify-around">

                {
                    (complaints && complaints.complaints.map((complaint, index) => (
                        <div key={index} class="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 m-5 w-1/3 grid place-items-center"
                            style={{
                                minHeight: '256px'
                            }}>
                            <a href="#">
                                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{complaint.title}</h5>
                            </a>
                            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{complaint.content}</p>
                            <a href="#" onClick={() => {
                                axios.post('/complaint/upvote', {
                                    complaintId: complaint._id
                                }, {
                                    headers: {
                                        'auth-token': cookies.get('token'),
                                        'Content-Type': 'application/json'
                                    }
                                }).then((response) => {
                                    Swal.fire({
                                        title: 'Success',
                                        text: "Upvoted Successfully",
                                        icon: 'success',
                                        confirmButtonText: 'Ok'
                                    }).then(() => {
                                        fetchComplaints();
                                    })
                                })
                            }}
                                class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-black rounded-lg hover:bg-black focus:ring-4 focus:outline-none ">
                                Upvote {complaint.upvotes}
                            </a>
                        </div>
                    )))
                }

            </div></>
    )
}

export default Dashboard