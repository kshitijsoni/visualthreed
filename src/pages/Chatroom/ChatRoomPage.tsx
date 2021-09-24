import { useTranslation } from 'react-i18next'
import { motion } from "framer-motion"
import ChatRoom from "./Chatroom"

function ChatRoomPage() {

    const { t } = useTranslation();

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

    const fadeDesc = {
        hidden: {
            scale: .8,
            opacity: 0
        },
        visible: {
            scale: 1,
            opacity: 1,
            transition: {
                delay: .8,
            }
        },
    }

    const fadeBottom = {
        hidden: {
            opacity: 0,
            y: 80,
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                delay: .6,
            }
        },
    }

    return (
        <div className="pt-16 bg-homeImg">

            <motion.div variants={fadeLogo} initial="hidden" animate="visible" className="grid w-full py-10 place-items-center">
                <h1 className="pb-2 text-5xl font-semibold tracking-wide font-dancingScript lg:text-6xl">
                    {t('chatroomLogo')}
                </h1>
                <div className="inline-flex h-1 bg-indigo-500 rounded-full w-44"></div>
            </motion.div>

            <motion.div variants={fadeDesc} initial="hidden" animate="visible" className="font-sourceSerifPro italic md:pl-12 pl-10 text-2xl">{t('charroomDesc')}</motion.div>

            <motion.div variants={fadeBottom} initial="hidden" animate="visible" className="font-sourceSerifPro flex justify-center items-center h-screen mx-4">
                <ChatRoom />
            </motion.div>
        </div>
    );
}

export default ChatRoomPage;
