import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import './contacts.css';
import SendFormPopUp from './SendFormPopUp';

export default function Contacts() {
    const form = useRef();
    const required = useRef();

    const [displayPopUp, setDisplayPopUp] = useState(false);
    const [textPopUp, setTextPopUp] = useState(true);

    const sendEmail = (e) => {
        e.preventDefault();
        if (required.current.value) {
            emailjs
                .sendForm(
                    'service_gjphwpo',
                    'template_b37kn6e',
                    form.current,
                    'Pc1niRr_NeBN3Mt65',
                )
                .then(
                    () => {
                        setTextPopUp(true);
                        setDisplayPopUp(true);
                        setTimeout(() => setDisplayPopUp(false), 2000);
                    },
                    (error) => {
                        console.log(error.text);
                    },
                );
        } else {
            setTextPopUp(false);
            setDisplayPopUp(true);
            setTimeout(() => setDisplayPopUp(false), 2000);
        }
    };
    return (
        <div id="contacts">
            <h1>Let’s partner up</h1>
            <form id="contactsForm" ref={form} onSubmit={sendEmail}>
                <input placeholder="name" type="text" name="name"></input>
                <input
                    ref={required}
                    placeholder="email"
                    type="email"
                    name="user_email"></input>
                <input
                    name="message"
                    placeholder="about your project"
                    type="textarea"></input>
                <button type="submit">Send Form</button>
            </form>
            <SendFormPopUp display={displayPopUp} text={textPopUp} />
        </div>
    );
}
