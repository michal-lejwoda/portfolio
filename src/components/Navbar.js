import React from 'react'
import '../sass/navbar.css';
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Navbar = () => {
    return (
        <div className="navbar">
            <div className="navbar__logo">LOGO</div>
            <div className="navbar__menulogo"><FontAwesomeIcon icon={faBars} size="2x" /></div>
            
        </div>
    )
}

export default Navbar
