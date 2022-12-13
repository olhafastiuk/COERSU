import { useContext, useEffect, useState } from 'react';
import Context from '../../context/Context';
import './upButton.css';

export default function UpButton() {
    const { scroll } = useContext(Context);

    const [displayState, setDisplayState] = useState(false);
    const mobileDevice =
        navigator.userAgent.match(/Android/i) ||
        navigator.userAgent.match(/iPhone/i) ||
        navigator.userAgent.match(/iPad/i);

    useEffect(
        () => (
            window.addEventListener('scroll', () => {
                const displayHeight = window.innerHeight;
                window.pageYOffset > displayHeight
                    ? setDisplayState(true)
                    : setDisplayState(false);
            }),
            () =>
                window.addEventListener('scroll', () => {
                    const displayHeight = window.innerHeight;
                    window.pageYOffset > displayHeight
                        ? setDisplayState(true)
                        : setDisplayState(false);
                })
        ),
        [],
    );

    return (
        <div
            id="upButton"
            style={{
                display: !mobileDevice && displayState ? 'flex' : 'none',
            }}
            onClick={() => scroll('root')}>
            <svg
                viewBox="0 0 22 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M10.5288 0.195312L0.528823 10.1953C0.268386 10.4557 0.268386 10.8776 0.528823 11.138C0.789261 11.3984 1.21114 11.3984 1.47151 11.138L10.3335 2.276L10.3335 31.3333C10.3335 31.7018 10.6317 32 11.0002 32C11.3687 32 11.6669 31.7018 11.6669 31.3333L11.6669 2.276L20.5288 11.138C20.7893 11.3984 21.2111 11.3984 21.4715 11.138C21.6017 11.0078 21.6668 10.8372 21.6668 10.6666C21.6668 10.4961 21.6017 10.3255 21.4715 10.1952L11.4715 0.195249C11.2111 -0.065125 10.7893 -0.065125 10.5288 0.195312Z"
                    fill="black"
                />
            </svg>
        </div>
    );
}
