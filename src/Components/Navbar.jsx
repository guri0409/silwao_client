import React from 'react'
import house from '/public/images/house.png'
import {Link} from 'react-router-dom'
import bell from '/public/images/bell.png'
import onlineshoping from '/public/images/online-shopping.png'
import woman from '/public/images/woman.png'


export default function Navbar() {
  return (
   <>
    <div className='bg-blue-500 h-14 flex justify-center items-center gap-1'>
        <form action="" className=''>
            <input type="text" placeholder='Search' className='p-2 rounded-full'/> 
            
        </form>
        <Link to="/signup-page">Signup</Link>
        <Link to="/login-page">Login</Link>
    </div>

        <ul className='flex justify-center gap-3 items-center bg-gray-500 h-14 space-x-10 text-white'>
            <li><Link to="/"><img src={house} alt="" srcset="" className='w-12 h-12'/></Link></li>
            <li ><Link to="/profile"><img src={woman} className='w-12 h-12' alt="" srcset="" /></Link></li>
            <li><Link to="/notification"><img src={bell} className='h-12 w-12' alt="" /></Link></li>
            <li><img src={onlineshoping}className='h-12 w-12' alt="" /></li>
        </ul>
   
   </>
  )
}
