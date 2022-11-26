import React from 'react';
import Image from 'next/image';

// import BCG from '../../public/BCG_M.jpg';
// import Delloite from '../../public/delloite.jpg';
// import ey from '../../public/ey.jpg';
// import dalberg from '../../public/dalberg.jpg';
// import fsg from '../../public/fsg.jpg';
// import bain from '../../public/bain-logo.jpg';
// import kearney from '../../public/Kearney.jpg';
// import bridgespan from '../../public/bridgespan.jpg';
// import mckinsey from '../../public/mckinsey.jpg';
// import pwc from '../../public/pwc.jpg';
// import UN from '../../public/UN.jpg';
// import Worldbank from '../../public/Worldbank.jpg';
// import gov from '../../public/gov.jpg';


const Partners = ({ companies,g }) => {
    return (
        <div className='flex flex-row justify-center'>
            <div className='md:p-8 lg:w-5/6 flex flex-row justify-center gap-1 md:gap-4 flex-wrap'>
                {companies.map((c, index) => {
                    return (
                        <div key={index} >
                            <Image src={c} objectFit="contain" alt="partners"/>
                        </div>
                     
                    )
                })}
                {/* <div><Image src={BCG} alt='/' /></div>
            <div><Image src={mckinsey} alt='/' /> </div>
            <div><Image src={bain} alt='/' /></div>
            <div><Image src={dalberg} alt='/' /></div>
            <div><Image src={kearney} alt='/' /></div>
            <div><Image src={fsg} alt='/' /></div>
            <div><Image src={UN} alt='/' /> </div>
            <div><Image src={gov} alt='/' /> </div>
            <div><Image src={Worldbank} alt='/' /></div>
            <div><Image src={pwc} alt='/' /></div>
            <div><Image src={bridgespan} alt='/' /></div>
            <div><Image src={Delloite} alt='/' /></div>
            <div><Image src={ey} alt='/' /></div> */}

            </div>
        </div>

    );
};

export default Partners;
