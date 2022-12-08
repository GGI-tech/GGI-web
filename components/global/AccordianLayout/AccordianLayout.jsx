import React from 'react';
import { IoIosArrowDown,IoIosArrowUp } from "react-icons/io";

const AccordianLayout = ({ title, children, index, activeIndex, setActiveIndex }) => {
    const handleSetIndex = (index) => (activeIndex !== index) && setActiveIndex(index);

    return (
        <>
            <div onClick={() => handleSetIndex(index)} className='flex w-screen sm:w-3/4 justify-between pl-10 pr-5 py-3 mt-2 rounded skin border'>
                <div className=''>
                    <p className='primary font-semibold'>{title}</p>
                </div>
                <div className="flex items-center justify-center">
                    {
                        (activeIndex === index)
                            ? <IoIosArrowUp className='w-5 h-5 text-black/60' />
                            : <IoIosArrowDown className='w-5 h-5 text-black/60' />
                    }
                </div>
            </div>

            {(activeIndex === index) && (
                <div className="w-screen sm:w-3/4 rounded-2xl px-10 py-10 mb-6">
                   <div  dangerouslySetInnerHTML={{ __html: children }}></div> 
                </div>
            )}
        </>
    );
};

export default AccordianLayout;