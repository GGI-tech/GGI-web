import React from 'react'
import Image from 'next/image';


const FourColumnLayout = ({ data }) => {
  return (
    <div className="p-5 md:p-12">
      <div className="mx-auto w-6/7 lg:w-3/4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 lg:gap-4 primary">
        {data.map((e) => {
          return (
            <div key={e.id} className='flex flex-col text-center mt-6'>
              <div> <Image className='' alt="" src={e.img} /></div>
              <h2 className='text-2xl font-bold h-20 md:h-36 lg:h-28 pt-2 mt-4'>{e.title}</h2>
              <p className='text-justify mt-3 p-2'>{e.body}</p>
            </div>
          );
        })}

      </div>
    </div>
  )
}

export default FourColumnLayout;