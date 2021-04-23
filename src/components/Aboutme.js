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
            <div className="aboutme__container__title"><h2>O mnie</h2></div>
            <div className="aboutme__container__description">Nazywam się Michał Lejwoda. Jestem studentem 4 roku Informatyki na Uniwersytecie Marii Curie Skłodowskiej. Interesują mnie nowe technologie i rozwiązania w świecie web developmentu i branży IT. Tworzeniem stron internetowych zajmuję się od 3 lat. Jako back end upodobałem sobie framework Django natomiast front end piszę w bibliotece React. Jako osoba wytrwała i sumienna w dążeniu do wyznaczonych celów rozwijam swoją pasję codzienną, systematyczną pracą.
            </div>
            
        </div>
    )
}

export default Aboutme
