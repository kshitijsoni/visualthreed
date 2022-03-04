import React, { Suspense, useRef, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import * as THREE from 'three'
import { GLTF } from 'three/examples/jsm/loaders/GLTFLoader'
import { Canvas } from "@react-three/fiber"
import { Environment, useGLTF, OrbitControls } from "@react-three/drei"
import { proxy, useSnapshot } from "valtio"
import { BiArrowBack } from "react-icons/bi"
import { motion } from "framer-motion"
import { fade } from "../../../animations"

type GLTFResult = GLTF & {
    nodes: {
        Sol1_lambert2_0: THREE.Mesh
        Sol1_lambert3_0: THREE.Mesh
        Sol1_lambert4_0: THREE.Mesh
        Sol1_lambert5_0: THREE.Mesh
        Sol1_lambert6_0: THREE.Mesh
        Sol1_lambert7_0: THREE.Mesh
        Sol1_lambert10_0: THREE.Mesh
        Sol1_lambert11_0: THREE.Mesh
        Sol1_lambert12_0: THREE.Mesh
        Sol1_lambert13_0: THREE.Mesh
        Sol1_lambert9_0: THREE.Mesh
    }
    materials: {
        lambert2: THREE.MeshBasicMaterial
        lambert3: THREE.MeshBasicMaterial
        lambert4: THREE.MeshBasicMaterial
        lambert5: THREE.MeshBasicMaterial
        lambert6: THREE.MeshBasicMaterial
        lambert7: THREE.MeshBasicMaterial
        lambert10: THREE.MeshBasicMaterial
        lambert11: THREE.MeshBasicMaterial
        lambert12: THREE.MeshBasicMaterial
        lambert13: THREE.MeshBasicMaterial
        lambert9: THREE.MeshBasicMaterial
    }
}

const state = proxy({
    current: null,
})

function Model(props: JSX.IntrinsicElements['group']) {
    const group = useRef<THREE.Group>()
    const { nodes, materials } = useGLTF('/space/perseverance/scene.gltf') as GLTFResult
    const [hovered, set] = useState(null)
    return (
        <group ref={group} {...props} dispose={null}
            //@ts-ignore
            onPointerOver={(e) => (e.stopPropagation(), set(e.object.material.name))}
            onPointerOut={(e) => e.intersections.length === 0 && set(null)}
            onPointerMissed={() => (state.current = null)}
            //@ts-ignore
            onPointerDown={(e) => (e.stopPropagation(), (state.current = e.object.material.name))}
        >
            <group rotation={[-Math.PI / 2, 0, 0]}>
                <group rotation={[Math.PI / 2, 0, 0]}>
                    <mesh geometry={nodes.Sol1_lambert2_0.geometry} material={materials.lambert2} />
                    <mesh geometry={nodes.Sol1_lambert3_0.geometry} material={materials.lambert3} />
                    <mesh geometry={nodes.Sol1_lambert4_0.geometry} material={materials.lambert4} />
                    <mesh geometry={nodes.Sol1_lambert5_0.geometry} material={materials.lambert5} />
                    <mesh geometry={nodes.Sol1_lambert6_0.geometry} material={materials.lambert6} />
                    <mesh geometry={nodes.Sol1_lambert7_0.geometry} material={materials.lambert7} />
                    <mesh geometry={nodes.Sol1_lambert10_0.geometry} material={materials.lambert10} />
                    <mesh geometry={nodes.Sol1_lambert11_0.geometry} material={materials.lambert11} />
                    <mesh geometry={nodes.Sol1_lambert12_0.geometry} material={materials.lambert12} />
                    <mesh geometry={nodes.Sol1_lambert13_0.geometry} material={materials.lambert13} />
                    <mesh geometry={nodes.Sol1_lambert9_0.geometry} material={materials.lambert9} />
                </group>
            </group>
        </group>
    )
}

function Details() {

    const snap = useSnapshot(state)
    if (snap.current === "lambert2") {
        return (
            <div className="h-full md:flex md:flex-col md:justify-center">
                <h1 className="text-3xl uppercase">Sun</h1>
                <p className="text-xl text-justify">The Sun is the star at the center of the Solar System. It is a nearly perfect sphere of hot plasma heated to incandescence by nuclear fusion reactions in its core, radiating the energy mainly as visible light, ultraviolet light, and infrared radiation. It is by far the most important source of energy for life on Earth.</p>
            </div>
        )
    }
    else if (snap.current === "lambert3") {
        return (
            <div className="h-full md:flex md:flex-col md:justify-center">
                <h1 className="text-3xl uppercase">Mercury</h1>
                <p className="text-xl text-justify">Mercury is the smallest planet in the Solar System and the closest to the Sun. Its orbit around the Sun takes 87.97 Earth days, the shortest of all the Sun&apos;s planets. It is named after the Roman god Mercurius (Mercury), god of commerce, messenger of the gods, and mediator between gods and mortals, corresponding to the Greek god Hermes (Ἑρμῆς).</p>
            </div>
        )
    }
    else if (snap.current === "lambert4") {
        return (
            <div className="h-full md:flex md:flex-col md:justify-center">
                <h1 className="text-3xl uppercase">Venus</h1>
                <p className="text-xl text-justify">Venus is the second planet from the Sun. It is named after the Roman goddess of love and beauty. As the brightest natural object in Earth&apos;s night sky after the Moon, Venus can cast shadows and can be, on rare occasions, visible to the naked eye in broad daylight.</p>
            </div>
        )
    }
    else if (snap.current === "lambert5") {
        return (
            <div className="h-full md:flex md:flex-col md:justify-center">
                <h1 className="text-3xl uppercase">Earth</h1>
                <p className="text-xl text-justify">Earth is the third planet from the Sun and the only astronomical object known to harbor and support life. About 29.2% of Earth&apos;s surface is land consisting of continents and islands. The remaining 70.8% is covered with water, mostly by oceans, seas, gulfs, and other salt-water bodies, but also by lakes, rivers, and other freshwater, which together constitute the hydrosphere.</p>
            </div>
        )
    }
    else if (snap.current === "lambert6") {
        return (
            <div className="h-full md:flex md:flex-col md:justify-center">
                <h1 className="text-3xl uppercase">Mars</h1>
                <p className="text-xl text-justify">Mars is the fourth planet from the Sun and the second-smallest planet in the Solar System, being larger than only Mercury. In English, Mars carries the name of the Roman god of war and is often referred to as the Red Planet.</p>
            </div>
        )
    }
    else if (snap.current === "lambert7") {
        return (
            <div className="h-full md:flex md:flex-col md:justify-center">
                <h1 className="text-3xl uppercase">Jupiter</h1>
                <p className="text-xl text-justify">Jupiter is the fifth planet from the Sun and the largest in the Solar System. It is a gas giant with a mass more than two and a half times that of all the other planets in the Solar System combined, but slightly less than one-thousandth the mass of the Sun.</p>
            </div>
        )
    }
    else if (snap.current === "lambert9") {
        return (
            <div className="h-full md:flex md:flex-col md:justify-center">
                <h1 className="text-3xl uppercase">Saturn</h1>
                <p className="text-xl text-justify">Saturn is a large gas giant in the Solar System. It is the fourth planet from the Sun and the densest planet in the Solar System. Saturn is the sixth planet from the Sun and the second-largest in the Solar System, after Jupiter. It is a gas giant with an average radius of about nine and a half times that of Earth.</p>
            </div>
        )
    }
    else if (snap.current === "lambert10") {
        return (
            <div className="h-full md:flex md:flex-col md:justify-center">
                <h1 className="text-3xl uppercase">Uranus</h1>
                <p className="text-xl text-justify">Uranus is the seventh planet from the Sun. Its name is a reference to the Greek god of the sky, Uranus, who, according to Greek mythology, was the great-grandfather of Ares (Mars), grandfather of Zeus (Jupiter) and father of Cronus (Saturn).</p>
            </div>
        )
    }
    else if (snap.current === "lambert10") {
        return (
            <div className="h-full md:flex md:flex-col md:justify-center">
                <h1 className="text-3xl uppercase">Neptune</h1>
                <p className="text-xl text-justify">Neptune is the eighth and farthest known Solar planet from the Sun. In the Solar System, it is the fourth-largest planet by diameter, the third-most-massive planet, and the densest giant planet. It is 17 times the mass of Earth, slightly more massive than its near-twin Uranus.</p>
            </div>
        )
    }
    else {
        return (
            <div className="h-full md:flex md:flex-col md:justify-center">
                <h1 className="text-2xl tracking-wider">Click on diffrent parts of Solar System to know more</h1>
                <p className="self-center my-8 mx-4 text-2xl tracking-wide text-justify">To view the 3D model in AR, scan the QR code<span className="md:hidden"> or click on the button below</span>.</p>

                <div className="grid place-items-center pb-8 mx-8">
                    <Image src="https://storage.echoar.xyz/wispy-violet-4999/25c8b0c7-d505-419a-9d20-5a443d0e67a0" width="250" height="250" alt="Space QR" className="flex p-6 text-6xl rounded-xl h-48 w-48" />
                    <a href="https://go.echo3d.co/t2YC" target="_blank" rel="noreferrer">
                        <button className="h-12 px-8 ml-8 text-base font-semibold tracking-wider text-white border rounded-full shadow-sm mt-16 bg-red-50 bg-gradient-to-r from-secondary to-tertiary hover:shadow-lg md:hidden">View in AR</button>
                    </a>
                </div>
            </div>
        )
    }
}

export default function SolarSystem() {
    return (
        <div className="pt-20 md:pt-24 text-white">

            <Link href="/subject/space" passHref>
                <button className="left-2 md:px-8 px-6 mr-1 mb-1 ease-linear transition-all duration-150 flex flex-row text-white align-middle text-xl" type="button" aria-hidden="false" aria-label="button">
                    <BiArrowBack className="h-4 mt-2" aria-hidden="false" />
                    go back
                </button>
            </Link>

            <motion.div variants={fade} initial="hidden" animate="visible" className="grid w-full py-10 place-items-center">
                <h1 className="pb-2 text-5xl font-semibold tracking-wide lg:text-6xl">
                    Solar System
                </h1>
                <div className="inline-flex h-1 bg-indigo-500 rounded-full w-72"></div>
                <div className="text-justify text-xl w-86 mt-2 mx-4 md:mx-44">The Mars Perseverance rover mission is part of NASA&apos;s Mars Exploration Program, a long-term effort of robotic exploration of the Red Planet. The Mars Perseverance mission addresses high-priority science goals for Mars exploration, including key questions about the potential for life on Mars. The mission takes the next step by not only seeking signs of habitable conditions on Mars in the ancient past, but also searching for signs of past microbial life itself. The Mars Perseverance rover introduces a drill that can collect core samples of the most promising rocks and soils and set them aside in a cache on the surface of Mars.
                </div>
            </motion.div>

            <div className="md:grid md:grid-cols-3 md:pr-15 pr-1">

                <div className="w-full h-128 px-4 outline-none cursor-grab md:col-span-2 lg:block">
                    <Canvas shadows dpr={[1, 2]} camera={{ position: [0, 0, 4], fov: 50 }}>
                        <ambientLight intensity={0.7} />
                        <spotLight intensity={0.5} angle={0.1} penumbra={1} position={[10, 15, 10]} castShadow />
                        <Suspense fallback={null}>
                            <Model scale={0.7} />
                            <Environment preset="city" />
                        </Suspense>
                        <OrbitControls autoRotate addEventListener={undefined} hasEventListener={undefined} removeEventListener={undefined} dispatchEvent={undefined} />
                    </Canvas>
                </div>

                <div className="mt-16 md:mt-0 md:col-span-1 p-4">
                    <Details />
                </div>

            </div>

        </div>
    )
}
