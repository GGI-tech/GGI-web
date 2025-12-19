import { React, useState } from 'react'
import Image from 'next/image';

import Heading from '../global/Heading'
import Button from '../global/Button';
import SlidingHero from '../global/SlidingHero'
import YoutubeEmbed from '../global/YoutubeEmbed';
import Container from '../global/Container';
import Partners from '../global/Partners';
import Accordion from '../global/Accordian';
import Gallery from '../global/Gallery';
import Community from '../global/Community';
import Curriculum5 from '../global/Curriculum5';
import Masterclasses from '../global/Masterclasses';
import FourColumnLayout from '../global/FourColumnLayout';
import OfficialPartners from '../global/OfficialPartners';
import certificate from '../../public/certi-impact.jpg';
import Associations from '../global/Associations';
import Steps from '../global/Steps'
import Footer from '../global/Footer';
import Slider from '../global/Slider'
import { companies,fourcolumndata,fourcolumndata2,stages, testimonialMBA, curriculum } from '../../data/prembapgdata';

const PREMBADATA = () => {

    const [isOpened, setIsOpened] = useState(false);

    function toggle() {
        setIsOpened(wasOpened => !wasOpened);
    }
    return (
        <div>
            <SlidingHero
            image={'./athens.jpg'}
            title={[
                `
                <div>
                    GGI Campus Fellowship:
                    <br class='hidden md:block'/>
                    <span class='text-yellow-200'>
                    Build the Career You Deserve Before You Graduate
                    </span>
                    <br class='hidden md:block'/>
                    <span class='block text-base md:text-2xl text-white mt-2 font-bold'>
                    Learn from real industry mentors. Build skills that matter. Land roles in Consulting, Policy, Strategy, and Impact - before you even graduate.
                    </span>
                </div>
                `,
            ]}
            />




            <Button page="mba" url="https://forms.gle/fND8ymKfdNmz4Ewz7"> ADVANCE YOUR CAREER BY APPLYING NOW</Button>


            <Heading margin={60}>Why GGI Campus Fellowship <em>Actually</em> Works ? </Heading>
            <FourColumnLayout data={fourcolumndata} />

            <p className='px-8 my-8 text-center font-bold'>The GGI Campus Fellowship program has created an Ivy League Management outcome at 1/1000th of the cost. </p>
            <Container ><span className='primary font-medium'>A college degree alone no longer guarantees a great career, But the right mentorship and community can.</span> The GGI Campus Fellowship helps students from India’s top campuses - IITs, DU, NMIMS, Ashoka, Symbiosis, and more - learn practical business, consulting, and policy skills directly from global leaders.
            It’s where ambition meets clarity - and where students turn internships into full-time offers.<br/><br/> </Container>
            <div className='my-8'></div>
            <YoutubeEmbed embedId='BfXtDA8J-JI' autoplay={1}/>

            <Heading>You Learn along with Diverse Community who Adds to your Perspective</Heading>
            <Slider slides={testimonialMBA} />
            <YoutubeEmbed embedId='ZtECOAyyDVA' autoplay={1}/>
            <Button page="mba" url="https://forms.gle/fND8ymKfdNmz4Ewz7"> APPLY NOW</Button>


            <Heading>+88% GGIians working in Top Consulting, Strategy, Product Roles and Organizations</Heading>
            <Partners companies={companies} />
            <Button page="mba" url="https://forms.gle/fND8ymKfdNmz4Ewz7"> APPLY NOW</Button>


            <Heading>Who is this Fellowship for?</Heading>
            <p className='text-center text-xl'> <span className="primary font-extrabold">For those who thrive under pressure</span></p>
            <br/>
            <Container>
                <p> 1. <span className='primary font-bold'>Final and Pre-Final Year Students </span>aiming to land roles in Consulting, Strategy, Policy, or Finance.</p><br />
                <p>2. <span className='primary font-bold'>Tier 1–2 College Students</span> from IITs, IIMs, SRCC, Ashoka, Christ, and similar campuses who want to stand out in placements. </p><br />
                <p>3.<span className='primary font-bold'> Students exploring Plan B for UPSC or Public Policy</span> who wish to enter development consulting or governance roles.
</p><br />
                <p className='mb-24'>4. <span className='primary font-bold'>Young Professionals and Interns </span> who want to convert internships into full-time roles with confidence and clarity. </p>

            </Container>
            <YoutubeEmbed embedId='lZMBRyoMNSQ' autoplay={1}/>
            <Button page="mba" url="https://forms.gle/fND8ymKfdNmz4Ewz7"> APPLY NOW</Button>

            <Heading> Program Design </Heading>
            <Curriculum5 data={curriculum}/>
            <YoutubeEmbed embedId='zJzwHEBd7Zc' autoplay={1}/>
            <Heading> <strong>The  Unique Learning Edge</strong></Heading>
            <p className='text-center text-xl'> <span className="primary font-extrabold">What Makes the GGI Campus Fellowship Different?</span></p>
            <br/>
            <Container>
                <p> 1. <span className='primary font-bold'>Real Problems, Not Textbook Theories: </span>Solve live industry cases and public policy challenges with guidance from mentors who’ve been there</p><br />
                <p>2. <span className='primary font-bold'>Portfolio That Gets You Noticed: </span> Build a tangible body of work recruiters can see - case projects, thought pieces, and peer collaborations.</p><br />
                <p>3.<span className='primary font-bold'> Mock-to-Real Career Transition: </span>From resume sprints to live case rounds - every session is designed to simulate your actual campus placement experience.
</p><br />
                <p className='mb-24'>4. <span className='primary font-bold'>Community That Has Your Back: </span>Get paired with buddies who are one step ahead - because growth happens when you feel supported. </p>

            </Container>



            <Heading>You Learn Directly From People Who’ve Built Real Careers</Heading>
            <p className='text-center text-xl'> <span className="primary font-extrabold">Learn from McKinsey Partners, IAS Officers, Startup Founders, and Impact Investors <br/> who’ve led through uncertainty - and are now guiding India’s next generation of leaders.</span></p>
            <br/>
            <Gallery />

            <YoutubeEmbed embedId='QZvdzbmmWpg' autoplay={1}/>
            <Heading>The GGI Campus Fellowship Journey</Heading>
            <Steps data={stages} />
            <Button page="mba" url="https://forms.gle/fND8ymKfdNmz4Ewz7"> APPLY NOW</Button>

            <Heading>A Liberal Refund Policy for You  </Heading>
            <p className='text-center text-xl'> <span className="primary font-extrabold"> Your Learning, Risk-Free</span></p><br/>
            <Container> <p className='text-lg'>Your learning is our no. 1 goal and we want this decision to be 100% risk-free for you so you can just focus on learning.  We offer a no-questions-asked <span className="font-bold">full refund policy within 6 days of enrollment payment</span>. </p>
            </Container>
            <br/><br/>

            <Button page="mba" url="https://forms.gle/fND8ymKfdNmz4Ewz7">JOIN GGI CAMPUS FELLOWSHIP</Button><br/>

            <Heading>Learn What Matters via GGI Case-based Masterclasses in Consulting, Strategy & Product</Heading>
            <Masterclasses />
            <YoutubeEmbed embedId='Pt8cnPkD4k0' autoplay={1}/>

            <Heading>At GGI, We Believe In- Person Community is the CornerStone when You are Learning Online </Heading>
            <Community />

            {/* <Heading>Program Fees </Heading>
            <p className='text-center text-xl'> <span className="primary font-extrabold">Crisis-Proof Investment</span></p> <br/>
            <Container>
                <p> 1. Premium Pricing <span className='primary font-bold'>Selective cohort of 50/term </span></p><br />
                <p>2. <span className='primary font-bold'>ROI Tracker</span>: Post-MBA salary increase metrics </p><br />
                <p>3.Flexible Payments: <span className='primary font-bold'>Deferred options for founders</span>.</p><br />

            </Container> */}



            <Heading>GGI Graduation Certificate</Heading>
            <Container>
                <div className='grid grid-cols-1 md:grid-cols-3 gap-5'>
                    <div>
                        <Image src={certificate} alt="" />
                    </div>
                    <div className='col-span-2'>
                        <p className='mb-2'>Let us be honest. We are not in the certificate minting business. However, on successful completion of the program, you receive a unique GGI Post Graduate Programme (PGP) Scholars graduation letter- </p>
                        <ul className='list-disc ml-4'>
                            <li> Showcasing your hard, fun, and enriching journey from a prestigious Global Governance Initiative Scholars journey</li>
                            <li>Get a chance to network with GGI  industry experts, and peers during the program</li>
                            <li>Gain demonstrable hands-on skills in business, communications, finance, and strategy</li>
                        </ul>
                    </div>
                </div>
            </Container>
            <Heading>GGI Official Partners Ready to Collaborate with you </Heading>
            <OfficialPartners />
            <Heading>GGI Associations</Heading>
            <Associations />
            <div className='mt-48'>
                <YoutubeEmbed embedId='7CAlOgCt_Cc' autoplay={1}/>
            </div>
            <Heading margin={2}>Frequently Asked Questions</Heading>
            <Accordion />
            {/* <Socials /> */}
            <Footer />
        </div>
    )
}

export default PREMBADATA