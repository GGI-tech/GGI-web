import Image from 'next/image'

import secondarynavbar from '../secondaryNav'
const MainHero = () => {
    return (
        <div className={`hero text-white flex-col ${secondarynavbar ? 'mt-20 sm:mt-12' : 'mt-4 lg:mt-auto'} pt-24 px-2 sm:px-12 lg:px-24 xl:px-36 h-full`}>
            <div className='r1 flex gap-5 md:gap-10 justify-around lg:justify-start  items-end flex-wrap lg:flex-nowrap'> {/*bg-purple-500 */}
                <h1 className='text-6xl md:text-8xl lg:text-9xl arial'>100X</h1>
                <h1 className='text-2xl arial'> YOUR CHANCES</h1>
                <h1><button className='bg-white text-black px-4 py-2 hover:bg-black hover:text-white arial rounded-full text-3xl'>TO GET IN</button></h1>
            </div>
            <div className='grid gap-10 sm:gap-0 md:grid-cols-4 grid-cols-3 pb-8'>{/*bg-black*/}
                <div className='col-span-3'>
                    <div className='r2 flex mt-12 md:mt-24 gap-1 md:gap-10  text-center justify-evenly sm:justify-between flex-wrap'> {/*bg-blue-900 */}
                        <h1 className='relative text-2xl sm:text-3xl lg:text-4xl arial  py-3 sm:py-6 '>
                            <img width={80} height={80} src='/arrow2.jpg' className='hidden sm:block absolute bottom-24 -translate-x-6' />
                            MANAGEMENT <br className='hide' /><span className='text-2xl sm:text-3xl lg:text-6xl'>CONSULTING </span></h1>
                        <h1 className='relative text-2xl sm:text-3xl lg:text-4xl arial py-3 sm:py-6'>PUBLIC <br className='hide' /><span className=' text-2xl sm:text-3xl lg:text-6xl'> POLICY <img width={50} height={80} src='/arrow.jpg' className='hidden sm:block absolute top-0 -right-14 lg:-top-2 lg:-right-5' />
                        </span></h1>
                    </div>
                    <div className='r3 mt-4 sm:mt-5 flex flex-wrap lg:flex-nowrap gap-5 md:gap-10 justify-center lg:justify-start items-end '> {/*bg-green-300*/}
                        <div className=''>
                            <div className='flex sm:mt-4 justify-center'>
                                <h1 className='relative text-2xl sm:text-3xl lg:text-6xl arial'>PRODUCT<img width={50} height={80} src='/arrow.jpg' className='absolute hidden sm:block bottom-12 left-48 lg:left-80' /><br className='hide' /><span className='text-2xl sm:text-3xl lg:text-4xl'> MANAGEMENT </span></h1>
                            </div>
                            <div className='r11 my-10 lg:mt-36 px-5 sm:px-12 lg:px-auto'>
                                <p className='sm:text-xl text-left'>We’re a social impact global organization with a mission to provide quality Business & Policy Education for an Inclusive world.</p>
                            </div>
                            <div className='r12 mt-5 lg:mt-12 grid grid-cols-2 gap-5 md:grid-cols-4'>
                                <div className='text-center'>
                                    <h1 className='arial text-2xl lg:text-3xl'>61+</h1>
                                    <p className='font-black'> Employment<br /> Partners</p>
                                </div>
                                <div className='text-center'>
                                    <h1 className='arial text-2xl lg:text-3xl'>88%</h1>
                                    <p className='font-black'> Pivoted into Consulting<br /> Policy & Product</p>
                                </div>
                                <div className='text-center'>
                                    <h1 className='arial text-2xl lg:text-3xl'>17 LAKHS</h1>
                                    <p className='font-black'> Average CTC<br /> Offered</p>
                                </div>
                                <div className='text-center'>
                                    <h1 className='arial text-2xl lg:text-3xl'>5500+</h1>
                                    <p className='font-black'>GGI Scholars & <br/>Fellows</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                <div className='col-span-3 md:col-span-1  flex justify-center items-center px-20 sm:px-12 md:px-0 pb-5' > {/*bg-yellow-400 */}
                    <Image src='/ggi.webp' alt="ggi" height={300} width={306} className="rounded-full" />
                </div>


            </div>

        </div>
    )
}

export default MainHero