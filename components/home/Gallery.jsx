import React from 'react'

import InstagramImg from '../global/InstagramImg';
import img12 from '../../public/12.jpg';
import img13 from '../../public/13.jpg';
import img14 from  '../../public/14.jpg';
// import img15 from  '../../public/15.jpg';
// import img16 from  '../public/16.jpg';
import img17 from  '../../public/17.jpg';
import img18 from  '../../public/18.jpg';
import img19 from  '../../public/19.jpg';
import img20 from '../../public/20.jpg';
import img21 from '../../public/21.jpg';
import img22 from '../../public/22.jpg';

const Gallery = () => {
  return (
    <div className='md:w-3/4 mx-auto text-center md:py-5'>
      <div className='grid grid-cols-2 md:grid-cols-3 gap-5 lg:gap-10 p-4 :plg-12'>
        <InstagramImg socialImg={img13} caption={'Ex Asia Chairman, Blackrock'} />
        <InstagramImg socialImg={img12} caption={'Ex-Global CEO, Mckinsey & Co'} />
        <InstagramImg socialImg={img14} caption={'Ex-BCG India Chairman & Member, Planning Commission India'}/>

        <InstagramImg socialImg={img17} caption={'Global Chairman, BCG Henderson Institute'}/>
        <InstagramImg socialImg={img18} caption={'President, Amazon AWS South Asia'}/>
        <InstagramImg socialImg={img19} caption={'Former OSD NITI Aayog'}/>
        <InstagramImg socialImg={img20} caption={'Partner BCG, Social Impact Practice'}/>
        <InstagramImg socialImg={img21} caption={'BCG, Managing Director & Senior'}/>
        <InstagramImg socialImg={img22} caption={'Dean, IBGC Fletcher School of Law '}/>
      </div>
    </div>
  )
}

export default Gallery