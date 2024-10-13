import React from 'react'
import Navbar from './Navbar'
import { Link } from 'react-router-dom';


export default function enter_measurement() {
  return (
    <>
      <Navbar />
      <h1 className='flex justify-center text-3xl font-extralighty'>Your Measurement</h1>
      <div className='flex justify-center gap-4'>

        <div class="inline-flex">
          <button class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-r">
            Shirt
          </button>
          <button class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l">
            Pent
          </button>

          <button class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-r">
            Additional(info)
          </button>
          <button class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-r">
            Upload
          </button>

        </div>
        
      </div>
      <h2 className='flex justify-center text-center'>
        Hand over your perfectly fitted stiched cloths at the time of pickup along with your unstiched cloths for perfect measurement
        </h2>
        <button class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded flex items-center">
  <svg class="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 0l-5 5h3v5h4V5h3l-5-5zm-8 15h16v2H2v-2z"/></svg>
  <span>Upload Image</span>
</button>




    </>
  )
}
