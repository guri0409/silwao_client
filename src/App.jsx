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
import FullCustomize from './Components/FullCustomize'
import Wishlist from './Components/Wishlist'
import Cart from './Components/Cart'
import ProductDetailPage from './Components/ProductDetailPage'

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
      <Route path='/fully-customize' element={<FullCustomize/>}></Route>
      <Route path='/wishlist' element={<Wishlist/>}></Route>
      <Route path='/cart' element={<Cart/>}></Route>
      <Route path='/product-detail' element={<ProductDetailPage/>}></Route>

     </Routes>
    </>
  )
}

export default App
