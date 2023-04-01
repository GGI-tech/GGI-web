
import secondarynavbar from '../secondaryNav'
const AltIITHero = () => {
    return (
        <div className={`iit text-white flex-col ${secondarynavbar ? 'mt-20 sm:mt-12' : 'mt-8 lg:mt-5'} pt-24 px-2 sm:px-12 lg:px-24 xl:px-36 `}>
            <div className='r1 flex gap-5 md:gap-10 justify-center lg:justify-start items-end flex-wrap lg:flex-nowrap px-4'> {/*bg-purple-500 */}
                <h1 className='text-6xl md:text-8xl lg:text-9xl arial'>100X</h1>
                <h1 className='text-2xl arial'> YOUR CHANCES</h1>
                <h1><button className='bg-white text-black px-4 py-2 hover:bg-black hover:text-white arial rounded-full text-3xl'>TO GET IN</button></h1>
            </div>
            <div className='grid gap-10 sm:gap-0 md:grid-cols-4 grid-cols-3 pb-8'>{/*bg-black*/}
                <div className='col-span-3'>
                    <div className='r2 flex mt-12 md:mt-24 gap-1 md:gap-10  text-center justify-evenly sm:justify-between flex-wrap'> {/*bg-blue-900 */}
                        <h1 className='relative text-2xl sm:text-3xl lg:text-4xl arial  py-3 sm:py-6 '>
                            <img width={80} height={80} src='/arrow2.jpg' className='hidden sm:block absolute bottom-24 -translate-x-6' />
                            SYSTEM<br className='hide' /><span className='text-2xl sm:text-3xl lg:text-6xl'>DESIGN </span></h1>
                        <h1 className='relative text-2xl sm:text-3xl lg:text-4xl arial py-3 sm:py-6 xl:mr-24'> MACHINE <br className='hide' /><span className=' text-2xl sm:text-3xl lg:text-6xl'> LEARNING <img width={50} height={80} src='/arrow.jpg' className='hidden sm:block absolute top-0 -right-14 lg:-top-2 lg:-right-5' />
                        </span></h1>
                    </div>
                    <div className='r3 mt-4 sm:mt-5 flex flex-wrap lg:flex-nowrap gap-5 md:gap-10 justify-center lg:justify-start items-end '> {/*bg-green-300*/}
                        <div className=''>
                            <div className='flex sm:mt-4 justify-center'>
                                <h1 className='relative text-2xl sm:text-3xl lg:text-6xl arial'>PRODUCT<img width={50} height={80} src='/arrow.jpg' className='absolute hidden sm:block bottom-12 left-48 lg:left-80' /><br className='hide' /><span className='text-2xl sm:text-3xl lg:text-4xl'> MANAGEMENT </span></h1>
                            </div>
                            <div className='r11 my-14 lg:mt-36 px-5 sm:px-12 lg:px-auto'>
                                <p className='sm:text-xl font-bold text-left mb-24'>Learn Tech Skills Live, Join Global Cohort & Get Hired at GGI ALT IIT to become a Tech Leader </p>
                                {/* <p className='sm:text-xl text-left'>We’re a social impact global organization with a mission to provide quality Business & Tech Education for an Inclusive world.</p> */}
                            </div>

                        </div>

                    </div>
                </div>
                <div className='col-span-3 md:col-span-1  flex justify-center items-center px-20 sm:px-12 md:px-0 pb-5 ' > {/*bg-yellow-400 */}
                    {/* <img src='/tech.jpg' alt="ggi" height={300} width={356}  /> */}
                </div>


            </div>

        </div>
    )
}

export default AltIITHero