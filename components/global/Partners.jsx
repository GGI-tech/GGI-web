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
// import tony from '../../public/tony.png';


const Partners = ({ companies,g }) => {
//     return (
//         <div className='flex justify-center'>
//             <div className='md:p-8 lg:w-3/4 flex flex-row justify-around sm:justify-center gap-1  flex-wrap'>
//                 {companies.map((c, index) => {
//                     return (
//                         <div className='w-52 h-48 flex' key={index} >
//                             <Image src={c} objectFit="contain" alt="partners"/>
//                         </div>
                     
//                     )
//                 })}
//                 {/* <div><Image src={BCG} alt='/' /></div>
//             <div><Image src={mckinsey} alt='/' /> </div>
//             <div><Image src={bain} alt='/' /></div>
//             <div><Image src={dalberg} alt='/' /></div>
//             <div><Image src={kearney} alt='/' /></div>
//             <div><Image src={fsg} alt='/' /></div>
//             <div><Image src={UN} alt='/' /> </div>
//             <div><Image src={gov} alt='/' /> </div>
//             <div><Image src={Worldbank} alt='/' /></div>
//             <div><Image src={pwc} alt='/' /></div>
//             <div><Image src={bridgespan} alt='/' /></div>
//             <div><Image src={Delloite} alt='/' /></div>
//             <div><Image src={ey} alt='/' /></div>
//             <div><Image src={tony} alt='/' /></div> */}

//             </div>
//         </div>

//     );
return (
    <div className='flex justify-center'>
      <div className='md:p-8 lg:w-3/4 flex flex-row justify-around sm:justify-center gap-4 flex-wrap'>
        {companies.map((c, index) => {
          const isPwC = c.src?.toLowerCase().includes("pwc");
  
          return (
            <div
              key={index}
              className={`flex relative ${
                isPwC ? 'w-100 h-100' : 'w-52 h-48'
              }`}
            >
              <Image
                src={c}
                alt="partners"
                fill
                className="object-contain"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
  
};


export default Partners;
