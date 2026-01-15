import SlidingHero from '../global/SlidingHero';
import Image from 'next/image';
import certificate from '../../public/certificate.jpg'
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

            <Button page="mpp" url="https://docs.google.com/forms/d/e/1FAIpQLSfSbH0zlqXa2pDi3-4ZqcbetXDN6UYCFe5-zXXcMjquvLzUaw/viewform"> APPLY NOW TO GGI POLICY PGP</Button>


            <Heading margin={60}>Why GGI Policy PGP <em>Actually</em> Works?</Heading>
            <FourColumnLayout data={fourcolumndata} />
            <Heading>You Learn along with Diverse Community who Adds to your Perspective</Heading >

            <Slider slides={testimonialPolicy} />

            <Heading>+88% GGIians working in Top Policy & Social Impact Roles and Organizations</Heading>
            <Partners companies={companies} />
            <YoutubeEmbed embedId='pwe1YoNGkog' autoplay={1} />
            <Button page="mpp" url="https://docs.google.com/forms/d/e/1FAIpQLSfSbH0zlqXa2pDi3-4ZqcbetXDN6UYCFe5-zXXcMjquvLzUaw/viewform">APPLY NOW TO GGI POLICY PGP</Button>

            <Heading>Who is this Program for?</Heading>
            <Container>
                <p> 1. You want to pivot into public policy, impact consulting, or international affairs <span className='primary font-bold'>without a $100,000 PGP in Policy
</span>. </p><br />
                <p>2. You’re aiming for organizations like the <span className='primary font-bold'> UN, World Bank, BCG,</span> or leading social enterprises. </p><br />
                <p>3.<span className='primary font-bold'> Future MPPs/Pre MPP</span> applicants- GGI PGP will strengthen your MPP applications, policy fellowships, and senior-level CVs, proving you’ve invested in understanding governance, not just growth.</p><br/>
                <p>4. You’ve already secured Post Graduate admits like <span className='primary font-bold'>Harvard Kennedy, Oxford, LSE </span>and want to get a head start on real-world learning.</p><br />
                <p>5. You’re a social impact entrepreneur <span className='primary font-bold'> building ventures that make policies work for people</span>.</p>

            </Container>
            <YoutubeEmbed embedId='7IFecGF-JzA' autoplay={1} />
            <Button page="mpp" url="https://docs.google.com/forms/d/e/1FAIpQLSfSbH0zlqXa2pDi3-4ZqcbetXDN6UYCFe5-zXXcMjquvLzUaw/viewform">APPLY NOW TO GGI POLICY PGP</Button>

            <Heading>Post Graduate Programme (PGP) in Public Policy, Governance & Impact </Heading>
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
            <Button page="mpp" url="https://docs.google.com/forms/d/e/1FAIpQLSfSbH0zlqXa2pDi3-4ZqcbetXDN6UYCFe5-zXXcMjquvLzUaw/viewform">APPLY NOW TO GGI POLICY PGP</Button>

            <Heading>Your Learning, Without the Risk. </Heading>
            <Container>
                <p className='text-lg'>Your learning is our no. 1 goal and we want this decision to be 100% risk-free for you so you can just focus on learning.  We offer a no-questions-asked <span className="font-bold">full refund policy within 6 days of enrollment payment</span>. </p>
            </Container>

            <Heading>Learn & Network with World&#39;s top CEOs, Partners, And Policy Leaders  </Heading>
            <p className='text-center text-xl'> <span className="primary font-extrabold">Learn from McKinsey Partners, IAS Officers, Startup Founders, and Impact Investors <br/> who’ve led through uncertainty - and are now guiding India’s next generation of leaders.</span></p>
            <br/>
            <Gallery />
            <YoutubeEmbed embedId='QZvdzbmmWpg' autoplay={1}/>
            <Button page="mpp" url="https://docs.google.com/forms/d/e/1FAIpQLSfSbH0zlqXa2pDi3-4ZqcbetXDN6UYCFe5-zXXcMjquvLzUaw/viewform">APPLY NOW TO GGI POLICY PGP</Button>

            <Heading>At GGI Policy PGP, You Don’t Just Study Policy - You Shape It  </Heading>
            <Container>
                <p className='mb-2'>Our immersive, experiential curriculum helps you learn how governments think, how systems change, and how policy can create measurable social impact.</p>
                <p>We prepare you to lead across government, consulting, and impact ecosystems - with a blend of <span className='font-bold'>rigor, empathy, and strategic thinking.</span> </p>
            </Container>
            <Steps data={stages} />



            <Button page="mpp" url='https://docs.google.com/forms/d/e/1FAIpQLSfSbH0zlqXa2pDi3-4ZqcbetXDN6UYCFe5-zXXcMjquvLzUaw/viewform'>APPLY NOW TO GGI POLICY PGP</Button>

            <Heading>High-Quality Policy Education - at 80% Less Cost </Heading>
            <Container> <p> Traditional PGPs in Public Policy, Governance & Impact cost ₹3–7 lakhs or more. GGI’s PGP in Public Policy, Governance & Impact delivers Ivy League outcomes at a fraction of that because access should never be a privilege.
            We also offer a <span className='font-bold'>6-day full refund policy</span> post-enrollment. Either way, you win. Because the future won’t be built by politicians - it’ll be built by problem solvers.
                <br/><br/></p>
            </Container>
            <Button page="mpp" url='https://docs.google.com/forms/d/e/1FAIpQLSfSbH0zlqXa2pDi3-4ZqcbetXDN6UYCFe5-zXXcMjquvLzUaw/viewform'>SHAPE POLICY. LEAD IMPACT. BECOME A GGI POLICY PGP SCHOLAR</Button>
            <Heading>GGI Graduation Certificate</Heading>
                        <Container>
                            <div className='grid grid-cols-1 md:grid-cols-3 gap-5'>
                                <div>
                                    <Image src={certificate} alt="" />
                                </div>
                                <div className='col-span-2'>
                                    <p className='mb-2'>Let us be honest. We are not in the certificate minting business. However, on successful completion of the program, you receive a unique GGI Post Graduate Programme (PGP) Policy Track graduation letter- </p>
                                    <ul className='list-disc ml-4'>
                                        <li> Showcasing your hard, fun, and enriching journey from a prestigious Global Governance Initiative Scholars journey</li>
                                        <li>Get a chance to network with GGI  industry experts, and peers during the program</li>
                                        <li>Gain demonstrable hands-on skills in business, communications, finance, and strategy</li>
                                    </ul>
                                </div>
                            </div>
                        </Container>

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
