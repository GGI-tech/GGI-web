import React from 'react';
import Card from '../global/Card30';
import Footer from '../global/Footer';
import adam from '../../public/adam-new.jpg'; // Update these images if needed for 2024
import noharika from '../../public/name.jpg';
import eleonora from '../../public/eleonora-new.jpg';
import guilia from '../../public/giulia-new.jpg';
import vedika from '../../public//vedika-new.jpg';
import saksham from '../../public/saksham-new.jpg';
import arjun from '../../public/arjun-new.jpg';
import Link from 'next/link';
// remove home page bold, make italics, put imp note everywhere
// artists ~ marketing
// stem ~ fitness

const Under30_2024 = () => {
    return (
        <>
            <div className='heading text-center mt-36'>
                <div className='font-bold text-3xl font-sans text-black'>
                    2024
                </div>

                <div className='text-center pb-0 text-6xl sm:text-8xl md:text-9xl roboto text-black my-7'>
                    MEET THE NEWEST<br/> GGI 30 UNDER 30
                </div>

                <div className='md:w-11/12 mx-auto text-center mt-24'>
                    <div className='grid grid-cols-1 sm:grid-cols-3 gap-10 lg:gap-20 px-5 sm:px-12 md:px-0'>
                        <Card socialImg={saksham} link={'/under-30-2024/artists'} caption={'Artists'} />
                        <Card socialImg={guilia} link={'/under-30-2024/social-impact'} caption={'Social Impact'} />
                        <Card socialImg={adam} link={'/under-30-2024/education'} caption={'Education'} />
                    </div>
                </div>

                <div className='md:w-5/6 mx-auto text-center md:py-5 mt-24'>
                    <div className='grid grid-cols-1 sm:grid-cols-2 gap-10 lg:gap-20 px-5 sm:px-12'>
                    <Card socialImg={noharika} link={'/under-30-2024/marketing'} caption={'Marketing'} />
                        <Card socialImg={vedika} link={'/under-30-2024/sports'} caption={'Fitness & Sports'} />
                    </div>
                </div>
                <div className='md:w-5/6 mx-auto text-center md:py-5 mt-24'>
                    <div className='grid grid-cols-1 sm:grid-cols-2 gap-10 lg:gap-20 px-5 sm:px-12'>
                        <Card socialImg={arjun} link={'/under-30-2024/healthcare'} caption={'Healthcare'} />
                        <Card socialImg={eleonora} link={'/under-30-2024/stem'} caption={'STEM'} />
                    </div>
                </div>
                <div className="text-center pt-12 pb-15 mb-10 mt-10">
                    <Link href="/30-under-30">
                        <button className="px-4 py-2 bg-black text-sm text-white font-semibold rounded-lg hover:bg-gray-800 transition duration-200">
                            View GGI 2023&apos;s 30 Under 30
                        </button>
                    </Link>
                </div>
                <div className="text-center pt-2 pb-0">
                        <div className="px-6 py-3 bg-white text-black font-medium text-lg">
                        <i>Important Note: &apos;Honorees are chosen for their accomplishments, not by sponsorship.&apos;</i>
                        </div>
                </div>

            </div>

            <Footer />
        </>
    );
};

export default Under30_2024;