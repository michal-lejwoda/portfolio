import React,{useEffect} from 'react'
import '../sass/aboutme.css'
import Aos from "aos";
import "aos/dist/aos.css";
const Aboutme = () => {
    useEffect(()=>{
        Aos.init({duration:2000})
    
    },[]);
    return (
        <div data-aos="fade-right" className="aboutme__container">
            <div className="aboutme__container__title"><h2>About me</h2></div>
            <div className="aboutme__container__description">My name is Michał Lejwoda. I am a master's graduate from Marie Curie Sklodowska University.
                I am interested in new technologies and solutions in the world of web development and IT industry.
                I have been developing websites for 5 years. My main technologies are django and react.
                As a persistent and conscientious person in pursuit of my goals, I develop my passion with daily, systematic work.
            </div>
            
        </div>
    )
}

export default Aboutme
