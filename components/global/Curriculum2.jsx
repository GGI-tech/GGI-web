// const Curriculum2 = ({ data }) => {
//   return (
//     <div className="lg:w-5/6 2xl:w-4/5 mx-auto p-4">
//       {/* 3-column layout on desktop, 1-column on mobile */}
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//         {data.map((block, index) => (
//           <div
//             key={index}
//             className="bg-white border border-gray-200 rounded-2xl shadow-md p-8 flex flex-col justify-center hover:shadow-lg transition-shadow duration-300"
//           >
//             {/* Block Title */}
//             <h3 className="text-center text-2xl font-bold mb-6 primary">
//               {block.blockTitle}
//             </h3>

//             {/* Bullet List */}
//             <ul className="list-disc list-inside space-y-3 text-gray-800">
//               {block.items.map((item, i) => (
//                 <li key={i} className="font-medium leading-relaxed">
//                   {item.title}
//                 </li>
//               ))}
//             </ul>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Curriculum2;

const Curriculum2 = ({ data }) => {
  return (
    <div className="lg:w-5/6 2xl:w-4/5 mx-auto p-4">
      {/* 3-column layout on desktop, 1-column on mobile */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {data.map((block, index) => (
          <div
            key={index}
            className="bg-white border border-gray-200 rounded-2xl shadow-md p-8 flex flex-col hover:shadow-lg transition-shadow duration-300"
          >
            {/* Title section (equal height for all cards) */}
            <h3 className="text-center text-2xl font-bold mb-6 primary min-h-[70px] flex items-center justify-center">
              {block.blockTitle}
            </h3>

            {/* Bullet list */}
            <ul className="list-disc list-inside space-y-3 text-gray-800">
              {block.items.map((item, i) => (
                <li key={i} className="font-medium leading-relaxed">
                  {item.title}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Curriculum2;
