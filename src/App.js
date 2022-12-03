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

const routes = {
    '/signup': <Register />,
    '/login': <Login />,
    '/profile': <Profile />,
    '/complaint/new': <ComplaintForm />,
    '/complaint': <><Navbar/><Dashboard /></>,
    '/allotRoom': <><Navbar/><RoomAllot /></>,
    '/': <><Navbar/></>,
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