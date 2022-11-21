import React from 'react';

const Heading = (props) => {
    return (
        <div id='' className='flex justify-center mb-12 mt-48 md:mt-72'>
            <h1 className='primary px-4 md:w-2/3 text-center tracking-tight font-extrabold lg:text-3xl  text-2xl'>{props.children}</h1>
        </div>
    );
};

export default Heading;
