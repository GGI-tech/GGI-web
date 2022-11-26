import React from 'react';

const Heading = (props) => {
    return (
        <div id='' className='flex justify-center mb-12 mt-48 md:mt-72'>
            <h1 className='primary md:w-2/3 text-center lg:text-3xl md:text-2xl text-xl'>{props.children}</h1>
        </div>
    );
};

export default Heading;
