import React from 'react'
import Link from 'next/link'
import { FaTwitter, FaLinkedin, FaYoutube, FaInstagram } from 'react-icons/fa'
const Footer = () => {
    return (
        <footer className="relative bg-black/90 pt-8 mt-24 pb-6 text-white">
            <div className=" mb-6 flex justify-center m-auto">
                <button className="flex border-white border-2 text-white shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2" type="button">
                    <FaTwitter />
                </button>
                <button className="flex border-white border-2 text-white shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2" type="button">
                    <FaLinkedin />
                </button>
                <button className="flex border-white border-2 text-white shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2" type="button">
                    <FaInstagram />
                </button>
                <button className="flex border-white border-2 text-white shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2" type="button">
                    <FaYoutube />
                </button>
            </div>
            <div className="container mx-auto px-4">

                <div className="flex flex-wrap text-left lg:text-left">
                    <div className="w-full lg:w-6/12 px-4">

                        <h4 className="text-3xl fonat-semibold text-blueGray-700">Let&apos;s keep in touch!</h4>
                        <h5 className="text-lg mt-0 mb-2 text-blueGray-600">
                            Subscribe to our newsletter.
                        </h5>
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
                        <div className="flex flex-wrap items-top mb-6">
                            <div className="w-full lg:w-4/12 px-4 ml-auto">
                                <span className="block uppercase text-blueGray-500 text-sm font-semibold mb-2">Our Programs</span>
                                <ul className="list-unstyled">
                                    <li>
                                        <a className="text-blueGray-600 hover:text-blueGray-800  block pb-2 text-sm" href="https://www.creative-tim.com/presentation?ref=njs-profile">GGI MBA Scholars</a>
                                    </li>
                                    <li>
                                        <a className="text-blueGray-600 hover:text-blueGray-800  block pb-2 text-sm" href="https://blog.creative-tim.com?ref=njs-profile">GGI Policy Scholars</a>
                                    </li>
                                    <li>
                                        <a className="text-blueGray-600 hover:text-blueGray-800  block pb-2 text-sm" href="https://www.github.com/creativetimofficial?ref=njs-profile">GGI Impact Fellowship</a>
                                    </li>
                                    <li>
                                        <a className="text-blueGray-600 hover:text-blueGray-800  block pb-2 text-sm" href="https://www.creative-tim.com/bootstrap-themes/free?ref=njs-profile">Young Leaders Program</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="w-full lg:w-4/12 px-4">
                                <span className="block uppercase text-blueGray-500 text-sm font-semibold mb-2">Useful Links</span>
                                <ul className="list-unstyled">
                                    <li>
                                        <a className="text-blueGray-600 hover:text-blueGray-800  block pb-2 text-sm" href="https://github.com/creativetimofficial/notus-js/blob/main/LICENSE.md?ref=njs-profile">Careers</a>
                                    </li>
                                    <li>
                                        <a className="text-blueGray-600 hover:text-blueGray-800  block pb-2 text-sm" href="https://github.com/creativetimofficial/notus-js/blob/main/LICENSE.md?ref=njs-profile">Blogs</a>
                                    </li>
                                    <li>
                                        <a className="text-blueGray-600 hover:text-blueGray-800  block pb-2 text-sm" href="https://creative-tim.com/terms?ref=njs-profile">Terms &amp; Conditions</a>
                                    </li>
                                    <li>
                                        <a className="text-blueGray-600 hover:text-blueGray-800  block pb-2 text-sm" href="https://creative-tim.com/privacy?ref=njs-profile">Privacy Policy</a>
                                    </li>
                                    <li>
                                        <a className="text-blueGray-600 hover:text-blueGray-800  block pb-2 text-sm" href="https://creative-tim.com/contact-us?ref=njs-profile">Contact Us</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <hr className="my-6 border-white" />
                <div className="flex flex-wrap items-center md:justify-between justify-center">
                    <div className="w-full md:w-4/12 px-4 mx-auto text-center">
                        <div className="text-blueGray-500  py-1">
                            Copyright © <span id="get-current-year">2022</span><Link href="/"><a className="text-gray-500 hover:text-white"> Global Governance Initiative</a></Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>

    )
}

export default Footer