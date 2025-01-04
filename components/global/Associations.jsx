// import Image from 'next/image';

// import un from '../../public/UN.png'
// import harvard from '../../public/Harvard.png'
// import ceibs from '../../public/ceibs.png'
// import goa from '../../public/goa.jpg'
// import ongc from '../../public/ongc.png'


// const Associations = () => {
//     return (
//         <div className='px-3 mx-auto md:w-3/4 gap-5 flex flex-row justify-around'>
//             <Image src={ceibs} alt="ceibs" />
//             <Image src={harvard} alt="harvard" />
//             <Image src={un} alt="un" />
//             <Image src={goa} alt="goa" />
//             <Image src={ongc} alt="ongc" />
            
//         </div>
//     )
// }

// export default Associations

import Image from 'next/image';

import un from '../../public/UN.png';
import harvard from '../../public/Harvard.png';
import ceibs from '../../public/ceibs.png';
import goa from '../../public/goa.jpg';
import ongc from '../../public/ongc.png';

const Associations = () => {
    return (
        <div className='px-3 mx-auto md:w-3/4 gap-5 flex flex-row justify-around'>
            <div className="w-32 h-32 relative">
                <Image src={ceibs} alt="ceibs" layout="fill" objectFit="contain" />
            </div>
            <div className="w-32 h-32 relative">
                <Image src={harvard} alt="harvard" layout="fill" objectFit="contain" />
            </div>
            <div className="w-32 h-32 relative">
                <Image src={un} alt="un" layout="fill" objectFit="contain" />
            </div>
            <div className="w-32 h-32 relative">
                <Image src={goa} alt="goa" layout="fill" objectFit="contain" />
            </div>
            <div className="w-32 h-32 relative">
                <Image src={ongc} alt="ongc" layout="fill" objectFit="contain" />
            </div>
        </div>
    );
};

export default Associations;
