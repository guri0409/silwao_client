import React from 'react'
import house from '/public/images/house.png'
import {Link} from 'react-router-dom'
import bell from '/public/images/bell.png'
import onlineshoping from '/public/images/online-shopping.png'
import woman from '/public/images/woman.png'
import menu from '/images/menu.png'

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

        <ul className='flex justify-between gap-1 px-2 items-center bg-gray-500 h-14 space-x-10 text-white'>
            <li><Link to="/"><img src={house} alt="" srcset="" className='w-20 h-12'/></Link></li>
            <li ><Link to="/profile"><img src={woman} className='w-20 h-12' alt="" srcset="" /></Link></li>
            <li><Link to="/notification"><img src={bell} className='h-12 w-20' alt="" /></Link></li>
            <li><Link to="/cart"><img src={onlineshoping} className='h-12 w-20' alt="" /></Link></li>
            <li><Link to="/cart"><img src={menu} className='h-12 w-20' alt="" /></Link></li>
        </ul>
   
   </>
  )
}
