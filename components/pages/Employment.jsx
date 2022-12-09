import React from 'react'
import Accordion from '../global/Accordian'
import Heading from '../global/Heading'
import Hero from '../global/Hero'
import Image from 'next/image'
import YouTubeEmbed from '../global/YoutubeEmbed'
import Footer from '../global/Footer'
// import Container from '../global/Container'
const data1 = [
    {
        "id": 1,
        "title": "KARAN DAVID, BAIN & COMPANY",
        "img": "/karan_david.jpg",
        "text": "Shortly after GGI, I joined as an Associate Consultant at Bain & Company.<br>This was post my graduation in Economics from St. Stephen's College, Delhi where I also led the Planning Forum as the President.<br>My role at Bain involved working on portfolio operations and private equity across varied sectors. It was due to the GGI prestigious masterclass, I could think through the lens of policy and core consulting, and eventually excelled in policy case competitions as well.<br>The mentors, Naman Shrivastava and Shatakshi Sharma, were extremely helpful throughout."
    },
    {
        "id": 2,
        "title": "ANAMITRA MUNSI, BOSTON CONSULTING GROUP",
        "img": "/ana.jpg",
        "text": "GGI gave me the impetus to move ahead with my MBA at ISB, the contacts and relations I made at GGI helped me keep up the hustle and eventually I got an offer from Boston Consulting Group (BCG).<br><br>I was preparing for UPSC for almost 3 years and was unsuccessful in rounds beyond the prelims. I then applied to GGI and interacted with Naman, and understood how with every target there is a certain deadline and as time passes you need to move on. GGI was the perfect platform to do that."
    },
    {
        "id": 3,
        "title": " JAYESH JAWANDHIA, BCG",
        "img": "/Jayesh.jpg",
        "text": "Hey Shatakshi, I'll be joining BCG next month. <br><br> Thank you so much for all the help, couldn't have been possible without you and GGI. It was a great learning experience"
    },
    {
        "id": 4,
        "title": "MAANYA CHARY KALRA, WORLD BANK GROUP",
        "img": "/maanya.jpg",
        "text": "I think ever since I first stumbled upon GGI, my perspective towards my career has changed immensely. My GGI Fellowship lasted 2 months from Oct to Dec'20, and it simply curated itself into a glass half full situation wherein I could scrape off the shadows of the pandemic tainted hiring freezes and just breathe and plan for the future.<br><br> GGI Masterclasses, founder office hours, peer sessions, and of course the research paper, all in unison collected my professional ambitions and shaped them in a way that I could somehow manage to achieve them. My weeks are covered with working on my bit towards social behavioral change by running my content portal @hasrat.work and working full time at IFC."
    },
    {
        "id": 5,
        "title": "NISHITA GUPTA, BCG",
        "img": "/Schermata.jpg",
        "text": "Shortly after the GGI Policy Consulting Masterclass, I bagged an offer to join BCG. It was only during the Policy Consulting masterclass that I was introduced to solving cases and the world of consulting.<br><br> I can never forget that moment when it all seemed worth it, the effort that went in while preparing. "
    },
    {
        "id": 6,
        "title": "LABONI SINGH, BRIDGESPAN",
        "img": "/laboni.jpg",
        "text": "Shortly after GGI, I was offered a role by Bridgespan. I will soon be joining the nonprofit consulting organization this year. I attended three masterclasses over a span of 4-5 months. First on Policy Consulting, second on Impact Startup and the third on Management Communications.<br><br> I had been wanting to explore the policy and development space for a while and I think the masterclasses helped me find the entry points. I have been in touch with GGI through the Inner circle and follow the good work happening regularly. It's relevant and important."
    },
    {
        "id": 7,
        "title": "MUSKAAN MALHOTRA,  COUNCIL ON ENERGY, ENVIRONMENT, AND WATER(CEEW)",
        "img": "/Muskaant.jpg",
        "text": "Shortly after GGI, I joined Council on Energy, Environment, and Water (CEEW). During my interview, my research as a GGI fellow on water woes in Uttar Pradesh and Punjab came in handy for engaging discussions. GGI fellowship started during my college at SRCC. At GGI, I had a lot of opportunities coming in because I got exposed to a lot of sectors. Topics at GGI such as policy and of course consulting were extremely valuable. <br><br>I knew about CEEW because of my interest in climate change and energy security. In fact, I was also excited since the net zero target of India for 2017 was a calculation of CEEW. From what I know, CEEW mostly doesnt hire undergrads , and that is where the employment collaboration of CEEW with GGI as part of GGI's definitely helped me get noticed.<br><br> I am really happy about my work at CEEW because I am getting to work where my interest lies. I’m really thankful to GGI for getting me this opportunity and creating this opportunity for me. Question- One word that would describe my GGI experience?<br><br>I think my one word would be enlightening!<br><br>  Starting with the masterclass and then the fellowship, I had a very different experience than a lot of other people. I really learned how to think analytically and apply tools from the masterclasses."

    },
    {
        "id": 8,
        "title": "DARSHITA DEVNANI, SATTVA CONSULTING",
        "img": "/DARSHITA.jpg",
        "text": "Shortly after GGI, I joined Sattva Consulting.<br><br> I'm a commerce graduate from Gargi college. I was working at EY as an Assurance Associate in their Private Equity team.<br>I came across GGI six months ago, and soon I enrolled for the Impact MBA Scholars program. And here is my GGI journey:<br><br>  1. I got to learn about Management and Policy consulting at length; and it resonated with my mid-term and long-term goal of exploring and working in these sectors. 2. I became part of a very diverse community who helped me in each step of the way; frame and shape my mid-term and long-term career. 3. Lastly, I wanted to make a switch from Audit to a Consulting sector. In a span of one month, I came across diverse individuals from B-schools working at Consulting firms and got to connect Naman and Shatakshi (the founders) regarding this. They helped me end to end as a fellow later.<br><br>  I finally got an offer letter from an impact consulting firm, and I am excited to start my journey there!"
    },
    {
        "id": 9,
        "title": " VIDYADHARI M, TECH MAHINDRA MANAGEMENT CONSULTING",
        "img": "/VidyahariM.jpg",
        "text": "Shortly after GGI, I joined Tech Mahindra Management Consulting Team.<br><br>I joined GGI at the age of 30, which is technically a little late as I was on the other end of the bell curve.<br><br>I was considering a formal MBA before joining GGI’s Impact MBA Scholar program. Through Global Governance Initiative, I wanted to test the waters on how I would fit into the MBA ecosystem, and get a head start on gaining the necessary skills. In these aspects, GGI worked out really well for me.<br><br>  It got me up to speed with for example Economics, something I had stopped studying 15 years ago. Earlier I had understood management consulting on a very superficial level only. <br><br>After GGI, I got invaluable insights into the deeper working of this industry like- what work they do as we did multiple cases ourselves during Masterclasses with speakers and outside and what kind of problems they solve."
    },
    {
        "id": 10,
        "title": "RITIKAA KHANNA, COUNCIL ON ENERGY, ENVIRONMENT AND WATER (CEEW)",
        "img": "/Ritikaa.jpg",
        "text": "Shortly after GGI, I joined Council on Energy, Environment and Water(CEEW). <br><br> I got introduced to GGI through a competition that was being held by GGI.It was a national - level policy consulting challenge, and a couple of my friends and I participated together.It went really well for me, and I also got introduced to GGI Masterclasses through that competition.<br><br> My first GGI masterclass was Management Consulting and Sustainability, and that was the first time I got introduced to the world of Management Consulting.I was in my final year of Economics and I didn't have much exposure to Management Consulting or the Corporate world for that matter. <br><br>  The entire 10 hours were so informative and by the end, I realized that was the most productive Sunday I have ever had in my life! Soon after, I applied for the fellowship, and I was fortunate enough to get selected.The following months of the GGI fellowship were such an enriching experience for me."
    }
]

