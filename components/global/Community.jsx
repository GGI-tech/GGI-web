import React from 'react';
import Image from 'next/image';

// -------------------------------------------------------
import community1 from '../../public/community1.jpg'
import community2 from '../../public/community2.jpg'
import community3 from '../../public/community3.jpg'
import community4 from '../../public/community4.jpg'
import community5 from '../../public/community5.jpg'

const Community = () => {
    return (
        <>
            <div className="p-12 flex justify-center">
                <div className="md:w-3/4 grid grid-cols-1 sm:grid-cols-3 gap-1">
                    <div className='col-span-2'><Image src={community1} /></div>
                    <div className='col-span-1'><Image src={community2} /></div>
                    <div className='col-span-2'>Going through the program alongside a group of highly accomplished peers is the best way to achieve transformation. Our Alumni have an annual in-person get-together also.</div>
                    <div className='col-span-1'><Image src={community3} /></div>
                    <div className='col-span-2'><Image src={community4} /></div>
                    <div className='col-span-1'>We do not prefer a particular curriculum for undergraduate study for admission to the GGI Program. The Undergraduate representations come from IIT Bombay, IIT Madras, St. Stephen's College, NMIMS to IIM Ahmedabad, The Fletcher School. Yale University, </div>
                </div>
            </div>
            <div className="p-12 flex justify-center">
                <div className="md:w-3/4 grid grid-cols-1 sm:grid-cols-3 gap-1">
                    <div className='col-span-1'>There are more than 100+ organizations represented in the cohort including Deloitte Consulting, EnY Consulting, Amazon AWS, Ministry of Finance, Bain Research, Goldman Sachs, Deutsche Bank, Schlumberger</div>
                    <div className='col-span-2'><Image src={community5} /></div>

                </div>
            </div>
        </>
    );
};

export default Community;
