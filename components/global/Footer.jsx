import React from 'react'
import Link from 'next/link'
import { FaTwitter, FaLinkedin, FaYoutube, FaInstagram,FaFacebook } from 'react-icons/fa'
const Footer = () => {
    return (
        <footer className="relative bg-black/90 pt-8 mt-24 pb-6 text-white">
            <div className=" mb-6 flex justify-center m-auto">
                <a href='https://twitter.com/GlobalGovernan4?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor' target="_blank" rel="noreferrer" className="flex border-white border-2 text-white shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2" >
                    <FaTwitter />
                </a>
                <a href="https://www.linkedin.com/company/33628712" target="_blank" rel="noreferrer" className="flex border-white border-2 text-white shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2" >
                    <FaLinkedin />
                </a>
                <a href="https://www.instagram.com/globalgovernanceinitiative_/" target="_blank" rel="noreferrer" className="flex border-white border-2 text-white shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2" >
                    <FaInstagram />
                </a>
                <a href="https://www.youtube.com/channel/UCFgYJZVI3fQ9M0bF2Suv02Q" target="_blank" rel="noreferrer" className="flex border-white border-2 text-white shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2" >
                    <FaYoutube />
                </a>
                <a href="https://www.facebook.com/globalgovernanceinitiativefoundation.org/" target="_blank" rel="noreferrer" className="flex border-white border-2 text-white shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2" >
                    <FaFacebook />
                </a>
            </div>
            <div className="container mx-auto px-4">

                <div className="flex flex-wrap text-left lg:text-left">
                    <div className="w-full lg:w-6/12 px-4">

                        <h3 className="text-3xl font-extralight text-left">Let&apos;s keep in touch!</h3>
                        <h4 className="text-lg mt-0 mb-2 text-blueGray-600">
                            Subscribe to our newsletter.
                        </h4>
                        {/* -------------------------------------------- */}
                        <input
                            type="text"
                            className="
                form-control
                block
                w-full
                px-3
                py-1.5
                text-base
                font-normal
                text-black
                bg-white bg-clip-padding
                border border-solid border-black/50
                rounded
                transition
                ease-in-out
                m-0
                focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
              "
                            id="exampleFormControlInput1"
                            placeholder="Email address" />

                        <div className="md:mr-auto mb-6">
                            <button type="submit" className="inline-block mt-4 px-6 py-2 border border-white font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out">
                                Subscribe
                            </button>
                        </div>

                        {/* ------------------------------------------ */}

                    </div>
                    <div className="w-full lg:w-6/12 px-4">
                        <div className="flex flex-wrap items-top mb-6 gap-5">
                            <div className="w-full lg:w-4/12 px-4 ml-auto">
                                <span className="block uppercase text-blueGray-500 text-sm font-semibold mb-2">Our Programs</span>
                                <ul className="list-unstyled">
                                    <li>
                                        <Link href="/ggi-scholars">
                                            <p className="text-blueGray-600 hover:text-blueGray-800  block pb-2 text-sm" >GGI MBA Scholars</p>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/ggipolicyscolarsprogram">
                                            <p className="text-blueGray-600 hover:text-blueGray-800  block pb-2 text-sm" >GGI Policy Scholars</p>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/impact-fellowship">
                                            <p className="text-blueGray-600 hover:text-blueGray-800  block pb-2 text-sm" >GGI Impact Fellowship</p>
                                        </Link>
                                    </li>

                                </ul>
                            </div>
                            <div className="w-full lg:w-4/12 px-4">
                                <span className="block uppercase text-blueGray-500 text-sm font-semibold mb-2">Useful Links</span>
                                <ul className="list-unstyled">
                                    <li>
                                        <Link href="">
                                            <p className="text-blueGray-600 hover:text-blueGray-800  block pb-2 text-sm" >Our Mission</p>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/careers">
                                            <p className="text-blueGray-600 hover:text-blueGray-800  block pb-2 text-sm" >Careers</p>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/blogs">
                                            <p className="text-blueGray-600 hover:text-blueGray-800  block pb-2 text-sm" >Blogs</p>
                                        </Link>
                                    </li>
                                    <li>
                                        <p className="text-blueGray-600 hover:text-blueGray-800  block pb-2 text-sm" href="">Terms &amp; Conditions</p>
                                    </li>
                                    <li>
                                        <p className="text-blueGray-600 hover:text-blueGray-800  block pb-2 text-sm" href="">Privacy Policy</p>
                                    </li>
                                    {/* <li>
                                        <a className="text-blueGray-600 hover:text-blueGray-800  block pb-2 text-sm" href="">Contact Us</a>
                                    </li> */}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <hr className="my-6 border-white" />
                <div className="flex flex-wrap items-center md:justify-between justify-center">
                    <div className="w-full md:w-4/12 px-4 mx-auto text-center">
                        <div className="text-blueGray-500  py-1">
                            Copyright © <span id="get-current-year">2022</span><Link href="/"><a className="text-white hover:text-gray-200"> Global Governance Initiative</a></Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>

    )
}

export default Footer