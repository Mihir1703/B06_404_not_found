import React from 'react'
import { useNavigate } from 'react-router-dom'

const UserDashboard = () => {
    const history = useNavigate();
  return (
    <>
        <section class="text-gray-600 body-font">
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
                        <a onClick={()=>{
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
                        <div class="grid place-items-center mb-2"><img src="https://img.icons8.com/dotty/80/null/user.png"/>
                        </div>
                        <h1 class="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">View Profile</h1>
                        <p class="leading-relaxed mb-3">View your information present in the database.
                        </p>
                        <a onClick={()=>{
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
                        <a onClick={()=>{
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
                        <div class="grid place-items-center mb-2"><img src="https://img.icons8.com/external-kiranshastry-lineal-kiranshastry/64/null/external-id-card-interface-kiranshastry-lineal-kiranshastry.png"/>
                        </div>
                        <h1 class="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">Gate Pass</h1>
                        <p class="leading-relaxed mb-3">Generate gate pass for staying out for longer durations.
                        </p>
                        <a class="text-indigo-500 inline-flex items-center cursor-pointer">Click Here
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