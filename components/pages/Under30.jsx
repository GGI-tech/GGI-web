import React from 'react'
import Card from '../global/Card30';
import img12 from '../../public/12.jpg';
import img13 from '../../public/13.jpg';
import img14 from '../../public/14.jpg';
import img15 from '../../public/15.jpg';
import img16 from '../../public/16.jpg';
import img17 from '../../public/17.jpg';
import img18 from '../../public/18.jpg';


const Under30 = () => {
    return (
        <>
            <div className='heading text-center  mt-36'>
                <div className='font-bold text-xl'>
                    2023
                </div>

                <div className='text-center text-6xl font-bold text-black my-7'>
                    MEET THE NEWEST FORBES 30 UNDER 30
                </div>
                <div className='font-bold text-xl'>
                    Edited by Kristin Stoller and Steven Bertoni, with Olivia Peluso
                    Photography by Tim Tadder for Forbes
                </div>
                <div className='md:w-2/3 mx-auto text-center md:py-5 mt-36'>
                    <div className='grid grid-cols-2 md:grid-cols-2 gap-5 lg:gap-10 p-4 :plg-12'>
                        <Card socialImg={img13} link={'/30-under-30/finance'} caption={'Finance'} />
                        <Card socialImg={img14} link={'/30-under-30/tech'}  caption={'Tech'} />

                    </div>
                </div>
                <div className='md:w-2/3 mx-auto text-center mt-5'>
                    <div className='grid grid-cols-2 md:grid-cols-3 gap-5 lg:gap-10 p-4 :plg-12'>
                        <Card socialImg={img15} link={'/30-under-30/finance'}  caption={'FINANCE'} />
                        <Card socialImg={img16} link={'/30-under-30/finance'}  caption={'TECH'} />
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
