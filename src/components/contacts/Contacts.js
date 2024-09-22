import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import './contacts.css';
import SendFormPopUp from './SendFormPopUp';

export default function Contacts() {
    const text = {
        1: 'The form has been submitted!',
        2: 'Something went wrong. Try again later.',
        3: 'Fill in all fields',
    };
    const form = useRef();
    const required = useRef();

    const [displayPopUp, setDisplayPopUp] = useState(false);
    const [textPopUp, setTextPopUp] = useState(text[1]);
    const [popUpButtonState, setPopUpButtonState] = useState(true);

    const sendEmail = (e) => {
        e.preventDefault();
        if (required.current.value) {
            emailjs
                .sendForm(
                    process.env.REACT_APP_SERVICE_ID,
                    process.env.REACT_APP_TEMPLATE_ID,
                    form.current,
                    process.env.REACT_APP_PUBLIC_KEY,
                )
                .then(
                    () => {
                        setTextPopUp(text[1]);
                        setDisplayPopUp(true);
                        setPopUpButtonState(true);
                    },
                    (error) => {
                        console.log(error.text);
                        setTextPopUp(text[2]);
                        setDisplayPopUp(true);
                        setPopUpButtonState(false);

                        setTimeout(() => setDisplayPopUp(false), 2000);
                    },
                );
        } else {
            setTextPopUp(text[3]);
            setDisplayPopUp(true);
            setPopUpButtonState(false);

            setTimeout(() => setDisplayPopUp(false), 2000);
        }
    };
    return (
        <div id="contacts">
            <h1>Let’s partner up</h1>
            {displayPopUp ? (
                <SendFormPopUp
                    text={textPopUp}
                    buttonState={popUpButtonState}
                    onSubmit={setDisplayPopUp}
                />
            ) : (
                <form id="contactsForm" ref={form} onSubmit={sendEmail}>
                    <input placeholder="name" type="text" name="name"></input>
                    <input
                        ref={required}
                        placeholder="email"
                        type="email"
                        name="email"></input>
                    <input
                        name="message"
                        placeholder="about your project"
                        type="textarea"></input>
                    <button type="submit">Send Form</button>
                </form>
            )}
        </div>
    );
}
