import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/bundle";
import "swiper/css/autoplay";
// import required modules
import { Navigation, Pagination, Autoplay, Mousewheel, Keyboard } from "swiper";

export default function SlidingHero({ image, title }) {
  return (
    <div className="relative">
      <Swiper
        loop={true}
        autoplay={{delay:4000}}
        // cssMode={true}
        // navigation={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide >
        <div style={{ backgroundImage: `url(${image})` }} className='flex items-center justify-center h-full w-screen bg-center bg-cover'>{/*bg-fixed for parallax effect */}
            {/* Overlay */}
            <div className='flex bg-black/30 justify-center content-center md:w-3/5 m-10 p-5 text-white z-[2] mt-[8rem] border-2 h-80'>
              <h2 className='m-auto text-2xl md:text-3xl font-bold text-center'>{title[0]}</h2>
              {/* <button className='px-8 py-2 border'>Book</button> */}
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div style={{ backgroundImage: `url(${image})` }} className='flex items-center justify-center h-full w-screen bg-center bg-cover'>{/*bg-fixed for parallax effect */}
            {/* Overlay */}
            <div className='flex bg-black/30 justify-center content-center md:w-3/5 m-10 p-5 text-white z-[2] mt-[8rem] border-2 h-80'>
              <h2 className='m-auto text-2xl md:text-3xl font-bold text-center'>{title[1]}</h2>
              {/* <button className='px-8 py-2 border'>Book</button> */}
            </div>
          </div>
        </SwiperSlide>


      </Swiper>
    </div>
  );
}
