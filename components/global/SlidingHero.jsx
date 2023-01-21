import React from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles for sliding hero
// import "swiper/css";
// import "swiper/css/pagination";
// import "swiper/css/bundle";
// import "swiper/css/autoplay";
// import required modules
// import {  Pagination, Autoplay } from "swiper";

export default function SlidingHero({ image, title }) {
  return (
    <div style={{ backgroundImage: `url(${image})` }} className="relative bg-center bg-cover" >
      <div className='flex items-center justify-center h-full '>{/*bg-fixed for parallax effect */}
        {/* Overlay */}
        <div className='flex justify-center content-center md:w-2/3  mx-5 z-[2] mt-[10rem]  h-80 md:h-65'>
          <h2 className='m-auto bg-black/50 border-4 px-3 py-4 text-2xl lg:text-3xl font-black text-center text-white' dangerouslySetInnerHTML={{ __html: title[0] }}></h2>
          {/* <button className='px-8 py-2 border'>Book</button> */}
        </div>
      </div>
    </div >


  );
}


{/* <div style={{ backgroundImage: `url(${image})` }} className="relative bg-center bg-cover">
  <Swiper
    loop={true}
    autoplay={{ delay: 2500 }}
    pagination={true}
    modules={[Pagination, Autoplay]}
    className="mySwiper"
  >{
      title.map((t, i) => {
        return (
          <SwiperSlide key={i}>
            <div className='flex items-center justify-center h-full w-screen'>
              <div className='flex justify-center content-center md:w-2/3 m-10 z-[2] mt-[10rem]  h-80 md:h-65'>
                <h2 className='m-auto bg-black/50 border-4 px-3 py-4 text-2xl lg:text-3xl font-black text-center text-white' dangerouslySetInnerHTML={{ __html: t }}></h2>
              </div>
            </div>
          </SwiperSlide>
        );
      })
    }
  </Swiper>
</div>  */}