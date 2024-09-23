import React from 'react'
import Navbar from './Navbar'
import profilepic from '/public/images/images.jpeg'
import {Link} from 'react-router-dom'

export default function
  () {
  return (
    <>
      <Navbar />
      <div className='flex flex-col items-center mt-10'>
        <img src={profilepic} className='rounded-full w-32 h-32' alt="" />
        <div className='flex justify-center gap-5 my-5'>
          <Link class='h-10 w-20 bg-sky-400 text-sm rounded-md mt-2 p-3' to="/orders">Orders</Link>
          <Link class='h-10 w-20 bg-sky-400 text-sm rounded-md mt-2 p-3'>Wishlist</Link>
        </div>
      </div>
      <div className='w-[80%] flex flex-col m-auto gap-5'>
        <div>
          <p className='text-2xl font-semibold'>Name:</p>
          <h3 className='text-xl'>Amritpal Singh Somal</h3>
        </div>
        <div>
          <p className='text-2xl font-semibold'>Email:</p>
          <h3 className='text-xl'>amrithood@majatri.com</h3>
        </div>
        <div>
          <p className='text-2xl font-semibold'>Phone:</p>
          <h3 className='text-xl'>0010011111</h3>
        </div>
      </div>
    </>
  )
}
