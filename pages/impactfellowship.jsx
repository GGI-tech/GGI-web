import { React, useState } from 'react'
import Heading from '../components/global/Heading'
import Accordion from '../components/global/Accordian'
import Gallery from '../components/global/Gallery'
import OfficialPartners from '../components/global/OfficialPartners'
import Container from '../components/global/Container'
import Curriculum from '../components/global/Curriculum'
import FourColumnLayout from '../components/global/FourColumnLayout'
import {AiFillCheckCircle} from 'react-icons/ai'
// ------------------------------------------------------------------
import network from '../public/network2.jpeg'
import clinton from '../public/clinton.png'
import arunm from '../public/arun_maira.jpg'
import BCG from '../public/bcg.png';
import teach from '../public/teach.png';
import Partners from '../components/global/Partners';
import YoutubeEmbed from '../components/global/YoutubeEmbed'
import Masterclasses from '../components/global/Masterclasses'
import SlidingHero from '../components/global/SlidingHero'
const impactfellowship = () => {
  const fourcolumndata = [ //to be fetched from database
    {
      "img": BCG,
      "title": "Learn from Mckinsey, BCG Mentors",
      "body": "The mentor guides you personally on the fundamentals of consulting by training you through a case interviews and teaching you how to advance your career.  "
    },
    {
      "img": teach,
      "title": "Write  Consulting Style Paper",
      "body": "As GGI Impact Fellow you learn consulting practice by actually writing a consulting style research paper, thereby increasing your skill and enhancing your profile"
    },
    {
      "img": clinton,
      "title": "Advance Your Career with Top Employers",
      "body": "GGI has forged strong partnerships with leading management consulting and development consulting organizations."
    },
    {
      "img": network,
      "title": "Become Part of Purposeful Community",
      "body": "This global community represents powerful internationally diverse leaders who are at the helm of leading organizations. And this community helps each other out - not just in referring you to your first job, but in navigating a thriving career or in building your startups.  "
    }
  ]
  const [isOpened, setIsOpened] = useState(false);

  function toggle() {
    setIsOpened(wasOpened => !wasOpened);
  }
  return (
    <>
      <SlidingHero image={'./impactfellowship.jpg'} heading={"Get into Management & Development Consulting, Mentorship by BCG, Mckinsey Consultants & Join Global Network at GGI Impact Fellowship To Become a Young Leader  "}/>
      <Heading>Why GGI Impact Fellowship Works ?</Heading>
      <FourColumnLayout data={fourcolumndata} />
      <Container>
        <p className='mb-5'><span className='font-semibold'>Best teaching can be done only when there is a direct relationship between a teacher and a good student</span>- a situation where the student discussed ideas, thinks about things, and talks about things.  But in modern times, it's hard to create scalable solutions since there are so many students. Hence, GGI Impact Fellowship has created a nonscalable Mckinsey work experience ecosystem outcome at 1/500th of the cost!</p>
        <p className='mb-5'><span className='font-semibold primary'>Young Professionals waste many years</span> either preparing for Civil Services to venture into the development sector or reading innumerable cases in the false hope of getting into management consulting. We at Global Governance Initiative solve this through our Impact Fellowship Program. </p>
        <p><span className='font-semibold primary'>Recognition by BCG:</span> GGI Fellowship was also recognized by BCG Global Media for its consulting feeder program..</p>
      </Container>
      <YoutubeEmbed embedId='cds8xYiGVHg' autoplay={0}/>

      <Heading>Life After GGI Impact Fellowship</Heading>
      <Container>
        <p className='mb-4'>There is no "typical" GGI career path. You will be joined by the diverse GGI alumni spanning sectors, industries, and geographies, and interests range from political risk analysis, and banking to consulting, civil services applicants in the emerging markets to policy work in international organizations.</p>
        <p  className='mb-4'>Impact Fellowship has positioned GGI Alumni for careers in a variety of sectors. Examples include :</p>
        <p  className='mb-4'><span className='font-semibold primary'>Large Management Consulting Firms</span> such as The Boston Consulting Group, McKinsey, Bain & Company;</p>
        <p  className='mb-4'><span className='font-semibold primary'>International Organizations</span> such as United Nations, and the International Finance Corporation;</p>
        <p  className='mb-4'><span className='font-semibold primary'>Social Impact Consulting </span> Groups like Bridgespan, FSG. Dalberg</p>
        <p  className='mb-4'><span className='font-semibold primary'>Large Multinationals</span> such as Amazon, Unilever, and Procter & Gamle;</p>
        <p  className='mb-4'>Organizations focused on <span className='font-semibold primary'>developing market interests such as Dalberg</span> </p>
        <p  className='mb-4'>Many large employers find that Impact Fellowship from Global Governance Initiative prepares Young Professionals not only for General Management Positions but also for jobs within governmental affairs, environmental affairs, and other functional areas that necessitate an education that goes beyond traditional business skills. </p>
        <p>Impact Fellows at Global Governance Initiative are positioned to have a deep understanding of the complexity of national and local situations. </p>
      </Container>

      <Heading>Who is this Fellowship for ?</Heading>
      <Container>
        <p> 1. You are a determined young professional looking to pivot in consulting and keen to learn by doing a consulting project directly with a <span className='primary font-semibold'>mentor from Mckinsey, BCG, Bain, Dalberg </span> </p><br />
        <p>2. You are a UPSC aspirant looking for a relevant <span className='primary font-semibold'> Plan B for Civil Services</span> and keen to contribute to the social impact sector </p><br />
        <p>3. You are looking for a <span className='primary font-semibold'>unique pre MBA/MPP work experience</span> in the social development consulting space by advising leading national NGO </p><br />
        <p>4. You are ready to pivot careers and looking to be <span className='primary font-semibold'>connected to GGI employment partners </span></p>

      </Container>
      <YoutubeEmbed embedId='URhwxoFL6S8' />

      <Heading>Curriculum & Commitment</Heading>
      <p className='px-8 text-center font-medium mb-4' >If GGI MBA Scholars is Harvard Business School then GGI Impact fellowship is Harvard Business School along with Mckinsey's work experience </p>
      <Curriculum />
      <YoutubeEmbed embedId='3xL9AbP92yo' />

      <Heading>You Learn along with Diverse Community who Adds to Your Perspective </Heading>
      <YoutubeEmbed embedId='BCwbgh9-69k' />

      <Heading>A Liberal Refund Policy for You </Heading>
      <Container>
        <p>Your learning is our no. 1 goal and we want this decision to be 100% risk-free for you so you can just focus on learning.  We have <span className="font-medium">no questions ask the full refund of the enrollment amount</span>of the selected scholars and fellows, till the first 6 days from the payment date. </p>
      </Container>

      <Heading>You Learn & Build Network with World's Top CEOs, Partners, Consulting & Policy Leaders</Heading>
      <Gallery />

      <Heading>With Impact Fellowship, The World is Your Classroom</Heading>
      <Container>
        <p>Today's Global Leaders must be able to successfully navigate different cultures, economies, and industries. To help impact fellows during executive education develop these crucial capabilities, GGI has carefully designed a portfolio of immersive, experiential courses that take place across sectors and industries. This is achieved in 3 stages : </p>
        <h1 className='text-center pink text-xl font-semibold my-8'>Stage 1 - Upskilling   </h1>
        <p className='mb-2'>Context is a critical component of sound decision-making in the world of consulting and international development - and breadth of knowledge is what creates great analytical thinkers and leaders. GGI prepares Impact Fellows to be future leaders by honing skills that allow them to connect the dots across many different areas including policy consulting, management consulting & sustainability, product management & tech ethics, impact investing, liberal arts, and core Business perspectives - via GGI's trademarked Masterclasses.   </p>
        {!isOpened && (<div className='text-center' style={{ color: "blue" }} onClick={toggle}>Show more..</div>)}
        {isOpened && (<div>
          <p className='mb-3'>In this stage, Impact Fellows during their executive education also have access to the personalized Career Development Program of the Global Governance Initiative. This learning component is critical for those interested to work in organizations such as McKinsey, BCG, Bain, United Nations, World Bank, and inter-alia. Many of the Masterclasses are usually taken by incumbent partners and leadership of such organizations.  </p>
          <p className='mb-3'>The Career Development Program further consists of two pillars.  </p>
          <h1 className='text-center pink text-xl font-semibold my-8'>Stage 3 - Access to Employment Partnerships & Skin in the Game  </h1>
          <p className='mb-3'>In order to understand the world, you have to have skin in the game. The world of Consulting and International Development is unpredictable and adventurous. Impact Fellows are put in tough spots where they refine their craft by publishing consulting-style research papers under the Council on Sustainable Development.  </p>
          <p className='mb-3'>Theoretical learnings, intertwined with practical experiences are what make the Impact Fellowship unique. Passionate Fellows, and their mentors - delve into the hard of questions of international business, and public policy in this stage. </p>
          <p className='mb-3'>It is because of the experiential learning component, Impact Fellows are able to successfully outshine others in their Consulting Interviews.  </p>
          <h1 className='text-center pink text-xl font-semibold my-8'>Stage 3 - Community, Networking Nights, and Wellness Sessions  </h1>
          <p className='mb-3'>It is often said that if you have nothing in your life, but you have at least one person who cares for you unconditionally, it will do wonders for your self-esteem. For Impact Fellows that one person is the entire community at Global Governance Initiative.  </p>
          <p className='mb-3'>Impact Fellows get exclusive access to office hours with the leadership of the Global Governance Initiative. They attend monthly inner circle meetings, and networking events with fellows from across industries and sectors. And they also provided an ecosystem - where their mental health is given paramount importance. </p>
          <p className='mb-3'>Even though the journey of an Impact Fellow formally ends in 6 months. But Fellows - as GGI Alumni will always have access to the inclusive, supportive, respectful, and collaborative ecosystem of the Global Governance Initiative for the rest of their lives. Impact Fellows also enjoy access to the exclusive partnerships that GGI continuously builds with leading organizations, Business and Policy Schools.  </p>
          <p className='mb-3'>GGI Impact Fellowship is the Crème de la crème of the Global Governance Initiative network. Through core Masterclasses, flexible curriculum, and consulting style projects - Impact Fellowship provides a deep dive into the world of social impact consulting, development consulting, and international development.</p>
          <p className='mb-3'>GGI Impact Fellowship is personalized and tailored-made, and a detailed schedule is shared only after the Initial Founders Call.  </p>
          <p className='mb-3'>Impact Fellows are also made part of the GGI's Growing network through its various technology portals that comprise an international and diverse network of GGI Delegates, Impact Scholars, fellows, and mentors spread across 4 continents.  </p>
          <p className='mb-2'>Impact MBA Scholars are also made part of the GGI's Growing network through its various technology portals that comprise an international and diverse network at "wiggly" of GGI Delegates, Impact Scholars, Policy Scholars, Tech MBA Scholars, Fellows, and mentors spread across 4 continents. </p>
        </div>)}

      </Container>

      <Heading>Learn What Matters via GGI Case-based Masterclasses in Management & Impact Consulting </Heading>
      <Masterclasses />
      <YoutubeEmbed embedId='nQkS0i38ls8' />

      <Heading>Program Fees </Heading>
      <Container> <p >Our competitors charge Rs. 3,00,000 to Rs. 7,00,000. So we decided to try crazy pricing. <span className='font-bold'>We are 90% cheaper than our competitor's price.</span> We are doing this because we want to make high-quality business and policy education truly accessible to you all and disrupt the space.
        <br /><br />
        Or if you don't want to commit, we have no questions ask full refund policy within 6 days of enrollment payment, i.e. if you are selected ( we have &lt;10% selection rate). <span className='font-bold'>Either way, you win.</span> To get detailed pricing and information, it is accessible on our application page <u><a href='https://forms.gle/hv12YCeTFmDwFFJD8' target="_blank">here</a></u></p>
      </Container>

      <Heading>Official Partners </Heading>
      <OfficialPartners />

      <Heading>Frequently Asked Questions</Heading>
      <Accordion />
    </>
  )
}

export default impactfellowship