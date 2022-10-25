import React, { useState } from 'react';
import AccordionLayout from './AccordianLayout/AccordianLayout';
const FAQ = [
    {
        "id": 1,
        "ques": "Which program is the best fit for me?",
        "ans": `<p>Our competitors charge Rs. 2,00,000 to Rs. 7,00,000. So we decided to try crazy pricing.<strong> We are 90% cheaper than our competitor's price. </strong>We are doing this because we want to make high-quality business and policy education truly accessible to you all and disrupt the space.&nbsp;</span></p>

                 <p>&nbsp;</p>
        
                <p>Or if you don't want to commit, we have no questions ask full refund policy within 6 days of enrollment payment, i.e. if you are selected ( we have &lt;10% selection rate). Either way, you win. To get detailed pricing and information, it is accessible on our application page <u><a href="https://forms.gle/hv12YCeTFmDwFFJD8" target="_blank" rel="noreferrer noopener">here</a></u></p>`
    }
]
const Accordion = () => {
    const [activeIndex, setActiveIndex] = useState(2);

    return (
        <div className='flex flex-col justify-center items-center'>
            <AccordionLayout
                title={FAQ[0].ques}
                index={1}
                activeIndex={activeIndex}
                setActiveIndex={setActiveIndex}
            >
                <div dangerouslySetInnerHTML={{ __html: FAQ[0].ans }}></div>
            </AccordionLayout>

            <AccordionLayout
                title="How can I become a GGI Impact fellow?​"
                index={2}
                activeIndex={activeIndex}
                setActiveIndex={setActiveIndex}
            >
                This is Accordion 2 Content
            </AccordionLayout>
        </div>
    );
};

export default Accordion;