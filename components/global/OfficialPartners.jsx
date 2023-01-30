import Image from 'next/image';
import ibgc from '../../public/ibgc.png'
import fletchers from '../../public/fletcher.jpg'

const OfficialPartners = () => {
    return (
        <div className='px-3 mx-auto md:w-3/5 gap-5 flex flex-row  justify-around'>
            <Image src={fletchers} alt="" />
            <Image src={ibgc} alt="" />
        </div>

    )
}

export default OfficialPartners