import { useState } from 'react'
import Home from './Components/Home'
import './App.css'
import {Routes, Route} from 'react-router-dom'
import LoginPage from './Components/LoginPage'
import SignupPage from './Components/SignupPage'
import Profile from './Components/Profile'
import Notification from './Components/Notification'
import Orders from './Components/Orders'
import Otp from './Components/Otp'

function App() {
  
  return (
    <>
     <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/login-page' element={<LoginPage/>}></Route>
      <Route path='/signup-page' element={<SignupPage/>}></Route>
      <Route path='/profile' element={<Profile/>}></Route>
      <Route path='/notification' element={<Notification/>}></Route>
      <Route path='/verify-account' element={<Otp/>}></Route>
      <Route path='/orders' element={<Orders/>}></Route>

     </Routes>
    </>
  )
}

export default App
