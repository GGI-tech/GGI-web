import {React, useState} from 'react'
import AccordionLayout from './AccordianLayout/AccordianLayout';
const Steps = ({data}) => {
    const [activeIndex, setActiveIndex] = useState(3);

    return (
        <div className='flex flex-col justify-center items-center'>
            {data.map((e) => {
                return (
                    <AccordionLayout key={e.id}
                        title={e.ques}
                        children={e.ans}
                        index={e.id}
                        activeIndex={activeIndex}
                        setActiveIndex={setActiveIndex} />

                );
            })}

        </div>
    );
}

export default Steps