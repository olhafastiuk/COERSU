import './contacts.css';

export default function Contacts() {
    return (
        <div id="contactsWrapper">
            <h1>Let’s partner up</h1>
            <div id="contactsForm">
                <input placeholder="name" type="text"></input>
                <input placeholder="email" type="email"></input>
                <input placeholder="about your project" type="textarea"></input>
            </div>
            <button>Send Form</button>
        </div>
    );
}
