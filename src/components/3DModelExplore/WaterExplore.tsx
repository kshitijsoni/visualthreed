import React, { Suspense, useRef, useState } from "react"
import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import { useTranslation } from 'react-i18next'
import * as THREE from 'three'
import { GLTF } from 'three/examples/jsm/loaders/GLTFLoader'
import { Canvas } from "@react-three/fiber"
import { ContactShadows, Environment, useGLTF, OrbitControls } from "@react-three/drei"
import { proxy, useSnapshot } from "valtio"

type GLTFResult = GLTF & {
    nodes: {
        mesh_0: THREE.Mesh
        mesh_1: THREE.Mesh
        mesh_2: THREE.Mesh
    }
    materials: {
        Material__28: THREE.MeshStandardMaterial
        Material__26: THREE.MeshStandardMaterial
        Material__27: THREE.MeshStandardMaterial
    }
}

const state = proxy({
    current: null,
})

function Model(props: JSX.IntrinsicElements['group']) {
    const group = useRef<THREE.Group>()
    const { nodes, materials } = useGLTF('/h2o_molecule/scene.gltf') as GLTFResult
    const [hovered, set] = useState(null)
    console.log(hovered);

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
                <mesh geometry={nodes.mesh_0.geometry} material={materials.Material__28} />
                <mesh geometry={nodes.mesh_1.geometry} material={materials.Material__26} />
                <mesh geometry={nodes.mesh_2.geometry} material={materials.Material__27} />
            </group>
        </group>
    )
}

function Details() {

    const { t } = useTranslation();

    const snap = useSnapshot(state)

    if (snap.current === "Material__27") {
        return (
            <div className="h-full md:flex md:flex-col md:justify-center font-fontVollkorn">
                <h1 className="text-3xl uppercase">Hydrogen</h1>
            </div>
        )
    }
    else if (snap.current === "Material__28") {
        return (
            <div className="h-full md:flex md:flex-col md:justify-center font-fontVollkorn">
                <h1 className="text-3xl uppercase">Oxygen</h1>
            </div>
        )
    }
    else {
        return (
            <div className="h-full md:flex md:flex-col md:justify-center font-fontVollkorn">
                <h1 className="text-2xl tracking-wider">Click on diffrent parts of H2O molecule to know more</h1>
                <p className="self-center mx-8 text-xl tracking-wide text-justify font-fontVollkorn">{t('modelView')}</p>

                <div className="grid justify-center grid-cols-1 gap-2 pb-8 mx-8 md:grid-cols-2 lg:grid-cols-2">
                    <img className="flex p-6 text-6xl rounded-xl h-48 w-48" src="https://storage.echoar.xyz/wispy-violet-4999/95fa00e3-8d8c-4e25-9143-a31944f68663" alt="Molecule QR" />
                    <a href="https://go.echoar.xyz/FwfR" target="_blank" rel="noreferrer">
                        <button className="h-12 px-8 ml-8 text-base font-semibold tracking-wider text-white border rounded-full shadow-sm font-fontVollkorn mt-16 bg-red-50 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 hover:shadow-lg">{t('modelViewInAR')}</button>
                    </a>
                </div>
            </div>
        )
    }
}

export default function H2O() {

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

    return (
        <>
            <div className="pt-20 bg-ARbg">

            <Link to="/chemistry" className="ml-8">Go back</Link>

                <div className="grid w-full place-items-center">

                <motion.div variants={fadeLogo} initial="hidden" animate="visible" className="grid py-8 w-full place-items-center text-center">
                        <h1 className="pb-2 text-5xl font-semibold tracking-wide font-dancingScript lg:text-6xl">
                            Water Molecule
                        </h1>
                        <div className="inline-flex h-1 bg-indigo-500 rounded-full w-72"></div>
                    </motion.div>

                    <div className="font-fontVollkorn text-justify text-xl w-86 mt-2 mx-4 md:mx-44">Its chemical formula H2O, indicates that each of its molecules contains one oxygen and two hydrogen atoms, connected by covalent bonds. The hydrogen atoms are attached to the oxygen atom at an angle of 104.45°. "Water" is the name of the liquid state of H2O at standard conditions for temperature and pressure.</div>
                </div>

                <div className="md:grid md:grid-cols-3 md:pr-15 pr-1">

                    <div className="w-full h-screen px-4 outline-none cursor-pointer md:col-span-2 lg:block">
                        <Canvas shadows dpr={[1, 2]} camera={{ position: [0, 0, 4], fov: 50 }}>
                            <ambientLight intensity={0.7} />
                            <spotLight intensity={0.5} angle={0.1} penumbra={1} position={[10, 15, 10]} castShadow />
                            <Suspense fallback={null}>
                                <Model scale={0.03} />
                                <Environment preset="city" />
                                <ContactShadows rotation-x={Math.PI / 2} position={[0, -0.8, 0]} opacity={0.25} width={10} height={10} blur={1.5} far={0.8} />
                            </Suspense>
                            <OrbitControls autoRotate />
                        </Canvas>
                    </div>

                    <div className="mt-16 md:mt-0 md:col-span-1 p-4">
                        <Details />
                    </div>

                </div>

            </div>

        </>
    )
}
