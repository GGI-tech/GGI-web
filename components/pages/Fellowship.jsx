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
import { testimonialMainFellows } from '../../data/mainpgData';

// --------------------------------------------------------------------
import studs1 from '../../public/s1.png'
import studs2 from '../../public/s2.png'
// --------------------------------------------------------------------
import { fivecolumndata, stages, testimonialFellow, curriculum, socialspaceimpactdata } from '../../data/fellowshippgData'

const Fellowship = () => {

    return (
        <>
            <div className='mt-10'></div>
            <SlidingHero image={'./impactfellowship.jpg'} title={[`Get into Management & Development Consulting,<br class='hidden lg:block'/> Mentorship by BCG, Mckinsey Consultants <br class='hidden lg:block'/>& Join Global Network at<span class='text-yellow-300'> GGI Impact Fellowship</span><br class='hidden lg:block'/> To Become a Young Leader`]} />
            <Button page="fellowship" url="https://docs.google.com/forms/d/e/1FAIpQLSc0EdeZhxI2OeI5mh8HSUl4ScxHJ56XmvW48bcVzEA2MzZwTw/viewform"> ADVANCE YOUR CAREER NOW</Button>

            <Heading margin={60}>Why GGI Impact Fellowship <em>Actually</em> Works ?</Heading>
            <FiveColumnLayout data={fivecolumndata} />
            <Container>
                <p className='mb-5 mt-12 text-justify font-semibold'>True learning happens through dialogue, not lectures.<br></br> That’s why GGI builds a <em>non-scalable McKinsey-style ecosystem</em> — one mentor, one Fellow, one project — at 1/500th the cost of elite consulting experience.</p>
                <p className='mb-5 text-justify'><span className='font-semibold primary'>You’ve spent years chasing the UPSC dream — but deep down, you fear being 29, overqualified, and unemployed.
                Or you’ve read 100 Harvard cases but still don’t know how real consulting feels.
                GGI’s Impact Fellowship bridges that gap — turning paralysis into purpose.</span></p>
                <p className='mb-12 text-justify font-semibold'><span className='font-semibold primary'></span>Recognized by BCG Global Media as one of the most effective consulting feeder programs — GGI builds the muscle memory of consulting long before you enter the firm.</p>
            </Container>
            <YoutubeEmbed embedId='BfXtDA8J-JI' autoplay={1} />

            <Heading>Hear from GGIians who have successfully transitioned into Consulting, Policy, and Product Management roles - their experiences with us.</Heading >

            <Slider slides={testimonialMainFellows} /> 
            <br/>
            <br/>
            <br/>
            <YoutubeEmbed embedId='ZtECOAyyDVA' autoplay={1}/>
            <Heading>Life After GGI Impact Fellowship</Heading>

            <Container>
                <p className='mb-4'>There’s no ‘typical’ GGI path. Fellows lead consulting projects, launch ventures, and shape policy — across 25+ countries.
</p>
                <p className='mb-4'>The Impact Fellowship has positioned GGI Alumni for careers in various sectors, including:</p>
                <ul className='list-disc ml-4'>
                    <li className='mb-4'><span className='font-semibold primary'>Consulting Firms: </span>McKinsey, BCG, Bain, Dalberg, FSG</li>
                    <li className='mb-4'><span className='font-semibold primary'>Global Organizations: </span>UN, IFC, ADB, WHO.</li>
                    <li className='mb-4'><span className='font-semibold primary'>Corporate Leaders: </span>Amazon, Unilever, P&G.
</li>
                    <li className='mb-4'><span className='font-semibold primary'>Social Impact & Policy Roles: </span>Government, Think Tanks, NGOs.
</li>
                    
                </ul>
                <br/><br/>
                <p className='mb-5 text-center'><span className='font-semibold primary text-lg'>GGI Fellows don’t just change jobs — they change trajectories.</span></p>
            </Container>
            <Button page="fellowship" url="https://docs.google.com/forms/d/e/1FAIpQLSc0EdeZhxI2OeI5mh8HSUl4ScxHJ56XmvW48bcVzEA2MzZwTw/viewform"> STOP READING. START ACTING</Button>


            <Heading>Who is this Fellowship for ?</Heading>
            <Container>
            <ul className="list-disc list-inside space-y-4 mb-12">
                <li>
                For the <span className='font-semibold primary'>UPSC aspirant</span> seeking a Plan B that’s equally purposeful.
                </li>
                <li>
                For the <span className='font-semibold primary'>analyst or consultant</span> ready to level up through real work, not theory.
                </li>
                <li>
                For the <span className='font-semibold primary'>MBA/MPP hopeful</span> who wants pre-degree consulting experience that stands out.
                </li>
                <li>
                For the <span className='font-semibold primary'>career pivoter</span> looking to enter high-impact, high-prestige spaces with confidence.
                </li>
            </ul>
            </Container>
            <p className='mb-5 text-center'><span className='font-semibold primary text-lg'>If you’ve outgrown preparation and are ready for performance — this Fellowship is built for you.</span></p>
            <YoutubeEmbed embedId='lZMBRyoMNSQ' autoplay={1} />
            <Button page="fellowship" url="https://docs.google.com/forms/d/e/1FAIpQLSc0EdeZhxI2OeI5mh8HSUl4ScxHJ56XmvW48bcVzEA2MzZwTw/viewform"> APPLY NOW</Button>


            <Heading>Curriculum & Commitment</Heading>
            <Curriculum2 data={curriculum} /><br/><br/>
            <p className='mb-5 text-center'><span className='font-semibold primary text-lg'>If GGI MBA Scholars is Harvard Business School, then GGI Impact Fellowship is Harvard + McKinsey work experience — <br/>compressed into one transformative journey.</span></p><br/>
            <YoutubeEmbed embedId='zJzwHEBd7Zc' autoplay={1} />
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
            <YoutubeEmbed embedId='QZvdzbmmWpg' autoplay={1}/>
            <Button page="fellowship" url="https://docs.google.com/forms/d/e/1FAIpQLSc0EdeZhxI2OeI5mh8HSUl4ScxHJ56XmvW48bcVzEA2MzZwTw/viewform"> APPLY NOW</Button>

            <Heading>This is how You&apos;d Create Impact in Social Space with Your Consulting Skills</Heading>
            {/* <ThreeColumnLayout data={socialspaceimpactdata} /> */}<br/>
            <Container>
                <p className='text-lg'>From blind football to climate strategy — our Fellows work with organizations like IBFF, The Goodstep, and CSD to create measurable change.
                You’ll apply consulting frameworks to solve real-world impact challenges under mentor guidance.</p>
            </Container><br/><br/>
            <p className='mb-5 text-center'><span className='font-semibold primary text-lg'>Every GGI project drives impact that outlives the Fellowship.</span></p>
            <Heading>A Liberal Refund Policy for You </Heading>
    
            <Container>
                <p className='text-lg'>We want your learning to be 100% risk-free. If you’re not satisfied after your first live masterclass, we offer a no-questions-asked <span className="font-bold"> full refund within 3 days</span>.</p>
            </Container>

            <Heading>You Learn & Build Network with World&#39;s Top CEOs, Partners, Consulting & Policy Leaders</Heading>
            <p className='mb-12 text-center font-semibold'><span className='font-semibold primary'></span>Learn from Those Who’ve Built Nations, Companies, and Careers.</p>
            <Gallery />

            <Heading>With Impact Fellowship, The World is Your Classroom</Heading>

            <Container>
                <p>Today&apos;s global leaders must be able to successfully navigate different cultures, economies, and industries. To help impact fellows during executive education develop these crucial capabilities, GGI has carefully designed a portfolio of immersive, experiential courses that span various sectors and industries. This is achieved in three stages: &nbsp;</p>
            </Container>
            <Steps data={stages} />
            <Button page="fellowship" url="https://docs.google.com/forms/d/e/1FAIpQLSc0EdeZhxI2OeI5mh8HSUl4ScxHJ56XmvW48bcVzEA2MzZwTw/viewform"> APPLY NOW</Button>

            <Heading>Learn What Matters via GGI Case-based Masterclasses in Management & Impact Consulting </Heading>
             <p className='mb-12 text-center font-semibold'><span className='font-semibold primary'></span>GGI’s curriculum merges liberal arts depth with consulting precision.</p>
            <Masterclasses />
            <YoutubeEmbed embedId='Pt8cnPkD4k0' autoplay={1}/>

            <Heading>Program Fees </Heading>
            <Container> <p><span className='font-bold'>Top competitors charge ₹3–7 Lakhs.
                GGI is 80% more affordable — delivering a real consulting experience for under ₹1 Lakh.
                Full refund within 6 days of payment if you change your mind.
                Apply only if you’re ready to perform and commit- selection rate of less than 10%.</span> To get detailed pricing and information, it is accessible on our application page <u><a href='https://docs.google.com/forms/d/e/1FAIpQLSc0EdeZhxI2OeI5mh8HSUl4ScxHJ56XmvW48bcVzEA2MzZwTw/viewform' target="_blank" rel='noreferrer'>here</a></u></p>
            </Container>

            <Heading>Official Partners </Heading>
            <OfficialPartners />

            <div className='mt-48'>
                <YoutubeEmbed embedId='7CAlOgCt_Cc' autoplay={1}/>
            </div>
            <Heading margin={1}>Frequently Asked Questions</Heading>
            <Accordion />
            <Footer />
        </>
    )
}

export default Fellowship
