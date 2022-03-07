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
        mesh_0: THREE.Mesh
        mesh_1: THREE.Mesh
        mesh_2: THREE.Mesh
        mesh_3: THREE.Mesh
        mesh_4: THREE.Mesh
        mesh_5: THREE.Mesh
        mesh_6: THREE.Mesh
    }
    materials: {
        vmd_mat_cindex_0: THREE.MeshStandardMaterial
        vmd_mat_cindex_1: THREE.MeshStandardMaterial
        vmd_mat_cindex_10: THREE.MeshStandardMaterial
        vmd_mat_cindex_5: THREE.MeshStandardMaterial
        vmd_mat_cindex_8: THREE.MeshStandardMaterial
    }
}

const state = proxy({
    current: null,
})

function Model(props: JSX.IntrinsicElements['group']) {
    const group = useRef<THREE.Group>()
    const { nodes, materials } = useGLTF('/chemistry/dna/scene.gltf') as GLTFResult
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
                <mesh geometry={nodes.mesh_0.geometry} material={materials.vmd_mat_cindex_0} />
                <mesh geometry={nodes.mesh_1.geometry} material={materials.vmd_mat_cindex_1} />
                <mesh geometry={nodes.mesh_2.geometry} material={nodes.mesh_2.material} />
                <mesh geometry={nodes.mesh_3.geometry} material={nodes.mesh_3.material} />
                <mesh geometry={nodes.mesh_4.geometry} material={materials.vmd_mat_cindex_5} />
                <mesh geometry={nodes.mesh_5.geometry} material={nodes.mesh_5.material} />
                <mesh geometry={nodes.mesh_6.geometry} material={nodes.mesh_6.material} />
            </group>
        </group>
    )
}

function Details() {

    const snap = useSnapshot(state)
    if (snap.current === "vmd_mat_cindex_5") {
        return (
            <div className="h-full md:flex md:flex-col md:justify-center">
                <h1 className="text-3xl uppercase">Phosphate</h1>
                <p className="text-xl text-justify">A phosphate backbone is the portion of the DNA double helix that provides structural support to the molecule. DNA consists of two strands that wind around each other like a twisted ladder. Each strand has a backbone made of alternating sugar (deoxyribose) and phosphate groups.</p>
            </div>
        )
    }
    else if (snap.current === "vmd_mat_cindex_8") {
        return (
            <div className="h-full md:flex md:flex-col md:justify-center">
                <h1 className="text-3xl uppercase">Hydrogen</h1>
                <p className="text-xl text-justify">DNA contains four bases: Guanine, Cytosine, Adenine, and Thymine. The complementary base pairs of guanine with cytosine and adenine with thymine connect to one another using hydrogen bonds. These hydrogen bonds between complementary nucleotides are what keeps the two strands of a DNA helix together.</p>
            </div>
        )
    }
    else if (snap.current === "vmd_mat_cindex_1") {
        return (
            <div className="h-full md:flex md:flex-col md:justify-center">
                <h1 className="text-3xl uppercase">Oxygen</h1>
                <p className="text-xl text-justify">This gene carries the information for the amino acid sequence of one of the two types of subunits of the hemoglobin molecule, which carries oxygen in the blood. A different gene, the α-globin gene, carries the information for the other type of hemoglobin subunit (a hemoglobin molecule has four subunits, two of each type). </p>
            </div>
        )
    }
    else if (snap.current === "vmd_mat_cindex_0") {
        return (
            <div className="h-full md:flex md:flex-col md:justify-center">
                <h1 className="text-3xl uppercase">Base</h1>
                <p className="text-xl text-justify">There are four nucleotides, or bases, in DNA: adenine (A), cytosine (C), guanine (G), and thymine (T). These bases form specific pairs</p>
            </div>
        )
    }

    else {
        return (
            <div className="h-full md:flex md:flex-col md:justify-center">
                <h1 className="text-2xl tracking-wider">Click on diffrent parts of DNA molecule to know more</h1>
                <p className="self-center my-8 mx-4 text-2xl tracking-wide text-justify">To view the 3D model in AR, scan the QR code<span className="md:hidden"> or click on the button below</span>.</p>

                <div className="grid place-items-center pb-8 mx-8">
                    <Image src="/chemistry/DNA_AR.png" width="250" height="250" alt="Molecule QR" className="flex p-6 text-6xl rounded-xl h-48 w-48" />
                    <a href="https://go.echo3d.co/SYVC" target="_blank" rel="noreferrer">
                        <button className="h-12 px-8 ml-8 text-base font-semibold tracking-wider text-white border rounded-full shadow-sm mt-16 bg-red-50 bg-gradient-to-r from-secondary to-tertiary hover:shadow-lg md:hidden">View in AR</button>
                    </a>
                </div>
            </div>
        )
    }
}

export default function DNA() {
    return (
        <div className="pt-20 md:pt-24 text-white">

            <Link href="/subject/chemistry" passHref>
                <button className="left-2 md:px-8 px-6 mr-1 mb-1 ease-linear transition-all duration-150 flex flex-row text-white align-middle text-xl" type="button" aria-hidden="false" aria-label="button">
                    <BiArrowBack className="h-4 mt-2" aria-hidden="false" />
                    go back
                </button>
            </Link>

            <motion.div variants={fade} initial="hidden" animate="visible" className="grid w-full py-10 place-items-center">
                <h1 className="pb-2 text-5xl font-semibold tracking-wide lg:text-6xl">
                    DNA
                </h1>
                <div className="inline-flex h-1 bg-indigo-500 rounded-full w-24"></div>
                <div className="text-justify text-xl w-86 mt-2 mx-4 md:mx-44">Each strand of a DNA molecule is composed of a long chain of monomer nucleotides. The nucleotides of DNA consist of a deoxyribose sugar molecule to which is attached a phosphate group and one of four nitrogenous bases: two purines (adenine and guanine) and two pyrimidines (cytosine and thymine). This work is based on &quot;DNA&quot; (https://sketchfab.com/3d-models/dna-60e95170b37549e3b45ee490b74bb112) by holoxica (https://sketchfab.com/holoxica) licensed under CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/). The sugar is then bound to the phosphate group by a hydrogen bond and the base by a ligation reaction. The nucleotides are connected by a double-stranded double-helix, which is the basis of the DNA molecule.
                </div>
            </motion.div>

            <div className="md:grid md:grid-cols-3 md:pr-15 pr-1">

                <div className="w-full h-128 px-4 outline-none cursor-grab md:col-span-2 lg:block">
                    <Canvas shadows dpr={[1, 2]} camera={{ position: [0, 0, 4], fov: 50 }}>
                        <ambientLight intensity={0.7} />
                        <spotLight intensity={0.5} angle={0.1} penumbra={1} position={[10, 15, 10]} castShadow />
                        <Suspense fallback={null}>
                            <Model scale={0.2} />
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
