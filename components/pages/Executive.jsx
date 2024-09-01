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
import Curriculum from '../global/Curriculum';
import Image from "next/image"
import Gallery from '../global/Gallery';
import OfficialPartners from '../global/OfficialPartners';

const Executive = () => {
    return (
        <div>
            <SlidingHero 
  image={'/1691767917954.jpeg'} 
  title={[
    "<span class='text-yellow-300' style='font-size: 40px;'>GGI Executive Program:</span><br/><span style='font-size: 40px;'>Be a Leader Who Matters</span>"
  ]} 
/>
<Link href="https://forms.gle/hr8ZBPLBrareNndBA">
                <div id='' className='flex justify-center font-serif'>

                    <p className="mt-12  rounded-xl px-5 py-2.5 overflow-hidden group bg-blue-500 relative hover:bg-gradient-to-r hover:from-blue-500 hover:to-blue-400 text-white hover:ring-2 hover:ring-offset-2 hover:ring-blue-400 transition-all ease-out duration-300 whitespace-nowrap">

                        <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 ease"></span>
                        <span className="relative"> Advance Your Career by Applying Now</span>
                    </p>

                </div>
            </Link>



            <Heading margin={60}>WHY GGI EXECUTIVE PROGRAM  </Heading>
            <Container>
                <p className="mb-7">We all know that the traditional forty-hour workweek, a relic of the industrial age, doesn’t fit the demands of today’s strategic roles. In the modern world, you need to operate like an elite athlete—strategically training, executing with precision, and then taking the time to rest, reassess, and innovate. </p>
                <p className="mb-7">That&apos;s where the Executive Management Program at GGI comes in. This program is crafted for professionals like you—our &apos;strategic athletes&apos; —who are ready to <span className="font-bold">redefine their careers in Management Strategy, Policy Development, and Organizational Leadership. </span></p>
                <p className="mb-7">We&apos;ve designed this advanced, transformational experience for those who are ready to seamlessly integrate cutting-edge theories with real-world application, all at your own pace. You’ll dive deep into complex concepts, then apply them through hands-on exercises in a high-stakes virtual consulting and strategy environment. Along the way, you’ll embrace the iterative process of learning, adapting, and excelling.  </p>
                <p className="mb-7"> When you join us at the Global Governance Initiative Executive, you bring your unique professional experience and ambitions. And while your path forward is uniquely yours, we’ll provide the unparalleled tools, resources, and networks to not just help you reach your goals, but to empower you to redefine them.</p>
            </Container>
            <YoutubeEmbed embedId="BndV70SfOZE" autoplay={1} />
            
            <Heading>Who is this Program for?</Heading>
            <Container>
                <p> 1. If you&#39;re a <span className='primary font-bold'>Senior Professional</span> seeking  Alternatives to international MBA programs and want to learn directly from top industry leaders, you&#39;re in the right place.</p><br />
                <p>2.  If you&#39;re a CA or non-MBA looking to pivot into <span className='primary font-bold'>Management Consulting</span> roles <span className='primary font-bold'> or into Policy roles </span> at companies like Dell Foundation, United Nations and leading tech ventures, this is for you.</p><br />
                <p>3 . If you&#39;re an <span className='primary font-bold'>aspiring entrepreneur</span> aiming to launch and scale ventures and looking to enhance your business skills while building an incredible support network, you&#39;ve found the right opportunity.</p><br />
                <p className='mb-24'>4. If you&#39;re a <span className='primary font-bold'> seasoned and influential executives</span> who are motivated to make a difference and Senior-level leaders at growth companies who are challenged to scale.</p>

            </Container>
            <YoutubeEmbed embedId='NrAvqFqbZrU' />
            <Link href="https://forms.gle/hr8ZBPLBrareNndBA">
                <div id='' className='flex justify-center font-serif'>

                    <p className="mt-12  rounded-xl px-5 py-2.5 overflow-hidden group bg-blue-500 relative hover:bg-gradient-to-r hover:from-blue-500 hover:to-blue-400 text-white hover:ring-2 hover:ring-offset-2 hover:ring-blue-400 transition-all ease-out duration-300 whitespace-nowrap">

                        <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 ease"></span>
                        <span className="relative"> Advance Your Career by Applying Now</span>
                    </p>

                </div>
            </Link>
            <Heading>Executive Program in Management & Policy</Heading>
            <Curriculum data={curriculum}/>
            
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
            <Link href="https://forms.gle/hr8ZBPLBrareNndBA">
                <div id='' className='flex justify-center font-serif'>

                    <p className="mt-12  rounded-xl px-5 py-2.5 overflow-hidden group bg-blue-500 relative hover:bg-gradient-to-r hover:from-blue-500 hover:to-blue-400 text-white hover:ring-2 hover:ring-offset-2 hover:ring-blue-400 transition-all ease-out duration-300 whitespace-nowrap">

                        <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 ease"></span>
                        <span className="relative"> Advance Your Career by Applying Now</span>
                    </p>

                </div>
            </Link>
            <Heading>At GGI, We Believe In-Person Community is the CornerStone when You are Learning Online</Heading>
            <div className="p-12 mx-auto lg:w-3/4 grid grid-cols-1 sm:grid-cols-3 gap-1">
                <div className="flex items-center col-span-2">
                    <div className="h-[300px] sm:h-[500px] w-full relative">
                        <Image src="/new_com1.jpg" alt="" layout="fill" objectFit="cover" />
                    </div>
                </div>
                <div className="flex items-center  ">
                    <div className="h-[300px] sm:h-[500px] w-full relative">
                        <Image src="/new_com2.jpg" alt="" layout="fill" objectFit="cover" />                    </div>
                </div>
                <div className="flex items-center col-span-2 ">
                    <div className="h-[300px] sm:h-[500px] w-full relative">
                        <Image src="/new_com3.jpg" alt="" layout="fill" objectFit="cover" />                    </div>
                </div>
                <div className="flex items-center  ">
                    <div className="h-[300px] sm:h-[500px] w-full relative">
                        <Image src="/new_com4.jpg" alt="" layout="fill" objectFit="cover" />                    </div>
                </div>
            </div>


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
               
                {/* <div className="px-2 ylp1 h-60 flex flex-col inset-0 justify-center items-center ">
                    <h1 className="text-xl font-semibold">Leadership in Extraordinary Times</h1>
                    <p>From moments of opportunity to times of adversity, the GGI Executive approach to executive education equips modern leaders to guide their organizations through any and every challenge.</p>
                </div> */}
                <div className="px-2 ylp1 h-60 flex flex-col inset-0 justify-center items-center ">
                    <h1 className="text-xl font-semibold">Earn an Executive Certificate</h1>
                    <p>When you complete consulting and policy sessions and curriculum you&apos;ll earn a digital certificate to share with prospective employers and your professional network</p>
                </div>
                
                <div className="px-2 ylp2 h-60 flex flex-col inset-0 justify-center items-center">
                    <h1 className="text-xl font-semibold">The Whole You </h1>
                    <p>We put health, happiness, and purpose on the same level as leadership learning. Enjoy meditation, weekly deep dive sessions, access to GGI&apos;s facilities, and personal development sessions fostering impactful leadership and creativity.</p>

                </div>

                <div className="px-2 ylp3 h-60 flex flex-col inset-0 justify-center items-center">
                    <h1 className="text-xl font-semibold">Living Knowledge</h1>
                    <p>Our curriculum is always evolving. Looking forward, shifting through collaboration and discussion to evolve organically. Every year, every day, and every session is one-of-a-kind.</p>

                </div>

                <div className="ylp4 px-2 flex flex-col h-60 inset-0 justify-center items-center">
                    <h1 className="text-xl font-semibold">Discover if this career is for you</h1>
                    <p>Nearly 50% of the hours you are awake are spent at work. Discover if this is the right career path for you</p>

                </div>
            </div >
            <Link href="https://forms.gle/hr8ZBPLBrareNndBA">
                <div id='' className='flex justify-center font-serif'>

                    <p className="mt-12  rounded-xl px-5 py-2.5 overflow-hidden group bg-blue-500 relative hover:bg-gradient-to-r hover:from-blue-500 hover:to-blue-400 text-white hover:ring-2 hover:ring-offset-2 hover:ring-blue-400 transition-all ease-out duration-300 whitespace-nowrap">

                        <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 ease"></span>
                        <span className="relative"> Advance Your Career by Applying Now</span>
                    </p>

                </div>
            </Link>
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