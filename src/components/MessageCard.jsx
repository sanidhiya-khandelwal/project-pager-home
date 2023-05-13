import React from 'react'
import './MessageCard.css'

const MessageCard = ({ anything, index }) => {
    return (
        <div className='message-card-container'>
            <p className='username'>Sender Name : {anything.userName}</p>
            <p className='usermesssage'>Message : {anything.userMessage}</p>
            <p className="date">{anything.userDate}</p>
        </div>
    )
}

export default MessageCard