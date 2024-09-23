import React from 'react'
import Navbar from './Navbar'

export default function LoginPage() {
  return (
    <>
        <Navbar/>
        <form action="" method="post" className='m-auto w-[80%] gap-5 mt-16'>
         
           <p className='flex flex-col gap-1 my-5'>
           <label htmlFor="">Email</label>
           <input type="text" placeholder='Email' className='p-2 border' />
           </p>
            <p className='flex flex-col gap-1'>
            <label htmlFor="">Paasword</label>
            <input type="password" placeholder='Password' className='p-2 border' />
            </p>
            <p className='flex justify-center'>
                <button type="submit" className='h-10 w-20 bg-sky-400 text-sm rounded-md mt-2'>Login</button>
            </p>
        </form>
    </>
  )
}
