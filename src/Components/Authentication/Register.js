import * as React from 'react';
import Cookies from 'universal-cookie/es6'
import axios from 'axios';
import { useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const MySwal = withReactContent(Swal);
const authPage = 'https://i.pinimg.com/564x/51/3e/c4/513ec462f93906e218867fd3c8bb79b6.jpg';

const Register = () => {

  useEffect(() => {
    if (cookies.get('token')) {
      history('/');
    }
  })

  const cookies = new Cookies();
  const history = useNavigate();
  const handleSubmit = async (event) => {
    event.preventDefault();
    let data = new FormData(event.currentTarget);
    if (data.get('password') !== data.get('c_password')) {
      MySwal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Passwords do not match',
      }).then(() => {
        MySwal.close();
      })
      return;
    }
    data = {
      firstName: data.get('firstName'),
      lastName: data.get('lastName'),
      email: data.get('email'),
      password: data.get('password'),
      scholarId: data.get('scholarID'),
      year: data.get('year'),
      mobileNumber: data.get('mobile'),
    }
    console.log(data);
    let req = await axios.post('/user/register', data);
    let json = await req.data;
    if (json.status === 'success') {
      cookies.set('token', json.token);
      history('/');
    } else {
      MySwal.fire({
        icon: 'error',
        title: 'Oops...',
        text: json.message,
      }).then(() => {
        MySwal.close();
      })
    }
  }
  return (
    <div class="container mx-auto">
      <div class="flex justify-center px-6 my-12">
        <div class="w-full xl:w-3/4 lg:w-11/12 flex">
          <div class="w-full h-auto bg-gray-400 hidden lg:block lg:w-5/12 bg-cover rounded-l-lg"
            style={{ backgroundImage: `url(${authPage})` }}></div>
          <div class="w-full lg:w-7/12 bg-white p-5 rounded-lg lg:rounded-l-none">
            <h3 class="pt-4 text-3xl text-center"><strong>Create an Account!</strong></h3>
            <form class="px-8 pt-6 pb-8 mb-4 bg-white rounded" onSubmit={handleSubmit}>
              <div class="mb-4 md:flex md:justify-between">
                <div class="mb-4 md:mr-2 md:mb-0">
                  <label class="block mb-2 text-sm font-bold text-gray-700" for="firstName">
                    First Name
                  </label>
                  <input
                    class="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline" name='firstName'
                    id="firstName" type="text" placeholder="First Name" />
                </div>
                <div class="md:ml-2">
                  <label class="block mb-2 text-sm font-bold text-gray-700" for="lastName">
                    Last Name
                  </label>
                  <input
                    class="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline" name='lastName'
                    id="lastName" type="text" placeholder="Last Name" />
                </div>
              </div>
              <div class="mb-4">
                <label class="block mb-2 text-sm font-bold text-gray-700" for="email">
                  ScholarID
                </label>
                <input
                  class="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline" name='scholarID'
                  id="scholarid" type="number" placeholder="000000000" />
              </div>
              <div class="mb-4">
                <label class="block mb-2 text-sm font-bold text-gray-700" for="email">
                  Email
                </label>
                <input
                  class="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline" name='email'
                  id="email" type="email" placeholder="Email" />
              </div>
              <div class="mb-4">
                <label class="block mb-2 text-sm font-bold text-gray-700" for="email">
                  Mobile Number
                </label>
                <input
                  class="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline" name='mobile'
                  id="mob" type="number" placeholder="Mobile No." />
              </div>
              <div class="my-5">
                <label class="my-5 text-gray-700 dark:text-gray-200 text-xl"
                  for="invest">Year of Study</label>

                <fieldset class="my-3" id="fields-pay">
                  <div class="flex items-center my-4">
                    <input id="country-option-1"
                      type="radio"
                      name="year"
                      value="1"
                      class="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:bg-gray-700 dark:border-gray-600"
                      aria-labelledby="country-option-3"
                      aria-describedby="country-option-3" />
                    <label for="country-option-3"
                      class="block ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                      1
                    </label>
                  </div>
                  <div class="flex items-center my-4">
                    <input id="country-option-${index + 1}"
                      type="radio"
                      name="year"
                      value="2"
                      class="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:bg-gray-700 dark:border-gray-600"
                      aria-labelledby="country-option-3"
                      aria-describedby="country-option-3" />
                    <label for="country-option-3"
                      class="block ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                      2
                    </label>
                  </div>
                  <div class="flex items-center my-4">
                    <input id="country-option-${index + 1}"
                      type="radio"
                      name="year"
                      value="3"
                      class="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:bg-gray-700 dark:border-gray-600"
                      aria-labelledby="country-option-3"
                      aria-describedby="country-option-3" />
                    <label for="country-option-3"
                      class="block ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                      3
                    </label>
                  </div>
                  <div class="flex items-center my-4">
                    <input id="country-option-${index + 1}"
                      type="radio"
                      name="year"
                      value="4"
                      class="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:bg-gray-700 dark:border-gray-600"
                      aria-labelledby="country-option-3"
                      aria-describedby="country-option-3" />
                    <label for="country-option-3"
                      class="block ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                      4
                    </label>
                  </div>
                </fieldset>

              </div>
              <div class="mb-4 md:flex md:justify-between">
                <div class="mb-4 md:mr-2 md:mb-0">
                  <label class="block mb-2 text-sm font-bold text-gray-700" for="password">
                    Password
                  </label>
                  <input
                    class="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline" name='password'
                    id="password" type="password" placeholder="******************" />
                </div>
                <div class="md:ml-2">
                  <label class="block mb-2 text-sm font-bold text-gray-700" for="c_password">
                    Confirm Password
                  </label>
                  <input
                    class="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                    name='c_password'
                    id="c_password" type="password" placeholder="******************" />
                </div>
              </div>
              <div class="mb-6 text-center">
                <button
                  class="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700 focus:outline-none focus:shadow-outline"
                  type="submit">
                  Register Account
                </button>
              </div>
              <hr class="mb-6 border-t" />
              <div class="text-center">
                <a class="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800"
                  href="/login">
                  Already have an account? Login!
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Register