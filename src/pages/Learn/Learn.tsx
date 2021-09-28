import React from 'react'
import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import { useTranslation } from 'react-i18next'
import ClassImg from "../../assets/class/class.png"
import SubjectImg from "../../assets/class/subject.jpg"

export default function Learn() {

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
        <div className="pt-16 bg-homeImg h-full">

            <motion.div variants={fadeLogo} initial="hidden" animate="visible" className="grid w-full py-10 place-items-center">
                <h1 className="pb-2 text-5xl font-semibold tracking-wide font-dancingScript lg:text-6xl">
                    {t('learnCLassTitle')}
                </h1>
                <div className="inline-flex h-1 bg-indigo-500 rounded-full w-72"></div>
            </motion.div>

            <motion.div variants={fadeBottom} initial="hidden" animate="visible" className="flex flex-wrap justify-around w-full px-16">

                <Link to='/class1'>
                    <motion.div variants={fadeItem} className="m-8 w-64 h-64 cursor-pointer">
                        <img className="transition duration-500 transform border-4 border-blue-600 rounded-lg hover:scale-110" alt="" src={ClassImg} />
                        <div className="w-1/3 pl-1 ml-24 -mt-40 text-6xl font-semibold text-white transition duration-500 transform font-sourceSerifPro hover:scale-110">1</div>
                    </motion.div>
                </Link>

                <Link to='/class2'>
                    <motion.div variants={fadeItem} className="m-8 w-64 h-64 cursor-pointer">
                        <img className="transition duration-500 transform border-4 border-blue-600 rounded-lg hover:scale-110" alt="" src={ClassImg} />
                        <div className="w-1/3 pl-1 ml-24 -mt-40 text-6xl font-semibold text-white transition duration-500 transform font-sourceSerifPro hover:scale-110">2</div>
                    </motion.div>
                </Link>

                <Link to='/class1'>
                    <motion.div variants={fadeItem} className="m-8 w-64 h-64 cursor-pointer">
                        <img className="transition duration-500 transform border-4 border-blue-600 rounded-lg hover:scale-110" alt="" src={ClassImg} />
                        <div className="w-1/3 pl-1 ml-24 -mt-40 text-6xl font-semibold text-white transition duration-500 transform font-sourceSerifPro hover:scale-110">3</div>
                    </motion.div>
                </Link>

                <Link to='/class1'>
                    <motion.div variants={fadeItem} className="m-8 w-64 h-64 cursor-pointer">
                        <img className="transition duration-500 transform border-4 border-blue-600 rounded-lg hover:scale-110" alt="" src={ClassImg} />
                        <div className="w-1/3 pl-1 ml-24 -mt-40 text-6xl font-semibold text-white transition duration-500 transform font-sourceSerifPro hover:scale-110">4</div>
                    </motion.div>
                </Link>

                <Link to='/class1'>
                    <motion.div variants={fadeItem} className="m-8 w-64 h-64 cursor-pointer">
                        <img className="transition duration-500 transform border-4 border-blue-600 rounded-lg hover:scale-110" alt="" src={ClassImg} />
                        <div className="w-1/3 pl-1 ml-24 -mt-40 text-6xl font-semibold text-white transition duration-500 transform font-sourceSerifPro hover:scale-110">5</div>
                    </motion.div>
                </Link>

                <Link to='/class1'>
                    <motion.div variants={fadeItem} className="m-8 w-64 h-64 cursor-pointer">
                        <img className="transition duration-500 transform border-4 border-blue-600 rounded-lg hover:scale-110" alt="" src={ClassImg} />
                        <div className="w-1/3 pl-1 ml-24 -mt-40 text-6xl font-semibold text-white transition duration-500 transform font-sourceSerifPro hover:scale-110">6</div>
                    </motion.div>
                </Link>

                <Link to='/class1'>
                    <motion.div variants={fadeItem} className="m-8 w-64 h-64 cursor-pointer">
                        <img className="transition duration-500 transform border-4 border-blue-600 rounded-lg hover:scale-110" alt="" src={ClassImg} />
                        <div className="w-1/3 pl-1 ml-24 -mt-40 text-6xl font-semibold text-white transition duration-500 transform font-sourceSerifPro hover:scale-110">7</div>
                    </motion.div>
                </Link>

                <Link to='/class1'>
                    <motion.div variants={fadeItem} className="m-8 w-64 h-64 cursor-pointer">
                        <img className="transition duration-500 transform border-4 border-blue-600 rounded-lg hover:scale-110" alt="" src={ClassImg} />
                        <div className="w-1/3 pl-1 ml-24 -mt-40 text-6xl font-semibold text-white transition duration-500 transform font-sourceSerifPro hover:scale-110">8</div>
                    </motion.div>
                </Link>

                <Link to='/class1'>
                    <motion.div variants={fadeItem} className="m-8 w-64 h-64 cursor-pointer">
                        <img className="transition duration-500 transform border-4 border-blue-600 rounded-lg hover:scale-110" alt="" src={ClassImg} />
                        <div className="w-1/3 pl-1 ml-24 -mt-40 text-6xl font-semibold text-white transition duration-500 transform font-sourceSerifPro hover:scale-110">9</div>
                    </motion.div>
                </Link>

                <Link to='/class1'>
                    <motion.div variants={fadeItem} className="m-8 w-64 h-64 cursor-pointer">
                        <img className="transition duration-500 transform border-4 border-blue-600 rounded-lg hover:scale-110" alt="" src={ClassImg} />
                        <div className="w-1/3 pl-1 ml-20 -mt-40 text-6xl font-semibold text-white transition duration-500 transform font-sourceSerifPro hover:scale-105">10</div>
                    </motion.div>
                </Link>

                <Link to='/class1'>
                    <motion.div variants={fadeItem} className="m-8 w-64 h-64 cursor-pointer">
                        <img className="transition duration-500 transform border-4 border-blue-600 rounded-lg hover:scale-110" alt="" src={ClassImg} />
                        <div className="w-1/3 pl-1 ml-20 -mt-40 text-6xl font-semibold text-white transition duration-500 transform font-sourceSerifPro hover:scale-105">11</div>
                    </motion.div>
                </Link>

                <Link to='/class1'>
                    <motion.div variants={fadeItem} className="m-8 w-64 h-64 cursor-pointer">
                        <img className="transition duration-500 transform border-4 border-blue-600 rounded-lg hover:scale-110" alt="" src={ClassImg} />
                        <div className="w-1/3 pl-1 ml-20 -mt-40 text-6xl font-semibold text-white transition duration-500 transform font-sourceSerifPro hover:scale-105">12</div>
                    </motion.div>
                </Link>

            </motion.div>


            <motion.div variants={fadeLogo} initial="hidden" animate="visible" className="grid w-full py-10 place-items-center">
                <h1 className="pb-2 text-5xl font-semibold tracking-wide font-dancingScript lg:text-6xl">
                    {t('learnSubjectTitle')}
                </h1>
                <div className="inline-flex h-1 bg-indigo-500 rounded-full w-72"></div>
            </motion.div>

            <motion.div variants={fadeBottom} initial="hidden" animate="visible" className="flex flex-wrap justify-around w-full px-16">

                <Link to='/chemistry'>
                    <motion.div variants={fadeItem} className="m-8 w-80 h-64 cursor-pointer">
                        <img className="transition duration-500 transform border-4 border-blue-600 rounded-lg hover:scale-110" alt="" src={SubjectImg} />
                        <div className="-pr-2 ml-20 -mt-36 text-4xl font-semibold text-white transition duration-500 transform font-sourceSerifPro hover:scale-105">{t('learnCehmistry')}</div>
                    </motion.div>
                </Link>

                <Link to='/class1'>
                    <motion.div variants={fadeItem} className="m-8 w-80 h-64 cursor-pointer">
                        <img className="transition duration-500 transform border-4 border-blue-600 rounded-lg hover:scale-110" alt="" src={SubjectImg} />
                        <div className="ml-20 -mt-36 text-5xl font-semibold text-white transition duration-500 transform font-sourceSerifPro hover:scale-105">{t('learnBiology')}</div>
                    </motion.div>
                </Link>

                <Link to='/class1'>
                    <motion.div variants={fadeItem} className="m-8 w-80 h-64 cursor-pointer">
                        <img className="transition duration-500 transform border-4 border-blue-600 rounded-lg hover:scale-110" alt="" src={SubjectImg} />
                        <div className="ml-20 -mt-36 text-4xl font-semibold text-white transition duration-500 transform font-sourceSerifPro hover:scale-105">{t('learnAerospace')}</div>
                    </motion.div>
                </Link>

            </motion.div>

        </div>
    )
}
