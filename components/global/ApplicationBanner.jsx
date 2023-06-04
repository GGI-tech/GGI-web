import React from 'react'
import secondarynavbar from '../secondaryNav';

const ApplicationBanner = () => {
    return (
        <>
            <div
               
                className='border-gray-200 shadow-black/5 shadow-lg fixed left-0 top-0 w-full z-20'
            >
            {secondarynavbar && <div className='w-100 hero fixed '>
                <p className='flex flex-wrap justify-center p-1 font-black text-lg lg:text-2xl text-white '>APPLICATION FOR NEXT COHORT NOW OPEN &nbsp;
                    <a href='https://docs.google.com/forms/d/e/1FAIpQLSc0EdeZhxI2OeI5mh8HSUl4ScxHJ56XmvW48bcVzEA2MzZwTw/viewform' target="_blank" rel="noopener noreferrer" className='text-center mt-1 sm:text-base lg:text-2xl px-5 bg-white text-black hover:text-white hover:bg-black font-bold '>APPLY NOW</a></p>
            </div>}
            </div>
        </>

    )
}

export default ApplicationBanner