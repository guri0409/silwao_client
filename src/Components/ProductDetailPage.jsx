import React, { useState } from 'react';
import Navbar from './Navbar';
import white1 from '/images/white1.jpg';
import white2 from '/images/white2.jpg';
import white3 from '/images/white3.jpg';
import { Link } from 'react-router-dom';
import buy from '/images/buy.png'
import cart from '/images/cart.png'

export default function ProductDetailPage() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [white1, white2, white3];

  const handlePrevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + slides.length) % slides.length);
  };

  const handleNextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

  return (
    <>
      <Navbar />

      <div className="slider-container">

        <div className='flex justify-center mt-5'><img src={slides[currentSlide]} alt="Product Image" className='w-72 h-72' /></div>
  
      </div>
      <hr class="w-[100%] h-1 my-2 border-0 rounded bg-blue-400"/>
      <div className=' border-yellow-300 w-[80%] m-auto'>
        <p className='text-left'><span className='font-semibold '>Patiala shahi Suit !</span>
         white colour! knee leingth! bla bla bla and bla earth is round its all about you
        </p>
        <p className='font-bold'>₹1999/-</p>
      </div>
        <hr class="w-[100%] h-1 my-2 border-0 rounded bg-blue-400"/>
      
        <div className='flex justify-center gap-5 my-5'>
          <Link class='' to="/orders"><img src={buy} className='h-20 w-20' alt="" srcset="" /></Link>
          <Link class='' to="/orders"><img src={cart} className='h-20 w-20' alt="" srcset="" /></Link>

        </div>

    </>
  );
}
