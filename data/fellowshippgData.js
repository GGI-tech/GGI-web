// ------------------------------------------------------------------
import network from '../public/network2.jpeg'
import clinton from '../public/clinton.png'
import BCG from '../public/bcg-g.jpg';
import teach from '../public/teach.png';
import IFBB from '../public/IBFF.png';
import goodstep from '../public/goodstep.jpg';
import pushpagiri from '../public/pushpagiri.png';
import deepdive from '../public/file.jpg';

export const fivecolumndata = [ //to be fetched from database
    {
        "id": 1,
        "img": BCG,
        "title": "Learn from Mckinsey, BCG Mentors",
        "body": "The mentor personally guides you through the fundamentals of consulting by training you in case interviews and teaching you how to advance your career. "
    },
    {
        "id": 2,
        "img": teach,
        "title": "Do Live Consulting Project & Write  Consulting Style Paper",
        "body": "As a GGI Impact Fellow, you will learn consulting practices by actually advising real clients in this country and writing a consulting-style research paper, thereby increasing your skills and enhancing your profile."
    },
    {
        "id": 3,
        "img": clinton,
        "title": "Advance Your Career with Top Employers",
        "body": "GGI has established strong partnerships with leading organizations in management consulting and development consulting."
    },
    {
        "id": 4,
        "img": network,
        "title": "Become Part of Purposeful Community",
        "body": "This global community represents powerful, internationally diverse leaders at the helm of leading organizations. This community supports one another, not only by referring members to their first job but also by navigating a thriving career and building startups.  "
    }
    ,
    {
        "id": 5,
        "img": deepdive,
        "title": "Living Knowledge",
        "body": "Our curriculum is always evolving. Post your graduation, you'd get access to free weekly deep dive sessions for 2 months where over and above curriculum, you'd also get to problem solve contemporary policy, geopolitics and business problems because the probability of recent problems being asked in interviews is very high. At GGI fellowship- Every year, every day, and every session is one-of-a-kind. "
    }
]
export const stages = [
    {
        "id": 0,
        "ques": "Stage 1 - Upskilling ",
        "ans": ["<p className='mb-2'>Context is a critical component of sound decision-making in consulting and international development, and breadth of knowledge is what creates great analytical thinkers and leaders. GGI prepares Impact Fellows to be future leaders by honing skills that enable them to connect the dots across various areas, including policy consulting, management consulting and sustainability, product management and tech ethics, impact investing, liberal arts, and core business perspectives, through GGI&#39;s trademarked Masterclasses. ", `</p><br><p className='mb-3'>In this stage, Impact Fellows, during their executive education, also have access to the personalized Career Development Program of the Global Governance Initiative. This component is crucial for those aiming to work in organizations like McKinsey, BCG, Bain, United Nations, World Bank, and others. Many Masterclasses are typically led by incumbent partners and leaders of such organizations.
            </p><br><p className='mb-3'> The Career Development Program comprises two pillars:</p>
                    <p class='text-xl font-semibold my-4'>1. Hands-on Case Solving Sessions (Unique for every learner):  </p><p>GGI Impact Fellows learn the art and science of problem-solving in a closed ecosystem, along with CV and cover letter hacks. The mentors leading these sessions are handpicked from top organizations such as McKinsey, BCG, Bain, United Nations, Tesla, etc.
                    </p> <p class="text-xl font-semibold my-4">2. Microlearning Experience and Buddy System </p><p> 

                    GGI has developed a microlearning AI-based experience through Schrödinger (by GGI). It is an interactive, real-life case simulator that allows fellows to practice cases and interviews at their convenience. This tool has been transformative for many GGI fellows, who credit their success in entering top consulting firms to Schrödinger.
                    <br><br>                    
                    During their executive education, GGI Impact Fellows are also integrated into a rotating buddy system, where they practice cases, network on Wiggly, and build bonds with other members of this exceptional community at the Global Governance Initiative.
 </p>`]
    },
    {
        "id": 1,
        "ques": "Stage 2 - Access to Employment Partnerships<br/> &<br/> Skin in the Game ",
        "ans": ["<p className='mb-3'>To truly understand the world, you must have skin in the game. The realms of Consulting and International Development are unpredictable and adventurous. Impact Fellows are placed in challenging situations where they refine their skills by publishing consulting-style research papers under the Council on Sustainable Development.", "  </p><br><p className='mb-3'>The combination of theoretical learning with practical experiences makes the Impact Fellowship unique. Passionate Fellows and their mentors delve into the core questions of international business and public policy at this stage. </p><br> <p className='mb-3'>Thanks to the experiential learning component, Impact Fellows can successfully outshine others in their consulting interviews.  </p>"]
    },
    {
        "id": 2,
        "ques": "Stage 3 - Community, Networking Nights, and Wellness Sessions ",
        "ans": [
            "<p>It is often said that having just one person who cares for you unconditionally can do wonders for your self-esteem. That person is the entire community at the Global Governance Initiative.</p>",
            "<p><br></p><p>Impact Fellows gain exclusive access to the Global Governance Initiative. They attend monthly inner circle meetings and networking events with fellows from various fields. They are also provided with an ecosystem where their mental health is given paramount importance.</p><p><br></p><p>Even though the fellowship ends after 6 months, Fellows—as GGI Alumni—will always have access to the inclusive, supportive, respectful, and collaborative ecosystem of the Initiative for the rest of their lives. Impact Fellows also enjoy access to the exclusive partnerships that GGI continuously establishes with leading universities, businesses, and policy schools.</p><p><br></p><p>The GGI Impact Fellowship is the Crème de la crème of the GGI network. Through core Masterclasses, a flexible curriculum, and consulting-style projects, the Impact Fellowship offers a deep dive into consulting, development consulting, and international development.</p><p><br></p><p>The GGI Impact Fellowship is personalized, and the schedule is shared only after the Initial Founders Call.</p><p><br></p><p>Impact Fellows are also integrated into GGI's growing technology portals, encompassing an international and diverse network of GGI Delegates, Impact Scholars, fellows, and mentors spread across the globe.</p>"
          ] }
]

