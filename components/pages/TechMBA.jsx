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
import Gallery2 from '../global/Gallery2';
import Footer from '../global/Footer';
import Partners from '../global/Partners';
import Button from '../global/Button';
import Steps from '../global/Steps';
import { companies, fourcolumndata, stages, testimonialPolicy, curriculum } from '../../data/techMBAData';

const TechMBA = () => {

    return ( 
        <>
            <SlidingHero image={'./24935508850.jpg'} title={[`Join us where Technology meets Business<br class='hidden md:block'/> at<span class="text-yellow-200"> GGI Tech-MBA Scholars Program: An AI Focused MBA</span><br class='hidden md:block'/> to Become a Tech-Business Leader `, `<span class="text-yellow-200">GGI Tech-MBA Scholar</span><br/> seeks solutions - from technology to AI along with business leaders  `]} />

            <Button page="mpp" url="https://forms.gle/bKdod9UcbUzoEoYYA"> ADVANCE YOUR CAREER BY APPLYING NOW</Button> {/*to be changed: google form, background image, janmejaya image*/ }

            <Heading margin={60}>What is a Tech-MBA and Why do you Need It?</Heading>
            <Container>
                <p> 1. At GGI, our<span className='primary font-bold'> Tech-MBA program is an ideal option for leaders </span> who&apos;ll be working in and around the tech sector.</p><br />

                <p>2. Our STEM-designated Equivalent-to-MBA program is designed to empower <span className='primary font-bold'>tech enthusiasts to become bold business leaders and innovative entrepreneurs. </span>With a state-of-the-art curriculum and real-world projects, you&apos;ll master the business skills and leadership mindset needed to thrive in today&apos;s fast-moving tech landscape.</p><br />

                <p>3. In this 6-month Equivalent-to-MBA program, you&apos;ll gain <span className='primary font-bold'>foundational business knowledge before immersing in tech coursework</span> and exploring electives related to your areas of interest.</p><br />

                <p>4. Whether you dream of driving change at a global company or launching the next big idea, this program will give you the tools to make it happen. <span className='primary font-bold'>Why settle for following trends when you can create them?</span> </p>

            </Container>

            <Heading margin={60}>Why GGI Tech-MBA Scholars Works?</Heading>
            <FourColumnLayout data={fourcolumndata} />

            <Heading>+88% GGIians working in Top Business & Tech Roles and Organizations</Heading>
            <Partners companies={companies} />
            <YoutubeEmbed embedId='pjwQLAI_fHs' autoplay={1}/>
            <Button page="mpp" url="https://forms.gle/bKdod9UcbUzoEoYYA">APPLY NOW</Button>

            <Heading>Who is this Program for?</Heading>
            <Container>
                <p> 1. You are a young professional looking for better <span className='primary font-bold'> Alternatives to International Tech MBA</span> programs and want to learn directly from top industry leaders.</p><br />

                <p>2. You are a non-MBA looking to pivot in Tech & Management roles in firms such as<span className='primary font-bold'> Uber, Amazon, Microsoft, & leading tech startups.</span></p><br />
                <p>3. You are a <span className='primary font-bold'>Pre-MBA </span>with admits to Harvard Kennedy 2+2, Yale Silver Scholars, and other top MBAs and looking to finish the <span className='primary font-bold'>business curriculum with an AI focus, </span> before your program.</p><br />
                <p>4. You are a <span className='primary font-bold'>tech professional</span> who loves tech but wants to pivot into <span className='primary font-bold'>leadership roles.</span></p><br />
                <p>5. You are a <span className='primary font-bold'>budding social impact entrepreneur</span> who is aiming to launch & scale ventures and looking to strengthen tech skills while building an incredible support system.</p><br />

            </Container>
            <YoutubeEmbed embedId='iuNMaVSwH0E' autoplay={1}/>
            <Button page="mpp" url="https://forms.gle/bKdod9UcbUzoEoYYA">APPLY NOW</Button>

            <Heading>Post Graduate Program in Tech-MBA </Heading>
            <Curriculum data={curriculum} />
            <YoutubeEmbed embedId='NrAvqFqbZrU' />
            <Button page="mpp" url="https://forms.gle/bKdod9UcbUzoEoYYA">APPLY NOW</Button>

            <Heading>You Learn along with Diverse Community who Adds to Your Perspective </Heading>
            <div className='flex flex-wrap gap-10'>
                {/* to be added */}
            </div>
            <Container>
                <p>
                GGI Tech MBA Scholars community comprises an extremely diverse cohort -  from BTech at IIT&#39;s and YIF at Ashoka to Masters at TISS and the MIT. A few of the Tech-MBA scholars are working professionals in organizations such as Pratham, Google, Uber, Teach for India, and other leading Tech-Businesses.
                </p>
            </Container>
            <YoutubeEmbed embedId='lGyhkONUSwk' />
            <Button page="mpp" url="https://forms.gle/bKdod9UcbUzoEoYYA">APPLY NOW</Button>

            <Heading>A Liberal Refund Policy for You </Heading>
            <Container>
                <p className='text-lg'>Your learning is our no. 1 goal and we want this decision to be 100% risk-free for you so you can just focus on learning.  We offer a no-questions-asked <span className="font-bold">3-day full refund policy from your first live masterclass date</span>. </p>
            </Container>

            <Heading>Learn & Network with World&#39;s top CEOs, Tech And MBA Leaders  </Heading>
            <Gallery2 />
            <Button page="mpp" url="https://forms.gle/bKdod9UcbUzoEoYYA">APPLY NOW</Button>

            <Heading>As GGI Tech-MBA Scholar, You will Immerse Yourself in a Truly Impactful Experience  </Heading>
            <Container>
                <p className='mb-2'>Through technology, business & management knowledge, tech fundamentals, statistics, Python coding, change theories, data analytics and engagement with top management consultancies, during GGI Tech MBA, we will provide an AI-focused Equivalent-to-MBA so that the future leaders can lead Tech Businesses with an AI focus. Our practitioner&apos;s focus on economic, technology, Artificial Intelligence, Machine Learning, Extremism, sustainability, and your business leadership practice.   </p>
                <p>Leaders looking to pivot into the world of Tech MBA, tech for good, management, consuting & international affairs and Product Management should be able to successfully navigate different cultures, economies, and jobs. To help GGI Tech MBA Scholars develop these crucial abilities, GGI has carefully curated a portfolio of immersive, experiential programs that take place across the technology and business domain.  <span className='font-bold'>This is achieved in 3 stages during the 3-6 months  : </span> </p>
            </Container>
            <Steps data={stages} />



            <Button page="mpp" url='https://forms.gle/bKdod9UcbUzoEoYYA'>APPLY NOW</Button>

            <Heading>Program Fees </Heading>
            <Container> <p >Our competitors charge Rs. 3,00,000 to Rs. 7,00,000. So we decided to try crazy pricing. <span className='font-bold'>We are 80% cheaper than our competitor&#39;s price.</span> We are doing this because we want to make high-quality business and policy education truly accessible to you all and disrupt the space.
                <br /><br />
                Or if you don&#39;t want to commit, we have no questions ask full refund policy within 6 days of enrollment payment, i.e. if you are selected ( we have &lt;10% selection rate). <span className='font-bold'>Either way, you win.</span> To get detailed pricing and information, it is accessible on our application page <u><a href='https://forms.gle/bKdod9UcbUzoEoYYA' target="_blank" rel="noreferrer" >here</a></u></p>
            </Container>

            <Heading>Our Official Partners</Heading>
            <OfficialPartners />

            <Heading>Our Associations </Heading>
            <Associations />
            <div className='mt-48'>
                <YoutubeEmbed embedId='DXHPoAPXQQc' />
            </div>
            <Heading margin={2}>Frequently Asked Questions </Heading>
            <Accordian />
            {/* <Socials /> */}
            <Footer />
        </>
    )
}

export default TechMBA
