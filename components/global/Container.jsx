import React from 'react';

const Container = (props) => {
    return (
        <div id='' className='flex justify-center my-12'>
            <div className='px-8 w-5/7 lg:w-3/4'>
                {props.children}
            </div>
        </div>
    );
};

export default Container;
