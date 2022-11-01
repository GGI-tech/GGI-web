import React from 'react'
import Image from 'next/image';
import ibgc from '../../public/IBGC.png'
import fletchers from '../../public/fletcher.jpg'

const OfficialPartners = () => {
    return (
        <div className='flex justify-center'>
            <div className='w-3/5 gap-5 flex flex-row flex-wrap justify-around'>
                <Image src={fletchers}/>
                <Image src={ibgc}/>
                
            </div>
        </div>
    )
}

export default OfficialPartners