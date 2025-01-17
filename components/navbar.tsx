import React from 'react'
import Link from 'next/link';
import { HiOutlineMenuAlt3, HiX } from "react-icons/hi";
import Headroom from "react-headroom"

export default function Navbar() {

    const [showNavbar, setShowNavbar] = React.useState(false);

    return (
        <Headroom className="fixed z-50 w-full">
            <nav className="flex items-center bg-primary py-2 flex-wrap px-4 tracking-wider">
                <Link href="/" passHref><span className="p-2 mr-4 inline-flex items-center text-4xl md:text-5xl cursor-pointer font-base text-white">Visual 3D
                </span></Link>
                <button className="lg:hidden right-0 absolute md:px-8 px-6 mr-1 mb-1 ease-linear transition-all duration-150" type="button" onClick={() => setShowNavbar(true)} aria-hidden="false" aria-label="button">
                    <HiOutlineMenuAlt3 className="h-7 w-7 text-white" aria-hidden="false" />
                </button>
                {showNavbar ? (
                    <div>
                        <div className=" flex overflow-x-hidden mx-4 md:mx-8 h-screen overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none md:hidden"
                        >
                            <div className="relative my-6 mx-auto w-screen">
                                <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-gray-900 outline-none focus:outline-none text-white">
                                    <div className="flex items-start justify-between p-5 border-solid rounded-t">
                                        <Link href="/" passHref>
                                            <div className="text-3xl font-base tracking-wide cursor-pointer">
                                                Visual3D
                                            </div>
                                        </Link>

                                        <button className="absolute right-6" onClick={() => setShowNavbar(false)} aria-hidden="false" aria-label="button">
                                            <HiX className="h-7 w-7" aria-hidden="false" />
                                        </button>

                                    </div>

                                    <div className="grid justify-center">
                                        <div className="inline-flex w-64 h-1 bg-indigo-500 rounded-full"></div>
                                    </div>

                                    <div className="grid place-items-center text-xl py-2 gap-2 w-full mb-4"
                                    >

                                        <Link href="/" passHref>
                                            <span className="lg:inline-flex px-3 mx-3 py-2 rounded items-center justify-center dark:hover:bg-navHover hover:bg-secondary cursor-pointer text-white">Home</span>
                                        </Link>

                                        <Link href="/subject" passHref>
                                            <span className="lg:inline-flex px-3 mx-3 py-2 rounded items-center justify-center dark:hover:bg-navHover hover:bg-secondary cursor-pointer text-white">Subject</span>
                                        </Link>

                                        {/* <Link href="/chatroom" passHref>
                                            <span className="lg:inline-flex px-3 mx-3 py-2 rounded items-center justify-center dark:hover:bg-navHover hover:bg-secondary cursor-pointer text-white">Chatroom</span>
                                        </Link> */}

                                        <Link href="/funzone" passHref>
                                            <span className="lg:inline-flex px-3 mx-3 py-2 rounded items-center justify-center dark:hover:bg-navHover hover:bg-secondary cursor-pointer text-white">Funzone</span>
                                        </Link>

                                        <Link href="/contact" passHref>
                                            <span className="lg:inline-flex px-3 mx-3 py-2 rounded items-center justify-center dark:hover:bg-navHover hover:bg-secondary cursor-pointer text-white">Contact</span>
                                        </Link>

                                        {/* <button className='bg-blue-600 text-white py-2 px-8 rounded-md ml-2'>
                                            Logout
                                        </button> */}

                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="opacity-25 fixed inset-0 z-40 h-screen bg-black md:hidden"></div>
                    </div>
                ) : null}

                <div className="hidden top-navbar w-full lg:inline-flex lg:flex-grow lg:w-auto" >
                    <div className="lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full text-xl lg:items-center items-start flex flex-col lg:h-auto space-x-2 mr-12" >

                        <Link href="/" passHref>
                            <span className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded items-center justify-center dark:hover:bg-navHover hover:bg-secondary cursor-pointer text-white">Home</span>
                        </Link>

                        <Link href="/subject" passHref>
                            <span className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded items-center justify-center dark:hover:bg-navHover hover:bg-secondary cursor-pointer text-white">Subject</span>
                        </Link>

                        {/* <Link href="/chatroom" passHref>
                            <span className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded items-center justify-center dark:hover:bg-navHover hover:bg-secondary cursor-pointer text-white">Chatroom</span>
                        </Link> */}

                        <Link href="/funzone" passHref>
                            <span className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded items-center justify-center dark:hover:bg-navHover hover:bg-secondary cursor-pointer text-white">Funzone</span>
                        </Link>

                        <Link href="/contact" passHref>
                            <span className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded items-center justify-center dark:hover:bg-navHover hover:bg-secondary cursor-pointer text-white">Contact</span>
                        </Link>

                        {/* <button className='bg-[#6F5DE0] text-white py-2 px-8 rounded-md'>
                            Logout
                        </button> */}

                    </div>
                </div>
            </nav>
        </Headroom>
    )
}
