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

const data1 = [
   
    {
        "id": 2,
        "title": "SAIYAM HOTA",
        "url": "https://www.linkedin.com/in/saiyam-hota-5a5a9680/",
        "org": " BAIN & COMPANY",
        "img": "/sayam.jpg",
        "text": "After GGI, I will join Bain & Company. I found out about the GGI and as someone who was interested in the consulting space I thought it would be a great opportunity to get knowledge about not just consulting but all the fields and also to network with people from diverse backgrounds.<br><br> Mainly, I think GGI is the strongest community one can get to be a part of. What I like the most is the diversity, and when all of us come together to solve problems you get a plethora of perspectives you could never imagine. Just interacting and solving problems with such people you gain lots of learnings from their perspective."
    },
    {
        "id": 4,
        "title": "ANAMITRA MUNSI",
        "url": "https://www.linkedin.com/in/anamitra-munsi/",
        "org": "BOSTON CONSULTING GROUP",
        "img": "/ana.jpg",
        "text": "GGI gave me the impetus to move ahead with my MBA at ISB, the contacts and relations I made at GGI helped me keep up the hustle and eventually I got an offer from Boston Consulting Group (BCG).<br><br>I was preparing for UPSC for almost 3 years and was unsuccessful in rounds beyond the prelims. I then applied to GGI and interacted with Naman, and understood how with every target there is a certain deadline and as time passes you need to move on. GGI was the perfect platform to do that."
    },
    {
        "id": 6,
        "title": "SHREYA SAPRU",
        "url": "https://www.linkedin.com/in/shraya-sapru/",
        "org": "SAMAGRA | TRANSFORMING GOVERNANCE",
        "img": "/shreyas.jpg",
        "text": `I would definitely like to say that in my entire process of going through interview rounds and even otherwise, I had structured my answers and GGI definitely has had a big role to play.<br><br>During my written round interview with OSD to Jayant Sinha also, I was asked an assignment, one of which had to do with mitigation of climate change- a topic my team and I had worked on this particular topic on a&nbsp;<a href="https://www.linkedin.com/feed/hashtag/?keywords=ggiprojects&highlightedUpdateUrns=urn%3Ali%3Aactivity%3A6944128850427621376" rel="noreferrer noopener" target="_blank">#GGIprojects</a>- so that really helped me because I already had a perspective on what the issue was and I could structure my answer- given the limited time frame I had.<br><br>Shatakshi was also kind enough to respond to my emails throughout my rounds and guided me factors that would majorly play a role. <br><br>Question- One word that would describe my GGI experience?<br><br>Fascinating.<br><br>Yeah, I think it would be fascinating because of the Masterclasses. All the topics that we were going through were quite fascinating, be it&nbsp;<a href="https://www.linkedin.com/feed/hashtag/?keywords=policy&highlightedUpdateUrns=urn%3Ali%3Aactivity%3A6944128850427621376" rel="noreferrer noopener" target="_blank">#Policy</a> or&nbsp;<a href="https://www.linkedin.com/feed/hashtag/?keywords=impactinvesting&highlightedUpdateUrns=urn%3Ali%3Aactivity%3A6944128850427621376" rel="noreferrer noopener" target="_blank">#ImpactInvesting</a> or&nbsp;<a href="https://www.linkedin.com/feed/hashtag/?keywords=managementconsulting&highlightedUpdateUrns=urn%3Ali%3Aactivity%3A6944128850427621376" rel="noreferrer noopener" target="_blank">#ManagementConsulting</a>, but at the same time I was fascinated by the kind of community that was being built of care and of kindness and that&apos;s very rare.<br><br>I think that&apos;s something that&apos;s really a big differentiator.<br><br>My advice while welcoming new the class of 2022 at GGI would be to go ahead with a very open mind and to learn. It&apos;s okay to make mistakes during your class or even during the zoom or breakout rooms. Learn from your peers and yes, make friends, make a lot of them.<br><br>Develop your networks through GGI because a lot of opportunities come your way also.`
    },
    {
        "id": 22,
        "title": `Swati Sureka `,
        "url": "https://www.linkedin.com/in/sureka-swati/",
        "org": "Auctus Advisors, Bain &amp; Company job offer",
        "img": "/swati.jpg",
        "text": "I don&apos;t think getting an offer from Bain could have been possible without the community and at the end of my journey, I had offers from 3 Management Consulting firms.</p><p>&nbsp;</p><p>Today, I am a Management Consultant at Auctus Advisors and have been working there for 7 months now before that I was an account strategist at InMobi which was something I joined right after under graduation in Commerce from SRCC. I was a part of the first batch of Impact Scholars, and it was the right thing for me that came at a right time. I attended all the five master classes, and all of those were amazing, management consulting masterclass was one I really liked and I felt it was something I really wanted to work upon.<br><br>GGI has been the most wonderful experience of my life. I was confused during my bachelor&rsquo;s to immediately go for CAT and do my MBA or to switch to management consulting. I remember it was my first conversation with Shatakshi where she shared her personal experience where she mentioned how she had changed her job and you should definitely do so if you have a good reason to. I remember Shatakshi telling me how to apply and approach the interviews and the lovely support of people in the GGI community. I had superstars helping me with CV review and case preparation.<br><br>I had two key values I derived from the community.<br><br>Firstly, a learning mindset, learning from scratch about an industry, and different functions and then communicating it to multiple CXOs with confidence felt normal.<br><br>Secondly, helping each other, I couldn&rsquo;t have imagined being part of such a lovely community. I have reached out to people from the community and they have always answered positively. So yes, it has been the best experience of my life so far."
    }

];

