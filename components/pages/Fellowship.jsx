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

const Fellowship = () => {

    return (
        <>
            <div className='mt-10'></div>
            <SlidingHero image={'./impactfellowship.jpg'} title={[`Get into Management & Development Consulting,<br class='hidden lg:block'/> Mentorship by BCG, Mckinsey Consultants <br class='hidden lg:block'/>& Join Global Network at<span class='text-yellow-300'> GGI Impact Fellowship</span><br class='hidden lg:block'/> To Become a Young Leader`]} />
            <Button page="fellowship" url="https://docs.google.com/forms/d/e/1FAIpQLSc0EdeZhxI2OeI5mh8HSUl4ScxHJ56XmvW48bcVzEA2MzZwTw/viewform"> ADVANCE YOUR CAREER NOW</Button>

            <Heading margin={60}>Why GGI Impact Fellowship Works ?</Heading>
            <FourColumnLayout data={fourcolumndata} />
            <Container>
                <p className='mb-5 mt-12'><span className='font-semibold'>Best teaching can be done only when there is a direct relationship between a teacher and a good student</span>- a situation where the student discussed ideas, thinks about things, and talks about things.  But in modern times, it&#39;s hard to create scalable solutions since there are so many students. Hence, GGI Impact Fellowship has created a nonscalable Mckinsey work experience ecosystem outcome at 1/500th of the cost!</p>
                <p className='mb-5'><span className='font-semibold primary'>Young Professionals waste many years</span> either preparing for Civil Services to venture into the development sector or reading innumerable cases in the false hope of getting into management consulting. We at Global Governance Initiative solve this through our Impact Fellowship Program. </p>
                <p className='mb-12'><span className='font-semibold primary'>Recognition by BCG:</span> GGI Fellowship was also recognized by BCG Global Media for its consulting feeder program..</p>
            </Container>
            <YoutubeEmbed embedId='CL-UcquUN3k' autoplay={1} />

            <div className='mt-24 grid grid-cols-1 sm:grid-cols-2 sm:mx-12'>
            {data1.map((e, index) => {
    return (
        <Card key={index} url={e.url} org={e.org} title={e.title} img={e.img} text={e.text} />
    );
})}
            </div>

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
            <Button page="fellowship" url="https://docs.google.com/forms/d/e/1FAIpQLSc0EdeZhxI2OeI5mh8HSUl4ScxHJ56XmvW48bcVzEA2MzZwTw/viewform"> APPLY NOW</Button>


            <Heading>Who is this Fellowship for ?</Heading>
            <Container>
                <p> 1. You are a determined young professional looking to pivot in consulting and keen to learn by doing a consulting project directly with a <span className='primary font-semibold'>mentor from Mckinsey, BCG, Bain, Dalberg </span> </p><br />
                <p>2. You are a UPSC aspirant looking for a relevant <span className='primary font-semibold'> Plan B for Civil Services</span> and keen to contribute to the social impact sector </p><br />
                <p>3. You are looking for a <span className='primary font-semibold'>unique pre MBA/MPP work experience</span> in the social development consulting space by advising leading national NGO </p><br />
                <p className='mb-12'>4. You are ready to pivot careers and looking to be <span className='primary font-semibold'>connected to GGI employment partners </span></p>

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