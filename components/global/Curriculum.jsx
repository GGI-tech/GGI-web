import React from 'react'

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

const Curriculum = () => {
    return (

        <div className='md:w-3/4 mx-auto text-center md:py-5'>
            <div className='grid grid-cols-2 md:grid-cols-4 gap-5 lg:gap-10 p-4 :plg-12'>
                <div className=''>
                    <h2 className='pink'>3-6 Months</h2>
                    <p>Program length, flexible upon your needs and availability</p>
                </div>
                <div className=''>
                    <h2 className='pink'>90+ Hours of Business Masterclasses</h2>
                    <p>Over 9  weekends, based on your availability </p>
                </div>
                <div className=''>
                    <h2 className='pink'>41+ Employment Partners</h2>
                    <p>Who recruit from GGI peridocially</p>
                </div>
                <div className=''>
                    <h2 className='pink'>60+ Hours of Business Interview Practice</h2>
                    <p>Via our inhouse AI Based software</p>
                </div>
                {/* -------------------------------------------------------------------- */}
                <div className=''>
                    <h2 className='pink'>Unlimited Networking </h2>
                    <p>You continue to be a part of the family post your graduation</p>
                </div>
                <div className=''>
                    <h2 className='pink'>1:1 Founders' Office Hours </h2>
                    <p>During graduation. 1 to take forward your MBA dreams  </p>
                </div>
                <div className=''>
                    <h2 className='pink'>GGI Projects & Startup Weekend</h2>
                    <p>Peer to Peer projects </p>
                </div>
                <div className=''>
                    <h2 className='pink'>10+ Hours of Trinity</h2>
                    <p>You get access to recorded Masterclasses of top speakers in consulting at GGI </p>
                </div>


            </div>
        </div>

    )
}

export default Curriculum