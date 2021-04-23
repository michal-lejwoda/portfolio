import React,{useRef} from "react"
import './App.css';
import '../src/sass/navbar.css'
import Aboutme from  './components/Aboutme';
import Footer from  './components/Footer';
import Header from  './components/Header';
import Projects from  './components/Projects';
import Technologies from  './components/Technologies';
import { faBars} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {Helmet} from "react-helmet";

function App() {
  const aboutmeRef = useRef(null);
  const technologiesRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null)
  const navLinks = useRef(null)
  const executeScrollAboutMe = () => {
    navLinks.current.classList.toggle("open")
    aboutmeRef.current.scrollIntoView()
  }
  const executeScrollTechnologies = () => 
  { 
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
        <title>Portolio</title>
        
        <link rel="icon" type="mylogo.png" href="mylogo.ico" sizes="16x16" />
      </Helmet>
      <nav>
        <div className="navbar">
          <div className="navbar__menulogo" onClick={hamburgerClick}><FontAwesomeIcon icon={faBars} size="2x" /></div>   
          <ul className="navbar__links" ref={navLinks}>
            <li><div onClick={executeScrollAboutMe} >O mnie</div></li>
            <li><div onClick={executeScrollTechnologies}>Technologie</div></li>
            <li><div onClick={executeScrollProjects}>Projekty</div></li>
            <li><div onClick={executeScrollContact}>Kontakt</div></li>
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
