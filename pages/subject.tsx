import Link from "next/link";
import Image from "next/image";
import { subjectsInfo } from "../details"
import { motion } from "framer-motion";
import { fadeLogo, fadeBottom, fadeItem } from "../animations";

export default function Subject({ subject }) {
    return (
        <div className="pt-8 md:pt-16 min-h-screen">
            <motion.div variants={fadeLogo} initial="hidden" animate="visible" className="grid w-full py-10 place-items-center">
                <h1 className="pb-2 text-5xl text-center font-semibold tracking-wide lg:text-6xl text-white">
                    Select your Subject
                </h1>
                <div className="inline-flex h-1 bg-indigo-500 rounded-full w-72"></div>
            </motion.div>

            <motion.div variants={fadeBottom} initial="hidden" animate="visible" className="flex flex-wrap flex-col-2 justify-around w-full px-16 py-8">
                {subjectsInfo.map((subject) => (
                    <Link href={`/subject/${subject.Url}`} passHref key={subject.Title}>
                        <motion.div variants={fadeItem} className="pb-12 m-8 md:pb-24 cursor-pointer border-4 border-secondary rounded-lg">
                            <Image src="/class/subject.jpg" height="220" width="320" alt="Subject Image" className="transition duration-500 transform hover:scale-110" />
                            <div className="ml-8 md:ml-20 -mt-24 md:-mt-36 text-4xl font-semibold text-white transition duration-500 transform  hover:scale-105">{subject.Title}</div>
                        </motion.div>
                    </Link>
                ))}

            </motion.div>

        </div>
    );
}

export async function getStaticProps() {
    const subjects = subjectsInfo;

    return {
        props: { subjects }
    };
}
