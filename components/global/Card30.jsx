import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const GalleryImg = ({ socialImg, caption, link }) => {
  return (
    <Link href={link}>
      <div className='my-5 relative hover:text-blue-600 hover:cursor-pointer h-[300px] w-[300px]  mx-auto sm:w-full lg:h-[500px]'>
        {/* Set a fixed height for the container element */}
        {/* You can adjust the height value to fit your design */}
        
        <div className='hover:shadow-blue-600 hover:shadow-lg h-full w-full'>
          <Image
            placeholder="blur"
            src={socialImg}
            alt='/'
            className='object-cover object-center h-full w-full'
            layout='fill'
          />
        </div>

        <p className='h-20 p-8 text-2xl font-bold uppercase '>{caption}</p>
      </div>
    </Link>
  );
};

export default GalleryImg
