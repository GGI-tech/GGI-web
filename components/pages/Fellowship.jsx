import Image from 'next/image'
import Heading from '../global/Heading'
import Accordion from '../global/Accordian'
import Gallery from '../global/Gallery'
import OfficialPartners from '../global/OfficialPartners'
import Container from '../global/Container'
import Curriculum from '../global/Curriculum'
import FourColumnLayout from '../global/FourColumnLayout'
import ThreeColumnLayout from '../global/ThreeColumnLayout'
import YoutubeEmbed from '../global/YoutubeEmbed'
import Masterclasses from '../global/Masterclasses'
import SlidingHero from '../global/SlidingHero'
import Steps from '../global/Steps'
import Slider from '../global/Slider'
import Footer from '../global/Footer'
import Button from '../global/Button'
import { testimonialMain } from '../../data/mainpgData';

// --------------------------------------------------------------------
import studs1 from '../../public/s1.png'
import studs2 from '../../public/s2.png'
// --------------------------------------------------------------------
import { fourcolumndata, stages, testimonialFellow, curriculum, socialspaceimpactdata } from '../../data/fellowshippgData'

const Fellowship = () => {

    return (
        <>
            <div className='mt-10'></div>
            <SlidingHero image={'./impactfellowship.jpg'} title={[`Get into Management & Development Consulting,<br class='hidden lg:block'/> Mentorship by BCG, Mckinsey Consultants <br class='hidden lg:block'/>& Join Global Network at<span class='text-yellow-300'> GGI Impact Fellowship</span><br class='hidden lg:block'/> To Become a Young Leader`]} />
            <Button page="fellowship" url="https://docs.google.com/forms/d/e/1FAIpQLSc0EdeZhxI2OeI5mh8HSUl4ScxHJ56XmvW48bcVzEA2MzZwTw/viewform"> ADVANCE YOUR CAREER NOW</Button>

            <Heading margin={60}>Why GGI Impact Fellowship Works ?</Heading>
            <FourColumnLayout data={fourcolumndata} />
            <Container>
                <p className='mb-5 mt-12'>The best teaching occurs only when there is a direct relationship between a teacher and a student—a situation where the student discusses ideas, thinks critically, and engages in meaningful conversation. However, in modern times, creating scalable solutions is challenging due to the sheer number of students. Consequently, GGI Impact Fellowship has developed a non-scalable McKinsey work experience ecosystem at 1/500th of the cost.</p>
                <p className='mb-5'><span className='font-semibold primary'>Young professionals often waste years preparing for Civil Services</span> to enter the development sector or reading countless cases in the false hope of breaking into management consulting. At Global Governance Initiative, we address this issue through our Impact Fellowship Program.</p>
                <p className='mb-12'><span className='font-semibold primary'>Recognition by BCG:</span>The GGI Fellowship has been recognized by BCG Global Media for its consulting feeder program.</p>
            </Container>
            <YoutubeEmbed embedId='CL-UcquUN3k' autoplay={1} />

            <Heading>Hear from GGIians who have successfully transitioned into Consulting, Policy, and Product Management roles - their experiences with us.</Heading >

            <Slider slides={testimonialMain} /> 

            <Heading>Life After GGI Impact Fellowship</Heading>

            <Container>
                <p className='mb-4'>There is no &#39;typical&#39; GGI career path. You will join diverse GGI alumni spanning sectors, industries, geographies, and interests, ranging from political risk analysis and banking to consulting, civil services in emerging markets, and policy work in international organizations.
</p>
                <p className='mb-4'>The Impact Fellowship has positioned GGI Alumni for careers in various sectors, including:</p>
                <ul className='list-disc ml-4'>
                    <li className='mb-4'><span className='font-semibold primary'>Large Management Consulting Firms</span> such as The Boston Consulting Group, McKinsey, Bain & Company;</li>
                    <li className='mb-4'><span className='font-semibold primary'>International Organizations</span> like the United Nations and the International Finance Corporation;</li>
                    <li className='mb-4'><span className='font-semibold primary'>Social Impact Consulting </span> consulting groups such as Bridgespan, FSG, and Dalberg;</li>
                    <li className='mb-4'><span className='font-semibold primary'>Large Multinationals</span> like Amazon, Unilever, and Procter & Gamble;</li>
                    <li className='mb-4'><span className='font-semibold primary'>Organizations</span> focused on developing market interests, such as Dalberg.
</li>
                    
                </ul>
                <p className='mb-4'>Many large employers find that the Impact Fellowship from the Global Governance Initiative prepares young professionals not just for general management positions but also for roles within governmental affairs, environmental affairs, and other functional areas that require an education extending beyond traditional business skills. </p>
                <p className='mb-4'>Impact Fellows at the Global Governance Initiative are equipped to understand the complexities of national and local situations deeply. </p>
                <p>Impact Fellows at Global Governance Initiative are positioned to have a deep understanding of the complexity of national and local situations. </p>
            </Container>
            <Button page="fellowship" url="https://docs.google.com/forms/d/e/1FAIpQLSc0EdeZhxI2OeI5mh8HSUl4ScxHJ56XmvW48bcVzEA2MzZwTw/viewform"> APPLY NOW</Button>


            <Heading>Who is this Fellowship for ?</Heading>
            <Container>
                <p> 1. You are a determined young professional looking to pivot into consulting and keen to learn by doing a consulting project directly with a <span className='primary font-semibold'>mentor from McKinsey, BCG, Bain, or Dalberg. </span> </p><br />
                <p>2. You are a UPSC aspirant looking for a relevant <span className='primary font-semibold'> Plan B for Civil Services</span> and keen to contribute to the social impact sector.
 </p><br />
                <p>3. You are seeking a <span className='primary font-semibold'>unique pre MBA/MPP work experience</span> in the social development consulting space by advising leading national NGO </p><br />
                <p className='mb-12'>4. You are ready to pivot careers and looking <span className='primary font-semibold'>to connect with GGI&apos;s employment partners.
</span></p>

            </Container>
            <YoutubeEmbed embedId='0XC2VXBF29g' autoplay={1} />
            <Button page="fellowship" url="https://docs.google.com/forms/d/e/1FAIpQLSc0EdeZhxI2OeI5mh8HSUl4ScxHJ56XmvW48bcVzEA2MzZwTw/viewform"> APPLY NOW</Button>


            <Heading>Curriculum & Commitment</Heading>
            <p className='px-8 text-center font-bold mb-4' >If GGI MBA Scholars is Harvard Business School then GGI Impact fellowship is Harvard Business School along with Mckinsey&#39;s work experience </p>
            <Curriculum data={curriculum} />
            <YoutubeEmbed embedId='3xL9AbP92yo' />
            <Button page="fellowship" url="https://docs.google.com/forms/d/e/1FAIpQLSc0EdeZhxI2OeI5mh8HSUl4ScxHJ56XmvW48bcVzEA2MzZwTw/viewform"> APPLY NOW</Button>


            <Heading>You Learn along with Diverse Community who Adds to Your Perspective </Heading>
            <Slider slides={testimonialFellow} />
            <Container>
                <p className='my-12 '>Fellows are directly mentored by industry practitioners at every step. Mentor led education to interweave learning with working, instead of seeing these as separate things. The fellowship selection process is rigorous and is an invite-only program.</p>
                <div className='my-24 grid sm:grid-cols-2 gap-5'>
                    <div className=''><Image src={studs1} alt="" /></div>
                    <div className=''><Image src={studs2} alt="" /></div>

                </div>
            </Container>
            <YoutubeEmbed embedId='BCwbgh9-69k' />
            <Button page="fellowship" url="https://docs.google.com/forms/d/e/1FAIpQLSc0EdeZhxI2OeI5mh8HSUl4ScxHJ56XmvW48bcVzEA2MzZwTw/viewform"> APPLY NOW</Button>

            <Heading>This is how You&apos;d Create Impact in Social Space with Your Consulting Skills  ? </Heading>
            <ThreeColumnLayout data={socialspaceimpactdata} />
            <Heading>A Liberal Refund Policy for You </Heading>
    
            <Container>
                <p className='text-lg'>Your learning is our no. 1 goal and we want this decision to be 100% risk-free for you so you can just focus on learning.  We have <span className="font-bold">no questions ask the full refund of the enrollment amount</span> of the selected scholars and fellows, till the first 6 days from the payment date. </p>
            </Container>

            <Heading>You Learn & Build Network with World&#39;s Top CEOs, Partners, Consulting & Policy Leaders</Heading>
            <Gallery />

            <Heading>With Impact Fellowship, The World is Your Classroom</Heading>

            <Container>
                <p>Today&apos;s global leaders must be able to successfully navigate different cultures, economies, and industries. To help impact fellows during executive education develop these crucial capabilities, GGI has carefully designed a portfolio of immersive, experiential courses that span various sectors and industries. This is achieved in three stages: &nbsp;</p>
            </Container>
            <Steps data={stages} />
            <Button page="fellowship" url="https://docs.google.com/forms/d/e/1FAIpQLSc0EdeZhxI2OeI5mh8HSUl4ScxHJ56XmvW48bcVzEA2MzZwTw/viewform"> APPLY NOW</Button>

            <Heading>Learn What Matters via GGI Case-based Masterclasses in Management & Impact Consulting </Heading>
            <Masterclasses />
            <YoutubeEmbed embedId='nQkS0i38ls8' />

            <Heading>Program Fees </Heading>
            <Container> <p >Our competitors charge Rs. 3,00,000 to Rs. 7,00,000. So we decided to try crazy pricing. <span className='font-bold'>We are 80% cheaper than our competitor&#39;s price.</span> We are doing this because we want to make high-quality business and policy education truly accessible to you all and disrupt the space.
                <br /><br />
                Or if you don&#39;t want to commit, we have no questions ask full refund policy within 6 days of enrollment payment, i.e. if you are selected ( we have &lt;10% selection rate). <span className='font-bold'>Either way, you win.</span> To get detailed pricing and information, it is accessible on our application page <u><a href='https://docs.google.com/forms/d/e/1FAIpQLSc0EdeZhxI2OeI5mh8HSUl4ScxHJ56XmvW48bcVzEA2MzZwTw/viewform' target="_blank" rel='noreferrer'>here</a></u></p>
            </Container>

            <Heading>Official Partners </Heading>
            <OfficialPartners />

            <div className='mt-48'>
                <YoutubeEmbed embedId='DXHPoAPXQQc' />
            </div>
            <Heading margin={1}>Frequently Asked Questions</Heading>
            <Accordion />
            <Footer />
        </>
    )
}

export default Fellowship