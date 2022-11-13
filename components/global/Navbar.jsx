import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import Image from 'next/image';

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
      className='fixed left-0 top-0 w-full z-10'
    >
      <div className='max-w-[1240px] m-auto flex justify-between items-center text-white'>
        <Link href='/'>
          {/* <p style={{ color: `${textColor}` }} className='font-bold text-4xl'>
            Global Governance Initiative
          </p> */}
          <Image style={{ cursor: "pointer" }} height={70} width={160} src={img} />
          {/* <img height={0} src={img} /> */}
        </Link>
        <ul style={{ color: `${textColor}` }} className='font-semibold hidden sm:flex'>
          <Link href='/ggischolars'><li className='p-4 cursor-pointer text-base hover:text-black hover:bg-slate-200'>
            MBA
          </li></Link>
          <Link href='/ggipolicyscholarsprogram'><li className='p-4 cursor-pointer text-base hover:text-black hover:bg-slate-200'>
            MPP
          </li></Link>
          <Link href='/impactfellowship'>
            <li className='p-4 cursor-pointer text-base hover:text-black hover:bg-slate-200'>
              Fellowship
            </li>
          </Link>
          <Link href='/reviews'>
            <li className='p-4 cursor-pointer text-base hover:text-black hover:bg-slate-200'>
              Employment Report
            </li>
          </Link>
          <li className='group relative inline-block p-4 cursor-pointer text-base hover:text-black '>
            <span class="group relative inline-block">
              <button class="inline-flex items-center rounded font-semibold">Explore</button>
              <ul class="absolute hidden pt-1 primary font-medium group-hover:block">
                <li class=""><a class="whitespace-no-wrap block rounded-t bg-gray-100 py-2 px-4 hover:bg-gray-400" target="_blank" href="https://www.schrodingerbyggi.org/">Free Series</a></li>
                <li class=""><a class="whitespace-no-wrap block bg-gray-100 py-2 px-6 hover:bg-gray-400" href="#">Blogs & Research</a></li>
                <li class=""><a class="whitespace-no-wrap block rounded-b bg-gray-100 py-2 px-6 hover:bg-gray-400" href="/careers">Careers</a></li>
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
            <li onClick={handleNav} className='p-4 text-2xl hover:text-gray-500'>
              <Link href='/'>Home</Link>
            </li>
            <li onClick={handleNav} className='p-4 text-2xl hover:text-gray-500'>
              <Link href='/ggischolars'>MBA</Link>
            </li>
            <li onClick={handleNav} className='p-4 text-2xl hover:text-gray-500'>
              <Link href='/ggipolicyscholarsprogram'>MPP</Link>
            </li>
            <li onClick={handleNav} className='p-4 text-2xl hover:text-gray-500'>
              <Link href='/impactfellowship'>Fellowship</Link>
            </li>
          </ul>
        </div>
      </div>
    </div >
  );
};

export default Navbar;
