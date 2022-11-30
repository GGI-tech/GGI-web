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
                  ? 'opacity-[1] ease-in duration-1000 flex justify-center'
                  : 'opacity-0 flex justify-center'
              }
            >
              <FaArrowCircleLeft
                onClick={prevSlide}
                className='absolute top-[50%] left-[30px] text-black/50 cursor-pointer select-none z-[2]'
                size={50}
              />
              {index === current && (
                <div className='flex flex-col lg:flex-row justify-evenly border px-4 py-5  md:w-4/5 skin rounded-lg'>
                  <div className='text-center p-4'>
                    <Image
                      className='rounded-full'
                      src={slide.image}
                      alt='/'
                      width='180'
                      height='180'
                    />
                    <p className='font-semibold text-sm text-center' dangerouslySetInnerHTML={{ __html: slide.name }}></p>
                    <p className='text-center text-sm' dangerouslySetInnerHTML={{ __html: slide.org }}></p>

                  </div>
                  <div className='flex-justify center p-4 lg:w-1/2 italic text-sm'>
                    <p dangerouslySetInnerHTML={{ __html: slide.review }}></p>
                  </div>

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
