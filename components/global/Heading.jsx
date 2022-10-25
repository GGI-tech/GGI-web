import React from 'react';

const Heading = ({ heading }) => {
    return (
        <div id='' className='flex justify-center mb-12 mt-24 md:mt-48'>
            <h1 className='px-4 md:w-3/4 text-center tracking-wide xl:text-4xl md:text-3xl text-2xl'>{heading} </h1>
        </div>
    );
};

export default Heading;
