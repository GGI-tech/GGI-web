import React from 'react';

const Heading = (props) => {
    return (
        <div id='' className='flex justify-center mb-12 mt-24 md:mt-48'>
            <h1 className='primary px-4 md:w-2/3 text-center tracking-tight font-extrabold lg:text-3xl sm:text-2xl xl'>{props.children}</h1>
        </div>
    );
};

export default Heading;
