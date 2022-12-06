import React from 'react'

const Curriculum = () => {
    return (

        <div className='md:w-2/3 mx-auto text-center md:py-5'>
            <div className='grid grid-cols-2 md:grid-cols-4 gap-5 lg:gap-10 p-4 :plg-12'>
                <div className=''>
                    <p className='pink font-bold text-xl h-20 mb-3'>3-6 Months</p>
                    <p className="italic">Program length, flexible upon your needs and availability</p>
                </div>
                <div className=''>
                    <p className='pink font-bold text-xl h-20 mb-3'>90+ Hours of Business Masterclasses</p>
                    <p className="italic">Over 9  weekends, based on your availability </p>
                </div>
                <div className=''>
                    <p className='pink font-bold text-xl h-20 mb-3'>52+ Employment Partners</p>
                    <p className="italic">Who recruit from GGI peridocially</p>
                </div>
                <div className=''>
                    <p className='pink font-bold text-xl h-20 mb-3'>60+ Hours of Business Interview Practice</p>
                    <p className="italic">Via our inhouse AI Based software</p>
                </div>
                {/* -------------------------------------------------------------------- */}
                <div className='mt-12'>
                    <p className='pink font-bold text-xl h-20 mb-3'>Unlimited Networking </p>
                    <p className="italic">You continue to be a part of the family post your graduation</p>
                </div>
                <div className='mt-12'>
                    <p className='pink font-bold text-xl h-20 mb-3'>1:1 Founders&#39; Office Hours </p>
                    <p className="italic">During graduation. 1 to take forward your MBA dreams  </p>
                </div>
                <div className='mt-12'>
                    <p className='pink font-bold text-xl h-20 mb-3'>GGI Projects & Startup Weekend</p>
                    <p className="italic">Peer to Peer projects </p>
                </div>
                <div className='mt-12'>
                    <p className='pink font-bold text-xl h-20 mb-3'>10+ Hours of Trinity</p>
                    <p className="italic">You get access to recorded Masterclasses of top speakers in consulting at GGI </p>
                </div>


            </div>
        </div>

    )
}

export default Curriculum