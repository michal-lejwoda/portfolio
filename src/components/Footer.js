import React,{useEffect} from 'react'
import {faEnvelope} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import '../sass/footer.css'
import Aos from "aos";
import "aos/dist/aos.css";
const Footer = () => {
    useEffect(()=>{
        Aos.init({duration:2000})
    
    },[]);
    const click = (web) => {
        window.location.href = web;
    }
    return (
        <div className="footer__container">
            <div className="footer__container__title"><h2>Contact</h2></div>
            <div className="footer__container__boxes">
                <div data-aos="fade-up" className="footer__container__boxes__mail">
                    <div className="footer__container__boxes__mail__title"><h2>Mail</h2></div>
                    <div className="footer__container__boxes__mail__icon"><FontAwesomeIcon icon={faEnvelope} size={"2x"}/></div>
                    <div className="footer__container__boxes__mail__emailaddress">michal.lejwoda@gmail.com</div>
                </div>
                <div data-aos="fade-up" onClick={() => click('https://github.com/saxatachi')} className="footer__container__boxes__github">
                    <div className="footer__container__boxes__github__title"><h2>Github</h2></div>
                    <div className="footer__container__boxes__github__icon"><img alt="github" src="./GitHub-Mark-32px.png"/></div>
                    <div className="footer__container__boxes__github__emailaddress">Kliknij Tutaj.</div>
            </div>
            </div>
            <div className="footer__container__rest">Michał Lejwoda - Portfolio 2024r.</div>
        </div>
    )
}

export default Footer;
