import React from 'react';
import Image from 'next/image';
import secondarynavbar from '../secondaryNav'

const Hero = ({ home, image, heading, message }) => {

  return (
    <>
      {home ?
        <div className='flex items-center justify-center h-screen mt-24 md:mt-12 bg-center bg-cover custom-img '>{/*bg-fixed for parallax effect */}
          {/* Overlay */}
          <div className='absolute top-0 left-0 right-0 bottom-0 bg-black/0 z-[2]' />       {/* black/percentage  */}

        </div> :
        <div className={`relative ${ secondarynavbar? 'mt-24':'mt-12'} w-full h-[20rem] md:h-[60rem]`}>
          <img
            alt='/'
            layout='fill'
            src={`${image}`}
            objectfit="cover"
          />
          {heading ?
            <div className="absolute  z-[2] text-white top-2/3 md:top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <h1 className='bg-black/30 font-serif text-2xl md:text-4xl p-2 md:py-12 md:px-36 border-2 text-center' dangerouslySetInnerHTML={{__html:heading}}></h1>
              <p className='text-center mt-[5rem] text-3xl font-serif'>Make your own GGI</p>

            </div>
            : <div></div>
          }
        </div>

      }
    </>
  );
};

export default Hero;
