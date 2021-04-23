import React,{useRef} from "react"
import logo from './logo.svg';
import './App.css';
import Aboutme from  './components/Aboutme';

import Footer from  './components/Footer';
import Header from  './components/Header';
import Navbar from  './components/Navbar';
import Projects from  './components/Projects';
import Technologies from  './components/Technologies';
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function App() {
  const aboutmeRef = useRef(null);
  const technologiesRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null)
  const navLinks = useRef(null)
  const hamburger = useRef(null)
  const executeScrollAboutMe = () => {aboutmeRef.current.scrollIntoView()}
  const executeScrollTechnologies = () => technologiesRef.current.scrollIntoView()
  const executeScrollProjects = () => projectsRef.current.scrollIntoView()
  const executeScrollContact = () => contactRef.current.scrollIntoView()
  const hamburgerClick = () => {
    navLinks.current.classList.toggle("open")
    console.log("otwarcie")
  }
  return (
    <div className="App">
      <nav>
        <div className="navbar">
          {/* <div className="navbar__logo" onClick={executeScrollTechnologies}>LOGO</div> */}
          <div className="navbar__menulogo" onClick={hamburgerClick}><FontAwesomeIcon icon={faBars} size="2x" /></div>   
          <ul className="navbar__links" ref={navLinks}>
            <li><a onClick={executeScrollAboutMe} >O mnie</a></li>
            <li><a onClick={executeScrollTechnologies}>Technologie</a></li>
            <li><a onClick={executeScrollProjects}>Projekty</a></li>
            <li><a onClick={executeScrollContact}>Kontakt</a></li>
          </ul>
          
          
        </div>
      </nav>
      <section className="header"><Header executeScrollProjects={executeScrollProjects}/></section>
      <section ref={aboutmeRef} className="aboutme"><Aboutme /></section>
      <section ref={technologiesRef} className="technologies"><Technologies /></section>
      <section ref={projectsRef} className="projects"><Projects /></section>
      <section ref={contactRef} className="footer"><Footer /></section>

    </div>
  );
}

export default App;
