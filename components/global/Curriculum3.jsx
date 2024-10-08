// const Curriculum3 = ({ data }) => {
//     // Split the data into two sections
//     const firstRow = data.slice(0, 4);  // First 4 items for the first row
//     const secondRow = data.slice(4);    // Remaining items for the second row

//     return (
//         <div className='lg:w-5/6 2xl:w-2/3 mx-auto p-4'>
//             {/* First Row: 4 Columns on larger screens, 2 columns on smaller screens */}
//             <div className='grid grid-cols-2 md:grid-cols-4 gap-14 lg:gap-10 mb-16'>
//                 {firstRow.map((e, i) => (
//                     <div key={i} className='text-center'>
//                         <p className='pink font-bold text-xl h-24 mb-3' dangerouslySetInnerHTML={{ __html: e.title }}></p>
//                         <p className="italic">{e.description}</p>
//                     </div>
//                 ))}
//             </div>

//             {/* Second Row: 5 Columns on larger screens, 2 columns on smaller screens */}
//             <div className='grid grid-cols-2 md:grid-cols-4 gap-14 lg:gap-10'>
//                 {secondRow.map((e, i) => (
//                     <div
//                         key={i}
//                         className={`text-center ${
//                             // For large screens (lg:), place content in columns 2 and 3
//                             i === 0 ? 'lg:col-start-2' : i === 1 ? 'lg:col-start-3' : 'lg:hidden'
//                         }`}
//                     >
//                         <p className='pink font-bold text-xl h-24 mb-3' dangerouslySetInnerHTML={{ __html: e.title }}></p>
//                         <p className="italic">{e.description}</p>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// }

// export default Curriculum3;

const Curriculum3 = ({ data }) => {
    // Split the data into two sections
    const firstRow = data.slice(0, 4);  // First 4 items for the first row
    const secondRow = data.slice(4);    // Remaining items for the second row

    return (
        <div className='lg:w-5/6 2xl:w-2/3 mx-auto p-4'>
            {/* First Row: 4 Columns on larger screens, 2 columns on smaller screens */}
            <div className='grid grid-cols-2 md:grid-cols-4 gap-14 lg:gap-10 mb-16'>
                {firstRow.map((e, i) => (
                    <div key={i} className='text-center'>
                        <p className='pink font-bold text-xl h-24 mb-3' dangerouslySetInnerHTML={{ __html: e.title }}></p>
                        <p className="italic">{e.description}</p>
                    </div>
                ))}
            </div>

            {/* Second Row: 3 Columns on larger screens, 2 columns on smaller screens */}
            <div className='grid grid-cols-2 md:grid-cols-3 gap-14 lg:gap-10'>
                {secondRow.map((e, i) => (
                    <div key={i} className='text-center'>
                        <p className='pink font-bold text-xl h-24 mb-3' dangerouslySetInnerHTML={{ __html: e.title }}></p>
                        <p className="italic">{e.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Curriculum3;
