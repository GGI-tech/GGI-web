import Accordion from "../global/Accordian"
import Footer from "../global/Footer" 
import SlidingHero from "../global/SlidingHero"
import Heading from "../global/Heading"
import Container from "../global/Container"
import YoutubeEmbed from "../global/YoutubeEmbed"
import Steps from "../global/Steps"
import Slider from '../global/Slider'
import { stages, curriculum, } from '../../data/executiveData';
import Link from "next/link"
import Carousal from "../global/Carousal"
import Curriculum3 from '../global/Curriculum3';
import Image from "next/image"
import Gallery from '../global/Gallery';
import OfficialPartners from '../global/OfficialPartners';
import Button from '../global/Button';
import { testimonialMain3 } from '../../data/mainpgData';

const Executive = () => {
    return (
        <div>
            <SlidingHero 
  image={'/executivetopbanner.png'} 
  title={[
    "<span class='text-yellow-300' style='font-size: 40px;'>GGI Executive Program:</span><br/><span style='font-size: 40px;'>Be a Leader Who Matters</span>"
  ]} 
/>
<Button page="executive" url="https://forms.gle/hr8ZBPLBrareNndBA"> ADVANCE YOUR CAREER BY APPLYING NOW</Button>





            <Heading margin={60}>WHY GGI EXECUTIVE PROGRAM  </Heading>
            <Container>
                <p className="mb-7">We all know that the traditional forty-hour workweek, a relic of the industrial age, doesn’t fit the demands of today’s strategic roles. In the modern world, you need to operate like an elite athlete—strategically training, executing with precision, and then taking the time to rest, reassess, and innovate. </p>
                <p className="mb-7">That&apos;s where the Executive Management Program at GGI comes in. This program is crafted for professionals like you—our &apos;strategic athletes&apos; —who are ready to <span className="font-bold">redefine their careers in Management Strategy, Policy Development, and Organizational Leadership. </span></p>
                <p className="mb-7">We&apos;ve designed this advanced, transformational experience for those who are ready to seamlessly integrate cutting-edge theories with real-world application, all at your own pace. You’ll dive deep into complex concepts, then apply them through hands-on exercises in a high-stakes virtual consulting and strategy environment. Along the way, you’ll embrace the iterative process of learning, adapting, and excelling.  </p>
                <p className="mb-7"> When you join us at the Global Governance Initiative Executive, you bring your unique professional experience and ambitions. And while your path forward is uniquely yours, we’ll provide the unparalleled tools, resources, and networks to not just help you reach your goals, but to empower you to redefine them.</p>
            </Container>
            <YoutubeEmbed embedId="BndV70SfOZE" autoplay={1} />

            <Heading>Meet our latest additions to GGI Executives 2025</Heading >
            <Slider slides={testimonialMain3} />
            
            <Heading>Who is this Program for?</Heading>
            <Container>
            The Global Governance Executive Program is designed for professionals with a minimum of 10 years of experience, including:<br/><br/>
                <p> 1. <span className='primary font-bold'>Diplomats and Government Officials</span>: Professionals seeking to transition into consulting or the private sector, utilizing their knowledge of global governance and policy-making.</p><br />
                <p>2. <span className='primary font-bold'>Military Officers</span> : Leaders looking to pivot into consulting or defense industry roles by expanding their strategic insights into global security and governance.</p><br />
                <p>3. <span className='primary font-bold'>Politicians and Policy Makers</span>: Individuals aiming to leverage their governance and public policy expertise to transition into advisory or corporate roles in the private sector.</p><br />
                <p>4. <span className='primary font-bold'>Entrepreneurs and Business Leaders</span>: Those ready to scale their businesses internationally or move into consulting and leadership roles within global organizations.</p><br />
                <p>5. <span className='primary font-bold'>Movie Stars, Producers, and Sportspersons</span>: High-profile individuals who wish to quickly upskill and launch their own product lines, brands, or ventures in the business world.
                </p>
                <br/><br/>Participants must have at least 10 years of experience, ensuring they bring valuable insights and leadership potential to the program, while also gaining the skills to successfully pivot into consulting or the private sector.
            </Container>
            
            <Button page="executive" url="https://forms.gle/hr8ZBPLBrareNndBA"> ADVANCE YOUR CAREER BY APPLYING NOW</Button>

            <Heading>Executive Program in Management & Policy</Heading>
            <Curriculum3 data={curriculum}/>
            
            <Heading>A Liberal Refund Policy for You  </Heading>
            <Container>
                <p className='text-lg'>Your learning is our top priority, and we aim to make this decision entirely risk-free for you, allowing you to focus solely on learning. We offer a no-questions-asked full refund of the enrollment fee for selected scholars and fellows until the first 6 days from the payment date. </p>
            </Container>
            <Heading>You Learn & Build Network with World&#39;s Top CEOs, Partners, & Consulting Leaders</Heading>
            <Gallery />

            <div id="more"></div>
            <Heading>WHAT IS GGI EXECUTIVE PROGRAM FOR<br /> POLICY, CONSULTING & LEADERSHIP ROLES </Heading>
            <Container>
                <p className="mb-7">The GGI Executive Management Program is a transformative, technology-driven experience that redefines the traditional business school model. Here, you’ll be challenged by world-class instructors and supported by cutting-edge AI tools, all within a dynamic environment that delivers unparalleled value. </p>
                <p>This <span className="font-bold">3-month immersive program</span> is structured into five comprehensive stages, each designed to equip you with the skills, insights, and experiences necessary to excel in strategic management, policy development, and business leadership. </p>
            </Container>
            <Steps data={stages} />
            <Button page="executive" url="https://forms.gle/hr8ZBPLBrareNndBA"> ADVANCE YOUR CAREER BY APPLYING NOW</Button>
            
            {/* <Heading>At GGI, We Believe In-Person Community is the CornerStone when You are Learning Online</Heading>
            <div className="p-12 mx-auto lg:w-3/4 grid grid-cols-1 sm:grid-cols-3 gap-1">
              
                <div className="flex items-center  ">
                    <div className="h-[300px] sm:h-[500px] w-full relative">
                        <Image src="/new_com2.jpg" alt="" layout="fill" objectFit="cover" />                    </div>
                </div>
                <div className="flex items-center col-span-2 ">
                    <div className="h-[300px] sm:h-[500px] w-full relative">
                        <Image src="/new_com3.jpg" alt="" layout="fill" objectFit="cover" />                    </div>
                </div>
                
            </div> */}


            <Heading>We prepare and propel leaders to achieve the next elevation—for their organizations and for themselves.</Heading>
            <Container>
                <p>For over 6 years, leaders have turned to the Global Governance Initiative as a catalyst for evolution and self-discovery. Embark on an unparalleled journey where leadership development and personal growth converge in a one-of-a-kind experience. </p>
                <br />
                <p>Drawing inspiration from the passion and unique perspectives of distinguished faculty, vibrant participants, and invigorating environment, GGI Executive will propel you to elevate your journey, embrace the extraordinary, and leave an indelible mark on the global stage. </p>
                <br />
                <p>Our research-based curriculum continuously adapts to societal shifts and global events, preparing you to tackle any challenge your organization may encounter. Explore new horizons, and establish a global network that will shape your success for a lifetime. </p>
                <br />
                <p>GGI Executive is our only program that offers the benefit of GGI alumni status upon completion. </p>
                <br /><br />
            </Container>
            <div className="lg:w-2/3 mx-auto text-white italic">
               
                <div className="px-2 exe1 h-60 flex flex-col inset-0 justify-center items-center ">
                    <h1 className="text-xl font-semibold">Leadership in Extraordinary Times</h1>
                    <p>From moments of opportunity to times of adversity, the GGI Executive approach to executive education equips modern leaders to guide their organizations through any and every challenge.</p>
                </div>
                {/* <div className="px-2 exe2 h-60 flex flex-col inset-0 justify-center items-center ">
                    <h1 className="text-xl font-semibold">Earn an Executive Certificate</h1>
                    <p>When you complete consulting and policy sessions and curriculum you&apos;ll earn a digital certificate to share with prospective employers and your professional network</p>
                </div> */}
                
                <div className="px-2 exe3 h-60 flex flex-col inset-0 justify-center items-center">
                    <h1 className="text-xl font-semibold">The Whole You </h1>
                    <p>We put health, happiness, and purpose on the same level as leadership learning. Enjoy meditation, weekly deep dive sessions, access to GGI&apos;s facilities, and personal development sessions fostering impactful leadership and creativity.</p>

                </div>

                <div className="px-2 exe4 h-60 flex flex-col inset-0 justify-center items-center">
                    <h1 className="text-xl font-semibold">Living Knowledge</h1>
                    <p>Our curriculum is always evolving. Looking forward, shifting through collaboration and discussion to evolve organically. Every year, every day, and every session is one-of-a-kind.</p>

                </div>

                <div className="exe5 px-2 flex flex-col h-60 inset-0 justify-center items-center">
                    <h1 className="text-xl font-semibold">Discover if this career is for you</h1>
                    <p>Nearly 50% of the hours you are awake are spent at work. Discover if this is the right career path for you</p>

                </div>
            </div >
            <Button page="executive" url="https://forms.gle/hr8ZBPLBrareNndBA"> ADVANCE YOUR CAREER BY APPLYING NOW</Button>

            
            <Heading>Program Fees </Heading>
            <Container> <p >Our competitors charge Rs. 3,00,000 to Rs. 7,00,000. So we decided to try crazy pricing. <span className='font-bold'>We are 80% cheaper than our competitor&#39;s price.</span> We are doing this because we want to make high-quality business and policy education truly accessible to you all and disrupt the space.
                <br /><br />
                Or if you don&#39;t want to commit, we have no questions ask full refund policy within 6 days of enrollment payment, i.e. if you are selected ( we have &lt;10% selection rate). <span className='font-bold'>Either way, you win.</span> To get detailed pricing and information, it is accessible on our application page <u><a href='https://forms.gle/hr8ZBPLBrareNndBA' target="_blank" rel="noreferrer" >here</a></u></p>
            </Container>

            <Heading>Our Official Partners</Heading>
            <OfficialPartners />

            <Heading margin={1}>Frequently Asked Questions</Heading>
            <Accordion />
            <Footer />
        </div>
    )
}

export default Executive
