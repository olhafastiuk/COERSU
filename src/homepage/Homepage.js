import AboutUs from '../components/aboutUs/AboutUs';
import Header from '../components/header/Header';
import HeroBlock from '../components/heroBlock/HeroBlock';
import './homepage.css';

export default function Homepage() {
    return (
        <>
            <Header />
            <HeroBlock />
            <AboutUs />
        </>
    );
}
