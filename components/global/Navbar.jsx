import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import Image from 'next/image';
import secondarynavbar from '../secondaryNav';
const Navbar = () => {
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
      {secondarynavbar && <div className='w-100 hero'>
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
        <ul style={{ color: `${textColor}` }} className='font-semibold hidden sm:flex lg:text-[16px] '>
          <Link href='/ggi-scholars'>
            <li className='p-4 cursor-pointer  hover:text-black hover:bg-slate-200'>
              MBA
            </li>
          </Link>
          <Link href='/ggipolicyscholarsprogram'>
            <li className='p-4 cursor-pointer  hover:text-black hover:bg-slate-200'>
              MPP
            </li>
          </Link>
          <Link href='/impact-fellowship'>
            <li className='p-4 cursor-pointer   hover:text-black hover:bg-slate-200'>
              Fellowship
            </li>
          </Link>
          {/* <Link href='https://www.altiit.com/'>
            <li className='p-4 cursor-pointer   hover:text-black hover:bg-slate-200'>
              ALT IIT
            </li>
          </Link> */}
          <Link re href='/reviews'>
            <li className='p-4 cursor-pointer   hover:text-black hover:bg-slate-200'>
              Employment Report
            </li>
          </Link>
          <li className='group relative inline-block p-4 cursor-pointer   hover:text-black '>
            <span className="group relative inline-block">
              <button className="inline-flex items-center rounded font-semibold ">Explore</button>
              <ul className="absolute hidden pt-1 primary font-medium group-hover:block">
                <Link href="https://www.schrodingerbyggi.org/" target={"_blank"} rel="noopener noreferrer"  ><div className=" whitespace-no-wrap block rounded-t bg-gray-100 py-1 px-4 hover:bg-gray-400" >Free Series</div></Link>
                <Link href="https://theggi.org" ><div className="whitespace-no-wrap block bg-gray-100 py-1 px-6 hover:bg-gray-400 " >Blogs & Research</div></Link>
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
              <Link prefetch={false} href='/'>Home</Link>
            </li>
            <li onClick={handleNav} className='p-4 border-b hover:text-gray-500'>
              <Link prefetch={false} href='/ggi-scholars'>MBA</Link>
            </li>
            <li onClick={handleNav} className='p-4 border-b hover:text-gray-500'>
              <Link prefetch={false} href='/ggipolicyscholarsprogram'>MPP</Link>
            </li>
            <li onClick={handleNav} className='p-4 border-b hover:text-gray-500'>
              <Link prefetch={false} href='/impact-fellowship'>Fellowship</Link>
            </li>
            {/* <li onClick={handleNav} className='p-4 border-b hover:text-gray-500'>
              <Link prefetch={false} href='https://www.altiit.com/'>ALT IIT</Link>
            </li> */}
            <li onClick={handleNav} className='p-4 border-b hover:text-gray-500'>
              <Link prefetch={false} href='/reviews'>Employment Report</Link>
            </li>
            <li onClick={handleNav} className='p-4 border-b hover:text-gray-500'>
              <Link prefetch={false} href='https://www.schrodingerbyggi.org' target={"_blank"}>Free Series</Link>
            </li>

            <li onClick={handleNav} className='p-4 border-b hover:text-gray-500'>
              <Link prefetch={false} href='https://theggi.org'>Blogs and Research</Link>
            </li>
            <li onClick={handleNav} className='p-4  hover:text-gray-500'>
              <Link prefetch={false} href='/careers'>Careers</Link>
            </li>

          </ul>
        </div>
      </div>{/*yell  */}
    </div>
  );
};

export default Navbar;
