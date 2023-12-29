import React from 'react'
import Image from 'next/image';


const FourColumnLayout2 = ({ data }) => {
  return (
    <div className="p-5 md:p-12">
      <div className="mx-auto w-6/7 lg:w-4/5 xl:w-3/4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-4 primary">
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
      <p className="mt-80 text-center text-lg">The world is getting complex and with it complex solutions are needed. Most public policy problems<br/> today require technological solutions. However schools and universities are either not teaching them<br/> or teaching is siloes. GGI Tech Policy Scholar program aims to bridge this gap in the society to bring<br/> Tech leaders to solve world&apos;s trickiest problems. </p>
    </div>
  )
}

export default FourColumnLayout2;