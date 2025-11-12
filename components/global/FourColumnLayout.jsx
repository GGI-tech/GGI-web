import React from 'react'
import Image from 'next/image';


// const FourColumnLayout = ({ data }) => {
//   return (
//     <div className="p-5 md:p-12">
//       <div className="mx-auto w-6/7 lg:w-4/5 xl:w-3/4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-4 primary">
//         {data.map((e) => {
//           return (
//             <div key={e.id} className='flex flex-col text-center mt-6'>
//               <div> <Image placeholder="blur" className='' alt="" src={e.img} /></div>
//               <h2 className='text-xl font-bold h-20 md:h-36 lg:h-28 pt-2 mt-4'>{e.title}</h2>
//               <p className='text-center sm:text-justify px-2' dangerouslySetInnerHTML={{__html:e.body}}></p>
//             </div>
//           );
//         })}

//       </div>
//     </div>
//   )
// }

const FourColumnLayout = ({ data }) => {
  return (
    <div className="p-5 md:p-12">
      <div className="mx-auto w-full lg:w-11/12 xl:w-4/5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-6 primary">
        {data.map((e) => {
          return (
            <div
              key={e.id}
              className="flex flex-col items-center text-center space-y-4"
            >
              <Image
                placeholder="blur"
                className="w-[120px] h-[120px] object-contain mx-auto"
                alt={e.title}
                src={e.img}
              />
              <h2 className="text-lg font-bold font-sans min-h-[60px]">{e.title}</h2>
              <p
                className="text-base text-red-700 px-4"
                dangerouslySetInnerHTML={{ __html: e.body }}
              ></p>
            </div>
          );
        })}
      </div>
    </div>
  );
};


export default FourColumnLayout;





// import React from 'react'
// import Image from 'next/image';

// const FourColumnLayout = ({ data }) => {
//   return (
//     <div className="p-5 md:p-12">
//       <div className="mx-auto w-full lg:w-11/12 xl:w-4/5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-6 primary items-stretch">
//         {data.map((e) => {
//           return (
//             // preserve text-centering and original spacing; use a 3-row grid so things align
//             <div
//               key={e.id}
//               className="grid grid-rows-[160px_minmax(64px,auto)_1fr] items-start text-center space-y-0"
//             >
//               {/* fixed-height image row (keeps original image look but consistent height) */}
//               <div className="flex items-center justify-center overflow-hidden">
//                 <Image
//                   placeholder="blur"
//                   src={e.img}
//                   alt={e.title}
//                   width={300}
//                   height={160}
//                   className="object-cover"
//                 />
//               </div>

//               {/* title row — keep original bold/centering */}
//               <h2 className="text-lg font-bold flex items-center justify-center px-2">
//                 {e.title}
//               </h2>

//               {/* body row — keep original color/class */}
//               <p
//                 className="text-base text-red-700 px-4"
//                 dangerouslySetInnerHTML={{ __html: e.body }}
//               />
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// };

// export default FourColumnLayout;
