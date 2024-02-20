import React, {useEffect, useRef, useState} from "react"
import './App.css';
import '../src/sass/navbar.css'

import Aboutme from './components/Aboutme';
import Footer from './components/Footer';
import Header from './components/Header';
import Projects from './components/Projects';
import Technologies from './components/Technologies';
import {faBars} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {Helmet} from "react-helmet";
import {initParticlesEngine} from "@tsparticles/react";
import {loadSlim} from "@tsparticles/slim";

function App() {
    const aboutmeRef = useRef(null);
    const technologiesRef = useRef(null);
    const projectsRef = useRef(null);
    const contactRef = useRef(null)
    const navLinks = useRef(null)
    const [init, setInit] = useState(false);
    // const style = {position: "fixed", top: "50%", left: "50%", transform: "translate(-50%, -50%)"};
    useEffect(() => {
        initParticlesEngine(async (engine) => {
            await loadSlim(engine);
        }).then(() => {
            setInit(true);
        });
    }, []);

    const executeScrollAboutMe = () => {
        navLinks.current.classList.toggle("open")
        aboutmeRef.current.scrollIntoView()
    }
    const executeScrollTechnologies = () => {
        navLinks.current.classList.toggle("open")
        technologiesRef.current.scrollIntoView()
    }
    const executeScrollProjects = () => {
        navLinks.current.classList.toggle("open")
        projectsRef.current.scrollIntoView()
    }
    const executeScrollContact = () => {
        navLinks.current.classList.toggle("open")
        contactRef.current.scrollIntoView()
    }
    const hamburgerClick = () => {
        navLinks.current.classList.toggle("open")

    }
    return (
        <div className="App">
            <Helmet>
                <title>Portfolio</title>
                <link rel="icon" type="mylogo.png" href="mylogo.ico" sizes="16x16"/>
            </Helmet>
            <div>
                <nav>
                    <div className="navbar">
                        <div className="navbar__menulogo" onClick={hamburgerClick}>
                            <FontAwesomeIcon icon={faBars} size="2x"/>
                        </div>
                        <ul className="navbar__links" ref={navLinks}>
                            <li>
                                <div onClick={executeScrollAboutMe}>About me</div>
                            </li>
                            <li>
                                <div onClick={executeScrollTechnologies}>Technologies</div>
                            </li>
                            <li>
                                <div onClick={executeScrollProjects}>Projects</div>
                            </li>
                            <li>
                                <div onClick={executeScrollContact}>Contact</div>
                            </li>
                        </ul>
                    </div>
                </nav>

                <section className="header">
                    <Header executeScrollProjects={executeScrollProjects}/>
                </section>
                <section ref={aboutmeRef} className="aboutme">
                    <Aboutme init={init}/>
                </section>
                <section ref={technologiesRef} className="technologies">
                    <Technologies/>
                </section>
                <section ref={projectsRef} className="projects">
                    <Projects/>
                </section>
                <section ref={contactRef} className="footer">
                    <Footer/>
                </section>
            </div>
        </div>
    );
}

export default App;
