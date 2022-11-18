import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/bundle";

// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";

export default function SlidingHero({ image, title }) {
  return (
    <div className="relative">
      <Swiper
        cssMode={true}
        navigation={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className="mySwiper"
      >
        <SwiperSlide >
          <div style={{ backgroundImage: `url(${image})` }} className='flex items-center justify-center h-80 md:h-96 bg-center bg-cover'>{/*bg-fixed for parallax effect */}
            {/* Overlay */} 
            <div className='absolute top-0 left-0 right-0 bottom-0 bg-black/10 z-[2]' />       {/* black/percentage  */}
            <div className='flex flex-center md:w-3/5 m-5 p-5 text-white z-[2] mt-[-10rem]'>
              <h2 className='mt-60 text-xl md:text-3xl font-bold text-center p-4 md:p-12 border-2'>{title[0]}</h2>
              {/* <button className='px-8 py-2 border'>Book</button> */}
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div style={{ backgroundImage: `url(${image})` }} className='flex items-center justify-center h-80 md:h-96 bg-center bg-cover'>{/*bg-fixed for parallax effect */}
            {/* Overlay */}
            <div className='absolute top-0 left-0 right-0 bottom-0 bg-black/10 z-[2]' />       {/* black/percentage  */}
            <div className='flex flex-center md:w-3/5 m-5 p-5 text-white z-[2] mt-[-10rem]'>
              <h2 className='mt-60 text-xl md:text-3xl font-bold text-center p-4 md:p-12 border-2'>{title[1]}</h2>
              {/* <button className='px-8 py-2 border'>Book</button> */}
            </div>
          </div>
        </SwiperSlide>


      </Swiper>
    </div>
  );
}
