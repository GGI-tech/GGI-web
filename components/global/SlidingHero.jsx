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
    <div style={{ backgroundImage: `url(${image})` }}  className="relative bg-center bg-cover">
      <Swiper
        loop={true}
        autoplay={{delay:2500}}
        pagination={true}
        modules={[ Pagination, Autoplay]}
        className="mySwiper"
      >{
        title.map((t)=>{
          return (
            <SwiperSlide >
            <div  className='flex items-center justify-center h-full w-screen'>{/*bg-fixed for parallax effect */}
                {/* Overlay */}
                <div className='flex justify-center content-center md:w-1/2 m-10 z-[2] mt-[10rem]  h-80'>
                  <h2 className='m-auto bg-black/40 border-2 p-5 text-2xl md:text-4xl font-black text-center text-white' dangerouslySetInnerHTML={{__html:t}}></h2>
                  {/* <button className='px-8 py-2 border'>Book</button> */}
                </div>
              </div>
            </SwiperSlide>
          );
        })
      }
     
      


      </Swiper>
    </div>
  );
}
