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

  const [dropdownWorking, setDropdownWorking] = useState(false);
  const [dropdownCollege, setDropdownCollege] = useState(false);
  const [dropdownExecutive, setDropdownExecutive] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };

  const toggleDropdownWorking = () => setDropdownWorking(!dropdownWorking);
  const toggleDropdownCollege = () => setDropdownCollege(!dropdownCollege);
  const toggleDropdownExecutive = () => setDropdownExecutive(!dropdownExecutive);

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

      <div className='sm:mx-12 m-auto flex justify-between gap-2 items-center text-white pr-5 lg:pr-10 py-2'>
        <div className='mx-auto sm:ml-12 pt-2'>
          <Link href='/' passHref>
            <div>
              <Image style={{ cursor: "pointer" }} alt="/" height={50} width={180} src={img} />
            </div>
          </Link>
        </div>
        <ul style={{ color: textColor, letterSpacing: '0.1em' }} className="font-sans font-semibold hidden sm:flex lg:text-[13px]">
          {/*
          <Link href='/ggi-scholars'>
            <li className='p-4 cursor-pointer  hover:text-black hover:bg-slate-200'>
            MBA
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
          <Link href='https://www.globalgovernanceinitiative.org/executivemanagement'>
            <li className='p-4 cursor-pointer   hover:text-black hover:bg-slate-200'>
              EXECUTIVE MBA
            </li>
          </Link>
          */}
          <li className='group relative inline-block p-4 cursor-pointer hover:text-black'>
            <span className="group relative inline-block">
              <button className="inline-flex items-center rounded font-semibold ">FOR WORKING PROFESSIONALS</button>
              <ul className="absolute hidden pt-1 primary font-medium group-hover:block">
                <Link href='/ggi-scholars' target="_blank">
                  <a target="_blank" className="whitespace-no-wrap block bg-gray-100 py-1 px-4 hover:bg-gray-400">MBA</a>
                </Link>
                <Link href='/ggipolicyscholarsprogram' target="_blank">
                  <a target="_blank" className="whitespace-no-wrap block bg-gray-100 py-1 px-4 hover:bg-gray-400">POLICY</a>
                </Link>
                <Link href='/impact-fellowship' target="_blank">
                  <a target="_blank" className="whitespace-no-wrap block bg-gray-100 py-1 px-4 hover:bg-gray-400">FELLOWSHIP</a>
                </Link>
                {/*<Link href='https://www.globaltechinitiative.org/gti-ms-scholars' target="_blank">
                  <li className="whitespace-no-wrap block bg-gray-100 py-1 px-4 hover:bg-gray-400">
                    MS SCHOLARS
                  </li>
                </Link>*/}
                <a href='https://www.globaltechinitiative.org/gti-ms-scholars' target="_blank" rel="noreferrer" className="whitespace-no-wrap block bg-gray-100 py-1 px-4 hover:bg-gray-400">
                    MS SCHOLARS
                  </a>

                {/*<Link href='https://www.globaltechinitiative.org/feynmanfellowship' target="_blank">
                  <li className="whitespace-no-wrap block bg-gray-100 py-1 px-4 hover:bg-gray-400">
                    FEYNMAN FELLOWSHIP
                  </li>
                </Link>*/}

                <a href='https://www.globaltechinitiative.org/feynmanfellowship' target="_blank" rel="noreferrer" className="whitespace-no-wrap block bg-gray-100 py-1 px-4 hover:bg-gray-400">
                        FEYNMAN FELLOWSHIP
                      </a>
              </ul>
            </span>
          </li>

          <li className='group relative inline-block p-4 cursor-pointer hover:text-black'>
            <span className="group relative inline-block">
              <button className="inline-flex items-center rounded font-semibold ">FOR COLLEGE STUDENTS</button>
              <ul className="absolute hidden pt-1 primary font-medium group-hover:block">
                <Link href='/ggi-scholars'>
                  <a target="_blank" className="whitespace-no-wrap block bg-gray-100 py-1 px-4 hover:bg-gray-400">PRE-MBA</a>
                </Link>
                <Link href='/impact-fellowship'>
                  <a target="_blank" className="whitespace-no-wrap block bg-gray-100 py-1 px-4 hover:bg-gray-400">IMPACT FELLOWSHIP</a>
                </Link>
                <a href='https://www.globaltechinitiative.org/feynmanfellowship' target="_blank" rel="noreferrer" className="whitespace-no-wrap block bg-gray-100 py-1 px-4 hover:bg-gray-400">
                        FEYNMAN AI FELLOWSHIP
                  </a>
              </ul>
            </span>
          </li>

          <li className='group relative inline-block p-4 cursor-pointer hover:text-black'>
            <span className="group relative inline-block">
              <button className="inline-flex items-center rounded font-semibold ">FOR SENIOR EXECUTIVES</button>
              <ul className="absolute hidden pt-1 primary font-medium group-hover:block">
                <Link href='https://www.globalgovernanceinitiative.org/executivemanagement'>
                  <a target="_blank" className="whitespace-no-wrap block bg-gray-100 py-1 px-4 hover:bg-gray-400">EXECUTIVE MBA</a>
                </Link>
              </ul>
            </span>
          </li>



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
          {/* <ul>
            <li onClick={handleNav} className='p-4 border-b hover:text-gray-500'>
              <Link prefetch={false} href='/'>HOME</Link>
            </li>
            <li onClick={handleNav} className='p-4 border-b hover:text-gray-500'>
              <Link prefetch={false} href='/ggi-scholars'>MBA</Link>
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
              <Link prefetch={false} href='/executivemanagement'>EXECUTIVE MBA</Link>
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

          </ul> */}
          <ul className='text-white'>
            <li onClick={handleNav} className='p-4 border-b hover:text-gray-500'>
              <Link prefetch={false} href='/'>HOME</Link>
            </li>
            {/* Mobile dropdown for "For Working Professionals" */}
            <li onClick={toggleDropdownWorking} className='p-4 cursor-pointer'>
              <button className="inline-flex items-center rounded font-semibold">FOR WORKING PROFESSIONALS</button>
              {dropdownWorking && (
                <ul className="pt-1 bg-black text-white font-medium">
                  <Link prefetch={false} href='/ggi-scholars' target="_blank">
                    <a className="block bg-gray-700 py-1 px-4 hover:bg-gray-800">MBA</a>
                  </Link>
                  <Link prefetch={false} href='/ggipolicyscholarsprogram' target="_blank">
                    <a className="block bg-gray-700 py-1 px-4 hover:bg-gray-800">POLICY</a>
                  </Link>
                  <Link prefetch={false} href='/impact-fellowship' target="_blank">
                    <a className="block bg-gray-700 py-1 px-4 hover:bg-gray-800">FELLOWSHIP</a>
                  </Link>
                  <a href='https://www.globaltechinitiative.org/gti-ms-scholars' target="_blank" rel="noreferrer" className="block bg-gray-700 py-1 px-4 hover:bg-gray-800">
                    MS SCHOLARS
                  </a>
                  <a href='https://www.globaltechinitiative.org/feynmanfellowship' target="_blank" rel="noreferrer" className="block bg-gray-700 py-1 px-4 hover:bg-gray-800">
                    FEYNMAN FELLOWSHIP
                  </a>
                </ul>
              )}
            </li>
            {/* Mobile dropdown for "For College Students" */}
            <li onClick={toggleDropdownCollege} className='p-4 cursor-pointer'>
              <button className="inline-flex items-center rounded font-semibold">FOR COLLEGE STUDENTS</button>
              {dropdownCollege && (
                <ul className="pt-1 bg-black text-white font-medium">
                  <Link prefetch={false} href='/ggi-scholars'>
                    <a className="block bg-gray-700 py-1 px-4 hover:bg-gray-800">PRE-MBA</a>
                  </Link>
                  <Link prefetch={false} href='/impact-fellowship'>
                    <a className="block bg-gray-700 py-1 px-4 hover:bg-gray-800">IMPACT FELLOWSHIP</a>
                  </Link>
                  <a href='https://www.globaltechinitiative.org/feynmanfellowship' target="_blank" rel="noreferrer" className="block bg-gray-700 py-1 px-4 hover:bg-gray-800">
                    FEYNMAN AI FELLOWSHIP
                  </a>
                </ul>
              )}
            </li>
            <li onClick={toggleDropdownCollege} className='p-4 cursor-pointer'>
              <button className="inline-flex items-center rounded font-semibold">FOR SENIOR EXECUTIVES</button>
              {dropdownCollege && (
                <ul className="pt-1 bg-black text-white font-medium">
                  <Link prefetch={false} href='/ggi-scholars'>
                    <a className="block bg-gray-700 py-1 px-4 hover:bg-gray-800">EXECUTIVE MBA</a>
                  </Link>
                </ul>
              )}
            </li>
            <li onClick={handleNav} className='p-4 border-b hover:text-gray-500'>
              <Link prefetch={false} href='/reviews'>Employment Report</Link>
            </li>
            <li onClick={toggleDropdownCollege} className='p-4 cursor-pointer'>
              <button className="inline-flex items-center rounded font-semibold">EXPLORE</button>
              {dropdownCollege && (
                <ul className="pt-1 bg-black text-white font-medium">
                  <Link prefetch={false} href='https://www.councilonsustainabledevelopment.org/'>
                    <a className="block bg-gray-700 py-1 px-4 hover:bg-gray-800">Blogs & Research</a>
                  </Link>
                  <Link prefetch={false} href='https://www.schrodingerbyggi.org/'>
                    <a className="block bg-gray-700 py-1 px-4 hover:bg-gray-800">Free Series</a>
                  </Link>
                  <Link prefetch={false} href='/careers'>
                    <a className="block bg-gray-700 py-1 px-4 hover:bg-gray-800">Careers</a>
                  </Link>
                </ul>
              )}
            </li>
          </ul>
        </div>
      </div>{/*yell  */}
    </div>
  );
};

export default Navbar;
