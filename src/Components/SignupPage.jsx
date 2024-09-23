import React, { useState } from 'react'
import Navbar from './Navbar'
import { Link } from 'react-router-dom'

export default function SignupPage() {

  const [showPassword , setShowPassword] = useState(false)
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword)
  }
  return (
    <>
    <Navbar/>
        <form action="" method="post" className='m-auto w-[80%] gap-5 mt-16'>
            <p className='flex flex-col gap-1 my-5'><label htmlFor="">Name</label>
            <input type="text" placeholder='Enter your name' className='p-2 border' name="" id="" /></p>
           <p className='flex flex-col gap-1 my-5'>
           <label htmlFor="">Email</label>
           <input type="text" placeholder='Enter you email' className='p-2 border'/>
           </p>
            <p className='flex flex-col gap-1'>
            <label htmlFor="">Paasword</label>
            <input type={showPassword ? "text" : "password"} placeholder='Password' className='p-2 border' />
            <span className="text-sm cursor-pointer" onClick={togglePasswordVisibility}>
            {showPassword ? "Hide" : "Show"}
          </span>
            </p>
            <p className='flex justify-center'>
            <Link class='h-10 w-20 bg-sky-400 text-sm rounded-md mt-2 p-3' to="/verify-account">Signup</Link>
            </p>
        </form>
    </>
  )
}