const data2 = [
    {
        "id": 1,
        "title": "SAIYAM HOTA, BAIN & COMPANY",
        "img": "/sayam.jpg",
        "text": "After GGI, I will join Bain & Company. I found out about the GGI and as someone who was interested in the consulting space I thought it would be a great opportunity to get knowledge about not just consulting but all the fields and also to network with people from diverse backgrounds.<br><br> Mainly, I think GGI is the strongest community one can get to be a part of. What I like the most is the diversity, and when all of us come together to solve problems you get a plethora of perspectives you could never imagine. Just interacting and solving problems with such people you gain lots of learnings from their perspective."
    },
    {
        "id": 2,
        "title": "SHREYA SAPRU, SAMAGRA | TRANSFORMING GOVERNANCE",
        "img": "/shreyas.jpg",
        "text": `I would definitely like to say that in my entire process of going through interview rounds and even otherwise, I had structured my answers and GGI definitely has had a big role to play.<br><br>During my written round interview with OSD to Jayant Sinha also, I was asked an assignment, one of which had to do with mitigation of climate change- a topic my team and I had worked on this particular topic on a&nbsp;<a href="https://www.linkedin.com/feed/hashtag/?keywords=ggiprojects&highlightedUpdateUrns=urn%3Ali%3Aactivity%3A6944128850427621376" rel="noreferrer noopener" target="_blank">#GGIprojects</a>- so that really helped me because I already had a perspective on what the issue was and I could structure my answer- given the limited time frame I had.<br><br>Shatakshi was also kind enough to respond to my emails throughout my rounds and guided me factors that would majorly play a role. &quot;<br><br>Question- One word that would describe my GGI experience?<br><br>&quot;Fascinating.<br><br>Yeah, I think it would be fascinating because of the Masterclasses. All the topics that we were going through were quite fascinating, be it&nbsp;<a href="https://www.linkedin.com/feed/hashtag/?keywords=policy&highlightedUpdateUrns=urn%3Ali%3Aactivity%3A6944128850427621376" rel="noreferrer noopener" target="_blank">#Policy</a> or&nbsp;<a href="https://www.linkedin.com/feed/hashtag/?keywords=impactinvesting&highlightedUpdateUrns=urn%3Ali%3Aactivity%3A6944128850427621376" rel="noreferrer noopener" target="_blank">#ImpactInvesting</a> or&nbsp;<a href="https://www.linkedin.com/feed/hashtag/?keywords=managementconsulting&highlightedUpdateUrns=urn%3Ali%3Aactivity%3A6944128850427621376" rel="noreferrer noopener" target="_blank">#ManagementConsulting</a>, but at the same time I was fascinated by the kind of community that was being built of care and of kindness and that&apos;s very rare.<br><br>I think that&apos;s something that&apos;s really a big differentiator.<br><br>My advice while welcoming new the class of 2022 at GGI would be to go ahead with a very open mind and to learn. It&apos;s okay to make mistakes during your class or even during the zoom or breakout rooms. Learn from your peers and yes, make friends, make a lot of them.<br><br>Develop your networks through GGI because a lot of opportunities come your way also. But also remember to give back to the community in any way that you could by supporting another peer or just giving a heads up on an opportunity that you might have in your organization but centrally go there to learn with an open mind &nbsp;`
    },
    {
        "id": 3,
        "title": "ANSH AGGARWAL, MCKINSEY & CO",
        "img": "/ansh.jpg",
        "text": "Shortly after GGI, I got placed in&nbsp;McKinsey &amp; Company. In fact, I will be moving to Mumbai to work as a Business Analyst. Also after the masterclass, having won the EY Scholarship for entrepreneurship, I completed an internship at EY Global as well. [...] GGI&apos;s prestigious Policy Consulting Masterclass definitely helped me navigate through the recruitment process.</p>"
    },
    {
        "id": 4,
        "title": "PALAK ARORA, ALBRIGHT STONEBRIDGE GROUP, DELLOITE",
        "img": "/palak.jpg",
        "text": "Soon after GGI, I actively pursued a career in Public Policy by associating with the&nbsp;Albright Stonebridge Group.&nbsp;Thereafter I began to work with&nbsp;Deloitte as an Analyst in their Government advisory division.<br><br>GGI has been tremendously helpful in providing the right direction to my career. The art of structuring one&apos;s thoughts and the sheer will to learn has enriched my experience of growth. My favorite aspect of GGI&apos;s program is Wiggly and Networking. It&apos;s amazing to see how a collaborative community like GGI&apos;s can foster growth amongst the members.<br><br>No matter what one&apos;s career goals are, being part of the GGI community is certainly an extremely valuable experience. Naman and Shatakshi are great mentors and have innumerable learnings to offer"
    },
    {
        "id": 5,
        "title": "CHRIS ASHLEY PINTO, MENTERRA VENTURES",
        "img": "/chris.jpg",
        "text": `&quot;Shortly after GGI, I got Impact Investment offer from&nbsp;<a href="https://www.linkedin.com/company/menterra-venture-advisors/" rel="noreferrer noopener" target="_blank">Menterra Ventures</a><br><br>&quot;I actually used what I learned at GGI,within GGI, to get a job by GGI.<br><br>During my interview round, I was asked about a strategy case- the case became pretty easy because I had already completed my GGI fellowship. Having worked with Shreya (GGI mentor) on a Consulting Style white Paper allowed me to put the whole framework into practice.<br><br>GGI Fellowship helped fill my skills gaps as my expertise lay on the quantitative side earlier since I had gotten qualifications such as CFA, FRM, and others, but I was missing qualitative nuance in my analysis. And I had actually joined GGI to fill that gap.<br><br>I&apos;m also glad that my fellowship helped me a great deal to grab this opportunity.&quot;`
    },
    {
        "id": 6,
        "title": "Niharika srivastava, ipe global limited",
        "img": "/niharika.jpg",
        "text": `GGI has contributed greatly towards reshaping my perspective about my career ingraining an attitude of perpetual learning. I remember always looking forward to the masterclass weekends because they would simply be power-packed, learning-filled days.&nbsp;<br><br>With the wonderful community that Shatakshi and Naman have created, GGI gave me a safe space to make mistakes; accept my vulnerabilities, make me self-aware, and give me the confidence to challenge my self-limiting beliefs. Not to mention that the community&rsquo;s diversity has helped me to broaden my horizon and given me the confidence to experiment with various things.&nbsp;`
    },
    {
        "id": 7,
        "title": "Rishabh Jain, InMobi",
        "img": "/rishabh.jpg",
        "text": `Shortly after GGI, I bagged an offer from InMobi for the profile of a Business Analyst in their Bangalore office. Two weeks into the GGI Fellowship, and I bagged this offer.<br><br>Being mentored by leaders like Shatakshi Sharma and Naman Shrivastava at such a young age is no less than a blessing. GGI helped me discover my true self and transform into a mature individual from a college-going &lsquo;kid&rsquo;.`
    },
    {
        "id": 8,
        "title": "PARAM VEER SINGH, CAPACITY BUILDING COMISSION OF INDIA",
        "img": "/paramveer.jpg",
        "text": `&quot;I used to work as a business transformation consultant at EY in their change management department which comes under a larger business consulting umbrella.<br><br>Within a month&apos;s time, I would be joining the Capacity Building Commission which is a flagship body for implementing the Mission Karmayogi, an initiative launched by the Prime Minister&apos;s Office. It will be the first comprehensive and streamlined attempt to prepare a report on the civil services capacity building in India. I find myself fortunate to be a part of the GGI community because this is the first time I really felt being able to engage myself cognitively with my peers, the content, and the ecosystem. I continue to imbibe the learnings and apply them because GGI ensures that you apply them&rdquo;.`
    },
    {
        "id": 9,
        "title": "DISHA MARJANA, ANTARA FOUNDATION",
        "img": "/disha.jpg",
        "text": `Shortly after GGI, I got an offer to join&nbsp;<a href="https://www.linkedin.com/company/antara-foundation/" rel="noreferrer noopener" target="_blank">The Antara Foundation</a>.<br><br>&quot;Before joining GGI, I constantly felt that I have not done enough in life. I had been planning to do my MBA for the last 4 years but was not able to get through the GMAT. I felt I was lagging behind in my career, and I was not getting good opportunities.<br><br>At this stage, I came across GGI and I could relate to the founder&apos;s journey because I was going through the exact same journey. That was my tipping point which led me to apply for GGI Fellowship.&nbsp;<br><br>After my GGI Fellowship interview, I was happily surprised to find that I had cleared the interview and got a shortlist!&nbsp;<br><br>My journey with GGI has been commendable so far. One thing I realised after joining GGI is that Naman and Shatakshi (founders) reinforce that every individual is special, and you can do anything if you put your mind and energy to it. You just need to trust your own self, and keep working on your abilities to become the best version of yourself. That&apos;s exactly what I did.&quot;&nbsp;`
    },
    {
        "id": 10,
        "title": "Ayush Agarwal, eGovernments Foundation",
        "img": "/ayush.jpg",
        "text": `Shortly after GGI, I got selected as a summer intern under the policy initiatives team at eGovernments Foundation. I will be joining the non-profit organisation in May this year. The first masterclass I attended on Product Management and Tech Ethics helped me gain a wider perspective of the complementarity of soft and hard skills. My key learning from the masterclass was that sustainability needs to be at the forefront of product innovation.&nbsp;The policy consulting masterclass helped me direct my efforts towards this field.<br><br> I have been in touch with the GGI community with the help of regular inner circle meetings and networking events which helped me finally land an internship in my area of interest. The co-founders place great importance on mental well-being which has enabled me to be more confident, accepting and strong.`
    }
]
const data3 = [
    {
        "id": 1,
        "title": `<a href="https://www.linkedin.com/in/averi-chakraborty/" rel="noreferrer noopener" target="_blank">Averi Chakraborty, Boston consulting group (bcg)</a>`,
        "img": "/averi.jpg",
        "text": "&quot; Hi, Naman and Shatakshi hope you both are doing fine :)&nbsp;</p><p><br>Have really been enjoying your posts on LinkedIn and Instagram, a big shoutout for that.</p><p><br>Also, wanted to inform you that I would be joining BCG the coming month and this probably would not have been possible without GGI by my side. Thanks for building this community :) &quot;"
    },
    {
        "id": 2,
        "title": `<a href="https://www.linkedin.com/in/aditya510/" rel="noreferrer noopener" target="_blank">aditya bansal, bain &amp; company</a>`,
        "img": "/aditya.jpg",
        "text": "&quot;Hi Shatakshi, I got into&nbsp;Bain!&nbsp;I had it my top preference within consulting, Also got an offer to work as a trader in Amsterdam.&nbsp;</p><p><br></p><p>Thank you for guidance and support&quot;"
    },
    {
        "id": 3,
        "title": "Tushar Bagrodia, Kearney India",
        "img": "/tushar.jpg",
        "text": "Shortly after GGI, I was offered a role by&nbsp;Kearney India. The GGI Masterclass enabled me to develop a more holistic view of the manner in which public sector works in our country and the challenges that arise while working to create an impact with them.</p><p>&nbsp;</p><p>The first time I was introduced to case interviews was also during the GGI Masterclass on my campus. I was able to understand the problems better and develop structured solutions which made me stand out."
    },
    {
        "id": 4,
        "title": "MAHEK JAIN, BAIN &amp; COMPANY",
        "img": "/mahek.jpg",
        "text": `Shortly after GGI, I bagged a Management Consultant offer at&nbsp;<a href="https://www.linkedin.com/company/bain-and-company/" rel="noreferrer noopener" target="_blank">Bain &amp; Company</a>, and Product Management offer at&nbsp;<a href="https://www.linkedin.com/company/zomato/" rel="noreferrer noopener" target="_blank">Zomato</a>.&nbsp;<br><br>&quot;I am a final year Mechanical Engineering student at&nbsp;<a href="https://www.linkedin.com/company/delhi-technological-university-formerly-dce/" rel="noreferrer noopener" target="_blank">Delhi Technological University (Formerly DCE)</a>. I have always been interested in Management Consulting and Product Management. Interestingly, I was also an employee at Global Governance Initiative (GGI), which was a fantastic experience as I got to learn a lot during my 7-month stint at GGI.&nbsp;<br><br>I recently received a Management Consulting offer from Bain &amp; Company, and also a Product Management Internship offer from Zomato.&quot;&nbsp;`
    },
    {
        "id": 5,
        "title": `<a href="https://www.linkedin.com/in/rahul-prasad-289422178/" rel="noreferrer noopener" target="_blank">Rahul Prasad, Kearney India</a>`,
        "img": "/rahul.jpg",
        "text": "Shortly after GGI, I got placed at&nbsp;Kearney India. This was possible due to GGI&rsquo;s prestigious Masterclass. It was a stepping stone for me, where I was exposed to the consulting world, and learned the tips and tricks that I could apply in the consulting world. Shatakshi&rsquo;s mock interviews were also very helpful during my placement season.</p><p>&nbsp;</p><p>I was taught to approach problems in real life scenarios from the best leaders in the game. I was among one of the 5 people from my college to be shortlisted for the coveted EY Global Scholarship Internship Opportunity, and I was able to apply the knowledge that I gained from the Masterclass there as well."
    },
    {
        "id": 6,
        "title": `<a href="https://www.linkedin.com/in/swatisachdeva-/" rel="noreferrer noopener" target="_blank">Swati Sureka, auctus advisors, Bain &amp; Company job offer</a>`,
        "img": "/swati.jpg",
        "text": "I don&apos;t think getting an offer from Bain could have been possible without the community and at the end of my journey, I had offers from 3 Management Consulting firms.</p><p>&nbsp;</p><p>Today, I am a Management Consultant at Auctus Advisors and have been working there for 7 months now before that I was an account strategist at InMobi which was something I joined right after under graduation in Commerce from SRCC. I was a part of the first batch of Impact Scholars, and it was the right thing for me that came at a right time. I attended all the five master classes, and all of those were amazing, management consulting masterclass was one I really liked and I felt it was something I really wanted to work upon.<br><br>GGI has been the most wonderful experience of my life. I was confused during my bachelor&rsquo;s to immediately go for CAT and do my MBA or to switch to management consulting. I remember it was my first conversation with Shatakshi where she shared her personal experience where she mentioned how she had changed her job and you should definitely do so if you have a good reason to. I remember Shatakshi telling me how to apply and approach the interviews and the lovely support of people in the GGI community. I had superstars helping me with CV review and case preparation.<br><br>I had two key values I derived from the community.<br><br>Firstly, a learning mindset, learning from scratch about an industry, and different functions and then communicating it to multiple CXOs with confidence felt normal.<br><br>Secondly, helping each other, I couldn&rsquo;t have imagined being part of such a lovely community. I have reached out to people from the community and they have always answered positively. So yes, it has been the best experience of my life so far."
    },
    {
        "id": 7,
        "title": "Anusheela Ghosh, Samagra",
        "img": "/anusheeela.jpg",
        "text": "Shortly after GGI, I bagged an offer Samagra | Transforming Governance. I have recently started my journey at Samagra and am super excited to grow! Upon joining GGI, I took a deep dive into the consulting space. This involved case prep, networking, brushing up on interview skills and so on.&lt;br&gt;<br />&lt;br&gt;<br />&lt;br&gt;<br />All this eventually culminated into bagging offers from DCPCR, GDI and Samagra. The GGI masterclass was the turning point for me where I took the decision to pivot from UPSC to governance consulting. I&#39;m so glad I took the plunge!"
    },
    {
        "id": 8,
        "title": "AKSHAT BANG, TECH MAHINDRA Management consulting ",
        "img": "/akshat.jpg",
        "text": `Shortly after GGI, I joined <a href="https://www.linkedin.com/company/tech-mahindra/" target="_blank" rel="noreferrer noopener">Tech Mahindra</a>&nbsp;Management Consulting Team.<br /><br />Before joining GGI, I was on an exchange program at Toulouse Business School in France pursuing strategy and marketing courses. When the pandemic hit, I came back to my homeland. At this point, I was doing my&nbsp;<a href="https://www.linkedin.com/feed/hashtag/?keywords=mba&amp;highlightedUpdateUrns=urn%3Ali%3Aactivity%3A6949196350186041344" target="_blank" rel="noreferrer noopener">#MBA</a>&nbsp;from home and I was disappointed that my Master&rsquo;s experience was going down the drain. That is when I thought of taking up a GGI to enhance my skills, as my learning was getting stagnated in my online MBA formal degree and I was not feeling that I was learning practical skills.&nbsp;<br /><br />Soon after, I joined&nbsp;<a href="https://www.linkedin.com/feed/hashtag/?keywords=ggi&amp;highlightedUpdateUrns=urn%3Ali%3Aactivity%3A6949196350186041344" target="_blank" rel="noreferrer noopener">#GGI</a>&nbsp;and attended my first and one of the most interesting Masterclass was- Management Communications. The kind of people I got to know in the first class itself made me believe that I am at the right place, and I thoroughly enjoyed the class.<br /><br />I also remember attending a guest speaker session on structured thinking which helped me immensely. I started my GGI journey with the mindset that I want to learn, and enhance my communication and articulation skills.<br /><br />I carefully listened to every input, made well-structured notes, and revised everything I noted down. During one masterclass Shatakshi talked about the issue tree approach. I had previously learnt about the entire concept but the way it was discussed and structured in the GGI coursework was really helpful, and it helped me use the framework for solving real-world problems.<br /><br />That&#39;s precisely what was missing in my traditional MBA coursework.`
    },
    {
        "id": 9,
        "title": "Vidhi Singh, Azim Premji Foundation.",
        "img": "/vidhi.jpg",
        "text": "Shortly after GGI, I secured an offer from Azim Premji Foundation. I started my fellowship at GGI alongside my MA Development program at Azim Premji University, Bangalore. Having been a part of Policy Consulting and Management Communication masterclasses I was exposed to frameworks that helped me understand and tackle issues at the policy level. Better articulation and how to tell your story is something that aided me in putting my volunteering experiences in education well and leading me to secure an offer from Azim Premji Foundation as Field Associate. I would like to express my gratitude to the diverse GGI network and supportive mentors like Naman Shrivastava and Shatakshi Sharma for guiding me throughout."
    },
    {
        "id": 10,
        "title": "Ishita Jain, TresVista",
        "img": "/ishita.jpg",
        "text": "Shortly after GGI, I was offered a role by TresVista.<br><br> My first interaction with GGI was back in January 2020 through the Policy Consulting masterclass, then the Management Consulting masterclass. Now it&#39;s more than a year and I continue to be a part of this immensely talented family. The masterclasses boosted my confidence and made me realise my interest for problem solving and creating impact. This eventually led me to work with Teach For India as a campaign leader, intern with Ernst and Young and get placed in TresVista."
    },

]
const Card = ({ title, img, text }) => {
    return (
        <>
            <div className='mx-4 my-12 flex flex-col lg:flex-row justify-evenly  py-5 border border-black/10 shadow-black/5 shadow-xl rounded-lg'>
                <div className='flex justify-center'>
                    <div className='text-center p-4'>
                        <Image
                            className='rounded-full'
                            src={img}
                            alt='/'
                            width='150'
                            height='150'
                        />

                        <p className='my-2 underline primary font-bold tracking-tight text-gray-900 dark:text-white max-w-[200px] ' dangerouslySetInnerHTML={{ __html: title }}></p>
                    </div>
                    {/* <p className='text-center text-sm' dangerouslySetInnerHTML={{ __html: slide.org }}></p> */}
                </div>
                <div className='flex-justify center p-4 lg:w-2/3 italic text-sm'>
                    <p className=' ' dangerouslySetInnerHTML={{ __html: text }}></p>
                    <a href="#" className="mt-4 inline-flex items-center py-2 px-3 text-sm text-center text-white bg-red-700 rounded-lg hover:bg-red-800 hover:scale-105 shadow-lg  transition duration-400">
                        Read the full story here
                        <svg aria-hidden="true" className="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                    </a>
                </div>

            </div>


        </>

    )
}



const Employment = () => {
    return (
        <>
            <Hero image={"/reviews.webp"} />
            <Heading>LIFE AFTER GGI</Heading>
            <p className='text-center text-xl mb-12'>HOW WILL GGI TRANSFORM YOUR LIFE ?</p>
            <YouTubeEmbed embedId='0XC2VXBF29g' />

            <div className='mt-24 grid grid-cols-1 sm:grid-cols-2 sm:mx-12'>

                {data1.map((e) => {
                    return (
                        <Card key={e.id} title={e.title} img={e.img} text={e.text} />

                    );
                })}


                {data2.map((e) => {
                    return (
                        <Card key={e.id} title={e.title} img={e.img} text={e.text} />

                    );
                })}
                     {data3.map((e) => {
                    return (
                        <Card key={e.id} title={e.title} img={e.img} text={e.text} />

                    );
                })}

            </div>

            <Heading>Frequently Asked Questions</Heading>
            <Accordion />
            <Footer />
        </>
    )
}

export default Employment