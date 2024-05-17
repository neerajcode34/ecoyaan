import React, { useState, useEffect } from 'react';
import './Slider.css';

function Slider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const images = ['https://ecoyaan.com/images/carousel-1.png', 'https://ecoyaan.com/images/carousel-2.png', 'https://ecoyaan.com/images/carousel-3.png']; // Replace with your image URLs
  const totalSlides = images.length;

  // Function to handle next slide
  const nextSlide = () => {
    setCurrentSlide((currentSlide + 1) % totalSlides);
  };


  const prevSlide = () => {
    setCurrentSlide((currentSlide - 1 + totalSlides) % totalSlides);
  };

  
  useEffect(() => {
    const interval = setInterval(nextSlide, 4000);
    return () => clearInterval(interval);
  }, [currentSlide]);

  return (
    <div className="slider-container">
      <div className="slider">
        {images.map((image, index) => (
          <div key={index} className={`slide ${index === currentSlide ? 'active' : ''}`}>
            <img src={image} alt={`Slide ${index + 1}`} />
          </div>
        ))}
        <button className="prev" onClick={prevSlide}>&#10094;</button>
        <button className="next" onClick={nextSlide}>&#10095;</button>
      </div>
      <div className="dots">
        {images.map((_, index) => (
          <span key={index} className={`dot ${index === currentSlide ? 'active' : ''}`} onClick={() => setCurrentSlide(index)}></span>
        ))}
      </div>
    </div>
  );
}

export default Slider;
