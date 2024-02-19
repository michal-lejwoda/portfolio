import React, {useEffect} from 'react'
import '../sass/aboutme.css'
import Aos from "aos";
import "aos/dist/aos.css";

const Aboutme = () => {
    useEffect(() => {
        Aos.init({duration: 2000})

    }, []);
    return (
        <div data-aos="fade-right" className="aboutme__container">
            <div className="aboutme__container__title"><h2>About me</h2></div>
            <div className="aboutme__container__description">My name is Michał Lejwoda. I graduated computer science
                with a master's degree and currently i am trying to expand my programming skills. As a self-taught
                programmer, I quickly grasp new technologies and frameworks. While i have experience with front end
                frameworks like React, my true passion and preference lie in back end development especially using
                Python and Django framework. As a persistent and conscientious person in pursuit of my goals, I develop my passion with daily, systematic work.
            </div>

        </div>
    )
}

export default Aboutme
