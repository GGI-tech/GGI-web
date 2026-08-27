import Accordion from '../global/Accordian'
import Heading from '../global/Heading'
import Hero from '../global/Hero'
import Image from 'next/image'
import YouTubeEmbed from '../global/YoutubeEmbed'
import Footer from '../global/Footer'
import SlidingHero from '../global/SlidingHero'
// import { FaLinkedin } from 'react-icons/fa'
// import Container from '../global/Container'
const data1 = [
    {
        "id": 345,
        "title": "Darshita Devnani",
        "url": "https://www.linkedin.com/in/darshitadevnani/",
        org : '<span class="text-red-700"><i>From </i><br><u>GGI Fellowship 2021, Delhi University</u> <br><i>To</i> <br><span class="font-bold">Asian Development Bank (ADB), INSEAD MBA</span>',
        "img": "/darshita2.jpg",
        "text": "After GGI, I got an opportunity to work with Asian Development Bank (ADB) , focusing on economic research and development impact. <br/><br/>Hi, I am Darshita, a GGI Fellow from the 2021 cohort. <br/><br/>GGI came into my life when I was working with EY but realized that audit was not my forte or long-term career. <br/><br/>This became my biggest motivation to join the GGI Impact Fellowship. There, my journey started. I was able to learn so much about #impactconsulting and management consulting, and I met so many people who helped me build my career in this space.<br/><br/>I truly learned the art of networking and connected with individuals who had been there and done that. I attended all the masterclasses diligently, interacted with speakers, and engaged with those who taught live cases. It&apos;s been almost four years since I&apos;ve been associated with GGI, and the experience has been transformative."
    },
    {
        "id": 100,
        "title": "Tushar Gopalka",
        "url": "https://www.linkedin.com/in/tushar-gopalka-06591757/",
        org: '<span class="text-red-700"><i>From </i><br><u>GGI Fellow 2024, UCLA PhD.</u> <br><i>To</i> <br><span class="font-bold">Boston Consulting Group (BCG)</span>',
        "img": "/tushar_gopal.jpg",
        "text": "Shortly after GGI, I got an offer from Boston Consulting Group (BCG) <br/><br/> Hi, I am Tushar Gopalka, a GGI Fellow from the 2024 cohort. <br/> <br/>GGI came into my life when I was looking to refine my #problemsolving skills and prepare for high-stakes interviews. <br/> <br/>Honestly, joining GGI was a pivotal decision for me. It offered access to an incredible network of peers and mentors who pushed me to be my best. <br/><br/>One memorable moment was an office hour with Shatakshi just 12 hours before my BCG first-round interview. Her honest and constructive feedback helped me completely restructure my fit interview, and it made all the difference I got selected! <br/><br/>Beyond the network, the programs like Startup Weekend were transformative. They gave me the confidence to consider launching my own venture, something I never imagined I could do a year ago. <br/><br/> GGI also taught me the importance of structured communication and preparation. For instance, practicing on tools like Schrodinger well in advance gave me a clear edge during BCG’s first-round case board interview."
    },
    {
        "id": 1,
        "title": "Karan David",
        "url": "https://www.linkedin.com/in/karandavid/",
        org: '<span class="text-red-700"><i>From </i><br><u>GGI Scholar 2019, St. Stephen&#39;s College Delhi University</u><br><i>To</i> <br><span class="font-bold">Bain & Company, Yale University</span>',
        "img": "/karan.jpg",
        "text": "Shortly after GGI, I joined as an Associate Consultant at Bain & Company.<br><br>This was post my graduation in Economics from St. Stephen's College, Delhi where I also led the Planning Forum as the President.<br><br>My role at Bain involved working on portfolio operations and private equity across varied sectors. It was due to the GGI prestigious masterclass, I could think through the lens of policy and core consulting, and eventually excelled in policy case competitions as well.<br><br>The mentors, Naman Shrivastava and Shatakshi Sharma, were extremely helpful throughout."
    },
    {
        "id": 399,
        "title": `Palak Raheja`,
        "url": "https://www.linkedin.com/in/palakraheja/",
        org: '<span class="text-red-700"><i>From </i><br><u>GGI Fellow 2021, LSR Delhi University</u><br><i>To</i> <br><span class="font-bold">Harvard MBA, Bain & Company</span>',
        "img": "/palakr.png",
        "text": " I joined GGI after gaining about 1.5 years of experience and close to when I was transitioning between jobs. Today, I have upwards of 4 years of work experience. I have ventured in the fields of management consulting and start-up ecosystems. &nbsp;</p><p><br>Here you get to learn a lot of things that you may not be learning at your job or during your academic journey. For example, during our operations masterclass, we used a simulation exercise-specific tool kit to learn efficiencies, which was very new to me. </p><p><br>For someone who had not done an MBA, it was a great, stimulating learning experience. "
    },
    {
        "id": 3450,
        "title": "Manasi Gupta",
        "url": "https://www.linkedin.com/in/manasichangemaker/",
        org : '<span class="text-red-700"><i>From </i><br><u>GGI Fellowship 2022, VIT Vellore</u> <br><i>To</i> <br><span class="font-bold">Oxford MBA, Shell, Founder- Huesofthemind Foundation</span>',
        "img": "/manasi.jpg",
        "text": "Hi, I'm Manasi Gupta. I grew up in northern India and completed my Bachelor's in Electronics Engineering from VIT Vellore <br/><br/>I discovered GGI because I wanted to better understand the intersection of technology, policy, finance, and impact. GGI stood out because it brought together professionals from diverse backgrounds while exposing fellows to fields like public policy, technology for impact, and impact investing. <br/><br/> The biggest impact was the way it changed how I think and communicate. One of the first lessons that stayed with me was learning to answer in three clear points.That simple framework improved my communication significantly because when you're working with leaders, brevity and clarity matter. <br/><br/> The second was developing the habit of staying curious. GGI encouraged me to keep exploring opportunities, continuously learn, and also unlearn assumptions. That mindset has stayed with me well beyond the fellowship. <br/><br/>One of the strongest aspects of GGI is its community. Even years later, it's still active, and people continue helping each other in both small and meaningful ways. "
    },
    
    {
        "id": 3,
        "title": `Averi Chakraborty`,
        "url": "https://www.linkedin.com/in/averi-chakraborty/",
        org: '<span class="text-red-700"><i>From </i><br><u>GGI Fellow, NMIMS</u><br><i>To</i> <br><span class="font-bold">Enagement Manager, Boston Consulting Group (BCG)</span>',
        "img": "/averi.jpg",
        "text": " Hi Shatakshi, hope you are doing fine :)&nbsp;</p><p><br>Have really been enjoying your posts on LinkedIn and Instagram, a big shoutout for that.</p><p><br>Also, wanted to inform you that I would be joining BCG the coming month and this probably would not have been possible without GGI by my side. Thanks for building this community :) "
    },
    {
        "id": 2,
        "title": "Saiyam Hota",
        "url": "https://www.linkedin.com/in/saiyam-hota-5a5a9680/",
        org: '<span class="text-red-700"><i>From </i><br><u>GGI Scholar 2021, Shaheed Bhagat Singh College</u><br><i>To</i> <br><span class="font-bold">Bain & Company</span>',
        "img": "/sayam.jpg",
        "text": "After GGI, I will join Bain & Company. I found out about the GGI and as someone who was interested in the consulting space I thought it would be a great opportunity to get knowledge about not just consulting but all the fields and also to network with people from diverse backgrounds.<br><br> Mainly, I think GGI is the strongest community one can get to be a part of. What I like the most is the diversity, and when all of us come together to solve problems you get a plethora of perspectives you could never imagine. Just interacting and solving problems with such people you gain lots of learnings from their perspective."
    },

    {
        "id": 35,
        "title": "Kalash Verma",
        "url": "https://in.linkedin.com/in/kalash-verma-6b8b79179",
        org: '<span class="text-red-700"><i>From </i><br><u>GGI Scholar, IIT Madras</u><br><i>To</i> <br><span class="font-bold">McKinsey & Company</span>',
        "img": "/kalash.jpeg",
        "text": `Shortly after GGI, I will be joining McKinsey & Company.<br><br>&ldquo;Hi, I am a final-year student at Indian Institute of Technology, Madras. <br><br>

        I found out about GGI when I was unclear about what I wanted to do in life albeit I had figured out where my general interests lay. <br>
        
        That&apos;s when I searched on the internet and found out about GGI.<br> 
        
        I signed up for GGI as I knew GGI would be a great platform to understand what I exactly wanted to do in the future as well as up-skill myself and meet great people. &ldquo;<br><br>
        Q- What would be one word that would describe your GGI experience?<br><br>
        #Transforming!<br><br>
        I joined GGI as an undergrad and GGI played a pivotal role in my life by giving me exposure to a lot of different industries and a diverse cohort.<br><br>
        Q- Your message for the cohort of 2023 ?<br> <br>If you have signed up then go all in!

    Don&apos;t then question the system. <br>

    The instructors will share a lot of lessons. <br>

    Because the program has been built with a lot of trust, rigor and processes by the founders and mentors.`
    },
    {
        "id": 4,
        "title": "Anamitra Munsi",
        "url": "https://www.linkedin.com/in/anamitra-munsi/",
        org: '<span class="text-red-700"><i>From </i><br><u>GGI Scholar 2021, UPSC Aspirant</u> <br><i>To</i> <br><span class="font-bold">Boston Consulting Group (BCG), ISB Hyderabad</span>',
        "img": "/anamitra.jpg",
        "text": "GGI gave me the impetus to move ahead with my MBA at ISB, the contacts and relations I made at GGI helped me keep up the hustle and eventually I got an offer from Boston Consulting Group (BCG).<br><br>I was preparing for UPSC for almost 3 years and was unsuccessful in rounds beyond the prelims. I then applied to GGI and interacted with Naman, and understood how with every target there is a certain deadline and as time passes you need to move on. GGI was the perfect platform to do that."
    },

    {
        "id": 3451,
        "title": "Amarpreet Kaur Chawla",
        "url": "https://www.linkedin.com/in/amapreetkaur/",
        org : '<span class="text-red-700"><i>From </i><br><u>GGI Fellowship 2026</u> <br><i>To</i> <br><span class="font-bold">Policy Manager, PwC</span>',
        "img": "/amarpreet.png",
        "text": "After years of working on policy monitoring, implementation, and advocacy, I realized I wanted to move beyond influencing policies after they were made. I wanted to be part of solving the problems that shape policymaking itself. <br/><br/>I had known about GGI since 2020 and had been following its masterclasses. About seven to eight months ago, I decided it was the right time to upskill and transition from advocacy into consulting or another strategic role where I could contribute to policymaking at the stage where solutions are designed. <br/><br/>One of Shatakshi Sharma's masterclasses introduced this idea. Whenever you walk into a boardroom, interview, or decision-making space, believe that you belong there. The moment you do, you stop trying to fit in and start contributing with confidence. <br/><br/> GGI taught me that consulting is less about finding the right answer and more about developing the right approach. Once your thinking is structured, the solution follows. I apply this every day in my work. <br/><br/>Today, I'm working as a Manager in the Policy and Brand team at PwC India. This role aligns with the transition I always wanted- from advocacy to strategic policymaking. "
    },
    

    {
        "id": 5,
        "title": `Simar Sethi `,
        "url": "https://www.linkedin.com/pulse/shortly-after-ggi-i-joined-kearney-management-/?trackingId=WkuKCMjCgdk4iHYe5TlBFA%3D%3D",
        org: '<span class="text-red-700"><i>From </i><br><u>GGI Scholar, IIT Delhi</u><br><i>To</i> <br><span class="font-bold">Kearney Consulting</span>',
        "img": "/simar.jpg",
        "text": "Shortly after GGI, I joined Kearney. <br><br>&ldquo; Hi, I am a final- year student at Indian Institute of Technology, Delhi.My major is mechanical engineering and my minor is business management.<br><br>A few years ago, I figured out I wanted to go into consulting. This field was of interest to me because I love learning about different things and meeting people from diverse backgrounds.<br><br>I was initially part of the GGI Management PGP Scholar program where I attended five valuable masterclasses and learned extremely new and practical concepts in each of them. Later on, I signed up for GGI fellowship also.<br><br> GGI masterclasses not only prepared me for #consulting but also built my interest towards it. They also taught me skills that could be used in all professions, not just consulting, which was unique as well.<br><br> For me, GGI was a complete package. <br><br> Looking back, I have extracted too many valuable insights from GGI :)&rdquo;"
    },
    {
        "id": 6,
        "title": "Shreya Sapru",
        "url": "https://www.linkedin.com/in/shraya-sapru/",
        org: '<span class="text-red-700"><i>From </i><br><u>GGI Scholar, NIT Raipur, UPSC Aspirant</u><br><i>To</i> <br><span class="font-bold">Venture Capitalist, Samagra</span>',
        "img": "/shreyas.jpg",
        "text": `I would definitely like to say that in my entire process of going through interview rounds and even otherwise, I had structured my answers and GGI definitely has had a big role to play.<br><br>During my written round interview with OSD to Jayant Sinha also, I was asked an assignment, one of which had to do with mitigation of climate change- a topic my team and I had worked on this particular topic on a&nbsp;<a href="https://www.linkedin.com/feed/hashtag/?keywords=ggiprojects&highlightedUpdateUrns=urn%3Ali%3Aactivity%3A6944128850427621376" rel="noreferrer noopener" target="_blank">#GGIprojects</a>- so that really helped me because I already had a perspective on what the issue was and I could structure my answer- given the limited time frame I had.<br><br>Shatakshi was also kind enough to respond to my emails throughout my rounds and guided me factors that would majorly play a role. <br><br>Question- One word that would describe my GGI experience?<br><br>Fascinating.<br><br>Yeah, I think it would be fascinating because of the Masterclasses. All the topics that we were going through were quite fascinating, be it&nbsp;<a href="https://www.linkedin.com/feed/hashtag/?keywords=policy&highlightedUpdateUrns=urn%3Ali%3Aactivity%3A6944128850427621376" rel="noreferrer noopener" target="_blank">#Policy</a> or&nbsp;<a href="https://www.linkedin.com/feed/hashtag/?keywords=impactinvesting&highlightedUpdateUrns=urn%3Ali%3Aactivity%3A6944128850427621376" rel="noreferrer noopener" target="_blank">#ImpactInvesting</a> or&nbsp;<a href="https://www.linkedin.com/feed/hashtag/?keywords=managementconsulting&highlightedUpdateUrns=urn%3Ali%3Aactivity%3A6944128850427621376" rel="noreferrer noopener" target="_blank">#ManagementConsulting</a>, but at the same time I was fascinated by the kind of community that was being built of care and of kindness and that&apos;s very rare.<br><br>I think that&apos;s something that&apos;s really a big differentiator.<br><br>My advice while welcoming new the class of 2022 at GGI would be to go ahead with a very open mind and to learn. It&apos;s okay to make mistakes during your class or even during the zoom or breakout rooms. Learn from your peers and yes, make friends, make a lot of them.<br><br>Develop your networks through GGI because a lot of opportunities come your way also.`
    },

   
    {
        "id": 6,
        "title": `Aditya Bansal`,
        "url": "https://www.linkedin.com/in/aditya510/",
        org: '<span class="text-red-700"><i>From </i><br><u>GGI Scholar, IIT Delhi</u><br><i>To</i> <br><span class="font-bold">Bain & Company</span>',
        "img": "/aditya.jpg",
        "text": "Hi Shatakshi, I got into&nbsp;Bain!&nbsp;I had it my top preference within consulting, Also got an offer to work as a trader in Amsterdam.&nbsp;</p><p><br></p><p>Thank you for guidance and support"
    },
    {
        "id": 29,
        "title": "Muskaan Malhotra",
        "url": "https://www.linkedin.com/in/muskaan-malhotra-6ba254170/",
        org: '<span class="text-red-700"><i>From </i><br><u>GGI Scholar, SRCC Delhi University</u><br><i>To</i> <br><span class="font-bold">HARVARD KENNEDY SCHOOL, CEEW</span>',
        "img": "/Muskaant.jpg",
        "text": "Shortly after GGI, I joined Council on Energy, Environment, and Water (CEEW). During my interview, my research as a GGI fellow on water woes in Uttar Pradesh and Punjab came in handy for engaging discussions. GGI fellowship started during my college at SRCC. At GGI, I had a lot of opportunities coming in because I got exposed to a lot of sectors. Topics at GGI such as policy and of course consulting were extremely valuable. <br><br>I knew about CEEW because of my interest in climate change and energy security. In fact, I was also excited since the net zero target of India for 2017 was a calculation of CEEW. From what I know, CEEW mostly doesnt hire undergrads , and that is where the employment collaboration of CEEW with GGI as part of GGI's definitely helped me get noticed.<br><br> I am really happy about my work at CEEW because I am getting to work where my interest lies. I’m really thankful to GGI for getting me this opportunity and creating this opportunity for me. Question- One word that would describe my GGI experience?<br><br>I think my one word would be enlightening!<br><br>  Starting with the masterclass and then the fellowship, I had a very different experience than a lot of other people. I really learned how to think analytically and apply tools from the masterclasses."

    },

    {
        "id": 791,
        "title": "Bharati Agarwal",
        "url": "https://www.youtube.com/watch/gDpy99R6kKE",
        org: '<span class="text-red-700"><i>From </i><br><u>GGI Fellow 2025, University of Warwick</u><br><i>To</i> <br><span class="font-bold">KPMG</span>',
        "img": "/bharati.jpg",
        "text": "Shortly after GGI, I pivoted from Policy think tank to Consulting. <br><br> I worked in ministries and think tanks - environments where the primary language, priorities, and even the way problems are framed are completely different from the corporate world. As I stood at the crossroads of public and private sector opportunities, I realized I needed to understand how the private sector thinks. <br><br> That is when I discovered GGI. <br><br> What stood out in the GGI Impact Fellowship was the clarity. How do top firms like KPMG evaluate candidates? How does the private sector define value? What does it mean to communicate effectively in a corporate setting? GGI answered all of that - and more. <br><br> Looking back, GGI helped me reframe everything I knew. It taught me that purpose and profit aren’t mutually exclusive - they just speak different languages."
    },
        {
        "id": 7,
        "title": "Jayesh Jawandhia",
        "url": "https://www.linkedin.com/in/jayesh-jawandhia/",
        org: '<span class="text-red-700"><i>From </i><br><u>GGI Fellow, IIT Delhi</u><br><i>To</i> <br><span class="font-bold">Boston Consulting Group (BCG)</span>',
        "img": "/Jayesh.jpg",
        "text": "Hey Shatakshi, I'll be joining BCG next month. <br><br> Thank you so much for all the help, couldn't have been possible without you and GGI. It was a great learning experience"
    },
    {
        "id": 899,
        "title": "Aryaka Shandilya",
        "url": "",
        org: '<span class="text-red-700"><i>From </i><br><u>GGI Fellow, NIT Raiur</u><br><i>To</i> <br><span class="font-bold">Kraft Heinz, ISB & Oxford MBA Admits</span>',
        "img": "/aryaka3.jpg",
        "text": "Hi, My name is Aryaka. I graduated in 2021 from the National Institute of Technology Raipur, with a degree in Electrical Engineering. After graduation, I joined RPG–CEAT Tyres<br/><br/>GGI really helped me to practice communication, not just go via videos or lessons, lectures. Even the smallest and slightest of thing, be it writing email to texting on WhatsApp, to speaking in the masterclasses. It helped me practice over time so much that I became fluent and confident to put my views on the table.<br/><br/>Number two, it helped me with how to structure things. Not only when you are solving a case study, business, but how you can apply it to your general life. It's a mind skill which you develop as and when you are practicing it.<br/><br/>The third and foremost is network. There are a few GGI friends whom I connect with right now. There is one called Victor Musila, whom I'm still connected with. He helped me throughout my now MBA journey.<br/><br/>The outcome of all of this was that I got selected after GGI. I made a pivot to Kraft Heinz as a product analyst with a 140% hike as well.<br/><br/>Today, I'm standing at the junction where I have cracked GMAT and I'm looking forward for joining Oxford or Indian School of Business.<br/><br/>Thank you so much for the community and especially to Shatakshi Sharma Akshi for helping me in multiple ways whenever I have needed. She has been there. Thank you so much.</p>"
    },
    {
        "id": 888,
        "title": "Bhumika Nebhnani",
        "url": "https://www.linkedin.com/in/bhumika-nebhnani-161419178/",
        org: '<span class="text-red-700"><i>From </i><br><u>GGI Fellow, Delhi University, UPSC Aspirant</u><br><i>To</i> <br><span class="font-bold">AI Governance (CSET & MDI), Georgetown MPP (AI Policy)</span>',
        "img": "/bhumika.jpg",
        "text": "I found out about GGI after my undergraduate studies, when I was trying to find more ways to apply my political science knowledge to something more emerging and more relevant in the world, instead of just going into academia.<br><br> My experience with GGI was great in the sense that it exposed me to the different kinds of opportunities that exist. One thing that was very memorable for me was the white paper I worked on. The topic that my teammates decided to choose was: AI and the accountability conundrum. <br><br> There are 2 key takeaways. First, on the procedural or work side: you really have to give your inputs and strategically try to see how they align with the career path you choose. Second, on the behavioral side: do not hesitate to ask questions."
    },
    {
        "id": 8,
        "title": "Ansh Aggarwal",
        "url": "https://www.linkedin.com/in/ansh-aggarwal-15448a1a9/",
        org: '<span class="text-red-700"><i>From </i><br><u>GGI Scholar 2019, SRCC Delhi University</u><br><i>To</i> <br><span class="font-bold">McKinsey & Company, Ernst & Young (EY)</span>',
        "img": "/ansh.jpg",
        "text": "Shortly after GGI, I got placed in&nbsp;McKinsey &amp; Company. In fact, I will be moving to Mumbai to work as a Business Analyst. Also after the masterclass, having won the EY Scholarship for entrepreneurship, I completed an internship at EY Global as well. [...] GGI&apos;s prestigious Policy Consulting Masterclass definitely helped me navigate through the recruitment process.</p>"
    },
    {
        "id": 9,
        "title": "Rajeshwari Kannan",
        "url": "https://in.linkedin.com/in/rajeshwari-kannan-73235710a?trk=public_post-text",
        org: '<span class="text-red-700"><i>From </i><br><u>GGI Scholar, Vellore Institute of Technology</u><br><i>To</i> <br><span class="font-bold">Boston Consulting Group (BCG)</span>',
        "img": "/Rajeshwari.jpg",
        "text": "Hi, I am Rajeshwari. I recently joined Boston Consulting Group (BCG) as a senior Associate.<br/><br/>I joined GGI as a part of my (PRE MBA) journey. I come from a Software background which is a world apart from Management consulting and Business.<br/><br/>GGI was the first time I was able to understand what businesses do and what the Industry overall looks like.<br/><br/> That was the first time I heard the word #StrategyConsulting and now it’s a full circle where I am a Management Consultant :)<br/><br/> I would have to credit #GGI for introducing me end to end to this world of Management Consulting”. <br/><br/> “For me GGI in one word would be ‘NETWORKING’.<br/><br/>I know it’s a very thrown-around word especially at B-schools and beyond but in a sense that a lot of people I met at GGI, or happened to add on Linkedin , are now working in the kind of organizations and sectors that I aim to work at or collaborate with. <br/><br/>So, For me who was interested in the social impact space, it was an exciting thing because, in an Engineering College, you don’t find a lot of people who are interested in such things." 
    },
    {
        "id": 10,
        "title": "Mehak Jain",
        "url": "https://in.linkedin.com/in/mehak-jain-?trk=public_post_comment-text",
        org: '<span class="text-red-700"><i>From </i><br><u>GGI Impact Fellow, LSR Delhi University</u><br><i>To</i> <br><span class="font-bold">Boston Consulting Group (BCG)</span>',
        "img": "/Mehak.jpg",
        "text": "Hi, I am Mehak Jain. I am from Delhi and I completed my undergraduation from Lady Shri Ram College for Women, University of Delhi.<br/><br/>My interest in policy and economics space led me to GGI. I joined GGI after 6 months in my journey with ZS Associates.<br/><br/>I realized GGI could help me make the transition between Consulting and Policy space, and help me decide where I want to go. <br/>I was confused between MBA and MPP. <br/><br/>Eventually, I leveraged GGI as a pre MBA ecosystem and interned at BCG.”  <br/>I found my support network at GGI!“<br/><br/>Q- So, how has GGI helped you in your journey?<br/><br/>“I attended the GGI Policy Masterclass in 2020.<br/><br/>In those 2 days, I was introduced to multiple things-<br/><br/>Starting from structured thinking, and first principles, to various terminologies.<br/><br/>This helped me throughout my role in ZS. Later I joined GGI's prestigious Inner Circle Fellow community.<br/><br/>Secondly, I really cherish the GGI Networking Nights.<br/><br/>Thirdly, GGI has a great support network. You do not have to think twice before reaching out. I also try to give back to the network whenever possible."
    },
    {
        "id": 11,
        "title": "Rankarajan Balasubramanian",
        "url": "https://in.linkedin.com/in/rankarajan-balasubramanian-57a825153?trk=public_post-text",
        org: '<span class="text-red-700"><i>From </i><br><u>GGI Impact Fellow, Engineering Graduate</u><br><i>To</i> <br><span class="font-bold">Investment Associate, Spark Asia</span>',
        "img": "/Rankarajan.jpg",
        "text": "Hi, I am Rankarajan.<br/><br/>I did my undergraduate education in civil engineering and postgraduation in structural engineering from BITS Pilani.<br/><br/>I wanted to pivot my career as my interest did not lie in civil engineering. <br/>GGI for me was all about- 9 different Experiences in the form of 9 different Masterclasses.“ <br/><br/>Q- So, One word that would describe your GGI experience?<br/><br/>“#Unconventional.<br/><br/>The kind of cases we discussed, I had never even thought of such situations.<br/> The cases were extremely unconventional from what we have read or studied.“ <br/><br/>My advice to cohort of 2023 will be that there is no fixed formula.<br/><br/>My advice to cohort of 2023 will be that there is no fixed formula.<br/><br/>You could input today and receive the outputs years later.<br/><br/>It's the #Inaction that is the biggest disadvantage.<br/><br/>If you are taking any action, whatever it may be, just go with it. If it doesn’t work out, you can come back and try something else."
    },
    {
        "id": 12,
        "title": "Tushar Bagrodia",
        "url": "https://www.linkedin.com/in/tusharbagrodia/",
        org: '<span class="text-red-700"><i>From </i><br><u>GGI Scholar, SRCC Delhi University</u><br><i>To</i> <br><span class="font-bold">Kearney Consulting</span>',
        "img": "/Tushar.jpg",
        "text": "Shortly after GGI, I was offered a role by&nbsp;Kearney India. The GGI Masterclass enabled me to develop a more holistic view of the manner in which public sector works in our country and the challenges that arise while working to create an impact with them.</p><p>&nbsp;</p><p>The first time I was introduced to case interviews was also during the GGI Masterclass on my campus. I was able to understand the problems better and develop structured solutions which made me stand out."
    },
    {
        "id": 30,
        "title": `Aayushman Singh`,
        "url": "https://in.linkedin.com/in/aayushmansingh",
        org: '<span class="text-red-700"><i>From </i><br><u>GGI Impact Fellow, University of Hong Kong</u><br><i>To</i> <br><span class="font-bold">INSEAD MBA</span>',
        "img": "/ayushsingh.PNG",
        "text": `Hi, I am Aayushman from Delhi.<br><br>

        And I’d be joining INSEAD this fall.<br><br>
        
        I had updated my application to INSEAD with my GGI Impact Fellowship offer, post which within few days I was also invited to join INSEAD.<br> 
        <br>
        &ldquo;Hi, I completed civil engineering from University of Hong Kong.
         <br><br>I had a brief stint in entrepreneurship, after which I started working in a Fortune 500 infrastructure consulting firm. I have over 6 years of experience in this space.
         <br><br>I wanted to pivot to management consulting post MBA. Last year and that is when I found out about GGI.&ldquo;
        <br><br>
        Q- What are the 3 things you learned at GGI?
        <br><br>
        
        &ldquo;I got a lot of confidence in my ability to crack management consulting through the masterclasses.
        <br><br>The guest speakers and the co founders shared great insights into the field.<br>Coming from an engineering background, it was all very new to me.
         <br><br>2nd, the #diverse cohort provided great learning opportunities.
         <br><br>There was a lot of peer learning taking place in break out rooms.
        <br><br>Finally, I was pleasantly surprised that I could connect with people and make meaningful #bounds despite the classes being online.
<br><br>Overall, my experience on a personal and professional level has been great.&ldquo;
<br><br>
        Q- So, what would be your advice for the cohort of 2024 ?
        <br><br>
        &ldquo;Keep a very #open mind.<br><br>
        I made this mistake where I went into the GGI ecosystem with a niche mindset of focusing on management consulting. Eventually, due to the masterclasses, I started finding #impactinvesting and #publicpolicy interesting as well.<br><br>

    Being open to all kinds of opportunities and learnings, will give you the chance to explore yourself as a person- introspect and find out what you really want to do. <br><br>

    Enjoy the process.<br><br>
    The program is built in a manner that will enable you to get the most out of it.<br><br>
       `},
    {
        "id": 13,
        "title": "Maanya Charu Kalra",
        "url": "https://www.linkedin.com/in/maanyacharukalra/",
        org: '<span class="text-red-700"><i>From </i><br><u>GGI Impact Fellow, COLUMBIA SIPA</u><br><i>To</i> <br><span class="font-bold">World Bank Group</span>',
        "img": "/maanya.jpg",
        "text": "I think ever since I first stumbled upon GGI, my perspective towards my career has changed immensely. My GGI Fellowship lasted 2 months from Oct to Dec'20, and it simply curated itself into a glass half full situation wherein I could scrape off the shadows of the pandemic tainted hiring freezes and just breathe and plan for the future.<br><br> GGI Masterclasses, founder office hours, peer sessions, and of course the research paper, all in unison collected my professional ambitions and shaped them in a way that I could somehow manage to achieve them. My weeks are covered with working on my bit towards social behavioral change by running my content portal @hasrat.work and working full time at IFC."
    },

    {
        "id": 14,
        "title": "Palak Arora",
        "url": "https://www.linkedin.com/in/palak-arora-77423b166/",
        org: '<span class="text-red-700"><i>From </i><br><u>GGI Scholar 2020, St. Stephen&#39;s College Delhi University, UPSC Aspirant</u><br><i>To</i> <br><span class="font-bold">Deloitte, Albright Stonebridge Group</span>',
        "img": "/palak.jpg",
        "text": "Soon after GGI, I actively pursued a career in Public Policy by associating with the&nbsp;Albright Stonebridge Group.&nbsp;Thereafter I began to work with&nbsp;Deloitte as an Analyst in their Government advisory division.<br><br>GGI has been tremendously helpful in providing the right direction to my career. The art of structuring one&apos;s thoughts and the sheer will to learn has enriched my experience of growth. My favorite aspect of GGI&apos;s program is Wiggly and Networking. It&apos;s amazing to see how a collaborative community like GGI&apos;s can foster growth amongst the members.<br><br>No matter what one&apos;s career goals are, being part of the GGI community is certainly an extremely valuable experience. Naman and Shatakshi are great mentors and have innumerable learnings to offer"
    },
    {
        "id": 15,
        "title": "Yashasvi Ghadale",
        "url": "https://in.linkedin.com/in/yashasvighadale/",
        org: '<span class="text-red-700"><i>From </i><br><u>GGI Impact Fellow, IIT Delhi</u><br><i>To</i> <br><span class="font-bold">Boston Consulting Group (BCG)</span>',
        "img": "/yashasvi.PNG",
        "text": `Hi, I am Yashasvi, and I will soon be joining Boston Consulting Group (BCG) full-time.<br><br>I came to know about GGI many years ago through Shatakshi Sharma's (cofounder) LinkedIn posts and wished to join the cohort ever since.<br><br>I joined right after my graduation because I wanted to learn about policy.<br><br>While I already had some exposure in management consulting, I also wanted to learn more about #Policy Consulting, Impact #Investment, and #Sustainable Finance.<br><br>I have found the masterclasses incredibly valuable so far in terms of the knowledge that is presented and the way it is presented.<br><br>Additionally, I really enjoyed the masterclasses that are uploaded on Trinity as that exponentially increases the value of the entire course. Being able to hear directly from Rajat Gupta and other industry leaders was really unexpected !`
    },
    {
        "id": 16,
        "title": "Mahek Jain",
        "url": "https://www.linkedin.com/in/mahek-jain/",
        org: '<span class="text-red-700"><i>From </i><br><u>GGI Impact Fellow, Delhi Technological University</u><br><i>To</i> <br><span class="font-bold">Bain &amp; Company</span>',
        "img": "/mahek.jpg",
        "text": `Shortly after GGI, I bagged a Management Consultant offer at&nbsp;<a href="https://www.linkedin.com/company/bain-and-company/" rel="noreferrer noopener" target="_blank">Bain &amp; Company</a>, and Product Management offer at&nbsp;<a href="https://www.linkedin.com/company/zomato/" rel="noreferrer noopener" target="_blank">Zomato</a>.&nbsp;<br><br>I am a final year Mechanical Engineering student at&nbsp;<a href="https://www.linkedin.com/company/delhi-technological-university-formerly-dce/" rel="noreferrer noopener" target="_blank">Delhi Technological University (Formerly DCE)</a>. I have always been interested in Management Consulting and Product Management. Interestingly, I was also an employee at Global Governance Initiative (GGI), which was a fantastic experience as I got to learn a lot during my 7-month stint at GGI.&nbsp;<br><br>I recently received a Management Consulting offer from Bain &amp; Company, and also a Product Management Internship offer from Zomato.&nbsp;`
    },
    {
        "id": 17,
        "title": "Nishtha Gupta",
        "url": "https://www.linkedin.com/in/nishthagupta001/",
        org: '<span class="text-red-700"><i>From </i><br><u>GGI Scholar 2019, IIT Delhi</u><br><i>To</i> <br><span class="font-bold">Boston Consulting Group (BCG)</span>',
        "img": "/Schermata.jpg",
        "text": "Shortly after the GGI Policy Consulting Masterclass, I bagged an offer to join BCG. It was only during the Policy Consulting masterclass that I was introduced to solving cases and the world of consulting.<br><br> I can never forget that moment when it all seemed worth it, the effort that went in while preparing. "
    },
    {
        "id": 18,
        "title": "Chris Ashley Pinto",
        "url": "https://www.linkedin.com/in/chrisashleypinto/",
        org: '<span class="text-red-700"><i>From </i><br><u>GGI Impact Fellow, NMIMS</u><br><i>To</i> <br><span class="font-bold">Menterra Ventures</span>',
        "img": "/chris.jpg",
        "text": `Shortly after GGI, I got Impact Investment offer from&nbsp;<a href="https://www.linkedin.com/company/menterra-venture-advisors/" rel="noreferrer noopener" target="_blank">Menterra Ventures</a><br><br>I actually used what I learned at GGI,within GGI, to get a job by GGI.<br><br>During my interview round, I was asked about a strategy case- the case became pretty easy because I had already completed my GGI fellowship. Having worked with Shreya (GGI mentor) on a Consulting Style white Paper allowed me to put the whole framework into practice.<br><br>GGI Fellowship helped fill my skills gaps as my expertise lay on the quantitative side earlier since I had gotten qualifications such as CFA, FRM, and others, but I was missing qualitative nuance in my analysis. And I had actually joined GGI to fill that gap.<br><br>I&apos;m also glad that my fellowship helped me a great deal to grab this opportunity.`
    },
    {
        "id": 31,
        "title": "Suvidha Jani",
        "url": "https://www.linkedin.com/in/suvidha-jani/",
        org: '<span class="text-red-700"><i>From </i><br><u>GGI Impact Scholar, LSR Delhi University</u><br><i>To</i> <br><span class="font-bold">Michael & Susan Dell Foundation</span>',
        "img": "/suvidha.jpeg",
        "text": `At GGI, I joined Michael & Susan Dell Foundation.<br><br>
        
        &ldquo;Hi, I am Suvidha Jani.
         <br><br>I am a post graduate student from Delhi University.
         <br><br>Since I am not on any social media platform, getting connected to GGI was simply destiny.
         <br>It was as if the universe wanted me to be a part of the GGI community :)
         <br><br>An ex colleague had recommended GGI to me. And this is how I found my way to GGI.&ldquo;
        <br><br>
        Q- So, what are the 3 things you learned at GGI ?
        <br><br>
        &ldquo;Post my master’s degree, I was very clear that I wanted to work in the development sector and social impact space.<br><br>
        When I was working with the Haryana, Andhra Pradesh and Telangana Government, I realised that government as a state machinery can do a lot of wonders. <br><br>

    But, gradually I came across a lot of other organisations doing great work in the same sector. I wanted to be part of an organisation which had clear impact goals, which MSDF offers. <br><br>

    1. At GGI, firstly I am really enjoying the clear learning outcomes. I am a nerd at heart and prefer outcome oriented classes.<br><br>
    GGI is giving me the learning for which I would have had to pay a lot at a #foreign university.<br><br>
    2. Secondly, I really like the community. So many insightful conversations have taken place in the breakout rooms.<br><br>
    3. Thirdly, there is a sense of #belonging. I have always felt like a misfit, but at GGI I got a feeling of belongingness.&ldquo;<br><br>
    Q- Your advice for the cohort of 2024 ?

        <br><br>
        &ldquo;It is natural to feel uncomfortable about trying something new-
        <br><br>But give GGI a shot.
         <br><br>Shoot for the moon and you will reach the stars. GGI is definitely the place that will help you reach the #stars.
        `},
    {
        "id": 19,
        "title": `Rahul Prasad`,
        "url": "https://www.linkedin.com/in/rahul-prasad-289422178/",
        org: '<span class="text-red-700"><i>From </i><br><u>GGI Impact Scholar, SRCC Delhi University</u><br><i>To</i> <br><span class="font-bold">Kearney India</span>',
        "img": "/rahul.jpg",
        "text": "Shortly after GGI, I got placed at&nbsp;Kearney India. This was possible due to GGI&rsquo;s prestigious Masterclass. It was a stepping stone for me, where I was exposed to the consulting world, and learned the tips and tricks that I could apply in the consulting world. Shatakshi&rsquo;s mock interviews were also very helpful during my placement season.</p><p>&nbsp;</p><p>I was taught to approach problems in real life scenarios from the best leaders in the game. I was among one of the 5 people from my college to be shortlisted for the coveted EY Global Scholarship Internship Opportunity, and I was able to apply the knowledge that I gained from the Masterclass there as well."
    },
    {
        "id": 20,
        "title": "Laboni Singh",
        "url": "https://www.linkedin.com/in/laboni-singh-664689124/",
        org: '<span class="text-red-700"><i>From </i><br><u>GGI Scholar 2020, St. Stephen&#39;s College Delhi University</u><br><i>To</i> <br><span class="font-bold">Bridgespan</span>',
        "img": "/laboni.jpg",
        "text": "Shortly after GGI, I was offered a role by Bridgespan. I will soon be joining the nonprofit consulting organization this year. I attended three masterclasses over a span of 4-5 months. First on Policy Consulting, second on Impact Startup and the third on Management Communications.<br><br> I had been wanting to explore the policy and development space for a while and I think the masterclasses helped me find the entry points. I have been in touch with GGI through the Inner circle and follow the good work happening regularly. It's relevant and important."
    },
    {
        "id": 21,
        "title": "Niharika Srivastava",
        "url": "https://www.linkedin.com/in/niharikasrivt/",
        org: '<span class="text-red-700"><i>From </i><br><u>GGI Impact Fellow, SRCC Delhi University</u><br><i>To</i> <br><span class="font-bold">Ipe Global Limited</span>',
        "img": "/niharika.jpg",
        "text": `GGI has contributed greatly towards reshaping my perspective about my career ingraining an attitude of perpetual learning. I remember always looking forward to the masterclass weekends because they would simply be power-packed, learning-filled days.&nbsp;<br><br>With the wonderful community that Shatakshi and Naman have created, GGI gave me a safe space to make mistakes; accept my vulnerabilities, make me self-aware, and give me the confidence to challenge my self-limiting beliefs. Not to mention that the community&rsquo;s diversity has helped me to broaden my horizon and given me the confidence to experiment with various things.&nbsp;`
    },
    {
        "id": 22,
        "title": `Swati Sureka `,
        "url": "https://www.linkedin.com/in/sureka-swati/",
        org: '<span class="text-red-700"><i>From </i><br><u>GGI Scholar, SRCC Delhi University</u><br><i>To</i> <br><span class="font-bold">Auctus Advisors</span>',
        "img": "/swati.jpg",
        "text": "I don&apos;t think getting an offer from Bain could have been possible without the community and at the end of my journey, I had offers from 3 Management Consulting firms.</p><p>&nbsp;</p><p>Today, I am a Management Consultant at Auctus Advisors and have been working there for 7 months now before that I was an account strategist at InMobi which was something I joined right after under graduation in Commerce from SRCC. I was a part of the first batch of PGP Scholars, and it was the right thing for me that came at a right time. I attended all the five master classes, and all of those were amazing, management consulting masterclass was one I really liked and I felt it was something I really wanted to work upon.<br><br>GGI has been the most wonderful experience of my life. I was confused during my bachelor&rsquo;s to immediately go for CAT and do my MBA or to switch to management consulting. I remember it was my first conversation with Shatakshi where she shared her personal experience where she mentioned how she had changed her job and you should definitely do so if you have a good reason to. I remember Shatakshi telling me how to apply and approach the interviews and the lovely support of people in the GGI community. I had superstars helping me with CV review and case preparation.<br><br>I had two key values I derived from the community.<br><br>Firstly, a learning mindset, learning from scratch about an industry, and different functions and then communicating it to multiple CXOs with confidence felt normal.<br><br>Secondly, helping each other, I couldn&rsquo;t have imagined being part of such a lovely community. I have reached out to people from the community and they have always answered positively. So yes, it has been the best experience of my life so far."
    },
    {
        "id": 23,
        "title": `Manvi Sherawat`,
        "url": "https://in.linkedin.com/in/manvi-sherawat-983856247",
        org: '<span class="text-red-700"><i>From </i><br><u>GGI Scholar, Delhi University, UPSC Aspirant</u><br><i>To</i> <br><span class="font-bold">Chase India, IE Business School</span>',
        "img": "/manvi.jpg",
        "text": `Hi, I’m Manvi Sharawat, an incoming MBA student at IE University. I’m currently working at Chase Advisors and am also an Impact Fellow at Global Governance Initiative.<br><br>

        When I came across GGI, I was going through a major transition phase in life - moving from my UPSC journey into the corporate world. At that point, I was looking for direction, exposure, and a community that truly understood ambition and growth. <br><br>
        
        If I had to talk about the most valuable part of the experience, it would definitely be the people. GGI gives you access to incredibly driven and supportive peers. My advice to future fellows would be - don’t hesitate to send that one “Hi.” Ask someone for coffee. Start conversations. Reach out to people.<br> 
        <br>
        
        Many people start strong in the first few weeks and slowly lose consistency later. Don’t make that mistake. The learning experience at GGI is intense, fast-paced, and deeply rewarding if you stay diligent throughout. Be proactive with assignments, participate actively, and stay intellectually curious.
        <br><br>
        Most importantly, always keep your long-term vision in mind. Whether you already have a clear goal or are still figuring things out, GGI gives you the environment to grow into the person you want to become.<br><br>
        
    `},

    {
        "id": 24,
        "title": "Rishabh Jain",
        "url": "https://www.linkedin.com/in/rishabhjain0410/",
        org: '<span class="text-red-700"><i>From </i><br><u>GGI Scholar, St. Stephen&#39;s College Delhi University</u><br><i>To</i> <br><span class="font-bold">AT Kearney Consulting, InMobi</span>',
        "img": "/rishabh.jpg",
        "text": `Shortly after GGI, I bagged an offer from InMobi for the profile of a Business Analyst in their Bangalore office. Two weeks into the GGI Fellowship, and I bagged this offer.<br><br>Being mentored by leaders like Shatakshi Sharma and Naman Shrivastava at such a young age is no less than a blessing. GGI helped me discover my true self and transform into a mature individual from a college-going &lsquo;kid&rsquo;.`
    },
    {
        "id": 25,
        "title": "Anusheela Ghosh",
        "url": "https://www.linkedin.com/in/anusheela-ghosh/",
        org: '<span class="text-red-700"><i>From </i><br><u>GGI Fellow, LSR Delhi University, UPSC Aspirant</u><br><i>To</i> <br><span class="font-bold">Boston Consulting Group (BCG), Samagra</span>',
        "img": "/anusheeela.jpg",
        "text": "Shortly after GGI, I bagged an offer Samagra | Transforming Governance. I have recently started my journey at Samagra and am super excited to grow! Upon joining GGI, I took a deep dive into the consulting space. This involved case prep, networking, brushing up on interview skills and so on.<br /><br />All this eventually culminated into bagging offers from DCPCR, GDI and Samagra. The GGI masterclass was the turning point for me where I took the decision to pivot from UPSC to governance consulting. I&#39;m so glad I took the plunge!"
    },
    {
        "id": 27,
        "title": "PARAM VEER SINGH",
        "url": "https://www.linkedin.com/in/param-veer-singh-774b15118/",
        org: '<span class="text-red-700"><i>From </i><br><u>GGI Impact Fellow, Engineering Graduate, UPSC Aspirant</u><br><i>To</i> <br><span class="font-bold">Capacity Building Commission of India</span>',
        "img": "/paramveer.jpg",
        "text": `I used to work as a business transformation consultant at EY in their change management department which comes under a larger business consulting umbrella.<br><br>Within a month&apos;s time, I would be joining the Capacity Building Commission which is a flagship body for implementing the Mission Karmayogi, an initiative launched by the Prime Minister&apos;s Office. It will be the first comprehensive and streamlined attempt to prepare a report on the civil services capacity building in India. I find myself fortunate to be a part of the GGI community because this is the first time I really felt being able to engage myself cognitively with my peers, the content, and the ecosystem. I continue to imbibe the learnings and apply them because GGI ensures that you apply them&rdquo;.`
    },
    {
        "id": 28,
        "title": "Akshat Bang ",
        "url": "https://www.linkedin.com/in/akshat-bang-9b232b90/",
        org: '<span class="text-red-700"><i>From </i><br><u>GGI Impact Fellow, IMT Ghaziabad</u><br><i>To</i> <br><span class="font-bold">Tech Mahindra Management Consulting</span>',
        "img": "/akshat.jpg",
        "text": `Shortly after GGI, I joined <a href="https://www.linkedin.com/company/tech-mahindra/" target="_blank" rel="noreferrer noopener">Tech Mahindra</a>&nbsp;Management Consulting Team.<br /><br />Before joining GGI, I was on an exchange program at Toulouse Business School in France pursuing strategy and marketing courses. When the pandemic hit, I came back to my homeland. At this point, I was doing my&nbsp;<a href="https://www.linkedin.com/feed/hashtag/?keywords=mba&amp;highlightedUpdateUrns=urn%3Ali%3Aactivity%3A6949196350186041344" target="_blank" rel="noreferrer noopener">#MBA</a>&nbsp;from home and I was disappointed that my Master&rsquo;s experience was going down the drain. That is when I thought of taking up a GGI to enhance my skills, as my learning was getting stagnated in my online MBA formal degree and I was not feeling that I was learning practical skills.&nbsp;<br /><br />Soon after, I joined&nbsp;<a href="https://www.linkedin.com/feed/hashtag/?keywords=ggi&amp;highlightedUpdateUrns=urn%3Ali%3Aactivity%3A6949196350186041344" target="_blank" rel="noreferrer noopener">#GGI</a>&nbsp;and attended my first and one of the most interesting Masterclass was- Management Communications. The kind of people I got to know in the first class itself made me believe that I am at the right place, and I thoroughly enjoyed the class.<br /><br />I also remember attending a guest speaker session on structured thinking which helped me immensely. I started my GGI journey with the mindset that I want to learn, and enhance my communication and articulation skills.<br /><br />I carefully listened to every input, made well-structured notes, and revised everything I noted down. During one masterclass Shatakshi talked about the issue tree approach. I had previously learnt about the entire concept but the way it was discussed and structured in the GGI coursework was really helpful, and it helped me use the framework for solving real-world problems.<br /><br />That&#39;s precisely what was missing in my traditional MBA coursework.`
    },
    {
        "id": 29,
        "title": "Vidyadhari M",
        "url": "https://www.linkedin.com/in/vidyadhari-m/",
        org: '<span class="text-red-700"><i>From </i><br><u>GGI Impact Scholar, NALSAR Hyderabad</u><br><i>To</i> <br><span class="font-bold">Tech Mahindra Management Consulting</span>',
        "img": "/VidyahariM.jpg",
        "text": "Shortly after GGI, I joined Tech Mahindra Management Consulting Team.<br><br>I joined GGI at the age of 30, which is technically a little late as I was on the other end of the bell curve.<br><br>I was considering a formal MBA before joining GGI’s PGP Scholar program. Through Global Governance Initiative, I wanted to test the waters on how I would fit into the MBA ecosystem, and get a head start on gaining the necessary skills. In these aspects, GGI worked out really well for me.<br><br>  It got me up to speed with for example Economics, something I had stopped studying 15 years ago. Earlier I had understood management consulting on a very superficial level only. <br><br>After GGI, I got invaluable insights into the deeper working of this industry like- what work they do as we did multiple cases ourselves during Masterclasses with speakers and outside and what kind of problems they solve."
    },
    {
        "id": 30,
        "title": "Disha Marjara",
        "url": "https://www.linkedin.com/in/disha-marjara-bb59921b/",
        org: '<span class="text-red-700"><i>From </i><br><u>GGI Impact Fellow, Delhi University</u><br><i>To</i> <br><span class="font-bold">Antara Foundation</span>',
        "img": "/disha.jpg",
        "text": `Shortly after GGI, I got an offer to join&nbsp;<a href="https://www.linkedin.com/company/antara-foundation/" rel="noreferrer noopener" target="_blank">The Antara Foundation</a>.<br><br>Before joining GGI, I constantly felt that I have not done enough in life. I had been planning to do my MBA for the last 4 years but was not able to get through the GMAT. I felt I was lagging behind in my career, and I was not getting good opportunities.<br><br>At this stage, I came across GGI and I could relate to the founder&apos;s journey because I was going through the exact same journey. That was my tipping point which led me to apply for GGI Fellowship.&nbsp;<br><br>After my GGI Fellowship interview, I was happily surprised to find that I had cleared the interview and got a shortlist!&nbsp;<br><br>My journey with GGI has been commendable so far. One thing I realised after joining GGI is that Naman and Shatakshi (founders) reinforce that every individual is special, and you can do anything if you put your mind and energy to it. You just need to trust your own self, and keep working on your abilities to become the best version of yourself. That&apos;s exactly what I did.&nbsp;`
    },
    {
        "id": 31,
        "title": "Vidhi Singh",
        "url": "https://www.linkedin.com/in/vidhi-singh-she-her-997973157/",
        org: '<span class="text-red-700"><i>From </i><br><u>GGI Impact Fellow, LSR Delhi University, UPSC Aspirant</u><br><i>To</i> <br><span class="font-bold">Azim Premji Foundation</span>',
        "img": "/vidhi.jpg",
        "text": "Shortly after GGI, I secured an offer from Azim Premji Foundation.<br><br> I started my fellowship at GGI alongside my MA Development program at Azim Premji University, Bangalore. Having been a part of Policy Consulting and Management Communication masterclasses I was exposed to frameworks that helped me understand and tackle issues at the policy level.<br><br>  Better articulation and how to tell your story is something that aided me in putting my volunteering experiences in education well and leading me to secure an offer from Azim Premji Foundation as Field Associate. <br><br> I would like to express my gratitude to the diverse GGI network and supportive mentors like Naman Shrivastava and Shatakshi Sharma for guiding me throughout."
    },
    {
        "id": 32,
        "title": "Ritikaa Khanna",
        "url": "https://www.linkedin.com/in/ritikaakhanna/",
        org: '<span class="text-red-700"><i>From </i><br><u>GGI Impact Fellow, Christ University</u><br><i>To</i> <br><span class="font-bold">Council on Energy, Environment and Water(CEEW)</span>',
        "img": "/Ritikaa.jpg",
        "text": "Shortly after GGI, I joined Council on Energy, Environment and Water(CEEW). <br><br> I got introduced to GGI through a competition that was being held by GGI.It was a national - level policy consulting challenge, and a couple of my friends and I participated together.It went really well for me, and I also got introduced to GGI Masterclasses through that competition.<br><br> My first GGI masterclass was Management Consulting and Sustainability, and that was the first time I got introduced to the world of Management Consulting.I was in my final year of Economics and I didn't have much exposure to Management Consulting or the Corporate world for that matter. <br><br>  The entire 10 hours were so informative and by the end, I realized that was the most productive Sunday I have ever had in my life! Soon after, I applied for the fellowship, and I was fortunate enough to get selected.The following months of the GGI fellowship were such an enriching experience for me."
    },
    {
        "id": 33,
        "title": "Ayush Agarwal",
        "url": "https://www.linkedin.com/in/ayush-agarwal-96a276190/",
        org: '<span class="text-red-700"><i>From </i><br><u>GGI Impact Fellow, Ashoka University</u><br><i>To</i> <br><span class="font-bold">eGovernments Foundation</span>',
        "img": "/ayush.jpg",
        "text": `Shortly after GGI, I got selected as a summer intern under the policy initiatives team at eGovernments Foundation. I will be joining the non-profit organisation in May this year.<br><br>  The first masterclass I attended on Product Management and Tech Ethics helped me gain a wider perspective of the complementarity of soft and hard skills. My key learning from the masterclass was that sustainability needs to be at the forefront of product innovation.&nbsp;The policy consulting masterclass helped me direct my efforts towards this field.<br><br> I have been in touch with the GGI community with the help of regular inner circle meetings and networking events which helped me finally land an internship in my area of interest. The co-founders place great importance on mental well-being which has enabled me to be more confident, accepting and strong.`
    },

    {
        "id": 34,
        "title": "Ishita Jain",
        "url": "https://www.linkedin.com/in/ishita-jain-26b5021a4/",
        org: '<span class="text-red-700"><i>From </i><br><u>GGI Impact Fellow, Delhi University</u><br><i>To</i> <br><span class="font-bold">TresVista</span>',
        "img": "/ishita.jpg",
        "text": "Shortly after GGI, I was offered a role by TresVista.<br><br> My first interaction with GGI was back in January 2020 through the Policy Consulting masterclass, then the Management Consulting masterclass. Now it&#39;s more than a year and I continue to be a part of this immensely talented family. The masterclasses boosted my confidence and made me realise my interest for problem solving and creating impact. This eventually led me to work with Teach For India as a campaign leader, intern with Ernst and Young and get placed in TresVista."
    },
    {
        "id": 35,
        "title": "Sourav Panda",
        "url": "https://www.linkedin.com/in/souravpanda/",
        org: '<span class="text-red-700"><i>From </i><br><u>GGI Scholar, The Fletcher School</u><br><i>To</i> <br><span class="font-bold">World Bank Group</span>',
        "img": "/sourav.jpg",
        "text": "I took the bold move of coupling my business education (MBA) from CEIBS with one of the best international affairs courses in the world at The Fletcher School. <br><br> The GGI scholars’ community  helped me be prepared for what’s coming, especially discussions with Naman and Shatakshi, and Dean Bhaskar’s session for the scholars, but truly, you can never be ready for the abundance here at Fletcher!"
    },
    {
        "id": 36,
        "title": "Varshini Murali",
        "url": "https://www.linkedin.com/feed/update/urn:li:activity:7046113624540528640",
        org: '<span class="text-red-700"><i>From </i><br><u>GGI Scholar, University of Warwick</u><br><i>To</i> <br><span class="font-bold">Sattva Consulting</span>',
        "img": "/varshini.jpg",
        "text": "Shortly after GGI, I joined Sattva Consulting<br><br>&apos;Hi, I graduated with a master&apos;s in education policy from the University of Warwick.<br><br>   Post pandemic I decided to come back to India and started working in the education sector in designing curriculum for primary education.From there, I moved to the role of a program manager, where I facilitated the education of twenty first century skills in government high schools.<br><br> Thats when I believed consulting would be the best choice for me as it would hone my skills and give me exposure. I also understood the role will give me more client facing exposure, allowing for betterment of my skills. <br><br>  Eventually, I interviewed for MBB, which did not go well. I lacked the guidance to crack a case interview.<br>  That is when I stumbled upon GGI. I connected with one of my school seniors who had been a fellow at GGI who had great things to say about them.<br><br>  At GGI, I believe that you have to proactively ensure that you are making the best out of any opportunity that you take. <br>And I do believe I have made the best out of the opportunities I had at GGI!"
    },
    {
        "id": 37,
        "title": "Abdul Ahad Rana",
        "url": "https://www.linkedin.com/feed/update/urn:li:activity:7025808428975497216",
        org: '<span class="text-red-700"><i>From </i><br><u>GGI Scholar, B.S Geology</u><br><i>To</i> <br><span class="font-bold">Tech Mahindra</span>',
        "img": "/abdul.jpg",
        "text": "Shortly after GGI MBA, I joined Tech Mahindra in a Management Consulting role.<br><br>&apos;I have done my graduation and post-graduation in petroleum technology and I was working as an Analyst in Global Data when I joined GGI.<br>That&apos;s when I wanted to step up my professional career and join management consulting.<br><br> And I thought of applying for B Schools abroad but dedicating 2 years of my life and spending a huge amount of money wasn&apos;t feasible for me.<br><br>   Thats when I was looking for alternatives when I discovered GGI.   GGI&apos;s PGP program perfectly fit eventually all my requirements-  not leaving his job and being able to smoothly pivot into consulting.”<br><br> Q- One word that would describe your GGI experience?<br> &apos;Change Maker.<br><br>  After a few years of my work experience, there came a time when I wanted to change my path, but couldn&apos;t afford to quit my job or take a hectic and expensive MBA program.<br><br> GGI provided me a one-stop change-maker platform for all these problems."
    },
    {
        "id": 38,
        "title": "Krithikaa Kumaresan",
        "url": "https://www.linkedin.com/feed/update/urn:li:activity:7030846249255723008",
        org: '<span class="text-red-700"><i>From </i><br><u>GGI Impact Fellow, Delhi University</u><br><i>To</i> <br><span class="font-bold">Queen Mary Institute of London</span>',
        "img": "/krithikaa.jpg",
        "text": "Shortly after GGI, I got a management consulting offer.<br><br>&apos;Hi, I graduated with a Master&apos;s from the Queen Mary Institute of London.<br><br> After my graduation, I wanted to experience a corporate environment and eventually start up after returning from London also. I was extremely skeptical about my choice of moving back to India, but GGI gave me hope. GGI Masterclasses were very interactive and people didn&apos;t judge me. My mentor especially was very supportive.<br><br>  Eventually, I was able to take help from the cohort to crack my consulting case interview too.&apos; <br><br>  Q- One word that would describe your GGI experience?<br><br>  &apos;#Unlearn. <br><br> While I was already aware of some concepts taught in the masterclasses, GGI&apos;s methodology and case-based format learning were transformative. <br><br>  I was able to practically apply all the concepts from economics to marketing in my actual interviews.<br><br> I was part of a diverse cohort who helped me express my opinions in a safe ecosystem.”"
    }
]


