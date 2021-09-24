import { auth } from "../../firebase"

interface Message {
    text: string,
    uid: string,
    photoURL: string,
    id: string
}

type ChatMessageProps = {
    message: Message,
    key: string
}

function ChatMessage(props: ChatMessageProps) {
    const { text, uid, photoURL } = props.message
    const messageClass = auth.currentUser != null && uid === auth.currentUser.uid ? 'sent flex-row-reverse text-white self-end' : 'received'
    return <div className={`message ${messageClass} flex items-center`}>
        <img src={photoURL} className="w-8 h-8 m-2 rounded-full shadow-lg bg-gray-500" />
        <p className="flex ml-1 h-auto text-md font-normal p-1 items-end rounded-md">{text}</p>
    </div>
}

export default ChatMessage
