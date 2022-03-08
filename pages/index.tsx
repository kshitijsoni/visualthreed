import type { NextPage } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from "framer-motion"
import { fadeFeat, fadeLeft, fadeRight } from '../animations'

const Home: NextPage = () => {
  return (
    <div className="pt-8 md:pt-16">
      <div className="p-4 origin-bottom-right lg:mx-36 md:mx-8">
        <div className="p-4 space-y-10 flex flex-wrap-reverse md:space-y-0 md:grid md:grid-cols-2 text-white">

          <motion.div variants={fadeLeft} initial="hidden" animate="visible" className="pr-4 md:flex md:flex-col md:justify-center">

            <h2 className="self-center mb-4 text-5xl font-semibold tracking-wider md:text-4xl lg:text-7xl">SkillCept</h2>

            <p className="self-center text-xl tracking-wide text-justify">SkillCept is an AR-based web platform where students from any background can visit the site and learn various concepts with the help of 3D Models, which makes their understanding easier, and faster. SkillCept can help students achieve better results through visualization and full immersion in the subject matter.</p>

            <Link href="/subject" passHref>
              <button className='w-56 p-2 px-8 mt-4 text-base font-semibold tracking-wider text-white border rounded-full shadow-sm  bg-red-50 bg-gradient-to-r from-secondary to-tertiary hover:shadow-lg '>Explore Subjects</button>
            </Link>

          </motion.div>

          <motion.div variants={fadeRight} initial="hidden" animate="visible" className="">
            <Image src="/skillceptBg.png" height="500" width="500" alt="img" className="w-screen lg:p-10" />
          </motion.div>

        </div>
      </div>

      <motion.div variants={fadeFeat} initial="hidden" animate="visible" className="mb-12 md:mb-20 text-center">
        <h1 className="mb-4 text-4xl font-extrabold leading-10 tracking-wider title-font sm:text-5xl sm:leading-none md:text-6xl text-white">Other Features</h1>
        <div className="flex justify-center mt-2">
          <div className="inline-flex h-1 bg-indigo-500 rounded-full w-52"></div>
        </div>
      </motion.div>

      <div className="flex items-center justify-center pb-8">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">

          <div className="relative w-64 p-6 my-4 bg-gray-200 shadow-xl rounded-3xl">
            <div className="absolute flex items-center p-3 text-white rounded-full shadow-xl bg-gradient-to-r from-secondary to-tertiary left-4 -top-8">
              <Image className="w-12" src="/home/3d.png" height="50" width="50" alt="3D" />
            </div>
            <div className="mt-8">
              <p className="my-2 text-xl font-semibold">Interactive 3D Models</p>
              <div className="flex space-x-2 font-medium text-gray-800 text-basic">
                <p >Digital 3D models allow students to visualize and interrogate various topics; they reinforce spatial skills, facilitate student recognition of pre-learned various principles in the field, and encourage students to think about their processes and properties.</p>
              </div>
            </div>
          </div>

          <div className="relative w-64 p-6 my-4 bg-gray-200 shadow-xl rounded-3xl">
            <div className="absolute flex items-center p-3 text-white rounded-full shadow-xl bg-gradient-to-r from-secondary to-tertiary left-4 -top-8">
              <Image className="w-12" src="/home/AR.png" height="50" width="50" alt="AR" />
            </div>
            <div className="mt-8">
              <p className="my-2 text-xl font-semibold">Learn with Augmented Reality</p>
              <div className="flex space-x-2 text-gray-800 text-basic">
                <p>Augmented Reality&apos;s relative seamlessness of digital objects within the real world encourages interactivity and engagement. It maximizes students&apos; ability to spend their time learning curricular subjects while minimizing the time spent learning how to use the new tech.</p>
              </div>
            </div>
          </div>

          <div className="relative w-64 p-6 my-4 bg-gray-200 shadow-xl rounded-3xl">
            <div className="absolute flex items-center p-3 text-white rounded-full shadow-xl bg-gradient-to-r from-secondary to-tertiary left-4 -top-8">
              <Image className="w-12" src="/home/multilang.png" height="50" width="50" alt="MultiLang" />
            </div>
            <div className="mt-8">
              <p className="my-2 text-xl font-semibold">Available in multiple languages</p>
              <div className="flex space-x-2 text-gray-800 text-basic ">
                <p>The platform is available in multiple languages for the creation and appreciation of cultural awareness, adds academic and educational value, enhances creativity, an adjustment in society, and appreciation of local languages.</p>
              </div>
            </div>
          </div>

        </div>
      </div>

    </div>
  )
}

export default Home
