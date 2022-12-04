import { React, useState } from 'react'
import SlidingHero from '../global/SlidingHero';
import Accordian from '../global/Accordian';
// import Socials from '../global/Socials';
import Heading from '../global/Heading';
import FourColumnLayout from '../global/FourColumnLayout';
import Container from '../global/Container';
import OfficialPartners from '../global/OfficialPartners';
import YoutubeEmbed from '../global/YoutubeEmbed';
import Curriculum from '../global/Curriculum';
import Associations from '../global/Associations';
import Gallery from '../global/Gallery';
import Footer from '../global/Footer';
import Partners from '../global/Partners';

// ------------------------------------------------------------------
import network from '../../public/network2.jpeg'
import clinton from '../../public/clinton.png'
import arunm from '../../public/arun_maira.jpg'
import poets from '../../public/poetsnquants.png'
// -------------------------------------------------------------
import BCG from '../../public/BCG_M.jpg';
import mckinsey from '../../public/mckinsey.jpg';
import bain from '../../public/bain-logo.jpg';
import kearney from '../../public/Kearney.jpg';
import ey from '../../public/ey.png';
import pwc from '../../public/pwc.jpg';
import amz from '../../public/amz.jpg';
import paytm from '../../public/paytm.png';
import Button from '../global/Button';


