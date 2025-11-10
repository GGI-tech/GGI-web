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
            <div className="p-12 mx-auto lg:w-3/4 grid grid-cols-1 sm:grid-cols-3 gap-1">
                <div className='col-span-2'><Image placeholder="blur" src={community1} alt="" /></div>
                <div className='col-span-1'><Image placeholder="blur" src={community2} alt="" /></div>
                <div className='col-span-2 my-auto p-5'><p>GGI Fellows and Scholars Lead: McKinsey. BCG. UNDP. Amazon. World Bank. Dalberg. <br/>
 From advising ministers to building startups, GGI alumni turn learning into leverage.</p></div>
                <div className='col-span-1'><Image placeholder="blur" src={community3} alt="" /></div>
                <div className='col-span-2'><Image placeholder="blur" src={community4} alt="" /></div>
                <div className='col-span-1  p-5 my-auto'><p>We do not have a preference for a specific undergraduate curriculum for admission to the GGI Program. Our undergraduate representations include, but are not limited to, IIT Bombay, IIT Madras, St. Stephen&#39;s College, NMIMS, IIM Ahmedabad, The Fletcher School, and Yale University. </p></div>
            </div>

            <div className="p-12 mx-auto lg:w-3/4 grid grid-cols-1 sm:grid-cols-3 gap-1">
                <div className='col-span-1 my-auto p-5'><p>There are more than 100+ organizations represented in the cohort including Deloitte Consulting, EnY Consulting, Amazon AWS, Ministry of Finance, Bain Research, Goldman Sachs, Deutsche Bank, Schlumberger</p></div>
                <div className='col-span-2'><Image placeholder="blur" src={community5} alt="" /></div>
            </div>

        </>
    );
};

export default Community;
