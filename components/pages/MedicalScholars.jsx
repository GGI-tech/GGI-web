import { React, useState } from 'react'
import Image from 'next/image';

import Heading from '../global/Heading'
import Button from '../global/Button';
import SlidingHero from '../global/SlidingHero'
import YoutubeEmbed from '../global/YoutubeEmbed';
import Container from '../global/Container';
import Accordion from '../global/Accordian';
import Gallery from '../global/Gallery';
import Curriculum from '../global/Curriculum';
import Masterclasses from '../global/Masterclasses';
import FourColumnLayout from '../global/FourColumnLayout';
import OfficialPartners from '../global/OfficialPartners';
import Associations from '../global/Associations';
import Steps from '../global/Steps'
import Footer from '../global/Footer';
import Slider from '../global/Slider'
import { fourcolumndata, stages, curriculum, testimonialMedical } from '../../data/medicalscholarsData';

// --------------------------------------------------------------------
import studs1 from '../../public/s1.png'
import studs2 from '../../public/s2.png'
// --------------------------------------------------------------------

const MedicalScholars = () => {
    const [isOpened, setIsOpened] = useState(false);

    function toggle() {
        setIsOpened(wasOpened => !wasOpened);
    }
    return (
        <>
            <SlidingHero image={'./medical.jpg'} title={["<span class='text-yellow-200'>GGI Medical Scholars 2024</span> <br class='hidden md:block'/>Combine the world of Medicine with the world of Business,<br class='hidden md:block'/> Public Policy & International Affairs to move into leadership<br class='hidden md:block'/> roles within your organization or pivot careers by becoming <br class='hidden md:block'/>part of a Diverse Global Network", ""]} />

            <Button url="https://docs.google.com/forms/d/1b_2u8I0EVe8Qf8DoKdUOTqGXq4-u8ul6CzuHl5tL3Rs/edit"> ADVANCE YOUR CAREER BY APPLYING NOW</Button>


            <Heading margin={60}>Why GGI Medical Scholars Program Works? </Heading>
            <FourColumnLayout data={fourcolumndata} />

            <Container >
                <p className='my-7'>MBA/MD is one of the fastest-growing degree programs in the world. This trend will only increase as Physicians become more aware of the need to possess strong leadership skills to broaden their abilities beyond clinical medicine. </p>
                <p className='my-7'>Of course, there are salary benefits of learning skills at the intersection of Medicine, Finance, Operations, Technology, Product Management, Public Policy, and so on. But most importantly, it allows medical professionals to wear multiple hats - as investors, founders, product Managers, Advisors to Ministers, and so on. There are seemingly endless amounts of opportunities for Physicians outside of clinical practice and for all the right reasons. </p>
                <p className='my-7'>When Medical Professionals are trained in the skills at the intersection of Business, Public Policy, and Medicine- they can transform the IRRs of VC funds focussed on Healthtech investment because they bring in specialized expertise, and they can help Ministers redefine and redesign Public Policy via analyzing market failures, they can create nudges in the world of startups, and they can advice McKinsey help transform the Pharma sector of an entire country. </p>
                <p className='my-7'>And therefore, relevant exposure to the world of Business and Public Policy could be a SUPERPOWER for medical professionals. </p>
                <p className='my-7 font-semibold text-black'>GGI Medical Scholars 2024 are the Young Medical Doctors of the world to immerse in this beautiful world. The world of intersections - around philosophy, management consulting, product management, public policy, data analytics, and Impact investing. GGI Medical Scholars will not be just astute doctors, but will rather become well-rounded, and well-informed Physicians. </p>
                <p className='my-7 font-semibold text-black'>While designing this Program, GGI Team collaborated with multiple experts and industry partners and discovered that from McKinsey to Hedge Funds to Venture Funds - all are vying for talents that have relevant exposure to the world of medicine, and most importantly - those who can tie the world of Medicine to the world of Business. </p>
                <p className='my-7'><span className='font-semibold primary'>Recognition by BCG:</span> GGI Fellowship was also recognized by BCG Global Media for its consulting feeder program.</p>
            </Container>


            <div className='my-8'></div>
            <YoutubeEmbed embedId='cds8xYiGVHg' autoplay={1} />



            <Heading>Life After GGI Medical Scholars Program</Heading>
            <Container>
                <p className='mb-4'>There is no &#39;typical&#39; GGI career path. You will be joined by the diverse GGI alumni spanning sectors, industries, and geographies, and interests range from political risk analysis, and banking to consulting, civil services applicants in the emerging markets to policy work in international organizations.</p>
                <p className='mb-4'>Impact Fellowship has positioned GGI Alumni for careers in a variety of sectors. Examples include :</p>
                <ul className='list-disc ml-4'>
                    <li className='mb-4'><span className='font-semibold primary'>Large Management Consulting Firms</span> such as The Boston Consulting Group, McKinsey, Bain & Company;</li>
                    <li className='mb-4'><span className='font-semibold primary'>International Organizations</span> such as United Nations, and the International Finance Corporation;</li>
                    <li className='mb-4'><span className='font-semibold primary'>Social Impact Consulting </span> Groups like Bridgespan, FSG. Dalberg</li>
                    <li className='mb-4'><span className='font-semibold primary'>Large Multinationals</span> such as Amazon, Unilever, and Procter & Gamle;</li>
                    <li className='mb-4'>Organizations focused on <span className='font-semibold primary'>developing market interests such as Dalberg</span> </li>
                    <li className='mb-4 font-semibold primary'>Impact investing Funds such as Menterra, Villgrow, etc. </li>
                </ul>
                <p className='mb-4'>Many large employers find that Impact Fellowship from Global Governance Initiative prepares Young Professionals not only for General Management Positions but also for jobs within governmental affairs, environmental affairs, and other functional areas that necessitate an education that goes beyond traditional business skills. </p>
                <p>GGI Medical Scholars are positioned to have a deep understanding of the complexity of national and local situations. </p>
            </Container>
            <Button url="https://docs.google.com/forms/d/1b_2u8I0EVe8Qf8DoKdUOTqGXq4-u8ul6CzuHl5tL3Rs/edit"> APPLY NOW</Button>


            <Heading>Who is this GGI Medical Scholars Program for?</Heading>
            <Container>
                <p>GGI Medical scholar is a renowned work-study program, uniquely designed for those Medical Professionals who want to experience a Global MBA without quitting their full-time jobs. </p>
                <p> 1. You are a determined <span className='primary font-bold'> young Doctor looking to pivot into Management consulting,</span> Impact Investing, and Startups focused on Health Tech. </p><br />
                <p>2. You are a Young Doctor who is looking for relevant  <span className='primary font-bold'> exposure in Policy Sector</span> and is keen to contribute to the social impact sector  </p><br />
                <p>3. You are a Young Doctor who wants to scale and expand his/her medical practice and wishes to forge a global network and acquire business skills for the same. </p><br />
                <p>4. You are ready to pivot careers and looking to be  <span className='primary font-bold'>connected to GGI employment partners </span> </p><br/>
                <p>5. You arer a Young Doctor who wants to take up Higher Administrative Roles in your Hospitals. </p>

            </Container>
            <YoutubeEmbed embedId='0XC2VXBF29g' autoplay={1}/>
            <Button url="https://docs.google.com/forms/d/1b_2u8I0EVe8Qf8DoKdUOTqGXq4-u8ul6CzuHl5tL3Rs/viewform"> APPLY NOW</Button>

            <Heading>Curriculum & Commitment</Heading>
            <Curriculum data={curriculum} />
            <YoutubeEmbed embedId='pEH8DR7LqJM' autoplay={1}/>


            <Heading>You Learn along with Diverse Community who Adds to Your Perspective </Heading>
            <Slider slides={testimonialMedical} />
            <Container>
                <p className='my-12 '>GGI Medical Scholars are directly mentored by industry practitioners at every step. Mentor led education to interweave learning with working, instead of seeing these as separate things. The fellowship selection process is rigorous and is an invite-only program.</p>
                <div className='my-24 grid sm:grid-cols-2 gap-5'>
                    <div className=''><Image src={studs1} alt="" /></div>
                    <div className=''><Image src={studs2} alt="" /></div>

                </div>
            </Container>
            <YoutubeEmbed embedId='BCwbgh9-69k' autoplay={1}/>
            <Button url="https://docs.google.com/forms/d/1b_2u8I0EVe8Qf8DoKdUOTqGXq4-u8ul6CzuHl5tL3Rs/viewform"> APPLY NOW</Button>

            

            <Heading>A Liberal Refund Policy for You  </Heading>
            <Container>
                <p className='text-lg'>Your learning is our no. 1 goal and we want this decision to be 100% risk-free for you so you can just focus on learning.  We offer a no-questions-asked <span className="font-bold">full refund policy within 6 days of enrollment payment</span>. </p>
            </Container>

            <Heading>You Learn & Build Network with World&#39;s Top CEOs, Partners, & Consulting Leaders</Heading>
            <Gallery />


            <Heading>GGI Medical Scholars 2024 is centered around 3 things  </Heading>
            <Container>
                <p className='mb-3'>Today&apos;s Global Leaders must be able to successfully navigate different cultures, economies, and industries. To help GGI Medical Scholars during executive education develop these crucial capabilities, GGI has carefully designed a portfolio of immersive, experiential Masterclasses that take place across sectors and industries. This is achieved in 3 stages : </p>
            </Container>
            <Steps data={stages} />
            <Button url="https://docs.google.com/forms/d/1b_2u8I0EVe8Qf8DoKdUOTqGXq4-u8ul6CzuHl5tL3Rs/viewform"> APPLY NOW</Button>

            <Heading>Learn What Matters via GGI Case-based Masterclasses in Management & Impact Consulting </Heading>
            <Masterclasses />
            <YoutubeEmbed embedId='nQkS0i38ls8' autoplay={1}/>

           
            <Heading>Program Fees </Heading>
            <Container> <p >Our competitors charge Rs. 3,00,000 to Rs. 7,00,000. So we decided to try crazy pricing. <span className='font-bold'>We are 80% cheaper than our competitor&#39;s price.</span> We are doing this because we want to make high-quality business and policy education truly accessible to you all and disrupt the space.
                <br /><br />
                Or if you don&#39;t want to commit, we have no questions ask full refund policy within 6 days of enrollment payment, i.e. if you are selected ( we have &lt;10% selection rate). <span className='font-bold'>Either way, you win.</span> To get detailed pricing and information, it is accessible on our application page <u><a href='https://docs.google.com/forms/d/1b_2u8I0EVe8Qf8DoKdUOTqGXq4-u8ul6CzuHl5tL3Rs/viewform' target="_blank" rel='noreferrer'>here</a></u></p>
            </Container>

            <Heading>GGI Official Partners Ready to Collaborate with you </Heading>
            <OfficialPartners />
            <Heading>GGI Associations</Heading>
            <Associations />
            
            <div className='mt-48'>
                <YoutubeEmbed embedId='DXHPoAPXQQc' autoplay={1}/>
            </div>
            <Heading margin={1}>Frequently Asked Questions</Heading>
            <Accordion />
            {/* <Socials /> */}
            <Footer />
        </>
    )
}

export default MedicalScholars