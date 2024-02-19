import React from 'react';
import '../sass/header.css';

const Header = () => {
    return (
        <div className="header__container">
            <div className="header__particles"></div>
            <div className="header__container__box">
                <div className="header__container__titles">
                    <div className="header__container__titles__title">
                        <span data-text="Hello">Hello</span>
                    </div>
                    <div className="header__container__titles__secondtitle">
                        <span data-text="My name is Michał">My name is Michał</span>
                    </div>
                    <div className="header__container__titles__thirdtitle">
                        <div className="header__container__titles__thirdtitle__title">
                            FullStack Developer
                        </div>
                        <div className="header__container__titles__thirdtitle__technologies">
                            <span>Front End</span>
                            <span className="verticalline">|</span>
                            <span>Back End</span>
                        </div>
                        {/*<div className="header__container__titles__thirdtitle__myprojects">*/}
                        {/*    <button onClick={props.executeScrollProjects}>My projects</button>*/}
                        {/*</div>*/}
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Header
