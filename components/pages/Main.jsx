
import React from 'react'
import MainHero from '../global/MainHero';
import Image from 'next/image';
import Gallery from '../global/Gallery';
import Heading from '../global/Heading';
// import Hero from '../global/Hero';
import Slider from '../global/Slider';
import { fourcolumndata, companies, testimonialMain } from '../../data/mainpgData';
import YoutubeEmbed from '../global/YoutubeEmbed';

import Partners from '../global/Partners';
import Accordion from '../global/Accordian';
import Contact from '../global/Contact';
import Container from '../global/Container'
import Footer from '../global/Footer';
import Button from '../global/Button';
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

import contact from '../../public/ss.jpeg'



const Main = () => {

    return (
        <div>

            {/* <Hero heading='' home={true} message='' /> */}
            <MainHero />

            <Button url="/impact-fellowship">
                Learn More about Advancing Your Career
            </Button>

            <Heading>Hear from GGIians who have successfully transitioned into Consulting, Policy, and Product Management roles - their experiences with us.</Heading >

            <Slider slides={testimonialMain} />


            <Heading>+88% GGIians working in Top <strong >Consulting,</strong><strong> Policy,</strong> <strong>Product</strong> Roles and Organizations
            </Heading>
            <Partners companies={companies} />

            {/* <div className='skin'> */}
            <Heading>GGI Offers Live <strong>Upskilling,</strong> <strong>Employment</strong> &  <strong>Networking</strong> </Heading>

            <Container>
                <p >Explore the specific programs available within our fellowship, including the two flagship Scholar tracks, to discover more about admission requirements, scholarships, and career opportunities. Upskill and learn <span className='font-semibold'>how to build a successful career in fields such as Management Consulting, Product Management, Policy, Finance, Impact Investing, or Program Management. </span>   </p>

            </Container>

            <div className="p-4 flex justify-center">
                <div className="lg:w-5/6 grid grid-cols-1 sm:grid-cols-2 gap-10  lg:grid-cols-5 " >
                    <div className='lg:col-span-2'>
                        <div className='text-center md:text-left md:h-[27rem] '>
                            <h2 className='text-xl md:text-2xl my-8 primary text-center md:text-left'>GGI Management Scholar </h2>
                            <p className='my-5 text-lg font-semibold'>Who is this program for?</p>
                            <p className='my-7'>1. You are looking for best <span className='primary font-semibold'>Alternative to International- Management</span></p>
                            <p className='my-7'>2. You are looking to pivot in strategy and consulting roles such as<span className='primary font-semibold'> Mckinsey, BCG, or Product Management</span></p>
                            <p className='my-7'>3. You are a <span className='primary font-semibold'>Pre-MBA</span> looking to finish the business curriculum before your program</p>
                            <p className='my-7'>4. You are a <span className='primary font-semibold'>budding entrepreneur </span>who is aiming to launch & scale ventures </p>

                        </div>
                        <div className='flex justify-center md:justify-start mb-10 md:mb-0'>
                            <Button url="/ggi-scholars">
                                Learn More about GGI Impact MBA
                            </Button>
                        </div>
                    </div>
                    <div className='hidden lg:block lg:col-span-1'></div>
                    <div className='lg:col-span-2'>
                        <div className='text-center md:text-left md:h-[27rem] '>
                            <h2 className='text-xl md:text-2xl my-8 primary text-center md:text-left'>GGI Policy Scholar </h2>
                            <p className='my-7 text-lg font-semibold'>Who is this program for?</p>
                            <p className='my-7'>1. You are looking for best<span className='primary font-semibold'> Alternative to International- MPP</span></p>
                            <p className='my-7'>2. You are looking to pivot in impact firms such as <span className='primary font-semibold'>UN, World Bank, FSG or social impact </span>roles</p>
                            <p className='my-7'>3. You are a <span className='primary font-semibold'>Pre-MPP</span> with MPP admits to Harvard Kennedy, Oxford MPP, and other top MPPs</p>
                            <p className='my-7'>4. You are a <span className='primary font-semibold'>budding social impact entrepreneur</span> who is aiming to launch a venture  </p>

                        </div>
                        <div className='flex justify-center md:justify-start mb-0'>
                            <Button url="/ggipolicyscholarsprogram">
                                Learn More about GGI Policy Scholar
                            </Button>
                        </div>
                    </div>

                </div>
            </div>
            <YoutubeEmbed embedId="8lWeJ3Ekq-I" autoplay={1} />

            {/* </div> */}



            <Heading> You Solve Cases & Network with World&#39;s Top <strong>CEOs</strong>, Partners in Consulting, Policy, Product Leaders </Heading>
            <Gallery />



            <div className='mt-24 flex justify-center'>
                <p className='md:w-3/5 md:text-lg font-semibold mb-5 text-center'>Many large employers find that Global Governance Initiative prepares Young Professionals not only for General Management Positions but also for jobs within governmental affairs, environmental affairs, other functional areas that necessitate an education that goes beyond traditional business skills. </p>
            </div>
            <YoutubeEmbed embedId='vNSyUNfmh24' />
            
            
            <Heading>Global Recognition Allows us to Serve you Better</Heading>
            <div className="p-5 md:p-12 grid grid-cols-4 sm:grid-cols-4 lg:grid-cols-5 gap-4 lg:gap-5">
                <div className="flex flex-col items-center col-span-2 lg:col-span-1">
                    <div className="h-40">
                        <Image src={poets} alt="" />
                    </div>
                    <p className="mt-12 text-yellow-600 text-center">
                    &quot;In Just 3 Years, This Disruptive Indian Pre-MBA Has Graduated, 5500 Alumni &quot;
                    </p>
                    <p className="my-10 ">— Poets &amp; Quants</p>
                </div>
                <div className="flex flex-col items-center col-span-2 lg:col-span-1">
                    <div className="h-40">
                        <Image src={bcg} alt="" />
                    </div>
                    <p className="mt-12 text-yellow-600 text-center">
                    &quot;Shatakshi Sharma, a BCG Senior Associate, founded the Global Governance Initiative with the goal of providing education and career advancement opportunities for Indian youth &quot;
                    </p>
                    <p className="my-10 text-center">— BCG Global Media</p>
                </div>
                <div className="flex flex-col items-center col-span-2 lg:col-span-1">
                    <div className="h-40">
                        <Image src={Linkedin} alt="" />
                    </div>
                    <p className="mt-12 text-yellow-600 text-center">
                    &quot;Shatakshi Sharma, Cofounder, Global Governance Initiative recognized as Linkedin Top Voice, Next Gen for work on gender equality, higher education and management consulting.&quot;
                    </p>
                    <p className="my-10">— Linkedin News</p>
                </div>
                <div className="flex flex-col items-center col-span-2 lg:col-span-1">
                    <div className="h-40">
                        <Image src={yrstory} alt="" />
                    </div>
                    <p className="mt-12 text-yellow-600 text-center">
                    &quot;GGI has much in common with Ivy League institutions such as Stanford and Harvard&quot;
                    </p>
                    <p className="my-10">— The Economic Times</p>
                </div>
                <div className="flex flex-col items-center col-start-2 col-span-2 lg:col-span-1">
                    <div className="h-40">
                        <Image src={wef} alt="" />
                    </div>
                    <p className="mt-12 text-yellow-600 text-center">
                    &quot;Shatakshi Sharma, GGI cofounder, is empowering global youth to start taking a seat on the table&quot;
                    </p>
                    <p className="my-10 text-center">— World Economic Forum</p>
                </div>
            </div>
            <div className="p-5 md:p-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5 justify-center">
                <div className="flex flex-col items-center col-span-2 lg:col-span-1">
                    <div className="h-40">
                        <Image src={Goasummit3} alt="" />
                    </div>
                    <p className="mt-12 text-yellow-600 text-center">
                    Shatakshi Sharma, GGI Cofounder, shape policies for Youth Empowerment and Upskilling for New India at the India Global Forum, India NXT 
                    </p>
                </div>
                <div className="flex flex-col items-center col-span-2 lg:col-span-1">
                    <div >
                        <Image src={Goasummit4} alt="" />
                    </div>
                    <p className="mt-12 text-yellow-600 text-center">
                    Shatakshi Sharma, GGI & GTI Cofounder representing entrepreneurial views at the Invest Goa summit. 
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


            <Heading>At GGI, We Believe In-Person Community is the CornerStone when You are Learning Online</Heading>
            <Community />

            <Button page="mba" url="https://docs.google.com/forms/d/e/1FAIpQLSfWPZ5mDyvjjXCBVJJ8Lhtmk3QQIVg-jmrpe6SrNa2gfMgmpg/viewform?usp=sf_link"> Learn More about GGI Impact MBA Scholars</Button>

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


            <Heading >Cofounder&#39;s Desk</Heading>

            <div className="flex justify-center">
                <div className="md:w-4/5 grid grid-cols-1 sm:grid-cols-2 gap-4 ">
                    <div className=''>
                        <Contact />
                    </div>
                    <div className=''>
                        <p className='p-8'>  GGI Founder & CEO - Shatakshi Sharma has worked extensively at the intersection of public policy, technology, management consulting, & entrepreneurship at BCG, Tony Blair Institute and has been recognized as Linkedin for Top Voice for work on gender equality and reimagining higher education. She would love to hear back from you on your experiences, grievances, and new ideas!
                        </p>
                        <p className='p-8 pt-2 text-center'>
                            <Image src={contact} alt="" />
                        </p>
                    </div>

                </div>
            </div>

            <div className='mt-48'>
                <YoutubeEmbed embedId='DXHPoAPXQQc' />
            </div>
            <Heading margin={1}>Frequently Asked Questions</Heading>
            <Accordion />

            {/* <Socials /> */}
            <Footer />
        </div>
    )
}

export default Main