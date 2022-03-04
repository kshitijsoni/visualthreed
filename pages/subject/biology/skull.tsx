import React, { Suspense, useRef, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { BiArrowBack } from "react-icons/bi"
import * as THREE from 'three'
import { GLTF } from 'three/examples/jsm/loaders/GLTFLoader'
import { Canvas } from "@react-three/fiber"
import { Environment, useGLTF, OrbitControls, useAnimations } from "@react-three/drei"
import { proxy, useSnapshot } from "valtio"
import { motion } from "framer-motion"
import { fade } from "../../../animations"

type GLTFResult = GLTF & {
    nodes: {
        Left_zygomaticSTL_Output_from_geomagic_Studio__________________________________________________pasted__lambert5_0: THREE.Mesh
        OccipitalSTL_Output_from_geomagic_Studio__________________________________________________pasted__lambert5_0: THREE.Mesh
        Right_lacrimalSTL_Output_from_geomagic_Studio__________________________________________________pasted__lambert5_0: THREE.Mesh
        Right_maxSTL_Output_from_geomagic_Studio__________________________________________________pasted__lambert5_0: THREE.Mesh
        right_nasalSTL_Output_from_geomagic_Studio__________________________________________________pasted__lambert5_0: THREE.Mesh
        right_palatineSTL_Output_from_geomagic_Studio__________________________________________________pasted__lambert5_0: THREE.Mesh
        Right_ParietalSTL_Output_from_geomagic_Studio__________________________________________________pasted__lambert5_0: THREE.Mesh
        Right_temporalSTL_Output_from_geomagic_Studio__________________________________________________pasted__lambert5_0: THREE.Mesh
        Right_zygomaticSTL_Output_from_geomagic_Studio__________________________________________________pasted__lambert5_0: THREE.Mesh
        TeethSTL_Output_from_geomagic_Studio__________________________________________________pasted__phong3_0: THREE.Mesh
        VomerSTL_Output_from_geomagic_Studio__________________________________________________pasted__lambert5_0: THREE.Mesh
        EthmoidSTL_Output_from_geomagic_Studio__________________________________________________pasted__lambert5_0: THREE.Mesh
        EthmoidSTL_Output_from_geomagic_Studio__________________________________________________pasted__lambert5_0_1: THREE.Mesh
        FrontalSTL_Output_from_geomagic_Studio__________________________________________________pasted__lambert5_0: THREE.Mesh
        Inferior_conchaeSTL_Output_from_geomagic_Studio__________________________________________________pasted__lambert5_0: THREE.Mesh
        left_lacrimalSTL_Output_from_geomagic_Studio__________________________________________________pasted__lambert5_0: THREE.Mesh
        Left_maxillaSTL_Output_from_geomagic_Studio__________________________________________________pasted__lambert5_0: THREE.Mesh
        Left_maxillaSTL_Output_from_geomagic_Studio__________________________________________________pasted__lambert5_0_1: THREE.Mesh
        Left_nasalSTL_Output_from_geomagic_Studio__________________________________________________pasted__lambert5_0: THREE.Mesh
        Left_palatineSTL_Output_from_geomagic_Studio__________________________________________________pasted__lambert5_0: THREE.Mesh
        Left_parietalSTL_Output_from_geomagic_Studio__________________________________________________pasted__lambert5_0: THREE.Mesh
        left_temporalSTL_Output_from_geomagic_Studio__________________________________________________pasted__lambert5_0: THREE.Mesh
        SphenoidSTL_Output_from_geomagic_Studio__________________________________________________pasted__lambert5_0: THREE.Mesh
        Lower_teethSTL_Output_from_geomagic_Studio__________________________________________________pasted__phong3_0: THREE.Mesh
        MandibleSTL_Output_from_geomagic_Studio__________________________________________________pasted__lambert5_0: THREE.Mesh
    }
    materials: {
        pasted__lambert5: THREE.MeshStandardMaterial
        pasted__phong3: THREE.MeshStandardMaterial
    }
}

type ActionName = 'Take 001'
type GLTFActions = Record<ActionName, THREE.AnimationAction>

const state = proxy({
    current: null,
})

function Model(props: JSX.IntrinsicElements['group']) {
    const group = useRef<THREE.Group>()
    const { nodes, materials, animations } = useGLTF('/biology/visible_interactive_human_-_exploding_skull/scene.gltf') as GLTFResult
    const { actions } = useAnimations<GLTFActions>(animations, group)
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
                    <group position={[-0.25, 5.88, 0.96]} rotation={[-2.35, 0, -0.08]}>
                        <group position={[0.03, -0.01, -0.01]}>
                            <mesh
                                geometry={
                                    nodes
                                        .Left_zygomaticSTL_Output_from_geomagic_Studio__________________________________________________pasted__lambert5_0
                                        .geometry
                                }
                                material={
                                    nodes
                                        .Left_zygomaticSTL_Output_from_geomagic_Studio__________________________________________________pasted__lambert5_0
                                        .material
                                }
                            />
                        </group>
                        <group position={[0, 0.02, 0.01]}>
                            <mesh
                                geometry={
                                    nodes
                                        .OccipitalSTL_Output_from_geomagic_Studio__________________________________________________pasted__lambert5_0
                                        .geometry
                                }
                                material={
                                    nodes
                                        .OccipitalSTL_Output_from_geomagic_Studio__________________________________________________pasted__lambert5_0
                                        .material
                                }
                            />
                        </group>
                        <group position={[-0.01, -0.01, -0.01]}>
                            <mesh
                                geometry={
                                    nodes
                                        .Right_lacrimalSTL_Output_from_geomagic_Studio__________________________________________________pasted__lambert5_0
                                        .geometry
                                }
                                material={
                                    nodes
                                        .Right_lacrimalSTL_Output_from_geomagic_Studio__________________________________________________pasted__lambert5_0
                                        .material
                                }
                            />
                        </group>
                        <group position={[-0.02, 0, 0]}>
                            <mesh
                                geometry={
                                    nodes
                                        .Right_maxSTL_Output_from_geomagic_Studio__________________________________________________pasted__lambert5_0
                                        .geometry
                                }
                                material={
                                    nodes
                                        .Right_maxSTL_Output_from_geomagic_Studio__________________________________________________pasted__lambert5_0
                                        .material
                                }
                            />
                        </group>
                        <group position={[-0.01, -0.02, -0.02]}>
                            <mesh
                                geometry={
                                    nodes
                                        .right_nasalSTL_Output_from_geomagic_Studio__________________________________________________pasted__lambert5_0
                                        .geometry
                                }
                                material={
                                    nodes
                                        .right_nasalSTL_Output_from_geomagic_Studio__________________________________________________pasted__lambert5_0
                                        .material
                                }
                            />
                        </group>
                        <group position={[-0.02, 0.01, -0.01]}>
                            <mesh
                                geometry={
                                    nodes
                                        .right_palatineSTL_Output_from_geomagic_Studio__________________________________________________pasted__lambert5_0
                                        .geometry
                                }
                                material={
                                    nodes
                                        .right_palatineSTL_Output_from_geomagic_Studio__________________________________________________pasted__lambert5_0
                                        .material
                                }
                            />
                        </group>
                        <group position={[-0.02, -0.01, 0.01]}>
                            <mesh
                                geometry={
                                    nodes
                                        .Right_ParietalSTL_Output_from_geomagic_Studio__________________________________________________pasted__lambert5_0
                                        .geometry
                                }
                                material={
                                    nodes
                                        .Right_ParietalSTL_Output_from_geomagic_Studio__________________________________________________pasted__lambert5_0
                                        .material
                                }
                            />
                        </group>
                        <group position={[-0.02, 0, 0]}>
                            <mesh
                                geometry={
                                    nodes
                                        .Right_temporalSTL_Output_from_geomagic_Studio__________________________________________________pasted__lambert5_0
                                        .geometry
                                }
                                material={
                                    nodes
                                        .Right_temporalSTL_Output_from_geomagic_Studio__________________________________________________pasted__lambert5_0
                                        .material
                                }
                            />
                        </group>
                        <group position={[-0.02, -0.02, -0.01]}>
                            <mesh
                                geometry={
                                    nodes
                                        .Right_zygomaticSTL_Output_from_geomagic_Studio__________________________________________________pasted__lambert5_0
                                        .geometry
                                }
                                material={
                                    nodes
                                        .Right_zygomaticSTL_Output_from_geomagic_Studio__________________________________________________pasted__lambert5_0
                                        .material
                                }
                            />
                        </group>
                        <group position={[0, 0, -0.02]}>
                            <mesh
                                geometry={
                                    nodes
                                        .TeethSTL_Output_from_geomagic_Studio__________________________________________________pasted__phong3_0
                                        .geometry
                                }
                                material={
                                    nodes
                                        .TeethSTL_Output_from_geomagic_Studio__________________________________________________pasted__phong3_0
                                        .material
                                }
                            />
                        </group>
                        <group position={[0, -0.01, -0.02]}>
                            <mesh
                                geometry={
                                    nodes
                                        .VomerSTL_Output_from_geomagic_Studio__________________________________________________pasted__lambert5_0
                                        .geometry
                                }
                                material={
                                    nodes
                                        .VomerSTL_Output_from_geomagic_Studio__________________________________________________pasted__lambert5_0
                                        .material
                                }
                            />
                        </group>
                        <group position={[0, -0.01, -0.01]}>
                            <mesh
                                geometry={
                                    nodes
                                        .EthmoidSTL_Output_from_geomagic_Studio__________________________________________________pasted__lambert5_0
                                        .geometry
                                }
                                material={
                                    nodes
                                        .EthmoidSTL_Output_from_geomagic_Studio__________________________________________________pasted__lambert5_0
                                        .material
                                }
                            />
                            <mesh
                                geometry={
                                    nodes
                                        .EthmoidSTL_Output_from_geomagic_Studio__________________________________________________pasted__lambert5_0_1
                                        .geometry
                                }
                                material={
                                    nodes
                                        .EthmoidSTL_Output_from_geomagic_Studio__________________________________________________pasted__lambert5_0_1
                                        .material
                                }
                            />
                        </group>
                        <group position={[0, -0.04, -0.01]}>
                            <mesh
                                geometry={
                                    nodes
                                        .FrontalSTL_Output_from_geomagic_Studio__________________________________________________pasted__lambert5_0
                                        .geometry
                                }
                                material={
                                    nodes
                                        .FrontalSTL_Output_from_geomagic_Studio__________________________________________________pasted__lambert5_0
                                        .material
                                }
                            />
                        </group>
                        <group position={[0, -0.02, -0.02]}>
                            <mesh
                                geometry={
                                    nodes
                                        .Inferior_conchaeSTL_Output_from_geomagic_Studio__________________________________________________pasted__lambert5_0
                                        .geometry
                                }
                                material={
                                    nodes
                                        .Inferior_conchaeSTL_Output_from_geomagic_Studio__________________________________________________pasted__lambert5_0
                                        .material
                                }
                            />
                        </group>
                        <group position={[0.01, -0.01, -0.01]}>
                            <mesh
                                geometry={
                                    nodes
                                        .left_lacrimalSTL_Output_from_geomagic_Studio__________________________________________________pasted__lambert5_0
                                        .geometry
                                }
                                material={
                                    nodes
                                        .left_lacrimalSTL_Output_from_geomagic_Studio__________________________________________________pasted__lambert5_0
                                        .material
                                }
                            />
                        </group>
                        <group position={[0.02, 0, 0]}>
                            <mesh
                                geometry={
                                    nodes
                                        .Left_maxillaSTL_Output_from_geomagic_Studio__________________________________________________pasted__lambert5_0
                                        .geometry
                                }
                                material={
                                    nodes
                                        .Left_maxillaSTL_Output_from_geomagic_Studio__________________________________________________pasted__lambert5_0
                                        .material
                                }
                            />
                            <mesh
                                geometry={
                                    nodes
                                        .Left_maxillaSTL_Output_from_geomagic_Studio__________________________________________________pasted__lambert5_0_1
                                        .geometry
                                }
                                material={
                                    nodes
                                        .Left_maxillaSTL_Output_from_geomagic_Studio__________________________________________________pasted__lambert5_0_1
                                        .material
                                }
                            />
                        </group>
                        <group position={[0.01, -0.02, -0.02]}>
                            <mesh
                                geometry={
                                    nodes
                                        .Left_nasalSTL_Output_from_geomagic_Studio__________________________________________________pasted__lambert5_0
                                        .geometry
                                }
                                material={
                                    nodes
                                        .Left_nasalSTL_Output_from_geomagic_Studio__________________________________________________pasted__lambert5_0
                                        .material
                                }
                            />
                        </group>
                        <group position={[0.01, 0.01, -0.01]}>
                            <mesh
                                geometry={
                                    nodes
                                        .Left_palatineSTL_Output_from_geomagic_Studio__________________________________________________pasted__lambert5_0
                                        .geometry
                                }
                                material={
                                    nodes
                                        .Left_palatineSTL_Output_from_geomagic_Studio__________________________________________________pasted__lambert5_0
                                        .material
                                }
                            />
                        </group>
                        <group position={[0.02, -0.01, 0.02]}>
                            <mesh
                                geometry={
                                    nodes
                                        .Left_parietalSTL_Output_from_geomagic_Studio__________________________________________________pasted__lambert5_0
                                        .geometry
                                }
                                material={
                                    nodes
                                        .Left_parietalSTL_Output_from_geomagic_Studio__________________________________________________pasted__lambert5_0
                                        .material
                                }
                            />
                        </group>
                        <group position={[0.04, 0, 0]}>
                            <mesh
                                geometry={
                                    nodes
                                        .left_temporalSTL_Output_from_geomagic_Studio__________________________________________________pasted__lambert5_0
                                        .geometry
                                }
                                material={
                                    nodes
                                        .left_temporalSTL_Output_from_geomagic_Studio__________________________________________________pasted__lambert5_0
                                        .material
                                }
                            />
                        </group>
                        <mesh
                            geometry={
                                nodes
                                    .SphenoidSTL_Output_from_geomagic_Studio__________________________________________________pasted__lambert5_0
                                    .geometry
                            }
                            material={
                                nodes
                                    .SphenoidSTL_Output_from_geomagic_Studio__________________________________________________pasted__lambert5_0
                                    .material
                            }
                        />
                        <group position={[-0.42, -1.66, 0.93]} rotation={[-0.15, 0.02, 0.05]}>
                            <group position={[0, 0.01, -0.02]}>
                                <mesh
                                    geometry={
                                        nodes
                                            .Lower_teethSTL_Output_from_geomagic_Studio__________________________________________________pasted__phong3_0
                                            .geometry
                                    }
                                    material={
                                        nodes
                                            .Lower_teethSTL_Output_from_geomagic_Studio__________________________________________________pasted__phong3_0
                                            .material
                                    }
                                />
                            </group>
                            <group
                                name="MandibleSTL_Output_from_geomagic_Studio_________________________________________________"
                                position={[0, 0.03, -0.02]}>
                                <mesh
                                    geometry={
                                        nodes
                                            .MandibleSTL_Output_from_geomagic_Studio__________________________________________________pasted__lambert5_0
                                            .geometry
                                    }
                                    material={
                                        nodes
                                            .MandibleSTL_Output_from_geomagic_Studio__________________________________________________pasted__lambert5_0
                                            .material
                                    }
                                />
                            </group>
                        </group>
                    </group>
                </group>
            </group>
        </group>
    )
}

