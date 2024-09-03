import React from 'react'
import Image from 'next/image';


const FiveColumnLayout = ({ data }) => {
  return (
    <div className="p-5 md:p-12">
      <div className="mx-auto w-full lg:w-11/12 xl:w-5/6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 md:gap-4 primary">
        {data.map((e) => {
          return (
            <div key={e.id} className='flex flex-col text-center mt-6'>
              <div> <Image placeholder="blur" className='' alt="" src={e.img} /></div>
              <h2 className='text-xl font-bold h-20 md:h-36 lg:h-28 pt-2 mt-4'>{e.title}</h2>
              <p className='text-center sm:text-justify px-2' dangerouslySetInnerHTML={{__html:e.body}}></p>
            </div>
          );
        })}

      </div>
    </div>
  )
}

export default FiveColumnLayout;