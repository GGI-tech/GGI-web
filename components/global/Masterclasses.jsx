// import Image from 'next/image';
// import m1 from '../../public/m1.jpg';
// import m2 from '../../public/m2.jpg';
// import m3 from '../../public/m3.jpg';
// import m4 from '../../public/m4.jpg';
// import m5 from '../../public/m5.jpg';
// import m6 from '../../public/m6.jpg';
// import m7 from '../../public/m7.jpg';
// import m8 from '../../public/m8.jpg';
// import m9 from '../../public/m9.jpg';

// const data1 = [
//   {
//     'img': m1,
//     'name': "Policy Consulting Masterclass"
//   },
//   {
//     'img': m2,
//     'name': "MBA for Impact Masterclass"
//   },
//   {
//     'img': m3,
//     'name': "The Liberal Arts Masterclass"
//   },
//   {
//     'img': m4,
//     'name': "Management Consulting & Sustainability Masterclass"
//   },
//   {
//     'img': m5,
//     'name': "Data Analytics & Emerging Tech Masterclass"
//   }

// ]

// const data2 = [
//   {
//     'img': m6,
//     'name': "Management Communications Masterclass"
//   },
//   {
//     'img': m7,
//     'name': "CV and Case Interview Prep Masterclass"
//   },
//   {
//     'img': m8,
//     'name': "Impact Investment Masterclass"
//   },
//   {
//     'img': m9,
//     'name': "Product Management & Tech Ethics Masterclass"
//   }
// ]
// const Masterclasses = ({d1=data1, d2=data2}) => {
//   return (
//     <>
//       <div className='p-6 mt-24 hidden sm:flex justify-center '>
//         <div className='flex justify-evenly w-full sm:w-5/6 md:w-4/5 lg:w-3/5 2xl:w-1/2 gap-10 md:gap-20 pink'>
//           {d1.map((item, i) => {
//             return (
//               <div key={i} className='w-22 text-center'>
//                 <Image placeholder="blur" src={item.img} alt='/' />
//                 <p className='text-sm text-center'>{item.name} </p>
//               </div>
//             )
//           })}
//         </div>
//       </div>
//       <div className='my-5 hidden sm:flex justify-center '>
//         <div className='flex justify-evenly w-full sm:w-5/6 md:w-4/5 lg:w-3/5 2xl:w-1/2 gap-10 md:gap-20 pink '>
//           {d2.map((item, i) => {
//             return (
//               <div key={i} className='w-22 text-center'>
//                 <Image placeholder="blur" src={item.img} alt='/' />
//                 <p className='text-sm text-center'>{item.name} </p>
//               </div>
//             )
//           })}
//         </div>
//       </div>
//       <div className='sm:hidden grid grid-cols-3 grid-rows-3 '>
//         {data1.concat(data2).map((item, i) => {
//           return (
//             <div key={i} className='text-center mb-5'>
//               <div className='h-24'><Image placeholder="blur" src={item.img} alt='/' /></div>
//               <p className='text-xs sm:text-sm text-center pink my-4'>{item.name} </p>
//             </div>
//           )
//         })}
//       </div>
//     </>
//   )
// }

// export default Masterclasses

import Image from 'next/image';
import m1 from '../../public/m1.jpg';
import m2 from '../../public/m2.jpg';
import m3 from '../../public/m3.jpg';
import m4 from '../../public/m4.jpg';
import m5 from '../../public/m5.jpg';
import m6 from '../../public/m6.jpg';
import m7 from '../../public/m7.jpg';
import m8 from '../../public/m8.jpg';
import m9 from '../../public/m9.jpg';

const data = [
  { img: m1, name: "Policy Consulting Masterclass" },
  { img: m2, name: "MBA for Impact Masterclass" },
  { img: m3, name: "The Liberal Arts Masterclass" },
  { img: m4, name: "Management Consulting & Sustainability Masterclass" },
  { img: m5, name: "Data Analytics & Emerging Tech Masterclass" },
  { img: m6, name: "Management Communications Masterclass" },
  { img: m7, name: "CV and Case Interview Prep Masterclass" },
  { img: m8, name: "Impact Investment Masterclass" },
  { img: m9, name: "Product Management & Tech Ethics Masterclass" },
];

const Masterclasses = () => {
  const leftColumn = data.slice(0, 4);
  const rightColumn = data.slice(4, 8);
  const bottomCenter = data[8];

  return (
    <div className="flex flex-col items-center mt-24 p-6">
      {/* Grid container with aligned rows */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-20 gap-y-12 w-full sm:w-5/6 md:w-4/5 lg:w-3/5 2xl:w-1/2">
        {/* Left column */}
        <div className="flex flex-col justify-between gap-12">
          {leftColumn.map((item, i) => (
            <div key={i} className="text-center flex flex-col items-center">
              <div className="h-24 flex items-center justify-center">
                <Image placeholder="blur" src={item.img} alt="/" className="mx-auto object-contain" />
              </div>
              <p className="text-sm sm:text-base mt-3">{item.name}</p>
            </div>
          ))}
        </div>

        {/* Right column */}
        <div className="flex flex-col justify-between gap-12">
          {rightColumn.map((item, i) => (
            <div key={i} className="text-center flex flex-col items-center">
              <div className="h-24 flex items-center justify-center">
                <Image placeholder="blur" src={item.img} alt="/" className="mx-auto object-contain" />
              </div>
              <p className="text-sm sm:text-base mt-3">{item.name}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom center */}
      <div className="mt-16 text-center flex flex-col items-center">
        <div className="h-24 flex items-center justify-center">
          <Image placeholder="blur" src={bottomCenter.img} alt="/" className="mx-auto object-contain" />
        </div>
        <p className="text-sm sm:text-base mt-3">{bottomCenter.name}</p>
      </div>
    </div>
  );
};

export default Masterclasses;
