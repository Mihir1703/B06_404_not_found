import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './Components/Authentication/Login'
import Register from './Components/Authentication/Register'
import Profile from './Components/Profile/Profile'
import ComplaintForm from './Components/Complaint/Form'
import Dashboard from './Components/Complaint/Dashboard'
import { Navbar } from './Components/Navbar'
import RoomAllot from './Components/Profile/RoomAllot'
import Error from './Components/Error'
import Complaint from './Components/Admin/Complaint'
import AdminDashboard from './Components/Admin/AdminDashboard'
import RoomAllotAdmin from './Components/Admin/RoomAllotAdmin'
import Home from './Components/Home'
import Notice from './Components/Notice/Notice'
import NoticeForm from './Components/Admin/NoticeForm'
import UserDashboard from './Components/UserDashboard'
import UserTable from './Components/Admin/UserTable'
import Exit from './Components/GeneratePass/Exit'
import Entry from './Components/GeneratePass/Entry'
import ShowEntry from './Components/GeneratePass/ShowEntry'

const routes = {
    '/signup': <Register />,
    '/login': <Login />,
    '/profile': <Profile />,
    '/complaint/new': <ComplaintForm />,
    '/complaint': <><Navbar/><Dashboard /></>,
    '/allotRoom': <><Navbar/><RoomAllot /></>,
    '/': <><Navbar/><Home/><UserDashboard /></>,
    '/admin/complaint': <><Navbar/><Complaint /></>,
    '/admin/dashboard': <><Navbar/><AdminDashboard /></>,
    '/admin/roomRequest': <><Navbar/><RoomAllotAdmin /></>,
    '/notice': <><Navbar/><Notice/></>,
    '/admin/notice': <><Navbar/><NoticeForm/></>,
    '/admin/user': <><Navbar/><UserTable/></>,
    '/exit': <><Exit/></>,
    '/entry': <><Entry/></>,
    '/pass_data': <><Navbar/><ShowEntry/></>,
    '*': <><Error/></>
}

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                {
                    Object.keys(routes).map((route, index) => {
                        return (<Route key={index} path={route} element={routes[route]} />);
                    })
                }
            </Routes>
        </BrowserRouter>
    )
}

export default App