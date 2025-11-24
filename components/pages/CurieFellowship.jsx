import Image from 'next/image'
import Heading from '../global/Heading'
import Accordion from '../global/Accordian'
import Gallery from '../global/Gallery'
import OfficialPartners from '../global/OfficialPartners'
import Container from '../global/Container'
import Curriculum2 from '../global/Curriculum2'
import FiveColumnLayout from '../global/FiveColumnLayout'
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
import { fivecolumndata, stages, testimonialFellow, curriculum, socialspaceimpactdata } from '../../data/curieData'

const CurieFellowship = () => {

    return (
        <>
            <div className='mt-10'></div>
            <SlidingHero image={'./impactfellowship.jpg'} title={[`Get into Management & Development Consulting,<br class='hidden lg:block'/> Mentorship by BCG, Mckinsey Consultants <br class='hidden lg:block'/>& Join Global Network at<span class='text-yellow-300'> GGI Curie Fellowship</span><br class='hidden lg:block'/> To Become a Strong, Woman Leader`]} />
            <Button page="fellowship" url="https://docs.google.com/forms/d/e/1FAIpQLSc0EdeZhxI2OeI5mh8HSUl4ScxHJ56XmvW48bcVzEA2MzZwTw/viewform"> ADVANCE YOUR CAREER NOW</Button>

            <Heading margin={60}>Why GGI Curie Fellowship Works ?</Heading>
            <FiveColumnLayout data={fivecolumndata} />
            <Container>
                <p className='mb-5 mt-12'>The most impactful learning happens through direct, meaningful connections between mentors and fellows-where ideas are explored, critical thinking is fostered, and supportive conversations drive growth. However, scaling this personalized experience is challenging in today’s fast-paced world. <br/><br/>The GGI Curie Fellowship bridges this gap by offering an exclusive, hands-on consulting and leadership experience tailored for women navigating pregnancy, family planning, and postpartum transitions-all at just 1/500th of the traditional cost of an MBA degree</p>
                <p className='mb-5'><span className='font-semibold primary'>Many women professionals struggle to re-enter competitive fields like management and development consulting after a career break or spend years trying to bridge the gap through self-study.</span> The GGI Curie Fellowship solves this by providing direct access to real-world projects, mentorship from top consultants at firms like BCG and McKinsey, and a supportive global network-empowering women to thrive as leaders while balancing career and family.</p>
                <p className='mb-12'><span className='font-semibold primary'>Recognition by BCG:</span>The GGI Fellowship has been recognized by BCG Global Media for its consulting feeder program.</p>
            </Container>
            <YoutubeEmbed embedId='CL-UcquUN3k' autoplay={1} />

            <Heading>Hear from GGIians who have successfully transitioned into Consulting, Policy, and Product Management roles - their experiences with us.</Heading >

            <Slider slides={testimonialMain} /> 
            <YoutubeEmbed embedId='B3EOeD5QcAU' autoplay={1}/>
            <Heading>Life After GGI Curie Fellowship</Heading>

            <Container>
                <p className='mb-4'>There is no &#39;typical&#39; GGI Curie Fellowship career path. You will join diverse GGI alumni spanning sectors, industries, geographies, and interests, ranging from political risk analysis and banking to consulting, civil services in emerging markets, and policy work in international organizations.
</p>
                <p className='mb-4'>The Curie Fellowship has positioned GGI Alumni for careers in various sectors, including:</p>
                <ul className='list-disc ml-4'>
                    <li className='mb-4'><span className='font-semibold primary'>Large Management Consulting Firms</span> such as The Boston Consulting Group, McKinsey, Bain & Company;</li>
                    <li className='mb-4'><span className='font-semibold primary'>International Organizations</span> like the United Nations and the International Finance Corporation;</li>
                    <li className='mb-4'><span className='font-semibold primary'>Social Impact Consulting </span> consulting groups such as Bridgespan, FSG, and Dalberg;</li>
                    <li className='mb-4'><span className='font-semibold primary'>Large Multinationals</span> like Amazon, Unilever, and Procter & Gamble;</li>
                    <li className='mb-4'><span className='font-semibold primary'>Organizations</span> focused on developing market interests, such as Dalberg.
</li>
                    
                </ul>
                <p className='mb-4'>Many leading employers recognize that the Curie Fellowship prepares women not only for leadership roles in management but also for specialized positions in government affairs, sustainability, and strategic initiatives-fields that demand skills beyond conventional business training.</p>
                <p className='mb-4'>Curie Fellows at the Global Governance Initiative develop a profound understanding of the complexities of national and local environments, empowering them to lead with impact across sectors.</p>
            </Container>
            <Button page="fellowship" url="https://docs.google.com/forms/d/e/1FAIpQLSc0EdeZhxI2OeI5mh8HSUl4ScxHJ56XmvW48bcVzEA2MzZwTw/viewform"> APPLY NOW</Button>


            <Heading>Who is this Fellowship for ?</Heading>
            <Container>
                <p> 1. Aspiring Women Leaders in Consulting- Pregnancy & Postpartum-Friendly: You are a driven young professional eager to pivot into management or development consulting by working on real-world projects with direct<span className='primary font-semibold'>mentorship from consultants at McKinsey, BCG, Bain, or Dalberg-all within a program designed to support women navigating pregnancy or postpartum transitions. </span> </p><br />
                <p>2. Civil Services Aspirants Seeking a Family-Friendly Plan B: You are a UPSC aspirant exploring impactful career alternatives and are <span className='primary font-semibold'>passionate about contributing to the social impact and development sector, while balancing family planning, pregnancy, or postpartum needs.</span>
 </p><br />
                <p>3. Pre-MBA/MPP Professionals Seeking Pregnancy-Supportive Experience: You are preparing for <span className='primary font-semibold'>an MBA or MPP</span> and want to gain consulting experience by advising leading national NGOs-through a flexible, family-friendly program that accommodates the demands of pregnancy and motherhood. </p><br />
                <p className='mb-12'>4. Career Pivoters Looking for Family-Centric Employment Opportunities: You are ready to transition into a new career and seek to connect with GGI’s family-friendly employment partners, who prioritize<span className='primary font-semibold'>work-life balance and provide support for women during pregnancy and postpartum.
</span></p>

            </Container>
            <YoutubeEmbed embedId='0XC2VXBF29g' autoplay={1} />
            <Button page="fellowship" url="https://docs.google.com/forms/d/e/1FAIpQLSc0EdeZhxI2OeI5mh8HSUl4ScxHJ56XmvW48bcVzEA2MzZwTw/viewform"> APPLY NOW</Button>


            <Heading>Curriculum & Commitment</Heading>
            <p className='px-8 text-center font-bold mb-4' >
            If GGI MBA Scholars is the equivalent of Harvard Business School, then the GGI Curie Fellowship is like Harvard Business School combined with McKinsey’s work experience-specially designed to support women during pregnancy, family planning, and postpartum transitions.</p>
            <Curriculum2 data={curriculum} />
            <YoutubeEmbed embedId='3xL9AbP92yo' />
            <Button page="fellowship" url="https://docs.google.com/forms/d/e/1FAIpQLSc0EdeZhxI2OeI5mh8HSUl4ScxHJ56XmvW48bcVzEA2MzZwTw/viewform"> APPLY NOW</Button>


            <Heading>You Learn along with Diverse Community who Adds to Your Perspective </Heading>
            <Slider slides={testimonialFellow} />
            <Container>
                <p className='my-12 '>Curie Fellows are directly mentored by industry leaders from top firms like McKinsey, BCG, and Bain, ensuring continuous guidance at every stage. This mentor-led approach seamlessly integrates learning with real-world consulting experience, rather than treating them as separate pursuits. The Curie Fellowship has a rigorous, invite-only selection process, designed to support and empower women navigating pregnancy, family planning, and postpartum transitions while advancing their careers.</p>
                <div className='my-24 grid sm:grid-cols-2 gap-5'>
                    <div className=''><Image src={studs1} alt="" /></div>
                    <div className=''><Image src={studs2} alt="" /></div>

                </div>
            </Container>
            <YoutubeEmbed embedId='BCwbgh9-69k' />
            <Button page="fellowship" url="https://docs.google.com/forms/d/e/1FAIpQLSc0EdeZhxI2OeI5mh8HSUl4ScxHJ56XmvW48bcVzEA2MzZwTw/viewform"> APPLY NOW</Button>

            <Heading>This is how You&apos;d Create Impact in Social Space with Your Consulting Skills  ? </Heading>
            <ThreeColumnLayout data={socialspaceimpactdata} />
            <Container>Similarly,  <span className='primary font-semibold'>Council on Sustainable Development (CSD)</span> is a sister organization and think tank arm allowing exclusive opportunities to <span className="font-bold">GGI Fellows Only</span> to work with handpicked GGI mentors on cutting edge topics nudging public policy and achieving United Nations Sustainable Development Goals in emerging markets on climate, water, AI, women empowerment, investment and education crisis via young passionate mindset. You can read more about CSD research by our GGI fellows <u><a href='https://www.councilonsustainabledevelopment.org/' target="_blank" rel='noreferrer'>here</a></u>. </Container>
            <Heading>A Liberal Refund Policy for You </Heading>
    
            <Container>
                <p className='text-lg'>Your learning is our no. 1 goal and we want this decision to be 100% risk-free for you so you can just focus on learning.  We offer a no-questions-asked <span className="font-bold">full refund policy within 6 days of enrollment payment</span>. </p>
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

export default CurieFellowship