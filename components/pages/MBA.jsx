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
import { companies,fourcolumndata,stages, testimonialMBA, curriculum } from '../../data/mbapgData';
import { testimonialMain2 } from '../../data/mainpgData';

const MBA = () => {

    const [isOpened, setIsOpened] = useState(false);

    function toggle() {
        setIsOpened(wasOpened => !wasOpened);
    }
    return (
        <div>
            <SlidingHero image={'./mba.jpeg'} title={[" Learn Business Skills You Were Never Taught in School. <class='hidden md:block'/>Join a Global Network. Get Hired <span class='text-yellow-200'><br/>Become the kind of business leader companies fight to hire </span><br class='hidden md:block'/> ", "A 6 month weekend only hybrid program with a focus on real-world learning with CEOs"]} />

            <Button page="mba" url="https://docs.google.com/forms/d/e/1FAIpQLSfWPZ5mDyvjjXCBVJJ8Lhtmk3QQIVg-jmrpe6SrNa2gfMgmpg/viewform"> APPLY NOW TO THE GGI MBA SCHOLAR PROGRAM</Button>


            <Heading margin={60}>Why GGI Impact Scholars Works ? </Heading>
            <FourColumnLayout data={fourcolumndata} />

            <p className='px-8 my-8 text-center font-medium'>The traditional MBA is a $200,000 bet on your future </p>
            <Container ><span className='primary font-medium'> At GGI, we make that same outcome accessible - at less than 1/1000th of the cost.</span> Because we believe access to world-class business education shouldn’t depend on your bank balance - only on your ambition. </Container>
            <div className='my-8'></div>
            <YoutubeEmbed embedId='pwe1YoNGkog' autoplay={1}/>

            <Heading>Hear what GGIians who have pivoted into Strategy, Consulting and PM roles- have to say about us</Heading >

            <Slider slides={testimonialMain2} />

            <Heading>You Learn along with Diverse Community who Adds to your Perspective</Heading>
            <Slider slides={testimonialMBA} />
            <YoutubeEmbed embedId='w-VJdR9wENw' autoplay={1}/>
            <Button page="mba" url="https://docs.google.com/forms/d/e/1FAIpQLSfWPZ5mDyvjjXCBVJJ8Lhtmk3QQIVg-jmrpe6SrNa2gfMgmpg/viewform"> TAKE THE NEXT STEP - APPLY TO BECOME A GGI MBA SCHOLAR TODAY</Button>


            <Heading>+88% GGIians working in Top Consulting, Strategy, Product Roles and Organizations</Heading>
            <Partners companies={companies} />
            <Button page="mba" url="https://docs.google.com/forms/d/e/1FAIpQLSfWPZ5mDyvjjXCBVJJ8Lhtmk3QQIVg-jmrpe6SrNa2gfMgmpg/viewform"> TAKE THE NEXT STEP - APPLY TO BECOME A GGI MBA SCHOLAR TODAY</Button>


            <Heading>Who is this Program for?</Heading>
            <Container>
                <p> 1. You want to pivot into consulting, strategy, or product roles - <span className='primary font-bold'>  without spending $200,000 on a foreign MBA.
                </span> </p><br />
                <p>2. If you are a CA or IIT engineer looking to pivot into Management Consulting roles at firms like <span className='primary font-bold'>McKinsey & BCG, or into Product Management roles </span>at companies like Uber, Amazon, Microsoft, and leading tech startups, this is for you.</p><br/>
                <p>3. You’re an aspiring founder <span className='primary font-bold'>looking to master business fundamentals </span>while building your network.</p><br />
                <p className='mb-24'>4. You believe in global thinking, <span className='primary font-bold'>but want local impact</span>.</p>
                

            </Container>
            <YoutubeEmbed embedId='hnoA7rzFbHw' autoplay={1}/>
            <Button page="mba" url="https://docs.google.com/forms/d/e/1FAIpQLSfWPZ5mDyvjjXCBVJJ8Lhtmk3QQIVg-jmrpe6SrNa2gfMgmpg/viewform"> TAKE THE NEXT STEP - APPLY TO BECOME A GGI MBA SCHOLAR TODAY</Button>

            <Heading>Post Graduate Program in Management</Heading>
            <Curriculum data={curriculum}/>
            <YoutubeEmbed embedId='zJzwHEBd7Zc' autoplay={1}/>


            <Heading>We Believe Learning Should Be a No-Risk Decision.  </Heading>
            <Container>
                <p className='text-lg'>That’s why we offer a <em>full refund within 3 days</em> of your first live masterclass - no questions asked. Your only investment should be your curiosity.</p>
            </Container>

            <Heading>You Learn & Build Network with World&#39;s Top CEOs, Partners, & Consulting Leaders</Heading>
            <Gallery />

            <YoutubeEmbed embedId='QZvdzbmmWpg' autoplay={1}/>
            <Heading>As a GGI MBA Scholar , You will Immerse Yourself in a Truly Transformative Experience  </Heading>
            <Container>
                <p className='mb-2'>As leaders looking to pivot into the world of <span className='font-semibold'> Management Consulting, Investing, and Product Management, </span> you should be adept at navigating various cultures, economies, sectors, and industries. </p>
                <p>To support the development of these essential skills, GGI has meticulously designed a portfolio of immersive, experiential courses spanning across sectors and industries, organized into three stages: </p>
            </Container>
            <Steps data={stages} />
            <Button page="mba" url="https://docs.google.com/forms/d/e/1FAIpQLSfWPZ5mDyvjjXCBVJJ8Lhtmk3QQIVg-jmrpe6SrNa2gfMgmpg/viewform"> TAKE THE NEXT STEP - APPLY TO BECOME A GGI MBA SCHOLAR TODAY</Button>

            <div className='mt-24 flex justify-center'>
                <p className='md:w-3/5 md:text-lg mb-5 text-center'>Because the world doesn’t need more degrees - it needs leaders who can think, decide, and build.<br/>
                </p>
            </div>

            <Heading>Learn What Matters via GGI Case-based Masterclasses in Consulting, Strategy & Product</Heading>
            <Masterclasses />
            <YoutubeEmbed embedId='Pt8cnPkD4k0' autoplay={1}/>

            <Heading>At GGI, We Believe In- Person Community is the CornerStone when You are Learning Online </Heading>
            <Community />

            <Heading>Program Fees </Heading>
            <Container> <p >Our competitors charge Rs. 3,00,000 to Rs. 7,00,000. So we decided to try crazy pricing. <span className='font-bold'>We are 80% cheaper than our competitor&#39;s price.</span> We are doing this because we want to make high-quality business and policy education truly accessible to you all and disrupt the space.
                <br /><br />
                Or if you don&#39;t want to commit, we have no questions ask full refund policy within 6 days of enrollment payment, i.e. if you are selected ( we have &lt;10% selection rate). <span className='font-bold'>Either way, you win.</span> To get detailed pricing and information, it is accessible on our application page <u><a href='https://docs.google.com/forms/d/e/1FAIpQLSfWPZ5mDyvjjXCBVJJ8Lhtmk3QQIVg-jmrpe6SrNa2gfMgmpg/viewform' target="_blank" rel='noreferrer'>here</a></u></p>
            </Container>
            <Button page="mba" url="https://docs.google.com/forms/d/e/1FAIpQLSfWPZ5mDyvjjXCBVJJ8Lhtmk3QQIVg-jmrpe6SrNa2gfMgmpg/viewform"> TAKE THE NEXT STEP - APPLY TO BECOME A GGI MBA SCHOLAR TODAY</Button>



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
                <YoutubeEmbed embedId='7CAlOgCt_Cc' autoplay={1}/>
            </div>
            <Heading margin={2}>Frequently Asked Questions</Heading>
            <Accordion />
            {/* <Socials /> */}
            <Footer />
        </div>
    )
}

export default MBA