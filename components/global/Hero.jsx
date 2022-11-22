import React from 'react';
import Image from 'next/image';

const Hero = ({ home, image, heading, message }) => {

  return (
    <>
      {home ?
        <div className='flex items-center justify-center h-screen mb-12 bg-center bg-cover custom-img '>{/*bg-fixed for parallax effect */}
          {/* Overlay */}
          <div className='absolute top-0 left-0 right-0 bottom-0 bg-black/0 z-[2]' />       {/* black/percentage  */}

        </div> :
        <div className="relative mt-12 p-24" style={{ position: 'relative', width: '100vw', height: '66.66vw' }}>
          <Image
            alt='/'
            src={`${image}`}
            layout="fill"
            objectFit="cover"
          />
          {heading?<h1 className="absolute text-xl md:text-4xl p-8 md:p-12 border-2 font-bold text-center bg-black/20 z-[2] text-white top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2">
            {heading}</h1>:<div></div>}
        </div>
     
      }
    </>
  );
};

export default Hero;
