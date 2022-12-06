import React from 'react'
import Image from 'next/image'
const MainHero = () => {
    return (
        <div className='hero  text-white flex-col mt-4 md:mt-auto pt-24 px-2 lg:pl-48 h-full md:h-screen'>
            <div className='r1 flex gap-5 md:gap-10 justify-center lg:justify-start  items-end flex-wrap'>
                <h1 className='text-6xl md:text-9xl font-black arial'>100X</h1>
                <h1 className='text-2xl font-black arial'> YOUR CHANCES</h1>
                <h1><button className='bg-white text-black px-4 py-2 hover:bg-black hover:text-white font-black rounded-full text-3xl'>TO GET IN</button></h1>
            </div>
            <div className='r2 flex mt-5 gap-5 md:gap-10 justify-center lg:justify-start items-end flex-wrap'>
                <h1 className='text-4xl font-black  py-3 md:py-6 arial mr-5'>MANAGEMENT<br/><span className='text-5xl'>CONSULTING</span></h1>
                <h1 className='text-4xl font-black py-3 md:py-6 arial'>PUBLIC<br/><span className='text-5xl'> POLICY</span></h1>
            </div>
            <div className='r3 flex mt-5 gap-5 md:gap-10 justify-center lg:justify-start items-end flex-wrap lg:flex-nowrap'>
                <div className=''>
                    <div className='flex mt-4 justify-center'><h1 className='text-3xl font-black max-w-xs'>PRODUCT MANAGEMENT</h1></div>
                    <div className='r11 mt-4'>
                        <h2 className='text-xl font-extralight'>We’re a social impact global organization with a mission to provide quality <br />Business & Policy Education for an Inclusive world.</h2>
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
                    <Image src='/ggi.webp' alt="ggi" height={250} width={250} className="rounded-full" />
                </div>

            </div>

        </div>
    )
}

export default MainHero