export const testimonialFellow = [
    {
        name: 'Daphne Randall',
        org: 'GGI Global Leadership Scholar 2023',
        link: 'https://www.linkedin.com/feed/update/urn:li:activity:7065257371253514241',
        image: '/daphne.jpeg',
        review:"Daphne Randall is a dynamic leader who has demonstrated a passion for bringing positive change to communities through placemaking and community development.<br><br>  She has trained thousands of young people in placemaking and climate action and led many high-impact projects that resulted in the effective makeover of Nairobi&apos;s public spaces.<br><br>  Her experiences in #community development have fueled her broader vision of creating resilient, inclusive, and environmentally conscious cities around the world."
    },
    {
        name: 'Arpita',
        org: 'Meet Arpita G. GGI Fellow 2021.',
        link: "https://www.linkedin.com/feed/update/urn:li:activity:6761913808798789632/",
        image: '/arpita.jpg',
        review: "Arpita is currently an Associate Solution Advisor in the Cyber Risk Advisory practice of<span class='font-bold'> Deloitt</span><br/><br/> An Electronics & Telecommunications Engineer from Army Institute of Technology, Pune, Arpita has previously worked in the fields of Financial Crimes Prevention, Anti-Money Laundering and Regulatory reporting.<br/><br/>  She has a penchant for science-fiction and poetry. She spends her free time spreading awareness about Mangrove trees on her podcast, The Saltwater Tree P"
    },
    {
        name: 'Sahil',
        org: 'Meet Sahil B. GGI Fellow 2021.',
        link: "https://www.linkedin.com/feed/update/urn:li:activity:6756842408606081025/",
        image: '/sahil.jpg',
        review: "Sahil is a fourth-year undergraduate student at Ashoka University, completing his advanced major in Economics. He is writing his undergraduate thesis on the RBI's monetary policy framework. His primary interest lies in the areas of macroeconomic and development policy and also likes to explore the disciplines of International Relations and Political Science.<br><br> He has worked as a Research Assistant on papers evaluating the impact of government policies and the Ive Covid"
    },
    {
        name: 'Divyang Bhartia',
        org: 'Meet Divyang Bhartia, GGI Fellow 2021.',
        link: "https://www.linkedin.com/feed/update/urn:li:activity:6758284483964891136/",
        image: '/divyang.jpg',
        review: "Divyang is an undergraduate student at St. Xavier's College (Autonomous), Kolkata, pursuing a Bachelor's Degree in Commerce. <br><br> He is the Founder of KnowMore Community where a bunch of students gets together weekly, to discuss on Issues happening around the world. He has been a former Marketing Intern at BYJU'S & a Global Entrepreneur at Egypt where he spent two months with students from different walks of life, experiencing a different work culture."
    },
    {
        name: 'Abhay',
        org: 'Meet Abhay Malla, GGI Fellow 2021.',
        link: "https://www.linkedin.com/feed/update/urn:li:activity:6750785045692219392/",
        image: '/abhay.jpg',
        review: "Shortly after GGI, I was offered a role by <span class='font-bold'>Kearney India</span>.<br><br>The GGI Masterclass enabled me to develop a more holistic view of the manner in which the public sector works in our country and the challenges that arise while working to create an impact with them. The first time I was introduced to case interviews was also during the GGI Masterclass in my campus. I was able to understand the problems better and develop structured solutions which made me stand out."
    },
    {
        name: 'Anushka Dixit',
        org: 'Meet Anushka Dbdt, GGI Fellow 2021.',
        link: "https://www.linkedin.com/feed/update/urn:li:activity:6761166613434769408/",
        image: '/anushka.jpg',
        review: 'Anushka, a Finance graduate from Christ University, Bengaluru, is currently working as a Fellow with Teach For India. She teaches 101 middle school students from the community of Munirka in New Delhi. She has also worked as a Selection Reviewer, Recruiter, as well as a member of the Communications team. <br><br>She has worked with the Samagra Shiksha Abhiyan of the Government of Telangana. She is also a strong champion of child rights and has worked with the Delhi.'
    }, {
        name: 'Tania Gupta',
        org: 'Meet Tania Gupta, GGI Fellow 2021.',
        link: "https://www.linkedin.com/feed/update/urn:li:activity:6750369726012116992/",
        image: '/tania.jpg',
        review: ' Tania graduated from NIT Trichy with a B.Tech in Instrumentation and Control. She currently works in HSBC as an Analyst at the Wealth and Personal Banking (Data and Analytics) Team, where she gained an understanding of the nuances of banking and credit card pricing strategies catering to the US market. '
    }, {
        name: 'Garvit',
        org: 'Meet Garvit Goswami, GGI Fellow 2021.',
        link: "https://www.linkedin.com/feed/update/urn:li:activity:6751782586210754560/",
        image: '/garvit.jpg',
        review: ' Garvit is an undergraduate at Shri Ram College of Commerce persuing B.A.(Hons.) Economics. He was the 2nd National runner up position in the GGI Policy Challenge.<br><br> He has co-founded Saarathi- an app in the development stage showing covid-safe route options using Data, Al, and ML.<br><br>While at SRCC, he developed an interest in the policy and strategy domain through his association with consulting and policy clubs.  '
    }, {
        name: 'Prachi Mehta',
        org: 'Meet Prachi Mehta, GGI Fellow 2021.',
        link: "https://www.linkedin.com/feed/update/urn:li:activity:6755762502149173248/",
        image: '/prachi.jpg',
        review: "Prachi is an Economics graduate from Christ University and is currently a research associate at <span class='font-bold'>Kingfish Group</span>, a private equity advisory firm. She shares responsibility for conducting market research, commercial due diligence, and developing the firm's executive partnerships.<br><br> She also interned at the IDFC Institute where she contributed to the various research projects: (1) Infrastructure of Urban Peripheries and Job Creation (II) Affordable Housing (III)"
    },
    {
        name: 'Tanya Shashtri',
        org: 'Meet Tanya Shastri, GGI Fellow 2021',
        link: "https://www.linkedin.com/feed/update/urn:li:activity:6759392436411359232/",
        image: '/tanyashashtri.jpg',
        review:"Tanya is a Computer Science and Engineering graduate from Visvesvaraya National Institute of Technology (NIT Nagpur), batch of 2020.<br><br> She is currently working as a Business Analyst at <span class='font-bold'>IQVIA</span> where she is involved in extracting meaningful insights from relevant data and developing business strategy. She has previously interned at Qatar Computing and Research Institute, where she worked in the domains of Natural Language Processing and How to crack Data Science and Analytics"
    },
    {
        name: 'Maurice',
        org: 'Meet Maurice Patel, GGI Fellow 2021.',
        link: "https://www.linkedin.com/feed/update/urn:li:activity:6747863943433211904/",
        image: '/maurice.jpg',
        review: 'Maurice is currently pursuing his post-graduate degree in management from Indian Institute of Management Ahmedabad. He is an undergraduate in Applied Mathematics from Indian Institute of Technology, Roorkee.<br><br>Maurice is passionate about programming & finance, and also loves to read, code and binge-watch tv shows & anime. He can absolutely engage in a conversation with topics ranging from potential startup ideas to fan theories about how George R.R. Martin'
    }
];

