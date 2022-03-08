import Link from "next/link";
import Image from "next/image";
import { chemPageInfo } from "../../details"
import { motion } from "framer-motion";
import { fadeLogo, fadeBottom, fadeItem } from "../../animations";

export default function Chemistry() {
  return (
    <div className="pt-8 md:pt-16 min-h-screen text-white">

      <motion.div variants={fadeLogo} initial="hidden" animate="visible" className="grid w-full py-10 place-items-center">
        <h1 className="pb-2 text-5xl text-center font-semibold tracking-wide lg:text-6xl">
          Select Chemical Structure
        </h1>
        <div className="inline-flex h-1 bg-indigo-500 rounded-full w-72"></div>
      </motion.div>

      <motion.div variants={fadeBottom} initial="hidden" animate="visible" className="flex flex-wrap flex-col-2 justify-around w-full px-16">

        <Link href="/subject/chemistry/dna" passHref>
          <motion.div variants={fadeItem} className="m-8">
            <div className="w-72 h-72 cursor-pointer transition duration-500 transform hover:scale-105">
              <div className="pb-8 border-4  border-secondary rounded-lg">
                <Image width="480" height="300" src="/chemistry/DNA.jpg" alt="" className="rounded-t-md" /></div>
              <div className="grid -mt-9 place-content-center mx-1 text-xl">DNA</div>
            </div>
          </motion.div>
        </Link>

        {chemPageInfo.map((subject) => (
          <Link href={`/subject/chemistry/${subject.ChemSubject}`} passHref key={subject.Title}>
            <motion.div variants={fadeItem} className="m-8">
              <div className="w-72 h-72 cursor-pointer transition duration-500 transform hover:scale-105">
                <div className="pb-8 border-4  border-secondary rounded-lg">
                  <Image width="480" height="300" src={`/chemistry/${subject.ImgName}`} alt="" className="rounded-t-md" /></div>
                <div className="grid -mt-9 place-content-center mx-1 text-xl">{subject.Title}</div>
              </div>
            </motion.div>
          </Link>
        ))}

        <motion.div variants={fadeItem} className="m-8">
          <div className="w-72 h-56 cursor-pointer transition duration-500 transform hover:scale-105 border-4 border-secondary rounded-lg">
            <div className="grid place-content-center text-3xl text-center items-center align-middle h-full font-semibold ">More structures comming soon..</div>
          </div>
        </motion.div>

      </motion.div>

    </div>
  );
}

export async function getStaticProps() {
  const chemInfo = chemPageInfo;

  return {
    props: { chemInfo }
  };
}
