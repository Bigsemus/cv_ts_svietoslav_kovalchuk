import React, {useContext} from 'react';
import presentations from "../../assets/icon/a-icon-presentations/Combined Shape.png";
import target from "../../assets/icon/a-icon-target/Combined Shape.png";
import resume from "../../assets/icon/a-icon-resume/Combined Shape.png";
import useTranslation from "../../Hooks/useTranslation";
import {ThemeContext} from "../../Context/contextTheme";
import classNames from "classnames/bind";
import useCursorPointerWithTheme from "../../Hooks/useCursorPointerWithTheme";

const IntroSection = () => {
    const { theme } = useContext(ThemeContext);
    const styleCursorPointer = useCursorPointerWithTheme();
    return (
        <section id="home" className="main__intro main-intro">
            <div className="wrapper">
                <h2 className="main__title">{useTranslation('home-section-intro.welcome')}</h2>
                <hr className="main__line" />
                <div className="main-intro__grid-markup grid-markup">
                    <div className="grid-markup__main-grid-block grid-markup__main-grid-block--left">
                        <h1 className="main__title-little">
                            {useTranslation('home-section-intro.welcome-to')}
                            <a href="mailto:Svietoslav.Kovalchuk@gmail.com"
                               className={classNames("logo-link logo-link--main", styleCursorPointer)}
                               style={{color: theme.linkColor}}
                            >
                                &nbsp;Svietoslav_Kovalchuk
                            </a>
                        </h1>
                        <p className="main-intro__sub-title main-intro__sub-title--first">
                            {useTranslation('home-section-intro.sub-title1')}
                            <a
                                className={classNames("main__link-text", styleCursorPointer)}
                                style={{color: theme.linkColor}}
                                target="_blank"
                                rel="noreferrer"
                                href="https://test-movie-shop.herokuapp.com"
                            >
                                &nbsp;Simple movie shop&nbsp;
                            </a>
                            {useTranslation('home-section-intro.sub-title2')}
                            {useTranslation('home-section-intro.sub-title3')}
                        </p>
                        <p className="main-intro__sub-title">
                            {useTranslation('home-section-intro.sub-title4')}
                        </p>
                    </div>
                    <div className="grid-markup__main-grid-block grid-markup__main-grid-block--right">
                        <div className="main-intro__slider-wrap">
                            <div className="main-intro__slider-title">Svietoslav Kovalchuk</div>
                        </div>
                    </div>
                    <div className="main-intro__footer-descriptions main-intro__footer-descriptions--what">
                        <h3 className="main-intro__footer-title">
                            <img
                                className="main-intro__footer-icon-title"
                                src={presentations}
                                alt="presentations-icon" />
                            {useTranslation('home-section-intro.main-intro__footer-title1')}
                        </h3>
                        <p className="main-intro__footer-sub-title">
                            {useTranslation('home-section-intro.main-intro__footer-sub-title1')}
                        </p>
                    </div>
                    <div className="main-intro__footer-descriptions main-intro__footer-descriptions--who">
                        <h3 className="main-intro__footer-title">
                            <img className="main-intro__footer-icon-title"
                                 src={target} alt="target-icon" />
                            {useTranslation('home-section-intro.main-intro__footer-title2')}
                        </h3>
                        <p className="main-intro__footer-sub-title">
                            {useTranslation('home-section-intro.main-intro__footer-sub-title2')}
                        </p>
                    </div>
                    <div className="main-intro__footer-descriptions main-intro__footer-descriptions--about">
                        <h3 className="main-intro__footer-title">
                            <img className="main-intro__footer-icon-title"
                                 src={resume} alt="resume-icon" />
                            {useTranslation('home-section-intro.main-intro__footer-title3')}
                        </h3>
                        <p className="main-intro__footer-sub-title">
                            {useTranslation('home-section-intro.main-intro__footer-sub-title3')}
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default IntroSection;