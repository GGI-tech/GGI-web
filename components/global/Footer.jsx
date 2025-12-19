import Link from 'next/link'
import { FaTwitter, FaLinkedin, FaYoutube, FaInstagram, FaFacebook } from 'react-icons/fa'
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Footer = () => {
    const { register, handleSubmit, reset, formState: { errors }, } = useForm();
    async function submitHandler(data) {
        const response = await fetch("/api/sheet", {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
            },
        })
        toast.success("Email subscribed for the Newsletter!")
        reset();
    }

    return (
        <footer className="relative bg-black/90 pt-8 mt-24 pb-6 text-white">
            <div className=" mb-6 flex justify-center m-auto">
                <a href='https://twitter.com/GlobalGovernan4?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor' target="_blank" rel="noreferrer" className="hover:cursor-pointer flex border-white border-2 text-white shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2" >
                    <FaTwitter />
                </a>
                <a href="https://www.linkedin.com/company/33628712" target="_blank" rel="noreferrer" className="hover:cursor-pointer flex border-white border-2 text-white shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2" >
                    <FaLinkedin />
                </a>
                <a href="https://www.instagram.com/globalgovernanceinitiative_/" target="_blank" rel="noreferrer" className="hover:cursor-pointer flex border-white border-2 text-white shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2" >
                    <FaInstagram />
                </a>
                <a href="https://www.youtube.com/channel/UCFgYJZVI3fQ9M0bF2Suv02Q" target="_blank" rel="noreferrer" className="hover:cursor-pointer flex border-white border-2 text-white shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2" >
                    <FaYoutube />
                </a>
                <a href="https://www.facebook.com/globalgovernanceinitiativefoundation.org/" target="_blank" rel="noreferrer" className="hover:cursor-pointer flex border-white border-2 text-white shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2" >
                    <FaFacebook />
                </a>
            </div>
            <div className="container mx-auto px-4">

                <div className="flex flex-wrap text-left lg:text-left">
                    <div className="w-full lg:w-6/12 px-4">

                        <p className="text-xl font-extralight text-left my-3">Let&apos;s keep in touch!</p>
                        <h4 className="text-lg mt-0 mb-2 text-blueGray-600">
                            Subscribe to our newsletter.
                        </h4>
                        <form onSubmit={handleSubmit(submitHandler)}>
                            {/* -------------------------------------------- */}
                            <input
                                {...register('email', { required: 'Please enter your email' })}
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
                                id="email"
                                placeholder="Email address" />

                            <div className="md:mr-auto mb-6">
                                <button type="submit" className="hover:cursor-pointer inline-block mt-4 px-6 py-2 border border-white font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out">
                                    Subscribe
                                </button>
                            </div>
                        </form>

                        {/* ------------------------------------------ */}

                    </div>
                    <div className="w-full lg:w-6/12 px-4">
                        <div className="flex flex-wrap items-top mb-6 gap-5">
                            <div className="w-full lg:w-4/12 px-4 ml-auto">
                                <span className="block uppercase text-blueGray-500 text-sm font-semibold mb-2">Our Programs</span>
                                <ul className="list-unstyled">
                                    <li>
                                        <Link prefetch={false} href="/ggi-scholars">
                                            <p className="hover:cursor-pointer text-blueGray-600 hover:text-blueGray-800  block pb-2 text-sm" >GGI PGP Scholars</p>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link prefetch={false} href="/ggipolicyscholarsprogram">
                                            <p className="hover:cursor-pointer text-blueGray-600 hover:text-blueGray-800  block pb-2 text-sm" >GGI Policy Scholars</p>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link prefetch={false} href="/impact-fellowship">
                                            <p className="hover:cursor-pointer text-blueGray-600 hover:text-blueGray-800  block pb-2 text-sm" >GGI Impact Fellowship</p>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link prefetch={false} href="https://www.globaltechinitiative.org/">
                                            <p className="hover:cursor-pointer text-blueGray-600 hover:text-blueGray-800  block pb-2 text-sm" >Global Tech Initiative</p>
                                        </Link>
                                    </li>

                                </ul>
                            </div>
                            <div className="w-full lg:w-4/12 px-4">
                                <span className="block uppercase text-blueGray-500 text-sm font-semibold mb-2">Useful Links</span>
                                <ul className="list-unstyled">
                                    <li>
                                        <Link prefetch={false} href="/mission">
                                            <p className="hover:cursor-pointer text-blueGray-600 hover:text-blueGray-800  block pb-2 text-sm" >Our Mission</p>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link prefetch={false} href="/careers">
                                            <p className="hover:cursor-pointer text-blueGray-600 hover:text-blueGray-800  block pb-2 text-sm" >Careers</p>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link prefetch={false} href="https://www.councilonsustainabledevelopment.org/">
                                            <p className="hover:cursor-pointer text-blueGray-600 hover:text-blueGray-800  block pb-2 text-sm" >Blogs</p>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link prefetch={false} href="/terms-conditions">
                                            <p className="hover:cursor-pointer text-blueGray-600 hover:text-blueGray-800  block pb-2 text-sm" >Terms &amp; Conditions</p>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link prefetch={false} href="/privacy-policy">
                                            <p className="hover:cursor-pointer text-blueGray-600 hover:text-blueGray-800  block pb-2 text-sm" >Privacy Policy</p>
                                        </Link>
                                    </li>
                                    <li>
                                        <a className="text-blueGray-600 hover:text-blueGray-800  block pb-2 text-sm" href="">Contact Us</a>
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
                            Copyright © <span id="get-current-year">{new Date().getFullYear()}</span><Link href="/"><a className="text-white hover:text-gray-200"> Global Governance Initiative</a></Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>

    )
}

export default Footer