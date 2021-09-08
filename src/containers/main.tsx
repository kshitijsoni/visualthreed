import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { motion } from "framer-motion"

function Main() {

    const fadeNav = {
        hidden: {
            opacity: 0,
            y: -80,
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                delay: .4,
            }
        },
    }

    const fadeChatbot = {
        hidden: {
            scale: .8,
            opacity: 0
        },
        visible: {
            scale: 1,
            opacity: 1,
            transition: {
                delay: .4
            }
        },
    }

    const fadeFooter = {
        hidden: {
            opacity: 0,
            y: 80,
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                delay: .4,
            }
        },
    }

    return (
        <div>
            Home
        </div>
    )
}

export default Main
