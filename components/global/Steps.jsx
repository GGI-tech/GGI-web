import { React, useState } from 'react'
import Container from './Container';

const Steps = ({ data }) => {
    var arr = [];
    for (var i = 1; i <= data.length; i++) {
        arr.push(false);
    }
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
                        <h2 className='my-10 pink font-sans font-bold text-2xl md:text-2xl flex justify-center' dangerouslySetInnerHTML={{ __html: e.ques }}>
                        </h2>
                        <div className='ans' dangerouslySetInnerHTML={{ __html: e.ans[0] }}>
                        </div>
                        {/* {!isOpened[e.id] && (<p className='text-left text-bold mt-2 text-blue-700' onClick={() => toggle(e.id)}>Learn more ..</p>)} */}
                        {(() => {
  const lineCount = e.body ? e.body.split('<br>').length : 0; // check if e.body exists
  return (
    !isOpened[e.id] &&
    lineCount > 7 && (
      <p
        className="text-left font-bold font-sans mt-2 text-blue-700 cursor-pointer"
        onClick={() => toggle(e.id)}
      >
        Learn more ..
      </p>
    )
  );
})()}

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