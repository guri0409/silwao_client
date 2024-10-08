import React, { useState } from 'react'
import Navbar from './Navbar'
import axios from 'axios'
import { Link} from 'react-router-dom'

export default function SignupPage() {

  const [showPassword , setShowPassword] = useState(false)
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword)
  }
  

  const submitHandler = (event) => {
    console.log("This function is called")
    event.preventDefault();
    const username = event.target.name.value 
    const email = event.target.email.value 
    const password = event.target.password.value 
    axios.post("http://192.168.1.13:8000/auth/",{
      username,email,password
    }).then((response)=>{
      console.log(response)
      window.location.href = "/login-page"
    }).catch(error => {
      console.log("the error is ==> ", error)
      console.log(error)
    })
  }
  return (
    <>
    <Navbar/>
        <form action="" onSubmit={submitHandler} className='m-auto w-[80%] gap-5 mt-16'>
            <p className='flex flex-col gap-1 my-5'><label htmlFor="">Name</label>
            <input type="text" placeholder='Enter your name' name="name" className='p-2 border'  id="" /></p>
           <p className='flex flex-col gap-1 my-5'>
           <label htmlFor="">Email</label>
           <input type="text" placeholder='Enter you email' name='email' className='p-2 border'/>
           </p>
            <p className='flex flex-col gap-1'>
            <label htmlFor="">Paasword</label>
            <input type={showPassword ? "text" : "password"} name='password' placeholder='Password' className='p-2 border' />
            <span className="text-sm cursor-pointer" onClick={togglePasswordVisibility}>
            {showPassword ? "Hide" : "Show"}
          </span>
            </p>
            <p className='flex justify-center'>
            {/* <Link class='h-10 w-20 bg-sky-400 text-sm rounded-md mt-2 p-3'>Signup</Link> */}
            <button type='submit' className='h-10 w-20 bg-sky-400 text-sm rounded-md mt-2'>Submit</button>
            </p>
        </form>
    </>
  )
}
