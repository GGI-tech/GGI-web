import Image from 'next/image';
import { React, useState } from 'react';
import { IoIosArrowForward,IoIosArrowBack } from "react-icons/io";


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
    <div id='gallery' className='max-w-[1240px] mx-auto mb-12'>
      <div className='relative flex justify-center p-4 h-[600px]'>

        {slides.map((slide, index) => {
          return (
            <div
              key={index}
              className={
                index === current
                  ? 'opacity-[1] ease-in duration-1000 flex justify-center'
                  : 'opacity-0 flex justify-center'
              }
            >
              <IoIosArrowBack
                onClick={prevSlide}
                className='absolute top-[50%] left-[30px] text-black/40 cursor-pointer select-none z-[2]'
                size={30}
              />
              {/* <span  onClick={prevSlide} className="absolute top-[50%] left-[30px] text-black/50 cursor-pointer select-none z-[2] material-symbols-outlined">
                arrow_back_ios
              </span> */}
              {index === current && (
                <div className='flex flex-col lg:items-center lg:flex-row justify-evenly px-4 py-5  md:w-4/5 shadow-black/5 border-black/10 shadow-2xl rounded-lg'>
                  <div className='text-center p-4'>
                    <Image
                      className='rounded-full object-cover bg-cover'
                      src={slide.image}
                      alt='/'
                      width='300'
                      height='300'
                    />
                    <p className='font-semibold font-sans text-base text-center' dangerouslySetInnerHTML={{ __html: slide.name }}></p>
                    <p className='text-center text-base [&_b]:font-bold [&_strong]:font-bold' dangerouslySetInnerHTML={{ __html: slide.org }}></p>

                  </div>
                  <div className='flex flex-col justify-center p-4 lg:w-1/2 '>
                    <p className='mb-12 italic text-base ' dangerouslySetInnerHTML={{ __html: "&ldquo;"+slide.review +"&rdquo;" }}></p>
                    {slide.link &&<a className="italic underline text-center text-blue-900 text-sm" href={slide.link} target="_blank" rel="noreferrer">Go to Link</a>}
                  </div>

                </div>
              )}
              {/* <span onClick={nextSlide}
                className='material-symbols-outlined absolute top-[50%] right-[30px] text-black/50 cursor-pointer select-none z-[2]'
                size={50}>
                arrow_forward_ios
              </span> */}
              <IoIosArrowForward
                onClick={nextSlide}
                className='absolute top-[50%] right-[30px] text-black/40 cursor-pointer select-none z-[2]'
                size={30}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};




export default Slider;