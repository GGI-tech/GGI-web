import React from 'react';

const Heading = (props) => {
    return (
        <div id='' className='flex justify-center mb-12 mt-48 md:mt-72'>
            <h2 className='primary px-2 md:w-3/5 text-center text-3xl leading-relaxed'>{props.children}</h2>
        </div>
    );
};

export default Heading;
