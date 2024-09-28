import React, { useState } from 'react';
import Navbar from './Navbar';
import white1 from '/images/one.png';
import white2 from '/images/two.png';
import white3 from '/images/three.png';
import { Link } from 'react-router-dom';
import buy from '/images/ordernow.jpeg'
import cart from '/images/addtocart.png'
import 'swiper/css';
import 'swiper/css/pagination';


import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';


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
      {/* 
      <div className="slider-container">

        <div className='flex justify-center mt-5'><img src={slides[currentSlide]} alt="Product Image" className='w-72 h-72' /></div>
  
      </div> */}


      <div className='w-72 m-auto mt-10'>
        <Swiper
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          <SwiperSlide><img src={white1} className='w-72 h-80' alt="" srcset="" /></SwiperSlide>
          <SwiperSlide><img src={white2} className='w-72 h-80' alt="" /></SwiperSlide>
          <SwiperSlide><img src={white3} className='w-72 h-80' alt="" /></SwiperSlide>
        </Swiper>
      </div>
      <hr class="w-[100%] h-1 my-2 border-0 rounded bg-blue-400" />
      <div className=' border-yellow-300 w-[80%] m-auto'>
        <p className='text-left'><span className='font-semibold '>Patiala shahi Suit !</span>
          white colour! knee leingth! bla bla bla and bla earth is round its all about you
        </p>
        <p className='font-bold'>₹1999/-</p>
      </div>
      <hr class="w-[100%] h-1 my-2 border-0 rounded bg-blue-400" />

      <div className='flex flex-col justify-center gap-5 my-5 items-center'>
        <Link class='' to="/orders"><img src={buy} className='h-20 w-[80%]' alt="" srcset="" /></Link>
        <Link class='' to="/orders"><img src={cart} className='h-20 w-[80%]' alt="" srcset="" /></Link>
      </div>

    </>
  );
}
