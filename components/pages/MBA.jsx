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


const MBA = () => {

    const [isOpened, setIsOpened] = useState(false);

    function toggle() {
        setIsOpened(wasOpened => !wasOpened);
    }
    return (
        <div>
            <SlidingHero image={'./mba.jpeg'} title={["Learn Business Skills Live, Join Global Network <br class='hidden md:block'/>& Get Hired at <span class='text-yellow-200'>GGI MBA Scholar</span><br class='hidden md:block'/> to Become a Business Leader", "A 6 month weekend only hybrid program with a focus on real-world learning with CEOs "]} />

            <Button url="https://docs.google.com/forms/d/e/1FAIpQLSfWPZ5mDyvjjXCBVJJ8Lhtmk3QQIVg-jmrpe6SrNa2gfMgmpg/viewform"> ADVANCE YOUR CAREER BY APPLYING NOW</Button>


            <Heading margin={60}>Why GGI Impact MBA Scholars Works? </Heading>
            <FourColumnLayout data={fourcolumndata} />

            <p className='px-8 my-8 text-center font-medium'>GGI Impact MBA has created an Ivy League MBA outcome at 1/1000th of the cost. </p>
            <Container ><span className='primary font-medium'>Your MBA is a big investment, in terms of - time, money, and emotions.</span> It costs upward of $200,000 to pursue an MBA from a Top 20 Global Business School in the world. Despite the high premium - many of the Global Schools (baring few Ivy leagues) do not write their own cases, do not have an extensive global network, do not have experiential learning components, nor do they have strong industry connections.   We at Global Governance Initiative solve this through our mission. </Container>
            <div className='my-8'></div>
            <YoutubeEmbed embedId='8lWeJ3Ekq-I' autoplay={1}/>


            <Heading>You Learn along with Diverse Community who Adds to your Perspective</Heading>
            <Slider slides={testimonialMBA} />
            <YoutubeEmbed embedId='iuNMaVSwH0E' autoplay={1}/>
            <Button url="https://docs.google.com/forms/d/e/1FAIpQLSfWPZ5mDyvjjXCBVJJ8Lhtmk3QQIVg-jmrpe6SrNa2gfMgmpg/viewform"> APPLY NOW</Button>


            <Heading>+88% GGIians working in Top Consulting, Strategy, Product Roles and Organizations</Heading>
            <Partners companies={companies} />
            <Button url="https://docs.google.com/forms/d/e/1FAIpQLSfWPZ5mDyvjjXCBVJJ8Lhtmk3QQIVg-jmrpe6SrNa2gfMgmpg/viewform"> APPLY NOW</Button>


            <Heading>Who is this Program for?</Heading>
            <Container>
                <p> 1. You are a young professional looking for better <span className='primary font-bold'> alternatives to international MBA</span> programs and want to learn directly from top industry leaders.</p><br />
                <p>2. You are CA/non-MBA looking to pivot in management consulting in firms such as <span className='primary font-bold'> Mckinsey & BCG,  Product Management, roles</span> in firms such as Uber, Amazon, Microsoft, & leading tech startups.</p><br />
                <p>3. You are a <span className='primary font-bold'>Pre-MBA </span>with admits to Harvard 2+2, Yale Silver Scholars, and other top MBAs and looking to finish the business curriculum before your program.</p><br />
                <p className='mb-24'>4. You are a <span className='primary font-bold'>budding entrepreneur</span> who is aiming to launch & scale ventures and looking to strengthen business skills while building an incredible support system.</p>

            </Container>
            <YoutubeEmbed embedId='NrAvqFqbZrU' />
            <Button url="https://docs.google.com/forms/d/e/1FAIpQLSfWPZ5mDyvjjXCBVJJ8Lhtmk3QQIVg-jmrpe6SrNa2gfMgmpg/viewform"> APPLY NOW</Button>

            <Heading>Curriculum & Commitment</Heading>
            <Curriculum data={curriculum}/>
            <YoutubeEmbed embedId='lGyhkONUSwk' />


            <Heading>A Liberal Refund Policy for You  </Heading>
            <Container>
                <p className='text-lg'>Your learning is our no. 1 goal and we want this decision to be 100% risk-free for you so you can just focus on learning.  We have <span className="font-bold">no questions ask the full refund of the enrollment amount</span> of the selected scholars and fellows, till the first 6 days from the payment date. </p>
            </Container>

            <Heading>You Learn & Build Network with World&#39;s Top CEOs, Partners, & Consulting Leaders</Heading>
            <Gallery />


            <Heading>As a GGI MBA Scholar , You will Immerse Yourself in a Truly Transformative Experience  </Heading>
            <Container>
                <p className='mb-2'>Leaders looking to pivot into the World of <span className='font-semibold'> Management Consulting, Investing and Product Management </span> should be able to successfully navigate different cultures, economies, sectors, and industries. </p>
                <p>To help you develop these crucial abilities, GGI has carefully curated a portfolio of immersive, experiential courses that take place across sectors and industries. This is achieved in 3 stages : </p>
            </Container>
            <Steps data={stages} />
            <Button url="https://docs.google.com/forms/d/e/1FAIpQLSfWPZ5mDyvjjXCBVJJ8Lhtmk3QQIVg-jmrpe6SrNa2gfMgmpg/viewform"> APPLY NOW</Button>

            <Heading>Learn What Matters via GGI Case-based Masterclasses in Consulting, Strategy & Product</Heading>
            <Masterclasses />
            <YoutubeEmbed embedId='nQkS0i38ls8' />

            <Heading>At GGI, We Believe In- Person Community is the CornerStone when You are Learning Online </Heading>
            <Community />

            <Heading>Program Fees </Heading>
            <Container> <p >Our competitors charge Rs. 3,00,000 to Rs. 7,00,000. So we decided to try crazy pricing. <span className='font-bold'>We are 80% cheaper than our competitor&#39;s price.</span> We are doing this because we want to make high-quality business and policy education truly accessible to you all and disrupt the space.
                <br /><br />
                Or if you don&#39;t want to commit, we have no questions ask full refund policy within 6 days of enrollment payment, i.e. if you are selected ( we have &lt;10% selection rate). <span className='font-bold'>Either way, you win.</span> To get detailed pricing and information, it is accessible on our application page <u><a href='https://forms.gle/hv12YCeTFmDwFFJD8' target="_blank" rel='noreferrer'>here</a></u></p>
            </Container>



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

            <Heading>Frequently Asked Questions</Heading>
            <Accordion />
            {/* <Socials /> */}
            <Footer />
        </div>
    )
}

export default MBA