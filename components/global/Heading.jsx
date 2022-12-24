import React from 'react';

const Heading = (props) => {
    return (
        <div id='' className='mb-12 mt-48 md:mt-72'>
            <h2 className='mx-auto primary px-2 md:w-4/5 xl:w-3/5 text-center text-xl sm:text-2xl lg:text-3xl leading-relaxed'>{props.children}</h2>
        </div>
    );
};

export default Heading;
