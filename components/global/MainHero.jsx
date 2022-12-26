import React from 'react'
import Image from 'next/image'

import secondarynavbar from '../secondaryNav'
const MainHero = () => {
    return (
        <div className={`hero text-white flex-col ${secondarynavbar ? 'mt-20 sm:mt-12' : 'mt-4 lg:mt-auto'} pt-24 px-2 sm:px-12 lg:px-24 xl:px-36 h-full `}>
            <div className='r1 flex gap-5 md:gap-10 justify-center lg:justify-start  items-end flex-wrap lg:flex-nowrap'> {/*bg-purple-500 */}
                <h1 className='text-6xl md:text-8xl lg:text-9xl font-black arial'>100X</h1>
                <h1 className='text-2xl font-black arial'> YOUR CHANCES</h1>
                <h1><button className='bg-white text-black px-4 py-2 hover:bg-black hover:text-white font-black rounded-full text-3xl'>TO GET IN</button></h1>
            </div>
            <div className='grid md:grid-cols-3 grid-cols-2 pb-8'>{/*bg-black*/}
                <div className='col-span-2'>
                    <div className='r2 flex mt-5 gap-1 md:gap-10 mx-5 text-center justify-evenly sm:justify-between flex-wrap'> {/*bg-blue-900 */}
                        <h1 className='text-2xl sm:text-3xl font-black  py-3 sm:py-6 arial '>MANAGEMENT <br className='hide'/><span className='text-2xl sm:text-4xl'>CONSULTING</span></h1>
                        <h1 className='text-2xl sm:text-3xl font-black py-3 sm:py-6 arial'>PUBLIC <br className='hide'/><span className='text-2xl sm:text-4xl'> POLICY</span></h1>
                    </div>
                    <div className='r3 mt-4 sm:mt-5 flex flex-wrap lg:flex-nowrap gap-5 md:gap-10 justify-center lg:justify-start items-end '> {/*bg-green-300*/}
                        <div className=''>
                            <div className='flex sm:mt-4 justify-center'>
                                <h1 className='text-2xl sm:text-3xl font-black'>PRODUCT<br  className='hide'/><span className='text-2xl sm:text-4xl'> MANAGEMENT</span></h1>
                            </div>
                            <div className='r11 my-8 lg:mt-12 px-5 sm:px-12 lg:px-auto'>
                                <p className='sm:text-xl text-left'>We’re a social impact global organization with a mission to provide quality Business & Policy Education for an Inclusive world.</p>
                            </div>
                            <div className='r12 mt-5 lg:mt-12 grid grid-cols-2 gap-5 md:grid-cols-4'>
                                <div className='text-center'>
                                    <h1 className='font-bold text-3xl'>52+</h1>
                                    <p> Employment<br/> Partners</p>
                                </div>
                                <div className='text-center'>
                                    <h1 className='font-bold text-3xl'>88%</h1>
                                    <p> Pivoted into Consulting<br/> Policy & Product</p>
                                </div>
                                <div className='text-center'>
                                    <h1 className='font-bold text-3xl'>17 LAKHS</h1>
                                    <p> Average CTC<br/> Offered</p>
                                </div>
                                <div className='text-center'>
                                    <h1 className='font-bold text-3xl'>5500+</h1>
                                    <p>GGI Scholars & Fellows</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                <div className='col-span-2 md:col-span-1  flex justify-center items-center px-12 md:px-0 pb-5' > {/*bg-yellow-400 */}
                    <Image src='/ggi.webp' alt="ggi" height={300} width={300} className="rounded-full" />
                </div>


            </div>

        </div>
    )
}

export default MainHero