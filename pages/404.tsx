import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function Page404() {
  return (
    <div className="pt-8 md:pt-16 w-full md:h-screen">

      <div className="stars z-0"></div>
      <div className="stars1 z-0"></div>
      <div className="stars2 z-0"></div>
      <div className="shooting-stars z-0"></div>

      <div className="h-full md:grid md:grid-cols-2 px-4 md:px-36">
        <div className='h-4/5 pt-16'>
          <Link href="/" passHref>
            <Image src="/404/earth.svg" height="400" width="400" alt="Earth" className="md:inset-x md:bottom-20 cursor-pointer " />
          </Link>
          <Image src="/404/moon.svg" height="200" width="200" alt='moon' className="mt-12 md:top-44 ml-52" />
        </div>

        <div className="pl-4 md:pl-16 md:mt-36 py-4 tracking-wider text-left text-white md:flex md:flex-col md:justify-center italic">
          <div className="box_astronaut">
            <Image src="/404/astronaut.png" height="250" width="220" alt="Astronaut" className="mt-16 object_astronaut" />
          </div>
          <h1 className="text-6xl md:text-9xl">404</h1>
          <h1 className="text-2xl md:text-5xl">Page not Found</h1>
          <h1 className="text-xl md:text-3xl">UH OH! Looks like you are lost in space</h1>
          <h1 className="text-xl md:text-3xl">Click on Earth to land on home page</h1>
        </div>
      </div>

    </div>
  )
}
