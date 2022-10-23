import Image from 'next/image';
import React, { useState } from 'react';
import { SliderData } from '../SliderData';
import { FaArrowCircleLeft, FaArrowCircleRight } from 'react-icons/fa';


const Slider = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };
  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <div id='gallery' className='max-w-[1240px] mx-auto'>
      <div className='relative flex justify-center p-4'>

        {SliderData.map((slide, index) => {
          return (
            <div
              key={index}
              className={
                index === current
                  ? 'opacity-[1] ease-in duration-1000'
                  : 'opacity-0'
              }
            >
              <FaArrowCircleLeft
                onClick={prevSlide}
                className='absolute top-[80%] left-[30px] text-black/70 cursor-pointer select-none z-[2]'
                size={50}
              />
              {index === current && (
                <div className='flex flex-col md:flex-row justify-center'>
                  <Image
                    src={slide.image}
                    alt='/'
                    width='440'
                    height='400'
                    objectFit='cover'
                  />
                  <p className='p-4 md:w-1/2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga quos quod, dignissimos, praesentium consequuntur, facilis iusto nesciunt accusantium vitae asperiores similique? Ad qui, quidem cum aperiam placeat nostrum. Facere, necessitatibus.</p>

                </div>
              )}
              <FaArrowCircleRight
                onClick={nextSlide}
                className='absolute top-[80%] right-[30px] text-black/70 cursor-pointer select-none z-[2]'
                size={50}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Slider;