export const curriculum=[
    {
        "title":"6-12 Months",
        "description":"Program length, flexible upon your needs and availability"
    },
    {
        "title":"90+ Hours of Business Masterclasses",
        "description":"90+ Hours of Business Masterclasses"
    },
    {
        "title":"Consulting Paper with MBB mentor",
        "description":"A small group mentorship research project under "
    },
    {
        "title":"95+ Employment Partners",
        "description":"Which Hire GGI Fellows "
    },
    {
        "title":"Unlimited Networking ",
        "description":"You continue to be a part of the family post your graduation"
    },
    {
        "title":"1:1 Founders&#39; Office Hours ",
        "description":"Through Your Journey"
    },
    {
        "title":"Live Consulting Project",
        "description":"After finishing white paper, to build your profile for consulting "
    },
    {
        "title":"70+ Hours of Case Interview Practice",
        "description":"Via our inhouse AI Based software"
    },
    {
        "title":"Free 2 Months of Live Deep Dive Sessions",
        "description":"Only after your graduation, to better prepare you for every changing current affairs based problem solving "
    }
]

export const socialspaceimpactdata = [ //to be fetched from database
    {
        "id": 1,
        "img": pushpagiri,
        "body": "A dedicated team of GGI Fellows identified and tackled key challenges—ranging from operational infrastructure to staff hospitality. This project not only underscores our commitment to building an inclusive world but also highlights the unique power of collaboration between GGI and leading global nonprofits."
    },
    {
        "id": 2,
        "img": IFBB,
        "body": "Our team of GGI fellows took on a challenge faced by Indian Blind Football Federation to create awareness about blind football in the country and increase their funding pipeline. IBFF is aiding in building an inclusive environment by providing a platform to people with disabilities to participate in mainstream sports like football."
    },
    {
        "id": 3,
        "img": goodstep,
        "body": "We took on a challenge faced by The Goodstep in creating a User and NGO onboarding and engagement roadmap and designing a GTM strategy for the venture- The Goodstep is an awareness and discovery platform that helps presently untapped audiences transition into more sustainable and socially conscious lifestyles."
    }
]