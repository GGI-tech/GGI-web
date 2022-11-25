import React from 'react'
import Image from 'next/image';
import m1 from '../../public/m1.jpg';
import m2 from '../../public/m2.jpg';
import m3 from '../../public/m3.jpg';
import m4 from '../../public/m4.jpg';
import m5 from '../../public/m5.jpg';
import m6 from '../../public/m6.jpg';
import m7 from '../../public/m7.jpg';
import m8 from '../../public/m8.jpg';
import m9 from '../../public/m9.jpg';

const Masterclasses = () => {
  return (
    <>
      <div className='p-6 md:p-12 flex justify-center '>
        <div className='box flex flex-row flex-wrap justify-evenly gap-3 w-full sm:w-5/6 sm:gap-10 lg:w-2/3 lg:gap-20 pink'>
          <div className='w-20 text-center'>
            <Image src={m1} alt='/' />
            <p className='text-sm text-center'>Policy Consulting Masterclass </p>
          </div>
          <div className='w-20 text-center'>
            <Image src={m2} alt='/' />
            <p className='text-sm text-center'>MBA for Impact Masterclass  </p>
          </div>
          <div className='w-20 text-center'>
            <Image src={m3} alt='/' />
            <p className='text-sm text-center'>The Liberal Arts Masterclass </p>
          </div>
          <div className='w-20 text-center'>
            <Image src={m4} alt='/' />
            <p className='text-sm text-center'>Management Consulting & Sustainability Masterclass </p>
          </div>
        {/* </div>
      </div>
      <div className='mt-5 flex justify-center '>

        <div className='flex flex-row justify-evenly flex-wrap  w-full md:w-4/5 '> */}
          <div className='w-20 text-center'>
            <Image src={m5} alt='/' />
            <p className='text-sm text-center'>Data Analytics & Emerging Tech Masterclass </p>
          </div>
          <div className='w-20 text-center'>
            <Image src={m6} alt='/' />
            <p className='text-sm text-center'>Management Communications Masterclass </p>
          </div>
          <div className='w-20 text-center'>
            <Image src={m7} alt='/' />
            <p className='text-sm text-center'>CV and Case Interview Prep Masterclass </p>
          </div>
          <div className='w-20 text-center'>
            <Image src={m8} alt='/' />
            <p className='text-sm text-center'>Impact Investment Masterclass </p>
          </div>
          <div className='w-20 text-center'>
            <Image src={m9} alt='/' />
            <p className='text-sm text-center'>Product Management & Tech Ethics Masterclass  </p>
          </div>
        </div>


      </div>
    </>
  )
}

export default Masterclasses