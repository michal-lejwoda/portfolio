import React, {useEffect, useState} from 'react';
import '../sass/header.css';
import Particles, {initParticlesEngine} from "@tsparticles/react";
import {loadSlim} from "@tsparticles/slim";
// import Particles from "@tsparticles/react";

const Header = () => {
    const [init, setInit] = useState(false);

    // this should be run only once per application lifetime
    useEffect(() => {
        initParticlesEngine(async (engine) => {
            await loadSlim(engine);
        }).then(() => {
            setInit(true);
        });
    }, []);
    return (
        <div className="header__container">
            <div className="header__particles"></div>
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
                        {/*<div className="header__container__titles__thirdtitle__myprojects">*/}
                        {/*    <button onClick={props.executeScrollProjects}>My projects</button>*/}
                        {/*</div>*/}
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Header
