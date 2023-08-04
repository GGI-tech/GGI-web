import React, { useState } from 'react';
import AccordionLayout from './AccordianLayout/AccordianLayout';
const FAQ = [
    {
        "id": 1,
        "ques": "Which program is the best fit for me?",
        "ans": `Global Governance Initiative is removing barriers to high-quality learning experiences.
        <br><br>      
        A. You can access free recorded MBA in 10 minutes series <u><a href="https://thetrinitybyggi.org/" target="_blank" rel="noreferrer noopener">here</a></u> on the Trinity which will allow you to directly learn MBA lessons in 10 minutes from an Ex BCG consultant on Strategy/ Finance/ Operations etc. free of cost.&nbsp;                
        <br><br>        
        B.&nbsp;</span><u><a href="/ggi-scholars" target="_blank" rel="noreferrer noopener">GGI MBA Scholars</a></u>- Serves as a classic <span style="font-weight:bold;">Alt MBA &amp; Pre MBA,</span> designed specifically for those who wish to pivot their career into management consulting, business strategy, and product management        
        <br><br>        
        <p >C.&nbsp;<u><a href="/impact-fellowship" target="_blank" rel="noreferrer noopener">GGI Impact Fellowship</a></u>-&nbsp; Serves as a classic experiential learning and work-study model, designed specifically for those who are exploring Plan B for Civil Services and looking to pivot their career into <span style="font-weight:bold;">management/impact consulting </span>and policy as you work on projects with mentors from MBB
        <br><br>        
        D.&nbsp;<u><a href="/ggipolicyscholarsprogram" target="_blank" rel="noreferrer noopener">GGI Policy Scholars</a></u>- Serves as a classic<span style="font-weight:bold;">&nbsp;Alt MPP &amp; Pre MPP,</span> designed specifically for those who wish to pivot their career into the<span style="font-weight:bold;"> public policy </span>and<span style="font-weight:bold;">  development sector</span></span>`

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
        "ques":"Am I eligible for the GGI MBA, MPP or Fellowship Program?",
        "ans":`The pre-requisites of Global Governance Initiative Programs are as below :<br><br>
         1. <u>Interested in pursuing a career</u> in Management Consulting, Public Policy or Product Management.<br><br>
         2. <u>Below the age of 34- Global Governance is a mission-oriented organization</u> with an aim to empower youngsters and women to have a seat on the table in business and policy roles. If you are above 35 years of age, we suggest not applying because the program has been tailor-made for young professionals at this stage <br><br>
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
                <br><br>You can access all these 9 practical Masterclasses by applying for GGI MBA Scholars program <u><a href="https://docs.google.com/forms/d/e/1FAIpQLSfWPZ5mDyvjjXCBVJJ8Lhtmk3QQIVg-jmrpe6SrNa2gfMgmpg/viewform" target="_blank" rel="noreferrer noopener">here.</a></u>
                `
    },
    {
        "id": 7,
        "ques": "What are the hiring opportunities via GGI Programs?",
        "ans": `GGI also has <span class="font-bold">actively partnered with top hiring consulting/ policy/ product management partners</span> such as Samagra Governance, Sattva Consulting, BCG Social Impact, Leading Tech Ventures in the space of social impact, consulting, and product management roles. 
                <br><br>
                These hiring partners trust the GGI selection and learning process because of which they periodically hire from the close community of the Global Governance Initiative! If selected, you'd be invited for sessions by our hiring partners periodically and invited to submit your applications by our employers. 
                <br><br>
                To become part of the special hiring pool, you can apply to GGI MBA Scholars Program <u><a href="https://docs.google.com/forms/d/e/1FAIpQLSfWPZ5mDyvjjXCBVJJ8Lhtmk3QQIVg-jmrpe6SrNa2gfMgmpg/viewform" target="_blank" rel="noreferrer noopener">here.</a></u>`
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