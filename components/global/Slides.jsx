import Image from 'next/image';
import { React, useState } from 'react';
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";


const Slides = ({ slides }) => {
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
        <div id='gallery' className='max-w-[1240px] mx-auto mt-48'>
            <div className='relative flex justify-center p-4'>

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
                                className='absolute top-[50%] left-[10px] text-white/80 cursor-pointer select-none z-[2]'
                                size={30}
                            />
                            {/* <span  onClick={prevSlide} className="absolute top-[50%] left-[30px] text-black/50 cursor-pointer select-none z-[2] material-symbols-outlined">
                arrow_back_ios
              </span> */}
                            {index === current && (
                                <div className='flex flex-col lg:flex-row justify-evenly border-black/10 shadow-black/25 shadow-2xl rounded-lg'>
                                    <div className='text-center '>
                                        <img
                                            src={slide.image}
                                            alt='/'
                                            height={800}
                                        />
                                    </div>
                                    <div className='flex flex-col justify-center p-4 lg:w-1/2 bg-[#FF4F4F] text-white'>
                                        <p className='mb-12 text-sm text-center' dangerouslySetInnerHTML={{ __html: slide.review }}></p>
                                        <a className='border-white hover:bg-[#ff3131] border text-center p-2 w-40 mx-auto' href='https://docs.google.com/forms/d/e/1FAIpQLScYsfuF6ZQYX3VaGsUhz2V5lW8cV7YaANfV01-lZZjNjzW3Og/viewform' target='_blank' rel='noreferrer'>APPLY NOW</a>

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
                                className='absolute top-[50%] right-[10px] text-white/80 cursor-pointer select-none z-[2]'
                                size={30}
                            />
                        </div>
                    );
                })}
            </div>
        </div>
    );
};




export default Slides;
