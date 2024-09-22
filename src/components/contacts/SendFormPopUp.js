export default function SendFormPopUp({ text, buttonState, onSubmit }) {
    return (
        <div id="pop-up">
            <p>{text}</p>
            {buttonState && (
                <button onClick={() => onSubmit(false)}>
                    Send Another Answer
                </button>
            )}
        </div>
    );
}
