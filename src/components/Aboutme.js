import React, {useEffect} from 'react'
import '../sass/aboutme.css'
import Aos from "aos";
import "aos/dist/aos.css";
import Particles from "@tsparticles/react";

const Aboutme = (props) => {

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
                Python and Django framework. As a persistent and conscientious person in pursuit of my goals, I develop
                my passion with daily, systematic work.
            </div>
            {props.init && <Particles
                id="tsparticles"
                options={{
                    background: {
                        color: {
                            value: "transparent",
                        },
                    },
                    fpsLimit: 120,
                    interactivity: {
                        events: {
                            onClick: {
                                enable: true,
                                mode: "push",
                            },
                            onHover: {
                                enable: true,
                                mode: "repulse",
                            },
                            resize: true,
                        },
                        modes: {
                            push: {
                                quantity: 4,
                            },
                            repulse: {
                                distance: 200,
                                duration: 0.4,
                            },
                        },
                    },
                    particles: {
                        color: {
                            value: "#ffffff",
                        },
                        links: {
                            color: "#ffffff",
                            distance: 150,
                            enable: true,
                            opacity: 0.5,
                            width: 1,
                        },
                        move: {
                            direction: "none",
                            enable: true,
                            outModes: {
                                default: "bounce",
                            },
                            random: false,
                            speed: 6,
                            straight: false,
                        },
                        number: {
                            density: {
                                enable: true,
                                area: 800,
                            },
                            value: 80,
                        },
                        opacity: {
                            value: 0.5,
                        },
                        shape: {
                            type: "circle",
                        },
                        size: {
                            value: {min: 1, max: 5},
                        },
                    },
                    detectRetina: true,
                }}
            />
            }
        </div>
    )
}

export default Aboutme
