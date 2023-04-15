import { React, useState } from 'react'
import Image from 'next/image';

import Heading from '../global/Heading'
import AltIITHero from '../global/AltIITHero';
import Button from '../global/Button';
import YoutubeEmbed from '../global/YoutubeEmbed';
import Container from '../global/Container';
import Partners from '../global/Partners';
import Accordion from '../global/Accordian';
import Gallery from '../global/Gallery';
import Community from '../global/Community';
import Curriculum from '../global/Curriculum';
import Masterclasses from '../global/Masterclasses';
import FourColumnLayout from '../global/FourColumnLayout';
import OfficialPartners from '../global/OfficialPartners';
import certificate from '../../public/certificate.jpg'
import Associations from '../global/Associations';
import Steps from '../global/Steps'
import Footer from '../global/Footer';
import Slider from '../global/Slider'
import { companies,fourcolumndata,stages, testimonialMBA, curriculum, galleryData } from '../../data/altiitData';


import m1 from '../../public/m1.jpg';
import m2 from '../../public/m2.jpg';
import m3 from '../../public/m3.jpg';
import m4 from '../../public/m4.jpg';
import m5 from '../../public/m5.jpg';
import m6 from '../../public/m6.jpg';
import m7 from '../../public/m7.jpg';
import m8 from '../../public/m8.jpg';
import m9 from '../../public/m9.jpg';
const data1 = [
    {
      'img': m1,
      'name': "Programming Language Masterclass"
    },
    {
      'img': m2,
      'name': "Data Structures and Algorithm Masterclass "
    },
    {
      'img': m3,
      'name': "The Specialization Masterclass"
    },
    {
      'img': m4,
      'name': "Software & System Design Masterclass"
    },
    {
      'img': m5,
      'name': "PM for Enginers Masterclass"
    }
  
  ]
  
  const data2 = [
    {
      'img': m6,
      'name': "Management Communications & Leadership Masterclass"
    },
    {
      'img': m7,
      'name': "CV and Case Interview Prep Masterclass"
    },
    {
      'img': m8,
      'name': "Leadership in Tech Masterclass"
    },
    {
      'img': m9,
      'name': "Startup Masterclass"
    }
  ]

