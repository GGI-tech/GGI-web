import React from 'react';
import { IoIosArrowDown,IoIosArrowUp } from "react-icons/io";

const AccordianLayout = ({ title, children, index, activeIndex, setActiveIndex }) => {
    const handleSetIndex = (index) => setActiveIndex(activeIndex === index? -1 : index);

    return (
        <>
            <button onClick={() => handleSetIndex(index)} className='flex w-full sm:w-3/4 justify-between pl-10 pr-5 py-3 mt-2 rounded skin border text-left'>
                <div className=''>
                    <p className='primary font-bold font-sans'>{title}</p>
                </div>
                <div className="flex items-start justify-center">
                    {
                        (activeIndex === index)
                            ? <IoIosArrowUp className='w-5 h-5 text-black/60' />
                            : <IoIosArrowDown className='w-5 h-5 text-black/60' />
                    }
                </div>
            </button>

            {(activeIndex === index) && (
                <div className="w-screen sm:w-3/4 rounded-2xl px-10 py-10 mb-6">
                   <p  dangerouslySetInnerHTML={{ __html: children }}></p> 
                </div>
            )}
        </>
    );
};

export default AccordianLayout;