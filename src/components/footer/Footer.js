import './footer.css';
import logo from '../images/logo.png';

export default function Footer() {
    return (
        <div id="footerWrapper">
            <div>
                <div className="logo">
                    <svg
                        viewBox="0 0 166 165"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <circle cx="83" cy="82.5" r="82.5" fill="white" />
                        <path
                            d="M32.5 132.099L46.3649 87L108 98.868L75 113.393L32.5 132.099Z"
                            fill="white"
                        />
                        <path
                            d="M37.5 13.5L70 42.8684M124 91.5L79 50.9737M164.5 74L144 83.0229M22.5 136.5L32.5 132.099M95.5 2L88.9301 21.5M79 50.9737L88.9301 21.5M79 50.9737L70 42.8684M88.9301 21.5L157 46M22.5 27L29.5 86.3459M70 42.8684L54.9732 59M7 110.5L54.9732 59M54.9732 59L46.3649 87M32.5 132.099L46.3649 87M32.5 132.099L75 113.393M46.3649 87L108 98.868M108 98.868L144 83.0229M108 98.868L75 113.393M144 83.0229V123.5M75 113.393L99 116.964M153 125L99 116.964M99 116.964L79 164"
                            stroke="black"
                            stroke-width="2"
                        />
                    </svg>
                    <img src={logo} alt="coersu" />
                </div>
                <div className="footerGroup">
                    <a href="#aboutUs">about us</a>
                    <a href="#services">services</a>
                    <a href="#projects">our projects</a>

                    <a href="#technologies">technology</a>
                </div>
                <div className="footerGroup">
                    <a href="">facebook</a>
                    <a href="">linkedin</a>
                    <a href="">instagram</a>
                    <a href="">behance</a>
                </div>
            </div>
            <p>© 2022. coersu | all rights reserved</p>
        </div>
    );
}
