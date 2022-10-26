import React, { useState } from 'react';
import AccordionLayout from './AccordianLayout/AccordianLayout';
const FAQ = [
    {
        "id": 1,
        "ques": "Which program is the best fit for me?",
        "ans": `<p>Global Governance Initiative is removing barriers to high-quality learning experiences.</p>
        <br>        
        <p >A. You can access free recorded MBA in 10 minutes series <u><a href="https://thetrinitybyggi.org/" target="_blank" rel="noreferrer noopener">here</a></u> on the Trinity which will allow you to directly learn MBA lessons in 10 minutes from an Ex BCG consultant on Strategy/Finance/Operations etc. free of cost.&nbsp;</p>                
        <br>        
        <p >B.&nbsp;</span><u><a href="https://www.globalgovernanceinitiative.org/ggi-scholars" target="_blank" rel="noreferrer noopener">GGI MBA Scholars</a></u>- Serves as a classic <span style="font-weight:bold;">Alt MBA &amp; Pre MBA,</span> designed specifically for those who wish to pivot their career into management consulting, business strategy, and product management</p>        
        <br>        
        <p >C.&nbsp;<u><a href="https://www.globalgovernanceinitiative.org/impact-fellowship" target="_blank" rel="noreferrer noopener">GGI Impact Fellowship</a></u>-&nbsp; Serves as a classic experiential learning and work-study model, designed specifically for those who are exploring Plan B for Civil Services and looking to pivot their career into <span style="font-weight:bold;">management/impact consulting </span>and policy as you work on projects with mentors from MBB</p>
        <br>        
        <p>D.&nbsp;<u><a href="https://www.globalgovernanceinitiative.org/ggipolicyscholarsprogram" target="_blank" rel="noreferrer noopener">GGI Policy Scholars</a></u>- Serves as a classic<span style="font-weight:bold;">&nbsp;Alt MPP &amp; Pre MPP,</span> designed specifically for those who wish to pivot their career into the<span style="font-weight:bold;"> public policy </span>and<span style="font-weight:bold;">  development sector</span></span></p>`

    },
    {
        "id": 2,
        "ques": "How can I become a GGI Impact fellow?",
        "ans": `<p >You can apply directly to the <u>Impact&nbsp;<a href="http://globalgovernanceinitiative.org/impact-fellowship" target="_blank" rel="noreferrer noopener">Fellowship Program</a></u>.&nbsp; The selection for the&nbsp;<span style="font-weight:bold;">impact fellowship is more competitive </span>than the Scholars program. GGI Impact Fellowship is our Executive Crème de la crème of the Global Governance Initiative network on "Wiggly". Through core Masterclasses, flexible curriculum, and impact consulting style projects - Impact Fellowship provides a deep dive into the world of social impact consulting, and international development. It is also more expensive than the Scholars program. &nbsp;</span></span></p>`
    },
    {
        "id": 3,
        "ques": "What are the program fees?",
        "ans": `<p>Our competitors charge Rs. 2,00,000 to Rs. 7,00,000. So we decided to try crazy pricing.<strong> We are 90% cheaper than our competitor's price. </strong>We are doing this because we want to make high-quality business and policy education truly accessible to you all and disrupt the space.&nbsp;</span></p>
        <p>&nbsp;</p>
       <p>Or if you don't want to commit, we have no questions ask full refund policy within 6 days of enrollment payment, i.e. if you are selected ( we have &lt;10% selection rate). Either way, you win. To get detailed pricing and information, it is accessible on our application page <u><a href="https://forms.gle/hv12YCeTFmDwFFJD8" target="_blank" rel="noreferrer noopener">here</a></u></p>`
    },
    {
        "id": 4,
        "ques": "What are the program reviews?",
        "ans": `Find the life after GGI stories <u><a href="https://www.globalgovernanceinitiative.org/reviews" target="_blank" rel="noreferrer noopener">here</a></u>`
    },
    {
        "id": 5,
        "ques": "What are GGI Masterclasses?",
        "ans": `<p>We at GGI provide the world's most practical Live and Interactive 9 practical Masterclasses driven by CEOs and Top Industry Professionals. The 9 practical Harvard-style real case-driven practical Masterclasses come along with the GGI Scholars & Fellows Program and are built to help you pivot into your dream careers. They are- <p>
                <p><ul><li>CV Review & Case Interview Prep Masterclass,</li>
                    <li>The MBA for Impact Masterclass,</li>
                    <li>Management Consulting & Sustainability Masterclass,</li>
                    <li>Management Communication Masterclass,</li>
                    <li>Policy Consulting Masterclass, </li>
                    <li>Product Management & Tech Ethics Masterclass,</li>
                    <li>Impact Investing & Entrepreneurship Masterclass, </li>
                    <li>Data Analytics & Emerging Technologies Masterclass, </li>
                    <li>The Liberal Arts Masterclass</li>
                </ul></p>
                <p>During the 9 hours, community members solve cases with the speaker and amongst themselves to build foundational business, policy, and product learnings. </p>
                <p>You can access all these 9 practical Masterclasses by applying for GGI MBA Scholars program here-</p>
                `
    },
    {
        "id": 6,
        "ques": "What are the hiring opportunities via GGI Programs?",
        "ans": `<p>GGI also has <strong>actively partnered with top hiring consulting/policy/product management partners</strong> such as Samagra Governance, Sattva Consulting, BCG Social Impact, Leading Tech Ventures in the space of social impact, consulting, and product management roles. </p>
                <br>
                <p>These hiring partners trust the GGI selection and learning process because of which they periodically hire from the close community of the Global Governance Initiative! If selected, you'd be invited for sessions by our hiring partners periodically and invited to submit your applications by our employers. </p>
                <br>
                <p>To become part of the special hiring pool, you can apply to GGI MBA Scholars Program <u><a href="https://forms.gle/k8bebg3L6vTRG7Ft7" target="_blank" rel="noreferrer noopener">here.</a></u></p>`
    },
    {
        "id": 7,
        "ques": "How can I work for GGI?",
        "ans": `<p>We are always looking for diverse young professionals adept with technology, content, media, and operations roles. If interested, please apply <u> <a href="https://www.globalgovernanceinitiative.org/careers" target="_blank">here.</a></u>  If we are actively hiring and you are shortlisted, we will reach out to you automatically later.</p>`
    }
]
const Accordion = () => {
    const [activeIndex, setActiveIndex] = useState(2);

    return (
        <div className='flex flex-col justify-center items-center'>
            {FAQ.map((e) => {
                return (
                    <AccordionLayout title={e.ques}
                        children={e.ans}
                        index={e.id}
                        activeIndex={activeIndex}
                        setActiveIndex={setActiveIndex} />

                );
            })}

        </div>
    );
};

export default Accordion;