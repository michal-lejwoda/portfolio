import React,{useEffect} from 'react'
import '../sass/technologies.css';
import Aos from "aos";
import "aos/dist/aos.css";

const Technologies = props => {
    useEffect(()=>{
        Aos.init({duration:500})
    },[]);
    return (
        <div className="technologies__container">
            <div data-aos="fade-right" className="technologies__container__title"><h2>My Technologies</h2></div>
            <div className="technologies__container__elements">
            <div data-aos="fade-down" className="technologies__container__element">
                <div className="technologies__container__element__image">
                    <img alt="html"  src="./html-icon.png"/>
                </div>
                <div className="technologies__container__element__title">Html</div>
                <div className="technologies__container__element__description">HTML and CSS is where it all started, so I know HTML very well. I write code that is efficient, easy to read and fully semantically correct.</div>
            </div>
            <div data-aos="fade-down"  className="technologies__container__element">
                <div className="technologies__container__element__image">
                    <img alt="css" src="./css-icon.png"/>
                </div>
                <div className="technologies__container__element__title">Css</div>
                <div className="technologies__container__element__description">CSS is a technology that I have been familiar with since the very beginning of my web development adventure. I know how to write fully responsive websites that work well on all most popular browsers</div>
            </div>
            <div data-aos="fade-down" className="technologies__container__element">
            <div className="technologies__container__element__image">
                    <img alt="js" src="./js-icon.png"/>
                </div>
                <div className="technologies__container__element__title">JavaScript</div>
                <div className="technologies__container__element__description">I have a solid foundation in javascript. In addition to javascript, I also know the basics of typescript</div>
            </div>
            <div data-aos="fade-down" className="technologies__container__element">
            <div className="technologies__container__element__image">
                    <img alt="django" src="./django-icon.png"/>
            </div>
            <div className="technologies__container__element__title">Django</div>
            <div className="technologies__container__element__description">Django is my main as well as first major framework. I can create an effective Rest Api and create unit tests also I use ORM and databases quite efficiently.</div>
            </div>
            <div data-aos="fade-down" className="technologies__container__element">
                <div className="technologies__container__element__image">
                    <img alt="react" src="./react-icon.png"/>
                </div>
                <div className="technologies__container__element__title">React</div>
                <div className="technologies__container__element__description">React is my main javascript framework. I use this technology in most of my projects. When writing my code I use hooks and take care of optimizations.</div>
            </div>
            <div data-aos="fade-down" className="technologies__container__element">
                <div className="technologies__container__element__image">
                    <img alt="git" src="./git-icon.png"/>
                </div>
                <div className="technologies__container__element__title">Git</div>
                <div className="technologies__container__element__description">I can use popular version control system like Git as well as the Github and Gitlab services. I am no stranger to the topics of commits and branches and workflows such as Gitflow.</div>
            </div>
            </div>
            <div className="technologies__container__secondtitle"><h2>Rest technologies</h2></div>
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
                    Fast Api
                </div>
                <div className="technologies__container__restelement__title">
                    Docker
                </div>
                <div className="technologies__container__restelement__title">
                    Gis Technologies
                </div>
                <div className="technologies__container__restelement__title">
                    Heroku
                </div>
                <div className="technologies__container__restelement__title">
                    Alembic
                </div>
            </div>
        </div>
    )
}


export default Technologies
