import React from 'react'
import Image from 'next/image'
const MainHero = () => {
    return (
        <div className='hero text-white flex-col md:pt-24 md:px-24 h-screen '>
            <div className='r1 flex gap-5 items-end flex-wrap'>
                <h1 className='text-9xl font-black'>100X</h1>
                <h1 className='text-2xl font-black'> YOUR CHANCES</h1>
                <h1><button className='bg-white text-black px-4 py-2 hover:bg-black hover:text-white font-black rounded-full text-4xl'>TO GET IN</button></h1>
            </div>
            <div className='r2 flex justify-between mt-3 flex-wrap'>
                <h1 className='text-5xl font-black max-w-xs'>MANAGEMENT CONSULTING</h1>
                <h1 className='text-5xl font-black max-w-xs'>PUBLIC POLICY</h1>
            </div>
            <div className='r3 flex justify-center'>
                <div className=''>
                    <div className='flex mt-2 justify-center'><h1 className='text-5xl font-black max-w-xs'>PRODUCT MANAGEMENT</h1></div>
                    <div className='r11 mt-4 '>
                        <h1>We’re a social impact global organization with a mission to provide quality <br />Business & Policy Education for an Inclusive world.</h1>
                    </div>
                    <div className='r12 mt-5 grid grid-cols-2 md:grid-cols-4'>
                        <div className='text-center'>
                            <h1 className='font-bold text-3xl'>52+</h1>
                            <p> Employment Partners</p>
                        </div>
                        <div className='text-center'>
                            <h1 className='font-bold text-3xl'>88%</h1>
                            <p> Pivoted into Consulting Policy & Product</p>
                        </div>
                        <div className='text-center'>
                            <h1 className='font-bold text-3xl'>17 LAKHS</h1>
                            <p> Average CTC Offered</p>
                        </div>
                        <div className='text-center'>
                            <h1 className='font-bold text-3xl'>5500+</h1>
                            <p>GGI Scholars & Fellows</p>
                        </div>
                    </div>
                </div>
                <div>
                    <Image src='/ggi.webp' alt="ggi" height={300} width={300} className="rounded-full" />
                </div>

            </div>

        </div>
    )
}

export default MainHero