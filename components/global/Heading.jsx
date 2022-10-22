import React from 'react';

const Heading = ({ heading }) => {
    return (
        <div id='' className='flex justify-center my-12'>
            <h1 className='px-4 md:w-4/6 text-center tracking-wide xl:text-4xl md:text-3xl text-2xl'>{heading} </h1>
        </div>
    );
};

export default Heading;