const MBA = () => {

    const [isOpened, setIsOpened] = useState(false);

    function toggle() {
        setIsOpened(wasOpened => !wasOpened);
    }
    return (
        <div>
            <AltIITHero/>
            <Button page="mba" url="https://docs.google.com/forms/d/e/1FAIpQLSfWPZ5mDyvjjXCBVJJ8Lhtmk3QQIVg-jmrpe6SrNa2gfMgmpg/viewform"> ADVANCE YOUR CAREER BY APPLYING NOW</Button>


            <Heading margin={60}>Why GGI ALT IIT Scholars Works? </Heading>
            <FourColumnLayout data={fourcolumndata} />

            <p className='px-8 my-8 text-center font-medium'>GGI ALT IIT has created an IIT-level outcome at 1/100th of the cost. </p>
            <Container ><span className='primary font-medium'>Private engineering colleges are on the rise and with that is rising underemployment. Your Undergrad is a big investment, in terms of - time, money, and emotions.</span> It costs upward of INR 3,00,000 to pursue an engineering from private engineering college in India. Despite the high premium - many of the engineering institutes (baring few good IITs) teach outdated curriculum, do not have an extensive network, do not have experiential learning components, nor do they have strong industry connections. We at Global Governance Initiative solve this through our mission. </Container>
            <div className='my-8'></div>
            <YoutubeEmbed embedId='8lWeJ3Ekq-I' autoplay={1}/>


            <Heading>You Learn along with Diverse Community who Adds to your Perspective</Heading>
            <Slider slides={testimonialMBA} />
            <YoutubeEmbed embedId='iuNMaVSwH0E' autoplay={1}/>
            <Button page="mba" url="https://docs.google.com/forms/d/e/1FAIpQLSfWPZ5mDyvjjXCBVJJ8Lhtmk3QQIVg-jmrpe6SrNa2gfMgmpg/viewform"> APPLY NOW</Button>


            <Heading>+88% GGIians working in Top Product Organizations</Heading>
            <Partners companies={companies} />
            <Button page="mba" url="https://docs.google.com/forms/d/e/1FAIpQLSfWPZ5mDyvjjXCBVJJ8Lhtmk3QQIVg-jmrpe6SrNa2gfMgmpg/viewform"> APPLY NOW</Button>


            <Heading>Who is this Program for?</Heading>
            <Container>
                <p> 1. You are a young professional who missed the IIT bus and is looking for better  <span className='primary font-bold'> Alternatives to IITs</span> and want to learn directly from top tech leaders.</p><br />
                <p>2. You are non-MBA looking to stay in tech field and pivot in design, machine learning and tech roles in firms such as<span className='primary font-bold'> Google, Amazon</span> and in firms such as Uber, Amazon, Microsoft, & leading tech startups.</p><br />
                <p>3. You are a <span className='primary font-bold'>school student </span>with admits to IITs, NITs, and MIT Boston Undergraduate program, and other top Engineering schools and looking to start your tech curriculum before your program.</p><br />
                <p className='mb-24'>4. You are a <span className='primary font-bold'>budding entrepreneur</span> who is aiming to launch & scale ventures and looking to strengthen tech skills while building an incredible support system.</p>

            </Container>
            <YoutubeEmbed embedId='NrAvqFqbZrU' />
            <Button page="mba" url="https://docs.google.com/forms/d/e/1FAIpQLSfWPZ5mDyvjjXCBVJJ8Lhtmk3QQIVg-jmrpe6SrNa2gfMgmpg/viewform"> APPLY NOW</Button>

            <Heading>Curriculum & Commitment</Heading>
            <Curriculum data={curriculum}/>
            <YoutubeEmbed embedId='lGyhkONUSwk' />


            <Heading>A Liberal Refund Policy for You  </Heading>
            <Container>
                <p className='text-lg'>Your learning is our no. 1 goal and we want this decision to be 100% risk-free for you so you can just focus on learning.  We have <span className="font-bold">no questions ask the full refund of the enrollment amount</span> of the selected scholars and fellows, till the first 6 days from the payment date. </p>
            </Container>

            <Heading>You Learn & Build Network with World&apos;s Top CTOs, Engineers, & Tech Leaders</Heading>
            <Gallery data={galleryData}/>


            <Heading>As a GGI ALT IIT Scholar , You will Immerse Yourself in a Truly Transformative Experience  </Heading>
            <Container>
                <p className='mb-2'>Leaders looking to pivot into the World of <span className='font-semibold'>System and Architecture Design, Software Engineering and Machine Learning </span> should be able to successfully navigate different cultures, economies, sectors, and industries. </p>
                <p>To help you develop these crucial abilities, GGI has carefully curated a portfolio of immersive, experiential courses that take place across sectors and industries. This is achieved in 3 stages : </p>
            </Container>
            <Steps data={stages} />
            <Button page="mba" url="https://docs.google.com/forms/d/e/1FAIpQLSfWPZ5mDyvjjXCBVJJ8Lhtmk3QQIVg-jmrpe6SrNa2gfMgmpg/viewform"> APPLY NOW</Button>

            <Heading>Learn What Matters via GGI Case-based Masterclasses in System Design, Machine Learning & Programming</Heading>
            <Masterclasses d1={data1} d2={data2} />
            <YoutubeEmbed embedId='nQkS0i38ls8' />

            <Heading>At GGI, We Believe In- Person Community is the CornerStone when You are Learning Online </Heading>
            <div className='flex lg:w-2/3 lg:mx-auto gap-5 flex-wrap mx-3'>
              <Image src={'/techcommunity.png'} height={300} width={520}/>
              <Image src={'/techcommunity2.jpg'} height={300} width={520}/>
              
            </div>
            <Heading>Program Fees </Heading>
            <Container> <p >Our competitors charge Rs. 3,00,000 to Rs. 7,00,000. So we decided to try crazy pricing. <span className='font-bold'>We are 80% cheaper than our competitor&#39;s price.</span> We are doing this because we want to make high-quality business and policy education truly accessible to you all and disrupt the space.
                <br /><br />
                Or if you don&#39;t want to commit, we have no questions ask full refund policy within 6 days of enrollment payment, i.e. if you are selected ( we have &lt;10% selection rate). <span className='font-bold'>Either way, you win.</span> To get detailed pricing and information, it is accessible on our application page <u><a href='https://docs.google.com/forms/d/e/1FAIpQLSfWPZ5mDyvjjXCBVJJ8Lhtmk3QQIVg-jmrpe6SrNa2gfMgmpg/viewform' target="_blank" rel='noreferrer'>here</a></u></p>
            </Container>



            <Heading>GGI Graduation Certificate</Heading>
            <Container>
                <div className='grid grid-cols-1 md:grid-cols-3 gap-5'>
                    <div>
                        <Image src={certificate} alt="" />
                    </div>
                    <div className='col-span-2'>
                        <p className='mb-2'>Let us be honest. We are not in the certificate minting business. However, on successful completion of the program, you receive a unique GGI ALT IIT Scholars graduation letter-</p>
                        <ul className='list-disc ml-4'>
                            <li>Showcasing your hard, fun, and enriching journey from a prestigious Global Governance Initiative ALT IIT Scholars journey</li>
                            <li>Get a chance to network with GGI  industry experts, and peers during the program</li>
                            <li>Gain demonstrable hands-on skills in tech, programming, and leadership</li>
                        </ul>
                    </div>
                </div>
            </Container>
            <Heading>GGI Official Partners Ready to Collaborate with you </Heading>
            <OfficialPartners />
            <Heading>GGI Associations</Heading>
            <Associations />

            <Heading>Frequently Asked Questions</Heading>
            <Accordion />
            {/* <Socials /> */}
            <Footer />
        </div>
    )
}

export default MBA