const Card = ({ title, url, org, img, text }) => {
    return (
        <>
            <div className='mx-4 my-12 flex flex-col lg:flex-row justify-evenly  py-5 border border- shadow-black/5 shadow- rounded-sm'>
                <div className='flex justify-center'>
                    <div className='text-center p-4 '>
                        <div className='hover:scale-105'>
                            {/* Assuming Image is properly imported */}
                            <Image
                                className='rounded-full '
                                src={img}
                                alt='/'
                                width='150'
                                height='150'
                            />
                        </div>
                        <a href={url} rel="noreferrer noopener" target="_blank">
                            <p className='my-2 font-bold text-gray-900 dark:text-white hover:cursor-pointer hover:text-blue-800' dangerouslySetInnerHTML={{ __html: title }}></p>
                        </a>
                        <p className='text-center primary max-w-[200px]' dangerouslySetInnerHTML={{ __html: org }}></p>
                    </div>
                </div>
                <div className='flex-justify center p-4 lg:w-2/3 text-sm'>
                    <p className='italic' dangerouslySetInnerHTML={{ __html: "&ldquo;" + text + "&rdquo;" }}></p>
                </div>
            </div>
        </>
    );
}


const MBA = () => {

    const [isOpened, setIsOpened] = useState(false);

    function toggle() {
        setIsOpened(wasOpened => !wasOpened);
    }
    return (
        <div>
            <SlidingHero image={'./mba.jpeg'} title={["Learn Business Skills Live, Join Global Network <br class='hidden md:block'/>& Get Hired at <span class='text-yellow-200'>GGI MBA Scholar</span><br class='hidden md:block'/> to Become a Business Leader", "A 6 month weekend only hybrid program with a focus on real-world learning with CEOs "]} />

            <Button page="mba" url="https://docs.google.com/forms/d/e/1FAIpQLSfWPZ5mDyvjjXCBVJJ8Lhtmk3QQIVg-jmrpe6SrNa2gfMgmpg/viewform"> ADVANCE YOUR CAREER BY APPLYING NOW</Button>


            <Heading margin={60}>Why GGI Impact MBA Scholars Works? </Heading>
            <FourColumnLayout data={fourcolumndata} />

            <p className='px-8 my-8 text-center font-medium'>GGI Impact MBA has created an Ivy League MBA outcome at 1/1000th of the cost. </p>
            <Container ><span className='primary font-medium'>Your MBA is a big investment, in terms of - time, money, and emotions.</span> It costs upward of $200,000 to pursue an MBA from a Top 20 Global Business School in the world. Despite the high premium - many of the Global Schools (baring few Ivy leagues) do not write their own cases, do not have an extensive global network, do not have experiential learning components, nor do they have strong industry connections.   We at Global Governance Initiative solve this through our mission. </Container>
            <div className='my-8'></div>
            <YoutubeEmbed embedId='pjwQLAI_fHs' autoplay={1}/>

            <div className='mt-24 grid grid-cols-1 sm:grid-cols-2 sm:mx-12'>
            {data1.map((e, index) => {
    return (
        <Card key={index} url={e.url} org={e.org} title={e.title} img={e.img} text={e.text} />
    );
})}
            </div>




            <Heading>You Learn along with Diverse Community who Adds to your Perspective</Heading>
            <Slider slides={testimonialMBA} />
            <YoutubeEmbed embedId='iuNMaVSwH0E' autoplay={1}/>
            <Button page="mba" url="https://docs.google.com/forms/d/e/1FAIpQLSfWPZ5mDyvjjXCBVJJ8Lhtmk3QQIVg-jmrpe6SrNa2gfMgmpg/viewform"> APPLY NOW</Button>


            <Heading>+88% GGIians working in Top Consulting, Strategy, Product Roles and Organizations</Heading>
            <Partners companies={companies} />
            <Button page="mba" url="https://docs.google.com/forms/d/e/1FAIpQLSfWPZ5mDyvjjXCBVJJ8Lhtmk3QQIVg-jmrpe6SrNa2gfMgmpg/viewform"> APPLY NOW</Button>


            <Heading>Who is this Program for?</Heading>
            <Container>
                <p> 1. You are a young professional looking for better <span className='primary font-bold'> Alternatives to international MBA</span> programs and want to learn directly from top industry leaders.</p><br />
                <p>2. You are CA/non-MBA looking to pivot in management consulting in firms such as <span className='primary font-bold'> Mckinsey & BCG,  Product Management, roles</span> in firms such as Uber, Amazon, Microsoft, & leading tech startups.</p><br />
                <p>3. You are a <span className='primary font-bold'>Pre-MBA </span>with admits to Harvard 2+2, Yale Silver Scholars, and other top MBAs and looking to finish the business curriculum before your program.</p><br />
                <p className='mb-24'>4. You are a <span className='primary font-bold'>budding entrepreneur</span> who is aiming to launch & scale ventures and looking to strengthen business skills while building an incredible support system.</p>

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

            <Heading>You Learn & Build Network with World&#39;s Top CEOs, Partners, & Consulting Leaders</Heading>
            <Gallery />


            <Heading>As a GGI MBA Scholar , You will Immerse Yourself in a Truly Transformative Experience  </Heading>
            <Container>
                <p className='mb-2'>Leaders looking to pivot into the World of <span className='font-semibold'> Management Consulting, Investing and Product Management </span> should be able to successfully navigate different cultures, economies, sectors, and industries. </p>
                <p>To help you develop these crucial abilities, GGI has carefully curated a portfolio of immersive, experiential courses that take place across sectors and industries. This is achieved in 3 stages : </p>
            </Container>
            <Steps data={stages} />
            <Button page="mba" url="https://docs.google.com/forms/d/e/1FAIpQLSfWPZ5mDyvjjXCBVJJ8Lhtmk3QQIVg-jmrpe6SrNa2gfMgmpg/viewform"> APPLY NOW</Button>

            <Heading>Learn What Matters via GGI Case-based Masterclasses in Consulting, Strategy & Product</Heading>
            <Masterclasses />
            <YoutubeEmbed embedId='nQkS0i38ls8' />

            <Heading>At GGI, We Believe In- Person Community is the CornerStone when You are Learning Online </Heading>
            <Community />

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

export default MBA