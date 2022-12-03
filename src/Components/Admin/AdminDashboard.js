import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Cookies from 'universal-cookie/es6'
import axios from 'axios'

const AdminDashboard = () => {
  const [complaints, setComplaints] = React.useState(0);
  const [request, setrequest] = React.useState(0);
  const cookies = new Cookies();
  const history = useNavigate();
  const fetchComplaints = async () => {
    let req = await axios.post('/admin/dashboard', {}, {
      headers: {
        'Content-Type': 'application/json',
        'auth-token': cookies.get('token')
      }
    });
    let json = await req.data;
    console.log(json);
    if (json.status === 'success') {
      console.log(json);
      setComplaints(json.complaint_count);
      setrequest(json.room_allot_status);
    }
  }
  useEffect(() => {
    if (!cookies.get('token')) {
      history('/login');
    }
    if (!cookies.get('admin') || cookies.get('admin') === 'false') {
      history('/');
    }
    fetchComplaints();
  })
  return (
    <><section class="text-gray-600 body-font">
      <div class="container px-5 py-24 mx-auto">
        <div class="flex flex-wrap -m-4">

          <div class="p-4 lg:w-1/3">
            <div
              class="border-4 h-full bg-gray-100 bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
              <div class="grid place-items-center mb-2"><img src="https://img.icons8.com/external-smashingstocks-mixed-smashing-stocks/68/null/external-proposal-product-management-smashingstocks-mixed-smashing-stocks.png" />
              </div>

              <h1 class="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">Room Allotment Requests({request})</h1>
              <p class="leading-relaxed mb-3">Review all requests for room allotment made by students.
              </p>
              <a onClick={() => {
                history('/admin/roomRequest');
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
          <div class="p-4 lg:w-1/3">
            <div
              class="border-4 h-full bg-gray-100 bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
              <div class="grid place-items-center mb-2"><img src="https://img.icons8.com/dotty/80/null/crowd.png" />
              </div>

              <h1 class="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">View All Students
              </h1>
              <p class="leading-relaxed mb-3">View the list of all students who have signed up.</p>
              <a onClick={() => {
                history('/admin/user');
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
          <div class="p-4 lg:w-1/3">
            <div
              class="border-4 h-full bg-gray-100 bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
              <div class="grid place-items-center mb-2"><img
                src="https://img.icons8.com/external-icongeek26-outline-icongeek26/64/null/external-Customer-Care-Chat-e-commerce-icongeek26-outline-icongeek26.png" />
              </div>

              <h1 class="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">See All Complaints({complaints})  </h1>
              <p class="leading-relaxed mb-3">Review all complaints made by students.
              </p>
              <a class="text-indigo-500 inline-flex items-center cursor-pointer" onClick={() => {
                history('/admin/complaint')
              }}>Click Here
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

          <div class="p-4 lg:w-1/3">
            <div
              class="border-4 h-full bg-gray-100 bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
              <div class="grid place-items-center mb-2"><img src="https://img.icons8.com/external-sbts2018-outline-sbts2018/68/null/external-notice-basic-ui-elements-2.3-sbts2018-outline-sbts2018.png" />
              </div>
              <h1 class="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">Notice</h1>
              <p class="leading-relaxed mb-3">Create a notice for students.
              </p>
              <a onClick={() => {
                history('/admin/notice')
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
        </div>
      </div>
    </section></>
  )
}

export default AdminDashboard