
import React from 'react'
import MainHero from '../global/MainHero';
import Image from 'next/image';
import Gallery from '../global/Gallery';
import Heading from '../global/Heading';
import Heading2 from '../global/Heading2';
// import Hero from '../global/Hero';
import Slider from '../global/Slider';
import { fourcolumndata, companies, testimonialMain, stages } from '../../data/mainpgData';
import YoutubeEmbed from '../global/YoutubeEmbed';
import InstagramEmbed from '../global/InstagramEmbed';

import Partners from '../global/Partners';
import Accordion from '../global/Accordian';
import Contact from '../global/Contact';
import Container from '../global/Container'
import Footer from '../global/Footer';
import Button from '../global/Button';
import Steps from '../global/Steps'
//---------------------------------------------------------
import poets from '../../public/poets.jpg';
import bcg from '../../public/bcg-green.png';
import Linkedin from '../../public/linkedin.jpg';
import Goasummit1 from '../../public/Goasummit1.png';
import Goasummit2 from '../../public/Goasummit2.png';
import Goasummit3 from '../../public/Goasummit3.jpg';
import Goasummit4 from '../../public/Goasummit4.jpeg';
import yrstory from '../../public/ET_logo.png';
import wef from '../../public/WEF.png'
// -------------------------------------------------------
import bhaskar_chakra from '../../public/bhaskar_chakra.jpg'
import Community from '../../components/global/Community';
import FourColumnLayout from '../../components/global/FourColumnLayout';
// -------------------------------------------------------

import contact from '../../public/ss-new.jpg'



