import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const GalleryImg = ({ socialImg, caption, link }) => {
  return (
    <Link href={link}>
      <div className='relative hover:text-blue-600 hover:cursor-pointer'>

        <div className='hover:shadow-blue-600 hover:shadow-lg'>
          <Image
            placeholder="blur"
            src={socialImg}
            alt='/'
            className='w-full h-full '
            layout='responsive'
          />
        </div>

        <p className='h-20 p-1 md:p-4 text-2xl font-bold uppercase '>{caption}</p>
      </div>
    </Link>
  );
};

export default GalleryImg
