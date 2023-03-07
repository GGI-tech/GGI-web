import React from 'react';
import secondarynavbar from '../secondaryNav'

const Hero = ({ image, heading, message }) => {

  return (
    <>
      <div className={`relative ${secondarynavbar ? 'mt-36' : 'mt-24'} `}>
      
        <img src={image} class="w-full"/>
          <div class="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center text-white">
            {heading &&<h1 class="bg-black/30 font-serif text-2xl md:text-4xl p-2 md:py-12 md:px-36 border-2" dangerouslySetInnerHTML={{ __html: heading }}></h1>}
            {message &&<p className='text-center mt-[2rem] text-xl font-serif' dangerouslySetInnerHTML={{ __html: message }}></p>}

          </div>
      </div>      
    </>
  );
};

export default Hero;
