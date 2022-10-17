import React, {useContext, useEffect, useMemo, useState} from 'react';
import useTranslation from "../../Hooks/useTranslation";
import PEAKS_Dark from "../../assets/layoutGallery/PEAKS_Dark.png";
import CSS_methodologies from "../../assets/layoutGallery/CSS_methodologies.png";
import Health_care from "../../assets/layoutGallery/Health_care.png";
import Engineering_company from "../../assets/layoutGallery/Engineering_company.png";
import Company from "../../assets/layoutGallery/Company.png";
import Photographer from "../../assets/layoutGallery/Photographer.png";
import Krea from "../../assets/layoutGallery/Krea.png";
import Front_End from "../../assets/layoutGallery/Front_End.png";
import Black_White from "../../assets/layoutGallery/Black_White.png";
import {ThemeContext} from "../../Context/contextTheme";
import classNames from 'classnames/bind';
import classes from "./AboutRightContent.module.scss";
import useCursorPointerWithTheme from "../../Hooks/useCursorPointerWithTheme";

const AboutRightContent = () => {
    const { theme } = useContext(ThemeContext);
    const styleCursorPointer = useCursorPointerWithTheme();
    const cx = classNames.bind(classes);

    const valueStylesWithTheme = useMemo(() => {
        return {
            isLinkHover: false,
        };
    }, []);

    const [valueLink, setValueLink] = useState(valueStylesWithTheme);
    const link = cx('accordeonlink', {
        active: valueLink.isLinkHover,
    });

    useEffect(() => {
        setValueLink(
            theme.darkTheme === 'true'
                ? { ...valueStylesWithTheme, isLinkHover: true }
                : { ...valueStylesWithTheme, isLinkHover: false }
        )
    }, [theme, valueStylesWithTheme])
    return (
        <>
            <h3 className="main__title-little">
                {useTranslation('home-section-about.main__title-little3')}
            </h3>
            <div className="main-about__flickr flickr">
                <div className="flickr__item">
                    <a
                        className={classNames(styleCursorPointer)}
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://bigsemus.github.io/PEAKS-hiking-club_LAYOUT/"
                    >
                    <img src={PEAKS_Dark} alt="PEAKS_Dark" />
                    </a>
                </div>
                <div className="flickr__item">
                    <a
                        className={classNames(styleCursorPointer)}
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://bigsemus.github.io/Front-end-Lab_CSS-Methodologies/"
                    >
                    <img src={CSS_methodologies} alt="CSS_methodologies" />
                    </a>
                </div>
                <div className="flickr__item">
                    <a
                        className={classNames(styleCursorPointer)}
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://bigsemus.github.io/Health-Care_RESPONSIVE_Layout/"
                    >
                    <img src={Health_care} alt="Health_care" />
                    </a>
                </div>
                <div className="flickr__item">
                    <a
                        className={classNames(styleCursorPointer)}
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://bigsemus.github.io/Engineering-Company_LAYOUT/"
                    >
                    <img src={Engineering_company} alt="Epam_company" />
                    </a>
                </div>
                <div className="flickr__item">
                    <a
                        className={classNames(styleCursorPointer)}
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://bigsemus.github.io/Company_FLEXBOX_Layout/"
                    >
                    <img src={Company} alt="Company" />
                    </a>
                </div>
                <div className="flickr__item">
                    <a
                        className={classNames(styleCursorPointer)}
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://bigsemus.github.io/Photographer_Business-card_GRID_Layout/"
                    >
                    <img src={Photographer} alt="Photographer" />
                    </a>
                </div>
                <div className="flickr__item">
                    <a
                        className={classNames(styleCursorPointer)}
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://bigsemus.github.io/KREA-Company_BOOTSTRAP_Layout/"
                    >
                    <img src={Krea} alt="Krea" />
                    </a>
                </div>
                <div className="flickr__item">
                    <a
                        className={classNames(styleCursorPointer)}
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://bigsemus.github.io/Hello-Front-End_Layout/"
                    >
                    <img src={Front_End} alt="Front_End" />
                    </a>
                </div>
                <div className="flickr__item">
                    <a
                        className={classNames(styleCursorPointer)}
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://bigsemus.github.io/Black-and-White_LAYOUT/"
                    >
                    <img src={Black_White} alt="Black_White" />
                    </a>
                </div>

            </div>
            <h3 className="main__title-little">
                {useTranslation('home-section-about.main__title-little4')}
            </h3>
            <ul className="main-about__list-accordeon-links list-accordeon-links">
                <li className="list-accordeon-links__item">
                    <a
                        className={classNames(link, styleCursorPointer)}
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://github.com/Bigsemus/test-shop"
                    >
                        GitHab
                    </a>
                </li>
                <li className="list-accordeon-links__item">
                    <a
                        className={classNames(link, styleCursorPointer)}
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://test-movie-shop.herokuapp.com"
                    >
                        Simple movie shop
                    </a>
                </li>
                <li className="list-accordeon-links__item">
                    <a
                        className={classNames(link, styleCursorPointer)}
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://bigsemus.github.io/GAME_rock-scissors-paper_JS/"
                    >
                        Rock/Scissors/Paper_Fun
                    </a>
                </li>
                <li className="list-accordeon-links__item">
                    <a
                        className={classNames(link, styleCursorPointer)}
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://cv.djinni.co/c3/7e66cee0e801dbeb0dbbf3dfe89821/Svietoslav_Kovalchuk_React.pdf"
                    >
                        CV for print
                    </a>
                </li>
            </ul>
        </>
    );
};

export default AboutRightContent;