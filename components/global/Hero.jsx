import React from 'react';
const Hero = ({ home,image, heading, message }) => {

  return (
    <>
      {home ?
        <div className='flex items-center justify-center h-screen mb-12 bg-center bg-cover custom-img '>{/*bg-fixed for parallax effect */}
          {/* Overlay */}
          <div className='absolute top-0 left-0 right-0 bottom-0 bg-black/0 z-[2]' />       {/* black/percentage  */}

        </div> :
        <div style={{backgroundImage:`url(${image})`}} className='flex items-center justify-center h-1/2 md:h-screen mb-12 bg-center bg-cover'>{/*bg-fixed for parallax effect */}
          {/* Overlay */}
          <div className='absolute top-0 left-0 right-0 bottom-0 bg-black/0 z-[2]' />       {/* black/percentage  */}
          <div className='p-5 text-white z-[2] mt-[-10rem]'>
            <h2 className='mt-60 text-xl md:text-4xl font-bold text-center p-8 md:p-12 border-2'>{heading}</h2>
            <p className='py-5 text-xl text-center'>{message}</p>
            {/* <button className='px-8 py-2 border'>Book</button> */}
          </div>
        </div>}
    </>
  );
};

export default Hero;
