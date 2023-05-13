import React from 'react'
import './MessageList.css'
import MessageCard from './MessageCard'

const MessageList = () => {
    const [messages, setMessages] = React.useState([])

    React.useEffect(
        () => {
            fetch('https://proejct-pager-home-default-rtdb.asia-southeast1.firebasedatabase.app/message.json')
                .then(response => response.json())
                .then(data => {
                    let messagesList = []
                    for (let key in data) {
                        messagesList.push(data[key])
                    }
                    messagesList.reverse();
                    setMessages(messagesList)
                });
        }, []
    )
    console.log(messages);
    return (
        <>
            <h1 className='message-header'>Messages</h1>
            <div className='message-container' >
                {
                    messages.length > 0 && messages.map((message, index) => { return (<MessageCard key={index} anything={message} />) })
                    /* messages.length > 0 && messages.map(
                        (messages, index) => {
                            return (
                                <div key={index} className='message-content'>
                                    <p>{messages.userName}  </p>
                                    <p>&nbsp;: &nbsp;{messages.userMessage}</p>
                                </div>
                            )
                        }
                    ) */
                }
            </div>
        </>
    )
}

export default MessageList