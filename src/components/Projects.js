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
            <div className="projects__container__title"><h2>Projects</h2></div>
            <div className="projects__container__elements">
            <div className="projects__container__element">
                <div className="projects__container__element__title">TrueEffects</div>
                <div className="projects__container__element__image"><div className="projects__container__element__image--img"><img alt="true-effects" src="./true-effects.png"/></div></div>
                <div className="projects__container__element__buttons">
                    <div className="projects__container__element__buttons__livebutton" onClick={()=>click('https://www.true-effects.pl')}><FontAwesomeIcon icon={faArrowUp}/>Live</div>
                    <div className="projects__container__element__buttons__githubbutton" onClick={()=>click('https://github.com/michal-lejwoda/true-effects')}>Github <img alt="github" src="./GitHub-Mark-32px.png"/></div>
                </div>
                <div className="projects__container__element__description">
                    A strength training app that allows user to create workouts, train and store key information about training.
                </div>
            </div>
            <div className="projects__container__element">
                <div className="projects__container__element__title">Trainer page</div>
                <div className="projects__container__element__image"><div className="projects__container__element__image--img"><img alt="trainer_page" src="./trainer.png"/></div></div>
                <div className="projects__container__element__buttons">
                    <div className="projects__container__element__buttons__livebutton" onClick={()=>click('https://www.trener-personalny-michal.pl')}><FontAwesomeIcon icon={faArrowUp}/>Live</div>
                    <div className="projects__container__element__buttons__githubbutton" onClick={()=>click('https://github.com/michal-lejwoda/trainer_page')}>Github <img alt="github"  src="./GitHub-Mark-32px.png" /></div>
                </div>
                <div className="projects__container__element__description">
                    A website designed to attract the use of a personal trainer. It has functionalities such as booking a workout or sending emails with workout details.
                </div>
            </div>
            <div className="projects__container__element">
                <div className="projects__container__element__title">Grades scrapper</div>
                <div className="projects__container__element__image"><div className="projects__container__element__image--img"><img alt="scrapper-omi" src="./scrapper-omi.png"/></div></div>
                <div className="projects__container__element__buttons">
                    <div className="projects__container__element__buttons__livebutton" onClick={()=>click('https://www.scrapper-omi.pl')}><FontAwesomeIcon icon={faArrowUp}/>Live</div>
                    <div className="projects__container__element__buttons__githubbutton" onClick={()=>click('https://github.com/michal-lejwoda/web_grades_scrapper')}>Github <img alt="github"  src="./GitHub-Mark-32px.png"/></div>
                </div>
                <div className="projects__container__element__description">
                    An application that takes key data from sites such as opencritic, metacritic, imdb using the BeatifullSoup library and displays it in a processed form readable to the user.
                </div>
            </div>
            </div>
        </div>
    )
}

export default Projects