function Details() {

    const snap = useSnapshot(state)
    if (snap.current === "pasted__phong3") {
        return (
            <div className="h-full md:flex md:flex-col md:justify-center">
                <h1 className="text-3xl uppercase">Human teeth</h1>
                <h1 className="text-xl ">The human teeth function to mechanically break down items of food by cutting and crushing them in preparation for swallowing and digesting. Humans have four types of teeth: incisors, canines, premolars, and molars, which each have a specific function.</h1>
            </div>
        )
    }
    else if (snap.current === "pasted__lambert5") {
        return (
            <div className="h-full md:flex md:flex-col md:justify-center">
                <h1 className="text-3xl uppercase">Frontal Bone</h1>
                <h1 className="text-xl">The frontal bone is a bone in the human skull. The bone consists of two portions. These are the vertically oriented squamous part, and the horizontally oriented orbital part, making up the bony part of the forehead, part of the bony orbital cavity holding the eye, and part of the bony part of the nose respectively.</h1>
            </div>
        )
    }
    else {
        return (
            <div className="h-full md:flex md:flex-col md:justify-center font-fontVollkorn">
                <h1 className="text-2xl tracking-wider">Click on diffrent parts of Human Skull to know more</h1>
                <p className="self-center my-8 mx-4 text-2xl tracking-wide text-justify">To view the 3D model in AR, scan the QR code<span className="md:hidden"> or click on the button below</span>.</p>

                <div className="grid place-items-center pb-8 mx-8">
                    <Image src="/biology/skullQR.png" width="250" height="250" alt="Skull QR" className="flex p-6 text-6xl rounded-xl h-48 w-48" />
                    <a href="https://go.echo3d.co/4SKp" target="_blank" rel="noreferrer">
                        <button className="h-12 px-8 ml-8 text-base font-semibold tracking-wider text-white border rounded-full shadow-sm font-fontVollkorn mt-16 bg-red-50 bg-gradient-to-r from-secondary to-tertiary hover:shadow-lg md:hidden">View in AR</button>
                    </a>
                </div>
            </div>
        )
    }
}

