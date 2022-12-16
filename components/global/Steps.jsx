import { React, useState } from 'react'
import Container from './Container';
let arr = [false, false, false]

const Steps = ({ data }) => {

    const [isOpened, setIsOpened] = useState(arr);

    function toggle(id) {
        const newarr = isOpened.map((c, i) => {
            if (i === id) {
                // Increment the clicked counter
                return !c;
            } else {
                // The rest haven't changed
                return c;
            }
        });
        console.log(newarr)
        setIsOpened(newarr);
    }
    return (
        <Container>
            {data.map((e) => {
                return (
                    <div className="" key={e.id}>
                        <h2 className='my-10 pink text-xl md:text-2xl flex justify-center' dangerouslySetInnerHTML={{ __html:e.ques}}>
                        </h2>
                        <div className='ans' dangerouslySetInnerHTML={{ __html: e.ans[0] }}>
                        </div>
                        {!isOpened[e.id] && (<p className='text-left text-bold mt-2 text-blue-700' onClick={() => toggle(e.id)}>Learn more ..</p>)}
                        {isOpened[e.id] && (
                            <div dangerouslySetInnerHTML={{ __html: e.ans[1] }}>
                            </div>
                        )}

                    </div>
                );
            })}

        </Container>
    );
}

export default Steps