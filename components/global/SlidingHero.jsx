import React from 'react';

const SlidingHero = ({heading, message, image}) => {
  return (
    <div style={{backgroundImage:`url(${image})` }} className='h80vh flex items-center justify-center  bg-center bg-cover'>
      {/* Overlay */}
      {/* <div className='absolute top-0 left-0 right-0 bottom-0 bg-black/10 z-[2]' />       black/percentage  */}
      <div className='flex justify-center align-center p-5 text-white  z-[2] mt-[-10rem]'>
        <h2 className='text-5xl p-4 w-3/4 text-white border-4 font-bold'>{heading}</h2>
        <p className='py-5 text-xl'>{message}</p>
        {/* <button className='px-8 py-2 border'>Book</button> */}
      </div>
    </div>
  );
};

export default SlidingHero;
