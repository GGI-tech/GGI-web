import Image from 'next/image';
import { React, useState } from 'react';
import { SliderData } from './SliderData';
import { FaArrowCircleLeft, FaArrowCircleRight } from 'react-icons/fa';
//IoIosArrowForward

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
                className='absolute top-[50%] left-[30px] text-black/50 cursor-pointer select-none z-[2]'
                size={50}
              />
              {index === current && (
                <div className='flex flex-col lg:flex-row justify-center border shadow-lg px-4 py-8 md:py-12 skin'>
                  <div className='flex justify-center'>
                    <Image
                      className='rounded-full'
                      src={slide.image}
                      alt='/'
                      width='200'
                      height='200'
                    />
                  </div>
                  <div className='flex-justify center p-4 lg:w-1/2'><p dangerouslySetInnerHTML={{ __html: slide.review }}></p></div>

                </div>
              )}
              <FaArrowCircleRight
                onClick={nextSlide}
                className='absolute top-[50%] right-[30px] text-black/50 cursor-pointer select-none z-[2]'
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
