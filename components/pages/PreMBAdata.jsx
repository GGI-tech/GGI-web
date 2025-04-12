import { React, useState } from 'react'
import Image from 'next/image';

import Heading from '../global/Heading'
import Button from '../global/Button';
import SlidingHero from '../global/SlidingHero'
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
import { companies,fourcolumndata,fourcolumndata2,stages, testimonialMBA, curriculum } from '../../data/prembapgdata';

const PREMBADATA = () => {

    const [isOpened, setIsOpened] = useState(false);

    function toggle() {
        setIsOpened(wasOpened => !wasOpened);
    }
    return (
        <div>
            <SlidingHero image={'./ivy.jpg'} title={["GGI Anti-Fragile Scholars: <br class='hidden md:block'/><span class='text-yellow-200'>Crisis-Proof Your Ivy League MBA</span><br class='hidden md:block'/> "]} />

            <Button page="mba" url="https://docs.google.com/forms/d/e/1FAIpQLSfWPZ5mDyvjjXCBVJJ8Lhtmk3QQIVg-jmrpe6SrNa2gfMgmpg/viewform"> ADVANCE YOUR CAREER BY APPLYING NOW</Button>


            <Heading margin={60}>Why GGI Anti-Fragile Scholars Works ? </Heading>
            <FourColumnLayout data={fourcolumndata} />

            <p className='px-8 my-8 text-center font-bold'>The GGI Anti-Fragile program has created an Ivy League Management outcome at 1/1000th of the cost. </p>
            <Container ><span className='primary font-medium'>Your MBA is a big investment, in terms of - time, money, and emotions.</span> It costs upward of $200,000 to pursue an MBA from a top 20 global business school. Despite the high cost, many global schools—aside from a few Ivy League institutions—do not write their own cases, lack an extensive global network, offer limited experiential learning opportunities, and have weak industry connections.<br/><br/>At Global Governance Initiative, we address these issues through our mission.  </Container>
            <div className='my-8'></div>
            <YoutubeEmbed embedId='pjwQLAI_fHs' autoplay={1}/>

            <Heading>You Learn along with Diverse Community who Adds to your Perspective</Heading>
            <Slider slides={testimonialMBA} />
            <YoutubeEmbed embedId='iuNMaVSwH0E' autoplay={1}/>
            <Button page="mba" url="https://docs.google.com/forms/d/e/1FAIpQLSfWPZ5mDyvjjXCBVJJ8Lhtmk3QQIVg-jmrpe6SrNa2gfMgmpg/viewform"> APPLY NOW</Button>


            <Heading>+88% GGIians working in Top Consulting, Strategy, Product Roles and Organizations</Heading>
            <Partners companies={companies} />
            <Button page="mba" url="https://docs.google.com/forms/d/e/1FAIpQLSfWPZ5mDyvjjXCBVJJ8Lhtmk3QQIVg-jmrpe6SrNa2gfMgmpg/viewform"> APPLY NOW</Button>


            <Heading>Who is this Program for?</Heading>
            <p className='text-center text-xl'> <span className="primary font-extrabold">For those who thrive under pressure</span></p>
            <br/>
            <Container>
                <p> 1. If you are an <span className='primary font-bold'>Ivy Admit: Harvard/Wharton MBA </span>admits aiming to pre-game your campus experience.</p><br />
                <p>2. If you are a <span className='primary font-bold'>Pre-MBA</span>:  And Looking to <span className='primary font-bold'>build crisis proof experience</span> for your jobs </p><br />
                <p>3. If you are a Career Shifter and looking to pivot to<span className='primary font-bold'> recession-proof roles</span>.</p><br />
                <p className='mb-24'>4. If you are a <span className='primary font-bold'>founder</span> who wants to adapt to <span className='primary font-bold'>market shocks</span>.</p>

            </Container>
            <YoutubeEmbed embedId='NrAvqFqbZrU' />
            <Button page="mba" url="https://docs.google.com/forms/d/e/1FAIpQLSfWPZ5mDyvjjXCBVJJ8Lhtmk3QQIVg-jmrpe6SrNa2gfMgmpg/viewform"> APPLY NOW</Button>

            <Heading>Post Graduate Program in Management</Heading>
            <Curriculum data={curriculum}/>
            <YoutubeEmbed embedId='lGyhkONUSwk' />
            <Heading>Program Advantages: <strong>The Anti-Fragility Edge</strong></Heading>
            <FourColumnLayout data={fourcolumndata2} />


            <Heading>A Liberal Refund Policy for You  </Heading>
            <Container>
                <p className='text-lg'>Your learning is our top priority, and we aim to make this decision entirely risk-free for you, allowing you to focus solely on learning. We offer a no-questions-asked <span className='font-bold'>3-day full refund policy from your first live masterclass date.</span> </p>
            </Container>

            <Heading>You Learn & Build Network with World&#39;s Top CEOs, Partners, & Consulting Leaders</Heading>
            <Gallery />

            <YoutubeEmbed embedId='vNSyUNfmh24' autoplay={1}/>
            <Heading>As a GGI Anti-Fragile Scholar , You will Immerse Yourself in a Truly Transformative Experience  </Heading>
            <Container>
                <p className='mb-2'>As leaders looking to pivot into the world of <span className='font-semibold'> Management Consulting, Investing, and Product Management, </span> you should be adept at navigating various cultures, economies, sectors, and industries. </p>
                <p>To support the development of these essential skills, GGI has meticulously designed a portfolio of immersive, experiential courses spanning across sectors and industries, organized into three stages: </p>
            </Container>
            <Steps data={stages} />
            <Button page="mba" url="https://docs.google.com/forms/d/e/1FAIpQLSfWPZ5mDyvjjXCBVJJ8Lhtmk3QQIVg-jmrpe6SrNa2gfMgmpg/viewform"> APPLY NOW</Button>

            <Heading>Learn What Matters via GGI Case-based Masterclasses in Consulting, Strategy & Product</Heading>
            <Masterclasses />
            <YoutubeEmbed embedId='nQkS0i38ls8' />

            <Heading>At GGI, We Believe In- Person Community is the CornerStone when You are Learning Online </Heading>
            <Community />

            {/* <Heading>Program Fees </Heading>
            <p className='text-center text-xl'> <span className="primary font-extrabold">Crisis-Proof Investment</span></p> <br/>
            <Container>
                <p> 1. Premium Pricing <span className='primary font-bold'>Selective cohort of 50/term </span></p><br />
                <p>2. <span className='primary font-bold'>ROI Tracker</span>: Post-MBA salary increase metrics </p><br />
                <p>3.Flexible Payments: <span className='primary font-bold'>Deferred options for founders</span>.</p><br />

            </Container> */}



            <Heading>GGI Graduation Certificate</Heading>
            <Container>
                <div className='grid grid-cols-1 md:grid-cols-3 gap-5'>
                    <div>
                        <Image src={certificate} alt="" />
                    </div>
                    <div className='col-span-2'>
                        <p className='mb-2'>Let us be honest. We are not in the certificate minting business. However, on successful completion of the program, you receive a unique GGI Impact MBA Scholars graduation letter- </p>
                        <ul className='list-disc ml-4'>
                            <li> Showcasing your hard, fun, and enriching journey from a prestigious Global Governance Initiative Scholars journey</li>
                            <li>Get a chance to network with GGI  industry experts, and peers during the program</li>
                            <li>Gain demonstrable hands-on skills in business, communications, finance, and strategy</li>
                        </ul>
                    </div>
                </div>
            </Container>
            <Heading>GGI Official Partners Ready to Collaborate with you </Heading>
            <OfficialPartners />
            <Heading>GGI Associations</Heading>
            <Associations />
            <div className='mt-48'>
                <YoutubeEmbed embedId='DXHPoAPXQQc' />
            </div>
            <Heading margin={2}>Frequently Asked Questions</Heading>
            <Accordion />
            {/* <Socials /> */}
            <Footer />
        </div>
    )
}

export default PREMBADATA