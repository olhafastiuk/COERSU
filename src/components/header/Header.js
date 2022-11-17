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
                    <a href="#aboutUsWrapper">about us</a>
                    <a href="#servicesWrapper">services</a>
                    <a href="#projectsWrapper">our projects</a>

                    <a href="#technologiesWrapper">technology</a>
                </div>
                <button className="dark">Contact us</button>
            </div>
        </div>
    );
}
