import { Canvas } from "@react-three/fiber";
import { useLoader } from "@react-three/fiber";
import { Environment, OrbitControls, ContactShadows } from "@react-three/drei";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { Suspense } from "react";
import "../../i18n"
import { useTranslation } from 'react-i18next'

const Model = () => {
    const gltf = useLoader(GLTFLoader, "/DiscoverySpaceShuttle/scene.gltf");
    return (
        <>
            <primitive object={gltf.scene} scale={0.08} />
        </>
    );
};

export default function DiscoverySpaceShuttle() {
    const { t } = useTranslation();

    return (
        <>
            <div className="py-8">

                <div className="md:grid md:grid-cols-3 md:mr-15 mr-1 sm:mx-4">

                    <div className="w-full h-full px-4 outline-none cursor-pointer md:col-span-1 lg:block">
                    <Canvas shadows dpr={[1, 2]} camera={{ position: [0, 0, 4], fov: 50 }}>
                            <ambientLight intensity={0.7} />
                            <spotLight intensity={0.5} angle={0.1} penumbra={1} position={[10, 15, 10]} castShadow />
                            <Suspense fallback={null}>
                                <Model />
                                <Environment preset="city" />
                                <ContactShadows rotation-x={Math.PI / 2} position={[0, 0.2, 0]} opacity={0.25} width={10} height={10} blur={1.5} far={0.8} />
                            </Suspense>
                            <OrbitControls autoRotate />
                        </Canvas>
                    </div>

                    <div className="mt-5 md:mt-0 md:col-span-2">
                        <div className="md:flex md:flex-col md:justify-center ">

                            <h2 className="self-center mx-8 mb-4 text-5xl font-medium tracking-wide text-black font-fontVollkorn">{t('modelDiscoverySpaceShuttleTitle')}</h2>

                            <p className="self-center mx-8 text-xl font-medium tracking-wide text-justify text-black font-fontVollkorn">{t('modelDiscoverySpaceShuttleDetails')}
                            </p>

                            <p className="self-center mx-8 text-xl tracking-wide text-justify text-black font-fontVollkorn">{t('modelView')}</p>

                            <div className="grid justify-center grid-cols-1 gap-6 pb-8 mx-8 md:grid-cols-2 lg:grid-cols-2">
                                <img className="flex p-6 text-6xl rounded-xl h-64 w-64" src="https://storage.echoar.xyz/wispy-violet-4999/828c5b27-e6ab-48c8-a9b7-07a810908dd5" alt="Discovery Space Station QR" />
                                <a href="https://go.echoar.xyz/uA3y" target="_blank" rel="noreferrer">
                                    <button className="h-12 px-8 ml-12 text-base font-semibold tracking-wider text-white border rounded-full shadow-sm font-fontVollkorn lg:mt-36 sm:mt-4 bg-red-50 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 hover:shadow-lg">{t('modelViewInAR')}</button>
                                </a>
                            </div>

                        </div>
                    </div>

                </div>

            </div>
        </>
    );
}