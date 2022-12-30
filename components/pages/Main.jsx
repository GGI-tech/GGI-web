
import React from 'react'
import MainHero from '../global/MainHero';
import Image from 'next/image';
import Gallery from '../global/Gallery';
import Heading from '../global/Heading';
import Hero from '../global/Hero';
import Slider from '../global/Slider';
import {fourcolumndata,companies, testimonialMain } from '../../data/mainpgData';
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
import yrstory from '../../public/yrstory.jpg';
// -------------------------------------------------------
import bhaskar_chakra from '../../public/bhaskar_chakra.jpg'
import Community from '../../components/global/Community';
import FourColumnLayout from '../../components/global/FourColumnLayout';
// -------------------------------------------------------

import contact from '../../public/contact.jpg'



const Main = () => {
   
    return (
        <div>

            {/* <Hero heading='' home={true} message='' /> */}
            <MainHero />

            <Button url="">
                Learn More about Advancing Your Career
            </Button>

            <Heading>Hear what GGIians who have witnessed a +200% Increase in their Salary- have to say about us</Heading >

            <Slider slides={testimonialMain} />


            <Heading>+88% GGIians working in Top <strong >Consulting,</strong><strong> Policy,</strong> <strong>Product</strong> Roles and Organizations
            </Heading>
            <Partners companies={companies} />

            {/* <div className='skin'> */}
            <Heading >GGI Offers Live <strong>Upskilling,</strong> <strong>Employment</strong> & Networking </Heading>

            <Container>
                <p >Find below specific programs within the fellowship and the 2 flagship Scholar tracks, to learn more about admission requirements, scholarships, and career opportunities and upskill on <span className='font-semibold'>how to build a career in management consulting, product management, policy, finance, impact investing, or program management roles. </span>   </p>

            </Container>
            <div className="p-8 flex justify-center  skin">
                <div className="lg:w-5/6 grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-20" >
                    <div>
                        <div className='text-center md:text-left md:h-[25rem]'>
                            <h2 className='text-xl md:text-2xl my-8 primary text-center md:text-left'>GGI MBA Scholar </h2>
                            <p className='my-5 text-lg font-semibold'>Who is this program for?</p>
                            <p className='my-5'>1. You are looking for best <span className='primary font-semibold'>Alternative to International- MBA</span></p>
                            <p className='my-5'>2. You are looking to pivot in strategy and consulting roles such as<span className='primary font-semibold'> Mckinsey, BCG, or Product Management</span></p>
                            <p className='my-5'>3. You are a <span className='primary font-semibold'>Pre-MBA</span> looking to finish the business curriculum before your program</p>
                            <p className='my-5'>4. You are a <span className='primary font-semibold'>budding entrepreneur </span>who is aiming to launch & scale ventures </p>

                        </div>
                        <div className='flex justify-center md:justify-start mb-10 md:mb-0'>
                            <Button url="/ggi-scholars">
                                Learn More about GGI Impact MBA
                            </Button>
                        </div>
                    </div>
                    <div>                    
                        <div className='text-center md:text-left md:h-[25rem]'>
                            <h2 className='text-xl md:text-2xl my-8 primary text-center md:text-left'>GGI Policy Scholar </h2>
                            <p className='my-5 text-lg font-semibold'>Who is this program for?</p>
                            <p className='my-5'>1. You are looking for best<span className='primary font-semibold'> Alternative to International- MPP</span></p>
                            <p className='my-5'>2. You are looking to pivot in impact firms such as <span className='primary font-semibold'>UN, World Bank, FSG or social impact </span>roles</p>
                            <p className='my-5'>3. You are a <span className='primary font-semibold'>Pre-MPP</span> with MPP admits to Harvard Kennedy, Oxford MPP, and other top MPPs</p>
                            <p className='my-5'>4. You are a <span className='primary font-semibold'>budding social impact entrepreneur</span> who is aiming to launch a venture  </p>

                        </div>
                        <div className='flex justify-center md:justify-start mb-0'>
                            <Button url="/ggipolicyscholarsprogram">
                                Learn More about GGI Policy Scholar
                            </Button>
                        </div>
                    </div>

                </div>
            </div>

            {/* </div> */}



            <Heading>You Solve Cases & Network with World&#39;s Top <strong>CEOs</strong>, Partners, Consulting, Policy, Product Leaders </Heading>
            <Gallery />



            <div className='mt-24 flex justify-center'>
                <p className='md:w-3/5 md:text-lg font-semibold mb-5 text-center'>Many large employers find that Global Governance Initiative prepares Young Professionals not only for General Management Positions but also for jobs within governmental affairs, environmental affairs, other functional areas that necessitate an education that goes beyond traditional business skills. </p>
            </div>
            <YoutubeEmbed embedId="8lWeJ3Ekq-I" />



            <Heading>Global Recognition Allows us to Serve you Better</Heading>
            <div className="p-5 md:p-12 flex justify-center skin">
                <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 lg:gap-5">
                    <div className='flex flex-col text-center'>
                        <div className='h-40'> <Image className='' src={poets} alt="" /></div>
                        <p className='mt-12 text-yellow-600'>&#34;In Just 3 Years, This Disruptive Indian Pre-MBA Has Graduayellow,600 Alumni&#34;</p>
                        <p className='my-10'>— YOURSTORY</p>
                    </div>
                    <div className='flex flex-col text-center'>
                        <div className='h-40'> <Image src={bcg} alt="" /></div>
                        <p className='mt-12 text-yellow-600'>&#34;Shatakshi Sharma, a BCG Senior Associate, founded the Global Governance Initiative with the goal of providing education and careeradvancement opportunities for Indian youth&#34;</p>
                        <p className='my-10'>— BCG Global Media</p>
                    </div>
                    <div className='flex flex-col text-center'>
                        <div className='h-40'><Image className='' src={Linkedin} alt="" /></div>
                        <p className='mt-12 text-yellow-600'>&#34;Shatakshi Sharma, Cofounder, Global Governance Initiative recognized as Linkedin Top Voice, Next Gen for work on gender equality, higher education and management consulting.&#34;</p>
                        <p className='my-10'> — Linkedin News</p>
                    </div>
                    <div className='flex flex-col text-center'>
                        <div className='h-40'><Image src={yrstory} alt="" /></div>
                        <p className='mt-12 text-yellow-600'>&#34;The founders felt that with the right information and awareness, others like them, mostly youth, could also pursue jobs in public policy, and hence founded GGI.&#34; </p>
                        <p className='my-10'> — YourStory</p>
                    </div>
                </div>
            </div>


            <Heading>You Learn <strong>live</strong> via Case method, Get Hired & Network to become a Leader in Business & Society</Heading>
            <FourColumnLayout data={fourcolumndata} />


            <div id='' className='p-4 flex justify-center'>
                <Button className="bg-blue-700 hover:bg-blue-500 text-white my-12 py-4 px-1 md:px-10 border border-blue-500 rounded-full shadow-lg">
                    Learn More about GGI Impact MBA Scholars
                </Button>
            </div>

            <Heading>At GGI, We Believe In-Person Community is the CornerStone when You are Learning Online</Heading>
            <Community />

            <div id='' className='p-4 flex justify-center mb-60'>
                <Button className="bg-blue-700 hover:bg-blue-500 text-white my-12 py-4 px-1 md:px-10 border border-blue-500 rounded-full shadow-lg">
                    Learn More about GGI Impact MBA Scholars
                </Button>
            </div>
            <div className="flex flex-col justify-center">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-1">
                    <div className='col-span-2 '><Image src={bhaskar_chakra} alt="" /></div>
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
                <div className="md:w-4/5 grid grid-cols-1 sm:grid-cols-2 gap-4 md:mx-10">
                    <div className=''>
                        <Contact />
                    </div>
                    <div className=''>
                        <p className='p-8'>  GGI Co-Founders - Naman and Shatakshi have worked extensively at the intersection of public policy, technology, management consulting, & entrepreneurship at BCG, UN, Tony Blair Institute and have been recognized as Linkedin for Top Voice for work on gender equality and reimagining higher education. They would love to hear back from you on your experiences, grievances, and new ideas!
                        </p>
                        <p className='p-8 pt-2 text-center'>
                            <Image src={contact} alt="" />
                        </p>
                    </div>

                </div>
            </div>

            <Heading>Frequently Asked Questions</Heading>
            <Accordion />

            {/* <Socials /> */}
            <Footer />
        </div>
    )
}

export default Main