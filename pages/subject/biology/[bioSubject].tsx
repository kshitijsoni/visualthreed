import { Suspense } from "react"
import Link from "next/link"
import Image from "next/image"
import { Canvas, useLoader } from "@react-three/fiber"
import { Environment, OrbitControls } from "@react-three/drei"
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader"
import Loader from "../../../components/loader"
import { bioPageInfo } from "../../../details"
import { motion } from "framer-motion"
import { BiArrowBack } from "react-icons/bi"
import { fade } from "../../../animations"

function Model({ path, size }) {
    const gltf = useLoader(GLTFLoader, `/biology/${path}/scene.gltf`);
    return (
        <>
            <primitive object={gltf.scene} scale={size} />
        </>
    );
}

export default function BiologyModels({ bioData }) {

    return (
        <div className="pt-20 md:pt-24 text-white">

            <Link href="/subject/biology" passHref>
                <button className="left-2 md:px-8 px-6 mr-1 mb-1 ease-linear transition-all duration-150 flex flex-row text-white align-middle text-xl" type="button" aria-hidden="false" aria-label="button">
                    <BiArrowBack className="h-4 mt-2" aria-hidden="false" />
                    go back
                </button>
            </Link>

            <motion.div variants={fade} initial="hidden" animate="visible" className="md:col-span-2">

                <div className="grid w-full py-10 place-items-center">
                    <h1 className="pb-2 text-5xl font-semibold tracking-wide lg:text-6xl">
                        {bioData.Title}
                    </h1>
                    <div className="inline-flex h-1 bg-indigo-500 rounded-full w-44"></div>
                    <div className="font-fontVollkorn text-justify text-xl w-86 mt-2 mx-4 md:mx-44">{bioData.ModelDetails}</div>
                </div>

                <div className="md:grid md:grid-cols-3 md:pr-15 pr-1">

                    <div className="w-full h-128 px-8 md:px-4 outline-none cursor-grab md:col-span-2 lg:block">
                        {/* <Canvas shadows dpr={[1, 2]} camera={{ position: [0, 0, 4], fov: 50 }}>
                            <ambientLight intensity={0.7} />
                            <spotLight intensity={0.5} angle={0.1} penumbra={1} position={[10, 15, 10]} castShadow />
                            <Suspense fallback={<Loader />}>
                                <Model path={bioData.ModelPath} size={bioData.ModelSize} />
                                <Environment preset="city" />
                            </Suspense>
                            <OrbitControls autoRotate addEventListener={undefined} hasEventListener={undefined} removeEventListener={undefined} dispatchEvent={undefined} />
                        </Canvas> */}
                    </div>

                    <div className="mt-16 md:mt-0 md:col-span-1 p-4">
                        <div className="h-full md:flex md:flex-col md:justify-center">
                            <p className="self-center my-8 mx-4 text-2xl tracking-wide text-justify">To view the 3D model in AR, scan the QR code<span className="md:hidden"> or click on the button below</span>.</p>

                            <div className="grid place-items-center pb-8 mx-8">
                                <Image src={`/biology/${bioData.QrCodeUrl}`} width="250" height="250" alt="Molecule QR" className="flex p-6 text-6xl rounded-xl h-48 w-48" />
                                <a href={bioData.ARlink} target="_blank" rel="noreferrer">
                                    <button className="h-12 px-8 text-base font-semibold tracking-wider text-white border rounded-full shadow-sm mt-16 bg-red-50 bg-gradient-to-r from-secondary to-tertiary hover:shadow-lg md:hidden">View in AR</button>
                                </a>
                            </div>
                        </div>
                    </div>

                </div>
            </motion.div>

        </div>

    );
}

export async function getStaticPaths() {
    const bioInfo = bioPageInfo;
    const paths = bioInfo.map((bioData) => ({
        params: { bioSubject: bioData.BioSubject }
    }));

    return {
        paths,
        fallback: false
    };
}

export async function getStaticProps({ params }) {
    const { bioSubject } = params;
    const bioData = bioPageInfo.find((p) => p.BioSubject === bioSubject);

    return {
        props: { bioData }
    };
}
