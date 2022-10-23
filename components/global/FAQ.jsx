import React from 'react';

import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';

// Demo styles, see 'Styles' section below for some notes on use.
import 'react-accessible-accordion/dist/fancy-example.css';

export default function FAQ() {
    return (
        <div className='mb-48'>
            <Accordion>
                <AccordionItem>
                    <AccordionItemHeading>
                        <AccordionItemButton>
                            1. Which program is the best fit for me?
                        </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                     <div>
                            Global Governance Initiative is removing barriers to high-quality learning experiences.
                     </div>
                     <div>


                            A. You can access free recorded MBA in 10 minutes series here on the Trinity which will allow you to directly learn MBA lessons in 10 minutes from an Ex BCG consultant on Strategy/Finance/Operations etc. free of cost.

                     </div>
                     <div>



                            B. GGI MBA Scholars- Serves as a classic Alt MBA & Pre MBA, designed specifically for those who wish to pivot their career into management consulting, business strategy, and product management

                     </div>
                     <div>
                            C. GGI Impact Fellowship-  Serves as a classic experiential learning and work-study model, designed specifically for those who are exploring Plan B for Civil Services and looking to pivot their career into management/impact consulting and policy as you work on projects with mentors from MBB
                     </div>

                     <div>
                            D. GGI Policy Scholars- Serves as a classic Alt MPP & Pre MPP, designed specifically for those who wish to pivot their career into the public policy and development sector
                     </div>
                    </AccordionItemPanel>
                </AccordionItem>
                <AccordionItem>
                    <AccordionItemHeading>
                        <AccordionItemButton>
                            2. How can I become a GGI Impact fellow?
                        </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                     <div>

                            You can apply directly to the Impact Fellowship Program.  The selection for the impact fellowship is more competitive than the Scholars program. GGI Impact Fellowship is our Executive Crème de la crème of the Global Governance Initiative network on "Wiggly". Through core Masterclasses, flexible curriculum, and impact consulting style projects - Impact Fellowship provides a deep dive into the world of social impact consulting, and international development. It is also more expensive than the Scholars program.
                     </div>
                    </AccordionItemPanel>
                </AccordionItem>
                <AccordionItem>
                    <AccordionItemHeading>
                        <AccordionItemButton>
                            3. What are the program fees?
                        </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                     <div>

                            You can apply directly to the Impact Fellowship Program.  The selection for the impact fellowship is more competitive than the Scholars program. GGI Impact Fellowship is our Executive Crème de la crème of the Global Governance Initiative network on "Wiggly". Through core Masterclasses, flexible curriculum, and impact consulting style projects - Impact Fellowship provides a deep dive into the world of social impact consulting, and international development. It is also more expensive than the Scholars program.
                     </div>
                    </AccordionItemPanel>
                </AccordionItem>
            </Accordion>
        </div>
    );
}