const data2 = [
    {
        "id": 1,
        "title": "Bhargavi Jonnalagadda",
        "url": "",
        "img": "/r1.jpg",
        "text": "Graduated from Global Governance Initiative. <br><br>It was an immense learning journey through networking and industry experts."
    },
    {
        "id": 2,
        "title": "Maanya Charu Kalra, IFC",
        "url": "",
        "img": "/r2.jpg",
        "text": "I have been selected for a Consultant role by the International Finance Corporation in their Global Upstream Dept in Washington DC. <br><br>It goes without saying that my time at GGI as a fellow contributed immensely to my interview and other selection processes."
    },
    {
        "id": 3,
        "title": "Shraya Sapru, Samagra",
        "url": "https://www.linkedin.com/in/shraya-sapru/",
        "img": "/r3.jpg",
        "text": "I have been made an offer to join as a Senior Associate at Samagra.  I had applied after the GGI info session and had my final round today."
    },
    {
        "id": 15,
        "title": "Rajan Raju",
        "url": "",
        "img": "/r15.png",
        "text": ""
    },
    {
        "id": 16,
        "title": "Pratiti",
        "url": "",
        "img": "/r16.jpeg",
        "text": ""
    },
    {
        "id": 17,
        "title": "Anusheela Ghosh",
        "url": "",
        "img": "/r17.png",
        "text": ""
    },
    {
        "id": 4,
        "title": "Yashvi Churivala, PwC Deals Strategy Consulting",
        "url": "https://www.linkedin.com/in/yashvi-churiwala-792230204/",
        "img": "/r4.jpg",
        "text": "I got an offer from PwC Deals Strategy Consulting! <br><br>Sessions with my mentor (Akshar) and learnings acquired during the Management Communication class were extremely helpful in every round!"
    },
    {
        "id": 5,
        "title": "Abhinav Ravi, Indian school of business",
        "url": "",
        "img": "/r5.jpg",
        "text": "Had one of the most wonderful Sundays in a long, long time attending the Management Consulting and Sustainability Masterclass organized by Global Governance Initiative. "
    },
    {
        "id": 6,
        "title": "Darshita Devnani, EY",
        "url": "https://www.linkedin.com/posts/darshitadevnani_learning-ggi-ggibound-activity-6847803873285980160-uTIv/",
        "img": "/r6.jpg",
        "text": "I spent my last weekend attending the Liberal Arts Masterclass organised by Global Governance Initiative as a part of my GGI PGP Scholars Program. Being from a commerce background, I have always been curious to explore the world of Liberal Arts and it goes without saying.<br><br>I had a very enriching and immense learning experience whilst learning and interacting with the diverse community. I am thankful beyond words to Naman and Shatakshi for creating one-of-its-kind learning ecosystem at Global Governance Initiative. Glad to be a part of the GGI family!"
    },
    {
        "id": 7,
        "title": "Fiona D'Souza, Zafco",
        "url": "https://www.linkedin.com/posts/fionads_attended-a-brilliant-masterclass-on-impact-activity-6789957312535695360-zHKb/",
        "img": "/r7.jpg",
        "text": "Attended a brilliant masterclass on Impact Investing by speakers Rachana Ramchand, Ivka Kalus and Daan Besamusca. As someone without much clarity on the Impact Investments space, this session was a great value add.<br><br>Thank you Global Governance Initiative for giving us the opportunity to experience discussions on such niche topics."
    },
    {
        "id": 8,
        "title": "Ravali Kothuri, Synamedia",
        "url": "https://www.linkedin.com/in/ravali-kothuri-02/",
        "img": "/r8.jpg",
        "text": "One thing I am grateful for GGI is it opened my mind to explore new things. It exposed me to new domains by letting me interact with people coming from diverse backgrounds."
    },
    {
        "id": 9,
        "title": "Shanthan chandrasekhar, Vlerick Business School",
        "url": "https://www.linkedin.com/posts/shanthan-chandrasekhar_ggi-sustainability-mindset-activity-6787062916190470144-s__m/",
        "img": "/r9.jpg",
        "text": "How often do you get to interact with a BCG Partner Aparna Bijapurkar.!!<br><br>Thank you Shatakshi Sharma and Naman Shrivastava for co-founding Global Governance Initiative and pushing our limits personally and professionally."
    },
    {
        "id": 10,
        "title": "Anisha Mansingh, Zomato",
        "url": "https://www.linkedin.com/in/anisha-mansingh-62a88b162/",
        "img": "/r10.jpg",
        "text": "I have received a campus placement offer from Deloitte India. It is in their Consulting Departmnet, the profile is of a Human Capital Analyst. <br><br>There are so many skills that I learnt from the GGI Fellowship that I applied during the placement process. "
    },
    {
        "id": 11,
        "title": "Netanya Pereira, ISS ESG",
        "url": "https://www.linkedin.com/in/netanya-pereira-5a2409192/",
        "img": "/r11.jpg",
        "text": "I had an extremely productive weekend at the Global Governance Initiative Impact Investing Masterclass. Personally, I was looking forward to this Masterclass since the start of GGI and I wasn't let down!"
    },
    {
        "id": 12,
        "title": "Muskaan, CEEW, LAMP, SRCC, Harvard Kennedy School",
        "url": "https://www.linkedin.com/in/muskaan-malhotra-6ba254170/",
        "img": "/r12.jpg",
        "text": "I just want to thank you and the entire GGI Team for facilitating the process as well as comment on the brilliant work you've been doing throughout the organization!"
    },
    // {
    //     "id":13,
    //     "title":"KASHISH CHORDIA, Yourstory media",
    //     "img":"/r13.jpg",
    //     "text":"Selection into the recent Management Consulting & Sustainability Masterclass conducted by the GGI this Saturday enabled me to broaden my horizons of management consulting holistically. It was a 10-hour long tiring session, however, with such a great panel and a diverse cohort of 60 attendees on-board, I was much more enlightened and satisfied."
    // },
    // {
    //     "id":14,
    //     "title":"",
    //     "img":"/r14.jpg",
    //     "text":""
    // }
]
const Card = ({ title, url, org, img, text }) => {
    return (
        <>
            <div className='mx-4 my-12 flex flex-col lg:flex-row justify-evenly  py-5 border border- shadow-black/5 shadow- rounded-sm'>
                <div className='flex justify-center'>
                    <div className='text-center p-4 '>
                        <div className='hover:scale-105'>
                            <Image
                                className='rounded-full '
                                src={img}
                                alt='/'
                                width='150'
                                height='150'
                            />
                        </div>
                        <a href={url} rel="noreferrer noopener" target="_blank">
                            <p className='my-2 font-bold text-gray-900 dark:text-black hover:cursor-pointer hover:text-blue-800' dangerouslySetInnerHTML={{ __html: title }}></p>
                        </a>
                        <p className='text-center primary max-w-[200px]' dangerouslySetInnerHTML={{ __html: org }}></p>

                    </div>
                </div>
                <div className='flex-justify center p-4 lg:w-2/3 text-sm'>
                    <p className='italic' dangerouslySetInnerHTML={{ __html: "&ldquo;" + text + "&rdquo;" }}></p>
                    {/* <a href="#" className="mt-4 inline-flex items-center py-2 px-3 text-sm text-center text-white bg-red-700 rounded-lg hover:bg-red-800 hover:scale-105 shadow-lg  transition duration-400">
                        Read the full story on Linked<FaLinkedin />
                        <svg aria-hidden="true" className="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                    </a> */}
                </div>
            </div>
        </>

    )
}

