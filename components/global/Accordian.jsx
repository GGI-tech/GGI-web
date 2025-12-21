import React, { useState } from 'react';
import AccordionLayout from './AccordianLayout/AccordianLayout';
const FAQ = [
    {
        "id": 1,
        "ques": "Which program is the best fit for me?",
        "ans": `Global Governance Initiative is removing barriers to high-quality learning experiences.
        <br><br>      
        A. &nbsp;</span><u><a href="https://thetrinitybyggi.org/" target="_blank" rel="noreferrer noopener">Free PGP Micro-Learning (Trinity Series)</a></u>- You can access free recorded <span style="font-weight:bold;">PGP-style micro masterclasses</span> on Trinity. Learn core concepts in <span style="font-weight:bold;">strategy, finance, and operations</span> in 10 minutes per lesson, taught by an <span style="font-weight:bold;">ex-BCG consultant</span> - completely free and designed for rapid skill-building.
        <br><br>        
        B.&nbsp;</span><u><a href="/ggi-scholars" target="_blank" rel="noreferrer noopener">GGI Management PGP (Management Track)</a></u>- Serves as an <span style="font-weight:bold;">industry-oriented Post Graduate Programme (PGP)</span> designed for those looking to pivot into <span style="font-weight:bold;">management consulting, business strategy, and product management.</span> Built for ambitious professionals who want rigor, direction, and access - without another traditional degree.        
        <br><br>        
        <p >C.&nbsp;<u><a href="/impact-fellowship" target="_blank" rel="noreferrer noopener">GGI Impact Fellowship (Experiential Track)</a></u>-&nbsp; An <span style="font-weight:bold;">experiential, work-study fellowship model </span>designed for candidates exploring <span style="font-weight:bold;">Plan B pathways beyond Civil Services</span>, while pivoting into <span style="font-weight:bold;">management consulting, impact consulting, and policy</span> through live projects with mentors from <span style="font-weight:bold;">top global consulting firms (including MBB alumni)</span>.
        <br><br>        
        D.&nbsp;<u><a href="/ggipolicyscholarsprogram" target="_blank" rel="noreferrer noopener"> GGI Policy PGP (Policy Track)</a></u>- Serves as an <span style="font-weight:bold;">&nbsp;industry-oriented Post Graduate Programme (PGP)</span> for those aiming to build careers in<span style="font-weight:bold;"> public policy, development, and governance.</span>and<span style="font-weight:bold;"> Designed for practitioners who want real policy fluency-  not another traditional degree.
</span></span>
        <br><br> 
        E.&nbsp;<u><a href="/campusfellowship" target="_blank" rel="noreferrer noopener">GGI Campus Fellowship</a></u>- A fellowship designed for college students who want early exposure to <span style="font-weight:bold;">management consulting, public policy, and impact careers</span>- <i>before</i> graduation.
It builds <span style="font-weight:bold;">thinking, execution, and career readiness</span> at a stage where most students are still guessing.
<br><br>`

    },
    {
        "id": 9,
        "ques": "Is the PGP equivalent to an MBA or MPP?",
        "ans": `No - and that’s intentional.<br/>
GGI does <span style="font-weight:bold;">not</span> claim equivalence to any university degree.<br/>
The PGP is designed as a <span style="font-weight:bold;">parallel, industry-driven pathway</span> for leadership and career acceleration.
</span></span>`
    },
    {
        "id": 2,
        "ques": "How can I become a GGI Impact fellow?",
        "ans": `You can apply directly to the <u>Impact&nbsp;<a href="/impact-fellowship" target="_blank" rel="noreferrer noopener">Fellowship Program</a></u>.&nbsp; The selection for the&nbsp;<span style="font-weight:bold;">impact fellowship is more competitive </span>than the Scholars program. GGI Impact Fellowship is our Executive Crème de la crème of the Global Governance Initiative network on "Wiggly". Through core Masterclasses, flexible curriculum, and impact consulting style projects - Impact Fellowship provides a deep dive into the world of social impact consulting, and international development. It is also more expensive than the Scholars program. &nbsp;</span></span>`
    },
    {
        "id": 3,
        "ques": "What are the program fees?",
        "ans": `Our competitors charge Rs. 3,00,000 to Rs. 7,00,000. So we decided to try crazy pricing.<span class="font-bold">  We are 80% cheaper than our competitor's price.</span> We are doing this because we want to make high-quality business and policy education truly accessible to you all and disrupt the space.
        <br><br>
       Or if you don't want to commit, we have no questions ask full refund policy within 6 days of enrollment payment, i.e. if you are selected (we have &lt;10% selection rate). Either way, you win. To get detailed pricing and information, it is accessible on our application page <u><a href="https://docs.google.com/forms/d/e/1FAIpQLSfWPZ5mDyvjjXCBVJJ8Lhtmk3QQIVg-jmrpe6SrNa2gfMgmpg/viewform" target="_blank" rel="noreferrer noopener">here.</a></u>`
    },
    {
        "id":4,
        "ques":"Am I eligible for the GGI PGP or Impact Fellowship Program?",
        "ans":`The pre-requisites of Global Governance Initiative Programs are as below :<br><br>
         1. <u>Interested in pursuing a career</u> in Leadership, Consulting, Public Policy or Product Management.<br><br>
         2. <u>Global Governance is a mission-oriented organization</u> with an aim to empower professionals and women to have a seat on the table in business and policy roles. <br><br>
         3. <u>Background:</u> GGI is an background-agnostic program. It doesn&apos;t matter whether you are a fresh undergrad with internship experience or the CEO of a startup with entrepreneurial experience. We will cover basics and advanced learning around business, strategy, governance, product and policy. We suggest putting a strong application and welcome you to a beautiful ecosystem as long as you are willing to work hard, learn and thrive.   `
    },
    {
        "id": 5,
        "ques": "What are the program reviews?",
        "ans": `Find the life after GGI stories <u><a href="/reviews" target="_blank" rel="noreferrer noopener">here</a></u>`
    },
    {
        "id": 6,
        "ques": "What are GGI Masterclasses?",
        "ans": `We at GGI provide the world's most practical Live and Interactive 9 practical Masterclasses driven by CEOs and Top Industry Professionals.<span class="font-bold"> The 9 practical Harvard-style real case-driven practical Masterclasses</span> come along with the GGI Scholars & Fellows Program and are built to help you pivot into your dream careers. They are- <br><br>
                <ul><li>CV Review & Case Interview Prep Masterclass,</li>
                    <li>The MBA for Impact Masterclass,</li>
                    <li>Management Consulting & Sustainability Masterclass,</li>
                    <li>Management Communication Masterclass,</li>
                    <li>Policy Consulting Masterclass, </li>
                    <li>Product Management & Tech Ethics Masterclass,</li>
                    <li>Impact Investing & Entrepreneurship Masterclass, </li>
                    <li>Data Analytics & Emerging Technologies Masterclass, </li>
                    <li>The Liberal Arts Masterclass</li>
                </ul><br><br>
                During the 9 hours, community members solve cases with the speaker and amongst themselves to build foundational business, policy, and product learnings. 
                <br><br>You can access all these 9 practical Masterclasses by applying for GGI PGP Scholars program <u><a href="https://docs.google.com/forms/d/e/1FAIpQLSfWPZ5mDyvjjXCBVJJ8Lhtmk3QQIVg-jmrpe6SrNa2gfMgmpg/viewform" target="_blank" rel="noreferrer noopener">here.</a></u>
                `
    },
    {
        "id": 7,
        "ques": "What are the hiring opportunities via GGI Programs?",
        "ans": `GGI also has <span class="font-bold">actively partnered with top hiring consulting/ policy/ product management partners</span> such as Samagra Governance, Sattva Consulting, BCG Social Impact, Leading Tech Ventures in the space of social impact, consulting, and product management roles. 
                <br><br>
                These hiring partners trust the GGI selection and learning process because of which they periodically hire from the close community of the Global Governance Initiative! If selected, you'd be invited for sessions by our hiring partners periodically and invited to submit your applications by our employers. 
                <br><br>
                To become part of the special hiring pool, you can apply to GGI PGP Scholars Program <u><a href="https://docs.google.com/forms/d/e/1FAIpQLSfWPZ5mDyvjjXCBVJJ8Lhtmk3QQIVg-jmrpe6SrNa2gfMgmpg/viewform" target="_blank" rel="noreferrer noopener">here.</a></u>`
    },
    {
        "id": 8,
        "ques": "How can I work for GGI?",
        "ans": `We are always looking for diverse young professionals adept with technology, content, media, and operations roles. If interested, please apply <u> <a href="/careers" target="_blank">here.</a></u>  If we are actively hiring and you are shortlisted, we will reach out to you automatically later.`
    }
]
const Accordion = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <div className='flex flex-col justify-center items-center'>
            {FAQ.map((e) => {
                return (
                    <AccordionLayout key={e.id}
                        title={e.ques}
                        index={e.id}
                        activeIndex={activeIndex}
                        setActiveIndex={setActiveIndex} >
                        {e.ans}
                    </AccordionLayout>

                );
            })}

        </div>
    );
};

export default Accordion;
