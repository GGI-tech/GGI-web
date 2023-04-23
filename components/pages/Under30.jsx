import React from 'react'
import Card from '../global/Card30';
import emily from '../../public/emily1.png';
import rory from '../../public/rory.jpg';
import img13 from '../../public/13.jpg';
import neha from '../../public/neha.jpg';
import chethan from '../../public/chethan.jpg';
import divija from '../../public/divija.jpeg';
import img17 from '../../public/17.jpg';
import mills from '../../public/mills.jpg';


const Under30 = () => {
    return (
        <>
            <div className='heading text-center  mt-36'>
                <div className='font-bold text-xl'>
                    2023
                </div>

                <div className='text-center text-6xl font-bold text-black my-7'>
                    MEET THE NEWEST GGI 30 UNDER 30
                </div>
                <div className='font-bold text-xl'>
                    Edited by Kristin Stoller and Steven Bertoni, with Olivia Peluso
                    Photography by Tim Tadder for Forbes
                </div>
                <div className='md:w-2/3 mx-auto text-center md:py-5 mt-36'>
                    <div className='grid grid-cols-2 md:grid-cols-2 gap-5 lg:gap-10 p-4 :plg-12'>
                        <Card socialImg={emily} link={'/30-under-30/education'} caption={'Education'} />
                        <Card socialImg={neha} link={'/30-under-30/marketing'}  caption={'Marketing'} />

                    </div>
                </div>
                <div className='md:w-2/3 mx-auto text-center mt-5'>
                    <div className='grid grid-cols-2 md:grid-cols-3 gap-5 lg:gap-10 p-4 :plg-12'>
                        <Card socialImg={rory} link={'/30-under-30/social-impact'}  caption={'Social Impact'} />
                        <Card socialImg={divija} link={'/30-under-30/healthcare'}  caption={'Healthcare'} />
                        <Card socialImg={img13} link={'/30-under-30/finance'}  caption={'FINANCE'} />


                    </div>
                </div>
                <div className='md:w-2/3 mx-auto text-center md:py-5 mt-5'>
                    <div className='grid grid-cols-2 md:grid-cols-2 gap-5 lg:gap-10 p-4 :plg-12'>
                        <Card socialImg={img13} link={'/30-under-30/finance'}  caption={'FINANCE'} />
                        <Card socialImg={divija} link={'/30-under-30/healthcare'}  caption={'Healthcare'} />

                    </div>
                </div>
                <div className='md:w-2/3 mx-auto text-center mt-5'>
                    <div className='grid grid-cols-2 md:grid-cols-3 gap-5 lg:gap-10 p-4 :plg-12'>
                        <Card socialImg={img13} link={'/30-under-30/finance'}  caption={'FINANCE'} />
                        <Card socialImg={img13} link={'/30-under-30/finance'}  caption={'FINANCE'} />
                        <Card socialImg={img13} link={'/30-under-30/finance'}  caption={'FINANCE'} />

                    </div>
                </div>
                <div className='md:w-2/3 mx-auto text-center md:py-5 mt-5'>
                    <div className='grid grid-cols-2 md:grid-cols-2 gap-5 lg:gap-10 p-4 :plg-12'>
                        <Card socialImg={img13} link={'/30-under-30/finance'}  caption={'FINANCE'} />
                        <Card socialImg={img13} link={'/30-under-30/finance'}  caption={'FINANCE'} />

                    </div>
                </div>
                <div className='md:w-2/3 mx-auto text-center mt-5'>
                    <div className='grid grid-cols-2 md:grid-cols-3 gap-5 lg:gap-10 p-4 :plg-12'>
                        <Card socialImg={img13} link={'/30-under-30/finance'}  caption={'Ex Asia Chairman, Blackrock'} />
                        <Card socialImg={img13} link={'/30-under-30/finance'}  caption={'Ex Asia Chairman, Blackrock'} />
                        <Card socialImg={img13} link={'/30-under-30/finance'}  caption={'Ex Asia Chairman, Blackrock'} />

                    </div>
                </div>
            </div>

            <div className="border-b-2 border-black mt-12"></div>


        </>

    )
}

export default Under30
