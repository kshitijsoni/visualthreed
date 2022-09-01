import React, { useState, useEffect } from "react";
import Head from 'next/head'
import Navbar from './navbar'
import Footer from './footer'
import Preloader from './preloader'
import Chatbot from "./chatbot"

export default function Layout({ children }: { children: React.ReactNode }) {

    const [loading, setLoading] = useState(true)
    useEffect(() => {
        setTimeout(() => setLoading(false), 2500)
    }, [])

    return (
        <>
            <Head>
                <title>Visual3D</title>
                <meta name="description" content="Visual3D is an AR-based web platform for students" />
                <link rel="icon" href="/skillcept.png" />
            </Head>

            {loading === false ? (
                <div className='font-sansSerif'>
                    <Navbar />
                    <main>{children}</main>
                    <Chatbot />
                    <Footer />
                </div>
            ) : (
                <Preloader />
            )}
        </>
    )
}
