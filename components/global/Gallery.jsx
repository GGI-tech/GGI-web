import React,  { useState } from 'react'

import InstagramImg from '../global/InstagramImg';
import img12 from '../../public/12.jpg';
import img13 from '../../public/13.jpg';
import img14 from '../../public/14.jpg';
import img15 from '../../public/15.jpg';
import img16 from '../../public/16.jpg';
import img17 from '../../public/17.jpg';
import img18 from '../../public/18.jpg';
import img19 from '../../public/19.jpg';
import img20 from '../../public/20.jpg';
import img21 from '../../public/21.jpg';
import img22 from '../../public/22.jpg';
import img23 from '../../public/23.jpg';
import img24 from '../../public/24.jpg';
import img25 from '../../public/25.jpg';
import img26 from '../../public/26.jpg';
import img27 from '../../public/27.jpg';
import img28 from '../../public/28.jpg';
import img29 from '../../public/29.jpg';

const Gallery = () => {
  const [isOpened, setIsOpened] = useState(false);

  function toggle() {
    setIsOpened(wasOpened => !wasOpened);
  }
  return (
    <>
      <div className='md:w-2/3 mx-auto text-center md:py-5'>
        <div className='grid grid-cols-2 md:grid-cols-3 gap-5 lg:gap-10 p-4 :plg-12'>
          <InstagramImg socialImg={img13} caption={'Ex Asia Chairman, Blackrock'} />
          <InstagramImg socialImg={img12} caption={'Ex-Global CEO, Mckinsey & Co'} />
          <InstagramImg socialImg={img14} caption={'Ex-BCG India Chairman & Member, Planning Commission India'} />
          <InstagramImg socialImg={img15} caption={'Ex- Mckinsey Partner; Advisor, Pata'} />
          <InstagramImg socialImg={img16} caption={'Managing Partner, Promethos Capital'} />
          <InstagramImg socialImg={img17} caption={'Global Chairman, BCG Henderson Institute'} />
          <InstagramImg socialImg={img18} caption={'President, Amazon AWS South Asia'} />
          <InstagramImg socialImg={img19} caption={'Former OSD NITI Aayog'} />
          <InstagramImg socialImg={img20} caption={'Partner BCG, Social Impact Practice'} />
          <InstagramImg socialImg={img21} caption={'BCG, Managing Director & Senior'} />
          <InstagramImg socialImg={img22} caption={'Dean, IBGC Fletcher School of Law '} />
          <InstagramImg socialImg={img23} caption={'Dean, IBGC Fletcher School of Law '} />
        </div>
      </div>
      {!isOpened && (<div className='text-center text-sm md:text-base text-blue-900' onClick={toggle}>Show more..</div>)}
      {isOpened && (
        <div className='md:w-3/4 mx-auto text-center md:py-5'>
          <div className='grid grid-cols-2 md:grid-cols-3 gap-5 lg:gap-10 p-4 :plg-12'>
            <InstagramImg socialImg={img24} caption={'CEO, Arthur D. Little, South Asia & India '} />
            <InstagramImg socialImg={img25} caption={'Minister in Malaysia '} />
            <InstagramImg socialImg={img26} caption={'Harvard MBA, Chief of Staff- Hike '} />
            <InstagramImg socialImg={img27} caption={'Coach, Ted Speakers'} />
            <InstagramImg socialImg={img28} caption={'Ex NDTV Host, Ex- Bain Consultant '} />
            <InstagramImg socialImg={img29} caption={'Former COO, UNICEF (Generation Unlimited) '} />
          </div>
        </div>)}
    </>
  )
}

export default Gallery