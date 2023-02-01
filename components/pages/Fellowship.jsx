import Image from 'next/image'
import Heading from '../global/Heading'
import Accordion from '../global/Accordian'
import Gallery from '../global/Gallery'
import OfficialPartners from '../global/OfficialPartners'
import Container from '../global/Container'
import Curriculum from '../global/Curriculum'
import FourColumnLayout from '../global/FourColumnLayout'
import YoutubeEmbed from '../global/YoutubeEmbed'
import Masterclasses from '../global/Masterclasses'
import SlidingHero from '../global/SlidingHero'
import Steps from '../global/Steps'
import Slider from '../global/Slider'
import Footer from '../global/Footer'
import Button from '../global/Button'

// --------------------------------------------------------------------
import studs1 from '../../public/s1.png'
import studs2 from '../../public/s2.png'
// --------------------------------------------------------------------
import { fourcolumndata, stages, testimonialFellow, curriculum } from '../../data/fellowshippgData'

const Fellowship = () => {

    return (
        <>
            <div className='mt-10'></div>
            <SlidingHero image={'./impactfellowship.jpg'} title={[`Get into Management & Development Consulting,<br class='hidden lg:block'/> Mentorship by BCG, Mckinsey Consultants <br class='hidden lg:block'/>& Join Global Network at<span class='text-yellow-300'> GGI Impact Fellowship</span><br class='hidden lg:block'/> To Become a Young Leader`]} />
            <Button url="https://docs.google.com/forms/d/e/1FAIpQLSc0EdeZhxI2OeI5mh8HSUl4ScxHJ56XmvW48bcVzEA2MzZwTw/viewform"> ADVANCE YOUR CAREER NOW</Button>

            <Heading margin={60}>Why GGI Impact Fellowship Works ?</Heading>
            <FourColumnLayout data={fourcolumndata} />
            <Container>
                <p className='mb-5 mt-12'><span className='font-semibold'>Best teaching can be done only when there is a direct relationship between a teacher and a good student</span>- a situation where the student discussed ideas, thinks about things, and talks about things.  But in modern times, it&#39;s hard to create scalable solutions since there are so many students. Hence, GGI Impact Fellowship has created a nonscalable Mckinsey work experience ecosystem outcome at 1/500th of the cost!</p>
                <p className='mb-5'><span className='font-semibold primary'>Young Professionals waste many years</span> either preparing for Civil Services to venture into the development sector or reading innumerable cases in the false hope of getting into management consulting. We at Global Governance Initiative solve this through our Impact Fellowship Program. </p>
                <p className='mb-12'><span className='font-semibold primary'>Recognition by BCG:</span> GGI Fellowship was also recognized by BCG Global Media for its consulting feeder program..</p>
            </Container>
            <YoutubeEmbed embedId='cds8xYiGVHg' autoplay={1} />

            <Heading>Life After GGI Impact Fellowship</Heading>

            <Container>
                <p className='mb-4'>There is no &#39;typical&#39; GGI career path. You will be joined by the diverse GGI alumni spanning sectors, industries, and geographies, and interests range from political risk analysis, and banking to consulting, civil services applicants in the emerging markets to policy work in international organizations.</p>
                <p className='mb-4'>Impact Fellowship has positioned GGI Alumni for careers in a variety of sectors. Examples include :</p>
                <ul className='list-disc ml-4'>
                    <li className='mb-4'><span className='font-semibold primary'>Large Management Consulting Firms</span> such as The Boston Consulting Group, McKinsey, Bain & Company;</li>
                    <li className='mb-4'><span className='font-semibold primary'>International Organizations</span> such as United Nations, and the International Finance Corporation;</li>
                    <li className='mb-4'><span className='font-semibold primary'>Social Impact Consulting </span> Groups like Bridgespan, FSG. Dalberg</li>
                    <li className='mb-4'><span className='font-semibold primary'>Large Multinationals</span> such as Amazon, Unilever, and Procter & Gamle;</li>
                </ul>
                <p className='mb-4'>Organizations focused on <span className='font-semibold primary'>developing market interests such as Dalberg</span> </p>
                <p className='mb-4'>Many large employers find that Impact Fellowship from Global Governance Initiative prepares Young Professionals not only for General Management Positions but also for jobs within governmental affairs, environmental affairs, and other functional areas that necessitate an education that goes beyond traditional business skills. </p>
                <p>Impact Fellows at Global Governance Initiative are positioned to have a deep understanding of the complexity of national and local situations. </p>
            </Container>
            <Button url="https://docs.google.com/forms/d/e/1FAIpQLSc0EdeZhxI2OeI5mh8HSUl4ScxHJ56XmvW48bcVzEA2MzZwTw/viewform"> APPLY NOW</Button>


            <Heading>Who is this Fellowship for ?</Heading>
            <Container>
                <p> 1. You are a determined young professional looking to pivot in consulting and keen to learn by doing a consulting project directly with a <span className='primary font-semibold'>mentor from Mckinsey, BCG, Bain, Dalberg </span> </p><br />
                <p>2. You are a UPSC aspirant looking for a relevant <span className='primary font-semibold'> Plan B for Civil Services</span> and keen to contribute to the social impact sector </p><br />
                <p>3. You are looking for a <span className='primary font-semibold'>unique pre MBA/MPP work experience</span> in the social development consulting space by advising leading national NGO </p><br />
                <p className='mb-12'>4. You are ready to pivot careers and looking to be <span className='primary font-semibold'>connected to GGI employment partners </span></p>

            </Container>
            <YoutubeEmbed embedId='0XC2VXBF29g' autoplay={1} />
            <Button url="https://docs.google.com/forms/d/e/1FAIpQLSc0EdeZhxI2OeI5mh8HSUl4ScxHJ56XmvW48bcVzEA2MzZwTw/viewform"> APPLY NOW</Button>


            <Heading>Curriculum & Commitment</Heading>
            <p className='px-8 text-center font-medium mb-4' >If GGI MBA Scholars is Harvard Business School then GGI Impact fellowship is Harvard Business School along with Mckinsey&#39;s work experience </p>
            <Curriculum data={curriculum} />
            <YoutubeEmbed embedId='3xL9AbP92yo' />
            <Button url="https://docs.google.com/forms/d/e/1FAIpQLSc0EdeZhxI2OeI5mh8HSUl4ScxHJ56XmvW48bcVzEA2MzZwTw/viewform"> APPLY NOW</Button>


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
            <Button url="https://docs.google.com/forms/d/e/1FAIpQLSc0EdeZhxI2OeI5mh8HSUl4ScxHJ56XmvW48bcVzEA2MzZwTw/viewform"> APPLY NOW</Button>


            <Heading>A Liberal Refund Policy for You </Heading>
            <Container>
                <p className='text-lg'>Your learning is our no. 1 goal and we want this decision to be 100% risk-free for you so you can just focus on learning.  We have <span className="font-bold">no questions ask the full refund of the enrollment amount</span> of the selected scholars and fellows, till the first 6 days from the payment date. </p>
            </Container>

            <Heading>You Learn & Build Network with World&#39;s Top CEOs, Partners, Consulting & Policy Leaders</Heading>
            <Gallery />

            <Heading>With Impact Fellowship, The World is Your Classroom</Heading>

            <Container>
                <p>Today&apos;s Global Leaders must be able to successfully navigate different cultures, economies, and industries. To help impact fellows during executive education develop these crucial capabilities, GGI has carefully designed a portfolio of immersive, experiential courses that take place across sectors and industries. This is achieved in 3 stages : &nbsp;</p>
            </Container>
            <Steps data={stages} />
            <Button url="https://docs.google.com/forms/d/e/1FAIpQLSc0EdeZhxI2OeI5mh8HSUl4ScxHJ56XmvW48bcVzEA2MzZwTw/viewform"> APPLY NOW</Button>

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

            <Heading>Frequently Asked Questions</Heading>
            <Accordion />
            <Footer />
        </>
    )
}

export default Fellowship