const Cardx = ({ title, img, text }) => {
    return (
        <>
            <div className='mx-4 my-12 flex flex-col py-5 border'>
                <p className='my-2 mx-auto primary font-bold tracking-tight text-gray-900 dark:text-white max-w-[200px] ' dangerouslySetInnerHTML={{ __html: title }}></p>

                <div className='flex justify-center'>

                    <div className='text-center p-4'>
                        <div style={{ maxWidth: '400px', margin: '0 auto' }}>
                            <img
                                src={img}
                                alt='/'
                                style={{ width: '100%', height: 'auto' }}
                            />
                        </div>
                    </div>

                    {/* <p className='text-center text-sm' dangerouslySetInnerHTML={{ __html: slide.org }}></p> */}
                </div>
                <div className='flex-justify center p-4 text-sm'>
                    <p className=' ' dangerouslySetInnerHTML={{ __html: "&ldquo;" + text + "&rdquo;" }}></p>
                    {/* <a href="#" className="mt-4 inline-flex items-center py-2 px-3 text-sm text-center text-white bg-red-700 rounded-lg hover:bg-red-800 hover:scale-105 shadow-lg  transition duration-400">
                        Read the full story on Linked<FaLinkedin />
                        <svg aria-hidden="true" className="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                    </a> */}
                </div>
            </div>
        </>

    )
}



