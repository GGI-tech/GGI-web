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
import Button from '../global/Button';
import Steps from '../global/Steps';
import { companies, fourcolumndata,stages, testimonialPolicy,curriculum } from '../../data/policypgData';

const MPP = () => {
    
    return (
        <>
            <SlidingHero image={'./policy.jpg'} title={[`Learn Policy Skills Live, Join Global Network<br class='hidden md:block'/> & Get Hired at<span class="text-yellow-200"> GGI Policy Scholar</span><br class='hidden md:block'/> to Become Leader in Society `, `<span class="text-yellow-200">GGI Policy Scholar</span><br/> seeks solutions - from geopolitics to sanctions along with government leaders  `]} />

            <Button page="mpp" url="https://docs.google.com/forms/d/e/1FAIpQLSfSbH0zlqXa2pDi3-4ZqcbetXDN6UYCFe5-zXXcMjquvLzUaw/viewform"> ADVANCE YOUR CAREER BY APPLYING NOW</Button>


            <Heading margin={60}>Why GGI Policy Scholars  Works?</Heading>
            <FourColumnLayout data={fourcolumndata} />

            <Heading>+88% GGIians working in Top Policy & Social Impact Roles and Organizations</Heading>
            <Partners companies={companies} />
            <YoutubeEmbed embedId='8lWeJ3Ekq-I' autoplay={1} />
            <Button page="mpp" url="https://docs.google.com/forms/d/e/1FAIpQLSfSbH0zlqXa2pDi3-4ZqcbetXDN6UYCFe5-zXXcMjquvLzUaw/viewform">APPLY NOW</Button>

            <Heading>Who is this Program for?</Heading>
            <Container>
                <p> 1. You are a young professional looking for better <span className='primary font-medium'> Alternatives to international MBA</span> programs and want to learn directly from top industry leaders.</p><br />
                <p>2. You are CA/non-MBA looking to pivot in management consulting in firms such as <span className='primary font-medium'> Mckinsey & BCG,  Product Management, roles</span> in firms such as Uber, Amazon, Microsoft, & leading tech startups.</p><br />
                <p>3. You are a <span className='primary font-medium'>Pre-MBA </span>with admits to Harvard 2+2, Yale Silver Scholars, and other top MBAs and looking to finish the business curriculum before your program.</p><br />
                <p>4. You are a <span className='primary font-medium'>budding entrepreneur</span> who is aiming to launch & scale ventures and looking to strengthen business skills while building an incredible support system.</p>

            </Container>
            <YoutubeEmbed embedId='URhwxoFL6S8' autoplay={1} />
            <Button page="mpp" url="https://docs.google.com/forms/d/e/1FAIpQLSfSbH0zlqXa2pDi3-4ZqcbetXDN6UYCFe5-zXXcMjquvLzUaw/viewform">APPLY NOW</Button>

            <Heading>Curriculum & Commitment  </Heading>
            <Curriculum data={curriculum}/>
            <YoutubeEmbed embedId='lGyhkONUSwk' />
            <Button page="mpp" url="https://docs.google.com/forms/d/e/1FAIpQLSfSbH0zlqXa2pDi3-4ZqcbetXDN6UYCFe5-zXXcMjquvLzUaw/viewform">APPLY NOW</Button>

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
            <Button page="mpp" url="https://docs.google.com/forms/d/e/1FAIpQLSfSbH0zlqXa2pDi3-4ZqcbetXDN6UYCFe5-zXXcMjquvLzUaw/viewform">APPLY NOW</Button>

            <Heading>A Liberal Refund Policy for You </Heading>
            <Container>
                <p className='text-lg'>Your learning is our no. 1 goal and we want this decision to be 100% risk-free for you so you can just focus on learning.  We have <span className="font-bold">no questions ask the full refund of the enrollment amount</span> of the selected scholars and fellows, till the first 6 days from the payment date. </p>
            </Container>

            <Heading>Learn & Network with World&#39;s top CEOs, Partners, And Policy Leaders  </Heading>
            <Gallery />
            <Button page="mpp" url="https://docs.google.com/forms/d/e/1FAIpQLSfSbH0zlqXa2pDi3-4ZqcbetXDN6UYCFe5-zXXcMjquvLzUaw/viewform">APPLY NOW</Button>

            <Heading>As GGI Policy Scholar, You will Immerse Yourself in a Truly Impactful Experience  </Heading>
            <Container>
                <p className='mb-2'>Through teaching,  public sector knowledge, change theories, and engagement with government practitioners, GGI Policy Scholar during GGI MPP improves public policy and public leadership so that people can live in societies that are safer, freer, juster, and more sustainably prosperous. Our practitioner&#39;s focus on economic, technology, extremism, sustainability, and your public leadership practice.   </p>
                <p>Leaders looking to pivot into the world of public policy, social impact, international affairs and impact investing should be able to successfully navigate different cultures, economies, governments, and jobs. To help GGI Policy Scholars develop these crucial abilities, GGI has carefully curated a portfolio of immersive, experiential programs that take place across the social impact and public policy domain. <span className='font-bold'>This is achieved in 3 stages during the 3-6 months  : </span> </p>
            </Container>
            <Steps data={stages} />



            <Button page="mpp" url='https://docs.google.com/forms/d/e/1FAIpQLSfSbH0zlqXa2pDi3-4ZqcbetXDN6UYCFe5-zXXcMjquvLzUaw/viewform'>APPLY NOW</Button>

            <Heading>Program Fees </Heading>
            <Container> <p >Our competitors charge Rs. 3,00,000 to Rs. 7,00,000. So we decided to try crazy pricing. <span className='font-bold'>We are 80% cheaper than our competitor&#39;s price.</span> We are doing this because we want to make high-quality business and policy education truly accessible to you all and disrupt the space.
                <br /><br />
                Or if you don&#39;t want to commit, we have no questions ask full refund policy within 6 days of enrollment payment, i.e. if you are selected ( we have &lt;10% selection rate). <span className='font-bold'>Either way, you win.</span> To get detailed pricing and information, it is accessible on our application page <u><a href='https://docs.google.com/forms/d/e/1FAIpQLSfSbH0zlqXa2pDi3-4ZqcbetXDN6UYCFe5-zXXcMjquvLzUaw/viewform' target="_blank" rel="noreferrer" >here</a></u></p>
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