export default function Skull() {
    return (
        <div className="pt-20 md:pt-24 text-white">

            <Link href="/subject/biology" passHref>
                <button className="left-2 md:px-8 px-6 mr-1 mb-1 ease-linear transition-all duration-150 flex flex-row text-white align-middle text-xl" type="button" aria-hidden="false" aria-label="button">
                    <BiArrowBack className="h-4 mt-2" aria-hidden="false" />
                    go back
                </button>
            </Link>

            <motion.div variants={fade} initial="hidden" animate="visible" className="grid w-full py-10 place-items-center">
                <h1 className="pb-2 text-5xl font-semibold tracking-wide lg:text-6xl">
                    Human Skull
                </h1>
                <div className="inline-flex h-1 bg-indigo-500 rounded-full w-72"></div>
                <div className="font-fontVollkorn text-justify text-xl w-86 mt-2 mx-4 md:mx-44">The skull is a bone structure that forms the head in vertebrates. It supports the structures of the face and provides a protective cavity for the brain. The skull is composed of two parts: the cranium and the mandible.
                </div>
            </motion.div>

            <div className="md:grid md:grid-cols-3 md:pr-15 pr-1">

                <div className="w-full h-128 px-4 outline-none cursor-pointer md:col-span-2 lg:block">
                    <Canvas shadows dpr={[1, 2]} camera={{ position: [0, 0, 4], fov: 50 }}>
                        <ambientLight intensity={0.4} />
                        <Suspense fallback={null}>
                            <Model scale={0.1} />
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