const Employment = () => {
    return (
        <>
            {/* <Hero image={"/reviews.jpeg"} altText="Careers"/> */}
            {/* <div className='primary text-3xl md:text-4xl mt-[10vw] text-center  mb-12 font-serif font-bold' >GGI ALUMNI SPOTLIGHT</div>
            <p className='text-center md:text-lg text-black font-serif my-12'>GGIIANS THRIVE SO MUCH IN THEIR CAREERS, THAT WE DECIDED TO MAKE A NEW WEB PAGE FOR IT :)</p> */}
            <SlidingHero
  image="/op1.jpg"
  title={[
    `<div class='text-center text-white w-full'>
      <h4 class='text-3xl sm:text-4xl md:text-5xl font-bold mb-4 w-full'>
        GGI Alumni Spotlight
      </h4>
      <p class='text-lg font-normal mt-4'>
        Where our fellows & scholars thrive and make global impact across top organizations.
      </p>
    </div>`
    
  ]}
/>
<div className="text-center text-gray-700 italic text-xl font-medium max-w-3xl mx-auto mt-8 px-6">
  “Behind every GGI fellow is a story of resilience, ambition, and transformation.”
</div>

<YouTubeEmbed embedId='eEAzGG4RFF0' autoplay={1}/>

            <div className='mt-24 grid grid-cols-1 sm:grid-cols-2 sm:mx-12'>
            {data1.slice(0, 4).map((e, index) => {
    return (
        <Card key={index} url={e.url} org={e.org} title={e.title} img={e.img} text={e.text} />
    );
})}

            </div>
            <YouTubeEmbed embedId='rToRQxJn1hE' autoplay={1}/>
            <div className='mt-24 grid grid-cols-1 sm:grid-cols-2 sm:mx-12'>
            {data1.slice(4, 10).map((e, index) => {
    return (
        <Card key={index} url={e.url} org={e.org} title={e.title} img={e.img} text={e.text} />
    );
})}




            </div>



            {/* <YouTubeEmbed embedId='XF0haCFPdxs' autoplay={1}/>
            <div className='mt-24 grid grid-cols-1 sm:grid-cols-2 sm:mx-12'>
            {data1.slice(4, 10).map((e, index) => {
    return (
        <Card key={index} url={e.url} org={e.org} title={e.title} img={e.img} text={e.text} />
    );
})}




            </div> */}



            <YouTubeEmbed embedId='XF0haCFPdxs' autoplay={1}/>
            <div className='mt-24 grid grid-cols-1 sm:grid-cols-2 sm:mx-12'>
            {data1.slice(10, 22).map((e, index) => {
    return (
        <Card key={index} url={e.url} org={e.org} title={e.title} img={e.img} text={e.text} />
    );
})}
            </div>
            <YouTubeEmbed embedId='QZvdzbmmWpg' autoplay={1}/>
            <div className='mt-24 grid grid-cols-1 sm:grid-cols-2 sm:mx-12'>
            {data1.slice(22, 30).map((e, index) => {
    return (
        <Card key={index} url={e.url} org={e.org} title={e.title} img={e.img} text={e.text} />
    );
})}
            </div>
            <YouTubeEmbed embedId='Pt8cnPkD4k0' autoplay={1}/>
            {/*
            for odd num of cards 
            <div className='sm:mx-12'>
                <Card url={data1[data1.length - 1].url} org={data1[data1.length - 1].org} title={data1[data1.length - 1].title} img={data1[data1.length - 1].img} text={data1[data1.length - 1].text} />
            </div> */}
             <div className='mt-24 grid grid-cols-1 sm:grid-cols-2 sm:mx-12'>
            {data1.slice(30).map((e, index) => {
    return (
        <Card key={index} url={e.url} org={e.org} title={e.title} img={e.img} text={e.text} />
    );
})}
            </div>


            <div className='mt-24 grid grid-cols-1 sm:grid-cols-2 sm:mx-12 lg:grid-cols-3 md:mx-24'>
                {
                    data2.map((e) => {
                        return (
                            <Cardx key={e.id} title={e.title} img={e.img} text={e.text} />

                        )
                    })
                }
            </div>
            <div className='flex flex-wrap justify-center md:mx-12'>
                <img src={'/newss-1.png'} width='50%' alt=''/>
                <img src={'/newss-2.png'} width='50%' alt=''/>
                <img src={'/newss-3.png'} width='40%' alt=''/>
                <img src={'/newss-5.png'} width='60%' alt=''/>
                <img src={'/newss-6-upscaled.jpg'} width='60%' alt=''/>
                <img src={'/newss-7-upscaled.jpg'} width='40%' alt=''/>
                <img src={'/newss-8-upscaled.jpg'} width='65%' alt=''/>
                {/* <img src={'/newss-9.png'} width='45%' alt=''/> */}
                <img src={'/ssss1.png'} width='50%' alt=''/>
                <img src={'/ssss2.png'} width='50%' alt=''/>
                <img src={'/ssss3.png'} width='50%' alt=''/>
                <img src={'/ssss4.png'} width='50%' alt=''/>
                <img src={'/ssss5.jpeg'} alt=''/>
                <img src={'/ssss6.jpeg'} alt=''/>
                <img src={'/ssss7.png'} alt=''/>
                <img src={'/ssss8.png'} alt=''/>
                
                <img src={'/ssss10.png'} alt=''/>
                <img src={'/ssss11.png'} width='50%' alt=''/>
                <img src={'/ssss12.png'} alt=''/>
                <img src={'/ssss13.png'} alt=''/>
                <img src={'/rr40.png'} width='50%' alt=''/>
                <img src={'/rr41.png'} width='50%' alt='' />
                <img src={'/rr42.png'} width='60%' alt='' />
                <img src={'/rr43.png'} width='50%' alt=''/>
                <img src={'/rr44.png'} width='50%' alt='' />
                <img src={'/rr45.png'} width='60%' alt='' />
                <img src={'/rr46.png'} width='50%' alt=''/>
                <img src={'/rr47.png'} width='50%' alt='' />
                <img src={'/rr48.png'} width='60%' alt='' />
                <img src={'/rr49.png'} width='50%' alt=''/>
                <img src={'/rr50.png'} width='50%' alt='' />
                <img src={'/rr39.png'} alt=''/>
                <img src={'/rr35.jpg'} alt='' />
                <img src={'/rr36.jpg'} alt='' />
                {/* <img src={'/rr37.jpg'} alt='' /> */}
                {/* <img src={'/rr39.jpg'} alt='' /> */}
                <img src={'/rr38.jpg'} alt='' />
                <img src={'/rr11.jpg'} alt='' />
                <img src={'/ss1.png'} width='60%' alt='' />
                <img src={'/ss2.png'} width='80%' alt='' />
                <img src={'/ss3.png'} width='50%' alt='' />
                <img src={'/ss4.png'} width='50%' alt='' />
                <img src={'/ss5.png'} width='50%' alt='' />
                <img src={'/ss6.png'} width='60%' alt='' />
                <img src={'/ss7.png'} width='50%' alt='' />
                <img src={'/ss8.png'} width='80%' alt='' />
                <img src={'/rr12.jpg'} alt='' />
                <img src={'/rr13.jpg'} alt='' />
                <img src={'/rr14.jpg'} alt='' />
                <img src={'/rr15.png'} alt='' />
                <img src={'/rr16.png'} alt='' />
                <img src={'/rr17.jpg'} alt='' />
                <img src={'/rr18.png'} alt='' />
                <img src={'/rr19.png'} alt='' />
                <img src={'/rr20.png'} alt='' />
                <img src={'/rr21.png'} alt='' />
                <img src={'/rr22.png'} width='80%' alt='' />
                <img src={'/rr23.png'} alt='' />
                <img src={'/rr24.png'} alt='' />
                <img src={'/rr25.png'} alt='' />
                <img src={'/rr26.png'} alt='' />
                <img src={'/rr27.png'} alt='' />
                <img src={'/rr29.png'} alt='' />
                <img src={'/rr30.png'} alt='' />
                <img src={'/rr31.png'} alt='' />
                <img src={'/rr32.png'} alt='' />
                <img src={'/rr33.png'} alt='' />
                <img src={'/rr34.png'} alt='' />



            </div>

            <Heading>Frequently Asked Questions</Heading>
            <Accordion />
            <Footer />
        </>
    )
}

export default Employment
