import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/layouts/Navbar'
import Home from './components/pages/Home'
import Login from './components/pages/Login'
import SignUp from './components/pages/SignUp'
import UserInfo from './components/pages/UserInfo'

function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='login' element={<Login />} />
        <Route path='register' element={<SignUp />} />
        <Route path='user_info' element={<UserInfo />} />
      </Routes>
    </>
  )
}

export default App