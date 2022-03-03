import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from "framer-motion"
import { fadeLogo, fadeDesc, fadeBottom, fadeItem } from '../animations'

export default function Funzone() {
    return (
        <div className="pt-8 md:pt-16 h-screen">
            <motion.div variants={fadeLogo} initial="hidden" animate="visible" className="grid w-full py-10 place-items-center">
                <h1 className="pb-2 text-5xl font-semibold tracking-wide text-white lg:text-6xl">
                    Fun Zone
                </h1>
                <div className="inline-flex h-1 bg-indigo-500 rounded-full w-44"></div>
            </motion.div>

            <motion.div variants={fadeDesc} initial="hidden" animate="visible" className="italic md:pl-12 sm:pl-10 text-2xl text-white">Take a break and have some fun</motion.div>

            <motion.div variants={fadeBottom} initial="hidden" animate="visible" className="flex flex-wrap justify-around w-full px-16">

                <Link href="/funzone/ticTacToe" passHref>
                    <motion.div variants={fadeItem} className="m-8">
                        <div className="cursor-pointer transition duration-500 transform hover:scale-105 border-4 bg-gray-200 border-secondary rounded-lg">
                            <Image src="/funzone/TicTacToe.png" height="300" width="300" alt="TicTacToe" />
                            <div className="grid place-content-center mx-1 text-2xl font-semibold text-gray-900">Tic Tac Toe Game</div>
                        </div>
                    </motion.div>
                </Link>

            </motion.div>
        </div>
    )
}
