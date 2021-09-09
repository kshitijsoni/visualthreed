import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { motion } from "framer-motion"
import Navbar from '../components/Navbar/Navbar'
import Home from "../pages/Home/Home"
import Learn from "../pages/Learn/Learn"
import FunZone from "../pages/FunZone/FunZone"
import TicTacToe from "../pages/FunZone/Games/TicTacToe"
import Contact from "../pages/Contact/Contact"
import Page404 from '../pages/404/404page'
import Chatbot from '../components/Chatbot/Chatbot';
import Footer from "../components/Footer/Footer"

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
        <Router>
            <motion.div variants={fadeNav} initial="hidden" animate="visible">
                <Navbar />
            </motion.div>
            <Switch>
                <Route path='/' exact component={Home} />
                <Route path='/learn' exact component={Learn} />
                {/* <Route path='/class1' exact component={ClassRoom1} />
            <Route path='/solarsystemexplore' exact component={SloarSystemExplore} />
            <Route path='/perseveranceexplore' exact component={PerseveranceExplore} /> */}
                <Route path='/funzone' exact component={FunZone} />
                <Route path='/tictactoe' exact component={TicTacToe} />
                <Route path='/contact' exact component={Contact} />
                <Route component={Page404} />
            </Switch>

            <motion.div variants={fadeChatbot} initial="hidden" animate="visible" >
                <Chatbot />
            </motion.div>

            <motion.div variants={fadeFooter} initial="hidden" animate="visible" >
                <Footer />
            </motion.div>

        </Router>
    )
}

export default Main
