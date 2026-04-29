import React, { useState } from 'react'
import GalleryImg from '../global/GalleryImg';
import img12 from '../../public/12.jpg';
import img13 from '../../public/13.jpg';
import img14 from '../../public/14.jpg';
import img15 from '../../public/janmejaya.jpg';
import img16 from '../../public/16.jpg';
import img17 from '../../public/17.jpg';
import img18 from '../../public/18.jpg';
import img19 from '../../public/ashok.jpg';
import img20 from '../../public/20.jpg';
import img21 from '../../public/21.jpg';
import img22 from '../../public/22.jpg';
import img23 from '../../public/23.jpg';
import img24 from '../../public/24.jpg';
import img25 from '../../public/25.jpg';
import img26 from '../../public/26new.png';
import img27 from '../../public/letsgo.png';
import img28 from '../../public/28.jpg';
import img29 from '../../public/29.jpg';

const defaultData = [
  { img: img13, caption: "Ex Asia Chairman, Blackrock" },
  { img: img12, caption: "Ex-Global CEO, Mckinsey & Co" },
  { img: img14, caption: "Ex-BCG India Chairman & Member, Planning Commission" },
  { img: img15, caption: "Current BCG India Chairman" },
  { img: img16, caption: "Managing Partner, Promethos Capital" },
  { img: img17, caption: "Global Chairman, BCG Henderson Institute" },
  { img: img25, caption: "Minister in Malaysia" },
  { img: img19, caption: "Former Election Commissioner- Finance Secretary" },
  { img: img20, caption: "Partner BCG, Social Impact Practice" },
  { img: img29, caption: "Former COO, UNICEF (Generation Unlimited)" },
  { img: img22, caption: "Dean, IBGC Fletcher School of Law" },
  { img: img23, caption: "Former Cabinet Secretary, Govt. of India" },
  { img: img24, caption: "CEO, Arthur D. Little, South Asia & India" },
  { img: img18, caption: "President, Amazon AWS South Asia" },
  { img: img26, caption: "Chairman, Founder, Aavishkar Group" },
  { img: img27, caption: "Founding Partner, Bain & Co. | Light Speed Ventures" },
  { img: img28, caption: "Ex NDTV Host, Ex- Bain Consultant" },
  { img: img21, caption: "BCG, Managing Director & Senior" },
];

const Gallery = ({ data = defaultData }) => {
  const [isOpened, setIsOpened] = useState(false);

  const globalConsulting = data.slice(0, 6);
  const policyMakers = data.slice(6, 12);
  const corporateLeaders = data.slice(12, data.length);

  function toggle() {
    setIsOpened(prev => !prev);
  }

  return (
    <div className="md:w-3/4 mx-auto text-center md:py-5">
      {/* ---------- Global Consulting Leaders ---------- */}
      <div className="my-10">
        <h2 className="text-xl md:text-2xl font-bold font-sans mb-6 text-gray-800">Global Consulting Leaders</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-5 lg:gap-10 p-4">
          {globalConsulting.map((item, ind) => (
            <GalleryImg key={ind} socialImg={item.img} caption={item.caption} />
          ))}
        </div>
      </div>

      {/* ---------- Policy Makers & Bureaucrats ---------- */}
      <div className="my-10">
        <h2 className="text-xl md:text-2xl font-bold font-sans mb-6 text-gray-800">Policy Makers & Bureaucrats</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-5 lg:gap-10 p-4">
          {policyMakers.map((item, ind) => (
            <GalleryImg key={ind} socialImg={item.img} caption={item.caption} />
          ))}
        </div>
      </div>

      {/* ---------- Corporate & Investment Leaders ---------- */}
      <div className="my-10">
        <h2 className="text-xl md:text-2xl font-bold font-sans mb-6 text-gray-800">Corporate & Investment Leaders</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-5 lg:gap-10 p-4">
          {corporateLeaders.map((item, ind) => (
            <GalleryImg key={ind} socialImg={item.img} caption={item.caption} />
          ))}
        </div>
      </div>

      {/* Optional: "Show more" future-proof toggle if needed */}
      {data.length > 18 && !isOpened && (
        <div
          className="text-center text-sm md:text-base text-blue-900 cursor-pointer"
          onClick={toggle}
        >
          Show more..
        </div>
      )}
    </div>
  );
};

export default Gallery;
