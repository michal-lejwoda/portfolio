import React from 'react';
import '../sass/header.css';
// import Particles from "@tsparticles/react";

const Header = (props) => {

    return (
        <div className="header__container">
            <div className="header__particles"></div>
            {/*{window.innerWidth >= 760 &&*/}
            {/*    <Particles*/}
            {/*        id="tsparticles"*/}
            {/*        // particlesLoaded={particlesLoaded}*/}
            {/*        options={{*/}
            {/*            background: {*/}
            {/*                color: {*/}
            {/*                    value: "#0d47a1",*/}
            {/*                },*/}
            {/*            },*/}
            {/*            fpsLimit: 120,*/}
            {/*            interactivity: {*/}
            {/*                events: {*/}
            {/*                    onClick: {*/}
            {/*                        enable: true,*/}
            {/*                        mode: "push",*/}
            {/*                    },*/}
            {/*                    onHover: {*/}
            {/*                        enable: true,*/}
            {/*                        mode: "repulse",*/}
            {/*                    },*/}
            {/*                    resize: true,*/}
            {/*                },*/}
            {/*                modes: {*/}
            {/*                    push: {*/}
            {/*                        quantity: 4,*/}
            {/*                    },*/}
            {/*                    repulse: {*/}
            {/*                        distance: 200,*/}
            {/*                        duration: 0.4,*/}
            {/*                    },*/}
            {/*                },*/}
            {/*            },*/}
            {/*            particles: {*/}
            {/*                color: {*/}
            {/*                    value: "#ffffff",*/}
            {/*                },*/}
            {/*                links: {*/}
            {/*                    color: "#ffffff",*/}
            {/*                    distance: 150,*/}
            {/*                    enable: true,*/}
            {/*                    opacity: 0.5,*/}
            {/*                    width: 1,*/}
            {/*                },*/}
            {/*                move: {*/}
            {/*                    direction: "none",*/}
            {/*                    enable: true,*/}
            {/*                    outModes: {*/}
            {/*                        default: "bounce",*/}
            {/*                    },*/}
            {/*                    random: false,*/}
            {/*                    speed: 6,*/}
            {/*                    straight: false,*/}
            {/*                },*/}
            {/*                number: {*/}
            {/*                    density: {*/}
            {/*                        enable: true,*/}
            {/*                        area: 800,*/}
            {/*                    },*/}
            {/*                    value: 80,*/}
            {/*                },*/}
            {/*                opacity: {*/}
            {/*                    value: 0.5,*/}
            {/*                },*/}
            {/*                shape: {*/}
            {/*                    type: "circle",*/}
            {/*                },*/}
            {/*                size: {*/}
            {/*                    value: {min: 1, max: 5},*/}
            {/*                },*/}
            {/*            },*/}
            {/*            detectRetina: true,*/}
            {/*        }}*/}
            {/*    />*/}
            {/*}*/}

            <div className="header__container__box">

                <div className="header__container__titles">
                    <div className="header__container__titles__title">
                        <span data-text="Hello">Hello</span>
                    </div>
                    <div className="header__container__titles__secondtitle">
                        <span data-text="My name is Michał">My name is Michał</span>
                    </div>
                    <div className="header__container__titles__thirdtitle">
                        <div className="header__container__titles__thirdtitle__title">
                            FullStack Developer
                        </div>
                        <div className="header__container__titles__thirdtitle__technologies">
                            <span>Front End</span>
                            <span className="verticalline">|</span>
                            <span>Back End</span>
                        </div>
                        <div className="header__container__titles__thirdtitle__myprojects">
                            <button onClick={props.executeScrollProjects}>My projects</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Header
