import React from 'react'
import IgImg1 from '../public/ig-img-1.jpeg';
import IgImg2 from '../public/ig-img-2.jpeg';
import IgImg3 from '../public/ig-img-3.jpeg';
import IgImg4 from '../public/ig-img-4.jpeg';
import IgImg5 from '../public/ig-img-5.jpeg';
import IgImg6 from '../public/ig-img-6.jpeg';
import InstagramImg from './InstagramImg';
import img12 from '../public/12.jpg';
import img13 from '../public/13.jpg';
import img14 from  '../public/14.jpg';
// import img15 from  '../public/15.jpg';
// import img16 from  '../public/16.jpg';
import img17 from  '../public/17.jpg';
import img18 from  '../public/18.jpg';
import img19 from  '../public/19.jpg';


const Instagram = () => {
  return (
    <div className='md:w-3/4 mx-auto text-center md:py-5'>
      <div className='grid grid-cols-2 md:grid-cols-3 gap-5 lg:gap-10 p-4 :plg-12'>
        <InstagramImg socialImg={img13} caption={'Ex Asia Chairman,Blackrock'} />
        <InstagramImg socialImg={img12} caption={'Ex-Global CEO, Mckinsey & Co'} />
        <InstagramImg socialImg={img14} caption={'Ex-BCG India Chairman'}/>

        <InstagramImg socialImg={img17} caption={''}/>
        <InstagramImg socialImg={img18} caption={''}/>
        <InstagramImg socialImg={img19} caption={''}/>
        <InstagramImg socialImg={IgImg3} caption={''}/>
        <InstagramImg socialImg={IgImg4} caption={''}/>
        <InstagramImg socialImg={IgImg6} caption={''}/>
      </div>
    </div>
  )
}

export default Instagram