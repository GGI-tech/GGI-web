import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const GalleryImg = ({ socialImg, caption, link }) => {
  return (
    <Link href={link}>
      <div className='my-5 relative hover:text-[#FF7F50] hover:cursor-pointer h-[300px] w-[300px]  mx-auto sm:w-full lg:h-[500px]'>
        {/* Set a fixed height for the container element */}
        {/* You can adjust the height value to fit your design */}

        <div className='hover:shadow-[#FF7F50] hover:shadow-xl h-full w-full'>
          <Image
            placeholder="blur"
            src={socialImg}
            alt='/'
            className='object-contain object-center h-full w-full'
            layout='fill'
          />
        </div>

        <p className='p-7 text-4xl md:text-5xl roboto tracking-tight text-black uppercase hover:text-[#FF7F50]'>
          {caption}
        </p>
      </div>

    </Link>
  );
};

export default GalleryImg

