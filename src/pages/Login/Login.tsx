import React, { useRef } from "react";
import { motion } from "framer-motion"
import Study from "../../assets/study.svg"
import { auth } from "../../firebase";
import firebase from 'firebase'
import GoogleLogo from "../../assets/chatroom/google_logo.png"

const Login = () => {

    const fadeLeft = {
        hidden: {
            opacity: 0,
            x: -80,
        },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                delay: .4,
            }
        },
    }

    const fadeRight = {
        hidden: {
            opacity: 0,
            x: 80,
        },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                delay: .4,
            }
        },
    }

    const emailRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);

    function signInWithGoogle() {
        const provider = new firebase.auth.GoogleAuthProvider()
        auth.signInWithPopup(provider)
    }

    const createAccount = async () => {
        try {
            await auth.createUserWithEmailAndPassword(
                emailRef.current!.value,
                passwordRef.current!.value
            );
        } catch (error) {
            console.error(error);
        }
    };

    const signIn = async () => {
        try {
            await auth.signInWithEmailAndPassword(
                emailRef.current!.value,
                passwordRef.current!.value
            );
        } catch (error) {
            console.error(error);
        }
    };



    return (
        <>
            <div>
                <div className="relative">

                    <motion.div variants={fadeLeft} initial="hidden" animate="visible" className="z-10 mt-16 bg-blue-600 md:h-96 md:w-96 md:mt-16 md:ml-44 rounded-3xl"></motion.div>

                    <div className="z-20 p-4 m-8 origin-bottom-right transform bg-white border-4 border-blue-800 lg:mx-56 md:mx-8 lg:-mt-80 rounded-2xl">
                        <div className="p-4 space-y-10 md:space-y-0 md:grid md:grid-cols-2">

                            <div className="w-11/12 p-8 rounded-lg lg:-ml-4 sm:ml-16">
                                <img width="600px" height="400px" src={Study} alt="img" />
                            </div>

                            <div className="md:flex md:flex-col md:justify-center lg:pr-16">

                                <h2 className="self-center mb-4 text-5xl font-bold tracking-wider text-indigo-800 font-dancingScript md:text-4xl lg:text-7xl">
                                    SkillCept
                                </h2>

                                <div className="relative mt-4 font-sourceSerifPro outline ">
                                    <input type="email" name="email" placeholder=" " ref={emailRef} className="block w-full pb-2 pl-3 text-lg text-gray-800 placeholder-gray-400 bg-transparent border-b-2 border-gray-400 appearance-none rounded-xl focus:border-green-400 focus:outline-none" />
                                    <label className="absolute top-0 p-2 pb-4 text-lg text-gray-500 duration-300 bg-white md:text-lg -z-1 origin-0">Email</label>
                                </div>

                                <div className="relative mt-8 font-sourceSerifPro outline ">
                                    <input type="password" name="password" placeholder=" " ref={passwordRef} className="block w-full pb-2 pl-3 text-lg text-gray-800 placeholder-gray-400 bg-transparent border-b-2 border-gray-400 appearance-none rounded-xl focus:border-green-400 focus:outline-none" required />
                                    <label className="absolute top-0 p-2 text-lg text-gray-500 duration-300 bg-white md:text-lg -z-1 origin-0">Password</label>
                                </div>

                                <div className="grid justify-center grid-cols-1 gap-1 md:gap-4 mx-4 md:grid-cols-2">

                                    <button type="button" onClick={signIn} className="h-12 px-8 text-base font-semibold tracking-wider text-white border rounded-full shadow-sm font-fontVollkorn my-6 bg-red-50 bg-gradient-to-r from-purple-400 via-indigo-500 to-blue-500 hover:shadow-lg">Sign In</button>

                                    <button type="button" onClick={createAccount} className="h-12 px-8 text-base font-semibold tracking-wider text-white border rounded-full shadow-sm font-fontVollkorn my-6 bg-red-50 bg-gradient-to-r from-purple-400 via-indigo-500 to-blue-500 hover:shadow-lg">Sign Up</button>
                                </div>

                                <div className="w-full flex items-center justify-center text-lg mb-4">
                                    <div className="inline-flex h-1 mx-4 bg-indigo-500 rounded-full w-52"></div>
                                    or
                                    <div className="inline-flex h-1 mx-4 bg-indigo-500 rounded-full w-52"></div>
                                </div>

                                <div className="w-full block bg-white hover:bg-gray-100 focus:bg-gray-100 text-gray-900 font-semibold rounded-lg px-4 py-3 border border-gray-300 cursor-pointer shadow-lg">
                                    <div className="flex items-center justify-center">
                                        <img src={GoogleLogo} alt="google" className="w-4" />
                                        <span className="ml-4" onClick={signInWithGoogle}>Sign in with Google</span>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>


                    <motion.div variants={fadeRight} initial="hidden" animate="visible" className="z-10 float-right w-40 h-40 mr-48 -mt-40 bg-blue-600 rounded-3xl md:block hidden"></motion.div>

                </div>
            </div>
        </>
    );
}

export default Login;
