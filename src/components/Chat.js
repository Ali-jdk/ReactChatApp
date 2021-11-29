import React, {useEffect, useState, useRef} from "react";
import SignOut from "./SignOut";
import {auth, db} from "../firebase";
import SendMessage from "./SendMessage";


function Chat() {
    const [messages, setMessages] = useState([])
    const scroll = useRef()
    useEffect(() => {

        db.collection('messages').orderBy('createdAt').limit(50).onSnapshot(snapshot => {
            setMessages(snapshot.docs.map(doc => doc.data()));
        })
    }, [])
    return (
        <div>
            <div className="msgs">
                <SignOut/>
                {messages.map(({id, text, photoURL, uid}) => (
                    <div>
                        <div key={id} className={`msg ${uid === auth.currentUser.uid ? 'sent' : 'received'}`}>
                            <img src={photoURL} alt={"pfp"}/>
                            <p>{text}</p>
                        </div>
                    </div>
                ))}
            </div>
            <SendMessage scroll={scroll}/>
            <div ref={scroll}/>
        </div>
    );
}

export default Chat;
