import React from 'react'
import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import { useTranslation } from 'react-i18next'
import DNAImg from "../../assets/chemistry/DNA.jpg"
import SucroseImg from "../../assets/chemistry/Sucrose.jpg"
import GlucosideImg from "../../assets/chemistry/octyl_glucoside.jpeg"
import GlucoseImg from "../../assets/chemistry/Glucose.jpg"
import H2OImg from "../../assets/chemistry/H2O.jpg"

export default function Chemistry() {

    const fadeLogo = {
        hidden: {
            scale: .8,
            opacity: 0
        },
        visible: {
            scale: 1,
            opacity: 1,
            transition: {
                delay: .6,
            }
        },
    }

    const fadeBottom = {
        hidden: {
            opacity: 0,
        },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: .2,
            }
        },
    }

    const fadeItem = {
        hidden: {
            opacity: 0,
            y: 50,
        },
        visible: {
            opacity: 1,
            y: 0,
        },
    }

    const { t } = useTranslation();

    return (
        <div className="pt-20 bg-homeImg">

            <Link to="/learn" className="m-4">Go back</Link>

            <motion.div variants={fadeLogo} initial="hidden" animate="visible" className="grid w-full place-items-center text-center">
                <h1 className="pb-2 text-5xl font-semibold tracking-wide font-dancingScript lg:text-6xl">
                    {t('learnCehmistry')}
                </h1>
                <div className="inline-flex h-1 bg-indigo-500 rounded-full w-56"></div>
            </motion.div>

            <motion.div variants={fadeBottom} initial="hidden" animate="visible" className="flex flex-wrap flex-col-2 justify-around w-full px-16 py-8">

                <Link to='/dnaexplore'>
                    <motion.div variants={fadeItem} className="m-8">
                        <div className="w-72 h-48 cursor-pointer transition duration-500 transform hover:scale-105">
                            <img className="pb-8 border-4 bg-white border-blue-600 rounded-lg" alt="" src={DNAImg} />
                            <div className="grid place-content-center mx-1 -mt-8 text-xl font-semibold text-gray-900 bg-homeImg font-sourceSerifPro">DNA</div>
                        </div>
                    </motion.div>
                </Link>

                <Link to='/sucroseexplore'>
                    <motion.div variants={fadeItem} className="m-8">
                        <div className="w-72 h-48 cursor-pointer transition duration-500 transform hover:scale-105">
                            <img className="pb-8 border-4 bg-white border-blue-600 rounded-lg" alt="" src=
                                {SucroseImg} />
                            <div className="grid place-content-center mx-1 -mt-8 text-xl font-semibold text-gray-900 bg-homeImg font-sourceSerifPro">Sucrose</div>
                        </div>
                    </motion.div>
                </Link>

                <Link to='/glucosideexplore'>
                    <motion.div variants={fadeItem} className="m-8">
                        <div className="w-72 h-48 cursor-pointer transition duration-500 transform hover:scale-105">
                            <img className="pb-8 border-4 bg-white border-blue-600 rounded-lg" alt="" src=
                                {GlucosideImg} />
                            <div className="grid place-content-center mx-1 -mt-8 text-xl font-semibold text-gray-900 bg-homeImg font-sourceSerifPro">Octyl Glucoside</div>
                        </div>
                    </motion.div>
                </Link>

                <Link to='/glucoseexplore'>
                    <motion.div variants={fadeItem} className="m-8">
                        <div className="w-72 h-72 cursor-pointer transition duration-500 transform hover:scale-105">
                            <img className="pb-8 border-4 bg-white border-blue-600 rounded-lg" alt="" src=
                                {GlucoseImg} />
                            <div className="grid place-content-center mx-1 -mt-8 text-xl font-semibold text-gray-900 bg-homeImg font-sourceSerifPro">Glucose</div>
                        </div>
                    </motion.div>
                </Link>

                <Link to='/waterexplore'>
                    <motion.div variants={fadeItem} className="m-8">
                        <div className="w-72 h-48 cursor-pointer transition duration-500 transform hover:scale-105">
                            <img className="pb-8 border-4 bg-white border-blue-600 rounded-lg" alt="" src=
                                {H2OImg} />
                            <div className="grid place-content-center mx-1 -mt-8 text-xl font-semibold text-gray-900 bg-homeImg font-sourceSerifPro">H2O Molecule</div>
                        </div>
                    </motion.div>
                </Link>

                {/* <motion.div variants={fadeItem} className="m-8">
                    <div className="w-72 h-48 cursor-pointer transition duration-500 transform hover:scale-105 border-4 border-blue-600 rounded-lg">
                        <div className="grid place-content-center text-3xl text-center items-center align-middle h-full font-semibold text-gray-900 bg-homeImg font-sourceSerifPro">More Molecules comming soon..</div>
                    </div>
                </motion.div> */}

            </motion.div>
        </div>
    )
}
