import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/bundle";
import "swiper/css/autoplay";
// import required modules
import {  Pagination, Autoplay } from "swiper";

export default function SlidingHero({ image, title }) {
  return (
    <div className="relative">
      <Swiper
        loop={true}
        autoplay={{delay:2500}}
        pagination={true}
        modules={[ Pagination, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide >
        <div style={{ backgroundImage: `url(${image})` }} className='flex items-center justify-center h-full w-screen bg-center bg-cover'>{/*bg-fixed for parallax effect */}
            {/* Overlay */}
            <div className='flex bg-black/20 justify-center content-center md:w-3/5 m-10 p-5 text-white z-[2] mt-[8rem] border-2 h-80'>
              <h2 className='m-auto text-2xl md:text-4xl font-black text-center' dangerouslySetInnerHTML={{__html:title[0]}}></h2>
              {/* <button className='px-8 py-2 border'>Book</button> */}
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div style={{ backgroundImage: `url(${image})` }} className='flex items-center justify-center h-full w-screen bg-center bg-cover'>{/*bg-fixed for parallax effect */}
            {/* Overlay */}
            <div className='flex bg-black/20 justify-center content-center md:w-3/5 m-10 p-5 text-white z-[2] mt-[8rem] border-2 h-80'>
              <h2 className='m-auto text-2xl md:text-4xl font-black text-center' dangerouslySetInnerHTML={{__html:title[1]}}></h2>
              {/* <button className='px-8 py-2 border'>Book</button> */}
            </div>
          </div>
        </SwiperSlide>


      </Swiper>
    </div>
  );
}
