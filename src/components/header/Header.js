import './header.css';
import logo from '../images/logo.png';

export default function Header() {
    return (
        <div id="headerWrapper">
            <div className="headerGroup">
                <img src={logo} alt="coersu" />
                <div>
                    <a href="">facebook</a>
                    <a href="">linkedin</a>
                    <a href="">instagram</a>
                    <a href="">behance</a>
                </div>
            </div>
            <div className="headerGroup">
                <div>
                    <a href="#aboutUs">about us</a>
                    <a href="#services">services</a>
                    <a href="#projects">our projects</a>

                    <a href="#technologies">technology</a>
                </div>
                <button className="dark">
                    <a href="#contacts">Contact us</a>
                </button>
            </div>
        </div>
    );
}
