import React from 'react'
import './Form.css'
const Form = () => {
    const [name, setName] = React.useState('')
    const [message, setMessage] = React.useState('')
    const [date, setDate] = React.useState('')

    const handleNameChange = (e) => {
        setName(e.target.value);
        setDate(new Date().toLocaleString());
        // console.log(e.target.value);
    }
    const handleMessageChange = (e) => {
        setMessage(e.target.value);
        // console.log(e.target.value);
    }

    const handleSubmit = () => {
        console.log(`before trim ${name} : ${message} + ${date}`);

        const formName = name.trim();
        const formMessage = message.trim();

        if (formName === '' || formMessage === '') {
            alert('please fill all the fields')
            return;
        }
        if (formName.length < 3) {
            alert(`Name should not be less than 3 characters`)
            return;
        }
        if (formMessage.length < 5) {
            alert(`Message should have minimum 5 characters`);
            return;
        }

        //Post message
        fetch('https://proejct-pager-home-default-rtdb.asia-southeast1.firebasedatabase.app/message.json',
            {
                method: "POST",
                headers: {
                    "Content-type": "application/json;charset=utf-8"
                },
                body: JSON.stringify(
                    {
                        userName: name,
                        userMessage: message,
                        userDate: date
                    })
            }).then(
                (repsonse) => {
                    if (repsonse.status === 200) {
                        setName('')
                        setMessage('')
                        setDate('')
                        alert('Message sent successfully');
                    }
                }
            )
        // var d = new Date();
        console.log(`after trim ${formName} : ${formMessage}`);

    }

    return (
        <div className='formcontainer'>
            <div className="heading">
                <h2>Send message to Sanidhya</h2>
            </div>
            <div className="inputname">
                <svg width="4%" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                </svg>
                <input type="text" id="name" onChange={handleNameChange} placeholder='Francis pope' value={name} />
            </div>
            <div className="inputmessage">
                <svg width="4%" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 12.76c0 1.6 1.123 2.994 2.707 3.227 1.068.157 2.148.279 3.238.364.466.037.893.281 1.153.671L12 21l2.652-3.978c.26-.39.687-.634 1.153-.67 1.09-.086 2.17-.208 3.238-.365 1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
                </svg>
                <input type="text" id="message" onChange={handleMessageChange} placeholder='Bonjour' value={message} />
            </div>
            <div className="btn">
                <button type="submit" onClick={handleSubmit}>Send Message</button>
            </div>
        </div>
    )
}

export default Form;