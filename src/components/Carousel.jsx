import React, { useState } from 'react';
import "./Carousel.css"
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs"

const Carousel = ({ data }) => {
  const [slide, setSlide] = useState(0);
  const nextSlide = () =>{
    setSlide(slide === data.length-1 ? 0:slide +1);
  }
  const previousSlide = () =>{
    setSlide( slide === 0 ? data.length - 1 : slide -1)
  }
  // Check if data is defined and is an array
  if (!data || !Array.isArray(data)) {
    return null; // or handle this case in a way that makes sense for your application
  }

  return (
    <div className='carousel'>
      <BsArrowLeftCircleFill className='arrow arrow-left' onClick={previousSlide} />
      {data.map((item, index) => (
        <img
          src={item.src}
          alt={item.alt}
          key={index}
          className={slide === index ? 'slide' : "slide slide-hidden"}
        />
      ))}
      <BsArrowRightCircleFill className='arrow arrow-right' onClick={nextSlide} />
      <span className='indicators'>
        {data.map((_, idx) => {
          return <button key={idx} onClick={() => setSlide(idx)} className={slide === idx ? "indicator" : "indicator indicator-inactive"}></button>
        })}
      </span>
    </div>
  );
};

export default Carousel;