const Main = () => {

    return (
        <div>

            {/* <Hero heading='' home={true} message='' /> */}
            <MainHero />

            <Button url="/impact-fellowship">
                Kickstart your transformation ➞
            </Button>

            <Heading>Hear from GGIians who have successfully transitioned into <strong>Consulting</strong>, <strong>Policy</strong>, and <strong>Product Management</strong> roles - their experiences with us.</Heading >

            <Slider slides={testimonialMain} />

            <br/>
            <br/>

            <Heading>+88% GGIians working in Top <strong >Consulting,</strong><strong> Policy,</strong> <strong>Product</strong> Roles and Organizations
            </Heading>
            <Partners companies={companies} />

            {/* <div className='skin'> */}
            <Heading2>GGI is a consulting floor.
 You’ll learn directly from industry leaders - solve real cases, publish live research, and graduate with global career readiness in <strong>consulting</strong>, <strong>policy</strong>, <strong>product</strong> roles. </Heading2>

            <Container>
                <p >Explore our specific programs available within our fellowship, including the two flagship Scholar tracks, to discover more about admission requirements, scholarships, and career opportunities. Upskill and learn how to build a successful career in fields such as Management Consulting, Product Management, Policy, Finance, Impact Investing, or Program Management.  </p>

            </Container>

            <div className="p-4 flex justify-center">
                <div className="lg:w-5/6 grid grid-cols-1 sm:grid-cols-2 gap-10  lg:grid-cols-5 " >
                    <div className='lg:col-span-2'>
                        <div className='text-center md:text-left min:h-[27rem] '>
                            <h2 className='text-xl md:text-2xl my-8 primary text-center md:text-left'>GGI Management Scholar </h2>
                            <p className='my-5 text-lg font-semibold'>Who is this program for?</p>
                            <p className='my-7'>1. <span className='primary font-semibold'>GGI MBA Scholars are ambitious thinkers</span> who don’t wait for permission. </p>
                            <p className='my-7'>2.  They’re <span className='primary font-semibold'>management consulting aspirants</span> designing strategies before interviews, engineers pivoting to strategy and founders learning the language of <span className='primary font-semibold'>global consulting</span>.
</p>
                            <p className='my-7'>3. GGI MBA Scholars escape stagnation - <span className='primary font-semibold'>design strategies that move societies</span> </p>
                            <p className='my-7'>4. You don’t need another MBA/MIM degree -<span className='primary font-semibold'>you need direction, discipline, and direct access.</span></p>

                        </div>
                        <br/>
                        <div className='flex justify-center md:justify-start mb-10 md:mb-0'>
                            <Button url="/ggi-scholars">
                                Learn More about GGI Impact MBA
                            </Button>
                        </div>
                    </div>
                    <div className='hidden lg:block lg:col-span-1'></div>
                    <div className='lg:col-span-2'>
                        <div className='text-center md:text-left min:h-[27rem] '>
                            <h2 className='text-xl md:text-2xl my-8 primary text-center md:text-left'>GGI Policy Scholar </h2>
                            <p className='my-7 text-lg font-semibold'>Who is this program for?</p>
                            <p className='my-7'>1. <span className='primary font-semibold'>GGI Policy Scholars are ambitious leaders</span> who don’t wait for permission. </p>
                            <p className='my-7'>2. They’re <span className='primary font-semibold'> policy and development sector aspirants</span> designing policies before interviews, engineers pivoting to social impact, and social impact leaders learning the language of MBA. </p>
                            <p className='my-7'>3. GGI Policy Scholars turn their frustration into fluency - <span className='primary font-semibold'>learn how real policy gets shaped by the world’s best.</span> </p>
                            <p className='my-7'>4. You don’t need another MPP - <span className='primary font-semibold'>you need discipline, and direct access.</span></p>

                        </div>
                        <div className='flex justify-center md:justify-start mb-0'>
                            <Button url="/ggipolicyscholarsprogram">
                                Learn More about GGI Policy Scholar
                            </Button>
                        </div>
                    </div>

                </div>
            </div>
            <YoutubeEmbed embedId="jg2icvxDHhw" autoplay={1} />

            {/* <InstagramEmbed postUrl="https://www.instagram.com/reel/DJRVTAZhEZ3/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==" /> */}

            {/* </div> */}

            <Heading> The GGI Philosophy </Heading>

            <div className='mt-24 flex justify-center'>
                <p className='md:w-3/5 md:text-lg mb-5 text-justify'>In a world of noise, depth is your edge.
                GGI’s case-based, mentor-led ecosystem is designed to make you fluent in the intersection of management, policy, and technology.
                Because the next decade won’t belong to specialists - it’ll belong to systems thinkers who can lead across domains.</p>
            </div>



            <Heading> You Solve Cases & Network with World&#39;s Top <strong>CEOs</strong>, Partners in Consulting, Policy, Product Leaders </Heading>
            <Gallery />



            <div className='mt-24 flex justify-center'>
                <p className='md:w-3/5 md:text-lg mb-5 text-center'>Many large employers find that Global Governance Initiative prepares Young Professionals not only for General Management Positions but also for jobs within governmental affairs, environmental affairs, other functional areas that necessitate an education that goes beyond traditional business skills. </p>
            </div>
            <YoutubeEmbed embedId='34Hgf5F_M90' autoplay={1}/>
            
            
            <Heading>Global Recognition Allows us to Serve you Better</Heading>
            <div className="p-5 md:p-12 grid grid-cols-4 sm:grid-cols-4 lg:grid-cols-5 gap-4 lg:gap-5">
                <div className="flex flex-col items-center col-span-2 lg:col-span-1">
                    <div className="h-40">
                        <Image src={poets} alt="" />
                    </div>
                    <p className="mt-12 text-yellow-600 text-center">
                    &quot;In Just 3 Years, This Disruptive Indian Pre-MBA Has Graduated, 7500 Alumni &quot;
                    </p>
                    <p className="my-10 ">- Poets &amp; Quants</p>
                </div>
                <div className="flex flex-col items-center col-span-2 lg:col-span-1">
                    <div className="h-40">
                        <Image src={bcg} alt="" />
                    </div>
                    <p className="mt-12 text-yellow-600 text-center">
                    &quot;Shatakshi Sharma, a BCG Senior Associate, founded the Global Governance Initiative with the goal of providing education and career advancement opportunities for Indian youth &quot;
                    </p>
                    <p className="my-10 text-center">- BCG Global Media</p>
                </div>
                <div className="flex flex-col items-center col-span-2 lg:col-span-1">
                    <div className="h-40">
                        <Image src={Linkedin} alt="" />
                    </div>
                    <p className="mt-12 text-yellow-600 text-center">
                    &quot;Shatakshi Sharma, Founder, Global Governance Initiative recognized as Linkedin Top Voice, Next Gen for work on gender equality, higher education and management consulting.&quot;
                    </p>
                    <p className="my-10">- Linkedin News</p>
                </div>
                <div className="flex flex-col items-center col-span-2 lg:col-span-1">
                    <div className="h-40">
                        <Image src={yrstory} alt="" />
                    </div>
                    <p className="mt-12 text-yellow-600 text-center">
                    &quot;GGI has much in common with Ivy League institutions such as Stanford and Harvard&quot;
                    </p>
                    <p className="my-10">- The Economic Times</p>
                </div>
                <div className="flex flex-col items-center col-start-2 col-span-2 lg:col-span-1">
                    <div className="h-40">
                        <Image src={wef} alt="" />
                    </div>
                    <p className="mt-12 text-yellow-600 text-center">
                    &quot;Shatakshi Sharma, GGI Founder, is empowering global youth to start taking a seat on the table&quot;
                    </p>
                    <p className="my-10 text-center">- World Economic Forum</p>
                </div>
            </div>
            <div className="p-5 md:p-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5 justify-center">
                <div className="flex flex-col items-center col-span-2 lg:col-span-1">
                    <div className="h-40">
                        <Image src={Goasummit3} alt="" />
                    </div>
                    <p className="mt-12 text-yellow-600 text-center">
                    Shatakshi Sharma, GGI Founder, shape policies for Youth Empowerment and Upskilling for New India at the India Global Forum, India NXT 
                    </p>
                </div>
                <div className="flex flex-col items-center col-span-2 lg:col-span-1">
                    <div >
                        <Image src={Goasummit4} alt="" />
                    </div>
                    <p className="mt-12 text-yellow-600 text-center">
                    Shatakshi Sharma, GGI & GTI Founder representing entrepreneurial views at the Invest Goa summit. 
                    </p>
                </div>
                
                {/* <div className="flex flex-col items-center col-span-2 lg:col-span-1">
                    <div className="h-40">
                        <Image src={Goasummit1} alt="" />
                    </div>
                    <p className="mt-12 text-yellow-600 text-center">
                    Naman Shrivastava, shaping policies for disruption and innovation for the state of Goa and overall India. 
                    </p>
                </div> */}
                <div className="flex flex-col items-center col-span-2 lg:col-span-1">
                    <div className="h-40">
                        <Image src={Goasummit2} alt="" />
                    </div>
                    <p className="mt-12 text-yellow-600 text-center">
                    Shatakshi Sharma, shaping policies for entrepreneurs for the state of Goa and overall India. 
                    </p>
                </div>
            </div>




            <Heading>You Learn <strong>live</strong> via Case method, Get Hired & Network to become a Leader in Business & Society</Heading>
            <FourColumnLayout data={fourcolumndata} />

            <Button page="mba" url="https://docs.google.com/forms/d/e/1FAIpQLSfWPZ5mDyvjjXCBVJJ8Lhtmk3QQIVg-jmrpe6SrNa2gfMgmpg/viewform?usp=sf_link"> Learn More about GGI Impact MBA Scholars</Button>

            <Heading>The GGI Journey</Heading><br/>
                        <Steps data={stages} />


            <Heading>At GGI, We Believe In-Person Community is the CornerStone when You are Learning Online</Heading>
            <Community />

            <div className='mt-24 flex justify-center'>
                <p className='md:w-3/5 md:text-lg mb-5 text-center'>You don’t have to wait for the system to change.<br/>
                You can learn how to redesign it.</p>
            </div>

            <Button page="mba" url="https://docs.google.com/forms/d/e/1FAIpQLSc0EdeZhxI2OeI5mh8HSUl4ScxHJ56XmvW48bcVzEA2MzZwTw/viewform"> Apply for the next Fellowship ➞</Button>

            <div className="flex flex-col justify-center mt-72">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-1">
                    <div className='col-span-2 '><Image src={bhaskar_chakra} placeholder="blur" alt="Bhaskar Chakravorty" /></div>
                    <div className='flex flex-col justify-center content-center gap-7 p-10 col-span-1'>
                        <p className='text-3xl tracking-widest font-extrabold'>GGI Advisor</p>
                        <p className='text-xl'>Bhaskar Chakravorti</p>
                        <p className='mt-3'>Mr. Bhaskar brings decades of experience having worked as former Partner- McKinsey & Co., Dean of Global business- The Fletcher School, Faculty- Harvard Business School, Advisor- World Economic Forum, UNDP, Brookings Institution, and MasterCard</p>
                    </div>
                </div>
                <div className='flex justify-center'>
                    <div className='w-100 sm:w-3/4 md:w-1/2 lg:w-2/5'>
                        <video autoPlay={true} loop={true} controls={true} muted={true} width="100%" height="100%" >
                            <source src='/file.mp4' />
                        </video>
                    </div>
                </div>

            </div>


            <Heading >Founder&#39;s Desk</Heading>

            <div className="flex justify-center">
                <div className="md:w-4/5 grid grid-cols-1 sm:grid-cols-2 gap-4 ">
                    <div className=''>
                        <Contact />
                    </div>
                    <div className=''>
                        <p className='p-8'>  I built GGI because I saw too many brilliant minds told they weren’t ‘ready.’
                        Not because they lacked ability - but because no one gave them access.
                        GGI exists to make that access universal.
                        </p>
                        <p className='p-8 pt-2 text-center'>
                            <Image src={contact} alt="" />
                        </p>
                    </div>

                </div>
            </div>

            <div className='mt-48'>
                <YoutubeEmbed embedId='2oLOzBJvBDM' autoplay={1}/>
            </div>
            <Heading margin={1}>Frequently Asked Questions</Heading>
            <Accordion />

            {/* <Socials /> */}
            <Footer />
        </div>
    )
}

export default Main