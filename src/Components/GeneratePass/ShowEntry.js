import React,{useEffect,useState} from 'react'
import { useNavigate } from 'react-router-dom'
import Cookies from 'universal-cookie/es6'
import axios from 'axios'


const ShowEntry = () => {
    const history = useNavigate();
    const cookies = new Cookies();
    const [data,setData] = useState([])
    useEffect(() => {
        if (!cookies.get('token')) {
            history('/login');
        }
        axios.post('/record/data_all', {}, {
            headers: {
                'Content-Type': 'application/json',
                'auth-token': cookies.get('token')
            }
        }).then((res)=>{
            if(res.data.status === 'success'){
                setData(res.data.data)
            }
        })
    },[])
  return (
    <><h3 class="text-3xl text-gray-800 dark:text-white lg:text-3xl text-center">Your Movement History</h3>
    <div className="flex justify-around mt-6">
            <div class="overflow-x-auto relative">
        
                <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" class="py-3 px-6">
                                Scholar No
                            </th>
                            <th scope="col" class="py-3 px-6">
                                Type
                            </th>
                            <th scope="col" class="py-3 px-6">
                                Entry Time
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {data && data.map((user) => {
                            return (
                                <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                    <th scope="row" class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        {user.scholarId}
                                    </th>
                                    <td class="py-4 px-6">
                                        {user.type}
                                    </td>
                                    <td class="py-4 px-6">
                                        {(new Date(user.time)).toDateString() + ' ' + (new Date(user.time)).toLocaleTimeString()}
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>

        </div></>
  )
}

export default ShowEntry