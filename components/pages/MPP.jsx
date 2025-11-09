import SlidingHero from '../global/SlidingHero';
import Accordian from '../global/Accordian';
// import Socials from '../global/Socials';
import Heading from '../global/Heading';
import FourColumnLayout from '../global/FourColumnLayout';
import Container from '../global/Container';
import OfficialPartners from '../global/OfficialPartners';
import YoutubeEmbed from '../global/YoutubeEmbed';
import Curriculum6 from '../global/Curriculum6';
import Associations from '../global/Associations';
import Gallery from '../global/Gallery';
import Footer from '../global/Footer';
import Partners from '../global/Partners';
import Button from '../global/Button';
import Slider from '../global/Slider'
import Steps from '../global/Steps';
import { companies, fourcolumndata, stages, testimonialPolicy, curriculum } from '../../data/policypgData';

const MPP = () => {

    return (
        <>
            <SlidingHero image={'./policy.jpg'} title={[`Join a Global Network of Practitioners Who Build Better Societies. <br/> <span class="text-yellow-200"> Become the kind of policy leader the world actually needs</span><br class='hidden md:block'/>`, `<span class="text-yellow-200"></span><br/> `]} />

            <Button page="mpp" url="https://docs.google.com/forms/d/e/1FAIpQLSfSbH0zlqXa2pDi3-4ZqcbetXDN6UYCFe5-zXXcMjquvLzUaw/viewform"> APPLY NOW TO THE GGI POLICY CONSULTING LAB</Button>


            <Heading margin={60}>Why GGI Policy Consulting Lab Works?</Heading>
            <FourColumnLayout data={fourcolumndata} />
            <Heading>You Learn along with Diverse Community who Adds to your Perspective</Heading >

            <Slider slides={testimonialPolicy} />

            <Heading>+88% GGIians working in Top Policy & Social Impact Roles and Organizations</Heading>
            <Partners companies={companies} />
            <YoutubeEmbed embedId='pwe1YoNGkog' autoplay={1} />
            <Button page="mpp" url="https://docs.google.com/forms/d/e/1FAIpQLSfSbH0zlqXa2pDi3-4ZqcbetXDN6UYCFe5-zXXcMjquvLzUaw/viewform">APPLY NOW</Button>

            <Heading>Who is this Program for?</Heading>
            <Container>
                <p> 1. You want to pivot into public policy, impact consulting, or international affairs <span className='primary font-bold'>without a $100,000 MPP
</span>. </p><br />
                <p>2. You’re aiming for organizations like the <span className='primary font-bold'> UN, World Bank, BCG,</span> or leading social enterprises. </p><br />
                <p>3. You’ve already secured MPP admits like <span className='primary font-bold'>Harvard Kennedy, Oxford, LSE </span>and want to get a head start on real-world learning.</p><br />
                <p>4. You’re a social impact entrepreneur <span className='primary font-bold'> building ventures that make policies work for people</span>.</p>

            </Container>
            <YoutubeEmbed embedId='7IFecGF-JzA' autoplay={1} />
            <Button page="mpp" url="https://docs.google.com/forms/d/e/1FAIpQLSfSbH0zlqXa2pDi3-4ZqcbetXDN6UYCFe5-zXXcMjquvLzUaw/viewform">APPLY NOW</Button>

            <Heading>Post Graduate Program in Public Policy </Heading>
            <Curriculum6 data={curriculum} />
            <YoutubeEmbed embedId='hnoA7rzFbHw' autoplay={1}/>
            <Button page="mpp" url="https://docs.google.com/forms/d/e/1FAIpQLSfSbH0zlqXa2pDi3-4ZqcbetXDN6UYCFe5-zXXcMjquvLzUaw/viewform">START YOUR POLICY JOURNEY WITH GGI - APPLY NOW</Button>


            <Heading>Learn With Changemakers Across Sectors </Heading>
            <div className='flex flex-wrap gap-10'>
                {/* to be added */}
            </div>
                <Container>
                <p className='text-lg'>From <span className="font-bold">IIT engineers and TISS graduates to Teach for India fellows and NITI Aayog professionals</span> - our cohort reflects the diversity of modern policy leadership. The conversations inside GGI are where impact begins. </p>
            </Container>


            <YoutubeEmbed embedId='zJzwHEBd7Zc' autoplay={1}/>
            <Button page="mpp" url="https://docs.google.com/forms/d/e/1FAIpQLSfSbH0zlqXa2pDi3-4ZqcbetXDN6UYCFe5-zXXcMjquvLzUaw/viewform">APPLY NOW</Button>

            <Heading>Your Learning, Without the Risk. </Heading>
            <Container>
                <p className='text-lg'> We offer a <span className="font-bold">no-questions-asked 3-day full refund</span> after your first live class. Because your only commitment should be to learning - not uncertainty. </p>
            </Container>

            <Heading>Learn & Network with World&#39;s top CEOs, Partners, And Policy Leaders  </Heading>
            <Gallery />
            <YoutubeEmbed embedId='QZvdzbmmWpg' autoplay={1}/>
            <Button page="mpp" url="https://docs.google.com/forms/d/e/1FAIpQLSfSbH0zlqXa2pDi3-4ZqcbetXDN6UYCFe5-zXXcMjquvLzUaw/viewform">APPLY NOW</Button>

            <Heading>At GGI Policy Consulting Lab, You Don’t Just Study Policy - You Shape It  </Heading>
            <Container>
                <p className='mb-2'>Our immersive, experiential curriculum helps you learn how governments think, how systems change, and how policy can create measurable social impact.</p>
                <p>We prepare you to lead across government, consulting, and impact ecosystems - with a blend of <span className='font-bold'>rigor, empathy, and strategic thinking.</span> </p>
            </Container>
            <Steps data={stages} />



            <Button page="mpp" url='https://docs.google.com/forms/d/e/1FAIpQLSfSbH0zlqXa2pDi3-4ZqcbetXDN6UYCFe5-zXXcMjquvLzUaw/viewform'>APPLY NOW</Button>

            <Heading>High-Quality Policy Education - at 80% Less Cost </Heading>
            <Container> <p > Traditional MPPs cost ₹3–7 lakhs or more. GGI’s Policy Lab delivers Ivy League outcomes at a fraction of that - because access should never be a privilege. <br/>
            We also offer a <span className='font-bold'>6-day full refund policy</span> post-enrollment. <br/> Either way, you win.
                <br/><br/></p>
            </Container>
            <Button page="mpp" url='https://docs.google.com/forms/d/e/1FAIpQLSfSbH0zlqXa2pDi3-4ZqcbetXDN6UYCFe5-zXXcMjquvLzUaw/viewform'>SHAPE POLICY. LEAD IMPACT. BECOME A GGI POLICY SCHOLAR</Button>

            <div className='mt-24 flex justify-center'>
                <p className='md:w-3/5 md:text-lg mb-5 text-center'>Because the future won’t be built by politicians - it’ll be built by problem solvers.<br/>
                </p>
            </div>

            <Heading>Our Official Partners</Heading>
            <OfficialPartners />

            <Heading>Our Associations </Heading>
            <Associations />
            <div className='mt-48'>
                <YoutubeEmbed embedId='Pt8cnPkD4k0' autoplay={1}/>
            </div>
            <Heading margin={2}>Frequently Asked Questions </Heading>
            <Accordian />
            {/* <Socials /> */}
            <Footer />
        </>
    )
}

export default MPP
