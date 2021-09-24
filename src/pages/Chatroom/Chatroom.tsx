import React from 'react';
import ChatMessage from "./ChatMessage"
import firebase from 'firebase/app'
import { useCollectionData } from 'react-firebase-hooks/firestore'
import { auth, firestore } from "../../firebase"

interface Message {
    text: string,
    uid: string,
    photoURL: string,
    id: string
}

function Chatroom() {
    const messagesRef = firestore.collection('messages')
    const query = messagesRef.orderBy('createdAt').limit(25)

    const [messages]: [Message[] | undefined, boolean, Error | undefined] = useCollectionData<Message>(query, { idField: 'id' })

    const [formValue, setFormValue] = React.useState('')

    const dummy = React.useRef<HTMLDivElement>(null)

    const sendMessage = async (e: React.FormEvent) => {
        e.preventDefault()
        const user = auth && auth.currentUser && auth.currentUser;

        const uid = user && user.uid
        const photoURL = user && user.photoURL

        await messagesRef.add({
            text: formValue,
            createdAt: firebase.firestore.FieldValue.serverTimestamp(),
            uid,
            photoURL
        })

        setFormValue('')
        dummy.current && dummy.current.scrollIntoView({ behavior: 'smooth' })
    }

    return (
        <div className="grid place-content-center border-4 border-blue-800 rounded-lg max-w-7xl min-w-7xl">
            <main className="bg-gray-800 p-4 w-full overflow-y-scroll flex flex-col">
                {
                    messages && messages.map(msg => <ChatMessage key={msg.id} message={msg} />)
                }
                <div ref={dummy}></div>
            </main>
            <form onSubmit={sendMessage} className="w-full flex justify-center">
                <input
                    className="h-8 p-2 w-full focus:outline-none rounded-bl-lg"
                    value={formValue}
                    onChange={e => setFormValue(e.target.value)}
                />
                <button type="submit" className="w-16 font-bold tracking-wider text-white bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">SEND</button>
            </form>
        </div>
    )
}

export default Chatroom
