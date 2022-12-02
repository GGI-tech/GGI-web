import React from 'react';

const Heading = (props) => {
    return (
        <div id='' className='flex justify-center mb-12 mt-48 md:mt-72'>
            <h1 className='primary p-2 md:w-2/3 text-center text-3xl leading-relaxed'>{props.children}</h1>
        </div>
    );
};

export default Heading;
