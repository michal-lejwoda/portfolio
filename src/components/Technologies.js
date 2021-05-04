import React,{useEffect} from 'react'
import '../sass/technologies.css';
import Aos from "aos";
import "aos/dist/aos.css";

const Technologies = props => {
    useEffect(()=>{
        Aos.init({duration:2000})
    
    },[]);
    return (
        <div className="technologies__container">
            <div data-aos="fade-right" className="technologies__container__title"><h2>Główne Technologie</h2></div>
            <div className="technologies__container__elements">
            <div data-aos="fade-down" className="technologies__container__element">
                <div className="technologies__container__element__image">
                    <img alt="html"  src="./html-icon.png"/>
                </div>
                <div className="technologies__container__element__title">Html</div>
                <div className="technologies__container__element__description">Od HTML oraz CSS wszystko się zaczęło, dlatego znam HTML bardzo dobrze, piszę kod wydajny, prosty do odczytu oraz w pełni poprawny semantycznie.</div>
            </div>
            <div data-aos="fade-down"  className="technologies__container__element">
                <div className="technologies__container__element__image">
                    <img alt="css" src="./css-icon.png"/>
                </div>
                <div className="technologies__container__element__title">Css</div>
                <div className="technologies__container__element__description">CSS jest to technologia, z którą miałem styczność od samego początku Mojej przygody z tworzeniem stron internetowych. Umiem pisać strony w pełni responsywne, działające dobrze na wszystkich najpopularniejszych przeglądarkach</div>
            </div>
            <div data-aos="fade-down" className="technologies__container__element">
            <div className="technologies__container__element__image">
                    <img alt="js" src="./js-icon.png"/>
                </div>
                <div className="technologies__container__element__title">JavaScript</div>
                <div className="technologies__container__element__description">Posiadam solidne podstawy w języku javascript. Posiadam styczność również z biblioteką JQuery</div>
            </div>
            <div data-aos="fade-down" className="technologies__container__element">
            <div className="technologies__container__element__image">
                    <img alt="django" src="./django-icon.png"/>
            </div>
            <div className="technologies__container__element__title">Django</div>
            <div className="technologies__container__element__description">Jest to framework w którym piszę swój back end. Potrafię tworzyć efektywne Rest Api oraz tworzyć testy jednostkowe. Posługuję się również całkiem sprawnie ORM oraz bazami danych</div>
            </div>
            <div data-aos="fade-down" className="technologies__container__element">
                <div className="technologies__container__element__image">
                    <img alt="react" src="./react-icon.png"/>
                </div>
                <div className="technologies__container__element__title">React</div>
                <div className="technologies__container__element__description">Jest to biblioteka w której piszę mój front end. Podczas tworzenia kodu głównie używam hooków oraz React Routera.</div>
            </div>
            <div data-aos="fade-down" className="technologies__container__element">
                <div className="technologies__container__element__image">
                    <img alt="git" src="./git-icon.png"/>
                </div>
                <div className="technologies__container__element__title">Git</div>
                <div className="technologies__container__element__description">Potrafię korzystać z najpopularniejszego systemu kontroli wersji jakim jest Git jak i serwisu Github. Nie obce są mi tematy commitów oraz branchów oraz cyklów pracy takich jak Gitflow czy Feature Branching. </div>
            </div>
            </div>
            <div className="technologies__container__secondtitle"><h2>Pozostałe Technologie</h2></div>
            <div className="technologies__container__restelement">
            <div className="technologies__container__restelement__title">
                Redux
            </div>
            <div className="technologies__container__restelement__title">
                Python
            </div>
            <div className="technologies__container__restelement__title">
                Sass
            </div>
            <div className="technologies__container__restelement__title">
                Django Rest Framework
            </div>
            <div className="technologies__container__restelement__title">
                Rest
            </div>
            <div className="technologies__container__restelement__title">
                PostgreSQL
            </div>
            <div className="technologies__container__restelement__title">
                MySQL
            </div>
            <div className="technologies__container__restelement__title">
                GitHub
            </div>
            <div className="technologies__container__restelement__title">
                Gitlab
            </div>
            <div className="technologies__container__restelement__title">
                Mercurial
            </div>
            <div className="technologies__container__restelement__title">
                Celery
            </div>
            <div className="technologies__container__restelement__title">
                Bem
            </div>
            <div className="technologies__container__restelement__title">
                Redis
            </div>
            <div className="technologies__container__restelement__title">
                Wzorce projektowe
            </div>
            <div className="technologies__container__restelement__title">
                Docker
            </div>
            <div className="technologies__container__restelement__title">
                Technologie gis
            </div>
            <div className="technologies__container__restelement__title">
                Heroku
            </div>
            </div>


            
        </div>
    )
}


export default Technologies
