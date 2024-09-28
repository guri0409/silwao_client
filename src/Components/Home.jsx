import React from 'react'
import Navbar from './Navbar'
import { Link } from 'react-router-dom'
import white1 from '/public/images/white1.jpg'
import white3 from '/public/images/white3.jpg'
import one from '/images/one.png'
import three from '/images/three.png'
import two from '/images/two.png'
import Customize from '/images/Customize.png'
import resize from '/images/Resize.png'

export default function Home() {
  return (
    <>
      <Navbar />

      <div className="overflow-x-auto mt-5 no-scrollbar">
        <div className="flex gap-3 mx-3">
          <Link to="/product-detail">
            <div className="flex flex-col items-center border gap-1 min-w-28 rounded-md shadow-xl ">
              <img src={two} className="h-24 w-[100%] md:h-72 md:w-80 rounded-md" alt="" srcset="" />
              <h6 className='text-sm font-semibold'>Patialashahi suit</h6>
              <h6 className='text-sm'>Price: <span>1199/- Rs.</span></h6>
            </div>
          </Link>
          <Link to="/product-detail">
            <div className="flex flex-col items-center border gap-1 min-w-28 rounded-md shadow-xl">
              <img src={one} className="h-24 w-[100%] md:h-72 md:w-80 rounded-md" alt="" srcset="" />
              <h6 className='text-sm font-semibold'>Patialashahi suit</h6>
              <h6 className='text-sm'>Price: <span>1199/- Rs.</span></h6>
            </div>
          </Link>
          <Link to="/product-detail">
            <div className="flex flex-col items-center border gap-1 min-w-28 rounded-md shadow-xl">
              <img src={three} className="h-24 w-[100%] md:h-72 md:w-80 rounded-md" alt="" srcset="" />
              <h6 className='text-sm font-semibold'>Patialashahi suit</h6>
              <h6 className='text-sm'>Price: <span>1199/- Rs.</span></h6>
            </div>
          </Link>
          <Link to="/product-detail">
            <div className="flex flex-col items-center border gap-1 min-w-28 rounded-md shadow-xl">
              <img src={two} className="h-24 w-[100%] md:h-72 md:w-80 rounded-md" alt="" srcset="" />
              <h6 className='text-sm font-semibold'>Patialashahi suit</h6>
              <h6 className='text-sm'>Price: <span>1199/- Rs.</span></h6>
            </div>
          </Link>
          <Link to="/product-detail">
            <div className="flex flex-col items-center border gap-1 min-w-28 rounded-md shadow-xl">
              <img src={two} className="h-24 w-[100%] md:h-72 md:w-80 rounded-md" alt="" srcset="" />
              <h6 className='text-sm font-semibold'>Patialashahi suit</h6>
              <h6 className='text-sm'>Price: <span>1199/- Rs.</span></h6>
            </div>
          </Link>
        </div>
        
      </div>
      <div className='flex justify-center mt-8 items-center gap-6 mx-3'>

        <div className='flex flex-col items-center gap-2 p-2 shadow-xl'>
          <img src={Customize} className='h-44 w-44 md:h-64 md:w-64' alt="" srcset="" />
          <Link to="/fully-customize" className='h-10 w-20 bg-red-500 text-sm rounded-md text-center md:w-40'>Fully Customize</Link>
        </div>
        <div className='flex flex-col items-center  gap-2 p-2 shadow-xl'>
          <img src={resize} className='h-44 w-44 md:h-64 md:w-64' alt="" srcset="" />
          <button className='h-10 w-20 bg-sky-400 text-sm rounded-md md:w-40'>Resize</button>
        </div>
      </div>
    </>
  )
}
