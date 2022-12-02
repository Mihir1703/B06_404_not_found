import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './Components/Authentication/Login'
import Register from './Components/Authentication/Register'
import Profile from './Components/Profile/Profile'

const routes = {
    '/signup': <Register />,
    '/login': <Login />,
    '/profile': <Profile />,
    '*': <></>
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