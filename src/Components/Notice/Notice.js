import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Cookies from 'universal-cookie/es6';

const Notice = () => {
    const history = useNavigate();
    const cookies = new Cookies();
    const [notice, setnotice] = useState(undefined);
    const fetchComplaints = async () => {
        await axios.post('https://b06-404-not-found.vercel.app/notice/get', {}, {
            headers: {
                'auth-token': cookies.get('token')
            }
        }).then((response) => {
            if (response.data.status == 'success') {
                setnotice(response.data.data);
            } else {
                history('/login');
            }
            console.log(response.data);
        })
    }
    useEffect(() => {
        if (!cookies.get('token')) {
            history('/login');
        }
        fetchComplaints();
    }, [])
    return (
        <section class="text-gray-600 body-font">
            <div class="container px-5 py-24 mx-auto">
                <div class="flex flex-wrap -m-4">
                    {notice && notice.map((nt, index) => (
                        <div class="p-4 lg:w-1/3">
                            <div
                                class="max-w-2xl px-8 py-4 bg-white rounded-lg shadow-md dark:bg-gray-800 border-4 border-black h-full bg-opacity-75 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
                                <div class="mt-2">
                                    <h3 class="text-3xl text-gray-900">{nt.title}<div><img src="http://www.manit.ac.in/sites/all/themes/manit/images/new.gif" style={{
                                        position: 'absolute',
                                        transform: 'translateY(-142px) translateX(294px)',
                                        height: '20px',
                                    }} /></div></h3>
                                    <div class="grid items-center">
                                        <span class="text-sm font-light text-gray-900 dark:text-gray-900">{(new Date(nt.date)).toDateString()}</span>
                                    </div>
                                    <p class="mt-2 text-gray-600 dark:text-gray-300">{nt.description}</p>
                                </div>

                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Notice