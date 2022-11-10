import React from 'react'
import Accordion from '../components/global/Accordian'
import Heading from '../components/global/Heading'
import Hero from '../components/global/Hero'
import Container from '../components/global/Container'

const data1 = [
  {
    "id": 1,
    "title": "Karan David, Bain & Company",
    "img": "./karan_david.jpg",
    "text": "Shortly after GGI, I joined as an Associate Consultant at Bain & Company.<br>This was post my graduation in Economics from St. Stephen's College, Delhi where I also led the Planning Forum as the President.<br>My role at Bain involved working on portfolio operations and private equity across varied sectors. It was due to the GGI prestigious masterclass, I could think through the lens of policy and core consulting, and eventually excelled in policy case competitions as well.<br>The mentors, Naman Shrivastava and Shatakshi Sharma, were extremely helpful throughout."
  },
  {
    "id": 2,
    "title": "ANAMITRA MUNSI, BOSTON CONSULTING GROUP",
    "img": "./ana.jpg",
    "text": "GGI gave me the impetus to move ahead with my MBA at ISB, the contacts and relations I made at GGI helped me keep up the hustle and eventually I got an offer from Boston Consulting Group (BCG).<br><br>I was preparing for UPSC for almost 3 years and was unsuccessful in rounds beyond the prelims. I then applied to GGI and interacted with Naman, and understood how with every target there is a certain deadline and as time passes you need to move on. GGI was the perfect platform to do that."
  },
  {
    "id": 3,
    "title": " Jayesh, Jawandhia, BCG",
    "img": "./Jayesh.jpg",
    "text": "Hey Shatakshi, I'll be joining BCG next month. <br><br> Thank you so much for all the help, couldn't have been possible without you and GGI. It was a great learning experience"
  },
  {
    "id": 4,
    "title": "Maanya Chary Kalra, World Bank Group",
    "img": "./maanya.jpg",
    "text": "I think ever since I first stumbled upon GGI, my perspective towards my career has changed immensely. My GGI Fellowship lasted 2 months from Oct to Dec'20, and it simply curated itself into a glass half full situation wherein I could scrape off the shadows of the pandemic tainted hiring freezes and just breathe and plan for the future.<br><br> GGI Masterclasses, founder office hours, peer sessions, and of course the research paper, all in unison collected my professional ambitions and shaped them in a way that I could somehow manage to achieve them. My weeks are covered with working on my bit towards social behavioral change by running my content portal @hasrat.work and working full time at IFC."
  },
  {
    "id": 5,
    "title": "Nishta Gupta, Boston Consulting Group",
    "img": "Schermata.jpg",
    "text": "Shortly after the GGI Policy Consulting Masterclass, I bagged an offer to join BCG. It was only during the Policy Consulting masterclass that I was introduced to solving cases and the world of consulting.<br><br> I can never forget that moment when it all seemed worth it, the effort that went in while preparing. "
  },
  {
    "id":6,
    "title":"Laboni Singh, Bridgespan",
    "img":"./laboni.jpg",
    "text":"Shortly after GGI, I was offered a role by Bridgespan. I will soon be joining the nonprofit consulting organization this year. I attended three masterclasses over a span of 4-5 months. First on Policy Consulting, second on Impact Startup and the third on Management Communications.<br><br> I had been wanting to explore the policy and development space for a while and I think the masterclasses helped me find the entry points. I have been in touch with GGI through the Inner circle and follow the good work happening regularly. It's relevant and important."
  },
  {
    "id":7,
    "title":"MUSKAAN MALHOTRA,  Council on Energy, Environment, and Water (CEEW)",
    "img":"./Muskaant.jpg",
    "text":"Shortly after GGI, I joined Council on Energy, Environment, and Water (CEEW). During my interview, my research as a GGI fellow on water woes in Uttar Pradesh and Punjab came in handy for engaging discussions. GGI fellowship started during my college at SRCC. At GGI, I had a lot of opportunities coming in because I got exposed to a lot of sectors. Topics at GGI such as policy and of course consulting were extremely valuable. <br><br>I knew about CEEW because of my interest in climate change and energy security. In fact, I was also excited since the net zero target of India for 2017 was a calculation of CEEW. From what I know, CEEW mostly doesnt hire undergrads , and that is where the employment collaboration of CEEW with GGI as part of GGI's definitely helped me get noticed.<br><br> I am really happy about my work at CEEW because I am getting to work where my interest lies. I’m really thankful to GGI for getting me this opportunity and creating this opportunity for me. Question- One word that would describe my GGI experience?<br><br>I think my one word would be enlightening!<br><br>  Starting with the masterclass and then the fellowship, I had a very different experience than a lot of other people. I really learned how to think analytically and apply tools from the masterclasses."

  },
  {
    "id":8,
    "title":"DARSHITA DEVNANI, SATTVA CONSULTING",
    "img":"",
    "text":"Shortly after GGI, I joined Sattva Consulting. I'm a commerce graduate from Gargi college. I was working at EY as an Assurance Associate in their Private Equity team. I came across GGI six months ago, and soon I enrolled for the Impact MBA Scholars program. And here is my GGI journey: 1. I got to learn about Management and Policy consulting at length; and it resonated with my mid-term and long-term goal of exploring and working in these sectors. 2. I became part of a very diverse community who helped me in each step of the way; frame and shape my mid-term and long-term career. 3. Lastly, I wanted to make a switch from Audit to a Consulting sector. In a span of one month, I came across diverse individuals from B-schools working at Consulting firms and got to connect Naman and Shatakshi (the founders) regarding this. They helped me end to end as a fellow later. I finally got an offer letter from an impact consulting firm, and I am excited to start my journey there!" 
   }

]
const Card = ({ title, img, text }) => {
  return (

    <div className="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
      <div className="p-5">
        <a href="#">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{title}</h5>
        </a>
        <a href="#">
          <img className="" src={img} alt="" />
        </a>
        <p className="my-5 font-normal text-gray-700 dark:text-gray-400" dangerouslySetInnerHTML={{ __html: text }}></p>
        <a href="#" className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
          Read more
          <svg aria-hidden="true" className="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
        </a>
      </div>
    </div>


  )
}
const reviews = () => {
  return (
    <>
      <Hero />
      <div className='md:mx-12 mb-96 place-items-center h-screen grid grid-cols-1 sm:grid-cols-3 '>
        <div className='r1'>
          {data1.map((e) => {
            return (
              <Card title={e.title} img={e.img} text={e.text} />

            );
          })}
        </div>
        <div className='r1'>
          <Card />
        </div>
        <div className='r1'>
          <Card />
        </div>
      </div>
      {/* <Heading>Frequently Asked Questions</Heading>
      <Accordion /> */}
    </>
  )
}

export default reviews

