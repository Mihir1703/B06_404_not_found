import React from 'react'
import { useNavigate } from 'react-router-dom'

const UserDashboard = () => {
    const history = useNavigate();
    return (
        <>
            <div class="container px-6 py-16 mx-auto text-center">
                <div class="max-w-lg mx-auto">
                    <h1 class="text-3xl font-semibold text-gray-800 dark:text-white lg:text-4xl">Hostel Management System</h1>
                    <p class="mt-6 text-gray-500 dark:text-gray-300">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero similique
                        obcaecati illum mollitia.</p>
                    <button class="px-6 py-2.5 mt-6 text-sm font-medium leading-5 text-center text-white capitalize bg-blue-600 rounded-lg hover:bg-blue-500 lg:mx-0 lg:w-auto focus:outline-none">
                        <a href='#dashboard'>Go to dashboard</a>
                    </button>
                </div>

                <div class="flex justify-center mt-10">
                    <img class="object-cover w-full h-96 rounded-xl lg:w-4/5" src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80" />
                </div>
            </div>
            <section class="text-gray-600 body-font" id='dashboard'>
                <div class="container px-5 py-24 mx-auto">
                    <div class="flex flex-wrap -m-4">
                        <div class="p-4 lg:w-1/4">
                            <div
                                class="border-4 h-full bg-gray-100 bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
                                <div class="grid place-items-center mb-2"><img
                                    src="https://img.icons8.com/external-photo3ideastudio-lineal-photo3ideastudio/64/null/external-hostel-building-photo3ideastudio-lineal-photo3ideastudio.png" />
                                </div>

                                <h1 class="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">New Room Allotment
                                </h1>
                                <p class="leading-relaxed mb-3">Allotment of hostels for new users.</p>
                                <a onClick={() => {
                                    history('/allotRoom');
                                }} class="text-indigo-500 inline-flex items-center cursor-pointer">Click Here
                                    <svg class="w-4 h-4 ml-2"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        stroke-width="2"
                                        fill="none"
                                        stroke-linecap="round"
                                        stroke-linejoin="round">
                                        <path d="M5 12h14"></path>
                                        <path d="M12 5l7 7-7 7"></path>
                                    </svg>
                                </a>
                            </div>
                        </div>
                        <div class="p-4 lg:w-1/4">
                            <div
                                class="border-4 h-full bg-gray-100 bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
                                <div class="grid place-items-center mb-2"><img src="https://img.icons8.com/dotty/80/null/user.png" />
                                </div>
                                <h1 class="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">View Profile</h1>
                                <p class="leading-relaxed mb-3">View your information present in the database.
                                </p>
                                <a onClick={() => {
                                    history('/profile')
                                }} class="text-indigo-500 inline-flex items-center cursor-pointer">Click Here
                                    <svg class="w-4 h-4 ml-2"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        stroke-width="2"
                                        fill="none"
                                        stroke-linecap="round"
                                        stroke-linejoin="round">
                                        <path d="M5 12h14"></path>
                                        <path d="M12 5l7 7-7 7"></path>
                                    </svg>
                                </a>
                            </div>
                        </div>
                        <div class="p-4 lg:w-1/4">
                            <div
                                class="border-4 h-full bg-gray-100 bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
                                <div class="grid place-items-center mb-2"><img
                                    src="https://img.icons8.com/external-icongeek26-outline-icongeek26/64/null/external-Customer-Care-Chat-e-commerce-icongeek26-outline-icongeek26.png" />
                                </div>

                                <h1 class="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">Make a Complaint</h1>
                                <p class="leading-relaxed mb-3">File complaint regarding any unsatisfactory work in the hostels.
                                </p>
                                <a onClick={() => {
                                    history('/complaint')
                                }} class="text-indigo-500 inline-flex items-center cursor-pointer">Click Here
                                    <svg class="w-4 h-4 ml-2"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        stroke-width="2"
                                        fill="none"
                                        stroke-linecap="round"
                                        stroke-linejoin="round">
                                        <path d="M5 12h14"></path>
                                        <path d="M12 5l7 7-7 7"></path>
                                    </svg>
                                </a>
                            </div>
                        </div>

                        <div class="p-4 lg:w-1/4">
                            <div
                                class="border-4 h-full bg-gray-100 bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
                                <div class="grid place-items-center mb-2"><img src="https://img.icons8.com/external-kiranshastry-lineal-kiranshastry/64/null/external-id-card-interface-kiranshastry-lineal-kiranshastry.png" />
                                </div>
                                <h1 class="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">Gate Pass</h1>
                                <p class="leading-relaxed mb-3">Generate gate pass for staying out for longer durations.
                                </p>
                                <a onClick={() => {
                                    history('/exit')
                                }} class="text-indigo-500 inline-flex items-center cursor-pointer">Click Here for exit pass
                                    <svg class="w-4 h-4 ml-2"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        stroke-width="2"
                                        fill="none"
                                        stroke-linecap="round"
                                        stroke-linejoin="round">
                                        <path d="M5 12h14"></path>
                                        <path d="M12 5l7 7-7 7"></path>
                                    </svg>
                                </a>
                                <a onClick={() => {
                                    history('/entry')
                                }} class="text-indigo-500 inline-flex items-center cursor-pointer">Click Here for entry pass
                                    <svg class="w-4 h-4 ml-2"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        stroke-width="2"
                                        fill="none"
                                        stroke-linecap="round"
                                        stroke-linejoin="round">
                                        <path d="M5 12h14"></path>
                                        <path d="M12 5l7 7-7 7"></path>
                                    </svg>
                                </a>
                                <a onClick={() => {
                                    history('/pass_data')
                                }} class="text-indigo-500 inline-flex items-center cursor-pointer">Click Here for your history
                                    <svg class="w-4 h-4 ml-2"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        stroke-width="2"
                                        fill="none"
                                        stroke-linecap="round"
                                        stroke-linejoin="round">
                                        <path d="M5 12h14"></path>
                                        <path d="M12 5l7 7-7 7"></path>
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default UserDashboard