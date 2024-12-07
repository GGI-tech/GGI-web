import Accordion from "../global/Accordian"
import Footer from "../global/Footer"
import SlidingHero from "../global/SlidingHero"
import Heading from "../global/Heading"
import Container from "../global/Container"
import YoutubeEmbed from "../global/YoutubeEmbed"
import Steps from "../global/Steps"
import Slider from '../global/Slider'
import { stages, testimonialYLP } from '../../data/ylpData';
import Link from "next/link"
import Carousal from "../global/Carousal"
import Curriculum4 from '../global/Curriculum4';
import { curriculum, } from '../../data/ylpData';

import Image from "next/image"
const YLP = () => {
    return (
        <div>
            <SlidingHero image={'/ylp.jpg'} title={["180 DAYS VIRTUAL INTERNSHIP <br/>TO BUILD YOUR PROFILE BEFORE MBA"]} />
            <Link href="#more">
                <div id='' className='flex justify-center font-serif'>

                    <p className="mt-12  rounded-xl px-5 py-2.5 overflow-hidden group bg-blue-500 relative hover:bg-gradient-to-r hover:from-blue-500 hover:to-blue-400 text-white hover:ring-2 hover:ring-offset-2 hover:ring-blue-400 transition-all ease-out duration-300 whitespace-nowrap">

                        <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 ease"></span>
                        <span className="relative"> Read More About the Program</span>
                    </p>

                </div>
            </Link>



            <Heading margin={60}>WHY GGI IMPACT LAB, YOUNG LEADERS  </Heading>
            <Container>
                <p className="mb-7">It is often said that the forty-hour workweek is a relic of the industrial age. Knowledge workers function like athletes - train, and sprint, then rest and reassess. </p>
                <p className="mb-7">The Young Leaders program at GGI Impact Lab is designed for the &apos;knowledge athletes&apos; of the modern world who want to escape competition through &apos;authenticity&apos;, and <span className="font-bold">build careers in the world of Policy, Consulting, and Product Management. </span></p>
                <p className="mb-7">The essential transformational experience is designed for all those - who want to intertwine the theories and practice of learning at their own pace. Young Leaders learn intricate concepts and apply those concepts - as they make mistakes, learn, and grow in a virtual consulting and product management Internship.  </p>
                <p className="mb-7"> Our Young Leaders arrive at the Global Governance Initiative with professional experience and career aspirations as diverse as they are. While each Young Leader cultivates their own path to what comes next professionally, the impeccable Impact Lab ecosystem provides tools, resources, and support to empower these leaders to identify and reach their goals. </p>
            </Container>
            <YoutubeEmbed embedId="RwQe5LJZTys" autoplay={1} /><br/><br/>
            
            <Heading>HEAR WHAT YLPs HAVE TO SAY ABOUT US</Heading>

            <Carousal />


            <Heading>YOU LEARN ALONG WITH DIVERSE COMMUNITY WHO ADDS TO YOUR PERSPECTIVE</Heading>
            <Slider slides={testimonialYLP} />
            <Container>
                <p>GGI Impact Lab, Young Leaders community comprises an extremely diverse cohort - from current students at prestigious engineering universities to highly qualified professionals in the domain of Product Management and Finance. They are working professionals in organizations such as IIM-B, ICICI Bank, KPMG, Axis Bank, Microsoft, and other leading organisations.</p>
            </Container>
            <Heading>Executive Program in Management & Policy</Heading>
            
            <Curriculum4 data={curriculum}/>
            <div id="more"></div>
            {/* <div className="flex justify-center items-start gap-12 mt-8">
    <div className="text-center max-w-xs">
        <h3 className="font-bold text-red-500 text-xl">YLP Impact Projects</h3>
        <p>Peer to Peer projects</p>
    </div>
    <div className="text-center max-w-xs">
        <h3 className="font-bold text-red-500 text-xl">10+ Hours of Trinity</h3>
        <p>You get access to recorded Masterclasses of top speakers in consulting at GGI</p>
    </div>
</div> */}
            <Heading>WHAT IS GGI IMPACT LAB, YOUNG LEADERS,<br /> POLICY, CONSULTING & PM INTERNSHIP PROGRAM </Heading>
            <Container>
                <p className="mb-7">The Impact Lab YLP is a one-of-a-kind technology-driven essential program at GGI that has redefined the business school experience. Here, you&apos;ll be pushed and challenged by best-in-class faculty and supported by an AI tool in an environment unlike anywhere else at a fraction of a cost. </p>
                <p>The <span className="font-bold">entire 6 months experiential Pre MBA program</span> is designed in 4 stages. </p>
            </Container>
            <Steps data={stages} />

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


            <Heading>BENEFITS OF  GGI IMPACT LAB, YLP </Heading>
            <div className="lg:w-2/3 mx-auto text-white italic">
               
                <div className="px-2 ylp1 h-60 flex flex-col inset-0 justify-center items-center ">
                    <h1 className="text-xl font-semibold">Earn a Pre MBA Certificate</h1>
                    <p>When you complete consulting and PM virtual internship you’ll earn a digital certificate to share with prospective employers and your professional network</p>
                </div>
                
                <div className="px-2 ylp2 h-60 flex flex-col inset-0 justify-center items-center">
                    <h1 className="text-xl font-semibold">Connect with likeminded peers </h1>
                    <p>This Program puts community and budies at the centre. You’ll receive instructions from the GGI team on buddy pairing and will get to brainstorm solutions with them</p>

                </div>

                <div className="px-2 ylp3 h-60 flex flex-col inset-0 justify-center items-center">
                    <h1 className="text-xl font-semibold">Do it in your own time </h1>
                    <p>Fit the program in with your busy schedule. In case you miss the live deep dive weekly sessions, dearn at your own pace and reach your personal goals</p>

                </div>

                <div className="ylp4 px-2 flex flex-col h-60 inset-0 justify-center items-center">
                    <h1 className="text-xl font-semibold">Gain real work experience </h1>
                    <p>Throughout the program, you’ll develop deep insights into what it is actually like to work at GGI, Impact Lab</p>

                </div>

                <div className="px-2 ylp5 flex flex-col  h-60 inset-0 justify-center items-center">
                    <h1 className="text-xl font-semibold">Discover if this career is for you</h1>
                    <p>Nearly 50% of the hours you are awake are spent at work. Discover if this is the right career path for you</p>
                </div>
            </div >

            <div className='mt-48'>
                <YoutubeEmbed embedId='DXHPoAPXQQc' />
            </div>
            <Heading margin={1}>Frequently Asked Questions</Heading>
            <Accordion />
            <Footer />
        </div>
    )
}

export default YLP