import React from 'react'
import { faArrowUp} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import '../sass/projects.css'
const Projects = () => {
    const click = (web) => {
        window.location.href = web;
    }
    return (
        <div className="projects__container">
            <div className="projects__container__title"><h2>Projekty</h2></div>
            <div className="projects__container__elements">
            <div className="projects__container__element">
                <div className="projects__container__element__title">TrueEffects</div>
                <div className="projects__container__element__image"><div className="projects__container__element__image--img"><img alt="trueeffects" src="./trueeffects.png"/></div></div>
                <div className="projects__container__element__buttons">
                    <div className="projects__container__element__buttons__livebutton" onClick={()=>click('https://true-effects.herokuapp.com/')}><FontAwesomeIcon icon={faArrowUp}/>Live</div>
                    <div className="projects__container__element__buttons__githubbutton" onClick={()=>click('https://github.com/saxatachi/true-effects-deploy')}>Github <img alt="github" src="./GitHub-Mark-32px.png"/></div>
                </div>
                <div className="projects__container__element__description">
                    The app is designed to facilitate strength training at home. It has the function of adding measurements, training goals and arranging workouts. The app also allows user to monitor workout time as well as save completed repetitions in a database.
                </div>
            </div>
            <div className="projects__container__element">
                <div className="projects__container__element__title">Sporty Walki</div>
                <div className="projects__container__element__image"><div className="projects__container__element__image--img"><img alt="sportywalki" src="./sportywalki.png"/></div></div>
                <div className="projects__container__element__buttons">
                    <div className="projects__container__element__buttons__livebutton" onClick={()=>click('https://sportywalki.herokuapp.com/')}><FontAwesomeIcon icon={faArrowUp}/>Live</div>
                    <div className="projects__container__element__buttons__githubbutton" onClick={()=>click('https://github.com/saxatachi/Blog')}>Github <img alt="github"  src="./GitHub-Mark-32px.png" /></div>
                </div>
                <div className="projects__container__element__description">
                    Strona napisana w Django umożliwiająca użytkownikom przeczytanie o aktualnych informacjach oraz wydarzeniach w świecie sportów walki.
                </div>
            </div>
            <div className="projects__container__element">
                <div className="projects__container__element__title">Atrakcje</div>
                <div className="projects__container__element__image"><div className="projects__container__element__image--img"><img alt="atrakcje" src="./atrakcje1.png"/></div></div>
                <div className="projects__container__element__buttons">
                    <div className="projects__container__element__buttons__livebutton" onClick={()=>click('https://atrakcje.herokuapp.com/')}><FontAwesomeIcon icon={faArrowUp}/>Live</div>
                    <div className="projects__container__element__buttons__githubbutton" onClick={()=>click('https://github.com/saxatachi/Atrakcje')}>Github <img alt="github"  src="./GitHub-Mark-32px.png"/></div>
                </div>
                <div className="projects__container__element__description">
                    Aplikacja wykonana w Django oraz React umożliwiająca użytkownikowi wyświetlenie informacji z bazy danych (PostGis) o zabytkach lub wydarzeniach miasta Lublin oraz wyznaczyć trasę między nimi dzięki bibliotece react-leaflet. Aplikacja umożliwia również dodawanie propozycji punktów.
                </div>
            </div>
            </div>
            
        </div>
    )
}

export default Projects
