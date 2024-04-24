import React from 'react'
import Image from 'next/image';

// 
const ThreeColumnLayout = ({ data }) => {
  return (
    <div className="p-5 md:p-12">
      <div className="mx-auto w-6/7 lg:w-4/5 xl:w-3/4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-4 primary">
        {data.map((e) => {
          return (
            <div key={e.id} className='flex flex-col text-center mt-6'>
              <div> <Image placeholder="blur" height={150} width={180} className='' alt="" src={e.img} /></div>
              <p className='text-center sm:text-justify px-2 mt-4' dangerouslySetInnerHTML={{__html:e.body}}></p>
            </div>
          );
        })}

      </div>
    </div>
  )
}

export default ThreeColumnLayout;