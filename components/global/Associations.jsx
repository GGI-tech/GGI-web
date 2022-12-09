import React from 'react'
import Image from 'next/image';

import un from '../../public/UN.png'
import harvard from '../../public/Harvard.png'
import ceibs from '../../public/ceibs.png'


const Associations = () => {
    return (
        <div className='mx-3 flex justify-center'>
            <div className='md:w-3/4 gap-5 flex flex-row justify-around'>
                <Image src={ceibs} alt="ceibs"/>
                <Image src={harvard} alt="harvard" />
                <Image src={un} alt="un"/>
            </div>
        </div>
    )
}

export default Associations