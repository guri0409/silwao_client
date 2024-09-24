import React, { useState } from 'react';
import Navbar from './Navbar';
import white1 from '/images/white1.jpg';
import white2 from '/images/white2.jpg';
import white3 from '/images/white3.jpg';

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
        <button onClick={handlePrevSlide}>Prev</button>
        <img src={slides[currentSlide]} alt="Product Image" />
        <button onClick={handleNextSlide}>Next</button>
      </div>
    </>
  );
}