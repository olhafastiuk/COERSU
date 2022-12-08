export default function SendFormPopUp({ display, text }) {
    return (
        <div id="pop-up" className={display ? '' : 'displayNone'}>
            <p>
                {text ? 'The form has been submitted!' : 'Fill in all fields'}
            </p>
        </div>
    );
}
