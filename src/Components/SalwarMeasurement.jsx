import React from 'react'
import {Link} from 'react-router-dom'

export default function SalwarMeasurement() {
  return (
    <>
    <Navbar />
    <div>
      <ol className='flex gap-10 list-disc justify-center'>
        <li><Link to='/kmeez-measurement'>Kmeesz</Link> </li>
        <li>    <Link class='' to="/orders"></Link></li>
        <li><a href="">Additional</a></li>
      </ol>
      
    </div>
    <form action=""  className='m-auto w-[80%] gap-5 mt-16'>
    <p className='flex flex-col gap-1 my-5'><label htmlFor="">Name</label>
          <input type="text" placeholder='Enter your name' name="name" className='p-2 border'  id="" /></p>
          <p className='flex flex-col gap-1 my-5'><label htmlFor="">Name</label>
          <input type="text" placeholder='Enter your name' name="name" className='p-2 border'  id="" /></p>
          <p className='flex flex-col gap-1 my-5'><label htmlFor="">Name</label>
          <input type="text" placeholder='Enter your name' name="name" className='p-2 border'  id="" /></p>
          <p className='flex flex-col gap-1 my-5'><label htmlFor="">Name</label>
          <input type="text" placeholder='Enter your name' name="name" className='p-2 border'  id="" /></p>
        
    </form>
    

  </>
  )
}
