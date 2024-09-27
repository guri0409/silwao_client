import React from 'react'
import Navbar from './Navbar'
import { Link } from 'react-router-dom'
import white1 from '/public/images/white1.jpg'
import white3 from '/public/images/white3.jpg'
import one from '/images/one.png'
import three from '/images/three.png'
import two from '/images/two.png'
import Customize from '/public/images/Customize.png'
import resize from '/public/images/Resize.png'

export default function Home() {
    return (
        <>
            <Navbar />
            <div className='overflow-x-auto '>
                <div className='inline-flex justify-start mt-8 items-center min-w-[640px]'>

                    <Link to="/product-detail">
                        <div className='flex flex-col items-center border gap-2'>
                            <img src={two} className='h-36 w-36 md:h-72 md:w-80' alt="" srcset="" />
                            <h2 className='text-1xl font-semibold'>PatialaShahi Suit</h2>
                            <h6>Price: <span>1199/- Rs.</span></h6>
                        </div>
                    </Link>
                    <Link>
                        <div className='flex flex-col items-center border gap-2'>
                            <img src={three} className='h-36 w-36 md:h-72 md:w-80' alt="" srcset="" />
                            <h2 className='text-1xl font-semibold'>PatialaShahi Suit</h2>
                            <h6>Price: <span>1199/- Rs.</span></h6>
                        </div>
                    </Link>
                    <Link>
                        <div className='flex flex-col items-center border gap-2'>
                            <img src={three} className='h-36 w-36 md:h-72 md:w-80' alt="" srcset="" />
                            <h2 className='text-1xl font-semibold'>PatialaShahi Suit</h2>
                            <h6>Price: <span>1199/- Rs.</span></h6>
                        </div>
                    </Link>


                </div>
            </div>
            <div className='flex justify-center mt-8 items-center gap-6'>

                <div className='flex flex-col items-center border gap-2'>
                    <img src={Customize} className='h-36 w-32 md:h-64 md:w-64' alt="" srcset="" />
                    <Link to="/fully-customize" className='h-10 w-20 bg-red-500 text-sm rounded-md text-center md:w-40'>Fully Customize</Link>
                </div>
                <div className='flex flex-col items-center border gap-2'>
                    <img src={resize} className='h-36 w-32 md:h-64 md:w-64' alt="" srcset="" />
                    <button className='h-10 w-20 bg-sky-400 text-sm rounded-md md:w-40'>Resize</button>
                </div>
            </div>
        </>
    )
}
