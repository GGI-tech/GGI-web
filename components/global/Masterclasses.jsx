import React from 'react'
import Image from 'next/image';
import m1 from '../../public/m1.jpg';
// import m1 from '../../public/m1.jpg';
// import m1 from '../../public/m1.jpg';
// import m1 from '../../public/m1.jpg';
// import m1 from '../../public/m1.jpg';
// import m1 from '../../public/m1.jpg';
// import m1 from '../../public/m1.jpg';


const Masterclasses = () => {
  return (
    <div className='flex flex-col justify-center '>
      <div className='md:w-4/5  flex flex-row justify-evenly gap-auto flex-wrap'>
        <div className='w-12'>
          <Image src={m1} alt='/' />
          <p>Policy Consulting Masterclass </p>
        </div>
        <div className='w-12'>
          <Image src={m1} alt='/' />
          <p>Policy Consulting Masterclass </p>
        </div>
        <div className='w-12'>
          <Image src={m1} alt='/' />
          <p>Policy Consulting Masterclass </p>
        </div>
        <div className='w-12'>
          <Image src={m1} alt='/' />
          <p>Policy Consulting Masterclass </p>
        </div>
      </div>
      
      <div className='md:w-4/5  flex flex-row justify-evenly flex-wrap'>
        <div className='w-12'>
          <Image src={m1} alt='/' />
          <p>Policy Consulting Masterclass </p>
        </div>
        <div className='w-12'>
          <Image src={m1} alt='/' />
          <p>Policy Consulting Masterclass </p>
        </div>
        <div className='w-12'>
          <Image src={m1} alt='/' />
          <p>Policy Consulting Masterclass </p>
        </div>
        <div className='w-12'>
          <Image src={m1} alt='/' />
          <p>Policy Consulting Masterclass </p>
        </div>
        <div className='w-12'>
          <Image src={m1} alt='/' />
          <p>Policy Consulting Masterclass </p>
        </div>
      </div>


    </div>
  )
}

export default Masterclasses