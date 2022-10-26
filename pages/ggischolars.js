import React from 'react'
import Image from 'next/image';

import Heading from '../components/global/Heading'
import SlidingHero from '../components/global/SlidingHero'
import Portfolio from '../components/Portfolio'
// -------------------------------------------------------
import network from '../public/network.jpg'
import clinton from '../public/clinton.png'
import rjgupta from '../public/rajat_gupta.png'
import poets from '../public/poetsnquants.png'
// -------------------------------------------------------

import bg from '../public/mba.jpg'
const ggischolars = () => {
  return (
    <div>
      <SlidingHero image={'./mba.jpg'} />
      <div id='' className='p-4 flex justify-center'>
        <button className="bg-blue-700 hover:bg-blue-500 text-white font-bold my-12 py-5 px-12 border border-blue-500 rounded">
          Advance Your Career by Applying Now
        </button>
      </div>
      <Heading heading={'Why GGI Impact MBA Scholars Works ? '} />
      <div className="p-3 md:p-12 flex justify-center">
        <div className="w-6/7 lg:w-4/5 grid grid-cols-2 md:grid-cols-4 gap-3 lg:gap-4 primary">
          <div className='flex flex-col text-center'>
            <div> <Image className='' src={rjgupta} /></div>
            <h2 className='text-2xl my-8'>Learn from Industry Leaders</h2>
            <p className='mt-3 text-justify'>"The top CXOs write their own business cases, and teach core Business Concepts via designing a case-based learning ecosystem. "</p>
          </div>
          <div className='flex flex-col text-center'>
            <div> <Image src={clinton} /></div>
            <h2 className='text-2xl my-8'> Get Recruited by Top Employers</h2>
            <p className='mt-1 text-justify'>GGI has forged strong employment partnerships with leading consulting, public policy, product management, and impact investing organizations. </p>
          </div>
          <div className='flex flex-col text-center'>
            <div><Image className='' src={network} /></div>
            <h2 className='text-2xl my-8'>  Become Part of Global Network</h2>
            <p className='mt-10 text-justify'>Global community represents powerful internationally diverse leaders who are at the helm of leading organizations. And this community helps each other out - not just in referring you to your first job, but in navigating a thriving career or in building your startups.</p>
          </div>
          <div className='flex flex-col text-center'>
            <div><Image src={poets} /></div>
            <h2 className='text-2xl my-8'>Globally Recognized </h2>
            <p className='mt-6 text-justify'>GGI MBA was globally featured by Poets and Quants as the world’s most disruptive Alt MBA program. It was also recognized by BCG Global Media for its learning outcomes </p>
          </div>
        </div>
      </div>

    </div>
  )
}

export default ggischolars