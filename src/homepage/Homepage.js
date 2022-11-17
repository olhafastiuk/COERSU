import AboutUs from '../components/aboutUs/AboutUs';
import Header from '../components/header/Header';
import HeroBlock from '../components/heroBlock/HeroBlock';
import Projects from '../components/projects/Projects';
import Services from '../components/services/Services';
import Technologies from '../components/technologies/Technologies';
import WhyUsBlock from '../components/whyUsBlock/WhyUsBlock';
import './homepage.css';

export default function Homepage() {
    return (
        <>
            <Header />
            <HeroBlock />
            <AboutUs />
            <Services />
            <Projects />
            <Technologies />
            <WhyUsBlock />
        </>
    );
}
