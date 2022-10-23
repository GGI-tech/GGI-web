import Image from 'next/image';
import React from 'react';
import { FaInstagram } from 'react-icons/fa';

const InstagramImg = ({ socialImg, caption }) => {
  return (
    <div className='relative'>
      <Image
        src={socialImg}
        alt='/'  
        className='w-full h-full'
        layout='responsive'
      />
      {/* Overlay */}
      <div className='flex justify-center w-full h-full items-center absolute top-0 left-0 right-0 bottom-0 hover:bg-white/50 group'>
      <p className='text-gray-300 hidden group-hover:block'>
        {/* <FaInstagram size={30} className='z-10' /> */}
      </p>
      </div>
      {/* <figcaption  className='p-4 bg-black/20'>{caption}</figcaption> */}
      <p className='p-1 md:p-4 bg-black/10 text-sm'>{caption}</p>
    </div>
  );
};

export default InstagramImg;
