import React from 'react'
import Card from '../global/Card30';
import Footer from '../global/Footer'
import emily from '../../public/emily1.png';
import rory from '../../public/rory.jpg';
import sahiba from '../../public/sahiba.jpg';
import divija from '../../public/divija.jpeg';
import subham from '../../public/subham.jpeg'
import rani from '../../public/ranirampal.jpg'
import avanti from '../../public/avanti.jpg'
import supriya from '../../public/supriya.jpg'

const Under30 = () => {
    return (
        <>
            <div className='heading text-center mt-36'>
                <div className='font-bold text-3xl font-sans text-black'>
                    2023
                </div>

                <div className='text-center text-6xl sm:text-8xl md:text-9xl roboto text-black my-7'>
                    GGI 30 UNDER 30
                </div>


                <div className='md:w-5/6 mx-auto text-center mt-24'>
                    <div className='grid grid-cols-1 sm:grid-cols-3 gap-10 lg:gap-20 px-5 sm:px-12 md:px-0'>
                        <Card socialImg={sahiba} link={'/30-under-30/marketing'} caption={'Marketing'} />
                        <Card socialImg={rory} link={'/30-under-30/social-impact'} caption={'Social Impact'} />
                        <Card socialImg={rani} link={'/30-under-30/sports'} caption={'Sports'} />

                    </div>
                </div>
                <div className='md:w-5/6 mx-auto text-center mt-24'>
                    <div className='grid grid-cols-1 sm:grid-cols-3 gap-10 lg:gap-20 px-5 sm:px-0'>
                        <Card socialImg={avanti} link={'/30-under-30/artists'} caption={'Artists'} />
                        <Card socialImg={divija} link={'/30-under-30/healthcare'} caption={'STEM & Healthcare'} />
                        <Card socialImg={subham} link={'/30-under-30/finance'} caption={'Finance'} />
                    </div>
                </div>
                <div className='md:w-5/6 mx-auto text-center md:py-5 mt-24'>
                    <div className='grid grid-cols-1 sm:grid-cols-2 gap-10 lg:gap-20 px-5 sm:px-12'>
                        <Card socialImg={emily} link={'/30-under-30/education'} caption={'Education'} />
                        <Card socialImg={supriya} link={'/30-under-30/entrepreneurs'} caption={'Entrepreneurs'} />
                    </div>
                </div>
                {/* <div className='md:w-2/3 mx-auto text-center md:py-5 mt-5'>
                    <div className='grid grid-cols-2 md:grid-cols-2 gap-5 lg:gap-10 p-4 :plg-12'>
                        <Card socialImg={img13} link={'/30-under-30/entrepreneurs'}  caption={'Entrepreneurs'} />
                       

                    </div>
                </div> */}


            </div>

            <Footer />

        </>

    )
}

export default Under30