const MPP = () => {
    const companies = [BCG, mckinsey, bain, kearney, ey, pwc, amz, paytm];

    const fourcolumndata = [ //to be fetched from database
        {
            "id": 1,
            "img": arunm,
            "title": "Learn from Industry Leaders",
            "body": "Top Government & Society Leaders write their own policy and social impact cases and teach core Policy Concepts via designing a case-based learning ecosystem."
        },
        {
            "id": 2,
            "img": clinton,
            "title": "Get Recruited by Top Employers",
            "body": "GGI has forged strong employment partnerships with leading consulting, public policy, product management, and impact investing organizations."
        },
        {
            "id": 3,
            "img": network,
            "title": "Become Part of Global Network",
            "body": "Global community represents powerful internationally diverse leaders who are at the helm of leading organizations. And this community helps each other out - not just in referring you to your first job, but in navigating a thriving career or in building your startups."
        },
        {
            "id": 4,
            "img": poets,
            "title": "Globally Recognized",
            "body": "GGI MBA was globally featured by Poets and Quants as the world’s most disruptive Alt MBA program. It was also recognized by BCG Global Media for its learning outcomes "
        }
    ]
    const [isOpened, setIsOpened] = useState(false);

    function toggle() {
        setIsOpened(wasOpened => !wasOpened);
    }
    return (
        <>
            <SlidingHero image={'./policy.jpg'} title={["Learn Policy Skills Live, Join Global Network & Get Hired at GGI Policy Scholar to Become Leader in Society ", "GGI Policy Scholar seeks solutions - from geopolitics to sanctions along with government leaders  "]} />

            <div id='' className='p-4 flex justify-center'>
                <button className="bg-blue-700 hover:bg-blue-500 text-white  my-12 py-4 px-1 md:px-10 border border-blue-500 rounded-full shadow-lg ">
                    ADVANCE YOUR CAREER BY APPLYING NOW
                </button>
            </div>

            <Heading>Why GGI Policy Scholars  Works?</Heading>
            <FourColumnLayout data={fourcolumndata} />

            <Heading>+88% GGIians working in Top Policy & Social Impact Roles and Organizations</Heading>
            <Partners companies={companies} />
            <YoutubeEmbed embedId='8lWeJ3Ekq-I' />
            <Button>APPLY NOW</Button>

            <Heading>Who is this Program for?</Heading>
            <Container>
                <p> 1. You are a young professional looking for better <span className='primary font-medium'> alternatives to international MBA</span> programs and want to learn directly from top industry leaders.</p><br />
                <p>2. You are CA/non-MBA looking to pivot in management consulting in firms such as <span className='primary font-medium'> Mckinsey & BCG,  Product Management, roles</span> in firms such as Uber, Amazon, Microsoft, & leading tech startups.</p><br />
                <p>3. You are a <span className='primary font-medium'>Pre-MBA </span>with admits to Harvard 2+2, Yale Silver Scholars, and other top MBAs and looking to finish the business curriculum before your program.</p><br />
                <p>4. You are a <span className='primary font-medium'>budding entrepreneur</span> who is aiming to launch & scale ventures and looking to strengthen business skills while building an incredible support system.</p>

            </Container>
            <YoutubeEmbed embedId='URhwxoFL6S8' />
            <Button>APPLY NOW</Button>

            <Heading>Curriculum & Commitment  </Heading>
            <Curriculum />
            <YoutubeEmbed embedId='lGyhkONUSwk' />
            <Button>APPLY NOW</Button>

            <Heading>You Learn along with Diverse Community who Adds to Your Perspective </Heading>
            <div className='flex flex-wrap gap-10'>
                {/* to be added */}
            </div>
            <Container>
                <p>
                    GGI Policy Scholars community comprises an extremely diverse cohort -  from BTech at IIT&#39;s and YIF at Ashoka to Masters at TISS and the London School of Economics and Political Science. A few of the policy scholars are working professionals in organizations such as Pratham, Teach for India, NITI Aayog, Hindustan Times and other leading education NGOs.
                </p>
            </Container>
            <YoutubeEmbed embedId='OA4YaeVZhsA' />
            <Button>APPLY NOW</Button>

            <Heading>A Liberal Refund Policy for You </Heading>
            <Container>
                <p>Your learning is our no. 1 goal and we want this decision to be 100% risk-free for you so you can just focus on learning.  We have <span className="font-medium">no questions ask the full refund of the enrollment amount</span>of the selected scholars and fellows, till the first 6 days from the payment date. </p>
            </Container>

            <Heading>Learn & Network with World&#39;s top CEOs, Partners, And Policy Leaders  </Heading>
            <Gallery />
            <Button>APPLY NOW</Button>

            <Heading>As GGI Policy Scholar, You will Immerse Yourself in a Truly Impactful Experience  </Heading>
            <Container>
                <p className='mb-2'>Through teaching,  public sector knowledge, change theories, and engagement with government practitioners, GGI Policy Scholar during GGI MPP improves public policy and public leadership so that people can live in societies that are safer, freer, juster, and more sustainably prosperous. Our practitioner&#39;s focus on economic, technology, extremism, sustainability, and your public leadership practice.   </p>
                <p>Leaders looking to pivot into the world of public policy, social impact, international affairs and impact investing should be able to successfully navigate different cultures, economies, governments, and jobs. To help GGI Policy Scholars develop these crucial abilities, GGI has carefully curated a portfolio of immersive, experiential programs that take place across the social impact and public policy domain. This is achieved in 3 stages during the 3-6 months  :  </p>
                <h1 className='text-center pink text-xl font-semibold my-8'>STAGE 1 - Adept with Policy Toolkit  </h1>
                <p className='mb-2'>Today research and data-oriented policy-making is a critical component of sound decision-making in the world of Policy consulting, and social impact- and learning to navigate amidst the breadth of knowledge is what creates a great analytical policy thinker and a leader. GGI prepares Policy Scholars to be future leaders by honing skills that allow them to connect the dots across many areas including macroeconomics, emerging technologies such as AI, public market failures, liberal arts, financial inclusion, sustainability, responsible investing, ethics, energy, climate impact, and core policy perspectives - Via GGI&#39;s trademarked Masterclasses.  </p>
                {!isOpened && (<div className='text-center' style={{ color: "blue" }} onClick={toggle}>Show more..</div>)}
                {isOpened && (<div>
                    <p className='mb-2'>In this stage, GGI&#39;s Policy scholars will attend the 50 hours of Masterclasses in order for the scholars to interact with key government leaders and practitioners, policy scholars will also be provided unlimited exclusive access to renowned Guest Speakers Masterclasses.  </p>
                    <p className='mb-2'>Many of the Masterclasses are anchored by Incumbent Partners and Managing Directors of consulting firms, FMCG companies, and International Organizations. Over and above the Masterclasses, GGI Scholars indulge in peer to peer-based post Masterclass assignments, projects and startup weekend to apply the learnings on real practical problems.  </p>
                    <p className='mb-2'>The MBA for Impact Masterclass will teach the core MBA curriculum in 10 hours, and these principles will be applied across Masterclasses in Consulting, Investing, Product Management, etc. For the Harvard 2+2, Yale Silver Scholars, and other deferred MBAs - this stage will ensure that you have touched the basics of core courses before the start of your MBA Program - completion of this stage will save time to effectively engage in networking on Wiggly during your MBAs. For the working professionals, this will stage allow you to solve problems with contextual intelligence from across the sectors in your day job. </p>
                    <h1 className='text-center pink text-xl font-semibold my-8'>STAGE 2 - Access to Employment Partnerships & Microexperential learning in Consulting & PM and the Buddy Network </h1>
                    <p className='mb-2'>Global Governance Initiative has crafted and designed (now licensed and patented) microlearning AI-based experience via Schrödinger. It is an interactive real-life case simulator that allows GGI Scholars to practice cases and interviews at a time that works best for them. </p>
                    <p className='mb-2'>The Tool has been truly transformative for many GGI Scholars and Fellows who credit their success of getting into a top-notch consulting firm to this stage. As a GGI Scholar, you are expected to solve cases on this tool at least twice before your interview date. </p>
                    <p className='mb-2'>GGI Scholars will also be made part of a rotating buddy system - where they can practice cases, build a community, bond, and network with other members on Wiggly of the incredibly diverse communities at Global Governance Initiative. </p>
                    <h1 className='text-center pink text-xl font-semibold my-8'>STAGE 3 - Community & Networking Nights  </h1>
                    <p className='mb-2'>It is often said that if you have nothing in your life, but you have at least one person who cares for you unconditionally, it will do wonders for your self-esteem. For GGI Scholars that one person is the entire community at Global Governance Initiative. </p>
                    <p className='mb-2'>They attend monthly inner circle meetings, networking on &#34;wiggly&#34; with scholars from across industries and sectors. </p>
                    <p className='mb-2'>An MBA degree is more than learning valuations and Little’s Law. You pay for the entire experience - the guest speakers, office hours with your professors, campus events, and eventually landing the job of your dreams. It is an experience of a lifetime. </p>
                    <p className='mb-2'>Through Community & Networking Nights via &#34;wiggly&#34;, GGI brings the entire campus experience online. </p>
                    <p className='mb-2'>Even though the journey of an Impact Scholar formally ends in 3 months. But Scholars - as GGI Alumni will always have access to the inclusive, supportive, respectful, and collaborative ecosystem of the Global Governance Initiative for the rest of their lives. GGI Impact Scholars also enjoy access to the exclusive partnerships that GGI continuously builds with leading organizations, Business and Policy Schools. </p>
                    <p className='mb-2'>GGI Impact MBA Scholars is Crème de la crème of the Global Governance Initiative network on &#34;wiggly&#34;. Through core Masterclasses, flexible curriculum, Networking Nights, AI Tools - Impact MBA scholars Program provides a wide view into the world of social Impact Consulting, Management consulting, and Product Management. </p>
                    <p className='mb-2'>Impact MBA Scholars are also made part of the GGI&#39;s Growing network through its various technology portals that comprise an international and diverse network at &#34;wiggly&#34; of GGI Delegates, Impact Scholars, Policy Scholars, Tech MBA Scholars, Fellows, and mentors spread across 4 continents. </p>
                </div>)}
            </Container>
            <Button url='https://www.globalgovernanceinitiative.org/ggipolicyscholarsprogram'>APPLY NOW</Button>

            <Heading>Program Fees </Heading>
            <Container> <p >Our competitors charge Rs. 3,00,000 to Rs. 7,00,000. So we decided to try crazy pricing. <span className='font-bold'>We are 90% cheaper than our competitor&#39;s price.</span> We are doing this because we want to make high-quality business and policy education truly accessible to you all and disrupt the space.
                <br /><br />
                Or if you don&#39;t want to commit, we have no questions ask full refund policy within 6 days of enrollment payment, i.e. if you are selected ( we have &lt;10% selection rate). <span className='font-bold'>Either way, you win.</span> To get detailed pricing and information, it is accessible on our application page <u><a href='https://forms.gle/hv12YCeTFmDwFFJD8' target="_blank" rel="noreferrer" >here</a></u></p>
            </Container>

            <Heading>Our Official Partners</Heading>
            <OfficialPartners />

            <Heading>Our Associations </Heading>
            <Associations />

            <Heading>Frequently Asked Questions </Heading>
            <Accordian />
            {/* <Socials /> */}
            <Footer />
        </>
    )
}

export default MPP