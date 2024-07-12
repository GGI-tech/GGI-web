import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import Image from 'next/image';
import secondarynavbar from '../secondaryNav';
const Navbar = ({applicationbanner}) => {
  const [nav, setNav] = useState(false);
  // const [color, setColor] = useState('transparent');
  // const [textColor, setTextColor] = useState('white');
  // const [img, setImg] = useState("");
  const [color, setColor] = useState('#ffffff');
  const [textColor, setTextColor] = useState('#CF1515');
  const [img, setImg] = useState("/logo.jpg");
  const handleNav = () => {
    setNav(!nav);
  };

  // useEffect(() => {
  //   const changeColor = () => {
  //     if (window.scrollY >= 90) {
  //       setColor('#ffffff');
  //       setTextColor('#000000');
  //       setImg('/logo.jpg');

  //     } else {
  //       setColor('transparent');
  //       setTextColor('#ffffff');
  //       setImg('');
  //     }
  //   };
  //   window.addEventListener('scroll', changeColor);
  // }, []);


  return (
    <div
      style={{ backgroundColor: `${color}` }}
      className='border-gray-200 shadow-black/5 shadow-lg fixed left-0 top-0 w-full z-10'
    >
      {/* top banner */}
      {applicationbanner && secondarynavbar && <div className='w-100 hero'>
        <p className='flex flex-wrap justify-center p-1 font-black text-lg lg:text-2xl text-white '>APPLICATION FOR NEXT COHORT NOW OPEN &nbsp;
          <a href='https://docs.google.com/forms/d/e/1FAIpQLSc0EdeZhxI2OeI5mh8HSUl4ScxHJ56XmvW48bcVzEA2MzZwTw/viewform' target="_blank" rel="noopener noreferrer" className='text-center mt-1 sm:text-base lg:text-2xl px-5 bg-white text-black hover:text-white hover:bg-black font-bold '>APPLY NOW</a></p>
      </div>}

      <div className='sm:mx-12 m-auto flex justify-between gap-2 items-center text-white pr-5 lg:pr-32 py-2'>
        <div className='mx-auto sm:ml-12 pt-2'>
          <Link href='/' passHref>
            <div>
              <Image style={{ cursor: "pointer" }} alt="/" height={50} width={180} src={img} />
            </div>
          </Link>
        </div>
        <ul style={{ color: textColor, letterSpacing: '0.2em' }} className="font-sans font-semibold hidden sm:flex lg:text-[13px]">
          <Link href='/ggi-scholars'>
            <li className='p-4 cursor-pointer  hover:text-black hover:bg-slate-200'>
            MANAGEMENT
            </li>
          </Link>
          <Link href='/ggipolicyscholarsprogram'>
            <li className='p-4 cursor-pointer  hover:text-black hover:bg-slate-200'>
              POLICY
            </li>
          </Link>
          <Link href='/impact-fellowship'>
            <li className='p-4 cursor-pointer   hover:text-black hover:bg-slate-200'>
              FELLOWSHIP
            </li>
          </Link>
          <Link href='https://www.globaltechinitiative.org/gti-ms-scholars'>
            <li className='p-4 cursor-pointer   hover:text-black hover:bg-slate-200'>
              MS
            </li>
          </Link>
          <Link href='http://www.globalmentalhealthinitiative.com/'>
            <li className='p-4 cursor-pointer   hover:text-black hover:bg-slate-200'>
            MENTAL HEALTH
            </li>
          </Link>
          <Link re href='/reviews'>
            <li className='p-4 cursor-pointer   hover:text-black hover:bg-slate-200'>
              EMPLOYMENT REPORT
            </li>
          </Link>
          <li className='group relative inline-block p-4 cursor-pointer   hover:text-black '>
            <span className="group relative inline-block">
              <button className="inline-flex items-center rounded font-semibold ">EXPLORE</button>
              <ul className="absolute hidden pt-1 primary font-medium group-hover:block">
                <Link href="https://www.schrodingerbyggi.org/" target={"_blank"} rel="noopener noreferrer"  ><div className=" whitespace-no-wrap block rounded-t bg-gray-100 py-1 px-4 hover:bg-gray-400" >Free Series</div></Link>
                <Link href="https://www.councilonsustainabledevelopment.org/" ><div className="whitespace-no-wrap block bg-gray-100 py-1 px-6 hover:bg-gray-400 " >Blogs & Research</div></Link>
                <Link href="/careers"><div className="whitespace-no-wrap block rounded-b bg-gray-100 py-1 px-6 hover:bg-gray-400 " >Careers</div></Link>
              </ul>
            </span>
          </li>
        </ul>

        {/* Mobile Button */}
        <div onClick={handleNav} className='block sm:hidden z-10'>
          {nav ? (
            <AiOutlineClose size={25} style={{ color: 'white' }} />// `${textColor}`
          ) : (
            <AiOutlineMenu size={25} style={{ color: 'black' }} />// `${textColor}`
          )}
        </div>
        {/* Mobile Menu */}
        <div
          className={
            nav
              ? 'sm:hidden absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300'
              : 'sm:hidden absolute top-0 left-[-100%] right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300'
          }
        >
          <ul>
            <li onClick={handleNav} className='p-4 border-b hover:text-gray-500'>
              <Link prefetch={false} href='/'>HOME</Link>
            </li>
            <li onClick={handleNav} className='p-4 border-b hover:text-gray-500'>
              <Link prefetch={false} href='/ggi-scholars'>MANAGEMENT</Link>
            </li>
            <li onClick={handleNav} className='p-4 border-b hover:text-gray-500'>
              <Link prefetch={false} href='/ggipolicyscholarsprogram'>POLICY</Link>
            </li>
            <li onClick={handleNav} className='p-4 border-b hover:text-gray-500'>
              <Link prefetch={false} href='/impact-fellowship'>FELLOWSHIP</Link>
            </li>
            <li onClick={handleNav} className='p-4 border-b hover:text-gray-500'>
              <Link prefetch={false} href='https://www.globaltechinitiative.org/'>MS</Link>
            </li>
            <li onClick={handleNav} className='p-4 border-b hover:text-gray-500'>
              <Link prefetch={false} href='http://www.globalmentalhealthinitiative.com/'>MENTAL HEALTH</Link>
            </li>
            <li onClick={handleNav} className='p-4 border-b hover:text-gray-500'>
              <Link prefetch={false} href='/reviews'>EMPLOYMENT REPORT</Link>
            </li>
            <li onClick={handleNav} className='p-4 border-b hover:text-gray-500'>
              <Link prefetch={false} href='https://www.schrodingerbyggi.org' target={"_blank"}>FREE SERIES</Link>
            </li>

            <li onClick={handleNav} className='p-4 border-b hover:text-gray-500'>
              <Link prefetch={false} href='https://www.councilonsustainabledevelopment.org/'>BLOGS AND RESEARCH</Link>
            </li>
            <li onClick={handleNav} className='p-4  hover:text-gray-500'>
              <Link prefetch={false} href='/careers'>CAREERS</Link>
            </li>

          </ul>
        </div>
      </div>{/*yell  */}
    </div>
  );
};

export default Navbar;
