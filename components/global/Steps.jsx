import { React, useState } from 'react'
import AccordionLayout from './AccordianLayout/AccordianLayout';
const Steps = ({ data }) => {
    const [activeIndex, setActiveIndex] = useState(3);

    return (
        <div className='flex flex-col justify-center items-center'>
            {data.map((e) => {
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
}

export default Steps