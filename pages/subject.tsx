import Link from "next/link";
import Image from "next/image";
import { subjectsInfo } from "../details"
import { motion } from "framer-motion";
import { fadeLogo, fadeBottom, fadeItem } from "../animations";

export default function Subject() {
    return (
        <div className="pt-8 md:pt-16 min-h-screen">
            <motion.div variants={fadeLogo} initial="hidden" animate="visible" className="grid w-full py-10 place-items-center">
                <h1 className="pb-2 text-5xl text-center font-semibold tracking-wide lg:text-6xl text-white">
                    Select your Subject
                </h1>
                <div className="inline-flex h-1 bg-indigo-500 rounded-full w-72"></div>
            </motion.div>

            <motion.div variants={fadeBottom} initial="hidden" animate="visible" className="flex flex-wrap flex-col-2 justify-around w-full px-16 py-4">
                {subjectsInfo.map((subject) => (
                    <Link href={`/subject/${subject.Url}`} passHref key={subject.Title}>
                        <motion.div variants={fadeItem} className="pb-16 my-2 md:m-8 md:pb-24 cursor-pointer border-4 border-secondary rounded-lg">
                            <Image src="/class/subject.jpg" height="220" width="320" alt="Subject Image" className="transition duration-500 transform hover:scale-110" />
                            <div className="-mt-28 md:-mt-36 text-4xl font-semibold text-white transition duration-500 transform  hover:scale-105 text-center">{subject.Title}</div>
                        </motion.div>
                    </Link>
                ))}

                <motion.div variants={fadeItem} className="m-8">
                    <div className="w-72 h-56 cursor-pointer transition duration-500 transform hover:scale-105 border-4 border-secondary rounded-lg">
                        <div className="grid place-content-center text-3xl text-center items-center align-middle h-full font-semibold text-white">More subjects comming soon..</div>
                    </div>
                </motion.div>

            </motion.div>

        </div>
    );
}
