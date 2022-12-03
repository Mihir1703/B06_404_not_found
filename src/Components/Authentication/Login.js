import * as React from 'react';
import Cookies from 'universal-cookie/es6'
import axios from 'axios';
import { useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const MySwal = withReactContent(Swal);
const authPage = 'https://i.pinimg.com/564x/51/3e/c4/513ec462f93906e218867fd3c8bb79b6.jpg';

const Login = () => {
  const cookies = new Cookies();
  const history = useNavigate();
  useEffect(() => {
    if (cookies.get('token') != undefined) {
      history('/');
    }
  })
  const handleSubmit = async (event) => {
    event.preventDefault();
    let data = new FormData(event.currentTarget);
    data = {
      password: data.get('password'),
      scholarId: data.get('scholarID'),
    }
    let req = await axios.post('/user/login', data);
    let json = await req.data;
    if (json.status === 'success') {
      cookies.set('token', json.token);
      console.log(json);
      if (json.user.userType === 'admin') {
        cookies.set('admin', true);
        history('/admin/dashboard');
        return;
      }
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
            <h3 class="pt-4 text-3xl text-center"><strong>Log In</strong></h3>
            <form class="px-8 pt-6 pb-8 mb-4 bg-white rounded" onSubmit={handleSubmit}>
              <div class="mb-4">
                <label class="block mb-2 text-sm font-bold text-gray-700" for="email">
                  ScholarID
                </label>
                <input
                  class="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline" name='scholarID'
                  id="scholarid" type="number" placeholder="000000000" />
              </div>
              <div class="mb-4 md:mr-2 md:mb-0">
                <label class="block mb-2 text-sm font-bold text-gray-700" for="password">
                  Password
                </label>
                <input
                  class="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                  id="password" name='password' type="password" placeholder="******************" />
              </div>
              <hr class="mb-6 border-t" />
              <div class="mb-6 text-center">
                <button
                  class="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700 focus:outline-none focus:shadow-outline"
                  type="submit"
                >
                  Log In
                </button>
            <div class="text-center">
              <a class="inline-block mt-4 text-sm text-blue-500 align-baseline hover:text-blue-800"
                href="/signup">
                Create an account? Register!
              </a>
            </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login;