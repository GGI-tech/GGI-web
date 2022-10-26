import React from 'react';

import { BsFillArrowDownCircleFill, BsFillArrowUpCircleFill } from 'react-icons/bs'

const AccordianLayout = ({ title, children, index, activeIndex, setActiveIndex }) => {
    const handleSetIndex = (index) => (activeIndex !== index) && setActiveIndex(index);

    return (
        <>
            <div onClick={() => handleSetIndex(index)} className='flex w-screen sm:w-3/4 justify-between px-10 py-3 mt-2 rounded bg-black/5'>
                <div className='flex'>
                    <div className='primary font-bold'>{title}</div>
                </div>
                <div className="flex items-center justify-center">
                    {
                        (activeIndex === index)
                            ? <BsFillArrowDownCircleFill className='w-8 h-8' />
                            : <BsFillArrowUpCircleFill className='w-8 h-8' />
                    }
                </div>
            </div>

            {(activeIndex === index) && (
                <div className="flex w-screen sm:w-3/4 shadow-3xl rounded-2xl shadow-cyan-500/50 px-10 py-10 mb-6">
                   <div dangerouslySetInnerHTML={{ __html: children }}></div> 
                </div>
            )}
        </>
    );
};

export default AccordianLayout;